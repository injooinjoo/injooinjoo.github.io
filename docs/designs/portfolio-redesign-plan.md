<!-- /autoplan restore point: /Users/jacobmac/.gstack/projects/injooinjoo-injooinjoo.github.io/main-autoplan-restore-20260401-172249.md -->
# Portfolio Redesign Plan

## Context

Current source of truth is `/Users/jacobmac/Desktop/Dev/injooinjoo.github.io/index.html`.
The live site works, but it reads like a long resume with premium styling layered on top.
The user asked for a real redesign, not a cosmetic cleanup.

## Problem

The site proves breadth, but it does not quickly sell a sharp point of view.
In the first screen, visitors learn that InJoo Kim is experienced. They do not immediately learn:

- what hard problems he is unusually good at
- what measurable wins prove it
- why NEXON, SOOP, creator economy, growth systems, and AI/data belong in one story
- what action a recruiter, founder, or hiring manager should take next

The current page is also structurally expensive to redesign because HTML, CSS, JS, and bilingual content all live in one file.

## Premises

1. The site should act like a hireable portfolio, not a chronological CV with better spacing.
2. The primary audience is a recruiter, hiring manager, founder, or operator evaluating product leadership fit within the first 30-60 seconds.
3. The strongest differentiator is the mix of growth PM, creator ecosystem operations, gaming platform experience, and AI/data fluency.
4. The redesign should keep the site static and GitHub Pages friendly.
5. The redesign should keep bilingual support and theme toggle, but simplify how those behaviors are implemented.

## Goals

- Make the top of the page answer "why this person?" in one glance.
- Replace resume-first pacing with story-first pacing and selected proof.
- Increase perceived quality through stronger typography, clearer hierarchy, better section rhythm, and fewer repetitive blocks.
- Reduce implementation fragility by separating content, styles, and behavior without introducing a framework migration.
- Preserve the best existing proof points and company credibility.

## Non-Goals

- Full framework migration to React.
- Rewriting the entire content corpus from scratch.
- Introducing CMS, analytics, or backend infrastructure.

## Dream State

### Current

Long, white, competent page. Strong facts are buried. Visitor must synthesize the through-line alone.

### This Plan

A premium, editorial portfolio that opens with a sharp value proposition, proves it with measurable wins, then moves into selected case studies, career timeline, projects, education, and credentials.

### 12-Month Ideal

A portfolio that doubles as a personal product brand system:

- flagship case studies with deeper expansion paths
- concise recruiter path and detailed operator path
- best-fit role framing
- polished mobile behavior
- lighter maintenance burden for ongoing updates

## Proposed Information Architecture

1. Hero
2. Selected proof metrics
3. "What I build" / best-fit positioning
4. Featured case studies from NEXON, SOOP, MMXXII
5. Career timeline for the rest of the experience
6. Projects grid
7. Education + certifications
8. CV + contact CTA

## Proposed Visual Direction

Editorial and operator-grade. Not glossy startup fluff.

- Typography: expressive sans + serif accent pairing
- Palette: warm light neutrals, deep ink, cobalt accent, restrained gradients
- Layout: asymmetrical hero, stronger section spacing, fewer repeated centered blocks
- Components: cleaner cards, proof chips, timeline rail, featured metric panels
- Motion: subtle reveal and hover motion, but less scroll gimmick coupling

## Implementation Approach

### Structure

- Keep the site static.
- Split into:
  - `index.html`
  - `styles/main.css`
  - `scripts/main.js`
  - `scripts/content.js`

### Data Model

- Move repeated experience, project, education, and certification content into JS data objects.
- Render repeated cards/sections from those objects.
- Keep bilingual content in structured fields rather than duplicated hand-written blocks throughout markup.

### Behavior

- Unify scroll and nav behavior behind one controller.
- Keep theme toggle and language toggle.
- Rebuild section activation logic once instead of multiple overlapping handlers.

## Risks

- Scroll and sticky nav regressions during refactor.
- Bilingual rendering drift if content extraction is partial.
- Mobile layout regressions if desktop-first redesign is not checked early.
- Breaking hash navigation or theme persistence while moving scripts.

