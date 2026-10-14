// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import { SITE } from "./site.config.mjs";

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  trailingSlash: "never",

  integrations: [SITE.indexable && sitemap(), react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
