(function () {
  var S = window.EYScreens; if (!S) return;
  function nav() {
    return '<div class="fm-nav"><span class="brand">EY Fabric</span><span>Overview</span><span class="on">Marketplace</span><span>Tools</span><div class="fm-search">Search products</div><span class="fm-ai">AI</span><span class="fm-av">FM</span></div>';
  }
  S['pub.queue'] = function () {
    return nav()+'<div class="fm-body"><div class="fm-rail"><a class="on" href="#">Queue</a><a href="#">Teams</a><a href="#">Licenses</a></div><div class="fm-main"><div class="fm-kpis"><div class="fm-kpi"><i>Pending</i><b>7</b></div><div class="fm-kpi"><i>Fixes</i><b>3</b></div><div class="fm-kpi"><i>AI pass</i><b>2</b></div><div class="fm-kpi"><i>Live</i><b>41</b></div></div><div class="fm-notice" style="margin:10px 0"><span class="fm-ico"><i></i></span> Start from work already in flight — not a blank form.</div><table class="fm-table"><thead><tr><th>Item</th><th>State</th></tr></thead><tbody><tr><td>Workbench</td><td><span class="fm-tag warn">Fixes</span></td></tr><tr><td>Cluster</td><td><span class="fm-tag ok">AI pass</span></td></tr></tbody></table><button class="fm-btn" id="go" type="button" style="margin-top:10px">Publish new item</button></div></div>';
  };
  S['pub.type'] = function () {
    return nav()+'<div class="fm-main"><div class="fm-banner"><b>What are you publishing?</b><div class="fm-crumb">Pick the shape first. Service is the request path.</div></div><div class="fm-tiles" style="margin-top:10px"><div class="fm-tile" id="go"><span class="fm-ico"><i></i>Service</span><span>Compute path a team can request</span></div><div class="fm-tile"><span class="fm-ico"><i></i>License</span></div><div class="fm-tile"><span class="fm-ico"><i></i>Kit</span></div><div class="fm-tile"><span class="fm-ico"><i></i>Package</span></div><div class="fm-tile"><span class="fm-ico"><i></i>API</span></div><div class="fm-tile"><span class="fm-ico"><i></i>Artifact</span></div></div></div>';
  };
  S['pub.fields'] = function () {
    return nav()+'<div class="fm-main"><div class="fm-crumb">Armar · fields</div><div class="fm-notice"><span class="fm-ico"><i></i></span> Load a product file or add a field by hand. Both feed the same review.</div><div class="fm-drop" id="f1" style="margin-top:10px">Load product file</div><div class="fm-field" style="margin-top:8px">Or add a field by hand</div><button class="fm-btn" id="go" type="button" style="margin-top:10px">Continue</button></div>';
  };
  S['pub.guide'] = function () {
    return nav()+'<div class="fm-main"><div class="fm-banner"><b>Guidance</b><div class="fm-crumb">Mark fields that need “what is this”. Onboarding is a check.</div></div><div class="fm-check on" id="g1"><i></i> Instance name — what is this</div><div class="fm-check" id="g2"><i></i> Location — region lock</div><div class="fm-check on" id="go"><i></i> Add onboarding</div><div class="fm-notice" style="margin-top:10px">AI reviews writing and required fields before a human signs.</div><button class="fm-btn" type="button" style="margin-top:10px">Send to AI review</button></div>';
  };
  S['pub.live'] = function () {
    return nav()+'<div class="fm-main"><div class="fm-row"><span class="fm-ico"><i></i>Workbench</span> <span class="fm-tag ok">Published</span></div><div class="fm-empty">AI passed. Human signed. Live.</div></div>';
  };
})();
