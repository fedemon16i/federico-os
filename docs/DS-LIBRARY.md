# Design system library

Beats consume `ey-ds.css` / `fm-ds.css`. Do not invent a local button, chip, or search.
Custom exception: ask first.

## Contrast law

1. Quiet surface (`--ey-bg` `--ey-card` `--ey-nav` `--ey-side`) → ink `--ey-text` / `--ey-muted`.
   No white type, white icon, or light graph on a light plate.
   No dark type on a dark plate.
2. Photo plate (`.hero` `.banner` `.tile.t*` `.fm-hero` `.fm-photo`) → **white** type, both modes.
3. Primary button → `--ey-btn` fill + `--ey-btn-ink`.
4. Chip on → `--ey-chip-on` + `--ey-chip-ink` (dark plate stays dark in dark mode).
5. `#FFE600` is fill only. Text on yellow = `#111`. Text on light page = `#6B5200`.
6. Status bad = `#8b1e1e` on `#fde8e8` (light) or `#f2b4b0` on `#3a1518` (dark).

## Categories that exist

Tokens · Type · Buttons · Bars · Banners · Chips · Cards · Forms · Tables · KPIs · Alerts · Icons · Extras · Beats

## Reference

EY `ey-02-analyze.html` · DC `dollarcity-player.html` · Chek `chek-player.html` · Customs `customs.html` · BC `blockchain-player.html`
