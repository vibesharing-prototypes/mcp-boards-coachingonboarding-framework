<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Diligent Boards: Trial Onboarding Framework</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --red: #E8363D;
    --red-light: #FCE8E9;
    --ink: #111111;
    --ink-2: #444444;
    --ink-3: #888888;
    --rule: #E5E5E5;
    --bg: #FAFAF8;
    --white: #FFFFFF;
    --green: #1A6B35;
    --green-light: #EAF3DE;
    --blue: #0C447C;
    --blue-light: #E6F1FB;
    --amber: #854F0B;
    --amber-light: #FAEEDA;
    --purple: #3C3489;
    --purple-light: #EEEDFE;
    --serif: 'DM Serif Display', Georgia, serif;
    --sans: 'DM Sans', system-ui, sans-serif;
  }

  html { font-size: 16px; }

  body {
    font-family: var(--sans);
    background: var(--bg);
    color: var(--ink);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  /* ── HEADER ── */
  .header {
    background: var(--ink);
    padding: 48px 64px 52px;
    position: relative;
    overflow: hidden;
  }

  .header::after {
    content: '';
    position: absolute;
    top: 0; right: 0;
    width: 40%;
    height: 100%;
    background: var(--red);
    clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
    opacity: 0.12;
  }

  .header-eyebrow {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--red);
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .header-eyebrow::before {
    content: '';
    display: block;
    width: 24px;
    height: 1.5px;
    background: var(--red);
  }

  .header h1 {
    font-family: var(--serif);
    font-size: clamp(28px, 4vw, 44px);
    font-weight: 400;
    color: var(--white);
    line-height: 1.15;
    max-width: 580px;
    margin-bottom: 18px;
  }

  .header h1 em {
    font-style: italic;
    color: #FFCDD0;
  }

  .header-sub {
    font-size: 14px;
    color: rgba(255,255,255,0.5);
    max-width: 500px;
    line-height: 1.6;
  }

  .header-meta {
    display: flex;
    gap: 20px;
    margin-top: 32px;
    flex-wrap: wrap;
  }

  .meta-pill {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: rgba(255,255,255,0.45);
    padding: 5px 12px;
    border: 0.5px solid rgba(255,255,255,0.12);
    border-radius: 20px;
  }

  .meta-pill strong { color: rgba(255,255,255,0.75); font-weight: 500; }

  /* ── LAYOUT ── */
  .page { max-width: 900px; margin: 0 auto; padding: 0 32px 80px; }

  /* ── SECTION ── */
  .section { padding: 52px 0; border-bottom: 0.5px solid var(--rule); }
  .section:last-child { border-bottom: none; }

  .section-eyebrow {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--red);
    margin-bottom: 8px;
  }

  .section-title {
    font-family: var(--serif);
    font-size: clamp(20px, 3vw, 28px);
    font-weight: 400;
    color: var(--ink);
    margin-bottom: 10px;
    line-height: 1.2;
  }

  .section-intro {
    font-size: 14px;
    color: var(--ink-2);
    max-width: 620px;
    line-height: 1.7;
    margin-bottom: 32px;
  }

  /* ── JOURNEY TIMELINE ── */
  .timeline {
    display: flex;
    flex-direction: column;
    gap: 0;
    position: relative;
  }

  .timeline::before {
    content: '';
    position: absolute;
    left: 19px;
    top: 28px;
    bottom: 28px;
    width: 1px;
    background: var(--rule);
  }

  .t-item {
    display: flex;
    gap: 20px;
    padding: 20px 0;
    position: relative;
  }

  .t-node {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 600;
    flex-shrink: 0;
    position: relative;
    z-index: 1;
    border: 2px solid var(--white);
  }

  .t-body { flex: 1; padding-top: 8px; }

  .t-phase {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 4px;
  }

  .t-title {
    font-size: 15px;
    font-weight: 500;
    color: var(--ink);
    margin-bottom: 4px;
  }

  .t-window {
    font-size: 11px;
    color: var(--ink-3);
    margin-bottom: 8px;
  }

  .t-desc {
    font-size: 13px;
    color: var(--ink-2);
    line-height: 1.6;
    max-width: 580px;
  }

  .t-tags {
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    margin-top: 10px;
  }

  .t-tag {
    font-size: 11px;
    padding: 2px 9px;
    border-radius: 20px;
    font-weight: 500;
  }

  /* ── CHECKLIST STATES ── */
  .checklist-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
    margin-top: 8px;
  }

  .cl-card {
    border: 0.5px solid var(--rule);
    border-radius: 12px;
    overflow: hidden;
  }

  .cl-card-header {
    padding: 12px 14px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.5px solid var(--rule);
  }

  .cl-state-label {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .cl-card-body {
    background: #FFFFFF;
    border: 0.5px solid var(--rule);
    padding: 14px;
  }

  .cl-widget-title {
    font-size: 11px;
    font-weight: 500;
    color: #1a1a1a;
    margin-bottom: 6px;
  }

  .cl-date-line {
    font-size: 10px;
    margin-bottom: 8px;
    height: 14px;
  }

  .cl-bar {
    height: 2px;
    background: #E3E1DB;
    border-radius: 2px;
    margin-bottom: 10px;
  }

  .cl-bar-fill { height: 100%; border-radius: 2px; }

  .cl-steps { display: flex; flex-direction: column; gap: 6px; }

  .cl-step {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 10px;
    color: #8A9BB8;
  }

  .cl-step.active { color: #1850A0; font-weight: 500; }
  .cl-step.done { color: #B0BDD4; text-decoration: line-through; }

  .cl-dot {
    width: 13px;
    height: 13px;
    border-radius: 50%;
    border: 1.5px solid #C8C6C0;
    flex-shrink: 0;
  }

  .cl-step.active .cl-dot { background: #1850A0; border-color: #1850A0; }
  .cl-step.done .cl-dot { background: #1850A0; border-color: #1850A0; }

  .cl-prompt {
    background: #F4F6FA;
    border: 0.5px solid #D8DDE8;
    border-radius: 5px;
    padding: 8px 9px;
    margin-bottom: 8px;
    font-size: 10px;
    color: #5A7AB0;
  }

  .cl-urgency {
    background: #FEF7EC;
    border: 0.5px solid #F0C97A;
    border-radius: 5px;
    padding: 7px 9px;
    margin-bottom: 8px;
    font-size: 10px;
    color: #8C4C08;
  }

  .cl-card-note {
    padding: 10px 14px;
    font-size: 12px;
    color: var(--ink-2);
    line-height: 1.5;
    background: var(--white);
    border-top: 0.5px solid var(--rule);
  }

  /* ── COACH PATTERNS ── */
  .patterns-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
  }

  .pattern-card {
    border: 0.5px solid var(--rule);
    border-radius: 12px;
    overflow: hidden;
  }

  .pattern-header {
    padding: 14px 16px 12px;
    border-bottom: 0.5px solid var(--rule);
  }

  .pattern-type {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 6px;
  }

  .pattern-name {
    font-size: 14px;
    font-weight: 500;
    color: var(--ink);
    margin-bottom: 4px;
  }

  .pattern-when {
    font-size: 12px;
    color: var(--ink-3);
    line-height: 1.5;
  }

  .pattern-preview {
    padding: 14px 16px;
    background: var(--white);
  }

  .pattern-preview-label {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ink-3);
    margin-bottom: 10px;
  }

  .nudge-mock {
    border: 0.5px solid var(--rule);
    border-radius: 8px;
    overflow: hidden;
  }

  .nudge-mock-bar { height: 3px; background: var(--blue); }

  .nudge-mock-body {
    padding: 10px 11px;
    display: flex;
    gap: 8px;
  }

  .nudge-icon-sm {
    width: 24px;
    height: 24px;
    border-radius: 5px;
    background: var(--blue-light);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 13px;
  }

  .nudge-title-sm { font-size: 11px; font-weight: 500; color: var(--ink); margin-bottom: 2px; }
  .nudge-copy-sm { font-size: 10px; color: var(--ink-2); line-height: 1.45; margin-bottom: 6px; }

  .nudge-ctas-sm { display: flex; gap: 5px; }

  .btn-sm-primary {
    font-size: 10px;
    padding: 3px 8px;
    border-radius: 4px;
    background: var(--blue);
    color: white;
    border: none;
    font-weight: 500;
  }

  .btn-sm-ghost {
    font-size: 10px;
    padding: 3px 8px;
    border-radius: 4px;
    background: transparent;
    color: var(--ink-3);
    border: 0.5px solid var(--rule);
  }

  .intercept-mock {
    border: 0.5px solid var(--rule);
    border-radius: 8px;
    padding: 12px;
  }

  .intercept-icon-sm {
    width: 26px;
    height: 26px;
    border-radius: 6px;
    background: var(--amber-light);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    margin-bottom: 8px;
  }

  .intercept-title-sm { font-size: 11px; font-weight: 500; color: var(--ink); margin-bottom: 4px; }
  .intercept-bullet { font-size: 10px; color: var(--ink-2); display: flex; align-items: flex-start; gap: 6px; padding: 1px 0; line-height: 1.4; }
  .intercept-dot { width: 4px; height: 4px; border-radius: 50%; background: #EF9F27; margin-top: 5px; flex-shrink: 0; }

  .intercept-ctas { display: flex; flex-direction: column; gap: 5px; margin-top: 10px; }
  .btn-intercept-p { font-size: 10px; padding: 5px; border-radius: 4px; background: var(--blue); color: white; border: none; font-weight: 500; text-align: center; }
  .btn-intercept-d { font-size: 10px; padding: 5px; border-radius: 4px; background: transparent; color: #A32D2D; border: 0.5px solid var(--rule); text-align: center; }

  .mark-mock {
    position: relative;
  }

  .mark-target-sm {
    background: white;
    border: 2px solid var(--blue);
    border-radius: 6px;
    padding: 6px 10px;
    font-size: 11px;
    font-weight: 500;
    color: var(--ink);
    display: inline-flex;
    align-items: center;
    gap: 5px;
    box-shadow: 0 0 0 3px rgba(12,68,124,0.1);
    margin-bottom: 8px;
  }

  .mark-tip-sm {
    background: var(--blue);
    border-radius: 6px;
    padding: 9px 11px;
    position: relative;
  }

  .mark-tip-sm::before {
    content: '';
    position: absolute;
    top: -5px;
    left: 16px;
    width: 8px;
    height: 8px;
    background: var(--blue);
    transform: rotate(45deg);
    border-radius: 1px;
  }

  .mark-tip-title-sm { font-size: 11px; font-weight: 500; color: white; margin-bottom: 3px; }
  .mark-tip-copy-sm { font-size: 10px; color: rgba(255,255,255,0.7); line-height: 1.4; margin-bottom: 7px; }
  .mark-tip-cta-sm { font-size: 10px; color: white; padding: 3px 8px; border: 0.5px solid rgba(255,255,255,0.3); border-radius: 4px; background: transparent; display: inline-block; font-weight: 500; }

  /* ── PHASES TABLE ── */
  .phases-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
  }

  .phases-table th {
    text-align: left;
    padding: 10px 14px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ink-3);
    border-bottom: 1px solid var(--rule);
    white-space: nowrap;
  }

  .phases-table td {
    padding: 14px 14px;
    vertical-align: top;
    border-bottom: 0.5px solid var(--rule);
    color: var(--ink-2);
    line-height: 1.55;
  }

  .phases-table tr:last-child td { border-bottom: none; }

  .phases-table td:first-child { font-weight: 500; color: var(--ink); white-space: nowrap; }

  .phase-badge-table {
    display: inline-block;
    font-size: 10px;
    font-weight: 600;
    padding: 2px 9px;
    border-radius: 20px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-bottom: 4px;
  }

  /* ── PRINCIPLES ── */
  .principles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 14px;
  }

  .principle-card {
    padding: 16px 18px;
    border: 0.5px solid var(--rule);
    border-radius: 10px;
    background: var(--white);
  }

  .principle-num {
    font-family: var(--serif);
    font-size: 28px;
    color: var(--red-light);
    line-height: 1;
    margin-bottom: 8px;
  }

  .principle-title {
    font-size: 13px;
    font-weight: 500;
    color: var(--ink);
    margin-bottom: 5px;
  }

  .principle-desc {
    font-size: 12px;
    color: var(--ink-2);
    line-height: 1.55;
  }

  /* ── CALLOUT ── */
  .callout {
    border-left: 3px solid var(--red);
    padding: 14px 18px;
    background: var(--white);
    border-radius: 0 8px 8px 0;
    font-size: 13px;
    color: var(--ink-2);
    line-height: 1.65;
    margin: 24px 0;
  }

  .callout strong { color: var(--ink); font-weight: 500; }

  /* ── FOOTER ── */
  .footer {
    background: var(--ink);
    padding: 32px 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: gap;
    gap: 16px;
  }

  .footer-left { font-size: 12px; color: rgba(255,255,255,0.35); }
  .footer-left strong { color: rgba(255,255,255,0.6); font-weight: 500; }

  .footer-logo {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .footer-mark {
    width: 22px;
    height: 22px;
    background: var(--red);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 700;
    color: white;
  }

  .footer-name { font-size: 12px; font-weight: 500; color: rgba(255,255,255,0.5); }

  /* ── UTILITIES ── */
  hr.section-rule { border: none; border-top: 0.5px solid var(--rule); margin: 32px 0; }

  @media (max-width: 640px) {
    .header { padding: 36px 24px 40px; }
    .page { padding: 0 20px 60px; }
    .footer { padding: 24px; }
    .phases-table { font-size: 12px; }
    .phases-table td, .phases-table th { padding: 10px; }
  }
</style>
</head>
<body>

<!-- HEADER -->
<div class="header">
  <div class="page" style="padding-top:0;padding-bottom:0;">
    <div class="header-eyebrow">Diligent Boards · Product Design</div>
    <h1>Getting admins to their <em>first board meeting</em>, fast</h1>
    <p class="header-sub">A self-serve trial onboarding framework for Diligent Boards. Covers sign-up, the persistent coaching widget, the three in-app coach patterns, and the path toward AI-powered coaching.</p>
    <div class="header-meta">
      <div class="meta-pill"><strong>SMB + Mid-market</strong> focus</div>
      <div class="meta-pill"><strong>30-day</strong> trial window</div>
      <div class="meta-pill"><strong>Self-serve</strong> motion</div>
      <div class="meta-pill"><strong>Pre-seeded</strong> content</div>
      <div class="meta-pill">Version <strong>1.0</strong> · May 2026</div>
    </div>
  </div>
</div>

<div class="page">

  <!-- SECTION 1: THE PROBLEM -->
  <div class="section">
    <div class="section-eyebrow">The problem</div>
    <h2 class="section-title">Board software has a unique onboarding challenge</h2>
    <p class="section-intro">Unlike most SaaS products, the "aha moment" in Diligent Boards crosses an organisational boundary. An admin publishes a book. A director opens it. That handoff is the proof of value, and it can't happen solo. This shapes everything about how onboarding should work.</p>

    <div class="principles-grid">
      <div class="principle-card">
        <div class="principle-num">01</div>
        <div class="principle-title">Value requires a second person</div>
        <div class="principle-desc">The admin can build a book alone. But value is only real when a director opens it. Onboarding has to earn that cross-boundary moment.</div>
      </div>
      <div class="principle-card">
        <div class="principle-num">02</div>
        <div class="principle-title">The persona is already an expert</div>
        <div class="principle-desc">CFOs, CompSecs, and board admins know governance. They don't want to be taught their job. They want to see if this tool is better than what they have.</div>
      </div>
      <div class="principle-card">
        <div class="principle-num">03</div>
        <div class="principle-title">Tours get skipped</div>
        <div class="principle-desc">Multi-step wizard onboarding is consistently abandoned by experienced users. Progressive, point-of-need coaching outperforms front-loaded walkthroughs.</div>
      </div>
      <div class="principle-card">
        <div class="principle-num">04</div>
        <div class="principle-title">30 days is enough, if they move</div>
        <div class="principle-desc">Most board meetings are monthly. One full governance cycle fits in the trial. The job is to get them moving on day one, not day ten.</div>
      </div>
    </div>
  </div>

  <!-- SECTION 2: THE JOURNEY -->
  <div class="section">
    <div class="section-eyebrow">The end-to-end journey</div>
    <h2 class="section-title">Five phases, one governance cycle</h2>
    <p class="section-intro">The trial maps to a natural governance arc. Each phase has a clear goal, a time window, and a definition of success. Conversion happens because the behaviour is already established, not because of a timer or a pop-up.</p>

    <div class="timeline">

      <div class="t-item">
        <div class="t-node" style="background:#EEEDFE;color:var(--purple);">1</div>
        <div class="t-body">
          <div class="t-phase" style="color:var(--purple);">Sign up</div>
          <div class="t-title">Earn access fast. No friction, no credit card.</div>
          <div class="t-window">Day 0 · under 2 minutes</div>
          <div class="t-desc">Name, work email, company name only. No phone number, no card. Instant access with email verification running in the background so it doesn't gate the product. First impression is speed.</div>
          <div class="t-tags">
            <span class="t-tag" style="background:var(--purple-light);color:var(--purple);">No verification gate</span>
            <span class="t-tag" style="background:var(--purple-light);color:var(--purple);">Minimal form</span>
            <span class="t-tag" style="background:var(--purple-light);color:var(--purple);">Progressive profiling</span>
          </div>
        </div>
      </div>

      <div class="t-item">
        <div class="t-node" style="background:var(--blue-light);color:var(--blue);">2</div>
        <div class="t-body">
          <div class="t-phase" style="color:var(--blue);">Orientation</div>
          <div class="t-title">Land in a real, finished board book. Not an empty state.</div>
          <div class="t-window">Day 0 · under 5 minutes</div>
          <div class="t-desc">Two anchor questions on entry: role and (optionally) meeting date. Then straight into a pre-seeded, realistic board book. The admin sees what "done" looks like before they build anything. An orientation panel (not a tour) explains the three steps: build, invite, publish.</div>
          <div class="t-tags">
            <span class="t-tag" style="background:var(--blue-light);color:var(--blue);">Pre-seeded content</span>
            <span class="t-tag" style="background:var(--blue-light);color:var(--blue);">No blank state</span>
            <span class="t-tag" style="background:var(--blue-light);color:var(--blue);">Orientation panel, not wizard</span>
          </div>
        </div>
      </div>

      <div class="t-item">
        <div class="t-node" style="background:var(--green-light);color:var(--green);">3</div>
        <div class="t-body">
          <div class="t-phase" style="color:var(--green);">Do real work</div>
          <div class="t-title">Build a book for their actual meeting</div>
          <div class="t-window">Day 1–7</div>
          <div class="t-desc">The admin duplicates the example book, replaces content with their own materials, invites real directors, and publishes. Coach patterns fire at the moments that matter: a nudge on first upload, inline tips before publish, and a nudge after publish if notifications are off. The checklist widget tracks progress throughout.</div>
          <div class="t-tags">
            <span class="t-tag" style="background:var(--green-light);color:var(--green);">Duplicate from example</span>
            <span class="t-tag" style="background:var(--green-light);color:var(--green);">Nudge on publish</span>
            <span class="t-tag" style="background:var(--green-light);color:var(--green);">Checklist drives progress</span>
          </div>
        </div>
      </div>

      <div class="t-item">
        <div class="t-node" style="background:var(--amber-light);color:var(--amber);">4</div>
        <div class="t-body">
          <div class="t-phase" style="color:var(--amber);">Value moment</div>
          <div class="t-title">"Sarah Chen opened the board pack"</div>
          <div class="t-window">Day 7–14</div>
          <div class="t-desc">An in-app notification fires when the first director opens the book. This is the proof-of-value moment. The product has crossed the organisational boundary and is now in use by real directors. The admin can preview director view to see exactly what they're experiencing. The post-meeting cycle (minutes, annotations, archive) completes the governance loop inside the trial.</div>
          <div class="t-tags">
            <span class="t-tag" style="background:var(--amber-light);color:var(--amber);">Director engagement signal</span>
            <span class="t-tag" style="background:var(--amber-light);color:var(--amber);">Preview director view</span>
            <span class="t-tag" style="background:var(--amber-light);color:var(--amber);">Full governance cycle</span>
          </div>
        </div>
      </div>

      <div class="t-item">
        <div class="t-node" style="background:var(--red-light);color:var(--red);">5</div>
        <div class="t-body">
          <div class="t-phase" style="color:var(--red);">Convert</div>
          <div class="t-title">Upgrade because directors are using it, not because time ran out</div>
          <div class="t-window">Day 14–30</div>
          <div class="t-desc">The upgrade prompt fires after the director engagement signal, not on a timer. Copy is consequence-forward: "3 directors are active, upgrade to keep their access live." No persistent countdown. Zero-migration means the trial account becomes the paid account with no data loss and no re-implementation. The behaviour is already established.</div>
          <div class="t-tags">
            <span class="t-tag" style="background:var(--red-light);color:var(--red);">Triggered by engagement</span>
            <span class="t-tag" style="background:var(--red-light);color:var(--red);">Zero-migration upgrade</span>
            <span class="t-tag" style="background:var(--red-light);color:var(--red);">No countdown banner</span>
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- SECTION 3: CHECKLIST -->
  <div class="section">
    <div class="section-eyebrow">The persistent layer</div>
    <h2 class="section-title">The checklist widget: always there, never blocking</h2>
    <p class="section-intro">The bottom-left checklist widget is the macro progress layer. It tracks four outcome-oriented steps throughout the trial. The framing adapts to whether a meeting date has been provided, but the four steps and the widget stay consistent across all three states.</p>

    <div class="callout">
      <strong>Why outcome-oriented copy matters.</strong> "Build your first board book" outperforms "Open the Books section." "See what your directors will see" outperforms "Open the sample." The admin understands the reason before they click, which drives higher completion rates.
    </div>

    <div class="checklist-grid">

      <div class="cl-card">
        <div class="cl-card-header">
          <span class="cl-state-label" style="color:var(--ink-3);">State 1</span>
          <span style="font-size:11px;color:var(--ink-3);">No date provided</span>
        </div>
        <div class="cl-card-body">
          <div class="cl-widget-title">Get ready for your meeting</div>
          <div class="cl-date-line"></div>
          <div class="cl-bar"><div class="cl-bar-fill" style="width:25%;background:#1850A0;"></div></div>
          <div class="cl-prompt">Add your meeting date to track prep progress →</div>
          <div class="cl-steps">
            <div class="cl-step done"><div class="cl-dot"></div>See what your directors will see</div>
            <div class="cl-step active"><div class="cl-dot"></div>Build your first board book</div>
            <div class="cl-step"><div class="cl-dot"></div>Invite your directors</div>
            <div class="cl-step"><div class="cl-dot"></div>Publish and notify your board</div>
          </div>
        </div>
        <div class="cl-card-note">Works without a date. Prompt sits above steps where value of entering it is visible.</div>
      </div>

      <div class="cl-card">
        <div class="cl-card-header">
          <span class="cl-state-label" style="color:var(--blue);">State 2</span>
          <span style="font-size:11px;color:var(--ink-3);">Date entered, time to spare</span>
        </div>
        <div class="cl-card-body">
          <div class="cl-widget-title">Get ready for your meeting</div>
          <div class="cl-date-line" style="color:#6B82A8;font-size:10px;">May 18 · 18 days away</div>
          <div class="cl-bar"><div class="cl-bar-fill" style="width:25%;background:#1850A0;"></div></div>
          <div class="cl-steps">
            <div class="cl-step done"><div class="cl-dot"></div>See what your directors will see</div>
            <div class="cl-step active"><div class="cl-dot"></div>Build your first board book</div>
            <div class="cl-step"><div class="cl-dot"></div>Invite your directors</div>
            <div class="cl-step"><div class="cl-dot"></div>Publish and notify your board</div>
          </div>
        </div>
        <div class="cl-card-note">Date shown as quiet context. Same steps, now anchored to a real deadline.</div>
      </div>

      <div class="cl-card">
        <div class="cl-card-header">
          <span class="cl-state-label" style="color:#854F0B;">State 3</span>
          <span style="font-size:11px;color:var(--ink-3);">Date entered, 7 days or fewer</span>
        </div>
        <div class="cl-card-body">
          <div class="cl-widget-title">Get ready for your meeting</div>
          <div class="cl-date-line" style="color:#8C4C08;font-size:10px;font-weight:500;">May 18 · 7 days away</div>
          <div class="cl-urgency">Your book isn't published yet. Directors can't access it before the meeting.</div>
          <div class="cl-bar"><div class="cl-bar-fill" style="width:25%;background:#1850A0;"></div></div>
          <div class="cl-steps">
            <div class="cl-step done"><div class="cl-dot"></div>See what your directors will see</div>
            <div class="cl-step active"><div class="cl-dot"></div>Build your first board book</div>
            <div class="cl-step"><div class="cl-dot"></div>Invite your directors</div>
            <div class="cl-step"><div class="cl-dot"></div>Publish and notify your board</div>
          </div>
        </div>
        <div class="cl-card-note">Amber, not red. Reads as "time to move" rather than "you've failed."</div>
      </div>

    </div>
  </div>

  <!-- SECTION 4: COACH PATTERNS -->
  <div class="section">
    <div class="section-eyebrow">The contextual layer</div>
    <h2 class="section-title">Three coach patterns: right place, right moment</h2>
    <p class="section-intro">The checklist widget tracks macro progress. The three coach patterns fire at the micro level, at the exact moment and location where guidance is most useful. They never block the admin's workflow and each has a clear escape hatch.</p>

    <div class="patterns-grid">

      <div class="pattern-card">
        <div class="pattern-header" style="background:var(--blue-light);border-color:#C4DAEF;">
          <div class="pattern-type" style="color:var(--blue);">Pattern 1: Nudge</div>
          <div class="pattern-name">Inline, non-blocking suggestion</div>
          <div class="pattern-when">Fires inline below the action that triggered it. Never blocks. Dismissable with ×. Once per session per context.</div>
        </div>
        <div class="pattern-preview">
          <div class="pattern-preview-label">Example: publish with notifications off</div>
          <div class="nudge-mock">
            <div class="nudge-mock-bar"></div>
            <div class="nudge-mock-body">
              <div class="nudge-icon-sm">ℹ</div>
              <div>
                <div class="nudge-title-sm">Make this one-click for your directors</div>
                <div class="nudge-copy-sm">You turned off notifications. Send a direct link so directors land in the right place.</div>
                <div class="nudge-ctas-sm">
                  <span class="btn-sm-primary">Copy book link</span>
                  <span class="btn-sm-ghost">Re-enable notifications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pattern-card">
        <div class="pattern-header" style="background:var(--amber-light);border-color:#F0CC95;">
          <div class="pattern-type" style="color:var(--amber);">Pattern 2: Intercept</div>
          <div class="pattern-name">Pre-destructive action modal</div>
          <div class="pattern-when">Fires as a modal overlay before an irreversible action. Replaces the standard confirmation. Always has an escape hatch. Fires every time condition is met.</div>
        </div>
        <div class="pattern-preview">
          <div class="pattern-preview-label">Example: delete document with director notes</div>
          <div class="intercept-mock">
            <div class="intercept-icon-sm">⚠</div>
            <div class="intercept-title-sm">Directors' notes will be lost if you delete this</div>
            <div class="intercept-bullet"><div class="intercept-dot"></div>All annotations (8 across 3 directors)</div>
            <div class="intercept-bullet"><div class="intercept-dot"></div>Version history tied to this document</div>
            <div class="intercept-ctas">
              <div class="btn-intercept-p">Use Replace with options</div>
              <div class="btn-intercept-d">Delete anyway</div>
            </div>
          </div>
        </div>
      </div>

      <div class="pattern-card">
        <div class="pattern-header" style="background:var(--purple-light);border-color:#C8C5EB;">
          <div class="pattern-type" style="color:var(--purple);">Pattern 3: Coach mark</div>
          <div class="pattern-name">Anchored feature pointer</div>
          <div class="pattern-when">Anchored tooltip pointing at a specific UI element. Fires once on first encounter of a key feature. Dismissed by the admin, never auto-advances.</div>
        </div>
        <div class="pattern-preview">
          <div class="pattern-preview-label">Example: GovernAI discovery post-publish</div>
          <div class="mark-mock">
            <div class="mark-target-sm">✦ GovernAI</div>
            <div class="mark-tip-sm">
              <div class="mark-tip-title-sm">AI-powered board prep</div>
              <div class="mark-tip-copy-sm">Summarises your book, surfaces prep questions, and flags risky language before directors open it.</div>
              <span class="mark-tip-cta-sm">Try it on Q3</span>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="callout" style="margin-top:24px;">
      <strong>Two altitudes, one system.</strong> The checklist tells the admin where they are in the overall journey. The coach patterns meet them in the moment when they're doing actual work. They run independently but reinforce the same four-step arc.
    </div>
  </div>

  <!-- SECTION 5: PHASES -->
  <div class="section">
    <div class="section-eyebrow">The evolution path</div>
    <h2 class="section-title">Three coaching phases: ship now, improve over time</h2>
    <p class="section-intro">The onboarding system is built to evolve. V1 ships with rule-based patterns. V2 adds behavioral intelligence. V3 brings in an AI agent that generates coaching copy based on the admin's specific situation. The UX structure (nudge, intercept, coach mark) stays the same throughout. Only the content source changes.</p>

    <table class="phases-table">
      <thead>
        <tr>
          <th style="width:110px;">Phase</th>
          <th style="width:130px;">When</th>
          <th>How it works</th>
          <th style="width:160px;">What you need</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <span class="phase-badge-table" style="background:var(--blue-light);color:var(--blue);">V1</span><br>
            Rule-based
          </td>
          <td style="color:var(--ink-3);">Ships now</td>
          <td>Patterns fire on known trigger conditions. Copy is static and written per scenario. No user state required beyond the triggering action.</td>
          <td>Trigger conditions defined, copy written, Pendo or Appcues configured.</td>
        </tr>
        <tr>
          <td>
            <span class="phase-badge-table" style="background:var(--green-light);color:var(--green);">V2</span><br>
            Behavioral
          </td>
          <td style="color:var(--ink-3);">With instrumentation</td>
          <td>Same patterns, now informed by behavioral signals: days in trial, actions completed, director engagement. Stalled users get re-engagement. Active users get reinforcement. Copy references their actual state.</td>
          <td>Pendo event tracking live, cohort definitions set, stall thresholds tuned after V1 data.</td>
        </tr>
        <tr>
          <td>
            <span class="phase-badge-table" style="background:var(--amber-light);color:var(--amber);">V3</span><br>
            Agent
          </td>
          <td style="color:var(--ink-3);">AI-powered</td>
          <td>An agent with awareness of the admin's full context (role, meeting date, book state, director activity, days remaining) generates coaching copy specific to their situation. For example: "Sarah Chen hasn't opened the pack yet and notifications are off, so she may not know it's live."</td>
          <td>V2 instrumentation tuned, AI API integrated into copy slot, A/B framework to test static vs agent copy.</td>
        </tr>
      </tbody>
    </table>

    <div class="callout" style="margin-top:24px;">
      <strong>Why this architecture holds up.</strong> The coach patterns are intentionally tooling-agnostic. Pendo, WalkMe, or Appcues can all implement them. The body copy in each pattern is a contained, swappable slot, which is exactly what the V3 agent replaces. No structural rework required to move between phases.
    </div>
  </div>

  <!-- SECTION 6: PRINCIPLES SUMMARY -->
  <div class="section">
    <div class="section-eyebrow">Design principles</div>
    <h2 class="section-title">What this is built on</h2>

    <div class="principles-grid">
      <div class="principle-card">
        <div class="principle-num">01</div>
        <div class="principle-title">Value before ask</div>
        <div class="principle-desc">Director invitation comes after the admin has uploaded their first doc, not at sign-up where it reads as a commitment before they've seen any value.</div>
      </div>
      <div class="principle-card">
        <div class="principle-num">02</div>
        <div class="principle-title">Outcome copy only</div>
        <div class="principle-desc">Every checklist step and coach pattern leads with what the admin achieves, not what the product does. "See what your directors will see" not "Open the sample book."</div>
      </div>
      <div class="principle-card">
        <div class="principle-num">03</div>
        <div class="principle-title">No manufactured urgency</div>
        <div class="principle-desc">No persistent countdown timer. Urgency surfaces contextually: when the meeting date is close, when directors are active, when the book isn't published yet.</div>
      </div>
      <div class="principle-card">
        <div class="principle-num">04</div>
        <div class="principle-title">Always an escape hatch</div>
        <div class="principle-desc">Every coach pattern is dismissable. The intercept always has "delete anyway." The nudge always has a close button. The orientation panel has "keep exploring." Never a dead end.</div>
      </div>
      <div class="principle-card">
        <div class="principle-num">05</div>
        <div class="principle-title">Point of need, not front-loaded</div>
        <div class="principle-desc">No wizard tour. Guidance surfaces when the admin is doing the relevant action, not before they've started. Progressive disclosure beats a forced sequence.</div>
      </div>
      <div class="principle-card">
        <div class="principle-num">06</div>
        <div class="principle-title">Convert on proof, not expiry</div>
        <div class="principle-desc">The upgrade prompt fires after a director opens the book, the moment of maximum perceived value, not when a 30-day clock runs out.</div>
      </div>
    </div>
  </div>

</div>

<!-- FOOTER -->
<div class="footer">
  <div class="footer-left">
    <strong>Diligent Boards · Trial Onboarding Framework</strong><br>
    Product Design · May 2026 · V1.0 · For internal review
  </div>
  <div class="footer-logo">
    <div class="footer-mark">D</div>
    <span class="footer-name">Diligent</span>
  </div>
</div>

</body>
</html>