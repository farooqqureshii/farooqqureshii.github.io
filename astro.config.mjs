// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: process.env.NODE_ENV === 'production' 
    ? 'https://farooqqureshi.com'  // Production domain
    : 'https://farooqqureshii.github.io', // GitHub Pages domain
  output: 'server',
  adapter: vercel(),
  integrations: [mdx(), sitemap(), tailwind()],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },
  compressHTML: true,
  markdown: {
    shikiConfig: {
      themes: {
        light: "catppuccin-latte",
        dark: "catppuccin-mocha",
      },
    },
  },
});