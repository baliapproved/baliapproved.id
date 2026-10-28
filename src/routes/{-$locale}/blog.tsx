import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/{-$locale}/blog')({
  component: Blog,
})

// Placeholder until the blog page is ported.
function Blog() {
  return <main className="flex-1" />
}
