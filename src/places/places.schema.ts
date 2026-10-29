import { z } from 'zod'

const amounts = ['plenty', 'enough', 'limited', 'unavailable'] as const

// Shared scale for any category. Street parking is not an amount.
export const amount = z.enum(amounts)
export const parking = z.enum([...amounts, 'street'])

export type Amount = z.infer<typeof amount>
export type Parking = z.infer<typeof parking>

// Listing fields only. The page schema below keeps the rest.
export const placeSchema = z
  .object({
    place_id: z.string().trim().min(1),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    title: z.string().trim().min(1),
    category: z.enum(['cafes', 'restaurants', 'stays', 'clubs']),
    about: z.string().trim().min(1),
    area: z.string().trim().min(1),
    cutout: z.object({
      src: z.string().trim().min(1),
      alt: z.string().trim().min(1),
    }),
    spending: z
      .object({
        min: z.number().int().positive().optional(),
        max: z.number().int().positive(),
      })
      .optional(),
    visitedAt: z.array(z.iso.date()).min(1),
    badge: z.enum(['approved', 'good-find']).optional(),
    gallery: z.array(z.object({ src: z.string().trim().min(1) })).min(1),
  })
  .transform(({ visitedAt, gallery, ...place }) => ({
    ...place,
    lastVisitedAt: visitedAt.reduce((latest, visit) => (visit > latest ? visit : latest)),
    previews: gallery.slice(0, 3),
  }))

export type Place = z.output<typeof placeSchema>

export const mapPlaceSchema = z.object({
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  title: z.string().trim().min(1),
  description: z.string().trim().min(1),
  area: z.string().trim().min(1),
  category: z.enum(['cafes', 'restaurants', 'stays', 'clubs']),
  cutout: z.object({ src: z.string().trim().min(1) }),
  spending: z
    .object({
      min: z.number().int().positive().optional(),
      max: z.number().int().positive(),
    })
    .optional(),
  coordinates: z.object({
    lat: z.number().min(-90).max(90),
    lng: z.number().min(-180).max(180),
  }),
})

export const placePageSchema = z.object({
  slug: z.string(),
  title: z.string().trim().min(1),
  area: z.string().trim().min(1),
  category: z.enum(['cafes', 'restaurants', 'stays', 'clubs']),
  badge: z.enum(['approved', 'good-find']).optional(),
  spending: z
    .object({
      min: z.number().int().positive().optional(),
      max: z.number().int().positive(),
    })
    .optional(),
  cutout: z.object({
    src: z.string().trim().min(1),
    alt: z.string().trim().min(1),
  }),
  mapsUrl: z.string().trim().min(1),
  about: z.string().trim().min(1),
  description: z.string().trim().min(1),
  caveats: z.string().trim().min(1),
  instagram: z.string().trim().min(1),
  threads: z.string().trim().min(1).optional(),
  tiktok: z.string().trim().min(1).optional(),
  website: z.url().optional(),
  whatsapp: z.string().trim().min(1).optional(),
  phone: z.string().trim().min(1).optional(),
  address: z.string().trim().min(1),
  visitedAt: z.array(z.iso.date()).min(1),
  wifi: z.union([z.number().positive(), z.literal('available')]),
  power: amount,
  seating: z.array(z.enum(['indoor', 'outdoor', 'semi-outdoor'])).min(1),
  cooling: z.enum(['ac', 'fan', 'ac-and-fan', 'open-air']),
  noise: z.enum(['quiet', 'moderate', 'loud']),
  // null means the visit did not confirm whether music was playing.
  music: z.boolean().nullable(),
  toilet: z.boolean(),
  reservation: z.enum(['not-needed', 'recommended', 'required']),
  parking: z.object({ motorbike: parking, car: parking }),
  gallery: z
    .array(
      z.object({
        src: z.string().trim().min(1),
        alt: z.string().trim().min(1),
      }),
    )
    .min(1),
})
