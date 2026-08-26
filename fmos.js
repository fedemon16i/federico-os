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
var CASE ='projects/';
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

/* the hologram Q&A was removed on request — the avatar space stays open
   for later (see REFERENCES.md), without the canned-answer interaction. */

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

/* the case preview — one shared "app window" mockup (title bar, sidebar,
   content rows, a cursor that travels to the flagged row), reused across
   all five and recoloured via --pc. Closer to federico-portfolio's real
   pcard mockups than a wireframe icon, still E-Ink: no colour except the
   one accent line and the cursor. The wordmark is either a verified real
   mark (EY, DollarCity — copied from the live portfolio's own LOGO/badge
   svg, not redrawn from memory) or a plain styled text lockup, same rule
   used everywhere else this session for third-party brands. */
function caseWindowMock(c){
  var wm = c.wm==='ey'
    ? '<svg class="c-wm-ey" viewBox="0 0 30 22"><polygon points="1,4 27,0 27,4 1,8" fill="var(--pc)"/><text x="1" y="20" font-family="Arial,sans-serif" font-weight="800" font-size="17" fill="var(--pc)">EY</text></svg>'
    : c.wm==='dc'
    ? '<svg class="c-wm-dc" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="var(--pc)"/><text x="12" y="17" text-anchor="middle" font-family="Arial,sans-serif" font-weight="800" font-size="13" fill="#0a0b0a">D</text></svg>'
    : '<span class="c-wm-text">'+c.wm+'</span>';
  return '<div class="c-winmock">'+
    '<div class="c-winmock-bar"><i></i><i></i><i></i></div>'+
    '<div class="c-winmock-body">'+
      '<div class="c-winmock-side"><i></i><i class="hl"></i><i></i></div>'+
      '<div class="c-winmock-main">'+
        '<div class="c-winmock-row wide"></div>'+
        '<div class="c-winmock-row flag"></div>'+
        '<div class="c-winmock-row"></div>'+
      '</div>'+
      '<span class="c-cursor" aria-hidden="true"></span>'+
    '</div>'+
    '<span class="c-wm">'+wm+'</span>'+
  '</div>';
}

/* role / industry / era — the amitux.in card structure (see REFERENCES.md):
   what he did, the domain, how long, before any prose. Eras are real
   employment windows already established in the bio, never a fabricated
   month-count — no metric gets invented for the sake of looking precise.
   hits: 2 real bullet facts, no invented ones. stack: LOGO keys only —
   every chip is a verified real mark, so a project gets fewer chips
   rather than a fabricated one (Blockchain's Spline/Unity aren't in LOGO,
   so it shows Figma alone plus the pipeline named in prose instead). */
var CASES=[
  {id:'ey',name:'EY Fabric',role:'Behavioral analytics',industry:'Enterprise marketplace',era:'Globant × EY · 2023–2026',
   pc:'#ffe600',file:'ey-fabric.html',wm:'ey',stack:['pendo','qualtrics','claude'],
   hits:['Instrumented the marketplace in Pendo','Flagged the exact fields losing users'],
   line:'Marketplace publishers shipped forms asking for serial codes and equipment IDs with no context and no validation. Instrumented the flow to find <b>which exact fields</b> people abandoned — and that list went straight to the product backlog.'},
  {id:'chek',name:'Chek',role:'Design system rebuild',industry:'Fintech',era:'Applaudo · 2021–2023',
   pc:'#9b6cff',file:'chek.html',wm:'cheK',stack:['figma','pendo','mixpanel'],
   hits:['Design system rebuilt end to end','Onboarding redesigned for card + account'],
   line:'Rebuilt the design system end to end — onboarding for credit, debit and account opening. The financial-education layer we designed became Banco Ripley\'s <b>Corta y Clara</b>.'},
  {id:'cus',name:'Customs ES',role:'Digital transformation',industry:'Government',era:'Applaudo · 2021–2023',
   pc:'#e05c4a',file:'customs.html',wm:'Customs ES',stack:['replit','github','factory'],
   hits:['50+ paper processes digitized','Dual-device flow built for the gate'],
   line:'<b>50+ paper processes</b> turned digital, with dual devices at the gate. No prior interface to redesign — the entire flow had to be derived from the operation itself.'},
  {id:'bc',name:'Blockchain 3D',role:'3D interface design',industry:'Blockchain / Web3',era:'Globant · 2023, now EQUS',
   pc:'#22d4c8',file:'blockchain.html',wm:'EQUS',stack:['figma'],
   hits:['Figma → Spline → Unity, one pipeline','Phone-first 3D interface'],
   line:'Figma → Spline → Unity treated as <b>one system</b>, not three handoffs. A 3D interface for connected blockchain flows, phone-first.'},
  {id:'dc',name:'DollarCity',role:'Field research',industry:'Retail',era:'Applaudo · 2021–2023',
   pc:'#00a650',file:'dollarcity.html',wm:'dc',stack:['maze','ow','claude'],
   hits:['Field research at point of sale','Ranked backlog, not a research deck'],
   line:'Field research at point of sale, turned into a <b>ranked list of actions</b> — not a research deck nobody opens two weeks later.'}
];

