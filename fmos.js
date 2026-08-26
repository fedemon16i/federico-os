/* ═══════════════════════════════════════════════════════════════
   FM.OS v2 — routing, narrative views, and the session monitor.

   The monitor is the argument of this portfolio: a behavioral
   analytics practitioner whose own site doesn't measure anything
   is making a claim, not a demonstration. Everything it records
   stays in memory and dies with the tab.
   ═══════════════════════════════════════════════════════════════ */
(function(){
'use strict';

var PHOTO='https://fedemon16i.github.io/federico-portfolio/home-photos/';
var CASE ='https://fedemon16i.github.io/federico-portfolio/projects/';
var CV    ='https://fedemon16i.github.io/federico-portfolio/assets/Federico_Monroy_CV.pdf';
var LI    ='https://www.linkedin.com/in/federico-monroy-1b6b2ba0/';
var reduced=window.matchMedia('(prefers-reduced-motion:reduce)').matches;

/* ── content ─────────────────────────────────────────────────── */

var LINES=[
  'I find where products <em>break</em>, and measure it.',
  'Pendo, funnels, session replay — <em>measurement as craft</em>.',
  'Design × Product × Analytics — I\'m the <em>bridge</em>.',
  'Not prettier UI. <em>Which field</em> made them quit.',
  'Industrial Design roots. <em>Behavioral analytics</em> by choice.'
];

var PHOTOS=[
  ['IMG_0531.jpeg','Federico at work, product focus'],
  ['IMG_0534.jpeg','Federico designing'],
  ['IMG_0311.jpeg','Federico outdoors, off the map'],
  ['IMG_0532.jpeg','Federico competing'],
  ['IMG_0990.jpeg','Federico with people'],
  ['IMG_0536.jpeg','Federico making something by hand'],
  ['IMG_0530.jpeg','Federico working remotely'],
  ['IMG_0533.jpeg','Federico thinking through a problem']
];

var CASES=[
  {id:'ey',name:'EY Fabric',meta:'Globant × EY · 2023—2026',pc:'#ffe600',file:'ey-fabric.html',
   line:'Marketplace publishers shipped forms asking for serial codes and equipment IDs with no context and no validation. I used Pendo to find <b>which exact fields</b> people abandoned — and that list went straight to the product backlog.'},
  {id:'chek',name:'Chek',meta:'Applaudo · fintech',pc:'#9b6cff',file:'chek.html',
   line:'Rebuilt the design system end to end — onboarding for credit, debit and account opening. The financial-education layer we designed became Banco Ripley\'s <b>Corta y Clara</b>.'},
  {id:'cus',name:'Customs ES',meta:'Applaudo · government',pc:'#e05c4a',file:'customs.html',
   line:'<b>50+ paper processes</b> turned digital, with dual devices at the gate. No prior interface to redesign — the entire flow had to be derived from the operation itself.'},
  {id:'bc',name:'Blockchain 3D',meta:'Globant · now EQUS',pc:'#22d4c8',file:'blockchain.html',
   line:'Figma → Spline → Unity treated as <b>one system</b>, not three handoffs. A 3D interface for connected blockchain flows, phone-first.'},
  {id:'dc',name:'DollarCity',meta:'Applaudo · retail',pc:'#00a650',file:'dollarcity.html',
   line:'Field research at point of sale, turned into a <b>ranked list of actions</b> — not a research deck nobody opens two weeks later.'}
];

var CAPS=[
  {k:'Analytics',t:'Product instrumentation',d:'Every screen becomes a named event I can query later. Taxonomy first, dashboards second.',tools:'Pendo · PostHog · GA4'},
  {k:'Analytics',t:'Funnels & drop-off',d:'Short funnels on the flows that pay. Conversion and volume read together, never apart.',tools:'Pendo · Mixpanel'},
  {k:'Research',t:'Session replay triage',d:'Watch the sessions that failed, then group them by the struggle they share.',tools:'Pendo · OpenReplay'},
  {k:'Research',t:'Synthesis',d:'Interviews and tests compressed into a ranked list of what to fix, with confidence attached.',tools:'Maze · Qualtrics · Claude'},
  {k:'Design',t:'Systems, not screens',d:'Shared tokens across design and code, so the drift stays small enough to fix.',tools:'Figma · GitHub'},
  {k:'AI + Dev',t:'AI impact measurement',d:'Did the AI feature change behaviour, or only sentiment? Baseline before shipping, delta after.',tools:'PostHog · Helicone'}
];

var PHASES=[
  {yr:'2011 — 2018',t:'Industrial Design',
   d:'Sold a car at twenty and moved from Guatemala to Argentina alone. Graduated with a high-fidelity venipuncture simulator built alongside a nursing faculty. Learned to think in whole systems, not screens.'},
  {yr:'2021 — 2023',t:'Product Design',
   d:'Taxsynapse, then Applaudo. Government digital transformation in El Salvador, retail field research for DollarCity, a fintech rebuilt from its design system up.'},
  {yr:'2023 — now',t:'Behavioral Analytics',now:true,
   d:'At EY Fabric a director asked what I actually wanted to own. I said behavioral analytics. The team became Research & Analytics, and I went deep into Pendo — replay, funnels, journeys, spikes.'}
];

var ORDER=['home','projects','skills','resume','contact','system'];
var LABEL={home:'About',projects:'Cases',skills:'Capabilities',resume:'Résumé',contact:'Contact',system:'Design system'};
var PATH ={home:'about',projects:'cases',skills:'capabilities',resume:'resume',contact:'contact',system:'design-system'};

/* ── monitor state ───────────────────────────────────────────── */

var SPARK_BUCKETS=30;

var T={
  start:Date.now(),
  seen:{home:true},
  depth:0,
  events:0,
  dwell:{},                              /* ms hovered, per case */
  opened:[],
  spark:new Array(SPARK_BUCKETS).fill(0) /* interactions per second, rolling */
};

function bump(){ T.events++; T.spark[T.spark.length-1]++; }

function fmtTime(ms){
  var s=Math.floor(ms/1000);
  return s<60 ? s+'s' : Math.floor(s/60)+'m'+(s%60<10?'0':'')+(s%60)+'s';
}

/* Real state, never theatre: this lights up only if a PostHog snippet
   is actually present on the page. Drop the standard posthog.init()
   into index.html and the row flips to "posthog" on its own. */
function source(){
  var p=window.posthog;
  if(p && typeof p.capture==='function') return {live:true,label:'posthog'};
  return {live:false,label:'local'};
}

function renderMonitor(){
  var el, s=source();

  el=document.getElementById('src');
  if(el) el.className='src'+(s.live?' live':'');
  el=document.getElementById('srcLabel');
  if(el) el.textContent=s.label;

  el=document.getElementById('gTime');  if(el) el.textContent=fmtTime(Date.now()-T.start);
  el=document.getElementById('gDepth'); if(el){ el.textContent=T.depth+'%'; el.className=T.depth>75?'hot':''; }
  el=document.getElementById('gSec');   if(el) el.textContent=Object.keys(T.seen).length+'/'+ORDER.length;
  el=document.getElementById('gEvt');   if(el) el.textContent=T.events>999?'999+':T.events;

  /* activity trace */
  el=document.getElementById('spark');
  if(el){
    var peak=Math.max(3,Math.max.apply(null,T.spark));
    if(el.children.length!==SPARK_BUCKETS){
      el.innerHTML=new Array(SPARK_BUCKETS+1).join('<i></i>');
    }
    for(var i=0;i<SPARK_BUCKETS;i++){
      var bar=el.children[i], h=Math.round(T.spark[i]/peak*100);
      bar.style.height=Math.max(1,h)+'%';
      bar.className = h>55 ? 'hot' : '';
    }
  }

  /* attention — top three only, never a growing list */
  el=document.getElementById('att');
  if(el){
    var keys=Object.keys(T.dwell);
    if(!keys.length){
      el.innerHTML='<p class="att-none">No dwell recorded</p>';
    }else{
      var max=Math.max.apply(null,keys.map(function(k){return T.dwell[k];}));
      el.innerHTML=keys.sort(function(a,b){return T.dwell[b]-T.dwell[a];}).slice(0,3).map(function(k){
        var c=CASES.filter(function(x){return x.id===k;})[0];
        return '<div class="aw"><div class="aw-r"><span>'+(c?c.name:k)+'</span>'+
               '<b>'+(T.dwell[k]/1000).toFixed(1)+'s</b></div>'+
               '<i class="aw-b"><em style="width:'+Math.round(T.dwell[k]/max*100)+'%"></em></i></div>';
      }).join('');
    }
  }

  el=document.getElementById('verdict');
  if(el) el.innerHTML=verdict();
}

/* the read-back — one line, and the reason the panel exists */
function verdict(){
  var secs=(Date.now()-T.start)/1000;
  var seen=Object.keys(T.seen).length;
  var top=null,topMs=0;
  Object.keys(T.dwell).forEach(function(k){ if(T.dwell[k]>topMs){topMs=T.dwell[k];top=k;} });

  if(T.opened.length){
    var c=CASES.filter(function(x){return x.id===T.opened[T.opened.length-1];})[0];
    return 'Opened <b>'+(c?c.name:'a case')+'</b>. That\'s the conversion event — everything above it was the funnel.';
  }
  if(top&&topMs>2200){
    var cc=CASES.filter(function(x){return x.id===top;})[0];
    return '<b>'+(cc?cc.name:'One case')+'</b> held you '+(topMs/1000).toFixed(1)+'s with no click. In a product that reads as hesitation.';
  }
  if(T.depth>78)          return 'Read to the bottom. Roughly one in five do.';
  if(seen>=3)             return seen+' sections in '+fmtTime(Date.now()-T.start)+'. Exploring, not scanning.';
  if(secs>34&&T.depth<22) return 'Half a minute, barely scrolled. Either the opening isn\'t landing, or you\'re reading closely.';
  if(T.depth>18)          return 'On step '+(T.depth>60?'three':'two')+' of a four-step page.';
  return 'Idle. The funnel starts when you scroll.';
}

/* ── views ───────────────────────────────────────────────────── */

function viewHome(){
  return ''+
  '<div class="spine">'+

    '<section class="beat" data-beat>'+
      '<p class="beat-n">01 — <em>Who</em></p>'+
      '<div class="who">'+
        '<div class="portrait">'+
          '<img src="'+PHOTO+'IMG_0531.jpeg" alt="Portrait of Federico Monroy"/>'+
          '<span class="p-tag">Córdoba, AR</span>'+
        '</div>'+
        '<div>'+
          '<h1>Federico Monroy</h1>'+
          '<p class="oneliner" id="oneliner"></p>'+
        '</div>'+
      '</div>'+
      /* full-width stat band — inside the narrow right column these
         collapsed to one per row on phones, and a ruled band reads
         more like the monitor anyway */
      '<div class="facts">'+
        '<div class="fact"><b>5+ yrs</b><span>Digital product</span></div>'+
        '<div class="fact"><b>3</b><span>Countries</span></div>'+
        '<div class="fact"><b>Pendo</b><span>Core tool</span></div>'+
        '<div class="fact"><b>Remote</b><span>LATAM · contractor</span></div>'+
      '</div>'+
      '<p>Guatemalan, based in Córdoba. Industrial Designer by training, product designer '+
        'by trade, <strong>behavioral analytics by choice</strong>. I work where design and '+
        'product are the same conversation — not two departments handing files across a wall.</p>'+
      '<div class="strip">'+PHOTOS.map(function(p,i){
        return '<button type="button" data-photo="'+i+'" aria-label="Enlarge photo: '+p[1]+'">'+
               '<img src="'+PHOTO+p[0]+'" alt="'+p[1]+'"/></button>';
      }).join('')+'</div>'+
    '</section>'+

    '<section class="beat" data-beat>'+
      '<p class="beat-n">02 — <em>The turn</em></p>'+
      '<h2>How an industrial designer ended up living inside Pendo</h2>'+
      '<div class="turn">'+PHASES.map(function(p){
        return '<div class="phase'+(p.now?' now':'')+'">'+
          '<p class="yr">'+p.yr+'</p><h3>'+p.t+'</h3><p>'+p.d+'</p></div>';
      }).join('')+'</div>'+
      '<blockquote>I\'m not the strongest UX designer in Figma. I\'m the one who gets into '+
        'Pendo, finds where the product breaks, and measures it.'+
        '<cite>The reason this portfolio exists</cite></blockquote>'+
    '</section>'+

    '<section class="beat" data-beat>'+
      '<p class="beat-n">03 — <em>Evidence</em></p>'+
      '<h2>Five cases, each with the problem stated first</h2>'+
      '<p>Not a catalogue. Every one names what was broken, what I did about it, and the '+
        'number that says whether it worked.</p>'+
      '<div class="cases">'+CASES.map(function(c){
        return '<button class="case" type="button" data-case="'+c.id+'" style="--pc:'+c.pc+'">'+
          '<i class="c-bar" aria-hidden="true"></i>'+
          '<span>'+
            '<span class="c-head"><span class="c-name">'+c.name+'</span>'+
            '<span class="c-meta">'+c.meta+'</span></span>'+
            '<span class="c-line">'+c.line+'</span>'+
          '</span>'+
          '<span class="c-go">OPEN →</span>'+
        '</button>';
      }).join('')+'</div>'+
    '</section>'+

    '<section class="beat" data-beat>'+
      '<p class="beat-n">04 — <em>How</em></p>'+
      '<h2>What I actually do on a Tuesday</h2>'+
      '<div class="caps">'+CAPS.map(function(c){
        return '<div class="cap"><p class="k">'+c.k+'</p><h3>'+c.t+'</h3><p>'+c.d+'</p>'+
               '<p class="tools">'+c.tools+'</p></div>';
      }).join('')+'</div>'+
    '</section>'+

  '</div>';
}

function viewStub(r){
  return '<div class="spine"><section class="beat" data-beat>'+
    '<p class="beat-n">0'+(ORDER.indexOf(r)+1)+' — <em>'+LABEL[r]+'</em></p>'+
    '<h2>'+LABEL[r]+'</h2>'+
    '<p>This route still points at the live portfolio while the v2 shell is built out. '+
      'The home narrative and the monitor came first — they decide whether the rest of '+
      'this redesign is worth building.</p>'+
    (r==='resume'
      ? '<p><a class="tbtn" href="'+CV+'" target="_blank" rel="noopener">OPEN CV (PDF)</a></p>'
      : '')+
    (r==='contact'
      ? '<p><a class="tbtn" href="'+LI+'" target="_blank" rel="noopener">LINKEDIN</a></p>'
      : '')+
    '</section></div>';
}

/* ── routing + the e-ink refresh ─────────────────────────────── */

var stage=document.getElementById('stage');
var crumb=document.getElementById('crumb');
var main =document.getElementById('main');
var current='home';

function paint(r){
  stage.innerHTML = r==='home' ? viewHome() : viewStub(r);
  crumb.innerHTML='fm://<b>'+PATH[r]+'</b>';
  document.title='FM.OS — '+LABEL[r];
  if(history.replaceState) history.replaceState(null,'','#/'+PATH[r]);
  main.scrollTop=0;
  T.depth=0;
  if(r==='home') startLines();
  bindStage();
  syncNav(r);
  renderMonitor();
}

function go(r){
  if(r===current||!LABEL[r]) return;
  current=r;
  T.seen[r]=true;
  bump();

  if(reduced){ paint(r); return; }
  /* e-paper page turn: the panel inverts, settles, and the new page is there */
  document.documentElement.classList.add('eink-refresh');
  setTimeout(function(){
    paint(r);
    setTimeout(function(){ document.documentElement.classList.remove('eink-refresh'); },70);
  },80);
}

function syncNav(r){
  Array.prototype.forEach.call(document.querySelectorAll('.nav,#drawer button'),function(b){
    b.setAttribute('aria-current', b.dataset.route===r ? 'true':'false');
  });
}

/* ── the rotating one-liner ──────────────────────────────────── */

var lineTimer=null,lineIdx=0,lineGen=0;
function startLines(){
  var el=document.getElementById('oneliner');
  if(!el) return;
  clearTimeout(lineTimer); lineGen++;
  var gen=lineGen;
  (function show(){
    if(gen!==lineGen) return;
    el.innerHTML=LINES[lineIdx]+'<i class="tick" aria-hidden="true"></i>';
    lineIdx=(lineIdx+1)%LINES.length;
    lineTimer=setTimeout(show, reduced?9000:4600);
  })();
}

/* ── stage bindings (rebound on every paint) ─────────────────── */

function bindStage(){
  Array.prototype.forEach.call(stage.querySelectorAll('[data-case]'),function(btn){
    var id=btn.dataset.case, enter=0, leaveTimer=null;

    btn.addEventListener('pointerenter',function(){
      clearTimeout(leaveTimer);
      enter=Date.now();
      bump();
    });
    btn.addEventListener('pointerleave',function(){
      /* 70ms debounce — a row that grows on hover can fire a false
         leave at its own moving edge */
      leaveTimer=setTimeout(function(){
        if(!enter) return;
        T.dwell[id]=(T.dwell[id]||0)+(Date.now()-enter);
        enter=0;
        renderMonitor();
      },70);
    });
    btn.addEventListener('click',function(){
      var c=CASES.filter(function(x){return x.id===id;})[0];
      if(!c) return;
      T.opened.push(id);
      bump();
      renderMonitor();
      window.open(CASE+c.file,'_blank','noopener');
    });
  });

  Array.prototype.forEach.call(stage.querySelectorAll('[data-photo]'),function(btn){
    btn.addEventListener('click',function(){ openLb(+btn.dataset.photo); });
  });

  /* beats light up as they enter — the spine tracks where you are */
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){ e.target.classList.toggle('on', e.isIntersecting); });
    },{root:main,rootMargin:'-42% 0px -42% 0px'});
    Array.prototype.forEach.call(stage.querySelectorAll('[data-beat]'),function(b){ io.observe(b); });
  }
}

