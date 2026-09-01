(function (w) {
  /* ── brand SVG logos ── */
  var LOGO = {
    figma: '<svg width="14" height="14" viewBox="0 0 38 57"><path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/><path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"/><path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19z"/><path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/><path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"/></svg>',
    claude: '<svg width="14" height="14" viewBox="0 0 24 24"><rect width="24" height="24" rx="5" fill="#D97757"/><path d="M7 17L12 6l5 11" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    github: '<svg width="14" height="14" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#24292f"/><path d="M12 3a9 9 0 0 0-2.85 17.54c.45.08.62-.2.62-.43v-1.7c-2.5.55-3.03-1.06-3.03-1.06-.41-1.04-1-1.32-1-1.32-.82-.56.06-.55.06-.55.9.06 1.38.93 1.38.93.8 1.38 2.11.98 2.63.75.08-.58.31-.98.57-1.2-2-.23-4.1-1-4.1-4.45 0-.98.35-1.79.93-2.42-.1-.23-.4-1.15.08-2.4 0 0 .76-.24 2.48.92a8.6 8.6 0 0 1 4.51 0c1.72-1.16 2.47-.92 2.47-.92.49 1.25.18 2.17.09 2.4.58.63.93 1.44.93 2.42 0 3.47-2.11 4.22-4.12 4.44.32.28.61.83.61 1.67v2.47c0 .24.16.52.62.43A9 9 0 0 0 12 3z" fill="#fff"/></svg>',
    replit: '<svg width="14" height="14" viewBox="0 0 24 24"><rect width="24" height="24" rx="5" fill="#F26207"/><path d="M8 5h5v4.5H8zM13 9.5h5V14h-5zM8 14h5v4.5H8z" fill="#fff"/></svg>',
    miro:   '<svg width="14" height="14" viewBox="0 0 24 24"><rect width="24" height="24" rx="5" fill="#FFD02F"/><path d="M6 18V7l3 3 3-4 3 3 3-3v12" stroke="#050038" stroke-width="1.8" fill="none"/></svg>'
  };

  function nav(active) {
    var items = ['Marketplace','Overview','Tools'];
    return '<div class="fm-nav"><span style="font-weight:700;color:var(--fm-text)">EY Fabric</span>'
      + items.map(function(i){ return '<span'+(i===(active||'Marketplace')?' class="on"':'')+'>'+i+'</span>'; }).join('')
      + '<div class="fm-search">Search 284 offerings…</div><span class="fm-ai">AI</span><span class="fm-av">FM</span></div>';
  }

  function rail(on) {
    var rows = [['All','284'],['Services','118'],['Licenses','21'],['Kits','17'],['Packages','11'],['APIs','41']];
    return '<div class="fm-rail">'
      + rows.map(function(r){ return '<a class="'+(r[0]===on?'on':'')+'" href="#">'+r[0]+'<b>'+r[1]+'</b></a>'; }).join('')
      + '</div>';
  }

  function order(cta, extras) {
    extras = extras || '';
    return '<div class="fm-order"><b style="font-size:12px">Your order</b>'
      + '<div style="font-size:10px;color:var(--fm-muted);margin:4px 0">Workbench \xb7 1 instance</div>'
      + '<div style="display:flex;justify-content:space-between;font-size:11px;margin:6px 0 2px"><span>Region</span><span>West 2</span></div>'
      + '<div style="display:flex;justify-content:space-between;font-size:11px;margin:2px 0"><span>Service</span><span>Workbench</span></div>'
      + '<div class="tot"><span>Total</span><span>$0 / mo</span></div>'
      + '<div class="fm-notice" style="margin-top:8px;font-size:10px">Estimates exclude platform fees.</div>'
      + extras
      + '<div style="display:flex;gap:6px;margin-top:8px">'+cta+'</div></div>';
  }

  var S = {
    /* ── catalog ── */
    'catalog.home': nav()
      + '<div class="fm-main">'
      + '<div class="fm-hero"><div style="font-size:10px;opacity:.7;margin-bottom:8px">Technology \xb7 EY Fabric Marketplace</div>'
      + '<b>Unlocking technology<br>at speed and scale</b>'
      + '<span style="display:block;margin-top:6px;opacity:.85">Reusable services, licenses, kits and APIs — discoverable in one place, requestable in minutes.</span>'
      + '<div style="margin-top:12px;display:flex;gap:8px"><button class="fm-btn lg" id="go" type="button">Explore Catalog</button><button class="fm-btn ghost lg" type="button">Contact us</button></div></div>'
      + '<div class="fm-kpis" style="margin-top:10px">'
      + '<div class="fm-kpi"><i>Total offerings</i><b>284</b></div>'
      + '<div class="fm-kpi"><i>Teams served</i><b>1.2k</b></div>'
      + '<div class="fm-kpi"><i>Avg. fulfillment</i><b>4.1h</b></div>'
      + '<div class="fm-kpi"><i>Uptime</i><b>99.9%</b></div></div>'
      + '<div class="fm-banner" style="margin-top:8px;display:flex;justify-content:space-between;align-items:center">'
      + '<div><b>Developer workflow</b><span class="crumb" style="display:block;margin-top:2px">Create, build and deploy on shared infrastructure</span></div>'
      + '<button class="fm-btn" type="button">Get started</button></div></div>',

    'catalog.grid': nav()
      + '<div class="fm-body">'
      + rail('All')
      + '<div class="fm-main">'
      + '<div class="fm-banner"><b>Make a request from the catalog</b><span class="crumb" style="display:block;margin-top:2px">Choose a category \xb7 284 offerings available</span></div>'
      + '<div class="fm-tiles" style="margin-top:10px">'
      + '<div class="fm-photo" id="go"><b>Services</b><span>Compute &amp; infra \xb7 118</span></div>'
      + '<div class="fm-photo"><b>Licenses</b><span>Software \xb7 21</span></div>'
      + '<div class="fm-photo"><b>Kits</b><span>Dev toolkits \xb7 17</span></div>'
      + '<div class="fm-photo"><b>Packages</b><span>Bundles \xb7 11</span></div>'
      + '<div class="fm-photo"><b>APIs</b><span>Endpoints \xb7 41</span></div>'
      + '<div class="fm-photo"><b>Explore all</b><span>284 items</span></div></div></div></div>',

    'catalog.services': nav()
      + '<div class="fm-body">'
      + rail('Services')
      + '<div class="fm-main">'
      + '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px"><b style="font-size:13px">Services</b><span style="font-size:10px;color:var(--fm-muted)">118 offerings</span></div>'
      + '<div style="display:flex;gap:6px;margin-bottom:8px"><div class="fm-search" style="flex:1">Filter offerings…</div><span class="fm-chip on">Recently updated</span><span class="fm-chip">Available</span></div>'
      + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">'
      + '<div class="fm-offer"><div class="crumb">Services \xb7 Offerings</div><div class="t">Workbench</div><div class="desc">Shared compute a team can provision and request on demand.</div><div style="display:flex;gap:4px;margin:6px 0"><span class="fm-tag ok">Available</span><span class="fm-tag">Compute</span></div><div class="acts"><button class="fm-btn secondary" type="button">See details</button><button class="fm-btn" id="go" type="button">Get started</button></div></div>'
      + '<div class="fm-offer"><div class="crumb">Services \xb7 Offerings</div><div class="t">Data Cluster</div><div class="desc">Managed data layer for structured ingestion and query.</div><div style="display:flex;gap:4px;margin:6px 0"><span class="fm-tag warn">Limited</span><span class="fm-tag">Data</span></div><div class="acts"><button class="fm-btn secondary" type="button">See details</button><button class="fm-btn ghost" type="button">Waitlist</button></div></div>'
      + '</div></div></div>',

    /* ── requester flow (improved) ── */
    'req.services': nav()
      + '<div class="fm-body">'
      + rail('Services')
      + '<div class="fm-main">'
      + '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px"><b style="font-size:13px">Services</b><span style="font-size:10px;color:var(--fm-muted)">118 offerings</span></div>'
      + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px">'
      + '<div class="fm-offer">'
      +   '<div class="crumb">Services \xb7 Offerings</div><div class="t">Workbench</div>'
      +   '<div class="desc">Shared compute a team can provision and request on demand.</div>'
      +   '<div style="display:flex;gap:4px;margin:6px 0;flex-wrap:wrap">'
      +     '<span class="fm-tag ok">Available</span>'
      +     '<span class="fm-tag">Compute</span>'
      +     '<span class="fm-tag" style="border-color:rgba(255,230,0,.35);color:var(--fm-accent)">3 req. fields</span>'
      +     '<span class="fm-tag" style="color:var(--fm-muted)">~8 min</span>'
      +   '</div>'
      +   '<div class="acts"><button class="fm-btn secondary" type="button" id="info">View more ↗</button><button class="fm-btn" type="button" id="go">Get started</button></div>'
      + '</div>'
      + '<div class="fm-offer"><div class="crumb">Services \xb7 Offerings</div><div class="t">Data Cluster</div><div class="desc">Managed data layer for structured ingestion and query.</div><div style="display:flex;gap:4px;margin:6px 0"><span class="fm-tag warn">Limited</span><span class="fm-tag">Data</span></div><div class="acts"><button class="fm-btn ghost" type="button">Waitlist</button></div></div>'
      + '</div>'
      + '<div style="background:var(--fm-card);border:1px solid rgba(255,230,0,.3);border-radius:6px;padding:10px">'
      +   '<div style="font-size:10px;font-weight:700;color:var(--fm-accent);margin-bottom:6px">Workbench — Requirements</div>'
      +   '<div style="display:flex;flex-direction:column;gap:5px">'
      +     '<div style="display:flex;align-items:flex-start;gap:8px;font-size:10px;padding:4px 6px;background:var(--fm-side);border-radius:3px">'
      +       '<span style="width:16px;height:16px;background:rgba(125,206,160,.15);border-radius:2px;display:inline-flex;align-items:center;justify-content:center;font-size:9px;flex-shrink:0">🗂</span>'
      +       '<span><b style="color:var(--fm-text)">Workspace</b> — billing workspace with active budget. <span style="color:var(--fm-ok)">Required</span></span>'
      +     '</div>'
      +     '<div style="display:flex;align-items:flex-start;gap:8px;font-size:10px;padding:4px 6px;background:var(--fm-side);border-radius:3px">'
      +       '<span style="width:16px;height:16px;background:rgba(255,230,0,.12);border-radius:2px;display:inline-flex;align-items:center;justify-content:center;font-size:9px;flex-shrink:0">✏</span>'
      +       '<span><b style="color:var(--fm-text)">Instance name</b> — unique, 2–40 chars, no spaces. eg. <code style="color:var(--fm-accent)">team-wb-01</code>. <span style="color:var(--fm-ok)">Required</span></span>'
      +     '</div>'
      +     '<div style="display:flex;align-items:flex-start;gap:8px;font-size:10px;padding:4px 6px;background:var(--fm-side);border-radius:3px">'
      +       '<span style="width:16px;height:16px;background:rgba(125,206,160,.15);border-radius:2px;display:inline-flex;align-items:center;justify-content:center;font-size:9px;flex-shrink:0">👤</span>'
      +       '<span><b style="color:var(--fm-text)">Point of contact</b> — must have org access. <span style="color:var(--fm-ok)">Required</span></span>'
      +     '</div>'
      +   '</div>'
      +   '<div style="margin-top:8px;font-size:9.5px;color:var(--fm-muted)">SLA 99.9% \xb7 Avg. fulfillment 4.1h \xb7 West 2 region</div>'
      + '</div>'
      + '</div></div>',

    'req.form.workspace': nav()
      + '<div class="fm-split">'
      + '<div class="fm-main">'
      +   '<div class="fm-stepper"><b>0</b> Workspace <b>1</b> Details <b>2</b> Billing <b>3</b> Confirm</div>'
      +   '<div class="crumb" style="margin:4px 0 6px">Select a workspace to continue</div>'
      +   '<label class="crumb">Workspace</label>'
      +   '<div class="fm-field">Search workspace…</div>'
      +   '<div style="font-size:10px;color:var(--fm-muted);margin-bottom:6px">Your workspaces</div>'
      +   '<div class="fm-row" style="border-color:rgba(255,230,0,.3)" id="go">north-studio <span class="fm-tag ok">Ready \xb7 $0 pending</span></div>'
      +   '<div class="fm-row">design-eng <span class="fm-tag warn">Needs approval</span></div>'
      +   '<div class="fm-row">legacy-2022 <span class="fm-tag">Inactive</span></div>'
      +   '<button class="fm-btn ghost" type="button" style="margin-top:8px">+ Create new workspace</button>'
      +   '<div class="fm-notice" style="margin-top:8px;font-size:10px;border-color:rgba(255,230,0,.2);color:var(--fm-accent)">Workspace selection unlocks pre-fill for region and contact fields.</div>'
      + '</div>'
      + '<div class="fm-main">'
      +   order('<button class="fm-btn" type="button" style="opacity:.4;width:100%">Select a workspace first</button>')
      + '</div></div>',

    'req.form.fields': nav()
      + '<div class="fm-split">'
      + '<div class="fm-main">'
      +   '<div class="fm-stepper"><b>0</b> Workspace <b>1</b> Details <b>2</b> Billing <b>3</b> Confirm</div>'
      +   '<div class="fm-notice" style="margin-bottom:8px;font-size:10px;border-color:rgba(125,206,160,.3);color:var(--fm-ok)">AI pre-filled Region and Contact from north-studio workspace.</div>'
      +   '<div style="display:flex;justify-content:space-between;align-items:center"><label class="crumb" style="margin:0">Friendly instance name <span style="color:var(--fm-bad)">*</span></label><span style="font-size:9px;color:var(--fm-muted)">Required</span></div>'
      +   '<div style="position:relative;margin-bottom:2px">'
      +     '<div class="fm-field" id="f1" style="border-color:rgba(255,230,0,.5)">team-workbench-01|</div>'
      +     '<div style="position:absolute;left:0;top:calc(100% + 4px);z-index:10;background:var(--fm-nav);border:1px solid rgba(255,230,0,.35);border-radius:6px;padding:8px 10px;width:280px;box-shadow:0 4px 16px rgba(0,0,0,.4)">'
      +       '<div style="display:flex;align-items:center;gap:6px;margin-bottom:5px">'
      +         '<span style="width:18px;height:18px;background:rgba(255,230,0,.15);border-radius:3px;display:inline-flex;align-items:center;justify-content:center;font-size:10px">✏</span>'
      +         '<b style="font-size:11px;color:var(--fm-text)">Instance name</b>'
      +         '<span class="fm-tag bad" style="margin-left:auto">Required</span>'
      +       '</div>'
      +       '<div style="font-size:10px;color:var(--fm-muted);line-height:1.5">Unique identifier for this compute instance. 2–40 characters, no spaces. Example: <span style="color:var(--fm-accent)">team-workbench-01</span></div>'
      +       '<div style="margin-top:6px;font-size:9px;color:var(--fm-faint);display:flex;gap:10px"><span>→ Used in URLs</span><span>→ Cannot change later</span></div>'
      +     '</div>'
      +   '</div>'
      +   '<div style="height:56px"></div>'
      +   '<label class="crumb">Location <span style="color:var(--fm-ok)">✓ pre-filled</span></label>'
      +   '<div class="fm-select" style="color:var(--fm-ok)">West 2 — US West (Oregon)</div>'
      +   '<label class="crumb">Required service</label>'
      +   '<div class="fm-radio on"><i></i> Workbench</div>'
      +   '<label class="crumb" style="margin-top:6px">Point of contact <span style="color:var(--fm-ok)">✓ pre-filled</span></label>'
      +   '<div class="fm-field" id="go" style="color:var(--fm-ok)">A. Torres — Engineering Lead</div>'
      + '</div>'
      + '<div class="fm-main">'
      +   order('<button class="fm-btn" id="go" type="button" style="width:100%">Continue</button>')
      + '</div></div>',

    'req.form.ai': nav()
      + '<div class="fm-split">'
      + '<div class="fm-main">'
      +   '<div class="fm-stepper"><b>0</b> Workspace <b>1</b> Details <b>2</b> Billing <b>3</b> Confirm</div>'
      +   '<div class="fm-row" style="margin:6px 0">Instance <b>team-workbench-01</b> <span class="fm-tag ok">✓</span></div>'
      +   '<div class="fm-row" style="margin:4px 0">Region <b>West 2</b> <span class="fm-tag ok">✓</span></div>'
      +   '<div class="fm-row" style="margin:4px 0">Service <b>Workbench</b> <span class="fm-tag ok">✓</span></div>'
      +   '<div class="fm-row" style="margin:4px 0">Contact <b>A. Torres</b> <span class="fm-tag ok">✓</span></div>'
      +   '<div style="margin-top:10px;background:var(--fm-nav);border:1px solid rgba(255,230,0,.25);border-radius:6px;padding:10px">'
      +     '<div style="display:flex;align-items:center;gap:6px;margin-bottom:6px">'
      +       '<span style="width:16px;height:16px;background:rgba(217,119,87,.2);border-radius:3px;display:inline-flex;align-items:center;justify-content:center;font-size:9px">✶</span>'
      +       '<b style="font-size:10px;color:var(--fm-text)">AI Assistance</b>'
      +       '<span class="fm-tag ok" style="margin-left:auto">Active</span>'
      +     '</div>'
      +     '<div style="font-size:10px;color:var(--fm-muted);margin-bottom:6px">Delegate remaining steps to AI:</div>'
      +     '<div style="display:flex;flex-direction:column;gap:4px">'
      +       '<div style="display:flex;align-items:center;gap:6px;font-size:10px"><span style="color:var(--fm-ok)">✓</span><span>Confirm billing workspace (north-studio)</span></div>'
      +       '<div style="display:flex;align-items:center;gap:6px;font-size:10px"><span style="color:var(--fm-ok)">✓</span><span>Notify point of contact on completion</span></div>'
      +       '<div style="display:flex;align-items:center;gap:6px;font-size:10px"><span style="color:var(--fm-accent)">→</span><span>Submit order when ready</span></div>'
      +     '</div>'
      +     '<button class="fm-btn" id="go" type="button" style="margin-top:8px;width:100%">Let AI handle the rest</button>'
      +   '</div>'
      +   '<div style="margin-top:6px;display:flex;align-items:center;justify-content:space-between;font-size:10px;color:var(--fm-muted)"><span>Need help? <u style="cursor:pointer;color:var(--fm-accent)">Open walkthrough ↗</u></span><span>Step 1 of 4</span></div>'
      + '</div>'
      + '<div class="fm-main">'
      +   order('<button class="fm-btn ghost" type="button">Back</button><button class="fm-btn" id="go" type="button">Submit</button>')
      + '</div></div>',

    /* ── analytics hub ── */
    'hub.overview': nav('Hub')
      + '<div class="fm-body">'
      + '<div class="fm-rail"><a class="on" href="#">Overview</a><a href="#">Alarms</a><a href="#">Sessions</a><a href="#">Funnels</a><a href="#">Replay</a></div>'
      + '<div class="fm-main">'
      +   '<div class="fm-kpis"><div class="fm-kpi"><i>Sessions</i><b>12.4k</b></div><div class="fm-kpi"><i>Drop-off rate</i><b><span class="fm-tag bad">18%</span></b></div><div class="fm-kpi"><i>NPS</i><b>32</b></div><div class="fm-kpi"><i>CSAT</i><b>3.1 / 5</b></div></div>'
      +   '<div style="margin-top:10px;font-size:10px;color:var(--fm-muted);margin-bottom:6px;letter-spacing:.08em;text-transform:uppercase">Active alarms</div>'
      +   '<div class="fm-row" id="go">Workbench form — required field <span class="fm-tag bad">hot</span></div>'
      +   '<div class="fm-row">Contact search — no hint text <span class="fm-tag warn">friction</span></div>'
      +   '<div class="fm-row">Billing workspace lookup <span class="fm-tag warn">slow</span></div>'
      + '</div></div>',

    'hub.alarms': nav('Hub')
      + '<div class="fm-body">'
      + '<div class="fm-rail"><a href="#">Overview</a><a class="on" href="#">Alarms</a><a href="#">Sessions</a><a href="#">Funnels</a><a href="#">Replay</a></div>'
      + '<div class="fm-main">'
      +   '<div style="display:flex;gap:6px;margin-bottom:10px"><span class="fm-chip on">Product area</span><span class="fm-chip">Severity</span><span class="fm-chip">Status</span></div>'
      +   '<div class="fm-row" id="go">Required field — instance name <span class="fm-tag bad">drop \xb7 73%</span></div>'
      +   '<div class="fm-row">Contact search — no placeholder <span class="fm-tag bad">drop \xb7 41%</span></div>'
      +   '<div class="fm-row">Service radio — no default selected <span class="fm-tag warn">friction</span></div>'
      +   '<div class="fm-row">Billing workspace lookup <span class="fm-tag warn">slow \xb7 p95 4.2s</span></div>'
      + '</div></div>',

    /* ── publisher flow ── */
    'pub.workspace': nav('Workspace')
      + '<div class="fm-body">'
      + '<div class="fm-rail"><a class="on" href="#">My workspace</a><a href="#">Published</a><a href="#">Queue</a><a href="#">Teams</a></div>'
      + '<div class="fm-main">'
      +   '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">'
      +     '<div><b style="font-size:13px">north-studio</b><div style="font-size:10px;color:var(--fm-muted)">Engineering workspace \xb7 Publisher</div></div>'
      +     '<button class="fm-btn" id="go" type="button">+ New offering</button>'
      +   '</div>'
      +   '<div class="fm-kpis" style="margin-bottom:8px"><div class="fm-kpi"><i>Published</i><b>41</b></div><div class="fm-kpi"><i>Pending</i><b>7</b></div><div class="fm-kpi"><i>Draft</i><b>3</b></div><div class="fm-kpi"><i>Reviews</i><b><span class="fm-tag warn">2</span></b></div></div>'
      +   '<div style="font-size:10px;color:var(--fm-muted);margin-bottom:6px;text-transform:uppercase;letter-spacing:.08em">Published items</div>'
      +   '<div class="fm-row">Workbench v2.0 <span class="fm-tag ok">Live</span></div>'
      +   '<div class="fm-row">Data Cluster <span class="fm-tag ok">Live</span></div>'
      +   '<div class="fm-row">Dev Kit Pro <span class="fm-tag bad">Fix needed</span></div>'
      + '</div></div>',

    'pub.type': nav('Workspace')
      + '<div class="fm-main">'
      + '<div class="fm-stepper"><b>1</b> Type <b>2</b> Helpers <b>3</b> Details <b>4</b> Review</div>'
      + '<div style="font-size:12px;font-weight:700;margin:8px 0 2px">What are you publishing?</div>'
      + '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:6px">'
      + '<div class="fm-tile" style="border-color:rgba(255,230,0,.4)"><b style="color:var(--fm-accent)">Service</b><span>Compute, infra, managed</span></div>'
      + '<div class="fm-tile"><b>License</b><span>Software access</span></div>'
      + '<div class="fm-tile"><b>Kit</b><span>Dev toolkit bundle</span></div>'
      + '<div class="fm-tile"><b>Package</b><span>Multi-service bundle</span></div>'
      + '<div class="fm-tile"><b>API</b><span>Endpoint integration</span></div>'
      + '<div class="fm-tile"><b>Dataset</b><span>Data product</span></div>'
      + '</div>'
      + '<button class="fm-btn" id="go" type="button" style="margin-top:10px">Service — compute path →</button>'
      + '</div>',

    'pub.wizard.tools': nav('Workspace')
      + '<div class="fm-main">'
      + '<div class="fm-stepper"><b>1</b> Type <b>2</b> Helpers <b>3</b> Details <b>4</b> Review</div>'
      + '<div style="font-size:12px;font-weight:700;margin:8px 0 2px">What support will you provide to requesters?</div>'
      + '<div style="font-size:10px;color:var(--fm-muted);margin-bottom:10px">Choose the onboarding and guidance tools for this offering</div>'
      + '<div style="display:flex;flex-direction:column;gap:6px">'
      + '<div style="display:flex;align-items:flex-start;gap:8px;padding:10px;background:var(--fm-card);border:1px solid rgba(255,230,0,.3);border-radius:4px">'
      +   '<div style="width:14px;height:14px;background:var(--fm-accent);border-radius:2px;flex-shrink:0;margin-top:1px;display:flex;align-items:center;justify-content:center;color:#111;font-size:9px;font-weight:700">✓</div>'
      +   '<div><div style="font-size:11px;font-weight:700;color:var(--fm-text)">Contextual tooltips</div><div style="font-size:9.5px;color:var(--fm-muted);margin-top:2px">Mini-UI tooltips with icons, examples, and field guidance. Reduces drop-off on required fields.</div></div>'
      + '</div>'
      + '<div style="display:flex;align-items:flex-start;gap:8px;padding:10px;background:var(--fm-card);border:1px solid rgba(255,230,0,.3);border-radius:4px">'
      +   '<div style="width:14px;height:14px;background:var(--fm-accent);border-radius:2px;flex-shrink:0;margin-top:1px;display:flex;align-items:center;justify-content:center;color:#111;font-size:9px;font-weight:700">✓</div>'
      +   '<div><div style="font-size:11px;font-weight:700;color:var(--fm-text)">AI ingest — PRD / requirements</div><div style="font-size:9.5px;color:var(--fm-muted);margin-top:2px">Requester drops a product brief. AI reads it, pre-fills the form, analyzes complexity, builds a request wizard.</div></div>'
      + '</div>'
      + '<div style="display:flex;align-items:flex-start;gap:8px;padding:10px;background:var(--fm-card);border:1px solid rgba(255,230,0,.3);border-radius:4px">'
      +   '<div style="width:14px;height:14px;background:var(--fm-accent);border-radius:2px;flex-shrink:0;margin-top:1px;display:flex;align-items:center;justify-content:center;color:#111;font-size:9px;font-weight:700">✓</div>'
      +   '<div><div style="font-size:11px;font-weight:700;color:var(--fm-text)">Onboarding walkthrough</div><div style="font-size:9.5px;color:var(--fm-muted);margin-top:2px">Step-by-step guide. Dismissable, re-openable from order details.</div></div>'
      + '</div>'
      + '</div>'
      + '<button class="fm-btn" id="go" type="button" style="margin-top:10px">Continue to details →</button>'
      + '</div>',

    'pub.fields': nav('Workspace')
      + '<div class="fm-main">'
      + '<div class="fm-stepper"><b>1</b> Type <b>2</b> Helpers <b>3</b> Details <b>4</b> Review</div>'
      + '<div class="fm-drop" id="f1">Drop product file (PRD / requirements) or <b>browse</b></div>'
      + '<div class="fm-notice" style="margin:6px 0;font-size:9.5px;border-color:rgba(255,230,0,.2);color:var(--fm-muted)">AI reads requirements, fills fields automatically, analyzes form complexity, and builds a request wizard for your requesters.</div>'
      + '<div style="font-size:10px;color:var(--fm-muted);text-align:center;margin:6px 0">or add fields manually</div>'
      + '<label class="crumb">Title</label>'
      + '<div class="fm-field">Workbench v2.1</div>'
      + '<label class="crumb">Short description</label>'
      + '<div class="fm-field">Shared compute instance for engineering teams…</div>'
      + '<label class="crumb">Category</label>'
      + '<div class="fm-select">Services — Compute</div>'
      + '<button class="fm-btn" id="go" type="button" style="margin-top:10px">Continue to review →</button>'
      + '</div>',

    'pub.live': nav('Workspace')
      + '<div class="fm-main">'
      + '<div class="fm-row" style="margin-bottom:8px"><b>Workbench v2.1</b> <span class="fm-tag ok">Published</span></div>'
      + '<div style="display:flex;gap:8px;margin-bottom:10px;font-size:10px"><span style="color:var(--fm-ok)">✓ AI review</span><span style="color:var(--fm-muted)">→</span><span style="color:var(--fm-ok)">✓ Human review</span><span style="color:var(--fm-muted)">→</span><span style="color:var(--fm-ok);font-weight:700">● Live</span></div>'
      + '<div class="fm-row">Approved by <b>J. Moreno</b> <span class="crumb">2h ago</span></div>'
      + '<div class="fm-row">Visible in Marketplace <span class="fm-tag ok">Live</span></div>'
      + '<div style="margin-top:8px;font-size:10px;color:var(--fm-muted)">Helper tools active for requesters:</div>'
      + '<div style="display:flex;gap:4px;margin-top:4px;flex-wrap:wrap"><span class="fm-tag ok">Tooltips</span><span class="fm-tag ok">AI ingest</span><span class="fm-tag ok">Walkthrough</span></div>'
      + '<div style="display:flex;gap:6px;margin-top:10px"><button class="fm-btn" type="button">View in catalog</button><button class="fm-btn ghost" type="button">Share link</button></div>'
      + '</div>',

    /* ── diagram beats ── */
    'board.measure': '<div style="padding:20px;background:var(--fm-bg);width:100%;height:100%">'
      + '<div style="font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--fm-accent);margin-bottom:14px">01 \xb7 Event taxonomy</div>'
      + '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:18px">'
      + '<span class="fm-node">page.home</span><span style="color:var(--fm-accent);font-size:12px">→</span>'
      + '<span class="fm-node">page.catalog</span><span style="color:var(--fm-accent);font-size:12px">→</span>'
      + '<span class="fm-node">page.services</span><span style="color:var(--fm-accent);font-size:12px">→</span>'
      + '<span class="fm-node" style="border-color:var(--fm-accent);color:var(--fm-accent)">form.open</span><span style="color:var(--fm-accent);font-size:12px">→</span>'
      + '<span class="fm-node" style="border-color:var(--fm-ok);color:var(--fm-ok)">form.submit</span>'
      + '</div>'
      + '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px">'
      + '<div class="fm-card"><div style="font-size:10px;color:var(--fm-muted);margin-bottom:4px">field.focus</div><b>Instance name</b><div style="font-size:10px;color:var(--fm-muted);margin-top:4px">avg dwell 8.4s \xb7 12.4k sessions</div></div>'
      + '<div class="fm-card"><div style="font-size:10px;color:var(--fm-muted);margin-bottom:4px">field.focus</div><b>Contact search</b><div style="font-size:10px;color:var(--fm-muted);margin-top:4px">avg dwell 6.1s \xb7 rage clicks 18%</div></div>'
      + '<div class="fm-card" style="border-color:rgba(224,133,127,.4)"><div style="font-size:10px;color:var(--fm-bad);margin-bottom:4px">field.abandon</div><b style="color:var(--fm-bad)">Required field exit</b><div style="font-size:10px;color:var(--fm-bad);margin-top:4px">exit rate 73% \xb7 funnel cliff</div></div>'
      + '</div></div>',

    'board.funnel': (function(){
      var bars = [
        {pct:100, label:'Catalog home \xb7 12.4k', bad:false},
        {pct:74,  label:'Services page \xb7 9.2k', bad:false},
        {pct:41,  label:'Form opened \xb7 5.1k', bad:false},
        {pct:11,  label:'Required field cliff \xb7 1.4k', bad:true}
      ];
      return '<div style="padding:20px;background:var(--fm-bg);width:100%;height:100%">'
        + '<div style="font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--fm-accent);margin-bottom:14px">02 \xb7 Request funnel</div>'
        + bars.map(function(b){
          return '<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">'
            + '<div style="width:36px;font-size:10px;font-weight:700;text-align:right;flex-shrink:0'+(b.bad?';color:var(--fm-bad)':'')+'">'+b.pct+'%</div>'
            + '<div style="flex:1;height:24px;position:relative">'
            + '<div style="width:'+b.pct+'%;height:100%;background:'+(b.bad?'var(--fm-bad-bg)':'var(--fm-side)')+';border:1px solid '+(b.bad?'var(--fm-bad)':'var(--fm-line)')+';border-radius:2px"></div>'
            + '</div>'
            + '<div style="font-size:10px;white-space:nowrap;flex-shrink:0'+(b.bad?';color:var(--fm-bad)':'')+'">'+b.label+'</div></div>';
        }).join('')
        + '<div class="fm-notice" style="margin-top:10px;border-color:rgba(224,133,127,.3);font-size:11px">73% of users who open the form leave on the first required field. That is not a billing issue.</div>'
        + '</div>';
    })(),

    'board.research': (function(){
      var replayPlayer = '<div style="background:#0a0b10;border:1px solid rgba(255,255,255,.1);border-radius:4px;overflow:hidden">'
        + '<div style="background:#06070c;padding:4px 8px;display:flex;align-items:center;gap:6px;border-bottom:1px solid rgba(255,255,255,.08)">'
        +   '<div style="width:6px;height:6px;border-radius:50%;background:var(--fm-bad)"></div>'
        +   '<div style="width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.1)"></div>'
        +   '<span style="font-size:8px;color:var(--fm-faint);margin-left:2px">Session \xb7 #4812 \xb7 form.custom</span>'
        +   '<span style="font-size:8px;color:var(--fm-bad);margin-left:auto">● rec</span>'
        + '</div>'
        + '<div style="padding:6px;position:relative;min-height:46px">'
        +   '<div style="font-size:8px;color:var(--fm-muted);margin-bottom:3px">Workbench \xb7 Customization</div>'
        +   '<div style="font-size:7px;color:var(--fm-muted);margin-bottom:2px">Instance name <span style="color:var(--fm-bad)">*</span></div>'
        +   '<div style="height:10px;background:var(--fm-card);border:1px solid rgba(224,133,127,.5);border-radius:2px;margin-bottom:4px"></div>'
        +   '<div style="position:absolute;top:24px;left:26px;width:6px;height:8px;border-left:1.5px solid #fff;border-bottom:1px solid rgba(255,255,255,.3);border-radius:0 0 0 2px"></div>'
        +   '<div style="font-size:7px;color:var(--fm-faint)">Region</div>'
        +   '<div style="height:10px;background:var(--fm-card);border:1px solid var(--fm-line);border-radius:2px"></div>'
        + '</div>'
        + '<div style="padding:4px 8px 5px;border-top:1px solid rgba(255,255,255,.06)">'
        +   '<div style="height:2px;background:rgba(255,255,255,.08);border-radius:1px;position:relative;margin-bottom:3px">'
        +     '<div style="width:38%;height:100%;background:var(--fm-accent);border-radius:1px"></div>'
        +     '<div style="position:absolute;top:-1px;left:38%;width:4px;height:4px;border-radius:50%;background:var(--fm-accent)"></div>'
        +   '</div>'
        +   '<div style="display:flex;justify-content:space-between;font-size:7px;color:var(--fm-faint)"><span>0:08 — pause on Instance name</span><span>0:21</span></div>'
        + '</div></div>';
      return '<div style="padding:16px;background:var(--fm-bg);width:100%;height:100%">'
        + '<div style="font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--fm-accent);margin-bottom:12px">03 \xb7 Research synthesis</div>'
        + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">'
        + '<div class="fm-card" style="grid-column:span 2">'
        +   '<div style="font-size:10px;color:var(--fm-muted);margin-bottom:8px">Interviews \xb7 14 participants \xb7 moderated</div>'
        +   '<div style="display:flex;flex-direction:column;gap:6px">'
        +     '<div style="font-size:10.5px;font-style:italic;padding:5px 8px;background:var(--fm-side);border-radius:2px;border-left:2px solid var(--fm-accent)">“I didn’t see that field was required — there’s no asterisk, nothing.”</div>'
        +     '<div style="font-size:10.5px;font-style:italic;padding:5px 8px;background:var(--fm-side);border-radius:2px;border-left:2px solid var(--fm-accent)">“I thought the contact field was optional and just skipped it.”</div>'
        +   '</div>'
        + '</div>'
        + '<div class="fm-card"><div style="font-size:10px;color:var(--fm-muted)">CSAT \xb7 Form step 1</div><div style="font-size:22px;font-weight:700;color:var(--fm-bad);margin:4px 0">3.1<span style="font-size:13px;font-weight:400;color:var(--fm-muted)">/5</span></div><div style="font-size:10px;color:var(--fm-muted)">vs 4.4 on other steps</div></div>'
        + '<div class="fm-card"><div style="font-size:10px;color:var(--fm-muted)">NPS \xb7 Overall</div><div style="font-size:22px;font-weight:700;margin:4px 0">32</div><div style="font-size:10px;color:var(--fm-muted)">Publishers scoring 24</div></div>'
        + '<div class="fm-card" style="grid-column:span 2">'
        +   '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px"><div style="font-size:10px;color:var(--fm-muted)">Session Replay \xb7 drop-off pattern</div><span class="fm-tag bad">89% of exits</span></div>'
        +   replayPlayer
        +   '<div style="font-size:9.5px;color:var(--fm-muted);margin-top:5px">Same cursor pause before abandon in 89% of drop-off sessions.</div>'
        + '</div>'
        + '<div class="fm-card"><div style="font-size:10px;color:var(--fm-muted)">Task success \xb7 Usability</div><div style="font-size:22px;font-weight:700;color:var(--fm-bad);margin:4px 0">11%</div><div style="font-size:10px;color:var(--fm-muted)">Unmoderated \xb7 n=18</div></div>'
        + '<div class="fm-card"><div style="font-size:10px;color:var(--fm-muted);margin-bottom:6px">Tools used</div><div style="display:flex;flex-direction:column;gap:4px;font-size:10px"><span>Maze — task flows</span><span>Qualtrics — CSAT / NPS</span><span>FullStory — session replay</span></div></div>'
        + '</div></div>';
    })(),

    'board.understand': '<div style="padding:20px;background:var(--fm-bg);width:100%;height:100%">'
      + '<div style="font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--fm-accent);margin-bottom:14px">04 \xb7 Problem space</div>'
      + '<div class="fm-card" style="margin-bottom:12px;border-color:rgba(255,230,0,.3)">'
      +   '<div style="font-size:10px;color:var(--fm-accent);margin-bottom:6px;font-weight:700">Root cause</div>'
      +   '<div style="font-size:12px;line-height:1.5">No visual indicator that “Instance name” is required. No inline helper. No error until submit. The field looks identical to optional fields.</div>'
      + '</div>'
      + '<div style="font-size:10px;color:var(--fm-muted);margin-bottom:8px">What needs to change</div>'
      + '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px">'
      + '<div class="fm-tile"><b>Design</b><span>Required indicators \xb7 inline helper text \xb7 error states</span></div>'
      + '<div class="fm-tile"><b>Content</b><span>Catalog copy \xb7 field guidance \xb7 example values</span></div>'
      + '<div class="fm-tile"><b>Analytics</b><span>Pendo events \xb7 field-level heatmap \xb7 replay tagging</span></div>'
      + '</div></div>',

    'board.design': (function(){
      var figSm = '<svg width="10" height="10" viewBox="0 0 38 57"><path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/><path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"/><path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19z"/><path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/><path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"/></svg>';
      var cldSm = '<svg width="10" height="10" viewBox="0 0 24 24"><rect width="24" height="24" rx="5" fill="#D97757"/><path d="M7 17L12 6l5 11" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      return '<div style="padding:14px;background:var(--fm-bg);width:100%;height:100%">'
        + '<div style="font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--fm-accent);margin-bottom:10px">05 \xb7 Design + build</div>'
        + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;height:480px">'
        + '<div style="display:flex;flex-direction:column;background:#1e1e2e;border-radius:6px;overflow:hidden;border:1px solid rgba(255,255,255,.1)">'
        +   '<div style="background:#16161f;padding:5px 8px;display:flex;align-items:center;gap:6px;border-bottom:1px solid rgba(255,255,255,.08)">'
        +     '<div style="display:flex;gap:3px"><div style="width:6px;height:6px;border-radius:50%;background:#ff5f56"></div><div style="width:6px;height:6px;border-radius:50%;background:#ffbd2e"></div><div style="width:6px;height:6px;border-radius:50%;background:#27c93f"></div></div>'
        +     '<div style="flex:1;background:rgba(255,255,255,.05);border-radius:3px;padding:2px 6px;font-size:8px;color:var(--fm-faint);display:flex;align-items:center;gap:4px">'+figSm+' figma.com / EYFabric</div>'
        +   '</div>'
        +   '<div style="padding:8px;flex:1;display:flex;flex-direction:column;gap:6px">'
        +     '<div style="font-size:8px;color:var(--fm-faint)">EY Fabric \xb7 Form fields \xb7 Required state</div>'
        +     '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;flex:1">'
        +       '<div style="background:#111118;border:1px dashed rgba(255,255,255,.12);border-radius:3px;padding:6px"><div style="font-size:7px;color:var(--fm-faint);margin-bottom:3px">Before</div><div style="height:6px;background:rgba(255,255,255,.1);border-radius:1px;margin-bottom:3px;width:60%"></div><div style="height:12px;background:rgba(255,255,255,.05);border-radius:2px;border:1px solid rgba(255,255,255,.12)"></div><div style="height:6px;background:rgba(224,133,127,.15);border-radius:1px;width:40%;margin-top:3px"></div></div>'
        +       '<div style="background:#111118;border:1px solid rgba(255,230,0,.25);border-radius:3px;padding:6px"><div style="font-size:7px;color:var(--fm-accent);margin-bottom:3px">After ✶</div><div style="display:flex;justify-content:space-between;margin-bottom:3px"><div style="height:6px;background:rgba(255,255,255,.1);border-radius:1px;width:50%"></div><div style="font-size:6px;color:var(--fm-bad)">Req.</div></div><div style="height:12px;background:rgba(255,255,255,.05);border-radius:2px;border:1px solid rgba(255,230,0,.35)"></div><div style="font-size:6px;color:var(--fm-accent);margin-top:3px">eg. team-wb-01</div></div>'
        +       '<div style="background:rgba(255,255,255,.03);border:1px dashed rgba(255,255,255,.08);border-radius:3px;grid-column:span 2;display:flex;align-items:center;justify-content:center;font-size:7.5px;color:var(--fm-faint)">Component library \xb7 24 variants \xb7 v4</div>'
        +     '</div>'
        +   '</div>'
        + '</div>'
        + '<div style="display:flex;flex-direction:column;background:#0d0e12;border-radius:6px;overflow:hidden;border:1px solid rgba(217,119,87,.25)">'
        +   '<div style="background:#0a0b0e;padding:5px 8px;display:flex;align-items:center;gap:6px;border-bottom:1px solid rgba(255,255,255,.08)">'
        +     '<div style="display:flex;gap:3px"><div style="width:6px;height:6px;border-radius:50%;background:#ff5f56"></div><div style="width:6px;height:6px;border-radius:50%;background:#ffbd2e"></div><div style="width:6px;height:6px;border-radius:50%;background:#27c93f"></div></div>'
        +     '<div style="flex:1;background:rgba(255,255,255,.04);border-radius:3px;padding:2px 6px;font-size:8px;color:var(--fm-faint);display:flex;align-items:center;gap:4px">'+cldSm+' claude.ai / design</div>'
        +   '</div>'
        +   '<div style="padding:8px;flex:1;display:flex;flex-direction:column">'
        +     '<div style="font-size:8px;color:rgba(217,119,87,.8);font-family:monospace;margin-bottom:4px">› generate required-field component</div>'
        +     '<div style="background:#060608;border-radius:3px;padding:6px;flex:1;display:flex;flex-direction:column;gap:3px;font-size:7.5px;font-family:monospace">'
        +       '<span style="color:var(--fm-muted)">Reading design tokens…</span>'
        +       '<span style="color:var(--fm-ok)">✓ fm-field variant: required</span>'
        +       '<span style="color:var(--fm-ok)">✓ Component generated</span>'
        +       '<span style="color:var(--fm-ok)">✓ Story + a11y props</span>'
        +       '<span style="color:var(--fm-ok)">✓ Token export</span>'
        +     '</div>'
        +     '<div style="margin-top:6px;display:flex;gap:4px">'
        +       '<div style="flex:1;background:rgba(125,206,160,.08);border:1px solid rgba(125,206,160,.2);border-radius:3px;padding:4px 5px;font-size:7.5px;color:var(--fm-ok);text-align:center">Design<br>token</div>'
        +       '<div style="flex:1;background:rgba(125,206,160,.08);border:1px solid rgba(125,206,160,.2);border-radius:3px;padding:4px 5px;font-size:7.5px;color:var(--fm-ok);text-align:center">React<br>comp.</div>'
        +       '<div style="flex:1;background:rgba(125,206,160,.08);border:1px solid rgba(125,206,160,.2);border-radius:3px;padding:4px 5px;font-size:7.5px;color:var(--fm-ok);text-align:center">Story<br>+docs</div>'
        +     '</div>'
        +     '<div style="margin-top:5px;display:flex;gap:4px;align-items:center;flex-wrap:wrap">'
        +       figSm
        +       '<svg width="10" height="10" viewBox="0 0 24 24"><rect width="24" height="24" rx="5" fill="#F26207"/><path d="M8 5h5v4.5H8zM13 9.5h5V14h-5zM8 14h5v4.5H8z" fill="#fff"/></svg>'
        +       '<svg width="10" height="10" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#24292f"/><path d="M12 3a9 9 0 0 0-2.85 17.54c.45.08.62-.2.62-.43v-1.7c-2.5.55-3.03-1.06-3.03-1.06-.41-1.04-1-1.32-1-1.32-.82-.56.06-.55.06-.55.9.06 1.38.93 1.38.93.8 1.38 2.11.98 2.63.75.08-.58.31-.98.57-1.2-2-.23-4.1-1-4.1-4.45 0-.98.35-1.79.93-2.42-.1-.23-.4-1.15.08-2.4 0 0 .76-.24 2.48.92a8.6 8.6 0 0 1 4.51 0c1.72-1.16 2.47-.92 2.47-.92.49 1.25.18 2.17.09 2.4.58.63.93 1.44.93 2.42 0 3.47-2.11 4.22-4.12 4.44.32.28.61.83.61 1.67v2.47c0 .24.16.52.62.43A9 9 0 0 0 12 3z" fill="#fff"/></svg>'
        +       '<svg width="10" height="10" viewBox="0 0 24 24"><rect width="24" height="24" rx="5" fill="#FFD02F"/><path d="M6 18V7l3 3 3-4 3 3 3-3v12" stroke="#050038" stroke-width="1.8" fill="none"/></svg>'
        +       '<span style="font-size:7px;color:var(--fm-faint)">+ v0 \xb7 Bolt</span>'
        +     '</div>'
        +   '</div>'
        + '</div>'
        + '</div></div>';
    })(),

    /* ── legacy screen for analyze beat ── */
    'form.custom': nav()
      + '<div class="fm-split">'
      + '<div class="fm-main">'
      +   '<div class="crumb">Marketplace / Services / Workbench</div>'
      +   '<div class="fm-stepper"><b>1</b> Customization <b>2</b> Billing <b>3</b> Confirm</div>'
      +   '<label class="crumb">Friendly instance name</label>'
      +   '<div class="fm-field" id="f1">Enter a name…</div>'
      +   '<label class="crumb">Location</label>'
      +   '<div class="fm-select" id="f2">West 2</div>'
      +   '<label class="crumb">Point of contact</label>'
      +   '<div class="fm-field" id="f4">Search people…</div>'
      +   '<div class="fm-notice" style="margin:8px 0">Choose at least one required service.</div>'
      +   '<div class="fm-radio" id="f3"><i></i> Cluster</div>'
      +   '<div class="fm-radio on"><i></i> Workbench</div>'
      + '</div>'
      + '<div class="fm-main">'
      +   '<div class="fm-order"><b>Your order</b><div class="crumb">Workbench \xb7 1 instance</div><div class="tot"><span>Total</span><span>$0 / mo</span></div><div style="display:flex;gap:6px;margin-top:8px"><button class="fm-btn ghost" type="button">Cancel</button><button class="fm-btn" id="go" type="button">Continue</button></div></div>'
      + '</div></div>'
  };

  w.EYScreens = S;
  w.EYLOGO = LOGO;
})(window);
