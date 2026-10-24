// Ids are what the dashboard counts by; names are only what it shows.
export const actions: Record<string, string> = {
  maps_click: "Google Maps clicks",
  collaboration_click: "Collaboration inquiry clicks",
  whatsapp_click: "WhatsApp contact clicks",
  instagram_click: "Instagram clicks",
  tiktok_click: "TikTok clicks",
  website_click: "Website clicks",
  phone_click: "Phone call clicks",
  newsletter_signup_accepted: "Newsletter signup submissions",
};

export const placements: Record<string, string> = {
  place_review: "Place review",
  hero: "Hero",
  footer: "Footer",
  about: "About page",
};

// Links about a place carry data-place-id and data-place-name, so its clicks
// stay under place.id when the title changes.
export const breakdowns = [
  { key: "place", label: "Place", id: "placeId", name: "placeName" },
];
