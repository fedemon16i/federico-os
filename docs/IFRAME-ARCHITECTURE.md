# Arquitectura del iframe (Beats)

Beats no pinta la UI. Pinta un iframe por beat. Adentro vive el player completo. El recorte es un contrato de capas.

## Capas, de afuera hacia adentro

```
beats.html
  .beat (fila)
    .bi                 texto de disección (título, qué es, qué hay en el cuadro)
    .beat-stage
      iframe?embed=1&window=1&beat=N&once=1
        player.html
          .page / kicker / h1 / lead      ← apagado
          .tl / controls                  ← apagado
          .frame / .unit (grilla stage)   ← apagado visual
          .stage-chrome / flechas / cap   ← apagado (caption + blur)
          #textPhase / .ts-big            ← apagado (typewriting)
          #win  o  #ckPhone / #phone      ← ESTA es la ventana
            slides / form / dashboard     ← la animación
          .cursor                         ← se queda (demo de la ventana)
```

## Superficie por case

| Case | N beats | Nodo de ventana | Player |
|------|---------|-----------------|--------|
| EY Fabric | 9 | `#win` | `ey-pi-player.html` |
| Skills | 8 | `#win` | `skills-player.html` |
| DollarCity | 9 | `#win` | `dollarcity-player.html` |
| Blockchain | 4 | `#phone` | `blockchain-player.html` |
| Chek | 6 | `#ckPhone` | `chek-player.html` |
| Customs | 8 | ventana + devices | `customs-player.html` |

Total si montás todo: **44 iframes × player de 70–180 KB**. Por eso el render no carga src hasta que la fila entra en viewport, y al cambiar de case se descarga el panel anterior.

## Contrato de query

| Param | Efecto |
|-------|--------|
| `embed=1` | marca html.embed |
| `window=1` | solo superficie de producto |
| `beat=N` | índice 0-based de ese cuadro |
| `once=1` | termina y no encadena |

postMessage: `{ type:'playBeat', index:N, once:true }`

## Render

1. DOM de las 44 filas sí se crea (texto liviano).
2. `iframe.src` vacío hasta IntersectionObserver (~200px antes).
3. Al salir del case, `src` se saca.
4. Replay monta si todavía no estaba.

## Qué sigue en el plan

1. Si un cuadro filtra blur/título, cortar ese selector (leak, no redo).
2. Pulir `#win` / teléfono (radio, fondo de producto).
3. Try-me = misma ventana clickeable, no la película.
4. Customs al mismo contrato `window=1`.