## Verification Plan

- Desktop and mobile visual pass.
- Theme toggle, language toggle, nav scroll, and hash link verification.
- Asset path validation for GitHub Pages.
- Quick Lighthouse-style sanity check for oversized assets and jank.

## Autoplan Intake

Here's what I'm working with: a shipped static portfolio in one `index.html` file, plus an unused React app in `src/`.
UI scope: yes. The task is a full visual and structural redesign of the live site, not a component tweak.
No prior design doc existed for this branch, so this plan became the review artifact.
Premise gate: passed implicitly from the user request to improve the live site itself, not stop at analysis.

## Phase 1: CEO Review

### Premise Challenge

| Premise | Verdict | Notes |
|---|---|---|
| Portfolio should sell a point of view, not just archive chronology | Valid | Current hero and first scroll bury differentiation under biography and repeated case-study blocks |
| Primary audience is recruiter, hiring manager, founder, operator | Valid | Current site already targets these groups implicitly, but without a directed CTA |
| Differentiator is growth PM + creator ops + gaming + AI/data | Valid, but under-expressed | This is the strongest story on the page and currently lives in scattered paragraphs and metrics |
| Keep the site static and GitHub Pages friendly | Valid | A framework migration does not improve user outcomes here |
| Keep bilingual + theme toggle while simplifying behavior | Valid | These are useful features, but the current implementation duplicates content and interaction logic too broadly |

### What Already Exists

| Sub-problem | Existing leverage |
|---|---|
| Credibility proof | Strong company logos, quantified wins, education and certification assets already exist |
| Bilingual support | `data-en` / `data-ko` pattern exists across the page |
| Theme persistence | Theme toggle already writes to `localStorage` |
| Rich experience content | Six company sections already contain enough copy to build featured case studies and a concise timeline |
| Project inventory | Projects, education, certs, and resume assets are already complete enough for a redesign |

### Dream State Diagram

```text
CURRENT
Resume-shaped portfolio
  -> strong proof hidden in long hero copy and repetitive section cards

THIS PLAN
Operator-grade portfolio
  -> sharp hero
  -> immediate proof metrics
  -> 3 featured case studies
  -> concise supporting timeline
  -> clean CTA path

12-MONTH IDEAL
Personal brand system
  -> deeper case studies
  -> recruiter path + operator path
  -> easier content updates
  -> lighter JS and stronger QA
```

### Implementation Alternatives

| Approach | Effort | Pros | Cons | Decision |
|---|---|---|---|---|
| Polish current layout in place | Low | Fastest | Keeps resume-first IA, duplicated logic, and visual sameness | Rejected |
| Full React migration | High | Component model, future extensibility | Solves the wrong problem and creates architecture churn | Rejected |
| Static modular redesign with data-driven rendering | Medium | Improves narrative, maintainability, and visual quality without infra changes | Requires one disciplined refactor | Chosen |

### Scope Decisions

#### Accepted Scope

- Reframe the hero around a sharper value proposition
- Move strongest proof metrics above the fold
- Replace company-by-company opening with featured case studies plus a cleaner timeline
- Split the single file into HTML, CSS, JS, and content data modules
- Preserve bilingual and theme support with simpler state handling
- Rebuild navigation around a smaller set of sections

#### Not In Scope

- Full CMS
- Framework migration
- Dedicated deep case-study pages
- New analytics stack

### Temporal Interrogation

- Hour 1: the user should know what InJoo is unusually good at
- Hour 6: the user should have seen enough proof to believe the claim
- Month 6: updates should mean editing content objects, not duplicating large HTML blocks

### Outside Voice: Strategy Agent

Agent `Ampere` flagged five core issues:

1. The headline is generic and accurate but not differentiated.
2. The hero buries the best proof.
3. The page optimizes for completeness over conviction.
4. The first scroll is too resume-shaped.
5. There is no strong conversion path.

Recommended direction: "operator with receipts", lead with a promise and proof chips before chronology.

### CEO Consensus Table

