import { COMPANY, ROLE } from '../shared.mjs';

export default {
  id: 'P-03',
  slug: 'creator-subscriptions',
  company: 'SOOP',
  title: { en: 'Creator Subscription Service', ko: '크리에이터 구독 서비스' },
  dek: {
    en: 'From a single monthly price to tiers that streamers design themselves — and a paywall that converts more of the fans who were already there.',
    ko: '하나의 월 구독료에서 스트리머가 직접 설계하는 티어로. 이미 있던 팬을 더 많이 유료 구독자로 전환한 구독 개편.',
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
  hero: 'tierLadder',
  heroCaption: {
    en: 'The subscription ladder, reconstructed. Each step up adds benefits; the upper tiers are assembled by the streamer from benefit modules.',
    ko: '구독 사다리 재구성도. 단계가 올라갈수록 혜택이 늘고, 상위 티어는 스트리머가 혜택 모듈을 조합해 직접 설계합니다.',
  },
  tldr: [
    {
      en: 'Subscriptions launched on AfreecaTV in 2017 as a single monthly price with the same perks for everyone.[^1] That left money on the table with superfans and gave streamers no way to reward their most loyal viewers differently.',
      ko: '아프리카TV 구독은 2017년 모두에게 같은 혜택을 주는 단일 월 요금으로 시작했습니다.[^1] 그래서 열성 팬의 지불 의향을 담지 못했고, 스트리머도 가장 충성도 높은 시청자에게 다르게 보답할 방법이 없었습니다.',
    },
    {
      en: 'Over several release cycles we iterated the paywall and the tier packaging, and let streamers design their own benefits — badges, emotes, subscriber-only content and community perks.',
      ko: '여러 릴리스 주기에 걸쳐 결제 화면과 티어 패키징을 반복 개선했고, 스트리머가 배지·이모티콘·구독자 전용 콘텐츠·커뮤니티 혜택을 직접 설계하도록 했습니다.',
    },
    {
      en: 'Paid conversion rose **31%**; the top 20% of streamers grew subscription revenue **27%**; retention improved **15%**; and more than half of new subscribers chose a customized product.',
      ko: '유료 전환율은 **31%** 올랐고, 상위 20% 스트리머의 구독 매출은 **27%** 늘었으며, 유지율은 **15%** 개선됐고, 신규 구독자의 절반 이상이 맞춤형 상품을 선택했습니다.',
    },
  ],
  sections: [
    {
      id: 'context',
      heading: { en: 'Context', ko: '배경' },
      blocks: [
        {
          type: 'p',
          en: 'On SOOP, gifting is spontaneous and subscriptions are commitment. When subscriptions launched in July 2017, a month cost 3,300 won with custom emotes and a chat color as the main perks.[^1] Over the following years the platform added gift subscriptions, more emote slots and animated emotes,[^2] and in late 2024 introduced a higher-priced second tier.[^3]',
          ko: 'SOOP에서 별풍선이 즉흥적인 후원이라면, 구독은 약속입니다. 2017년 7월 구독이 처음 나왔을 때 가격은 월 3,300원이었고 주요 혜택은 전용 이모티콘과 채팅 색상이었습니다.[^1] 이후 구독 선물권, 이모티콘 슬롯 확대, 움직이는 이모티콘이 추가됐고,[^2] 2024년 말에는 더 높은 가격의 두 번째 티어가 도입됐습니다.[^3]',
        },
        {
          type: 'p',
          en: 'The product question underneath all of these changes was the same: how do you let the fans who care most pay more, and feel good about it, without making the entry tier feel second-class?',
          ko: '이 모든 변화 밑에 깔린 제품 질문은 같았습니다. 가장 아끼는 팬이 기꺼이 더 낼 수 있게 하면서, 기본 티어가 “이류”처럼 느껴지지 않게 하려면 어떻게 해야 할까?',
        },
      ],
    },
    {
      id: 'problem',
      heading: { en: 'The problem', ko: '문제 정의' },
      blocks: [
        {
          type: 'list',
          items: [
            { en: '**One price for every fan.** The most committed viewers had nowhere to go above the base subscription.', ko: '**모든 팬에게 하나의 가격.** 가장 열성적인 시청자도 기본 구독 이상으로 갈 곳이 없었습니다.' },
            { en: '**Generic benefits.** Perks were the same on every channel, so they said little about any particular streamer’s community.', ko: '**획일적인 혜택.** 모든 채널의 혜택이 같아서, 각 스트리머 커뮤니티의 개성을 담지 못했습니다.' },
            { en: '**Paywall friction.** Viewers who were ready to subscribe still dropped off in the purchase flow.', ko: '**결제 과정의 마찰.** 구독할 마음이 있는 시청자도 결제 흐름에서 이탈했습니다.' },
          ],
        },
      ],
    },
    {
      id: 'approach',
      heading: { en: 'Approach', ko: '접근 방식' },
      blocks: [
        {
          type: 'steps',
          items: [
            {
              title: { en: 'Treat the paywall as a funnel', ko: '결제 화면을 퍼널로 보기' },
              body: {
                en: 'We instrumented the purchase flow step by step and changed one thing per release cycle, keeping what moved paid conversion and dropping what didn’t.',
                ko: '결제 흐름을 단계별로 계측하고 릴리스마다 한 가지씩 바꿨습니다. 유료 전환을 움직인 변경은 남기고, 아닌 것은 걷어냈습니다.',
              },
            },
            {
              title: { en: 'Package tiers around fan intent', ko: '팬의 의도에 맞춘 티어 패키징' },
              body: {
                en: 'We iterated through four tier structures, each tested against conversion and retention rather than price alone.',
                ko: '네 가지 티어 구조를 거치며 반복했고, 각 구조를 가격만이 아니라 전환율과 유지율로 평가했습니다.',
              },
            },
            {
              title: { en: 'Hand benefit design to streamers', ko: '혜택 설계를 스트리머에게' },
              body: {
                en: 'Streamers could compose their own benefits — badges, emotes, subscriber-only content and community features — so a subscription meant something specific to that channel.',
                ko: '스트리머가 배지·이모티콘·구독자 전용 콘텐츠·커뮤니티 기능을 직접 조합하도록 해, 구독이 그 채널만의 의미를 갖게 했습니다.',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'decisions',
      heading: { en: 'Key decisions', ko: '핵심 의사결정' },
      blocks: [
        {
          type: 'decision',
          title: { en: 'Let streamers design benefits', ko: '혜택 설계 권한을 스트리머에게' },
          options: {
            en: 'A platform-defined benefit set for every channel, or modular benefits that each streamer configures.',
            ko: '모든 채널에 같은 플랫폼 기본 혜택을 줄지, 스트리머가 설정하는 모듈형 혜택을 줄지.',
          },
          choice: { en: 'Modular benefits, configured by the streamer.', ko: '스트리머가 설정하는 모듈형 혜택.' },
          why: {
            en: 'Streamers know what their community values. Custom products gave fans a reason to subscribe to *this* channel, not just “a subscription.”',
            ko: '커뮤니티가 무엇을 원하는지는 스트리머가 가장 잘 압니다. 맞춤 상품은 팬에게 “구독”이 아니라 *이 채널*을 구독할 이유를 줬습니다.',
          },
          tradeoff: {
            en: 'More setup for streamers, which meant good defaults and templates mattered.',
            ko: '스트리머의 설정 부담이 늘어나므로 좋은 기본값과 템플릿이 중요했습니다.',
          },
        },
        {
          type: 'decision',
          title: { en: 'Judge tiers on retention, not just revenue', ko: '티어는 매출만이 아니라 유지율로 판단' },
          options: {
            en: 'Optimize each tier change for immediate revenue, or for conversion and retention together.',
            ko: '티어 변경을 당장의 매출로 최적화할지, 전환율과 유지율을 함께 볼지.',
          },
          choice: { en: 'Conversion and retention together.', ko: '전환율과 유지율을 함께.' },
          why: {
            en: 'A tier that lifts one month’s revenue but raises churn is a loss. The structure that shipped improved both.',
            ko: '한 달 매출을 올리지만 해지를 늘리는 티어는 손해입니다. 최종 구조는 둘 다 개선했습니다.',
          },
        },
      ],
    },
    {
      id: 'results',
      heading: { en: 'Results', ko: '결과' },
      blocks: [
        {
          type: 'metrics',
          rows: [
            { value: '+31%', label: { en: 'Paid conversion', ko: '유료 전환율' } },
            { value: '+27%', label: { en: 'Average subscription revenue, top-20% streamers', ko: '상위 20% 스트리머 평균 구독 매출' } },
            { value: '+15%', label: { en: 'Subscriber retention', ko: '구독 유지율' } },
            { value: '50%+', label: { en: 'Share of new subscribers choosing a customized product', ko: '맞춤형 상품을 선택한 신규 구독자 비율' } },
          ],
        },
        {
          type: 'p',
          en: 'The direction held after the project. In 2025 SOOP reorganized subscriptions into a Basic tier and a Plus tier in which streamers choose among several price levels and set the benefits themselves.[^4]',
          ko: '이 방향은 프로젝트 이후에도 이어졌습니다. 2025년 SOOP은 구독을 베이직과 플러스로 재편했고, 플러스에서는 스트리머가 여러 가격 단계 중 하나를 고르고 혜택을 직접 정합니다.[^4]',
        },
      ],
    },
    {
      id: 'learned',
      heading: { en: 'What I learned', ko: '배운 점' },
      blocks: [
        {
          type: 'quote',
          en: 'Pricing is a product surface. The tier someone chooses says what they want to be to a creator.',
          ko: '가격도 제품의 일부입니다. 어떤 티어를 고르느냐는 그 사람이 크리에이터에게 어떤 존재가 되고 싶은지를 말해 줍니다.',
        },
        {
          type: 'list',
          items: [
            { en: '**Give creators the controls.** Platform-wide defaults are a starting point; the lift came from customization.', ko: '**조정 권한은 크리에이터에게.** 플랫폼 기본값은 출발점일 뿐이고, 성과는 맞춤화에서 나왔습니다.' },
            { en: '**Small paywall changes compound.** No single release moved conversion 31%; the cycle of measured changes did.', ko: '**작은 결제 개선이 쌓입니다.** 어느 한 릴리스가 전환율을 31% 올린 게 아니라, 측정하며 바꾸는 주기가 만든 결과였습니다.' },
          ],
        },
      ],
    },
    {
      id: 'timeline',
      heading: { en: 'Platform context', ko: '플랫폼 맥락' },
      blocks: [
        {
          type: 'timeline',
          items: [
            { date: '2017.07', text: { en: 'Subscriptions launch at 3,300 won a month.', ko: '월 3,300원 구독 출시.' }, fn: 1 },
            { date: '2020–22', text: { en: 'Gift subscriptions, expanded emote slots and animated emotes for subscribers.', ko: '구독 선물권, 이모티콘 슬롯 확대, 구독자용 움직이는 이모티콘.' }, fn: 2 },
            { date: '2024.11', text: { en: 'First price change since launch; a second, higher tier is added.', ko: '출시 이후 첫 가격 변경, 상위 티어 추가.' }, fn: 3 },
            { date: '2025.05', text: { en: 'Basic and Plus; streamers set Plus pricing levels and benefits.', ko: '베이직·플러스 재편, 플러스 가격 단계와 혜택은 스트리머가 설정.' }, fn: 4 },
          ],
        },
        {
          type: 'note',
          en: 'Milestones are public platform changes, listed for context. They are not a claim that each one was my project.',
          ko: '마일스톤은 맥락을 위한 공개 플랫폼 변경 사항이며, 각각이 모두 제 프로젝트였다는 뜻은 아닙니다.',
        },
      ],
    },
  ],
  sources: [
    { publisher: 'AfreecaTV notice', title: '구독 서비스 및 시그니처 풍선 오픈 안내', date: 'Jun 2017', url: 'https://afwbbs1.sooplive.com/app/index.php?board=notice&b_no=5182&control=view' },
    { publisher: 'AfreecaTV notice', title: '구독 이모티콘 업데이트 안내', date: 'Dec 2022', url: 'https://afwbbs1.sooplive.com/app/index.php?board=notice&b_no=8331&control=view' },
    { publisher: 'Daum News', title: 'SOOP raises subscription price and adds a second tier', date: 'Oct 21, 2024', url: 'https://v.daum.net/v/20241021150304882' },
    { publisher: 'Newsis', title: 'SOOP reorganizes subscriptions into Basic and Plus', date: 'May 26, 2025', url: 'https://www.newsis.com/view/NISX20250526_0003190052' },
  ],
};
