import { COMPANY, ROLE } from '../shared.mjs';

export default {
  id: 'P-06',
  slug: 'streamer-support',
  company: 'SOOP',
  title: { en: 'Streamer Instant Support System', ko: '스트리머 즉시 지원 시스템' },
  dek: {
    en: 'Support funds only help if they arrive in time. Automating eligibility and cutting paperwork moved partner approvals from weeks to days.',
    ko: '지원금은 제때 도착해야 의미가 있습니다. 자격 검증을 자동화하고 서류를 줄여 파트너 지원 승인을 수 주에서 수 일로 단축했습니다.',
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
  hero: 'supportFlow',
  heroCaption: {
    en: 'The application flow, reconstructed. Manual document checks and follow-ups collapsed into an automatic eligibility check.',
    ko: '신청 플로우 재구성도. 수동 서류 검토와 보완 요청이 자동 자격 검증으로 합쳐졌습니다.',
  },
  tldr: [
    {
      en: 'SOOP funds partner streamers through several support programs — equipment, production budgets, promotion.[^1][^2] But applying meant documents and manual review, and approvals took weeks.',
      ko: 'SOOP은 장비·제작비·홍보 등 여러 지원 프로그램으로 파트너 스트리머를 지원합니다.[^1][^2] 하지만 신청하려면 서류를 내고 수동 검토를 거쳐야 했고, 승인까지 수 주가 걸렸습니다.',
    },
    {
      en: 'We redesigned the application flow: eligibility verified automatically from data the platform already had, and documentation cut to what the decision actually needed.',
      ko: '신청 플로우를 다시 설계했습니다. 자격은 플랫폼이 이미 가진 데이터로 자동 검증하고, 서류는 판단에 실제로 필요한 것만 남겼습니다.',
    },
    {
      en: 'Approvals dropped from **weeks to days**, with **100%** of partners covered by the new flow.',
      ko: '승인 소요 시간은 **수 주에서 수 일**로 줄었고, 새 플로우는 파트너 **100%**를 포괄했습니다.',
    },
  ],
  sections: [
    {
      id: 'context',
      heading: { en: 'Context', ko: '배경' },
      blocks: [
        {
          type: 'p',
          en: 'Supporting creators is part of SOOP’s model. Its partner program, introduced in 2014, pairs lower platform fees with equipment and promotion support;[^1] a content production support center followed, funding streamers’ projects,[^2] and the company has kept expanding support budgets since.[^3]',
          ko: '크리에이터 지원은 SOOP 사업 모델의 일부입니다. 2014년에 도입된 파트너 제도는 낮은 플랫폼 수수료와 함께 장비·홍보를 지원하고,[^1] 이후 스트리머의 제작 프로젝트를 지원하는 콘텐츠 제작 지원 센터가 생겼으며,[^2] 지원 예산은 이후로도 계속 늘었습니다.[^3]',
        },
        {
          type: 'p',
          en: 'For a streamer, support has a shelf life. Equipment for a planned series or money for a collaboration matters this month — not after a review cycle that outlasts the idea.',
          ko: '스트리머에게 지원에는 유효 기간이 있습니다. 기획한 시리즈를 위한 장비나 합방을 위한 제작비는 이번 달에 필요하지, 아이디어보다 오래 걸리는 심사가 끝난 뒤에 필요한 게 아닙니다.',
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
            { en: '**Weeks to approve.** Manual checks and follow-ups on documents stretched each application out.', ko: '**수 주의 승인.** 수동 검토와 서류 보완 요청 때문에 신청 하나하나가 길어졌습니다.' },
            { en: '**Paperwork for known facts.** Streamers were asked to prove things the platform already knew — broadcast history, partner status.', ko: '**이미 아는 사실을 위한 서류.** 방송 이력이나 파트너 여부처럼 플랫폼이 이미 아는 정보를 스트리머가 증명해야 했습니다.' },
            { en: '**Uneven reach.** Partners who knew the process applied; others didn’t, so support didn’t reach everyone who qualified.', ko: '**고르지 않은 접근성.** 절차를 아는 파트너만 신청했고, 자격이 있어도 지원을 받지 못하는 경우가 생겼습니다.' },
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
              title: { en: 'Separate facts from judgment', ko: '사실 확인과 판단을 분리' },
              body: {
                en: 'We split each review into what could be verified from platform data and what genuinely needed a person’s judgment.',
                ko: '심사를 플랫폼 데이터로 확인할 수 있는 부분과 사람의 판단이 정말 필요한 부분으로 나눴습니다.',
              },
            },
            {
              title: { en: 'Automate verification', ko: '검증 자동화' },
              body: {
                en: 'Eligibility checks ran automatically against platform data, so reviewers only saw applications that already met the rules.',
                ko: '자격 확인은 플랫폼 데이터로 자동 실행되어, 심사자는 기준을 이미 충족한 신청만 보게 됐습니다.',
              },
            },
            {
              title: { en: 'Cut the paperwork', ko: '서류 줄이기' },
              body: {
                en: 'Document requirements shrank to what the decision actually depended on.',
                ko: '제출 서류를 판단에 실제로 필요한 것만 남기고 줄였습니다.',
              },
            },
            {
              title: { en: 'Reach every partner', ko: '모든 파트너에게' },
              body: {
                en: 'The new flow covered every partner streamer, not just those who already knew how to apply.',
                ko: '새 플로우는 신청 방법을 아는 일부가 아니라 모든 파트너 스트리머를 포괄했습니다.',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'built',
      heading: { en: 'One piece I built myself', ko: '직접 만든 도구' },
      blocks: [
        {
          type: 'p',
          en: 'Part of the delay sat after approval: every payout needed a settlement workbook with the right income-tax category, the recipients’ payment details and a payment date, assembled by hand by whichever manager owned the program.',
          ko: '지연의 일부는 승인 이후에 있었습니다. 지급 건마다 소득 구분, 수령인 지급 정보, 지급일이 들어간 정산 엑셀을 담당 매니저가 손으로 만들어야 했습니다.',
        },
        {
          type: 'p',
          en: 'In December 2021 I wrote a small desktop tool in Python for the team. A manager picks their name; the tool reads the shared support database, finds that manager’s unpaid support items, splits the award across the winners, selects the correct tax form (business income, other income, or other income with expenses), sets the next payment date and fills in the settlement template.',
          ko: '2021년 12월, 팀을 위해 Python으로 작은 데스크톱 도구를 만들었습니다. 매니저가 자기 이름을 고르면, 도구가 공유 지원 데이터베이스를 읽어 미지급 건을 찾고, 지원금을 수령자 수로 나누고, 소득 구분(사업소득·기타소득·필요경비 인정 기타소득)에 맞는 서식을 고르고, 다음 지급일을 정해 정산 양식을 채웁니다.',
        },
        {
          type: 'note',
          en: 'Built with PyQt5, gspread (Google Sheets), pandas and xlwings. Payment details stayed inside the company’s existing sheets and templates; the tool only moved them between the two.',
          ko: 'PyQt5, gspread(Google Sheets), pandas, xlwings로 만들었습니다. 지급 정보는 회사의 기존 시트와 양식 안에만 있었고, 도구는 둘 사이의 옮겨 적기만 대신했습니다.',
        },
      ],
    },
    {
      id: 'decisions',
      heading: { en: 'Key decisions', ko: '핵심 의사결정' },
      blocks: [
        {
          type: 'decision',
          title: { en: 'Trust platform data over submitted documents', ko: '제출 서류보다 플랫폼 데이터를 신뢰' },
          options: {
            en: 'Keep asking streamers to document their eligibility, or verify it from data SOOP already held.',
            ko: '스트리머에게 계속 자격 증빙을 요구할지, SOOP이 가진 데이터로 검증할지.',
          },
          choice: { en: 'Verify from platform data; ask only for what the data can’t show.', ko: '플랫폼 데이터로 검증하고, 데이터로 알 수 없는 것만 요청.' },
          why: {
            en: 'It is faster, more accurate, and it stops treating partners like strangers.',
            ko: '더 빠르고 정확하며, 파트너를 낯선 사람처럼 대하지 않게 됩니다.',
          },
          tradeoff: {
            en: 'The eligibility rules had to be written down precisely enough for a machine to apply them.',
            ko: '자격 기준을 기계가 적용할 수 있을 만큼 정확하게 문서화해야 했습니다.',
          },
        },
        {
          type: 'decision',
          title: { en: 'Measure coverage, not just speed', ko: '속도뿐 아니라 커버리지를 측정' },
          options: {
            en: 'Optimize approval time for the people who apply, or also make sure every eligible partner is in the flow.',
            ko: '신청자의 승인 시간만 줄일지, 자격 있는 모든 파트너가 플로우에 들어오게 할지.',
          },
          choice: { en: 'Both, with 100% partner coverage as a target.', ko: '둘 다. 파트너 커버리지 100%를 목표로.' },
          why: {
            en: 'A fast process that only savvy partners use still leaves support on the table.',
            ko: '빠르더라도 절차에 밝은 파트너만 쓰는 프로세스라면, 지원은 여전히 남아돕니다.',
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
            { value: 'Weeks → Days', label: { en: 'Time from application to approval', ko: '신청부터 승인까지 걸리는 시간' } },
            { value: '100%', label: { en: 'Partner streamers covered by the new flow', ko: '새 플로우가 포괄한 파트너 스트리머' } },
          ],
        },
        {
          type: 'p',
          en: 'SOOP has continued to widen and simplify support since — for example by opening its welcome program for new streamers to returning and virtual streamers.[^4]',
          ko: 'SOOP은 이후에도 지원을 넓히고 단순하게 만들어 왔습니다. 신규 스트리머 웰컴 프로그램을 복귀 스트리머와 버추얼 스트리머에게까지 연 것이 한 예입니다.[^4]',
        },
      ],
    },
    {
      id: 'learned',
      heading: { en: 'What I learned', ko: '배운 점' },
      blocks: [
        {
          type: 'quote',
          en: 'In creator support, time-to-money is the product.',
          ko: '크리에이터 지원에서는 돈이 도착하기까지의 시간이 곧 제품입니다.',
        },
        {
          type: 'list',
          items: [
            { en: '**Most review steps are lookups.** Once they were automated, people could spend their time on the real judgment calls.', ko: '**심사 단계 대부분은 조회입니다.** 이를 자동화하자 사람은 진짜 판단에 시간을 쓸 수 있었습니다.' },
            { en: '**Process is part of the relationship.** A partner who waits weeks for an answer hears something about how much they matter.', ko: '**프로세스도 관계의 일부입니다.** 몇 주씩 답을 기다린 파트너는 자신이 얼마나 중요한지에 대해 무언가를 느낍니다.' },
          ],
        },
      ],
    },
  ],
  sources: [
    { publisher: 'eToday', title: 'AfreecaTV introduces the partner BJ program', date: 'Jun 10, 2014', url: 'https://www.etoday.co.kr/news/view/928873' },
    { publisher: 'Inven', title: 'AfreecaTV BJ content production support center', date: 'Mar 14, 2017', url: 'https://www.inven.co.kr/webzine/news/?news=174222' },
    { publisher: 'Money Today', title: 'SOOP doubles content support budget and develops AI creator tools', date: 'Feb 8, 2025', url: 'https://www.mt.co.kr/tech/2025/02/08/2025020611514682807' },
    { publisher: 'Electronic Times', title: 'SOOP “Welcome to Streamer” season 6 opens to returning and virtual streamers', date: 'Oct 24, 2025', url: 'https://www.etnews.com/20251024000123' },
  ],
};
