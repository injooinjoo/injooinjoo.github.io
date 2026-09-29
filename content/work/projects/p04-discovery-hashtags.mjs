import { COMPANY, ROLE } from '../shared.mjs';

export default {
  id: 'P-04',
  slug: 'discovery-hashtags',
  company: 'SOOP',
  title: { en: 'Personalized Discovery & Hashtag System', ko: '개인화 추천 · 해시태그 시스템' },
  dek: {
    en: 'The home page mostly showed broadcasts that were already popular. We rebuilt recommendations around what each viewer watches, and gave tags stable IDs so smaller streams could be found.',
    ko: '홈에는 주로 이미 인기 있는 방송이 걸렸습니다. 시청자마다 무엇을 보는지를 중심으로 추천을 다시 만들고, 태그에 고정 ID를 붙여 작은 방송도 찾을 수 있게 했습니다.',
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
  hero: {
    scene: 'p04-hero',
    alt: {
      en: 'Sketch of two phone home screens. Before: a large crowned tile and rows of red tiles for the same top channels, with viewer counts in the thousands. After: a mix of colours and channels, some with a few dozen viewers.',
      ko: '휴대폰 홈 화면 두 개 스케치. 이전: 왕관을 쓴 큰 타일과 같은 상위 채널의 빨간 타일이 줄지어 있고 시청자 수는 수천 명. 이후: 색도 채널도 다양하고, 일부는 시청자가 수십 명인 방송.',
    },
    caption: {
      en: 'Same screen, different question: not “what is biggest?” but “what is this viewer likely to watch?”',
      ko: '같은 화면, 다른 질문. “무엇이 가장 큰가”가 아니라 “이 시청자는 무엇을 볼까”.',
    },
  },
  glance: {
    problem: {
      en: 'The home page leaned on already-popular broadcasts, so mid-tier streamers were rarely seen. Free-text tags split one topic into many spellings.',
      ko: '홈이 이미 인기 있는 방송에 기대고 있어 미드티어 스트리머는 거의 보이지 않았습니다. 자유 입력 태그는 한 주제를 여러 표기로 쪼갰습니다.',
    },
    did: {
      en: 'We ranked by what each viewer watches and looks for, widened the pool of candidates, and gave every hashtag a unique ID with auto-suggest.',
      ko: '시청자가 보고 찾는 것을 기준으로 순위를 매기고, 후보 풀을 넓히고, 해시태그마다 고유 ID와 자동 추천을 붙였습니다.',
    },
    result: {
      en: 'Homepage CTR rose **2.3×** and session engagement **170%**. Mid-tier streams averaged **40** concurrent viewers, up from **10**.',
      ko: '홈 클릭률은 **2.3배**, 세션 참여는 **170%** 늘었습니다. 미드티어 방송의 평균 동시 시청자는 **10명에서 40명**이 됐습니다.',
    },
  },
  chapters: [
    {
      id: 'loop',
      heading: { en: 'The popularity loop', ko: '인기의 순환' },
      blocks: [
        {
          type: 'p',
          en: 'Thousands of broadcasts run at once, and each disappears when it ends. SOOP had about 14,000 active streamers in 2024.[^4]',
          ko: '수천 개의 방송이 동시에 켜져 있고, 끝나면 사라집니다. 2024년 SOOP의 활동 스트리머는 약 1만 4천 명이었습니다.[^4]',
        },
        {
          type: 'p',
          en: 'Used alone, popularity becomes a loop: the top channels get the exposure that keeps them on top, and the mid-tier, where most streamers are, stays out of sight.',
          ko: '인기만 쓰면 순환이 됩니다. 상위 채널이 받은 노출이 그들을 계속 위에 두고, 대부분의 스트리머가 있는 미드티어는 보이지 않습니다.',
        },
        {
          type: 'sketch',
          scene: 'p04-loop',
          alt: {
            en: 'Sketch of a loop: exposure leads to viewers, viewers to ranking, ranking back to exposure, with a crowned streamer in the middle. Behind a dashed line, five mid-tier streamers are labelled “rarely shown”.',
            ko: '순환 스케치: 노출이 시청자로, 시청자가 순위로, 순위가 다시 노출로 이어지고 가운데에 왕관 쓴 스트리머가 있다. 점선 너머 미드티어 스트리머 다섯 명에 “거의 노출되지 않음”이라고 적혀 있다.',
          },
        },
        {
          type: 'p',
          en: 'In January 2023 the company said it would move from putting the most-watched streams first toward each viewer’s patterns and taste.[^2]',
          ko: '2023년 1월 회사는 가장 많이 본 방송을 위에 올리던 방식에서 시청자의 패턴과 취향을 반영하는 방식으로 바꾸겠다고 밝혔습니다.[^2]',
        },
      ],
    },
    {
      id: 'relevance',
      heading: { en: 'Relevance first, then reach', ko: '관련도 먼저, 그다음 노출' },
      blocks: [
        {
          type: 'p',
          en: 'We matched viewers to streamers using viewing history and intent signals instead of a global top list. Search already did this: from September 2021 it suggested terms and related content from each user’s viewing.[^1]',
          ko: '전체 인기 순위 대신 시청 이력과 인텐트 시그널로 시청자와 스트리머를 연결했습니다. 검색은 이미 그렇게 하고 있었습니다. 2021년 9월부터 사용 이력을 분석해 검색어와 연관 콘텐츠를 추천했습니다.[^1]',
        },
        {
          type: 'p',
          en: 'Candidates came from several pools, so the best match could be a mid-tier streamer. The personalised recommendation service MY+ launched in the first half of 2023.[^3]',
          ko: '후보는 여러 풀에서 나왔고, 그래서 가장 잘 맞는 방송이 미드티어일 수 있었습니다. 이용자 기반으로 콘텐츠를 추천하는 개인화 서비스 MY+는 2023년 상반기에 출시됐습니다.[^3]',
        },
        {
          type: 'sketch',
          scene: 'p04-pipeline',
          alt: {
            en: 'Pipeline sketch: three signals (watch history, search and intent, tags) feed three candidate pools (similar viewers, same tags, rising). The pools feed a ranked list of five, where the second item, a mid-tier streamer, is circled.',
            ko: '파이프라인 스케치: 시청 이력, 검색·의도, 태그라는 세 시그널이 비슷한 시청자, 같은 태그, 성장 중이라는 세 후보 풀로 들어가고, 후보 풀은 다섯 줄짜리 랭킹으로 이어진다. 두 번째 줄의 미드티어 스트리머에 동그라미가 쳐져 있다.',
          },
        },
      ],
    },
    {
      id: 'tags',
      heading: { en: 'One tag, one ID', ko: '태그 하나, ID 하나' },
      blocks: [
        {
          type: 'p',
          en: 'Hashtags were free text. One topic split into Korean, English and shortened spellings, each too small to show up in search.',
          ko: '해시태그는 자유 입력이었습니다. 한 주제가 한글, 영어, 줄임말로 쪼개졌고, 어느 쪽도 검색에 잡힐 만큼 크지 않았습니다.',
        },
        {
          type: 'p',
          en: 'We gave every tag a unique ID and used auto-suggest to steer creators to existing tags. Classification, search and recommendations all inherited the fix.',
          ko: '태그마다 고유 ID를 붙이고, 입력하는 순간 자동 추천으로 기존 태그를 쓰도록 유도했습니다. 분류, 검색, 추천이 모두 그 개선을 이어받았습니다.',
        },
        {
          type: 'sketch',
          scene: 'p04-tags',
          alt: {
            en: 'Sketch: six tags for the same game in different spellings (#롤, #LoL, #리그오브레전드, #lol, #리그 오브 레전드, #League) funnel into one tag with a tag ID. Below, typing “리그” brings up the existing tag as a suggestion.',
            ko: '스케치: 같은 게임을 가리키는 여섯 가지 표기의 태그(#롤, #LoL, #리그오브레전드, #lol, #리그 오브 레전드, #League)가 태그 ID가 붙은 태그 하나로 모인다. 아래에는 “리그”를 입력하자 기존 태그가 추천된다.',
          },
        },
      ],
    },
  ],
  decisions: [
    {
      title: { en: 'Relevance first, then a wider pool', ko: '관련도 먼저, 후보는 넓게' },
      why: {
        en: 'A fixed quota for small channels shows viewers streams they don’t want. Relevance keeps viewers clicking; wider pools let the match be a mid-tier streamer.',
        ko: '소형 채널 고정 할당은 시청자에게 원하지 않는 방송을 보여줍니다. 관련도는 클릭을 지키고, 넓어진 후보 풀은 그 방송이 미드티어일 수 있게 합니다.',
      },
    },
    {
      title: { en: 'Fix tags at input', ko: '태그는 입력 단계에서 바로잡기' },
      why: {
        en: 'Cleaning tags after the fact never ends. Fixing them upstream improved every later use at once, at the cost of some freedom in how creators tag.',
        ko: '태그를 사후에 정리하는 일은 끝이 없습니다. 입력 단계에서 바로잡으니 이후 모든 활용처가 한 번에 좋아졌습니다. 대신 태그 작성의 자유도는 조금 줄었습니다.',
      },
    },
  ],
  results: {
    blocks: [
      {
        type: 'sketch',
        scene: 'p04-viewers',
        alt: {
          en: 'Sketch: a live mid-tier stream with 10 small viewers beneath it, next to the same stream with 40 viewers. Caption: average concurrent viewers across 1,000+ mid-tier streamers.',
          ko: '스케치: 시청자 10명이 모인 미드티어 라이브 방송과, 시청자 40명이 모인 같은 방송. 설명: 미드티어 스트리머 1,000명 이상의 평균 동시 시청자.',
        },
      },
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
      {
        type: 'p',
        en: 'By April 2025, SOOP’s AI assistant SOOPi was recommending live streams, VOD and notices to viewers.[^5]',
        ko: '2025년 4월에는 SOOP의 AI 비서 SOOPi가 시청자에게 라이브, VOD, 공지를 추천하고 있었습니다.[^5]',
      },
    ],
  },
  learned: {
    quote: {
      en: 'Discovery is a supply-side product too. Every slot given to the top channel is a slot a newer creator doesn’t get.',
      ko: '발견은 공급자를 위한 제품이기도 합니다. 상위 채널에 준 자리 하나는 새 크리에이터가 받지 못한 자리 하나입니다.',
    },
    items: [
      { en: '**Pick a creator-side metric.** CTR says viewers liked the home page. Viewers per mid-tier broadcast says the ecosystem got healthier.', ko: '**크리에이터 쪽 지표를 고릅니다.** 클릭률은 시청자가 홈을 좋아했다는 뜻이고, 미드티어 방송당 시청자는 생태계가 건강해졌다는 뜻입니다.' },
      { en: '**Metadata is infrastructure.** The tag rebuild looked like housekeeping and produced one of the largest lifts.', ko: '**메타데이터도 인프라입니다.** 태그 개편은 정리 작업처럼 보였지만 가장 큰 개선 중 하나를 만들었습니다.' },
    ],
  },
  sources: [
    { publisher: 'AfreecaTV notice', title: 'BJ 프로필 영역 등 통합검색 개선 안내', date: 'Sep 1, 2021', url: 'https://afwbbs1.sooplive.com/app/index.php?board=notice&b_no=7613&control=view' },
    { publisher: 'Financial News (파이낸셜뉴스)', title: '아프리카TV, 2023년 변화에 성공할 수 있을까?', date: 'Jan 4, 2023', url: 'https://www.fnnews.com/news/202301040500534047' },
    { publisher: 'Money Today (머니투데이)', title: '아프리카TV, 콘텐츠형 광고로 2분기 반등…하반기 글로벌 진출 밑작업', date: 'Jul 31, 2023', url: 'https://news.mt.co.kr/mtview.php?no=2023073111435859268' },
    { publisher: 'Xportsnews (엑스포츠뉴스)', title: 'SOOP, 신규 스트리머 지원으로 일자리 창출 기여…활동 스트리머 1.4만 명', date: 'Aug 29, 2024', url: 'https://www.xportsnews.com/article/1898976' },
    { publisher: 'Financial News (파이낸셜뉴스)', title: 'SOOP, AI 영상 비서 ‘SOOPi’에 버추얼 스트리머 적용', date: 'Apr 30, 2025', url: 'https://www.fnnews.com/news/202504301553583274' },
  ],
};
