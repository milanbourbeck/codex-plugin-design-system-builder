# Design System Builder

## Purpose

Design token, component standard, and reusable section workflows for Vanilla HTML and Tailwind projects.

## Included Skills

- `build-design-system-foundation`
- `create-component-library`
- `storybook-optional-setup`

## When To Use

- A project needs consistent UI primitives.
- Repeated section patterns should be standardized.
- The user explicitly wants Storybook or docs tooling.

## When Not To Use

- The task is a one-off visual tweak.
- A design system already exists and only needs a tiny fix.
- Storybook was not requested and would add overhead.

## Installation

Install this plugin from the Premium Codex Workflows marketplace, or add this repository directly as a Git-backed plugin source.

Repository: `https://github.com/milanbourbeck/codex-plugin-design-system-builder.git`

## Example Prompts

- `@premium-html-uiux integriere den Premium HTML UI/UX Stack in dieses Vanilla HTML Projekt. Installiere nur, was wirklich gebraucht wird.`
- `$modernize-existing-html-ui analysiere diese Website und verbessere UI, Responsiveness, Semantik und Fokuszustände minimal-invasiv.`
- `$visual-qa-playwright prüfe die Seite in Desktop, Tablet und Mobile, dokumentiere Layout-Probleme und behebe die wichtigsten.`
- `$accessibility-optimizer prüfe Navigation, Formulare, Dialoge, Fokuszustände und reduced-motion.`
- `$performance-optimizer finde unnötige Bundle-Kosten, Bildprobleme, Layout Shifts und schwere Animationen.`
- `$build-design-system-foundation erstelle eine konsistente Designsystem-Basis für dieses HTML/Tailwind Projekt.`
- `$end-to-end-project-orchestrator bringe diese Landingpage von Ist-Zustand zu polished, tested und PR-ready.`

## Maintenance

- Keep skills narrow and descriptions explicit.
- Bump `.codex-plugin/plugin.json` version for meaningful releases.
- Run `node scripts/validate-plugin.mjs` before pushing.
- Add dependencies to templates only when they are the default for that plugin's workflow.
