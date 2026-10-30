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

export function PlaceFindings({ place }: { place: Places[number] }) {
  const labels = useIntlayer('place-detail')
  const f = place.findings
  const items: { key: string; icon: RemixiconComponentType; label: ReactNode; value: ReactNode }[] =
    []
  const add = (key: string, icon: RemixiconComponentType, label: ReactNode, value: ReactNode) =>
    items.push({ key, icon, label, value })
  const availability = (value: boolean) => (value ? labels.available : labels.unavailable)
  if (f) {
    if (f.roomType) add('roomType', RiHotelBedFill, labels.roomType, labels[f.roomType])
    if (f.bathroom) add('bathroom', RiDoorOpenFill, labels.bathroom, labels[f.bathroom])
    if (f.cooling) add('cooling', RiTempColdFill, labels.cooling, labels[f.cooling])
    if (f.wifiAvailable === false) add('wifi', RiWifiFill, labels.wifi, labels.unavailable)
    else if (f.wifi != null) {
      const step = f.wifi < 100 ? 10 : 50
      const low = Math.floor(f.wifi / step) * step
      add('wifi', RiWifiFill, labels.wifi, `${low}–${low + step} Mbps`)
    } else if (f.wifiAvailable === true) add('wifi', RiWifiFill, labels.wifi, labels.unmeasured)
    if (f.power) add('power', RiPlugFill, labels.power, labels[f.power])
    if (f.seating?.length)
      add(
        'seating',
        RiArmchairFill,
        labels.seating,
        f.seating.map((value) => labels[value].value).join(', '),
      )
    if (f.noise) add('noise', RiVolumeDownFill, labels.noise, labels[f.noise])
    if (f.music != null) add('music', RiMusic2Fill, labels.music, availability(f.music))
    if (f.toilet != null) add('toilet', RiDoorOpenFill, labels.toilet, availability(f.toilet))
    if (f.reservation)
      add('reservation', RiCalendarTodoFill, labels.reservation, labels[f.reservation])
    if (f.kitchen) add('kitchen', RiFridgeFill, labels.kitchen, labels[f.kitchen])
    if (f.pool != null) add('pool', RiLifebuoyFill, labels.pool, availability(f.pool))
    if (f.parking?.motorbike)
      add('motorbike', RiMotorbikeFill, labels.motorbike, labels[f.parking.motorbike])
    if (f.parking?.car) add('car', RiCarFill, labels.car, labels[f.parking.car])
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
