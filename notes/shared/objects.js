import {R} from '../../work/sketch/pencil.js';
import {doc} from '../../work/sketch/kit.js';
export function pencil(p,x,y,s,r){
 p.poly([[x,y],[x+s*.83,y-s*.83],[x+s*.94,y-s*.72],[x+s*.11,y+s*.11]],{fill:'blue',fa:.2,w:1.1,reveal:r});p.poly([[x,y],[x-4,y+9],[x+s*.11,y+s*.11]],{w:1.1,reveal:r});p.line([[x+s*.13,y-s*.02],[x+s*.86,y-s*.75]],{w:.75,a:.55,reveal:r});
}
export function folder(p,x,y,w,h,r){
 p.poly([[x,y+10],[x,y],[x+w*.37,y],[x+w*.44,y+10],[x+w,y+10],[x+w,y+h],[x,y+h]],{fill:'blue',fa:.12,w:1.4,reveal:r});p.line([[x+4,y+19],[x+w-4,y+19]],{w:.8,a:.4,reveal:r});
}
export function paper(p,x,y,w,h,r,title){doc(p,x,y,w,h,{lines:title?3:4,title,size:18,reveal:r});}
export function fan(p,cx,cy,s,r){
 const a=Array.from({length:21},(_,i)=>{const t=Math.PI+Math.PI*i/20;return [cx+Math.cos(t)*s,cy+Math.sin(t)*s];});p.poly([[cx,cy],...a],{fill:'blue',fa:.15,w:1.3,reveal:r});for(let i=0;i<8;i++){const t=Math.PI+Math.PI*i/7;p.line([[cx,cy],[cx+Math.cos(t)*s,cy+Math.sin(t)*s]],{w:.7,a:.5,reveal:r});}
}
export function film(p,x,y,w,h,r,draw){
 p.box(x,y,w,h,{w:1.6,reveal:r});for(let i=0;i<6;i++)for(const dx of [5,w-12])p.box(x+dx,y+8+i*(h-19)/6,7,10,{w:.65,a:.4,reveal:r});p.line([[x+18,y],[x+18,y+h]],{w:.7,a:.4,reveal:r});p.line([[x+w-18,y],[x+w-18,y+h]],{w:.7,a:.4,reveal:r});draw?.(R(r,.15,1));
}
