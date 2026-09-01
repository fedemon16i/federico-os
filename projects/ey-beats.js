(function (w) {
  var S = w.EYScreens;
  function run(name) {
    var all = {
      measure: {
        skin: 'ey', device: 'desktop', cursors: 0, screens: S,
        steps: [
          { screen: 'board.measure', say: 'Every screen in the catalog journey becomes a named event.' },
          { say: 'Home → catalog → services → form → submit. Taxonomy first.' }
        ]
      },
      analyze: {
        skin: 'ey', device: 'desktop', cursors: 3, screens: S,
        steps: [
          { screen: 'catalog.home', say: 'Three people land on the same catalog home.' },
          { tap: 1, to: '#go', say: 'Explore Catalog is obvious. The rest of the path is not.' },
          { screen: 'catalog.grid', say: 'Domain tiles plus All items. Services is where requests start.' },
          { tap: 1, to: '#go' },
          { screen: 'catalog.services', say: 'Two actions on the card: See details and Get started.' },
          { tap: 1, to: '#go' },
          { screen: 'form.custom', say: 'The form looks complete. The required field does not look required.' },
          { tap: 1, to: '#f2', say: 'Location is a real select — region cannot change later.' },
          { screen: 'form.loc' },
          { tip: 1, to: '#t2', text: 'Region cannot change later.' },
          { drop: 1, to: '#f1', text: 'Drop-off', say: 'User 1 leaves on instance name.' },
          { move: 1, to: '#f3', id: 'u2' },
          { drop: 1, to: '#f3', text: 'Drop-off' },
          { move: 1, to: '#f4', id: 'u3' },
          { drop: 1, to: '#f4', text: 'Drop-off', say: 'Same cliff, three places. Contact has no hint.' }
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
          { screen: 'board.research', say: 'CSAT, NPS, CES and replay all point at the same pause.' },
          { say: 'People thought the field was optional.' }
        ]
      },
      understand: {
        skin: 'ey', device: 'desktop', cursors: 0, screens: S,
        steps: [
          { screen: 'board.understand', say: 'Guidance + analytics + design in the same path.' },
          { say: 'Not a missing widget.' }
        ]
      },
      design: {
        skin: 'ey', device: 'desktop', cursors: 0, screens: S,
        steps: [
          { screen: 'board.design', say: 'Figma on one side. An agent on the other.' },
          { say: 'Both produce a screen. No magic merge.' }
        ]
      },
      hub: {
        skin: 'ey', device: 'desktop', cursors: 1, screens: S,
        steps: [
          { screen: 'hub.overview', say: 'Dashboard first. The table already lists the hot requests.' },
          { tap: 1, to: '#go' },
          { screen: 'hub.alarms', say: 'Alarms is where you act. Open the field that is actually hot.' },
          { tap: 1, to: '#go' }
        ]
      },
      requester: {
        skin: 'ey', device: 'desktop', cursors: 1, screens: S,
        steps: [
          { screen: 'catalog.services', say: 'See details first. Requirements live on the card.' },
          { tap: 1, to: '#info' },
          { screen: 'catalog.details', say: 'Description, resources, requirements — then Get started.' },
          { tap: 1, to: '#go' },
          { screen: 'form.walk', say: 'Walkthrough after the product: workspace.' },
          { tap: 1, to: '#go' },
          { screen: 'form.walk2', say: 'Team owns it after it is live.' },
          { tap: 1, to: '#go' },
          { screen: 'form.walk3', say: 'Billing is a step, not a surprise.' },
          { tap: 1, to: '#go' },
          { screen: 'form.help', say: 'Same form as Analyze, with helper on the rail.' },
          { tap: 1, to: '#go' },
          { screen: 'form.billing' },
          { tap: 1, to: '#go' },
          { screen: 'form.confirm', say: 'Submit is the last beat, not the first error.' },
          { tap: 1, to: '#go' },
          { veil: 1, kind: 'ok', text: 'Ready' }
        ]
      },
      publisher: {
        skin: 'ey', device: 'desktop', cursors: 1, screens: S,
        steps: [
          { screen: 'pub.queue', say: 'Publishers start in the queue, not on a blank form.' },
          { tap: 1, to: '#go' },
          { screen: 'pub.type', say: 'Pick Service.' },
          { tap: 1, to: '#go' },
          { screen: 'pub.fields', say: 'Load a file or add fields by hand.' },
          { tap: 1, to: '#go' },
          { screen: 'pub.guide', say: 'Mark “what is this”. Onboarding is a check, not a hidden page.' },
          { tap: 1, to: '#go' },
          { screen: 'pub.live', say: 'AI first. Then a human. Then it is live.' }
        ]
      }
    };
    if (!all[name]) name = 'analyze';
    return FM.beat(all[name]);
  }
  w.EYBeats = { run: run, names: ['measure','analyze','funnel','research','understand','design','hub','requester','publisher'] };
})(window);
