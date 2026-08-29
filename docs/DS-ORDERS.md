# DS orders — finish this

Read first (do not reinvent):
- fedemon16i/federico-skills → Accessibility-Standards.md, knowledge/design-systems/, knowledge/ui-patterns/
- fedemon16i/ai-capability-os → capabilities/ui-integrity-guardian.md
- federico-os → docs/DS-HANDOFF-CLAUDE.md, projects/ey-ds.css, projects/fm-ds-sheet.html, ds.html

## Contrast — locked

Light mode MUST remapped tokens:
- `--ey-yellow` and `--ey-gold` = `#6B5200` (text + lines)
- Canvas = cool gray `#e8edf2`, not cream
- `#FFE600` / `#C9A800` only as FILL with ink `#111`
- Body text ≥4.5:1, UI chrome ≥3:1 vs `#e8edf2` / `#f5f7fa`
- DollarCity button: `#0B7A3C` + white
- Chek gold `#FFB81C` + ink `#202124`
- Blockchain teal + `#04221F`

If a diagram still shows lemon on beige, `data-mode=light` is missing or a hardcoded `#FFE600` / `#fff` is winning. Grep those hexes in `projects/ey-*.html`.

## Complete the library (English copy)

File: `projects/fm-ds-sheet.html` kits by `data-kit`.

### EY (still incomplete vs Fabric refs + beats)
Add if missing: top nav (Overview, Marketplace, Tools, Learn, Search+AI, Manage), left rail with counts, breadcrumb, photo category tiles (6), offering cards View more / Get started + tags, workbench stepper Customization / Billing / Confirmation, disclaimer, Your order + total, completed-step card + Edit, Hub rail + alarms table, Publisher workspace + 9 categories + file/hand + AI review.
Invent copy. No confidential product names.

### DollarCity (priority after EY)
From `dollarcity-player.html`: POS Search, filters All / Flagged / Reviewed / High score, results table (store, score, exceptions), request states Queued / Downloading / Ready, video chrome Tax / Items / Video, REC.

### Chek
From `chek-player.html`: card hub, available/used, pay sheet, confirm, success, movements.

### Customs
From ARIVU kit + `customs.html`: stepper, fields, status tags, boarding pass. PrimeNG + `#1071E5`.

### Blockchain
From `blockchain-player.html`: space map onboard, confirm place, media chips. Phone + touch, not cursor.

## Do not

- Mix Analyze/Hub/Pub into Diagrams tab
- Rebuild motion
- Invent EY metrics
- Touch Chat A (index OS / nav / monitor)
- Put DS back inside Beats

## Done when

Light diagrams: no yellow-on-cream. Each project kit lists every control used in that project's beats. `ds.html` stays English: Light/Dark + Web/Tablet/Mobile + Library/Diagrams.
