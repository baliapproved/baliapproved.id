// What a signup attempt tells the reader. New, duplicate, and excluded
// addresses all get check-inbox, so no result reveals subscriber state.
export const results = {
  "check-inbox": {
    title: "Check your inbox",
    message:
      "Confirm your subscription with the link we sent. If you're already subscribed, there's nothing more to do.",
  },
  invalid: {
    title: "That email doesn't look right",
    message: "Check the address and try again.",
  },
  "rate-limited": {
    title: "Too many tries",
    message: "Please wait a minute, then try again.",
  },
  unavailable: {
    title: "We couldn't sign you up just now",
    message:
      "Something went wrong on our side. Please try again in a few minutes.",
  },
} as const;

export type Result = keyof typeof results;
