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

## Newsletter setup

Account setup, the trial decision, and sender-name/timezone click paths are
archived in [closed issue #3](https://github.com/baliapproved/baliapproved.id/issues/3).
Sending-domain verification, Cloudflare forwarding, and the confirmed/default
newsletter sender are archived in [closed issue #4](https://github.com/baliapproved/baliapproved.id/issues/4).
The published signup form and its confirmation-setting click paths are archived
in [closed issue #5](https://github.com/baliapproved/baliapproved.id/issues/5).
API key setup is archived in [closed issue #6](https://github.com/baliapproved/baliapproved.id/issues/6).
The owner keeps the actual key in their password manager.
Account-level confirmation, duplicate, recovery, and suppression probe results
are archived in [closed issue #7](https://github.com/baliapproved/baliapproved.id/issues/7).
The adapter's build-time image and disabled-session settings are documented in
[closed issue #8](https://github.com/baliapproved/baliapproved.id/issues/8).
Runtime type generation, routing verification, and reproduction steps are archived
in [closed issue #9](https://github.com/baliapproved/baliapproved.id/issues/9).
The server-side Kit signup flow and its live lifecycle checks are archived in
[closed issue #10](https://github.com/baliapproved/baliapproved.id/issues/10).
The protected signup endpoint, its Cloudflare checks, and the deferred rate-limit
and Kit-latency findings are archived in
[closed issue #11](https://github.com/baliapproved/baliapproved.id/issues/11).
Kit call timings from Cloudflare locations, and why the endpoint keeps waiting
for Kit, are archived in
[closed issue #12](https://github.com/baliapproved/baliapproved.id/issues/12).

Build before previewing or deploying so Wrangler can use Astro's generated
deployment configuration. The adapter keeps a release static until a request-time
route is added, then generates the server configuration for that build.

The Kit API key in `.env.local` is not uploaded with a Git push. The signup
endpoint reads `KIT_API_KEY` at request time, so it must be a runtime Secret, not
a Build variable like PostHog's. The dashboard only accepts runtime secrets once
the production Worker has server code; before that, add it to an uploaded
preview version with `pnpm exec wrangler versions secret put KIT_API_KEY`, which
does not deploy. Later versions keep it. Keep the local key out of `.dev.vars`:
when that file exists, Wrangler ignores `.env` files.

## Instagram exports

The export scripts screenshot the `/ig` pages, which only exist on the dev
server, so start `pnpm dev` first. Playwright is not a project dependency; each
script expects a local Playwright and Chrome install, and its overrides are at
the top of the file.
