(function(){
  var SKILLS = [
    {id:'map',  cat:'PRODUCT',   t:'Product Mapping',      d:'Every page and feature, tagged as an event.', proj:'EY Fabric', tools:['pendo','ga4'], core:true, x:.28, y:.22, icon:'map'},
    {id:'track',cat:'ANALYTICS', t:'Usage Tracking',       d:'Clicks, drop-offs, and who is behind each one.', proj:'Chek', tools:['pendo','mixpanel'], x:.18, y:.42, icon:'pulse'},
    {id:'seg',  cat:'UX / UXR',  t:'Segmentation and Replay',d:'Strugglers grouped — worst sessions replayed.', proj:'EY Fabric', tools:['pendo','qualtrics'], x:.38, y:.42, icon:'users'},
    {id:'syn',  cat:'UX / UXR',  t:'Research Synthesis',   d:'Interviews, surveys, tests ranked into actions.', proj:'DollarCity', tools:['maze','claude'], x:.50, y:.22, icon:'synth'},
    {id:'par',  cat:'UX / UXR',  t:'Parallel Design',      d:'By hand in Figma, and generated with AI at once.', proj:'Chek', tools:['figma','claude'], x:.62, y:.42, icon:'layers'},
    {id:'dep',  cat:'AI + DEV',  t:'Deployment',           d:'Shipped to dev, staging, prod — or handed off.', proj:'Customs', tools:['replit','github'], x:.78, y:.28, icon:'ship'},
    {id:'hub',  cat:'AI + DEV',  t:'Analytics Hub',        d:'The dashboard itself, built with Claude Code.', proj:'EY Fabric', tools:['pendo','claude'], core:true, x:.50, y:.58, icon:'hub'},
    {id:'sys',  cat:'SYSTEMS',   t:'Connected Systems',    d:'Modules wired together — one design system, many teams.', proj:'Customs ES', tools:['figma','github'], x:.72, y:.58, icon:'grid'}
  ];
  var EDGES = [['map','track'],['map','seg'],['map','syn'],['track','hub'],['seg','hub'],['syn','par'],['par','dep'],['hub','sys'],['dep','sys']];
  var ICONS = {
    map:'<path d="M4 6l5-2 6 2 5-2v12l-5 2-6-2-5 2z"/><path d="M9 4v12M15 6v12"/>',
    pulse:'<path d="M3 12h3l2-5 3 10 2-5h6"/>',
    users:'<circle cx="9" cy="8" r="3"/><circle cx="16" cy="9" r="2.5"/><path d="M3 18c0-3 3-5 6-5s6 2 6 5M13 18c.5-2 2.5-3.5 5-3.5 1 0 2 .3 3 1"/>',
    synth:'<path d="M5 16V8l5 4 5-6v10"/><path d="M4 18h14"/>',
    layers:'<path d="M12 4l8 4-8 4-8-4z"/><path d="M4 14l8 4 8-4"/><path d="M4 18l8 4 8-4"/>',
    ship:'<path d="M5 14l7-8 7 8"/><path d="M5 14h14v4H5z"/><path d="M12 6v4"/>',
    hub:'<circle cx="12" cy="12" r="3"/><path d="M12 5v2M12 17v2M5 12h2M17 12h2M7.5 7.5l1.5 1.5M15 15l1.5 1.5M16.5 7.5L15 9M9 15l-1.5 1.5"/>',
    grid:'<rect x="4" y="4" width="6" height="6"/><rect x="14" y="4" width="6" height="6"/><rect x="4" y="14" width="6" height="6"/><rect x="14" y="14" width="6" height="6"/>'
  };
  var PROJECTS = [
    {id:'ey', name:'EY Fabric', meta:'XDA · 2024—', pc:'#c8a84b', rgb:'200,168,75', url:'https://fedemon16i.github.io/federico-portfolio/projects/ey-fabric.html'},
    {id:'bc', name:'Blockchains', meta:'Globant', pc:'#22d4c8', rgb:'34,212,200', url:'https://fedemon16i.github.io/federico-portfolio/projects/blockchain.html'},
    {id:'chek', name:'Chek', meta:'Applaudo', pc:'#a78bfa', rgb:'167,139,250', url:'https://fedemon16i.github.io/federico-portfolio/projects/chek.html'},
    {id:'cus', name:'Customs ES', meta:'Applaudo', pc:'#4a9eff', rgb:'74,158,255', url:'https://fedemon16i.github.io/federico-portfolio/projects/customs.html'},
    {id:'dc', name:'DollarCity', meta:'Applaudo', pc:'#34d399', rgb:'52,211,153', url:'https://fedemon16i.github.io/federico-portfolio/projects/dollarcity.html'}
  ];
  var TIPS = [
    {html:'<b>Tip:</b> Open <b>Projects</b> from the dock — cases keep their own design system.'},
    {html:'<b>Tip:</b> Click a gold node, then <b>Open skill</b> for the ability card.'},
    {html:'<b>Tip:</b> Resume and Contact are volumes too — top bar or dock.'},
    {html:'<b>Presence:</b> Avatar chat comes later. Explore the tree for now.'}
  ];
  var tipI=0;
  setInterval(function(){
    tipI=(tipI+1)%TIPS.length;
    var el=document.getElementById('avatarSpeech');
    if(!el) return;
    el.innerHTML=TIPS[tipI].html+'<div class="hint">Avatar chat · later</div>';
  },7000);
  var stage=document.getElementById('treeStage');
  var nodesEl=document.getElementById('nodes');
  var svg=document.getElementById('treeSvg');
  var tip=document.getElementById('skillTip');
  var selected=null, currentSkill=null, windows={}, zTop=50;
  function layout(){
    if(!stage) return;
    var w=stage.clientWidth,h=stage.clientHeight;
    if(w<40||h<40) return;
    svg.setAttribute('viewBox','0 0 '+w+' '+h);
    svg.innerHTML='';
    var pos={};
    SKILLS.forEach(function(s){pos[s.id]={x:s.x*w,y:s.y*h};});
    EDGES.forEach(function(e){
      var a=pos[e[0]],b=pos[e[1]]; if(!a||!b) return;
      var line=document.createElementNS('http://www.w3.org/2000/svg','line');
      line.setAttribute('x1',a.x);line.setAttribute('y1',a.y);line.setAttribute('x2',b.x);line.setAttribute('y2',b.y);
      line.classList.add('on'); svg.appendChild(line);
    });
    nodesEl.innerHTML='';
    SKILLS.forEach(function(s){
      var n=document.createElement('button');
      n.type='button';
      n.className='node'+(s.core?' core':'')+(selected===s.id?' selected':'');
      n.style.left=(s.x*100)+'%'; n.style.top=(s.y*100)+'%';
      n.innerHTML='<div class="hex"><svg viewBox="0 0 24 24">'+ICONS[s.icon]+'</svg><span class="rank">1/1</span></div><div class="lbl">'+s.t.split(' ')[0]+'</div>';
      n.addEventListener('click',function(){selectSkill(s);});
      nodesEl.appendChild(n);
    });
  }
  function selectSkill(s){
    selected=s.id; currentSkill=s; layout();
    document.getElementById('sdCat').textContent=s.cat;
    document.getElementById('sdTitle').textContent=s.t;
    document.getElementById('sdDesc').textContent=s.d;
    document.getElementById('sdProj').textContent='\u2192 '+s.proj;
    tip.classList.add('on');
  }
  var btn=document.getElementById('openSkillBtn');
  if(btn) btn.addEventListener('click',function(){ if(currentSkill) openSkillWin(currentSkill); });
  var list=document.getElementById('projList');
  if(list) PROJECTS.forEach(function(p){
    var el=document.createElement('div');
    el.className='proj-item'; el.style.setProperty('--pc',p.pc);
    el.innerHTML='<div class="ico">'+p.id.slice(0,2).toUpperCase()+'</div><div><div class="nm">'+p.name+'</div><div class="mt">'+p.meta+'</div></div>';
    el.addEventListener('click',function(){openCase(p);});
    list.appendChild(el);
  });
  function focus(w){zTop++;w.style.zIndex=zTop;}
  function makeWin(id,title,bodyHtml,opts){
    opts=opts||{};
    if(windows[id]){windows[id].style.display='';focus(windows[id]);return windows[id];}
    var w=document.createElement('div');
    w.className='win'; w.dataset.id=id;
    var n=Object.keys(windows).length;
    w.style.left=(opts.left||(90+n*32))+'px';
    w.style.top=(opts.top||(56+n*28))+'px';
    w.style.width=opts.width||'min(560px,92vw)';
    w.style.height=opts.height||'min(420px,68vh)';
    w.innerHTML='<div class="win-bar"><div class="win-dots"><i class="c" data-a="close"></i><i class="n" data-a="min"></i><i class="x" data-a="max"></i></div><div class="win-title"><b>'+title+'</b></div></div><div class="win-body">'+bodyHtml+'</div><div class="win-resize"></div>';
    document.body.appendChild(w); windows[id]=w; focus(w); wire(w,id); return w;
  }
  function wire(w,id){
    var bar=w.querySelector('.win-bar');
    w.addEventListener('mousedown',function(){focus(w);});
    w.querySelectorAll('.win-dots i').forEach(function(dot){
      dot.addEventListener('click',function(e){
        e.stopPropagation();
        var a=dot.getAttribute('data-a');
        if(a==='close'){w.remove();delete windows[id];}
        if(a==='min') w.style.display='none';
        if(a==='max') w.classList.toggle('max');
      });
    });
    var drag=false,sx,sy,ox,oy;
    bar.addEventListener('mousedown',function(e){
      if(w.classList.contains('max')) return;
      if(e.target.closest('.win-dots')) return;
      drag=true;sx=e.clientX;sy=e.clientY;
      var r=w.getBoundingClientRect();ox=r.left;oy=r.top;e.preventDefault();
    });
    window.addEventListener('mousemove',function(e){
      if(!drag) return;
      w.style.left=(ox+e.clientX-sx)+'px'; w.style.top=(oy+e.clientY-sy)+'px';
    });
    window.addEventListener('mouseup',function(){drag=false;});
    var rz=w.querySelector('.win-resize');
    var resizing=false,rsx,rsy,rw,rh;
    rz.addEventListener('mousedown',function(e){
      e.stopPropagation(); resizing=true; rsx=e.clientX; rsy=e.clientY;
      var r=w.getBoundingClientRect(); rw=r.width; rh=r.height;
    });
    window.addEventListener('mousemove',function(e){
      if(!resizing) return;
      w.style.width=Math.max(300,rw+(e.clientX-rsx))+'px';
      w.style.height=Math.max(200,rh+(e.clientY-rsy))+'px';
    });
    window.addEventListener('mouseup',function(){resizing=false;});
  }
  function openSkillWin(s){
    var body='<div class="skill-win-inner"><div class="cat">'+s.cat+'</div><h3>'+s.t+'</h3><p class="desc">'+s.d+'</p><div class="skill-holo"><div class="holo-icon"><svg viewBox="0 0 24 24">'+ICONS[s.icon]+'</svg></div></div><p style="font-family:var(--fm);font-size:11px;color:var(--faint);margin-bottom:10px">Linked case · '+s.proj+'</p><div class="skill-tools">'+s.tools.map(function(t){return '<span>'+t+'</span>';}).join('')+'</div></div>';
    makeWin('skill-'+s.id,s.t+' · skill',body,{width:'min(480px,92vw)',height:'min(480px,70vh)'});
  }
  function openProjectsFolder(){
    var cards=PROJECTS.map(function(p){
      return '<div class="folder-card" data-case="'+p.id+'" style="--pc:'+p.pc+'"><div class="fi">'+p.id.slice(0,2).toUpperCase()+'</div><div class="fn">'+p.name+'</div><div class="fm">'+p.meta+'</div></div>';
    }).join('');
    var body='<div class="ph" style="max-width:none;padding:16px"><div class="k">Folder · projects</div><h3 style="font-size:18px">Case volumes</h3><p>Each case keeps its own design system.</p></div><div class="folder-grid">'+cards+'</div>';
    var w=makeWin('projects','Projects · folder',body,{width:'min(640px,94vw)',height:'min(460px,70vh)'});
    w.querySelectorAll('.folder-card').forEach(function(card){
      card.addEventListener('click',function(){
        var p=PROJECTS.find(function(x){return x.id===card.getAttribute('data-case');});
        if(p) openCase(p);
      });
    });
  }
  function openSkillsOverview(){
    var rows=SKILLS.map(function(s){
      return '<div class="folder-item" data-sk="'+s.id+'" style="--pc:#d97757;margin:0 12px 6px"><div class="ico" style="background:rgba(217,119,87,.25);color:var(--gold)">◈</div><div><div class="nm">'+s.t+'</div><div class="mt">'+s.cat+'</div></div></div>';
    }).join('');
    var body='<div class="ph" style="padding-bottom:8px"><div class="k">Skills matrix</div><h3>Eight abilities</h3><p>Open any node for the OS card.</p></div>'+rows;
    var w=makeWin('skills','Skills · matrix',body,{width:'min(420px,92vw)',height:'min(520px,75vh)'});
    w.querySelectorAll('[data-sk]').forEach(function(row){
      row.addEventListener('click',function(){
        var s=SKILLS.find(function(x){return x.id===row.getAttribute('data-sk');});
        if(s){selectSkill(s);openSkillWin(s);}
      });
    });
  }
  function openResume(){
    makeWin('resume','Resume','<div class="ph"><div class="k">Volume · resume</div><h3>Federico Monroy</h3><p>UX / Product · behavioral analytics · research.</p><a href="https://fedemon16i.github.io/federico-portfolio/resume.html" target="_blank" rel="noopener">Open resume →</a></div>',{width:'min(440px,92vw)',height:'min(320px,55vh)'});
  }
  function openContact(){
    makeWin('contact','Contact','<div class="ph"><div class="k">Volume · contact</div><h3>Get in touch</h3><p>Channels on the main portfolio.</p><a href="https://fedemon16i.github.io/federico-portfolio/contact.html" target="_blank" rel="noopener">Open contact →</a></div>',{width:'min(420px,92vw)',height:'min(300px,50vh)'});
  }
  function openCase(p){
    makeWin('case-'+p.id,p.name+' · case','<div class="ph"><div class="k">Case volume</div><h3>'+p.name+'</h3><p>Design system stays on the portfolio case page.</p><a href="'+p.url+'" target="_blank" rel="noopener">Open case study →</a></div>',{width:'min(480px,92vw)',height:'min(300px,50vh)'});
  }
  function route(id){
    if(id==='tree'){Object.keys(windows).forEach(function(k){windows[k].style.display='none';});return;}
    if(id==='projects') return openProjectsFolder();
    if(id==='skills') return openSkillsOverview();
    if(id==='resume') return openResume();
    if(id==='contact') return openContact();
    var p=PROJECTS.find(function(x){return x.id===id;});
    if(p) openCase(p);
  }
  document.querySelectorAll('[data-win]').forEach(function(el){
    el.addEventListener('click',function(){route(el.getAttribute('data-win'));});
  });
  function tick(){
    var d=new Date();
    var c=document.getElementById('clock');
    if(c) c.textContent=d.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})+' · '+d.toLocaleDateString([],{month:'short',day:'numeric'});
  }
  tick(); setInterval(tick,30000);
  window.addEventListener('resize',layout);
  setTimeout(function(){
    layout();
    selectSkill(SKILLS.find(function(s){return s.id==='hub';})||SKILLS[0]);
  },120);
  setTimeout(function(){
    var b=document.getElementById('boot');
    if(b) b.classList.add('done');
    layout();
  },2400);
})();
