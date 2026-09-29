import { COMPANY, ROLE } from '../shared.mjs';

export default {
  id: 'P-01',
  slug: 'creator-missions',
  company: 'SOOP',
  title: { en: 'Creator Monetization Mission System', ko: '크리에이터 수익화 미션 시스템' },
  dek: {
    en: 'Streamers were already turning gifts into on-stream challenges and keeping count by hand. We turned that habit into missions with a visible goal and a result nobody can change afterwards.',
    ko: '스트리머들은 이미 후원을 방송 속 도전으로 바꾸고, 그 숫자를 손으로 세고 있었습니다. 이 습관을 목표가 보이고 결과는 나중에 바꿀 수 없는 미션으로 만들었습니다.',
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
  hero: {
    scene: 'p01-hero',
    alt: {
      en: 'Sketch: a streamer on screen under a mission card that reads “1,000 balloons, hardest level”. The progress bar sits at 820 of 1,000 while three viewers send star balloons toward it.',
      ko: '스케치: 화면 속 스트리머 위에 “별풍선 1,000개 → 최고 난이도 도전” 미션 카드가 있고, 진행 바는 1,000개 중 820개. 시청자 세 명이 별풍선을 보내고 있다.',
    },
    caption: {
      en: 'A mission on air: one goal, one shared counter, one result.',
      ko: '방송 중의 미션. 목표 하나, 함께 보는 카운터 하나, 결과 하나.',
    },
  },
  glance: {
    problem: {
      en: 'Most gifts were one-off. Streamers ran challenge goals by hand, and viewers couldn’t tell whether their gift had counted.',
      ko: '후원은 대부분 일회성이었습니다. 스트리머는 도전 목표를 손으로 관리했고, 시청자는 자기 후원이 반영됐는지 알 수 없었습니다.',
    },
    did: {
      en: 'We made missions a product feature: a posted goal, pooled gifts, a final result. The reward loop was tested cohort by cohort.',
      ko: '미션을 제품 기능으로 만들었습니다. 목표를 걸고, 후원을 모으고, 결과를 확정합니다. 보상 루프는 코호트별로 실험했습니다.',
    },
    result: {
      en: '**82%** of creators took part and monthly revenue rose **42%**. Participating streamers uploaded **3×** as many new videos.',
      ko: '크리에이터 **82%**가 참여했고 월 매출은 **42%** 늘었습니다. 참여 스트리머의 신규 영상 업로드는 **3배**가 됐습니다.',
    },
  },
  chapters: [
    {
      id: 'memo',
      heading: { en: 'The memo pad', ko: '메모장의 한계' },
      blocks: [
        {
          type: 'p',
          en: 'On AfreecaTV, viewers support streamers directly with *star balloons* (별풍선), a paid virtual gift. In the first quarter of 2023, star-balloon revenue hit a record.[^2]',
          ko: '아프리카TV에서 시청자는 유료 가상 선물인 *별풍선*으로 스트리머를 직접 후원합니다. 2023년 1분기 별풍선 매출은 역대 최대였습니다.[^2]',
        },
        {
          type: 'p',
          en: 'Streamers had long turned gifts into goals: “at 1,000 balloons, I’ll try the hardest level.” The count lived in a memo pad on screen, updated by hand.',
          ko: '스트리머들은 오래전부터 후원을 목표로 바꿔 왔습니다. “별풍선 1,000개가 모이면 최고 난이도에 도전할게요.” 숫자는 화면 속 메모장에 손으로 적었습니다.',
        },
        {
          type: 'p',
          en: 'Counts drifted. Viewers asked whether their gift had landed. The streamer lost the thread of the show.',
          ko: '숫자는 자꾸 어긋났습니다. 시청자는 자기 풍선이 들어갔는지 물었고, 스트리머는 방송의 흐름을 놓쳤습니다.',
        },
        {
          type: 'sketch',
          scene: 'p01-memo',
          alt: {
            en: 'Sketch: a tilted sticky note with tally marks and crossed-out counts (412, 437, 45?), a worried streamer with question marks, and three chat bubbles: “Did my gift count?”, “I sent 50 earlier!”, “What’s the count now?”',
            ko: '스케치: 기울어진 메모지에 바를 정(正) 표시와 지워진 숫자들(412, 437, 45?)이 있고, 곤란한 표정의 스트리머 옆에 물음표, 채팅 말풍선 세 개. “제 풍선 들어갔어요?”, “아까 50개 쐈는데요”, “지금 몇 개예요?”',
          },
          caption: { en: 'Before: the tally was the streamer’s job, live.', ko: '이전: 집계는 방송 중인 스트리머의 몫이었습니다.' },
        },
      ],
    },
    {
      id: 'loop',
      heading: { en: 'Missions as a product', ko: '미션을 제품으로' },
      blocks: [
        {
          type: 'p',
          en: 'We kept the behavior and took away the bookkeeping. A mission has a goal, a pool that fills as viewers give, and a result that is settled when the streamer declares it.',
          ko: '행동은 그대로 두고 장부 정리만 없앴습니다. 미션에는 목표가 있고, 시청자가 후원할수록 채워지는 적립금이 있고, 스트리머가 선언하면 확정되는 결과가 있습니다.',
        },
        {
          type: 'p',
          en: 'Viewers can propose a mission, not only fund one. When challenge missions opened in April 2023, a viewer could request a mission or a streamer could register their own, and the pooled balloons went to the streamer on success.[^1]',
          ko: '시청자는 미션에 후원만 하는 게 아니라 직접 제안할 수도 있습니다. 2023년 4월 도전미션이 열리면서 시청자는 미션을 요청하고 스트리머는 직접 등록할 수 있게 됐고, 성공하면 모인 별풍선이 스트리머에게 갔습니다.[^1]',
        },
        {
          type: 'sketch',
          scene: 'p01-loop',
          alt: {
            en: 'Sketch of the mission loop in four steps: goal posted by a streamer or viewer, gifts pool toward a visible goal, the attempt happens live, the result is locked. A dashed arrow leads back to the next mission.',
            ko: '미션 루프 네 단계 스케치: 스트리머나 시청자가 목표를 등록하고, 보이는 목표로 후원이 모이고, 방송에서 도전하고, 결과가 잠겨 확정된다. 점선 화살표가 다음 미션으로 이어진다.',
          },
        },
      ],
    },
    {
      id: 'formats',
      heading: { en: 'Two formats', ko: '두 가지 형식' },
      blocks: [
        {
          type: 'p',
          en: 'A **challenge mission** pays out when a goal is met. A **battle mission** splits viewers into sides: they back a team, and the winning side’s streamers share the pool.',
          ko: '**도전미션**은 목표를 달성하면 적립금이 지급됩니다. **대결미션**은 시청자가 편을 나눠 팀을 응원하고, 이긴 팀 스트리머들이 적립금을 나눠 갖습니다.',
        },
        {
          type: 'sketch',
          scene: 'p01-battle',
          alt: {
            en: 'Sketch of a battle mission: Team A and Team B streamers face each other, two groups of viewers send gifts into a shared pot, and an arrow carries the pot to Team A, which wears a crown.',
            ko: '대결미션 스케치: A팀과 B팀 스트리머가 마주 보고, 양쪽 시청자들이 하나의 통에 별풍선을 보내며, 화살표가 그 통을 왕관을 쓴 A팀에게 가져간다.',
          },
        },
        {
          type: 'p',
          en: 'We rolled mechanics out cohort by cohort and A/B tested the reward loop before scaling. Each change was judged on participation and revenue.',
          ko: '메커닉은 코호트 단위로 순차 적용했고, 확대 전에 보상 루프를 A/B 테스트했습니다. 변경 하나하나를 참여율과 매출로 판단했습니다.',
        },
        {
          type: 'p',
          en: 'A mission only works if the streamer can run it live, so partner education and campaign operations shipped with the feature.',
          ko: '미션은 스트리머가 방송 중에 운영할 수 있어야 작동합니다. 그래서 파트너 교육과 캠페인 운영을 기능과 함께 내보냈습니다.',
        },
      ],
    },
  ],
  decisions: [
    {
      title: { en: 'Results are final', ko: '결과는 번복할 수 없게' },
      why: {
        en: 'Pooled money only moves when people trust the rules. A result that can’t be undone protects backers, so the conditions have to be clear before a mission starts.',
        ko: '여럿이 돈을 모으는 구조는 규칙을 믿을 때만 움직입니다. 번복할 수 없는 결과가 후원자를 지킵니다. 그만큼 조건은 미션 시작 전에 분명해야 합니다.',
      },
    },
    {
      title: { en: 'Viewers can author missions', ko: '시청자도 미션을 만든다' },
      why: {
        en: 'A viewer who proposes a goal wants to see it happen, and comes back to watch it.',
        ko: '목표를 직접 제안한 시청자는 그 결과를 보고 싶어 하고, 그래서 다시 방송을 찾습니다.',
      },
    },
  ],
  results: {
    blocks: [
      {
        type: 'sketch',
        scene: 'p01-results',
        alt: {
          en: 'Results sketch: a pie chart with 82% of creators taking part, and before/after bars against the pre-launch baseline: monthly revenue +42%, new uploads 3×, stay time 1.6×.',
          ko: '결과 스케치: 크리에이터 82% 참여를 보여주는 원그래프와, 출시 전 기준 대비 막대: 월 매출 +42%, 신규 업로드 3배, 체류 시간 1.6배.',
        },
      },
      {
        type: 'metrics',
        rows: [
          { value: '82%', label: { en: 'Creator participation in the mission program', ko: '미션 프로그램 크리에이터 참여율' } },
          { value: '+42%', label: { en: 'Monthly revenue', ko: '월 매출' } },
          { value: '3×', label: { en: 'New video uploads from participating streamers', ko: '참여 스트리머의 신규 영상 업로드' } },
          { value: '1.6×', label: { en: 'Viewer stay time on mission broadcasts', ko: '미션 진행 방송의 시청자 체류 시간' } },
        ],
      },
    ],
  },
  learned: {
    quote: {
      en: 'Good monetization features rarely invent a behavior. They take the friction out of one people already have.',
      ko: '좋은 수익화 기능은 새 행동을 만들기보다, 사람들이 이미 하는 행동의 마찰을 없앱니다.',
    },
    items: [
      { en: '**Trust is part of the feature.** Settlement rules mattered as much as the UI.', ko: '**신뢰도 기능의 일부입니다.** 정산 규칙은 UI만큼 중요했습니다.' },
      { en: '**Adoption is operations work.** Participation came from education and campaigns as much as from the mechanic.', ko: '**도입은 운영의 일입니다.** 참여율은 메커닉만큼이나 교육과 캠페인에서 나왔습니다.' },
      { en: '**Design for the middle.** A tool a mid-tier streamer can run live also works for the top.', ko: '**중간층을 기준으로 설계합니다.** 미드티어 스트리머가 방송 중에 쓸 수 있는 도구는 상위권에게도 통합니다.' },
    ],
  },
  sources: [
    { publisher: 'AfreecaTV 소통센터', title: '유저 미션으로 별풍선 선물! 도전미션 오픈!', date: 'Apr 25, 2023', url: 'https://sotong.sooplive.co.kr/?board_type=user&work=view&b_no=202802' },
    { publisher: 'Bizwatch', title: '아프리카TV, 1분기 부진했지만…‘별풍선’ 역대 최대', date: 'Apr 28, 2023', url: 'http://news.bizwatch.co.kr/article/mobile/2023/04/28/0011' },
  ],
};
