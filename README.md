# Bali Approved

TanStack Start, React, Tailwind CSS, shadcn/ui (Base UI), and Cloudflare Workers.

```bash
pnpm install
pnpm dev
```

Local development runs at http://localhost:4321.

## Migration scope

Use Astro's `main` branch as a reference for intended content and behavior. Adapt each feature to this branch's TanStack Start architecture rather than copying its implementation unchanged.

The following are intentionally excluded from the migration:

- The closing About-page brand block (Bali Approved logo and “Powered by shorj.com” link).
- Hiding the footer newsletter signup on the subscription confirmation page. Keep the signup visible there.

Deferred migration work:

- Use each place’s existing localized description as its page meta description. The route loader already provides the data; place pages currently inherit the generic site description.

## Languages

Intlayer serves the existing site in English, Indonesian, Japanese, Korean, and Chinese. URLs determine the language on both the server and client:

| Language   | Home  | About       | Blog       |
| ---------- | ----- | ----------- | ---------- |
| English    | `/`   | `/about`    | `/blog`    |
| Indonesian | `/id` | `/id/about` | `/id/blog` |
| Japanese   | `/ja` | `/ja/about` | `/ja/blog` |
| Korean     | `/ko` | `/ko/about` | `/ko/blog` |
| Chinese    | `/zh` | `/zh/about` | `/zh/blog` |

The picker keeps the current page, query string, and hash. Language changes use document navigation so each selection starts with the correct server-rendered language. Regular page links use TanStack client navigation and retain the current locale. Browser preferences and cookies do not override a public URL. `/en/...` redirects permanently to the unprefixed English URL. The previous `/ko-KR/...` and `/zh-TW/...` URLs redirect permanently to `/ko/...` and `/zh/...`, keeping the page, query string, and hash. Unsupported prefixes return 404.

Chinese uses Simplified Chinese with the `zh-CN` locale, dictionary keys, and document and picker language tags. Its public URL prefix stays `/zh`; `/zh-CN/...` also redirects permanently to `/zh/...`. Korean uses `/ko`.

Translations live with the functionality that owns them. Each content declaration contains all five languages:

```text
intlayer.config.ts
src/
  hero/
    Hero.tsx
    hero.content.ts          # Hero copy, all languages
  site/
    Header.tsx
    site.content.ts          # Metadata and navigation copy, all languages
    site.ts                  # Existing site constants
  not-found/
    not-found.tsx
    not-found.content.ts     # 404 copy, all languages
  i18n/
    locale.ts                # Supported locales and URL behavior
    LocaleSwitcher.tsx
  routes/
    __root.tsx               # Document shell, locale, and translation provider
    {-$locale}/
      route.tsx              # Validate optional locale; canonicalize English URLs
      index.tsx
      about.tsx
      blog.tsx
```

Add copy to the owning `.content.ts` file with `t({ en: '...', id: '...', ja: '...', ko: '...', 'zh-CN': '...' })`. Components read typed content with `useIntlayer('hero')` or `useIntlayer('site')`; render the returned fields directly in JSX and use `.value` for string attributes such as `aria-label`.

Strict mode requires every supported language. Intlayer generates dictionary types and per-language chunks in the ignored `.intlayer/` directory. Development and builds regenerate them automatically; `pnpm typecheck` also regenerates them for a fresh checkout. Generated files are never edited or committed. Production loads the requested language's chunks.

The document head uses the localized Bali Approved title and description from `src/site/site.content.ts`, selected by the URL's language, with the existing favicon from `main` and a branded manifest. Shared site constants remain in `src/site/site.ts`. Page-specific metadata and Places content are deferred. About and Blog remain placeholders.

## Place visit status

A place keeps the same fields when it has not been visited. Omitted visit data uses an empty default: `visitedAt`, `gallery`, and `seating` are `[]`, and review text is `''`. The detail page then shows the translated “Not visited yet” notice and skips the gallery and findings. The catalog card keeps the usual preview row, using the cutout when the gallery is empty. Unvisited places sort after visited places and stay off the About page’s visited-places map. Bread Yard in Seminyak is the first unvisited listing migrated from `main`.

## Analytics

PostHog loads in the browser through `PostHogProvider`. Pageviews follow route changes and carry the page language as `locale`.

Settings are baked in at build time. Copy `.env.example` to `.env.local` for development, or set `VITE_POSTHOG_PROJECT_TOKEN` and `VITE_POSTHOG_HOST` in Cloudflare's build environment for production. Leave the token empty to disable analytics. Runtime Worker variables cannot change analytics in a site that is already built.

## Checks and builds

```bash
pnpm typecheck
pnpm lint
pnpm format:check
pnpm build
pnpm build:staging
```

## UI components

Reusable UI belongs in `src/design-system/`. Feature components and translations stay in their owning verticals.

```tsx
import { Button } from '@/design-system/button'
```
