import {R} from '../../work/sketch/pencil.js';
import {bubble,phone,doc,clock} from '../../work/sketch/kit.js';
import {pencil,folder} from '../shared/objects.js';

function tabs(p,x,y,w,h,r,L){
 p.box(x,y,w,h,{fill:'paper',fa:.8,w:1.4,reveal:r});
 for(let i=0;i<3;i++){p.box(x+i*w/3,y-25,w/3-3,34,{fill:i===0?'blue':'paper',fa:.17,w:.9,reveal:r});p.text([L('clues','단서'),L('words','보낼 말'),L('next','다음 행동')][i],x+(i+.5)*w/3,y-7,{size:w<200?14:15,align:'center',reveal:r});}
 for(let i=0;i<(h<150?3:4);i++)p.line([[x+20,y+36+i*19],[x+w-25-i*10,y+36+i*19]],{w:1,a:.45,reveal:r});
 p.text(L('fixed sample','고정 샘플'),x+w/2,y+h-17,{size:20,col:'blue',align:'center',weight:700,reveal:r});
}
export const scenes={
 'some-conversation':{size:[960,450],narrow:[400,740],duration:6300,draw(p,{t,narrow:N,L}){
  p.text(L('From sharing a concern to a next step.','말을 꺼내는 순간부터, 다음 행동까지.'),N?200:480,42,{size:N?26:30,max:N?350:880,lh:31,align:'center',weight:700,reveal:R(t,0,.22)});
  const x=N?130:150,y=N?116:119;
  phone(p,x,y,140,238,{reveal:R(t,.1,.36)});bubble(p,x+14,y+38,104,47,{text:L('one question','질문 하나'),size:20,reveal:R(t,.23,.47)});bubble(p,x+27,y+111,100,44,{text:L('my answer','나의 답'),size:20,fill:'blue',reveal:R(t,.35,.59)});pencil(p,x+77,y+191,33,R(t,.4,.64));
  const tx=N?90:548,ty=N?465:151;
  tabs(p,tx,ty,220,160,R(t,.55,.83),L);
  p.arrow(N?[[200,378],[200,417]]:[[321,236],[496,236]],{col:'blue',reveal:R(t,.46,.69)});
  p.text(L('a flow to explore — with sample coaching','입력부터 탐색까지 · 결과는 샘플 코칭'),N?200:480,N?704:413,{size:N?20:24,max:N?350:880,lh:27,col:'blue',align:'center',reveal:R(t,.82,.98)});
 }},
 'some-intake':{size:[820,420],narrow:[400,790],duration:5600,draw(p,{t,narrow:N,L}){
  p.text(L('Many inputs. One clear boundary.','입력은 다양하게, 처리 범위는 분명하게.'),N?200:410,39,{size:N?25:28,max:N?350:770,lh:30,align:'center',weight:700,reveal:R(t,0,.23)});
  const row=N?152:177;
  doc(p,N?65:65,row-44,61,88,{lines:0,reveal:R(t,.1,.36)});p.text('TXT',N?96:96,row+4,{size:23,align:'center',reveal:R(t,.18,.4)});
  bubble(p,N?164:229,row-30,72,52,{text:L('paste','붙여넣기'),size:17,reveal:R(t,.2,.44)});
  p.box(N?277:397,row-39,62,79,{w:1.2,reveal:R(t,.26,.5)});p.circle(N?320:440,row-22,5,{w:.8,reveal:R(t,.28,.52)});p.line([[N?285:405,row+20],[N?300:420,row-3],[N?327:447,row+21]],{w:1,reveal:R(t,.28,.52)});
  const fx=N?115:607,fy=N?384:134;folder(p,fx,fy,170,109,R(t,.45,.71));p.text(L('browser memory','브라우저 메모리'),fx+85,fy+65,{size:21,align:'center',weight:700,reveal:R(t,.52,.76)});
  p.arrow(N?[[200,238],[200,340]]:[[484,177],[578,177]],{col:'blue',reveal:R(t,.39,.61)});
  p.text(L('screenshots are previews','스크린샷은 미리보기까지'),N?308:268,N?230:302,{size:N?16:21,max:N?148:400,lh:20,align:'center',col:'soft',reveal:R(t,.4,.65)});
  p.text(L('No server transfer. Reload clears the inputs.','서버 전송 없이 처리 · 새로고침하면 입력 삭제'),N?200:410,N?605:383,{size:N?21:23,max:N?345:770,lh:28,col:'blue',align:'center',reveal:R(t,.75,.96)});
  p.text(L('AI · OCR · email · live payments are not connected.','AI · OCR · 이메일 · 실결제는 미연결'),200,727,{size:20,max:350,lh:26,align:'center',col:'soft',reveal:N?R(t,.8,.98):0});
 }},
 'some-retry':{size:[820,440],narrow:[400,790],duration:5900,draw(p,{t,narrow:N,L}){
  p.text(L('Returning is part of the experience.','돌아오고, 고치고, 다시 시작하는 경험.'),N?200:410,39,{size:N?25:28,max:N?350:770,lh:30,align:'center',weight:700,reveal:R(t,0,.22)});
  const pos=N?[[100,172],[297,172],[200,500]]:[[125,168],[410,168],[695,168]];
  const [[ax,ay],[bx,by],[cx,cy]]=pos;
  doc(p,ax-37,ay-42,75,98,{lines:3,reveal:R(t,.1,.37)});pencil(p,ax+22,ay+33,30,R(t,.22,.46));p.text(L('edit the input','입력 수정'),ax,ay+101,{size:22,align:'center',weight:700,reveal:R(t,.2,.44)});
  clock(p,bx,by,39,{col:'blue',reveal:R(t,.32,.57)});p.text(L('retry preparation','준비 실패 재시도'),bx,by+101,{size:N?20:22,align:'center',weight:700,reveal:R(t,.42,.65)});
  tabs(p,cx-87,cy-48,174,129,R(t,.57,.83),L);p.text(L('explore three tabs','세 탭으로 탐색'),cx,cy+126,{size:22,align:'center',weight:700,reveal:R(t,.68,.9)});
  p.arrow(N?[[156,172],[239,172]]:[[185,168],[343,168]],{col:'blue',reveal:R(t,.29,.51)});p.arrow(N?[[297,302],[297,350],[200,350],[200,417]]:[[477,168],[587,168]],{col:'blue',reveal:R(t,.51,.73)});
  if(!N)p.curve([[705,322],[665,358],[265,356],[128,308]],{col:'blue',dash:[4,6],w:1,reveal:R(t,.76,.96)});
  p.text(L('copy · print · delete the inputs','문장 복사 · 인쇄 · 입력 자료 삭제'),N?200:410,N?725:410,{size:N?22:24,max:N?350:770,lh:27,align:'center',col:'blue',reveal:R(t,.81,.98)});
 }}
};
