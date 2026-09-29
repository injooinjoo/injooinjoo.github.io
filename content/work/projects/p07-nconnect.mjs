export default {
  id: 'P-07',
  slug: 'n-connect',
  company: 'NEXON',
  title: { en: 'N-CONNECT Creator Partnership Program', ko: 'N-CONNECT 크리에이터 파트너십 프로그램' },
  dek: {
    en: 'Connecting players, streamers and NEXON games across platforms — and giving every team in the program the same picture of how it is working.',
    ko: '플랫폼을 넘어 플레이어·스트리머·넥슨 게임을 잇는 프로그램. 그리고 프로그램에 참여하는 모든 팀이 같은 그림을 보도록 하는 일.',
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
  hero: 'nconnect',
  heroCaption: {
    en: 'How the program fits together, reconstructed from public materials. Players link accounts and earn rewards, creators are rewarded on activity, growth and impact, and players arrive in NEXON games.',
    ko: '공개 자료를 바탕으로 재구성한 프로그램 구조. 플레이어는 계정을 연동하고 보상을 받으며, 크리에이터는 활동·성장·임팩트로 보상받고, 플레이어는 넥슨 게임으로 유입됩니다.',
  },
  sourcesNote: {
    en: 'Program facts and results come from NEXON’s and SOOP’s public announcements and press coverage; they are the program’s results, not personal ones. Internal metrics and commercial terms are confidential and not included.',
    ko: '프로그램 정보와 성과는 넥슨·SOOP의 공개 발표와 보도를 인용했으며, 개인 성과가 아닌 프로그램 성과입니다. 내부 지표와 계약 조건은 비공개이므로 포함하지 않았습니다.',
  },
  tldr: [
    {
      en: 'N-CONNECT is NEXON’s creator partnership program. It opened its preseason on SOOP in April 2026, expanded to Chzzk in May, and announced a regular season for October.[^1][^2][^4]',
      ko: 'N-CONNECT는 넥슨의 크리에이터 파트너십 프로그램입니다. 2026년 4월 SOOP에서 프리시즌을 시작했고, 5월 치지직으로 확장했으며, 10월 정규 시즌을 예고했습니다.[^1][^2][^4]',
    },
    {
      en: 'I work on its product and partner planning: recurring program reporting across account linking, referrals, membership, content support and player impact, and turning creator-program needs into requirements other teams can build and operate.',
      ko: '저는 프로그램의 제품·파트너 기획을 맡고 있습니다. 계정 연동·추천·멤버십·콘텐츠 지원·플레이어 임팩트를 아우르는 정기 리포팅을 만들고, 크리에이터 프로그램의 요구를 다른 팀이 만들고 운영할 수 있는 요구사항으로 바꿉니다.',
    },
  ],
  sections: [
    {
      id: 'context',
      heading: { en: 'Context', ko: '배경' },
      blocks: [
        {
          type: 'p',
          en: 'Game publishers have long worked with streamers through one-off campaigns: a sponsored broadcast, a launch event, a code giveaway. The reach is real but it doesn’t compound, and it rarely tells you which creators actually brought players into the game.',
          ko: '게임사는 오랫동안 스트리머와 일회성 캠페인으로 협업해 왔습니다. 후원 방송, 출시 이벤트, 쿠폰 배포 같은 것들입니다. 도달은 분명하지만 쌓이지 않고, 어떤 크리에이터가 실제로 플레이어를 게임에 데려왔는지는 잘 알려주지 않습니다.',
        },
        {
          type: 'p',
          en: 'N-CONNECT was framed as ongoing, structured participation instead. Players link their platform account to their NEXON account; streamers who join become “N-Connectors” and are rewarded on activity, growth and in-game impact; a content support center helps them make NEXON-game content.[^1][^3]',
          ko: 'N-CONNECT는 대신 지속적이고 구조화된 참여를 목표로 설계됐습니다. 플레이어는 플랫폼 계정을 넥슨 계정과 연동하고, 참여한 스트리머는 “N커넥터”가 되어 활동·성장·게임 내 임팩트로 보상받으며, 콘텐츠 지원 센터가 넥슨 게임 콘텐츠 제작을 돕습니다.[^1][^3]',
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
            {
              en: '**Signals don’t line up across platforms.** Views, watch time and chat mean different things on different services, and short clips and long broadcasts aren’t comparable at face value.',
              ko: '**플랫폼마다 시그널이 다릅니다.** 조회수·시청 시간·채팅의 의미가 서비스마다 다르고, 짧은 클립과 긴 방송은 숫자 그대로 비교할 수 없습니다.',
            },
            {
              en: '**Many teams, one program.** Product, marketing, operations and platform partners each hold part of the picture, and each needs a different view of it.',
              ko: '**여러 팀, 하나의 프로그램.** 제품·마케팅·운영·플랫폼 파트너가 각자 그림의 일부를 갖고 있고, 각자 다른 관점이 필요합니다.',
            },
            {
              en: '**Rewards need to be defensible.** If creators are paid on performance, the measure has to be explainable to creators and partners alike.',
              ko: '**보상은 설명 가능해야 합니다.** 성과에 따라 보상한다면, 그 기준을 크리에이터와 파트너 모두에게 설명할 수 있어야 합니다.',
            },
          ],
        },
      ],
    },
    {
      id: 'approach',
      heading: { en: 'What I work on', ko: '제가 맡은 일' },
      blocks: [
        {
          type: 'steps',
          items: [
            {
              title: { en: 'A reporting rhythm for the whole funnel', ko: '퍼널 전체를 보는 리포팅 리듬' },
              body: {
                en: 'Recurring program reports that bring account linking, referrals, membership, content support and player-impact signals into one read for the creator team — so decisions start from the same numbers.',
                ko: '계정 연동·추천·멤버십·콘텐츠 지원·플레이어 임팩트 시그널을 크리에이터 팀이 한 번에 볼 수 있도록 묶은 정기 리포트입니다. 모든 의사결정이 같은 숫자에서 출발하게 합니다.',
              },
            },
            {
              title: { en: 'From creator needs to requirements', ko: '크리에이터의 요구를 요구사항으로' },
              body: {
                en: 'Translating what creators and platform partners need into operating requirements that product, marketing and operations teams can build and run.',
                ko: '크리에이터와 플랫폼 파트너가 필요로 하는 것을 제품·마케팅·운영 팀이 만들고 운영할 수 있는 요구사항으로 옮깁니다.',
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
          title: { en: 'One shared read instead of team-by-team dashboards', ko: '팀별 대시보드 대신 하나의 공통 리포트' },
          options: {
            en: 'Let each team track its own slice of the program, or bring account linking, referrals, membership, content support and player impact into one recurring report.',
            ko: '각 팀이 자기 영역만 따로 볼지, 계정 연동·추천·멤버십·콘텐츠 지원·플레이어 임팩트를 하나의 정기 리포트로 묶을지.',
          },
          choice: { en: 'One recurring report for the whole funnel.', ko: '퍼널 전체를 담은 하나의 정기 리포트.' },
          why: {
            en: 'A program that spans players, creators and platforms fails at the handoffs. When everyone reads the same numbers, the conversation moves from “whose data is right” to “what do we change.”',
            ko: '플레이어·크리에이터·플랫폼을 가로지르는 프로그램은 연결 지점에서 실패합니다. 모두가 같은 숫자를 보면 대화가 “누구 데이터가 맞나”에서 “무엇을 바꿀까”로 옮겨갑니다.',
          },
        },
      ],
    },
    {
      id: 'results',
      heading: { en: 'Program results so far', ko: '지금까지의 프로그램 성과' },
      blocks: [
        {
          type: 'note',
          en: 'These are the program’s public results as reported by NEXON, shown for context. N-CONNECT is a team effort across NEXON and its platform partners.',
          ko: '아래는 넥슨이 공개한 프로그램 성과로, 맥락을 위해 인용합니다. N-CONNECT는 넥슨과 플랫폼 파트너가 함께 만드는 프로그램입니다.',
        },
        {
          type: 'metrics',
          rows: [
            { value: '80K+', label: { en: 'Accounts linked within two weeks of the preseason launch', ko: '프리시즌 출시 2주 내 계정 연동' }, note: { en: 'About 43K on day one', ko: '첫날 약 4만 3천 건' } },
            { value: '~6,600', label: { en: 'N-CONNECT sign-ups', ko: 'N-CONNECT 가입' } },
            { value: '~1,000', label: { en: 'Active streamers in the preseason', ko: '프리시즌 활동 스트리머' } },
            { value: '+65%', label: { en: 'Average viewers in the NEXON game category on SOOP, week over week', ko: 'SOOP 넥슨 게임 카테고리 평균 시청자, 전주 대비' } },
            { value: '2.6×', label: { en: 'NEXON’s share of game broadcasts on SOOP', ko: 'SOOP 게임 방송 중 넥슨 게임 비중' } },
          ],
        },
        {
          type: 'p',
          en: 'Those numbers come from NEXON’s May 2026 announcement.[^2] The program then opened on Chzzk with Naver account linking,[^4] and a regular season with monthly activity, growth and impact rewards is announced for October 2026.[^1]',
          ko: '위 수치는 넥슨의 2026년 5월 발표 기준입니다.[^2] 이후 네이버 계정 연동과 함께 치지직으로 확장했고,[^4] 월간 활동·성장·임팩트 보상이 포함된 정규 시즌이 2026년 10월로 예고돼 있습니다.[^1]',
        },
      ],
    },
    {
      id: 'learned',
      heading: { en: 'What I’m learning', ko: '배우고 있는 것' },
      blocks: [
        {
          type: 'quote',
          en: 'A partnership program is a measurement system with rewards attached. Get the measure wrong and you pay for the wrong behavior.',
          ko: '파트너십 프로그램은 보상이 붙은 측정 시스템입니다. 측정을 잘못하면 엉뚱한 행동에 돈을 쓰게 됩니다.',
        },
        {
          type: 'list',
          items: [
            {
              en: '**Same data, many readers.** The same report has to work for a product manager, a marketer and a platform partner.',
              ko: '**같은 데이터, 다른 독자.** 같은 리포트가 PM에게도, 마케터에게도, 플랫폼 파트너에게도 통해야 합니다.',
            },
            {
              en: '**The SOOP ecosystem, from the other side.** After nine years building for creators at SOOP, I now design programs that run on top of platforms like it.',
              ko: '**반대편에서 본 SOOP 생태계.** SOOP에서 9년간 크리에이터를 위한 제품을 만든 뒤, 이제는 그런 플랫폼 위에서 돌아가는 프로그램을 설계하고 있습니다.',
            },
          ],
        },
      ],
    },
    {
      id: 'timeline',
      heading: { en: 'Public milestones', ko: '공개 마일스톤' },
      blocks: [
        {
          type: 'timeline',
          items: [
            { date: '2026.04', text: { en: 'Preseason opens on SOOP with account linking and creator rankings.', ko: 'SOOP에서 계정 연동·크리에이터 랭킹과 함께 프리시즌 시작.' }, fn: 3 },
            { date: '2026.05', text: { en: '80K+ accounts linked in two weeks.', ko: '2주 만에 계정 연동 8만 건 돌파.' }, fn: 2 },
            { date: '2026.05', text: { en: 'Expands to Chzzk with Naver account linking.', ko: '네이버 계정 연동과 함께 치지직으로 확장.' }, fn: 4 },
            { date: '2026.10', text: { en: 'Regular season announced, with monthly rewards.', ko: '월간 보상이 포함된 정규 시즌 예고.' }, fn: 1 },
          ],
        },
      ],
    },
  ],
  sources: [
    { publisher: 'NEXON × SOOP', title: 'N-CONNECT official site', date: '2026', url: 'https://ncon.sooplive.com/' },
    { publisher: 'Inven Global', title: 'NEXON’s N-CONNECT preseason surpasses 80K linked accounts in two weeks', date: 'May 2026', url: 'https://www.invenglobal.com/articles/21813/nexons-n-connect-preseason-surpasses-80k-linked-accounts-in-two-weeks' },
    { publisher: 'Inven Global', title: 'SOOP launches N-CONNECT preseason to bridge users, streamers and games with NEXON', date: 'Apr 2026', url: 'https://www.invenglobal.com/articles/21344/soop-launches-n-connect-preseason-to-bridge-users-streamers-and-games-with-nexon' },
    { publisher: 'Inven Global', title: 'NEXON × Naver account and content linkage: Chzzk N-CONNECT', date: 'May 17, 2026', url: 'https://www.invenglobal.com/articles/21935/nexon-naver-account-and-content-linkage-chijijik-n-connect-project-revealed' },
  ],
};
