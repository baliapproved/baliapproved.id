// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import { site } from "./src/config/site.ts";

// https://astro.build/config
export default defineConfig({
  site: site.url,
  trailingSlash: "never",

  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
