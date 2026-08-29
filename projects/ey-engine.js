/* Unit = 13" notebook content: 960×600 (16/10).
   Scale uniformly into .stage. Never stretch.
*/
(function (w) {
  var T = [];
  var UNIT_W = 960;
  var UNIT_H = 600;
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

  function fit() {
    var unit = document.querySelector('.ey-unit');
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
      d.style.left = 28 + i * 20 + 'px';
      d.style.top = 40 + i * 18 + 'px';
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
    var x = (r.left - b.left) / s + (ox || 8);
    var y = (r.top - b.top) / s + (oy || 6);
    n.style.left = Math.max(8, Math.min(UNIT_W - 40, x)) + 'px';
    n.style.top = Math.max(8, Math.min(UNIT_H - 40, y)) + 'px';
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
  w.addEventListener('load', fit);
  w.addEventListener('resize', fit);

  w.EY = { UNIT_W: UNIT_W, UNIT_H: UNIT_H, after: after, stop: stop, fit: fit, boot: boot, cursors: cursors, move: move };
})(window);
