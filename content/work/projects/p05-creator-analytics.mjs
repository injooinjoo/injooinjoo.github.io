import { COMPANY, ROLE } from '../shared.mjs';

export default {
  id: 'P-05',
  slug: 'creator-analytics',
  company: 'SOOP',
  title: { en: 'Creator Analytics Dashboard', ko: '크리에이터 분석 대시보드' },
  dek: {
    en: 'Self-serve analytics for creators who never asked for a dashboard — designed around their questions, and adopted without a mandate.',
    ko: '대시보드를 원한 적 없는 크리에이터를 위한 셀프 서브 분석. 그들의 질문을 중심으로 설계했고, 강제 없이 도입됐습니다.',
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
  hero: 'dashboard',
  heroCaption: {
    en: 'The dashboard’s structure, reconstructed. Three creator questions, each answered by one view — rather than every metric the platform could compute.',
    ko: '대시보드 구조 재구성도. 플랫폼이 계산할 수 있는 모든 지표 대신, 크리에이터의 세 가지 질문에 하나씩 답하는 화면으로 구성했습니다.',
  },
  tldr: [
    {
      en: 'Creators had statistics, but not answers. Most are not analysts, and a page of charts didn’t tell them what to do next.',
      ko: '크리에이터에게 통계는 있었지만 답은 없었습니다. 대부분 분석가가 아니었고, 차트가 가득한 페이지는 다음에 무엇을 해야 할지 알려주지 않았습니다.',
    },
    {
      en: 'We designed a self-serve dashboard around three questions creators actually asked — how viewers are changing, how subscribers are trending, where traffic comes from — and made adoption voluntary.',
      ko: '크리에이터가 실제로 묻는 세 가지 질문, 즉 시청자 변화·구독자 추이·유입 경로를 중심으로 셀프 서브 대시보드를 설계하고, 도입은 자발에 맡겼습니다.',
    },
    {
      en: 'More than **65%** adopted it voluntarily across **5,000+** creators, and strategic streamers using it grew their channels **18%** on average.',
      ko: '**5,000명 이상**의 크리에이터 중 **65% 이상**이 자발적으로 도입했고, 이를 활용한 전략 스트리머의 채널은 평균 **18%** 성장했습니다.',
    },
  ],
  sections: [
    {
      id: 'context',
      heading: { en: 'Context', ko: '배경' },
      blocks: [
        {
          type: 'p',
          en: 'AfreecaTV had offered broadcast statistics since 2018, when it introduced graphs for viewers, chat, gifts and recommendations alongside automatically detected highlight moments.[^1] A 2019 update extended statistics to viewers and redesigned the page on PC.[^2]',
          ko: '아프리카TV는 2018년부터 방송 통계를 제공했습니다. 시청자·채팅·후원·추천 그래프와 함께 하이라이트 구간을 자동으로 표시하는 기능이었습니다.[^1] 2019년에는 시청자용 통계가 추가되고 PC 통계 화면이 개편됐습니다.[^2]',
        },
        {
          type: 'p',
          en: 'The data existed. What was missing was a view that a busy creator — someone who streams for hours and edits on the side — could read in a minute and act on.',
          ko: '데이터는 있었습니다. 빠진 것은 몇 시간씩 방송하고 틈틈이 편집까지 하는 바쁜 크리에이터가 1분 안에 읽고 행동으로 옮길 수 있는 화면이었습니다.',
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
            { en: '**Data without direction.** Charts showed what happened, not what to change.', ko: '**방향 없는 데이터.** 차트는 무슨 일이 있었는지만 보여줬고, 무엇을 바꿔야 하는지는 알려주지 않았습니다.' },
            { en: '**Built for analysts.** The people who most needed insight were least likely to dig through tables.', ko: '**분석가를 위한 설계.** 인사이트가 가장 필요한 사람일수록 표를 파고들 가능성이 낮았습니다.' },
            { en: '**Growth advice didn’t scale.** Partner managers could coach a few streamers by hand; thousands needed a self-serve version.', ko: '**성장 조언이 확장되지 않았습니다.** 파트너 매니저가 소수의 스트리머는 직접 코칭할 수 있었지만, 수천 명에게는 셀프 서브가 필요했습니다.' },
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
              title: { en: 'Start from creator questions', ko: '크리에이터의 질문에서 출발' },
              body: {
                en: 'User research with creators narrowed the dashboard to three recurring questions: are viewers changing, are subscribers staying, and where are people finding me.',
                ko: '크리에이터 리서치로 대시보드를 세 가지 반복 질문으로 좁혔습니다. 시청자가 변하고 있나, 구독자가 남고 있나, 사람들이 나를 어디서 찾고 있나.',
              },
            },
            {
              title: { en: 'Design for non-technical users', ko: '비전문가를 위한 설계' },
              body: {
                en: 'Fewer metrics, consistent definitions, plain labels — each view answers one question instead of exposing every number the platform can compute.',
                ko: '지표는 줄이고, 정의는 일관되게, 라벨은 쉽게 했습니다. 플랫폼이 계산할 수 있는 모든 숫자를 늘어놓는 대신 화면 하나가 질문 하나에 답합니다.',
              },
            },
            {
              title: { en: 'Beta with strategic streamers', ko: '전략 스트리머와 베타' },
              body: {
                en: 'A beta with strategic streamers tested whether the views changed behavior, not just whether people opened them.',
                ko: '전략 스트리머와 베타를 진행하며, 화면을 열어보는지만이 아니라 실제 행동이 바뀌는지를 검증했습니다.',
              },
            },
            {
              title: { en: 'Earn adoption', ko: '도입은 얻어내는 것' },
              body: {
                en: 'The rollout was voluntary. If creators didn’t come back on their own, the product wasn’t done.',
                ko: '확산은 자발에 맡겼습니다. 크리에이터가 스스로 다시 오지 않는다면 제품이 아직 완성되지 않은 것이라고 봤습니다.',
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
          title: { en: 'No mandate', ko: '도입을 강제하지 않기' },
          options: {
            en: 'Require partner streamers to use the dashboard, or let usage be voluntary and treat it as the success metric.',
            ko: '파트너 스트리머에게 사용을 의무화할지, 자발적 사용에 맡기고 그 자체를 성공 지표로 볼지.',
          },
          choice: { en: 'Voluntary, with adoption as the headline metric.', ko: '자발적 사용, 도입률을 대표 지표로.' },
          why: {
            en: 'Mandated usage measures compliance. Voluntary usage measures whether the dashboard is actually useful — which was the thing we needed to know.',
            ko: '의무 사용은 규정 준수를 측정할 뿐입니다. 자발적 사용이야말로 대시보드가 실제로 쓸모 있는지를 보여주고, 그게 우리가 알아야 할 것이었습니다.',
          },
          tradeoff: {
            en: 'Slower initial rollout, and no hiding behind activity numbers.',
            ko: '초기 확산은 느려지고, 활동량 숫자 뒤에 숨을 수 없습니다.',
          },
        },
        {
          type: 'decision',
          title: { en: 'Three questions, not thirty metrics', ko: '지표 30개가 아닌 질문 3개' },
          options: {
            en: 'Expose everything the data warehouse had, or curate a small set of views tied to decisions creators make.',
            ko: '데이터 웨어하우스에 있는 모든 것을 보여줄지, 크리에이터의 의사결정과 연결된 소수의 화면으로 추릴지.',
          },
          choice: { en: 'Curate: viewer change, subscriber trend, traffic sources.', ko: '추리기: 시청자 변화, 구독자 추이, 유입 경로.' },
          why: {
            en: 'Each view maps to an action a creator can take — schedule, content, titles and tags. Everything else was noise for this audience.',
            ko: '각 화면이 크리에이터가 할 수 있는 행동, 즉 방송 시간·콘텐츠·제목과 태그로 이어집니다. 그 외의 것은 이 사용자에게는 소음이었습니다.',
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
            { value: '65%+', label: { en: 'Voluntary adoption among eligible creators', ko: '대상 크리에이터의 자발적 도입률' } },
            { value: '5k+', label: { en: 'Creators served', ko: '이용 크리에이터' } },
            { value: '+18%', label: { en: 'Average channel growth for strategic streamers', ko: '전략 스트리머 평균 채널 성장' } },
          ],
        },
        {
          type: 'p',
          en: 'The idea of giving creators fast feedback on what their audience wants is now part of how SOOP describes its creator ecosystem strategy.[^3]',
          ko: '시청자가 원하는 것을 크리에이터에게 빠르게 알려준다는 방향은 이제 SOOP이 크리에이터 생태계 전략을 설명하는 방식의 일부가 됐습니다.[^3]',
        },
      ],
    },
    {
      id: 'learned',
      heading: { en: 'What I learned', ko: '배운 점' },
      blocks: [
        {
          type: 'quote',
          en: 'Voluntary adoption is the most honest metric a B2B-style tool can have.',
          ko: '자발적 도입률은 업무용 도구가 가질 수 있는 가장 정직한 지표입니다.',
        },
        {
          type: 'list',
          items: [
            { en: '**Subtract before you add.** The dashboard improved each time we removed a chart nobody acted on.', ko: '**더하기 전에 빼세요.** 아무도 행동하지 않는 차트를 뺄 때마다 대시보드는 나아졌습니다.' },
            { en: '**Analytics is a growth program.** The dashboard scaled the advice partner managers used to give one creator at a time.', ko: '**분석 도구는 성장 프로그램입니다.** 파트너 매니저가 한 명씩 하던 조언을 대시보드가 수천 명에게 확장했습니다.' },
          ],
        },
      ],
    },
  ],
  sources: [
    { publisher: 'Bloter', title: 'AfreecaTV launches broadcast statistics (방송 별별통계)', date: 'Aug 27, 2018', url: 'https://www.bloter.net/news/articleView.html?idxno=27798' },
    { publisher: 'AfreecaTV notice', title: '시청 통계 추가 및 통계 페이지 개편', date: 'May 30, 2019', url: 'https://afwbbs1.sooplive.com/app/index.php?board=notice&b_no=6283&control=view' },
    { publisher: 'Nate News', title: 'SOOP’s self-sustaining creator ecosystem strategy', date: 'Jul 31, 2026', url: 'https://m.news.nate.com/view/20260731n27219' },
  ],
};
