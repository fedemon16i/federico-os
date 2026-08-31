/* Shared catalog card. Invented offerings. Marks are tokens, not lockups. */
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
    cursor: { fill: '#6b7280', label: 'Cursor' },
    notion: { fill: '#111111', label: 'Notion' },
    ga4: { fill: '#c47f00', label: 'GA4' },
    grok: { fill: '#1a1a1a', label: 'Grok' },
    codex: { fill: '#0b5cab', label: 'Codex' }
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
    var tags = (o.tags || ['shared','team']).map(function(t){ return '<i>'+t+'</i>'; }).join('');
    var extra = o.btn || '<button type="button">View More</button><button class="pri" type="button">Get Started</button>';
    return '<div class="svc ey-offer"'+id+'>'
      +'<span class="ey-ico" aria-hidden="true"></span>'
      +'<div class="t">'+(o.name||'')+'</div>'
      +'<div class="crumb meta">Services · Offerings'+(o.brand?' · '+(MARK[o.brand]||{}).label:'')+'</div>'
      +'<div class="desc">'+(o.desc||'')+'</div>'
      +'<div class="tags">'+tags+'</div>'
      +'<div class="acts">'+extra+'</div>'
      +'</div>';
  }
  var LIST = [
    { name:'Shared workbench', desc:'A workspace a team requests and runs together.', brand:'copilot', tags:['workspace','shared'], id:'go' },
    { name:'Team cluster', desc:'Compute reserved for one delivery team.', brand:'azure', tags:['compute','shared'] },
    { name:'Automation seat', desc:'A named right to run jobs on a path.', brand:'factory', tags:['seat','jobs'] },
    { name:'Production workflow', desc:'The live path for a service after review.', brand:'postman', tags:['prod','path'] },
    { name:'Observability pack', desc:'Logs and traces attached to a service.', brand:'github', tags:['logs','traces'] },
    { name:'Identity broker', desc:'Sign-in for the workspace and the team.', brand:'replit', tags:['sign-in','team'] }
  ];
  function grid(opts) {
    opts = opts || {};
    return '<div class="svcs ey-offers">'+LIST.map(function(c,i){
      var o = Object.assign({}, c);
      if (opts.infoFirst && i===0) {
        o.id = 'info';
        o.btn = '<button class="info" id="info" type="button">See details</button><button class="pri" type="button">Get Started</button>';
      } else if (i===0) o.id = 'go';
      return card(o);
    }).join('')+'</div>';
  }
  w.EYMarket = { mark: mark, chip: chip, card: card, grid: grid, LIST: LIST, MARK: MARK };
})(window);
