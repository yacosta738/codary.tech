// @ts-check
import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./src/utils/remark-reading-time.mjs";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import pagefind from "astro-pagefind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    site: "https://codary.tech",
    trailingSlash: "always",
    prefetch: {
      prefetchAll: true,
      defaultStrategy: 'viewport',
    },
  
    image: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**.unsplash.com",
        },
      ],
    },
    integrations: [mdx(), sitemap(),  pagefind(), partytown({
        config: {
          forward: ["dataLayer.push"],
          debug: false,
        },
      }),
  
      icon({
        include: {
          tabler: ["*"],
        },
      })],
    vite: {
        plugins: [tailwindcss()],
    },
    markdown: {
        remarkPlugins: [remarkReadingTime],
    },
});