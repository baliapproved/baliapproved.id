import { useId, useRef, useState, type SubmitEvent } from 'react'
import { useIntlayer } from 'react-intlayer'
import { toast } from 'sonner'

import { useWebsiteAction } from '@/analytics/use-web-action'
import { Button } from '@/design-system/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/design-system/dialog'
import { Field, FieldLabel } from '@/design-system/field'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/design-system/input-group'

import { NewsletterEnvelope } from './newsletter-envelope'
import { subscribe, type SubscribeResult } from './subscribe'

type Status = 'idle' | 'submitting' | 'success'

export function SubscribeForm({ placement = 'hero' }: { placement?: 'hero' | 'footer' }) {
  const content = useIntlayer('newsletter')
  const id = useId()
  const emailId = `${id}-email`
  const trackWebsiteAction = useWebsiteAction()
  const [status, setStatus] = useState<Status>('idle')
  const [open, setOpen] = useState(false)
  const emailInput = useRef<HTMLInputElement>(null)

  async function onSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    const formElement = event.currentTarget
    const form = new FormData(formElement)
    const email = String(form.get('email') ?? '').trim()
    const company = String(form.get('company') ?? '')

    setStatus('submitting')
    let result: SubscribeResult
    try {
      result = await subscribe({ data: { email, company } })
    } catch {
      result = { status: 'error' }
    }

    if (result.status === 'rate-limited') {
      setStatus('idle')
      toast.error(content.rateLimited.value)
      return
    }

    if (result.status === 'error') {
      setStatus('idle')
      toast.error(content.error.value)
      return
    }

    setStatus('success')
    formElement.reset()
    setOpen(true)

    // The dashboard counts website_action events by action_id. Sent after the result is
    // shown so analytics can never change an accepted signup.
    trackWebsiteAction('newsletter_signup_accepted', placement)
  }

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="mt-6 w-full sm:max-w-md"
        aria-busy={status === 'submitting'}
      >
        <Field>
          <FieldLabel htmlFor={emailId} className="sr-only">
            {content.emailLabel}
          </FieldLabel>
          <InputGroup className="bg-background">
            <InputGroupInput
              ref={emailInput}
              id={emailId}
              name="email"
              type="email"
              required
              autoComplete="email"
              inputMode="email"
              placeholder="you@example.com"
            />
            <InputGroupAddon align="inline-end">
              <InputGroupButton type="submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? content.submitting : content.submit}
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </Field>

        {/* Honeypot. Hidden from people and assistive tech, bots fill it. */}
        <div className="absolute -left-2499.75 size-px overflow-hidden" aria-hidden="true">
          <input name="company" type="text" tabIndex={-1} autoComplete="off" />
        </div>
      </form>

      <Dialog open={open} onOpenChange={setOpen}>
        {status === 'success' && (
          <DialogContent
            finalFocus={emailInput}
            closeLabel={content.closeDialog.value}
            className="group/newsletter max-h-[calc(100dvh-2rem)] gap-5 overflow-y-auto px-6 pt-8 pb-6 duration-200 motion-reduce:animate-none sm:px-8 sm:pt-10 sm:pb-8"
          >
            <NewsletterEnvelope className="mx-auto h-24 w-32 motion-safe:duration-200 motion-safe:group-data-open/newsletter:animate-in motion-safe:group-data-open/newsletter:fade-in-0 sm:h-28 sm:w-40" />
            <DialogHeader className="items-center gap-3 text-center">
              <DialogTitle className="text-2xl leading-tight tracking-tight sm:text-3xl">
                {content.checkInbox}
              </DialogTitle>
              <DialogDescription className="text-sm/6 text-pretty">
                {content.success}
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col items-center gap-4">
              <DialogClose render={<Button size="lg" className="w-full" />}>
                {content.backToExploring}
              </DialogClose>
              <p className="text-center text-xs/5 text-muted-foreground">{content.inboxHint}</p>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  )
}
