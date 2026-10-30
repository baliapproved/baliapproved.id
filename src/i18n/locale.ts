const localePaths = { en: '/', id: '/id', ja: '/ja', ko: '/ko', 'zh-CN': '/zh', ru: '/ru' } as const
export type Locale = keyof typeof localePaths
export const defaultLocale: Locale = 'en'
export const locales = Object.keys(localePaths) as Locale[]

export function localizedPaths(paths: readonly string[]): string[] {
  return paths.flatMap((path) => {
    const suffix = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`
    return Object.values(localePaths).map((prefix) =>
      prefix === '/' ? suffix || '/' : `${prefix}${suffix}`,
    )
  })
}

export function localeSegment(locale: Locale): string | undefined {
  return localePaths[locale].slice(1) || undefined
}

export function resolveLocale(segment: string | undefined): Locale | undefined {
  return locales.find((locale) => localePaths[locale] === (segment ? `/${segment}` : '/'))
}

export function localeFromPath(pathname: string): Locale {
  return resolveLocale(pathname.split('/')[1]) ?? defaultLocale
}

export function localizePath(pathname: string, locale: Locale): string {
  const clean = pathname.replace(/\/+$/, '') || '/'
  const firstSegment = clean.split('/')[1]
  const matchedLocale = firstSegment ? resolveLocale(firstSegment) : undefined
  const basePath =
    matchedLocale && matchedLocale !== defaultLocale
      ? clean.slice(localePaths[matchedLocale].length) || '/'
      : clean
  const prefix = localePaths[locale]
  if (prefix === '/') return basePath
  return basePath === '/' ? prefix : `${prefix}${basePath}`
}