| Dimension | Primary Review | Agent Review | Consensus |
|---|---|---|---|
| Premises valid? | Yes | Yes | Confirmed |
| Right problem to solve? | Yes | Yes | Confirmed |
| Scope calibration correct? | Yes, with modular refactor | Yes, stronger CTA needed | Confirmed |
| Alternatives sufficiently explored? | Yes | Partially, prefers buyer-oriented framing | Confirmed |
| Competitive/market risks covered? | Partially | Partially | Confirmed, add sharper positioning |
| 6-month trajectory sound? | Yes | Yes, if narrative becomes more focused | Confirmed |

### CEO Summary

The current site already has enough proof to win, but it tells the story in the wrong order.
The redesign should focus less on being exhaustive and more on being immediately legible and hireable.

## Phase 2: Design Review

### 7-Dimension Scorecard

| Dimension | Score / 10 | Findings |
|---|---:|---|
| Information hierarchy | 4 | Hero headline is generic, strongest numbers arrive too late |
| Narrative flow | 5 | The page becomes repetitive after the first experience block |
| Visual system | 5 | Clean but too safe, too white, too centered, and too samey |
| Section rhythm | 4 | Six similar experience sections flatten momentum |
| Interaction model | 5 | Dual sticky nav system is harder than the content needs |
| Responsive strategy | 6 | Existing media queries exist, but the IA itself is still desktop-biased |
| Accessibility + bilingual UX | 5 | Toggle ideas are useful, but focus states and semantics are thin |

### Design Issues

1. Generic hero title wastes the highest-attention real estate.
2. Repeated centered case-study sections remove urgency and hierarchy.
3. Dual navigation systems add interface noise before the page has earned it.
4. The page does not feel premium because typography, spacing, and background treatment stay too neutral.
5. Focus states, `aria` semantics, and reduced-motion handling are under-specified.

### Design Strengths Worth Preserving

- Strong credibility assets: profile photo, logos, metrics, education brands
- Bilingual capability
- Existing quantified wins that can be promoted into proof chips and case-study callouts

### Chosen Design Direction

Premium editorial operator portfolio.
Warm neutral background, deep ink text, cobalt accent, bold geometric sans paired with serif accents, asymmetrical hero, featured proof metrics, three flagship case studies, then a concise timeline and supporting credentials.

### Design Summary

The redesign should feel more like a confident product story and less like a centered annual report.
Keep the credibility, lose the sameness.

## Phase 3: Engineering Review

### Scope Challenge

The current live site is a `3835` line single file with:

- `169` `data-en` nodes
- `169` `data-ko` nodes
- `14` inline `onclick` handlers
- `2` separate `scroll` listeners
- duplicated nav and toggle logic

This is workable for a small static site, but not for a redesign that changes hierarchy, rendering order, and behavior at the same time.

### Architecture Diagram

```text
CURRENT
index.html
├── inline CSS
├── inline content
├── inline behavior
└── repeated bilingual markup

TARGET
index.html
├── app shell
├── controls + section mount points
styles/main.css
├── tokens
├── layout
└── components
scripts/content.js
└── bilingual content objects
scripts/main.js
├── render functions
├── theme/lang state
├── nav observer
└── mobile menu + scroll behavior
```

### Failure Modes Registry

| Failure mode | Severity | Mitigation |
|---|---|---|
| Language toggle leaves stale DOM after rerender | High | Single source of truth state, full rerender for text sections |
| Theme breaks after refactor | Medium | Keep token-based theme and persist through `localStorage` |
| Anchor navigation highlights wrong section | Medium | One observer path only |
| Mobile menu stays open after navigation | Medium | Close menu on section click |
| Asset paths break on GitHub Pages | High | Keep static relative paths and verify locally |

### Test Diagram

| Codepath / UX flow | Coverage needed | Artifact |
|---|---|---|
| Initial page render | Manual smoke | Local browser check |
| Theme toggle + persistence | Manual smoke | Test plan |
| Language toggle + rerender | Manual smoke | Test plan |
| Nav anchor scroll + active state | Manual smoke | Test plan |
| Mobile menu interaction | Manual smoke | Test plan |
| Resume and outbound links | Manual smoke | Test plan |

