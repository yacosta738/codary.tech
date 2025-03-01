import { ACCESS_TOKEN, REFRESH_TOKEN } from "@configs";
import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

// GET: Fetch user profile data
export const GET: APIRoute = async ({ request, cookies }) => {
	// Get access token from cookies
	const accessToken = cookies.get(ACCESS_TOKEN)?.value;
	const refreshToken = cookies.get(REFRESH_TOKEN)?.value;

	if (!accessToken || !refreshToken) {
		return new Response(JSON.stringify({ error: "Unauthorized" }), {
			status: 401,
			headers: { "Content-Type": "application/json" },
		});
	}

	// Set the session in supabase
	const { error: sessionError } = await supabase.auth.setSession({
		access_token: accessToken,
		refresh_token: refreshToken,
	});

	if (sessionError) {
		return new Response(JSON.stringify({ error: "Invalid session" }), {
			status: 401,
			headers: { "Content-Type": "application/json" },
		});
	}

	// Get user
	const {
		data: { user },
		error: userError,
	} = await supabase.auth.getUser();

	if (userError || !user) {
		return new Response(JSON.stringify({ error: "User not found" }), {
			status: 404,
			headers: { "Content-Type": "application/json" },
		});
	}

	// Fetch profile data from profiles table
	const { data: profile, error: profileError } = await supabase
		.from("profiles")
		.select("*")
		.eq("id", user.id)
		.single();

	if (profileError) {
		return new Response(JSON.stringify({ error: "Profile not found" }), {
			status: 404,
			headers: { "Content-Type": "application/json" },
		});
	}

	// Combine user and profile data, ensure name field exists for backward compatibility
	const userData = {
		id: user.id,
		email: user.email,
		...profile,
		// Garantizar que name existe para compatibilidad
		name: profile.full_name,
	};

	return new Response(JSON.stringify({ user: userData }), {
		status: 200,
		headers: { "Content-Type": "application/json" },
	});
};

// PUT: Update user profile data
export const PUT: APIRoute = async ({ request, cookies }) => {
	// Get access token from cookies
	const accessToken = cookies.get(ACCESS_TOKEN)?.value;
	const refreshToken = cookies.get(REFRESH_TOKEN)?.value;

	if (!accessToken || !refreshToken) {
		return new Response(JSON.stringify({ error: "Unauthorized" }), {
			status: 401,
			headers: { "Content-Type": "application/json" },
		});
	}

	// Set the session in supabase
	const { error: sessionError } = await supabase.auth.setSession({
		access_token: accessToken,
		refresh_token: refreshToken,
	});

	if (sessionError) {
		return new Response(JSON.stringify({ error: "Invalid session" }), {
			status: 401,
			headers: { "Content-Type": "application/json" },
		});
	}

	// Get user
	const {
		data: { user },
		error: userError,
	} = await supabase.auth.getUser();

	if (userError || !user) {
		return new Response(JSON.stringify({ error: "User not found" }), {
			status: 404,
			headers: { "Content-Type": "application/json" },
		});
	}

	try {
		// Parse the request body
		const profileData = await request.json();

		// Update the profile in the database
		const { data: updatedProfile, error: updateError } = await supabase
			.from("profiles")
			.update({
				full_name: profileData.full_name,
				username: profileData.username,
				avatar_url: profileData.avatar_url,
				website: profileData.website,
				// Remove bio as it's not in the schema
				updated_at: new Date().toISOString(),
			})
			.eq("id", user.id)
			.select()
			.single();

		if (updateError) {
			return new Response(JSON.stringify({ error: updateError.message }), {
				status: 400,
				headers: { "Content-Type": "application/json" },
			});
		}

		return new Response(JSON.stringify({ profile: updatedProfile }), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: "Invalid request body" }), {
			status: 400,
			headers: { "Content-Type": "application/json" },
		});
	}
};
