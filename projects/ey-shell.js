/* One product shell. Beats only choose the path. */
(function (w) {
  function nav() {
    return '<div class="nav"><span class="ey-logo"></span><span>Overview</span><span class="on">Marketplace</span><span>Tools</span><span>Learn</span><div class="right" style="margin-left:auto;display:flex;gap:8px;align-items:center"><div class="ey-search">Search products</div><span class="ey-ai">AI</span><span class="av">FM</span></div></div>';
  }
  function side(on) {
    var rows = [['All','284'],['Services','118'],['Licenses','21'],['Kits','17'],['Packages','11'],['APIs','41']];
    return '<div class="side"><div class="sh" style="font-weight:700;margin-bottom:8px;color:var(--ey-text)">Catalog</div>'+rows.map(function(r){
      return '<a class="'+( (on||'All')===r[0]?'on':'')+'" href="#" style="display:flex;justify-content:space-between;padding:6px 8px;border-radius:5px;color:inherit;text-decoration:none">'+r[0]+' <b>'+r[1]+'</b></a>';
    }).join('')+'</div>';
  }
  function order(btn) {
    return '<div class="ey-disc">Displayed costs are estimates and exclude platform fees.</div><div class="ey-order"><h4>Your order</h4><div style="font-size:12px;color:var(--ey-muted);margin-bottom:8px">Workbench · 1 instance</div><div class="tot">Total <em>$0 / mo</em></div><div style="display:flex;gap:8px;margin-top:10px">'+btn+'</div></div>';
  }
  function home() {
    return '<div class="app">'+nav()+'<div class="hero"><div class="k">The platform to unlock technology at speed and scale</div><h2>Unlocking technology at speed and scale</h2><p>Reusable components and a request path that should be obvious.</p><div class="row-btns"><button class="ey-btn lg" id="go" type="button">Explore Catalog</button><button class="ey-btn ghost lg" type="button">Contact us</button></div></div><div class="band"><div><b>Developer workflow</b><p>Create, build and deploy into the shared path.</p></div><button class="ey-btn" type="button">Get Started</button></div></div>';
  }
  function catalog() {
    var extras = (w.EYMarket ? EYMarket.LIST.slice(0,4).map(function(c){ return EYMarket.card(c); }).join('') : '');
    return '<div class="app">'+nav()+'<div class="lay-cat">'+side('All')+'<div class="main"><div class="banner"><b>Make a request from the catalog</b><span>Services, licenses, kits, packages, APIs.</span></div><div class="ey-tiles"><div class="ey-tile t1" id="go"><b>Services</b><span>Compute and shared tools</span></div><div class="ey-tile t2"><b>Licenses</b><span>Named rights</span></div><div class="ey-tile t3"><b>Starter kits</b><span>A first run</span></div><div class="ey-tile t4"><b>Packages</b><span>Reusable files</span></div><div class="ey-tile t5"><b>APIs</b><span>Callable blocks</span></div><div class="ey-tile t6"><b>Explore</b><span>The rest of the catalog</span></div></div><div style="margin-top:12px;font-size:13px;font-weight:700">All items</div><div class="ey-offers" style="grid-template-columns:1fr 1fr 1fr 1fr;margin-top:8px">'+extras+'</div></div></div></div>';
  }
  function services(opts) {
    opts = opts || {};
    return '<div class="app">'+nav()+'<div class="lay-cat">'+side('Services')+'<div class="main" id="main"><div class="banner"><b>Services</b><span>Shared infrastructure a team can request.</span></div><div style="display:flex;gap:8px;margin-bottom:12px"><div class="ey-search" style="flex:1">Filter offerings</div><span class="ey-chip">Recently updated</span></div>'+(w.EYMarket ? EYMarket.grid(opts) : '')+'</div></div></div>';
  }
  function field(id, label, control) {
    return '<div class="fld" style="margin-bottom:10px"><label style="display:flex;gap:6px;align-items:center;font-size:11px;color:var(--ey-muted);margin-bottom:4px">'+label+' <i class="qtip" id="t'+id+'">?</i></label>'+control+'</div>';
  }
  function form(opts) {
    opts = opts || {};
    var help = opts.helper ? '<div class="panel" style="border:1px solid var(--ey-line);background:var(--ey-card);border-radius:8px;padding:12px;margin-top:12px;font-size:12px;color:var(--ey-muted)"><h4 style="margin:0 0 6px;color:var(--ey-text)">Help / requirements</h4>Billing is the cost center. Onboarding stays in the corner.</div>' : '';
    return '<div class="app">'+nav()+'<div class="lay-form"><div class="lay-pad" style="overflow:hidden">'
      +'<div class="ey-steps"><i class="on"></i>Customization <i></i>Billing <i></i>Confirmation</div>'
      +'<div style="font-size:11px;color:var(--ey-muted)">Offering customization</div><h3>Workbench</h3>'
      +'<div style="font-size:13px;font-weight:700;margin:0 0 8px">1 · Configure your instance</div>'
      +field('1','Friendly instance name (required)','<div class="box ey-input" id="f1">Enter a name…</div>')
      +field('2','Location (required)','<div class="box ey-select" id="f2">West 2</div>')
      +field('4','Point of contact (required)','<div class="box ey-search" id="f4">Search people…</div>')
      +'<div class="ey-disc" style="margin:8px 0">Please choose at least one service required for this instance.</div>'
      +field('3','Required service','<div class="ey-radio" id="f3"><i></i> Cluster</div><div class="ey-radio"><i></i> Workbench</div>')
      +'<div class="fld" style="margin-bottom:8px"><div style="font-size:11px;color:var(--ey-muted);margin-bottom:4px">Add admin users</div><div class="ey-radio on"><i></i> No</div><div class="ey-radio"><i></i> Yes</div></div>'
      +'<div class="ey-check"><i></i> Attach a storage volume</div>'
      +'</div><div class="wb-r" style="padding:16px;background:var(--ey-side);border-left:1px solid var(--ey-line)">'+
      order('<button class="ey-btn ghost" type="button">Cancel</button><button class="ey-btn" type="button">Continue to billing</button>')+help+'</div></div></div>';
  }
  function billing() {
    return '<div class="app">'+nav()+'<div class="lay-form"><div class="lay-pad">'
      +'<div class="ey-steps"><i class="ok"></i>Customization <i class="on"></i>Billing <i></i>Confirmation</div>'
      +'<h3>2 · Billing</h3>'
      +'<div class="box ey-search" id="f1" style="margin-bottom:8px">Search for a workspace…</div>'
      +'<button class="ey-btn ghost" type="button">Create new workspace</button>'
      +'<div style="margin-top:16px;font-size:11px;color:var(--ey-muted)">Latest workspaces</div>'
      +'<div class="row" style="margin-top:8px">north-studio <span class="ey-tag ok">Ready</span></div>'
      +'<div class="row">west-lab <span class="ey-tag warn">Pending</span></div>'
      +'</div><div class="wb-r" style="padding:16px;background:var(--ey-side);border-left:1px solid var(--ey-line)">'+
      order('<button class="ey-btn" type="button">Continue to confirm</button>')+'</div></div></div>';
  }
  function confirm() {
    return '<div class="app">'+nav()+'<div class="lay-form"><div class="lay-pad">'
      +'<div class="ey-steps"><i class="ok"></i>Customization <i class="ok"></i>Billing <i class="on"></i>Confirmation</div>'
      +'<h3>3 · Confirmation</h3>'
      +'<div class="row">Instance <b>north-studio</b></div>'
      +'<div class="row">Workspace <b>testwork</b> <span class="ey-tag ok">Completed</span></div>'
      +'<div class="row">Engagement <b>I-66142</b> <span class="ey-tag ok">Active</span></div>'
      +'</div><div class="wb-r" style="padding:16px;background:var(--ey-side);border-left:1px solid var(--ey-line)">'+
      order('<button class="ey-btn" id="f1" type="button">Submit order</button>')+'</div></div></div>';
  }
  w.EYShell = { nav: nav, side: side, home: home, catalog: catalog, services: services, form: form, billing: billing, confirm: confirm };
})(window);
