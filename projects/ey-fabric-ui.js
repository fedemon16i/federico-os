(function () {
  var S = window.EYScreens; if (!S) return;
  function nav() {
    return '<div class="fm-nav"><span class="brand">EY Fabric</span><span>Overview</span><span class="on">Marketplace</span><span>Tools</span><div class="fm-search">Search products, documentation</div><span class="fm-ai">AI</span><span class="fm-av">FM</span></div>';
  }
  function rail(on) {
    var rows = [['All Items','317'],['Services','157'],['Licenses','21'],['Starter Kits','17'],['Code Packages','11'],['APIs','41']];
    return '<div class="fm-rail"><div class="fm-crumb">Fabric Catalog</div>'+rows.map(function(r){
      var key = r[0].indexOf('Service')===0?'Services':(r[0].indexOf('All')===0?'All':r[0]);
      return '<a class="'+(on===key||on===r[0]?'on':'')+'" href="#">'+r[0]+'<b>'+r[1]+'</b></a>';
    }).join('')+'</div>';
  }
  function offer(id, title, extra, desc) {
    return '<div class="fm-offer" id="'+id+'"><div class="crumb">Services · Offerings</div><div class="t">'+title+'</div><div class="desc">'+desc+'</div><div class="acts"><button class="fm-btn secondary" type="button"'+(extra?' id="'+extra+'"':'')+'>View More</button><button class="fm-btn" type="button"'+(extra?'':' id="go"')+'>Get Started</button></div></div>';
  }
  function railOrder(cta) {
    return '<div class="fm-steps"><span class="on"><b></b>Customization</span><span><b></b>Billing</span><span><b></b>Confirmation</span></div>'
      +'<div class="fm-disc">Disclaimer: displayed costs are estimates and exclude platform fees.</div>'
      +'<div class="fm-order"><b>Your order</b><div class="fm-crumb">Workbench · 1 instance</div><div class="tot"><span>Total</span><span>$0 / Month</span></div><div style="display:flex;gap:6px;margin-top:8px">'+cta+'</div></div>';
  }
  function form(open, help) {
    var loc = open
      ? '<div class="fm-select" id="f2">US West 2</div><div class="fm-card" id="locmenu" style="margin-top:4px"><div class="fm-row" id="opt">US West 2</div><div class="fm-row">East 1</div></div>'
      : '<div class="fm-select" id="f2">US West 2</div>';
    var helper = help ? '<div class="fm-notice" style="margin-top:8px"><b>Help / requirements</b><div class="fm-crumb">Workspace, team, billing stay visible.</div></div>' : '';
    return nav()+'<div class="fm-split"><div class="fm-main">'
      +'<div class="fm-crumb">Catalog › Workbench</div>'
      +'<div class="t" style="font-size:18px;font-weight:700;margin:4px 0 8px">Workbench</div>'
      +'<b>1 Configure your instance</b>'
      +'<label class="fm-crumb">Friendly instance name (required) <i class="fm-chip" id="t1">?</i></label><div class="fm-field" id="f1">Enter a name</div>'
      +'<label class="fm-crumb">Location (required) <i class="fm-chip" id="t2">?</i></label>'+loc
      +'<label class="fm-crumb">Point of contact (required) <i class="fm-chip" id="t4">?</i></label><div class="fm-field" id="f4">Search people</div>'
      +'<div class="fm-notice" id="f3">Please choose at least one service required for this instance.</div>'
      +'<div class="fm-crumb">Add admin users</div><div class="fm-radio"><i></i> Yes</div><div class="fm-radio on"><i></i> No</div>'
      +'</div><div class="fm-main">'+railOrder('<button class="fm-btn ghost" type="button">Cancel</button><button class="fm-btn" id="go" type="button">Continue to Billing</button>')+helper+'</div></div>';
  }
  S['catalog.home'] = function () {
    return nav()+'<div class="fm-main"><div class="fm-hero"><div class="k">The platform to unlock technology at speed and scale</div><b>EY Fabric: Unlocking technology at speed and scale</b><span>Reusable components and a request path that should be obvious.</span><div style="margin-top:10px;display:flex;gap:8px"><button class="fm-btn lg" id="go" type="button">Explore Catalog</button><button class="fm-btn ghost lg" type="button">Contact us</button></div></div><div class="fm-banner" style="margin-top:10px;display:flex;justify-content:space-between;align-items:center"><div><b>Experience the new Developer Workflow</b><div class="fm-crumb">Create, build and deploy.</div></div><button class="fm-btn" type="button">Get Started</button></div></div>';
  };
  S['catalog.grid'] = function () {
    return nav()+'<div class="fm-body">'+rail('All')+'<div class="fm-main"><div class="fm-hero" style="min-height:72px"><b>Make your vision a reality with Fabric solutions.</b><span>Services, kits, APIs.</span></div><div style="display:flex;gap:6px;margin:8px 0"><div class="fm-search">Filter by Services, Kits, APIs</div><span class="fm-chip on">Recently Updated</span></div><div class="fm-tiles six"><div class="fm-photo" id="go"><b>Services</b><span>Compute resources</span></div><div class="fm-photo"><b>Licenses</b><span>Alongside offerings</span></div><div class="fm-photo"><b>Starter Kits</b><span>Onboard and start</span></div><div class="fm-photo"><b>Code Packages</b><span>Reusable across projects</span></div><div class="fm-photo"><b>APIs</b><span>Building blocks</span></div><div class="fm-photo"><b>Explore Fabric</b><span>Cloud, data, intel</span></div></div></div></div>';
  };
  S['catalog.services'] = function () {
    return nav()+'<div class="fm-body">'+rail('Services')+'<div class="fm-main"><div class="fm-photo" style="height:56px;min-height:56px;margin-bottom:8px"><b>Services</b><span>Compute, networking, tools</span></div><div style="display:flex;gap:6px"><div class="fm-search">Filter by Service Offerings</div><span class="fm-chip on">Recently Updated</span></div><div class="fm-filters"><span class="fm-chip on">All Services</span><span class="fm-chip">Offerings</span><span class="fm-chip">Add-ons</span></div><div class="fm-offers">'
      +offer('card1','Workbench workspace','info','Shared workbench a team can request.')
      +offer('card2','Cluster compute',null,'Reserved compute for a project.')
      +offer('card3','Sandbox environment',null,'A short-lived space to try the path.')
      +offer('card4','Platform kit',null,'Starter modules a team can attach.')
      +'</div></div></div>';
  };
  S['catalog.details'] = function () {
    return S['catalog.services']()+'<div class="fm-modal"><div class="fm-sheet"><div class="fm-crumb">Description · Resources · Requirements</div><b>Workbench workspace</b><p class="fm-crumb">Need a workspace, a team, and a billing account before submit.</p><div class="fm-notice">Required: instance name, location, point of contact, one service.</div><div style="display:flex;gap:8px;margin-top:10px"><button class="fm-btn ghost" type="button">Close</button><button class="fm-btn" id="go" type="button">Get Started</button></div></div></div>';
  };
  S['form.custom'] = function () { return form(false,false); };
  S['form.loc'] = function () { return form(true,false); };
  S['form.help'] = function () { return form(false,true); };
  S['form.walk'] = function () { return form(false,true)+'<div class="fm-modal"><div class="fm-sheet"><b>Workspace</b><p class="fm-crumb">Do you already have a workspace?</p><button class="fm-btn" id="go" type="button">Next</button></div></div>'; };
  S['form.walk2'] = function () { return form(false,true)+'<div class="fm-modal"><div class="fm-sheet"><b>Team</b><p class="fm-crumb">Who owns it after it is live?</p><button class="fm-btn" id="go" type="button">Next</button></div></div>'; };
  S['form.walk3'] = function () { return form(false,true)+'<div class="fm-modal"><div class="fm-sheet"><b>Billing</b><p class="fm-crumb">A cost center is required.</p><button class="fm-btn" id="go" type="button">Start the form</button></div></div>'; };
  S['form.billing'] = function () {
    return nav()+'<div class="fm-split"><div class="fm-main"><div class="fm-crumb">Catalog › Workbench</div><div class="fm-done"><div class="ok">Configure your instance</div><div class="fm-crumb">xdatest · westus2</div></div><b>2 Billing</b><div class="fm-field" id="f1">Search for a workspace</div><button class="fm-btn ghost" type="button">Create New Workspace</button><div class="fm-row" style="margin-top:8px">testwork0904 <span class="fm-tag ok">Ready</span></div></div><div class="fm-main">'+railOrder('<button class="fm-btn" id="go" type="button">Continue</button>')+'</div></div>';
  };
  S['form.confirm'] = function () {
    return nav()+'<div class="fm-split"><div class="fm-main"><div class="fm-done"><div class="ok">Configure your instance</div><div class="fm-crumb">xdatest · westus2</div></div><div class="fm-done"><div class="ok">Billing</div><div class="fm-crumb">testwork0904 · Completed</div></div></div><div class="fm-main">'+railOrder('<button class="fm-btn" id="go" type="button">Submit Order</button>')+'</div></div>';
  };
})();
