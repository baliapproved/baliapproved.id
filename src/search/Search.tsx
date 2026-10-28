import { RiSearchLine } from '@remixicon/react'
import { useIntlayer } from 'react-intlayer'

import { Button } from '@/design-system/button'

// Trigger only for now; the search dialog comes with the places content.
export function Search() {
  const { navigation } = useIntlayer('site')

  return (
    <Button
      variant="outline"
      size="icon-lg"
      aria-label={navigation.search.value}
      className="min-h-11 min-w-11 rounded-full"
    >
      <RiSearchLine aria-hidden="true" />
    </Button>
  )
}
