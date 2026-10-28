import { createFileRoute } from '@tanstack/react-router'

import { Hero } from '@/hero/Hero'

export const Route = createFileRoute('/{-$locale}/')({
  component: Home,
})

function Home() {
  return (
    <main className="flex-1 bg-border">
      <Hero />
    </main>
  )
}
