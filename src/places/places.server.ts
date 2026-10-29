import { getIntlayerAsync } from 'intlayer'

import type { Locale } from '@/i18n/locale'

import { placeSchema, type Place } from './places.schema'

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