/* ── Capabilities route — video-game skill cards ──────────────────
   Ported verbatim from the live portfolio's own tool-logo library
   (index.html LOGO map) — real marks, real brand colours, not redrawn.
   Content (title/description/tools/linked project) is the actual set
   of 8 cards already live on the portfolio home, not invented for FM.OS. */
var LOGO={
  pendo:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#FF4A7D"/><text x="12" y="16" text-anchor="middle" font-size="11" fill="#fff" font-family="sans-serif" font-weight="700">P</text></svg>',
  ga4:'<svg viewBox="0 0 24 24"><rect x="3" y="12" width="4" height="9" rx="1" fill="#F9AB00"/><rect x="10" y="7" width="4" height="14" rx="1" fill="#E37400"/><rect x="17" y="3" width="4" height="18" rx="1" fill="#F9AB00"/></svg>',
  mixpanel:'<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="5" fill="#7856FF"/><circle cx="8" cy="14" r="2.4" fill="#fff"/><circle cx="16" cy="9" r="2.4" fill="#fff" opacity=".8"/></svg>',
  maze:'<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="5" fill="#2A1E5C"/><path d="M7 16l5-8 5 8" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/></svg>',
  qualtrics:'<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="5" fill="#0768DD"/><text x="12" y="16.5" text-anchor="middle" font-size="12" fill="#fff" font-family="sans-serif" font-weight="700">Q</text></svg>',
  ow:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#1d1d2b"/><circle cx="8" cy="10" r="2.4" fill="#ffd23e"/><circle cx="16" cy="10" r="2.4" fill="#4dd4ac"/><circle cx="12" cy="16" r="2.4" fill="#ff6b6b"/></svg>',
  zoom:'<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#2D8CFF"/><rect x="4" y="8" width="11" height="8" rx="2" fill="#fff"/><path d="M16 10.5l4-2v7l-4-2z" fill="#fff"/></svg>',
  figma:'<svg viewBox="0 0 38 57"><path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/><path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"/><path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19z"/><path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/><path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"/></svg>',
  claude:'<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="5" fill="#D97757"/><path d="M7 17L12 6l5 11" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  replit:'<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="5" fill="#F26207"/><path d="M8 5h5v4.5H8zM13 9.5h5V14h-5zM8 14h5v4.5H8z" fill="#fff"/></svg>',
  factory:'<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="5" fill="#111"/><path d="M6 18V9l5 3V9l5 3v6z" fill="#fff"/><rect x="15.5" y="5" width="2.5" height="4" fill="#fff"/></svg>',
  github:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#24292f"/><path d="M12 3a9 9 0 0 0-2.85 17.54c.45.08.62-.2.62-.43v-1.7c-2.5.55-3.03-1.06-3.03-1.06-.41-1.04-1-1.32-1-1.32-.82-.56.06-.55.06-.55.9.06 1.38.93 1.38.93.8 1.38 2.11.98 2.63.75.08-.58.31-.98.57-1.2-2-.23-4.1-1-4.1-4.45 0-.98.35-1.79.93-2.42-.1-.23-.4-1.15.08-2.4 0 0 .76-.24 2.48.92a8.6 8.6 0 0 1 4.51 0c1.72-1.16 2.47-.92 2.47-.92.49 1.25.18 2.17.09 2.4.58.63.93 1.44.93 2.42 0 3.47-2.11 4.22-4.12 4.44.32.28.61.83.61 1.67v2.47c0 .24.16.52.62.43A9 9 0 0 0 12 3z" fill="#fff"/></svg>'
};
/* per-category accent — never a glow, just the stripe/rarity marker.
   UXR keeps the extra presence CLAUDE.md calls for (thicker stripe, the
   one card class allowed a second accent line) without ever using glow. */
