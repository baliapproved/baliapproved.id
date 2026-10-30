import { z } from 'zod'

export const categorySchema = z.enum(['cafe', 'restaurant', 'stay'])
export type Category = z.infer<typeof categorySchema>

const localizedTextSchema = z.object({
  language: z.string().trim().min(1),
  value: z.string().trim().min(1),
})

const imageSchema = z.object({
  url: z.url(),
  width: z.number().positive(),
  height: z.number().positive(),
  alt: localizedTextSchema.nullish(),
})

const amountSchema = z.enum(['plenty', 'enough', 'limited', 'unavailable'])
const parkingSchema = z.enum(['plenty', 'enough', 'limited', 'unavailable', 'street'])

export const placesSchema = z.array(
  z.object({
    _id: z.string().trim().min(1),
    name: z.string().trim().min(1),
    slug: z.string().trim().min(1),
    category: categorySchema,
    area: z.string().trim().min(1),

    badge: z.enum(['approved', 'good-find']).nullish(),
    spending: z
      .object({
        min: z.number().int().positive().nullish(),
        max: z.number().int().positive().nullish(),
      })
      .nullish(),

    description: localizedTextSchema,
    review: localizedTextSchema.nullish(),
    caveats: localizedTextSchema.nullish(),

    contactLocation: z
      .object({
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
      .nullish(),

    visitedAt: z.array(z.iso.date()).nullish(),

    findings: z
      .object({
        wifiAvailable: z.boolean().nullish(),
        wifi: z.number().positive().nullish(),
        cooling: z.enum(['ac', 'fan', 'ac-and-fan', 'open-air']).nullish(),
        noise: z.enum(['quiet', 'moderate', 'loud']).nullish(),
        parking: z
          .object({
            motorbike: parkingSchema.nullish(),
            car: parkingSchema.nullish(),
          })
          .nullish(),

        power: amountSchema.nullish(),
        seating: z.array(z.enum(['indoor', 'outdoor', 'semi-outdoor'])).nullish(),
        music: z.boolean().nullish(),
        toilet: z.boolean().nullish(),
        reservation: z.enum(['not-needed', 'recommended', 'required']).nullish(),

        roomType: z.enum(['private-studio', 'private-room', 'shared-dorm']).nullish(),
        bathroom: z.enum(['private', 'shared']).nullish(),
        kitchen: z.enum(['private', 'shared', 'unavailable']).nullish(),
        pool: z.boolean().nullish(),
      })
      .nullish(),

    cutout: imageSchema,
    gallery: z.array(imageSchema).nullish(),
  }),
)

export type Places = z.infer<typeof placesSchema>
