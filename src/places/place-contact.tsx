import {
  RiArrowRightUpLine,
  RiGlobalFill,
  RiInstagramFill,
  RiMapPin2Fill,
  RiPhoneFill,
  RiThreadsFill,
  RiTiktokFill,
  RiWhatsappFill,
} from '@remixicon/react'
import { useIntlayer } from 'react-intlayer'

import type { ActionId } from '@/analytics/actions'
import { useWebsiteAction } from '@/analytics/use-web-action'

import type { Places } from './places.schema'

export function PlaceContact({ place }: { place: Places[number] }) {
  const labels = useIntlayer('place-contact')
  const trackWebsiteAction = useWebsiteAction()
  const contact = place.contactLocation
  if (!contact) return null

  const { instagram, threads, tiktok, website, whatsapp, phone, address, mapsUrl } = contact
  const whatsappDigits = whatsapp?.replace(/\D/g, '')
  const entries = (
    [
      {
        action: 'instagram_click',
        icon: RiInstagramFill,
        tone: 'bg-[#e4405f]/12 text-[#e4405f]',
        label: 'Instagram',
        value: instagram && `@${instagram.replace(/^@/, '')}`,
        href:
          instagram &&
          `https://www.instagram.com/${encodeURIComponent(instagram.replace(/^@/, ''))}`,
      },
      {
        action: 'threads_click',
        icon: RiThreadsFill,
        tone: 'bg-foreground/8 text-foreground',
        label: 'Threads',
        value: threads && `@${threads.replace(/^@/, '')}`,
        href:
          threads && `https://www.threads.com/@${encodeURIComponent(threads.replace(/^@/, ''))}`,
      },
      {
        action: 'tiktok_click',
        icon: RiTiktokFill,
        tone: 'bg-[#25f4ee]/30 text-foreground',
        label: 'TikTok',
        value: tiktok && `@${tiktok.replace(/^@/, '')}`,
        href: tiktok && `https://www.tiktok.com/@${encodeURIComponent(tiktok.replace(/^@/, ''))}`,
      },
      {
        action: 'website_click',
        icon: RiGlobalFill,
        tone: 'bg-[#4a84c4]/12 text-[#4a84c4]',
        label: labels.website.value,
        value: website && new URL(website).hostname.replace(/^www\./, ''),
        href: website,
      },
      {
        action: 'phone_click',
        icon: RiPhoneFill,
        tone: 'bg-[#7b61c9]/12 text-[#7b61c9]',
        label: labels.phone.value,
        value: phone,
        href: phone && `tel:${phone.replace(/[^+\d]/g, '')}`,
      },
      {
        action: 'whatsapp_click',
        icon: RiWhatsappFill,
        tone: 'bg-[#1fa855]/12 text-[#1fa855]',
        label: 'WhatsApp',
        value: whatsapp,
        href:
          whatsappDigits && !whatsappDigits.startsWith('0')
            ? `https://wa.me/${whatsappDigits}`
            : undefined,
      },
      {
        action: 'maps_click',
        icon: RiMapPin2Fill,
        tone: 'bg-[#e8710a]/12 text-[#e8710a]',
        label: address ? labels.address.value : labels.maps.value,
        value: address || mapsUrl,
        href: mapsUrl,
      },
    ] satisfies {
      action: ActionId
      icon: typeof RiInstagramFill
      tone: string
      label: string
      value: string | null | undefined
      href: string | null | undefined
    }[]
  ).filter((entry) => entry.value)

  if (!entries.length) return null
  return (
    <div className="mt-6">
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map(({ action, label, value, href, icon: Icon, tone }) => {
          const body = (
            <>
              <span
                className={`grid size-10 shrink-0 place-items-center rounded-full ${tone} motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out motion-safe:group-hover:scale-105 motion-safe:group-hover:-rotate-6`}
              >
                <Icon aria-hidden className="size-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm text-muted-foreground">{label}</span>
                <span className="block font-medium text-pretty wrap-break-word">{value}</span>
              </span>
              {href && (
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-muted text-foreground/65 transition-colors group-hover:text-foreground">
                  <RiArrowRightUpLine aria-hidden className="size-5" />
                </span>
              )}
              {href?.startsWith('http') && <span className="sr-only"> {labels.opensInNewTab}</span>}
            </>
          )
          return (
            <li key={label} className="min-w-0">
              {href ? (
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  onClick={() => trackWebsiteAction(action, 'place_review', { place })}
                  className="group flex h-full items-center gap-3 rounded-3xl bg-card p-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  {body}
                </a>
              ) : (
                <div className="flex h-full items-center gap-3 rounded-3xl bg-card p-3">{body}</div>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
