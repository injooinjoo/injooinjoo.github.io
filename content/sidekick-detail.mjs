// Editorial synthesis of source and public-web checks, 2026-10-21.
// Design intent, source implementation and public operating evidence stay distinct.
const b=(ko,en)=>({ko,en});
export const sidekickDetail={
 problem:[
  b('유튜브나 블로그를 시작하려면 주제를 정하는 것 외에도 자료 조사, 초안 작성, 수정, 발행 준비와 다음 소재 찾기를 계속해야 합니다. 한 번 좋은 답변을 받는 것보다, 그다음 일을 다시 맡길 수 있는 구조가 필요했습니다.','Starting a YouTube channel or blog means ongoing research, drafting, revision, publishing preparation and finding the next topic. A useful answer matters, but so does being able to delegate the next piece of work.'),
  b('AI 실행 도구가 가진 기능을 그대로 나열하면 사용자는 서버와 연결, 도구 설정부터 이해해야 합니다. 사이드킥에서는 그 진입점을 “어떤 일을 시작하고 싶은가”로 바꾸고, 필요한 조건만 묻고 검토할 수 있는 결과로 돌아오게 설계했습니다.','Exposing an execution tool directly asks users to understand servers, connections and tool settings first. Sidekick begins with the work they want to start, asks for relevant conditions, and brings them back to something they can review.')
 ],
 journey:[
  b('예를 들어 “유튜브를 시작하고 싶다”고 하면 먼저 채널 보유 여부, 주제와 대상, 준비된 자료처럼 출발에 필요한 조건을 정리합니다. 서비스 연결이 필요할 때는 별도의 연결과 권한 확인으로 이어집니다. 연결하지 않은 채널을 이미 분석한 것처럼 보여주지 않습니다.','For a request to start a YouTube channel, the flow establishes whether a channel exists, its topic and audience, and available materials. Required services lead to a separate connection and permission check. An unconnected channel is not presented as already analyzed.'),
  b('첫 결과는 주제 후보나 구성안·대본·원고처럼 읽고 고칠 수 있는 형태여야 합니다. 사용자는 같은 대화에서 방향을 바꾸거나 추가 질문에 답합니다.','The first output should be reviewable: topic options, an outline, script or article draft. Users revise the direction or answer follow-up questions in the same conversation.')
 ],
 objects:[
  b('AI 직원은 누가 맡는지, 루틴은 어떤 방법으로 일할지, 예약은 언제 시작할지, 실행 회차는 이번에 실제로 무엇이 일어났는지를 표현합니다. 이 객체를 구분해야 루틴 저장을 실행 완료로, 과거 결과를 현재 진행 상황으로 오해하지 않습니다.','An AI employee represents who owns work; a routine defines how; a schedule defines when; and a run records what actually happened this time. These objects keep a saved definition from appearing as a completed run, or an old result as current progress.'),
  b('운영 준비, 콘텐츠 제작·발행, 성과 확인·개선도 역할이 다릅니다. 처음 정한 방향과 품질 기준이 검수에 이어지고, 확인된 발행 기록과 지표가 다음 소재에 반영되는 구조를 다룹니다.','Initial setup, production and publishing, and performance review serve different purposes. Direction and quality standards inform review; verified publishing records and metrics can inform the next topic.')
 ],
 states:[
  b('대화는 사용자의 입력, AI의 작업 과정, 결과물, 답변·승인이 필요한 상태를 구분합니다. 상태는 관측된 실행과 서버 응답을 바탕으로 표현하고, 추가 질문이나 연결이 필요한 순간에는 다음 행동을 알려줍니다. 근거 없는 진행률로 기다림을 채우지 않는 것이 중요한 판단이었습니다.','The conversation distinguishes user messages, work activity, outputs, and states needing an answer or approval. Observed execution and server responses drive the display; questions and missing connections explain the next action. An invented percentage is not used to fill waiting time.'),
  b('프로젝트를 바꾼 뒤 도착한 응답이 새 화면을 덮지 않게 하고, 실패·중단 뒤에는 원래 업무의 대화와 결과를 따라 돌아오게 합니다. 결과도 모두 같은 말풍선으로 처리하지 않고, 문서·이미지·영상 등 산출물의 형태에 맞춰 열어보도록 구성했습니다.','Late responses must not overwrite a newly selected project. Failure and interruption lead back to the original work conversation and results. Documents, images and videos use suitable output views instead of forcing every result into the same chat bubble.')
 ],
 approval:[
  b('초안이 준비됐다는 것과 외부에 게시·전송됐다는 것은 다른 사실입니다. 사용자는 내용을 살펴 승인하거나 수정 요청·거절을 선택합니다. 승인·발행 확인 지점은 일반 작업 단계와 분리하고, 실제 외부 작업의 상태와 근거가 있어야 성공으로 표현합니다.','A prepared draft and an externally published or sent item are different facts. Users review, approve, request changes or decline. Approval and publishing checkpoints are distinct from ordinary work, and success requires evidence of the external action.'),
  b('같은 원칙을 연결 상태에도 적용합니다. 카탈로그에 서비스가 있다는 것, 로그인 화면을 마쳤다는 것, 실제 계정 연결이 검증됐다는 것은 서로 다른 단계입니다. 서버가 확인한 연결 상태와 외부 작업의 근거를 화면에 반영하도록 경계를 둡니다.','The same distinction applies to connections: a catalog entry, a completed login screen, and a verified account connection are separate stages. The interface reflects server-verified connection state and evidence of external work.')
 ],
 implementation:[
  b('모바일에서는 React Native·Expo로 목표 상담, 순차 질문, 직원과 루틴 관리, 진행·결과 카드와 승인 표면을 연결했습니다. Python·FastAPI 백엔드는 인증과 작업 상태, 결과 정규화, 권한과 사용량 관리를 맡도록 나눴습니다.','React Native and Expo connect goal intake, sequential questions, employees and routines, progress and output cards, and approval surfaces. The Python/FastAPI backend separates identity, task state, output normalization, permissions and usage accounting.'),
  b('Hermes의 대화·실행·기억·연결·예약 능력을 모바일의 사용자 언어와 업무 객체에 연결하는 데 초점을 뒀습니다. 내부 기능을 “기억·능력·서비스 연결·예약”으로 풀어내는 작업도 제품 구현의 일부였습니다.','The implementation adapts existing Hermes conversations, execution, memory, connections and scheduling to mobile language and work objects. Translating internals into memory, abilities, service connections and schedules is part of the product implementation.'),
  b('중앙 관리 계층과 사용자별 실행 환경의 책임을 나누고, Cloud Run·Supabase/PostgreSQL과 GKE 전용 런타임 구성을 다룹니다. 직원별 프로필·프로젝트 매핑과 런타임 전환에는 진행 중인 항목이 있어, 구성 코드와 실제 운영 반영·실기기 적용을 구분해 기록합니다.','The design separates central management from user execution environments, using Cloud Run, Supabase/PostgreSQL and GKE runtime configuration. Employee profiles, project mapping and runtime migration include ongoing work; source configuration is kept distinct from deployment and device evidence.')
 ],
 verification:[
  [b('공개 웹','Public web'),b('제품 소개와 클릭 가능한 예시 데모. 화면에 앱 출시 준비 상태와 샘플임을 안내합니다.','Product information and a clickable sample demo. The website describes the app as preparing for launch and labels samples.')],
  [b('문서·소스','Documents and source'),b('모바일 입력·진행·결과·승인 UI, 업무·예약·실행 상태, 백엔드와 Hermes 연계 및 전용 런타임 구성을 대조했습니다.','Mobile intake, activity, outputs and approvals; routine/schedule/run state; backend/Hermes integration and dedicated-runtime configuration were cross-checked.')],
  [b('진행 중인 전환','Ongoing transitions'),b('직원별 지속 프로필과 프로젝트 매핑, 실행·예약 연결의 일부 전환은 최신 구현 문서에서 진행 중으로 관리됩니다. 전부 완료됐다고 단정하지 않습니다.','Persistent employee profiles, project mapping and parts of execution/schedule integration remain migration work in current implementation notes.')],
  [b('별도 운영 확인','Separate operating evidence'),b('스토어 공개 출시, 실제 계정의 채널 연결·발행·상용 결제 성공, 푸시와 네이티브 기능의 실기기 적용은 이번 소개 작업에서 검증하지 않았습니다.','Public store release, real-account channel connections/publishing, commercial payment success, and device delivery of push/native features were not verified in this portfolio update.')]
 ],
 next:[
  b('다음 검증에서는 사용자가 실제 결과를 읽고 수정한 뒤 새 업무를 다시 맡기는지 확인해야 합니다. 첫 결과 확인, 다음 실제 업무, 공개 발행의 확인 근거와 실결제는 각각 따로 확인해야 합니다.','The next verification is whether users review and revise a real result, then delegate new work. First-result review, a subsequent real task, verified external publication and real payment each need their own proof.'),
  b('엔지니어링에서는 프로젝트·직원 매핑 전환 후 기존 대화·기억·연결이 올바르게 이어지는지, 중단 뒤 복구와 승인 중복 처리가 실제 배포·기기에서도 유지되는지 확인해야 합니다.','Engineering verification needs continuity of conversations, memory and connections after mapping changes, plus recovery and duplicate-approval handling on actual deployments and devices.')
 ]
};
