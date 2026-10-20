// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import { site } from "./src/site/site.ts";

// https://astro.build/config
export default defineConfig({
  site: site.url,
  trailingSlash: "never",
  integrations: [
    react(),
    sitemap({
      filter: (page) =>
        !page.startsWith(`${site.url}/archived/`) &&
        !["/archived", "/blog", "/about"].some(
          (path) => page === `${site.url}${path}`,
        ),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
