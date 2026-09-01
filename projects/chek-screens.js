(function (w) {
  function rv(i) { return 'fm-rv" style="animation-delay:' + (i * 60) + 'ms'; }
  function nav(t) {
    return '<div class="fm-nav" style="height:36px"><span class="on">'+t+'</span></div>';
  }
  function face(pending) {
    return '<div class="fm-cardface '+rv(0)+'" id="card"><div class="who">Hello, Catalina H.</div><div class="brand">cheK</div><div class="pan">•••• •••• •••• 7355</div><div class="meta">'+(pending?'Pending activation':'EXP 09/27')+'</div></div>';
  }
  w.ChekScreens = {
    'hub.home': function () {
      return nav('Chek Credit Card')+face(false)+
        '<div class="fm-actions '+rv(1)+'">'
        +'<div class="fm-action"><i></i><span>Show</span></div>'
        +'<div class="fm-action hot" id="go"><i></i><span>Pay</span><b>hot</b></div>'
        +'<div class="fm-action" id="act-block"><i></i><span>Block</span></div>'
        +'<div class="fm-action"><i></i><span>More</span></div></div>'
        +'<div class="fm-row '+rv(2)+'"><span>Available credit</span><span class="fm-chip on">$1,000,000</span></div>'
        +'<div class="fm-row '+rv(3)+'"><span>Used</span><span>$1,500</span></div>'
        +'<div class="fm-crumb '+rv(4)+'">View all movements</div>';
    },
    'pay.select': function () {
      return nav('View & Pay')
        +'<div class="fm-crumb '+rv(0)+'">Payment selection · valid until 09/25</div>'
        +'<div class="fm-radio-card '+rv(1)+'"><div class="fm-radio"><i></i></div><div><b>Full balance $1,000,000</b><span>Covers 100% — no interest</span></div></div>'
        +'<div class="fm-radio-card on '+rv(2)+'" id="go"><div class="fm-radio on"><i></i></div><div><b>Minimum $50,000</b><span>Interest applies on $950k</span></div></div>'
        +'<div class="fm-radio-card '+rv(3)+'"><div class="fm-radio"><i></i></div><div><b>Custom amount</b><span>Enter your own amount</span></div></div>'
        +'<button class="fm-btn" id="cta" type="button" style="width:100%;margin-top:8px">Confirm Payment</button>';
    },
    'pay.confirm': function () {
      return nav('Confirm Payment')
        +'<div class="fm-banner '+rv(0)+'" style="text-align:center"><div class="fm-crumb">Payment amount</div><b>$50,000</b><div class="fm-crumb">Minimum · Sep 25</div></div>'
        +'<div class="fm-row '+rv(1)+'"><span>From account</span><span>•••• 7355</span></div>'
        +'<div class="fm-row '+rv(2)+'"><span>Remaining</span><span class="fm-tag bad">$950,000</span></div>'
        +'<button class="fm-btn" id="go" type="button" style="width:100%;margin-top:8px">Confirm & Pay</button>';
    },
    'pay.done': function () {
      return nav('Payment Done')
        +'<div class="fm-banner '+rv(0)+'" style="text-align:center"><b>Payment sent</b><div class="fm-crumb">$50,000 · Sep 25 · •••• 7355</div></div>'
        +'<div class="fm-notice '+rv(1)+'">Available $1,000,000 · Used $950,000</div>'
        +'<button class="fm-btn" id="go" type="button" style="width:100%;margin-top:8px">Back to my card</button>';
    },
    'credit.home': function () {
      return nav('Credit Details')
        +'<div class="fm-kpis '+rv(0)+'" style="grid-template-columns:1fr 1fr"><div class="fm-kpi"><i>Available</i><b>$780,000</b></div><div class="fm-kpi"><i>Used</i><b>$220,000</b></div></div>'
        +'<div class="fm-row tx '+rv(1)+'"><span>Total credit line</span><span>$1,000,000</span></div>'
        +'<div class="fm-row tx '+rv(2)+'"><span>Cash advance</span><span>$100,000</span></div>'
        +'<div class="fm-row tx '+rv(3)+'"><span>Billing date</span><span>26th</span></div>'
        +'<button class="fm-btn" id="go" type="button" style="width:100%;margin-top:8px">Pay Now</button>';
    },
    'moves.list': function () {
      return nav('Movements')
        +'<div class="fm-crumb '+rv(0)+'">Available $780,000</div>'
        +'<div class="fm-row tx '+rv(1)+'"><span>Monthly deposit</span><span class="fm-tag ok">+$3,500,000</span></div>'
        +'<div class="fm-row tx '+rv(2)+'" id="go"><span>Unimarc</span><span>-$45,200</span></div>'
        +'<div class="fm-row tx '+rv(3)+'"><span>Netflix</span><span>-$12,990</span></div>'
        +'<div class="fm-row tx '+rv(4)+'"><span>Minimum payment</span><span class="fm-tag ok">+$50,000</span></div>';
    },
    'moves.detail': function () {
      return nav('Movement')
        +'<div class="fm-banner '+rv(0)+'"><div class="fm-crumb">Sep 18 · 12:30</div><b>Unimarc</b><div>-$45,200</div></div>'
        +'<div class="fm-row '+rv(1)+'"><span>Category</span><span>Groceries</span></div>'
        +'<div class="fm-row '+rv(2)+'"><span>Status</span><span class="fm-tag ok">Posted</span></div>'
        +'<div class="fm-row '+rv(3)+'"><span>Card</span><span>•••• 7355</span></div>';
    },
    'moves.statements': function () {
      return nav('Statements')
        +'<div class="fm-row '+rv(0)+'" id="go"><span>September 2023</span><span class="fm-tag warn">Open</span></div>'
        +'<div class="fm-row '+rv(1)+'"><span>August 2023</span><span class="fm-tag ok">Paid</span></div>'
        +'<div class="fm-row '+rv(2)+'"><span>July 2023</span><span class="fm-tag ok">Paid</span></div>';
    },
    'security.choose': function () {
      return nav('Security Help')
        +'<div class="fm-banner '+rv(0)+'" style="text-align:center"><b>We\'ve got you covered</b><div class="fm-crumb">Your card is protected. Choose what you need.</div></div>'
        +'<div class="fm-radio-card on '+rv(1)+'" id="go"><div class="fm-radio on"><i></i></div><div><b>Block card</b><span>Temporary — reversible anytime</span></div></div>'
        +'<div class="fm-radio-card '+rv(2)+'"><div class="fm-radio"><i></i></div><div><b>Report stolen</b><span>Permanent — new card issued</span></div></div>'
        +'<div class="fm-radio-card '+rv(3)+'"><div class="fm-radio"><i></i></div><div><b>Lost my card</b><span>Help finding it</span></div></div>';
    },
    'security.blocked': function () {
      return nav('Card Blocked')
        +'<div class="fm-banner '+rv(0)+'" style="text-align:center"><b>Card blocked</b><div class="fm-crumb">•••• 7355 · no new transactions</div></div>'
        +'<div class="fm-notice '+rv(1)+'">Unblock anytime. Scheduled payments stay active.</div>'
        +'<button class="fm-btn" id="go" type="button" style="width:100%;margin-top:8px">Back to my card</button>';
    },
    'onboard.start': function () {
      return nav('Activate card')
        +'<div class="fm-crumb '+rv(0)+'">New card</div>'
        +'<div class="fm-banner '+rv(1)+'"><b>Activate your Chek Credit Card</b><div class="fm-crumb">Identity stays inside Chek. No WebView.</div></div>'
        +face(true)
        +'<div class="fm-notice '+rv(2)+'">RUT match · SINACOFI · no extra forms</div>'
        +'<button class="fm-btn" id="go" type="button" style="width:100%;margin-top:8px">Activate card</button>';
    },
    'onboard.ok': function () {
      return nav('Activated')
        +'<div class="fm-banner '+rv(0)+'" style="text-align:center"><b>Card ready</b><div class="fm-crumb">Silent check passed. Still in Chek.</div></div>'
        +face(false)
        +'<button class="fm-btn" id="go" type="button" style="width:100%;margin-top:8px">Go to hub</button>';
    }
  };
})(window);
