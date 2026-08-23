(function(){
  var PHOTO_BASE="https://fedemon16i.github.io/federico-portfolio/home-photos/";
  var PHOTOS=[
    {src:PHOTO_BASE+"IMG_0531.jpeg",t:"Product focus"},
    {src:PHOTO_BASE+"IMG_0534.jpeg",t:"Design"},
    {src:PHOTO_BASE+"IMG_0311.jpeg",t:"Off the map"},
    {src:PHOTO_BASE+"IMG_0532.jpeg",t:"Competitive"},
    {src:PHOTO_BASE+"IMG_0990.jpeg",t:"People-first"},
    {src:PHOTO_BASE+"IMG_0536.jpeg",t:"Maker roots"},
    {src:PHOTO_BASE+"IMG_0530.jpeg",t:"Remote-ready"},
    {src:PHOTO_BASE+"IMG_0533.jpeg",t:"Clear thinking"}
  ];
  var LOGO={
    pendo:'<svg width="16" height="16" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#FF4A7D"/><text x="12" y="16" text-anchor="middle" font-size="11" fill="#fff" font-family="sans-serif" font-weight="700">P</text></svg>',
    ga4:'<svg width="16" height="16" viewBox="0 0 24 24"><rect x="3" y="12" width="4" height="9" rx="1" fill="#F9AB00"/><rect x="10" y="7" width="4" height="14" rx="1" fill="#E37400"/><rect x="17" y="3" width="4" height="18" rx="1" fill="#F9AB00"/></svg>',
    mixpanel:'<svg width="16" height="16" viewBox="0 0 24 24"><rect width="24" height="24" rx="5" fill="#7856FF"/><circle cx="8" cy="14" r="2.4" fill="#fff"/><circle cx="16" cy="9" r="2.4" fill="#fff" opacity=".8"/></svg>',
    maze:'<svg width="16" height="16" viewBox="0 0 24 24"><rect width="24" height="24" rx="5" fill="#2A1E5C"/><path d="M7 16l5-8 5 8" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/></svg>',
    qualtrics:'<svg width="16" height="16" viewBox="0 0 24 24"><rect width="24" height="24" rx="5" fill="#0768DD"/><text x="12" y="16.5" text-anchor="middle" font-size="12" fill="#fff" font-family="sans-serif" font-weight="700">Q</text></svg>',
    figma:'<svg width="16" height="16" viewBox="0 0 38 57"><path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/><path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"/><path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19z"/><path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/><path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"/></svg>',
    claude:'<svg width="16" height="16" viewBox="0 0 24 24"><rect width="24" height="24" rx="5" fill="#D97757"/><path d="M7 17L12 6l5 11" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/></svg>',
    replit:'<svg width="16" height="16" viewBox="0 0 24 24"><rect width="24" height="24" rx="5" fill="#F26207"/><path d="M8 6h5a3 3 0 0 1 0 6H8zM8 12h5a3 3 0 0 1 0 6H8z" fill="#fff"/></svg>',
    github:'<svg width="16" height="16" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#24292f"/><path d="M12 3a9 9 0 0 0-2.85 17.54c.45.08.62-.2.62-.43v-1.7c-2.5.55-3.03-1.06-3.03-1.06-.41-1.04-1-1.32-1-1.32-.82-.56.06-.55.06-.55.9.06 1.38.93 1.38.93.8 1.38 2.11.98 2.63.75.08-.58.31-.98.57-1.2-2-.23-4.1-1-4.1-4.45 0-.98.35-1.79.93-2.42-.1-.23-.4-1.15.08-2.4 0 0 .76-.24 2.48.92a8.6 8.6 0 0 1 4.51 0c1.72-1.16 2.47-.92 2.47-.92.49 1.25.18 2.17.09 2.4.58.63.93 1.44.93 2.42 0 3.47-2.11 4.22-4.12 4.44.32.28.61.83.61 1.67v2.47c0 .24.16.52.62.43A9 9 0 0 0 12 3z" fill="#fff"/></svg>',
    zoom:'<svg width="16" height="16" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#2D8CFF"/><rect x="4" y="8" width="11" height="8" rx="2" fill="#fff"/><path d="M16 10.5l4-2v7l-4-2z" fill="#fff"/></svg>',
    miro:'<svg width="16" height="16" viewBox="0 0 24 24"><rect width="24" height="24" rx="5" fill="#FFD02F"/><path d="M6 18V7l3 3 3-4 3 3 3-3v12" stroke="#050038" stroke-width="1.8" fill="none"/></svg>'
  };
  var SKILLS=[
    {cat:"PRODUCT",t:"Product Mapping",long:"Every screen → a named event I can query.",tools:[["pendo","Pendo"],["ga4","GA4"]],proj:"EY Fabric",
      ic:'<path d="M9 20l-6-2V4l6 2 6-2 6 2v14l-6-2-6 2z"/><path d="M9 6v14M15 4v14"/>'},
    {cat:"ANALYTICS",t:"Usage Tracking",long:"Live sessions — see who drops, not only totals.",tools:[["pendo","Pendo"],["mixpanel","Mixpanel"]],proj:"Chek",
      ic:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>'},
    {cat:"UXR",t:"Segmentation & Replay",long:"Worst sessions replayed, group by struggle.",tools:[["pendo","Pendo"],["qualtrics","Qualtrics"]],proj:"EY Fabric",
      ic:'<path d="M22 3H2l8 9.5V19l4 2v-8.5z"/>'},
    {cat:"UXR",t:"Research Synthesis",long:"Talks + tests → a ranked list of what to fix.",tools:[["maze","Maze"],["claude","Claude"]],proj:"DollarCity",
      ic:'<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4"/>'},
    {cat:"DESIGN",t:"Parallel Design",long:"Figma craft + AI gen in one system.",tools:[["figma","Figma"],["claude","Claude"]],proj:"Chek",
      ic:'<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>'},
    {cat:"AI+DEV",t:"Deployment",long:"Ship to dev / staging / prod — or hand off clean.",tools:[["replit","Replit"],["github","GitHub"]],proj:"Customs ES",
      ic:'<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>'},
    {cat:"AI+DEV",t:"Analytics Hub",long:"Adoption · users · alarms — the hub is a product.",tools:[["pendo","Pendo"],["claude","Claude"]],proj:"EY Fabric",
      ic:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>'},
    {cat:"SYSTEMS",t:"Connected Systems",long:"Shared tokens, shared context, less drift.",tools:[["figma","Figma"],["github","GitHub"]],proj:"EY Fabric",
      ic:'<circle cx="6" cy="6" r="2.2"/><circle cx="18" cy="6" r="2.2"/><circle cx="6" cy="18" r="2.2"/><circle cx="18" cy="18" r="2.2"/><path d="M8.2 6h7.6M6 8.2v7.6M18 8.2v7.6M8.2 18h7.6"/>'}
  ];
  var PROJECTS=[
    {id:"ey",name:"EY Fabric",meta:"Globant · XDA",pc:"#ffe600",tc:"#2b2600",url:"https://fedemon16i.github.io/federico-portfolio/projects/ey-fabric.html",role:"Product design · analytics",desc:"Research signals → design and product decisions inside EY Fabric.",logo:'<svg width="28" height="20" viewBox="0 0 30 22"><polygon points="1,4 27,0 27,4 1,8" fill="#2b2600"/><text x="1" y="20" font-family="Arial,sans-serif" font-weight="800" font-size="15" fill="#2b2600">EY</text></svg>'},
    {id:"bc",name:"Blockchains",meta:"Globant",pc:"#22d4c8",tc:"#042e2a",url:"https://fedemon16i.github.io/federico-portfolio/projects/blockchain.html",role:"UX · product",desc:"Figma → Spline → Unity. Phone-rich flows and connected systems.",logo:'<svg width="22" height="22" viewBox="0 0 24 24"><polygon points="12,2 21,7 21,17 12,22 3,17 3,7" fill="none" stroke="#042e2a" stroke-width="1.6"/><polygon points="12,7 16.5,9.5 16.5,14.5 12,17 7.5,14.5 7.5,9.5" fill="#042e2a"/></svg>'},
    {id:"chek",name:"Chek",meta:"Applaudo",pc:"#7a3be0",tc:"#fff",url:"https://fedemon16i.github.io/federico-portfolio/projects/chek.html",role:"Product · behavioral",desc:"Protected payments, onboarding paths, research into features.",logo:'<span style="font-family:Orbitron,sans-serif;font-weight:800;font-size:13px;color:#fff">cheK</span>'},
    {id:"cus",name:"Customs ES",meta:"Applaudo",pc:"#4a9eff",tc:"#fff",url:"https://fedemon16i.github.io/federico-portfolio/projects/customs.html",role:"UX · dual devices",desc:"50+ analog processes → digital. Dual devices at the gate.",logo:'<svg width="20" height="20" viewBox="0 0 24 24"><path d="M7 8h10M7 12h7M7 16h5" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/><circle cx="17" cy="16" r="3" fill="none" stroke="#fff" stroke-width="1.4"/></svg>'},
    {id:"dc",name:"DollarCity",meta:"Applaudo",pc:"#16a34a",tc:"#fff",url:"https://fedemon16i.github.io/federico-portfolio/projects/dollarcity.html",role:"UX · research",desc:"Field research into ranked actions and product outcomes.",logo:'<svg width="20" height="20" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#fff"/><text x="12" y="17" text-anchor="middle" font-family="Arial,sans-serif" font-weight="800" font-size="13" fill="#16a34a">D</text></svg>'}
  ];
  var BIO=[
    {t:"Turning ambiguity into structure is basically my love language.",h:"Turning ambiguity into <em>structure</em> is basically my <em>love language</em>."},
    {t:"Industrial design taught me to think in systems.",h:"Industrial design taught me to think in <em>systems</em>."},
    {t:"Best insights come from watching someone struggle in silence.",h:"Best insights come from <em>watching</em> someone struggle in silence."},
    {t:"I build my own tools when the ones I have are not fast enough.",h:"I <em>build my own tools</em> when the ones I have are not fast enough."},
    {t:"Cordoba, Argentina — where I actually live.",h:"<em>Cordoba, Argentina</em> — where I actually live."},
    {t:"Obsessive about coffee, terrible at ending a good conversation.",h:"<em>Obsessive about coffee</em>, terrible at ending a good conversation."}
  ];
  var CODEC_LINES=[
    "Linking what people <em>think and do</em> to design that ships.",
    "Open <em>Projects</em> — cases load in a window. Max or close → home.",
    "Skills pulse like a skill tree — tools keep brand color.",
    "This channel is one-way for now — codec chat comes later."
  ];

  var body=document.getElementById("centerBody");
  var currentView="home",bioIdx=0,bioGen=0,lbIdx=0,winEl=null,zTop=100;

  var themeBtn=document.getElementById("themeBtn");
  function applyTheme(t){document.documentElement.setAttribute("data-theme",t);try{localStorage.setItem("fmos-theme",t)}catch(e){}}
  try{var s=localStorage.getItem("fmos-theme");if(s)applyTheme(s)}catch(e){}
  if(themeBtn)themeBtn.addEventListener("click",function(){var c=document.documentElement.getAttribute("data-theme")||"dark";applyTheme(c==="dark"?"light":"dark")});

  var menuBtn=document.getElementById("menuBtn"),drawer=document.getElementById("mDrawer");
  if(menuBtn)menuBtn.addEventListener("click",function(){var open=drawer.hidden;drawer.hidden=!open;menuBtn.setAttribute("aria-expanded",open?"true":"false")});

  function setNav(view){
    document.querySelectorAll(".top-nav button,[data-view]").forEach(function(b){
      if(b.classList.contains("brand"))return;
      b.classList.toggle("on",b.getAttribute("data-view")===view);
    });
    if(drawer)drawer.hidden=true;
    if(menuBtn)menuBtn.setAttribute("aria-expanded","false");
  }

  var codecI=0;
  setInterval(function(){
    codecI=(codecI+1)%CODEC_LINES.length;
    var el=document.getElementById("codecLine");
    if(!el)return;
    el.style.animation="none";el.offsetHeight;el.style.animation="";
    el.innerHTML=CODEC_LINES[codecI];
  },8000);
  setInterval(function(){
    var el=document.getElementById("freqNum");
    if(el)el.textContent=(140+Math.random()*1.2).toFixed(2);
  },2800);

  function typeBio(el,dots){
    if(!el)return;
    function go(n){
      bioIdx=n;bioGen++;
      if(dots)dots.querySelectorAll("span").forEach(function(d,i){d.classList.toggle("on",i===n)});
      var line=BIO[n];el.textContent="";var i=0,gen=bioGen;
      (function step(){
        if(gen!==bioGen)return;
        if(i<=line.t.length){el.textContent=line.t.slice(0,i);i++;setTimeout(step,18+Math.random()*12)}
        else{el.innerHTML=line.h;setTimeout(function(){if(gen===bioGen)go((bioIdx+1)%BIO.length)},4200)}
      })();
    }
    if(dots){
      dots.innerHTML=BIO.map(function(_,i){return '<span data-i="'+i+'"'+(i===0?' class="on"':'')+'></span>'}).join("");
      dots.querySelectorAll("span").forEach(function(d){d.addEventListener("click",function(){go(+d.getAttribute("data-i"))})});
    }
    go(0);
  }

  var lightbox=document.getElementById("lightbox"),lbImg=document.getElementById("lbImg"),lbCap=document.getElementById("lbCap");
  function openLb(i){lbIdx=i;lbImg.src=PHOTOS[i].src;lbImg.alt=PHOTOS[i].t;lbCap.textContent=PHOTOS[i].t;lightbox.hidden=false}
  function closeLb(){lightbox.hidden=true}
  function lbNav(d){lbIdx=(lbIdx+d+PHOTOS.length)%PHOTOS.length;openLb(lbIdx)}
  document.getElementById("lbClose").addEventListener("click",closeLb);
  document.getElementById("lbPrev").addEventListener("click",function(){lbNav(-1)});
  document.getElementById("lbNext").addEventListener("click",function(){lbNav(1)});
  lightbox.addEventListener("click",function(e){if(e.target===lightbox)closeLb()});
  document.addEventListener("keydown",function(e){
    if(lightbox.hidden)return;
    if(e.key==="Escape")closeLb();
    if(e.key==="ArrowLeft")lbNav(-1);
    if(e.key==="ArrowRight")lbNav(1);
  });

  function closeWin(){if(winEl){winEl.remove();winEl=null}route("home")}
  function openProjectWin(p){
    if(winEl){winEl.remove();winEl=null}
    var w=document.createElement("div");
    w.className="win";
    w.innerHTML='<div class="win-bar"><div class="win-dots"><i class="c" data-a="close" title="Close"></i><i class="x" data-a="max" title="Maximize"></i></div><div class="win-title"><b>'+p.name+'</b></div><div class="win-path">'+p.url.replace("https://","")+'</div></div><div class="win-body"><iframe title="'+p.name+'" src="'+p.url+'" loading="eager"></iframe></div>';
    document.body.appendChild(w);winEl=w;zTop++;w.style.zIndex=zTop;
    var bar=w.querySelector(".win-bar");
    w.querySelectorAll(".win-dots i").forEach(function(dot){
      dot.addEventListener("click",function(e){
        e.stopPropagation();
        var a=dot.getAttribute("data-a");
        if(a==="close")closeWin();
        if(a==="max")w.classList.toggle("maximized");
      });
    });
    var drag=false,sx,sy,ox,oy;
    bar.addEventListener("mousedown",function(e){
      if(w.classList.contains("maximized"))return;
      if(e.target.closest(".win-dots"))return;
      drag=true;sx=e.clientX;sy=e.clientY;
      var r=w.getBoundingClientRect();
      w.style.left=r.left+"px";w.style.top=r.top+"px";w.style.transform="none";
      ox=r.left;oy=r.top;e.preventDefault();
    });
    window.addEventListener("mousemove",function(e){if(!drag)return;w.style.left=(ox+e.clientX-sx)+"px";w.style.top=(oy+e.clientY-sy)+"px"});
    window.addEventListener("mouseup",function(){drag=false});
  }

  function toolsHtml(tools){
    return tools.map(function(t){
      var svg=LOGO[t[0]]||"";
      return '<span class="tool-chip">'+svg+'<b>'+t[1]+'</b></span>';
    }).join("");
  }

  function viewHome(){
    currentView="home";setNav("home");
    if(winEl){winEl.remove();winEl=null}
    var slides=PHOTOS.map(function(p,i){
      return '<div class="car-slide" data-i="'+i+'"><img src="'+p.src+'" alt="'+p.t+'" loading="'+(i<3?"eager":"lazy")+'"/><span class="cap">'+p.t+'</span></div>';
    }).join("");
    body.innerHTML='<div class="center-inner"><div class="about-hero"><div class="avatar-wrap"><img src="'+PHOTOS[4].src+'" alt="Federico Monroy"/><div class="avatar-ring"></div></div><div class="about-copy"><div class="eyebrow">Sr. UX · Product · Behavioral analytics</div><h1>Federico Monroy</h1><div class="sub">Córdoba, AR · remote · Globant · EY Fabric</div><p class="lede">I link what people think and do to design that ships — research signals into product decisions, with ownership of trade-offs and outcomes.</p><div class="stats"><div class="stat"><b>EY</b><span>XDA · Fabric</span></div><div class="stat"><b>5</b><span>Case volumes</span></div><div class="stat"><b>8</b><span>Abilities</span></div></div><div class="bio-type" id="bioType"></div><div class="bio-dots" id="bioDots"></div></div></div><div class="carousel"><div class="carousel-head"><h2>// HOLO REEL</h2><div class="car-nav"><button type="button" id="carPrev" aria-label="Previous">←</button><button type="button" id="carNext" aria-label="Next">→</button></div></div><div class="car-track" id="carTrack">'+slides+'</div></div></div>';
    typeBio(document.getElementById("bioType"),document.getElementById("bioDots"));
    var track=document.getElementById("carTrack");
    document.getElementById("carPrev").addEventListener("click",function(){track.scrollBy({left:-220,behavior:"smooth"})});
    document.getElementById("carNext").addEventListener("click",function(){track.scrollBy({left:220,behavior:"smooth"})});
    body.querySelectorAll(".car-slide").forEach(function(s){s.addEventListener("click",function(){openLb(+s.getAttribute("data-i"))})});
  }

  function viewProjects(){
    currentView="projects";setNav("projects");
    if(winEl){winEl.remove();winEl=null}
    var cards=PROJECTS.map(function(p,i){
      return '<button type="button" class="proj-card" data-i="'+i+'" style="--pc:'+p.pc+'"><div class="proj-logo" style="background:'+p.pc+';color:'+p.tc+'">'+p.logo+'</div><div class="nm">'+p.name+'</div><div class="mt">'+p.meta+'</div><div class="role">'+p.role+'</div><div class="desc">'+p.desc+'</div></button>';
    }).join("");
    body.innerHTML='<div class="center-inner"><h1 class="section-h">PROJECTS</h1><p class="section-lede">Each case keeps its own design system. Open one — window with maximize / close (close → home).</p><div class="proj-grid">'+cards+'</div></div>';
    body.querySelectorAll(".proj-card").forEach(function(c){c.addEventListener("click",function(){openProjectWin(PROJECTS[+c.getAttribute("data-i")])})});
  }

  function viewSkills(){
    currentView="skills";setNav("skills");
    if(winEl){winEl.remove();winEl=null}
    var cards=SKILLS.map(function(s){
      return '<div class="skill-card"><div class="sk-top"><div class="sk-icon"><svg viewBox="0 0 24 24">'+s.ic+'</svg></div><div><div class="sk-cat">'+s.cat+'</div><div class="sk-nm">'+s.t+'</div></div></div><div class="sk-long">'+s.long+'</div><div class="sk-tools">'+toolsHtml(s.tools)+'</div><div class="sk-proj">seen in <em>'+s.proj+'</em></div></div>';
    }).join("");
    body.innerHTML='<div class="center-inner"><h1 class="section-h">SKILLS</h1><p class="section-lede">Eight capabilities — icons pulse; stack chips keep brand color.</p><div class="skill-grid">'+cards+'</div></div>';
  }

  function viewResume(){
    currentView="resume";setNav("resume");
    if(winEl){winEl.remove();winEl=null}
    body.innerHTML=
      '<div class="center-inner">'+
        '<div class="resume-hero">'+
          '<div class="resume-title">Sr. UX / Product Strategist</div>'+
          '<div class="resume-meta">Federico Monroy · Córdoba, AR · remote · behavioral analytics · research → design → deploy</div>'+
        '</div>'+
        '<div class="resume-block">'+
          '<div class="rb-label">Employer</div>'+
          '<div class="rb-h"><span class="rb-co">Globant</span><span class="rb-dates">Oct 2023 — present · hybrid</span></div>'+
          '<div class="rb-role">Sr. UX / Product Strategist</div>'+
          '<div class="client"><div class="cl-label">Client engagement</div><div class="cl-name">Ernst & Young · EY Fabric</div><div class="cl-meta">internal platform · services catalog</div>'+
            '<ul>'+
              '<li><b>Started here:</b> end-to-end research on <b>90+ internal assets</b> (Microsoft Dynamics, Copilot, sentiment) and UI audits on consumption journeys — turning qualitative signal into product insights.</li>'+
              '<li><b>Now:</b> sole <b>Pendo practitioner</b> on the XDA team — instrumented a <b>300+ item</b> shared catalog end to end; one person closing the loop between experience, product, and engineering (no cross-discipline handoffs).</li>'+
              '<li>Operationalized <b>behavioral analytics</b> for growth: funnels, drop-offs, and adoption monitoring with <b>Pendo + Qualtrics</b> on a platform migration.</li>'+
            '</ul></div>'+
          '<div class="client"><div class="cl-label">Client engagement</div><div class="cl-name">Blockchains Inc.</div><div class="cl-meta">3D immersive map product</div>'+
            '<ul>'+
              '<li><b>Started here:</b> translated <b>mobile-first to desktop</b> and pioneered a <b>2D/3D map</b> feature validated with client-led testing — Figma prototypes bridged to 3D tools.</li>'+
              '<li><b>Now:</b> immersive product design for an <b>owner → visitor</b> loop — place POIs in a live 3D city, publish media, and prototype with <b>Figma, Spline, Unity, and Three.js</b>.</li>'+
            '</ul></div>'+
        '</div>'+
        '<div class="resume-block">'+
          '<div class="rb-label">Employer</div>'+
          '<div class="rb-h"><span class="rb-co">Applaudo Studios</span><span class="rb-dates">Sep 2021 — Jul 2025 · remote · ext. consultant</span></div>'+
          '<div class="rb-role">Product Designer</div>'+
          '<div class="client"><div class="cl-label">Client engagement</div><div class="cl-name">Dollarama · DollarCity</div><div class="cl-meta">surveillance monitoring SaaS — retail chain</div>'+
            '<ul>'+
              '<li>Reduced task completion time by <span class="pill">-50%</span> for telemarketer users by redesigning workflows from contextual inquiries and user testing.</li>'+
              '<li>Identified <b>3 new user personas</b>, refining journeys to match the mental models of non-technical users.</li>'+
            '</ul></div>'+
          '<div class="client"><div class="cl-label">Client engagement</div><div class="cl-name">Chek</div><div class="cl-meta">South American digital wallet — Banco Ripley</div>'+
            '<ul><li>Onboarding, protected payments, behavioral analytics into feature decisions across mobile and web.</li></ul></div>'+
          '<div class="client"><div class="cl-label">Client engagement</div><div class="cl-name">General Directorate of Customs, El Salvador</div><div class="cl-meta">digital transformation</div>'+
            '<ul><li>50+ analog processes → digital; dual-device field flows at the gate under real operational constraints.</li></ul></div>'+
          '<div class="client"><div class="cl-label">Client engagement</div><div class="cl-name">Forecast</div><div class="cl-meta">workforce platform</div>'+
            '<ul><li>Designed platform modules — pending assignments, timeframes, employee management — inside an <b>established design system</b>, under real sprint constraints.</li></ul></div>'+
        '</div>'+
        '<div class="resume-block">'+
          '<div class="rb-label">Employer</div>'+
          '<div class="rb-h"><span class="rb-co">Taxsynapse</span><span class="rb-dates">Mar 2021 — Oct 2022 · remote</span></div>'+
          '<div class="rb-role">Product Designer</div>'+
          '<div class="client"><ul>'+
            '<li>Led end-to-end design of <b>3 SaaS platform MVPs</b> for government clients (Buenos Aires, Jujuy, Misiones), aligning tech flows, user flows and sitemaps with stakeholder validation.</li>'+
            '<li>Shipped a scalable design system accelerating dev handoff — reducing iteration time by <span class="pill">-20%</span>.</li>'+
            '<li>Validated prototypes via user testing, ensuring compliance with public-sector usability standards.</li>'+
          '</ul></div>'+
        '</div>'+
        '<h2 class="section-h" style="font-size:14px;margin-top:28px">EDUCATION & LANGUAGES</h2>'+
        '<div class="edu-grid">'+
          '<div class="edu-card"><div class="k">DEGREE</div><h3>Industrial Design</h3><p>Bachelor’s — National University of Córdoba (Argentina), 2020.</p></div>'+
          '<div class="edu-card"><div class="k">CERTIFICATIONS</div><ul>'+
            '<li>Interaction Design Foundation — UX Design from Scratch · Design Thinking · HCI · User Research Methods</li>'+
            '<li>HAZ! — Product Design Program</li>'+
            '<li>Uxcel — UX/UI Foundations</li>'+
            '<li>Design Labs — Advanced UX Course</li>'+
          '</ul></div>'+
          '<div class="edu-card"><div class="k">LANGUAGES</div>'+
            '<div class="lg-row"><span>Spanish</span><b>native</b></div>'+
            '<div class="lg-row"><span>English</span><b>C2 · proficient</b></div>'+
          '</div>'+
        '</div>'+
        '<a class="btn-link" href="https://fedemon16i.github.io/federico-portfolio/resume.html" target="_blank" rel="noopener">Open full resume →</a>'+
      '</div>';
  }

  function viewContact(){
    currentView="contact";setNav("contact");
    if(winEl){winEl.remove();winEl=null}
    body.innerHTML=
      '<div class="center-inner">'+
        '<h1 class="section-h">CONTACT</h1>'+
        '<p class="section-lede">Looking for a Pendo / analytics-minded product designer who can own the loop end to end.</p>'+
        '<div class="contact-grid">'+
          '<a class="contact-card li" href="https://www.linkedin.com/" target="_blank" rel="noopener">'+
            '<div class="cc-icon"><svg viewBox="0 0 24 24" fill="#0a66c2"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.65V24h-4V8.5z"/></svg></div>'+
            '<div class="k">// NETWORK</div><h3>LinkedIn</h3>'+
            '<p>Roles, recommendations, and the long version of the work.</p>'+
            '<span class="cta">Open profile →</span></a>'+
          '<a class="contact-card gh" href="https://github.com/fedemon16i" target="_blank" rel="noopener">'+
            '<div class="cc-icon"><svg viewBox="0 0 24 24" fill="#8b949e"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.02-.02-2-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013.01-.4c1.02 0 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z"/></svg></div>'+
            '<div class="k">// SOURCE</div><h3>GitHub</h3>'+
            '<p>Repos, experiments, and the living portfolio source.</p>'+
            '<span class="cta">fedemon16i →</span></a>'+
          '<a class="contact-card mail" href="mailto:fedemon16i@gmail.com">'+
            '<div class="cc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#22d4c8" stroke-width="1.8"><path d="M4 6h16v12H4z"/><path d="M4 7l8 6 8-6"/></svg></div>'+
            '<div class="k">// DIRECT</div><h3>Email</h3>'+
            '<p>For roles, collaborations, or a straight question — no form, just mail.</p>'+
            '<span class="cta">fedemon16i@gmail.com →</span></a>'+
          '<button type="button" class="contact-card work" id="goProjects" style="cursor:pointer;font:inherit;color:inherit;width:100%;text-align:left">'+
            '<div class="cc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#e8c547" stroke-width="1.8"><path d="M4 7h16v12H4z"/><path d="M8 7V5h8v2"/></svg></div>'+
            '<div class="k">// PROOF</div><h3>See the work</h3>'+
            '<p>Prefer proof before a message — open the case folders.</p>'+
            '<span class="cta">All projects →</span></button>'+
        '</div>'+
        '<div class="contact-band">'+
          '<p>Start with EY Fabric if you want the measurement spine and ownership story.</p>'+
          '<button type="button" class="btn-link" id="goEy">Open EY Fabric →</button>'+
        '</div>'+
      '</div>';
    document.getElementById("goProjects").addEventListener("click",viewProjects);
    document.getElementById("goEy").addEventListener("click",function(){openProjectWin(PROJECTS[0])});
  }

  function viewDS(){
    currentView="ds";setNav("ds");
    if(winEl){winEl.remove();winEl=null}
    body.innerHTML='<div class="center-inner"><h1 class="section-h">FM.OS SYSTEM</h1><p class="section-lede">Tokens and rules for this operator shell.</p><h2 class="section-h" style="font-size:13px;margin-top:8px">COLOR</h2><div class="token-row"><div class="token-swatch"><i style="background:#050505"></i><span>bg</span></div><div class="token-swatch"><i style="background:#0e0d0c;border-color:#333"></i><span>surf</span></div><div class="token-swatch"><i style="background:#e8c547"></i><span>gold</span></div><div class="token-swatch"><i style="background:#d97757"></i><span>accent</span></div><div class="token-swatch"><i style="background:#7dffb3"></i><span>codec</span></div></div><h2 class="section-h" style="font-size:13px">TYPE</h2><div class="ds-rule"><b>ORBITRON</b>Titles, brand, section marks.</div><div class="ds-rule"><b>SHARE TECH MONO</b>Meta, chips, codec dialogue.</div><div class="ds-rule"><b>DM SANS</b>Body copy.</div><h2 class="section-h" style="font-size:13px;margin-top:18px">RULES</h2><div class="ds-rule"><b>CODEC FIXED</b>Left channel stays; avatar feed is holographic placeholder.</div><div class="ds-rule"><b>ONE WINDOW</b>Cases open as a single window — max / close → home.</div><div class="ds-rule"><b>CASE ISOLATION</b>Iframes keep each project design system intact.</div><div class="ds-rule"><b>NO EMOJIS</b>CSS / SVG only. Brand-colored tool chips.</div><div class="ds-rule"><b>GAME FEEL</b>Constant pulse on skill icons, holo reel on photos, glitch on titles.</div></div>';
  }

  function route(v){
    if(v==="home")return viewHome();
    if(v==="projects")return viewProjects();
    if(v==="skills")return viewSkills();
    if(v==="resume")return viewResume();
    if(v==="contact")return viewContact();
    if(v==="ds")return viewDS();
  }

  document.querySelectorAll("[data-view]").forEach(function(el){
    el.addEventListener("click",function(){route(el.getAttribute("data-view"))});
  });

  function tick(){var d=new Date(),c=document.getElementById("clock");if(c)c.textContent=d.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}
  tick();setInterval(tick,30000);
  setTimeout(function(){var b=document.getElementById("boot");if(b)b.classList.add("done")},2000);

  window.FMOS={setCodecMedia:function(src){
    var box=document.getElementById("codecMedia");if(!box)return;
    if(/\.(mp4|webm|mov)(\?|$)/i.test(src))box.innerHTML='<video src="'+src+'" autoplay muted loop playsinline></video>';
    else if(src.indexOf("<")===0)box.innerHTML=src;
    else box.innerHTML='<img src="'+src+'" alt="Federico"/>';
  }};

  viewHome();
})();
