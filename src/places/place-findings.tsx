import {
  RiArmchairFill,
  RiCalendarTodoFill,
  RiCarFill,
  RiDoorOpenFill,
  RiMotorbikeFill,
  RiMusic2Fill,
  RiPlugFill,
  RiVolumeDownFill,
  RiWifiFill,
  type RemixiconComponentType,
} from '@remixicon/react'
import type { ReactNode } from 'react'
import { useIntlayer } from 'react-intlayer'

import type { Amount, Parking } from './places.schema'
import { PlaceFact } from './place-fact'

type Seating = 'indoor' | 'outdoor' | 'semi-outdoor'
type Cooling = 'ac' | 'fan' | 'ac-and-fan' | 'open-air'

// A range rather than the exact test result, which changes from test to test.
function wifiRange(mbps: number) {
  const step = mbps < 100 ? 10 : 50
  const low = Math.floor(mbps / step) * step
  return { low, high: low + step }
}

export function PlaceFindings({
  place,
}: {
  place: {
    caveats: string
    wifi: number | 'available'
    power: Amount
    seating: Seating[]
    cooling: Cooling
    noise: 'quiet' | 'moderate' | 'loud'
    music: boolean | null
    toilet: boolean
    reservation: 'not-needed' | 'recommended' | 'required'
    parking: { motorbike: Parking; car: Parking }
  }
}) {
  const { findings } = useIntlayer('places')
  if (place.seating.length === 0) return null

  const range = place.wifi === 'available' ? null : wifiRange(place.wifi)
  const wifi =
    range === null
      ? findings.wifiUnmeasured
      : range.low === 0
        ? findings.wifiUnder
        : `${range.low}–${range.high} Mbps`
  const seating = place.seating
    .map((area) => {
      const name = findings.areas[area].value
      if (area !== 'indoor') return name
      return `${name} (${findings.coolingShort[place.cooling].value})`
    })
    .join(findings.joiner.value)

  const parkingLabel = (value: Parking) =>
    value === 'street' ? findings.street : findings.amount[value]

  const items: {
    key: string
    icon: RemixiconComponentType
    label: ReactNode
    value: ReactNode
  }[] = [
    { key: 'wifi', icon: RiWifiFill, label: findings.wifi, value: wifi },
    { key: 'power', icon: RiPlugFill, label: findings.power, value: findings.amount[place.power] },
    { key: 'seating', icon: RiArmchairFill, label: findings.seating, value: seating },
    {
      key: 'noise',
      icon: RiVolumeDownFill,
      label: findings.noise,
      value: findings.noiseValues[place.noise],
    },
    {
      key: 'music',
      icon: RiMusic2Fill,
      label: findings.music,
      value:
        place.music === null
          ? findings.availability.unknown
          : place.music
            ? findings.availability.available
            : findings.availability.unavailable,
    },
    {
      key: 'toilet',
      icon: RiDoorOpenFill,
      label: findings.toilet,
      value: place.toilet ? findings.availability.available : findings.availability.unavailable,
    },
    {
      key: 'reservation',
      icon: RiCalendarTodoFill,
      label: findings.reservation,
      value: findings.reservationValues[place.reservation],
    },
    {
      key: 'motorbike',
      icon: RiMotorbikeFill,
      label: findings.motorbikeParking,
      value: parkingLabel(place.parking.motorbike),
    },
    {
      key: 'car',
      icon: RiCarFill,
      label: findings.carParking,
      value: parkingLabel(place.parking.car),
    },
  ]

  return (
    <section aria-labelledby="what-we-found" className="mt-12">
      <h2 id="what-we-found" className="text-2xl font-medium tracking-tight">
        {findings.heading}
      </h2>
      <p className="mt-3 max-w-[34rem] text-base/7 text-pretty text-muted-foreground">
        <span className="font-semibold text-foreground italic">{findings.worthKnowing}</span>{' '}
        {place.caveats}
      </p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.key} className="min-w-0">
            <PlaceFact
              icon={item.icon}
              label={item.label}
              value={item.value}
              tone="bg-[#2a8c8c]/12 text-[#2a8c8c]"
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
