# Beats extraction framework

How Chat B pulled EY Fabric apart — and how to reuse it on the other cases.

## What we actually did

We did **not** hide the player with CSS. We **took pieces out**.

1. Read the original player. Name every beat.
2. Decide per beat: **diagram** or **product window**.
3. Copy only the HTML/CSS/JS that beat needs into a small file (`ey-01-measure.html`, `ey-req.html`, …).
4. Kill typewriter, blur captions, pills, timeline, `go(N+1)`.
5. Put the explanation **outside** the iframe (title + lede + “qué hay en este cuadro”).
6. Iframe: lazy load, unload when the case changes. Replay/Stop via `postMessage` `fm-stop`.

The host (`beats.html` + `ey-meta.js`) is a list. Each row is one picture. Motion stays inside the fragment.

## Two surfaces

| Kind | When | Chrome |
|---|---|---|
| `diagram` | Sitemap, funnel, research grid, finding → owner | No browser. EY editorial: black + `#FFE600`, padding, mono labels. |
| `window` | Anything a person would use | Browser chrome (dots + URL). Product DS, not the diagram DS. |

Rule already written: web app UI always sits in a browser. Not mobile. Not diagrams.

## Product DS vs diagram DS

**Product (Fabric reconstructed)**  
`--bg:#12141c` `--card:#1c1e28` `--or:#e8943a` `--gold:#f0de5a` IBM Plex. Invented copy. Never paste confidential screens.

**Diagram**  
Yellow `#FFE600` on near-black. Sharp corners. No orange catalog tiles.

`projects/ey-ds.css` holds the product tokens. Diagrams keep their own board CSS on purpose — they are not the app.

## Animation contract

Match Analyze Path, not a slide deck:

- Cursor only on product UI (not on funnels).
- `place` → wait ~400–500ms → click → wait ~280ms → next screen.
- Dwell on a screen ~1.2–1.8s if the screen has to be read.
- One sequence per beat. Tabs are not navigation.
- Forms: Step X of Y, one topic per screen, Back/Next, validate on continue.
- Publisher: workspace → select a live product → instances (onboarding, checklist, help, builder, AI review, human review).
- Success is a **state change**, not a new metaphor (check + line, then hold).

## How to swap style later

Do not fork the motion. Fork the tokens.

```
:root {
  --bg --card --line --or --gold --ok --muted
}
font-family
browser chrome colors
```

A Chek or Skills fragment should keep the same skeleton (`stage`, `show(html)`, `after`, `place`, `clickCur`, `fm-stop`) and change tokens + chrome (phone vs browser vs tool window).

## Other cases — same method, different chrome

| Case | What to extract | Chrome | Do not |
|---|---|---|---|
| **Skills** | Each tool as its own window (Figma / Spline / Unity already exist as 720×420 units) | Tool window, not browser | Do not put a sitemap in a browser |
| **Chek** | Phone flows (onboard, protect, amount) | Device frame `#ckPhone` | No web-app dots |
| **DollarCity** | Dual device + store path | Phone + desktop pair | Don’t flatten to one iframe crop |
| **Blockchain** | Process carousel (Figma / Spline / Unity) | Same tool-window fit as Skills | Don’t invent chain metrics |
| **Customs** | Not in this contract yet | Field / dual device when we open it | Don’t start here |

For each case: one host page of rows + one fragment per beat + `scenes[]` only when a beat is two *different* pictures (path vs funnel). If it is one journey (publisher pipeline, requester path), **one file, one sequence**.

## File map (EY)

- `beats.html` + `ey-meta.js` — host
- `ey-01-measure.html` `ey-funnel.html` `ey-research.html` `ey-understand.html` — diagrams
- `ey-02-analyze.html` — path (browser)
- `ey-design.html` — two workshops + design-ready screen
- `ey-hub.html` — built product + alarms
- `ey-pub.html` — publisher pipeline
- `ey-req.html` — requester path
- `projects/ey-ds.css` — product tokens

## What not to do again

- Transparency / crop hacks instead of extraction
- Rebuilding motion from the original player
- Inventing EY confidential numbers (reuse the case funnel 100→22)
- Mixing diagram language into the catalog UI
- Splitting one journey into five host rows
