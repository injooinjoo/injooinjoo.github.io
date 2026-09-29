import { COMPANY, ROLE } from '../shared.mjs';

export default {
  id: 'P-03',
  slug: 'creator-subscriptions',
  company: 'SOOP',
  title: { en: 'Creator Subscription Service', ko: '크리에이터 구독 서비스' },
  dek: {
    en: 'One monthly price gave every fan the same perks. Over several release cycles we reworked the paywall and the tiers, and let streamers decide what their subscription includes.',
    ko: '월 구독료 하나에 모든 팬이 같은 혜택을 받던 구조였습니다. 여러 릴리스에 걸쳐 결제 화면과 티어를 다시 짰고, 구독에 무엇을 담을지는 스트리머가 정하게 했습니다.',
  },
  card: {
    en: 'Subscription‑based monetization for content creators. Iterated paywall UX and tier packaging across multiple release cycles to lift paid conversion meaningfully.',
    ko: '크리에이터 대상 구독 기반 수익화. 유료 UX와 구독 티어 패키징을 반복 개선하며 유료 전환율을 끌어올림.',
  },
  kpis: [
    { value: '+31%', label: { en: 'Paid conversion', ko: '유료 전환율' }, cardLabel: 'Paid conversion' },
    { value: '4', label: { en: 'Tier structures', ko: '티어 구조' }, cardLabel: 'Tier structures' },
    { value: '+27%', label: { en: 'Subscription revenue, top-20% streamers', ko: '상위 20% 스트리머 구독 매출' }, card: false },
    { value: '+15%', label: { en: 'Subscriber retention', ko: '구독 유지율' }, card: false },
  ],
  stack: ['Payment APIs', 'React', 'Node.js', 'PostgreSQL'],
  meta: {
    company: COMPANY,
    role: ROLE,
    scope: {
      en: 'Paywall UX, tier packaging, streamer-configurable benefits, release-cycle experiments',
      ko: '유료 결제 UX, 티어 패키징, 스트리머 맞춤 혜택, 릴리스 주기별 실험',
    },
  },
  hero: {
    scene: 'p03-hero',
    alt: {
      en: 'Sketch: a four-step staircase with a fan on each step. Each step adds a benefit: a badge, emotes, members-only video, and a perk the streamer designs. A note reads “each step up adds something”.',
      ko: '스케치: 네 칸짜리 계단 위 칸마다 팬이 서 있다. 칸마다 혜택이 하나씩 늘어난다. 배지, 이모티콘, 구독자 전용 영상, 스트리머가 직접 만든 혜택. “한 칸 오를 때마다 하나씩 더”라는 메모.',
    },
    caption: {
      en: 'The subscription as a ladder. The upper steps are put together by the streamer.',
      ko: '사다리가 된 구독. 위쪽 칸은 스트리머가 직접 구성합니다.',
    },
  },
  glance: {
    problem: {
      en: 'Every fan paid the same price for the same perks on every channel. The most committed fans had nowhere to go, and ready buyers dropped out at checkout.',
      ko: '모든 채널에서 모든 팬이 같은 가격에 같은 혜택을 받았습니다. 가장 열성적인 팬은 더 올라갈 곳이 없었고, 살 마음이 있던 시청자도 결제 도중 이탈했습니다.',
    },
    did: {
      en: 'We measured the paywall step by step, changed one thing per release, tried four tier structures, and let streamers compose their own benefits.',
      ko: '결제 흐름을 단계별로 계측해 릴리스마다 한 가지씩 바꿨고, 티어 구조를 네 번 시도했으며, 혜택은 스트리머가 직접 조합하게 했습니다.',
    },
    result: {
      en: 'Paid conversion rose **31%**, retention **15%**. The top 20% of streamers grew subscription revenue **27%**.',
      ko: '유료 전환율은 **31%**, 유지율은 **15%** 올랐습니다. 상위 20% 스트리머의 구독 매출은 **27%** 늘었습니다.',
    },
  },
  chapters: [
    {
      id: 'one-price',
      heading: { en: 'One price for every fan', ko: '모든 팬에게 같은 가격' },
      blocks: [
        {
          type: 'p',
          en: 'A star balloon is a gift in the moment. A subscription is a monthly commitment. On AfreecaTV it cost 3,300 won, the price it had kept since launch, with the same perks on every channel.[^2]',
          ko: '별풍선이 그 순간의 선물이라면 구독은 매달의 약속입니다. 아프리카TV 구독은 출시 때부터 월 3,300원이었고, 혜택은 어느 채널이나 같았습니다.[^2]',
        },
        {
          type: 'p',
          en: 'Superfans had nowhere to go above the base plan, and streamers couldn’t reward them differently.',
          ko: '열혈 팬은 기본 구독 위로 갈 곳이 없었고, 스트리머는 그들에게 다르게 보답할 방법이 없었습니다.',
        },
        {
          type: 'p',
          en: 'Demand was not the problem. In early 2024, viewers who followed streamers over from Twitch could carry their subscription months across to AfreecaTV.[^1]',
          ko: '수요는 충분했습니다. 2024년 초에는 트위치에서 넘어온 스트리머를 따라온 시청자가 구독 개월 수를 아프리카TV로 이어갈 수 있었습니다.[^1]',
        },
        {
          type: 'sketch',
          scene: 'p03-oneprice',
          alt: {
            en: 'Sketch: one price tag, “3,300 won a month”, points to three fans (casual, regular, superfan) who all get the same badge. The superfan, surrounded by hearts, says “I’d happily give more”.',
            ko: '스케치: “월 3,300원” 가격표 하나가 가끔 보는 팬, 단골, 열혈 팬 세 사람을 가리키고, 세 사람 모두 같은 배지를 받는다. 하트에 둘러싸인 열혈 팬이 “더 하고 싶은데…”라고 말한다.',
          },
        },
      ],
    },
    {
      id: 'paywall',
      heading: { en: 'The paywall as a funnel', ko: '결제 화면은 퍼널로' },
      blocks: [
        {
          type: 'p',
          en: 'We instrumented the purchase flow step by step and changed one thing per release. Changes that moved paid conversion stayed. The rest were removed.',
          ko: '결제 흐름을 단계별로 계측하고 릴리스마다 한 가지씩 바꿨습니다. 유료 전환을 움직인 변경은 남기고 나머지는 걷어냈습니다.',
        },
        {
          type: 'sketch',
          scene: 'p03-funnel',
          alt: {
            en: 'Two funnels, before and after, with four steps: plan page, pick a tier, payment, subscribed. Red drop-off arrows are thick in the first funnel and thinner in the second, which ends 31% wider.',
            ko: '구독 안내, 티어 선택, 결제, 구독 완료 네 단계로 된 전후 퍼널 두 개. 빨간 이탈 화살표가 이전 퍼널에서는 굵고 이후 퍼널에서는 가늘며, 이후 퍼널의 끝이 31% 더 넓다.',
          },
        },
      ],
    },
    {
      id: 'benefits',
      heading: { en: 'Benefits the streamer builds', ko: '스트리머가 조립하는 혜택' },
      blocks: [
        {
          type: 'p',
          en: 'Streamers know what their community values. We let them compose benefits from modules (badges, emotes, members-only content, community perks), so a subscription meant something specific to that channel.',
          ko: '커뮤니티가 무엇을 좋아하는지는 스트리머가 가장 잘 압니다. 배지, 이모티콘, 구독자 전용 콘텐츠, 커뮤니티 혜택을 모듈로 만들어 스트리머가 직접 조합하게 했고, 구독은 그 채널만의 의미를 갖게 됐습니다.',
        },
        {
          type: 'sketch',
          scene: 'p03-modules',
          alt: {
            en: 'Sketch: a streamer next to four dashed benefit tiles (badge, emotes, members-only video, community). An arrow leads to a card titled “Our channel’s subscription” with three of the four ticked.',
            ko: '스케치: 스트리머 옆에 점선으로 그린 혜택 타일 네 개(배지, 이모티콘, 구독자 전용 VOD, 커뮤니티). 화살표가 “우리 채널 구독” 카드로 이어지고, 넷 중 셋에 체크가 되어 있다.',
          },
        },
        {
          type: 'p',
          en: 'We went through four tier structures and judged each on conversion and retention together. The platform’s public changes in this period followed the same line: a second, higher-priced tier in late 2024,[^2] then Basic and Plus in 2025, where each streamer sets the Plus price level.[^3]',
          ko: '티어 구조는 네 번 바꿨고, 매번 전환율과 유지율을 함께 봤습니다. 이 시기 플랫폼의 공개 변경도 같은 방향이었습니다. 2024년 말 더 높은 가격의 두 번째 티어가 생겼고,[^2] 2025년에는 베이직과 플러스로 나뉘어 플러스 가격 단계를 스트리머가 정하게 됐습니다.[^3]',
        },
      ],
    },
  ],
  decisions: [
    {
      title: { en: 'Streamers design the benefits', ko: '혜택 설계는 스트리머가' },
      why: {
        en: 'Custom products gave fans a reason to subscribe to this channel, not just to “a subscription”. It meant more setup for streamers, so defaults and templates had to be good.',
        ko: '맞춤 상품은 팬에게 “구독”이 아니라 이 채널을 구독할 이유를 줬습니다. 대신 스트리머의 설정 부담이 커져서 기본값과 템플릿이 좋아야 했습니다.',
      },
    },
    {
      title: { en: 'Judge tiers on retention too', ko: '티어는 유지율까지 보고 판단' },
      why: {
        en: 'A tier that lifts one month’s revenue but raises churn is a loss. The structure we kept improved both.',
        ko: '한 달 매출은 올리지만 해지를 늘리는 티어는 손해입니다. 최종 구조는 둘 다 개선했습니다.',
      },
    },
  ],
  results: {
    blocks: [
      {
        type: 'sketch',
        scene: 'p03-results',
        alt: {
          en: 'Results sketch: before/after bars for paid conversion (+31%), subscription revenue of the top 20% of streamers (+27%) and retention (+15%), and a pie showing that more than half of new subscribers chose a customised product.',
          ko: '결과 스케치: 유료 전환율(+31%), 상위 20% 스트리머 구독 매출(+27%), 구독 유지율(+15%)의 전후 막대와, 신규 구독자 절반 이상이 맞춤형 상품을 골랐음을 보여주는 원그래프.',
        },
      },
      {
        type: 'metrics',
        rows: [
          { value: '+31%', label: { en: 'Paid conversion', ko: '유료 전환율' } },
          { value: '+27%', label: { en: 'Average subscription revenue, top-20% streamers', ko: '상위 20% 스트리머 평균 구독 매출' } },
          { value: '+15%', label: { en: 'Subscriber retention', ko: '구독 유지율' } },
          { value: '50%+', label: { en: 'New subscribers who chose a customised product', ko: '맞춤형 상품을 고른 신규 구독자 비율' } },
        ],
      },
    ],
  },
  learned: {
    quote: {
      en: 'Pricing is part of the product. The tier someone picks says what they want to be to a creator.',
      ko: '가격도 제품의 일부입니다. 어떤 티어를 고르는지가 그 사람이 크리에이터에게 어떤 존재이고 싶은지를 말해 줍니다.',
    },
    items: [
      { en: '**Give creators the controls.** Platform defaults were the starting point; the lift came from customisation.', ko: '**조정 권한은 크리에이터에게.** 플랫폼 기본값은 출발점이었고, 성과는 맞춤화에서 나왔습니다.' },
      { en: '**Small paywall changes add up.** No single release moved conversion 31%. The cycle of measured changes did.', ko: '**작은 결제 개선이 쌓입니다.** 전환율 31%는 릴리스 하나가 아니라 측정하며 바꾸는 반복이 만든 결과였습니다.' },
    ],
  },
  sources: [
    { publisher: 'Byline Network (바이라인네트워크)', title: '‘스트리머 잔치판’ 아프리카TV 업데이트만 몇 건? 환골탈태 변화', date: 'Mar 13, 2024', url: 'https://byline.network/2024/03/13-343/' },
    { publisher: 'Daum News', title: '리브랜딩 단행한 SOOP, 구독료 인상…치지직과 경쟁 강화', date: 'Oct 21, 2024', url: 'https://v.daum.net/v/20241021150304882' },
    { publisher: 'Newsis (뉴시스)', title: 'SOOP, 반년만에 구독 서비스 재개편…구독료 최대 2배 인상', date: 'May 26, 2025', url: 'https://www.newsis.com/view/NISX20250526_0003190052' },
  ],
};
