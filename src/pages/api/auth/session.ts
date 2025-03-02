import { ACCESS_TOKEN, REFRESH_TOKEN } from "@configs";
import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
	try {
		const { access_token, refresh_token, token_type } = await request.json();

		if (!access_token || !refresh_token) {
			return new Response(JSON.stringify({ error: "Unauthorized" }), {
				status: 401,
				headers: { "Content-Type": "application/json" },
			});
		}

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

		const { data, error } = await supabase.auth.setSession({
			access_token,
			refresh_token,
		});

		if (error) {
			return new Response(JSON.stringify({ error: "Invalid session" }), {
				status: 401,
				headers: { "Content-Type": "application/json" },
			});
		}

		return new Response(
			JSON.stringify({
				session: true,
				user: data.user,
			}),
			{ status: 200 },
		);
	} catch (error) {
		console.error("Auth session error:", error);
		return new Response(JSON.stringify({ error: "Internal server error" }), {
			status: 500,
		});
	}
};
