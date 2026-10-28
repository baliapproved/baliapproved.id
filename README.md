# Bali Approved

TanStack Start, React, Tailwind CSS, shadcn/ui (Base UI), and Cloudflare Workers.

```bash
pnpm install
pnpm dev
```

Local development runs at http://localhost:4321.

## Languages

Intlayer serves the existing site in English, Indonesian, Japanese, and Taiwanese Traditional Chinese (`zh-TW`). URLs determine the language on both the server and client:

| Language                     | Home     | About          | Blog          |
| ---------------------------- | -------- | -------------- | ------------- |
| English                      | `/`      | `/about`       | `/blog`       |
| Indonesian                   | `/id`    | `/id/about`    | `/id/blog`    |
| Japanese                     | `/ja`    | `/ja/about`    | `/ja/blog`    |
| Traditional Chinese (Taiwan) | `/zh-TW` | `/zh-TW/about` | `/zh-TW/blog` |

The picker keeps the current page, query string, and hash. Language changes use document navigation so each selection starts with the correct server-rendered language. Regular page links use TanStack client navigation and retain the current locale. Browser preferences and cookies do not override a public URL. `/en/...` redirects permanently to the unprefixed English URL; unsupported prefixes return 404.

Translations live with the functionality that owns them. Each content declaration contains all four languages:

```text
intlayer.config.ts
src/
  hero/
    Hero.tsx
    hero.content.ts          # Hero copy, all languages
  site/
    Header.tsx
    site.content.ts          # Navigation and 404 copy, all languages
    site.ts                  # Existing site constants
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

Add copy to the owning `.content.ts` file with `t({ en: '...', id: '...', ja: '...', 'zh-TW': '...' })`. Components read typed content with `useIntlayer('hero')` or `useIntlayer('site')`; render the returned fields directly in JSX and use `.value` for string attributes such as `aria-label`.

Strict mode requires every supported language. Intlayer generates dictionary types and per-language chunks in the ignored `.intlayer/` directory. Development and builds regenerate them automatically; `pnpm typecheck` also regenerates them for a fresh checkout. Generated files are never edited or committed. Production loads the requested language's chunks.

The document head retains the template defaults. SEO work, page-specific metadata, and Places content are deferred. About and Blog remain placeholders.

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
