export default {
  id: 'P-08',
  slug: 'sidekick',
  company: 'Sidekick',
  title: { en: 'Sidekick — AI Employees on Your Phone', ko: '사이드킥 — 폰 속의 AI 직원' },
  dek: {
    en: 'A mobile app that lets non-developers hire a team of AI employees and delegate real work — built solo in three months with AI coding agents, and the release discipline that made that safe.',
    ko: '비개발자가 폰에서 AI 직원 팀을 채용하고 실제 일을 맡기는 앱. AI 코딩 에이전트와 함께 3개월 동안 혼자 만들었고, 그걸 안전하게 만든 릴리스 규율까지.',
  },
  card: {
    en: 'Mobile app for hiring AI employees and delegating real work, with approval before anything goes out. Built solo with AI coding agents: per-user isolated agent runtimes and a governed release line.',
    ko: 'AI 직원을 채용하고 실제 업무를 맡기며, 외부로 나가기 전 반드시 승인받는 모바일 앱. AI 코딩 에이전트와 혼자 개발 — 사용자별 격리 런타임과 관리된 릴리스 라인.',
  },
  kpis: [
    { value: '1,900+', label: { en: 'Commits in 3 months', ko: '3개월간 커밋' }, cardLabel: 'Commits in 3 months' },
    { value: '1,600+', label: { en: 'Merged pull requests', ko: '머지된 PR' }, cardLabel: 'Merged PRs' },
    { value: '5,600+', label: { en: 'Backend tests', ko: '백엔드 테스트' }, card: false },
    { value: '~50%', label: { en: 'Commits co-authored with Claude', ko: 'Claude 공동 작성 커밋' }, card: false },
  ],
  stack: ['Expo / React Native', 'Python', 'Supabase', 'Kubernetes', 'Claude Code'],
  meta: {
    company: { en: 'Sidekick (independent product)', ko: 'Sidekick (개인 프로젝트)' },
    role: { en: 'Founder — product, design and engineering', ko: '창업자 — 기획·디자인·개발' },
    scope: {
      en: 'Product definition, mobile app, backend and agent runtime, security isolation, release process',
      ko: '제품 정의, 모바일 앱, 백엔드와 에이전트 런타임, 보안 격리, 릴리스 프로세스',
    },
    link: { label: 'sidekickagent.app', url: 'https://sidekickagent.app/' },
  },
  hero: 'sidekickArch',
  heroCaption: {
    en: 'Sidekick’s shape. The phone app talks to a thin control plane; each user gets an isolated agent runtime where every AI employee has its own profile, memory and tools. Results come back as cards that the user approves.',
    ko: '사이드킥의 구조. 모바일 앱은 얇은 컨트롤 플레인과 통신하고, 사용자마다 격리된 에이전트 런타임이 있으며, AI 직원마다 자기 프로필·메모리·도구를 가집니다. 결과는 사용자가 승인하는 카드로 돌아옵니다.',
  },
  sourcesNote: {
    en: 'Build figures come from the project repository as of September 29, 2026. Sidekick is in closed beta, so there are no public usage numbers yet.',
    ko: '개발 규모 수치는 2026년 9월 29일 기준 프로젝트 저장소에서 집계했습니다. 사이드킥은 비공개 베타 단계라 아직 공개할 사용 지표는 없습니다.',
  },
  tldr: [
    {
      en: 'AI agents can already do real work, but using them means servers, API keys and a terminal. Sidekick puts a team of AI employees on a phone for people who will never open a terminal.',
      ko: 'AI 에이전트는 이미 실제 일을 할 수 있지만, 쓰려면 서버·API 키·터미널이 필요합니다. 사이드킥은 터미널을 열 일이 없는 사람들의 폰에 AI 직원 팀을 넣습니다.',
    },
    {
      en: 'The product rule is simple: you delegate, they work, and **nothing goes out without your approval**. Under it sits a per-user isolated agent runtime in the Seoul region.',
      ko: '제품 원칙은 단순합니다. 맡기면 일하고, **승인 없이는 아무것도 밖으로 나가지 않습니다.** 그 아래에는 서울 리전의 사용자별 격리 에이전트 런타임이 있습니다.',
    },
    {
      en: 'I built it alone with AI coding agents — **1,900+ commits and 1,600+ merged PRs in three months** — and the hardest problem turned out to be keeping parallel agents from bringing old code back.',
      ko: 'AI 코딩 에이전트와 함께 혼자 만들었습니다. **3개월간 커밋 1,900개 이상, 머지된 PR 1,600개 이상.** 가장 어려운 문제는 병렬로 일하는 에이전트가 옛 코드를 되살리지 않게 하는 것이었습니다.',
    },
  ],
  sections: [
    {
      id: 'context',
      heading: { en: 'Why build it', ko: '왜 만들었나' },
      blocks: [
        {
          type: 'p',
          en: 'After a decade of building creator products, I kept meeting the same person: someone who wants to run a YouTube channel, a blog or a small online shop on the side, but can’t be on it every day. Agents could do much of that work. Setting one up was the barrier.',
          ko: '10년 넘게 크리에이터 제품을 만들며 같은 사람을 계속 만났습니다. 유튜브 채널이나 블로그, 작은 온라인 가게를 부업으로 운영하고 싶지만 매일 붙어 있을 수는 없는 사람입니다. 그 일의 상당 부분은 에이전트가 할 수 있었습니다. 문제는 설정이었습니다.',
        },
        {
          type: 'p',
          en: 'So the product definition became: a Korean non-developer can hire an AI employee on their phone — no servers, keys or terminal — and see a first real result within ten minutes. Retention means coming back for a second real run with the same employee within a week.',
          ko: '그래서 제품 정의는 이렇게 정했습니다. 한국의 비개발자가 서버·키·터미널 없이 폰에서 AI 직원을 채용하고, 10분 안에 첫 실제 결과를 본다. 리텐션은 일주일 안에 같은 직원에게 두 번째 실제 작업을 맡기는 것이다.',
        },
      ],
    },
    {
      id: 'product',
      heading: { en: 'Product decisions', ko: '제품 의사결정' },
      blocks: [
        {
          type: 'decision',
          title: { en: 'Approval before anything goes out', ko: '밖으로 나가기 전에는 반드시 승인' },
          options: {
            en: 'Let AI employees publish and send on their own, or require the user to approve every external action.',
            ko: 'AI 직원이 스스로 게시·전송하게 할지, 모든 외부 행동에 사용자 승인을 받을지.',
          },
          choice: { en: 'Results arrive as cards; external actions wait for approval.', ko: '결과는 카드로 도착하고, 외부 행동은 승인을 기다립니다.' },
          why: {
            en: 'Trust is the product. People will delegate more once they know nothing is posted, sent or spent behind their back.',
            ko: '신뢰가 곧 제품입니다. 몰래 게시되거나 전송되거나 결제되는 일이 없다는 걸 알면 사람들은 더 많이 맡깁니다.',
          },
          tradeoff: { en: 'Less “fully automatic” than some competitors promise — on purpose.', ko: '일부 경쟁 제품이 약속하는 “완전 자동”보다 덜 자동입니다. 의도적으로요.' },
        },
        {
          type: 'decision',
          title: { en: 'Wrap the agent runtime, don’t fork it', ko: '에이전트 런타임은 포크하지 않고 감싸기' },
          options: {
            en: 'Build a custom agent framework, fork an existing one, or run an existing agent runtime as-is and build the product around it.',
            ko: '에이전트 프레임워크를 직접 만들지, 기존 것을 포크할지, 기존 런타임을 그대로 쓰고 그 주위에 제품을 만들지.',
          },
          choice: {
            en: 'Run Hermes Agent as-is. It owns memory, skills, tool connectors and schedules; Sidekick owns identity, billing, UI and provisioning.',
            ko: 'Hermes Agent를 그대로 사용합니다. 메모리·스킬·도구 연결·예약 작업은 Hermes가, 인증·결제·UI·프로비저닝은 사이드킥이 맡습니다.',
          },
          why: {
            en: 'A solo builder can’t out-build an agent framework. The value is in the experience around it — hiring, delegating, approving on a phone.',
            ko: '혼자서 에이전트 프레임워크보다 잘 만들 수는 없습니다. 가치는 그 주변의 경험, 즉 폰에서 채용하고 맡기고 승인하는 데 있습니다.',
          },
        },
        {
          type: 'decision',
          title: { en: 'One isolated runtime per user, in Seoul', ko: '사용자마다 격리된 런타임, 서울 리전' },
          options: {
            en: 'A shared multi-tenant agent service, or a dedicated runtime for every user.',
            ko: '여러 사용자가 공유하는 에이전트 서비스, 또는 사용자마다 전용 런타임.',
          },
          choice: {
            en: 'A dedicated runtime per user, scaled to zero when idle, with isolation enforced by the operating system rather than by path conventions.',
            ko: '사용자별 전용 런타임을 두고 쉴 때는 0으로 줄이며, 격리는 경로 규칙이 아니라 운영체제 수준에서 강제합니다.',
          },
          why: {
            en: 'Agents run code and hold personal memory. An early test showed that path discipline alone could be escaped, so isolation had to fail closed. Seoul hosting is a product requirement for Korean users, not just a cost line.',
            ko: '에이전트는 코드를 실행하고 개인 메모리를 가집니다. 초기 테스트에서 경로 규칙만으로는 격리를 뚫을 수 있다는 게 드러났고, 그래서 격리는 실패 시 닫히도록 설계했습니다. 서울 호스팅은 비용 항목이 아니라 한국 사용자를 위한 제품 요구사항입니다.',
          },
        },
      ],
    },
    {
      id: 'building',
      heading: { en: 'Building alone, with AI agents', ko: 'AI 에이전트와 혼자 만들기' },
      blocks: [
        {
          type: 'p',
          en: 'Sidekick is an Expo / React Native app with a Python backend, Supabase for auth and data, and per-user agent runtimes on Kubernetes. I wrote it with AI coding agents — mostly Claude Code — running in parallel: about half of the 1,900+ commits are co-authored with Claude models, and the backend carries more than 5,600 tests.',
          ko: '사이드킥은 Expo / React Native 앱에 Python 백엔드, 인증·데이터용 Supabase, Kubernetes 위의 사용자별 에이전트 런타임으로 구성됩니다. 주로 Claude Code를 비롯한 AI 코딩 에이전트를 병렬로 돌리며 만들었습니다. 1,900개가 넘는 커밋의 약 절반이 Claude 모델과의 공동 작성이고, 백엔드 테스트는 5,600개가 넘습니다.',
        },
        {
          type: 'p',
          en: 'Speed created a new kind of bug. UI I had deliberately removed kept reappearing. The cause wasn’t the models “remembering” old code: parallel agents were starting from different base commits, merges asked for a broad union of old and new, and the tests themselves still protected the old behavior. Green tests proved nothing about whether the product was current.',
          ko: '속도는 새로운 종류의 버그를 만들었습니다. 일부러 지운 UI가 계속 다시 나타났습니다. 원인은 모델이 옛 코드를 “기억”해서가 아니었습니다. 병렬 에이전트가 서로 다른 기준 커밋에서 출발했고, 병합 지시가 옛것과 새것의 넓은 합집합을 요구했으며, 테스트 자체가 옛 동작을 지키고 있었습니다. 테스트 통과는 제품이 최신이라는 증거가 아니었습니다.',
        },
        { type: 'figure', figure: 'releaseLine', caption: { en: 'The release line that fixed it.', ko: '문제를 해결한 릴리스 라인.' } },
        {
          type: 'list',
          items: [
            { en: '**One pinned base.** Every agent works in an isolated worktree created from the same commit.', ko: '**하나의 고정된 기준.** 모든 에이전트는 같은 커밋에서 만든 격리 worktree에서 일합니다.' },
            { en: '**Negative invariants.** What was removed gets a test that proves it stays removed.', ko: '**부재 조건.** 지운 것에는 계속 지워져 있음을 증명하는 테스트를 붙입니다.' },
            { en: '**History is evidence, not a base.** Old branches are read for reference; only minimal changes are replayed forward.', ko: '**과거는 근거일 뿐 기준이 아닙니다.** 옛 브랜치는 참고용으로만 읽고, 최소한의 변경만 앞으로 옮깁니다.' },
            { en: '**Workers never deploy.** Only one attested commit on main can be released, under a single lock.', ko: '**작업 에이전트는 배포하지 않습니다.** main의 증명된 커밋 하나만, 단일 잠금 아래에서 배포됩니다.' },
          ],
        },
      ],
    },
    {
      id: 'status',
      heading: { en: 'Where it is now', ko: '현재 상태' },
      blocks: [
        {
          type: 'p',
          en: 'Sidekick is in closed beta through TestFlight, and I use it myself. The first cohort is designed to test the two numbers that matter — a first real result within ten minutes, and a second real run within seven days — before a wider App Store launch once the planned features are complete.',
          ko: '사이드킥은 TestFlight를 통한 비공개 베타 단계이며, 저도 직접 쓰고 있습니다. 첫 사용자 그룹은 중요한 두 숫자, 즉 10분 안의 첫 실제 결과와 7일 안의 두 번째 실제 작업을 검증하도록 설계했고, 계획한 기능이 완성되면 App Store에 정식 출시할 예정입니다.',
        },
        {
          type: 'metrics',
          rows: [
            { value: '1,900+', label: { en: 'Commits, June–September 2026', ko: '커밋, 2026년 6~9월' } },
            { value: '1,600+', label: { en: 'Merged pull requests', ko: '머지된 PR' } },
            { value: '5,600+', label: { en: 'Backend tests', ko: '백엔드 테스트' } },
            { value: '~50%', label: { en: 'Commits co-authored with Claude models', ko: 'Claude 모델과 공동 작성한 커밋' } },
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
          en: 'With AI agents, writing code stops being the bottleneck. Knowing which code is current becomes the job.',
          ko: 'AI 에이전트와 일하면 코드 작성은 더 이상 병목이 아닙니다. 어떤 코드가 최신인지 아는 것이 일이 됩니다.',
        },
        {
          type: 'list',
          items: [
            { en: '**Separate the kinds of evidence.** Passing tests, a working install, production behavior and store review are four different claims.', ko: '**증거의 종류를 구분하세요.** 테스트 통과, 설치된 앱의 동작, 운영 환경의 동작, 스토어 심사는 서로 다른 네 가지 주장입니다.' },
            { en: '**PM instincts transfer.** Defining activation and retention before writing code kept a fast-moving solo project pointed at users.', ko: '**PM 감각은 그대로 통합니다.** 코드를 쓰기 전에 활성화와 리텐션을 정의해 둔 덕분에, 빠르게 움직이는 1인 프로젝트가 사용자를 향해 있을 수 있었습니다.' },
          ],
        },
      ],
    },
  ],
  sources: [
    { publisher: 'Sidekick', title: 'sidekickagent.app', date: '2026', url: 'https://sidekickagent.app/' },
  ],
};
