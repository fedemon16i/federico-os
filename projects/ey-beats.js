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
          { screen: 'board.research', say: 'CSAT, NPS, CES and replay all point at the same pause.' },
          { say: 'Interviews confirm it: people thought the field was optional.' }
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
          { screen: 'board.design', say: 'One side draws in Figma. The other builds with an agent. Same offering ships.' }
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
          { screen: 'catalog.services', say: 'See details first. Requirements live on the card, not after submit.' },
          { tap: 1, to: '#info' },
          { tap: 1, to: '#go', say: 'Get started only after the requirements are visible.' },
          { screen: 'form.custom', say: 'Helper stays on the rail. The form is the same shell, with guidance.' },
          { tap: 1, to: '#go' },
          { screen: 'form.billing', say: 'Workspace is a step, not a surprise.' },
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
          { screen: 'pub.type', say: 'Nine kinds. Pick Service.' },
          { tap: 1, to: '#go' },
          { screen: 'pub.fields', say: 'Load a file or add fields by hand. Guidance is the next step.' },
          { tap: 1, to: '#go' },
          { screen: 'pub.live', say: 'AI review first. Then a human. Then it is live.' }
        ]
      }
    };
    if (!all[name]) name = 'analyze';
    return FM.beat(all[name]);
  }
  w.EYBeats = { run: run, names: ['measure','analyze','funnel','research','understand','design','hub','requester','publisher'] };
})(window);
