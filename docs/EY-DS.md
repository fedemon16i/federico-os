# EY Fabric DS — written contract

Fecha: 2026-08-31

Unit for every beat: **840 × 560**. Scale the whole unit, never reflow.
Quiet plate = ink. Photo plate = white type.
Refs locales en `docs/refs/ey-fabric/` — no van al repo. Copy inventado.

Archivos: `projects/ey-ds.css` (color + chrome) · `projects/ey-ds-plus.css` (components) · `projects/ey-layout.css` (space + grid)

## Space (8-point)
| token | px | use |
| --s-1 | 4 | tag pad, radio gap |
| --s-2 | 8 | chip gap, tight stack |
| --s-3 | 12 | card pad, tile gap |
| --s-4 | 16 | page pad, sidebar pad |
| --s-5 | 20 | section stack |
| --s-6 | 24 | hero pad |

## Type
| token | size / weight | use |
| --t-k | 11 / 500 | eyebrow, crumb, field label |
| --t-body | 13 / 400 | description, field value |
| --t-ui | 12 / 650 | button, chip |
| --t-title | 16 / 700 | card title, h3 |
| --t-hero | 22 / 700 / -0.03em | home title |

Never below 11 inside the unit.

## Color
bg `#12141c` / nav `#0b0c10` / surface `#161821` / card `#1c1e28` / side `#101218`
text / muted / faint / line
mark yellow / ico orange `#e08a2a` / ok / bad
Photo plates stay dark in light mode.

## Layout recipes
**Shell.** Chrome 26 + product nav 40 + body.
**Catalog / Requester market.** `148px` rail + main. Banner, search, 2-col cards (gap 12).
**Home.** Full-bleed photo hero (pad 24) + band (margin 16).
**Form.** `1fr 260px`. Left: stepper + fields (control 28 tall). Right: disclaimer + Your order + helper (Requester).
**Publisher.** `120px` rail + main. 4 KPIs, then rows. New item: 3-col type grid.

No inner scroll. Cut copy before shrinking type.

## Components
`.ey-logo` `.ey-ico` `.ey-offer` `.ey-tiles` `.ey-search` `.ey-ai` `.ey-chip` `.ey-tag` `.ey-btn` `.ey-radio` `.ey-check` `.ey-steps` `.ey-order` `.ey-disc` `.ey-brand`
Showcase only: `.uc` `.ey-drop` `.fm-note` `.ey-veil`
