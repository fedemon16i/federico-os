# Recorte de ventana (no el player)

Analogía: de Grok, solo el composer (donde escribís / el audio). El resto del producto no viaja.

## Qué es la ventana en cada case

| Case | Ventana | Cáscara que no viaja |
|------|---------|----------------------|
| EY Fabric | `#win` (UI de producto adentro) | kicker, h1, lead, timeline, controls, `.unit` grid, `.stage-chrome`, flechas, `#cap`, typewriting |
| Skills | `#win` | igual que EY |
| DollarCity | `#win` dentro de `#unit` | textPhase, capbar, hotkeys |
| Chek | `#ckPhone` | textPhase, stage title/count, cap |
| Blockchain | `#phone` | textPhase, stage chrome, cap |
| Customs | (pendiente) | player + typewriting |

## Query

```
player.html?embed=1&window=1&beat=N&once=1
```

- `window=1` → solo la superficie de producto
- `once=1` → ese beat, no encadena
- Try me = el player completo, otra pestaña

## Qué pulir después (la ventana, no el player)

1. Radio, sombra y fondo de `#win` / teléfono — que se lea producto, no stage.
2. Cursor y highlights se quedan: son la demo de la ventana.
3. Prototipo “try me” = esa misma ventana, clickeable, sin película.
