# Site Redesign Plan

## Objective

Turn the homepage from a long resume dump into a premium product-operator portfolio that explains, in under 30 seconds, who InJoo Kim is, what kind of product problems he solves, and why the work is credible.

The redesign should make the site feel intentional and high-signal on desktop and mobile without turning it into a full app rewrite. The implementation should stay inside the current static-site architecture unless there is a clear quality win from a small refactor.

## Current Problems

1. The homepage is too long before it becomes persuasive. The user scrolls through repeated blocks before understanding the strongest work.
2. Every experience section has nearly identical visual weight, so the site feels like a formatted CV instead of a curated portfolio.
3. The first screen is credible but generic. It does not quickly answer "why this person?" with proof, specialization, and standout outcomes.
4. Navigation is split between top nav and company nav, which adds interface noise without enough payoff.
5. Typography, spacing, and card treatment are clean but flat. The page does not feel premium or memorable.
6. `index.html` is a large single file with repeated markup, making design changes slower and more error-prone than they need to be.

## User Outcome

A recruiter, founder, hiring manager, or collaborator should be able to scan the homepage and leave with these conclusions:

- InJoo Kim is a product leader focused on growth, creator ecosystems, and monetization.
- He has real scale, not just feature work.
- He can operate across gaming, streaming, analytics, and entrepreneurship.
- The site is curated. It shows judgment, not just completeness.

## Proposed Experience

### 1. Hero becomes an operator introduction, not a centered bio wall

- Use a two-column hero on desktop.
- Left side: name, role, sharp positioning statement, 3 proof bullets, CTA row.
- Right side: portrait, current role card, education card, location/theme/language controls.
- Keep bilingual support and dark mode.

### 2. Replace "all roles are equal" with a featured-work hierarchy

- Introduce a `Featured Work` section with 3 flagship case studies:
  - MMXXII
  - SOOP
  - NEXON
- Each case study should show:
  - role and time period
  - one-sentence business context
  - 3 strongest initiatives
  - 3 outcome metrics
  - tools / domains / operating strengths
- Earlier roles move into a compact `Career Archive` timeline instead of full hero-sized sections.
- Hard rule: only 3 featured case studies above the fold sequence. Everything else is secondary proof.

### 3. Projects become a curated proof layer

- Reduce the feeling of an endless card list.
- Group projects into fewer, stronger cards with clearer categories and outcomes.
- Keep modal detail where useful, but make the default grid faster to scan.

### 4. Education and certifications become one tighter credibility section

- Merge into a `Credentials` section with stronger institution treatment and less duplicate card chrome.
- Make Harvard, UIUC, MIT, and Google visually legible in one pass.

### 5. CV download becomes a stronger closing CTA

- Reframe the bottom area as a decision point:
  - download CV
  - email
  - LinkedIn
- The closing section should feel like the natural end of the story, not a leftover utility card.

## Review Synthesis

### CEO Review

- The strongest improvement is curation, not decoration.
- The site should stop trying to give every role equal weight. That makes the page feel thorough but not sharp.
- The first screen must answer three questions fast:
  - what kind of product leader is this
  - what proof makes that credible
  - where should I go next
- NEXON is current and credible, but SOOP and MMXXII likely carry more concrete portfolio proof. The featured order should reflect story strength, not chronology.

### Design Review

- The redesign needs stronger section contrast, fewer repeated bordered cards, and a more intentional rhythm between hero, proof, case studies, and archive.
- The current dual navigation model is visually noisy. One sticky section navigation is enough.
- Metrics should be promoted as primary evidence, not tucked into repeated grids that all look the same.
- Desktop can use a split hero, but mobile should collapse into one deliberate stack with no competing nav layers.

### Engineering Review

- A full templating refactor and full visual redesign in the same pass is unnecessary risk.
- Keep the blast radius mostly inside `index.html`, with focused HTML, CSS, and JavaScript changes.
- Preserve and re-test theme toggle, language toggle, anchor scrolling, modal behavior, and CV download.
- Fix existing inconsistencies while redesigning:
  - main navigation points to `#soop-hero` for "Experience" while local nav starts at `#nexon-hero`
  - JavaScript tracks `about` and `experience` sections that do not exist
  - CSS references undefined variables such as `--bg-hover` and `--accent-color-alpha`

## Final Direction

