(function (w) {
  var T = [];
  var UNIT_W = 960;
  var UNIT_H = 600;
  var ro = null;
  var PTR = '<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path fill="#ffffff" stroke="#111111" stroke-width="1.35" stroke-linejoin="round" d="M5 3.2 L5.2 19.3 L9.6 14.8 L12.8 21.7 L15.5 20.5 L12.3 13.5 L18.4 13.4 Z"/></svg>';
  var TOUCH = '<i></i>';

  function unitEl() { return document.querySelector('.fm-unit, .ey-unit'); }
  function after(ms, fn) { var id = setTimeout(fn, ms); T.push(id); return id; }
  function stop() {
    T.forEach(clearTimeout); T = [];
    document.querySelectorAll('.fm-tip').forEach(function (n) { n.remove(); });
  }
  w.addEventListener('message', function (e) {
    if (e.data && e.data.type === 'fm-stop') stop();
  });

  function fit() {
    var unit = unitEl();
    var host = document.querySelector('.stage') || document.body;
    if (!unit) return 1;
    var r = host.getBoundingClientRect();
    var wdt = r.width || host.clientWidth || UNIT_W;
    var hgt = r.height || host.clientHeight || UNIT_H;
    if (wdt < 8 || hgt < 8) return 1;
    var s = Math.min(wdt / UNIT_W, hgt / UNIT_H);
    if (!isFinite(s) || s <= 0) s = 1;
    unit.style.transform = 'translate(-50%,-50%) scale(' + s + ')';
    return s;
  }
  function boot() {
    fit();
    w.requestAnimationFrame(function () { fit(); w.requestAnimationFrame(fit); });
    var host = document.querySelector('.stage');
    if (host && w.ResizeObserver) {
      if (ro) ro.disconnect();
      ro = new ResizeObserver(function () { fit(); });
      ro.observe(host);
    }
  }

  function cursors(host, n, kind) {
    host = host || unitEl();
    n = n || 1;
    kind = kind || 'pointer';
    host.querySelectorAll('.uc').forEach(function (el) { el.remove(); });
    var nodes = [];
    for (var i = 0; i < n; i++) {
      var d = document.createElement('div');
      d.className = 'uc u' + (i + 1) + (kind === 'touch' ? ' touch' : '');
      d.id = 'u' + (i + 1);
      d.innerHTML = kind === 'touch' ? TOUCH : ((n > 1 ? '<em>user ' + (i + 1) + '</em>' : '') + PTR);
      d.style.left = 28 + i * 18 + 'px';
      d.style.top = 48 + i * 16 + 'px';
      host.appendChild(d);
      nodes.push(d);
    }
    return nodes;
  }

  function move(id, el, ox, oy) {
    var n = typeof id === 'string' ? document.getElementById(id) : id;
    var unit = unitEl();
    if (!n || !el || !unit) return;
    var r = el.getBoundingClientRect();
    var b = unit.getBoundingClientRect();
    var s = b.width / UNIT_W || 1;
    var touch = n.classList.contains('touch');
    var x = (r.left - b.left) / s + (ox != null ? ox : (touch ? 8 : 6));
    var y = (r.top - b.top) / s + (oy != null ? oy : (touch ? 8 : 4));
    var pad = touch ? 44 : 28;
    n.style.left = Math.max(6, Math.min(UNIT_W - pad, x)) + 'px';
    n.style.top = Math.max(6, Math.min(UNIT_H - pad, y)) + 'px';
  }

  function tip(el, text) {
    var unit = unitEl();
    if (!unit || !el) return;
    unit.querySelectorAll('.fm-tip').forEach(function (n) { n.remove(); });
    var t = document.createElement('div');
    t.className = 'fm-tip';
    t.textContent = text;
    unit.appendChild(t);
    var r = el.getBoundingClientRect();
    var b = unit.getBoundingClientRect();
    var s = b.width / UNIT_W || 1;
    var x = (r.left - b.left) / s;
    var y = (r.top - b.top) / s - 36;
    t.style.left = Math.max(8, Math.min(UNIT_W - 208, x)) + 'px';
    t.style.top = Math.max(8, Math.min(UNIT_H - 40, y)) + 'px';
    return t;
  }
  function ring(el, on) { if (el) el.classList.toggle('fm-ring', on !== false); }
  function skin(name) { document.documentElement.setAttribute('data-skin', name); }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
  w.addEventListener('load', fit);
  w.addEventListener('resize', fit);

  w.FM = { UNIT_W: UNIT_W, UNIT_H: UNIT_H, after: after, stop: stop, fit: fit, boot: boot, cursors: cursors, move: move, tip: tip, ring: ring, skin: skin };
  w.EY = w.EY || w.FM;
})(window);
