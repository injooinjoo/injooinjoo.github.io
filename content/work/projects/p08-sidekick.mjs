export default {
  id: 'P-08',
  slug: 'sidekick',
  company: 'Sidekick',
  title: { en: 'Sidekick — AI Employees on Your Phone', ko: '사이드킥 — 폰 속의 AI 직원' },
  dek: {
    en: 'A phone app for hiring AI employees and handing them real work, with your approval before anything goes out. I built it alone with AI coding agents; the hard part was keeping them from bringing old code back.',
    ko: 'AI 직원을 채용해 실제 일을 맡기고, 밖으로 나가는 것은 모두 사용자가 승인하는 폰 앱입니다. AI 코딩 에이전트와 함께 혼자 만들었고, 가장 어려웠던 일은 에이전트들이 옛 코드를 되살리지 않게 하는 것이었습니다.',
  },
  card: {
    en: 'Mobile app for hiring AI employees and delegating real work, with approval before anything goes out. Built solo with AI coding agents: per-user isolated agent runtimes and a governed release line.',
    ko: 'AI 직원을 채용해 실제 업무를 맡기고, 외부로 나가는 결과는 반드시 승인을 거치는 모바일 앱. AI 코딩 에이전트와 함께 혼자 개발. 사용자별 격리 런타임과 관리된 릴리스 라인.',
  },
  kpis: [
    { value: '1,900+', label: { en: 'Commits in 3 months', ko: '3개월간 커밋' }, cardLabel: 'Commits in 3 months' },
    { value: '1,600+', label: { en: 'Merged pull requests', ko: '머지된 PR' }, cardLabel: 'Merged PRs' },
    { value: '5,600+', label: { en: 'Backend tests', ko: '백엔드 테스트' }, card: false },
    { value: '~50%', label: { en: 'Commits co-authored with Claude', ko: 'Claude 공동 작성 커밋' }, card: false },
  ],
  stack: ['Expo / React Native', 'Python', 'Claude Code'],
  meta: {
    company: { en: 'Sidekick (independent product)', ko: 'Sidekick (개인 프로젝트)' },
    role: { en: 'Founder — product, design and engineering', ko: '창업자 — 기획·디자인·개발' },
    scope: {
      en: 'Product definition, mobile app, backend and agent runtime, security isolation, release process',
      ko: '제품 정의, 모바일 앱, 백엔드와 에이전트 런타임, 보안 격리, 릴리스 프로세스',
    },
    link: { label: 'sidekickagent.app', url: 'https://sidekickagent.app/' },
  },
  hero: {
    scene: 'p08-hero',
    alt: {
      en: 'Sketch of a phone showing “My team”: three AI employees (blog writer, working; shop helper, done; researcher, needs your OK). A blog draft and a result card with an Approve button come out of the phone.',
      ko: '“나의 팀” 화면이 떠 있는 폰 스케치: AI 직원 세 명(블로그 담당 작업 중, 쇼핑몰 담당 완료, 리서치 담당 승인 대기). 폰 밖으로 블로그 초안과 승인 버튼이 있는 결과 카드가 나와 있다.',
    },
    caption: {
      en: 'A small team on the phone. Work comes back as cards you approve.',
      ko: '폰 속의 작은 팀. 일은 승인을 기다리는 카드로 돌아옵니다.',
    },
  },
  sourcesNote: {
    en: 'Build figures come from the project’s own history as of late September 2026. Sidekick is in closed beta, so there are no public usage numbers yet.',
    ko: '개발 규모 수치는 2026년 9월 말 기준 프로젝트 이력에서 집계했습니다. 사이드킥은 비공개 베타 단계라 아직 공개할 사용 지표가 없습니다.',
  },
  glance: {
    problem: {
      en: 'AI agents can already do real work, but using one means servers, API keys and a terminal. Most people who could use the help will never open a terminal.',
      ko: 'AI 에이전트는 이미 실제 일을 할 수 있지만, 쓰려면 서버, API 키, 터미널이 필요합니다. 도움이 필요한 사람 대부분은 터미널을 열 일이 없습니다.',
    },
    didLabel: { en: 'What I built', ko: '만든 것' },
    did: {
      en: 'A phone app where you hire AI employees, hand them a task and approve the result before anything is posted, sent or spent. Each user gets an isolated agent runtime.',
      ko: 'AI 직원을 채용해 일을 맡기고, 게시·전송·결제 전에 결과를 승인하는 폰 앱을 만들었습니다. 사용자마다 격리된 에이전트 런타임을 둡니다.',
    },
    resultLabel: { en: 'Where it is', ko: '현재 상태' },
    result: {
      en: 'Closed beta on TestFlight. **1,900+ commits** and **1,600+ merged PRs** in three months, with **5,600+** backend tests.',
      ko: 'TestFlight 비공개 베타 중입니다. 3개월간 **커밋 1,900개 이상**, **머지된 PR 1,600개 이상**, 백엔드 테스트 **5,600개 이상**을 쌓았습니다.',
    },
  },
  chapters: [
    {
      id: 'why',
      heading: { en: 'Why build it', ko: '왜 만들었나' },
      blocks: [
        {
          type: 'p',
          en: 'Many people want to run a channel, a blog or a small shop on the side but can’t be on it every day. Agents could do much of that work. Setting one up was the barrier.',
          ko: '채널이나 블로그, 작은 가게를 부업으로 운영하고 싶지만 매일 붙어 있을 수 없는 사람이 많습니다. 그 일의 상당 부분은 에이전트가 할 수 있었습니다. 문제는 설정이었습니다.',
        },
        {
          type: 'p',
          en: 'The product definition: a Korean non-developer hires an AI employee on their phone and sees a first real result within ten minutes. Retention is a second real task for the same employee within a week.',
          ko: '제품 정의는 ‘한국의 비개발자가 폰에서 AI 직원을 채용하고 10분 안에 첫 실제 결과를 본다’입니다. 리텐션은 일주일 안에 같은 직원에게 두 번째 일을 맡기는 것으로 정했습니다.',
        },
      ],
    },
    {
      id: 'approve',
      heading: { en: 'Delegate, work, approve', ko: '맡기고, 일하고, 승인하고' },
      blocks: [
        {
          type: 'p',
          en: 'Results come back as cards. Posts, messages and payments wait for the user’s approval.',
          ko: '결과는 카드로 돌아옵니다. 게시글, 메시지, 결제는 모두 사용자 승인을 기다립니다.',
        },
        {
          type: 'sketch',
          scene: 'p08-flow',
          alt: {
            en: 'Three steps. Delegate: a phone with the request “Write this week’s blog post”. Work: an AI employee with a gear and a document, labelled memory, tools, skills. Approve: a card reading “Blog draft ready” with Approve and Edit buttons, a lock, and the note “nothing goes out without you”.',
            ko: '세 단계. 맡기기: “이번 주 블로그 글 써 줘”라는 요청이 뜬 폰. 일하기: 톱니와 문서를 든 AI 직원, 메모리·도구·스킬. 승인하기: “블로그 초안 완료” 카드에 승인·수정 버튼과 자물쇠, “승인 없이는 아무것도 나가지 않음”이라는 메모.',
          },
        },
        {
          type: 'p',
          en: 'Each user gets an isolated runtime where every AI employee keeps its own profile, memory and tools. If isolation breaks, it fails closed.',
          ko: '사용자마다 격리된 런타임이 있고, AI 직원마다 자기 프로필, 메모리, 도구를 가집니다. 격리에 문제가 생기면 접근을 막는 쪽으로 실패하게 했습니다.',
        },
        {
          type: 'sketch',
          scene: 'p08-arch',
          alt: {
            en: 'Architecture sketch: the phone app talks to a thin control plane (sign-in, billing, provisioning), which starts the user’s own isolated runtime, drawn as a locked dashed box stacked in front of others. Inside, two AI employees each have a profile, memory and tools.',
            ko: '구조 스케치: 폰 앱이 얇은 컨트롤 플레인(인증·결제·프로비저닝)과 통신하고, 컨트롤 플레인은 사용자 전용 격리 런타임을 띄운다. 런타임은 자물쇠가 달린 점선 상자로, 다른 사용자의 상자들 앞에 겹쳐 있다. 안에는 AI 직원 두 명이 각자 프로필, 메모리, 도구를 가진다.',
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
          en: 'I built Sidekick with AI coding agents running in parallel, mostly Claude Code. About half of the commits are co-authored with Claude models.',
          ko: '사이드킥은 주로 Claude Code 같은 AI 코딩 에이전트를 병렬로 돌리며 만들었습니다. 커밋의 약 절반이 Claude 모델과의 공동 작성입니다.',
        },
        {
          type: 'p',
          en: 'Speed brought a new kind of bug: UI I had removed kept coming back. Parallel agents started from different base commits, merges asked for a union of old and new, and the tests still protected the old behaviour. Green tests said nothing about whether the product was current.',
          ko: '속도가 붙자 새로운 종류의 버그가 생겼습니다. 지운 UI가 계속 돌아왔습니다. 병렬 에이전트가 서로 다른 기준 커밋에서 출발했고, 병합 지시는 옛것과 새것을 모두 살리라고 했고, 테스트는 옛 동작을 지키고 있었습니다. 테스트 통과는 제품이 최신이라는 증거가 아니었습니다.',
        },
        {
          type: 'sketch',
          scene: 'p08-parallel',
          alt: {
            en: 'Git sketch: on main, a red commit marks “old button removed”. Three agents branch from commits before the removal and merge back later. A dashed “old button” reappears on main, labelled “it’s back”, next to a green check: tests pass.',
            ko: 'Git 스케치: main의 빨간 커밋에 “옛 버튼 삭제”라고 적혀 있다. 에이전트 셋이 삭제 이전 커밋에서 갈라져 나중에 다시 합쳐지고, main에 점선으로 그린 “옛 버튼”이 “다시 나타남”이라는 메모와 함께 돌아온다. 옆에는 초록 체크와 “테스트 통과”.',
          },
        },
        {
          type: 'p',
          en: 'The fix was a release line with four rules.',
          ko: '해결책은 네 가지 규칙으로 된 릴리스 라인이었습니다.',
        },
        {
          type: 'list',
          items: [
            { en: '**One pinned base.** Every agent works in an isolated worktree created from the same commit.', ko: '**하나의 고정된 기준.** 모든 에이전트는 같은 커밋에서 만든 격리 worktree에서 일합니다.' },
            { en: '**Tests for what’s gone.** Anything removed gets a test that proves it stays removed.', ko: '**없앤 것에 대한 테스트.** 지운 것에는 계속 지워져 있음을 증명하는 테스트를 붙입니다.' },
            { en: '**History is evidence, not a base.** Old branches are read for reference; only minimal changes are carried forward.', ko: '**과거는 근거일 뿐 기준이 아닙니다.** 옛 브랜치는 참고용으로만 읽고, 최소한의 변경만 앞으로 옮깁니다.' },
            { en: '**Workers never deploy.** Only one verified commit on main is released, one release at a time.', ko: '**작업 에이전트는 배포하지 않습니다.** main의 검증된 커밋 하나만, 한 번에 하나씩 배포합니다.' },
          ],
        },
        {
          type: 'sketch',
          scene: 'p08-release',
          alt: {
            en: 'Release-line sketch with four numbered rules: a pinned base commit on main; three agents in dashed worktrees branching from that same commit, each with a test that a removed item stays removed; an old branch read through a magnifier; and a locked gate before a single release.',
            ko: '번호가 붙은 네 가지 규칙의 릴리스 라인 스케치: main의 고정된 기준 커밋, 같은 커밋에서 갈라진 점선 worktree 안의 에이전트 셋과 각자의 “지운 것 유지” 테스트, 돋보기로 읽기만 하는 옛 브랜치, 배포 하나 앞에 놓인 잠긴 관문.',
          },
        },
      ],
    },
  ],
  decisions: [
    {
      title: { en: 'Approval before anything goes out', ko: '밖으로 나가기 전에는 반드시 승인' },
      why: {
        en: 'Trust is the product. People delegate more once they know nothing is posted, sent or spent behind their back. It is less automatic than some tools promise, on purpose.',
        ko: '신뢰가 곧 제품입니다. 몰래 게시·전송·결제되는 일이 없다는 걸 알면 사람들은 더 많이 맡깁니다. 일부 도구가 내세우는 것보다 덜 자동화돼 있지만, 의도한 선택입니다.',
      },
    },
    {
      title: { en: 'One isolated runtime per user', ko: '사용자마다 격리된 런타임' },
      why: {
        en: 'Agents run code and keep personal memory. Isolation had to fail closed, even though a shared service would have been simpler to run.',
        ko: '에이전트는 코드를 실행하고 개인 메모리를 가집니다. 공유 서비스가 운영하기는 더 쉬웠겠지만, 격리에 문제가 생겨도 다른 사용자의 데이터에는 닿지 않아야 했습니다.',
      },
    },
  ],
  results: {
    heading: { en: 'Where it is now', ko: '현재 상태' },
    blocks: [
      {
        type: 'p',
        en: 'Sidekick is in closed beta on TestFlight, and I use it myself. The first cohort tests the two numbers that matter: a first real result within ten minutes, and a second real task within seven days.',
        ko: '사이드킥은 TestFlight 비공개 베타 단계이고, 저도 직접 씁니다. 첫 사용자 그룹으로 중요한 두 숫자를 검증합니다. 10분 안의 첫 실제 결과, 7일 안의 두 번째 실제 작업입니다.',
      },
      {
        type: 'sketch',
        scene: 'p08-scale',
        alt: {
          en: 'Four tiles: 1,900+ commits in three months (a line of commit dots), 1,600+ merged pull requests (a merge), 5,600+ backend tests (rows of check marks), about 50% of commits co-authored with Claude (a half-filled circle).',
          ko: '타일 네 개: 3개월간 커밋 1,900개 이상(커밋 점이 이어진 선), 머지된 PR 1,600개 이상(병합), 백엔드 테스트 5,600개 이상(체크 표시 줄), Claude 공동 작성 커밋 약 50%(반쯤 칠한 원).',
        },
      },
    ],
  },
  learned: {
    quote: {
      en: 'With AI agents, writing code stops being the bottleneck. Knowing which code is current becomes the job.',
      ko: 'AI 에이전트와 일하면 코드 작성은 더 이상 병목이 아닙니다. 어떤 코드가 최신인지 아는 것이 일이 됩니다.',
    },
    items: [
      { en: '**Keep the kinds of evidence apart.** Passing tests, a working install, production behaviour and store review are four different claims.', ko: '**증거의 종류를 나눕니다.** 테스트 통과, 설치된 앱의 동작, 운영 환경의 동작, 스토어 심사는 서로 다른 네 가지 주장입니다.' },
      { en: '**PM habits carry over.** Defining activation and retention before writing code kept a fast solo project pointed at users.', ko: '**PM 습관은 그대로 통합니다.** 코드를 쓰기 전에 활성화와 리텐션을 정해 둔 덕분에, 빠르게 움직이는 1인 프로젝트도 사용자에게서 벗어나지 않았습니다.' },
    ],
  },
  sources: [
    { publisher: 'Sidekick', title: 'sidekickagent.app', date: '2026', url: 'https://sidekickagent.app/' },
  ],
};
