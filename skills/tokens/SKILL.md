---
name: tokens
description: Build a design system foundation with tokens, rules, and component standards.
---

# tokens

Use when the user wants to establish or improve a design system for HTML/Tailwind projects, including tokens, typography, spacing, buttons, forms, cards, nav, modals, and reusable sections.

## Handle Migration

Canonical skill handle: `$tokens`. Legacy internal name: `build-design-system-foundation -> tokens`.

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

1. Analyze existing styles, tokens, component patterns, Tailwind config, daisyUI usage, and HTML conventions.
2. Define tokens for colors, typography, spacing, radius, shadow, and motion.
3. Create standards for buttons, inputs, cards, navbar, modal/dialog, badges, pricing cards, feature sections, testimonials, and FAQ.
4. Use Tailwind, daisyUI, and Web Awesome only where they fit the current stack.
5. Build accessible responsive examples.
6. Document usage, variants, constraints, validation checks, and known gaps.
