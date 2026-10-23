import type { APIRoute } from "astro";
import { z } from "astro/zod";
import { env } from "cloudflare:workers";

import { results, type Result } from "@/newsletter/results";
import { subscribe } from "@/newsletter/subscribe";

export const prerender = false;

const emailField = z.string().trim().max(254).pipe(z.email());

// Astro's default checkOrigin already rejects cross-site form posts with 403.
export const POST: APIRoute = async ({ request, clientAddress, redirect }) => {
  // Enhanced forms ask for JSON; native form posts get the result page, which
  // keeps the email out of the URL and survives a reload.
  const respond = (result: Result) =>
    request.headers.get("accept")?.includes("application/json")
      ? Response.json({ result }, { status: results[result].status })
      : redirect(`/subscribe?result=${result}`, 303);

  if (!(Number(request.headers.get("content-length")) <= 1024)) {
    return respond("invalid");
  }
  const form = await request.formData().catch(() => null);
  if (!form) return respond("invalid");

  // Bots fill the hidden company field; answer as if they signed up.
  if (form.get("company")) return respond("check-inbox");

  const email = emailField.safeParse(form.get("email"));
  if (!email.success) return respond("invalid");

  for (const key of [
    `ip:${clientAddress}`,
    `email:${email.data.toLowerCase()}`,
  ]) {
    const { success } = await env.SIGNUP_LIMITER.limit({ key });
    if (!success) return respond("rate-limited");
  }

  try {
    await subscribe(email.data);
  } catch (error) {
    console.error(error);
    return respond("unavailable");
  }
  return respond("check-inbox");
};
