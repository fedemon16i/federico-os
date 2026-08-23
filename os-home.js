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
    {id:"map",cat:"PRODUCT",t:"Product Mapping",d:"Every page and feature tagged as an event.",tools:["pendo","ga4"]},
    {id:"track",cat:"ANALYTICS",t:"Usage Tracking",d:"Clicks, drop-offs, who is behind each one.",tools:["pendo","mixpanel"]},
    {id:"seg",cat:"UXR",t:"Segmentation",d:"Strugglers grouped — sessions replayed.",tools:["pendo","qualtrics"]},
    {id:"syn",cat:"UXR",t:"Research Synthesis",d:"Interviews and tests ranked into actions.",tools:["maze","claude"]},
    {id:"par",cat:"DESIGN",t:"Parallel Design",d:"Figma by hand + AI at once.",tools:["figma","claude"]},
    {id:"dep",cat:"AI+DEV",t:"Deployment",d:"Ship to dev, staging, prod.",tools:["replit","github"]},
    {id:"hub",cat:"AI+DEV",t:"Analytics Hub",d:"Dashboard built with Claude Code.",tools:["pendo","claude"]},
    {id:"sys",cat:"SYSTEMS",t:"Connected Systems",d:"One design system, many teams.",tools:["figma","github"]}
  ];
  var PROJECTS = [
    {id:"ey",name:"EY Fabric",meta:"XDA · 2024—",pc:"#c8a84b",url:"https://fedemon16i.github.io/federico-portfolio/projects/ey-fabric.html"},
    {id:"bc",name:"Blockchains",meta:"Globant",pc:"#22d4c8",url:"https://fedemon16i.github.io/federico-portfolio/projects/blockchain.html"},
    {id:"chek",name:"Chek",meta:"Applaudo",pc:"#a78bfa",url:"https://fedemon16i.github.io/federico-portfolio/projects/chek.html"},
    {id:"cus",name:"Customs ES",meta:"Applaudo",pc:"#4a9eff",url:"https://fedemon16i.github.io/federico-portfolio/projects/customs.html"},
    {id:"dc",name:"DollarCity",meta:"Applaudo",pc:"#34d399",url:"https://fedemon16i.github.io/federico-portfolio/projects/dollarcity.html"}
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
    "Open <em>Projects</em> for case folders. Each keeps its own design system.",
    "This channel is one-way for now — full codec chat comes later.",
    "Drop a video or gif into the holo frame when ready."
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
      '<div class="hp-bio" id="bioType"></div>'+
      '<div class="hp-dots" id="bioDots"></div>';
    centerBody.querySelectorAll(".photo-cell").forEach(function(cell){
      cell.addEventListener("click", function(){ openLb(+cell.getAttribute("data-i")); });
    });
    typeBio(document.getElementById("bioType"), document.getElementById("bioDots"));
  }

  function viewProjects(){
    currentView = "projects";
    setActiveNav("projects");
    setChrome("PROJECTS", "DIRECTORY · 5", {close: true});
    var cards = PROJECTS.map(function(p, i){
      return '<div class="folder-card" data-i="'+i+'" style="--pc:'+p.pc+'">'+
        '<div class="fi">'+p.id.slice(0,2).toUpperCase()+'</div>'+
        '<div class="fn">'+p.name+'</div>'+
        '<div class="fm">'+p.meta+'</div></div>';
    }).join("");
    centerBody.innerHTML =
      '<p style="font-family:Share Tech Mono,monospace;font-size:12px;color:var(--dim);margin-bottom:16px;max-width:480px">Case folders — each keeps its own design system.</p>'+
      '<div class="folder-grid">'+cards+'</div>';
    centerBody.querySelectorAll(".folder-card").forEach(function(card){
      card.addEventListener("click", function(){ openCase(+card.getAttribute("data-i")); });
    });
  }

  function openCase(i){
    caseIdx = i;
    currentView = "case";
    setActiveNav("projects");
    var p = PROJECTS[i];
    setChrome(p.name, (i+1)+" / "+PROJECTS.length, {nav: true, close: true, caseMode: true});
    centerBody.innerHTML = '<iframe class="case-frame" title="'+p.name+'" src="'+p.url+'" loading="lazy"></iframe>';
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
        '<div><div class="ar-cat">'+a.cat+'</div><div class="ar-nm">'+a.t+'</div><div class="ar-ds">'+a.d+'</div></div>'+
      '</button>';
    }).join("");
    centerBody.innerHTML =
      '<p style="font-family:Share Tech Mono,monospace;font-size:12px;color:var(--dim);margin-bottom:14px">Eight capabilities — reflection of the portfolio skill stage.</p>'+
      '<div class="ability-list">'+rows+'</div>';
  }

  function viewResume(){
    currentView = "resume";
    setActiveNav("resume");
    setChrome("RESUME", "FILE", {close: true});
    centerBody.innerHTML =
      '<div class="ph"><div class="k">// FILE</div><h3>RESUME</h3>'+
      '<p>Federico Monroy — UX / Product · behavioral analytics. Córdoba, AR.</p>'+
      '<p><a href="https://fedemon16i.github.io/federico-portfolio/resume.html" target="_blank" rel="noopener">Open resume →</a></p></div>';
  }

  function viewContact(){
    currentView = "contact";
    setActiveNav("contact");
    setChrome("CONTACT", "COMMS", {close: true});
    centerBody.innerHTML =
      '<div class="ph"><div class="k">// COMMS</div><h3>CONTACT</h3>'+
      '<p>Channels on the production portfolio.</p>'+
      '<p><a href="https://fedemon16i.github.io/federico-portfolio/contact.html" target="_blank" rel="noopener">Open contact →</a></p></div>';
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
