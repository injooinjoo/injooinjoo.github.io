// Reconstructed, schematic diagrams for the case studies (no internal screens or data).
// Colors come from CSS classes defined in work/case-study.css so both themes work.

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Bilingual <text>: one element per language, toggled by the page's data-lang CSS.
const T = (x, y, t, { size = 14, weight = 400, anchor = 'start', cls = '' } = {}) => {
  const attrs = `x="${x}" y="${y}" font-size="${size}" font-weight="${weight}" text-anchor="${anchor}"${cls ? ` class="${cls}"` : ''}`;
  if (typeof t === 'string') return `<text ${attrs}>${esc(t)}</text>`;
  return `<text ${attrs} data-en>${esc(t.en)}</text><text ${attrs} data-ko>${esc(t.ko)}</text>`;
};
const box = (x, y, w, h, cls = 'f-box', r = 10) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" class="${cls}" stroke-width="1.2"/>`;
const arrowDefs = `<defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="f-arrow"/></marker></defs>`;
const line = (d, cls = 'f-line') => `<path d="${d}" class="${cls}" stroke-width="1.4" marker-end="url(#ah)"/>`;
const svg = (w, h, label, body) =>
  `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(label)}" xmlns="http://www.w3.org/2000/svg">${arrowDefs}${body}</svg>`;

// Before/after horizontal bars. `max` sets the scale.
const beforeAfter = ({ label, rows, max, unit = '' }) => {
  const W = 840, rowH = 64, top = 16, labelW = 250, barW = W - labelW - 110;
  const body = rows
    .map((r, i) => {
      const y = top + i * rowH;
      const w0 = Math.max(3, (r.before / max) * barW);
      const w1 = Math.max(3, (r.after / max) * barW);
      return `${T(0, y + 16, r.label, { size: 14, weight: 600 })}
${T(0, y + 36, r.sub ?? '', { size: 12, cls: 'f-muted' })}
<rect x="${labelW}" y="${y + 2}" width="${w0}" height="16" rx="3" class="f-base"/>
${T(labelW + w0 + 8, y + 15, `${r.beforeLabel ?? r.before + unit}`, { size: 12, cls: 'f-muted f-mono' })}
<rect x="${labelW}" y="${y + 24}" width="${w1}" height="16" rx="3" class="f-accent"/>
${T(labelW + w1 + 8, y + 37, `${r.afterLabel ?? r.after + unit}`, { size: 12, weight: 600, cls: 'f-mono' })}`;
    })
    .join('');
  const legendY = top + rows.length * rowH + 8;
  const legend = `<rect x="${labelW}" y="${legendY}" width="12" height="10" rx="2" class="f-base"/>${T(labelW + 18, legendY + 9, { en: 'Before', ko: '이전' }, { size: 12, cls: 'f-muted' })}
<rect x="${labelW + 90}" y="${legendY}" width="12" height="10" rx="2" class="f-accent"/>${T(labelW + 108, legendY + 9, { en: 'After', ko: '이후' }, { size: 12, cls: 'f-muted' })}`;
  return svg(W, legendY + 20, label, body + legend);
};

