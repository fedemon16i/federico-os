# DS + contrast audit — 2026-08-30

Law: quiet surface = ink. Photo plate = white type. No light-on-light. No dark-on-dark. Beats consume `ey-ds.css` / `fm-ds.css`.

## EY Fabric (in contract)

| Beat | Links DS | Engine | Uses DS chrome | Local overrides that break contrast |
|---|---|---|---|---|
| Measure | ey-ds | ey-engine | unit + tokens | `.node.arm` `#fff` on `#171717` (ok in dark; light is patched by DS). `.row2` `#c8c4bc` — faint on light if DS miss. |
| Analyze | ey-ds | ey-engine | window, nav, hero | **Fail if local wins:** `.nav .mark` `#fff`, `.side .sh/.on` `#fff`, `.svc .acts button` `#d8dbe4`, `.pri` `#fff` on 8% white, `.flag` `#FFE600`. Hero `#fff` is correct (photo). |
| Funnel | ey-ds | ey-engine | board | Clean. Dead bar uses yellow + `#111`. |
| Research | ey-ds | ey-engine | board | Clean. |
| Understand | ey-ds | ey-engine | board | `.tools span` leftover muted hex; DS light rule covers it. |
| Design | ey-ds | ey-engine | board | Figma art `#fff/#111` is a mock canvas (ask if we treat as photo). |
| Hub | ey-ds | ey-engine | window | **Fail local:** `.kpi b` `#fff`, `.side a.on` `#fff`, `.filters i.on` `#f0de5a`, `.feat em` `#f0de5a`, `.badge` `#fff` on red. |
| Requester | ey-ds | ey-engine | window | **Fail local:** `.side .sh` `#fff`, `.acts` gray/white, `.tabs i.on` `#fff`, `.sec b` `#fff`, `.info` `#ffb4b4`. |
| Publisher | ey-ds | ey-engine | window | **Fail local:** `.side .sh/.on` `#fff`, `.kpi b` `#fff`, `.pill.warn` `#f0de5a`, `.cat .e` `#f0de5a`, `.box b` `#fff`. |

DS `!important` on buttons/chips now covers most of Analyze/Req/Hub **if** cache is fresh. Local hex still exists and will win any rule without `!important`.

## Not on EY DS yet (next projects)

| Beat | DS | Note |
|---|---|---|
| DollarCity player | own CSS | Many `#fff` on green — valid on brand fill. Not tokenized. |
| Chek player | own CSS | Phone UI. White on purple chips. Not `ey-ds`. |
| Customs | own / ARIVU | No ey-ds. |
| Blockchain player | own CSS | Map/sheets with `#fff`. Not tokenized. |

## Verdict

- Diagrams (Measure, Funnel, Research, Understand): **using DS**. Contrast mostly ok.
- Windows (Analyze, Hub, Req, Pub): **linked to DS** but still carry a local palette. That is why light/dark still slips.
- Next surgical pass: delete those local color lines so only tokens remain. Ask before treating Design Figma canvas or Publisher extras as custom.
