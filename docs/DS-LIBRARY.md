# Design system library — handoff

Page: `ds.html`. Sheet: `projects/fm-ds-sheet.html`. Tokens: `projects/fm-ds.css`.

## Reference beat (do not invent a new one)

| Project | File | Why |
|---|---|---|
| EY Fabric | `projects/ey-02-analyze.html` | Full product window + cursors |
| DollarCity | `projects/dollarcity-player.html` | POS → flag → video |
| Chek | `projects/chek-player.html` | Phone card + pay |
| Customs | `projects/customs.html` | ARIVU + pass |
| Blockchain | `projects/blockchain-player.html` | Phone map + POI |

## Token contract

Skins: `ey` `dc` `chek` `cus` `bc` via `data-skin`. Mode via `data-mode`.

| Token | Role |
|---|---|
| `--fm-bg` `--fm-card` `--fm-side` `--fm-nav` | Surfaces |
| `--fm-text` `--fm-muted` `--fm-faint` `--fm-line` | Type + hairlines |
| `--fm-accent` `--fm-on-accent` | Selected chip / stepper |
| `--fm-btn` `--fm-btn-ink` | Primary button |
| `--fm-ghost` | Ghost label |
| `--fm-ok` `--fm-bad` `--fm-new` | Status |
| `--fm-mark` `--fm-on-mark` | Notice plate |

EY light: never use `#FFE600` as text. Ink on light = `#2E2E38` or `#6B5200`.
DC button = `#0B7A3C` + white. Chek gold is mark, not white-on-gold.

Unit: 960×600, uniform scale. Web window radius 24. Phone = iPhone 17 chrome + touch disc.

## Categories in the sheet

Tokens · Type · Buttons · Bars · Banners · Chips · Cards · Forms · Tables · KPIs · Alerts · Icons · Reference beat · Project extras
