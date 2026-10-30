import type { AnyRouteMatch } from '@tanstack/react-router'
import { getIntlayer } from 'intlayer'

import type { Locale } from '@/i18n/locale'
import { buildPageSeo, SITE_NAME } from '@/seo/seo'

export function notFoundMeta(locale: Locale, pathname = '/404') {
  const { title, description } = getIntlayer('not-found', locale)
  return buildPageSeo({
    locale,
    pathname,
    title: `${title} | ${SITE_NAME}`,
    description,
    indexable: false,
  }).meta
}

export function getNotFoundMetadata(
  matches: readonly AnyRouteMatch[],
  locale: Locale,
  pathname: string,
) {
  if (!matches.some((match) => match.status === 'notFound' || match._notFound)) return
  return notFoundMeta(locale, pathname)
}
