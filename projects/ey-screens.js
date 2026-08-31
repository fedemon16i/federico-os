(function (w) {
  function nav() {
    return '<div class="fm-nav"><span class="on">Marketplace</span><span>Overview</span><span>Tools</span><div class="fm-search">Search products</div><span class="fm-ai">AI</span><span class="fm-av">FM</span></div>';
  }
  function rail(on) {
    var rows = [['All','284'],['Services','118'],['Licenses','21'],['Kits','17'],['Packages','11'],['APIs','41']];
    return '<div class="fm-rail">'+rows.map(function(r){
      return '<a class="'+(on===r[0]?'on':'')+'" href="#">'+r[0]+'<b>'+r[1]+'</b></a>';
    }).join('')+'</div>';
  }
  function offer(id, title, extra) {
    return '<div class="fm-offer" id="'+id+'"><div class="crumb">Services · Offerings</div><div class="t">'+title+'</div><div class="desc">Shared compute a team can request.</div><div class="acts"><button class="fm-btn secondary" type="button"'+(extra?' id="'+extra+'"':'')+'>See details</button><button class="fm-btn" type="button" id="go">Get started</button></div></div>';
  }
  function order(cta) {
    return '<div class="fm-notice">Estimates exclude platform fees.</div><div class="fm-order"><b>Your order</b><div class="crumb">Workbench · 1 instance</div><div class="tot"><span>Total</span><span>$0 / mo</span></div><div style="display:flex;gap:6px;margin-top:8px">'+cta+'</div></div>';
  }
  w.EYScreens = {
    'catalog.home': function () {
      return '<div class="fm-app">'+nav()+'<div class="fm-main"><div class="fm-hero"><b>Unlocking technology at speed and scale</b><span>Reusable components and a request path that should be obvious.</span><div style="margin-top:10px;display:flex;gap:8px"><button class="fm-btn lg" id="go" type="button">Explore Catalog</button><button class="fm-btn ghost lg" type="button">Contact us</button></div></div><div class="fm-banner" style="margin-top:10px;display:flex;justify-content:space-between;align-items:center"><div><b>Developer workflow</b><span class="crumb">Create, build and deploy.</span></div><button class="fm-btn" type="button">Get Started</button></div></div></div>';
    },
    'catalog.grid': function () {
      return '<div class="fm-app">'+nav()+'<div class="fm-body">'+rail('All')+'<div class="fm-main"><div class="fm-banner"><b>Make a request from the catalog</b></div><div class="fm-tiles" style="margin-top:10px"><div class="fm-photo" id="go"><b>Services</b><span>Compute</span></div><div class="fm-photo"><b>Licenses</b></div><div class="fm-photo"><b>Kits</b></div><div class="fm-photo"><b>Packages</b></div><div class="fm-photo"><b>APIs</b></div><div class="fm-photo"><b>Explore</b></div></div></div></div></div>';
    },
    'catalog.services': function () {
      return '<div class="fm-app">'+nav()+'<div class="fm-body">'+rail('Services')+'<div class="fm-main"><div class="fm-banner"><b>Services</b></div><div style="display:flex;gap:6px;margin:8px 0"><div class="fm-search">Filter offerings</div><span class="fm-chip on">Recently updated</span></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">'+offer('card1','Workbench','info')+offer('card2','Cluster')+'</div></div></div></div>';
    },
    'form.custom': function () {
      return '<div class="fm-app">'+nav()+'<div class="fm-split"><div class="fm-main"><div class="fm-stepper"><b>1</b> Customization <b>2</b> Billing <b>3</b> Confirm</div><div class="fm-crumb">Offering customization</div><div class="t">Workbench</div><label class="crumb">Friendly instance name</label><div class="fm-field" id="f1">Enter a name…</div><label class="crumb">Location</label><div class="fm-select" id="f2">West 2</div><label class="crumb">Point of contact</label><div class="fm-field" id="f4">Search people…</div><div class="fm-notice" style="margin:8px 0">Choose at least one required service.</div><div class="fm-radio" id="f3"><i></i> Cluster</div><div class="fm-radio on"><i></i> Workbench</div></div><div class="fm-main">'+order('<button class="fm-btn ghost" type="button">Cancel</button><button class="fm-btn" id="go" type="button">Continue</button>')+'</div></div></div>';
    },
    'form.billing': function () {
      return '<div class="fm-app">'+nav()+'<div class="fm-split"><div class="fm-main"><div class="fm-stepper"><b>1</b> Customization <b>2</b> Billing <b>3</b> Confirm</div><div class="fm-field" id="f1">Search workspace…</div><button class="fm-btn ghost" type="button">Create new workspace</button><div class="fm-row" style="margin-top:10px">north-studio <span class="fm-tag ok">Ready</span></div></div><div class="fm-main">'+order('<button class="fm-btn" id="go" type="button">Continue</button>')+'</div></div></div>';
    },
    'form.confirm': function () {
      return '<div class="fm-app">'+nav()+'<div class="fm-split"><div class="fm-main"><div class="fm-stepper"><b>1</b> Customization <b>2</b> Billing <b>3</b> Confirm</div><div class="fm-row">Instance <b>north-studio</b></div><div class="fm-row">Workspace <b>testwork</b> <span class="fm-tag ok">Ready</span></div></div><div class="fm-main">'+order('<button class="fm-btn" id="go" type="button">Submit order</button>')+'</div></div></div>';
    },
    'hub.overview': function () {
      return '<div class="fm-app">'+nav()+'<div class="fm-body"><div class="fm-rail"><a class="on" href="#">Overview</a><a href="#" id="go">Alarms</a></div><div class="fm-main"><div class="fm-kpis"><div class="fm-kpi"><i>Sessions</i><b>12.4k</b></div><div class="fm-kpi"><i>Drop</i><b class="fm-tag bad">18%</b></div><div class="fm-kpi"><i>NPS</i><b>32</b></div><div class="fm-kpi"><i>Replay</i><b>41</b></div></div><div class="fm-row" style="margin-top:10px">Workbench form <span class="fm-tag bad">hot</span></div></div></div></div>';
    },
    'hub.alarms': function () {
      return '<div class="fm-app">'+nav()+'<div class="fm-body"><div class="fm-rail"><a href="#">Overview</a><a class="on" href="#">Alarms</a></div><div class="fm-main"><div class="fm-chip on">Product area</div><div class="fm-row" id="go">Customization field <span class="fm-tag bad">drop</span></div><div class="fm-row">Billing workspace <span class="fm-tag warn">slow</span></div></div></div></div>';
    },
    'pub.queue': function () {
      return '<div class="fm-app">'+nav()+'<div class="fm-body"><div class="fm-rail"><a class="on" href="#">Queue</a><a href="#">Teams</a></div><div class="fm-main"><div class="fm-kpis"><div class="fm-kpi"><i>Pending</i><b>7</b></div><div class="fm-kpi"><i>Fixes</i><b>3</b></div><div class="fm-kpi"><i>AI pass</i><b>2</b></div><div class="fm-kpi"><i>Live</i><b>41</b></div></div><button class="fm-btn" id="go" type="button" style="margin-top:10px">Publish new item</button></div></div></div>';
    },
    'pub.type': function () {
      return '<div class="fm-app">'+nav()+'<div class="fm-main"><div class="fm-banner"><b>What are you publishing?</b></div><div class="fm-tiles" style="margin-top:10px"><div class="fm-tile" id="go"><b>Service</b><span>Compute path</span></div><div class="fm-tile"><b>License</b></div><div class="fm-tile"><b>Kit</b></div><div class="fm-tile"><b>Package</b></div><div class="fm-tile"><b>API</b></div><div class="fm-tile"><b>Artifact</b></div></div></div></div>';
    },
    'pub.fields': function () {
      return '<div class="fm-app">'+nav()+'<div class="fm-main"><div class="fm-drop" id="f1">Load product file</div><div class="fm-field" style="margin-top:8px">Or add a field by hand</div><button class="fm-btn" id="go" type="button" style="margin-top:10px">Continue</button></div></div>';
    },
    'pub.live': function () {
      return '<div class="fm-app">'+nav()+'<div class="fm-main"><div class="fm-row">Workbench <span class="fm-tag ok">Published</span></div><div class="fm-empty">Queue is clear for this item.</div></div></div>';
    },
    'board.measure': function () {
      return '<div class="fm-app"><div class="fm-main"><div class="fm-banner"><b>Event map</b></div><div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap"><span class="fm-node">Home</span><span class="fm-node">Catalog</span><span class="fm-node">Services</span><span class="fm-node">Form</span><span class="fm-node">Submit</span></div></div></div>';
    },
    'board.funnel': function () {
      return '<div class="fm-app"><div class="fm-main"><div class="fm-funnel"><div class="bar">Home · 100</div><div class="bar">Catalog · 74</div><div class="bar">Form · 41</div><div class="bar dead">Required field · 11</div></div></div></div>';
    },
    'board.research': function () {
      return '<div class="fm-app"><div class="fm-main" style="display:grid;grid-template-columns:1fr 1fr;gap:8px"><div class="fm-card"><b>CSAT</b><div class="crumb">3.1 · form step 1</div></div><div class="fm-card"><b>NPS</b><div class="crumb">32 · publishers colder</div></div><div class="fm-card"><b>CES</b><div class="crumb">High effort on contact</div></div><div class="fm-card"><b>Replay</b><div class="crumb">Same pause on the ?</div></div></div></div>';
    },
    'board.understand': function () {
      return '<div class="fm-app"><div class="fm-main"><div class="fm-tiles"><div class="fm-tile"><b>Design</b><span>Figma + agents</span></div><div class="fm-tile"><b>Content</b><span>Catalog copy</span></div><div class="fm-tile"><b>Analytics</b><span>Pendo</span></div></div></div></div>';
    },
    'board.design': function () {
      return '<div class="fm-app"><div class="fm-split"><div class="fm-main"><div class="fm-banner"><b>Figma</b></div><div class="fm-card" style="margin-top:8px;min-height:120px">Frames on the canvas</div></div><div class="fm-main"><div class="fm-banner"><b>Agent</b></div><div class="fm-card" style="margin-top:8px;min-height:120px">Repo + prompt + preview</div></div></div></div>';
    }
  };
})(window);
