import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

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
        sealArea: z.string(),
        cover: image(),
        coverAlt: z.string(),
        mapsUrl: z.url(),
        address: z.string(),
        spending: z.string(),
        overallRating: z.number().min(0).max(5),
        approvedAt: z.coerce.date(),
        gallery: z
          .array(z.object({ src: image(), alt: z.string() }))
          .default([]),
      }),
  }),
};
