import type { Locale } from '@/i18n/locale'

import type { Place } from './places.schema'

export function formatSpending(spending: NonNullable<Place['spending']>, locale: Locale) {
  const format = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'IDR',
    currencyDisplay: 'narrowSymbol',
    notation: 'compact',
    maximumFractionDigits: 0,
  })
  if (spending.min === undefined) return format.format(spending.max)
  // Compact ranges such as "Rp 30–60K". formatRange is newer than the ES2022 lib target.
  const ranged = format as Intl.NumberFormat & { formatRange: (min: number, max: number) => string }
  return ranged.formatRange(spending.min, spending.max)
}
