(function () {
  if (!window.FM) return;
  var tip = FM.tip;
  FM.tip = function (el, text) {
    var t = tip(el, text);
    if (!t || !el) return t;
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        var unit = document.querySelector('.fm-unit');
        if (!unit || !el.isConnected) return;
        var r = el.getBoundingClientRect();
        var b = unit.getBoundingClientRect();
        var s = b.width / 960 || 1;
        t.style.left = Math.max(8, Math.min(720, (r.left - b.left) / s)) + 'px';
        t.style.top = Math.max(8, (r.top - b.top) / s - 42) + 'px';
      });
    });
    return t;
  };
})();
