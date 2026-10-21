import {R} from '../../work/sketch/pencil.js';
import {person,doc} from '../../work/sketch/kit.js';
import {film,fan,folder} from '../shared/objects.js';

function scene(p,x,y,w,h,r,opened){
 film(p,x,y,w,h,r,v=>{
  const cx=x+w*.5,by=y+h*.8,s=h*.68;
  p.curve([[x+23,y+12],[x+44,y+h*.4],[x+23,y+h-6]],{w:1,a:.4,reveal:v});p.curve([[x+w-23,y+12],[x+w-44,y+h*.4],[x+w-23,y+h-6]],{w:1,a:.4,reveal:v});
  person(p,cx,by,s,{hair:true,face:false,col:'blue',fa:.12,reveal:v});p.ellipse(cx,by-s*.93,s*.17,s*.09,{w:1.3,reveal:v});
  p.curve([[cx-s*.18,by-s*.77],[cx-s*.1,by-s*.89],[cx,by-s*.94],[cx+s*.14,by-s*.88],[cx+s*.2,by-s*.77]],{w:1.5,reveal:v});
  p.curve([[cx-s*.19,by-s*.72],[cx-s*.24,by-s*.51],[cx-s*.19,by-s*.37]],{w:1.4,reveal:v});p.curve([[cx+s*.19,by-s*.72],[cx+s*.24,by-s*.5],[cx+s*.18,by-s*.35]],{w:1.4,reveal:v});
  p.curve([[cx-s*.23,by-s*.29],[cx-s*.12,by-s*.11],[cx+s*.13,by-s*.08]],{w:1.1,reveal:v});p.hatch([[cx-s*.32,by-s*.28],[cx-s*.23,by-s*.31],[cx-s*.15,by-s*.04],[cx-s*.34,by-s*.03]],{gap:4,a:.2,reveal:v});
  p.line([[cx-11,by-s*.42],[cx+9,by-s*.25],[cx-2,by-s*.12]],{w:1.6,col:'blue',reveal:v});
  if(opened)fan(p,cx+14,by-4,s*.34,v);else p.line([[cx+17,by-6],[cx+33,by-s*.32]],{w:3,col:'blue',reveal:v});
  for(const xx of [x+53,x+w-53]){p.box(xx-3,y+h-31,6,22,{w:.8,reveal:v});p.curve([[xx,y+h-34],[xx-4,y+h-40],[xx,y+h-49],[xx+3,y+h-39],[xx,y+h-34]],{w:.8,col:'blue',reveal:v});}
 });
}
export const scenes={
 'lotto-film':{size:[960,450],narrow:[400,740],duration:6400,draw(p,{t,narrow:N,L}){
  p.text(L('Produced footage, a continuous encounter.','만든 영상을, 끊기지 않는 경험으로.'),N?200:480,43,{size:N?26:30,max:N?350:880,lh:31,align:'center',weight:700,reveal:R(t,0,.23)});
  const pos=N?[[51,130],[51,430]]:[[90,132],[570,132]];
  pos.forEach(([x,y],i)=>{scene(p,x,y,N?298:300,N?186:200,R(t,.12+i*.3,.48+i*.3),i===1);p.text(i?L('the fan opens','부채를 여는 장면'):L('the greeting','처음 마주한 인사'),x+150,y+(N?221:234),{size:24,align:'center',weight:700,reveal:R(t,.3+i*.3,.6+i*.3)});});
  p.arrow(N?[[200,365],[200,410]]:[[412,230],[547,230]],{col:'blue',w:1.4,reveal:R(t,.42,.64)});
  p.text(L('same person · same space','같은 인물 · 같은 공간'),N?200:480,N?713:416,{size:23,col:'blue',align:'center',reveal:R(t,.8,.97)});
 }},
 'lotto-playback':{size:[820,400],narrow:[400,760],duration:5700,draw(p,{t,narrow:N,L}){
  p.text(L('The transition is part of the production.','영상 사이의 빈 순간을 다룹니다.'),N?200:410,40,{size:N?25:28,max:N?350:770,lh:30,align:'center',weight:700,reveal:R(t,0,.22)});
  const pos=N?[[200,155],[200,367],[200,579]]:[[125,170],[410,170],[695,170]];
  pos.forEach(([x,y],i)=>{const r=R(t,.12+i*.2,.4+i*.2);film(p,x-65,y-44,130,88,r);if(i===0){for(let j=0;j<3;j++)p.line([[x-38,y-15+j*15],[x+32-j*8,y-15+j*15]],{w:1,col:'blue',reveal:r});}else if(i===1){person(p,x,y+26,60,{face:false,hair:true,reveal:r});p.line([[x-8,y+38],[x+8,y+38]],{w:2,col:'blue',reveal:r});}else{fan(p,x,y+24,33,r);p.check(x+34,y-15,15,{col:'blue',reveal:r});}
   p.text([L('preload','미리 불러오기'),L('hold the last frame','마지막 프레임 유지'),L('next frame is ready','다음 프레임 준비')][i],x,y+87,{size:22,align:'center',weight:700,reveal:r});
   if(i<2)p.arrow(N?[[200,y+111],[200,y+151]]:[[x+83,y],[x+201,y]],{col:'blue',w:1.1,reveal:R(t,.31+i*.2,.51+i*.2)});
  });
  p.text(L('If audio blocks playback: explain, then continue muted.','소리 재생이 막히면, 안내하고 음소거로 이어갑니다.'),N?200:410,N?721:356,{size:N?20:22,max:N?350:770,lh:27,align:'center',col:'blue',reveal:R(t,.8,.98)});
 }},
 'lotto-numberbox':{size:[820,430],narrow:[400,770],duration:5900,draw(p,{t,narrow:N,L}){
  p.text(L('Six different numbers, kept in the browser.','겹치지 않는 여섯 번호, 브라우저에 보관.'),N?200:410,39,{size:N?25:28,max:N?350:770,lh:30,align:'center',weight:700,reveal:R(t,0,.22)});
  const y=N?144:143;
  p.text('1–45',N?200:120,y,{size:36,align:'center',weight:700,reveal:R(t,.1,.35)});p.ellipse(N?200:120,y-12,61,45,{w:1.4,reveal:R(t,.1,.35)});
  p.text(L('random selection','무작위 추출'),N?200:120,y+70,{size:21,align:'center',reveal:R(t,.17,.4)});
  const bx=N?93:321,by=N?297:122;
  for(let i=0;i<6;i++){const x=bx+(i%3)*106,yy=by+Math.floor(i/3)*73,r=R(t,.3+i*.045,.51+i*.045);p.circle(x,yy,24,{fill:'blue',fa:.1,w:1.15,reveal:r});p.text('ABCDEF'[i],x,yy+8,{size:27,align:'center',reveal:r});}
  p.arrow(N?[[200,234],[200,253]]:[[204,140],[268,140]],{col:'blue',reveal:R(t,.26,.48)});
  const fx=N?235:683,fy=N?539:145;
  doc(p,fx-77,fy-35,60,79,{lines:3,reveal:R(t,.61,.82)});doc(p,fx-69,fy-42,60,79,{lines:3,reveal:R(t,.64,.85)});folder(p,fx-7,fy-31,73,68,R(t,.67,.88));
  p.text(L('copy & number box','복사 · 내 번호함'),N?200:683,fy+91,{size:22,align:'center',weight:700,reveal:R(t,.73,.94)});
  p.arrow(N?[[200,411],[200,462]]:[[575,150],[596,150]],{col:'blue',head:7,reveal:R(t,.6,.81)});
  p.text(L('A–F are diagram symbols. No winning predictions.','A–F는 설명용 기호 · 당첨 예측 기능 없음'),N?200:410,N?727:398,{size:N?20:22,max:N?350:770,lh:26,align:'center',col:'soft',reveal:R(t,.83,.99)});
 }}
};
