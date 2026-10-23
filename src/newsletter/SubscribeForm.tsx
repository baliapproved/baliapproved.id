import { actions, isInputError } from "astro:actions";
import {
  useRef,
  useState,
  useSyncExternalStore,
  type SubmitEvent,
} from "react";

import { actions as websiteActions, placements } from "@/analytics/actions";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/design-system/dialog";
import { Button } from "@/design-system/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/design-system/input-group";

import { results, type Result } from "./results";

const subscribeToNothing = () => () => {};

interface PostHog {
  capture(event: string, properties: Record<string, unknown>): void;
}

export function SubscribeForm({
  className,
  placement,
}: {
  className?: string;
  placement: "hero" | "footer";
}) {
  // False in the server HTML and during hydration, true after. The button
  // stays disabled until then, so an early Enter can't submit the form
  // natively and put the email in the URL.
  const hydrated = useSyncExternalStore(
    subscribeToNothing,
    () => true,
    () => false,
  );
  const [submitting, setSubmitting] = useState(false);
  // The last result stays rendered so the dialog can animate out.
  const [result, setResult] = useState<Result | null>(null);
  const [open, setOpen] = useState(false);
  const input = useRef<HTMLInputElement>(null);

  async function onSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmitting(true);

    let next: Result = "unavailable";
    try {
      const { error } = await actions.subscribe(new FormData(form));
      if (!error) next = "check-inbox";
      else if (isInputError(error)) next = "invalid";
      else if (error.code === "TOO_MANY_REQUESTS") next = "rate-limited";
    } catch {
      // A network failure counts as unavailable.
    }

    setSubmitting(false);
    setResult(next);
    setOpen(true);
    if (next === "check-inbox") {
      form.reset();
      try {
        (window as Window & { posthog?: PostHog }).posthog?.capture(
          "website_action",
          {
            action_id: "newsletter_signup_accepted",
            action_name: websiteActions.newsletter_signup_accepted,
            breakdowns: [
              {
                key: "placement",
                label: "Placement",
                value_id: placement,
                value_name: placements[placement],
              },
            ],
          },
        );
      } catch {
        // Analytics must never change an accepted signup's result.
      }
    }
  }

  return (
    <form className={className} onSubmit={onSubmit}>
      <InputGroup className="h-12 bg-background bg-clip-padding sm:h-10">
        <InputGroupInput
          ref={input}
          type="email"
          name="email"
          required
          aria-label="Email address"
          placeholder="name@email.com"
          autoComplete="email"
        />
        <InputGroupAddon
          align="inline-end"
          className="h-full py-0.5 pr-0.5 has-[>button]:mr-0"
        >
          <InputGroupButton
            type="submit"
            size="sm"
            className="h-full"
            disabled={!hydrated || submitting}
          >
            {submitting ? "Subscribing…" : "Subscribe"}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      {/* Bots fill this; people never see or reach it. */}
      <div className="sr-only" aria-hidden="true">
        <input type="text" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        {result && (
          // Opened from code, so return focus to the email field on close.
          <DialogContent
            finalFocus={input}
            data-success={result === "check-inbox" || undefined}
            className="group/newsletter data-success:gap-5 data-success:px-8 data-success:pt-10 data-success:pb-8 data-success:duration-200 motion-reduce:animate-none"
          >
            {result === "check-inbox" && (
              <svg
                aria-hidden="true"
                viewBox="0 0 180 136"
                fill="none"
                className="mx-auto h-28 w-40 motion-safe:group-data-open/newsletter:animate-in motion-safe:group-data-open/newsletter:fade-in-0 motion-safe:duration-200"
              >
                <g
                  transform="rotate(-7 90 68)"
                  stroke="#795449"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                >
                  <path
                    d="M22 58 86 17a7 7 0 0 1 8 0l64 41v55H22Z"
                    fill="#DF8B73"
                  />
                  <rect
                    x="40"
                    y="25"
                    width="100"
                    height="82"
                    rx="2"
                    fill="#FFF8EB"
                  />
                  <path
                    d="M51 42h39m-39 8h27m-27 16h59m-59 8h47"
                    stroke="#B6A795"
                  />
                  <path d="M116 33h16v21h-16z" fill="#CB654C" stroke="none" />
                  <circle
                    cx="124"
                    cy="43.5"
                    r="4"
                    fill="#FFF8EB"
                    stroke="none"
                  />
                  <path
                    d="m22 58 68 44 68-44v55a4 4 0 0 1-4 4H26a4 4 0 0 1-4-4Z"
                    fill="#EEAF99"
                  />
                  <path d="m24 115 44-27m88 27-44-27" />
                </g>
              </svg>
            )}
            <DialogHeader className="group-data-success/newsletter:items-center group-data-success/newsletter:gap-3 group-data-success/newsletter:text-center">
              <DialogTitle className="group-data-success/newsletter:text-3xl group-data-success/newsletter:leading-tight group-data-success/newsletter:tracking-tight">
                {results[result].title}
              </DialogTitle>
              <DialogDescription>{results[result].message}</DialogDescription>
            </DialogHeader>
            {result === "check-inbox" && (
              <div className="flex flex-col items-center gap-4">
                <DialogClose render={<Button className="w-full" size="lg" />}>
                  Back to exploring
                </DialogClose>
                <p className="text-center text-xs text-muted-foreground">
                  No email yet? Take a peek in Spam or Promotions.
                </p>
              </div>
            )}
          </DialogContent>
        )}
      </Dialog>
    </form>
  );
}
