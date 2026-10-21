// Verified against project sources and public deployments on 2026-10-21.
// Seoul: public /data/apartments.snapshot.json (407 complexes / 319 transactions),
// server/replay.js, server/d1-store.js; public gameplay verified.
// Yeon: backend/toss.mjs, toss-store.mjs, sketch.mjs; public billing config mode=test.
// Maju: src/lib/config.ts, src/workflows/payment.ts; public config payments=false, ai=false.
// Sinmyo: src/performance.js and lottery.js; Some: README and browser-memory prototype.
// English titles are descriptive translations; the Korean service names remain visible.
export const webProjects = [
  {
    id: 'seoul', name: '나도 서울 집좀 사자', english: 'Seoul Home Life Simulator',
    url: 'https://seoul-home-game.injoo.chatgpt.site', image: 'seoul.webp',
    alt: { ko: '서울 3D 지도에서 목표 아파트를 고르는 실제 게임 화면', en: 'Live game showing the 3D Seoul map and apartment goal selection' },
    intro: { ko: '서울에서 집을 산다는 목표를 월급·주거·경력·가족의 선택으로 풀어가는 인생 시뮬레이션.', en: 'A life simulation that turns buying a home in Seoul into choices about income, housing, career, and family.' },
    points: [
      { ko: '복잡한 주거·금융 조건을 읽는 부담을 줄이기 위해, 25개 구의 실제 경계를 3D 지도와 아파트 선택 경험으로 연결했습니다.', en: 'To make housing and finance easier to explore, actual boundaries of all 25 districts become a 3D map with selectable apartments.' },
      { ko: '시간과 행동에 따라 소득·생활비·대출·자산이 변하는 상태 모델로 경력 이동부터 은퇴까지 이어갑니다.', en: 'A state model recalculates income, living costs, loans, and assets as time and actions advance, connecting career moves to retirement.' },
      { ko: '완주 행동은 서버가 재계산하고 중복 집계를 막습니다. 같은 출발 조건·모드·규칙의 평균·P90·P99 자산 경로만 비교합니다.', en: 'The server replays completion actions and prevents duplicate counting. Asset paths compare mean, P90, and P99 only within matching start conditions, modes, and rules.' },
    ],
    tech: ['React', 'TypeScript', 'Three.js / R3F', 'D3 Geo', 'Sites / Workers', 'D1'],
    status: { ko: '공개 게임', en: 'Public game' },
    scope: { ko: '공식 등록 대단지 407개 중 매매 신고 연결 319개(2026-10-14 수집본). 공식 자료와 게임 가정을 구분하며, 실시간 시세·거래·대출 서비스는 제공하지 않습니다.', en: 'The 2026-10-14 snapshot covers 407 officially registered large complexes; 319 match reported sales. Official data and game assumptions are separated. No live prices, transactions, or lending services.' },
  },
  {
    id: 'sketch', name: '연, 스케치', english: 'Yeon, Sketch',
    url: 'https://sketch.zpzg.co.kr', image: 'sketch.webp',
    alt: { ko: '연, 스케치의 편지와 연필 스케치로 구성한 실제 첫 화면', en: 'Live Yeon, Sketch opening screen with a letter and pencil illustration' },
    intro: { ko: '말로 설명하기 어려운 이상형과 관계 취향을 시각적 설문과 세 장면의 이야기로 연결합니다.', en: 'A visual survey turns hard-to-describe romantic preferences into a story told across three scenes.' },
    points: [
      { ko: '19문항을 한 단계씩 묻고 선택에 맞춰 예시를 조정합니다. 얼굴 없는 연필 스케치 카드로 외모 취향을 고르게 했습니다.', en: 'A 19-question flow adapts examples to previous choices. Faceless pencil-sketch cards make appearance preferences easier to select.' },
      { ko: '답변을 첫 만남·가까워지는 사이·함께하는 하루로 엮습니다. 설정된 환경에서는 결제 주문에 같은 인물의 세 장면 생성과 장면별 PNG 저장을 연결합니다.', en: 'Answers shape a first meeting, a growing relationship, and an everyday moment. Configured environments connect paid orders to three images of the same character and per-scene PNG downloads.' },
      { ko: 'Toss 주문·승인·조회·취소와 전용 Redis 저장소를 분리해, 주문 상태와 결과를 다시 불러오는 흐름을 구현했습니다.', en: 'Toss order, approval, lookup, and cancellation APIs use dedicated Redis storage so orders and results can be recovered.' },
    ],
    tech: ['JavaScript', 'Node.js', 'Vercel Functions', 'Redis REST', 'Toss Payments', 'Playwright'],
    status: { ko: '공개 체험 · 결제 테스트', en: 'Public experience · test payments' },
    scope: { ko: '설문과 이야기 구성을 체험할 수 있습니다. 공개 화면은 결제 테스트·실제 청구 없음으로 안내합니다. 주문별 이미지 생성 코드는 설정에 의존하며, 실결제 운영을 뜻하지 않습니다. 이메일 발송은 미제공입니다.', en: 'Survey and story flow are available. The public site labels payments as tests with no actual charge. Per-order image generation depends on configuration; this does not establish live payment operation. Email delivery is unavailable.' },
  },
  {
    id: 'tarot', name: '마주 타로', english: 'Maju Tarot',
    url: 'https://tarot.zpzg.co.kr', image: 'tarot.webp',
    alt: { ko: '마주 타로의 한옥 다실과 가상 안내자가 등장하는 실제 상담 화면', en: 'Live Maju Tarot session in a hanok tea room with a fictional guide' },
    intro: { ko: '한옥 다실의 가상 안내자와 대화하고 직접 카드를 고르며 질문을 정리하는 타로 체험.', en: 'A tarot experience in a hanok tea room, where a fictional guide and hands-on card selection help frame a question.' },
    points: [
      { ko: '한 번에 질문 하나씩 진행하고 답변을 복원해, 상담 맥락을 잃지 않고 카드를 고르도록 설계했습니다.', en: 'One question per screen and restored answers preserve the context as users move into card selection.' },
      { ko: '직접 섞기·덱 나누기·세 장 선택·순차 공개를 자체 제작 메이저 22장과 연결했습니다. 카드 이동과 움직임 감소에서도 진행 순서를 유지합니다.', en: 'Shuffle, split, select three, and reveal in sequence using 22 original major arcana cards. Card movement and reduced-motion mode follow the same sequence.' },
      { ko: '구매 전 확인, 주문 재개, 미제공 취소를 결제 상태 모델과 Workflow 코드로 분리했습니다.', en: 'A payment state model and Workflow code separate purchase confirmation, order resumption, and cancellation before fulfillment.' },
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Zod', 'Workflow'],
    status: { ko: '카드 선택 체험 · 연동 준비', en: 'Card selection · integrations pending' },
    scope: { ko: '카드 선택·구매 안내까지 제공하며, 전용 AI 키와 PG 검증 미완료로 구매·AI 해석은 비활성입니다. 실시간 사람 상담이 아니며 가상 인물과 후기는 제작 콘텐츠입니다.', en: 'Card selection and purchase information are available. Purchase and AI readings are disabled pending dedicated AI credentials and PG verification. No live human consultation; the guide and testimonials are created content.' },
  },
  {
    id: 'lotto', name: '신묘당', english: 'Sinmyodang',
    url: 'https://lotto.zpzg.co.kr', image: 'lotto.webp',
    alt: { ko: '신묘당의 제작 영상과 문답이 표시된 실제 신당 화면', en: 'Live Sinmyodang shrine screen with the produced character video and dialogue' },
    intro: { ko: '직접 제작한 실사풍 AI 무녀 영상과 짧은 문답으로 이어지는 로또 번호 뽑기 엔터테인먼트.', en: 'Lottery-number entertainment combining produced photorealistic AI shaman videos with a short dialogue.' },
    points: [
      { ko: '인사와 부채 영상을 같은 인물·장면으로 이어갑니다. 사전 로딩과 마지막 프레임 유지로 전환 중 빈 화면을 줄이고 오디오 재생 제한에 대응했습니다.', en: 'Greeting and fan videos continue the same character and scene. Preloading and holding the last frame reduce blank transitions while handling browser audio restrictions.' },
      { ko: '1~45에서 중복 없는 6개 번호를 무작위로 뽑고 복사·기기 내 번호함으로 이어갑니다. 창작 체험담 이미지는 스크롤 입장 경험에 통합했습니다.', en: 'Six unique random numbers from 1–45 can be copied or saved locally. Created testimonial images form the scrolling entry experience.' },
    ],
    tech: ['JavaScript', 'HTML / CSS', 'Node.js', 'HTML5 Video', 'Playwright'],
    status: { ko: '공개 무료 체험', en: 'Public free experience' },
    scope: { ko: '무작위 번호 생성 엔터테인먼트로 당첨을 예측하지 않습니다. 외부 AI의 실시간 응답과 결제는 미연결이며, 체험담은 창작물입니다.', en: 'Random-number entertainment without winning predictions. No live external AI responses or payment integration. Testimonials are fictional.' },
  },
  {
    id: 'some', name: '썸의 마음확인하기', english: 'Some Heart Check',
    url: 'https://some.zpzg.co.kr', image: 'some.webp',
    alt: { ko: '썸의 마음확인하기의 실제 대화형 질문 화면', en: 'Live Some Heart Check conversational question screen' },
    intro: { ko: '관계 고민과 대화를 입력하고, 마음의 단서·보낼 말·다음 행동을 탐색하는 프런트엔드 프로토타입.', en: 'A frontend prototype for entering relationship concerns and conversations, then exploring clues, wording, and next steps.' },
    points: [
      { ko: '말풍선·타이핑·선택 애니메이션으로 한 단계씩 질문하고, 카톡 TXT·붙여넣기·스크린샷 미리보기를 하나의 입력 흐름으로 묶었습니다.', en: 'Chat bubbles, typing indicators, and selection animations guide stepwise questions. KakaoTalk TXT, pasted chats, and screenshot previews share one intake flow.' },
      { ko: '답 수정·이전 단계 복귀·구매 확인 체험·준비 실패 재시도로 중단과 복귀를 설계했습니다.', en: 'Answer editing, back navigation, a purchase-confirmation demo, and preparation retries support interruptions and recovery.' },
      { ko: '3탭 샘플 코칭에 문장 복사·인쇄·자료 삭제를 연결하고 키보드 접근과 움직임 감소를 지원합니다.', en: 'Three sample-coaching tabs connect to copy, print, and delete actions, with keyboard access and reduced-motion support.' },
    ],
    tech: ['JavaScript', 'HTML / CSS', 'Node.js', 'Playwright'],
    status: { ko: '공개 프런트엔드 프로토타입', en: 'Public frontend prototype' },
    scope: { ko: '결과는 고정 샘플로 입력 자료의 분석 결과가 아닙니다. AI·OCR·이메일·실결제는 미연결입니다. 입력은 브라우저 메모리에서만 처리하고 새로고침하면 사라집니다.', en: 'Results are fixed samples, not analysis of submitted material. AI, OCR, email, and real payments are not connected. Inputs stay in browser memory and disappear on reload.' },
  },
];
