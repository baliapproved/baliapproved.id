import { ActionError, defineAction } from "astro:actions";
import { z } from "astro/zod";
import { env } from "cloudflare:workers";

import { subscribe } from "@/newsletter/subscribe";

// Astro's default checkOrigin rejects cross-site form posts with 403, and
// action bodies are capped at 1 MB by default.
export const server = {
  subscribe: defineAction({
    accept: "form",
    input: z.object({
      email: z.string().trim().max(254).pipe(z.email()),
      company: z.string().optional(),
    }),
    handler: async ({ email, company }, { clientAddress }) => {
      // Bots fill the hidden company field; answer as if they signed up.
      if (company) return;

      for (const key of [
        `ip:${clientAddress}`,
        `email:${email.toLowerCase()}`,
      ]) {
        const { success } = await env.SIGNUP_LIMITER.limit({ key });
        if (!success) throw new ActionError({ code: "TOO_MANY_REQUESTS" });
      }

      try {
        await subscribe(email);
      } catch (error) {
        console.error(error);
        throw new ActionError({ code: "BAD_GATEWAY" });
      }
    },
  }),
};
