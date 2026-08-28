# Contrato Beats

Fuente de verdad también en `fedemon16i/soyel/BEATS-CONTRACT.md`.

```
projects/ey-pi-player.html?embed=1&window=1&beat=6&once=1
```

- `embed=1` — hide page chrome (home modal still uses this without window)
- `window=1` — only `#win` / phone
- `beat=N` — índice 0-based
- `once=1` — no auto-advance
- `try=1` — clickable window, no film
- postMessage `{type:'playBeat', index:N, once:true}`

No rehacer timelines. Galería anotada = `gallery.html`.
