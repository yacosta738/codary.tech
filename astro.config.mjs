import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import pagefind from "astro-pagefind";
// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import { remarkReadingTime } from "./src/utils/remark-reading-time.mjs";

import fs from "node:fs";
import opengraphImages, { presets } from "astro-opengraph-images";

// https://astro.build/config
export default defineConfig({
	site: "https://codary.tech",
	prefetch: {
		prefetchAll: true,
		defaultStrategy: "viewport",
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
		opengraphImages({
			options: {
				fonts: [
					{
						name: "Roboto",
						weight: 400,
						style: "normal",
						data: fs.readFileSync(
							"node_modules/@fontsource/roboto/files/roboto-latin-400-normal.woff",
						),
					},
				],
			},
			render: presets.blackAndWhite,
		}),
	],
	vite: {
		plugins: [tailwindcss()],
		build: {
			assetsDir: "assets",
			modulePreload: {
				polyfill: true,
			},
		},
	},
	markdown: {
		remarkPlugins: [remarkReadingTime],
	},
});
