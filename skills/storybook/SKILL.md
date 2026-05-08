---
name: storybook
description: Set up Storybook only when explicitly requested and justified.
---

# storybook

Use only when the user explicitly wants Storybook or component documentation tooling. Do not add Storybook automatically.

## Handle Migration

Canonical skill handle: `$storybook`. Legacy internal name: `storybook-optional-setup -> storybook`.

## Global Rules

- Analyze the project before editing files.
- Detect existing frameworks, build tools, package managers, scripts, lockfiles, and architecture boundaries.
- Install only dependencies that are clearly needed for the requested outcome.
- Do not add React, Vue, Svelte, Next.js, Nuxt, or another framework unless the user explicitly asks for it.
- Prefer existing project utilities and native browser APIs before adding new libraries.
- Keep the first pass minimal and iterative; avoid broad rewrites and unrelated formatting churn.
- Preserve accessibility, keyboard navigation, focus visibility, semantic HTML, responsive behavior, and performance budgets.
- Respect `prefers-reduced-motion` for all motion and animation work.
- Validate at the end using the project's existing scripts first, then focused additional checks when justified.
- Final response must include what changed, files touched, checks run, remaining risks or open points, and how the user continues.


## Workflow

1. Confirm Storybook is explicitly requested or already present.
2. Evaluate whether project size justifies docs tooling.
3. Install the minimal Storybook setup only when justified.
4. Add stories for central components rather than every small fragment.
5. Document how to run the docs and what maintenance cost remains.
