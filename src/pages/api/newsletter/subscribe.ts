import { BASE_URL } from "@configs";
import { supabase } from "@lib/supabase";
import type { APIRoute } from "astro";

export const POST: APIRoute = async (context) => {
	try {
		const { request } = context;
		let email: string;
		let isFormSubmission = false;
		let redirectUrl: string | null = null;

		// Get content type to determine how to parse the request
		const contentType = request.headers.get("content-type") || "";

		// Handle form submissions
		if (contentType.includes("application/x-www-form-urlencoded")) {
			isFormSubmission = true;
			const formData = await request.formData();
			email = formData.get("email") as string;
			redirectUrl = (formData.get("redirect") as string) || "/newsletter";
		}
		// Handle JSON API requests
		else {
			const body = await request.json();
			email = body.email;
			redirectUrl = body.redirect || null;
		}

		if (!email) {
			return new Response(
				JSON.stringify({
					success: false,
					error: "Email is required",
				}),
				{
					status: 400,
					headers: { "Content-Type": "application/json" },
				},
			);
		}

		// Check if email already exists
		const { data: existingSubscriber } = await supabase
			.from("newsletter_subscriptions")
			.select("id")
			.eq("email", email)
			.single();

		if (existingSubscriber) {
			return new Response(
				JSON.stringify({
					success: false,
					error: "Email already subscribed",
				}),
				{
					status: 400,
					headers: { "Content-Type": "application/json" },
				},
			);
		}

		//Sign in a user with a magic link
		const { error } = await supabase.auth.signInWithOtp({
			email: email,
			options: {
				emailRedirectTo: `${BASE_URL}/api/auth/callback`,
			},
		});

		if (error) {
			throw error;
		}

		return new Response(
			JSON.stringify({
				success: true,
				message: "Successfully subscribed to newsletter",
			}),
			{
				status: 200,
				headers: { "Content-Type": "application/json" },
			},
		);
	} catch (error) {
		console.error("Newsletter subscription error:", error);

		return new Response(
			JSON.stringify({
				success: false,
				error: "Failed to subscribe to newsletter",
			}),
			{
				status: 500,
				headers: { "Content-Type": "application/json" },
			},
		);
	}
};
