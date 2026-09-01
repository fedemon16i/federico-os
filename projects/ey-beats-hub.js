(function () {
  if (!window.EYBeats || !window.FM) return;
  var run = EYBeats.run;
  EYBeats.run = function (name) {
    if (name !== 'hub') return run(name);
    return FM.beat({
      skin: 'ey', device: 'desktop', cursors: 1, screens: window.EYScreens,
      steps: [
        { screen: 'hub.overview', say: 'Dashboard first. Alarms already shows 3.' },
        { ring: 1, to: '#go' },
        { tap: 1, to: '#go' },
        { screen: 'hub.alarms', say: 'Filter the area. Workbench is the hot field.' },
        { ring: 1, to: '#go' },
        { tap: 1, to: '#go' },
        { screen: 'hub.area', say: 'Same drop as Analyze — now it is an alarm with a funnel.' }
      ]
    });
  };
})();
