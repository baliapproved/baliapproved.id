import type { AnyRouteMatch } from '@tanstack/react-router'
import { getIntlayer } from 'intlayer'
import type { Graph, Thing, WithContext } from 'schema-dts'

import type { Locale } from '@/i18n/locale'

import { buildAlternateUrls, SITE_URL, toCanonicalUrl } from './urls'

export { SITE_URL }
export const SITE_NAME = 'Bali Approved'
export const THEME_COLOR = '#e8e4e3'

const ogLocales: Record<Locale, string> = {
  en: 'en_US',
  id: 'id_ID',
  ja: 'ja_JP',
  ko: 'ko_KR',
  'zh-CN': 'zh_CN',
  ru: 'ru_RU',
}

type HeadMeta = NonNullable<AnyRouteMatch['meta']>[number]
type HeadLink = NonNullable<AnyRouteMatch['links']>[number]
type HeadScript = NonNullable<AnyRouteMatch['headScripts']>[number]

export interface PageSeoOptions {
  locale: Locale
  pathname: string
  title: string
  description?: string
  /** 1200x630 share image path or absolute URL. Defaults to `/og-image.png`. */
  image?: string
  imageAlt?: string
  /** Set false to emit `noindex` and omit canonical, hreflang, and `og:url`. */
  indexable?: boolean
  jsonLd?: WithContext<Thing> | Graph
}

/** Crops a Sanity asset URL to the standard 1200x630 social card aspect ratio. */
export function toSocialImageUrl(url: string): string {
  const socialUrl = new URL(url)
  socialUrl.searchParams.set('w', '1200')
  socialUrl.searchParams.set('h', '630')
  socialUrl.searchParams.set('fit', 'crop')
  return socialUrl.href
}

export function buildSiteJsonLd(locale: Locale): Graph {
  const homeUrl = toCanonicalUrl('/', locale)
  const organizationId = `${SITE_URL}/#organization`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: SITE_NAME,
        url: homeUrl,
        inLanguage: locale,
        publisher: { '@id': organizationId },
      },
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: SITE_NAME,
        url: SITE_URL,
        // The BA seal.
        logo: `${SITE_URL}/apple-touch-icon.png`,
        sameAs: ['https://www.instagram.com/bali.approved/'],
      },
    ],
  }
}

export function buildPageSeo({
  locale,
  pathname,
  title,
  description,
  image = '/og-image.png',
  imageAlt,
  indexable = true,
  jsonLd,
}: PageSeoOptions): { meta: HeadMeta[]; links: HeadLink[]; scripts: HeadScript[] } {
  const { seo } = getIntlayer('site', locale)
  const resolvedDescription = description ?? seo.description
  const resolvedImageAlt = imageAlt ?? seo.imageAlt
  const canonicalUrl = toCanonicalUrl(pathname, locale)
  const imageUrl = new URL(image, SITE_URL).href

  const meta: HeadMeta[] = [
    { title },
    { name: 'description', content: resolvedDescription },
    { name: 'robots', content: indexable ? 'max-image-preview:large' : 'noindex' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:locale', content: ogLocales[locale] },
    ...(indexable ? [{ property: 'og:url', content: canonicalUrl }] : []),
    { property: 'og:title', content: title },
    { property: 'og:description', content: resolvedDescription },
    { property: 'og:image', content: imageUrl },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: resolvedImageAlt },
    { name: 'twitter:card', content: 'summary_large_image' },
  ]

  const links: HeadLink[] = indexable
    ? [
        { rel: 'canonical', href: canonicalUrl },
        ...buildAlternateUrls(pathname).map(({ hreflang, href }) => ({
          rel: 'alternate',
          hrefLang: hreflang,
          href,
        })),
      ]
    : []

  const scripts: HeadScript[] = jsonLd
    ? [
        {
          type: 'application/ld+json',
          // Escape `<` so CMS strings containing `</script>` cannot break out of the tag.
          children: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        },
      ]
    : []

  return { meta, links, scripts }
}
