import { BarChart3, CheckCircle2, ClipboardCheck, FileText, Megaphone, PanelsTopLeft, PenLine, Rocket, Search, ShoppingBag, Sparkles, Video } from 'lucide-react';

export const workflow = [
  {
    key: 'team',
    label: '팀 구성',
    title: '요청을 이해하고 필요한 역할을 먼저 구성합니다.',
    body: '목표와 조건을 정리한 뒤 조사, 기획, 작성, 검토 역할을 나눕니다.',
  },
  {
    key: 'progress',
    label: '작업 진행',
    title: '각자의 일을 진행하고 다음 단계로 결과를 넘깁니다.',
    body: '무엇이 끝났고 무엇이 진행 중인지 프로젝트 안에서 이어집니다.',
  },
  {
    key: 'results',
    label: '결과 정리',
    title: '결정이 필요한 순간과 읽기 좋은 결과만 남깁니다.',
    body: '확인, 승인, 후속 요청을 한 화면에서 이어갈 수 있습니다.',
  },
] as const;

export const projects = [
  {
    key: 'youtube',
    label: '유튜브',
    eyebrow: '채널 성장 프로젝트',
    title: '다음 영상까지\n하나의 흐름으로',
    description: '채널 진단부터 검색, 분석, 대본, 스토리보드와 배포 준비까지 이어집니다.',
    icon: Video,
    steps: ['채널 진단', '검색 수요', '경쟁 분석', '대본', '스토리보드', '배포'],
    accent: '#eadcff',
  },
  {
    key: 'sourcing',
    label: '상품 소싱',
    eyebrow: '후보 비교 프로젝트',
    title: '검색과 비교를\n선정 근거까지',
    description: '후보를 찾고 가격과 마진을 비교해 선택할 수 있는 결과로 정리합니다.',
    icon: ShoppingBag,
    steps: ['후보 검색', '가격 비교', '마진 계산', '리스크 확인', '후보 선정'],
    accent: '#d9f3e7',
  },
  {
    key: 'launch',
    label: '신제품 출시',
    eyebrow: '출시 준비 프로젝트',
    title: '조사에서\n런칭페이지까지',
    description: '시장 조사와 포지셔닝을 바탕으로 카피, 광고와 랜딩페이지 준비를 연결합니다.',
    icon: Rocket,
    steps: ['시장 조사', '포지셔닝', '카피', '광고', '랜딩페이지', '출시 점검'],
    accent: '#ffe7b3',
  },
] as const;

export const agents = [
  { label: '리서처', icon: Search },
  { label: '분석가', icon: BarChart3 },
  { label: '작가', icon: PenLine },
  { label: '스토리보드', icon: PanelsTopLeft },
  { label: '소싱', icon: ShoppingBag },
  { label: '광고', icon: Megaphone },
  { label: '검수', icon: ClipboardCheck },
  { label: '배포', icon: Rocket },
] as const;

export const approvalCards = [
  { label: '외부 전송 전 확인', detail: '메시지와 게시물은 보내기 전에 확인합니다.' },
  { label: '결제가 필요한 순간 알림', detail: '비용이 발생하는 행동은 먼저 알려드립니다.' },
  { label: '공개 전 최종 검토', detail: '외부에 공개되는 결과는 승인 뒤 진행합니다.' },
  { label: '근거와 함께 제안', detail: '선택이 필요한 이유를 결과와 함께 정리합니다.' },
  { label: '결정 뒤 다음 단계 연결', detail: '승인된 내용만 다음 업무로 이어갑니다.' },
] as const;

export const features = [
  {
    key: 'voice',
    title: '말로 맡기기',
    body: '앱 안에서 말하면 업무와 조건으로 정리합니다.',
    icon: Sparkles,
  },
  {
    key: 'ask',
    title: 'Sidekick에게 묻기',
    body: '지금 확인할 일과 다음 행동을 바로 물어보세요.',
    icon: FileText,
  },
  {
    key: 'projects',
    title: '모든 프로젝트 한곳에',
    body: '진행, 승인, 완료 결과를 프로젝트별로 다시 엽니다.',
    icon: CheckCircle2,
  },
] as const;
