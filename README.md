# Bali Approved

TanStack Start (SSG), React, Sanity, Intlayer, Tailwind CSS, shadcn/ui (Base UI), and Cloudflare Workers.

## Development

```bash
pnpm install
pnpm dev
```

Local development runs at `http://localhost:4321`.

## Architecture

- **Static generation**: `pnpm build` prerenders all localized pages and caches Sanity `place` queries into `dist/client` via `@tanstack/start-static-server-functions`.
- **Edge hosting & API**: Cloudflare Workers Static Assets (`wrangler.jsonc`) serves prerendered HTML, assets, and localized `404.html` directly from the edge. The Worker (`src/newsletter/worker.ts`) runs only on `/api/*` (`POST /api/subscribe` with rate limiting and Kit double opt-in).
- **Environment**: Copy `.env.example` to `.env.local` for local Kit credentials (`KIT_API_KEY`, `KIT_FORM_ID`; deployed as Cloudflare Worker secrets). Optional `VITE_POSTHOG_PROJECT_TOKEN` and `VITE_POSTHOG_HOST` are baked in at build time (leave the token empty to disable analytics).

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
