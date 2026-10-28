import { RiSearchLine } from '@remixicon/react'

import { Button } from '@/design-system/button'

// Trigger only for now; the search dialog comes with the places content.
export function Search() {
  return (
    <Button
      variant="outline"
      size="icon-lg"
      aria-label="Search"
      className="min-h-11 min-w-11 rounded-full"
    >
      <RiSearchLine aria-hidden="true" />
    </Button>
  )
}
