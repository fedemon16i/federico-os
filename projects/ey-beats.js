(function (w) {
  var S = w.EYScreens;
  function run(name) {
    var all = {
      measure: {
        skin: 'ey', device: 'desktop', cursors: 0, screens: S,
        steps: [
          { screen: 'board.measure', say: 'Every screen in the catalog journey becomes a named event.' },
          { say: 'Home → catalog → services → form → submit. Taxonomy first, dashboards second.' }
        ]
      },
      analyze: {
        skin: 'ey', device: 'desktop', cursors: 3, screens: S,
        steps: [
          { screen: 'catalog.home', say: 'Three people land on the same catalog home.' },
          { tap: 1, to: '#go', say: 'Explore Catalog is obvious. The rest of the path is not.' },
          { screen: 'catalog.grid', say: 'Domain tiles. Services is where requests actually start.' },
          { tap: 1, to: '#go' },
          { screen: 'catalog.services', say: 'Same marketplace. Two actions on the card: details and start.' },
          { tap: 1, to: '#go' },
          { screen: 'form.custom', say: 'The form looks complete. The required field does not look required.' },
          { move: 1, to: '#f1', id: 'u1', say: 'User 1 pauses on instance name.' },
          { drop: 1, to: '#f1', text: 'Drop-off', say: '3 of 4 leave on the first unlabeled required field.' },
          { move: 1, to: '#f3', id: 'u2' },
          { drop: 1, to: '#f3', text: 'Drop-off' },
          { move: 1, to: '#f4', id: 'u3' },
          { drop: 1, to: '#f4', text: 'Drop-off', say: 'Contact search has no hint. Same cliff, three places.' }
        ]
      },
      funnel: {
        skin: 'ey', device: 'desktop', cursors: 0, screens: S,
        steps: [
          { screen: 'board.funnel', say: 'The funnel looks healthy until the required field.' },
          { say: 'That last bar is the cliff product assumed was billing.' }
        ]
      },
      research: {
        skin: 'ey', device: 'desktop', cursors: 0, screens: S,
        steps: [
          { screen: 'board.research', say: 'CSAT, NPS, interviews and replay all point at the same pause.' },
          { say: 'The session replay shows the cursor hover: people see the field, stop, and leave.' }
        ]
      },
      understand: {
        skin: 'ey', device: 'desktop', cursors: 0, screens: S,
        steps: [
          { screen: 'board.understand', say: 'The gap is not a missing widget. It is guidance + analytics + design in the same path.' }
        ]
      },
      design: {
        skin: 'ey', device: 'desktop', cursors: 0, screens: S,
        steps: [
          { screen: 'board.design', say: 'One side draws in Figma. The other builds with Claude Code / Design. Same component ships.' }
        ]
      },
      hub: {
        skin: 'ey', device: 'desktop', cursors: 1, screens: S,
        steps: [
          { screen: 'hub.overview', say: 'The hub already has the drop. Alarms is where you act.' },
          { tap: 1, to: '#go' },
          { screen: 'hub.alarms', say: 'Filter the area. Open the field that is actually hot.' },
          { tap: 1, to: '#go' }
        ]
      },
      requester: {
        skin: 'ey', device: 'desktop', cursors: 1, screens: S,
        steps: [
          /* 1 — catalog: card shows requirements badge, "view more" tooltip open */
          { screen: 'req.services', say: 'Requirements are visible on the card — 3 required fields, 8 min setup — before anything is clicked.' },
          { tap: 1, to: '#info', say: '"View more" opens a rich tooltip: each field with icons, rules, and expected values.' },
          { tap: 1, to: '#go', say: 'Get started only after the requester knows what they need.' },
          /* 2 — workspace first */
          { screen: 'req.form.workspace', say: 'Workspace comes first — not buried in billing. Selecting it unlocks pre-fill.' },
          { tap: 1, to: '#go', say: 'north-studio is ready. Selecting it pre-fills Region and Contact automatically.' },
          /* 3 — fields with mini-tooltip and AI pre-fill */
          { screen: 'req.form.fields', say: 'AI pre-filled Region and Point of contact. The tooltip on Instance name shows examples, rules, and what "required" actually means.' },
          { tap: 1, to: '#go', say: 'No hesitation. The field is clear, the example is there, and every required field is labeled.' },
          /* 4 — AI assistance + walkthrough */
          { screen: 'req.form.ai', say: 'AI Assistance opens below order details. The requester can delegate final steps — confirm workspace, notify contact, submit — to the agent.' },
          { tap: 1, to: '#go' },
          { veil: 1, kind: 'ok', text: 'Order submitted — no drop-off' }
        ]
      },
      publisher: {
        skin: 'ey', device: 'desktop', cursors: 1, screens: S,
        steps: [
          /* 1 — workspace overview */
          { screen: 'pub.workspace', say: 'Publishers start in their workspace, not a blank form. Their published items are right there.' },
          { tap: 1, to: '#go', say: 'New offering starts from context, not from zero.' },
          /* 2 — type selection */
          { screen: 'pub.type', say: 'Nine types. The wizard knows which fields and helper tools apply based on what is selected.' },
          { tap: 1, to: '#go', say: 'Service — compute path.' },
          /* 3 — helper tools wizard step */
          { screen: 'pub.wizard.tools', say: 'Step 2: what support will you give requesters? Contextual tooltips, AI ingest with PRD, and a step-by-step walkthrough — all pre-selected.' },
          { say: 'AI ingest means: the requester drops a product brief and the form fills itself, analyzes complexity, and builds a request wizard assistant.' },
          { tap: 1, to: '#go' },
          /* 4 — fields with PRD drop */
          { screen: 'pub.fields', say: 'Drop the product file — PRD, requirements doc, any spec. AI reads it and fills the form.' },
          { tap: 1, to: '#f1' },
          { tap: 1, to: '#go', say: 'Or fill manually. Either way, the AI has pre-validated categories and estimated complexity.' },
          /* 5 — live */
          { screen: 'pub.live', say: 'AI review, then human. Then it is live — with tooltips, AI ingest, and walkthrough active for every requester.' }
        ]
      }
    };
    if (!all[name]) name = 'analyze';
    return FM.beat(all[name]);
  }
  w.EYBeats = { run: run, names: ['measure','analyze','funnel','research','understand','design','hub','requester','publisher'] };
})(window);
