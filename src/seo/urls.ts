import { defaultLocale, locales, localizePath, type Locale } from '../i18n/locale.ts'

export const SITE_URL = 'https://baliapproved.id'

export function toCanonicalUrl(pathname: string, locale: Locale): string {
  return new URL(localizePath(pathname, locale), SITE_URL).href
}

export function buildAlternateUrls(pathname: string) {
  return [
    ...locales.map((locale) => ({
      hreflang: locale,
      href: toCanonicalUrl(pathname, locale),
    })),
    {
      hreflang: 'x-default',
      href: toCanonicalUrl(pathname, defaultLocale),
    },
  ]
}
