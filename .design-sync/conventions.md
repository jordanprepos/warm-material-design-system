## Cafe Journal — "Warm Material"

A warm-coffee-toned mobile design system. 7 composable primitives (`Button`, `Chip`, `NavBar`, `AICard`, `StarRating`, `Switch`, `TextField`) plus 9 full prebuilt screens (`JournalScreen`, `DetailScreen`, `LogVisitScreen`, `PlacesScreen`, `StatsScreen`, `ShortlistScreen`, `SearchScreen`, `FirstRunScreen`, `ProfileScreen`) that compose them. Prefer reusing a whole screen over rebuilding one from primitives when the design calls for the same layout.

### Theme

Light theme needs no setup — the CSS custom properties resolve from `:root` automatically once `styles.css` loads. **For dark theme**, wrap the subtree in a plain element carrying `data-cj-theme="dark"` (there is no separate `ThemeProvider` call in this bundle — this attribute *is* the mechanism):

```jsx
<div data-cj-theme="dark" className="cj-root">
  <JournalScreen name="Jordan" streakWeeks={6} visits={visits} insightContent="You rate cafes with outlets and low noise higher." />
</div>
```

`cj-root` sets the base font-family and `box-sizing: border-box` — include it any time you add a new theme boundary, even nested (e.g. `AICard`'s "primary" variant is intentionally a dark surface in *both* themes — that's baked into the component, not something you theme around).

### Styling idiom — CSS custom properties, no utility classes

Every color is a `var(--cj-*)` token, not a class. Real names (light values shown; each flips under `[data-cj-theme='dark']`):

| Token | Light value | Use |
|---|---|---|
| `--cj-bg` / `--cj-surface` | `#fbf5f1` / `#ffffff` | page background / card background |
| `--cj-ink` / `--cj-ink-soft` / `--cj-muted` | `#2a211c` / `#4a3d35` / `#7b6a60` | primary / body / secondary text |
| `--cj-primary` | `#6b4a3a` | buttons, active states, icons |
| `--cj-chip` / `--cj-chip-ink` | `#f5eae2` / `#6b4a3a` | facility-tag chip background/text |
| `--cj-line` / `--cj-line-strong` | `#efe2d9` / `#dfccc0` | hairline borders / stronger borders (focus, dashed) |
| `--cj-amber` / `--cj-star` | `#e9b77e` / `#d89a3e` | AI-card accents / rating stars |
| `--cj-ai-bg` / `--cj-ai-soft` | `#33241c` / `#f3eae3` | `AICard` variants `"primary"` / `"soft"` |
| `--cj-shadow-card` / `--cj-shadow-cta` | — | box-shadow values for cards / primary CTAs |

Reference a token with `var(--cj-primary)`, never a hardcoded hex — hardcoding breaks dark-theme support silently. The full token list (30 total) is in `styles.css`.

### Where the truth lives

Read `styles.css` (imports the compiled `_ds_bundle.css`, which holds every `--cj-*` definition) before styling anything new. Each component's own `.prompt.md` in its `components/<group>/<Name>/` folder documents its exact prop API and usage.

### Example — composing primitives

```jsx
<div data-cj-theme="dark" className="cj-root">
  <AICard variant="primary" eyebrow="Journal insight" decorativeCircle="top-right">
    You rate cafes with outlets and low noise{' '}
    <span style={{ color: 'var(--cj-amber)' }}>0.8 stars higher</span>.
  </AICard>
</div>
```
