# Contrato Beats

Fuente de verdad también en `fedemon16i/soyel/BEATS-CONTRACT.md`.

```
projects/ey-pi-player.html?embed=1&beat=6&once=1
```

- `embed=1` — hide chrome
- `beat=N` — índice 0-based
- `once=1` — no auto-advance
- postMessage `{type:'playBeat', index:N, once:true}`

No rehacer timelines. Galería anotada = fuera del player.
