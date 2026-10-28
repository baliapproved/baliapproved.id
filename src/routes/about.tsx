import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

// Placeholder until the about page is ported.
function About() {
  return <main className="flex-1" />
}
