import { COMPANY, ROLE } from '../shared.mjs';

export default {
  id: 'P-05',
  slug: 'creator-analytics',
  company: 'SOOP',
  title: { en: 'Creator Analytics Dashboard', ko: '크리에이터 분석 대시보드' },
  dek: {
    en: 'Creators had statistics but few answers. We built a self-serve dashboard around the three questions they actually ask, and left adoption up to them.',
    ko: '크리에이터에게 통계는 있었지만 답은 부족했습니다. 그들이 실제로 묻는 세 가지 질문을 중심으로 셀프 서브 대시보드를 만들고, 쓸지 말지는 각자에게 맡겼습니다.',
  },
  card: {
    en: 'Self‑serve analytics helping creators understand performance and growth opportunities. Designed UX for non‑technical users and voluntary adoption — no mandates.',
    ko: '크리에이터가 성과와 성장 기회를 직접 분석할 수 있는 셀프 서브 대시보드. 비전문 유저를 위한 UX와 자발적 도입을 중심에 두고 설계.',
  },
  kpis: [
    { value: '65%+', label: { en: 'Voluntary adoption', ko: '자발적 도입률' }, cardLabel: 'Voluntary adoption' },
    { value: '5k+', label: { en: 'Creators served', ko: '이용 크리에이터' }, cardLabel: 'Creators served' },
    { value: '+18%', label: { en: 'Channel growth, strategic streamers', ko: '전략 스트리머 채널 성장' }, card: false },
  ],
  stack: ['Data Viz', 'SQL', 'UX Research', 'Service Design'],
  meta: {
    company: COMPANY,
    role: ROLE,
    scope: {
      en: 'Creator research, information architecture, metric definitions, beta and rollout',
      ko: '크리에이터 리서치, 정보 구조, 지표 정의, 베타와 확산',
    },
  },
  hero: {
    scene: 'p05-hero',
    alt: {
      en: 'Sketch: a wall of thirty tiny charts on the left, an arrow, and three question cards on the right: “Are my viewers changing?”, “Are my subscribers staying?”, “Where do people find me?”',
      ko: '스케치: 왼쪽에 작은 차트 30개가 빼곡한 벽, 화살표, 오른쪽에 질문 카드 세 장. “시청자가 변하고 있나?”, “구독자가 남고 있나?”, “사람들이 나를 어디서 찾나?”',
    },
    caption: {
      en: 'The dashboard started by throwing charts away.',
      ko: '대시보드는 차트를 버리는 데서 시작했습니다.',
    },
  },
  glance: {
    problem: {
      en: 'Most creators aren’t analysts. A page of charts showed what had happened but not what to change, and partner managers could coach only a few streamers by hand.',
      ko: '크리에이터 대부분은 분석가가 아닙니다. 차트 가득한 페이지는 무슨 일이 있었는지만 보여줬고, 파트너 매니저가 직접 코칭할 수 있는 스트리머는 몇 명뿐이었습니다.',
    },
    did: {
      en: 'Research narrowed the dashboard to three questions, each answered by one view. We tested it with strategic streamers and kept adoption voluntary.',
      ko: '리서치로 대시보드를 세 가지 질문으로 좁히고, 질문마다 화면 하나로 답했습니다. 전략 스트리머와 베타를 진행했고, 도입은 자율에 맡겼습니다.',
    },
    result: {
      en: 'More than **65%** of eligible creators adopted it on their own, across **5,000+** creators. Strategic streamers using it grew their channels **18%** on average.',
      ko: '**5,000명 이상**의 크리에이터가 이용했고, 대상자의 **65% 이상**이 스스로 도입했습니다. 이를 쓴 전략 스트리머의 채널은 평균 **18%** 성장했습니다.',
    },
  },
  chapters: [
    {
      id: 'no-answers',
      heading: { en: 'Statistics without answers', ko: '답이 없는 통계' },
      blocks: [
        {
          type: 'p',
          en: 'AfreecaTV already gave streamers broadcast statistics: viewers, chat, gifts. The data existed.',
          ko: '아프리카TV는 이미 스트리머에게 시청자, 채팅, 후원 같은 방송 통계를 제공하고 있었습니다. 데이터는 있었습니다.',
        },
        {
          type: 'p',
          en: 'What was missing was a view a busy creator could read in a minute and act on. Most stream for hours and edit on the side.',
          ko: '없던 것은 바쁜 크리에이터가 1분 안에 읽고 바로 움직일 수 있는 화면이었습니다. 대부분 몇 시간씩 방송하고 틈틈이 편집까지 합니다.',
        },
        {
          type: 'p',
          en: 'Growth advice didn’t scale either. Partner managers could coach a handful of streamers; thousands needed a self-serve version.',
          ko: '성장 조언도 확장되지 않았습니다. 파트너 매니저는 몇 명만 코칭할 수 있었고, 수천 명에게는 스스로 쓰는 도구가 필요했습니다.',
        },
      ],
    },
    {
      id: 'views',
      heading: { en: 'Three questions, three views', ko: '질문 셋, 화면 셋' },
      blocks: [
        {
          type: 'p',
          en: 'Interviews with creators kept coming back to the same three questions. Each view answers one of them, with fewer metrics, consistent definitions and plain labels.',
          ko: '크리에이터 인터뷰는 계속 같은 세 질문으로 돌아왔습니다. 화면마다 그중 하나에 답하고, 지표는 줄이고, 정의는 일관되게, 라벨은 쉽게 썼습니다.',
        },
        {
          type: 'sketch',
          scene: 'p05-views',
          alt: {
            en: 'Three dashboard wireframes. “Are my viewers changing?” shows this week’s line against last week’s. “Are my subscribers staying?” shows new subscribers above a line and cancellations below it. “Where do people find me?” shows bars for home, search, tags and outside links.',
            ko: '대시보드 와이어프레임 세 개. “시청자가 변하고 있나?”는 이번 주와 지난주 선 그래프, “구독자가 남고 있나?”는 기준선 위 신규 구독과 아래 해지 막대, “사람들이 나를 어디서 찾나?”는 홈, 검색, 태그, 외부 유입 막대.',
          },
        },
      ],
    },
    {
      id: 'actions',
      heading: { en: 'From a number to a next step', ko: '숫자에서 다음 행동으로' },
      blocks: [
        {
          type: 'p',
          en: 'Each view points at something a creator can change: when to stream, what to make next, how to title and tag it.',
          ko: '화면마다 크리에이터가 바꿀 수 있는 것을 가리킵니다. 언제 방송할지, 다음에 무엇을 만들지, 제목과 태그를 어떻게 달지.',
        },
        {
          type: 'sketch',
          scene: 'p05-actions',
          alt: {
            en: 'Sketch mapping each question to an action: viewers changing leads to moving the stream time (a clock), subscribers staying leads to planning the next content (a document), where people find me leads to fixing titles and tags (a tag).',
            ko: '질문과 행동을 잇는 스케치: 시청자 변화는 방송 시간 조정(시계)으로, 구독자 유지는 다음 콘텐츠 기획(문서)으로, 유입 경로는 제목·태그 다듬기(태그)로 이어진다.',
          },
        },
        {
          type: 'p',
          en: 'The beta with strategic streamers tested whether the views changed what creators did, not just whether they opened them.',
          ko: '전략 스트리머와의 베타에서는 화면을 열어보는지가 아니라, 그걸 보고 실제로 무언가를 바꾸는지를 확인했습니다.',
        },
      ],
    },
  ],
  decisions: [
    {
      title: { en: 'No mandate', ko: '강제하지 않기' },
      why: {
        en: 'Required use measures compliance. Voluntary use shows whether the dashboard is actually useful, which is what we needed to know. The cost was a slower start.',
        ko: '의무 사용은 규정 준수를 잴 뿐입니다. 자발적 사용이 대시보드가 정말 쓸모 있는지를 보여주고, 그게 우리가 알아야 할 것이었습니다. 대신 초기 확산은 느렸습니다.',
      },
    },
    {
      title: { en: 'Three questions, not thirty metrics', ko: '지표 30개 대신 질문 3개' },
      why: {
        en: 'Every chart we kept had to lead to something a creator could do. For this audience the rest was noise.',
        ko: '남긴 차트는 모두 크리에이터가 할 수 있는 행동으로 이어져야 했습니다. 이 사용자에게 나머지는 소음이었습니다.',
      },
    },
  ],
  results: {
    blocks: [
      {
        type: 'sketch',
        scene: 'p05-adoption',
        alt: {
          en: 'A grid of 100 dots with 65 filled in green, next to “65%+ adopted it on their own, no mandate”, “5,000+ creators served” and “+18% channel growth, strategic streamers”.',
          ko: '점 100개 중 65개가 초록색으로 채워진 격자와 “65%+ 강제 없이 스스로 도입”, “이용 크리에이터 5,000명+”, “전략 스트리머 채널 성장 +18%”.',
        },
      },
      {
        type: 'metrics',
        rows: [
          { value: '65%+', label: { en: 'Voluntary adoption among eligible creators', ko: '대상 크리에이터의 자발적 도입률' } },
          { value: '5k+', label: { en: 'Creators served', ko: '이용 크리에이터' } },
          { value: '+18%', label: { en: 'Average channel growth for strategic streamers', ko: '전략 스트리머 평균 채널 성장' } },
        ],
      },
    ],
  },
  learned: {
    quote: {
      en: 'Voluntary adoption is the most honest metric a creator tool can have.',
      ko: '자발적 도입률은 크리에이터 도구가 가질 수 있는 가장 정직한 지표입니다.',
    },
    items: [
      { en: '**Subtract before you add.** The dashboard got better each time we removed a chart nobody acted on.', ko: '**더하기 전에 뺍니다.** 아무도 행동하지 않는 차트를 뺄 때마다 대시보드는 나아졌습니다.' },
      { en: '**Analytics can be a growth program.** The dashboard scaled advice partner managers used to give one creator at a time.', ko: '**분석 도구도 성장 프로그램이 될 수 있습니다.** 파트너 매니저가 한 명씩 하던 조언을 대시보드가 수천 명에게 넓혔습니다.' },
    ],
  },
  sourcesNote: {
    en: 'I found no public announcement from the period of this project that describes the dashboard, so this page cites none. Metrics are internal measurements from my time at SOOP.',
    ko: '이 프로젝트 기간에 대시보드를 다룬 공개 공지나 기사를 찾지 못해 외부 출처는 싣지 않았습니다. 지표는 SOOP 재직 당시의 내부 측정치입니다.',
  },
  sources: [],
};
