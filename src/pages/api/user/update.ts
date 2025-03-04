import { supabase } from "@lib/supabase";
import type { APIRoute } from "astro";

export const POST: APIRoute = async (context) => {
	try {
		const { request } = context;
		// Verificar si el usuario está autenticado
		const {
			data: { user },
			error: authError,
		} = await supabase.auth.getUser();

		if (authError || !user) {
			return new Response(
				JSON.stringify({
					status: 401,
					error: "No estás autenticado",
				}),
				{ status: 401 },
			);
		}

		// Obtener los datos del formulario
		const formData = await request.formData();
		const name = formData.get("name") as string;
		const avatarFile = formData.get("avatar") as File;

		// Definir interfaz para actualizaciones
		interface ProfileUpdates {
			full_name?: string; // Cambiado de 'name' a 'full_name'
			avatar_url?: string;
		}

		// Objeto para almacenar actualizaciones
		const updates: ProfileUpdates = {};

		// Actualizar el nombre si se proporciona
		if (name?.trim()) {
			updates.full_name = name.trim(); // Cambiado de 'name' a 'full_name'
		}

		// Procesar la carga de avatar si se proporciona un archivo
		if (avatarFile && avatarFile.size > 0) {
			// Validar el tipo de archivo
			if (!["image/jpeg", "image/png", "image/gif"].includes(avatarFile.type)) {
				return new Response(
					JSON.stringify({
						status: 400,
						error: "El formato de imagen no es válido. Use JPG, PNG o GIF.",
					}),
					{ status: 400 },
				);
			}

			// Validar el tamaño del archivo (2MB máximo)
			if (avatarFile.size > 2 * 1024 * 1024) {
				return new Response(
					JSON.stringify({
						status: 400,
						error: "La imagen es demasiado grande. El tamaño máximo es 2MB.",
					}),
					{ status: 400 },
				);
			}

			// Subir el archivo al storage
			const fileExtension = avatarFile.name.split(".").pop();
			const fileName = `avatar-${user.id}-${Date.now()}.${fileExtension}`;

			const { error: uploadError } = await supabase.storage
				.from("avatars")
				.upload(fileName, avatarFile, {
					cacheControl: "3600",
					upsert: false,
				});

			if (uploadError) {
				return new Response(
					JSON.stringify({
						status: 500,
						error: `Error al subir la imagen: ${uploadError.message}`,
					}),
					{ status: 500 },
				);
			}

			// Obtener la URL pública del avatar
			const {
				data: { publicUrl },
			} = supabase.storage.from("avatars").getPublicUrl(fileName);

			// Agregar la URL al objeto de actualizaciones
			updates.avatar_url = publicUrl;
		}

		// Si no hay actualizaciones, retornar
		if (Object.keys(updates).length === 0) {
			return new Response(
				JSON.stringify({
					status: 400,
					error: "No se proporcionaron datos para actualizar",
				}),
				{ status: 400 },
			);
		}

		// Actualizar el perfil del usuario
		const { data, error: updateError } = await supabase
			.from("profiles")
			.update(updates)
			.eq("id", user.id)
			.select()
			.single();

		if (updateError) {
			return new Response(
				JSON.stringify({
					status: 500,
					error: `Error al actualizar el perfil: ${updateError.message}`,
				}),
				{ status: 500 },
			);
		}

		// Retornar respuesta exitosa con los datos actualizados
		return new Response(
			JSON.stringify({
				status: 200,
				message: "Perfil actualizado correctamente",
				user: {
					id: user.id,
					email: user.email,
					...data,
					// Asegurar la consistencia de los datos devueltos (mantener 'name' para retrocompatibilidad)
					name: data.full_name,
				},
			}),
			{ status: 200 },
		);
	} catch (error) {
		console.error("Error en la actualización del perfil:", error);

		return new Response(
			JSON.stringify({
				status: 500,
				error: "Error interno del servidor",
			}),
			{ status: 500 },
		);
	}
};
