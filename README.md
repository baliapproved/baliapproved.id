# Bali Approved

Firsthand reviews of places around Bali.

## Cloudflare setup

Two zone settings live in the Cloudflare dashboard, not in `wrangler.jsonc`.
Turn on SSL/TLS → Edge Certificates → Always Use HTTPS, or the site is also
served over plain HTTP. Add a 301 redirect from `www` to the apex domain.

## Analytics

PostHog settings are baked in at build time. Set the project token and ingestion
host in Cloudflare's build environment, and in your local environment for
production builds, before deploying. Runtime Worker variables cannot change
analytics in a site that is already built.

## Instagram exports

The export scripts screenshot the `/ig` pages, which only exist on the dev
server, so start `pnpm dev` first. Playwright is not a project dependency; each
script expects a local Playwright and Chrome install, and its overrides are at
the top of the file.
