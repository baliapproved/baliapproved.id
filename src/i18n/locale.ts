export const locales = ['en', 'id', 'ja', 'ko', 'zh-CN'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'en'

export const languageNames: Record<Locale, string> = {
  en: 'English',
  id: 'Bahasa Indonesia',
  ja: '日本語',
  ko: '한국어',
  'zh-CN': '简体中文',
}

// The public URL stays /zh while translations and language tags use zh-CN.
export function getLocalePathPrefix(locale: Locale) {
  return locale === 'zh-CN' ? 'zh' : locale
}

export function isLocale(value: string | undefined): value is Locale {
  return locales.some((locale) => locale === value)
}

export function resolveLocale(value: string | undefined): Locale | undefined {
  if (isLocale(value)) return value
  if (value === 'ko-KR') return 'ko'
  if (value === 'zh' || value === 'zh-TW') return 'zh-CN'
  return undefined
}

export function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split('/')[1]
  return resolveLocale(segment) ?? defaultLocale
}

export function getLocalizedPathname(pathname: string, locale: Locale): string {
  const segments = pathname.split('/')
  if (resolveLocale(segments[1])) segments.splice(1, 1)
  const path = segments.join('/').replace(/\/+$/, '') || '/'
  return locale === defaultLocale
    ? path
    : `/${getLocalePathPrefix(locale)}${path === '/' ? '' : path}`
}