var CAT_META={
  uxr:{label:'UX / UXR',c:'#c084fc',strong:true},
  product:{label:'Product',c:'#e8c547'},
  analytics:{label:'Analytics',c:'#4dd4ac'},
  aidev:{label:'AI + Dev',c:'#7dc4ff'},
  system:{label:'System',c:'#22d3ee'}
};
var SKILLS=[
  {t:'Product Mapping',cat:'product',long:'Every screen becomes a <b>named event</b> I can query.',
   ic:'<path d="M9 20l-6-2V4l6 2 6-2 6 2v14l-6-2-6 2z"/><path d="M9 6v14M15 4v14"/>',
   tools:[['pendo','Pendo'],['ga4','GA4']],proj:'EY Fabric'},
  {t:'Usage Tracking',cat:'analytics',long:'Live sessions show <b>who</b> drops, not only totals.',
   ic:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
   tools:[['pendo','Pendo'],['mixpanel','Mixpanel']],proj:'Chek'},
  {t:'Segmentation & Replay',cat:'uxr',long:'<b>Worst sessions</b> replayed, grouped by struggle.',
   ic:'<path d="M22 3H2l8 9.5V19l4 2v-8.5z"/>',
   tools:[['pendo','Pendo'],['qualtrics','Qualtrics']],proj:'EY Fabric'},
  {t:'Research Synthesis',cat:'uxr',long:'Talks and tests compress into a <b>ranked list</b> of what to fix.',
   ic:'<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4"/>',
   tools:[['zoom','Zoom'],['maze','Maze'],['ow','Optimal'],['claude','Claude']],proj:'DollarCity'},
  {t:'Parallel Design',cat:'uxr',long:'<b>Figma craft</b> and <b>AI generation</b> in one system.',
   ic:'<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>',
   tools:[['figma','Figma'],['claude','Claude']],proj:'Chek'},
  {t:'Deployment',cat:'aidev',long:'Ship to <b>dev, staging, prod</b> — or hand off clean.',
   ic:'<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>',
   tools:[['replit','Replit'],['github','GitHub'],['factory','Factory.ai']],proj:'Customs · $500K'},
  {t:'Analytics Hub',cat:'aidev',long:'<b>Adoption, users, alarms</b> — the hub is a product.',
   ic:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',
   tools:[['pendo','Pendo'],['claude','Claude']],proj:'EY Fabric'},
  {t:'Connected Systems',cat:'system',long:'Product <b>memory → skills → agents → tools</b> — I review every step.',
   ic:'<circle cx="6" cy="6" r="2.2"/><circle cx="18" cy="6" r="2.2"/><circle cx="6" cy="18" r="2.2"/><circle cx="18" cy="18" r="2.2"/><path d="M8.2 6h7.6M6 8.2v7.6M18 8.2v7.6M8.2 18h7.6"/>',
   tools:[['github','GitHub'],['figma','Figma'],['pendo','Pendo']],proj:'EY Fabric'}
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

    '<section class="beat" data-beat id="beat-evidence">'+
      '<p class="beat-n">03 — <em>Evidence</em></p>'+
      '<h2>Five cases, each with the problem stated first</h2>'+
      '<p>Not a catalogue. Every one names what was broken, what I did about it, and the '+
        'number that says whether it worked.</p>'+
      '<div class="cases">'+CASES.map(function(c){
        return '<button class="case" type="button" data-case="'+c.id+'" style="--pc:'+c.pc+'">'+
          '<span class="c-prev-wrap" aria-hidden="true">'+caseWindowMock(c)+'</span>'+
          '<span class="c-body">'+
            '<span class="c-facts">'+
              '<span class="c-role">'+c.role+'</span>'+
              '<span class="c-fact-row"><span class="c-industry">'+c.industry+'</span>'+
              '<span class="c-era">'+c.era+'</span></span>'+
            '</span>'+
            '<span class="c-name">'+c.name+'</span>'+
            '<ul class="c-hits">'+c.hits.map(function(h){ return '<li><i>✦</i>'+h+'</li>'; }).join('')+'</ul>'+
            '<span class="c-line">'+c.line+'</span>'+
            '<span class="c-tools">'+c.stack.map(function(k){ return '<span class="c-tool">'+LOGO[k]+'</span>'; }).join('')+'</span>'+
            '<span class="c-go">VIEW IN WINDOW →</span>'+
          '</span>'+
        '</button>';
      }).join('')+'</div>'+
    '</section>'+

    '<section class="beat" data-beat id="beat-capabilities">'+
      '<p class="beat-n">04 — <em>Capabilities</em></p>'+
      '<h2>What eight years of shipping actually taught me</h2>'+
      '<p>Not a skills list. Each one names what it solves first, then the '+
        'tools and the case that proved it.</p>'+
      '<div class="skills-grid">'+renderSkillCards()+'</div>'+
    '</section>'+

  '</div>';
}

