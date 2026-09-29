import { COMPANY, ROLE } from '../shared.mjs';

export default {
  id: 'P-02',
  slug: 'ops-automation',
  company: 'SOOP',
  title: { en: 'Operations Automation Platform', ko: '운영 자동화 플랫폼' },
  dek: {
    en: 'Three teams were doing the same spreadsheet chores by hand, about 200 hours a month. We replaced them with one pipeline that collects, checks and reports the data itself.',
    ko: '세 팀이 같은 스프레드시트 잡무를 손으로 처리하느라 매달 약 200시간을 쓰고 있었습니다. 이 일을 데이터를 알아서 모으고 검증해 보고하는 파이프라인 하나로 바꿨습니다.',
  },
  card: {
    en: 'Internal automation replacing cross‑team manual ops. Consolidated workflows for finance, creator support, and content review into a single pipeline.',
    ko: '여러 팀에 분산된 수동 운영을 대체한 사내 자동화 플랫폼. 재무·크리에이터 지원·콘텐츠 리뷰 워크플로를 하나의 파이프라인으로 통합.',
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
  hero: {
    scene: 'p02-hero',
    alt: {
      en: 'Sketch: three piles of spreadsheets labelled finance, creator support and content review feed arrows into one pipe with gears and a check mark. The pipe sends results to a Slack alert and a dashboard.',
      ko: '스케치: 재무, 크리에이터 지원, 콘텐츠 리뷰라고 적힌 스프레드시트 더미 세 개에서 화살표가 톱니와 체크 표시가 든 파이프 하나로 모이고, 파이프는 결과를 Slack 알림과 대시보드로 보낸다.',
    },
    caption: {
      en: 'Three teams’ chores, one pipeline, delivered where the teams already work.',
      ko: '세 팀의 잡무를 파이프라인 하나로. 결과는 팀이 이미 일하는 곳으로.',
    },
  },
  glance: {
    problem: {
      en: 'Finance, creator support and content review pulled platform data, reconciled spreadsheets and chased updates by hand: about **200 hours a month**.',
      ko: '재무, 크리에이터 지원, 콘텐츠 리뷰 팀이 플랫폼 데이터 추출, 스프레드시트 대조, 진행 상황 확인을 손으로 처리했습니다. 여기에 매달 약 **200시간**이 들었습니다.',
    },
    did: {
      en: 'We mapped the recurring work, automated the weekly report first, then moved the shared steps into one pipeline.',
      ko: '반복 업무를 모두 정리하고, 주간 리포트부터 자동화한 뒤, 공통 단계를 파이프라인 하나로 옮겼습니다.',
    },
    result: {
      en: 'Manual work fell to **under an hour a month**. Weekly report errors dropped from **5% to under 1%**.',
      ko: '수작업은 **월 1시간 미만**으로 줄었고, 주간 리포트 오류율은 **5%에서 1% 미만**으로 떨어졌습니다.',
    },
  },
  chapters: [
    {
      id: 'map',
      heading: { en: 'Same chores, three versions', ko: '같은 잡무, 세 가지 버전' },
      blocks: [
        {
          type: 'p',
          en: 'Operational work on a live platform grows with its creators and its revenue. AfreecaTV’s 2021 operating profit reached 88.8 billion won, with growth in both platform and advertising revenue.[^1]',
          ko: '라이브 플랫폼의 운영 업무는 크리에이터와 매출을 따라 늘어납니다. 아프리카TV의 2021년 영업이익은 888억 원이었고, 플랫폼 매출과 광고 매출이 함께 늘었습니다.[^1]',
        },
        {
          type: 'p',
          en: 'Every creator program ran the same routine: pull numbers, reconcile them with settlement data, check the rules, tell someone. Each team had its own spreadsheet version.',
          ko: '크리에이터 프로그램마다 같은 일이 반복됐습니다. 숫자를 뽑고, 정산 데이터와 맞추고, 기준을 확인하고, 담당자에게 알리는 일입니다. 팀마다 이 과정을 스프레드시트로 따로 만들어 쓰고 있었습니다.',
        },
        {
          type: 'p',
          en: 'We listed every recurring task with its inputs, outputs and owner. Most were the same four steps applied to different data.',
          ko: '반복 업무를 입력·출력·담당자와 함께 전부 적어 보니, 대부분 데이터만 다른 같은 네 단계였습니다.',
        },
        {
          type: 'sketch',
          scene: 'p02-map',
          alt: {
            en: 'Sketch: three columns of colour-coded task cards, one per team. The same four steps, pull data, reconcile, check rules and notify, appear in each column in a different order. A note reads “same steps, different data”.',
            ko: '스케치: 팀별로 색이 칠해진 업무 카드 세 줄. 데이터 추출, 정산 대조, 자격 확인, 담당자 공유라는 같은 네 단계가 순서만 바뀌어 반복되고, “데이터만 다른 같은 단계”라는 메모가 붙어 있다.',
          },
        },
      ],
    },
    {
      id: 'report',
      heading: { en: 'The report first', ko: '리포트부터' },
      blocks: [
        {
          type: 'p',
          en: 'The weekly KPI report was the most visible chore, so it went first. Google Apps Script and Slack workflows collected the numbers on a schedule and posted them as they landed, instead of once a week.',
          ko: '가장 눈에 띄는 잡무인 주간 KPI 리포트부터 손댔습니다. Google Apps Script와 Slack 워크플로가 정해진 시간에 숫자를 모아, 일주일에 한 번이 아니라 들어오는 즉시 공유하게 했습니다.',
        },
        {
          type: 'sketch',
          scene: 'p02-hours',
          alt: {
            en: 'Sketch: a tower of twenty red bricks labelled “about 200 hours a month, by hand” next to a worried person, and a thin green sliver labelled “under 1 hour, automated” next to a smiling person.',
            ko: '스케치: 걱정스러운 사람 옆에 “월 약 200시간, 손으로”라고 적힌 빨간 벽돌 스무 장의 탑, 웃는 사람 옆에 “1시간 미만, 자동화 후”라고 적힌 얇은 초록 조각.',
          },
        },
      ],
    },
    {
      id: 'pipeline',
      heading: { en: 'One pipeline', ko: '파이프라인 하나로' },
      blocks: [
        {
          type: 'p',
          en: 'Once the report proved itself, the shared steps (collect, validate, route) moved into one pipeline on GCP and Supabase, fed by platform APIs.',
          ko: '리포트로 효과를 확인한 뒤, 공통 단계인 수집·검증·분배를 GCP와 Supabase 위의 파이프라인 하나로 옮겼습니다. 데이터는 플랫폼 API에서 받았습니다.',
        },
        {
          type: 'p',
          en: 'Results went to the Slack channels, dashboards and sheets each team already used. There was no new tool to learn.',
          ko: '결과는 각 팀이 이미 쓰던 Slack 채널, 대시보드, 시트로 보냈습니다. 팀이 새로 배워야 할 도구는 없었습니다.',
        },
        {
          type: 'sketch',
          scene: 'p02-pipeline',
          alt: {
            en: 'Pipeline sketch: settlement data and a platform API are collected into a validation box with a gear and a check mark, then routed to a Slack channel, a dashboard and team sheets.',
            ko: '파이프라인 스케치: 정산 데이터와 플랫폼 API를 수집해 톱니와 체크 표시가 있는 검증 단계를 거친 뒤, Slack 채널, 대시보드, 팀별 시트로 분배한다.',
          },
        },
      ],
    },
  ],
  decisions: [
    {
      title: { en: 'One pipeline, not three automations', ko: '자동화 세 개 대신 파이프라인 하나' },
      why: {
        en: 'Three automations would have kept three versions of the truth. With one pipeline, validation runs once and every team reads the same numbers. The cost was agreeing on shared definitions up front.',
        ko: '자동화를 셋 따로 만들면 서로 다른 ‘정답’도 셋이 남습니다. 파이프라인이 하나면 검증은 한 번으로 끝나고 모든 팀이 같은 숫자를 봅니다. 대신 공통 정의를 먼저 맞춰야 했습니다.',
      },
    },
    {
      title: { en: 'Build from managed services, in slices', ko: '관리형 서비스로, 작게 나눠서' },
      why: {
        en: 'The manual work cost us every week. Shipping the report first proved the value before anything larger was built.',
        ko: '수작업 비용은 매주 쌓였습니다. 리포트 자동화를 먼저 내보내 효과를 보여 준 뒤에 더 큰 부분을 만들었습니다.',
      },
    },
  ],
  results: {
    blocks: [
      {
        type: 'sketch',
        scene: 'p02-errors',
        alt: {
          en: 'Two grids of 100 dots. In the first, 5 dots are red: 5 in 100 weekly reports had errors. In the second, only a faint half-dot is red: under 1 in 100.',
          ko: '점 100개짜리 격자 두 개. 첫 번째는 빨간 점 5개로 주간 리포트 100건 중 5건 오류, 두 번째는 흐린 반점 하나로 100건 중 1건 미만.',
        },
      },
      {
        type: 'metrics',
        rows: [
          { value: '200h → <1h', label: { en: 'Manual operations time per month', ko: '월 수작업 운영 시간' } },
          { value: '3', label: { en: 'Teams on one pipeline: finance, creator support, content review', ko: '파이프라인 하나로 묶은 팀: 재무, 크리에이터 지원, 콘텐츠 리뷰' } },
          { value: '5% → <1%', label: { en: 'Error rate in weekly KPI reports', ko: '주간 KPI 리포트 오류율' } },
          { value: '25%+', label: { en: 'Team capacity moved to planning and new-service analysis', ko: '기획·신규 서비스 분석으로 옮긴 팀 리소스' } },
        ],
      },
    ],
  },
  learned: {
    quote: {
      en: 'Operational debt builds up quietly. Nobody files a ticket for “I spent Tuesday copying numbers.”',
      ko: '운영 부채는 조용히 쌓입니다. “화요일 내내 숫자를 옮겼다”는 이유로 티켓을 올리는 사람은 없습니다.',
    },
    items: [
      { en: '**Measure the invisible work first.** The 200-hour figure turned a side project into a priority.', ko: '**보이지 않는 일부터 측정합니다.** 200시간이라는 숫자가 곁가지 같던 일을 우선순위로 끌어올렸습니다.' },
      { en: '**Accuracy earns adoption.** Once the reports stopped being wrong, people stopped keeping their own copies.', ko: '**정확해야 쓰입니다.** 리포트가 틀리지 않자 사람들은 각자 만들던 복사본을 버렸습니다.' },
    ],
  },
  sources: [
    { publisher: 'Electronic Times (전자신문)', title: '아프리카티비, 지난해 영업이익 888억…플랫폼·광고 고른 성장', date: 'Feb 10, 2022', url: 'https://www.etnews.com/20220210000179' },
  ],
};
