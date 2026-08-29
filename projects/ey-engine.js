/* EY animation engine
   Unit 1280×720. Uniform scale into .stage. No internal scroll.
*/
(function (w) {
  var T = [];
  var UNIT_W = 1280;
  var UNIT_H = 720;
  var ro = null;

  function after(ms, fn) {
    var id = setTimeout(fn, ms);
    T.push(id);
    return id;
  }
  function stop() {
    T.forEach(clearTimeout);
    T = [];
  }
  w.addEventListener('message', function (e) {
    if (e.data && e.data.type === 'fm-stop') stop();
  });

  function measure() {
    var host = document.querySelector('.stage') || document.body;
    var r = host.getBoundingClientRect();
    var wdt = r.width || host.clientWidth || w.innerWidth || UNIT_W;
    var hgt = r.height || host.clientHeight || w.innerHeight || UNIT_H;
    return { w: wdt, h: hgt };
  }

  function fit() {
    var unit = document.querySelector('.ey-unit');
    if (!unit) return 1;
    var m = measure();
    if (m.w < 8 || m.h < 8) return 1;
    var s = Math.min(m.w / UNIT_W, m.h / UNIT_H);
    if (!isFinite(s) || s <= 0) s = 1;
    unit.style.transform = 'translate(-50%,-50%) scale(' + s + ')';
    return s;
  }

  function boot() {
    fit();
    w.requestAnimationFrame(function () {
      fit();
      w.requestAnimationFrame(fit);
    });
    var host = document.querySelector('.stage');
    if (host && w.ResizeObserver) {
      if (ro) ro.disconnect();
      ro = new ResizeObserver(function () { fit(); });
      ro.observe(host);
    }
  }

  function cursors(host, n) {
    host = host || document.querySelector('.ey-unit');
    n = n || 1;
    var nodes = [];
    for (var i = 0; i < n; i++) {
      var d = document.createElement('div');
      d.className = 'uc u' + (i + 1);
      d.id = 'u' + (i + 1);
      d.innerHTML =
        (n > 1 ? '<em>user ' + (i + 1) + '</em>' : '') +
        '<img src="ey-cursor.svg" width="24" height="24" alt="">';
      d.style.left = 32 + i * 22 + 'px';
      d.style.top = 48 + i * 20 + 'px';
      host.appendChild(d);
      nodes.push(d);
    }
    return nodes;
  }

  function move(id, el, ox, oy) {
    var n = typeof id === 'string' ? document.getElementById(id) : id;
    var unit = document.querySelector('.ey-unit');
    if (!n || !el || !unit) return;
    var r = el.getBoundingClientRect();
    var b = unit.getBoundingClientRect();
    var s = b.width / UNIT_W;
    if (!s) s = 1;
    var x = (r.left - b.left) / s + (ox || 10);
    var y = (r.top - b.top) / s + (oy || 8);
    n.style.left = Math.max(12, Math.min(UNIT_W - 48, x)) + 'px';
    n.style.top = Math.max(12, Math.min(UNIT_H - 48, y)) + 'px';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
  w.addEventListener('load', fit);
  w.addEventListener('resize', fit);

  w.EY = {
    UNIT_W: UNIT_W,
    UNIT_H: UNIT_H,
    after: after,
    stop: stop,
    fit: fit,
    boot: boot,
    cursors: cursors,
    move: move
  };
})(window);
