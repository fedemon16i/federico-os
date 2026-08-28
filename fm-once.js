/* FM window/once crop — injected into player iframes from beats.
   Does not rewrite motion. Stops go(N+1) and hides chrome. */
(function(){
  if (window.__FM_ONCE_BOOT) return;
  window.__FM_ONCE_BOOT = true;
  var qs = new URLSearchParams(location.search);
  var once = qs.get('once') === '1';
  var win = qs.get('window') === '1' || qs.get('try') === '1';
  var isTry = qs.get('try') === '1';
  window.__FM_ONCE = once;
  window.__FM_WINDOW = win;
  window.__FM_TRY = isTry;
  window.__FM_BEAT = qs.get('beat');
  var root = document.documentElement;
  if (qs.get('embed') === '1') root.classList.add('embed');
  if (win || isTry) root.classList.add('window');
  if (isTry) root.classList.add('try');

  if (win || once) {
    var st = document.createElement('style');
    st.textContent = [
      'html.window .page>.kicker,html.window .page>h1,html.window .page>.lead,',
      'html.window .page>.close-x,html.window .tl,html.window #tl,',
      'html.window .controls,html.window .controls-col,',
      'html.window .stage-chrome,html.window .stage-top,html.window .stage-arrows,',
      'html.window #cap,html.window .cap,html.window .capbar,',
      'html.window #textPhase,html.window .text-phase,html.window .ts-big,',
      'html.window .pill-row,html.window .note,html.window .eyebrow,html.window .lede,',
      'html.window .page-chrome,html.window .timeline,html.window .dp-hotkey,',
      'html.window .mode-tabs,html.window #modeTabs,html.window #beatLab,',
      'html.window .beat-lab,html.window .stage-title,.slide.text{',
      'display:none!important;visibility:hidden!important}',
      'html.window .stage,html.window .frame,html.window .unit,html.window #unit{',
      'background:transparent!important;background-image:none!important;',
      'border:none!important;box-shadow:none!important}',
      'html.window #win,html.window .win,html.window #ckPhone,html.window #phone,html.window .ck-phone{',
      'border-radius:14px!important;overflow:hidden!important;',
      'box-shadow:0 18px 48px rgba(0,0,0,.28)!important}',
      'html.try #win,html.try .win,html.try #ckPhone,html.try #phone{pointer-events:auto!important}'
    ].join('');
    (document.head || root).appendChild(st);
  }

  if (once || win) {
    var _st = window.setTimeout;
    window.setTimeout = function(fn, ms){
      try{
        var src = Function.prototype.toString.call(fn);
        if (/go\s*\(\s*idx\s*\+|go\s*\(\s*i\s*\+|runBeat\s*\(\s*bi\s*\+|goBeat\s*\(\s*beat\s*\+|_dcGo|playBeat\s*\(\s*idx/.test(src)) {
          return 0;
        }
      }catch(e){}
      return _st.apply(this, arguments);
    };
    var _si = window.setInterval;
    window.setInterval = function(fn, ms){
      try{
        var src = Function.prototype.toString.call(fn);
        if (/goBeat\s*\(\s*beat\s*\+|go\s*\(\s*idx\s*\+|runBeat\s*\(\s*bi\s*\+/.test(src)) {
          return 0;
        }
      }catch(e){}
      return _si.apply(this, arguments);
    };
  }

  function hidePhases(){
    ['textPhase','cap','capTxt'].forEach(function(id){
      var n = document.getElementById(id);
      if (n){ n.classList.add('hide'); n.style.display='none'; }
    });
    document.querySelectorAll('.text-phase,.cap,.stage-chrome,.slide.text').forEach(function(n){
      n.style.display='none';
    });
  }
  if (win || once) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', hidePhases);
    else hidePhases();
  }

  window.addEventListener('message', function(e){
    if (!e.data || e.data.type !== 'playBeat') return;
    var i = e.data.index|0;
    var opts = {once: !!(e.data.once || once)};
    if (typeof window.playBeat === 'function') window.playBeat(i, opts);
    else if (typeof window._dcGo === 'function') window._dcGo(i, opts);
    else if (typeof window._customsGoFlat === 'function') window._customsGoFlat(i);
  });
})();
