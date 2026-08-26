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

/* Tool-agnostic on purpose (see REFERENCES.md, "the one hard rule"): the
   claim is decisions from measured outcomes, not fluency in one vendor's
   dashboard. Pendo, PostHog, Mixpanel — whatever the contract already runs. */
var LINES=[
  'I find where products <em>break</em>, and measure it.',
  'Funnels, replay, whatever the stack already runs — <em>measurement as craft</em>.',
  'Design × Product × Analytics — I\'m the <em>bridge</em>.',
  'Not prettier UI. <em>Which field</em> made them quit.',
  'Decisions from evidence, not from the loudest opinion in the room.'
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

/* Each case gets a small line-art scene instead of a photo — same wireframe
   language as the live portfolio's demos (process shown, nothing invented).
   --pc (set on the button below) tints the one accent stroke in each scene. */
var CASE_SVG={
  ey:'<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="9" width="48" height="8" rx="1"/><rect x="8" y="24" width="48" height="8" rx="1" stroke="var(--ac)" stroke-dasharray="3 3" class="pc-mark"/><circle class="pc-mark" cx="52" cy="28" r="2.6" fill="var(--ac)" stroke="none"/><rect x="8" y="39" width="48" height="8" rx="1"/><rect x="8" y="53" width="18" height="5" rx="1" fill="currentColor" stroke="none" opacity=".45"/></svg>',
  chek:'<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><line x1="14" y1="32" x2="50" y2="32"/><circle cx="14" cy="32" r="5"/><circle class="pc-mark" cx="32" cy="32" r="7" fill="var(--pc)" stroke="var(--pc)"/><circle cx="50" cy="32" r="5"/></svg>',
  cus:'<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 10h14l6 6v26H8z"/><path d="M22 10v6h6"/><path d="M31 32h6" stroke-dasharray="2 3"/><rect x="41" y="14" width="17" height="24" rx="2"/><path class="pc-mark" stroke="var(--pc)" d="M45.5 25.5l3 3 6-7"/></svg>',
  bc:'<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><line x1="16" y1="46" x2="48" y2="46"/><line x1="16" y1="46" x2="32" y2="16"/><line x1="48" y1="46" x2="32" y2="16"/><circle cx="16" cy="46" r="4.5"/><circle cx="48" cy="46" r="4.5"/><circle class="pc-mark" cx="32" cy="16" r="6" fill="var(--pc)" stroke="var(--pc)"/></svg>',
  dc:'<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="10" width="9" height="28"/><rect x="27" y="10" width="9" height="28"/><rect x="46" y="10" width="9" height="28"/><path d="M12 46q11 8 22 0t18 0" stroke-dasharray="2 3"/><circle class="pc-mark" cx="12" cy="46" r="3" fill="var(--pc)" stroke="none"/></svg>'
};

/* role / industry / era — the amitux.in card structure (see REFERENCES.md):
   what he did, the domain, how long, before any prose. Eras are real
   employment windows already established in the bio, never a fabricated
   month-count — no metric gets invented for the sake of looking precise. */
var CASES=[
  {id:'ey',name:'EY Fabric',role:'Behavioral analytics',industry:'Enterprise marketplace',era:'Globant × EY · 2023–2026',
   pc:'#ffe600',file:'ey-fabric.html',
   line:'Marketplace publishers shipped forms asking for serial codes and equipment IDs with no context and no validation. Instrumented the flow to find <b>which exact fields</b> people abandoned — and that list went straight to the product backlog.'},
  {id:'chek',name:'Chek',role:'Design system rebuild',industry:'Fintech',era:'Applaudo · 2021–2023',
   pc:'#9b6cff',file:'chek.html',
   line:'Rebuilt the design system end to end — onboarding for credit, debit and account opening. The financial-education layer we designed became Banco Ripley\'s <b>Corta y Clara</b>.'},
  {id:'cus',name:'Customs ES',role:'Digital transformation',industry:'Government',era:'Applaudo · 2021–2023',
   pc:'#e05c4a',file:'customs.html',
   line:'<b>50+ paper processes</b> turned digital, with dual devices at the gate. No prior interface to redesign — the entire flow had to be derived from the operation itself.'},
  {id:'bc',name:'Blockchain 3D',role:'3D interface design',industry:'Blockchain / Web3',era:'Globant · 2023, now EQUS',
   pc:'#22d4c8',file:'blockchain.html',
   line:'Figma → Spline → Unity treated as <b>one system</b>, not three handoffs. A 3D interface for connected blockchain flows, phone-first.'},
  {id:'dc',name:'DollarCity',role:'Field research',industry:'Retail',era:'Applaudo · 2021–2023',
   pc:'#00a650',file:'dollarcity.html',
   line:'Field research at point of sale, turned into a <b>ranked list of actions</b> — not a research deck nobody opens two weeks later.'}
];

/* tool mentions spread across the discipline, on purpose — Pendo is real and
   deep (see EY Fabric above) but it is one tool among several, not the story */
var CAPS=[
  {k:'Analytics',t:'Product instrumentation',d:'Every screen becomes a named event I can query later. Taxonomy first, dashboards second.',tools:'PostHog · GA4'},
  {k:'Analytics',t:'Funnels & drop-off',d:'Short funnels on the flows that pay. Conversion and volume read together, never apart.',tools:'Pendo · Mixpanel'},
  {k:'Research',t:'Session replay triage',d:'Watch the sessions that failed, then group them by the struggle they share.',tools:'OpenReplay · Clarity'},
  {k:'Research',t:'Synthesis',d:'Interviews and tests compressed into a ranked list of what to fix, with confidence attached.',tools:'Maze · Qualtrics · Claude'},
  {k:'Design',t:'Systems, not screens',d:'Shared tokens across design and code, so the drift stays small enough to fix.',tools:'Figma · GitHub'},
  {k:'AI + Dev',t:'AI impact measurement',d:'Did the AI feature change behaviour, or only sentiment? Baseline before shipping, delta after.',tools:'PostHog · Helicone'}
];

/* ── shortcuts: real destinations, real marks — the literal desktop-icon
   gesture, scaled down to fit a rail instead of a full desktop grid ── */
var ICONS={
  pdf:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/><path d="M9.3 13.3h1.3a1 1 0 010 2H9.3v-2 2.4"/></svg>',
  mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M3.5 6.2l8.5 6.6 8.5-6.6"/></svg>',
  link:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M10 14L20 4"/><path d="M14 4h6v6"/><path d="M20 13v6a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h6"/></svg>',
  linkedin:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.24h4V23h-4V8.24zM8.5 8.24h3.83v2.02h.05c.53-1 1.85-2.06 3.8-2.06 4.06 0 4.81 2.67 4.81 6.15V23h-4v-6.63c0-1.58-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.5V23h-4V8.24z"/></svg>',
  github:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5A11.5 11.5 0 000 12.1c0 5.14 3.29 9.5 7.86 11.04.57.11.78-.25.78-.56 0-.27-.01-1.17-.02-2.13-3.2.7-3.88-1.38-3.88-1.38-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.78 2.7 1.27 3.36.97.1-.75.4-1.27.73-1.56-2.55-.29-5.24-1.29-5.24-5.75 0-1.27.45-2.3 1.19-3.11-.12-.29-.52-1.48.11-3.08 0 0 .97-.31 3.18 1.19a10.9 10.9 0 015.79 0c2.2-1.5 3.17-1.19 3.17-1.19.64 1.6.24 2.79.12 3.08.74.81 1.18 1.84 1.18 3.11 0 4.47-2.7 5.45-5.27 5.74.42.36.78 1.08.78 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.79.56A11.5 11.5 0 0024 12.1 11.5 11.5 0 0012 .5z"/></svg>'
};
var SHORTCUTS=[
  {label:'Résumé (PDF)',href:CV,ext:true,icon:'pdf'},
  {label:'LinkedIn',href:LI,ext:true,icon:'linkedin'},
  {label:'Email',href:'mailto:fedemon16i@gmail.com',ext:false,icon:'mail'},
  {label:'GitHub',href:'https://github.com/fedemon16i',ext:true,icon:'github'},
  {label:'Live portfolio',href:'https://fedemon16i.github.io/federico-portfolio/',ext:true,icon:'link'}
];

var PHASES=[
  {yr:'2011 — 2018',t:'Industrial Design',
   d:'Sold a car at twenty and moved from Guatemala to Argentina alone. Graduated with a high-fidelity venipuncture simulator built alongside a nursing faculty. Learned to think in whole systems, not screens.'},
  {yr:'2021 — 2023',t:'Product Design',
   d:'Taxsynapse, then Applaudo. Government digital transformation in El Salvador, retail field research for DollarCity, a fintech rebuilt from its design system up.'},
  {yr:'2023 — now',t:'Behavioral Analytics',now:true,
   d:'At EY Fabric a director asked what I actually wanted to own. I said behavioral analytics. The team became Research & Analytics, and I went deep into instrumenting product — replay, funnels, journeys, spikes — whatever tool the account already ran.'}
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

/* ── PostHog bridge ──────────────────────────────────────────────
   Event names follow the [object]_[action]_[context] taxonomy from
   federico-skills. Everything is fire-and-forget: if the snippet is
   absent the calls are no-ops and the monitor simply reads "local".

   The funnel these build, in PostHog:
     $pageview → scroll_reached(50) → case_hovered → case_opened     */
function track(event,props){
  try{
    if(window.posthog && typeof window.posthog.capture==='function'){
      window.posthog.capture(event,props||{});
    }
  }catch(err){/* analytics must never break the page */}
}

/* hover is noisy — one event per case per session, and only once the
   dwell is long enough to mean something */
var hoverSent={};
var depthSent={};

function fmtTime(ms){
  var s=Math.floor(ms/1000);
  return s<60 ? s+'s' : Math.floor(s/60)+'m'+(s%60<10?'0':'')+(s%60)+'s';
}

/* Real state, never theatre: this lights up only if a PostHog snippet
   is actually present on the page. Drop the standard posthog.init()
   into index.html and the row flips to "live" on its own. The word
   "PostHog" already sits in the header badge — the status label says
   connection state instead, so the two don't just repeat each other. */
function source(){
  var p=window.posthog;
  if(!p || typeof p.capture!=='function') return {live:false,label:'local'};
  /* the snippet installs a queueing stub instantly; __loaded means the real
     library arrived and events are actually leaving the browser */
  return p.__loaded ? {live:true,label:'live'} : {live:false,label:'linking'};
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
        '<div class="fact"><b>Evidence</b><span>Not opinion</span></div>'+
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
      '<h2>How an industrial designer became the one who measures whether it worked</h2>'+
      '<div class="turn">'+PHASES.map(function(p){
        return '<div class="phase'+(p.now?' now':'')+'">'+
          '<p class="yr">'+p.yr+'</p><h3>'+p.t+'</h3><p>'+p.d+'</p></div>';
      }).join('')+'</div>'+
      '<blockquote>I\'m not the strongest UX designer in Figma. I\'m the one who instruments '+
        'the product, finds where it breaks, and measures whether the fix actually worked.'+
        '<cite>The reason this portfolio exists</cite></blockquote>'+
    '</section>'+

    '<section class="beat" data-beat>'+
      '<p class="beat-n">03 — <em>Evidence</em></p>'+
      '<h2>Five cases, each with the problem stated first</h2>'+
      '<p>Not a catalogue. Every one names what was broken, what I did about it, and the '+
        'number that says whether it worked.</p>'+
      '<div class="cases">'+CASES.map(function(c){
        return '<button class="case" type="button" data-case="'+c.id+'" style="--pc:'+c.pc+'">'+
          '<span class="c-prev-wrap" aria-hidden="true"><span class="c-prev">'+(CASE_SVG[c.id]||'')+'</span></span>'+
          '<span class="c-body">'+
            '<span class="c-facts">'+
              '<span class="c-role">'+c.role+'</span>'+
              '<span class="c-fact-row"><span class="c-industry">'+c.industry+'</span>'+
              '<span class="c-era">'+c.era+'</span></span>'+
            '</span>'+
            '<span class="c-name">'+c.name+'</span>'+
            '<span class="c-line">'+c.line+'</span>'+
            '<span class="c-go">VIEW IN WINDOW →</span>'+
          '</span>'+
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

var sectionEnteredAt=Date.now();

function go(r){
  if(r===current||!LABEL[r]) return;
  track('section_viewed',{
    section:r, from:current,
    seconds_on_previous:Math.round((Date.now()-sectionEnteredAt)/1000),
    previous_depth:T.depth
  });
  sectionEnteredAt=Date.now();
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
        /* hesitation signal: dwelled on a case and did not click */
        if(T.dwell[id]>800 && !hoverSent[id]){
          hoverSent[id]=true;
          track('case_hovered',{case_id:id,dwell_ms:Math.round(T.dwell[id])});
        }
        renderMonitor();
      },70);
    });
    btn.addEventListener('click',function(){
      var c=CASES.filter(function(x){return x.id===id;})[0];
      if(!c) return;
      T.opened.push(id);
      bump();
      /* the conversion event of this page */
      track('case_opened',{
        case_id:id, case_name:c.name,
        dwell_ms:Math.round(T.dwell[id]||0),
        seconds_on_page:Math.round((Date.now()-T.start)/1000)
      });
      renderMonitor();
      openWindow(CASE+c.file, c.name, 'fm://cases/'+id);
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
  track('photo_opened',{photo:PHOTOS[i][0]});
  document.getElementById('lbX').focus();
}
document.getElementById('lbX').addEventListener('click',function(){ lb.hidden=true; });
lb.addEventListener('click',function(e){ if(e.target===lb) lb.hidden=true; });

/* ── shortcuts: the desktop-icon gesture, scaled to a rail ──────
   Real destinations, real marks (LinkedIn, GitHub) or plain functional
   glyphs (mail, doc, external-link) — never a generic stand-in icon for
   a named brand, per the portfolio's own rule. */
(function renderShortcuts(){
  var host=document.getElementById('railShortcuts');
  if(!host) return;
  host.insertAdjacentHTML('beforeend', SHORTCUTS.map(function(s){
    return '<a class="sc" href="'+s.href+'" '+(s.ext?'target="_blank" rel="noopener"':'')+
      ' data-shortcut="'+s.label+'"><span class="sc-ico" aria-hidden="true">'+ICONS[s.icon]+'</span>'+s.label+'</a>';
  }).join(''));
})();

document.addEventListener('click',function(e){
  var t=e.target.closest?e.target.closest('[data-shortcut]'):null;
  if(!t) return;
  track('shortcut_clicked',{label:t.dataset.shortcut});
  if(!drawer.hidden){ drawer.hidden=true; menuBtn.setAttribute('aria-expanded','false'); }
});

/* ── floating window — cases open here instead of a new tab. This is
   the literal OS gesture: a titled, draggable window over the desktop,
   not a page navigation. Same case pages, same design systems, untouched. */
var wf=document.getElementById('winfloat'), wfBox=document.getElementById('wfBox'),
    wfBar=document.getElementById('wfBar'), wfFrame=document.getElementById('wfFrame');

function openWindow(url,title,path){
  document.getElementById('wfTitle').textContent=title;
  document.getElementById('wfPath').textContent=path;
  wfFrame.src=url;
  wfBox.classList.remove('maximized');
  wfBox.style.left=''; wfBox.style.top=''; wfBox.style.transform='';
  wf.hidden=false;
  document.getElementById('wfClose').focus();
}
function closeWindow(){
  wf.hidden=true;
  wfFrame.src='about:blank'; /* stop whatever the case page was doing */
}
document.getElementById('wfClose').addEventListener('click',closeWindow);
document.getElementById('wfBackdrop').addEventListener('click',closeWindow);
document.getElementById('wfMax').addEventListener('click',function(){
  wfBox.classList.toggle('maximized');
});

/* drag by the bar — plain pointer events, no pointer:fine guard, so it
   also works by touch (that guard has broken touch twice in the sibling repo) */
var dragging=false, dragDX=0, dragDY=0;
wfBar.addEventListener('pointerdown',function(e){
  if(e.target.closest('.wf-dots')) return;
  var r=wfBox.getBoundingClientRect();
  wfBox.style.left=r.left+'px'; wfBox.style.top=r.top+'px'; wfBox.style.transform='none';
  dragDX=e.clientX-r.left; dragDY=e.clientY-r.top;
  dragging=true;
  wfBar.classList.add('dragging');
  wfBar.setPointerCapture(e.pointerId);
});
wfBar.addEventListener('pointermove',function(e){
  if(!dragging) return;
  wfBox.style.left=Math.max(0,Math.min(window.innerWidth-80,e.clientX-dragDX))+'px';
  wfBox.style.top =Math.max(0,Math.min(window.innerHeight-40,e.clientY-dragDY))+'px';
});
function stopDrag(){ dragging=false; wfBar.classList.remove('dragging'); }
wfBar.addEventListener('pointerup',stopDrag);
wfBar.addEventListener('pointercancel',stopDrag);

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
  track('theme_inverted',{to:next});
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
}).join('')+SHORTCUTS.map(function(s){
  return '<a class="sc" href="'+s.href+'" '+(s.ext?'target="_blank" rel="noopener"':'')+
    ' data-shortcut="'+s.label+'"><span class="sc-ico" aria-hidden="true">'+ICONS[s.icon]+'</span>'+s.label+'</a>';
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
    lb.hidden=true; drawer.hidden=true; closeWindow();
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
  /* milestone events, once each — a continuous scroll stream is noise */
  [25,50,75,100].forEach(function(m){
    var key=current+':'+m;
    if(T.depth>=m && !depthSent[key]){
      depthSent[key]=true;
      track('scroll_reached',{depth:m,section:current});
    }
  });
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
