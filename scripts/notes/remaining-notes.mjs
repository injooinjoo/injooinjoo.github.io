import {noteOptions,standardNote} from './illustrated-note.mjs';
const f=(id,size,narrow,en,ko,ce,ck)=>({id,size,narrow,alt:{en,ko},caption:{en:ce,ko:ck}});
export const lottoFigures=[
 f('lotto-film','960 / 450','400 / 740','Pencil illustration: two perforated film frames show the same fictional shaman greeting and opening a fan, linked into one encounter.','연필 설명 그림. 같은 가상 무녀의 인사와 부채 장면을 두 개의 필름 프레임으로 연결합니다.','An explanatory drawing of produced video continuity, not a service capture or a live AI response.','제작 영상의 인물·공간 연속성을 설명하는 그림이며 실제 화면 캡처나 실시간 AI 응답이 아닙니다.'),
 f('lotto-playback','820 / 400','400 / 760','Pencil playback diagram: preload video, retain the previous decoded frame, then show the next ready frame. Explain a muted fallback when audio blocks playback.','연필 재생 도해. 영상을 미리 불러오고 이전 프레임을 유지한 뒤 다음 프레임이 준비되면 전환합니다. 오디오 제한에는 음소거 안내로 대응합니다.','The browser must bridge the clips as well as load them. The drawings explain playback states; the actual service uses produced video assets.','영상 파일을 준비하는 것에서 브라우저의 재생 상태까지 다룹니다. 도해는 상태 설명이며 실제 서비스에는 제작 영상 에셋을 사용합니다.'),
 f('lotto-numberbox','820 / 430','400 / 770','Pencil diagram: six distinct symbols stand for random numbers from 1 to 45, followed by copying and a browser number box.','연필 번호 도해. 1~45에서 서로 다른 여섯 번호를 무작위로 고르고 복사와 브라우저 번호함으로 이어갑니다.','A–F are explanatory symbols, not recommended numbers. No winning predictions, live external AI, or connected payments.','A–F는 설명용 기호이며 추천 번호가 아닙니다. 당첨 예측·외부 AI의 실시간 응답·결제는 제공하지 않습니다.')
];
export const someFigures=[
 f('some-conversation','960 / 450','400 / 740','Pencil illustration: one question and one answer on a schematic phone connect to a notebook with clues, words and next steps, clearly marked as a fixed sample.','연필 설명 그림. 질문 하나와 답변이 고정 샘플로 표시된 단서·보낼 말·다음 행동의 노트로 이어집니다.','An explanatory drawing, not a product screenshot. Coaching results are fixed samples and do not analyze submitted conversations.','경험을 설명하는 그림이며 실제 제품 화면은 아닙니다. 코칭 결과는 입력 대화를 분석한 결과가 아닌 고정 샘플입니다.'),
 f('some-intake','820 / 420','400 / 790','Pencil intake diagram: TXT, pasted conversations and screenshot previews enter browser memory. Inputs are not sent to a server and disappear on reload.','연필 입력 도해. TXT·대화 붙여넣기·스크린샷 미리보기를 브라우저 메모리에서 처리하고 새로고침하면 입력이 사라집니다.','Screenshots are previews only. AI, OCR, email delivery and real payments are not connected; input handling stays in browser memory.','스크린샷은 미리보기까지입니다. AI·OCR·이메일 발송·실결제는 미연결이며 입력은 브라우저 메모리에서만 다룹니다.'),
 f('some-retry','820 / 440','400 / 790','Pencil flow diagram: edit inputs, retry failed preparation and explore three sample coaching tabs with copy, print and delete actions.','연필 흐름 도해. 입력 수정과 준비 실패 재시도, 세 탭의 샘플 코칭 탐색을 복사·인쇄·입력 자료 삭제로 연결합니다.','The prototype tests returning, editing and retrying through the full frontend flow. It does not establish successful AI analysis or payment processing.','프런트엔드 흐름 전체에서 돌아오기·수정·재시도를 다룹니다. 실제 AI 분석이나 결제 성공을 검증한 사례는 아닙니다.')
];
export const lottoNote=(n,h)=>standardNote(n,h,lottoFigures);
export const someNote=(n,h)=>standardNote(n,h,someFigures);
export const lottoOptions=noteOptions('lotto','lotto-note');
export const someOptions=noteOptions('some','some-note');
