import {R} from '../../work/sketch/pencil.js';
import {db,doc} from '../../work/sketch/kit.js';

// Explanatory illustrations for the portfolio. These are not service screens,
// generated results, customer portraits, or evidence of a live transaction.
function character(p,x,y,s,r,{long=false,seated=false,step=0}={}){
 const q=pts=>pts.map(([a,b])=>[x+a*s,y+b*s]);
 const line=(pts,o={})=>p.curve(q(pts),{w:1.25,reveal:r,...o});
 // An intentionally blank face, with a consistent centre-parted hairstyle.
 line([[-11,-50],[-14,-60],[-8,-72],[2,-75],[12,-68],[14,-57],[9,-49],[0,-46],[-8,-49]]);
 line([[-12,-57],[-14,-69],[-6,-78],[3,-79],[13,-74],[16,-63],[14,long?-39:-53]],{w:1.8});
 line([[1,-77],[-3,-68],[-13,-62]],{w:1.45});line([[2,-77],[8,-66],[15,-61]],{w:1.45});
 if(long)line([[-13,-66],[-18,-48],[-15,-35],[-10,-32]],{w:1.5});
 line([[-5,-46],[-5,-41],[-18,-36],[-23,-23],[-24,-6]]);
 line([[6,-46],[7,-41],[20,-35],[24,-22],[24,-6]]);
 line([[-12,-38],[-8,-12],[-9,0],[12,0],[9,-13],[13,-37]]);
 p.poly(q([[-7,-42],[8,-42],[12,-35],[1,-32],[-10,-35]]),{fill:'red',fa:.32,w:.7,reveal:r});
 line([[5,-34],[12,-24],[9,-18]],{col:'red',w:2});
 p.hatch(q([[13,-31],[20,-30],[22,-8],[12,-6]]),{gap:4,a:.25,reveal:r});
 p.hatch(q([[13,-31],[20,-30],[22,-8],[12,-6]]),{gap:7,ang:.8,a:.1,reveal:r});
 if(seated){line([[-8,0],[-2,10],[22,10],[29,29],[35,29]]);line([[10,0],[19,4],[30,6],[37,27],[43,27]]);}
 else {line([[-9,0],[-12-step,25],[-20-step,26]]);line([[10,0],[12+step,24],[21+step,24]]);}
}
function cup(p,x,y,s,r){
 p.poly([[x-s,y-s],[x+s,y-s],[x+s*.7,y+s],[x-s*.7,y+s]],{w:.85,reveal:r});
 p.curve([[x+s,y-s*.5],[x+s*1.8,y-s*.5],[x+s*1.8,y+s*.5],[x+s*.8,y+s*.6]],{w:.8,reveal:r});
 p.ellipse(x,y+s*1.35,s*1.7,s*.35,{w:.7,a:.5,reveal:r});
 p.curve([[x,y-s*1.4],[x-2,y-s*2],[x+1,y-s*2.7]],{w:.7,a:.5,reveal:r});
}
function plant(p,x,y,s,r){
 p.curve([[x,y],[x-2,y-s*.5],[x+3,y-s]],{w:1,reveal:r});
 for(const [a,b,c]of [[-.1,.3,-1],[.1,.5,1],[0,.72,-1],[.08,.88,1]]){
  p.curve([[x+a*s,y-b*s],[x+c*s*.3,y-b*s-s*.2],[x+c*s*.35,y-b*s+s*.05],[x+a*s,y-b*s]],{w:.9,a:.6,reveal:r});
 }
}
function storyPanel(p,x,y,w,h,kind,r,L){
 p.box(x+3,y+5,w,h,{w:.7,a:.25,reveal:r});
 p.poly([[x,y],[x+w,y-3],[x+w+1,y+h],[x-2,y+h+2]],{fill:'paper',fa:.8,w:1.1,reveal:r});
 p.hatch([[x+5,y+h-14],[x+w-5,y+h-14],[x+w-5,y+h-8],[x+5,y+h-8]],{gap:7,a:.1,reveal:r});
 if(kind===0){
  p.box(x+22,y+24,w-44,62,{w:.8,a:.45,reveal:r});
  p.line([[x+w*.5,y+24],[x+w*.5,y+86]],{w:.7,a:.45,reveal:r});
  p.line([[x+22,y+54],[x+w-22,y+54]],{w:.7,a:.45,reveal:r});
  character(p,x+w*.56,y+132,.84,r,{seated:true});
  p.ellipse(x+w*.33,y+129,35,7,{w:1.1,reveal:r});
  p.line([[x+w*.33,y+136],[x+w*.33,y+168]],{w:1.3,reveal:r});
  cup(p,x+w*.24,y+119,5,r);cup(p,x+w*.39,y+119,5,r);
  p.line([[x+w*.65,y+131],[x+w*.65,y+153],[x+w*.84,y+153]],{w:1.1,reveal:r});
 }else if(kind===1){
  plant(p,x+w*.2,y+136,75,r);plant(p,x+w*.85,y+133,61,r);
  character(p,x+w*.51,y+134,1.04,r,{step:4*R(r,.7,1)});
  p.curve([[x+16,y+169],[x+w*.43,y+161],[x+w*.8,y+171],[x+w-15,y+166]],{w:.85,a:.55,reveal:r});
  p.curve([[x+28,y+179],[x+w*.53,y+173],[x+w-26,y+181]],{w:.7,a:.3,reveal:r});
 }else{
  p.box(x+20,y+24,49,57,{w:.8,a:.45,reveal:r});
  p.line([[x+44,y+24],[x+44,y+81]],{w:.7,a:.4,reveal:r});
  p.box(x+48,y+104,w-72,49,{r:8,w:1.1,reveal:r});
  p.line([[x+49,y+138],[x+w-24,y+138]],{w:.9,reveal:r});
  character(p,x+w*.57,y+123,.83,r,{seated:true});
  p.poly([[x+w*.39,y+100],[x+w*.52,y+106],[x+w*.65,y+99],[x+w*.65,y+113],[x+w*.52,y+119],[x+w*.39,y+113]],{fill:'paper',fa:.95,w:1,reveal:r});
  p.line([[x+w*.52,y+106],[x+w*.52,y+119]],{w:.7,reveal:r});
  plant(p,x+26,y+157,38,r);p.box(x+17,y+157,20,18,{w:1,reveal:r});
 }
 p.text(['01','02','03'][kind],x+10,y+h+24,{size:17,col:'red',reveal:r});
 p.text([L('first meeting','처음 만난 날'),L('growing closer','가까워지는 사이'),L('a day together','함께하는 하루')][kind],x+w*.54,y+h+25,{size:20,align:'center',weight:700,reveal:r});
}
export const scenes={
 'yeon-story':{
  size:[960,440],narrow:[400,890],duration:6600,
  draw(p,{t,narrow:N,L}){
   p.text(L('A preference becomes a story.','취향이 한 편의 이야기로.'),N?200:480,N?44:52,{size:N?27:32,weight:700,align:'center',reveal:R(t,0,.2)});
   p.text(L('Three moments, one imagined connection.','첫 만남에서, 함께하는 하루까지.'),N?200:480,N?77:86,{size:N?20:22,col:'soft',align:'center',reveal:R(t,.08,.28)});
   const positions=N?[[102,111],[102,357],[102,603]]:[[130,141],[382,141],[634,141]];
   positions.forEach(([x,y],i)=>{
    storyPanel(p,x,y,196,190,i,R(t,.15+i*.17,.48+i*.17),L);
    if(i<2)p.curve(N?[[298,y+94],[335,y+159],[315,y+235],[298,y+270]]:[[x+198,y+94],[x+217,y+83],[x+236,y+101],[x+250,y+95]],{col:'red',w:1.5,reveal:R(t,.42+i*.17,.58+i*.17)});
   });
   p.text(L('Your answers carry the thread.','답변이 장면 사이의 실이 됩니다.'),N?200:480,N?867:415,{size:N?19:23,col:'red',align:'center',reveal:R(t,.82,.97)});
  }
 },
 'yeon-choices':{
  size:[820,420],narrow:[400,670],duration:5600,
  draw(p,{t,narrow:N,L}){
   p.text(L('19 questions, one at a time.','19문항, 한 번에 하나씩.'),N?200:410,38,{size:N?26:29,weight:700,align:'center',reveal:R(t,0,.22)});
   const x=N?68:59,y=N?86:105;
   [false,true].forEach((long,i)=>{
    const bx=x+i*141,r=R(t,.1+i*.1,.4+i*.1);
    p.box(bx,y,116,162,{fill:'paper',fa:.7,w:1.15,reveal:r});
    character(p,bx+57,y+116,1.08,r,{long});
    p.box(bx+91,y+137,13,13,{w:1,reveal:r});
    if(i===0)p.check(bx+98,y+143,11,{col:'red',reveal:R(t,.47,.61)});
   });
   p.ring(x+58,y+79,66,92,{col:'red',a:.6,w:1.1,reveal:R(t,.48,.67)});
   p.text(L('room to imagine','상상할 여백을 남기는 얼굴'),N?200:184,y+203,{size:22,align:'center',weight:700,reveal:R(t,.3,.56)});
   p.text(L('faceless appearance choices','얼굴 없는 외모 취향 카드'),N?200:184,y+234,{size:18,align:'center',col:'soft',reveal:R(t,.35,.6)});
   const tx=N?200:611,ty=N?439:155;
   p.arrow(N?[[200,345],[200,372]]:[[350,184],[426,184]],{col:'red',w:1.4,reveal:R(t,.55,.72)});
   p.text(L('answers become scenes','답변을 장면으로'),tx,ty-42,{size:24,weight:700,align:'center',reveal:R(t,.57,.77)});
   [[L('a place to meet','처음 만날 장소'),L('first meeting','첫 만남')],[L('a way to comfort','위로를 건네는 방식'),L('growing closer','가까워지는 사이')],[L('an everyday moment','함께 보낼 일상'),L('a day together','함께하는 하루')]].forEach(([answer,scene],i)=>{
    const row=ty+i*53,r=R(t,.6+i*.05,.79+i*.05);
    p.text(answer,tx-72,row,{size:19,align:'center',reveal:r});
    p.arrow([[tx+21,row-6],[tx+43,row-6]],{col:'red',w:1,head:6,reveal:r});
    p.text(scene,tx+115,row,{size:18,align:'center',col:'red',reveal:r});
   });
   p.text(L('Choices shape the next example — and the story.','선택에 맞춰 예시를 바꾸고, 이야기로 잇습니다.'),N?200:410,N?634:389,{size:N?20:23,max:N?340:760,lh:27,align:'center',reveal:R(t,.83,.98)});
  }
 },
 'yeon-recovery':{
  size:[820,420],narrow:[400,780],duration:5900,
  draw(p,{t,narrow:N,L}){
   const x=N?145:66,y=N?43:102;
   doc(p,x,y,111,132,{lines:0,reveal:R(t,0,.28)});
   p.text('ORDER',x+16,y+34,{size:19,weight:700,reveal:R(t,.1,.3)});
   [0,1,2].forEach(i=>p.line([[x+17,y+57+i*18],[x+88-i*8,y+57+i*18]],{w:1,a:.6,reveal:R(t,.15,.35)}));
   p.check(x+81,y+106,19,{col:'red',reveal:R(t,.3,.45)});
   p.text(L('confirm the order','주문 확인'),N?200:121,N?208:279,{size:23,weight:700,align:'center',reveal:R(t,.2,.43)});
   p.text(L('confirm · look up · cancel','승인 · 조회 · 취소'),N?200:121,N?236:309,{size:17,col:'soft',align:'center',reveal:R(t,.25,.48)});
   const dx=N?200:407,dy=N?359:167;
   db(p,dx,dy,104,93,{col:'red',reveal:R(t,.28,.58)});
   p.text('Redis',dx,dy+5,{size:22,weight:700,align:'center',reveal:R(t,.4,.62)});
   p.text(L('dedicated storage','전용 저장소'),dx,dy+100,{size:23,weight:700,align:'center',reveal:R(t,.4,.65)});
   p.text(L('answers · order · result','답변 · 주문 · 결과'),dx,dy+128,{size:17,col:'soft',align:'center',reveal:R(t,.45,.7)});
   p.arrow(N?[[200,259],[200,292]]:[[201,167],[330,167]],{col:'red',reveal:R(t,.28,.49)});
   const rx=N?121:618,ry=N?566:111;
   for(let i=0;i<3;i++){
    const r=R(t,.58+i*.06,.8+i*.06),ox=rx+i*29,oy=ry-i*9;
    p.box(ox,oy,88,107,{fill:'paper',fa:1,w:1.2,reveal:r});
    character(p,ox+43,oy+75,.69,r);
    p.text('PNG',ox+44,oy+98,{size:14,col:'red',align:'center',reveal:r});
   }
   p.text(L('open the result again','결과 다시 열기'),N?200:692,N?716:279,{size:23,weight:700,align:'center',reveal:R(t,.74,.94)});
   p.text(L('save each scene','장면별로 저장'),N?200:692,N?742:309,{size:17,col:'soft',align:'center',reveal:R(t,.8,.97)});
   p.arrow(N?[[200,510],[200,541]]:[[485,167],[593,167]],{col:'red',reveal:R(t,.53,.76)});
   if(!N){
    p.curve([[685,337],[670,368],[469,374],[197,368],[122,339]],{col:'red',w:1,a:.6,dash:[4,6],reveal:R(t,.82,.98)});
    p.text(L('A return path belongs in the design.','다시 돌아올 경로까지 설계합니다.'),410,407,{size:23,align:'center',reveal:R(t,.85,.99)});
   }
  }
 }
};
