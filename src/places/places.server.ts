import { createClient } from '@sanity/client'
import { defineQuery } from 'groq'
import { defaultLocale, type Locale } from '../i18n/locale.ts'
import { placesSchema, type Places } from './places.schema.ts'
import { sortByLastVisited } from './visits.ts'

export const placesQuery = defineQuery(`*[_type == "place"] | order(name asc) {
  _id, name, category, area, badge, visitedAt, "slug": slug.current,
  spending { min, max },
  contactLocation { instagram, threads, tiktok, website, whatsapp, phone, address, postalCode, mapsUrl, coordinates { lat, lng } },
  findings { wifiAvailable, wifi, cooling, noise, parking { motorbike, car }, power, seating, music, toilet, reservation, roomType, bathroom, kitchen, pool },
  cutout {
    "url": asset->url, "width": asset->metadata.dimensions.width, "height": asset->metadata.dimensions.height,
    "alt": coalesce(alt[language == $locale && defined(value) && value != ""][0], alt[language == $fallback && defined(value) && value != ""][0]){language, value}
  },
  gallery[] {
    "url": asset->url, "width": asset->metadata.dimensions.width, "height": asset->metadata.dimensions.height,
    "alt": coalesce(alt[language == $locale && defined(value) && value != ""][0], alt[language == $fallback && defined(value) && value != ""][0]){language, value}
  },
  "description": coalesce(
    description[language == $locale && defined(value) && value != ""][0],
    description[language == $fallback && defined(value) && value != ""][0]
  ){language, value},
  "review": coalesce(review[language == $locale && defined(value) && value != ""][0], review[language == $fallback && defined(value) && value != ""][0]){language, value},
  "caveats": coalesce(caveats[language == $locale && defined(value) && value != ""][0], caveats[language == $fallback && defined(value) && value != ""][0]){language, value}
}`)

export async function fetchPlaces(locale: Locale): Promise<Places> {
  const client = createClient({
    projectId: 'd0erm1pj',
    dataset: 'production',
    apiVersion: '2026-01-01',
    useCdn: false,
    perspective: 'published',
  })
  const result = await client.fetch(placesQuery, { locale, fallback: defaultLocale })
  return sortByLastVisited(placesSchema.parse(result))
}
