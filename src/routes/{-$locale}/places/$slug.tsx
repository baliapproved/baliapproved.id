import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/{-$locale}/places/$slug')({
  component: PlacePage,
})

// Placeholder until the place page is ported.
function PlacePage() {
  return <main className="flex-1" />
}
