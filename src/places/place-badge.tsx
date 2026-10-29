import { useIntlayer } from 'react-intlayer'

import approved from './approved-badge.svg'
import goodFind from './good-find-badge.svg'
import type { Place } from './places.schema'

const icons = {
  approved: { src: approved, className: 'text-[#b99651]' },
  'good-find': { src: goodFind, className: 'text-[#6ca0d6]' },
} as const

export function PlaceBadge({ badge }: { badge: NonNullable<Place['badge']> }) {
  const { badges } = useIntlayer('places')

  return (
    <p className={`flex items-center gap-1 ${icons[badge].className}`}>
      <img src={icons[badge].src} alt="" className="h-5 w-auto" />
      {badges[badge]}
    </p>
  )
}
