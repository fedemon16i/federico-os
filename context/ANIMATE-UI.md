# ANIMATE-UI — Resources for animating product UI in showcase context

> **Scope:** `beats.html` and future showcase pages in `federico-os`.  
> **Not scope:** the live portfolio case pages in `federico-portfolio` (those keep their own CSS).

---

## The core principle (from the reconstruction framework)

> Don't recreate the pixels. Reconstruct the system that produced the pixels.

For the beats showcase this means: don't screenshot a product state.
Build the DOM structures, components, and tokens of the real product,
then orchestrate them with animation to tell a story.

A screenshot is evidence. The DOM **is** the product.

---

## The two-phase rule — critical for beats reconstruction

```
PHASE A — RECONSTRUCT
  Goal: make the animated beat look and behave like the real product.
  Do NOT redesign. One-to-one first.

PHASE B — ORCHESTRATE
  Goal: add motion that tells the story of what happened in that screen.
  Cursor movements, state transitions, reveals, emphasis.
```

Never jump from screenshot to orchestration. Establish visual parity first,
then add the narrative layer. This is what made the EY and Skills beats stable
(the DOM mirrored the real player exactly).

---

## What the beats system is currently doing

Each beat = one iframe → `postMessage({type:'playBeat', index:N})` to the real player.
The player injects its DOM state; `beats.html` strips the chrome with CSS.

**The problem:** the 260ms fixed delay has no ACK. If the player initializes
slower than expected, the signal is silently dropped. See `context/BEATS-LOG.md`.

---

## Motion primitives — what already exists

### In `shared.css` (federico-portfolio)
```css
--spring:   cubic-bezier(.34, 1.56, .64, 1);   /* grows → always spring */
--ease-out: cubic-bezier(.22, 1, .36, 1);       /* exits → no overshoot */
--ease-in:  cubic-bezier(.55, 0, 1, .45);       /* enters fast */
```

### In `demo-kit.js` (federico-portfolio)
```js
DemoKit.tilt3D(el)         // mouse-parallax tilt
DemoKit.cursor(stage, steps) // scripted cursor path animation
DemoKit.funnel(el, data)   // funnel chart build
DemoKit.segmentTable(el)   // user segment table
DemoKit.dualPath(el)       // dual-path UX diagram
```

### Available CDN (already in CLAUDE.md)
```html
<!-- Motion One — flow transitions -->
<script src="https://cdn.jsdelivr.net/npm/motion@10.16.4/dist/motion.js"></script>

<!-- Animate.css — entrance animations -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
```

---

## Motion vocabulary to standardize

A beat should use AT MOST 3 animation types. Name them before coding.

| Name | When | Easing |
|------|------|--------|
| `reveal` | DOM element appears | `--spring` for things that grow, fade for text |
| `cursor-move` | Scripted cursor navigating UI | linear segments, easeInOut at stops |
| `state-change` | Button/tab/card switches state | 150ms ease-out |
| `emphasis` | Glow, shake, ring | 300ms spring then decay |
| `zoom` | Camera-in on a specific element | ease-in-out, avoid abrupt stops |
| `transition` | Beat-to-beat crossfade | 300ms opacity |

---

## GSAP — for future use in complex beats

Currently the beats use `setTimeout` chains. For longer orchestrations:

```js
// Add when beats need multi-step timelines > 5 steps
// CDN: https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js
// ScrollTrigger for scroll-locked beats

gsap.timeline()
  .from('.element', { opacity: 0, y: 20, duration: 0.4, ease: 'power2.out' })
  .to('.cursor', { x: 200, duration: 0.6, ease: 'power1.inOut' }, '+=0.3')
  .to('.button', { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 });
```

GSAP is overkill for simple beats. Use it only when setTimeout chains become
more than ~8 steps or when scroll-synced beats are needed.

---

## Three.js — Blockchain only

Already running in the blockchain player (`/projects/blockchain-player.html`).
Isolated to that player — never pull Three.js into beats.html globally.

For the beats reconstruction (Option B — native beats without iframes),
Blockchain is the only beat that needs a decision:
- **Option B1:** Render Three.js canvas per beat (expensive, 4× parallel canvases)
- **Option B2:** Screenshot the city state for each beat, use static image as bg,
  animate only the iOS UI overlay natively (recommended — city is atmosphere, not the story)

---

## What's NOT worth doing for this project

From the uploaded framework (`product_ui_reconstruction_design_system_framework.md`):

| Tool / Pattern | Why skip |
|---|---|
| Storybook | No build step, pure HTML. Overkill. |
| React + TypeScript | Contradicts the no-framework constraint. |
| W3C/DTCG tokens.json | CSS vars already cover the token layer. |
| Story UI (AI Storybook generator) | Not applicable without Storybook. |
| storysync (Figma ↔ code) | No active Figma-to-code sync needed. |
| Chromatic visual regression | Playwright snapshots already exist in portfolio. |
| extract-design-system NPX | Useful for external clients; portfolio already has its own DS. |

---

## What IS worth considering

| Tool / Pattern | Why relevant |
|---|---|
| **StyleLift** `DESIGN.md` generation | Could auto-generate DESIGN.md from a live URL. Good for onboarding new AI sessions. |
| **Motion tokens** (from framework §15) | Add `--dur-fast`, `--dur-normal`, `--dur-slow` to `fmos.css` alongside existing easing tokens. |
| **Motion registry** (§37) | Name the beat animation types (reveal/cursor/state-change) and document them — this file does that. |
| **Two-phase rule** (§27) | Already applied in beats: DOM parity first, then orchestration. |
| **AI contract** (§34) | CLAUDE.md + this file IS the contract. Keep it updated. |

---

## Recommended motion stack for `beats.html`

```
Simple state beats (EY, Skills, DollarCity, Customs)
    → Native CSS transitions + JS classList + setTimeout chains
    → Spring easing for grows, ease-out for exits

iOS flow beats (Chek)
    → Same as above + class toggling for step transitions

3D + iOS beats (Blockchain)
    → If native: static city bg + CSS/JS for iOS overlay only

Heavy timeline beats (future — 8+ steps)
    → Motion One for sequenced property animations
    → GSAP + ScrollTrigger for scroll-locked showcase sections
```

---

## Files to read before touching any beat

1. `context/BEATS-LOG.md` — current status of all 47 beats + known issues
2. `README.md` — design thesis and guardrails for FM.OS
3. `REFERENCES.md` — visual references and what NOT to copy
