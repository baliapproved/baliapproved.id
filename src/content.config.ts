import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const handle = /^[\w.]+$/;
const phone = /^\+[\d ]+$/;
const amount = z.enum(["plenty", "enough", "limited"]);
const parking = z.enum([...amount.options, "street", "unavailable"]);

export const collections = {
  places: defineCollection({
    loader: glob({
      base: "./src/places/content",
      pattern: "**/index.md",
      // Keep content and analytics IDs independent of folder names and URL slugs.
      generateId: ({ data }) => String(data.place_id),
    }),
    schema: ({ image }) =>
      z
        .object({
          // Permanent analytics identity; preserve it when renaming, moving, or migrating a place.
          place_id: z.string().min(1),
          slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
          title: z.string(),
          category: z.enum(["cafes", "restaurants", "stays", "clubs"]),
          // Our review.
          description: z.string().optional(),
          // Short factual intro shown in About, separate from our review.
          about: z.string(),
          area: z.string(),
          cover: image().optional(),
          coverAlt: z.string().optional(),
          // Transparent-background subject shown on catalog cards.
          cutout: z.object({ src: image(), alt: z.string() }),
          mapsUrl: z.url(),
          // Handles without the @; every place must have Instagram.
          instagram: z.string().regex(handle),
          tiktok: z.string().regex(handle).optional(),
          website: z.url().optional(),
          // International format, e.g. +62 851 9004 1547.
          whatsapp: z.string().regex(phone).optional(),
          phone: z.string().regex(phone).optional(),
          address: z.string(),
          spending: z.string().optional(),
          // Leave out for places we haven't visited yet; once set, the visit fields are required.
          lastVisitedAt: z.coerce.date().optional(),
          // What we found on that visit, kept as values so places can be filtered later.
          // Download speed in Mbps, or confirmed availability without a speed test.
          wifi: z
            .union([z.number().positive(), z.literal("available")])
            .optional(),
          power: amount.optional(),
          seating: z
            .array(z.enum(["indoor", "outdoor", "semi-outdoor"]))
            .min(1)
            .optional(),
          cooling: z.enum(["ac", "fan", "ac-and-fan", "open-air"]).optional(),
          noise: z.enum(["quiet", "moderate", "loud"]).optional(),
          // null means the availability has not been confirmed.
          music: z.boolean().nullable().optional(),
          toilet: z.boolean().optional(),
          reservation: z
            .enum(["not-needed", "recommended", "required"])
            .optional(),
          roomType: z
            .enum(["private-studio", "private-room", "shared-dorm"])
            .optional(),
          bathroom: z.enum(["private", "shared"]).optional(),
          kitchen: z.enum(["private", "shared", "unavailable"]).optional(),
          pool: z.boolean().optional(),
          parking: z.object({ motorbike: parking, car: parking }).optional(),
          // What we think could be better, shown above the findings.
          caveats: z.string().optional(),
          // Standout places, badged on catalog cards; approved ranks above good-find.
          badge: z.enum(["approved", "good-find"]).optional(),
          gallery: z
            .array(z.object({ src: image(), alt: z.string() }))
            .default([]),
        })
        .superRefine((data, ctx) => {
          if (!data.lastVisitedAt) return;

          const fields = [
            "description",
            "cover",
            "coverAlt",
            "spending",
            "cooling",
            "parking",
            "caveats",
            ...(data.category === "cafes"
              ? ([
                  "wifi",
                  "power",
                  "seating",
                  "noise",
                  "music",
                  "toilet",
                  "reservation",
                ] as const)
              : data.category === "stays"
                ? ([
                    "roomType",
                    "bathroom",
                    "wifi",
                    "noise",
                    "kitchen",
                    "pool",
                  ] as const)
                : []),
          ] as const;

          for (const field of fields) {
            if (data[field] === undefined) {
              ctx.addIssue({
                code: "custom",
                path: [field],
                message: "Required for visited places",
              });
            }
          }
        }),
  }),
};
