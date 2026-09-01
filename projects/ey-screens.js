(function (w) {
  function rv(n){ return ' fm-rv" style="animation-delay:'+(n*50)+'ms'; }
  function nav() {
    return '<div class="fm-nav"><span class="on">Marketplace</span><span>Overview</span><span>Tools</span><div class="fm-search">Search products</div><span class="fm-ai">AI</span><span class="fm-av">FM</span></div>';
  }
  function rail(on) {
    var rows = [['All','284'],['Services','118'],['Licenses','21'],['Kits','17'],['Packages','11'],['APIs','41']];
    return '<div class="fm-rail">'+rows.map(function(r){
      return '<a class="'+(on===r[0]?'on':'')+'" href="#">'+r[0]+'<b>'+r[1]+'</b></a>';
    }).join('')+'</div>';
  }
  function offer(id, title, extra, desc) {
    return '<div class="fm-offer" id="'+id+'"><div class="crumb">Services · Offerings</div><div class="t">'+title+'</div><div class="desc">'+(desc||'Shared compute a team can request.')+'</div><div class="acts"><button class="fm-btn secondary" type="button"'+(extra?' id="'+extra+'"':'')+'>See details</button><button class="fm-btn" type="button" id="go">Get started</button></div></div>';
  }
  function order(cta) {
    return '<div class="fm-notice">Estimates exclude platform fees.</div><div class="fm-order"><b>Your order</b><div class="fm-crumb">Workbench · 1 instance</div><div class="tot"><span>Total</span><span>$0 / mo</span></div><div style="display:flex;gap:6px;margin-top:8px">'+cta+'</div></div>';
  }
  function formFields(openLoc, helper) {
    var loc = openLoc
      ? '<div class="fm-select" id="f2">West 2</div><div class="fm-card" id="locmenu" style="margin-top:4px"><div class="fm-row" id="opt">West 2</div><div class="fm-row">East 1</div></div>'
      : '<div class="fm-select" id="f2">West 2</div>';
    var help = helper ? '<div class="fm-notice" style="margin-top:8px"><b>Help / requirements</b><div class="fm-crumb">Onboarding stays available. Billing is the cost center.</div></div>' : '';
    return nav()+'<div class="fm-split"><div class="fm-main"><div class="fm-crumb">Marketplace / Services / Workbench</div><div class="fm-stepper"><b>1</b> Customization <b>2</b> Billing <b>3</b> Confirm</div>'
      +'<label class="fm-crumb">Friendly instance name (required) <i class="fm-chip" id="t1">?</i></label><div class="fm-field" id="f1">Enter a name…</div>'
      +'<label class="fm-crumb">Location (required) <i class="fm-chip" id="t2">?</i></label>'+loc
      +'<label class="fm-crumb">Point of contact (required) <i class="fm-chip" id="t4">?</i></label><div class="fm-field" id="f4">Search people…</div>'
      +'<div class="fm-notice" style="margin:8px 0">Choose at least one required service.</div>'
      +'<div class="fm-radio" id="f3"><i></i> Cluster</div><div class="fm-radio on"><i></i> Workbench</div>'
      +'<div class="fm-check" id="stor"><i></i> Attach a storage volume</div>'
      +'</div><div class="fm-main">'+order('<button class="fm-btn ghost" type="button">Cancel</button><button class="fm-btn" id="go" type="button">Continue</button>')+help+'</div></div>';
  }
  w.EYScreens = {
    'catalog.home': function () {
      return nav()+'<div class="fm-main"><div class="fm-hero"><b>Unlocking technology at speed and scale</b><span>Reusable components and a request path that should be obvious.</span><div style="margin-top:10px;display:flex;gap:8px"><button class="fm-btn lg" id="go" type="button">Explore Catalog</button><button class="fm-btn ghost lg" type="button">Contact us</button></div></div><div class="fm-banner" style="margin-top:10px;display:flex;justify-content:space-between;align-items:center"><div><b>Developer workflow</b><div class="fm-crumb">Create, build and deploy.</div></div><button class="fm-btn" type="button">Get Started</button></div></div>';
    },
    'catalog.grid': function () {
      return nav()+'<div class="fm-body">'+rail('All')+'<div class="fm-main"><div class="fm-banner"><b>Make a request from the catalog</b></div><div class="fm-tiles" style="margin-top:10px"><div class="fm-photo" id="go"><b>Services</b><span>Compute</span></div><div class="fm-photo"><b>Licenses</b></div><div class="fm-photo"><b>Kits</b></div><div class="fm-photo"><b>Packages</b></div><div class="fm-photo"><b>APIs</b></div><div class="fm-photo"><b>Explore</b></div></div></div></div>';
    },
    'catalog.services': function () {
      return nav()+'<div class="fm-body">'+rail('Services')+'<div class="fm-main"><div class="fm-banner"><b>Services</b><div class="fm-crumb">Two actions on every card.</div></div><div style="display:flex;gap:6px;margin:8px 0"><div class="fm-search">Filter offerings</div><span class="fm-chip on">Recently updated</span></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">'+offer('card1','Workbench','info','Shared workbench a team can request.')+offer('card2','Cluster',null,'Reserved compute.')+'</div></div></div>';
    },
    'catalog.details': function () {
      return EYScreens['catalog.services']()+'<div class="fm-modal"><div class="fm-sheet"><div class="fm-crumb">Description · Resources · Requirements</div><b>Workbench</b><p class="fm-crumb">Need a workspace, a team, and a billing account before submit.</p><div class="fm-notice">Required: instance name, location, point of contact, one service.</div><div style="display:flex;gap:8px;margin-top:10px"><button class="fm-btn ghost" type="button">Close</button><button class="fm-btn" id="go" type="button">Get started</button></div></div></div>';
    },
    'form.custom': function () { return formFields(false,false); },
    'form.loc': function () { return formFields(true,false); },
    'form.help': function () { return formFields(false,true); },
    'form.walk': function () {
      return formFields(false,true)+'<div class="fm-modal"><div class="fm-sheet"><b>Workspace</b><p class="fm-crumb">Do you already have a workspace for this team?</p><div class="fm-stepper"><b>1</b> Workspace <b>2</b> Team <b>3</b> Billing</div><button class="fm-btn" id="go" type="button">Next</button></div></div>';
    },
    'form.walk2': function () {
      return formFields(false,true)+'<div class="fm-modal"><div class="fm-sheet"><b>Team</b><p class="fm-crumb">Who owns the request after it is live?</p><div class="fm-stepper"><b>1</b> Workspace <b>2</b> Team <b>3</b> Billing</div><button class="fm-btn" id="go" type="button">Next</button></div></div>';
    },
    'form.walk3': function () {
      return formFields(false,true)+'<div class="fm-modal"><div class="fm-sheet"><b>Billing</b><p class="fm-crumb">A cost center is required before submit.</p><div class="fm-stepper"><b>1</b> Workspace <b>2</b> Team <b>3</b> Billing</div><button class="fm-btn" id="go" type="button">Start the form</button></div></div>';
    },
    'form.billing': function () {
      return nav()+'<div class="fm-split"><div class="fm-main"><div class="fm-crumb">Workbench / Billing</div><div class="fm-stepper"><b>1</b> Customization <b>2</b> Billing <b>3</b> Confirm</div><div class="fm-field" id="f1">Search workspace…</div><button class="fm-btn ghost" type="button">Create new workspace</button><div class="fm-row" style="margin-top:10px">north-studio <span class="fm-tag ok">Ready</span></div></div><div class="fm-main">'+order('<button class="fm-btn" id="go" type="button">Continue</button>')+'</div></div>';
    },
    'form.confirm': function () {
      return nav()+'<div class="fm-split"><div class="fm-main"><div class="fm-crumb">Workbench / Confirm</div><div class="fm-stepper"><b>1</b> Customization <b>2</b> Billing <b>3</b> Confirm</div><div class="fm-row">Instance <b>north-studio</b></div><div class="fm-row">Workspace <b>testwork</b> <span class="fm-tag ok">Ready</span></div></div><div class="fm-main">'+order('<button class="fm-btn" id="go" type="button">Submit order</button>')+'</div></div>';
    },
    'hub.overview': function () {
      return nav()+'<div class="fm-body"><div class="fm-rail"><a class="on" href="#">Overview</a><a href="#" id="go">Alarms</a></div><div class="fm-main"><div class="fm-kpis"><div class="fm-kpi"><i>Sessions</i><b>12.4k</b></div><div class="fm-kpi"><i>Drop</i><span class="fm-tag bad">18%</span></div><div class="fm-kpi"><i>NPS</i><b>32</b></div><div class="fm-kpi"><i>Replay</i><b>41</b></div></div><table class="fm-table" style="margin-top:10px"><thead><tr><th>Request</th><th>Field</th><th>State</th></tr></thead><tbody><tr><td>Workbench</td><td>Instance name</td><td><span class="fm-tag bad">hot</span></td></tr><tr><td>Workbench</td><td>Contact</td><td><span class="fm-tag bad">drop</span></td></tr><tr><td>Cluster</td><td>Billing</td><td><span class="fm-tag warn">slow</span></td></tr></tbody></table></div></div>';
    },
    'hub.alarms': function () {
      return nav()+'<div class="fm-body"><div class="fm-rail"><a href="#">Overview</a><a class="on" href="#">Alarms</a></div><div class="fm-main"><span class="fm-chip on">Product area</span><table class="fm-table" style="margin-top:10px"><thead><tr><th>Area</th><th>Signal</th></tr></thead><tbody><tr id="go"><td>Customization field</td><td><span class="fm-tag bad">drop</span></td></tr><tr><td>Billing workspace</td><td><span class="fm-tag warn">slow</span></td></tr></tbody></table></div></div>';
    },
    'pub.queue': function () {
      return nav()+'<div class="fm-body"><div class="fm-rail"><a class="on" href="#">Queue</a><a href="#">Teams</a></div><div class="fm-main"><div class="fm-kpis"><div class="fm-kpi"><i>Pending</i><b>7</b></div><div class="fm-kpi"><i>Fixes</i><b>3</b></div><div class="fm-kpi"><i>AI pass</i><b>2</b></div><div class="fm-kpi"><i>Live</i><b>41</b></div></div><table class="fm-table" style="margin-top:10px"><thead><tr><th>Item</th><th>State</th></tr></thead><tbody><tr><td>Workbench</td><td><span class="fm-tag warn">Fixes</span></td></tr><tr><td>Cluster</td><td><span class="fm-tag ok">AI pass</span></td></tr></tbody></table><button class="fm-btn" id="go" type="button" style="margin-top:10px">Publish new item</button></div></div>';
    },
    'pub.type': function () {
      return nav()+'<div class="fm-main"><div class="fm-banner"><b>What are you publishing?</b></div><div class="fm-tiles" style="margin-top:10px"><div class="fm-tile" id="go"><b>Service</b><span>Compute path</span></div><div class="fm-tile"><b>License</b></div><div class="fm-tile"><b>Kit</b></div><div class="fm-tile"><b>Package</b></div><div class="fm-tile"><b>API</b></div><div class="fm-tile"><b>Artifact</b></div></div></div>';
    },
    'pub.fields': function () {
      return nav()+'<div class="fm-main"><div class="fm-drop" id="f1">Load product file</div><div class="fm-field" style="margin-top:8px">Or add a field by hand</div><button class="fm-btn" id="go" type="button" style="margin-top:10px">Continue</button></div>';
    },
    'pub.guide': function () {
      return nav()+'<div class="fm-main"><div class="fm-banner"><b>Guidance</b><div class="fm-crumb">Mark fields that need “what is this”.</div></div><div class="fm-check on" id="g1"><i></i> Instance name — what is this</div><div class="fm-check" id="g2"><i></i> Location — region lock</div><div class="fm-check on" id="go"><i></i> Add onboarding</div><button class="fm-btn" type="button" style="margin-top:10px">Send to AI review</button></div>';
    },
    'pub.live': function () {
      return nav()+'<div class="fm-main"><div class="fm-row">Workbench <span class="fm-tag ok">Published</span></div><div class="fm-empty">AI passed. Human signed. Live.</div></div>';
    },
    'board.measure': function () {
      return '<div class="fm-diag-k">Taxonomy</div><div class="fm-diag-h">Every screen becomes a named event.</div><div style="display:flex;gap:8px;flex-wrap:wrap"><span class="fm-node">Home</span><span class="fm-node">Catalog</span><span class="fm-node">Services</span><span class="fm-node">Form</span><span class="fm-node">Submit</span></div>';
    },
    'board.funnel': function () {
      return '<div class="fm-diag-k">Drop-off</div><div class="fm-diag-h">The path holds until the required field.</div><div class="fm-funnel"><div class="fn"><div class="lbl">Home</div><div class="bar" style="--w:100%">Home <span>100</span></div></div><div class="fn"><div class="lbl">Catalog</div><div class="bar" style="--w:88%">Catalog <span>88</span></div></div><div class="fn"><div class="lbl">Services</div><div class="bar" style="--w:72%">Services <span>72</span></div></div><div class="fn"><div class="lbl">Workbench</div><div class="bar" style="--w:54%">Workbench <span>54</span></div></div><div class="fn dead"><div class="lbl">Required</div><div class="bar" style="--w:22%">Required <span>22</span></div></div></div>';
    },
    'board.research': function () {
      return '<div class="fm-diag-k">Several studies · same friction</div><div class="fm-quad"><div class="fm-card"><div class="fm-diag-k">Interviews</div><b>I did not know which service to attach.</b><div class="fm-crumb">The field does not look required.</div></div><div class="fm-card"><div class="fm-diag-k">Scores</div><div class="fm-score"><i><b>CSAT</b>low</i><i><b>NPS</b>cold</i><i><b>CES</b>high effort</i></div></div><div class="fm-replay"><div class="ph"><b>Replay</b><span>u1 u2 u3 · 0:18</span></div><div class="frame"></div></div><div class="fm-card"><div class="fm-diag-k">Task</div><div class="fm-crumb">Stall on the unlabeled field.</div><div class="fm-path"><i class="on">start</i><i class="on">name</i><i class="on">required</i><i>leave</i></div></div></div>';
    },
    'board.understand': function () {
      return '<div class="fm-diag-k">The gap</div><div class="fm-diag-h">Guidance + analytics + design in the same path.</div><div class="fm-tiles"><div class="fm-tile"><b>Design</b><span>Figma + agents</span></div><div class="fm-tile"><b>Content</b><span>Catalog copy</span></div><div class="fm-tile"><b>Analytics</b><span>Pendo</span></div></div>';
    },
    'board.design': function () {
      return '<div class="fm-diag-k">Two surfaces</div><div class="fm-split"><div><div class="fm-banner"><b>Figma</b></div><div class="fm-canvas">Frames on the canvas</div></div><div><div class="fm-banner"><b>Agent</b></div><div class="fm-canvas">Repo + prompt + preview</div><div class="fm-tag ok" style="margin-top:8px">Design ready</div></div></div>';
    }
  };
})(window);
