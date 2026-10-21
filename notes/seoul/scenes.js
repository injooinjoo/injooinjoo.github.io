import {R, ease} from '../../work/sketch/pencil.js';
import {person,doc,clock} from '../../work/sketch/kit.js';
import {districts} from './districts.js';

// These are explanatory drawings, not screenshots, financial forecasts or measured charts.
function tower(p,x,y,w,h,{selected=false,reveal=1}={}){
 const d=w*.32,roof=[[x,y-h],[x+d,y-h-d*.55],[x+w+d,y-h-d*.55],[x+w,y-h]];
 const front=[[x,y-h],[x+w,y-h],[x+w,y],[x,y]],side=[[x+w,y-h],[x+w+d,y-h-d*.55],[x+w+d,y-d*.55],[x+w,y]];
 p.poly(front,{fill:selected?'blue':'paper',fa:selected?.28:.75,w:1.35,reveal});
 p.poly(side,{fill:'soft',fa:.08,w:1.1,reveal});p.hatch(side,{gap:4,ang:-.9,a:.24,reveal});
 p.poly(roof,{fill:'paper',fa:.9,w:1.2,reveal});
 for(let row=0;row<Math.floor((h-10)/13);row++)for(let col=0;col<3;col++){
  const wx=x+6+col*(w-12)/3,wy=y-h+9+row*13;
  p.box(wx,wy,3.4,5,{w:.65,a:.45,over:0,reveal:R(reveal,.25,1)});
 }
 p.line([[x-5,y+3],[x+w+8,y+3]],{w:1,a:.32,reveal});
}
function tree(p,x,y,s,r){
 p.line([[x,y],[x,y-s*.8]],{w:1.3,reveal:r});
 p.curve([[x,y-s*.15],[x-s*.23,y-s*.48],[x-s*.1,y-s],[x+s*.12,y-s*1.15],[x+s*.28,y-s*.65],[x+s*.14,y-s*.25]],{closed:true,w:1.1,a:.65,reveal:r});
 p.hatch([[x-s*.1,y-s*.35],[x-s*.15,y-s*.85],[x,y-s],[x+s*.12,y-s*.38]],{gap:4,a:.13,reveal:r});
}
function smallHouse(p,x,y,s,r){
 p.poly([[x-s*.42,y],[x-s*.42,y-s*.65],[x+s*.42,y-s*.65],[x+s*.42,y]],{fill:'paper',fa:.9,w:1.7,reveal:r});
 p.line([[x-s*.57,y-s*.62],[x,y-s*1.05],[x+s*.57,y-s*.62]],{w:2,reveal:r});
 p.box(x-s*.1,y-s*.36,s*.2,s*.36,{w:1.2,over:0,reveal:r});p.box(x+s*.17,y-s*.48,s*.13,s*.13,{w:1,over:0,reveal:r});
}
function walkingPerson(p,x,y,s,step,r){
 person(p,x,y-s*.28,s*.74,{hair:true,col:'blue',fa:.12,mood:'happy',reveal:r});
 const stride=Math.sin(step*Math.PI)*s*.14;
 p.line([[x-3,y-s*.28],[x-8-stride,y],[x-17-stride,y]],{w:1.8,reveal:r});
 p.line([[x+4,y-s*.28],[x+9+stride,y-1],[x+17+stride,y-1]],{w:1.8,reveal:r});
 p.box(x+s*.24,y-s*.55,s*.23,s*.19,{r:2,w:1.2,reveal:r});
}
export const scenes={
 'seoul-home':{
  size:[960,470],narrow:[400,570],duration:6200,
  draw(p,{t,narrow:N,L}){
   const sc=N?.67:1, ox=N?22:292,oy=N?38:34;
   const xy=q=>[ox+q[0]*sc,oy+q[1]*sc*.87];
   // A quiet map first, then the neighborhood, then the person and chosen home.
   districts.forEach((d,i)=>p.poly(d.points.map(xy),{w:.7,a:.39,fill:d.name==='마포구'?'blue':undefined,fa:.12,reveal:R(t,i*.006,.30+i*.006)}));
   p.curve([[0,238],[68,216],[135,215],[194,250],[278,275],[360,277],[418,256],[500,245]].map(xy),{w:N?8:12,col:'blue',a:.16,pass:3,wob:1.8,reveal:R(t,.12,.35)});
   p.curve([[0,238],[68,216],[135,215],[194,250],[278,275],[360,277],[418,256],[500,245]].map(xy),{w:1.1,col:'blue',a:.7,reveal:R(t,.12,.35)});
   const tx=N?202:551,ty=N?251:302;
   [[-100,22,24,52],[-53,-40,27,68],[18,-45,30,83],[87,6,29,58],[-35,50,26,59]].forEach(([x,y,w,h],i)=>tower(p,tx+x*(N?.7:1),ty+y*(N?.7:1),w*(N?.78:1),h*(N?.78:1),{reveal:R(t,.25+i*.04,.5+i*.04)}));
   tower(p,tx,ty, N?32:43,N?80:112,{selected:true,reveal:R(t,.4,.65)});
   const goal=R(t,.68,.83);
   p.ring(tx+22,ty-40,N?39:59,N?70:93,{col:'blue',w:1.5,reveal:goal});
   const px=N?70:143,py=N?438:338;
   // Two deliberate steps followed by a held pose; the scene ends still.
   const step=ease(R(t,.48,.73)),move=step*(N?14:24);
   walkingPerson(p,px+move,py,N?79:104,step*2,R(t,.32,.53));
   p.line([[px-46,py+7],[px+75,py+7]],{w:1.2,a:.4,reveal:R(t,.35,.58)});
   p.arrow([[px+55,py-45],[N?184:323,N?350:318],[tx-10,ty+20]],{w:1.25,col:'blue',dash:[5,7],head:8,reveal:R(t,.62,.85)});
   [N?[323,365]:[810,335],N?[310,336]:[846,353],N?[342,347]:[868,326]].forEach(([x,y],i)=>tree(p,x,y,25+i*7,R(t,.47,.7)));
   p.text(L('A home I want.','내가 살고 싶은 집.'),N?200:168,N?497:85,{size:N?27:31,align:'center',reveal:R(t,.05,.25),weight:700});
   p.text(L('My income. My choices.','나의 월급, 나의 선택.'),N?200:166,N?529:118,{size:N?20:22,align:'center',col:'soft',reveal:R(t,.13,.3)});
   p.text(L('choose a home','목표 집 고르기'),N?284:797,N?417:171,{size:N?20:23,align:'center',col:'blue',weight:700,reveal:goal});
   p.arrow(N?[[285,391],[268,329],[tx+32,ty-38]]:[[777,191],[719,223],[tx+45,ty-45]],{col:'blue',w:1.1,reveal:goal});
   p.text('SEOUL',N?296:811,N?88:72,{size:19,rot:-.08,col:'soft',reveal:R(t,.2,.4)});
  }
 },
 'seoul-life':{
  size:[820,440],narrow:[400,740],duration:5400,
  draw(p,{t,narrow:N,L}){
   const x=N?92:118,y=N?148:232;
   walkingPerson(p,x,y,85,0,R(t,0,.25));
   smallHouse(p,N?290:118,N?145:340,51,R(t,.08,.32));
   p.text(L('work & everyday life','일과 생활'),N?200:118,N?191:387,{size:23,align:'center',weight:700,reveal:R(t,.12,.35)});
   const cx=N?200:410,cy=N?346:201;
   const ledger=R(t,.2,.48);
   p.box(cx-94,cy-93,188,174,{w:1.6,fill:'paper',fa:.7,reveal:ledger});
   p.wash([[cx-94,cy-93],[cx+94,cy-93],[cx+94,cy-60],[cx-94,cy-60]],{col:'blue',a:.13,reveal:ledger});
   p.line([[cx-94,cy-60],[cx+94,cy-60]],{w:1,reveal:ledger});
   [-55,55].forEach(dx=>p.ellipse(cx+dx,cy-94,5,10,{w:1.2,reveal:ledger}));
   p.hatch([[cx+84,cy-54],[cx+94,cy-54],[cx+94,cy+81],[cx+84,cy+81]],{gap:4,a:.2,reveal:ledger});
   p.text(L('MONTH END','한 달을 보내면'),cx,cy-69,{size:23,weight:700,align:'center',reveal:R(t,.3,.5)});
   const rows=[[L('+ salary','+ 월급'),-4],[L('− living costs','− 생활비'),28],[L('− loan payments','− 대출 상환'),60]];
   rows.forEach(([txt,dy],i)=>p.text(txt,cx-64,cy+dy,{size:20,col:i===0?'blue':'ink',reveal:R(t,.36+i*.05,.6+i*.05)}));
   p.arrow(N?[[200,212],[200,236]]:[[200,230],[298,200]],{col:'blue',reveal:R(t,.3,.5),w:1.4});
   const gx=N?74:614,gy=N?575:284,gw=N?260:166;
   p.line([[gx,gy-98],[gx,gy],[gx+gw,gy]],{w:1.2,reveal:R(t,.5,.65)});
   const path=[[gx+5,gy-12],[gx+gw*.22,gy-21],[gx+gw*.40,gy-17],[gx+gw*.58,gy-53],[gx+gw*.8,gy-61],[gx+gw,gy-95]];
   p.curve(path,{w:2,col:'blue',reveal:R(t,.57,.86)});
   p.text(L('an asset path','자산의 경로'),gx+gw/2,gy+32,{size:23,align:'center',weight:700,reveal:R(t,.7,.9)});
   p.text(L('choices accumulate','선택이 쌓인다'),gx+gw/2,gy+59,{size:18,align:'center',col:'soft',reveal:R(t,.75,.95)});
   p.arrow(N?[[200,450],[200,465]]:[[514,200],[594,228]],{w:1.4,col:'blue',reveal:R(t,.5,.72)});
   p.text(L('Career, family, rest — each choice changes the next month.','이직, 가족, 휴식 — 선택마다 다음 달이 달라진다.'),N?200:410,N?694:52,{align:'center',size:N?20:24,max:N?340:760,lh:28,reveal:R(t,.1,.35)});
  }
 },
 'seoul-records':{
  size:[820,410],narrow:[400,780],duration:5600,
  draw(p,{t,narrow:N,L}){
   const dx=N?142:52,dy=N?48:115;
   [-7,0,7].forEach((off,i)=>doc(p,dx+off,dy-off,112,133,{lines:i===2?4:0,reveal:R(t,i*.04,.25+i*.06)}));
   p.text(L('actions, not a score','점수 대신 행동 기록'),N?200:108,N?218:287,{size:22,align:'center',weight:700,reveal:R(t,.12,.35)});
   const bx=N?200:367,by=N?345:186;
   p.circle(bx,by,60,{w:1.6,reveal:R(t,.25,.5)});
   clock(p,bx,by-5,29,{reveal:R(t,.28,.53)});
   p.check(bx+38,by+35,24,{col:'blue',w:2,reveal:R(t,.53,.67)});
   p.text(L('replay & verify','다시 계산·검증'),bx,by+92,{size:23,align:'center',weight:700,reveal:R(t,.35,.6)});
   p.text(L('one completion, once','같은 완주는 한 번만'),bx,by+121,{size:18,align:'center',col:'soft',reveal:R(t,.4,.65)});
   p.arrow(N?[[200,240],[200,268]]:[[184,181],[287,181]],{col:'blue',reveal:R(t,.25,.48)});
   const gx=N?54:563,gy=N?670:266,gw=N?262:176;
   p.line([[gx,gy-110],[gx,gy],[gx+gw,gy]],{w:1.15,reveal:R(t,.55,.73)});
   [.32,.62,.92].forEach((v,i)=>{
    p.curve([[gx+4,gy-9],[gx+gw*.28,gy-16-v*12],[gx+gw*.55,gy-13-v*40],[gx+gw*.78,gy-22-v*65],[gx+gw,gy-18-v*92]],{col:i===0?'ink':'blue',a:i===2?.48:.9,w:i===0?1.6:1.2,reveal:R(t,.6+i*.04,.82+i*.04)});
    p.text(['MEAN','P90','P99'][i],gx+gw+10,gy-18-v*92,{size:14,col:i===0?'ink':'blue',reveal:R(t,.7,.93)});
   });
   p.text(L('compare like with like','같은 조건끼리 비교'),N?200:663,N?722:333,{size:23,align:'center',weight:700,reveal:R(t,.72,.93)});
   p.arrow(N?[[200,485],[200,526]]:[[442,181],[542,210]],{col:'blue',reveal:R(t,.53,.75)});
   p.text(L('Same starting point. Same mode. Same rules.','같은 출발 조건 · 같은 모드 · 같은 규칙'),N?200:410,N?762:42,{size:N?17:23,align:'center',col:'blue',reveal:R(t,.55,.8)});
  }
 }
};
