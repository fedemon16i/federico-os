# Component inventory 2

Device matrix

| Project | Device | Status |
| EY | desktop | hecho — denso en screens |
| Chek | phone + touch | hecho |
| DollarCity | pending | |
| Customs | pending | |
| Blockchain | pending | |

## EY beats (9)
measure · analyze · funnel · research · understand · design · hub · requester · publisher

Used in real screens now:
- `.fm-table` — hub.overview / hub.alarms / pub.queue
- `.fm-modal` / `.fm-sheet` — catalog.details + form.walk 1–3
- `.fm-check` — form storage + pub.guide
- `.fm-select` — form.custom → form.loc (panel of options)
- Cards still have See details + Get started

## Chek beats (6)
chek-hub · chek-pay · chek-credit · chek-moves · chek-security · chek-onboard

## kit.html
Landing shows two labeled groups as `.fm-tile` rows. Select stays as fine control.

## Known fix
`catalog.details` must call `EYScreens['catalog.services']()`, not `this[...]` — `FM.beat` invokes screens as loose functions.
