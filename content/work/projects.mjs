// Single source of truth for the case-study pages and the homepage "Selected work" cards.
// Run `npm run work:build` after editing. Headline `kpis` must stay identical to the résumé.
//
// Text fields are { en, ko }. Inline markup: **bold**, *italic*, [^n] = footnote n in `sources`.
import p01 from './projects/p01-creator-missions.mjs';
import p02 from './projects/p02-ops-automation.mjs';
import p03 from './projects/p03-creator-subscriptions.mjs';
import p04 from './projects/p04-discovery-hashtags.mjs';
import p05 from './projects/p05-creator-analytics.mjs';
import p06 from './projects/p06-streamer-support.mjs';
import p07 from './projects/p07-nconnect.mjs';
import p08 from './projects/p08-sidekick.mjs';

export const site = { origin: 'https://www.injookim.com' };

export const projects = [p01, p02, p03, p04, p05, p06, p07, p08];
