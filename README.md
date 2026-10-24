# Bali Approved

Firsthand reviews of places around Bali.

## Brand identity

The BA seal is the Bali Approved logo. Use it for browser and home-screen icons,
the social-share image, and the brand identity in the footer and About page.

The glowing petal is a decorative site graphic used in the header and weekly
update badge. It is not a replacement for the BA logo.

## Cloudflare setup

Two zone settings live in the Cloudflare dashboard, not in `wrangler.jsonc`.
Turn on SSL/TLS → Edge Certificates → Always Use HTTPS, or the site is also
served over plain HTTP. Add a 301 redirect from `www` to the apex domain.

## Analytics

PostHog settings are baked in at build time. Set the project token and ingestion
host in Cloudflare's build environment, and in your local environment for
production builds, before deploying. Runtime Worker variables cannot change
analytics in a site that is already built.

## Newsletter

`KIT_API_KEY` has to be a runtime Secret, not a Build variable like PostHog's
token. Keep the local key in `.env.local`. Do not create `.dev.vars`: when that
file exists, Wrangler ignores `.env` files.

After a reader confirms, send them to `https://baliapproved.id/newsletter/subscribed`.
Set that URL on the Kit form, under Confirmation email, After confirming
redirect to.

Kit confirmation emails inherit the account's default email template. After
editing `src/newsletter/confirmation-template.html`, paste the whole file into
[Bali Approved Confirmation](https://app.kit.com/account/email_layout_templates/5634036/edit)
and save; deploying the website does not update Kit. Keep it as the default in
Email templates. The form owns the subject, message, envelope image, and generated
confirmation link; the HTML template wraps that content through `message_content`.
Choose a separate template explicitly when designing future broadcasts.

The measured signup CPU and the rate limit's per-location behavior are in
[closed issue #15](https://github.com/baliapproved/baliapproved.id/issues/15).
