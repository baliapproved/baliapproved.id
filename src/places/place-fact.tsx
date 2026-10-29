import { RiArrowRightUpLine, type RemixiconComponentType } from '@remixicon/react'
import type { ReactNode } from 'react'

const bubble = 'grid shrink-0 place-items-center rounded-full'

export function PlaceFact({
  icon: Icon,
  label,
  value,
  href,
  newTabLabel,
  tone,
}: {
  icon: RemixiconComponentType
  label: ReactNode
  value: ReactNode
  href?: string
  newTabLabel?: ReactNode
  // Icon bubble color. About passes a platform color; findings pass the visit green.
  tone?: string
}) {
  const external = href?.startsWith('http')

  const body = (
    <>
      <span
        className={`${bubble} size-10 ${
          tone
            ? `${tone} motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out motion-safe:group-hover:scale-105 motion-safe:group-hover:-rotate-6`
            : 'bg-muted text-foreground'
        }`}
      >
        <Icon aria-hidden className="size-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm text-muted-foreground">{label}</span>
        <span className="block font-medium text-pretty wrap-break-word">{value}</span>
      </span>
      {href && (
        <span
          className={`${bubble} size-9 bg-muted text-foreground/65 transition-colors group-hover:text-foreground`}
        >
          <RiArrowRightUpLine aria-hidden className="size-5" />
        </span>
      )}
      {external && newTabLabel && <span className="sr-only"> {newTabLabel}</span>}
    </>
  )

  if (!href) {
    return <div className="flex h-full items-center gap-3 rounded-3xl bg-card p-3">{body}</div>
  }

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="group flex h-full items-center gap-3 rounded-3xl bg-card p-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      {body}
    </a>
  )
}
