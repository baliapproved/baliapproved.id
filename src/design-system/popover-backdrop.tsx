import { Popover as PopoverPrimitive } from '@base-ui/react/popover'
import { cn } from 'cn'

// Kept apart from popover.tsx, which shadcn's CLI owns and may regenerate.
function PopoverBackdrop({ className, ...props }: PopoverPrimitive.Backdrop.Props) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Backdrop
        data-slot="popover-backdrop"
        className={cn(
          'fixed inset-0 isolate z-50 bg-black/10 duration-150 motion-reduce:animate-none! data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0',
          className,
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
}

export { PopoverBackdrop }
