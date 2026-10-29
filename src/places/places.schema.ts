import { z } from 'zod'

// Listing fields only. Content files keep the rest for the place page.
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