/* ── lightbox ────────────────────────────────────────────────── */

var lb=document.getElementById('lb'), lbImg=document.getElementById('lbImg');
function openLb(i){
  lbImg.src=PHOTO+PHOTOS[i][0];
  lbImg.alt=PHOTOS[i][1];
  lb.hidden=false;
  bump();
  document.getElementById('lbX').focus();
}
document.getElementById('lbX').addEventListener('click',function(){ lb.hidden=true; });
lb.addEventListener('click',function(e){ if(e.target===lb) lb.hidden=true; });

/* ── chrome ──────────────────────────────────────────────────── */

document.addEventListener('click',function(e){
  var t=e.target.closest?e.target.closest('[data-route]'):null;
  if(!t) return;
  go(t.dataset.route);
  var d=document.getElementById('drawer');
  if(d){ d.hidden=true; document.getElementById('menuBtn').setAttribute('aria-expanded','false'); }
});

document.getElementById('themeBtn').addEventListener('click',function(){
  var next=(document.documentElement.getAttribute('data-theme')||'dark')==='dark'?'light':'dark';
  bump();
  function set(){ document.documentElement.setAttribute('data-theme',next); }
  if(reduced){ set(); }
  else{
    document.documentElement.classList.add('eink-refresh');
    setTimeout(function(){
      set();
      setTimeout(function(){ document.documentElement.classList.remove('eink-refresh'); },70);
    },80);
  }
  try{ localStorage.setItem('fmos-theme',next); }catch(err){}
});
try{ var saved=localStorage.getItem('fmos-theme'); if(saved) document.documentElement.setAttribute('data-theme',saved); }catch(err){}