Test plan artifact: `/Users/jacobmac/.gstack/projects/injooinjoo-injooinjoo.github.io/jacobmac-main-test-plan-20260401-172933.md`

### Engineering Summary

The safest high-quality path is a static modular refactor, not a framework migration and not an in-place patch on the current monolith.
One render model, one nav model, one content model.

## Cross-Phase Themes

- The site has enough proof already. The problem is hierarchy, not lack of substance.
- The first screen must become more specific and more buyer-oriented.
- The current single-file implementation is workable only if we stop duplicating structure and behavior.

## Deferred to TODOS.md

- Deeper project or case-study modal system after the redesign lands
- Analytics or contact conversion tracking
- Dedicated recruiter-only condensed view

## Review Verdict

Proceed with a static modular redesign centered on a sharper hero, stronger proof, fewer repeated sections, and simpler interaction logic.

## Decision Audit Trail

| # | Phase | Decision | Principle | Rationale | Rejected |
|---|-------|----------|-----------|-----------|----------|
| 1 | Intake | Redesign the live static site instead of the unused React app | Pragmatic | `index.html` is the actual shipped experience and already contains the real content and interactions | Editing `src/` only |
| 2 | Intake | Use a static-site refactor, not a React migration | Explicit over clever | The page is small enough that clearer file boundaries solve the real maintenance problem without dual architectures | Partial React migration |
| 3 | CEO | Lead with operator proof, not biography | Choose completeness | The best metrics already exist, they are just buried | Keeping the current hero structure |
| 4 | CEO | Replace resume-first opening with featured case studies plus timeline | Boil lakes | Fixes the core hierarchy problem across the whole page, not just the headline | Cosmetic section polish only |
| 5 | Design | Adopt an editorial visual system with stronger typography and section rhythm | Explicit over clever | A bolder system creates clarity faster than incremental styling tweaks | More white-box corporate styling |
| 6 | Engineering | Split HTML, CSS, JS, and content into separate files | Pragmatic | This reduces blast radius while keeping the site static | Another giant single-file rewrite |
| 7 | Engineering | Remove duplicate nav logic and use one active-section controller | Explicit over clever | Two nav systems with overlapping scroll behavior are regression traps | Patching existing scroll handlers |

## Autoplan Intake Summary

Here is what I am working with.

- Plan summary: redesign the portfolio so it sells a sharp operator story, improves visual quality, and reduces maintenance cost.
- UI scope: yes.
- Real source of truth: `/Users/jacobmac/Desktop/Dev/injooinjoo.github.io/index.html`.
- Outside review team:
  - Strategy reviewer: product/positioning critique
  - Design reviewer: visual hierarchy and conversion critique
  - Engineering reviewer: architecture and implementation risk critique

No prior design doc was found in `~/.gstack/projects/`. I proceeded with a standard review because the user explicitly asked for the redesign and review loop now.

## Phase 1: CEO Review

### Premise Challenge

1. The site should sell a point of view, not just document chronology.
Verdict: accepted. This is the core product problem. The current site proves competence, but it does not make the hiring case quickly enough.

2. The audience decides quickly.
Verdict: accepted. Recruiters, hiring managers, and founders do not read three dense hero paragraphs before deciding whether to keep scrolling.

3. The strongest differentiator is hybrid capability.
Verdict: accepted. Gaming platform strategy, creator ecosystem operations, monetization, and AI/data fluency in one profile is the angle. That needs to be the headline, not a hidden synthesis.

4. Static-site architecture is still the right deployment target.
Verdict: accepted. This site is small. The product problem is clarity and quality, not framework sophistication.

5. Bilingual support should survive the redesign.
Verdict: accepted. It expands reach and already exists. Removing it would cut useful capability without buying enough simplicity.

Premise gate: passed by user intent. The user explicitly asked for a full redesign and multi-agent review, so I treated the premises above as approved unless later contradicted.

### Existing Code Leverage Map

