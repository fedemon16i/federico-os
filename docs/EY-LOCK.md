# EY lock — stop inventing UI

Other projects later reuse the *method*, not these classes:
- EY = Carbon g100 + this shell
- DollarCity = Ant
- Customs = PrimeNG
- Chek = Ripley type + existing player
- Blockchains = current

## Files you touch for product UI
`ey-ds.css` color  
`ey-ds-plus.css` components  
`ey-layout.css` space / recipes  
`ey-market.js` cards  
`ey-shell.js` screens: home, catalog, services, form, billing, confirm

## Files you touch for animation only
`ey-02-analyze.html` `ey-req.html` `ey-pub.html` `ey-hub.html`  
`ey-engine.js` cursor / tip / drop / veil

If a control is missing, add it to plus + shell first. Do not draw a new button inside a beat.

## Allowed product classes
`.ey-btn` `.ey-btn.ghost` `.ey-btn.lg`  
`.ey-chip` `.ey-tag.ok|.warn|.bad`  
`.ey-search` `.ey-input` `.ey-select` `.box`  
`.ey-radio` `.ey-check` `.ey-steps`  
`.ey-offer` `.ey-ico` `.ey-tile` `.ey-logo` `.ey-brand`  
`.ey-order` `.ey-disc` `.ey-tip`  
`.nav` `.side` `.hero` `.band` `.banner` `.kpi` `.row`

Showcase only: `.uc` `.ey-drop` `.fm-note` `.ey-veil`

## Screens in the shell
Home · Catalog · Services · Form · Billing · Confirm
Publisher is the other surface (same tokens, own HTML).
