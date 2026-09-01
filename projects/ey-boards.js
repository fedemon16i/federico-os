(function () {
  if (!window.EYScreens) return;
  function rv(n){ return 'fm-rv" style="animation-delay:'+(n*80)+'ms'; }
  function gap(d, find, fs, own, os, n){
    return '<div class="fm-gap '+rv(n)+'"><div class="fm-card"><div class="t">'+find+'</div><div class="fm-crumb">'+fs+'</div></div><div class="arr">→</div><div class="fm-card"><div class="t">'+own+'</div><div class="fm-crumb">'+os+'</div></div></div>';
  }
  EYScreens['board.measure'] = function () {
    return '<div class="fm-diag-k">Information architecture</div><div class="fm-tree"><div class="node root '+rv(0)+'">Catalog home</div><div class="line"></div><div class="arms"><div class="col"><div class="node '+rv(1)+'">Services</div><div class="line"></div><div class="node '+rv(4)+'">Item detail</div></div><div class="col"><div class="node '+rv(2)+'">Request form</div><div class="line"></div><div class="node '+rv(5)+'">Review</div></div><div class="col"><div class="node '+rv(3)+'">Workbench</div><div class="line"></div><div class="node '+rv(6)+'">Instance</div></div></div></div><div class="fm-marklist"><div><b>Features tagged</b><div class="'+rv(7)+'"><i></i>Catalog tiles</div><div class="'+rv(8)+'"><i></i>Required service field</div><div class="'+rv(9)+'"><i></i>Order rail</div></div><div><b>Events</b><div class="'+rv(7)+'"><i></i>catalog_view</div><div class="'+rv(8)+'"><i></i>item_open</div><div class="'+rv(9)+'"><i></i>form_dropoff</div></div></div>';
  };
  EYScreens['board.funnel'] = function () {
    return '<div class="fm-diag-k">Drop-off</div><div class="fm-diag-h '+rv(0)+'">The path holds until the required field.</div><div class="fm-funnel"><div class="fn '+rv(1)+'"><div class="lbl">Home</div><div class="bar" style="--w:100%">Home <span>100</span></div></div><div class="fn '+rv(2)+'"><div class="lbl">Catalog</div><div class="bar" style="--w:88%">Catalog <span>88</span></div></div><div class="fn '+rv(3)+'"><div class="lbl">Services</div><div class="bar" style="--w:72%">Services <span>72</span></div></div><div class="fn '+rv(4)+'"><div class="lbl">Workbench</div><div class="bar" style="--w:54%">Workbench <span>54</span></div></div><div class="fn dead '+rv(5)+'"><div class="lbl">Required</div><div class="bar" style="--w:22%">Required <span>22</span></div></div></div>';
  };
  EYScreens['board.research'] = function () {
    return '<div class="fm-diag-k">Several studies · same friction</div><div class="fm-quad"><div class="fm-card '+rv(0)+'"><div class="fm-diag-k">Interviews · 2 voices</div><b>“I did not know which service to attach.”</b><div class="fm-crumb" style="margin-top:8px">“The field does not look required.”</div></div><div class="fm-card '+rv(1)+'"><div class="fm-diag-k">Scores · after the attempt</div><div class="fm-score"><i><b>CSAT</b>low</i><i><b>NPS</b>detractor</i><i><b>CES</b>high effort</i></div></div><div class="fm-replay '+rv(2)+'"><div class="ph"><b>Session replay</b><span>u1 · u2 · u3 · 0:18</span></div><div class="frame"><div class="fm-art" style="width:70%;margin-top:16px"><div class="h"></div><div class="p"></div><div class="cta"></div></div></div></div><div class="fm-card '+rv(3)+'"><div class="fm-diag-k">Task study</div><div class="fm-crumb">Request a workspace — stall on the unlabeled field.</div><div class="fm-path" style="margin-top:10px"><i class="on">start</i><i class="on">name</i><i class="on">required</i><i>leave</i></div></div></div>';
  };
  EYScreens['board.understand'] = function () {
    return '<div class="fm-diag-k">Evidence becomes work</div>'
      +gap('r0','No checklist before the form','People arrive cold','Design','Gate + copy',0)
      +gap('r1','Required service is unlabeled','Looks optional, is not','Content + product','Field + help',1)
      +gap('r2','No onboarding on first request','A tooltip is not a path','Analytics + design','Guide + event',2);
  };
  EYScreens['board.design'] = function () {
    return '<div class="fm-diag-k">Same designer · two workshops</div><div class="fm-pair"><div class="fm-shop '+rv(0)+'"><div class="bb">Figma · by hand</div><div class="fig"><div class="lay"><b>Layers</b><div>Frame · home</div><div>Hero</div><div>Catalog</div></div><div class="cv"><div class="fm-art"><div class="h"></div><div class="p"></div><div class="cta"></div></div></div><div class="lay"><b>Inspect</b><div>Fill token</div><div>Radius 8</div></div></div></div><div class="fm-shop '+rv(1)+'"><div class="bb">Agent · repo + prompt</div><div class="fm-cli">$ agent design --surface publisher<br>ok · screen drafted</div></div></div><div class="fm-row '+rv(3)+'" style="margin-top:10px">A screen left both workshops <span class="fm-tag ok">Design ready</span></div>';
  };
})();
