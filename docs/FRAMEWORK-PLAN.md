# Framework plan

Alma igual, piel distinta. EY nace el método. No se replica el producto real.

Unit: 960×600. Motor: `projects/fm-engine.js`. Piel: `projects/fm-ds.css` `[data-skin]`.
No tocar `index.html` / `fmos.css` / `fmos.js`.

## 8 · Component inventory (kit)

Chrome: `.fm-shell` `.fm-bbar` `.fm-dots` `.fm-addr` `.iphone`
Nav: `.fm-nav` `.fm-rail` `.fm-crumb` `.fm-search` `.fm-ai` `.fm-av`
Action: `.fm-btn` `.ghost` `.secondary` `.lg` `.fm-chip` `.on`
Input: `.fm-field` `.fm-select` `.fm-radio` `.fm-check` `.fm-drop`
Data: `.fm-offer` `.fm-tile` `.fm-photo` `.fm-table` `.fm-kpi` `.fm-row`
State: `.fm-tag.ok|.warn|.bad` `.fm-banner` `.fm-notice` `.fm-empty`
Overlay: `.fm-modal` `.fm-tip` `.fm-cap` `.fm-veil` `.fm-drop-flag`
Analytics: `.fm-funnel` `.fm-node` `.fm-bars`

Si no está en `kit.html`, no existe.

## Mode

1. `?mode=`  2. `FM.beat({mode})`  3. postMessage `fm-mode`  4. prefers  5. dark
`data-mode` always set. Host must postMessage, never remount iframe.

## Live files
`projects/fm-ds.css` `projects/fm-engine.js` `projects/kit.html` `projects/ey-screens.js` `projects/ey-beats.js`

## Delete / deleted
`ds.html` `projects/ey-engine.js` `projects/ey-ds.css`
Still to drop when nothing links them:
`ey-ds-plus.css` `ey-layout.css` `ey-motion.css` `ey-lite.css` `ey-shell.js` `ey-market.js`
`ey-01-measure.html` `ey-02-analyze.html` `ey-funnel.html` `ey-research.html` `ey-understand.html` `ey-design.html` `ey-hub.html` `ey-req.html` `ey-pub.html`
Keep `ey-fabric.html` (case writeup) and `index.html`.
