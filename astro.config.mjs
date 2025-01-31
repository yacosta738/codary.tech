// @ts-check
import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./remark-reading-time.mjs";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://codary.tech",
    integrations: [mdx(), sitemap()],
    vite: {
        plugins: [tailwindcss()],
    },
    markdown: {
        remarkPlugins: [remarkReadingTime],
    },
});