// Sidekick README, docs/14_CURRENT_IMPLEMENTATION.md, mobile package.json,
// backend agent_action.py / hermes_runner.py and the public site checked 2026-10-21.
export const appProjects = [{
  id: 'sidekick', name: 'Sidekick · 사이드킥', english: 'Sidekick',
  url: 'https://sidekickagent.app', image: 'sidekick.webp',
  caption: {ko:'공개 제품 소개 페이지 실제 캡처 · 앱 실행 화면 아님 · 2026.10.21',en:'Actual public product-site capture · not a running app screen · 21 Oct 2026'},
  alt: {ko:'사이드킥 공개 제품 소개 페이지의 AI 팀 설명과 예시 데모',en:'Sidekick public product page showing the AI team introduction and sample demo'},
  intro: {ko:'유튜브·블로그 운영에 매일 시간을 쓰기 어려운 사용자를 위해, 목표를 AI 직원 팀의 반복 업무와 검토 가능한 결과로 연결하는 모바일 앱.',en:'A mobile app that turns content goals into recurring work for an AI team and reviewable results, for people without time to manage YouTube or blogs every day.'},
  points: [
    {ko:'목표와 주제를 묻는 대화에서 팀 구성·업무 실행·결과 카드로 이어지도록 설계했습니다. 사용자는 채팅에서 필요한 질문에 답하고 결과를 검토합니다.',en:'A conversation about goals and topics leads into team setup, task execution, and result cards. Users answer follow-up questions and review outputs in chat.'},
    {ko:'반복 루틴의 진행·중단·재개와 승인 요청을 상태로 관리합니다. 발행·전송 등 외부 작업은 사용자가 결과를 확인하고 승인하는 흐름에 연결했습니다.',en:'State flows track recurring work, interruptions, resumption, and approval requests. External actions such as publishing and sending connect to user review and approval.'},
    {ko:'모바일 UI와 실행·권한·사용량 관리를 분리하고, 사용자·프로젝트별 자료와 AI 실행 공간을 구분했습니다. Cloud Run 운영 계층과 GKE 전용 런타임 구성을 관리합니다.',en:'The mobile UI is separated from execution, permissions, and usage accounting. Data and AI execution spaces are scoped by user and project, with a Cloud Run control plane and GKE dedicated-runtime configuration.'},
  ],
  tech: ['React Native / Expo', 'JavaScript', 'Python / FastAPI', 'Supabase', 'PostgreSQL', 'Cloud Run', 'GKE / Hermes'],
  status: {ko:'앱 출시 준비 · 공개 예시 데모',en:'App launch preparation · public sample demo'},
  scope: {ko:'공개 웹에서는 제품 설명과 예시 데모를 제공합니다. 앱·백엔드 구현과 스토어 공개 출시, 외부 채널 실연동은 별개입니다. 이번 확인에서는 스토어 출시와 실제 계정의 발행·결제 성공을 검증하지 않았습니다.',en:'The public website offers product information and a sample demo. App/backend implementation, public store release, and real channel integrations are separate milestones. Store availability and publishing or payment success with real accounts were not verified in this review.'},
}];