/* mobile drawer — deliberately outside any pointer:fine guard, so it
   works on touch (this has regressed twice in the sibling repo) */
var drawer=document.getElementById('drawer'), menuBtn=document.getElementById('menuBtn');
drawer.innerHTML=ORDER.map(function(r,i){
  return '<button type="button" data-route="'+r+'"><span class="idx">0'+(i+1)+'</span>'+LABEL[r]+'</button>';
}).join('');
menuBtn.addEventListener('click',function(){
  var open=drawer.hidden;
  drawer.hidden=!open;
  menuBtn.setAttribute('aria-expanded',open?'true':'false');
});

/* the monitor collapses to a bottom sheet under 980px */
document.getElementById('monHead').addEventListener('click',function(){
  if(window.innerWidth<=980) document.getElementById('panel').classList.toggle('open');
});

document.addEventListener('keydown',function(e){
  if(e.key==='Escape'){
    lb.hidden=true; drawer.hidden=true;
    menuBtn.setAttribute('aria-expanded','false');
  }
  if(e.altKey&&e.key==='ArrowRight') go(ORDER[(ORDER.indexOf(current)+1)%ORDER.length]);
  if(e.altKey&&e.key==='ArrowLeft')  go(ORDER[(ORDER.indexOf(current)-1+ORDER.length)%ORDER.length]);
});

/* ── signal collection ───────────────────────────────────────── */

main.addEventListener('scroll',function(){
  var h=main.scrollHeight-main.clientHeight;
  if(h<=0) return;
  var d=Math.min(100,Math.round(main.scrollTop/h*100));
  if(d>T.depth) T.depth=d;
  bump();
},{passive:true});

/* ── boot ────────────────────────────────────────────────────── */

/* deep link support: /#/cases lands on that section */
(function(){
  var h=(location.hash||'').replace('#/','');
  for(var r in PATH){ if(PATH[r]===h){ current=r; T.seen[r]=true; break; } }
})();

paint(current);

setInterval(function(){
  T.spark.shift();
  T.spark.push(0);
  renderMonitor();
},1000);

})();
