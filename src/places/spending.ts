import type { Places } from './places.schema'

export function formatSpending(spending: Places[number]['spending'], locale: string) {
  if (!spending) return undefined
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'IDR',
    currencyDisplay: 'narrowSymbol',
    notation: 'compact',
    maximumFractionDigits: 0,
  })
  if (spending.min != null && spending.max != null) {
    const rangeFormatter = formatter as Intl.NumberFormat & {
      formatRange?: (start: number, end: number) => string
    }
    return (
      rangeFormatter.formatRange?.(spending.min, spending.max) ??
      `${formatter.format(spending.min)}–${formatter.format(spending.max)}`
    )
  }
  const amount = spending.max ?? spending.min
  return amount == null ? undefined : formatter.format(amount)
}
