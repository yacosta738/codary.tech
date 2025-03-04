import { ACCESS_TOKEN, REFRESH_TOKEN } from "@configs";
import { supabase } from "@lib/supabase";
import type { APIRoute } from "astro";

export const GET: APIRoute = async (context) => {
	const { url, cookies, redirect } = context;
	const authCode = url.searchParams.get("code");

	if (!authCode) {
		return new Response("No code provided", { status: 400 });
	}

	const { data, error } = await supabase.auth.exchangeCodeForSession(authCode);

	if (error) {
		console.error("Auth callback error:", error.message);
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
