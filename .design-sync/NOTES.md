# design-sync notes — cafe-journal-warm-material

## Fixes applied

- `[TITLE_UNMAPPED]` on first build: the 9 screen stories are titled `Screens/<Name>` (e.g. `Screens/Journal`), but the exports are `<Name>Screen` (`JournalScreen`). Added `cfg.titleMap` for all 9: Detail→DetailScreen, Firstrun→FirstRunScreen, Journal→JournalScreen, Logvisit→LogVisitScreen, Places→PlacesScreen, Profile→ProfileScreen, Search→SearchScreen, Shortlist→ShortlistScreen, Stats→StatsScreen. `[GENERAL]` — any future component whose Storybook title doesn't literally match its export name will need the same treatment.
- `[GRID_OVERFLOW]` (`wide`) on `AICard` and all 9 screen components: these are 390×844dp phone screens (plus a full-width AI card), naturally wider than a component grid cell. Set `cardMode: "column"` in `cfg.overrides` for all 10. `[GENERAL]` — any new full-screen or full-width component added later needs the same override.

## Known quirks

- `JournalScreen.d.ts`'s JSDoc comment on `insightContent` is truncated mid-sentence in the generated `.d.ts` (cuts off at an apostrophe/quote inside the source comment in `src/screens/JournalScreen.tsx`). Cosmetic only — the prop itself (`React.ReactNode`, required) is documented correctly elsewhere (this file, `.prompt.md`). If it bothers a future sync, simplify the source JSDoc to avoid nested quotes.

## Re-sync risks

- **Remote font.** `tokens.css` `@import`s Plus Jakarta Sans from Google Fonts (`fonts.googleapis.com`). `[FONT_REMOTE]` prints on every validate — expected, not a regression. If the font host ever goes down or the font is self-hosted instead, this note is stale and the import should be re-verified.
- **No components use remote/CDN images** — every visual asset is inline SVG or a CSS gradient. The `[ASSETS_BLOCKED]` canary (network-sandboxed capture shell) doesn't apply here; if photo assets are added later (README calls out real photo capture as a known gap), re-check for that failure mode then.
- **Sample data assumptions**: `JournalScreen`'s clamped feed text renders `visit.recommendation` (short, e.g. "Gula aren latte, iced"), NOT `visit.notes` (long prose) — confirmed against the design bundle's own reference screenshots (`../screenshots/01-journal-home-*.png`), which show short single-line drink names in that slot despite the handoff README's prose saying "notes clamped to 2 lines." If `CafeVisit.recommendation` is ever removed or repurposed upstream, this binding needs re-checking against real data.
- **`Switch`'s unchecked-track color** (`--cj-switch-off`) has no reference screenshot in either theme — the original mock only ever showed the switch "on" in dark theme and "off" in light theme (coupled to whichever theme story was being previewed). The light and dark `--cj-switch-off` values are extrapolated to match the rest of each theme's token set, not lifted from a real screenshot.
- **Component source is a from-scratch React port**, not compiled from a pre-existing component library — so this sync's fidelity is only as good as the hand-port from `../Screens Warm Material.dc.html` was. All 9 screens and all primitives were checked against the design bundle's 18 reference PNGs (light+dark) before this sync; see this repo's earlier commits for that verification pass.
- **The Compose app has error tokens this DS does not.** As of 2026-09-07 the production Android app
  (`../../cafe-journal-3`) defines `error`/`onError`/`errorContainer`/`onErrorContainer`
  (`Brick #9C3B2E`, `BrickSoft #F7DED7`, `BrickInk #5C1F16`, plus dark equivalents) for swipe-to-delete
  and a Shortlist failure state. These were **invented on the Compose side** — Direction C has no
  destructive or failed state in any of its nine screens, so this DS's 30 tokens correctly contain none.
  This is a deliberate divergence, not drift: don't "fix" it by adding unverified tokens here, and don't
  strip the Compose ones. If error states are ever designed properly, they land in the design bundle
  first, then here.

## Conventions-header validation (re-sync 2026-09-07)

Validated `.design-sync/conventions.md` against the fresh build. Everything verifies **except one claim**:

- **`ThemeProvider` IS exported from the bundle** — the header says "there is no separate `ThemeProvider`
  call in this bundle — this attribute *is* the mechanism". False: `_ds_bundle.js` exports
  `ThemeProvider` (minified `function K({ theme = "light", children, style, className })`), which renders
  `<div className="cj-root" data-cj-theme={theme}>`. It has no `components/<group>/ThemeProvider/` folder
  only because it has no story — that absence is what the original authoring pass mistook for "not shipped".
  `[GENERAL]` — when checking whether a component exists, the component-folder tree is the *story* index,
  not the export index; always confirm against the bundle's export map before writing a negative claim.
  The hand-rolled `data-cj-theme` div the header recommends is functionally equivalent, so no design ever
  rendered wrong because of this — but the design agent is being told an export it can use doesn't exist.

Verified-correct in the same pass (no action needed): all 16 component names; the 30-token count and every
`--cj-*` name and light value in the header's table; `.cj-root`; `[data-cj-theme=dark]`; `styles.css`
`@import`s `_ds_bundle.css`; `AICard`'s `variant`/`eyebrow`/`decorativeCircle` and `JournalScreen`'s
`name`/`streakWeeks`/`visits`/`insightContent`.

### Remote-font follow-up (observed 2026-09-07)

`list_files` on the uploaded project shows a `fonts/` directory (14 `PlusJakartaSans-*.ttf` + `fonts.css`)
that **this sync never uploads** — `ds-bundle/fonts/` doesn't exist locally. The app self-hosted the
Google-Fonts face on its side. Two consequences for future runs: (1) the `[FONT_REMOTE]` warn stays
expected and benign — the runtime is not actually depending on `fonts.googleapis.com`; (2) those remote
`fonts/**` paths are app-managed, so never hand-derive them into a delete list. Anchored re-syncs take
`deletePaths` verbatim from `.sync-diff.json` (empty on this run), which correctly leaves them alone.
