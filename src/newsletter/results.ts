// What a signup attempt tells the reader. The status is the same for the JSON
// response and the result page, and no result reveals subscriber state.
export const results = {
  "check-inbox": {
    status: 200,
    title: "Check your inbox",
    message:
      "Confirm your subscription with the link we sent. If you're already subscribed, there's nothing more to do.",
  },
  invalid: {
    status: 400,
    title: "That email doesn't look right",
    message: "Check the address and try again.",
  },
  "rate-limited": {
    status: 429,
    title: "Too many tries",
    message: "Please wait a minute, then try again.",
  },
  unavailable: {
    status: 502,
    title: "We couldn't sign you up just now",
    message:
      "Something went wrong on our side. Please try again in a few minutes.",
  },
} as const;

export type Result = keyof typeof results;
