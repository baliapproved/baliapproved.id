import {
  RiGlobalFill,
  RiInstagramFill,
  RiMapPin2Fill,
  RiPhoneFill,
  RiThreadsFill,
  RiTiktokFill,
  RiWhatsappFill,
  type RemixiconComponentType,
} from '@remixicon/react'
import type { ReactNode } from 'react'
import { useIntlayer } from 'react-intlayer'

import { PlaceFact } from './place-fact'

export function PlaceAbout({
  place,
}: {
  place: {
    about: string
    instagram: string
    threads?: string
    tiktok?: string
    website?: string
    whatsapp?: string
    phone?: string
    address: string
    mapsUrl: string
  }
}) {
  const { about } = useIntlayer('places')
  const { footer } = useIntlayer('site')
  const links: {
    key: string
    icon: RemixiconComponentType
    label: ReactNode
    value: string
    href: string
    // Platform colors, so each link is recognisable at a glance.
    tone: string
  }[] = [
    {
      key: 'instagram',
      icon: RiInstagramFill,
      label: about.links.instagram,
      value: `@${place.instagram}`,
      href: `https://www.instagram.com/${encodeURIComponent(place.instagram)}/`,
      tone: 'bg-[#e4405f]/12 text-[#e4405f]',
    },
    ...(place.threads
      ? [
          {
            key: 'threads',
            icon: RiThreadsFill,
            label: about.links.threads,
            value: `@${place.threads}`,
            href: `https://www.threads.com/@${encodeURIComponent(place.threads)}`,
            tone: 'bg-foreground/8 text-foreground',
          },
        ]
      : []),
    ...(place.tiktok
      ? [
          {
            key: 'tiktok',
            icon: RiTiktokFill,
            label: about.links.tiktok,
            value: `@${place.tiktok}`,
            href: `https://www.tiktok.com/@${encodeURIComponent(place.tiktok)}`,
            tone: 'bg-[#25f4ee]/30 text-foreground',
          },
        ]
      : []),
    ...(place.website
      ? [
          {
            key: 'website',
            icon: RiGlobalFill,
            label: about.links.website,
            value: new URL(place.website).hostname.replace(/^www\./, ''),
            href: place.website,
            tone: 'bg-[#4a84c4]/12 text-[#4a84c4]',
          },
        ]
      : []),
    ...(place.whatsapp
      ? [
          {
            key: 'whatsapp',
            icon: RiWhatsappFill,
            label: about.links.whatsapp,
            value: place.whatsapp,
            href: `https://wa.me/${place.whatsapp.replace(/\D/g, '')}`,
            tone: 'bg-[#1fa855]/12 text-[#1fa855]',
          },
        ]
      : []),
    ...(place.phone
      ? [
          {
            key: 'phone',
            icon: RiPhoneFill,
            label: about.links.phone,
            value: place.phone,
            href: `tel:${place.phone.replace(/ /g, '')}`,
            tone: 'bg-[#7b61c9]/12 text-[#7b61c9]',
          },
        ]
      : []),
    {
      key: 'address',
      icon: RiMapPin2Fill,
      label: about.links.address,
      value: place.address,
      href: place.mapsUrl,
      tone: 'bg-[#e8710a]/12 text-[#e8710a]',
    },
  ]

  return (
    <section aria-labelledby="about" className="mt-12">
      <h2 id="about" className="text-2xl font-medium tracking-tight">
        {about.heading}
      </h2>
      <p className="mt-3 max-w-[34rem] text-base/7 text-pretty text-muted-foreground">
        {place.about}
      </p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <li key={link.key} className="min-w-0">
            <PlaceFact
              icon={link.icon}
              label={link.label}
              value={link.value}
              href={link.href}
              newTabLabel={footer.opensInNewTab}
              tone={link.tone}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
