import { useState, type SubmitEvent } from 'react'
import { useIntlayer } from 'react-intlayer'

import { useWebsiteAction } from '@/analytics/use-web-action'
import { Field, FieldError, FieldLabel } from '@/design-system/field'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/design-system/input-group'

import { subscribe, type SubscribeResult } from './subscribe'

type Status = 'idle' | 'submitting' | 'success' | 'invalid' | 'rate-limited' | 'error'

export function SubscribeForm() {
  const content = useIntlayer('newsletter')
  const trackWebsiteAction = useWebsiteAction()
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const email = String(form.get('email') ?? '').trim()
    const company = String(form.get('company') ?? '')

    if (!event.currentTarget.checkValidity()) {
      setStatus('invalid')
      return
    }

    setStatus('submitting')
    let result: SubscribeResult
    try {
      result = await subscribe({ data: { email, company } })
    } catch {
      result = { status: 'error' }
    }
    setStatus(result.status)

    // The dashboard counts website_action events by action_id. Sent after the result is
    // shown so analytics can never change an accepted signup.
    if (result.status === 'success') {
      trackWebsiteAction('newsletter_signup_accepted', 'hero')
    }
  }

  if (status === 'success') {
    return (
      <p role="status" className="mt-6 text-sm/6 text-pretty text-foreground">
        {content.success}
      </p>
    )
  }

  const message =
    status === 'invalid'
      ? content.invalidEmail
      : status === 'rate-limited'
        ? content.rateLimited
        : status === 'error'
          ? content.error
          : null

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="mt-6 w-full sm:max-w-md"
      aria-busy={status === 'submitting'}
    >
      <Field data-invalid={status === 'invalid' || undefined}>
        <FieldLabel htmlFor="newsletter-email" className="sr-only">
          {content.emailLabel}
        </FieldLabel>
        <InputGroup className="bg-background">
          <InputGroupInput
            id="newsletter-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            placeholder="you@example.com"
            aria-invalid={status === 'invalid'}
            aria-describedby={message ? 'newsletter-message' : undefined}
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? content.submitting : content.submit}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <FieldError id="newsletter-message">{message}</FieldError>
      </Field>

      {/* Honeypot. Hidden from people and assistive tech, bots fill it. */}
      <div className="absolute -left-2499.75 size-px overflow-hidden" aria-hidden="true">
        <input name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>
    </form>
  )
}
