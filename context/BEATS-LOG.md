# BEATS-LOG — State of beats.html

> Living log for `beats.html` in `federico-os`.  
> Update this when beats change. Read this before any beats work.

---

## What beats.html is

A review/showcase page for all 6 portfolio projects × their beats.
Each beat is an iframe loading the real player from `projects/` with `?embed=1`,
then receiving a `postMessage({type:'playBeat', index:N})` to jump to the right state.

A **Figma-style comment system** is layered on top, gated behind reviewer mode
(password: `fm2026`, stored in `sessionStorage['beats-rv']`).

---

## Architecture — quick ref

```
beats.html
  │
  ├── PROJECTS[] array — all 6 projects, all beats, metadata + contains[]
  ├── build() — creates beat rows (stage + info column) dynamically
  ├── injectStrip(iframe) — removes player chrome via injected CSS
  ├── postMessage({type:'playBeat', index:N}) — 260ms after iframe load
  │
  ├── Reviewer mode — password modal → body.reviewer class
  │   └── Comment mode — C key / topbar button → body.reviewer.cm-mode
  │       ├── .cm-overlay — clickable stage layer (crosshair cursor)
  │       ├── .cm-pin — numbered pins on stage (absolute positioned)
  │       └── .cm-thread-panel — thread UI in info column
  │
  └── localStorage['beats-comments-v1'] — all comment data
```

---

## Beat inventory — all 47 beats

### EY Fabric (`ey-pi-player.html`) — 9 beats

| # | Name | CSS fn | Key containers |
|---|------|--------|----------------|
| 01 | Measure | `beatMeasure()` | `.sitemap`, `.sm-node`, feature tiles, event tags |
| 02 | Analyze | `beatAnalyze()` | Animated cursor (Pendo Replay): Home→Services→Workbench→form |
| 03 | Research | `beatResearch()` | `.wchrome`, `#rc0–3` interview cards, usability bars, tree-test % |
| 04 | Understand | `beatUnderstand()` | FigJam: `#pb0–2` problema blocks, `#tk0–3` task cards |
| 05 | Design | `beatDesign()` | Figma canvas, `#merge.on`, `#onb` onboarding overlay, `#pl0–2` checklist |
| 06 | Hub | `beatHub()` | `#hm0–3` KPI tiles, `#navSig` → `#s0–3` Signals |
| 07 | User flow | `beatUserFlow()` | `.fab-topnav`, Pendo tooltip, pre-checklist gate, live cost form |
| 08 | Publisher | `beatPublisher()` | `.pub-dash`: add guides, define checklists, review submissions |
| 09 | Improved | `beatImproved()` | Split display:flex — friction form (left) vs guided flow (right) |

### Skills (`skills-player.html`) — 8 beats

| # | Name | CSS fn | Key containers |
|---|------|--------|----------------|
| 01 | Mapping | `beatMap()` | `.sitemap`, `#ft0–2`, `#ev0–2` |
| 02 | Usage | `beatUsage()` | 3 cursors (c1/c2/c3), drop-off at `#shopCta` |
| 03 | Segment | `beatSeg()` | `#u0–2` list, `#u0.sel`, `#rp.on` replay panel, `#rpRage.on` |
| 04 | Research | `beatResearch()` | `#rc0–3` cards: quote, bar chart, tree-test, usability |
| 05 | Understand | `beatUnderstand()` | Identical to EY beat 04 |
| 06 | Design | `beatDesign()` | Figma canvas `#m0–2`, merge, `#onb`, `#depOpt.on` |
| 07 | Hub | `beatHub()` | Identical to EY beat 06 |
| 08 | Systems | `beatSystems()` | 4-layer diagram, `#sp0–4` pips, connection lines |

### DollarCity (`dollarcity-player.html`) — 9 beats, 2 groups

| # | Name | Group | Key containers |
|---|------|-------|----------------|
| 0 | Why | POS | `.dp-why-grid` two columns (problem / solution) |
| 1 | Search | POS | `.dp-split`, `.dp-tbl`, `.dp-row.sel`, cam-ph thumbnail |
| 8 | Filters | POS | `.dp-filt-split`, 10 filter inputs, `.dp-autocomp` |
| 2 | States | Video | `.dp-states`, 4× `.dp-state-card` |
| 3 | Review | Video | `.dp-review`: video player, scrub bar, form, event log |
| 4 | Expand | Video | `.dp-expand`: full-screen cam-ph, pause bar |
| 5 | Requests | Video | `.dp-grid`: `.dp-vcard` cards with dl/dn/pd badges |
| 6 | New | Video | `.dp-modal-bg > .dp-modal`: quality options, cancel/go |
| 7 | Queue | Video | `.dp-qtbl` rows with progress bar, store, cam, date |

