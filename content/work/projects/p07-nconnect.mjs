export default {
  id: 'P-07',
  slug: 'n-connect',
  company: 'NEXON',
  title: { en: 'N-CONNECT Creator Partnership Program', ko: 'N-CONNECT 크리에이터 파트너십 프로그램' },
  dek: {
    en: 'N-CONNECT links players, streamers and NEXON games across streaming platforms. My part is keeping every team in the program on the same numbers, and turning what creators need into requirements other teams can build.',
    ko: 'N-CONNECT는 스트리밍 플랫폼을 넘어 플레이어, 스트리머, 넥슨 게임을 잇는 프로그램입니다. 제 몫은 참여하는 모든 팀이 같은 숫자를 보게 하고, 크리에이터에게 필요한 것을 다른 팀이 만들 수 있는 요구사항으로 옮기는 일입니다.',
  },
  card: {
    en: 'Cross-platform creator partnership program linking players, streamers and NEXON games on SOOP and Chzzk. Program reporting, partner planning, and cross-functional requirements.',
    ko: 'SOOP·치지직에서 플레이어·스트리머·넥슨 게임을 잇는 크로스 플랫폼 크리에이터 파트너십. 프로그램 리포팅, 파트너 기획, 크로스펑셔널 요구사항 정리.',
  },
  kpis: [
    {
      value: '80K+',
      label: { en: 'Linked accounts in 2 weeks', ko: '2주간 계정 연동' },
      sub: { en: 'Program result, reported by NEXON', ko: '넥슨 발표 프로그램 성과' },
      cardLabel: 'Linked accounts (program)',
    },
    {
      value: '~1,000',
      label: { en: 'Active streamers, preseason', ko: '프리시즌 활동 스트리머' },
      sub: { en: 'Program result, reported by NEXON', ko: '넥슨 발표 프로그램 성과' },
      cardLabel: 'Active streamers (program)',
    },
    {
      value: '+65%',
      label: { en: 'Avg. viewers, NEXON games on SOOP', ko: 'SOOP 넥슨 게임 평균 시청자' },
      sub: { en: 'Week over week at launch, reported by NEXON', ko: '출시 직후 전주 대비, 넥슨 발표' },
      card: false,
    },
  ],
  stack: ['Partner Programs', 'Metrics Design', 'Operational Reporting', 'Cross-platform'],
  meta: {
    company: { en: 'NEXON KOREA', ko: '넥슨코리아' },
    role: { en: 'Senior Product Manager', ko: '시니어 프로덕트 매니저' },
    scope: {
      en: 'Program reporting, partner-program planning, cross-functional requirements',
      ko: '프로그램 리포팅, 파트너 프로그램 기획, 크로스펑셔널 요구사항 정리',
    },
    link: { label: 'ncon.nexon.com', url: 'https://ncon.nexon.com/' },
  },
  hero: {
    scene: 'p07-hero',
    alt: {
      en: 'Sketch of the program as a triangle: players, creators on SOOP and Chzzk, and NEXON games, with N-CONNECT in the middle. Arrows read “streams and content”, “link accounts, get rewards” and “rewards for activity, growth, impact”.',
      ko: '프로그램을 삼각형으로 그린 스케치: 플레이어, SOOP·치지직의 크리에이터, 넥슨 게임이 있고 가운데에 N-CONNECT. 화살표에는 “방송·콘텐츠”, “계정 연동·보상”, “활동·성장·임팩트 보상”이라고 적혀 있다.',
    },
    caption: {
      en: 'How the program fits together, drawn from public materials.',
      ko: '공개 자료를 바탕으로 그린 프로그램 구조.',
    },
  },
  sourcesNote: {
    en: 'Program facts and results come from public announcements and press coverage. They are the program’s results, not personal ones. Internal metrics and commercial terms are not included.',
    ko: '프로그램 정보와 성과는 공개 발표와 보도를 인용했습니다. 개인 성과가 아닌 프로그램 성과이며, 내부 지표와 계약 조건은 싣지 않았습니다.',
  },
  glance: {
    problem: {
      en: 'Publishers usually work with streamers through one-off campaigns. The reach is real, but it doesn’t build up, and it rarely shows which creators brought players into a game.',
      ko: '게임사는 보통 일회성 캠페인으로 스트리머와 일합니다. 도달은 분명하지만 쌓이지 않고, 어떤 크리에이터가 게임에 플레이어를 데려왔는지는 잘 보이지 않습니다.',
    },
    didLabel: { en: 'My part', ko: '제 역할' },
    did: {
      en: 'Recurring program reporting across account linking, referrals, membership, content support and player impact, and turning creator and partner needs into cross-functional requirements.',
      ko: '계정 연동, 추천, 멤버십, 콘텐츠 지원, 플레이어 임팩트를 아우르는 정기 리포팅, 그리고 크리에이터와 파트너의 요구를 크로스펑셔널 요구사항으로 정리하는 일.',
    },
    resultLabel: { en: 'Program results (NEXON)', ko: '프로그램 성과 (넥슨 발표)' },
    result: {
      en: '**80K+** accounts linked within two weeks of the preseason launch, and about **1,000** active streamers in the preseason.',
      ko: '프리시즌 시작 2주 만에 계정 연동 **8만 건 이상**, 프리시즌 활동 스트리머 약 **1,000명**.',
    },
  },
  chapters: [
    {
      id: 'campaigns',
      heading: { en: 'Campaigns don’t add up', ko: '캠페인은 쌓이지 않는다' },
      blocks: [
        {
          type: 'p',
          en: 'Sponsored broadcasts, launch events and code giveaways each spike and fade.',
          ko: '후원 방송, 출시 이벤트, 쿠폰 배포는 하나하나 치솟았다가 사그라듭니다.',
        },
        {
          type: 'p',
          en: 'N-CONNECT is ongoing instead. Players link their platform account to their NEXON account and earn rewards; streamers who join become N-Connectors, rewarded on activity, growth and impact. The preseason opened on SOOP in April 2026 for about five months.[^1]',
          ko: 'N-CONNECT는 지속되는 프로그램입니다. 플레이어는 플랫폼 계정을 넥슨 계정과 연동하고 보상을 받고, 참여한 스트리머는 “N커넥터”가 되어 활동, 성장, 임팩트로 보상받습니다. 프리시즌은 2026년 4월 SOOP에서 약 5개월 일정으로 시작했습니다.[^1]',
        },
        {
          type: 'sketch',
          scene: 'p07-spike',
          alt: {
            en: 'Line sketch over time: a grey line with three tall spikes that fall back to the baseline, labelled “one-off campaigns”, and a green line that rises in steps and holds, labelled “an ongoing program”.',
            ko: '시간에 따른 선 스케치: 세 번 치솟았다가 바닥으로 돌아오는 회색 선에 “일회성 캠페인”, 계단처럼 오르며 유지되는 초록 선에 “지속되는 프로그램”이라고 적혀 있다.',
          },
        },
      ],
    },
    {
      id: 'report',
      heading: { en: 'One read for every team', ko: '모든 팀이 보는 하나의 리포트' },
      blocks: [
        {
          type: 'p',
          en: 'Product, marketing, operations and platform partners each hold part of the picture, and views or watch time mean different things on each service.',
          ko: '제품, 마케팅, 운영, 플랫폼 파트너가 각자 그림의 일부를 갖고 있고, 조회수나 시청 시간의 의미도 서비스마다 다릅니다.',
        },
        {
          type: 'p',
          en: 'I run recurring reports that put account linking, referrals, membership, content support and player impact in one read.',
          ko: '저는 계정 연동, 추천, 멤버십, 콘텐츠 지원, 플레이어 임팩트를 한 번에 보는 정기 리포트를 만듭니다.',
        },
        {
          type: 'sketch',
          scene: 'p07-report',
          alt: {
            en: 'Sketch: five signal cards (account linking, referrals, membership, content support, player impact) flow into one program report, which goes to four readers: product, marketing, operations and platform partners.',
            ko: '스케치: 계정 연동, 추천, 멤버십, 콘텐츠 지원, 플레이어 임팩트라는 시그널 카드 다섯 장이 정기 리포트 하나로 모이고, 리포트는 제품, 마케팅, 운영, 플랫폼 파트너라는 네 독자에게 간다.',
          },
        },
        {
          type: 'p',
          en: 'The other half is translation: turning what creators and platform partners ask for into requirements other teams can build and run.',
          ko: '나머지 절반은 번역입니다. 크리에이터와 플랫폼 파트너의 요청을 다른 팀이 만들고 운영할 수 있는 요구사항으로 옮깁니다.',
        },
      ],
    },
  ],
  decisions: [
    {
      title: { en: 'One shared report, not team dashboards', ko: '팀별 대시보드 대신 공통 리포트' },
      why: {
        en: 'A program that spans players, creators and platforms breaks at the handoffs. When everyone reads the same numbers, the conversation moves from whose data is right to what to change.',
        ko: '플레이어, 크리에이터, 플랫폼을 가로지르는 프로그램은 연결 지점에서 무너집니다. 모두가 같은 숫자를 보면 대화가 “누구 데이터가 맞나”에서 “무엇을 바꿀까”로 넘어갑니다.',
      },
    },
    {
      title: { en: 'Requests become requirements, with the reason', ko: '요청은 이유와 함께 요구사항으로' },
      why: {
        en: 'A list of asks gets triaged by whoever reads it. A requirement that says which creator problem it solves, and for which team, gets built.',
        ko: '요청 목록은 읽는 사람 마음대로 정리됩니다. 어떤 크리에이터 문제를 어느 팀이 풀어야 하는지 적힌 요구사항은 만들어집니다.',
      },
    },
  ],
  results: {
    heading: { en: 'Program results so far', ko: '지금까지의 프로그램 성과' },
    blocks: [
      {
        type: 'note',
        en: 'These are the program’s public results as reported by NEXON. N-CONNECT is a team effort across NEXON and its platform partners.',
        ko: '아래는 넥슨이 공개한 프로그램 성과입니다. N-CONNECT는 넥슨과 플랫폼 파트너가 함께 만드는 프로그램입니다.',
      },
      {
        type: 'metrics',
        rows: [
          { value: '80K+', label: { en: 'Accounts linked within two weeks of the preseason launch', ko: '프리시즌 시작 2주 내 계정 연동' } },
          { value: '~1,000', label: { en: 'Active streamers in the preseason', ko: '프리시즌 활동 스트리머' } },
          { value: '+65%', label: { en: 'Average viewers in the NEXON game category on SOOP, week over week', ko: 'SOOP 넥슨 게임 카테고리 평균 시청자, 전주 대비' } },
          { value: '2.6×', label: { en: 'NEXON’s share of game broadcasts on SOOP', ko: 'SOOP 게임 방송 중 넥슨 게임 비중' } },
        ],
      },
      {
        type: 'p',
        en: 'NEXON published these figures in May 2026.[^2] The program then opened on Chzzk with Naver account linking.[^3]',
        ko: '넥슨은 이 수치를 2026년 5월에 발표했습니다.[^2] 이후 네이버 계정 연동과 함께 치지직으로 확장했습니다.[^3]',
      },
      {
        type: 'sketch',
        scene: 'p07-milestones',
        alt: {
          en: 'Timeline of public milestones: April 2026, preseason opens on SOOP; May 2026, 80K+ accounts linked in two weeks, per NEXON; May 2026, opens on Chzzk with Naver account linking.',
          ko: '공개 마일스톤 타임라인: 2026년 4월 SOOP에서 프리시즌 시작, 2026년 5월 2주 만에 계정 연동 8만 건 이상(넥슨 발표), 2026년 5월 네이버 계정 연동과 함께 치지직으로 확장.',
        },
      },
    ],
  },
  learned: {
    heading: { en: 'What I’m learning', ko: '배우고 있는 것' },
    quote: {
      en: 'A partnership program is a measurement system with rewards attached. Get the measure wrong and you pay for the wrong behaviour.',
      ko: '파트너십 프로그램은 보상이 붙은 측정 시스템입니다. 측정이 틀리면 엉뚱한 행동에 돈을 쓰게 됩니다.',
    },
    items: [
      { en: '**Same data, many readers.** One report has to work for a product manager, a marketer and a platform partner.', ko: '**같은 데이터, 여러 독자.** 리포트 하나가 PM에게도, 마케터에게도, 플랫폼 파트너에게도 통해야 합니다.' },
      { en: '**The same ecosystem, from the other side.** After building creator products at SOOP, I now work on a program that runs on top of platforms like it.', ko: '**반대편에서 본 같은 생태계.** SOOP에서 크리에이터 제품을 만든 뒤, 이제는 그런 플랫폼 위에서 돌아가는 프로그램을 맡고 있습니다.' },
    ],
  },
  sources: [
    { publisher: 'ZDNet Korea', title: 'SOOP-넥슨, ‘N커넥트’ 프리시즌 시작…“유저∙스트리머∙게임 잇는다”', date: 'Apr 27, 2026', url: 'https://zdnet.co.kr/view/?no=20260427161106' },
    { publisher: 'Inven Global', title: 'NEXON’s N-CONNECT preseason surpasses 80K linked accounts in two weeks', date: 'May 2026', url: 'https://www.invenglobal.com/articles/21813/nexons-n-connect-preseason-surpasses-80k-linked-accounts-in-two-weeks' },
    { publisher: 'Inven Global', title: 'NEXON × Naver account and content linkage: Chzzk N-CONNECT', date: 'May 2026', url: 'https://www.invenglobal.com/articles/21935/nexon-naver-account-and-content-linkage-chijijik-n-connect-project-revealed' },
  ],
};
