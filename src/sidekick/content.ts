export const requestOptions = [
  '경쟁사 콘텐츠를 조사하고 방향을 정리해줘',
  '판매할 상품을 찾아서 수익성을 비교해줘',
  '신제품 런칭을 준비하고 광고까지 만들어줘',
  '유튜브 채널을 키우고 다음 영상까지 만들어줘',
];

export const agentRoles = [
  { name: '서연', role: '전략', note: '채널 목표와 성장 방향' },
  { name: '지우', role: '리서치', note: '시장·검색 데이터 조사' },
  { name: '민서', role: '기획', note: '주제·대본·구성 정리' },
  { name: '하린', role: '비주얼', note: '스토리보드와 소재' },
  { name: '로아', role: '퍼블리싱', note: '업로드와 배포 확인' },
];

export const youtubeSteps = [
  { label: '채널 진단', detail: '최근 영상과 구독자 반응을 읽어요', state: '완료' },
  { label: '검색', detail: '지금 사람들이 찾는 주제를 모아요', state: '완료' },
  { label: '분석', detail: '경쟁 영상의 구조와 빈틈을 비교해요', state: '완료' },
  { label: '대본', detail: '채널 말투에 맞춰 초안을 작성해요', state: '진행 중' },
  { label: '스토리보드', detail: '장면과 필요한 비주얼을 정리해요', state: '다음' },
  { label: '배포', detail: '확인 후 업로드 일정을 준비해요', state: '다음' },
];

export const sourcingSteps = [
  { label: '검색', detail: '조건에 맞는 상품 38개 확인' },
  { label: '비교', detail: '리뷰·판매가·경쟁 강도 비교' },
  { label: '마진', detail: '수수료와 배송비 반영' },
  { label: '후보 선정', detail: '검토할 상품 3개로 정리' },
];

export const launchSteps = [
  { label: '조사', detail: '고객과 경쟁 제품 파악' },
  { label: '카피', detail: '핵심 메시지와 상세 문구' },
  { label: '광고', detail: '채널별 소재 구성' },
  { label: '랜딩페이지', detail: '출시용 페이지 초안' },
];