/* ── Capabilities — video-game skill cards, folded into Home as its own
   beat (not a separate page: same "one continuous story" call already
   made for Cases/Evidence — see the projects alias in go()). Real logos,
   real brand colours on the tool chips (the portfolio's own carve-out:
   brand marks aren't decorative tokens). The "long" line — the what-it-
   solves statement — is the headline; the skill name is secondary, so it
   reads at a glance before anyone stops to study it. */
function renderSkillCards(){
  return SKILLS.map(function(s,i){
    var meta=CAT_META[s.cat];
    return '<div class="skill-card cat-'+s.cat+(meta.strong?' strong':'')+'" '+
      'style="--catc:'+meta.c+'" tabindex="0">'+
      '<span class="sk-cat"><b>0'+(i+1)+'</b> · '+meta.label+'</span>'+
      '<span class="sk-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" '+
        'stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+s.ic+'</svg></span>'+
      '<p class="sk-solve">'+s.long+'</p>'+
      '<p class="sk-name">'+s.t+'</p>'+
      '<div class="sk-tools">'+s.tools.map(function(t){
        return '<span class="sk-tool">'+LOGO[t[0]]+t[1]+'</span>';
      }).join('')+'</div>'+
      '<span class="sk-proj">Proven on <b>'+s.proj+'</b></span>'+
    '</div>';
  }).join('');
}

/* ── Desktop — the PostHog "close the window, see the folders" gesture.
   Content stays reachable in one click by default (no forced click-through,
   per REFERENCES.md's critique of links-grid-cyberpunk2077); the desktop is
   reached by explicitly closing, not the default landing state. */
function viewDesktop(){
  return '<div class="desktop">'+
    '<p class="desktop-hint">Window closed. Pick a folder.</p>'+
    '<div class="desktop-grid">'+ORDER.map(function(r,i){
      return '<button type="button" class="desktop-icon" data-route="'+r+'">'+
        '<span class="di-folder" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" '+
          'stroke="currentColor" stroke-width="1.6"><path d="M3 6.5a1 1 0 011-1h5l1.6 2H20a1 1 0 011 1V18a1 1 0 01-1 1H4a1 1 0 01-1-1z"/></svg></span>'+
        '<span class="di-label"><b>0'+(i+1)+'</b> '+LABEL[r]+'</span>'+
      '</button>';
    }).join('')+'</div>'+
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
  stage.innerHTML = r==='desktop' ? viewDesktop()
    : r==='home' ? viewHome()
    : viewStub(r);
  crumb.innerHTML = r==='desktop' ? 'fm://<b>desktop</b>' : 'fm://<b>'+PATH[r]+'</b>';
  document.title = r==='desktop' ? 'FM.OS — Desktop' : 'FM.OS — '+LABEL[r];
  if(history.replaceState) history.replaceState(null,'','#/'+(r==='desktop'?'desktop':PATH[r]));
  main.scrollTop=0;
  T.depth=0;
  if(r==='home') startLines();
  bindStage();
  syncNav(r);
  renderMonitor();
}

var sectionEnteredAt=Date.now();

