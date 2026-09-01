/* catalog.details must not use this — FM.beat calls screens unbound. */
(function () {
  if (!window.EYScreens) return;
  var modal = '<div class="fm-modal"><div class="fm-sheet"><div class="fm-crumb">Description · Resources · Requirements</div><b>Workbench</b><p class="fm-crumb">Need a workspace, a team, and a billing account before submit.</p><div class="fm-notice">Required: instance name, location, point of contact, one service.</div><div style="display:flex;gap:8px;margin-top:10px"><button class="fm-btn ghost" type="button">Close</button><button class="fm-btn" id="go" type="button">Get started</button></div></div></div>';
  EYScreens['catalog.details'] = function () {
    return EYScreens['catalog.services']() + modal;
  };
})();
