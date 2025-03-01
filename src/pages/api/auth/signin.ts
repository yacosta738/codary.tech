import { ACCESS_TOKEN, BASE_URL, REFRESH_TOKEN } from "@configs";
import type { Provider } from "@supabase/supabase-js";
import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
	const formData = await request.formData();
	const email = formData.get("email")?.toString();
	const password = formData.get("password")?.toString();
	const provider = formData.get("provider")?.toString();

	if (provider) {
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: provider as Provider,
			options: {
				redirectTo: `${BASE_URL}/api/auth/callback`,
			},
		});

		if (error) {
			return new Response(error.message, { status: 500 });
		}

		return redirect(data.url);
	}

	if (!email || !password) {
		return new Response("Email and password are required", { status: 400 });
	}

	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	if (error) {
		return new Response(error.message, { status: 500 });
	}

	const { access_token, refresh_token } = data.session;
	cookies.set(ACCESS_TOKEN, access_token, {
		sameSite: "strict",
		path: "/",
		secure: true,
	});
	cookies.set(REFRESH_TOKEN, refresh_token, {
		sameSite: "strict",
		path: "/",
		secure: true,
	});

	return redirect("/");
};
