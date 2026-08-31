# EY Fabric DS — handbook

Fecha: 2026-08-31

No reinventamos el sistema. Dos referencias, una piel.

1. **Producto** = [Backstage Software Catalog](https://backstage.io)  
   Catálogo interno: rail de kinds + counts, search, tiles de dominio, cards de offering, request form, publisher/scaffolder.
2. **Sistema visual** = [Carbon Design System](https://carbondesignsystem.com) theme **Gray 100**  
   Grid 8, capas que se aclaran, IBM Plex, UI shell (header + left rail + main). EY solo pinta: amarillo `#FFE600`, ico naranja `#e08a2a`, Interstate cuando carga.

No copiamos lockups ni copy real de Fabric. Copy inventado.
Unit de showcase: **840 × 560**, se escala entero. Carbon en producto real es fluido; acá el proto vive en esa ventana.

---

## Por qué Carbon y no Ant / Prime / Fluent

| Sistema | Encaja |
| Carbon g100 | Consultora, denso, dark por capas, forms + data. Plex ya está. |
| Fluent 2 | Más Office que marketplace. |
| Ant | Ya lo usa DollarCity. No mezclar. |
| PrimeNG | Ya lo usa Customs. |
| Material 3 | Muy consumer. |

Backstage trae el *layout de producto*. Carbon trae *tokens y componentes*. EY trae *color y type*.

---

## Capas (Carbon dark)

En dark, cada capa se aclara un paso.

| Capa | Token | Hex | Uso |
| 00 | --ey-hero / nav | `#07070a` / `#0b0c10` | Photo plate, header |
| 01 | --ey-bg | `#12141c` | Page |
| 02 | --ey-side | `#101218` | Rail |
| 03 | --ey-surface | `#161821` | Field |
| 04 | --ey-card | `#1c1e28` | Card, tile frame, order |

Light: page `#e8edf2`, card `#fff`, text `#1f2430`. Photo plates siguen dark + type blanca.

---

## Espacio (Carbon spacing, recortado al proto)

| Carbon | px | Token acá | Uso |
| $spacing-02 | 4 | --s-1 | tag, radio |
| $spacing-03 | 8 | --s-2 | chip gap |
| $spacing-04 | 12 | --s-3 | card pad, tile gap |
| $spacing-05 | 16 | --s-4 | page / rail pad |
| $spacing-06 | 24 | --s-6 | hero pad |
| $spacing-07 | 32 | — | no en el unit 560 |

Gutter de cards = 12. Condensed: borde 1px `--ey-line` entre tiles (regla Carbon condensed).

---

## Tipo

Productive, no editorial.

| Estilo Carbon | Acá | Size |
| Label 01 | --t-k | 11 |
| Body compact 01 | --t-body | 13 |
| Productive heading 03 | --t-title | 16 |
| Productive heading 04 | --t-hero | 22 |

Nunca bajo 11 dentro del unit.

---

## Layout recipes (Backstage × Carbon UI shell)

**UI Shell.** Chrome 26 (showcase) + header 40 + body.
**Catalog.** Rail 148 + main. Kinds con counts. Main: banner photo, search, grid 2 col.
**Home.** Photo hero full bleed + band.
**Request form.** 1fr + 260 rail (disclaimer + Your order + helper opcional).
**Publisher / scaffolder.** Rail 120 + main. 4 KPI + list. New item: 3 col kinds.

Archivo: `projects/ey-layout.css`  
`.lay-cat` `.lay-form` `.lay-pub`

---

## Inventario Carbon → clase EY

| Carbon | Clase | Dónde |
| UI shell header | `.nav` | todos los screens de catálogo |
| Header name / logo | `.ey-logo` | nav |
| Search | `.ey-search` | nav + catalog |
| Tag / operational | `.ey-ai` `.av` | nav |
| Side nav | `.side` | catalog, hub, publisher |
| Breadcrumb | crumb en `.ey-offer` | cards |
| Content switcher / tag | `.ey-chip` | filters |
| Button primary | `.ey-btn` | Get Started, Publish |
| Button tertiary | `.ey-btn.ghost` / acts default | View More, Contact |
| Tag red / green / yellow | `.ey-tag.bad` `.ok` `.warn` | queue, drop |
| Tile (clickable) | `.ey-tile` | catalog domains |
| Productive card | `.ey-offer` | services grid |
| Pictogram / category | `.ey-ico` | card |
| Text input | `.box` | form |
| Radio | `.ey-radio` | form |
| Checkbox | `.ey-check` | form |
| Progress indicator | `.ey-steps` | form |
| Modal | `.sheet` + overlay | details, walkthrough |
| Notification / helper | `.ey-disc` `.panel` | form rail |
| Number / metric | `.kpi` | hub, publisher |
| Data table row | `.row` | hub, publisher queue |
| Link list | `.item` | guidance fields |
| Tooltip | `.hint` (product) / `.fm-note` (showcase) | form vs beat |
| Overflow menu | no aún | — |
| Tabs | `.tabs i` | DS library |
| Dropdown | sort chip “Recently Updated” — falta como componente | agregar si se anima |

Partner marks no son Carbon: `.ey-brand` + `.ey-m` en `ey-market.js`.

---

## Showcase (no es el producto)

`fm-show.css` + `ey-engine.js`

- `.uc` cursor
- `.ey-drop` overlay de drop-off
- `.fm-note` callout de cambio
- `.ey-veil` Ready / Drop-off

Nunca van dentro del form flow.

---

## Archivos

| File | Rol |
| `projects/ey-ds.css` | color, chrome, contrast law |
| `projects/ey-ds-plus.css` | components |
| `projects/ey-layout.css` | space + recipes |
| `projects/ey-market.js` | cards + brands |
| `projects/ey-shell.js` | home / catalog / services / form |
| `projects/ey-engine.js` | fit, cursor, drop |
| `projects/ds.html` | library preview |

Un cambio de card se hace en `ey-market.js`. Un cambio de nav se hace en `ey-shell.js`. Analyze y Requester no duplican markup.

---

## Qué no hacemos

- No instalamos `@carbon/react` en el portfolio (el proto es HTML estático).
- No usamos iconos IBM con licencia rara; `.ey-ico` es un mark inventado.
- No copiamos nombres reales de offerings EY.
- DollarCity / Customs / Chek no heredan este handbook.
