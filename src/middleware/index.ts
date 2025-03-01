import { defineMiddleware } from "astro:middleware";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@consts";
import micromatch from "micromatch";
import { supabase } from "../lib/supabase";

declare global {
	namespace App {
		interface Locals {
			email: string;
		}
	}
}

const protectedRoutes = ["/account(|/)"];
const redirectRoutes = ["/signin(|/)", "/register(|/)"];
const protectedAPIRoutes = ["/api/guestbook(|/)"];

export const onRequest = defineMiddleware(
	async ({ locals, url, cookies, redirect }, next) => {
		if (micromatch.isMatch(url.pathname, protectedRoutes)) {
			const accessToken = cookies.get(ACCESS_TOKEN);
			const refreshToken = cookies.get(REFRESH_TOKEN);

			if (!accessToken || !refreshToken) {
				return redirect("/signin");
			}

			const { data, error } = await supabase.auth.setSession({
				refresh_token: refreshToken.value,
				access_token: accessToken.value,
			});

			if (error) {
				cookies.delete(ACCESS_TOKEN, {
					path: "/",
				});
				cookies.delete(REFRESH_TOKEN, {
					path: "/",
				});
				return redirect("/signin");
			}

			locals.email = data.user?.email ?? "";
			cookies.set(ACCESS_TOKEN, data?.session?.access_token ?? "", {
				sameSite: "strict",
				path: "/",
				secure: true,
			});
			cookies.set(REFRESH_TOKEN, data?.session?.refresh_token ?? "", {
				sameSite: "strict",
				path: "/",
				secure: true,
			});
		}

		if (micromatch.isMatch(url.pathname, redirectRoutes)) {
			const accessToken = cookies.get(ACCESS_TOKEN);
			const refreshToken = cookies.get(REFRESH_TOKEN);

			if (accessToken && refreshToken) {
				return redirect("/dashboard");
			}
		}

		if (micromatch.isMatch(url.pathname, protectedAPIRoutes)) {
			const accessToken = cookies.get(ACCESS_TOKEN);
			const refreshToken = cookies.get(REFRESH_TOKEN);

			// Check for tokens
			if (!accessToken || !refreshToken) {
				return new Response(
					JSON.stringify({
						error: "Unauthorized",
					}),
					{ status: 401 },
				);
			}

			// Verify the tokens
			const { error } = await supabase.auth.setSession({
				access_token: accessToken.value,
				refresh_token: refreshToken.value,
			});

			if (error) {
				return new Response(
					JSON.stringify({
						error: "Unauthorized",
					}),
					{ status: 401 },
				);
			}
		}

		return next();
	},
);
