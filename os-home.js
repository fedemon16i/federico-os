(function(){
  var ABILITIES=[
    {id:"map",cat:"PRODUCT",t:"Product Mapping",d:"Every page and feature tagged as an event.",tools:["pendo","ga4"]},
    {id:"track",cat:"ANALYTICS",t:"Usage Tracking",d:"Clicks, drop-offs, who is behind each one.",tools:["pendo","mixpanel"]},
    {id:"seg",cat:"UXR",t:"Segmentation",d:"Strugglers grouped — sessions replayed.",tools:["pendo","qualtrics"]},
    {id:"syn",cat:"UXR",t:"Research Synthesis",d:"Interviews and tests ranked into actions.",tools:["maze","claude"]},
    {id:"par",cat:"DESIGN",t:"Parallel Design",d:"Figma by hand + AI at once.",tools:["figma","claude"]},
    {id:"dep",cat:"AI+DEV",t:"Deployment",d:"Ship to dev, staging, prod.",tools:["replit","github"]},
    {id:"hub",cat:"AI+DEV",t:"Analytics Hub",d:"Dashboard built with Claude Code.",tools:["pendo","claude"]},
    {id:"sys",cat:"SYSTEMS",t:"Connected Systems",d:"One design system, many teams.",tools:["figma","github"]}
  ];
  var PROJECTS=[
    {id:"ey",name:"EY Fabric",meta:"XDA · 2024—",pc:"#c8a84b",url:"https://fedemon16i.github.io/federico-portfolio/projects/ey-fabric.html"},
    {id:"bc",name:"Blockchains",meta:"Globant",pc:"#22d4c8",url:"https://fedemon16i.github.io/federico-portfolio/projects/blockchain.html"},
    {id:"chek",name:"Chek",meta:"Applaudo",pc:"#a78bfa",url:"https://fedemon16i.github.io/federico-portfolio/projects/chek.html"},
    {id:"cus",name:"Customs ES",meta:"Applaudo",pc:"#4a9eff",url:"https://fedemon16i.github.io/federico-portfolio/projects/customs.html"},
    {id:"dc",name:"DollarCity",meta:"Applaudo",pc:"#34d399",url:"https://fedemon16i.github.io/federico-portfolio/projects/dollarcity.html"}
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
    "Open <em>Projects</em> for case folders. Each keeps its own design system.",
    "This channel is one-way for now — full codec chat comes later.",
    "Drop a video or gif into the holo frame when ready."
  ];

  var themeBtn=document.getElementById("themeBtn");
  function applyTheme(t){
    document.documentElement.setAttribute("data-theme",t);
    try{localStorage.setItem("fmos-theme",t)}catch(e){}
  }
  try{
    var saved=localStorage.getItem("fmos-theme");
    if(saved)applyTheme(saved);
  }catch(e){}
  if(themeBtn)themeBtn.addEventListener("click",function(){
    var cur=document.documentElement.getAttribute("data-theme")||"dark";
    applyTheme(cur==="dark"?"light":"dark");
  });

  var bioEl=document.getElementById("bioType"),dotsEl=document.getElementById("bioDots");
  var bioIdx=0,bioGen=0;
  if(dotsEl){
    dotsEl.innerHTML=BIO.map(function(_,i){return "<span data-i=\""+i+"\""+(i===0?" class=\"on\"":"")+"></span>"}).join("");
    dotsEl.querySelectorAll("span").forEach(function(d){
      d.addEventListener("click",function(){goBio(+d.getAttribute("data-i"))});
    });
  }
  function goBio(n){
    bioIdx=n;bioGen++;
    if(dotsEl)dotsEl.querySelectorAll("span").forEach(function(d,i){d.classList.toggle("on",i===n)});
    typeBio(BIO[n],bioGen);
  }
  function typeBio(line,gen){
    if(!bioEl)return;
    bioEl.textContent="";
    var i=0;
    (function step(){
      if(gen!==bioGen)return;
      if(i<=line.t.length){
        bioEl.textContent=line.t.slice(0,i);
        i++;
        setTimeout(step,18+Math.random()*12);
      }else{
        bioEl.innerHTML=line.h;
        setTimeout(function(){
          if(gen!==bioGen)return;
          goBio((bioIdx+1)%BIO.length);
        },4200);
      }
    })();
  }
  if(bioEl)goBio(0);

  var codecI=0;
  setInterval(function(){
    codecI=(codecI+1)%CODEC_LINES.length;
    var el=document.getElementById("codecLine");
    if(!el)return;
    el.style.animation="none";
    el.offsetHeight;
    el.style.animation="";
    el.innerHTML=CODEC_LINES[codecI];
  },8000);

  // subtle frequency drift
  setInterval(function(){
    var el=document.getElementById("freqNum");
    if(!el)return;
    var base=140 + Math.random()*1.2;
    el.textContent=base.toFixed(2);
  },2800);

  var grid=document.getElementById("abilityGrid");
  if(grid){
    ABILITIES.forEach(function(a){
      var el=document.createElement("button");
      el.type="button";
      el.className="ability";
      el.setAttribute("role","listitem");
      el.innerHTML="<div class=\"ic\" aria-hidden=\"true\"></div><div class=\"nm\">"+a.t+"</div><div class=\"ds\">"+a.d+"</div>";
      el.addEventListener("click",function(){openAbility(a)});
      grid.appendChild(el);
    });
  }

  var caseList=document.getElementById("caseList");
  if(caseList){
    PROJECTS.forEach(function(p){
      var el=document.createElement("div");
      el.className="vol-item";
      el.style.setProperty("--pc",p.pc);
      el.innerHTML="<div class=\"ico\">"+p.id.slice(0,2).toUpperCase()+"</div><div><div class=\"nm\">"+p.name+"</div><div class=\"mt\">"+p.meta+"</div></div>";
      el.addEventListener("click",function(){openCase(p)});
      caseList.appendChild(el);
    });
  }

  var windows={},zTop=60;
  function focus(w){zTop++;w.style.zIndex=zTop}

  function makeWin(id,title,path,bodyHtml,opts){
    opts=opts||{};
    if(windows[id]){
      windows[id].style.display="";
      focus(windows[id]);
      return windows[id];
    }
    var w=document.createElement("div");
    w.className="win";
    w.dataset.id=id;
    var n=Object.keys(windows).length;
    w.style.width="min("+(opts.width||560)+"px, 90vw)";
    w.style.height="min("+(opts.height||400)+"px, 70vh)";
    if(n>0){
      w.style.marginLeft=(n*16)+"px";
      w.style.marginTop=(n*12)+"px";
    }
    w.innerHTML=
      "<div class=\"win-bar\">"+
        "<div class=\"win-dots\"><i class=\"c\" data-a=\"close\"></i><i class=\"n\" data-a=\"min\"></i><i class=\"x\" data-a=\"max\"></i></div>"+
        "<div class=\"win-title\"><b>"+title+"</b></div>"+
        (path?"<div class=\"win-path\">"+path+"</div>":"")+
      "</div>"+
      "<div class=\"win-body\">"+bodyHtml+"</div>"+
      "<div class=\"win-resize\"></div>";
    document.body.appendChild(w);
    windows[id]=w;
    focus(w);
    wire(w,id);
    return w;
  }

  function wire(w,id){
    var bar=w.querySelector(".win-bar");
    w.addEventListener("mousedown",function(){focus(w)});
    w.querySelectorAll(".win-dots i").forEach(function(dot){
      dot.addEventListener("click",function(e){
        e.stopPropagation();
        var a=dot.getAttribute("data-a");
        if(a==="close"){w.remove();delete windows[id]}
        if(a==="min")w.style.display="none";
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
    window.addEventListener("mousemove",function(e){
      if(!drag)return;
      w.style.left=(ox+e.clientX-sx)+"px";
      w.style.top=(oy+e.clientY-sy)+"px";
    });
    window.addEventListener("mouseup",function(){drag=false});

    var rz=w.querySelector(".win-resize"),resizing=false,rsx,rsy,rw,rh;
    rz.addEventListener("mousedown",function(e){
      e.stopPropagation();
      if(w.classList.contains("maximized"))return;
      resizing=true;rsx=e.clientX;rsy=e.clientY;
      var r=w.getBoundingClientRect();
      rw=r.width;rh=r.height;
      w.style.left=r.left+"px";w.style.top=r.top+"px";w.style.transform="none";
    });
    window.addEventListener("mousemove",function(e){
      if(!resizing)return;
      w.style.width=Math.max(320,rw+(e.clientX-rsx))+"px";
      w.style.height=Math.max(220,rh+(e.clientY-rsy))+"px";
    });
    window.addEventListener("mouseup",function(){resizing=false});
  }

  function openProjects(){
    var cards=PROJECTS.map(function(p){
      return "<div class=\"folder-card\" data-case=\""+p.id+"\" style=\"--pc:"+p.pc+"\">"+
        "<div class=\"fi\">"+p.id.slice(0,2).toUpperCase()+"</div>"+
        "<div class=\"fn\">"+p.name+"</div>"+
        "<div class=\"fm\">"+p.meta+"</div></div>";
    }).join("");
    var body=
      "<div class=\"ph\" style=\"max-width:none;padding:14px 16px 4px\">"+
        "<div class=\"k\">// DIRECTORY</div><h3>PROJECTS</h3>"+
        "<p>Case folders — each volume keeps its own design system.</p></div>"+
      "<div class=\"folder-grid\">"+cards+"</div>";
    var w=makeWin("projects","Projects","/volumes/projects",body,{width:620,height:460});
    w.querySelectorAll(".folder-card").forEach(function(card){
      card.addEventListener("click",function(){
        var p=PROJECTS.find(function(x){return x.id===card.getAttribute("data-case")});
        if(p)openCase(p);
      });
    });
  }

  function openCase(p){
    var body="<iframe title=\""+p.name+"\" src=\""+p.url+"\" loading=\"lazy\"></iframe>";
    makeWin("case-"+p.id,p.name,p.url,body,{width:900,height:620});
  }

  function openAbility(a){
    var body=
      "<div class=\"ph\">"+
        "<div class=\"k\">// "+a.cat+"</div><h3>"+a.t+"</h3>"+
        "<p>"+a.d+"</p>"+
        "<p style=\"font-family:Share Tech Mono,monospace;font-size:11px;color:var(--faint)\">tools · "+a.tools.join(" · ")+"</p>"+
      "</div>";
    makeWin("ab-"+a.id,a.t,"/matrix/"+a.id,body,{width:420,height:300});
  }

  function openAbilities(){
    var rows=ABILITIES.map(function(a){
      return "<div class=\"vol-item\" data-ab=\""+a.id+"\" style=\"--pc:#d97757;margin:0 10px 6px\">"+
        "<div class=\"ico\" aria-hidden=\"true\">MX</div>"+
        "<div><div class=\"nm\">"+a.t+"</div><div class=\"mt\">"+a.cat+"</div></div></div>";
    }).join("");
    var body=
      "<div class=\"ph\" style=\"padding-bottom:6px\">"+
        "<div class=\"k\">// MATRIX</div><h3>ABILITIES</h3>"+
        "<p>Eight capabilities — reflection of the portfolio skill stage.</p></div>"+rows;
    var w=makeWin("abilities","Abilities","/matrix",body,{width:400,height:480});
    w.querySelectorAll("[data-ab]").forEach(function(row){
      row.addEventListener("click",function(){
        var a=ABILITIES.find(function(x){return x.id===row.getAttribute("data-ab")});
        if(a)openAbility(a);
      });
    });
  }

  function openResume(){
    makeWin("resume","Resume","/volumes/resume",
      "<div class=\"ph\"><div class=\"k\">// FILE</div><h3>RESUME</h3>"+
      "<p>Federico Monroy — UX / Product · behavioral analytics. Cordoba, AR.</p>"+
      "<p><a href=\"https://fedemon16i.github.io/federico-portfolio/resume.html\" target=\"_blank\" rel=\"noopener\">Open resume →</a></p></div>",
      {width:420,height:300});
  }

  function openContact(){
    makeWin("contact","Contact","/volumes/contact",
      "<div class=\"ph\"><div class=\"k\">// COMMS</div><h3>CONTACT</h3>"+
      "<p>Channels on the production portfolio.</p>"+
      "<p><a href=\"https://fedemon16i.github.io/federico-portfolio/contact.html\" target=\"_blank\" rel=\"noopener\">Open contact →</a></p></div>",
      {width:400,height:280});
  }

  function route(id){
    if(id==="home"){
      Object.keys(windows).forEach(function(k){windows[k].style.display="none"});
      return;
    }
    if(id==="projects")return openProjects();
    if(id==="abilities")return openAbilities();
    if(id==="resume")return openResume();
    if(id==="contact")return openContact();
  }

  document.querySelectorAll("[data-open]").forEach(function(el){
    el.addEventListener("click",function(){route(el.getAttribute("data-open"))});
  });

  function tick(){
    var d=new Date();
    var c=document.getElementById("clock");
    if(c)c.textContent=d.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})+" · "+d.toLocaleDateString([],{month:"short",day:"numeric"});
  }
  tick();setInterval(tick,30000);

  setTimeout(function(){
    var b=document.getElementById("boot");
    if(b)b.classList.add("done");
  },2200);

  window.FMOS={
    setCodecMedia:function(src){
      var box=document.getElementById("codecMedia");
      if(!box)return;
      if(/\.(mp4|webm|mov)(\?|$)/i.test(src)){
        box.innerHTML="<video src=\""+src+"\" autoplay muted loop playsinline></video>";
      }else if(src.indexOf("<")===0){
        box.innerHTML=src;
      }else{
        box.innerHTML="<img src=\""+src+"\" alt=\"Federico\"/>";
      }
    }
  };
})();
