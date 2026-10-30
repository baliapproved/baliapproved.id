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
import type { ReactNode } from 'react'
import { useIntlayer } from 'react-intlayer'

import type { CafeFindings, Parking, StayFindings } from './places.schema'
import { PlaceFact } from './place-fact'

type Visit = { caveats: string; lastVisitedAt: string }
type CafePlace = Visit & CafeFindings & { category: 'cafes' | 'restaurants' | 'clubs' }
type StayPlace = Visit & StayFindings & { category: 'stays' }

// A range rather than the exact test result, which changes from test to test.
function wifiRange(mbps: number) {
  const step = mbps < 100 ? 10 : 50
  const low = Math.floor(mbps / step) * step
  return { low, high: low + step }
}

export function PlaceFindings({ place }: { place: CafePlace | StayPlace }) {
  const { findings } = useIntlayer('places')
  if (place.lastVisitedAt === '') return null

  const range = place.wifi === 'available' ? null : wifiRange(place.wifi)
  const wifi =
    range === null
      ? findings.wifiUnmeasured
      : range.low === 0
        ? findings.wifiUnder
        : `${range.low}–${range.high} Mbps`
  const parkingLabel = (value: Parking) =>
    value === 'street' ? findings.street : findings.amount[value]
  const parking = [
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
  const items: {
    key: string
    icon: RemixiconComponentType
    label: ReactNode
    value: ReactNode
  }[] =
    place.category === 'stays'
      ? [
          {
            key: 'roomType',
            icon: RiHotelBedFill,
            label: findings.roomType,
            value: findings.roomTypes[place.roomType],
          },
          {
            key: 'bathroom',
            icon: RiDoorOpenFill,
            label: findings.bathroom,
            value: findings.privacy[place.bathroom],
          },
          {
            key: 'cooling',
            icon: RiTempColdFill,
            label: findings.cooling,
            value: findings.coolingValues[place.cooling],
          },
          { key: 'wifi', icon: RiWifiFill, label: findings.wifi, value: wifi },
          {
            key: 'noise',
            icon: RiVolumeDownFill,
            label: findings.noise,
            value: findings.noiseValues[place.noise],
          },
          {
            key: 'kitchen',
            icon: RiFridgeFill,
            label: findings.kitchen,
            value:
              place.kitchen === 'unavailable'
                ? findings.availability.unavailable
                : findings.privacy[place.kitchen],
          },
          {
            key: 'pool',
            icon: RiLifebuoyFill,
            label: findings.pool,
            value: place.pool ? findings.availability.available : findings.availability.unavailable,
          },
          ...parking,
        ]
      : [
          { key: 'wifi', icon: RiWifiFill, label: findings.wifi, value: wifi },
          {
            key: 'power',
            icon: RiPlugFill,
            label: findings.power,
            value: findings.amount[place.power],
          },
          {
            key: 'seating',
            icon: RiArmchairFill,
            label: findings.seating,
            value: place.seating
              .map((area) => {
                const name = findings.areas[area].value
                if (area !== 'indoor') return name
                return `${name} (${findings.coolingShort[place.cooling].value})`
              })
              .join(findings.joiner.value),
          },
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
            value: place.toilet
              ? findings.availability.available
              : findings.availability.unavailable,
          },
          {
            key: 'reservation',
            icon: RiCalendarTodoFill,
            label: findings.reservation,
            value: findings.reservationValues[place.reservation],
          },
          ...parking,
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
