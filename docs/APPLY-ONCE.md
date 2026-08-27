# Aplicar modo once=1

Los HTML parcheados están en el proyecto Grok `artifacts/federico-os-once/`.
Si este chat puede pushear los HTML, reemplazar los archivos 1:1.

## beats.html

```
src = proj.src + '?embed=1&beat=' + bi + '&once=1'
postMessage({ type:'playBeat', index:bi, once:true })
```

Agregar `lede` y `tryUrl` por proyecto. Header de case una vez arriba de las filas.

## EY + Skills (`playBeat`)

```js
window.__FM_QS = new URLSearchParams(location.search);
window.__FM_ONCE = window.__FM_QS.get('once')==='1' || window.__FM_QS.get('embed')==='1';
window.playBeat = function go(i, opts){
  opts = opts || {};
  var once = window.__FM_ONCE || opts.once;
  gen++; var my = gen; clearAll(); hideCursors(); hideCap(); idx = i; sync();
  BEATS[i].fn(function(){
    if (my !== gen || !playing) return;
    after(T.gap, function(){ if (once) return; go(idx < BEATS.length-1 ? idx+1 : 0); });
  });
};
```

En `textPhase`, primera línea:

```js
if (window.__FM_ONCE) { if (then) then(); return; }
```

No auto `playBeat(0)`: leer `beat` de la query.

## DollarCity / Blockchain

Si `__FM_ONCE`: saltar typewriting, montar el UI, no llamar `go(idx+1)`.

## Chek

Boot con `FLOW_META[beat]` en vez de siempre `hub`.
