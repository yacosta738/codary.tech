// @ts-check
import { defineConfig } from "astro/config";
import { remarkReadingTime } from './remark-reading-time.mjs';

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  vite: {
      plugins: [tailwindcss()],
	},
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
