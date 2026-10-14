# Bali Approved

Firsthand reviews of places around Bali. Built with Astro, React, and Tailwind
CSS.

## Development

Use the Node version in `.node-version` and the pnpm version in `package.json`.

```sh
pnpm install
pnpm dev --background
```

The dev server runs at `http://localhost:4321`. Manage it with
`pnpm astro dev status`, `pnpm astro dev logs`, and `pnpm astro dev stop`.

## Commands

| Command             | Purpose                              |
| ------------------- | ------------------------------------ |
| `pnpm typecheck`    | Check Astro and TypeScript           |
| `pnpm lint`         | Run ESLint                           |
| `pnpm format`       | Format files with Prettier           |
| `pnpm format:check` | Check formatting without writing     |
| `pnpm build`        | Build the static site into `dist/`   |
| `pnpm preview`      | Preview the production build locally |

## Project layout

- `src/pages/`: routes.
- `src/data/places/`: one folder per reviewed place, loaded by `src/content.config.ts`.
- `src/components/`: shared components.
- `src/styles/global.css`: global styles and theme tokens.
- `site.config.mjs`: site name, URL, and SEO defaults.
- `scripts/`: Instagram cover and highlight exports, run against the dev server.
- `public/`: assets served directly.
- `wrangler.jsonc`: Cloudflare configuration for serving `dist/`.

## Analytics

Configure the PostHog project token and ingestion host in both the local
production build environment and Cloudflare's build environment before
deploying. See `.env.example`. The site is static, so runtime variables cannot
change analytics in an existing build. Leave the token empty during local
development.

See `AGENTS.md` for dependency and development rules.