/* Cases and Capabilities have no page of their own — both live inside
   Home's own beats (Evidence, Capabilities), deliberately, so the
   narrative reads as one continuous story rather than being split off
   into disconnected windows. Nav/desktop still need each to go somewhere
   real, so they resolve to home + a scroll to that beat. */
var BEAT_ALIAS={projects:'beat-evidence',skills:'beat-capabilities'};

function scrollToBeat(id){
  var el=document.getElementById(id);
  if(el) el.scrollIntoView({behavior:reduced?'auto':'smooth',block:'start'});
}

function go(r){
  var beatId=BEAT_ALIAS[r];
  if(beatId){
    if(current==='home'){ scrollToBeat(beatId); return; }
    goReal('home');
    setTimeout(function(){ scrollToBeat(beatId); },reduced?0:230);
    return;
  }
  goReal(r);
}

function goReal(r){
  if(r===current||(!LABEL[r]&&r!=='desktop')) return;
  track(r==='desktop'?'desktop_opened':'section_viewed',{
    section:r, from:current,
    seconds_on_previous:Math.round((Date.now()-sectionEnteredAt)/1000),
    previous_depth:T.depth
  });
  sectionEnteredAt=Date.now();
  current=r;
  if(r!=='desktop') T.seen[r]=true;
  bump();

  if(reduced){ paint(r); return; }
  /* e-paper page turn: the panel inverts, settles, and the new page is there.
     The freshly painted content then arrives with real weight (winArrive
     keyframes on .spine/.desktop) — a plain replace felt flat once the
     floating case-window got the same treatment. */
  document.documentElement.classList.add('eink-refresh');
  setTimeout(function(){
    paint(r);
    setTimeout(function(){ document.documentElement.classList.remove('eink-refresh'); },70);
  },80);
}

/* the CLOSE control — reachable from any section, not just Home, matching
   PostHog's "back out to the folders from wherever you are" */
document.getElementById('closeBtn').addEventListener('click',function(){ go('desktop'); });

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
      openWindow(CASE+c.file, c.name, id);
    });
  });

  Array.prototype.forEach.call(stage.querySelectorAll('[data-photo]'),function(btn){
    btn.addEventListener('click',function(){ openLb(+btn.dataset.photo); });
  });

  /* beats light up as they enter — the spine tracks where you are */
  if('IntersectionObserver' in window){
    /* tracks every beat's current intersecting state across calls — a
       single observer callback can carry entries for several beats at
       once (one flipping true, another flipping false a moment later as
       the scroll passes it), and reacting to each entry in isolation lets
       whichever fires last win even when it's reporting a different,
       now-irrelevant beat. Compute the one correct answer from the full
       known state instead, after every batch. */
    var beatState={};
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){
        e.target.classList.toggle('on', e.isIntersecting);
        beatState[e.target.id]=e.isIntersecting;
      });
      /* an aliased beat scrolling into view is, for nav purposes, the same
         as being "on" that route — even though the route never changes
         off home (see BEAT_ALIAS in go()) */
      if(current==='home'){
        var activeKey='home';
        for(var key in BEAT_ALIAS){
          if(beatState[BEAT_ALIAS[key]]){ activeKey=key; break; }
        }
        syncNav(activeKey);
      }
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

/* winArriveFloat runs with fill-mode:both so the box holds its "arrived"
   pose instead of snapping back the instant the animation ends — but held
   forever, that forced transform:translate(-50%,-50%) silently outranks
   any inline transform the drag/maximize code sets afterwards (a running
   fill-mode animation always wins that cascade over an inline style).
   Without this, dragging the window looks fine on the wfBox.style.left/top
   values but renders somewhere else entirely, since the browser is still
   applying the animation's centering transform underneath. Dropping the
   class once the animation finishes hands control back to plain CSS/inline
   styles, which is what drag and maximize both assume they have. */
wfBox.addEventListener('animationend',function(e){
  if(e.animationName==='winArriveFloat') wfBox.classList.remove('arrive');
});

/* the hash saved from just before a case window opens, so closing restores
   the section the visitor was actually on instead of always landing on
   whatever the window happened to overwrite it with */
var hashBeforeWindow=null;

