import { COMPANY, ROLE } from '../shared.mjs';

export default {
  id: 'P-02',
  slug: 'ops-automation',
  company: 'SOOP',
  title: { en: 'Operations Automation Platform', ko: '운영 자동화 플랫폼' },
  dek: {
    en: 'Three teams, one pipeline: replacing roughly 200 hours a month of spreadsheet work with automation that reports itself.',
    ko: '세 팀, 하나의 파이프라인. 매달 약 200시간의 스프레드시트 작업을 스스로 보고하는 자동화로 바꾼 프로젝트.',
  },
  card: {
    en: 'Internal automation replacing cross‑team manual ops. Consolidated workflows for finance, creator support, and content review into a single pipeline.',
    ko: '여러 팀에 분산된 수동 운영을 대체한 사내 자동화 플랫폼. 재무·크리에이터 지원·콘텐츠 리뷰 워크플로우를 하나의 파이프라인으로 통합.',
  },
  kpis: [
    { value: '200h → <1h', label: { en: 'Monthly manual ops', ko: '월 수작업 운영 시간' }, cardLabel: 'Monthly ops' },
    { value: '3', label: { en: 'Teams unified', ko: '통합한 팀' }, cardLabel: 'Teams unified' },
    { value: '5% → <1%', label: { en: 'Reporting error rate', ko: '리포트 오류율' }, card: false },
  ],
  stack: ['Python', 'GCP', 'Supabase', 'REST APIs'],
  meta: {
    company: COMPANY,
    role: ROLE,
    scope: {
      en: 'Workflow audit, pipeline design and build, KPI reporting, rollout to finance, creator support and content review',
      ko: '업무 흐름 진단, 파이프라인 설계·구축, KPI 리포팅, 재무·크리에이터 지원·콘텐츠 리뷰 팀 적용',
    },
  },
  hero: 'opsPipeline',
  heroCaption: {
    en: 'Before and after, reconstructed. Each team kept its own spreadsheets and copied data by hand; afterwards, one pipeline collected, checked and routed the same data to Slack and dashboards.',
    ko: '전후 비교 재구성도. 이전에는 팀마다 스프레드시트를 따로 두고 데이터를 손으로 옮겼고, 이후에는 하나의 파이프라인이 데이터를 수집·검증해 Slack과 대시보드로 보냈습니다.',
  },
  tldr: [
    {
      en: 'Finance, creator support and content review each ran recurring work by hand — pulling platform data, reconciling spreadsheets and chasing updates — at a cost of about **200 hours a month**.',
      ko: '재무, 크리에이터 지원, 콘텐츠 리뷰 팀은 플랫폼 데이터를 뽑고, 스프레드시트를 맞추고, 진행 상황을 확인하는 반복 업무를 손으로 처리했고, 여기에 매달 약 **200시간**이 들었습니다.',
    },
    {
      en: 'We built one pipeline on GCP, Supabase and platform APIs that collects, validates and routes that data, and pushes results to Slack and dashboards where the teams already work.',
      ko: 'GCP, Supabase, 플랫폼 API로 데이터를 수집·검증·분배하는 파이프라인 하나를 만들고, 결과를 팀이 이미 일하는 Slack과 대시보드로 보냈습니다.',
    },
    {
      en: 'Monthly manual work fell to **under an hour**, weekly reporting errors dropped from **5% to under 1%**, and the time went back into planning and analysis.',
      ko: '월 수작업은 **1시간 미만**으로 줄었고, 주간 리포트 오류율은 **5%에서 1% 미만**으로 떨어졌으며, 확보한 시간은 기획과 분석에 쓰였습니다.',
    },
  ],
  sections: [
    {
      id: 'context',
      heading: { en: 'Context', ko: '배경' },
      blocks: [
        {
          type: 'p',
          en: 'A livestreaming platform generates operational work in proportion to its creators. By 2024 SOOP was welcoming around 53,000 new streamers a year across 6.75 million broadcasts,[^1] and the early-2024 wave of streamers arriving after Twitch left Korea added thousands more at once.[^2]',
          ko: '라이브 스트리밍 플랫폼의 운영 업무는 크리에이터 수에 비례해 늘어납니다. 2024년 SOOP에는 한 해 약 5만 3천 명의 신규 스트리머가 들어왔고 방송은 675만 건에 달했습니다.[^1] 2024년 초 트위치가 한국에서 철수하면서 수천 명의 스트리머가 한꺼번에 넘어오기도 했습니다.[^2]',
        },
        {
          type: 'p',
          en: 'Behind every creator program sit the same chores: pull numbers from the platform, reconcile them with settlement data, check eligibility, update a tracker, tell someone. Each team had built its own version in spreadsheets.',
          ko: '모든 크리에이터 프로그램 뒤에는 같은 잡무가 있습니다. 플랫폼에서 숫자를 뽑고, 정산 데이터와 맞추고, 자격을 확인하고, 트래커를 갱신하고, 담당자에게 알리는 일입니다. 각 팀은 이 과정을 제각각 스프레드시트로 만들어 쓰고 있었습니다.',
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
            { en: '**Time.** About 200 hours a month of skilled people copying and pasting.', ko: '**시간.** 숙련된 인력이 매달 약 200시간을 복사·붙여넣기에 쓰고 있었습니다.' },
            { en: '**Accuracy.** About 5% of weekly KPI reports carried errors — enough that people double-checked everything, which cost more time.', ko: '**정확도.** 주간 KPI 리포트의 약 5%에 오류가 있었고, 그래서 모두가 모든 숫자를 다시 확인해야 했습니다. 시간이 더 들었습니다.' },
            { en: '**Latency.** Numbers arrived weekly, after decisions had already been made.', ko: '**지연.** 숫자는 매주 한 번, 이미 결정이 내려진 뒤에야 도착했습니다.' },
            { en: '**Fragmentation.** Three teams maintained three versions of overlapping data.', ko: '**파편화.** 세 팀이 겹치는 데이터를 세 가지 버전으로 관리했습니다.' },
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
              title: { en: 'Map the work, not the org chart', ko: '조직도가 아닌 업무 흐름을 지도로' },
              body: {
                en: 'We listed every recurring task across the three teams with its inputs, outputs and owner. Most of them turned out to be the same few steps applied to different data.',
                ko: '세 팀의 반복 업무를 입력·출력·담당자와 함께 모두 나열했습니다. 대부분은 서로 다른 데이터에 같은 몇 단계를 적용하는 일이었습니다.',
              },
            },
            {
              title: { en: 'Automate the report first', ko: '리포트부터 자동화' },
              body: {
                en: 'Weekly KPI reporting moved to scheduled collection with Google Apps Script and Slack workflows, so numbers were shared as they landed instead of once a week.',
                ko: '주간 KPI 리포트를 Google Apps Script와 Slack 워크플로우로 자동 수집하도록 바꿔, 숫자를 일주일에 한 번이 아니라 들어오는 즉시 공유했습니다.',
              },
            },
            {
              title: { en: 'Consolidate into one pipeline', ko: '하나의 파이프라인으로 통합' },
              body: {
                en: 'The shared steps — collect, validate, route — became one pipeline on GCP and Supabase, fed by platform APIs and serving finance, creator support and content review.',
                ko: '수집·검증·분배라는 공통 단계를 GCP와 Supabase 위의 파이프라인 하나로 묶고, 플랫폼 API에서 데이터를 받아 재무·크리에이터 지원·콘텐츠 리뷰 팀에 제공했습니다.',
              },
            },
            {
              title: { en: 'Deliver where people already work', ko: '이미 일하는 곳으로 전달' },
              body: {
                en: 'Results went to Slack channels and dashboards the teams already used. No new tool to learn meant no adoption campaign.',
                ko: '결과는 팀이 이미 쓰는 Slack 채널과 대시보드로 보냈습니다. 새로 배울 도구가 없으니 도입 캠페인도 필요 없었습니다.',
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
          title: { en: 'One pipeline instead of three tools', ko: '도구 세 개 대신 파이프라인 하나' },
          options: {
            en: 'Automate each team’s spreadsheet separately, or pull the shared steps into one system.',
            ko: '팀별 스프레드시트를 각각 자동화할지, 공통 단계를 하나의 시스템으로 뺄지.',
          },
          choice: { en: 'One pipeline with team-specific outputs.', ko: '하나의 파이프라인, 팀별 출력.' },
          why: {
            en: 'Three automations would have kept three versions of the truth. One pipeline made validation happen once, for everyone.',
            ko: '자동화를 세 개 만들면 서로 다른 “정답”도 세 개로 남습니다. 파이프라인이 하나면 검증도 한 번, 모두에게 적용됩니다.',
          },
          tradeoff: {
            en: 'More upfront alignment between teams on shared definitions.',
            ko: '공통 정의를 맞추기 위한 팀 간 사전 조율이 더 필요했습니다.',
          },
        },
        {
          type: 'decision',
          title: { en: 'Managed building blocks over a bespoke system', ko: '맞춤 시스템 대신 관리형 서비스 조합' },
          options: {
            en: 'Wait for a dedicated engineering project, or assemble the pipeline from managed services (GCP, Supabase, Apps Script, Slack).',
            ko: '전담 개발 프로젝트를 기다릴지, 관리형 서비스(GCP, Supabase, Apps Script, Slack)를 조합해 직접 만들지.',
          },
          choice: { en: 'Assemble from managed services and ship incrementally.', ko: '관리형 서비스로 조립하고 단계적으로 출시.' },
          why: {
            en: 'The cost of manual work was paid every week. Shipping the reporting piece first proved the value before anything larger was built.',
            ko: '수작업 비용은 매주 발생했습니다. 리포트부터 먼저 내보내 가치를 증명한 뒤 더 큰 부분을 만들었습니다.',
          },
        },
      ],
    },
    {
      id: 'results',
      heading: { en: 'Results', ko: '결과' },
      blocks: [
        { type: 'figure', figure: 'opsImpact' },
        {
          type: 'metrics',
          rows: [
            { value: '200h → <1h', label: { en: 'Manual operations time per month', ko: '월 수작업 운영 시간' } },
            { value: '3', label: { en: 'Teams on one pipeline: finance, creator support, content review', ko: '하나의 파이프라인으로 통합한 팀: 재무, 크리에이터 지원, 콘텐츠 리뷰' } },
            { value: '5% → <1%', label: { en: 'Error rate in weekly KPI reports', ko: '주간 KPI 리포트 오류율' } },
            { value: '25%+', label: { en: 'Team capacity freed for planning and new-service analysis', ko: '기획·신규 서비스 분석에 돌린 팀 리소스' } },
          ],
        },
      ],
    },
    {
      id: 'learned',
      heading: { en: 'What I learned', ko: '배운 점' },
      blocks: [
        {
          type: 'quote',
          en: 'Operational debt compounds quietly. Nobody files a ticket for “I spent Tuesday copying numbers.”',
          ko: '운영 부채는 조용히 쌓입니다. “화요일 내내 숫자를 옮겼다”는 이유로 티켓을 올리는 사람은 없습니다.',
        },
        {
          type: 'list',
          items: [
            { en: '**Measure the invisible work first.** The 200-hour figure was what turned a side project into a priority.', ko: '**보이지 않는 일부터 측정하세요.** 200시간이라는 숫자가 부업 같던 프로젝트를 우선순위로 만들었습니다.' },
            { en: '**Accuracy earns adoption.** Once reports stopped being wrong, people stopped keeping their own copies.', ko: '**정확도가 도입을 만듭니다.** 리포트가 틀리지 않자, 사람들은 각자 복사본을 만들던 습관을 버렸습니다.' },
            { en: '**Ship the smallest useful slice.** Automating one weekly report earned the trust that the larger pipeline needed.', ko: '**가장 작은 유용한 조각부터 내보내세요.** 주간 리포트 하나를 자동화해 얻은 신뢰가 더 큰 파이프라인의 토대가 됐습니다.' },
          ],
        },
      ],
    },
  ],
  sources: [
    { publisher: 'TechM', title: 'SOOP 2024 platform statistics (new streamers, broadcasts, peak viewers)', date: 'Dec 23, 2024', url: 'https://www.techm.kr/news/articleView.html?idxno=133850' },
    { publisher: 'Media Today', title: 'AfreecaTV 2023 results and streamer inflow after Twitch’s Korea exit', date: 'Feb 2024', url: 'https://www.mediatoday.co.kr/news/articleView.html?idxno=315921' },
  ],
};
