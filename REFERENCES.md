# FM.OS — Design References
> What to take, what to avoid, from each site Federico flagged. This governs
> **FM.OS only** — the shell (home, cases, capabilities, the monitor). It has
> no bearing on the live portfolio's case pages, which keep their own design
> systems untouched (see `README.md`).
>
> Read this before any visual decision on FM.OS. If a choice doesn't trace
> back to a line here or to a reason stated in `README.md`, it's probably
> the generic default — stop and reconsider.

---

## The soul: PostHog's shell, not PostHog's skin

**[posthog.com](https://posthog.com)** — take the *structure*, not the look.

What to take:
- The page *is* an operating system, not a doc with files floating in the
  middle. Navigation lives at the edges; the center is a window that changes
  content when you pick something.
- The URL moves with you, subtly — so a specific section is a link someone
  can share, not just a scroll position.
- Mobile: "home" is a window that can be *closed*. Closing it reveals the
  desktop — folders and shortcuts. That collapse/reveal is the exact gesture
  FM.OS is chasing.
- It works instantly for someone with zero context. A recruiter who has
  never seen an "OS portfolio" before still knows where to click.

What NOT to take: the visual language. PostHog is clean SaaS — light,
friendly, rounded. Federico's is cyberpunk, has been since before this
project. **The shell's bones are PostHog's; the skin never is.**

---

## Interaction reference, not a real site

**[Behance — Futuristic Website UI Redesign](https://www.behance.net/gallery/229646355/)**

Not a shippable pattern — a mood reference for how *game-like* the window
interactions should feel: windows appear, resize, and dismiss with the
weight of a HUD, not a web page. Borrow the feeling, not any specific asset.

---

## nitinsangwan.com — different experiences per surface, one real flaw

What to take:
- Desktop and mobile are genuinely **different experiences** for the same
  content, not one layout squeezed down. That's the standard for FM.OS too.
- A persistent left-hand navigation component that survives every window
  change — exactly the rail FM.OS already has. Confirmed as correct.
- The way it moves between windows reads well.

What to avoid, explicitly:
- **The ambiguity between a scrollable project list and a project's own
  internal CTA.** Same-looking buttons appear both as "here's a project in
  the list" and "here's a call-to-action inside the currently open project
  preview" — a visitor can't tell which one they're clicking. FM.OS must
  keep those two affordances visually distinct at all times: a case card in
  a list never looks identical to a control inside an opened case.
- The right-side complex JS component is decorative, not informative — skip
  anything in FM.OS that exists only to look technical.

---

## martinrefi.com — desktop metaphor PostHog already improved on

Files you literally drag around a desktop. PostHog's approach (rail +
center window) is the better solve for the same idea, so FM.OS doesn't
copy the drag-desktop mechanic wholesale.

What's still worth taking:
- **The one-liner per project.** A single sentence stating what happened
  and, where there's a real number, the number — never a paragraph up
  front. FM.OS's case cards should read in one line before anyone opens
  the window.
- The shell has a personality that's clearly *his*, not a template. FM.OS's
  E-Ink/cyberpunk direction is that same move for Federico.

---

## amitux.in — the case-card information architecture

This is the direct source for how **FM.OS's case cards** should be
structured going forward (see `fmos.js` / `CASES`):

- Opens with a plain, human intro ("some of my work") — not a slogan.
- Each card cleanly separates three facts before any prose:
  **what he did** (a role/action, not a job title), **the industry**, and
  **how long** — plus a visual sitting right next to that block, so the
  card reads at a glance before anyone commits to opening it.

FM.OS's cards carry the equivalent three fields — role, industry, era —
using **real, already-known employment windows** (Globant × EY 2023–2026,
Applaudo 2021–2023, etc.), never an invented month-count. See
`context/AI-CAPABILITIES-FRAMEWORK.md`-style discipline: no fabricated
metrics, ever — a real range beats a precise-sounding fake one.

---

## Cyberpunk skin references

**[cyberpunkredone.webflow.io](https://cyberpunkredone.webflow.io)** —
a Cyberpunk 2077-referencing skin over a nitin-style window UI. Confirms
the direction (cyberpunk chrome over a functional OS shell) is a real,
working combination, not just a Federico preference in isolation.

**[links-grid-cyberpunk2077.webflow.io](https://links-grid-cyberpunk2077.webflow.io)**
— a simple home is fine, home doesn't need to be elaborate. The one thing
to avoid: it hides real content behind an extra click when a short teaser
could've shown enough to earn that click. FM.OS's case cards exist
specifically so the click is earned, not required just to see what a
project even is.

**[vrtxforge.vercel.app](https://vrtxforge.vercel.app)** — the best window-
invocation animation seen in this research: windows arrive at near-
fullscreen with real weight. Legibility suffers on that site, which FM.OS
should not inherit — take the *quality of the motion*, leave the
readability problem behind. This is the bar for how the floating window
(`openWindow` in `fmos.js`) should eventually feel opening, beyond its
current instant-show.

---

## Open, not yet built: the hologram avatar

Federico wants a holographic avatar of himself present on the home beat —
rotating phrases (the `LINES` array already does a flat version of this)
that a visitor can also *ask something*, with the avatar answering.

Status: **not built.** The rotating one-liner exists; the question-asking
interaction does not. No LLM call needed for v1 — a small set of
keyword-matched canned answers (availability, stack, "why analytics not
UI") gets most of the value without new infrastructure. Revisit once the
Cases/Capabilities routes are built out.

---

## The one hard rule underneath all of this

**FM.OS is not anchored to any one analytics tool as "the" tool.**
Federico's actual claim is: design decisions get made from measured
outcomes — actions, tests, research — or from established best practice
when there's nothing to measure yet. Pendo, PostHog, Mixpanel, Amplitude,
GA4 are instruments he's used; none of them is the story. Copy that reads
like "the Pendo guy" undersells him into a tool operator instead of a
decision-maker. Every rewrite of `LINES`, `PHASES`, the blockquote, or the
stat band in `fmos.js` must hold this line — say "measured," "instrumented,"
"tested," not the name of whichever tool happened to be on that contract.

---

*This document covers FM.OS's own design language only. For content and
positioning source-of-truth about Federico himself, see
`home-photos/FEDERICO-BIO-PORTFOLIO-CONTEXT.md` in `federico-portfolio`.*
