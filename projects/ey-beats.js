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
          { screen: 'catalog.home', say: 'People could browse a catalog. Three sessions start on the same home.' },
          { tap: 1, to: '#go', say: 'Explore Catalog is obvious. The rest of the path is not.' },
          { screen: 'catalog.grid', say: 'Domain tiles. Services is where a request actually starts.' },
          { tap: 1, to: '#go' },
          { screen: 'catalog.services', say: 'Two actions on the card. Help is still a two-line tooltip later.' },
          { tap: 1, to: '#go' },
          { screen: 'form.custom', say: 'The form looks complete. The required field does not look required.' },
          { tip: 1, to: '#t1', text: 'Need a unique name. 2–40 characters.', say: 'User 1 opens the name hint and leaves.' },
          { drop: 1, to: '#f1', text: 'user 1 · drop-off' },
          { move: 1, to: '#t2', id: 'u2' },
          { tip: 1, to: '#t2', text: 'Region cannot change later.' },
          { drop: 1, to: '#f2', text: 'user 2 · drop-off' },
          { move: 1, to: '#f3', id: 'u3' },
          { tip: 1, to: '#f3', text: 'At least one service. No default.' },
          { drop: 1, to: '#f3', text: 'user 3 · drop-off', say: 'Same cliff, three places. A tooltip is not a path.' }
        ]
      },
      funnel: {
        skin: 'ey', device: 'desktop', cursors: 0, screens: S,
        steps: [
          { screen: 'board.funnel', say: 'Analytics showed the stall on the form — not on billing.' },
          { say: 'The last bar is the cliff. Product assumed the field was obvious.' }
        ]
      },
      research: {
        skin: 'ey', device: 'desktop', cursors: 0, screens: S,
        steps: [
          { screen: 'board.research', say: 'Interviews, scores and replay all point at the same pause.' },
          { say: 'People thought the field was optional.' }
        ]
      },
      understand: {
        skin: 'ey', device: 'desktop', cursors: 0, screens: S,
        steps: [
          { screen: 'board.understand', say: 'Guidance, analytics and design had to live in the same path.' },
          { say: 'Not a missing widget.' }
        ]
      },
      design: {
        skin: 'ey', device: 'desktop', cursors: 0, screens: S,
        steps: [
          { screen: 'board.design', say: 'Figma on one side. An agent on the other. Same designer.' },
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
          { screen: 'catalog.services', say: 'Requirements live on the card — before Get started.' },
          { tap: 1, to: '#info' },
          { screen: 'catalog.details', say: 'Description, resources, requirements. Then Get started.' },
          { tap: 1, to: '#go' },
          { screen: 'form.walk', say: 'Walkthrough after the product: workspace.' },
          { tap: 1, to: '#go' },
          { screen: 'form.walk2', say: 'Team owns it after it is live.' },
          { tap: 1, to: '#go' },
          { screen: 'form.walk3', say: 'Billing is a step, not a surprise.' },
          { tap: 1, to: '#go' },
          { screen: 'form.help', say: 'Same form as Analyze, with a helper that stays open.' },
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
          { screen: 'pub.guide', say: 'Mark “what is this”. Onboarding is a check.' },
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
