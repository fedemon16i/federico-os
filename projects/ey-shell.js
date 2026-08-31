/* One product shell. Analyze and Requester only choose the path. */
(function (w) {
  function nav() {
    return '<div class="nav"><span class="ey-logo"></span><span class="on">Marketplace</span><span>Tools</span><span>Learn</span><div class="right" style="margin-left:auto;display:flex;gap:8px;align-items:center"><div class="ey-search">Search products</div><span class="ey-ai">AI</span><span class="av">FM</span></div></div>';
  }
  function side(on) {
    var rows = [['All','284'],['Services','118'],['Licenses','21'],['Kits','17'],['Packages','11'],['APIs','41']];
    return '<div class="side"><div class="sh" style="font-weight:700;margin-bottom:8px;color:var(--ey-text)">Catalog</div>'+rows.map(function(r,i){
      return '<a class="'+( (on||'All')===r[0]?'on':'')+'" href="#" style="display:flex;justify-content:space-between;padding:6px 8px;border-radius:5px;color:inherit;text-decoration:none">'+r[0]+' <b>'+r[1]+'</b></a>';
    }).join('')+'</div>';
  }
  function home() {
    return '<div class="app">'+nav()+'<div class="hero"><div class="k">The platform to unlock technology at speed and scale</div><h2>Unlocking technology at speed and scale</h2><p>Reusable components and a request path that should be obvious.</p><div class="row-btns"><button class="ey-btn" id="go" type="button">Explore Catalog</button><button class="ey-btn ghost" type="button">Contact us</button></div></div><div class="band"><b>Developer workflow</b><p>Create, build and deploy into the shared path.</p></div></div>';
  }
  function catalog() {
    return '<div class="app">'+nav()+'<div class="lay-cat">'+side('All')+'<div class="main"><div class="banner"><b>Make a request from the catalog</b><span>Services, licenses, kits, packages, APIs.</span></div><div class="ey-tiles"><div class="ey-tile t1" id="go"><b>Services</b><span>Compute and shared tools</span></div><div class="ey-tile t2"><b>Licenses</b><span>Named rights</span></div><div class="ey-tile t3"><b>Starter kits</b><span>A first run</span></div><div class="ey-tile t4"><b>Packages</b><span>Reusable files</span></div><div class="ey-tile t5"><b>APIs</b><span>Callable blocks</span></div><div class="ey-tile t6"><b>Explore</b><span>The rest of the catalog</span></div></div></div></div></div>';
  }
  function services(opts) {
    opts = opts || {};
    return '<div class="app">'+nav()+'<div class="lay-cat">'+side('Services')+'<div class="main" id="main"><div class="banner"><b>Services</b><span>Shared infrastructure a team can request.</span></div><div class="ey-search" style="margin-bottom:12px">Filter offerings</div>'+(w.EYMarket ? EYMarket.grid(opts) : '')+'</div></div></div>';
  }
  function form(opts) {
    opts = opts || {};
    var help = opts.helper ? '<div class="panel" style="border:1px solid var(--ey-line);background:var(--ey-card);border-radius:8px;padding:12px;margin-top:12px"><h4 style="margin:0 0 6px">Helper</h4>Billing is the cost center. Always here.</div>' : '';
    return '<div class="app">'+nav()+'<div class="lay-form"><div class="lay-pad"><div class="ey-steps"><i class="on"></i>Custom <i></i>Billing <i></i>Confirm</div><h3>Workbench</h3><div class="fld" style="margin-bottom:12px"><label style="display:flex;gap:6px;align-items:center;font-size:11px;color:var(--ey-muted);margin-bottom:4px">Instance name <i class="qtip" id="t1">?</i></label><div class="box" id="f1">Enter a name…</div><div class="hint" id="h1" style="display:none">Need a unique name. 2–40 characters.</div></div><div class="fld" style="margin-bottom:12px"><label style="display:flex;gap:6px;align-items:center;font-size:11px;color:var(--ey-muted);margin-bottom:4px">Location <i class="qtip" id="t2">?</i></label><div class="box" id="f2">West 2</div><div class="hint" id="h2" style="display:none">Region cannot change later.</div></div><div class="fld" style="margin-bottom:12px"><label style="display:flex;gap:6px;align-items:center;font-size:11px;color:var(--ey-muted);margin-bottom:4px">Required service <i class="qtip" id="t3">?</i></label><div class="ey-radio" id="f3"><i></i> Cluster</div><div class="ey-radio"><i></i> Workbench</div><div class="hint" id="h3" style="display:none">At least one service. No default is selected.</div></div><div class="fld"><label style="font-size:11px;color:var(--ey-muted)">Add admins</label><div class="ey-radio on"><i></i> No</div><div class="ey-radio"><i></i> Yes</div></div></div><div class="wb-r" style="padding:16px;background:var(--ey-side);border-left:1px solid var(--ey-line)"><div class="ey-disc">Costs are estimates. A formal request covers platform fees.</div><div class="ey-order"><h4>Your order</h4><div>Workbench · pending</div><div class="tot">Total <em>$0 / mo</em></div></div>'+help+'</div></div></div>';
  }
  w.EYShell = { nav: nav, side: side, home: home, catalog: catalog, services: services, form: form };
})(window);
