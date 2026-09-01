(function () {
  if (!window.EYScreens) return;
  function rv(n){ return 'fm-rv" style="animation-delay:'+(n*70)+'ms'; }
  EYScreens['board.measure'] = function () {
    return '<div class="fm-diag-k">Information architecture</div>'
      +'<div class="fm-tree">'
      +'<div class="node root '+rv(0)+'">Catalog home</div><div class="line"></div>'
      +'<div class="arms">'
      +'<div class="col"><div class="node '+rv(1)+'">Services</div><div class="line"></div><div class="node '+rv(2)+'">Item detail</div></div>'
      +'<div class="col"><div class="node '+rv(1)+'">Request form</div><div class="line"></div><div class="node '+rv(2)+'">Review</div></div>'
      +'<div class="col"><div class="node '+rv(1)+'">Workbench</div><div class="line"></div><div class="node '+rv(2)+'">Instance</div></div>'
      +'</div></div>'
      +'<div class="fm-marklist">'
      +'<div><b>Features tagged</b><div class="'+rv(3)+'"><i></i>Catalog tiles</div><div class="'+rv(4)+'"><i></i>Required service field</div><div class="'+rv(5)+'"><i></i>Order rail</div></div>'
      +'<div><b>Events</b><div class="'+rv(3)+'"><i></i>catalog_view</div><div class="'+rv(4)+'"><i></i>item_open</div><div class="'+rv(5)+'"><i></i>form_dropoff</div></div>'
      +'</div>';
  };
  EYScreens['board.funnel'] = function () {
    return '<div class="fm-diag-k">Drop-off</div><div class="fm-diag-h '+rv(0)+'">The path holds until the required field.</div>'
      +'<div class="fm-funnel">'
      +'<div class="fn '+rv(1)+'"><div class="lbl">Home</div><div class="bar" style="--w:100%">Home <span>100</span></div></div>'
      +'<div class="fn '+rv(2)+'"><div class="lbl">Catalog</div><div class="bar" style="--w:88%">Catalog <span>88</span></div></div>'
      +'<div class="fn '+rv(3)+'"><div class="lbl">Services</div><div class="bar" style="--w:72%">Services <span>72</span></div></div>'
      +'<div class="fn '+rv(4)+'"><div class="lbl">Workbench</div><div class="bar" style="--w:54%">Workbench <span>54</span></div></div>'
      +'<div class="fn dead '+rv(5)+'"><div class="lbl">Required</div><div class="bar" style="--w:22%">Required <span>22</span></div></div>'
      +'</div>';
  };
  EYScreens['board.research'] = function () {
    return '<div class="fm-diag-k">Several studies · same friction</div><div class="fm-quad">'
      +'<div class="fm-card '+rv(0)+'"><div class="fm-diag-k">Interviews</div><b>I did not know which service to attach.</b><div class="fm-crumb">The field does not look required.</div></div>'
      +'<div class="fm-card '+rv(1)+'"><div class="fm-diag-k">Scores</div><div class="fm-score"><i><b>CSAT</b>low</i><i><b>NPS</b>cold</i><i><b>CES</b>high effort</i></div></div>'
      +'<div class="fm-replay '+rv(2)+'"><div class="ph"><b>Replay</b><span>u1 u2 u3 · 0:18</span></div><div class="frame"></div></div>'
      +'<div class="fm-card '+rv(3)+'"><div class="fm-diag-k">Task</div><div class="fm-crumb">Stall on the unlabeled field.</div><div class="fm-path"><i class="on">start</i><i class="on">name</i><i class="on">required</i><i>leave</i></div></div>'
      +'</div>';
  };
  EYScreens['board.understand'] = function () {
    return '<div class="fm-diag-k">The gap</div><div class="fm-diag-h '+rv(0)+'">Guidance + analytics + design in the same path.</div>'
      +'<div class="fm-tiles"><div class="fm-tile '+rv(1)+'"><b>Design</b><span>Figma + agents</span></div><div class="fm-tile '+rv(2)+'"><b>Content</b><span>Catalog copy</span></div><div class="fm-tile '+rv(3)+'"><b>Analytics</b><span>Pendo</span></div></div>';
  };
  EYScreens['board.design'] = function () {
    return '<div class="fm-diag-k">Same designer · two workshops</div>'
      +'<div class="fm-pair">'
      +'<div class="fm-shop '+rv(0)+'"><div class="bb">Figma · by hand</div><div class="cv"><div class="fm-art"><div class="h"></div><div class="p"></div><div class="p"></div><div class="cta"></div></div></div></div>'
      +'<div class="fm-shop '+rv(1)+'"><div class="bb">Agent · repo + prompt</div><div class="fm-cli">$ agent design --surface publisher<br>same constraint as the Figma file<br>ok · screen drafted</div></div>'
      +'</div>'
      +'<div class="fm-row '+rv(3)+'" style="margin-top:10px">A screen left both workshops <span class="fm-tag ok">Design ready</span></div>';
  };
})();
