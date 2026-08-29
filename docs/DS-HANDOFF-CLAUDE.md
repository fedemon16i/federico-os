# Handoff — DS projects (para Claude Code)

Fecha: 2026-08-29. Repo: `fedemon16i/federico-os`. Chat B only. No tocar Chat A (home, nav OS, monitor).

## Qué es esto

Página `ds.html` (rail: DS projects, debajo de Beats).  
Beats sigue existiendo. El DS no vive adentro de Beats.

Motor compartido:
- `projects/fm-ds.css` + `projects/fm-engine.js` — catalog / skins
- `projects/ey-ds.css` + `projects/ey-engine.js` — beats EY (960×600)

## UX pedida (hacer / verificar)

1. Proyecto primero: EY / DollarCity / Chek / Aduanas / Blockchain.
2. Preview: **solo Light / Dark**. Sacado Web / Mobile / Desktop-Tablet-Phone.
3. Tabs: **Library** | **Diagramas**. No mezclar ventanas UI (Analyze, Hub, Pub) dentro de Diagramas.
4. Library = component library navegable de TODO lo usado en los beats de ese proyecto.
5. Diagramas EY = Measure, Research, Understand, Funnel únicamente (`.ey-unit.board`).
6. Ventanas EY = Analyze, Hub, Req, Pub, Design → van en Library o en Beats, no en tab Diagramas.

## Contraste (ya diagnosticado — no reabrir el loop)

Fuente: `DESIGN-TOKENS-LIGHT-MODE.md` en artifacts.

- `#FFE600` / `#f5d100` como **texto** sobre `#f5f5f0` = contraste ~1.2. Prohibido.
- Fórmula: mismo hue, bajar L hasta ≥3.0 contra el fondo claro.
- Amarillo EY en light como texto/borde = `#6B5200` o `#9e8f00`.
- Amarillo como **fill** sobre negro (nodo root, barra dead) = `#FFE600` + tinta `#111`.
- Notice EY light: no usar yellow wash. Usar `--fm-mark:#eeeee8` + ink.
- Total order light: `#6B5200`. Dark: `#FFE600` sobre panel oscuro.
- DollarCity botón: `#0B7A3C` + blanco (no `#00A650` + blanco).
- Chek oro `#FFB81C` + tinta `#202124`, nunca blanco sobre oro.
- Blockchain teal + `#04221F`, no blanco sobre celeste.

`ey-engine.js` lee `?mode=` y setea `data-mode` al parsear.  
`ey-ds.css` `[data-mode=light]` invierte superficies + `--ey-accent-ink:#6b5200`.

## Componentes EY que la library DEBE listar

De fotos Fabric + beats Analyze/Req/Hub/Pub:

Nav Overview/Marketplace/Tools · Search + AI · rail All Items/Services/Licenses/Kits/APIs  
Hero degradé · Category photo tiles · Filter chips · Offering card (View more / Get started)  
Modal tabs Description/Resources/Requirements · Form Customization/Billing/Confirmation  
Disclaimer · Your order + total · Completed step + Edit  
Hub side Alarms/Paths/Guides · KPI · alarm table  
Publisher Items/Queue/Teams · Pending/Corrections/AI pass · Publish new item · 9 categories

Copy inventado. No pegar nombres confidenciales de producto.

## Otros proyectos (player es la fuente)

- DollarCity: POS Search, All/Flagged/Reviewed/High score, score table, Queued/Downloading/Ready, tabs Tax/Items/Video.
- Chek: Hub available/used, Confirm & Pay, Sent.
- Customs: stepper ARIVU, fields, tags, boarding pass. Kit PrimeNG.
- Blockchain: onboard mapa, confirm place, media chips. iPhone 17 + touch Figma.

Kits: DC = Ant Design `colorPrimary` verde. Customs = PrimeNG. Chek = Ripley. EY = Interstate.

## Archivos clave

`ds.html`  
`projects/fm-ds-sheet.html` — library por `?skin=&mode=` + `.kit[data-kit]`  
`projects/fm-ds-diagrams.html` — SOLO boards  
`projects/fm-ds.css` `projects/fm-engine.js`  
`projects/ey-ds.css` `projects/ey-engine.js`  
`docs/DS-PROJECTS.md` `docs/DS-HANDOFF-CLAUDE.md`

## No hacer

No rebuild de motion. No inventar métricas EY. No tocar index OS. No meter Analyze/Hub en tab Diagramas. No yellow-on-cream otra vez.
