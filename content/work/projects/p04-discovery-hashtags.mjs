import { COMPANY, ROLE } from '../shared.mjs';

export default {
  id: 'P-04',
  slug: 'discovery-hashtags',
  company: 'SOOP',
  title: { en: 'Personalized Discovery & Hashtag System', ko: '개인화 추천 · 해시태그 시스템' },
  dek: {
    en: 'Rebalancing a homepage that only showed the already-popular, and rebuilding tags so the long tail of streams could be found.',
    ko: '이미 인기 있는 방송만 보여주던 홈을 다시 균형 잡고, 태그 체계를 새로 만들어 롱테일 방송이 발견되도록 한 프로젝트.',
  },
  card: {
    en: 'ML‑assisted classification surfacing relevant mid‑tier creators by viewing history and intent signals. Paired with a hashtag taxonomy that improved average session depth.',
    ko: '시청 이력·인텐트 시그널을 활용한 ML 기반 분류로 미드티어 크리에이터를 노출. 해시태그 분류 체계와 결합해 세션 깊이를 개선.',
  },
  kpis: [
    { value: '+2.3×', label: { en: 'Homepage CTR', ko: '홈 클릭률' }, cardLabel: 'Homepage CTR' },
    { value: '+170%', label: { en: 'Session engagement', ko: '세션 참여' }, cardLabel: 'Engagement' },
    { value: '10 → 40', label: { en: 'Avg. concurrent viewers, 1,000+ streamers', ko: '스트리머 1,000명+ 평균 동시 시청자' }, card: false },
    { value: '+180%', label: { en: 'Content search CTR', ko: '콘텐츠 검색 클릭률' }, card: false },
  ],
  stack: ['Python', 'Elasticsearch', 'Recommendation', 'Data Viz'],
  meta: {
    company: COMPANY,
    role: ROLE,
    scope: {
      en: 'Homepage recommendation logic and UI, hashtag taxonomy and tag IDs, search auto-suggest, creator-facing growth guidance',
      ko: '홈 추천 로직과 UI, 해시태그 체계와 태그 ID, 검색 자동 추천, 크리에이터 대상 성장 가이드',
    },
  },
  hero: 'discovery',
  heroCaption: {
    en: 'The discovery pipeline, reconstructed. Behavioral and tag signals fill several candidate pools; a ranking step keeps relevance first while spreading exposure beyond the top channels.',
    ko: '추천 파이프라인 재구성도. 행동 시그널과 태그 시그널로 여러 후보 풀을 채우고, 랭킹 단계에서 관련도를 우선하되 노출이 상위 채널에만 몰리지 않게 분산합니다.',
  },
  tldr: [
    {
      en: 'The homepage leaned on already-popular broadcasts, so most viewers never saw the mid-tier streamers who made up the bulk of the platform — and those streamers had no path to be found.',
      ko: '홈은 이미 인기 있는 방송에 기대고 있었고, 그래서 대부분의 시청자는 플랫폼의 다수를 차지하는 미드티어 스트리머를 보지 못했습니다. 그 스트리머들에게도 발견될 길이 없었습니다.',
    },
    {
      en: 'We redesigned homepage recommendations around viewing history and intent signals, and rebuilt hashtags with unique tag IDs and better auto-suggest so classification and search actually worked.',
      ko: '시청 이력과 인텐트 시그널을 중심으로 홈 추천을 다시 설계하고, 해시태그에 고유 태그 ID를 부여하고 자동 추천을 개선해 분류와 검색이 제대로 작동하게 했습니다.',
    },
    {
      en: 'Homepage CTR rose **2.3×** and session engagement **170%**; average concurrent viewers for 1,000+ mid-tier streamers went from **10 to 40**; content search CTR rose **180%**.',
      ko: '홈 클릭률은 **2.3배**, 세션 참여는 **170%** 늘었고, 미드티어 스트리머 1,000명 이상의 평균 동시 시청자는 **10명에서 40명**이 됐으며, 콘텐츠 검색 클릭률은 **180%** 올랐습니다.',
    },
  ],
  sections: [
    {
      id: 'context',
      heading: { en: 'Context', ko: '배경' },
      blocks: [
        {
          type: 'p',
          en: 'A live platform has a harsh discovery problem: thousands of broadcasts are on at once, each one disappears when it ends, and viewers default to whatever already has the biggest audience. SOOP had more than 14,000 active streamers in 2024,[^1] and the discovery surfaces had evolved piece by piece — tags on posts in 2019,[^2] a new home and personalized search in 2021.[^3][^4]',
          ko: '라이브 플랫폼의 발견 문제는 가혹합니다. 수천 개의 방송이 동시에 켜져 있고, 방송이 끝나면 사라지며, 시청자는 이미 시청자가 가장 많은 방송으로 향합니다. 2024년 SOOP의 활동 스트리머는 1만 4천 명이 넘었고,[^1] 발견 기능은 조금씩 발전해 왔습니다. 2019년 게시글 태그,[^2] 2021년 홈 개편과 개인화 검색이 그 예입니다.[^3][^4]',
        },
        {
          type: 'p',
          en: 'Popularity is a reasonable default signal, but used alone it becomes a loop: the top channels get the exposure, which keeps them on top. The mid-tier — where most streamers live and where retention is decided — stays invisible.',
          ko: '인기는 합리적인 기본 시그널이지만, 그것만 쓰면 순환 고리가 됩니다. 상위 채널이 노출을 받고, 그 노출이 다시 그들을 상위에 머물게 합니다. 대부분의 스트리머가 속해 있고 리텐션이 결정되는 미드티어는 계속 보이지 않습니다.',
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
            { en: '**Over-concentrated exposure.** The homepage mostly showed broadcasts that were already winning.', ko: '**노출 쏠림.** 홈에는 주로 이미 잘되는 방송이 걸렸습니다.' },
            { en: '**Weak relevance.** Recommendations said little about what a given viewer actually watched or wanted.', ko: '**약한 관련도.** 추천이 시청자가 실제로 보거나 원하는 것을 거의 반영하지 못했습니다.' },
            { en: '**Unstructured tags.** Free-text hashtags fragmented into spelling variants, so the same topic split into many small, unsearchable tags.', ko: '**구조 없는 태그.** 자유 입력 해시태그는 표기가 제각각이라 같은 주제가 여러 작은 태그로 쪼개졌고, 검색되지 않았습니다.' },
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
              title: { en: 'Relevance from behavior', ko: '행동에서 관련도 찾기' },
              body: {
                en: 'We used viewing history and intent signals to classify what each viewer was looking for, and matched them with relevant streamers instead of the global top list.',
                ko: '시청 이력과 인텐트 시그널로 시청자가 무엇을 찾는지 분류하고, 전체 인기 순위 대신 관련 있는 스트리머와 연결했습니다.',
              },
            },
            {
              title: { en: 'Spread exposure on purpose', ko: '의도적으로 노출 분산' },
              body: {
                en: 'The homepage recommendation and UI flow were redesigned to reduce over-dependence on already-popular broadcasts and give mid-tier creators real slots.',
                ko: '홈 추천과 UI 흐름을 다시 설계해 이미 인기 있는 방송에 대한 과의존을 줄이고, 미드티어 크리에이터에게 실제 노출 자리를 줬습니다.',
              },
            },
            {
              title: { en: 'Give tags an identity', ko: '태그에 고유 ID 부여' },
              body: {
                en: 'Each hashtag got a unique tag ID, with improved auto-suggest steering creators to existing tags, so classification and search accuracy improved together.',
                ko: '해시태그마다 고유 태그 ID를 부여하고, 자동 추천을 개선해 크리에이터가 기존 태그를 쓰도록 유도했습니다. 분류 정확도와 검색 정확도가 함께 좋아졌습니다.',
              },
            },
            {
              title: { en: 'Close the loop with creators', ko: '크리에이터와 피드백 루프' },
              body: {
                en: 'Behavioral insights from the system became growth recommendations for partner streamers — which tags and formats their audiences responded to.',
                ko: '시스템에서 얻은 행동 인사이트를 파트너 스트리머를 위한 성장 가이드로 바꿨습니다. 어떤 태그와 형식에 시청자가 반응하는지 알려주는 방식입니다.',
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
          title: { en: 'Relevance first, then spread exposure', ko: '관련도 우선, 그다음 노출 분산' },
          options: {
            en: 'Rank purely by popularity, force a fixed quota of small channels, or rank by relevance while deliberately widening who can appear.',
            ko: '인기순으로만 정렬할지, 소형 채널에 고정 할당을 줄지, 관련도로 정렬하되 노출 대상을 의도적으로 넓힐지.',
          },
          choice: { en: 'Relevance-led ranking with broader candidate pools.', ko: '관련도 중심 랭킹과 넓어진 후보 풀.' },
          why: {
            en: 'A quota shows viewers streams they don’t care about, which hurts everyone. Relevance keeps viewers clicking; wider pools make sure the relevant match can be a mid-tier streamer.',
            ko: '고정 할당은 시청자가 관심 없는 방송을 보여줘 모두에게 손해입니다. 관련도는 클릭을 유지하고, 넓어진 후보 풀은 관련 있는 방송이 미드티어일 수 있게 합니다.',
          },
        },
        {
          type: 'decision',
          title: { en: 'Structure tags instead of adding more of them', ko: '태그를 늘리는 대신 구조화' },
          options: {
            en: 'Keep free-text tags and clean them up after the fact, or give each tag a stable ID and guide input at creation.',
            ko: '자유 입력 태그를 유지하고 사후 정리할지, 태그마다 고정 ID를 주고 입력 시점에 유도할지.',
          },
          choice: { en: 'Stable tag IDs with auto-suggest at input.', ko: '고정 태그 ID와 입력 시 자동 추천.' },
          why: {
            en: 'Fixing tags upstream means every downstream use — classification, search, recommendations — inherits the improvement.',
            ko: '입력 단계에서 태그를 바로잡으면 분류·검색·추천 등 이후 모든 활용처가 그 개선을 물려받습니다.',
          },
          tradeoff: {
            en: 'Some creative freedom in tagging, in exchange for findability.',
            ko: '태그 작성의 자유도를 일부 내주고 발견 가능성을 얻었습니다.',
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
            { value: '+2.3×', label: { en: 'Homepage click-through rate', ko: '홈 클릭률' } },
            { value: '+170%', label: { en: 'Session engagement', ko: '세션 참여' } },
            { value: '10 → 40', label: { en: 'Average concurrent viewers for 1,000+ mid-tier streamers', ko: '미드티어 스트리머 1,000명+ 평균 동시 시청자' } },
            { value: '+35%', label: { en: 'New-user inflow', ko: '신규 유저 유입' } },
            { value: '+180%', label: { en: 'Content search CTR after the hashtag rebuild', ko: '해시태그 개편 후 콘텐츠 검색 클릭률' } },
          ],
        },
        { type: 'figure', figure: 'discoveryImpact', caption: { en: 'The metric that mattered most to creators: viewers per broadcast for the mid-tier.', ko: '크리에이터에게 가장 중요했던 지표: 미드티어 방송당 시청자 수.' } },
        {
          type: 'p',
          en: 'The platform has kept moving in this direction: after the 2024 rebrand SOOP added an explore menu,[^5] and in 2025 it launched an AI assistant that tags live streams automatically and personalizes recommendations.[^6]',
          ko: '플랫폼은 이후에도 같은 방향으로 움직였습니다. 2024년 리브랜딩 때 탐색 메뉴가 추가됐고,[^5] 2025년에는 라이브 방송에 자동으로 태그를 달고 추천을 개인화하는 AI 기능이 출시됐습니다.[^6]',
        },
      ],
    },
    {
      id: 'learned',
      heading: { en: 'What I learned', ko: '배운 점' },
      blocks: [
        {
          type: 'quote',
          en: 'Discovery is a supply-side product. Every slot you give the top channel is a slot a new creator doesn’t get.',
          ko: '발견은 공급자를 위한 제품이기도 합니다. 상위 채널에 준 노출 한 칸은 신규 크리에이터가 받지 못한 한 칸입니다.',
        },
        {
          type: 'list',
          items: [
            { en: '**Pick a creator-side metric.** CTR says viewers liked the homepage; viewers per mid-tier broadcast says the ecosystem got healthier.', ko: '**크리에이터 쪽 지표를 고르세요.** 클릭률은 시청자가 홈을 좋아했다는 뜻이고, 미드티어 방송당 시청자는 생태계가 건강해졌다는 뜻입니다.' },
            { en: '**Metadata is infrastructure.** The tag rebuild looked like housekeeping and produced one of the biggest lifts.', ko: '**메타데이터는 인프라입니다.** 태그 개편은 정리 작업처럼 보였지만 가장 큰 개선 중 하나를 만들었습니다.' },
          ],
        },
      ],
    },
  ],
  sources: [
    { publisher: 'Xportsnews', title: 'SOOP active streamers and new-streamer growth', date: 'Aug 29, 2024', url: 'https://www.xportsnews.com/article/1898976' },
    { publisher: 'AfreecaTV notice', title: '방송국 게시글 태그 기능 오픈', date: 'Jul 25, 2019', url: 'https://afwbbs1.sooplive.com/app/index.php?board=notice&b_no=6377&control=view' },
    { publisher: 'AfreecaTV notice', title: '홈·메뉴 개편 안내 (LIVE → 홈, 상영관)', date: 'Jun 2, 2021', url: 'https://afwbbs1.sooplive.com/app/index.php?board=notice&b_no=7445&control=view' },
    { publisher: 'AfreecaTV notice', title: '검색 개편 — 사용 이력 기반 개인화 결과', date: 'Sep 1, 2021', url: 'https://afwbbs1.sooplive.com/app/index.php?board=notice&b_no=7613&control=view' },
    { publisher: 'Newsis', title: 'AfreecaTV becomes SOOP; new explore menu', date: 'Oct 15, 2024', url: 'https://mobile.newsis.com/view/NISX20241015_0002920850' },
    { publisher: 'Financial News', title: 'SOOP opens AI assistant SOOPi with live auto-tagging', date: 'Apr 30, 2025', url: 'https://www.fnnews.com/news/202504301553583274' },
  ],
};