This pass will optimize for a better story and a better visual system without turning the static site into a mini framework.

- Keep the site as a static single-page portfolio.
- Rebuild the information hierarchy.
- Simplify navigation to one system.
- Feature only the strongest work.
- Compress secondary proof into denser formats.
- Avoid large-scale data-driven rendering changes unless they directly reduce duplication with low risk.

## Visual Direction

### Direction

Editorial operator portfolio.

- Background: warm light neutral with subtle gradients and section contrast
- Accent: restrained cobalt blue
- Typography:
  - display serif for section headlines
  - clean geometric sans for body and UI
- Feel: product strategy deck meets polished portfolio, not generic startup template

### Design Rules

- Increase contrast between section types.
- Use bigger top-level headlines and tighter supporting copy.
- Reduce repetitive card borders where rhythm already does the work.
- Use stronger spacing bands between major content blocks.
- Make metrics feel like evidence, not decoration.
- Keep motion minimal and deliberate.

## Information Architecture

1. Hero
2. Proof strip
3. Featured Work
4. Career Archive
5. Selected Projects
6. Credentials
7. Final CTA / CV

## Implementation Plan

### Source of Truth

- Primary file: `/Users/jacobmac/Desktop/Dev/injooinjoo.github.io/index.html`

### Implementation Changes

1. Introduce a clearer CSS token layer for typography, spacing, surfaces, borders, and accent usage.
2. Rebuild hero and navigation layout around the new information hierarchy.
3. Convert the current full-size experience sections into:
   - 3 featured case studies
   - 1 compact archive timeline
4. Rebuild projects and credentials to match the new visual system.
5. Review responsive behavior at mobile widths and simplify nav interactions there.
6. Reduce nav/state complexity instead of increasing it:
   - one sticky nav
   - correct anchor targets
   - no duplicate section models in JavaScript
7. Remove or repair stale CSS/JS paths that conflict with the redesign.

### Constraints

- Stay within the current static site approach unless a small, contained refactor clearly improves quality.
- Reuse existing images and videos where they still support the story.
- Avoid adding dependencies that are unnecessary for a static portfolio site.
- Do not combine a large rendering refactor with the visual redesign unless the markup becomes unmanageable.

## Risks

1. A redesign inside one large HTML file can become brittle if the structure is not made more modular first.
2. Reducing content may accidentally hide useful proof. The strongest evidence must survive the compression.
3. The current bilingual and theme toggle behavior can regress during layout rewrites.

## Verification

1. Desktop visual check at 1512px width.
2. Mobile visual check around 390px width.
3. Theme toggle works.
4. Language toggle works.
5. Anchor navigation works.
6. Video and image assets load correctly.
7. CV download link works.
8. Main nav and featured sections stay in sync while scrolling.
9. No flash of wrong language or broken theme state on first load.

## Success Criteria

- A first-time visitor can identify role, domain, and top proof points without scrolling past the hero.
- The page is materially shorter and more opinionated.
- Featured work feels curated and premium.
- Earlier experience is still accessible without dominating the page.
- The design feels more like a high-end portfolio and less like a long-form resume page.

## Decision Audit Trail

| # | Phase | Decision | Principle | Rationale | Rejected |
|---|-------|----------|-----------|-----------|----------|
| 1 | CEO | Limit featured work to 3 case studies | Completeness | Curation improves understanding faster than showing every role at full size | Keeping 6 full-size experience sections |
| 2 | CEO | Put MMXXII, SOOP, NEXON in featured work | Pragmatic | These three combine entrepreneurship, creator platform scale, and current senior role proof | Chronological-only ordering |
| 3 | Design | Use one sticky navigation system | Explicit over clever | Dual nav adds noise and state complexity | Keeping both top nav and company nav |
| 4 | Design | Merge education and certifications into one credibility layer | Completeness | The user needs one fast scan of institutional proof, not two weakly separated sections | Keeping them as separate low-contrast blocks |
| 5 | Eng | Avoid a broad JS templating refactor in this pass | Pragmatic | Redesign plus architecture rewrite raises regression risk without enough upside for a static site | Full data-driven rendering rewrite |
| 6 | Eng | Fix nav/state inconsistencies during redesign | Boil lakes | The redesign touches the same blast radius as the existing broken section model and anchor mismatch | Leaving current nav logic untouched |
