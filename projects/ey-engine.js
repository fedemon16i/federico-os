/* EY animation engine — scenes are data. Motion lives here.
   Unit 800×450, uniform scale into the host. One cursor asset.
*/
(function (w) {
  var T = [];
  var UNIT_W = 800;
  var UNIT_H = 450;

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

  function fit(unit) {
    unit = unit || document.querySelector('.ey-unit');
    if (!unit) return 1;
    var host = unit.parentElement || document.body;
    var r = host.getBoundingClientRect();
    var s = Math.min(r.width / UNIT_W, r.height / UNIT_H);
    if (!isFinite(s) || s <= 0) s = 1;
    unit.style.transform = 'translate(-50%,-50%) scale(' + s + ')';
    return s;
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
      d.style.left = 24 + i * 18 + 'px';
      d.style.top = 36 + i * 16 + 'px';
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
    x = Math.max(8, Math.min(UNIT_W - 36, x));
    y = Math.max(8, Math.min(UNIT_H - 36, y));
    n.style.left = x + 'px';
    n.style.top = y + 'px';
  }

  w.addEventListener('resize', function () { fit(); });
  w.EY = {
    UNIT_W: UNIT_W,
    UNIT_H: UNIT_H,
    after: after,
    stop: stop,
    fit: fit,
    cursors: cursors,
    move: move
  };
})(window);
