import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const handle = /^[\w.]+$/;
const phone = /^\+[\d ]+$/;

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
        approvedAt: z.coerce.date(),
        // Standout places, badged on catalog cards; approved ranks above good-find.
        badge: z.enum(["approved", "good-find"]).optional(),
        gallery: z
          .array(z.object({ src: image(), alt: z.string() }))
          .default([]),
      }),
  }),
};
