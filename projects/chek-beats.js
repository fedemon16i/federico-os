(function (w) {
  var S = w.ChekScreens;
  function base() {
    return { skin: 'chek', device: 'phone', touch: true, cursors: 1, screens: S };
  }
  var all = {
    'chek-hub': Object.assign(base(), {
      steps: [
        { screen: 'hub.home', say: 'Hub first: card, four actions, available credit. Pay is the hot path.' },
        { tap: 1, to: '#go', say: 'Pay sits next to Block. The card itself is not the only entry.' }
      ]
    }),
    'chek-pay': Object.assign(base(), {
      steps: [
        { screen: 'hub.home', say: 'Payment starts on the hub, not a hidden menu.' },
        { tap: 1, to: '#go' },
        { screen: 'pay.select', say: 'Four options. Minimum shows the interest it will cost.' },
        { tap: 1, to: '#go' },
        { screen: 'pay.confirm', say: 'Summary before commit. Remaining balance stays visible.' },
        { tap: 1, to: '#go' },
        { screen: 'pay.done', say: 'Paid. Updated available and used, then back to the card.' }
      ]
    }),
    'chek-credit': Object.assign(base(), {
      steps: [
        { screen: 'credit.home', say: 'Available vs used, then the line items. No extra page for the total.' },
        { tap: 1, to: '#go', say: 'Pay Now from here. No extra navigation to start a payment.' }
      ]
    }),
    'chek-moves': Object.assign(base(), {
      steps: [
        { screen: 'moves.list', say: 'History with merchant names. Available stays in the header.' },
        { tap: 1, to: '#go' },
        { screen: 'moves.detail', say: 'One tap opens Unimarc: category, posted, card mask.' },
        { hold: 400 },
        { screen: 'moves.statements', say: 'Statements are the other tab. Open vs Paid, not a PDF dump.' }
      ]
    }),
    'chek-security': Object.assign(base(), {
      steps: [
        { screen: 'security.choose', say: 'Reassure first. Block is temporary. Stolen is permanent.' },
        { tap: 1, to: '#go' },
        { screen: 'security.blocked', say: 'Blocked. Scheduled payments stay. Unblock is still possible.' }
      ]
    }),
    'chek-onboard': Object.assign(base(), {
      steps: [
        { screen: 'onboard.start', say: 'Activation never leaves Chek. SINACOFI is silent, not a WebView.' },
        { tap: 1, to: '#go' },
        { screen: 'onboard.ok', say: 'Card ready on the same surface. Hub is one tap away.' }
      ]
    })
  };
  function run(name) {
    if (!all[name]) name = 'chek-hub';
    return FM.beat(all[name]);
  }
  w.ChekBeats = { run: run, names: Object.keys(all) };
})(window);
