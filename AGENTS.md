## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Dependency Versions

Keep every package dependency in `package.json` files pinned to an exact stable version. Do not use semver ranges, `latest`, or prerelease tags for `dependencies` or `devDependencies` unless the user explicitly approves that exception.

Before adding or updating a dependency, always check `https://npmx.dev/package/<name>` or `https://npmjs.com/package/<name>` for the actual latest stable version. Do not guess version numbers; only use versions confirmed from the registry. If the version cannot be verified, stop and ask the user rather than proceeding.

Do not assume the registry's `latest` tag means a stable release. If it points to a prerelease (such as an alpha, beta, or release candidate), or no stable release exists, stop before adding or updating that package. Report the exact prerelease version and the newest stable version, if available, and ask the user whether to use the stable release or approve a prerelease exception. Do not silently choose either. Record approved exceptions here with the package name and scope; they do not apply to other packages. Even an approved prerelease must be pinned to its exact version unless the user also explicitly approves a range or tag.

## Cloudflare CLI

- Choose [`cf`](https://developers.cloudflare.com/cf/) or [Wrangler](https://developers.cloudflare.com/workers/wrangler/) using current official docs.
- Verify installation before use. Ask the user to install missing global CLIs manually; repo-local CLIs may be installed as dependencies under the version rules above.
- Run local Wrangler with `pnpm exec wrangler`. Do not use on-demand CLI downloads (`pnpm dlx`, `npx`).
- Before running project commands, check that `wrangler.jsonc` is compatible with the installed CLI and whether it needs a migration.
- When a task needs a setting, add or change that key in `wrangler.jsonc` without asking, e.g. `assets.not_found_handling` for a 404 page. First confirm the key and value in the official docs or `node_modules/wrangler/config-schema.json`, then mention the change in your summary.
- Ask first before migrating the config format, restructuring or rewriting the file, letting a CLI rewrite it, or changing `name`, `compatibility_date`, compatibility flags, routes, domains, or bindings.

## Production deploys

The only allowed production deploy is a push to the GitHub `main` branch.

## README

Keep `README.md` to what the code and config cannot tell a reader: what the product is for, setup order, and non-obvious gotchas or steps. Leave out anything a file already states, such as scripts, env values, file locations, or rules in this file, and facts that would not change what a reader does.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
