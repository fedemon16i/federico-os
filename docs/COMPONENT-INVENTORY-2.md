# Component inventory 2

Device matrix (locked with Federico)

| Project | Device | Cursor |
| EY | desktop | pointer |
| Chek | phone end-to-end | touch `.uc.touch` |
| DollarCity | pending | |
| Customs | pending | |
| Blockchain | pending | |

## Product vs showcase

Product lives in `*-screens.js` with kit classes only.
Showcase lives in `fm-engine.js`: cursor, tip, cap, veil, drop.
`.fm-cap` sits on `.fm-unit`, not inside the iPhone body — Chek content does not fight the caption.

## EY — hecho
`ey-screens.js` + `ey-beats.js`. Kit selector group EY.

## Chek — hecho (2026-09-01)
Source: `chek-player.html` flows hub / payment / credit / movements / security / onboarding.
Tour order kept: hub → pay 0-1-2 → credit → moves 0-1 → security 0-1. Onboard added as its own beat (flow 6).

Files: `projects/chek-screens.js` `projects/chek-beats.js`
Beats: `chek-hub` `chek-pay` `chek-credit` `chek-moves` `chek-security` `chek-onboard`
Each beat: `device:'phone'`, `touch:true`, ≥2 `say` steps, `.fm-rv` on blocks.

New kit pieces (`projects/fm-ds-fintech.css`, shown on `kit.html`):
- `.fm-cardface` — gradient from `--fm-accent` → `--fm-nav`, masked PAN
- `.fm-actions` / `.fm-action` / `.hot`
- `.fm-row.tx`
- `.fm-radio-card`
- `.fm-rv` + `fm-rise`

## Pendiente
DollarCity, Customs, Blockchain — same pattern: `x-screens.js` + `x-beats.js`, no new engine primitives unless the kit is missing a class.
