/* Product unit + showcase cursor/note/veil. */
(function (w) {
  var T = [];
  var UNIT_W = 840;
  var UNIT_H = 560;
  var PAD = 16;
  var ro = null;
  var PTR = '<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path fill="#ffffff" stroke="#111111" stroke-width="1.35" stroke-linejoin="round" d="M5 3.2 L5.2 19.3 L9.6 14.8 L12.8 21.7 L15.5 20.5 L12.3 13.5 L18.4 13.4 Z"/></svg>';
  function after(ms, fn) { var id = setTimeout(fn, ms); T.push(id); return id; }
  function stop() { T.forEach(clearTimeout); T = []; document.querySelectorAll('.ey-veil').forEach(function (el) { el.classList.remove('on'); }); }
  function applyMode(m) {
    if (!m) { try { m = new URLSearchParams(location.search).get('mode'); } catch (err) { m = null; } }
    if (!m) m = 'dark';
    document.documentElement.setAttribute('data-mode', m);
  }
  applyMode();
  w.addEventListener('message', function (e) {
    if (!e.data) return;
    if (e.data.type === 'fm-stop') stop();
    if (e.data.type === 'fm-mode') applyMode(e.data.mode);
  });
  function fit() {
    var unit = document.querySelector('.ey-unit');
    var host = document.querySelector('.stage') || document.body;
    if (!unit) return 1;
    var r = host.getBoundingClientRect();
    var wdt = (r.width || host.clientWidth || UNIT_W) - PAD * 2;
    var hgt = (r.height || host.clientHeight || UNIT_H) - PAD * 2;
    if (wdt < 8 || hgt < 8) return 1;
    var s = Math.min(wdt / UNIT_W, hgt / UNIT_H);
    if (!isFinite(s) || s <= 0) s = 1;
    unit.style.transform = 'translate(-50%,-50%) scale(' + s + ')';
    return s;
  }
  function link(name) {
    if (document.querySelector('link[href*="' + name + '"]')) return;
    var l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = (location.pathname.indexOf('/projects/') >= 0 ? '' : 'projects/') + name;
    document.head.appendChild(l);
  }
  function veil(kind, label) {
    var host = document.querySelector('.stage') || document.body;
    var el = host.querySelector('.ey-veil');
    if (!el) { el = document.createElement('div'); host.appendChild(el); }
    el.className = 'ey-veil ' + (kind === 'ok' ? 'ok' : 'fail');
    el.innerHTML = '<div class="mk">' + (kind === 'ok' ? '✓' : '↓') + '</div><b>' + (label || (kind === 'ok' ? 'Ready' : 'Drop-off')) + '</b>';
    requestAnimationFrame(function () { el.classList.add('on'); });
    return el;
  }
  function move(id, el, ox, oy) {
    var n = typeof id === 'string' ? document.getElementById(id) : id;
    var unit = document.querySelector('.ey-unit');
    if (!n || !el || !unit) return;
    var r = el.getBoundingClientRect();
    var b = unit.getBoundingClientRect();
    var s = b.width / UNIT_W || 1;
    n.style.left = Math.max(8, Math.min(UNIT_W - 88, (r.left - b.left) / s + (ox || 6))) + 'px';
    n.style.top = Math.max(8, Math.min(UNIT_H - 36, (r.top - b.top) / s + (oy || 4))) + 'px';
  }
  function note(el, label) {
    var unit = document.querySelector('.ey-unit');
    if (!unit || !el) return;
    unit.querySelectorAll('.ring').forEach(function (n) { n.classList.remove('ring'); });
    el.classList.add('ring');
    var tip = unit.querySelector('.fm-note');
    if (!tip) { tip = document.createElement('div'); tip.className = 'fm-note'; unit.appendChild(tip); }
    tip.textContent = label || '';
    tip.style.display = 'block';
    var er = el.getBoundingClientRect();
    var ur = unit.getBoundingClientRect();
    var s = ur.width / UNIT_W || 1;
    var x = (er.right - ur.left) / s + 10;
    var y = (er.top - ur.top) / s;
    tip.classList.remove('below');
    if (x > UNIT_W - 196) { x = (er.left - ur.left) / s; y = (er.bottom - ur.top) / s + 8; tip.classList.add('below'); }
    tip.style.left = Math.max(8, Math.min(UNIT_W - 188, x)) + 'px';
    tip.style.top = Math.max(26, Math.min(UNIT_H - 52, y)) + 'px';
    move('u1', el);
  }
  function boot() {
    applyMode();
    link('ey-ds.css');
    link('ey-ds-plus.css');
    link('ey-motion.css');
    link('fm-show.css');
    fit();
    w.requestAnimationFrame(function () { fit(); w.requestAnimationFrame(fit); });
    var host = document.querySelector('.stage');
    if (host && w.ResizeObserver) { if (ro) ro.disconnect(); ro = new ResizeObserver(function () { fit(); }); ro.observe(host); }
    var path = location.pathname || '';
    var scene = '';
    try { scene = new URLSearchParams(location.search).get('scene') || ''; } catch (e) {}
    if (/ey-02-analyze/.test(path)) after(8200, function () { veil('fail', 'Drop-off'); });
    if (/ey-funnel/.test(path)) after(1800, function () { veil('fail', 'Drop-off'); });
    if (/ey-req/.test(path)) after(7000, function () { veil('ok', 'Ready'); });
  }
  function cursors(host, n) {
    host = host || document.querySelector('.ey-unit');
    n = n || 1;
    host.querySelectorAll('.uc').forEach(function (el) { el.remove(); });
    var nodes = [];
    for (var i = 0; i < n; i++) {
      var d = document.createElement('div');
      d.className = 'uc u' + (i + 1);
      d.id = 'u' + (i + 1);
      d.innerHTML = (n > 1 ? '<em>user ' + (i + 1) + '</em>' : '') + PTR;
      d.style.left = 28 + i * 22 + 'px';
      d.style.top = 42 + i * 20 + 'px';
      host.appendChild(d);
      nodes.push(d);
    }
    return nodes;
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
  w.addEventListener('load', fit);
  w.addEventListener('resize', fit);
  w.EY = { UNIT_W: UNIT_W, UNIT_H: UNIT_H, after: after, stop: stop, fit: fit, boot: boot, cursors: cursors, move: move, mode: applyMode, veil: veil, note: note };
})(window);
