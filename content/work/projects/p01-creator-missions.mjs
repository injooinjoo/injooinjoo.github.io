import { COMPANY, ROLE } from '../shared.mjs';

export default {
  id: 'P-01',
  slug: 'creator-missions',
  company: 'SOOP',
  title: { en: 'Creator Monetization Mission System', ko: '크리에이터 수익화 미션 시스템' },
  dek: {
    en: 'Turning one-off gifts into shared goals: a mission layer that gave viewers a reason to give and streamers a reason to create.',
    ko: '일회성 후원을 함께 달성하는 목표로. 시청자에게는 후원할 이유를, 스트리머에게는 콘텐츠를 만들 이유를 준 미션 시스템.',
  },
  card: {
    en: 'Gamified mission platform giving content creators measurable milestones toward monetization. A/B tested the reward loop across cohorts and iterated to an industry‑beating participation rate.',
    ko: '크리에이터에게 수익화 마일스톤을 제공하는 게이미파이드 미션 플랫폼. 코호트별 A/B 테스트를 반복하며 참여율을 업계 최고 수준으로 끌어올렸습니다.',
  },
  kpis: [
    { value: '82%', label: { en: 'Creator participation', ko: '크리에이터 참여율' }, cardLabel: 'Participation' },
    { value: '+42%', label: { en: 'Monthly revenue', ko: '월 매출' }, cardLabel: 'Monthly revenue' },
    { value: '3×', label: { en: 'New video uploads', ko: '신규 영상 업로드' }, card: false },
    { value: '1.6×', label: { en: 'Viewer stay time', ko: '시청자 체류 시간' }, card: false },
  ],
  stack: ['Python', 'SQL', 'Firebase', 'A/B Testing'],
  meta: {
    company: COMPANY,
    role: ROLE,
    scope: {
      en: 'Mission mechanics, reward loop, cohort experiments, creator education, campaign operations',
      ko: '미션 메커닉, 보상 루프, 코호트 실험, 크리에이터 교육, 캠페인 운영',
    },
  },
  hero: 'missionLoop',
  heroCaption: {
    en: 'The mission loop, reconstructed. A goal is posted, viewers pool gifts toward it, the streamer attempts it live, and the result is settled — which sets up the next mission.',
    ko: '미션 루프 재구성도. 목표가 등록되고, 시청자가 후원을 모으고, 스트리머가 방송에서 도전하고, 결과가 확정되면 다음 미션으로 이어집니다.',
  },
  tldr: [
    {
      en: 'On a gift-driven platform, most giving was impulsive and one-off. Viewers had no shared goal, and mid-tier streamers had no structured way to turn a good broadcast into repeat support.',
      ko: '후원 중심 플랫폼인데도 후원은 대부분 즉흥적이고 일회성이었습니다. 시청자에게는 함께 향할 목표가 없었고, 미드티어 스트리머에게는 좋은 방송을 반복 후원으로 잇는 구조가 없었습니다.',
    },
    {
      en: 'We productized a behavior that already existed — streamers keeping challenge tallies by hand — into missions with visible goals, pooled gifts and final, trusted outcomes.',
      ko: '스트리머가 손으로 기록하던 “도전 후원”이라는 기존 행동을 제품으로 만들었습니다. 목표가 보이고, 후원이 모이고, 결과는 확정되어 신뢰할 수 있는 미션입니다.',
    },
    {
      en: 'Cohort-tested reward loops and hands-on creator education took participation to **82%** and monthly revenue up **42%**; participating streamers uploaded **3×** more new videos.',
      ko: '코호트별로 보상 루프를 실험하고 크리에이터 교육을 병행해 참여율 **82%**, 월 매출 **+42%**를 달성했고, 참여 스트리머의 신규 영상 업로드는 **3배**가 됐습니다.',
    },
  ],
  sections: [
    {
      id: 'context',
      heading: { en: 'Context', ko: '배경' },
      blocks: [
        {
          type: 'p',
          en: 'SOOP (AfreecaTV until its 2024 rebrand) is one of Korea’s largest livestreaming platforms, and its economics are unusual: most revenue comes not from ads but from viewers gifting streamers directly, through virtual items called *star balloons* (별풍선). Platform revenue — gifts, subscriptions and items — made up about 70% of the company’s 2025 sales.[^5]',
          ko: 'SOOP(2024년 리브랜딩 전 아프리카TV)은 한국 최대 라이브 스트리밍 플랫폼 중 하나로, 수익 구조가 독특합니다. 매출 대부분이 광고가 아니라 시청자가 스트리머에게 직접 보내는 가상 아이템 *별풍선*에서 나옵니다. 후원·구독·아이템을 합친 플랫폼 매출은 2025년 기준 회사 매출의 약 70%입니다.[^5]',
        },
        {
          type: 'p',
          en: 'That makes the *reason to give* a core product surface. Streamers had long improvised one: “if we reach 1,000 balloons, I’ll try the hardest level,” tracked in a memo pad on screen. It depended on someone keeping count by hand — hard to trust, and hard to run in the middle of a live show.',
          ko: '그래서 *후원할 이유*는 핵심 제품 영역입니다. 스트리머들은 오래전부터 “별풍선 1,000개가 모이면 최고 난이도에 도전할게요” 같은 목표를 화면 속 메모장에 적어 직접 관리해 왔습니다. 하지만 누군가 손으로 숫자를 세야 했기에 신뢰하기 어려웠고, 생방송 중에 운영하기도 버거웠습니다.',
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
              en: '**Giving had no arc.** A gift was a moment, not a step toward anything. Nothing brought a viewer back to finish what they started.',
              ko: '**후원에 흐름이 없었습니다.** 후원은 한순간의 이벤트일 뿐 무언가를 향한 한 걸음이 아니었고, 시청자가 시작한 일을 마무리하러 돌아올 이유도 없었습니다.',
            },
            {
              en: '**Manual tallies didn’t scale or earn trust.** Hand-kept counts invited disputes (“did my gift count?”) and cost streamers attention mid-broadcast.',
              ko: '**수기 집계는 확장되지도, 신뢰를 얻지도 못했습니다.** 손으로 센 숫자는 “내 후원도 들어갔나?” 같은 분쟁을 낳았고, 방송 중 스트리머의 집중력을 빼앗았습니다.',
            },
            {
              en: '**Mid-tier creators were locked out.** The creators who most needed a monetization ladder were the least equipped to run one by hand.',
              ko: '**미드티어 크리에이터가 소외됐습니다.** 수익화 사다리가 가장 필요한 크리에이터일수록 이를 손으로 운영할 여력이 없었습니다.',
            },
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
              title: { en: 'Start from existing behavior', ko: '이미 있는 행동에서 출발' },
              body: {
                en: 'Rather than invent a new mechanic, we studied how streamers already ran challenges and bets, then designed missions to replace the memo pad — the launch notice literally said goodbye to it.[^1]',
                ko: '새 메커닉을 발명하기보다 스트리머들이 이미 도전과 내기를 어떻게 운영하는지 관찰했고, 메모장을 대체하는 방향으로 미션을 설계했습니다. 출시 공지 제목부터 메모장과의 작별이었습니다.[^1]',
              },
            },
            {
              title: { en: 'Two formats, one loop', ko: '두 가지 형식, 하나의 루프' },
              body: {
                en: 'Battle missions let viewers back a team and split the pooled balloons among the winners; challenge missions let a viewer or streamer post a goal that pays out when it is achieved.[^1][^2]',
                ko: '대결미션은 시청자가 팀을 응원하며 후원하고 승리 팀이 적립금을 나눠 갖는 방식이고, 도전미션은 시청자나 스트리머가 목표를 등록하고 달성하면 적립금이 지급되는 방식입니다.[^1][^2]',
              },
            },
            {
              title: { en: 'Test the reward loop by cohort', ko: '코호트별 보상 루프 실험' },
              body: {
                en: 'We rolled mechanics out cohort by cohort and A/B tested the reward loop before scaling, so each change was judged on participation and revenue rather than on opinion.',
                ko: '코호트 단위로 순차 적용하며 보상 루프를 A/B 테스트했고, 각 변경을 의견이 아닌 참여율과 매출로 판단한 뒤 확대했습니다.',
              },
            },
            {
              title: { en: 'Teach, then scale', ko: '교육 후 확산' },
              body: {
                en: 'A mechanic only works if creators know how to use it on air. Partner education and campaign operations were part of the launch, not an afterthought.',
                ko: '미션은 크리에이터가 방송에서 잘 활용해야 작동합니다. 파트너 교육과 캠페인 운영을 출시의 일부로 함께 설계했습니다.',
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
          title: { en: 'Make outcomes final', ko: '결과는 번복할 수 없게' },
          options: {
            en: 'Let streamers edit or cancel a mission after the fact, or lock the result once it is declared.',
            ko: '스트리머가 사후에 미션을 수정·취소할 수 있게 할지, 선언된 결과를 확정할지.',
          },
          choice: { en: 'Lock it. A declared result cannot be reversed.[^2]', ko: '확정. 선언된 결과는 번복할 수 없습니다.[^2]' },
          why: {
            en: 'Pooled money only flows when people trust the rules. Finality protects backers and makes the goal feel real.',
            ko: '여럿이 돈을 모으는 구조는 규칙에 대한 신뢰가 있어야 움직입니다. 확정성은 후원자를 보호하고 목표를 진짜처럼 느끼게 합니다.',
          },
          tradeoff: {
            en: 'Less flexibility for streamers, so conditions have to be clear up front.',
            ko: '스트리머의 유연성이 줄어드는 만큼, 조건을 처음부터 명확히 해야 합니다.',
          },
        },
        {
          type: 'decision',
          title: { en: 'Let viewers author missions, not just fund them', ko: '시청자가 미션을 “후원”만이 아니라 “제안”하게' },
          options: {
            en: 'Streamer-only missions, or missions that viewers can propose too.',
            ko: '스트리머만 미션을 만들지, 시청자도 제안할 수 있게 할지.',
          },
          choice: { en: 'Both. Viewers can request a mission; streamers can register their own.[^2]', ko: '둘 다. 시청자는 미션을 요청하고, 스트리머는 직접 등록할 수 있습니다.[^2]' },
          why: {
            en: 'A viewer who proposes a goal is invested in seeing it happen — and comes back for it.',
            ko: '목표를 직접 제안한 시청자는 그 결과를 보고 싶어 하고, 그래서 다시 돌아옵니다.',
          },
        },
        {
          type: 'decision',
          title: { en: 'Credit every backer, win or lose', ko: '이기든 지든 모든 후원자를 인정' },
          options: {
            en: 'Count only winning-side gifts toward fan status, or all of them.',
            ko: '승리 팀 후원만 팬 등급에 반영할지, 모든 후원을 반영할지.',
          },
          choice: {
            en: 'All of them. Gifts in a battle mission count toward fan-club status with the streamer a viewer backed.[^3]',
            ko: '모두 반영. 대결미션 후원도 응원한 스트리머의 팬클럽·열혈팬 산정에 포함됩니다.[^3]',
          },
          why: {
            en: 'Losing a battle shouldn’t feel like losing your standing. Recognition keeps the losing side coming back.',
            ko: '대결에서 졌다고 팬으로서의 위치까지 잃는 느낌이어서는 안 됩니다. 인정받는 경험이 진 쪽 시청자도 다시 오게 합니다.',
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
            { value: '82%', label: { en: 'Creator participation in the mission program', ko: '미션 프로그램 크리에이터 참여율' } },
            { value: '+42%', label: { en: 'Monthly revenue', ko: '월 매출' } },
            { value: '3×', label: { en: 'New video uploads from participating streamers', ko: '참여 스트리머의 신규 영상 업로드' } },
            { value: '1.6×', label: { en: 'Viewer stay time on mission broadcasts', ko: '미션 진행 방송의 시청자 체류 시간' } },
          ],
        },
        { type: 'figure', figure: 'missionImpact', caption: { en: 'Indexed to the pre-launch baseline (1.0×).', ko: '출시 전 기준(1.0×) 대비 지수.' } },
        {
          type: 'p',
          en: 'The mechanic outlived the project. Missions became a standard part of SOOP broadcasting, and when SOOP launched its global platform in 2024, challenge missions were among the headline features.[^4]',
          ko: '미션은 프로젝트 이후에도 살아남았습니다. SOOP 방송의 기본 문법이 되었고, 2024년 글로벌 플랫폼을 출시할 때도 챌린지 미션이 대표 기능으로 소개됐습니다.[^4]',
        },
      ],
    },
    {
      id: 'learned',
      heading: { en: 'What I learned', ko: '배운 점' },
      blocks: [
        {
          type: 'quote',
          en: 'The best monetization features don’t create new behavior. They remove the friction from behavior people already want.',
          ko: '좋은 수익화 기능은 새로운 행동을 만들지 않습니다. 사람들이 이미 하고 싶어 하는 행동의 마찰을 없앱니다.',
        },
        {
          type: 'list',
          items: [
            {
              en: '**Trust is a feature.** Settlement rules and finality mattered as much as the UI.',
              ko: '**신뢰도 기능입니다.** 정산 규칙과 확정성은 UI만큼 중요했습니다.',
            },
            {
              en: '**Adoption is an operations problem.** Participation came from education and campaigns as much as from the mechanic itself.',
              ko: '**도입은 운영의 문제입니다.** 참여율은 메커닉만큼이나 교육과 캠페인에서 나왔습니다.',
            },
            {
              en: '**Design for the middle.** Tools built for the mid-tier helped the top too; the reverse is rarely true.',
              ko: '**중간층을 위해 설계하세요.** 미드티어를 위한 도구는 상위권에도 도움이 되지만, 그 반대는 드뭅니다.',
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
            { date: '2022.07', text: { en: 'Battle missions launch, replacing hand-kept tallies.', ko: '대결미션 오픈 — 수기 집계 대체.' }, fn: 1 },
            { date: '2022.12', text: { en: 'Battle-mission gifts start counting toward fan status.', ko: '대결미션 후원이 팬 등급 산정에 반영.' }, fn: 3 },
            { date: '2023.04', text: { en: 'Challenge missions open to viewer-proposed goals.', ko: '시청자 제안형 도전미션 오픈.' }, fn: 2 },
            { date: '2024.11', text: { en: 'Global SOOP launches with challenge missions built in.', ko: '글로벌 SOOP 출시 — 챌린지 미션 기본 탑재.' }, fn: 4 },
          ],
        },
      ],
    },
  ],
  sources: [
    { publisher: 'AfreecaTV notice', title: '불편했던 메모장은 안녕! 대결미션 오픈!', date: 'Jul 2022', url: 'https://afwbbs1.sooplive.com/app/index.php?board=notice&b_no=8066&control=view' },
    { publisher: 'AfreecaTV 소통센터', title: '유저 미션으로 별풍선 선물! 도전미션 오픈!', date: 'Apr 2023', url: 'https://sotong.sooplive.co.kr/?board_type=user&work=view&b_no=202802' },
    { publisher: 'AfreecaTV notice', title: '대결미션 팬클럽·열혈팬 반영 업데이트', date: 'Dec 2022', url: 'https://afwbbs1.sooplive.com/app/index.php?board=notice&b_no=8324&control=view' },
    { publisher: 'BusinessKorea', title: 'SOOP launches global streaming platform', date: 'Nov 22, 2024', url: 'https://www.businesskorea.co.kr/news/articleView.html?idxno=230091' },
    { publisher: 'G-Enews', title: 'SOOP 2025 annual results (revenue 469.7B KRW, platform 331.0B KRW)', date: 'Feb 12, 2026', url: 'https://www.g-enews.com/article/ICT/2026/02/202602121643559036c5fa75ef86_1' },
  ],
};
