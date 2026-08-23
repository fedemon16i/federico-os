(function(){
  var PHOTO_BASE = "https://fedemon16i.github.io/federico-portfolio/home-photos/";
  var PHOTOS = [
    {src: PHOTO_BASE + "IMG_0531.jpeg", t: "Product focus"},
    {src: PHOTO_BASE + "IMG_0534.jpeg", t: "Design"},
    {src: PHOTO_BASE + "IMG_0311.jpeg", t: "Off the map"},
    {src: PHOTO_BASE + "IMG_0532.jpeg", t: "Competitive"},
    {src: PHOTO_BASE + "IMG_0990.jpeg", t: "People-first"},
    {src: PHOTO_BASE + "IMG_0536.jpeg", t: "Maker roots"},
    {src: PHOTO_BASE + "IMG_0530.jpeg", t: "Remote-ready"},
    {src: PHOTO_BASE + "IMG_0533.jpeg", t: "Clear thinking"}
  ];
  var ABILITIES = [
    {id:"map",cat:"PRODUCT",t:"Product Mapping",d:"Every page & feature, tagged as an event.",long:"Every screen → a named event I can query.",tools:[["pendo","Pendo"],["ga4","GA4"]],proj:"EY Fabric"},
    {id:"track",cat:"ANALYTICS",t:"Usage Tracking",d:"Clicks, drop-offs, and who is behind each one.",long:"Live sessions — see who drops, not only totals.",tools:[["pendo","Pendo"],["mixpanel","Mixpanel"]],proj:"Chek"},
    {id:"seg",cat:"UXR",t:"Segmentation & Replay",d:"Strugglers grouped — worst sessions replayed.",long:"Worst sessions replayed, group by struggle.",tools:[["pendo","Pendo"],["qualtrics","Qualtrics"]],proj:"EY Fabric"},
    {id:"syn",cat:"UXR",t:"Research Synthesis",d:"Interviews, surveys, tests — ranked into actions.",long:"Talks + tests → a ranked list of what to fix.",tools:[["maze","Maze"],["claude","Claude"]],proj:"DollarCity"},
    {id:"par",cat:"DESIGN",t:"Parallel Design",d:"By hand in Figma, and generated with AI at once.",long:"Figma craft + AI gen in one system.",tools:[["figma","Figma"],["claude","Claude"]],proj:"Chek"},
    {id:"dep",cat:"AI+DEV",t:"Deployment",d:"Shipped to dev, staging, prod — or handed off.",long:"Ship to dev / staging / prod — or hand off clean.",tools:[["replit","Replit"],["github","GitHub"]],proj:"Customs ES"},
    {id:"hub",cat:"AI+DEV",t:"Analytics Hub",d:"The dashboard itself, built with Claude Code.",long:"Adoption · users · alarms — the hub is a product.",tools:[["pendo","Pendo"],["claude","Claude"]],proj:"EY Fabric"},
    {id:"sys",cat:"SYSTEMS",t:"Connected Systems",d:"One design system, many teams.",long:"Shared tokens, shared context, less drift.",tools:[["figma","Figma"],["github","GitHub"]],proj:"EY Fabric"}
  ];
  var PROJECTS = [
    {id:"ey",name:"EY Fabric",meta:"XDA · 2024—",pc:"#c8a84b",url:"https://fedemon16i.github.io/federico-portfolio/projects/ey-fabric.html",role:"Product design · analytics",desc:"Linking research signals to design and product decisions inside EY Fabric."},
    {id:"bc",name:"Blockchains",meta:"Globant",pc:"#22d4c8",url:"https://fedemon16i.github.io/federico-portfolio/projects/blockchain.html",role:"UX · product",desc:"Process from Figma → Spline → Unity. Phone-rich flows and connected systems."},
    {id:"chek",name:"Chek",meta:"Applaudo",pc:"#a78bfa",url:"https://fedemon16i.github.io/federico-portfolio/projects/chek.html",role:"Product · behavioral",desc:"Protected payments, onboarding paths, research signals into features."},
    {id:"cus",name:"Customs ES",meta:"Applaudo",pc:"#4a9eff",url:"https://fedemon16i.github.io/federico-portfolio/projects/customs.html",role:"UX · dual devices",desc:"50+ analog processes → digital. Dual devices at the gate."},
    {id:"dc",name:"DollarCity",meta:"Applaudo",pc:"#34d399",url:"https://fedemon16i.github.io/federico-portfolio/projects/dollarcity.html",role:"UX · research",desc:"Field research into ranked actions and product outcomes."}
  ];
  var BIO = [
    {t:"Turning ambiguity into structure is basically my love language.",h:"Turning ambiguity into <em>structure</em> is basically my <em>love language</em>."},
    {t:"Industrial design taught me to think in systems.",h:"Industrial design taught me to think in <em>systems</em>."},
    {t:"Best insights come from watching someone struggle in silence.",h:"Best insights come from <em>watching</em> someone struggle in silence."},
    {t:"I build my own tools when the ones I have are not fast enough.",h:"I <em>build my own tools</em> when the ones I have are not fast enough."},
    {t:"Cordoba, Argentina — where I actually live.",h:"<em>Cordoba, Argentina</em> — where I actually live."},
    {t:"Obsessive about coffee, terrible at ending a good conversation.",h:"<em>Obsessive about coffee</em>, terrible at ending a good conversation."}
  ];
  var CODEC_LINES = [
    "Linking what people <em>think and do</em> to design that ships.",
    "Open <em>Projects</em> — cases load embedded, next/prev between them.",
    "Abilities mirror the portfolio skill stage — tools and outcomes.",
    "This channel is one-way for now — codec chat comes later."
  ];
  var EXPERIENCE = [
    {co:"EY",role:"XDA · Fabric",meta:"2024 — present",body:"Research signals → design and product decisions. Ownership, trade-offs, outcomes on Fabric."},
    {co:"Applaudo",role:"UX / Product",meta:"Chek · Customs ES · DollarCity",body:"Behavioral analytics, dual-device field flows, and 50+ analog→digital processes."},
    {co:"Globant",role:"UX",meta:"Blockchains",body:"Figma / Spline / Unity process. Connected systems and phone-rich journeys."}
  ];

  var themeBtn = document.getElementById("themeBtn");
  function applyTheme(t){
    document.documentElement.setAttribute("data-theme", t);
    try{ localStorage.setItem("fmos-theme", t); }catch(e){}
  }
  try{ var saved = localStorage.getItem("fmos-theme"); if(saved) applyTheme(saved); }catch(e){}
  if(themeBtn) themeBtn.addEventListener("click", function(){
    var cur = document.documentElement.getAttribute("data-theme") || "dark";
    applyTheme(cur === "dark" ? "light" : "dark");
  });

  var center = document.getElementById("center");
  var centerBody = document.getElementById("centerBody");
  var centerTitle = document.getElementById("centerTitle");
  var centerTag = document.getElementById("centerTag");
  var prevBtn = document.getElementById("prevBtn");
  var nextBtn = document.getElementById("nextBtn");
  var closeView = document.getElementById("closeView");

  var currentView = "home";
  var caseIdx = 0;
  var bioIdx = 0, bioGen = 0;
  var lbIdx = 0;

  var codecI = 0;
  setInterval(function(){
    codecI = (codecI + 1) % CODEC_LINES.length;
    var el = document.getElementById("codecLine");
    if(!el) return;
    el.style.animation = "none"; el.offsetHeight; el.style.animation = "";
    el.innerHTML = CODEC_LINES[codecI];
  }, 8000);
  setInterval(function(){
    var el = document.getElementById("freqNum");
    if(el) el.textContent = (140 + Math.random()*1.2).toFixed(2);
  }, 2800);

  function typeBio(el, dotsEl){
    if(!el) return;
    function go(n){
      bioIdx = n; bioGen++;
      if(dotsEl) dotsEl.querySelectorAll("span").forEach(function(d,i){ d.classList.toggle("on", i===n); });
      var line = BIO[n];
      el.textContent = "";
      var i = 0, gen = bioGen;
      (function step(){
        if(gen !== bioGen) return;
        if(i <= line.t.length){
          el.textContent = line.t.slice(0, i); i++;
          setTimeout(step, 18 + Math.random()*12);
        } else {
          el.innerHTML = line.h;
          setTimeout(function(){ if(gen === bioGen) go((bioIdx+1)%BIO.length); }, 4200);
        }
      })();
    }
    if(dotsEl){
      dotsEl.innerHTML = BIO.map(function(_,i){ return '<span data-i="'+i+'"'+(i===0?' class="on"':'')+'></span>'; }).join("");
      dotsEl.querySelectorAll("span").forEach(function(d){
        d.addEventListener("click", function(){ go(+d.getAttribute("data-i")); });
      });
    }
    go(0);
  }

  function wireTilt(root){
    if(!root || !matchMedia("(pointer:fine)").matches) return;
    root.querySelectorAll(".folder-card, .ability-row, .contact-card, .resume-block").forEach(function(card){
      card.addEventListener("pointermove", function(e){
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width;
        var py = (e.clientY - r.top) / r.height;
        var rx = ((py - 0.5) * -6).toFixed(2);
        var ry = ((px - 0.5) * 7).toFixed(2);
        card.style.transform = "perspective(800px) rotateX("+rx+"deg) rotateY("+ry+"deg) translateY(-4px)";
      });
      card.addEventListener("pointerleave", function(){
        card.style.transform = "";
      });
    });
  }

  var lightbox = document.getElementById("lightbox");
  var lbImg = document.getElementById("lbImg");
  var lbCap = document.getElementById("lbCap");
  function openLb(i){
    lbIdx = i;
    lbImg.src = PHOTOS[i].src;
    lbImg.alt = PHOTOS[i].t;
    lbCap.textContent = PHOTOS[i].t;
    lightbox.hidden = false;
  }
  function closeLb(){ lightbox.hidden = true; }
  function lbNav(dir){
    lbIdx = (lbIdx + dir + PHOTOS.length) % PHOTOS.length;
    openLb(lbIdx);
  }
  document.getElementById("lbClose").addEventListener("click", closeLb);
  document.getElementById("lbPrev").addEventListener("click", function(){ lbNav(-1); });
  document.getElementById("lbNext").addEventListener("click", function(){ lbNav(1); });
  lightbox.addEventListener("click", function(e){ if(e.target === lightbox) closeLb(); });
  document.addEventListener("keydown", function(e){
    if(lightbox.hidden) return;
    if(e.key === "Escape") closeLb();
    if(e.key === "ArrowLeft") lbNav(-1);
    if(e.key === "ArrowRight") lbNav(1);
  });

  function setChrome(title, tag, opts){
    opts = opts || {};
    centerTitle.textContent = title;
    centerTag.textContent = tag || "";
    prevBtn.hidden = !opts.nav;
    nextBtn.hidden = !opts.nav;
    closeView.hidden = !opts.close;
    center.classList.toggle("has-case", !!opts.caseMode);
  }

  function setActiveNav(view){
    document.querySelectorAll(".sec-card").forEach(function(c){
      c.classList.toggle("on", c.getAttribute("data-view") === view);
    });
    document.querySelectorAll(".dock button[data-view]").forEach(function(b){
      b.classList.toggle("on", b.getAttribute("data-view") === view);
    });
  }

  function toolsHtml(tools){
    return tools.map(function(t){
      return '<span class="tool-chip"><b>'+t[1]+'</b></span>';
    }).join("");
  }

  function viewHome(){
    currentView = "home";
    setActiveNav("home");
    setChrome("HOME", "OPERATOR BRIEF", {});
    var cells = PHOTOS.slice(0, 5).map(function(p, i){
      return '<div class="photo-cell" data-i="'+i+'">'+
        '<img src="'+p.src+'" alt="'+p.t+'" loading="'+(i<2?'eager':'lazy')+'"/>'+
        '<span class="pc-label">'+p.t+'</span></div>';
    }).join("");
    centerBody.innerHTML =
      '<div class="photo-grid">'+cells+'</div>'+
      '<div class="hp-name">Federico Monroy</div>'+
      '<div class="hp-line">Sr. UX · Product · Behavioral analytics · Córdoba, AR</div>'+
      '<div class="hp-stats">'+
        '<div class="hp-stat"><b>EY</b><span>XDA · Fabric</span></div>'+
        '<div class="hp-stat"><b>5</b><span>Case volumes</span></div>'+
        '<div class="hp-stat"><b>8</b><span>Abilities</span></div>'+
      '</div>'+
      '<div class="hp-bio" id="bioType"></div>'+
      '<div class="hp-dots" id="bioDots"></div>'+
      '<p class="lede-line" style="margin-top:18px">Research signals → design and product decisions. Ownership, trade-offs, outcomes. Click a photo to enlarge.</p>';
    centerBody.querySelectorAll(".photo-cell").forEach(function(cell){
      cell.addEventListener("click", function(){ openLb(+cell.getAttribute("data-i")); });
    });
    typeBio(document.getElementById("bioType"), document.getElementById("bioDots"));
  }

  function viewProjects(){
    currentView = "projects";
    setActiveNav("projects");
    setChrome("PROJECTS", "DIRECTORY · 5 EMBEDDED", {close: true});
    var cards = PROJECTS.map(function(p, i){
      return '<div class="folder-card" data-i="'+i+'" style="--pc:'+p.pc+'">'+
        '<div class="fi">'+p.id.slice(0,2).toUpperCase()+'</div>'+
        '<div class="fn">'+p.name+'</div>'+
        '<div class="fm">'+p.meta+'</div>'+
        '<div class="fc-role">'+p.role+'</div>'+
        '<div class="fc-desc">'+p.desc+'</div>'+
      '</div>';
    }).join("");
    centerBody.innerHTML =
      '<p class="lede-line">Case folders — each keeps its own design system. Open one to load the full case embedded. Use ← → to move between cases.</p>'+
      '<div class="folder-grid">'+cards+'</div>';
    centerBody.querySelectorAll(".folder-card").forEach(function(card){
      card.addEventListener("click", function(){ openCase(+card.getAttribute("data-i")); });
    });
    wireTilt(centerBody);
  }

  function openCase(i){
    caseIdx = i;
    currentView = "case";
    setActiveNav("projects");
    var p = PROJECTS[i];
    setChrome(p.name, (i+1)+" / "+PROJECTS.length+" · EMBEDDED", {nav: true, close: true, caseMode: true});
    centerBody.innerHTML =
      '<iframe class="case-frame" title="'+p.name+'" src="'+p.url+'" loading="eager"></iframe>';
  }

  function caseNav(dir){
    caseIdx = (caseIdx + dir + PROJECTS.length) % PROJECTS.length;
    openCase(caseIdx);
  }

  function viewAbilities(){
    currentView = "abilities";
    setActiveNav("abilities");
    setChrome("ABILITIES", "MATRIX · 8", {close: true});
    var rows = ABILITIES.map(function(a){
      return '<button type="button" class="ability-row" data-id="'+a.id+'">'+
        '<div class="ar-ico" aria-hidden="true"></div>'+
        '<div style="flex:1;min-width:0">'+
          '<div class="ar-cat">'+a.cat+'</div>'+
          '<div class="ar-nm">'+a.t+'</div>'+
          '<div class="ar-long">'+a.long+'</div>'+
          '<div class="ar-tools">'+toolsHtml(a.tools)+'</div>'+
          '<div class="ar-proj">seen in <em>'+a.proj+'</em></div>'+
        '</div>'+
      '</button>';
    }).join("");
    centerBody.innerHTML =
      '<p class="lede-line">Eight capabilities — reflection of the portfolio skill stage. Tools and the case where they show up.</p>'+
      '<div class="ability-list">'+rows+'</div>';
    wireTilt(centerBody);
  }

  function viewResume(){
    currentView = "resume";
    setActiveNav("resume");
    setChrome("RESUME", "EXPERIENCE", {close: true});
    var blocks = EXPERIENCE.map(function(e){
      return '<div class="resume-block">'+
        '<div class="rb-co">'+e.co+'</div>'+
        '<div class="rb-role">'+e.role+'</div>'+
        '<div class="rb-meta">'+e.meta+'</div>'+
        '<p>'+e.body+'</p>'+
      '</div>';
    }).join("");
    centerBody.innerHTML =
      '<p class="lede-line">Federico Monroy — UX / Product · behavioral analytics. Córdoba, AR · remote.</p>'+
      '<div class="resume-stack">'+blocks+'</div>'+
      '<p style="margin-top:18px"><a href="https://fedemon16i.github.io/federico-portfolio/resume.html" target="_blank" rel="noopener" style="color:var(--gold);font-family:Share Tech Mono,monospace;font-size:12px;border:1px solid var(--line);padding:8px 14px;text-decoration:none;display:inline-block">Open full resume →</a></p>';
    wireTilt(centerBody);
  }

  function viewContact(){
    currentView = "contact";
    setActiveNav("contact");
    setChrome("CONTACT", "CHANNELS", {close: true});
    centerBody.innerHTML =
      '<p class="lede-line">Looking for a Pendo / analytics-minded product designer who can own the loop end to end.</p>'+
      '<div class="contact-grid">'+
        '<a class="contact-card" href="https://www.linkedin.com/" target="_blank" rel="noopener">'+
          '<div class="cc-k">// NETWORK</div><h3>LinkedIn</h3>'+
          '<p>Roles, recommendations, and the long version of the work.</p>'+
          '<span class="cc-cta">Open profile →</span></a>'+
        '<a class="contact-card" href="https://github.com/fedemon16i" target="_blank" rel="noopener">'+
          '<div class="cc-k">// SOURCE</div><h3>GitHub</h3>'+
          '<p>Repos, experiments, and the living portfolio source.</p>'+
          '<span class="cc-cta">fedemon16i →</span></a>'+
        '<a class="contact-card" href="mailto:fedemon16i@gmail.com">'+
          '<div class="cc-k">// DIRECT</div><h3>Email</h3>'+
          '<p>For roles, collaborations, or a straight question.</p>'+
          '<span class="cc-cta">fedemon16i@gmail.com →</span></a>'+
        '<button type="button" class="contact-card" data-go-projects style="cursor:pointer;width:100%;font:inherit;color:inherit">'+
          '<div class="cc-k">// PROOF</div><h3>See the work</h3>'+
          '<p>Prefer proof before a message — start with the cases.</p>'+
          '<span class="cc-cta">All projects →</span></button>'+
      '</div>';
    var go = centerBody.querySelector("[data-go-projects]");
    if(go) go.addEventListener("click", viewProjects);
    wireTilt(centerBody);
  }

  function route(view){
    if(view === "home") return viewHome();
    if(view === "projects") return viewProjects();
    if(view === "abilities") return viewAbilities();
    if(view === "resume") return viewResume();
    if(view === "contact") return viewContact();
  }

  document.querySelectorAll("[data-view]").forEach(function(el){
    el.addEventListener("click", function(){ route(el.getAttribute("data-view")); });
  });
  prevBtn.addEventListener("click", function(){ if(currentView === "case") caseNav(-1); });
  nextBtn.addEventListener("click", function(){ if(currentView === "case") caseNav(1); });
  closeView.addEventListener("click", function(){
    if(currentView === "case") viewProjects();
    else viewHome();
  });

  function tick(){
    var d = new Date();
    var c = document.getElementById("clock");
    if(c) c.textContent = d.toLocaleTimeString([], {hour:"2-digit", minute:"2-digit"})+" · "+d.toLocaleDateString([], {month:"short", day:"numeric"});
  }
  tick(); setInterval(tick, 30000);
  setTimeout(function(){ var b = document.getElementById("boot"); if(b) b.classList.add("done"); }, 2200);

  window.FMOS = {
    setCodecMedia: function(src){
      var box = document.getElementById("codecMedia");
      if(!box) return;
      if(/\.(mp4|webm|mov)(\?|$)/i.test(src)){
        box.innerHTML = '<video src="'+src+'" autoplay muted loop playsinline></video>';
      } else if(src.indexOf("<") === 0){
        box.innerHTML = src;
      } else {
        box.innerHTML = '<img src="'+src+'" alt="Federico"/>';
      }
    }
  };

  viewHome();
})();
