import { getIntlayerAsync } from 'intlayer'
import { z } from 'zod'

import type { Locale } from '@/i18n/locale'

import { placeSchema, type Place } from './places.schema'

// Photo strip only. The listing schema stays narrow, and the rest of the place stays in the content file.
const placePhotosSchema = z.object({
  slug: z.string(),
  title: z.string().trim().min(1),
  gallery: z
    .array(
      z.object({
        src: z.string().trim().min(1),
        alt: z.string().trim().min(1),
      }),
    )
    .min(1),
})

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

export async function readPlacePhotos(locale: Locale, slug: string) {
  const records = await getIntlayerAsync('place', locale)
  const record = records.find((item) => item.slug === slug)
  if (!record) return null

  const place = placePhotosSchema.parse(record)
  return {
    title: place.title,
    photos: place.gallery.map((photo) => ({
      alt: photo.alt,
      src: imageUrl(place.slug, photo.src),
    })),
  }
}
