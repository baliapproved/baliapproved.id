import { getIntlayer } from 'intlayer'
import type { CafeOrCoffeeShop, LodgingBusiness, Restaurant, WithContext } from 'schema-dts'

import type { Locale } from '@/i18n/locale'
import { SITE_NAME, SITE_URL, toSocialImageUrl } from '@/seo/seo'

import type { Category, Places } from './places.schema'
import { formatSpending } from './spending'

const businessTypeByCategory = {
  cafe: 'CafeOrCoffeeShop',
  restaurant: 'Restaurant',
  stay: 'LodgingBusiness',
} as const satisfies Record<Category, 'CafeOrCoffeeShop' | 'Restaurant' | 'LodgingBusiness'>

export function buildPlaceJsonLd(
  place: Places[number],
  locale: Locale,
): WithContext<CafeOrCoffeeShop | Restaurant | LodgingBusiness> {
  const contact = place.contactLocation
  const leadPhoto = place.gallery?.[0]
  const image = leadPhoto ? toSocialImageUrl(leadPhoto.url) : place.cutout.url

  const formattedSpending = formatSpending(place.spending, locale)
  const { under } = getIntlayer('place-card', locale)
  const priceRange =
    formattedSpending &&
    (place.spending?.min == null ? `${under} ${formattedSpending}` : formattedSpending)

  const instagramHandle = contact?.instagram?.replace(/^@/, '')
  const threadsHandle = contact?.threads?.replace(/^@/, '')
  const tiktokHandle = contact?.tiktok?.replace(/^@/, '')
  const sameAs = [
    ...(instagramHandle
      ? [`https://www.instagram.com/${encodeURIComponent(instagramHandle)}/`]
      : []),
    ...(threadsHandle ? [`https://www.threads.com/@${encodeURIComponent(threadsHandle)}`] : []),
    ...(tiktokHandle ? [`https://www.tiktok.com/@${encodeURIComponent(tiktokHandle)}`] : []),
  ]

  // Earliest visit date so revisits preserve the original review publish date.
  const reviewedAt = place.visitedAt?.length ? [...place.visitedAt].sort()[0] : undefined

  return {
    '@context': 'https://schema.org',
    '@type': businessTypeByCategory[place.category],
    name: place.name,
    description: place.description.value,
    image,
    ...(contact?.website && { url: contact.website }),
    ...((contact?.phone || contact?.whatsapp) && {
      telephone: (contact.phone ?? contact.whatsapp)!,
    }),
    ...(priceRange && { priceRange }),
    address: {
      '@type': 'PostalAddress',
      ...(contact?.address && { streetAddress: contact.address }),
      ...(contact?.postalCode && { postalCode: contact.postalCode }),
      addressRegion: 'Bali',
      addressCountry: 'ID',
    },
    ...(contact?.coordinates && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: contact.coordinates.lat,
        longitude: contact.coordinates.lng,
      },
    }),
    ...(contact?.mapsUrl && { hasMap: contact.mapsUrl }),
    ...(sameAs.length > 0 && { sameAs }),
    ...(reviewedAt &&
      place.review && {
        review: {
          '@type': 'Review',
          author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
          datePublished: reviewedAt,
          inLanguage: place.review.language,
          reviewBody: place.review.value,
        },
      }),
  }
}
