(function (w) {
  var T = [];
  var UNIT_W = 960;
  var UNIT_H = 600;
  var ro = null;
  var runId = 0;
  var inheritedMode = null;
  var lastCfg = null;
  var MOVE = 800, HOVER = 140, CLICK = 230, SETTLE = 180;
  var PTR = '<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path fill="#ffffff" stroke="#111111" stroke-width="1.4" stroke-linejoin="round" d="M5 3.2 L5.2 19.3 L9.6 14.8 L12.8 21.7 L15.5 20.5 L12.3 13.5 L18.4 13.4 Z"/></svg>';
  var TOUCH = '<i></i>';

  function unitEl() { return document.querySelector('.fm-unit'); }
  function after(ms, fn) { var id = setTimeout(fn, ms); T.push(id); return id; }
  function stop() {
    T.forEach(clearTimeout); T = [];
    var u = unitEl();
    if (!u) return;
    u.querySelectorAll('.fm-tip,.fm-drop-flag,.fm-click-ripple,.fm-veil,.fm-cap').forEach(function (n) { n.remove(); });
    u.querySelectorAll('.uc.press').forEach(function (n) { n.classList.remove('press'); });
  }

  function resolveMode(explicit) {
    var q = '';
    try { q = new URLSearchParams(w.location.search).get('mode') || ''; } catch (e) {}
    if (q === 'light' || q === 'dark') return q;
    if (explicit === 'light' || explicit === 'dark') return explicit;
    if (inheritedMode === 'light' || inheritedMode === 'dark') return inheritedMode;
    if (w.matchMedia && w.matchMedia('(prefers-color-scheme: light)').matches) return 'light';
    return 'dark';
  }
  function applyMode(name) {
    document.documentElement.setAttribute('data-mode', name === 'light' ? 'light' : 'dark');
  }

  w.addEventListener('message', function (e) {
    var d = e.data || {};
    if (d.type === 'fm-stop') stop();
    if (d.type === 'fm-mode' && (d.mode === 'light' || d.mode === 'dark')) {
      inheritedMode = d.mode;
      applyMode(resolveMode(lastCfg && lastCfg.mode));
    }
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
    applyMode(resolveMode());
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
    n = n || 0;
    kind = kind || 'pointer';
    if (!host) return [];
    host.querySelectorAll('.uc').forEach(function (el) { el.remove(); });
    var nodes = [];
    for (var i = 0; i < n; i++) {
      var d = document.createElement('div');
      d.className = 'uc u' + (i + 1) + (kind === 'touch' ? ' touch' : '');
      d.id = 'u' + (i + 1);
      d.innerHTML = kind === 'touch' ? TOUCH : (PTR + (n > 1 ? '<em class="fm-who">user ' + (i + 1) + '</em>' : ''));
      d.style.left = (40 + i * 22) + 'px';
      d.style.top = (56 + i * 20) + 'px';
      host.appendChild(d);
      nodes.push(d);
    }
    return nodes;
  }

  function place(id, el, ox, oy) {
    var n = typeof id === 'string' ? document.getElementById(id) : id;
    var unit = unitEl();
    if (!n || !el || !unit) return;
    var r = el.getBoundingClientRect();
    var b = unit.getBoundingClientRect();
    var s = b.width / UNIT_W || 1;
    var touch = n.classList.contains('touch');
    var x = (r.left - b.left) / s + (ox != null ? ox : (touch ? 8 : 6));
    var y = (r.top - b.top) / s + (oy != null ? oy : (touch ? 8 : 4));
    var pad = touch ? 44 : 36;
    n.style.left = Math.max(8, Math.min(UNIT_W - pad, x)) + 'px';
    n.style.top = Math.max(8, Math.min(UNIT_H - pad, y)) + 'px';
  }
  function move(id, el, ox, oy) { place(id, el, ox, oy); }
  function warp(id, el, ox, oy) {
    var n = typeof id === 'string' ? document.getElementById(id) : id;
    if (!n) return;
    var prev = n.style.transition;
    n.style.transition = 'none';
    place(n, el, ox, oy);
    void n.offsetWidth;
    n.style.transition = prev || '';
  }
  function pack(el, n) {
    if (!el) return;
    n = n || 3;
    for (var i = 1; i <= n; i++) warp('u' + i, el, 4 + (i - 1) * 20, 2 + (i - 1) * 16);
  }

  function click(id) {
    var n = typeof id === 'string' ? document.getElementById(id) : id;
    var unit = unitEl();
    if (!n || !unit) return;
    n.classList.add('press');
    var rip = document.createElement('div');
    rip.className = 'fm-click-ripple';
    rip.style.left = n.style.left;
    rip.style.top = n.style.top;
    unit.appendChild(rip);
    after(CLICK, function () {
      n.classList.remove('press');
      if (rip.parentNode) rip.parentNode.removeChild(rip);
    });
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
    t.style.left = Math.max(8, Math.min(UNIT_W - 240, (r.left - b.left) / s)) + 'px';
    t.style.top = Math.max(8, Math.min(UNIT_H - 48, (r.top - b.top) / s - 40)) + 'px';
    return t;
  }
  function note(el, label) { return tip(el, label); }
  function drop(el, label) {
    var unit = unitEl();
    if (!unit || !el) return;
    var d = document.createElement('div');
    d.className = 'fm-drop-flag';
    d.textContent = label || 'Drop-off';
    unit.appendChild(d);
    var r = el.getBoundingClientRect();
    var b = unit.getBoundingClientRect();
    var s = b.width / UNIT_W || 1;
    d.style.left = Math.max(8, (r.left - b.left) / s) + 'px';
    d.style.top = Math.max(8, (r.top - b.top) / s - 22) + 'px';
    return d;
  }
  function veil(kind, label) {
    var unit = unitEl();
    if (!unit) return;
    unit.querySelectorAll('.fm-veil').forEach(function (n) { n.remove(); });
    var v = document.createElement('div');
    v.className = 'fm-veil on';
    v.textContent = label || (kind === 'bad' ? 'Drop-off' : 'Ready');
    unit.appendChild(v);
    return v;
  }
  function say(text) {
    var unit = unitEl();
    if (!unit) return;
    var cap = unit.querySelector('.fm-cap');
    if (!cap) {
      cap = document.createElement('div');
      cap.className = 'fm-cap';
      unit.appendChild(cap);
    }
    cap.textContent = text || '';
    cap.style.display = text ? 'block' : 'none';
    return cap;
  }
  function ring(el, on) { if (el) el.classList.toggle('fm-ring', on !== false); }
  function skin(name) { document.documentElement.setAttribute('data-skin', name); }
  function mode(name) { applyMode(name); }

  function q(sel) {
    var unit = unitEl();
    return unit ? unit.querySelector(sel) : null;
  }
  function slot() {
    var unit = unitEl();
    return (unit && unit.querySelector('#slot')) || unit;
  }
  function renderScreen(screens, name) {
    if (!screens || !name || !screens[name]) return;
    var host = slot();
    if (!host) return;
    host.innerHTML = screens[name]();
    var addr = document.getElementById('addr');
    if (addr) addr.textContent = name;
  }
  function sayMs(text) { return Math.max(500, String(text || '').length * 9); }
  function reduced() {
    return w.matchMedia && w.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function beat(cfg) {
    cfg = cfg || {};
    lastCfg = cfg;
    stop();
    var id = ++runId;
    document.documentElement.setAttribute('data-skin', cfg.skin || 'ey');
    document.documentElement.setAttribute('data-device', cfg.device || 'desktop');
    applyMode(resolveMode(cfg.mode));
    var unit = unitEl();
    if (!unit) return id;
    var nCur = cfg.cursors || 0;
    if (nCur) cursors(unit, nCur, cfg.touch ? 'touch' : 'pointer');
    else unit.querySelectorAll('.uc').forEach(function (n) { n.remove(); });
    var steps = cfg.steps || [];
    var screens = cfg.screens || {};
    if (reduced()) {
      var last = null;
      for (var i = 0; i < steps.length; i++) if (steps[i].screen) last = steps[i].screen;
      if (last) renderScreen(screens, last);
      return id;
    }
    var clock = 0;
    function alive() { return id === runId; }
    function later(ms, fn) {
      clock += ms;
      after(clock, function () { if (alive()) fn(); });
    }
    steps.forEach(function (st) {
      if (st.screen) {
        later(0, function () {
          renderScreen(screens, st.screen);
          if (st.say) say(st.say);
        });
        later(SETTLE, function () {
          var el = q(st.to || '#go') || q('#f1');
          if (nCur > 1 && el) pack(el, nCur);
        });
        if (st.say) later(sayMs(st.say), function () {});
        return;
      }
      if (st.say && !st.tap && !st.move && !st.click && !st.tip && !st.drop) {
        later(0, function () { say(st.say); });
        later(sayMs(st.say), function () {});
        return;
      }
      if (st.hold) { later(st.hold, function () {}); return; }
      if (st.move) {
        later(0, function () { var el = q(st.to); if (el) move(st.id || 'u1', el); if (st.say) say(st.say); });
        later(MOVE, function () {});
        return;
      }
      if (st.tap) {
        later(0, function () {
          var el = q(st.to);
          if (el) {
            if (nCur > 1) pack(el, nCur);
            else move(st.id || 'u1', el);
          }
          if (st.say) say(st.say);
        });
        later(MOVE + HOVER, function () { click(st.id || 'u1'); });
        later(CLICK, function () {});
        return;
      }
      if (st.click) {
        later(0, function () { click(st.id || 'u1'); });
        later(CLICK, function () {});
        return;
      }
      if (st.warp) {
        later(0, function () { var el = q(st.to); if (el) warp(st.id || 'u1', el); });
        later(40, function () {});
        return;
      }
      if (st.tip) {
        later(0, function () { var el = q(st.to || '#go'); if (el) tip(el, st.text || st.tip); if (st.say) say(st.say); });
        later(sayMs(st.text || st.tip || st.say), function () {});
        return;
      }
      if (st.drop) {
        later(0, function () { var el = q(st.to || '#f1'); if (el) drop(el, st.text || st.drop); if (st.say) say(st.say); });
        later(1000, function () {});
        return;
      }
      if (st.ring) {
        later(0, function () { var el = q(st.to); if (el) ring(el, true); });
        later(400, function () {});
        return;
      }
      if (st.veil) {
        later(0, function () { veil(st.kind, st.text); });
        later(900, function () {});
      }
    });
    return id;
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
  w.addEventListener('load', fit);
  w.addEventListener('resize', fit);

  w.FM = {
    UNIT_W: UNIT_W, UNIT_H: UNIT_H,
    after: after, stop: stop, fit: fit, boot: boot,
    cursors: cursors, move: move, warp: warp, pack: pack, click: click,
    tip: tip, note: note, drop: drop, veil: veil, say: say, ring: ring,
    skin: skin, mode: mode, resolveMode: resolveMode, beat: beat
  };
})(window);
