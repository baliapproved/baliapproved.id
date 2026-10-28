## Dependency Versions

Pin every `dependencies` and `devDependencies` entry in `package.json` to an exact stable version. Do not use semver ranges, dist tags such as `latest`, or prerelease versions unless explicitly approved.

Before adding or updating a dependency, verify its published versions at `https://npmx.dev/package/<name>` or `https://npmjs.com/package/<name>`. Never guess a version.

Use the newest stable version. Do not assume the registry's `latest` tag is stable.

If `latest` is a prerelease, report its exact version and the newest stable version, if available. Use the stable version unless that package has an approved prerelease exception. If no stable version exists, stop and ask for approval.

If the version cannot be verified, stop and ask rather than proceeding.

Exceptions apply only to the specified package, version, and scope. Approved prereleases must still use an exact version.

## Commit

- Always check `git log` first to follow existing commit message style and conventions.
- Format the commit body using bulleted points to describe changes.
- Compare the message with the whole commit, including what an amend already contains. Keep bullets that are still true, append a bullet for a change it does not mention, and fix a bullet that is now wrong.
- Never add `Co-authored-by` tags or credit AI assistants.

## Codebase Structure

Organize by vertical, meaning what the code does, not by technical type like `components`, `hooks`, `types`, `utils`, or `styles`. Code that changes together should live together. Read [The Vertical Codebase](https://tkdodo.eu/blog/the-vertical-codebase) for the reasoning behind this structure.

Each vertical represents one cohesive functionality and lives directly under `src/`. It can contain components, logic, types, data, styles, assets, tests, or anything else it needs.

Start from the route or page. Keep small local code close to where it is used. Extract a new vertical when a part becomes substantial, has its own behavior, or is reused.

Code shared across multiple verticals should become its own vertical. Generic reusable UI and patterns belong in `src/design-system/`.

Use relative imports within a vertical and `@/` imports between verticals. Avoid barrel files.

Framework specific files should still follow the same ownership rules. The framework should not determine the folder structure.
