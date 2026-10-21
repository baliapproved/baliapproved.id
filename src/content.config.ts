import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const handle = /^[\w.]+$/;
const phone = /^\+[\d ]+$/;
const amount = z.enum(["plenty", "enough", "limited"]);
const parking = z.enum([...amount.options, "street"]);

export const collections = {
  places: defineCollection({
    loader: glob({
      base: "./src/places/content",
      pattern: "**/index.md",
      // Keep content and analytics IDs independent of folder names and URL slugs.
      generateId: ({ data }) => String(data.place_id),
    }),
    schema: ({ image }) =>
      z.object({
        approvalNumber: z.number().int().positive(),
        // Permanent analytics identity; preserve it when renaming, moving, or migrating a place.
        place_id: z.string().min(1),
        slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
        title: z.string(),
        category: z.enum(["cafes", "restaurants", "stays", "clubs"]),
        description: z.string(),
        // Short factual intro shown in About, separate from our review.
        about: z.string(),
        sealArea: z.string(),
        cover: image(),
        coverAlt: z.string(),
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
        spending: z.string(),
        lastVisitedAt: z.coerce.date(),
        // What we found on that visit, kept as values so places can be filtered later.
        // Download speed in Mbps from a speed test; omit when we did not measure it.
        wifi: z.number().positive().optional(),
        power: amount.optional(),
        seating: z.array(z.enum(["indoor", "outdoor"])).optional(),
        cooling: z.enum(["ac", "open-air"]),
        noise: z.enum(["quiet", "moderate", "loud"]).optional(),
        music: z.boolean().optional(),
        toilet: z.boolean().optional(),
        reservation: z
          .enum(["not-needed", "recommended", "required"])
          .optional(),
        parking: z.object({ motorbike: parking, car: parking }),
        // What we think could be better, shown above the findings.
        caveats: z.string(),
        // Standout places, badged on catalog cards; approved ranks above good-find.
        badge: z.enum(["approved", "good-find"]).optional(),
        gallery: z
          .array(z.object({ src: image(), alt: z.string() }))
          .default([]),
      }),
  }),
};
