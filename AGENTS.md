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