| Sub-problem | What already exists | Keep / Change |
|---|---|---|
| Bilingual content toggling | `[data-en]` and `[data-ko]` visibility system | Keep behavior, redesign data structure |
| Theme switching | `toggleTheme()` with localStorage persistence | Keep behavior, simplify implementation |
| Hash navigation | Fixed nav + local company nav + smooth scrolling | Keep hash navigation, remove duplicate listeners and reduce chrome |
| Content credibility | Company logos, metrics, project details, education, certs | Keep and elevate |
| Repeated case-study shape | `.experience-section`, achievements, results, tech tags | Keep concept, redesign hierarchy and render from data |
| Project modal | `projectDetails` dataset + modal shell | Keep, but make it visually consistent with new system |

### Dream State Diagram

```text
CURRENT
  Long resume-shaped portfolio
  -> strong facts buried
  -> repetitive section rhythm
  -> too much navigation chrome
  -> one-file maintenance trap

THIS PLAN
  Premium editorial portfolio
  -> sharp thesis in hero
  -> proof chips and best-fit roles above the fold
  -> 3 featured case studies first
  -> lighter timeline for the rest
  -> split static architecture with data/styles/scripts

12-MONTH IDEAL
  Personal brand system for operator roles
  -> expandable case studies
  -> concise recruiter path + deeper operator path
  -> easier updates
  -> stronger conversion paths
```

### Implementation Alternatives

| Approach | Effort | Pros | Cons | Decision |
|---|---|---|---|---|
| A. Visual reskin inside existing one-file HTML | Low | Fastest path to prettier UI | Keeps duplication, nav complexity, and content rigidity | Rejected |
| B. Static refactor with data-driven sections | Medium | Fixes the real maintenance problem while enabling a real redesign | Requires bigger edit blast radius now | Chosen |
| C. Full React migration | High | Better long-term component model | Wrong scope, two architectures, higher regression risk | Rejected |

### Mode Selection

Mode: SELECTIVE_EXPANSION.

Reason: the redesign should expand where it directly sharpens the hiring story and fixes the implementation blast radius. It should not drift into CMS work, analytics, or a framework rewrite.

### CEO Review Findings

1. The current headline is generic.
`Product Manager & Creator Operations Lead` describes a role, not a differentiated value proposition. The site needs a harder opening claim around growth systems for games and creator platforms.

2. The hero hides the best proof.
`5,000+ creators`, `2.3x CTR`, platform monetization, NEXON, and Harvard belong above the fold as immediate evidence, not inside paragraph two and lower sections.

3. The page is optimized for completeness over conviction.
It behaves like a thorough CV. That is useful later, but the first screen should answer what hard problems this person solves and why a buyer should care now.

4. The site has no strong CTA.
Contact links exist, but there is no clear best-fit framing or action path such as "view flagship case studies" or "download one-page resume."

### CEO Dual Voices

**Codex says**

- The site needs to shift from biography to proposition.
- The first screen should sell "operator with receipts," not "experienced PM."
- Featured case studies should come before chronological completeness.

**Strategy reviewer says**

- The hero buries the strongest proof.
- The page reads like a polished CV, not a focused pitch.
- There is no strong conversion path.

### CEO Dual Voices — Consensus Table

| Dimension | Codex | Reviewer | Consensus |
|---|---|---|---|
| Premises valid? | Yes | Yes | Confirmed |
| Right problem to solve? | Story clarity | Story clarity | Confirmed |
| Scope calibration correct? | Static refactor | Static refactor | Confirmed |
| Alternatives sufficiently explored? | Yes | Mostly | Confirmed |
| Competitive / market risks covered? | Weak differentiation today | Weak differentiation today | Confirmed |
| 6-month trajectory sound? | Yes, if architecture is cleaned up now | Yes, if CTA and positioning improve | Confirmed |

### CEO Completion Summary

The redesign should aggressively sharpen the proposition, move proof above the fold, and convert the site from chronological resume to buyer-oriented portfolio. Expansion is approved for architecture cleanup and content restructuring because both are inside blast radius and directly improve the shipped result.

## Phase 2: Design Review

### Design Scope Assessment

