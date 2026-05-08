---
name: components
description: Create reusable Vanilla HTML, Tailwind, daisyUI, or Web Awesome components.
---

# components

Use when the user wants reusable frontend components or section templates for Vanilla HTML, Tailwind, daisyUI, Web Awesome, or static-site projects.

## Handle Migration

Canonical skill handle: `$components`. Legacy internal name: `create-component-library -> components`.

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

1. Inspect the existing file structure and propose a lightweight `components` or `src/components` layout.
2. Create HTML templates for requested components with variants: primary, secondary, ghost, danger, disabled, and loading where relevant.
3. Include accessible markup, labels, roles only where needed, and keyboard behavior notes.
4. Avoid adding framework dependencies.
5. Validate examples against current CSS/build tooling.
