(function () {
  if (!window.FM) return;
  var origBeat = FM.beat;
  function pack(n, el) {
    if (!el) return;
    for (var i = 1; i <= n; i++) {
      FM.warp('u' + i, el, 4 + (i - 1) * 20, 2 + (i - 1) * 16);
    }
  }
  FM.beat = function (cfg) {
    cfg = cfg || {};
    var n = cfg.cursors || 0;
    var steps = (cfg.steps || []).map(function (st) {
      if (st.screen) {
        var next = {};
        for (var k in st) next[k] = st[k];
        return next;
      }
      return st;
    });
    var id = origBeat(cfg);
    if (!n) return id;
    var clock = 0;
    cfg.steps.forEach(function (st) {
      if (!st.screen) return;
      clock += 220;
      FM.after(clock, function () {
        var el = document.querySelector(st.to || '#go') || document.querySelector('#f1');
        pack(n, el);
      });
    });
    return id;
  };
})();
