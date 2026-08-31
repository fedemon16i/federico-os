# EY audit — DS applied vs missing

Beats load `ey-ds.css`. The library page loads `fm-ds.css`.
Same tokens in spirit. **Not the same class names.**
`btn-w` / `pri` / `svc` are aliased in `ey-ds.css` to the button/chip rules.
They do not use `.fm-btn` in the HTML.

## Applied (beat → library)

| Beat UI | Beat class | Library |
|---|---|---|
| Window chrome | `.ey-unit.window .ey-bbar` | Bars |
| App nav + search + AI + avatar | `.nav .search .ai .av` | Bars / Search |
| Hero + Explore | `.hero .btn-w .btn-o` | Hero + Buttons |
| Catalog rail | `.side .sh` | Rail |
| Category tiles | `.tile.t1–t6` | Category tiles |
| Product card + View / Get started | `.svc .acts` | Offer card |
| Banner on Services | `.banner` | Hero/banner |
| Form fields + drop flag | `.box .flag` | Field + Tag bad |
| Order rail | `.order` | Your order |
| Disclaimer | `.disc` | Help/notice (same family) |
| Modal + tabs | `.sheet .tabs` | Modal |
| Chat bubble | `.chat` | Chat |
| Hub KPI / alarm / filter | `.kpi .badge .filters` | KPI + Tags + Chips |
| Publisher pills / type grid | `.pill .cats` | Tags + category (partial) |

## In beats, not in the library list

- Cursor `.uc` + user label
- Callout + `.ring` (new-feature mark)
- Success overlay `.winok`
- Onboarding card `.ob`
- Publisher tooltip `.tip` (“What is this?”)
- Publisher AI review box `.ai`
- Analyze `.band` (developer workflow strip)
- Analyze `.prog` stepper (not `.fm-stepper`)
- Hub mini funnel `.bars`
- Research replay chrome (Pendo-style player)
- Research interview / score cards
- Understand finding rows + tool chips
- Design Figma canvas + agent/CLI column + Design ready
- Measure sitemap nodes
- Funnel chart rows

Diagrams (Measure, Funnel, Research, Understand, Design workshop) are **not** `fm-*` components. They should stay a Diagrams group, not be forced into buttons/cards.

## Verdict

Windows (Analyze, Hub, Req, Pub) consume EY tokens and button/chip aliases.
Library shows the same ideas under `fm-*`.
Gap: two class systems. Next close is either map `.fm-*` onto beats or list the beat names next to each library item.
Missing specimens worth adding: cursor, callout, success, tooltip, AI review, onboarding, replay chrome, sitemap node, funnel row.