This is a full UI rewrite inside the existing content domain. The review should focus on hierarchy, rhythm, conversion, motion, navigation burden, and whether the portfolio feels premium instead of template-polished.

### Design Passes

| Dimension | Score / 10 | Findings | Decision |
|---|---|---|---|
| Information hierarchy | 4 | Hero does not land the angle quickly enough. Most important proof is buried. | Rebuild hero around thesis + proof chips |
| Conversion clarity | 3 | Contact links are passive and untargeted. | Add primary CTA + best-fit role framing |
| Section rhythm | 4 | Repeated centered case-study sections create fatigue. | Use featured case studies + lighter timeline |
| Visual identity | 5 | Clean but generic. Too much white, soft blue, glass UI, and safe rounded cards. | Introduce warmer neutrals, stronger typography, editorial layout |
| Motion quality | 5 | Too much scroll-linked choreography for limited payoff. | Remove most progressive fades, keep restrained reveals |
| Navigation UX | 4 | Fixed global nav plus local company nav compete for attention. | Reduce chrome and simplify section navigation |
| Mobile / responsive intent | 6 | Existing page likely works, but rhythm and content density will need deliberate mobile treatment after redesign. | Keep mobile in the implementation loop from the start |

### Design Review Findings

1. The page has too much navigation chrome too early.
The fixed top nav and company rail are doing interface work before the page has earned attention. The hero should dominate first, not the controls.

2. The visual language is competent but forgettable.
White background, soft gray cards, blue accents, and glass treatments feel familiar rather than specific. For this subject matter, the site needs more editorial edge and stronger type contrast.

3. Every company section looks too similar.
That flattens importance. NEXON, SOOP, and MMXXII should feel like featured proof, while older roles should become a tighter supporting timeline.

4. Motion is carrying too much complexity.
The scroll transition stack adds engineering risk without enough storytelling return. Premium here should mean calm confidence, not more animation layers.

### Design Voices

**Codex says**

- Build a premium editorial portfolio, not a long resume.
- Use a stronger asymmetric hero and fewer repeated centered blocks.
- Keep named companies, numeric proof, and bilingual support.

**Design reviewer says**

- The current page feels too safe for the subject matter.
- Hero, nav chrome, and repeated case-study rhythm are the main UX problems.
- The redesign should feel like "operator with receipts."

### Design Consensus Table

| Dimension | Codex | Reviewer | Consensus |
|---|---|---|---|
| Hierarchy serves user? | No | No | Confirmed |
| Missing states specified? | Needs CTA path | Needs CTA path | Confirmed |
| Responsive strategy intentional? | Not yet strong enough | Not yet strong enough | Confirmed |
| Accessibility / clarity good enough? | Baseline okay, needs calmer layout | Baseline okay, needs calmer layout | Confirmed |
| UI specificity strong enough? | No | No | Confirmed |
| Design decisions likely to haunt implementation? | Yes, nav and motion | Yes, nav and motion | Confirmed |
| Premium feel credible? | Not yet | Not yet | Confirmed |

### Design Completion Summary

The redesign should move toward a sharper editorial identity with stronger typography, warmer neutrals, asymmetric composition, fewer repeated blocks, and a clearer CTA structure. The real proof stays. The presentation gets much stricter.

## Phase 3: Engineering Review

### Scope Challenge

The technical problem is not that the site is static. The technical problem is that one file currently owns markup, styles, behaviors, content data, and duplicate scroll logic. A major redesign inside that architecture would work once, then become expensive again immediately.

### What Already Exists

- Content depth: the experience sections already contain enough substance for featured case studies.
- Theme and language persistence: useful behaviors already exist.
- Project details dataset and modal shell: reusable for deeper project views.
- Asset library: profile photo, company logos, and PDFs are already in place.

### Architecture ASCII Diagram

```text
index.html
├── styles/main.css
│   ├── design tokens
│   ├── layout primitives
│   ├── components
│   └── responsive rules
├── scripts/content.js
│   ├── hero content
│   ├── featured case studies
│   ├── timeline entries
│   ├── projects
│   ├── education
│   └── certifications
└── scripts/main.js
    ├── renderApp()
    ├── bindThemeToggle()
    ├── bindLanguageToggle()
    ├── bindNavigation()
    ├── bindProjectModal()
    └── syncActiveSections()
```

