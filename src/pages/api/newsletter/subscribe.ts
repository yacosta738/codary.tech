import { BASE_URL } from "@configs";
import { supabase } from "@lib/supabase";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
	try {
		const { email } = await request.json();

		if (!email) {
			return new Response(JSON.stringify({ error: "Email is required" }), {
				status: 400,
			});
		}

		// Check if email already exists
		const { data: existingSubscriber } = await supabase
			.from("newsletter_subscriptions")
			.select("id")
			.eq("email", email)
			.single();

		if (existingSubscriber) {
			return new Response(
				JSON.stringify({ error: "Email already subscribed" }),
				{ status: 400 },
			);
		}

		//Sign in a user with a magic link
		const { data, error } = await supabase.auth.signInWithOtp({
			email: email,
			options: {
				emailRedirectTo: BASE_URL,
			},
		});

		if (error) {
			throw error;
		}

		// The OTP sign-in doesn't return user data immediately, it only sends the email
		// We need to create a user ID another way or handle this differently
		const userId = crypto.randomUUID(); // Generate a unique ID for this subscription

		// Insert new subscriber
		const { error: subscriptionError } = await supabase
			.from("newsletter_subscriptions")
			.insert([{ email, user_id: userId }]);

		if (subscriptionError) {
			throw subscriptionError;
		}

		return new Response(
			JSON.stringify({ message: "Successfully subscribed to newsletter" }),
			{ status: 200 },
		);
	} catch (error) {
		console.error("Newsletter subscription error:", error);
		return new Response(
			JSON.stringify({ error: "Failed to subscribe to newsletter" }),
			{ status: 500 },
		);
	}
};
