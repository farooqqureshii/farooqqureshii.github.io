// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { SITE_URL } from "./src/consts";

// https://astro.build/config
export default defineConfig({
  site: process.env.NODE_ENV === 'production' 
    ? 'https://farooqqureshi.com'  // Production domain
    : 'https://farooqqureshii.github.io', // GitHub Pages domain
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    shikiConfig: {
      themes: {
        light: "catppuccin-latte",
        dark: "catppuccin-mocha",
      },
    },
  },
  // No output: 'server', no adapter, static only
});
