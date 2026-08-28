# Prompt — Chat B (cases / players) · pegar al inicio

Modo: Chat B — Projects. Repo `fedemon16i/federico-os`.
Discovery NO. No rediseñes el OS (eso es Chat A).

Leé antes de codear:
- `docs/BEATS-HANDOFF-2026-08-27.md`
- `docs/WINDOW-CROP.md`
- `docs/IFRAME-ARCHITECTURE.md`
- `beats.html`

## Qué ya está hecho (no rehacer)

La página de Beats disecciona **todos** los beats:
- título + lede del case una vez
- cada fila = un cuadro
- texto afuera (“qué hay en este cuadro”)
- iframe: `?embed=1&window=1&beat=N&once=1`
- typewriting, caption con blur, nombre de etapa, pills, timeline: apagados
- `once=1` corta el `go(N+1)`
- iframes lazy (IntersectionObserver); unload al cambiar de case
- Players parcheados: EY, Skills, DollarCity, Blockchain, Chek
- Customs NO está en este contrato todavía

Analogía de Federico: de Grok, solo el composer. Acá la ventana es `#win` o el teléfono (`#ckPhone` / `#phone`). El cursor de la demo se queda.

## Tu trabajo (en este orden)

1. El HTML parcheado está en el zip / carpeta `federico-os-once` del proyecto Grok. Copiá encima:
   - `beats.html`
   - `projects/ey-pi-player.html`
   - `projects/skills-player.html`
   - `projects/dollarcity-player.html`
   - `projects/blockchain-player.html`
   - `projects/chek-player.html`
   Si esos archivos **ya** están en este repo con `window=1` y `once=1`, no los pises.
2. Abrí `beats.html` → EY beat 07. Si hay leak (blur, título adentro, grilla `.unit`, encadena), cortá el selector. No reescribas la animación.
3. Mismo pase en Skills, DollarCity, Chek, Blockchain.
4. Pulí la ventana aislada: que se lea producto, no escenario.
5. Customs: mismo `window=1` + `once=1`. No reconstruyas el case.
6. Try me = la ventana clickeable, no la película del player.
7. Galería anotada: aparte, quieta. Reconstruida, no UI confidencial EY. Sin métricas inventadas.

## Reglas duras

- No rebuild de motion
- No inventar números EY
- No tocar Chat A (home, nav OS, monitor)
- Si knowledge contradice el recorte de ventana, gana el recorte y anotá el conflicto
- Federico no programa producción; cambios quirúrgicos en HTML/CSS/JS existente

## Definición de listo de esta ronda

- [ ] EY 07 en Beats = solo la ventana
- [ ] Ningún beat de EY/Skills encadena
- [ ] Typewriting y cap-blur no se ven en Beats
- [ ] Try me abre el player standalone
- [ ] Customs al menos no rompe Beats

Antes de codear: 5 bullets de qué vas a tocar y en qué archivo. Esperá “dale”.
