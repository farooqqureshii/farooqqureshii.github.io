import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", ...defaultTheme.fontFamily.sans],
        mono: ["'Geist Mono'", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        // Flexoki color palette
        flexoki: {
          // Base colors
          bg: "#FFFCF0", // paper
          "bg-2": "#F2F0E5", // base-50
          ui: "#E6E4D9", // base-100
          "ui-2": "#DAD8CE", // base-150
          "ui-3": "#CECDC3", // base-200
          "tx-3": "#B7B5AC", // base-300
          "tx-2": "#6F6E69", // base-600
          tx: "#100F0F", // black
          // Accent colors (light theme)
          re: "#AF3029", // red-600
          or: "#BC5215", // orange-600
          ye: "#AD8301", // yellow-600
          gr: "#66800B", // green-600
          cy: "#24837B", // cyan-600
          bl: "#205EA6", // blue-600
          pu: "#5E409D", // purple-600
          ma: "#A02F6F", // magenta-600
        },
      },
    },
  },
  plugins: [],
};

export default config;
