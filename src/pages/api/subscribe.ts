import type { APIRoute } from "astro";
import { z } from "astro/zod";
import { env } from "cloudflare:workers";

import { subscribe } from "@/newsletter/subscribe";

export const prerender = false;

const emailField = z.string().trim().max(254).pipe(z.email());

// Astro's default checkOrigin already rejects cross-site form posts with 403.
export const POST: APIRoute = async ({ request, clientAddress }) => {
  if (!(Number(request.headers.get("content-length")) <= 1024)) {
    return new Response(null, { status: 413 });
  }
  const form = await request.formData().catch(() => null);
  if (!form) return new Response(null, { status: 400 });

  // Bots fill the hidden company field; answer as if they signed up.
  if (form.get("company")) return new Response(null, { status: 204 });

  const email = emailField.safeParse(form.get("email"));
  if (!email.success) return new Response(null, { status: 400 });

  for (const key of [
    `ip:${clientAddress}`,
    `email:${email.data.toLowerCase()}`,
  ]) {
    const { success } = await env.SIGNUP_LIMITER.limit({ key });
    if (!success) return new Response(null, { status: 429 });
  }

  try {
    await subscribe(email.data);
  } catch (error) {
    console.error(error);
    return new Response(null, { status: 502 });
  }
  return new Response(null, { status: 204 });
};