function openWindow(url,title,caseId){
  var path='fm://cases/'+caseId;
  document.getElementById('wfTitle').textContent=title;
  document.getElementById('wfPath').textContent=path;
  wfFrame.src=url;
  wfBox.classList.remove('maximized');
  wfBox.style.left=''; wfBox.style.top=''; wfBox.style.transform='';
  wf.hidden=false;
  /* retrigger the arrival animation — wfBox is a persistent element (shown/
     hidden, not recreated), so a class already present wouldn't replay on
     its own; force a reflow between remove and re-add */
  wfBox.classList.remove('arrive');
  void wfBox.offsetWidth;
  wfBox.classList.add('arrive');
  document.getElementById('wfClose').focus();

  /* a specific case gets its own real, shareable URL — pushState (not
     replace) so the browser back button closes it, same as it would close
     any other "page" */
  if(history.pushState){
    hashBeforeWindow=location.hash;
    history.pushState({caseWindow:caseId},'','#/cases/'+caseId);
  }
}
function closeWindow(){
  wf.hidden=true;
  wfFrame.src='about:blank'; /* stop whatever the case page was doing */
  if(hashBeforeWindow!==null && history.pushState){
    history.pushState(null,'',hashBeforeWindow||'#/'+PATH[current]);
    hashBeforeWindow=null;
  }
}
window.addEventListener('popstate',function(e){
  /* back/forward button: a case-window hash going away closes the window;
     landing back on one from a refresh/forward isn't auto-opened here —
     see the boot-time deep link handling below for that case instead */
  if(!wf.hidden && !(e.state&&e.state.caseWindow)){ closeWindow(); }
});
document.getElementById('wfClose').addEventListener('click',closeWindow);
document.getElementById('wfBackdrop').addEventListener('click',closeWindow);
document.getElementById('wfMax').addEventListener('click',function(){
  var goingMax=!wfBox.classList.contains('maximized');
  wfBox.classList.toggle('maximized');
  /* dragging sets left/top/transform as inline styles, which always beat
     the .maximized CSS rule's width/height-only change. Maximizing after
     any drag left the box's position wherever it was dragged to, so a
     98vw/96vh box could open mostly off-screen — its own title bar and
     close/max dots cut off past the viewport edge. Clearing the inline
     styles restores the CSS rule's own centering (see the animationend
     listener above for the other half of this: without it, a stale
     fill-mode animation would still override whatever we clear to here). */
  if(goingMax){ wfBox.style.left=''; wfBox.style.top=''; wfBox.style.transform=''; }
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
}).join('')+
  /* Beats: a standalone page (not part of the SPA route table), added on
     request — kept as a plain link rather than a data-route so it isn't
     mistaken for a permanent step in the narrative order */
  '<a class="dbeat" href="beats.html" target="_blank" rel="noopener"><span class="idx">•</span>Beats</a>'+
  SHORTCUTS.map(function(s){
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

/* deep link support: /#/cases and /#/capabilities land on home, scrolled
   to that beat once painted; /#/desktop on the desktop; /#/cases/<id>
   opens straight into that case's floating window — a specific project
   really is a bookmarkable, shareable page, per the ask. */
var bootScrollTo=null, bootOpenCase=null;
(function(){
  var h=(location.hash||'').replace('#/','');
  if(h==='desktop'){ current='desktop'; return; }
  var caseMatch=h.match(/^cases\/(.+)$/);
  if(caseMatch && CASES.some(function(c){ return c.id===caseMatch[1]; })){
    current='home'; bootOpenCase=caseMatch[1]; return;
  }
  for(var r in PATH){
    if(PATH[r]===h){
      if(BEAT_ALIAS[r]){ current='home'; bootScrollTo=BEAT_ALIAS[r]; }
      else { current=r; T.seen[r]=true; }
      break;
    }
  }
})();

paint(current);
if(bootScrollTo){ scrollToBeat(bootScrollTo); }
if(bootOpenCase){
  var bootCase=CASES.filter(function(c){ return c.id===bootOpenCase; })[0];
  if(bootCase){ openWindow(CASE+bootCase.file, bootCase.name, bootCase.id); }
}

setInterval(function(){
  T.spark.shift();
  T.spark.push(0);
  renderMonitor();
},1000);

})();
