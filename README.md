# Cafe Journal — Warm Material (web design system)

A React + TypeScript + Storybook implementation of the approved **"Warm
Material"** direction for the Cafe Journal redesign.

## What this is

This is a **design-tool artifact**, built to let the design language be
prototyped, previewed, and synced into design tooling (e.g. Claude Design)
as real, working components. It is **not** the production app.

The production target for these designs is the existing Android app,
`jordanprepos/cafe-journal-3` (Kotlin, Jetpack Compose, Material 3) — see
`../README.md` in this bundle for the full handoff spec. That document is
explicit that the HTML/canvas references in this bundle "should not be
ported, transpiled or embedded," and this package doesn't change that: the
Android app should be built with Compose composables against its own
`ui/theme` package, not by consuming this one.

What this package is *for* instead: a faithful, componentized rendering of
the same design language in a format design tools and non-Android
collaborators can work with directly — Storybook previews, a real component
API, and (via a future `/design-sync`) components a design agent can build
new screens out of.

## Source of truth

Every value here — colors, radii, spacing, type scale, copy — is ported
1:1 from `../Screens Warm Material.dc.html`, the canvas board named as the
source of truth in the handoff README, cross-checked against
`../README.md`'s §Design Tokens.

## Structure

- `src/tokens.css` — the full light/dark token set as CSS custom properties
  (`--cj-*`), plus the `Plus Jakarta Sans` font import.
- `src/ThemeProvider.tsx` — applies the token set to a subtree via
  `data-cj-theme="light" | "dark"`.
- `src/icons.tsx` — every icon glyph used in the mocks, as small SVG React
  components (map to Material Symbols equivalents — see the handoff
  README's §Assets for the Android names).
- `src/components/` — primitives: `Button`, `Chip`, `Card`, `StarRating`,
  `TextField`, `Switch`, `NavBar`, `AICard`, `Thumbnail`, `IconButton`,
  `SectionLabel`, plus `PhoneFrame`/`StatusBar` presentation scaffolding
  for Storybook.
- `src/screens/` — the nine screens from the handoff spec, each a typed,
  data-driven component: `JournalScreen`, `DetailScreen`, `LogVisitScreen`,
  `PlacesScreen`, `StatsScreen`, `ShortlistScreen`, `SearchScreen`,
  `FirstRunScreen`, `ProfileScreen`.
- `src/types.ts` / `src/sampleData.ts` — data shapes mirrored from the
  Android `CafeVisit` model, and sample data for stories/previews.

## Develop

```sh
npm install
npm run dev            # Storybook at localhost:6006
npm run typecheck
npm run build           # library build (dist/) via Vite
npm run build-storybook
```

## Known gaps vs. the mocks

- **Photos**: no real photo capture — `Thumbnail` renders the gradient
  placeholder called out in the handoff README, by design.
- **Places map**: `PlacesScreen`'s map is the same stylized placeholder
  as the mock; it isn't a real map SDK integration.
- **Shortlist loading/error states**: not in the original mocks; built
  here to the same shell per the handoff README's §Interactions &
  Behavior, since a design system needs every state a screen can be in.
