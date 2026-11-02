# Bali Approved

TanStack Start (SSG), React, Sanity, Intlayer, Tailwind CSS, shadcn/ui (Base UI), and Cloudflare Workers.

## Development

```bash
pnpm install
pnpm dev
```

Local development runs at `http://localhost:4321`.

## Architecture

- **Static generation**: `pnpm build` prerenders all localized pages into static HTML in `dist/client`.
- **Server functions**: The newsletter signup is a TanStack Start server function (`src/newsletter/subscribe.functions.ts`) that runs Kit double opt-in. `src/start.ts` adds TanStack Start's CSRF middleware to every server function.
- **Hosting**: Cloudflare is only the deployment layer via `@cloudflare/vite-plugin`. Workers Static Assets (`wrangler.jsonc`) serves prerendered HTML, assets, and localized `404.html`. Only `/_serverFn/*` requests reach the Worker. The app has no Cloudflare bindings or rate limiters.
- **Environment**: Copy `.env.example` to `.env.local` for local Kit credentials (`KIT_API_KEY`, read from `process.env` and deployed as a Worker secret). Optional `VITE_POSTHOG_PROJECT_TOKEN` and `VITE_POSTHOG_HOST` are baked in at build time (leave the token empty to disable analytics).

## Languages

URLs determine the locale across six supported languages:

| Language   | Locale  | Prefix |
| ---------- | ------- | ------ |
| English    | `en`    | `/`    |
| Indonesian | `id`    | `/id`  |
| Japanese   | `ja`    | `/ja`  |
| Korean     | `ko`    | `/ko`  |
| Chinese    | `zh-CN` | `/zh`  |
| Russian    | `ru`    | `/ru`  |

UI copy lives in each vertical's `*.content.ts` file (strict mode requires all six locales). Untranslated Sanity fields fall back to English with a matching `lang` attribute.

## Checks & Build

```bash
pnpm typecheck
pnpm lint
pnpm format:check
pnpm build
```
