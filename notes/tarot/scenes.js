import {R} from '../../work/sketch/pencil.js';
import {doc,clock,lock} from '../../work/sketch/kit.js';

// Portfolio diagrams, not a reproduction of the service, its original card art,
// a live human consultation, or evidence that payment/AI integrations are active.
function card(p,cx,cy,w,h,r,{angle=0,face=false}={}){
 const cs=Math.cos(angle),sn=Math.sin(angle),q=pts=>pts.map(([x,y])=>[cx+x*cs-y*sn,cy+x*sn+y*cs]);
 p.poly(q([[-w/2+2,-h/2],[w/2,-h/2+1],[w/2,h/2],[-w/2,h/2-1]]),{fill:'paper',fa:1,w:1.15,reveal:r});
 p.loop(q([[-w*.39,-h*.43],[w*.39,-h*.43],[w*.39,h*.43],[-w*.39,h*.43]]),{w:.7,a:.5,reveal:r});
 if(face){
  // A schematic sun, explicitly distinct from the product's 22 original paintings.
  const yy=-h*.1;
  const circle=Array.from({length:30},(_,i)=>[Math.cos(i/29*Math.PI*2)*w*.18,yy+Math.sin(i/29*Math.PI*2)*w*.18]);
  p.loop(q(circle),{col:'green',w:1.2,reveal:r});
  for(let i=0;i<10;i++){const a=i/10*Math.PI*2;p.line(q([[Math.cos(a)*w*.24,yy+Math.sin(a)*w*.24],[Math.cos(a)*w*.33,yy+Math.sin(a)*w*.33]]),{w:.8,col:'green',reveal:r});}
  p.curve(q([[-w*.3,h*.28],[-w*.05,h*.16],[w*.15,h*.26],[w*.31,h*.18]]),{w:.7,a:.55,reveal:r});
 }else{
  p.poly(q([[0,-h*.25],[w*.26,0],[0,h*.25],[-w*.26,0]]),{fill:'green',fa:.18,w:.85,reveal:r});
  p.line(q([[-w*.15,0],[w*.15,0]]),{w:.8,reveal:r});p.line(q([[0,-w*.15],[0,w*.15]]),{w:.8,reveal:r});
  for(const y of [-h*.32,h*.32])p.dot(...q([[0,y]])[0],1.1,{col:'green',reveal:r});
 }
}
function cup(p,x,y,s,r){
 p.ellipse(x,y,s,s*.29,{w:1,reveal:r});p.curve([[x-s,y],[x-s*.8,y+s*.72],[x+s*.7,y+s*.72],[x+s,y]],{w:1.1,reveal:r});
 p.ellipse(x,y+s*.85,s*1.25,s*.24,{w:.7,a:.45,reveal:r});
 p.curve([[x+2,y-s*.5],[x-2,y-s*1.1],[x+2,y-s*1.7]],{w:.7,a:.4,reveal:r});
}
function guide(p,x,y,s,r){
 const q=pts=>pts.map(([a,b])=>[x+a*s,y+b*s]),line=(pts,o={})=>p.curve(q(pts),{w:1.4,reveal:r,...o});
 p.ellipse(x+12*s,y-123*s,13*s,11*s,{fill:'soft',fa:.08,w:1.2,reveal:r});
 line([[-18,-102],[-19,-120],[-8,-131],[9,-129],[20,-118],[20,-99]],{w:1.8});
 line([[-17,-111],[-15,-91],[-7,-83],[7,-83],[17,-95],[18,-113]]);
 line([[-17,-111],[-8,-119],[2,-121],[10,-114],[18,-111]],{w:1.8});
 p.hatch(q([[-18,-108],[-19,-120],[-6,-131],[10,-128],[20,-115],[17,-109],[0,-121]]),{gap:4,a:.2,reveal:r});
 line([[-7,-83],[-8,-75],[-29,-68],[-43,-43],[-51,-8],[-19,-4]]);
 line([[8,-83],[9,-75],[32,-64],[47,-35],[51,-7],[22,-4]]);
 p.poly(q([[-8,-76],[4,-60],[13,-47],[8,-35],[-18,-68]]),{fill:'green',fa:.25,w:1,reveal:r});
 line([[9,-75],[4,-60],[-3,-48]],{w:1.3});line([[-26,-59],[-20,-31],[-5,-13],[15,-11]]);
 line([[29,-56],[22,-31],[10,-18],[-13,-15]]);
 line([[-20,-4],[0,0],[22,-4]],{w:1.2});
 p.hatch(q([[32,-54],[44,-35],[48,-13],[35,-12],[25,-32]]),{gap:5,a:.23,reveal:r});
 p.hatch(q([[32,-54],[44,-35],[48,-13],[35,-12],[25,-32]]),{gap:8,ang:.8,a:.12,reveal:r});
}
function hand(p,x,y,s,r){
 const q=pts=>pts.map(([a,b])=>[x+a*s,y+b*s]);
 // A relaxed hand reaches from the foreground, with a long index and folded fingers.
 const contour=[[44,71],[30,48],[17,35],[4,19],[-11,5],[-16,-8],[-13,-13],[-8,-12],[6,3],[10,6],[8,-18],[10,-28],[16,-29],[20,-22],[23,4],[26,-6],[32,-8],[37,-3],[39,8],[43,0],[49,1],[53,10],[55,20],[61,13],[67,16],[72,35],[70,48],[80,65]];
 p.curve(q(contour),{w:1.4,reveal:r});
 p.curve(q([[30,48],[39,39],[47,37]]),{w:.8,a:.5,reveal:r});
 p.poly(q([[44,71],[80,65],[91,91],[60,99]]),{fill:'green',fa:.18,w:1,reveal:r});
 p.hatch(q([[73,69],[80,67],[89,88],[82,91]]),{gap:4,a:.18,reveal:r});
}
function windowFrame(p,x,y,w,h,r){
 p.box(x-7,y-7,w+14,h+14,{w:1.9,reveal:r});p.box(x,y,w,h,{w:1,a:.6,reveal:r});
 for(let i=1;i<4;i++)p.line([[x+w*i/4,y],[x+w*i/4,y+h]],{w:.8,a:.4,reveal:r});
 for(let i=1;i<3;i++)p.line([[x,y+h*i/3],[x+w,y+h*i/3]],{w:.8,a:.4,reveal:r});
 p.circle(x+w*.71,y+h*.26,w*.09,{fill:'green',fa:.13,w:.9,a:.55,reveal:r});
 p.curve([[x+8,y+h*.78],[x+w*.2,y+h*.63],[x+w*.4,y+h*.75],[x+w*.59,y+h*.58],[x+w*.88,y+h*.72],[x+w-6,y+h*.66]],{w:.9,a:.4,reveal:r});
}
export const scenes={
 'maju-room':{
  size:[960,480],narrow:[400,620],duration:6500,
  draw(p,{t,narrow:N,L}){
   p.text(L('Choosing the cards is part of the story.','카드를 고르는 시간도, 상담의 일부.'),N?200:480,N?43:42,{size:N?26:30,max:N?350:880,lh:32,weight:700,align:'center',reveal:R(t,0,.22)});
   windowFrame(p,N?210:563,N?130:102,N?142:237,N?160:184,R(t,.08,.36));
   guide(p,N?105:308,N?325:303,N?.93:1.28,R(t,.22,.52));
   const top=N?350:318,left=N?37:181,right=N?363:795,depth=N?90:100;
   p.poly([[left+29,top],[right-28,top],[right,top+depth],[left,top+depth]],{fill:'green',fa:.1,w:1.5,reveal:R(t,.28,.56)});
   p.line([[left,top+depth],[left+3,top+depth+12],[right-4,top+depth+12],[right,top+depth]],{w:1.3,reveal:R(t,.36,.6)});
   for(const x of [left+24,right-24])p.line([[x,top+depth+12],[x-3,top+depth+35]],{w:2,reveal:R(t,.38,.61)});
   p.hatch([[left+28,top+depth+34],[right-18,top+depth+34],[right+14,top+depth+41],[left-4,top+depth+41]],{gap:5,a:.14,reveal:R(t,.4,.64)});
   cup(p,N?79:284,top+27,N?10:14,R(t,.39,.63));cup(p,N?318:690,top+48,N?10:14,R(t,.4,.64));
   const cy=top+55,cx=N?195:492;
   for(let i=0;i<3;i++)card(p,cx+(i-1)*(N?45:62),cy-(i===1?R(t,.72,.88)*17:0),N?35:48,N?58:78,R(t,.47+i*.05,.72+i*.05),{angle:(i-1)*.1});
   hand(p,N?251:616,N?468:366,N?.78:.8,R(t,.59,.82));
   p.text(L('one card, by hand','한 장씩, 내 손으로'),N?149:426,N?541:456,{size:N?24:25,align:'center',col:'green',weight:700,reveal:R(t,.78,.96)});
   p.arrow(N?[[218,522],[217,494],[199,431]]:[[514,447],[524,417],[500,363]],{col:'green',w:1.1,head:7,reveal:R(t,.8,.97)});
   p.text(L('a virtual guide · a quiet tea room','가상 안내자 · 조용한 한옥 다실'),N?200:214,N?591:100,{size:N?20:21,align:'center',col:'soft',reveal:R(t,.2,.45)});
  }
 },
 'maju-cards':{
  size:[820,420],narrow:[400,690],duration:6400,
  draw(p,{t,narrow:N,L}){
   p.text(L('The motion makes the order visible.','손의 움직임으로 순서를 보여줍니다.'),N?200:410,N?38:40,{size:N?25:28,max:N?350:770,lh:30,weight:700,align:'center',reveal:R(t,0,.22)});
   const pos=N?[[103,171],[296,171],[103,444],[296,444]]:[[103,164],[307,164],[513,164],[717,164]];
   pos.forEach(([x,y],i)=>{
    const r=R(t,.12+i*.16,.37+i*.16);
    if(i===0)for(let j=0;j<5;j++)card(p,x+(j-2)*8,y+Math.abs(j-2)*2,43,70,r,{angle:(j-2)*.13});
    if(i===1)for(let j=0;j<2;j++)for(let k=0;k<3;k++)card(p,x+(j?29:-29)+k*2,y+k*3,39,66,r);
    if(i>=2)for(let j=0;j<3;j++){
     const flip=i===3?R(t,.62+j*.1,.72+j*.1):0;
     card(p,x+(j-1)*35,y-(i===2&&j===1?R(r,.65,1)*13:0),31*Math.max(.12,Math.abs(1-2*flip)),56,r,{face:flip>.5});
    }
    const labels=[L('shuffle','직접 섞기'),L('split the deck','덱 나누기'),L('choose three','세 장 선택'),L('reveal in order','한 장씩 펼치기')];
    p.text(`0${i+1}`,x,y+81,{size:17,col:'green',align:'center',reveal:r});
    p.text(labels[i],x,y+112,{size:N?21:22,align:'center',weight:700,reveal:r});
    if(i<3){
     const path=N?(i===1?[[340,300],[340,331],[103,331],[103,367]]:[[x+71,y],[x+114,y]]):[[x+66,y],[x+132,y]];
     p.arrow(path,{col:'green',w:1.05,head:7,reveal:R(t,.29+i*.16,.46+i*.16)});
    }
   });
   p.text(L('Less motion. The same sequence.','움직임을 줄여도, 같은 순서.'),N?200:410,N?626:368,{size:N?23:25,align:'center',col:'green',reveal:R(t,.82,.97)});
   p.text(L('22 original major arcana cards in the product','서비스에는 직접 제작한 메이저 아르카나 22장'),N?200:410,N?661:404,{size:N?18:20,max:N?350:760,align:'center',col:'soft',reveal:R(t,.86,.99)});
  }
 },
 'maju-states':{
  size:[820,460],narrow:[400,830],duration:6200,
  draw(p,{t,narrow:N,L}){
   p.text(L('Keep the session. Verify the order.','상담은 이어가고, 주문은 확인합니다.'),N?200:410,N?38:38,{size:N?25:28,max:N?350:770,lh:30,align:'center',weight:700,reveal:R(t,0,.22)});
   const a=N?[95,133]:[119,157],b=N?[296,133]:[408,157],c=N?[200,438]:[695,157];
   doc(p,a[0]-43,a[1]-47,86,104,{lines:3,reveal:R(t,.1,.37)});
   p.check(a[0]+23,a[1]+33,17,{col:'green',reveal:R(t,.26,.45)});
   p.text(L('before purchase','구매 전 확인'),a[0],a[1]+94,{size:22,weight:700,align:'center',reveal:R(t,.2,.43)});
   p.text(L('scope & consent','제공 범위 · 동의'),a[0],a[1]+124,{size:17,col:'soft',align:'center',reveal:R(t,.25,.48)});
   clock(p,b[0],b[1],40,{col:'green',reveal:R(t,.3,.58)});
   p.text(L('check & resume','조회하고 재개'),b[0],b[1]+94,{size:22,weight:700,align:'center',reveal:R(t,.4,.62)});
   p.text(L('verify PG approval','PG 승인 검증'),b[0],b[1]+124,{size:17,col:'soft',align:'center',reveal:R(t,.45,.67)});
   p.arrow(N?[[152,133],[238,133]]:[[186,157],[342,157]],{col:'green',reveal:R(t,.3,.52)});
   for(let i=0;i<3;i++)card(p,c[0]+(i-1)*25,c[1]+Math.abs(i-1)*5,44,74,R(t,.5+i*.04,.75+i*.04));
   lock(p,c[0]+52,c[1]-35,23,{col:'green',reveal:R(t,.62,.83)});
   p.text(L('deliver after approval','승인 뒤 제공'),c[0],c[1]+94,{size:22,weight:700,align:'center',reveal:R(t,.63,.85)});
   p.text(L('AI integration pending','AI 해석 연동 준비'),c[0],c[1]+124,{size:17,col:'soft',align:'center',reveal:R(t,.7,.9)});
   p.arrow(N?[[296,281],[296,316],[200,316],[200,385]]:[[475,157],[620,157]],{col:'green',dash:[5,5],reveal:R(t,.5,.74)});
   const y=N?688:371;
   p.curve(N?[[296,281],[365,307],[365,615],[310,647],[110,647]]:[[408,296],[408,329],[274,353]],{w:1.1,col:'green',dash:[4,5],reveal:R(t,.67,.87)});
   p.text(L('not delivered?','미제공이면'),N?108:231,y,{size:22,align:'center',reveal:R(t,.7,.89)});
   p.arrow([[N?180:311,y-6],[N?213:397,y-6]],{w:1.1,col:'green',reveal:R(t,.75,.92)});
   p.text(L('cancel verified','PG 취소 확인'),N?292:530,y,{size:N?21:23,align:'center',weight:700,col:'green',reveal:R(t,.78,.95)});
   p.text(L('Implemented state flow. Purchase and AI readings remain disabled.','상태 흐름은 구현 · 현재 구매와 AI 해석은 비활성'),N?200:410,N?780:440,{size:N?19:21,max:N?345:780,lh:26,align:'center',col:'soft',reveal:R(t,.84,.99)});
  }
 }
};