### Engineering Findings

1. Single-file blast radius is the main engineering risk.
Any redesign that stays in one file will keep HTML, CSS, data, and interactions tangled. That is the wrong place to spend complexity budget.

2. Scroll behavior is currently over-coupled.
`updateScrollProgress()`, `initUnifiedNavigation()`, and duplicate smooth-scroll listeners all touch overlapping concerns. This is a regression trap.

3. Repetition should be removed by rendering from data, not by adding a framework.
A static site with small render functions gives the cleanup we need without shipping two architectures.

4. Theme and language logic should remain, but be centralized.
Both matter to users. They just need a single source of truth.

### Test Diagram

| Area | Flow / Codepath | Coverage Needed |
|---|---|---|
| Initial render | HTML shell + JS rendering from content data | Desktop and mobile smoke check |
| Language toggle | EN ↔ KO content swap across hero, case studies, projects, education, certs, CTA | Manual regression pass |
| Theme toggle | Light ↔ dark tokens and persistence | Manual regression pass |
| Global nav | Section links and active state | Manual regression pass |
| Local timeline / case-study nav | Active section sync and offsets | Manual regression pass |
| Project modal | Open, close, language-aware content | Manual regression pass |
| Asset loading | Profile, logos, PDF, GitHub Pages paths | Manual regression pass |
| Responsive layout | Hero, cards, timeline, CTA on mobile | Manual regression pass |

### Failure Modes Registry

| Failure Mode | Severity | Prevention |
|---|---|---|
| Hash offsets land under sticky nav | High | Single offset calculation path |
| EN/KO content falls out of sync | High | Centralize bilingual content in data objects |
| Theme classes partially apply after refactor | Medium | Token-first CSS and single theme setter |
| Mobile hero becomes too dense | High | Design mobile layout as part of core implementation |
| Old asset paths break on GitHub Pages | High | Reuse existing absolute asset paths and test them |

### Error & Rescue Registry

| Error | Rescue |
|---|---|
| Nav interactions regress after architecture split | Start with one scroll controller and verify hash paths immediately |
| Case-study rendering breaks due to data shape mismatch | Keep content schema simple and render incrementally |
| Layout becomes too ambitious and slow to finish | Prioritize hero, featured case studies, and timeline before secondary polish |

### Not In Scope

- React migration
- CMS integration
- Blog or writing section
- Analytics instrumentation
- New backend or form service
- Deep case-study microsites

### Engineering Completion Summary

The right implementation is a disciplined static refactor, not a framework migration. Split content, styles, and behavior. Rebuild navigation and section rendering once, cleanly. Then verify the interactive paths by hand.

## Cross-Phase Themes

1. The hero is underselling the real product.
This showed up in strategy and design independently. High-confidence signal.

2. The page is too resume-shaped.
Strategy and design both flagged chronology overwhelming conviction.

3. The current architecture will punish a serious redesign unless it is cleaned up first.
Engineering flagged this directly, and design findings on motion and nav chrome reinforce it.

## Deferred to TODOS.md

- Add deeper flagship case-study pages if the redesign materially improves conversion
- Add downloadable concise one-page resume variant
- Add optional writing or thinking section only after the core portfolio story is strong

## Recommended Build Direction

Build a premium editorial portfolio for a gaming and creator-economy operator.

- Open with a sharper thesis, proof chips, and a real CTA
- Feature NEXON, SOOP, and MMXXII before the full chronology
- Convert older experience into a lighter timeline
- Keep bilingual and theme support
- Replace one-file sprawl with a clean static split across HTML, CSS, JS, and content data

## Phase Transition

Phase 1 complete. Strategy reviewer and Codex agree on the core product problem.
Phase 2 complete. Design reviewer and Codex agree that hierarchy, nav burden, and repetitiveness are the main UX failures.
Phase 3 complete. Engineering review confirms the right fix is a static refactor plus redesign, not a migration.

Proceed to implementation with the recommendations above.
