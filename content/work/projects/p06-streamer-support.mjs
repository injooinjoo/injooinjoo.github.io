import { COMPANY, ROLE } from '../shared.mjs';

export default {
  id: 'P-06',
  slug: 'streamer-support',
  company: 'SOOP',
  title: { en: 'Streamer Instant Support System', ko: '스트리머 즉시 지원 시스템' },
  dek: {
    en: 'Support funds only help if they arrive while the idea is still alive. We checked eligibility automatically, cut the paperwork, and moved partner approvals from weeks to days.',
    ko: '지원금은 아이디어가 식기 전에 도착해야 의미가 있습니다. 자격 확인을 자동화하고 서류를 줄여 파트너 지원 승인을 수 주에서 수 일로 줄였습니다.',
  },
  card: {
    en: 'Streamlined the partner support‑fund application flow. Automated verification and simplified documentation moved approvals from weeks to days.',
    ko: '파트너 지원금 신청 플로우를 간소화. 자동화된 검증과 문서 요건 축소로 승인 소요를 주 단위에서 일 단위로 단축.',
  },
  kpis: [
    { value: 'Weeks → Days', label: { en: 'Approval time', ko: '승인 소요 시간' }, cardLabel: 'Approval time' },
    { value: '100%', label: { en: 'Partner coverage', ko: '파트너 커버리지' }, cardLabel: 'Partner coverage' },
  ],
  stack: ['Process Automation', 'Workflow', 'Python', 'Database'],
  meta: {
    company: COMPANY,
    role: ROLE,
    scope: {
      en: 'Application flow redesign, eligibility automation, document requirements, partner communication',
      ko: '신청 플로우 재설계, 자격 검증 자동화, 제출 서류 기준, 파트너 커뮤니케이션',
    },
  },
  hero: {
    scene: 'p06-hero',
    alt: {
      en: 'Two calendars. In the first, the days from a support request to its approval are hatched in red across about three weeks. In the second, the hatched span in green covers three days.',
      ko: '달력 두 장. 첫 번째 달력에는 지원 신청부터 승인까지가 빨간 빗금으로 약 3주에 걸쳐 칠해져 있고, 두 번째 달력에는 초록 빗금이 사흘만 칠해져 있다.',
    },
    caption: {
      en: 'The same request, before and after the new flow.',
      ko: '같은 신청, 새 플로우 전과 후.',
    },
  },
  glance: {
    problem: {
      en: 'Applying for partner support meant documents and manual review. Approvals took weeks, and partners who didn’t know the process often didn’t apply.',
      ko: '파트너 지원을 신청하려면 서류를 내고 수동 검토를 거쳐야 했습니다. 승인까지 수 주가 걸렸고, 절차를 모르는 파트너는 신청하지 않는 경우가 많았습니다.',
    },
    did: {
      en: 'We split each review into facts the platform already knew and real judgement calls, automated the facts, cut the documents, and put every partner in the new flow.',
      ko: '심사를 플랫폼이 이미 아는 사실과 사람이 판단할 부분으로 나눠, 사실 확인은 자동화하고 서류는 줄이고, 모든 파트너를 새 플로우에 넣었습니다.',
    },
    result: {
      en: 'Approvals went from **weeks to days**, with **100%** of partner streamers covered.',
      ko: '승인은 **수 주에서 수 일**로 줄었고, 파트너 스트리머 **100%**가 새 플로우에 들어왔습니다.',
    },
  },
  chapters: [
    {
      id: 'shelf-life',
      heading: { en: 'Support with a shelf life', ko: '유효 기간이 있는 지원' },
      blocks: [
        {
          type: 'p',
          en: 'AfreecaTV runs support programs for its streamers and walks them through the programs at its BJ meetings, held online in March 2021 and in person in May 2022.[^1][^2]',
          ko: '아프리카TV는 스트리머 지원 프로그램을 운영하고, BJ 간담회에서 이를 소개해 왔습니다. 2021년 3월에는 온라인으로, 2022년 5월에는 오프라인으로 간담회가 열렸습니다.[^1][^2]',
        },
        {
          type: 'p',
          en: 'Support has a shelf life. Equipment for a planned series matters this month, not after a review that outlasts the idea.',
          ko: '지원에는 유효 기간이 있습니다. 준비 중인 시리즈에 쓸 장비는 이번 달에 필요하지, 아이디어보다 오래 걸리는 심사 뒤에 필요한 게 아닙니다.',
        },
        {
          type: 'p',
          en: 'Streamers had to prove what the platform already knew, and each missing document meant another round.',
          ko: '스트리머는 플랫폼이 이미 아는 사실을 증명해야 했고, 서류가 하나 빠질 때마다 한 번 더 오갔습니다.',
        },
      ],
    },
    {
      id: 'facts',
      heading: { en: 'Facts from data, judgement from people', ko: '사실은 데이터로, 판단은 사람이' },
      blocks: [
        {
          type: 'p',
          en: 'We split each review into what platform data could verify and what needed a person. Eligibility checks ran automatically.',
          ko: '심사를 플랫폼 데이터로 확인할 수 있는 부분과 사람이 봐야 하는 부분으로 나눴습니다. 자격 확인은 자동으로 돌아갑니다.',
        },
        {
          type: 'sketch',
          scene: 'p06-split',
          alt: {
            en: 'Sketch of an application with four fields. Broadcast history, partner status and past support go to a box that checks them from platform data. The plan itself goes to a person who decides.',
            ko: '필드 네 개가 있는 신청서 스케치. 방송 이력, 파트너 여부, 이전 지원 내역은 플랫폼 데이터로 자동 확인하는 상자로, 기획 내용은 사람이 판단하는 쪽으로 간다.',
          },
        },
        {
          type: 'p',
          en: 'Documents shrank to what the decision depended on. The flow went from five steps to three.',
          ko: '서류는 판단에 실제로 필요한 것만 남겼습니다. 흐름은 다섯 단계에서 세 단계가 됐습니다.',
        },
        {
          type: 'sketch',
          scene: 'p06-steps',
          alt: {
            en: 'Before: five steps (apply, send documents, manual check, ask for more, approve) with a dashed red arrow looping back from “ask for more”. After: three steps (apply, automatic check, approve).',
            ko: '이전: 신청, 서류 제출, 수동 검토, 보완 요청, 승인의 다섯 단계와 “보완 요청”에서 되돌아가는 빨간 점선 화살표. 이후: 신청, 자동 자격 확인, 승인의 세 단계.',
          },
        },
      ],
    },
    {
      id: 'built',
      heading: { en: 'One piece I built myself', ko: '직접 만든 도구' },
      blocks: [
        {
          type: 'p',
          en: 'Part of the delay came after approval: every payout needed a settlement workbook with the right tax category, payment details and date, built by hand.',
          ko: '지연의 일부는 승인 이후에 있었습니다. 지급 건마다 소득 구분, 지급 정보, 지급일이 들어간 정산 엑셀을 손으로 만들어야 했습니다.',
        },
        {
          type: 'p',
          en: 'In December 2021 I wrote a small Python desktop tool for the team. A manager picks their name; the tool finds their unpaid items in the shared support sheet, splits each award across recipients, picks the tax form (business income, other income, or other income with expenses), sets the next payment date and fills in the settlement template.',
          ko: '2021년 12월, 팀을 위해 Python으로 작은 데스크톱 도구를 만들었습니다. 매니저가 이름을 고르면 도구가 공유 지원 시트에서 미지급 건을 찾아, 지원금을 수령인 수로 나누고, 소득 구분(사업소득, 기타소득, 필요경비 인정 기타소득)에 맞는 서식을 고르고, 다음 지급일을 정해 정산 양식을 채웁니다.',
        },
        {
          type: 'sketch',
          scene: 'p06-tool',
          alt: {
            en: 'Sketch of a desktop window titled “Settlement workbook maker”: a manager drop-down (left blank), three ticked unpaid items each divided by the number of recipients, three income-type options, the next payment date and a “Make workbook” button. An arrow leads to a filled settlement spreadsheet.',
            ko: '“정산 엑셀 생성기” 창 스케치: 비워 둔 담당자 선택 칸, 수령인 수로 나누는 미지급 건 세 줄, 소득 구분 선택지 세 개, 다음 지급 회차, “엑셀 만들기” 버튼. 화살표가 채워진 정산 양식으로 이어진다.',
          },
        },
        {
          type: 'note',
          en: 'Built with PyQt5, gspread (Google Sheets), pandas and xlwings. Payment details stayed inside the company’s existing sheets and templates; the tool only moved them from one to the other.',
          ko: 'PyQt5, gspread(Google Sheets), pandas, xlwings로 만들었습니다. 지급 정보는 회사의 기존 시트와 양식 안에만 있었고, 도구는 둘 사이에서 옮겨 적는 일만 대신했습니다.',
        },
      ],
    },
  ],
  decisions: [
    {
      title: { en: 'Trust platform data over documents', ko: '서류보다 플랫폼 데이터' },
      why: {
        en: 'It is faster and more accurate, and it stops treating partners like strangers. The rules had to be written down precisely enough for a machine to apply them.',
        ko: '더 빠르고 정확하며, 파트너를 낯선 사람처럼 대하지 않게 됩니다. 대신 자격 기준을 기계가 적용할 수 있을 만큼 정확하게 적어야 했습니다.',
      },
    },
    {
      title: { en: 'Measure coverage, not only speed', ko: '속도만이 아니라 커버리지도' },
      why: {
        en: 'A fast process that only well-informed partners use still leaves support unused. The target was every partner in the flow.',
        ko: '빨라도 절차에 밝은 파트너만 쓰는 프로세스라면 지원은 여전히 남습니다. 목표는 모든 파트너가 플로우 안에 있는 것이었습니다.',
      },
    },
  ],
  results: {
    blocks: [
      {
        type: 'sketch',
        scene: 'p06-coverage',
        alt: {
          en: 'Two dashed boxes of ten partner streamers. Before: six are inside the flow with check marks and four are greyed out with question marks, labelled “didn’t know how to apply”. After: all ten have check marks.',
          ko: '파트너 스트리머 열 명이 있는 점선 상자 두 개. 이전: 여섯 명은 체크 표시와 함께 플로우 안에 있고, 네 명은 물음표와 함께 흐리게 그려져 “신청 방법을 몰랐던 파트너”라고 적혀 있다. 이후: 열 명 모두 체크 표시.',
        },
      },
      {
        type: 'metrics',
        rows: [
          { value: 'Weeks → Days', label: { en: 'Time from application to approval', ko: '신청부터 승인까지 걸리는 시간' } },
          { value: '100%', label: { en: 'Partner streamers covered by the new flow', ko: '새 플로우가 포괄한 파트너 스트리머' } },
        ],
      },
    ],
  },
  learned: {
    quote: {
      en: 'In creator support, the time it takes for money to arrive is part of the product.',
      ko: '크리에이터 지원에서는 돈이 도착하기까지의 시간도 제품입니다.',
    },
    items: [
      { en: '**Most review steps are lookups.** Once they ran automatically, reviewers could spend their time on the real judgement calls.', ko: '**심사 단계 대부분은 조회입니다.** 조회가 자동으로 돌아가자 심사자는 진짜 판단에 시간을 쓸 수 있었습니다.' },
      { en: '**Process is part of the relationship.** A partner who waits weeks for an answer learns something about how much they matter.', ko: '**프로세스도 관계의 일부입니다.** 답을 몇 주씩 기다린 파트너는 자신이 얼마나 중요한지에 대해 무언가를 느낍니다.' },
    ],
  },
  sources: [
    { publisher: 'ZDNet Korea', title: '아프리카TV, 온라인 간담회 열어 BJ들과 소통', date: 'Mar 29, 2021', url: 'https://zdnet.co.kr/view/?no=20210329091646' },
    { publisher: 'Hankyung (press release)', title: '아프리카티비(TV), 18일 BJ와 임직원이 함께하는 2022 상반기 BJ간담회 개최', date: 'May 17, 2022', url: 'https://www.hankyung.com/press-release/article/202205170294P' },
  ],
};
