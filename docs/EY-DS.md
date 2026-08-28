# Mini design system — EY Fabric (reconstruido)

Fecha: 2026-08-28

No hay capturas reales de EY Fabric en este repo. Gallery y Beats **no** llevan UI confidencial.
Este DS sale del mock del player (`projects/ey-pi-player.html`): catálogo oscuro, acento oro, nav compacta.

Archivo: `projects/ey-ds.css`

## Tokens
- Fondo `#050508` / surface `#0e0e12` / card `#14141a`
- Acento `#c9a227` (no EY yellow oficial)
- Texto IBM Plex Sans; labels 8–10px
- Radio 7px; nav 26px

## Piezas
- `.ey-browser` + `.ey-bbar` + dots + `.ey-addr` — solo UI web app
- `.ey-topnav` `.ey-hero` `.ey-btn-pri` `.ey-btn-sec`
- `.ey-cat` sidebar + main
- `.ey-card` `.ey-grid` `.ey-chips` `.ey-banner`
- `.ey-field` `.ey-box` `.ey-flag`

## Dónde sí / no
Sí: Path Fabric, Hub, Publisher, User flow, Design si es app web.
No: Measure, Research, Understand, Funnel, mobile.

## Beats de propuesta
Hub / User flow / Publisher / Improved deben linkear `ey-ds.css` y usar estas clases.
No inventar otra paleta.
