/* Shared EY marketplace card + brand chips. Marks are tokens, not lockups. */
(function (w) {
  var MARK = {
    copilot: { fill: '#5b6abf', label: 'Copilot' },
    replit: { fill: '#c44e06', label: 'Replit' },
    factory: { fill: '#1a1a1a', label: 'Factory' },
    postman: { fill: '#c44a1a', label: 'Postman' },
    azure: { fill: '#0b5cab', label: 'Azure' },
    github: { fill: '#24292f', label: 'GitHub' },
    pendo: { fill: '#c41a4a', label: 'Pendo' },
    figma: { fill: '#a259ff', label: 'Figma' },
    claude: { fill: '#d97757', label: 'Claude Code' },
    cursor: { fill: '#888', label: 'Cursor' },
    notion: { fill: '#111', label: 'Notion' },
    ga4: { fill: '#c47f00', label: 'GA4' }
  };
  function mark(id) {
    var m = MARK[id] || { fill: '#5c5c66', label: '?' };
    return '<span class="ey-m" title="'+m.label+'" style="background:'+m.fill+'"></span>';
  }
  function chip(id) {
    var m = MARK[id] || { fill: '#5c5c66', label: id };
    return '<span class="ey-brand">'+mark(id)+m.label+'</span>';
  }
  function card(o) {
    o = o || {};
    var id = o.id ? ' id="'+o.id+'"' : '';
    var brand = o.brand ? mark(o.brand) : '<span class="ey-m" style="background:#5c5c66"></span>';
    var extra = o.btn || '<button type="button">View</button><button class="pri" type="button">Get started</button>';
    return '<div class="svc ey-offer"'+id+'>'+brand+'<div><div class="t">'+ (o.name||'') +'</div><div class="desc">'+(o.desc||'')+'</div><div class="meta">'+(o.meta||'Services · Offerings')+(o.brand?' · '+(MARK[o.brand]||{}).label:'')+'</div><div class="acts">'+extra+'</div></div></div>';
  }
  var LIST = [
    { name:'Workbench', desc:'Shared delivery workspace for a team.', brand:'copilot', id:'go' },
    { name:'Cluster service', desc:'Compute for a shared team.', brand:'azure' },
    { name:'Automation seat', desc:'A named right to run jobs.', brand:'factory' },
    { name:'Workflow · Prod', desc:'Production path for a service.', brand:'postman' },
    { name:'Observability pack', desc:'Logs and traces for a service.', brand:'github' },
    { name:'Identity broker', desc:'Sign-in for the workspace.', brand:'replit' }
  ];
  function grid(opts) {
    opts = opts || {};
    return '<div class="svcs ey-offers">'+LIST.map(function(c,i){
      var o = Object.assign({}, c);
      if (opts.infoFirst && i===0) {
        o.id = 'info';
        o.btn = '<button class="info" id="info" type="button">See details</button><button class="pri" type="button">Get started</button>';
      } else if (i===0) o.id = 'go';
      return card(o);
    }).join('')+'</div>';
  }
  w.EYMarket = { mark: mark, chip: chip, card: card, grid: grid, LIST: LIST, MARK: MARK };
})(window);
