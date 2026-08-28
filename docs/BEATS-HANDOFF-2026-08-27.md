# Handoff Beats — 27 ago 2026

Repo: `fedemon16i/federico-os` (portfolio nuevo = FM.OS).
`federico-portfolio` sigue en producción hasta cutover.
Soyel (método): `fedemon16i/soyel`. No crear un 7º repo.

## Qué pidió Federico

Sacar de cada player **solo la ventana de producto**, como recortar de Grok únicamente el composer (donde se escribe / el audio).

No el player. No el typewriting. No el caption con blur ni el nombre de etapa adentro del recuadro. No rehacer animaciones.

En `beats.html` **todos** los beats diseccionados a ese nivel:

- título + descripción del case **una vez** arriba
- cada fila = un beat
- texto afuera: qué es el cuadro + “qué hay en este cuadro”
- iframe = solo `#win` (EY / Skills / DollarCity) o el teléfono (Chek / Blockchain)
- Try me = player standalone, otra pestaña
- Reviewer/comentarios se pueden dejar, no es el foco

## Contrato

```
player.html?embed=1&window=1&beat=N&once=1
postMessage({ type:'playBeat', index:N, once:true })
```

- `window=1` — html.window: apaga kicker, h1, lead, tl, controls, stage-chrome, flechas, `#cap` / blur, `#textPhase` / `.ts-big`
- `once=1` — el beat termina y **no** llama `go(N+1)`
- iframe.src vacío hasta IntersectionObserver; al cambiar de case se descarga el panel

## Archivos de este drop

| Path | Qué |
|------|-----|
| `beats.html` | página de disección |
| `projects/ey-pi-player.html` | once + window |
| `projects/skills-player.html` | once + window |
| `projects/dollarcity-player.html` | once + window |
| `projects/blockchain-player.html` | once + window |
| `projects/chek-player.html` | once + window |
| `docs/WINDOW-CROP.md` | mapa de ventanas |
| `docs/IFRAME-ARCHITECTURE.md` | capas del iframe |
| `docs/BEATS-HANDOFF-2026-08-27.md` | este archivo |

Customs: **no tocado**. Player original queda.

## Review

Abrir `beats.html` → EY → beat 07 (User flow, índice 6).

Pasa si: solo la UI, texto al lado, no encadena, no typewriting, no caption con degradado.

Falla si: se ve el recuadro-grilla, el título de etapa adentro, o arranca el beat siguiente.

## Qué no hacer

- No reescribir timelines de motion
- No inventar métricas EY
- No clonar UI confidencial; las pantallas del player ya son reconstrucción
- No montar 44 iframes a la vez
- Federico no codea producción; el otro chat aplica leaks de CSS / pulido de `#win`, no un rebuild

## Siguiente (el otro chat)

1. Verificar leaks fila por fila (selector, no redo).
2. Pulir `#win` / teléfono: radio, fondo de producto, que no se lea stage.
3. Try-me = esa ventana clickeable.
4. Customs al mismo contrato `window=1`.
5. Galería anotada (quieta) aparte, con flecha / problema / feature / after — sin pantallas propietarias nuevas.
