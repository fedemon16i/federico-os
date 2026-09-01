(function () {
  var S = window.EYScreens; if (!S) return;
  function nav() {
    return '<div class="fm-nav"><span class="brand">EY Fabric</span><span>Overview</span><span>Marketplace</span><span class="on">Tools</span><div class="fm-search">Search</div><span class="fm-av">FM</span></div>';
  }
  function side(on) {
    return '<div class="fm-rail"><div class="fm-crumb">Hub</div><a class="'+(on==='o'?'on':'')+'" href="#">Overview</a><a class="'+(on==='a'?'on':'')+'" href="#" id="go">Alarms <span class="fm-tag bad">3</span></a><a href="#">Paths</a><a href="#">Guides</a></div>';
  }
  S['hub.overview'] = function () {
    return nav()+'<div class="fm-body">'+side('o')+'<div class="fm-main"><div class="t" style="font-weight:700;margin-bottom:10px">Signals</div><div class="fm-kpis"><div class="fm-kpi"><i>Request drop</i><b>hot</b></div><div class="fm-kpi"><i>Onboard stall</i><b>seen</b></div><div class="fm-kpi"><i>Help unused</i><b>rare</b></div><div class="fm-kpi"><i>Replay</i><b>ready</b></div></div><div class="fm-row" style="margin-top:10px">Workbench required field <span class="fm-tag bad">hot</span></div><div class="fm-row">Catalog → form path <span class="fm-tag warn">watch</span></div></div></div>';
  };
  S['hub.alarms'] = function () {
    return nav()+'<div class="fm-body">'+side('a')+'<div class="fm-main"><div class="t" style="font-weight:700;margin-bottom:10px">Alarms</div><div class="fm-filters"><span class="fm-chip">All</span><span class="fm-chip">Catalog</span><span class="fm-chip on" id="go">Workbench</span><span class="fm-chip">Reports</span></div><div class="fm-row">Workbench required field <span class="fm-tag bad">hot</span></div><div class="fm-row">Help unused on request <span class="fm-tag warn">watch</span></div></div></div>';
  };
  S['hub.area'] = function () {
    return nav()+'<div class="fm-body">'+side('a')+'<div class="fm-main"><div class="t" style="font-weight:700;margin-bottom:8px">Workbench</div><div class="fm-filters"><span class="fm-chip">All</span><span class="fm-chip on">Workbench</span></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:10px 0"><div class="fm-card"><div class="fm-diag-k">Request funnel</div><div class="fm-funnel"><div class="bar" style="width:100%"></div><div class="bar" style="width:70%"></div><div class="bar dead" style="width:22%"></div></div></div><div class="fm-card"><div class="fm-diag-k">Features</div><div class="fm-crumb">Required service field</div><div class="fm-crumb">Order rail</div><div class="fm-crumb">Onboarding guide</div></div></div></div></div>';
  };
})();
