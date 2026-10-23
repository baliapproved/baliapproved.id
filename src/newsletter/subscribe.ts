import { getSecret } from "astro:env/server";
import { z } from "astro/zod";

const created = z.object({ subscriber: z.object({ state: z.string() }) });

// Enrolling an inactive subscriber in the form sends Kit's confirmation email.
export async function subscribe(email: string) {
  const apiKey = getSecret("KIT_API_KEY");
  if (!apiKey) throw new Error("KIT_API_KEY is not set");
  const headers = {
    "X-Kit-Api-Key": apiKey,
    "Content-Type": "application/json",
  };

  // Kit defaults new subscribers to active and keeps an existing one's state.
  const createResponse = await fetch("https://api.kit.com/v4/subscribers", {
    method: "POST",
    headers,
    body: JSON.stringify({ email_address: email, state: "inactive" }),
    signal: AbortSignal.timeout(5000),
  });
  if (!createResponse.ok) {
    throw new Error(`Kit create failed: ${createResponse.status}`);
  }
  const { subscriber } = created.parse(await createResponse.json());

  // Cancelled, bounced, and complained subscribers stay out of the form.
  if (subscriber.state !== "inactive" && subscriber.state !== "active") return;

  const enrollResponse = await fetch(
    "https://api.kit.com/v4/forms/10086334/subscribers",
    {
      method: "POST",
      headers,
      body: JSON.stringify({ email_address: email }),
      signal: AbortSignal.timeout(5000),
    },
  );
  if (!enrollResponse.ok) {
    throw new Error(`Kit enroll failed: ${enrollResponse.status}`);
  }
}
