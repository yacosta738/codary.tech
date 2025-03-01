// With `output: 'static'` configured:
// export const prerender = false;
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@consts";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ cookies, redirect }) => {
	cookies.delete(ACCESS_TOKEN, { path: "/" });
	cookies.delete(REFRESH_TOKEN, { path: "/" });
	return redirect("/signin");
};
