import {webProjects} from './web-projects.mjs';
import {appProjects} from './app-projects.mjs';
// Publication date belongs to these notes, not to the development period of each product.
const editorial = {
 seoul: {
  title:{ko:'집을 사고 싶은 마음을, 탐색할 수 있는 게임으로',en:'Turning the wish to buy a home into an explorable game'},
  problem:{ko:'집값 하나만으로는 서울에서의 삶을 설명하기 어렵습니다. 월급과 월세, 대출 상환, 이직과 가족 선택이 같은 자산 경로에 영향을 줍니다. 이 프로젝트가 다루는 질문은 “어느 집이 오를까”보다 “내 조건과 선택이 생활을 어떻게 바꿀까”입니다.',en:'A house price alone cannot explain life in Seoul. Salary, rent, loan payments, career changes, and family choices all affect the same asset path. The project asks how personal conditions and choices change daily life.'},
  decision:{ko:'지도에서 집을 고르는 행동을 계산과 생활 계획의 진입점으로 삼았습니다. 공간을 탐색하는 경험과 월별 정산을 연결하면, 숫자를 따로 읽는 대신 선택의 결과를 따라갈 수 있습니다. 완주 기록의 비교에서도 출발 조건과 규칙 버전을 맞춰야 같은 기준으로 읽을 수 있습니다.',en:'Choosing a home on the map becomes the entry point to financial calculations and life planning. Linking spatial exploration to monthly accounting makes consequences traceable. Completion comparisons also need matching starting conditions and rule versions to stay interpretable.'},
  next:{ko:'공식 자료를 갱신할 때 단지 매칭과 가격 미확인 상태를 다시 확인해야 합니다. 경제 규칙이나 출발 조건을 바꾸면 서버 재계산과 통계 집계 기준도 함께 검증해야 합니다.',en:'Data refreshes require checking complex matching and unknown-price states again. Changes to economic rules or starting conditions also require replay and cohort-aggregation checks.'}
 },
 sketch:{
  title:{ko:'이상형 설문을 세 장면의 이야기로 잇기',en:'Connecting a preference survey to a three-scene story'},
  problem:{ko:'좋아하는 사람의 분위기와 관계에서 편안함을 느끼는 순간은 짧은 텍스트만으로 고르기 어렵습니다. 질문에 답하는 시간이 결과와 동떨어진 입력 작업처럼 느껴지지 않도록, 시각적인 선택과 이야기를 한 흐름으로 묶었습니다.',en:'Atmosphere and emotional comfort are hard to select from short text labels alone. Visual choices and narrative are connected so answering questions feels like part of the experience rather than disconnected data entry.'},
  decision:{ko:'외모 선택에는 얼굴 없는 스케치를 사용하고, 관계에 관한 답은 첫 만남부터 함께하는 일상까지 이어지는 장면에 반영합니다. 생성 이미지와 주문 복구는 설문 화면만의 문제가 아니므로 주문 상태·결과 저장·다시 열기를 서버 경계에서 함께 다룹니다.',en:'Faceless sketches support appearance choices, while relationship answers shape scenes from a first meeting to everyday life. Generated images and recovery are handled alongside order state and stored results at the server boundary.'},
  next:{ko:'공개 배포는 결제 테스트 모드입니다. 실제 판매로 전환하려면 전용 상점의 승인 범위, 승인·취소와 결과 복구, 실제 이미지 생성 품질을 별도로 확인해야 합니다. 이메일 발송은 현재 제공 범위에 포함하지 않습니다.',en:'The public deployment uses test payments. Live sales need separate verification of merchant approval, confirmation/cancellation, result recovery, and actual generated-image quality. Email delivery is outside the current scope.'}
 },
 tarot:{
  title:{ko:'카드를 고르는 손의 움직임과 상담 상태를 함께 설계하기',en:'Designing card interaction and consultation state together'},
  problem:{ko:'타로에서 카드를 섞고 고르는 과정은 결과에 도착하기 전의 중요한 경험입니다. 한옥 다실과 가상 안내자의 분위기를 유지하면서도, 질문 수정과 카드 선택, 구매 안내 사이에서 사용자가 자신의 진행 상황을 잃지 않도록 만드는 것이 과제입니다.',en:'Shuffling and choosing cards matter before any reading appears. The challenge is preserving the tea-room atmosphere while keeping question edits, card selection, and purchase information understandable.'},
  decision:{ko:'한 번에 질문 하나를 묻는 흐름과 직접 고르는 세 장을 연결했습니다. 애니메이션은 상태 전환을 보여주는 역할을 하며, 움직임 감소 설정에서도 같은 순서로 진행됩니다. 구매 승인이 끝난 뒤 제공하는 해석과, 제공 전 취소할 수 있는 주문의 상태는 분리합니다.',en:'One-question-at-a-time intake connects to three cards selected by hand. Animation communicates state transitions; reduced-motion mode follows the same sequence. Reading fulfillment after payment approval is separated from cancellation before delivery.'},
  next:{ko:'전용 AI 설정과 PG·Workflow 검증이 완료되기 전까지 구매와 AI 해석은 비활성입니다. 활성화 여부는 안내 문구뿐 아니라 공개 설정과 실제 주문·제공·취소 흐름을 기준으로 확인해야 합니다.',en:'Purchase and AI readings stay disabled until dedicated AI settings and PG/Workflow verification are complete. Activation requires checking public capabilities and actual order, delivery, and cancellation flows.'}
 },
 lotto:{
  title:{ko:'생성형 영상을 브라우저의 끊기지 않는 경험으로',en:'Making generated video work as a continuous browser experience'},
  problem:{ko:'영상 파일을 만드는 것과 브라우저에서 자연스럽게 이어 보는 것은 다른 작업입니다. 인사에서 부채 장면으로 넘어갈 때의 빈 프레임, 로딩, 소리 재생 제한이 인물과 공간의 연속성을 깨뜨릴 수 있습니다.',en:'Producing a video and presenting it smoothly in a browser are separate tasks. Blank frames, loading, and audio restrictions can break continuity between a greeting and the next scene.'},
  decision:{ko:'영상 사전 로딩과 마지막 프레임 유지로 두 장면을 연결했습니다. 문답과 무작위 번호 생성은 브라우저 인터랙션으로 처리합니다. 제작한 영상이 실시간 AI 응답처럼 보이지 않도록 제공 범위를 구분하는 것도 경험 설계의 일부입니다.',en:'Preloading and holding the last frame bridge the two clips. Dialogue choices and random-number generation run as browser interactions. Clearly distinguishing produced video from live AI responses is also part of the experience design.'},
  next:{ko:'브라우저의 자동 재생·오디오 정책이 다른 환경에서 영상 전환과 음소거 복귀를 계속 확인할 필요가 있습니다. 이 기록은 번호의 당첨 가능성이나 예측 성능을 검증한 사례가 아닙니다.',en:'Video transitions and muted fallback need checks across different browser autoplay and audio policies. This project does not establish predictive performance or improved lottery odds.'}
 },
 some:{
  title:{ko:'분석 기능보다 먼저, 입력에서 결과 탐색까지의 흐름 만들기',en:'Building the intake-to-results flow before connecting analysis'},
  problem:{ko:'관계 고민을 털어놓는 화면에서는 긴 입력 양식보다 한 번에 대답할 수 있는 질문이 중요합니다. 대화 파일을 고르다가 돌아오거나, 답을 수정하거나, 결과 준비가 실패할 때도 맥락을 잃지 않는 흐름을 먼저 다뤘습니다.',en:'When sharing relationship concerns, manageable questions matter more than a long form. The initial focus is preserving context when selecting files, editing answers, going back, or retrying preparation.'},
  decision:{ko:'말풍선과 선택 인터랙션을 단계별 질문에 연결하고, 결과는 마음의 단서·보낼 말·다음 행동으로 나눴습니다. 현재는 고정 샘플을 제공하는 프런트엔드 프로토타입으로, 입력 자료를 실제 분석했다는 인상을 주지 않도록 상태를 명시합니다.',en:'Chat bubbles and selection interactions guide intake; results are organized into clues, wording, and next actions. This is a frontend prototype with fixed samples, so its state must not imply that submitted material was actually analyzed.'},
  next:{ko:'AI·OCR·이메일·결제를 연결하려면 자료 전송과 보관 범위, 실패·삭제 처리, 결과의 근거 표시를 먼저 정해야 합니다. 현재 입력은 브라우저 메모리에만 머물고 새로고침하면 사라집니다.',en:'Connecting AI, OCR, email, or payments first requires decisions about transfer/storage boundaries, failure and deletion handling, and evidence shown with results. Current inputs stay in browser memory and disappear on reload.'}
 },
 sidekick:{
  title:{ko:'AI와 대화하는 앱에서, 일을 맡기고 확인하는 앱으로',en:'From chatting with AI to delegating and reviewing work'},
  problem:{ko:'콘텐츠 운영에는 한 번의 답변보다 기획·제작·수정·발행으로 이어지는 지속적인 일이 많습니다. 사용자가 매 단계마다 붙어 있지 않아도 업무가 이어지고, 결정이 필요한 순간에는 돌아와 확인할 수 있는 구조를 다룹니다.',en:'Content operations involve persistent planning, production, revision, and publishing rather than a single answer. The app addresses work that can continue without constant attention while bringing users back for decisions.'},
  decision:{ko:'목표를 묻는 대화를 AI 직원 팀과 반복 루틴으로 연결하고, 진행과 결과를 검토 가능한 카드로 표현했습니다. 외부 행동의 승인과 사용자·프로젝트별 실행 공간을 별도 경계로 다루는 이유는, 대화가 실제 작업으로 이어질수록 권한과 상태의 의미가 커지기 때문입니다.',en:'Goal-setting conversations connect to AI teams and recurring routines, with progress and outputs represented as reviewable cards. Approval for external actions and user/project execution boundaries matter more as conversation becomes real work.'},
  next:{ko:'공개 웹은 제품 소개와 예시 데모이며 앱은 출시 준비로 안내됩니다. 스토어 공개 여부, 실제 계정의 채널 연결·발행, 결제 성공은 코드 구현과 구분해 별도 증거로 확인해야 합니다.',en:'The public site offers product information and a sample demo, with the app described as preparing for launch. Store availability, real-account channel connections/publishing, and payment success require evidence separate from source implementation.'}
 }
};
export const notes = [...webProjects,...appProjects].map(p=>({slug:p.id,project:p,kind:p.id==='sidekick'?'app':'web',published:'2026-10-21',...editorial[p.id]}));
