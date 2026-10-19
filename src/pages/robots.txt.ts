import type { APIRoute } from "astro";

import { site } from "@/site/site";

// Static either way; keeps robots.txt prerendered if the site moves to server rendering.
export const prerender = true;

export const GET: APIRoute = () => {
  const sitemap = new URL("sitemap-index.xml", site.url).href;
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
