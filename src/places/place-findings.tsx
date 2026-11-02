import {
  RiArmchairFill,
  RiCalendarTodoFill,
  RiCarFill,
  RiDoorOpenFill,
  RiFridgeFill,
  RiHotelBedFill,
  RiLifebuoyFill,
  RiMotorbikeFill,
  RiMusic2Fill,
  RiPlugFill,
  RiTempColdFill,
  RiVolumeDownFill,
  RiWifiFill,
  type RemixiconComponentType,
} from '@remixicon/react'
import { useIntlayer } from 'react-intlayer'
import type { ReactNode } from 'react'
import type { Places } from './places.schema'

function wifiRange(mbps: number) {
  const step = mbps < 100 ? 10 : 50
  const low = Math.floor(mbps / step) * step
  return `${low}–${low + step} Mbps`
}

export function PlaceFindings({ place }: { place: Places[number] }) {
  const labels = useIntlayer('place-detail')
  const items: { key: string; icon: RemixiconComponentType; label: ReactNode; value: ReactNode }[] =
    []
  const add = (key: string, icon: RemixiconComponentType, label: ReactNode, value: ReactNode) =>
    items.push({ key, icon, label, value })
  if (place.findings) {
    const { wifi } = place.findings
    const wifiValue =
      wifi.status === 'measured'
        ? wifiRange(wifi.mbps)
        : wifi.status === 'unmeasured'
          ? labels.unmeasured
          : wifi.status === 'unavailable'
            ? labels.unavailable
            : labels.unknown
    if (place.category === 'stay') {
      const findings = place.findings
      add('roomType', RiHotelBedFill, labels.roomType, labels[findings.roomType])
      add('bathroom', RiDoorOpenFill, labels.bathroom, labels[findings.bathroom])
      add('cooling', RiTempColdFill, labels.cooling, labels[findings.cooling])
      add('wifi', RiWifiFill, labels.wifi, wifiValue)
      add('noise', RiVolumeDownFill, labels.noise, labels[findings.noise])
      add('kitchen', RiFridgeFill, labels.kitchen, labels[findings.kitchen])
      add('pool', RiLifebuoyFill, labels.pool, labels[findings.pool])
      add('motorbike', RiMotorbikeFill, labels.motorbike, labels[findings.parking.motorbike])
      add('car', RiCarFill, labels.car, labels[findings.parking.car])
    } else {
      const findings = place.findings
      add('wifi', RiWifiFill, labels.wifi, wifiValue)
      add('power', RiPlugFill, labels.power, labels[findings.power])
      add(
        'seating',
        RiArmchairFill,
        labels.seating,
        findings.seating.map((value) => labels[value].value).join(', '),
      )
      add('noise', RiVolumeDownFill, labels.noise, labels[findings.noise])
      add('music', RiMusic2Fill, labels.music, labels[findings.music])
      add('toilet', RiDoorOpenFill, labels.toilet, labels[findings.toilet])
      add('reservation', RiCalendarTodoFill, labels.reservation, labels[findings.reservation])
      add('motorbike', RiMotorbikeFill, labels.motorbike, labels[findings.parking.motorbike])
      add('car', RiCarFill, labels.car, labels[findings.parking.car])
    }
  }
  if (!items.length && !place.caveats) return null
  return (
    <section aria-labelledby="what-we-found" className="mt-12">
      <h2 id="what-we-found" className="text-2xl font-medium tracking-tight">
        {labels.findings}
      </h2>
      {place.caveats && (
        <p className="mt-3 max-w-[34rem] text-base/7 text-pretty text-muted-foreground">
          <span className="font-semibold text-foreground italic">{labels.worthKnowing}</span>{' '}
          <span lang={place.caveats.language}>{place.caveats.value}</span>
        </p>
      )}
      {items.length > 0 && (
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ key, icon: Icon, label, value }) => (
            <li key={key} className="flex min-w-0 items-center gap-3 rounded-3xl bg-card p-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#2a8c8c]/12 text-[#2a8c8c]">
                <Icon aria-hidden className="size-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm text-muted-foreground">{label}</span>
                <span className="block font-medium text-pretty wrap-break-word">{value}</span>
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
