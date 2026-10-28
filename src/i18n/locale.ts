export const locales = ['en', 'id', 'ja', 'zh-TW'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'en'

export const languageNames: Record<Locale, string> = {
  en: 'English',
  id: 'Bahasa Indonesia',
  ja: '日本語',
  'zh-TW': '繁體中文（台灣）',
}

export function isLocale(value: string | undefined): value is Locale {
  return locales.some((locale) => locale === value)
}

export function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split('/')[1]
  return isLocale(segment) ? segment : defaultLocale
}

export function getLocalizedPathname(pathname: string, locale: Locale): string {
  const segments = pathname.split('/')
  if (isLocale(segments[1])) segments.splice(1, 1)
  const path = segments.join('/').replace(/\/+$/, '') || '/'
  return locale === defaultLocale ? path : `/${locale}${path === '/' ? '' : path}`
}
