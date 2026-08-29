# Component inventory

Source: beats on disk in `projects/`. Shared chrome lives in `fm-ds.css` / `ey-ds.css`.

## Shared (all projects)

| Component | In library | In beats |
|---|---|---|
| Browser chrome (dots + URL) | yes | EY windows |
| iPhone 17 chrome + Dynamic Island | yes | Chek, Blockchain |
| Cursor SVG 22px | motor | Analyze, Hub, Req, Pub |
| Touch disc | motor | Chek, Blockchain |
| Play / Stop SVG | yes | Research replay |
| Tooltip + red ring | css | Publisher extras |
| Primary / Secondary / Ghost | yes | all UI beats |
| Chip + chip.on | yes | filters |
| Tag ok / warn / bad / neutral | yes | Hub, DC, Customs |
| Field | yes | forms |
| Stepper | yes | EY form, Customs |
| Table | yes | Hub, DC |
| KPI tile | yes | Hub, Chek, Pub |
| Hero banner | yes | Analyze |
| Inline banner | yes | Customs pass |
| Notice / disclaimer | yes | Analyze form |
| Photo category tile | yes | Analyze catalog |
| Offering / product card | yes | Analyze, Req |
| Order rail | extras EY | Analyze, Req |
| Modal overlay + tabs | partial | Req |
| Empty state | no | Order rail empty |
| Dropdown | no | Analyze location |
| Radio / checkbox | no | Analyze admin yes/no |
| Pagination | no | Billing workspace list |
| File drop | no | Publisher load file |
| Chat bubble | no | Req help |
| Toast / success burst | no | Req success |

## EY Fabric — beats now

Measure (board) · Analyze (window) · Funnel (board) · Research (board + replay) · Understand (board) · Design (two workshops) · Hub (window) · Requester (window) · Publisher (window)

Reference beat: **Analyze**.

### Present in those beats

Nav · Search · AI chip · Avatar · Left rail + counts · Breadcrumb · Gradient hero · Explore / Talk buttons · Category photo tiles (Services, Licenses, Kits, Packages, APIs, Explore) · Filter chips · Offering card (View more / Get started) · See details overlay (Description / Resources / Requirements) · Form stepper Customization / Billing / Confirmation · Instance fields · Location dropdown · Point-of-contact search · Yes/No radios · Disclaimer · Your order + total · Continue / Submit · Completed-step card + Edit · Create workspace · Hub side Overview / Alarms / Paths / Guides / Signals · Alarm rows + hot tag · Area filters · Mini funnels · Publisher rail Items / Queue / Teams / Licenses / Artifacts · Pending / Corrections / AI pass · Publish new item · Type picker · Load file / add by hand · Guidance / tooltip · Onboarding toggle · Sitemap + event list (Measure) · Funnel bars · CSAT / NPS / CES + interview quote · Pendo replay chrome · Capability map (Understand) · Figma frame + agent frame + Design ready

### I would still add to the library (EY)

1. Left rail item + count pill  
2. Breadcrumb  
3. Search + AI as a pair  
4. Modal with 3 tabs + Close / Get started  
5. Dropdown field  
6. Radio group  
7. Checkbox + required asterisk  
8. Completed-step summary + Edit  
9. Workspace picker + Create new  
10. Pagination 1/9  
11. Chat bubble  
12. Success burst  
13. File drop + hand-entry pair  
14. 9-category type grid  
15. Alarm row (hot)  
16. Replay session list item  
17. Sitemap node (root / arm / leaf)  
18. Funnel bar (live / dead)

## DollarCity — beats now

POS Search · Results table · Flagged / Reviewed filters · Request states · Video review (Tax / Items / Video)

Reference: **dollarcity-player**.

### Present
Search field · Filter chips All / Flagged / Reviewed / High score · Results table (store, score, timestamp, length, emp) · Exception tag · Request Queued / Downloading / Ready · Video chrome + REC · Tabs Tax / Items / Video

### I would add
Score meter · Store header · Frame-by-frame timeline · REC badge · Exception list row

## Chek — beats now

Card hub · Available / used · Pay sheet · Confirm · Success · Movements link

Reference: **chek-player**.

### Present
Greeting · Plastic card · Amount KPIs · Pay CTA · Amount + source · Confirm & Pay · Success receipt

### I would add
Card face (number / exp / cvv mask) · Movements list · Limit control · Due-date chip

## Customs — beats now

ARIVU flow + boarding pass + dual device. Reference: **customs.html** / player.

### Present
Stepper · Aduana field · Date · Status tags · Boarding pass plate

### I would add
Scan frame · Stamp · Dual-device pair (window + phone) · Plate input

## Blockchain — beats now

Onboard map · Confirm place · Media. Reference: **blockchain-player**.

### Present
Welcome · Continue · Place confirm · Cancel / Confirm · Media chips (device / link / live)

### I would add
Long-press hint · Pin + color · POI card · Empty feed

## Priority to build next in the sheet

1. EY rail + counts + breadcrumb + search/AI  
2. Modal tabs  
3. Form extras (dropdown, radio, completed step, pagination)  
4. Publisher type grid + file drop  
5. DC REC + timeline  
6. Chek card face  
7. Customs scan + pass details  
8. Blockchain POI card
