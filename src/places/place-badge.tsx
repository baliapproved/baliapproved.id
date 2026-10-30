import { useIntlayer } from 'react-intlayer'
import approved from './approved-badge.svg'
import goodFind from './good-find-badge.svg'
import type { Places } from './places.schema'

const badges = {
  approved: { src: approved, className: 'text-[#b99651]' },
  'good-find': { src: goodFind, className: 'text-[#6ca0d6]' },
} as const

export function PlaceBadge({ badge }: { badge: NonNullable<Places[number]['badge']> }) {
  const labels = useIntlayer('place-card')
  return (
    <p className={`flex items-center gap-1 ${badges[badge].className}`}>
      <img src={badges[badge].src} alt="" className="h-5 w-auto" />
      {badge === 'approved' ? labels.approved : labels.goodFind}
    </p>
  )
}
