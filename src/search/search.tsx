import { RiSearchLine } from '@remixicon/react'
import { useState } from 'react'
import { useIntlayer } from 'react-intlayer'

import { Button } from '@/design-system/button'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandList,
} from '@/design-system/command'

export function Search() {
  const { navigation } = useIntlayer('site')
  const content = useIntlayer('search')
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        variant="outline"
        size="icon-lg"
        aria-label={navigation.search.value}
        onClick={() => setOpen(true)}
        className="size-11 rounded-full"
      >
        <RiSearchLine aria-hidden="true" />
      </Button>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title={content.title.value}
        description={content.description.value}
      >
        <Command label={content.title.value}>
          <CommandInput placeholder={content.placeholder.value} />
          <CommandList aria-label={content.title.value}>
            <CommandEmpty>{content.empty}</CommandEmpty>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}
