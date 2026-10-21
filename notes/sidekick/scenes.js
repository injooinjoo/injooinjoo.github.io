import {R} from '../../work/sketch/pencil.js';
import {person,phone,bubble,doc,calendar,clock,lock} from '../../work/sketch/kit.js';
import {pencil,folder,paper} from '../shared/objects.js';

// These drawings explain the product model. They are not app screenshots,
// production execution traces, store-release evidence, or user performance data.
export const scenes={
 'sidekick-team':{size:[960,470],narrow:[400,750],duration:6600,draw(p,{t,narrow:N,L}){
  p.text(L('A goal. A team. Something to review.','하고 싶은 일에서, 검토할 결과까지.'),N?200:480,43,{size:N?26:31,max:N?350:880,lh:31,align:'center',weight:700,reveal:R(t,0,.23)});
  const x=N?150:109,y=N?117:128,w=N?100:122,h=N?157:220;
  phone(p,x,y,w,h,{reveal:R(t,.1,.38)});bubble(p,x+9,y+42,w-18,63,{text:L('my goal','나의 목표'),fill:'blue',size:20,reveal:R(t,.22,.47)});
  p.text(L('say what you want','하고 싶은 일을 말하면'),N?200:170,N?307:390,{size:22,align:'center',max:N?345:280,reveal:R(t,.28,.5)});
  const pos=N?[102,200,298]:[404,490,576],by=N?437:274;
  pos.forEach((xx,i)=>{person(p,xx,by,N?70:85,{hair:true,face:true,col:i===1?'blue':undefined,fa:.12,reveal:R(t,.32+i*.06,.56+i*.06)});p.text([L('plan','기획'),L('make','제작'),L('review','검토')][i],xx,by+(N?43:72),{size:21,align:'center',weight:700,reveal:R(t,.47+i*.05,.7+i*.05)});});
  const lx=N?45:337,rx=N?355:639,dy=N?451:291;
  p.line([[lx,dy],[rx,dy]],{w:2,reveal:R(t,.37,.62)});p.line([[lx+18,dy+2],[lx+14,dy+27]],{w:1.5,reveal:R(t,.4,.65)});p.line([[rx-18,dy+2],[rx-14,dy+27]],{w:1.5,reveal:R(t,.4,.65)});p.hatch([[lx+14,dy+27],[rx-14,dy+27],[rx+2,dy+33],[lx-2,dy+33]],{gap:5,a:.14,reveal:R(t,.44,.68)});
  const px=N?141:755,py=N?564:152;
  paper(p,px,py,118,135,R(t,.63,.88),L('DRAFT','초안'));pencil(p,px+81,py+115,31,R(t,.75,.94));
  p.text(L('reviewable output','검토할 수 있는 결과'),N?200:814,N?734:350,{size:22,align:'center',max:N?345:270,col:'blue',weight:700,reveal:R(t,.81,.98)});
  p.arrow(N?[[200,329],[200,349]]:[[263,234],[337,234]],{col:'blue',reveal:R(t,.3,.52)});p.arrow(N?[[200,509],[200,537]]:[[655,234],[727,234]],{col:'blue',reveal:R(t,.6,.8)});
 }},
 'sidekick-journey':{size:[820,440],narrow:[400,760],duration:5900,draw(p,{t,narrow:N,L}){
  p.text(L('Start with a goal, not a setup screen.','설정 화면보다, 하고 싶은 일부터.'),N?200:410,39,{size:N?25:28,max:N?350:770,lh:30,align:'center',weight:700,reveal:R(t,0,.22)});
  const pos=N?[[200,142],[200,335],[200,572]]:[[125,169],[410,169],[695,169]];
  const [[ax,ay],[bx,by],[cx,cy]]=pos;
  bubble(p,ax-82,ay-33,164,76,{text:L('start a YouTube channel','유튜브를 시작하고 싶어요'),size:20,reveal:R(t,.1,.37)});
  bubble(p,bx-78,by-54,156,62,{text:L('for whom?','누구에게 전할까요?'),size:20,fill:'blue',reveal:R(t,.32,.58)});bubble(p,bx-70,by+28,145,49,{text:L('which topic?','어떤 주제로요?'),size:20,reveal:R(t,.4,.65)});
  paper(p,cx-49,cy-52,98,123,R(t,.58,.83),L('DRAFT','첫 초안'));pencil(p,cx+39,cy+57,32,R(t,.72,.92));
  p.text(L('minimum useful questions','시작에 필요한 질문만'),bx,by+124,{size:22,align:'center',max:N?345:260,reveal:R(t,.5,.73)});
  p.arrow(N?[[200,213],[200,275]]:[[220,169],[303,169]],{col:'blue',reveal:R(t,.27,.5)});p.arrow(N?[[200,475],[200,497]]:[[511,169],[627,169]],{col:'blue',reveal:R(t,.52,.74)});
  if(!N)p.curve([[700,306],[652,354],[376,354],[358,327]],{col:'blue',dash:[4,6],w:1.1,reveal:R(t,.77,.96)});
  p.text(L('Read the draft. Ask for changes in the same conversation.','초안을 읽고, 같은 대화에서 고칩니다.'),N?200:410,N?713:411,{size:N?22:24,max:N?345:770,lh:27,align:'center',col:'blue',reveal:R(t,.81,.98)});
 }},
 'sidekick-routines':{size:[820,440],narrow:[400,790],duration:6000,draw(p,{t,narrow:N,L}){
  p.text(L('A routine, a schedule, and a run are different.','루틴 · 예약 · 이번 실행을 구분합니다.'),N?200:410,39,{size:N?25:28,max:N?350:770,lh:30,align:'center',weight:700,reveal:R(t,0,.22)});
  const pos=N?[[200,149],[200,379],[200,604]]:[[125,176],[410,176],[695,176]];
  pos.forEach(([x,y],i)=>{const r=R(t,.1+i*.23,.4+i*.23);if(i===0){paper(p,x-47,y-51,94,118,r,L('METHOD','업무 방법'));p.line([[x-42,y-58],[x-42,y+66]],{w:2.8,col:'blue',reveal:r});}else if(i===1){calendar(p,x-53,y-44,106,91,{rows:3,cols:4,col:'blue',reveal:r});clock(p,x+43,y+39,20,{col:'blue',reveal:r});}else{doc(p,x-52,y-49,90,108,{lines:4,reveal:r});doc(p,x-38,y-38,90,108,{lines:4,reveal:r});p.check(x+37,y+45,18,{col:'blue',reveal:r});}
   p.text([L('what to do','무엇을 할지'),L('when to start','언제 시작할지'),L('what happened this time','이번에 실제로 한 일')][i],x,y+101,{size:22,align:'center',max:N?345:260,weight:700,reveal:r});
   if(i<2)p.arrow(N?[[200,y+124],[200,y+161]]:[[x+79,y],[x+201,y]],{col:'blue',reveal:R(t,.3+i*.23,.52+i*.23)});
  });
  p.text(L('Saving a routine does not mean it has run.','루틴을 저장했다고, 실행된 것은 아닙니다.'),N?200:410,N?765:412,{size:N?21:24,max:N?345:770,lh:26,align:'center',col:'blue',reveal:R(t,.83,.99)});
 }},
 'sidekick-approval':{size:[820,440],narrow:[400,780],duration:6100,draw(p,{t,narrow:N,L}){
  p.text(L('Prepared is different from published.','준비된 결과와, 밖으로 나간 결과는 다릅니다.'),N?200:410,39,{size:N?25:28,max:N?350:770,lh:30,align:'center',weight:700,reveal:R(t,0,.22)});
  const x=N?200:140,y=N?157:200;
  paper(p,x-48,y-58,96,124,R(t,.1,.4),L('DRAFT','결과 초안'));
  p.text(L('review the content','내용을 먼저 검토'),x,y+108,{size:23,align:'center',reveal:R(t,.25,.48)});
  const xx=N?200:563,yy=N?411:139;
  [[L('approve, then act','승인하고 실행'),0],[L('request a change','수정 요청'),86],[L('decline and stop','거절하고 중단'),172]].forEach(([text,dy],i)=>{const r=R(t,.38+i*.1,.65+i*.1);if(i===0)p.check(xx-112,yy+dy-6,23,{col:'blue',reveal:r});else if(i===1)pencil(p,xx-120,yy+dy+3,27,r);else p.cross(xx-112,yy+dy-7,18,{reveal:r});p.text(text,xx-75,yy+dy,{size:23,col:i===0?'blue':'ink',weight:i===0?700:400,reveal:r});});
  p.line(N?[[200,289],[200,327],[53,327],[53,577]]:[[221,200],[367,200]],{col:'blue',w:1.1,reveal:R(t,.3,.55)});
  for(let i=0;i<3;i++)p.arrow(N?[[53,yy+i*86-6],[70,yy+i*86-6]]:[[367,200],[387,yy+i*86-6],[421,yy+i*86-6]],{col:'blue',head:6,w:1.1,reveal:R(t,.4+i*.1,.65+i*.1)});
  p.text(L('A completion report alone never proves an external action.','완료 보고만으로 발행·전송 성공을 추정하지 않습니다.'),N?200:410,N?727:410,{size:N?21:23,max:N?345:770,lh:27,col:'blue',align:'center',reveal:R(t,.83,.99)});
 }},
 'sidekick-architecture':{size:[820,460],narrow:[400,920],duration:6200,draw(p,{t,narrow:N,L}){
  p.text(L('Keep the mobile experience and execution distinct.','모바일 경험과 실행 환경의 경계를 나눕니다.'),N?200:410,39,{size:N?25:28,max:N?350:770,lh:30,align:'center',weight:700,reveal:R(t,0,.22)});
  const pos=N?[[200,154],[200,396],[200,664]]:[[111,190],[395,190],[688,190]];
  const [[ax,ay],[bx,by],[cx,cy]]=pos;
  phone(p,ax-36,ay-56,72,121,{reveal:R(t,.1,.37)});p.text('Expo / React Native',ax,ay+104,{size:19,align:'center',reveal:R(t,.2,.44)});
  p.box(bx-88,by-65,176,124,{w:1.3,fill:'blue',fa:.07,reveal:R(t,.31,.59)});p.text('Cloud Run',bx,by-28,{size:24,align:'center',weight:700,reveal:R(t,.4,.65)});p.text(L('identity · permissions · usage','신원 · 권한 · 사용량'),bx,by+8,{size:N?16:18,max:158,lh:21,align:'center',reveal:R(t,.44,.69)});p.text('Supabase / PostgreSQL',bx,by+104,{size:18,align:'center',reveal:R(t,.5,.73)});
  p.box(cx-104,cy-79,208,170,{w:1.2,dash:[5,6],reveal:R(t,.53,.8)});folder(p,cx-61,cy-40,122,80,R(t,.6,.85));lock(p,cx+67,cy-48,24,{col:'blue',reveal:R(t,.65,.9)});p.text(L('memory · connections · work','기억 · 연결 · 실행'),cx,cy+63,{size:N?16:18,max:188,lh:21,align:'center',reveal:R(t,.66,.91)});p.text('GKE / Hermes',cx,cy+123,{size:23,align:'center',weight:700,reveal:R(t,.72,.94)});
  p.arrow(N?[[200,288],[200,302]]:[[166,190],[277,190]],{col:'blue',reveal:R(t,.3,.52)});p.arrow(N?[[200,531],[200,559]]:[[501,190],[562,190]],{col:'blue',reveal:R(t,.53,.75)});
  p.text(L('Architecture and migration work, not a production proof.','구성과 전환 설계 · 운영 반영은 별도 확인'),N?200:410,N?871:426,{size:N?20:22,max:N?345:770,lh:27,align:'center',col:'soft',reveal:R(t,.83,.99)});
 }}
};
