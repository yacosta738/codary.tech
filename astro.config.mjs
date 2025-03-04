import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import pagefind from "astro-pagefind";
// @ts-check
import { defineConfig, envField, passthroughImageService } from "astro/config";
import { BASE_URL } from "./src/base.config.ts";
import { remarkReadingTime } from "./src/utils/remark-reading-time.mjs";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: BASE_URL,
	compressHTML: true,
	output: "server",
	adapter: cloudflare(),
	prefetch: {
		prefetchAll: true,
		defaultStrategy: "viewport",
	},

	env: {
		schema: {
			AHREFS_KEY: envField.string({
				context: "client",
				access: "public",
			}),
			SUPABASE_URL: envField.string({
				context: "client",
				access: "public",
			}),
			SUPABASE_ANON_KEY: envField.string({
				context: "client",
				access: "public",
			}),
		},
	},

	image: {
		service: passthroughImageService(),
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**.unsplash.com",
			},
		],
	},

	integrations: [
		mdx(),
		sitemap(),
		pagefind(),
		partytown({
			config: {
				forward: ["dataLayer.push"],
				debug: false,
			},
		}),
		icon({
			include: {
				tabler: ["*"],
			},
		}),
	],

	vite: {
		plugins: [tailwindcss()],
	},

	markdown: {
		remarkPlugins: [remarkReadingTime],
	},
});
