# Design System Builder Agent Instructions

## Repository Focus

- Maintain the @ds plugin for design tokens, component standards, reusable UI sections, and optional documentation tooling.
- Storybook is only for explicit user requests or strong justification.
- Keep design-system guidance practical for Vanilla HTML, Tailwind, daisyUI, and Web Awesome interoperability.

## Quality Priorities

- Tokens should define usable color, typography, spacing, radius, shadow, border, motion, and breakpoint roles.
- Component standards should describe variants, states, accessibility, responsive behavior, and anti-patterns.
- Reusable sections should support real product composition instead of decorative fragments.
- Documentation should be concise enough to guide implementation without becoming a maintenance burden.

## Validation

- Keep .codex-plugin/plugin.json valid with canonical handle @ds.
- Keep skill folders and frontmatter names aligned: $tokens, $components, $storybook.
- Run scripts/validate-plugin.mjs when possible.
