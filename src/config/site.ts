export const site = {
  /** Canonical origin (no trailing slash). astro.config.mjs reads this as `site`. */
  url: "https://baliapproved.id",
  name: "Bali Approved",
  title: "Bali Approved | Honest Reviews of Places in Bali",
  description:
    "Firsthand reviews of places around Bali, covering ambience, practical details, and whether each one is worth your time.",
  language: "en",
  locale: "en_ID",
  themeColor: "#006241",
  defaultImage: "/og-image.png",
  defaultImageAlt: "Bali Approved seal",
} as const;

export type Site = typeof site;
