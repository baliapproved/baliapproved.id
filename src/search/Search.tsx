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
      className="size-[44px] rounded-full"
    >
      <RiSearchLine aria-hidden="true" className="size-[16px]" />
    </Button>
  )
}
