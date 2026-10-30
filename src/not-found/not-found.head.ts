import type { AnyRouteMatch } from '@tanstack/react-router'
import { getIntlayerAsync } from 'intlayer'

import type { Locale } from '@/i18n/locale'
import { site } from '@/site/site'

export async function getNotFoundTitle(matches: readonly AnyRouteMatch[], locale: Locale) {
  if (!matches.some((match) => match.status === 'notFound' || match._notFound)) return

  const { title } = await getIntlayerAsync('not-found', locale)
  return `${title} | ${site.name}`
}
