import { getIntlayerAsync } from 'intlayer'

import type { Locale } from '@/i18n/locale'

import { mapPlaceSchema, placePageSchema, placeSchema, type Place } from './places.schema'

const images = import.meta.glob<string>('./content/*/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
})

function imageUrl(slug: string, filename: string) {
  const path = `./content/${slug}/${filename.replace(/^\.\//, '')}`
  const url = images[path]
  if (!url) throw new Error(`Missing place image: ${path}`)
  return url
}

export async function readPlaces(locale: Locale): Promise<Place[]> {
  const records = await getIntlayerAsync('place', locale)
  const places = records.map((record) => {
    const place = placeSchema.parse(record)
    return {
      ...place,
      cutout: { ...place.cutout, src: imageUrl(place.slug, place.cutout.src) },
      previews: place.previews.map((photo) => ({ src: imageUrl(place.slug, photo.src) })),
    }
  })
  return places.sort(
    (a, b) => b.lastVisitedAt.localeCompare(a.lastVisitedAt) || a.slug.localeCompare(b.slug),
  )
}

export async function readMapPlaces(locale: Locale) {
  const records = await getIntlayerAsync('place', locale)
  return records
    .filter((record) => record.visitedAt.length > 0)
    .map((record) => mapPlaceSchema.parse(record))
}

export async function readPlace(locale: Locale, slug: string) {
  const records = await getIntlayerAsync('place', locale)
  const record = records.find((item) => item.slug === slug)
  if (!record) return null

  const place = placePageSchema.parse(record)
  return {
    title: place.title,
    area: place.area,
    category: place.category,
    badge: place.badge,
    spending: place.spending,
    mapsUrl: place.mapsUrl,
    about: place.about,
    description: place.description,
    caveats: place.caveats,
    instagram: place.instagram,
    threads: place.threads,
    tiktok: place.tiktok,
    website: place.website,
    whatsapp: place.whatsapp,
    phone: place.phone,
    address: place.address,
    lastVisitedAt: place.visitedAt.reduce((latest, visit) => (visit > latest ? visit : latest)),
    wifi: place.wifi,
    power: place.power,
    seating: place.seating,
    cooling: place.cooling,
    noise: place.noise,
    music: place.music,
    toilet: place.toilet,
    reservation: place.reservation,
    parking: place.parking,
    cutout: { ...place.cutout, src: imageUrl(place.slug, place.cutout.src) },
    photos: place.gallery.map((photo) => ({
      alt: photo.alt,
      src: imageUrl(place.slug, photo.src),
    })),
  }
}