export const figures = {
  // P-01 — mission loop
  missionLoop: () => {
    const steps = [
      { t: { en: 'Mission posted', ko: '미션 등록' }, s: { en: 'by streamer or viewer', ko: '스트리머·시청자' } },
      { t: { en: 'Viewers pool gifts', ko: '시청자 후원 적립' }, s: { en: 'toward a visible goal', ko: '목표 금액 공개' } },
      { t: { en: 'Attempt on stream', ko: '방송 중 도전' }, s: { en: 'live, shared stakes', ko: '실시간·공동 참여' } },
      { t: { en: 'Result settled', ko: '결과 확정·정산' }, s: { en: 'final, cannot be reversed', ko: '확정 후 번복 불가' } },
    ];
    const w = 180, gap = 40, y = 40;
    const boxes = steps
      .map((st, i) => {
        const x = i * (w + gap);
        return `${box(x, y, w, 86, i === 3 ? 'f-box-strong' : 'f-box')}
${T(x + 16, y + 26, `0${i + 1}`, { size: 11, cls: 'f-muted f-mono' })}
${T(x + 16, y + 50, st.t, { size: 15, weight: 600 })}
${T(x + 16, y + 70, st.s, { size: 12, cls: 'f-muted' })}
${i < 3 ? line(`M${x + w + 4},${y + 43} L${x + w + gap - 4},${y + 43}`) : ''}`;
      })
      .join('');
    const loop = `<path d="M${3 * (w + gap) + w / 2},${y + 92} C${3 * (w + gap) + w / 2},170 ${w / 2},170 ${w / 2},${y + 96}" class="f-line-accent" stroke-width="1.6" stroke-dasharray="5 5" marker-end="url(#ah)"/>
${T(1.5 * (w + gap) + w / 2, 186, { en: 'Next mission — a reason to come back and give again', ko: '다음 미션 — 다시 방문하고 다시 후원할 이유' }, { size: 13, anchor: 'middle', cls: 'f-muted' })}`;
    return svg(860, 200, 'Mission loop: post, pool, attempt, settle, repeat', boxes + loop);
  },

  missionImpact: () =>
    beforeAfter({
      label: 'Mission system impact, indexed',
      max: 3.2,
      rows: [
        { label: { en: 'New video uploads', ko: '신규 영상 업로드' }, sub: { en: 'participating streamers', ko: '참여 스트리머' }, before: 1, after: 3, beforeLabel: '1.0×', afterLabel: '3.0×' },
        { label: { en: 'Viewer stay time', ko: '시청자 체류 시간' }, sub: { en: 'mission broadcasts', ko: '미션 진행 방송' }, before: 1, after: 1.6, beforeLabel: '1.0×', afterLabel: '1.6×' },
      ],
    }),

  // P-02 — before/after operations pipeline
  opsPipeline: () => {
    const teams = [
      { en: 'Finance', ko: '재무' },
      { en: 'Creator support', ko: '크리에이터 지원' },
      { en: 'Content review', ko: '콘텐츠 리뷰' },
    ];
    const left = teams
      .map((t, i) => {
        const y = 38 + i * 58;
        return `${box(0, y, 150, 44)}${T(14, y + 27, t, { size: 13, weight: 600 })}
${box(170, y, 120, 44, 'f-box')}${T(184, y + 20, { en: 'Spreadsheets', ko: '스프레드시트' }, { size: 12 })}${T(184, y + 35, { en: 'manual copy', ko: '수동 취합' }, { size: 11, cls: 'f-muted' })}
${line(`M152,${y + 22} L166,${y + 22}`)}`;
      })
      .join('');
    const leftLabel = T(0, 20, { en: 'BEFORE — ~200 h / month', ko: '이전 — 월 약 200시간' }, { size: 11, cls: 'f-muted f-mono' });
    const x0 = 420;
    const stages = [
      { en: 'Collect', ko: '수집' },
      { en: 'Validate', ko: '검증' },
      { en: 'Route', ko: '분배' },
    ];
    const pipe = `${T(x0, 20, { en: 'AFTER — under 1 h / month', ko: '이후 — 월 1시간 미만' }, { size: 11, cls: 'f-muted f-mono' })}
${box(x0, 38, 150, 160, 'f-box')}${T(x0 + 14, 62, { en: 'Sources', ko: '데이터 소스' }, { size: 13, weight: 600 })}
${T(x0 + 14, 86, { en: 'Platform APIs', ko: '플랫폼 API' }, { size: 12, cls: 'f-muted' })}
${T(x0 + 14, 106, { en: 'Settlement data', ko: '정산 데이터' }, { size: 12, cls: 'f-muted' })}
${T(x0 + 14, 126, { en: 'Support requests', ko: '지원 요청' }, { size: 12, cls: 'f-muted' })}
${T(x0 + 14, 146, { en: 'Review queues', ko: '리뷰 대기열' }, { size: 12, cls: 'f-muted' })}
${line(`M${x0 + 154},118 L${x0 + 186},118`)}
${box(x0 + 190, 70, 130, 96, 'f-box-strong')}${T(x0 + 204, 94, { en: 'One pipeline', ko: '단일 파이프라인' }, { size: 13, weight: 600 })}
${stages.map((s, i) => T(x0 + 204, 116 + i * 18, s, { size: 12, cls: 'f-muted' })).join('')}
${line(`M${x0 + 324},118 L${x0 + 356},118`)}
${box(x0 + 360, 62, 100, 44, 'f-box')}${T(x0 + 372, 89, { en: 'Slack alerts', ko: 'Slack 알림' }, { size: 12 })}
${box(x0 + 360, 130, 100, 44, 'f-box')}${T(x0 + 372, 157, { en: 'Dashboards', ko: '대시보드' }, { size: 12 })}`;
    const divider = `<path d="M370,30 L370,210" class="f-line" stroke-width="1" stroke-dasharray="3 5"/>`;
    return svg(880, 220, 'Before: three teams copying spreadsheets by hand. After: one pipeline feeding Slack and dashboards.', leftLabel + left + divider + pipe);
  },

  opsImpact: () =>
    beforeAfter({
      label: 'Monthly manual operations hours, before and after',
      max: 200,
      rows: [
        { label: { en: 'Manual ops time', ko: '수작업 운영 시간' }, sub: { en: 'hours per month', ko: '월 기준' }, before: 200, after: 1, beforeLabel: '200 h', afterLabel: '< 1 h' },
        { label: { en: 'Reporting error rate', ko: '리포트 오류율' }, sub: { en: 'weekly KPI reports', ko: '주간 KPI 리포트' }, before: 5 * 40, after: 1 * 40, beforeLabel: '5%', afterLabel: '< 1%' },
      ],
    }),

  // P-03 — subscription tier ladder
  tierLadder: () => {
    const tiers = [
      { t: { en: 'Follower', ko: '팔로워' }, s: { en: 'free', ko: '무료' } },
      { t: { en: 'Tier 1', ko: '티어 1' }, s: { en: 'entry subscription', ko: '기본 구독' } },
      { t: { en: 'Tier 2', ko: '티어 2' }, s: { en: 'more benefits', ko: '혜택 확대' } },
      { t: { en: 'Upper tiers', ko: '상위 티어' }, s: { en: 'streamer-designed', ko: '스트리머 설계' } },
    ];
    const w = 170, step = 36;
    const bars = tiers
      .map((t, i) => {
        const x = i * (w + 18), h = 70 + i * step, y = 200 - h;
        return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" class="${i === 0 ? 'f-box' : i === 3 ? 'f-accent' : 'f-box-strong'}" stroke-width="1.2"/>
${T(x + 14, y + 26, t.t, { size: 15, weight: 600, cls: i === 3 ? 'f-on-accent' : '' })}
${T(x + 14, y + 46, t.s, { size: 12, cls: i === 3 ? 'f-on-accent' : 'f-muted' })}`;
      })
      .join('');
    const perks = [
      { en: 'Badges', ko: '배지' },
      { en: 'Emotes', ko: '이모티콘' },
      { en: 'Subscriber-only content', ko: '구독자 전용 콘텐츠' },
      { en: 'Community perks', ko: '커뮤니티 혜택' },
    ];
    const x = 4 * (w + 18) + 16;
    const perkList = `${T(x, 30, { en: 'Benefit modules', ko: '혜택 모듈' }, { size: 11, cls: 'f-muted f-mono' })}
${perks.map((p, i) => `${box(x, 44 + i * 40, 150, 30, 'f-box', 6)}${T(x + 12, 64 + i * 40, p, { size: 12 })}`).join('')}`;
    return svg(900, 210, 'Subscription ladder from follower to streamer-designed upper tiers, built from benefit modules', bars + perkList);
  },

  // P-04 — discovery pipeline
  discovery: () => {
    const signals = [
      { en: 'Viewing history', ko: '시청 이력' },
      { en: 'Session intent', ko: '세션 인텐트' },
      { en: 'Hashtags (tag IDs)', ko: '해시태그(태그 ID)' },
    ];
    const pools = [
      { en: 'Popular', ko: '인기 방송' },
      { en: 'Mid-tier match', ko: '미드티어 매칭' },
      { en: 'New & rising', ko: '신규·성장' },
    ];
    const col = (x, title, items, cls) =>
      `${T(x, 20, title, { size: 11, cls: 'f-muted f-mono' })}${items
        .map((it, i) => `${box(x, 36 + i * 52, 170, 40, cls)}${T(x + 14, 61 + i * 52, it, { size: 13, weight: i === 1 && cls === 'f-box-strong' ? 600 : 400 })}`)
        .join('')}`;
    const body = `${col(0, { en: 'SIGNALS', ko: '시그널' }, signals, 'f-box')}
${line('M176,108 L226,108')}
${col(232, { en: 'CANDIDATE POOLS', ko: '후보 풀' }, pools, 'f-box-strong')}
${line('M408,108 L458,108')}
${box(464, 58, 170, 100, 'f-accent')}
${T(478, 88, { en: 'Balanced ranking', ko: '균형 랭킹' }, { size: 14, weight: 600, cls: 'f-on-accent' })}
${T(478, 110, { en: 'relevance first,', ko: '관련도 우선,' }, { size: 12, cls: 'f-on-accent' })}
${T(478, 128, { en: 'exposure spread', ko: '노출 분산' }, { size: 12, cls: 'f-on-accent' })}
${line('M640,108 L690,108')}
${box(696, 58, 150, 100, 'f-box')}
${T(710, 88, { en: 'Homepage', ko: '홈 화면' }, { size: 14, weight: 600 })}
${T(710, 110, { en: 'personalized', ko: '개인화 추천' }, { size: 12, cls: 'f-muted' })}
${T(710, 128, { en: 'rows & tags', ko: '로우·태그' }, { size: 12, cls: 'f-muted' })}`;
    return svg(860, 200, 'Signals feed popular, mid-tier and new candidate pools; a balanced ranking fills the personalized homepage', body);
  },

  discoveryImpact: () =>
    beforeAfter({
      label: 'Average concurrent viewers for 1,000+ mid-tier streamers, before and after',
      max: 44,
      rows: [
        { label: { en: 'Avg. concurrent viewers', ko: '평균 동시 시청자' }, sub: { en: '1,000+ mid-tier streamers', ko: '미드티어 스트리머 1,000명+' }, before: 10, after: 40, beforeLabel: '10', afterLabel: '40' },
      ],
    }),

  // P-05 — dashboard wireframe
  dashboard: () => {
    const q = [
      { t: { en: 'Who is watching?', ko: '누가 보고 있나?' }, s: { en: 'viewer change', ko: '시청자 변화' } },
      { t: { en: 'Are fans staying?', ko: '팬이 남고 있나?' }, s: { en: 'subscriber trend', ko: '구독자 추이' } },
      { t: { en: 'Where do they come from?', ko: '어디서 오나?' }, s: { en: 'traffic sources', ko: '유입 경로' } },
    ];
    const cards = q
      .map((c, i) => {
        const x = i * 284;
        const spark = i === 0
          ? `<path d="M${x + 16},150 L${x + 60},140 L${x + 104},146 L${x + 148},124 L${x + 192},118 L${x + 236},98" class="f-line-accent" stroke-width="2.2"/>`
          : i === 1
            ? [0, 1, 2, 3, 4, 5].map((k) => `<rect x="${x + 18 + k * 38}" y="${150 - (18 + k * 9)}" width="22" height="${18 + k * 9}" rx="3" class="${k === 5 ? 'f-accent' : 'f-accent-2'}"/>`).join('')
            : [62, 44, 30, 18].map((v, k) => `<rect x="${x + 16}" y="${96 + k * 16}" width="${v * 3.4}" height="10" rx="3" class="${k === 0 ? 'f-accent' : 'f-accent-2'}"/>`).join('');
        return `${box(x, 20, 264, 150, 'f-box')}
${T(x + 16, 48, c.t, { size: 15, weight: 600 })}
${T(x + 16, 68, c.s, { size: 12, cls: 'f-muted' })}
${spark}`;
      })
      .join('');
    const insight = `${box(0, 186, 832, 44, 'f-box-strong')}
${T(16, 213, { en: 'One question per view · built for non-technical creators · no mandate to adopt', ko: '화면 하나에 질문 하나 · 비전문가 크리에이터를 위한 설계 · 도입은 자율' }, { size: 13 })}`;
    return svg(840, 240, 'Dashboard organized around three creator questions with a plain-language insight line', cards + insight);
  },

  // P-07 — N-CONNECT three-sided program
  nconnect: () => {
    const node = (x, y, w, t, sub, cls = 'f-box') =>
      `${box(x, y, w, 70, cls)}${T(x + w / 2, y + 30, t, { size: 15, weight: 600, anchor: 'middle', cls: cls === 'f-accent' ? 'f-on-accent' : '' })}${T(x + w / 2, y + 50, sub, { size: 12, anchor: 'middle', cls: cls === 'f-accent' ? 'f-on-accent' : 'f-muted' })}`;
    const body = `${node(20, 20, 200, { en: 'Players', ko: '플레이어' }, { en: 'link accounts, get rewards', ko: '계정 연동·보상' })}
${node(620, 20, 200, { en: 'Creators', ko: '크리에이터' }, { en: 'stream NEXON games', ko: '넥슨 게임 방송' })}
${node(320, 150, 200, { en: 'N-CONNECT', ko: 'N-CONNECT' }, { en: 'program + measurement', ko: '프로그램·측정' }, 'f-accent')}
${node(320, 290, 200, { en: 'NEXON games', ko: '넥슨 게임' }, { en: 'new & returning players', ko: '신규·복귀 유저' })}
${line('M224,55 L616,55')}
${T(420, 45, { en: 'watch · join via streamer', ko: '시청 · 스트리머 통해 참여' }, { size: 12, anchor: 'middle', cls: 'f-muted' })}
${line('M700,94 L500,148')}
${T(640, 132, { en: 'activity · growth · impact', ko: '활동 · 성장 · 임팩트' }, { size: 12, cls: 'f-muted' })}
${line('M140,94 L340,148')}
${T(96, 132, { en: 'account linking', ko: '계정 연동' }, { size: 12, cls: 'f-muted' })}
${line('M420,224 L420,284')}
${T(432, 260, { en: 'players arrive in-game', ko: '게임으로 유입' }, { size: 12, cls: 'f-muted' })}
${T(60, 330, { en: 'Platforms: SOOP · Chzzk', ko: '플랫폼: SOOP · 치지직' }, { size: 12, cls: 'f-muted f-mono' })}`;
    return svg(840, 370, 'N-CONNECT connects players, creators and NEXON games through account linking, creator rewards and measurement', body);
  },

  viewershipScore: () => {
    const axes = [
      { w: 40, t: { en: 'Reach', ko: '도달' }, s: { en: 'how many people saw it', ko: '얼마나 많이 봤나' } },
      { w: 35, t: { en: 'Quality', ko: '품질' }, s: { en: 'how well they watched', ko: '얼마나 잘 봤나' } },
      { w: 25, t: { en: 'Engagement', ko: '참여' }, s: { en: 'how much they took part', ko: '얼마나 참여했나' } },
    ];
    const W = 800;
    let x = 0;
    const bars = axes
      .map((a, i) => {
        const w = (a.w / 100) * W;
        const out = `<rect x="${x}" y="20" width="${w - 6}" height="56" rx="8" class="${i === 0 ? 'f-accent' : i === 1 ? 'f-accent-2' : 'f-base'}"/>
${T(x + 14, 46, a.t, { size: 15, weight: 600, cls: i === 0 ? 'f-on-accent' : '' })}
${T(x + 14, 66, `${a.w}`, { size: 12, cls: `f-mono ${i === 0 ? 'f-on-accent' : ''}` })}
${T(x + 4, 100, a.s, { size: 12, cls: 'f-muted' })}`;
        x += w;
        return out;
      })
      .join('');
    const note = `${box(0, 124, W - 6, 44, 'f-box')}${T(16, 151, { en: '× short-form correction — so a 60-second clip and a 4-hour stream can be compared on one scale', ko: '× 숏폼 보정 — 60초 클립과 4시간 방송을 같은 척도로 비교하기 위해' }, { size: 13 })}`;
    return svg(W, 176, 'Proposed three-axis creator score: Reach 40, Quality 35, Engagement 25, with a short-form correction', bars + note);
  },

  // P-08 — Sidekick architecture
  sidekickArch: () => {
    const body = `${box(0, 40, 170, 150, 'f-box-strong')}
${T(16, 66, { en: 'Phone app', ko: '모바일 앱' }, { size: 15, weight: 600 })}
${T(16, 90, { en: 'hire AI employees', ko: 'AI 직원 채용' }, { size: 12, cls: 'f-muted' })}
${T(16, 110, { en: 'delegate by text or voice', ko: '글·음성으로 맡기기' }, { size: 12, cls: 'f-muted' })}
${T(16, 130, { en: 'approve result cards', ko: '결과 카드 승인' }, { size: 12, cls: 'f-muted' })}
${line('M174,115 L226,115')}
${box(230, 40, 190, 150, 'f-box')}
${T(246, 66, { en: 'Control plane', ko: '컨트롤 플레인' }, { size: 15, weight: 600 })}
${T(246, 90, { en: 'identity & billing', ko: '인증·결제' }, { size: 12, cls: 'f-muted' })}
${T(246, 110, { en: 'provisioning', ko: '프로비저닝' }, { size: 12, cls: 'f-muted' })}
${T(246, 130, { en: 'approval gate', ko: '승인 게이트' }, { size: 12, cls: 'f-muted' })}
${line('M424,115 L476,115')}
${box(480, 20, 350, 190, 'f-accent')}
${T(498, 48, { en: 'Your own agent runtime', ko: '사용자 전용 에이전트 런타임' }, { size: 15, weight: 600, cls: 'f-on-accent' })}
${T(498, 68, { en: 'isolated per user · Seoul region', ko: '사용자별 격리 · 서울 리전' }, { size: 12, cls: 'f-on-accent' })}
${['Researcher', 'Writer', 'Analyst'].map((r, i) => `<rect x="${498 + i * 108}" y="88" width="98" height="40" rx="8" class="f-box"/>${T(547 + i * 108, 113, { en: r, ko: ['리서처', '작가', '분석가'][i] }, { size: 12, anchor: 'middle' })}`).join('')}
${T(498, 156, { en: 'memory · skills · tool connectors · schedules', ko: '메모리 · 스킬 · 도구 연결 · 예약 작업' }, { size: 12, cls: 'f-on-accent' })}
${T(498, 178, { en: 'one profile per AI employee', ko: 'AI 직원 1명 = 프로필 1개' }, { size: 12, cls: 'f-on-accent' })}
<path d="M650,214 C650,250 85,250 85,194" class="f-line-accent" stroke-width="1.5" stroke-dasharray="5 5" marker-end="url(#ah)"/>
${T(368, 262, { en: 'results come back as cards — nothing goes out without your approval', ko: '결과는 카드로 돌아오고, 승인 없이는 밖으로 나가지 않습니다' }, { size: 12.5, anchor: 'middle', cls: 'f-muted' })}`;
    return svg(840, 272, 'Sidekick architecture: phone app, control plane, and an isolated per-user agent runtime whose results return as approval cards', body);
  },

  releaseLine: () => {
    const steps = [
      { en: 'Pin base SHA', ko: '기준 SHA 고정' },
      { en: 'Isolated worktree', ko: '격리 worktree' },
      { en: 'Agent writes', ko: '에이전트 작업' },
      { en: 'PR + CI', ko: 'PR + CI' },
      { en: 'Merge queue', ko: '머지 큐' },
      { en: 'Attest main', ko: 'main 증명' },
      { en: 'Release one SHA', ko: '단일 SHA 배포' },
    ];
    const w = 108, g = 12;
    const body = steps
      .map((st, i) => {
        const x = i * (w + g);
        return `${box(x, 20, w, 48, i === 6 ? 'f-accent' : i === 0 ? 'f-box-strong' : 'f-box')}${T(x + w / 2, 49, st, { size: 12, anchor: 'middle', weight: 600, cls: i === 6 ? 'f-on-accent' : '' })}${i < 6 ? line(`M${x + w + 1},44 L${x + w + g - 1},44`) : ''}`;
      })
      .join('');
    const neg = `${T(0, 100, { en: 'Negative invariants travel with every change: removed UI must stay removed, and workers never deploy.', ko: '모든 변경에 “부재 조건”이 따라갑니다: 지운 UI는 계속 지워져 있어야 하고, 작업 에이전트는 배포하지 않습니다.' }, { size: 12.5, cls: 'f-muted' })}`;
    return svg(836, 112, 'Release line: pinned base, isolated worktrees, PR and CI, merge queue, attestation, release from a single SHA', body + neg);
  },

  // P-06 — application flow before/after
  supportFlow: () => {
    const before = [
      { en: 'Apply', ko: '신청' },
      { en: 'Submit documents', ko: '서류 제출' },
      { en: 'Manual check', ko: '수동 검토' },
      { en: 'Back-and-forth', ko: '보완 요청' },
      { en: 'Approve', ko: '승인' },
    ];
    const after = [
      { en: 'Apply', ko: '신청' },
      { en: 'Auto eligibility check', ko: '자격 자동 검증' },
      { en: 'Approve', ko: '승인' },
    ];
    const row = (items, y, cls, w) =>
      items
        .map((it, i) => {
          const x = i * (w + 22);
          return `${box(x, y, w, 40, i === items.length - 1 ? 'f-box-strong' : cls)}${T(x + w / 2, y + 25, it, { size: 12.5, anchor: 'middle', weight: i === items.length - 1 ? 600 : 400 })}${
            i < items.length - 1 ? line(`M${x + w + 2},${y + 20} L${x + w + 19},${y + 20}`) : ''
          }`;
        })
        .join('');
    const body = `${T(0, 18, { en: 'BEFORE — WEEKS', ko: '이전 — 수 주' }, { size: 11, cls: 'f-muted f-mono' })}
${row(before, 30, 'f-box', 146)}
${T(0, 112, { en: 'AFTER — DAYS', ko: '이후 — 수 일' }, { size: 11, cls: 'f-muted f-mono' })}
${row(after, 124, 'f-box', 250)}`;
    return svg(840, 176, 'Support-fund approval flow: five manual steps over weeks reduced to three steps over days', body);
  },
};
