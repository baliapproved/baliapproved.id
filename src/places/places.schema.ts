import { z } from 'zod'

export const categorySchema = z.enum(['cafe', 'restaurant', 'stay', 'club'])
export type Category = z.infer<typeof categorySchema>

const localizedTextSchema = z.object({
  language: z.string().trim().min(1),
  value: z.string().trim().min(1),
})

const imageSchema = z.object({
  url: z.url(),
  width: z.number().positive(),
  height: z.number().positive(),
  alt: localizedTextSchema,
})

const amountSchema = z.enum(['plenty', 'enough', 'limited', 'unavailable'])
const parkingSchema = z.enum(['plenty', 'enough', 'limited', 'unavailable', 'street'])
const presenceSchema = z.enum(['available', 'unavailable', 'unknown'])

const wifiSchema = z.discriminatedUnion('status', [
  z.object({ status: z.literal('unavailable') }),
  z.object({ status: z.literal('unknown') }),
  z.object({ status: z.literal('unmeasured') }),
  z.object({ status: z.literal('measured'), mbps: z.number().positive() }),
])

const spendingSchema = z
  .object({
    min: z.number().int().positive().nullable(),
    max: z.number().int().positive().nullable(),
  })
  .refine(
    (spending) => spending.min == null || spending.max == null || spending.max >= spending.min,
  )

const contactSchema = z.object({
  instagram: z.string().nullish(),
  threads: z.string().nullish(),
  tiktok: z.string().nullish(),
  website: z.url({ protocol: /^https?$/ }).nullish(),
  whatsapp: z.string().nullish(),
  phone: z.string().nullish(),
  address: z.string().nullish(),
  postalCode: z.string().nullish(),
  mapsUrl: z.url({ protocol: /^https?$/ }).nullish(),
  coordinates: z
    .object({
      lat: z.number().min(-90).max(90),
      lng: z.number().min(-180).max(180),
    })
    .nullish(),
})

const identity = {
  _id: z.string().trim().min(1),
  name: z.string().trim().min(1),
  slug: z.string().trim().min(1),
  area: z.string().trim().min(1),
  description: localizedTextSchema,
  contactLocation: contactSchema.nullable(),
  cutout: imageSchema,
}

const sharedFindings = {
  wifi: wifiSchema,
  noise: z.enum(['quiet', 'moderate', 'loud']),
  parking: z.object({
    motorbike: parkingSchema,
    car: parkingSchema,
  }),
}

const cafeFindings = z.object({
  ...sharedFindings,
  power: amountSchema,
  seating: z.array(z.enum(['indoor', 'outdoor', 'semi-outdoor'])).min(1),
  music: presenceSchema,
  toilet: presenceSchema,
  reservation: z.enum(['not-needed', 'recommended', 'required']),
})

const stayFindings = z.object({
  ...sharedFindings,
  cooling: z.enum(['ac', 'fan', 'ac-and-fan', 'open-air']),
  roomType: z.enum(['private-studio', 'private-room', 'shared-dorm']),
  bathroom: z.enum(['private', 'shared']),
  kitchen: z.enum(['private', 'shared', 'unavailable']),
  pool: presenceSchema,
})

const visited = {
  visitedAt: z.array(z.iso.date()).min(1),
  badge: z.enum(['approved', 'good-find']).nullable(),
  spending: spendingSchema.nullable(),
  review: localizedTextSchema,
  caveats: localizedTextSchema,
  gallery: z.array(imageSchema).min(1),
}

const notVisitedPlace = z.object({
  ...identity,
  category: categorySchema,
  visitedAt: z.null(),
  badge: z.null(),
  spending: z.null(),
  review: z.null(),
  caveats: z.null(),
  gallery: z.null(),
  findings: z.null(),
})

const cafePlace = z.object({
  ...identity,
  ...visited,
  category: z.enum(['cafe', 'restaurant', 'club']),
  findings: cafeFindings,
})

const stayPlace = z.object({
  ...identity,
  ...visited,
  category: z.literal('stay'),
  findings: stayFindings,
})

export const placesSchema = z.array(z.union([cafePlace, stayPlace, notVisitedPlace]))

export type Places = z.infer<typeof placesSchema>