### Blockchain 3D (`blockchain-player.html`) — 4 beats, DOM persistent

| # | Name | fn | Key elements |
|---|------|-----|-------------|
| 1 | Onboard | `runBeat(0)` | `#onboard.on`: drawer, `.ob-dots` 3 steps, `.ob-cta` |
| 2 | Place | `runBeat(1)` | `#pMap`, `#holdToast`, cityP.showPin, `#successToast`, `#sheet.on`, `#pinUi.on` |
| 3 | Media | `runBeat(2)` | `#emptyFeed`, `#contentUi`, `#iosGal`, `#igGrid` multi-select, cityP.setPinGlow |
| 4 | Visitor | `runBeat(3)` | `#pMap` camera, `#pinTip.on`, `#sheet.on.v` (visitor), `#reelRail`, `#playerMini.on` |

### Chek (`chek-player.html`) — 6 flows

| # | Name | Flow | Key steps |
|---|------|------|-----------|
| 1 | Hub | `hub` | Balance + card limit, 4-action bar, recent moves preview |
| 2 | Pay | `payment` | Select installments → Confirm → Success |
| 3 | Limit | `credit` | Available/used/cash breakdown, expandable, pay CTA |
| 4 | Moves | `movements` | History → Statements → Transaction detail |
| 5 | Security | `security` | Emotional state first, then block/PIN/fraud options |
| 6 | Onboard | `onboarding` | SINACOFI silent check → step-by-step activation |

### Customs ES (`customs-player.html`) — 8 beats, 3 modes

| # | Name | Mode | fn |
|---|------|------|----|
| 0 | Dashboard | home | `homeHTML()` |
| 1 | Select | arivu | `arivuHTML('select')` |
| 2 | Form | arivu | `arivuHTML('form')` |
| 3 | Review | arivu | `arivuHTML('review')` |
| 4 | Done | arivu | `arivuHTML('done')` |
| 5 | Present | field | `fieldHTML('gate')` |
| 6 | Incident | field | `fieldHTML('incident')` |
| 7 | Release | field | `fieldHTML('release')` |

---

## Known issues / bugs

### Critical — timing race condition
- postMessage sent 260ms after iframe `load` event — **no ACK, no retry**
- If player initialization takes longer than 260ms, beat never activates
- Most common on Blockchain (Three.js + WebGL init), and when 9 EY iframes load in parallel

### Workaround options — NOT YET IMPLEMENTED
**Option A (quick):** Add `{type:'ready'}` postMessage from each player on init done.
beats.html responds to `ready` instead of firing at 260ms.
- 2–3h effort
- Covers the timing race but NOT the parallel load competition

**Option B (permanent):** Extract all beat functions natively into beats.html.
Zero iframes, zero postMessage, zero timing issues.
- 6–8h effort
- Blockchain: decision needed (native Three.js canvas per beat vs static city screenshot)
- Recommended for long-term stability

---

## Comment system — implemented (commit df493b6)

- `localStorage['beats-comments-v1']` — comment data
- `sessionStorage['beats-rv']` — reviewer mode persistence
- Figma-style: numbered pins on stage, thread panels in info column
- C key or topbar button toggles comment mode
- Features: create, reply, resolve/unresolve, delete, component chip suggestion

---

## File locations

| File | Repo | Role |
|------|------|------|
| `beats.html` | `federico-os` | The showcase page |
| `projects/ey-pi-player.html` | `federico-os` | EY player (copy from portfolio) |
| `projects/skills-player.html` | `federico-os` | Skills player |
| `projects/dollarcity-player.html` | `federico-os` | DollarCity player |
| `projects/blockchain-player.html` | `federico-os` | Blockchain player |
| `projects/chek-player.html` | `federico-os` | Chek player |
| `projects/customs-player.html` | `federico-os` | Customs player |

The players in `federico-os/projects/` mirror the ones in `federico-portfolio/projects/`.
Beat order verified 2026-08-29 — matches exactly.

---

## What comes next

- [ ] Decide: Option A (postMessage handshake) or Option B (native beats)
- [ ] If Option B: start with EY + Skills (same engine, easiest extraction)
- [ ] DS Projects page — separate page in federico-os for design system showcase
