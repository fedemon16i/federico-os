# DS projects — reglas

Página viva: `ds.html` (nav: Preview → DS projects).  
Beats no hospeda el DS.

Motor: `projects/fm-ds.css` + `projects/fm-engine.js`  
Unidad web `960×600`. iPhone 17 adentro de la misma unidad. Escala uniforme. Cursor / touch no salen del unit.

## Kits

| Proyecto | Kit real | Cómo se usa acá |
|---|---|---|
| DollarCity | [Ant Design 5](https://ant.design/) | `colorPrimary` = verde DollarCity `#00a650`. Radio 6. Control height 32. Font stack de Ant. |
| Customs / Aduanas | [PrimeNG](https://primeng.dev/components) + kit ARIVU | Tokens del foundation (`#1071E5`, Inter). Equivalencias Prime en la tabla de abajo. |
| Chek | UI ya existente del case | Color Ripley `#543379` + oro `#FFB81C`. Tipo: stack de sistema / Inter (proxy del sitio). |
| EY Fabric | Fotos de producto + [ey.com](https://www.ey.com/en_gl) | Amarillo `#FFE600`, ink `#2E2E38`, **EY Interstate**. No inventar métricas. |
| Blockchain | Case actual | Teal `#22D4C8`. Se documenta al final. |

No copiar UI confidencial. Inventar copy. Conservar densidad.

---

## EY Fabric

Fuente: ey.com + capturas de producto (banner, tiles, cursor, rail).

| Token | Light | Dark (ventana producto) |
|---|---|---|
| `--fm-font` | EY Interstate, Source Sans 3 | igual |
| `--fm-bg` | `#F6F6F4` | `#12141C` |
| `--fm-nav` | `#2E2E38` | `#0B0C10` |
| `--fm-text` | `#2E2E38` | `#F3F4F8` |
| `--fm-accent` / mark | `#FFE600` | `#FFE600` |
| `--fm-btn` | `#2E2E38` | `#FFFFFF` |
| `--fm-btn-ink` | `#FFE600` | `#111111` |

Tipografía: `EYInterstate-Regular.woff` / `Bold.woff` desde ey.com. Fallback Source Sans 3.

---

## DollarCity — Ant Design + marca verde

Fuente: dollarcity.com (verde + blanco) + [Ant tokens](https://ant.design/docs/react/customize-theme).

Seed Ant que **no** cambiamos:
- `borderRadius`: 6
- `controlHeight`: 32
- `fontSize`: 14 / line 22
- `fontFamily`: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif`

Seed que **sí** pisamos:
- `colorPrimary`: `#00A650` (no el azul default `#1677FF`)
- `colorPrimary` text: `#FFFFFF`

| Token | Light | Dark (escala inventada del mismo verde) |
|---|---|---|
| `--fm-bg` | `#F3FAF6` | `#07140C` |
| `--fm-nav` | `#00A650` | `#0B2416` |
| `--fm-card` | `#FFFFFF` | `#0F2A1A` |
| `--fm-text` | `#143322` | `#E8F6EE` |
| `--fm-accent` | `#00A650` | `#3DDC84` |
| `--fm-btn` / ink | `#00A650` / `#FFF` | igual |

Componentes Ant que el preview debe cubrir: Button, Input, Tag, Table, Banner / Alert.

---

## Customs — PrimeNG + foundation

Fuente: [sitio.aduana.gob.sv](https://sitio.aduana.gob.sv/) + kit subido (styles.css / dark.css / README).

| Token | Light | Dark |
|---|---|---|
| font | Inter | Inter |
| primary | `#1071E5` | `#5AAEFF` |
| ink | `#303745` | `#F4F7FB` |
| muted | `#697185` | `#BDC7D6` |
| canvas | `#F6F8FB` | `#212630` |
| surface | `#FFFFFF` | `#303745` |
| border | `#DCE2EA` | `#4B5668` |
| success | `#0B8A4A` | `#70DCA0` |
| danger | `#D92727` | `#FF9A9A` |
| radius sm/md/lg | 6 / 10 / 16 | igual |

Equivalencia PrimeNG (del README del kit):

| Patrón | PrimeNG |
|---|---|
| Acciones | Button |
| Campos | InputText, IconField, Select, DatePicker |
| Estados | Tag, Message, Toast |
| Nav | Menu, Sidebar, Breadcrumb, Tabs |
| Datos | Table |
| Flujo | Stepper |
| Confirmación | Dialog, ConfirmDialog |

Flujos de referencia: ARIVU (select → form → review → success) y boarding pass (ready → rejected → approved).

---

## Chek — Ripley

Fuente: [bancoripley.cl](https://www.bancoripley.cl/) / Brandfetch.

| Token | Valor |
|---|---|
| primary | `#543379` |
| gold | `#FFB81C` |
| ink | `#202124` |
| white | `#FFFFFF` |
| font | Inter / system (proxy del sitio hasta confirmar webfont) |

UI del case se conserva (Hub, Pay, Limit, Moves). Solo tokens + tipo.

---

## Blockchain

Se deja el teal del case (`#22D4C8`) hasta pasar fotos / URL.

---

## Stage (todos)

- Web window: outline + radius 24 adentro de la unidad (no se recorta).
- Mobile: iPhone 17, Dynamic Island, toque Figma (círculo).
- Light / Dark por `data-mode`.
- Prohibido overflow de cursor.
