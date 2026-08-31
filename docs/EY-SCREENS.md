# EY screens — what must be on each

Fecha: 2026-08-31
Refs: fotos Fabric (home, catalog, services, workbench x3). Copy inventado.

## Home
Header: logo, Overview, Marketplace, Tools, Learn, search, AI, Manage, avatar.
Hero photo + title + lede + Explore Catalog + Contact us.
Band: developer workflow + Get started.
Explore the catalog teaser.

## Catalog landing
Rail: All / Services / Licenses / Starter kits / Code packages / APIs / Explore + counts.
Banner photo. Search + sort. 6 domain tiles (photo). Then All items list (not empty).

## Services list
Same rail with Services on. Category banner. Search. Filter chips (All, Types, Offerings…). Cards: ico, title, Services·Offerings, desc, tags, View More + Get Started. Not one button.

## Workbench form (Analyze before + Requester after)
Stepper: Customization — Billing — Confirmation.
Left:
1. Configure instance — name (required) + ?
2. Location select (required)
3. Point of contact search (required)
4. Instruction callout: choose at least one service
5. Required service radios
6. Add admins radios Yes/No
7. Data storage checkbox
Right:
- Disclaimer
- Your order (line items + Total $0 / mo)
- Requester only: Helper + Onboarding chip
Analyze: ? opens a floating tooltip (2 lines), then drop-off overlay. Form does not reflow.

## Billing (Requester after success)
Collapsed Customization with Edit. Workspace search + Create. Latest workspaces. Order rail stays.

## Confirmation
Both steps checked. Submit order.

## Hub
Overview KPIs + hot rows. Alarms + filter chips. Area funnels + feature list. Not a catalog.

## Publisher
Queue KPIs + pending rows + Publish new item.
9 types with one-liners.
Fields: file or hand.
Guidance: field + What is this? sheet.
Onboard yes/no builder.
AI review.
Published row.
Helper bar always on.

## Missing vs Carbon (still thin)
Dropdown chevron on Location. Search field with icon on contact. Checkbox group for storage. Inline notification for the instruction. Number input if we add seats. Overflow on card. Those land in `ey-shell.js` + `ey-ds-plus.css`.
