# FM.OS

Portfolio shell for [Federico Monroy](https://github.com/fedemon16i) — Product Designer turned Behavioral Analytics.

## Relationship to `federico-portfolio`

| Repo | Role |
|------|------|
| [`fedemon16i/federico-portfolio`](https://github.com/fedemon16i/federico-portfolio) | **Source of truth for case pages** (EY, Chek, Customs, Blockchain, DollarCity) — each keeps its own design system |
| **`federico-os`** (this repo) | **OS shell** — home, narrative, navigation, monitor. Cases are linked, not restyled |

Do **not** rewrite case CSS here. Projects stay isolated volumes.

**Production portfolio (unchanged):** https://fedemon16i.github.io/federico-portfolio/

---

## Design thesis — "the backlight is off"

Three decisions carry the whole build. Break any of them and it collapses into
a generic cyberpunk template.

**1. E-Ink discipline.** No emitted light. No glow, no bloom, no neon, no
`box-shadow` standing in for a light source. Contrast comes from ink density,
not luminosity. Surfaces are matte with paper grain. The accent (`#d97757`) is
*spent, not sprayed* — it appears on the active nav item, the one number that
matters, and hover. Nowhere else. Portraits render as grayscale ink and only
return to colour when you touch them: that is the backlight coming on for a
second.

**2. The refresh flash replaces the glitch.** Navigating inverts the panel for
80ms and lets it settle, the way an e-paper page turn does. It gives the same
"the machine is working" beat as an RGB glitch, but it belongs to the
technology being cited instead of being decoration. The theme toggle uses the
same gesture — which is why it reads `INVERT`, not a sun/moon icon.

**3. The page instruments itself.** A behavioral-analytics portfolio that
measures nothing is a claim; this one is a demonstration. The monitor reports
the visitor's own dwell, path, scroll depth and hesitation back to them, live.
A recruiter doesn't read that Federico knows Pendo — they watch it run on
themselves.

Everything the monitor records lives in memory and dies with the tab. No
cookies, no storage, no network calls.

---

## Files

| File | Role |
|------|------|
| `index.html` | Shell markup — rail, stage, monitor, drawer, lightbox |
| `fmos.css` | The whole design system (tokens, spine, cases, monitor, responsive) |
| `fmos.js` | Routing, narrative views, telemetry |
| `v1.html` + `os-home.css` / `os-home.js` | The previous desktop-icon shell, kept for reference |

No build step. No dependencies. Open `index.html`.

---

## The home narrative

A single vertical spine, four beats, read top to bottom:

```
01  WHO        portrait, rotating one-liner, stat band, photo strip
02  THE TURN   Industrial Design → Product Design → Behavioral Analytics
03  EVIDENCE   five cases, each stating the problem before the work
04  HOW        capabilities, grouped by discipline
```

Cases open the real case page on the live portfolio in a new tab.

---

## The monitor

A rack readout, not a section: four gauges, an activity trace, top-three
attention, and a one-line read-back. It collapses to a bottom sheet under
980px.

The source row reflects **real state**. It reads `local` while nothing is
connected, and flips to `posthog` on its own the moment a PostHog snippet is
present on the page — `fmos.js` checks for `window.posthog.capture`, it does
not fake a connection. To wire it up, drop the standard init into
`index.html`; no changes to `fmos.js` are required.

---

## Typography

| Family | Scope |
|--------|-------|
| Orbitron | OS chrome only — the brand mark. Never body copy. |
| Share Tech Mono | Data, labels, paths, the monitor. |
| DM Sans | Everything a human reads as prose. |

Orbitron everywhere is what makes a cyberpunk build look generated. Keeping it
locked to the chrome is the discipline that keeps this one from reading that way.

---

## Guardrails

- No glow, ever. If something needs emphasis, use contrast or the accent — not light.
- Gradients are not a resting state.
- Texture is never interactive and never carries meaning.
- Copy names a specific thing or it gets cut. No "seamless", no "empower".
- `prefers-reduced-motion` disables the refresh flash and every animation.
- The mobile drawer and the monitor sheet must never live inside a
  `pointer:fine` guard — that regression has shipped twice in the sibling repo.
- Photos need real, descriptive `alt` text.

---

## Status

- [x] E-Ink shell, narrative spine, refresh flash
- [x] Session monitor with real PostHog detection
- [x] Responsive verified at 1440 / 768 / 375, no horizontal overflow, no JS errors
- [ ] Cases and Capabilities routes built out (currently stubs)
- [ ] Résumé and Contact ported from the live portfolio
- [ ] Design system route
- [ ] GitHub Pages
