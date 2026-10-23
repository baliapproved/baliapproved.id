// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import { site } from "./src/site/site.ts";

// https://astro.build/config
export default defineConfig({
  site: site.url,
  trailingSlash: "never",
  adapter: cloudflare({ imageService: "compile" }),
  session: false,
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
