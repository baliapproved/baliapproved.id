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

## Commit

- Always check `git log` first to follow existing commit message style and conventions.
- Format the commit body using bulleted points to describe changes.
- Compare the message with the whole commit, including what an amend already contains. Keep bullets that are still true, append a bullet for a change it does not mention, and fix a bullet that is now wrong.
- Never add `Co-authored-by` tags or credit AI assistants.

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

## Code Guidelines

The codebase should stay lean.

Prefer inline code, logic, functions, and files first. Keep logic in place unless splitting it out is specifically requested, the complexity is already concrete, or the same implementation is being used more than two times.

Do not write optional code or config that only repeats a tool's default behavior. Prefer omitted defaults over explicit self-documenting settings unless changing behavior, correctness, or a user request requires it.

## Codebase Structure

Organize by vertical (what the code does), not by technical type (`components`, `hooks`, `types`, `utils`, `constants`). See [The Vertical Codebase](https://tkdodo.eu/blog/the-vertical-codebase). Code that changes together lives together.

- A vertical groups one functionality directly under `src/`. It can hold Astro components, React islands, logic, types, data, styles, and assets. What a file is technically does not decide where it goes.
- Start from the page. Keep small page-only Astro UI inline by default. Extract substantial, cohesive sections into their owning verticals as described below. Verticals can also hold shared functionality or required React islands. Do not add a `features/` wrapper around verticals.
- Keep feature-specific assets and styles with their feature. Keep Astro and React parts of the same feature together.
- Code used by several verticals becomes its own vertical, named for what it does. Shared code that is not domain-specific belongs in `src/design-system/`: reusable assets, components, hooks, styles, and patterns.
- Shared site layout, footer, theme controls, and site settings belong in `src/site/`. Analytics belongs in `src/analytics/`; shared SEO markup belongs in `src/seo/`.
- Place content and its images live together in `src/places/content/`, alongside the shared place UI in `src/places/`. Keep collection registration in `src/content.config.ts` and preserve entry IDs and URLs when moving content.
- Do not split one functionality across top-level type directories such as `components`, `hooks`, `types`, `utils`, `constants`, `data`, or `styles`.
- Import the file that defines the code, such as `@/design-system/button`. Do not add barrel files that re-export a vertical. Use relative imports within a vertical and `@/` imports between verticals.
- Keep `components.json` aliases and its Tailwind CSS path aligned with the design system so shadcn generates files in the correct place.
- Choosing the vertical is a judgment, not a map from file type to directory. Create a vertical only when there is a concrete need for it.

### Astro Pages

Routes and endpoints stay in `src/pages/`. Keep small page-only Astro UI and its styles inline by default. Extract substantial, cohesive sections into their owning verticals when keeping their markup, styles, behavior, and assets together improves maintainability. Reuse by another route is sufficient, but not required. Line count alone is not a reason to extract a section.

Pages retain route handling, metadata, page-specific data loading, simple page markup, and section composition. Keep section ordering visible in the page. Do not turn a page into a wrapper that only renders an extracted whole-page component.

React islands that require a separate framework component for hydration stay in their verticals. Shared site layouts and design-system components also stay separate. An island alone does not require extracting its surrounding Astro markup.

Keep framework entrypoints such as `src/content.config.ts` in their required locations when needed. Keep unprocessed assets that need stable public URLs in `public/`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
