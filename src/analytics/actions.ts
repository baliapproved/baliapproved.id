// IDs are what the dashboard counts; names are what it displays.
export const actions = {
  maps_click: 'Google Maps clicks',
  collaboration_click: 'Collaboration inquiry clicks',
  whatsapp_click: 'WhatsApp contact clicks',
  instagram_click: 'Instagram clicks',
  threads_click: 'Threads clicks',
  tiktok_click: 'TikTok clicks',
  website_click: 'Website clicks',
  phone_click: 'Phone call clicks',
  newsletter_signup_accepted: 'Newsletter signup submissions',
} as const

export const placements = {
  place_review: 'Place review',
  hero: 'Hero',
  footer: 'Footer',
  about: 'About page',
} as const

export type ActionId = keyof typeof actions
export type PlacementId = keyof typeof placements
