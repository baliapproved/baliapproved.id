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
- The old underscore place URLs. `/places/starbucks_dewata`, `/places/chagee_discovery_mall`, `/places/seniman_coffee_renon`, `/places/ubud_backpacker_hostel`, `/places/st_ali_coffee`, and `/places/tulus_coliving` stay 404s, including their trailing-slash variants. `main` redirected them.

Deferred migration work:

- Place meta description. Use the localized review when it exists, and the about text when the review is empty. The loader already has both. Place pages currently inherit the generic site description.
- Share head. Add a canonical URL, Open Graph tags, and a Twitter card. The default share image is `og-image.png` from `main`. A place-specific description and cover image stay with the meta description item.
- Place JSON-LD. Emit one schema.org object per place, using café, restaurant, stay, or club, with the address, map pin, and review. The page loader currently drops `postalCode` and `coordinates`.
- Place click tracking. Record Instagram, Threads, TikTok, website, WhatsApp, phone, and maps from the place page. The action list currently has only Instagram and WhatsApp. The footer, About page, and newsletter already send `website_action`.
- Homepage JSON-LD. Emit a `WebSite` and an `Organization` on the home page. The organization logo is `apple-touch-icon.png` from `main`, which is not in this branch yet.
- Sitemap. Serve one `GET /sitemap.xml` route. No sitemap library and no `sitemap-index.xml`. List `/`, `/about`, `/blog`, and `/places/<slug>` for ``, `/id`, `/ja`, `/ko`, and `/zh`. Exclude `/newsletter/subscribed` and the redirect prefixes `/en`, `/ko-KR`, `/zh-TW`, and `/zh-CN`. Point `robots.txt` at `https://baliapproved.id/sitemap.xml`. No `lastmod`, `changefreq`, or priority.
- Low priority: responsive images. Skip a resized `srcset` pipeline. The median gallery photo is already 98KB. Recompress the outliers if the weight matters: 16 gallery photos are over 500KB, Volken reaches 8MB, and cutouts are a median 428KB at 1254px for a card a few hundred pixels wide.
- Response headers. Send `Strict-Transport-Security: max-age=31536000` with no `includeSubDomains`, and `X-Content-Type-Options: nosniff`, on every response. Fingerprinted files under `/assets/` also send `Cache-Control: public, max-age=31536000, immutable`. `main` set these in `public/_headers`. That file does not cover Worker HTML, and the Worker-side approach is still open.

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

The document head uses the localized Bali Approved title and description from `src/site/site.content.ts`, selected by the URL's language, with the existing favicon from `main` and a branded manifest. Shared site constants remain in `src/site/site.ts`. Page-specific metadata that is still open is listed under Deferred migration work.

## Place visit status

A place keeps the same listing fields when it has not been visited. Omitted visit data uses an empty default: `visitedAt` and `gallery` are `[]`, and review text is `''`. Café findings and stay findings are separate schemas. They share wifi, cooling, noise, and parking. The detail page then shows the translated “Not visited yet” notice and skips the gallery and findings when `visitedAt` is empty. The catalog card keeps the usual preview row, using the cutout when the gallery is empty. Unvisited places sort after visited places and stay off the About page’s visited-places map. Bread Yard in Seminyak, Iris Cafe Bali in Kuta, Maha Matcha in Canggu, Pahdi Specialty Coffee in Kintamani, Sensa Koffie in Kuta, and Twenty Milli Coffee and Roastery in Denpasar are the unvisited listings migrated from `main`. Tulus Coliving in Kuta and Ubud Backpacker Hostel in Ubud are the stays.

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
