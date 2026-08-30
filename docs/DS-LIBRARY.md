# Design system library — handoff

Page: `ds.html`. Sheet: `projects/fm-ds-sheet.html`.
Tokens: `projects/fm-ds.css` + `projects/ey-ds.css`.

## Process

A visual fix is a **token or class in the DS**, then every beat that links that file inherits it.
Do not patch a single HTML beat and leave Hub / Req / Pub / Research / preview / sheet behind.
If a beat still hardcodes `#fff` / `#FFE600`, ask before stripping — then strip **all** copies.

Analyze is the reference window. Research embeds it. Preview hosts it. Req / Hub / Pub reuse the same nav + marketplace language.

## Contrast law

- Photo / colored plate (`.hero` `.banner` `.tile.t1–t6` `.fm-hero` `.fm-photo`): dark fill + **white** type, both modes.
- Quiet surface (nav, rail, card, field, band in light): **ink** on plate. No white type on white. No ink on navy.
- `#FFE600` is fill only (flag, root node). Text on light = `#6B5200` or `#2E2E38`.
- Yellow fill always carries `#111` ink.

## Reference beat

| Project | File |
|---|---|
| EY Fabric | `projects/ey-02-analyze.html` |
| DollarCity | `projects/dollarcity-player.html` |
| Chek | `projects/chek-player.html` |
| Customs | `projects/customs.html` |
| Blockchain | `projects/blockchain-player.html` |

Preview: Web = window beat. Mobile = phone beat in iPhone chrome. Never shrink a desktop UI.
