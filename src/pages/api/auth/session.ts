import { ACCESS_TOKEN, REFRESH_TOKEN } from "@configs";
import { supabase } from "@lib/supabase";
import type { APIRoute } from "astro";

export const POST: APIRoute = async (context) => {
	try {
		const { request, cookies } = context;
		const { access_token, refresh_token } = await request.json();

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
			expires: new Date(Date.now() + 1000 * 60 * 60 * 24), // 24 hours
			httpOnly: !!import.meta.env.PROD,
		});

		cookies.set(REFRESH_TOKEN, refresh_token, {
			sameSite: "strict",
			path: "/",
			secure: true,
			expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30), // 30 days
			httpOnly: import.meta.env.PROD,
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

export const GET: APIRoute = async (_) => {
	try {
		const { data, error } = await supabase.auth.getSession();

		if (error) {
			return new Response(JSON.stringify({ error: "Invalid session" }), {
				status: 401,
				headers: { "Content-Type": "application/json" },
			});
		}

		return new Response(
			JSON.stringify({
				session: data.session,
			}),
			{
				status: 200,
				headers: { "Content-Type": "application/json" },
			},
		);
	} catch (error) {
		console.error("Auth session error:", error);
		return new Response(JSON.stringify({ error: "Internal server error" }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
};
