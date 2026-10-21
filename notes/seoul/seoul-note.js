import './seoul-note.css';
import {Pen,strSeed} from '../../work/sketch/pencil.js';
import {scenes} from './scenes.js';

const root=document.documentElement;
const motionQuery='(prefers-reduced-motion: reduce)';
const reduced=matchMedia(motionQuery);
const motion=document.getElementById('sketch-motion');
const replay=document.getElementById('sketch-replay');
const status=document.getElementById('sketch-status');
let paused=false,printing=false,raf=0,last=0;
const states=[...document.querySelectorAll('[data-note-scene]')].map(fig=>({fig,canvas:fig.querySelector('canvas'),scene:scenes[fig.dataset.noteScene],elapsed:0,visible:false,seed:strSeed(fig.dataset.noteScene)}));
const isStill=()=>paused||reduced.matches;
const lang=()=>root.lang==='ko'?'ko':'en';
const rgb=value=>{const hex=value.trim().replace('#','');return [0,2,4].map(i=>parseInt(hex.slice(i,i+2),16));};
function palette(){const s=getComputedStyle(document.body);return Object.fromEntries(['ink','soft','paper','blue','red','ochre','green'].map(k=>[k,rgb(s.getPropertyValue(`--sk-${k}`))]).concat([['font','"Gaegu", cursive'],['dark',!printing&&root.dataset.theme==='dark']]));}
function env(t,narrow){return {t,narrow,lang:lang(),L:(en,ko)=>lang()==='ko'?ko:en};}
function draw(st,complete=false){
 const width=st.canvas.clientWidth;if(!width)return;
 const narrow=width<520,[w,h]=narrow?st.scene.narrow:st.scene.size;
 const dpr=Math.min(devicePixelRatio||1,2),height=width*h/w;
 const pw=Math.round(width*dpr),ph=Math.round(height*dpr);
 if(st.canvas.width!==pw||st.canvas.height!==ph){st.canvas.width=pw;st.canvas.height=ph;}
 const c=st.canvas.getContext('2d');c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,pw,ph);c.setTransform(dpr,0,0,dpr,0,0);
 const t=complete?1:Math.min(1,st.elapsed/st.scene.duration);
 // The geometry stays fixed; only graphite wobble changes at 3 Hz while drawing.
 const boil=t<1&&!isStill()&&!printing?Math.floor(st.elapsed/333)*.07:0;
 st.scene.draw(new Pen(c,width/w,palette(),st.seed+boil),env(t,narrow));
 st.canvas.setAttribute('aria-label',st.fig.getAttribute(`data-alt-${lang()}`));
 st.fig.dataset.drawn=t>=1?'complete':'drawing';
 st.fig.dataset.progress=t.toFixed(3);
}
function preparePrint(st){
 // Chromium's PDF canvas recorder can omit createPattern strokes. Rasterize our own
 // completed procedural drawing for print, so the graphite survives the PDF path.
 const [w,h]=st.scene.size,cv=document.createElement('canvas');cv.width=w*2;cv.height=h*2;
 st.scene.draw(new Pen(cv.getContext('2d'),2,palette(),st.seed),env(1,false));
 let img=st.fig.querySelector('.sketch-print');if(!img){img=document.createElement('img');img.className='sketch-print';st.canvas.after(img);}
 img.width=w*2;img.height=h*2;img.alt=st.fig.getAttribute(`data-alt-${lang()}`);img.src=cv.toDataURL();
}
function stop(){if(raf)cancelAnimationFrame(raf);raf=0;last=0;}
function canAnimate(){return !printing&&!isStill()&&!document.hidden&&states.some(st=>st.visible&&st.elapsed<st.scene.duration+1200);}
function tick(now){
 raf=0;const dt=last?Math.min(now-last,100):0;last=now;
 states.forEach(st=>{if(!st.visible||st.elapsed>=st.scene.duration+1200)return;const previous=st.elapsed;st.elapsed+=dt;
  // A 12 fps drawing cadence leaves the UI free to scroll smoothly.
  if(Math.floor(previous/83)!==Math.floor(st.elapsed/83))draw(st);
 });
 if(canAnimate())raf=requestAnimationFrame(tick);else last=0;
}
function start(){if(!raf&&canAnimate())raf=requestAnimationFrame(tick);}
function labels(){
 const ko=lang()==='ko',still=isStill();
 motion.textContent=ko?(still?'움직임 켜기':'움직임 줄이기'):(still?'Enable motion':'Reduce motion');
 motion.setAttribute('aria-pressed',String(still));motion.disabled=reduced.matches;
 replay.textContent=ko?'다시 그리기':'Replay drawings';replay.disabled=still;
 status.textContent=reduced.matches?(ko?'기기 설정에 따라 정지 그림으로 표시합니다.':'Static drawings follow your reduced-motion setting.'):paused?(ko?'완성된 정지 그림으로 표시합니다.':'Showing completed, still drawings.'):(ko?'한 장면씩 천천히 그려집니다.':'Drawings unfold slowly, one scene at a time.');
 document.body.dataset.sketchMotion=still?'still':'playing';
}
function finishAll(){states.forEach(st=>{st.elapsed=st.scene.duration+1200;draw(st,true);});}
function changeMotion(){labels();if(isStill()){stop();finishAll();}else{states.forEach(st=>st.elapsed=0);start();}}
motion.addEventListener('click',()=>{paused=!paused;changeMotion();});
replay.addEventListener('click',()=>{if(isStill())return;states.forEach(st=>{st.elapsed=0;draw(st);});last=0;start();});
let lastPreference=reduced.matches;
function syncMotionPreference(){
 const current=reduced.matches;if(current===lastPreference)return;
 lastPreference=current;changeMotion();
}
reduced.addEventListener('change',syncMotionPreference);
// Some Chromium builds update matches but omit the change event on an existing
// MediaQueryList. A cheap visible-page check keeps OS accessibility changes live.
setInterval(()=>{if(!document.hidden)syncMotionPreference();},1000);
window.addEventListener('focus',syncMotionPreference);
const io=new IntersectionObserver(entries=>{entries.forEach(entry=>{const st=states.find(st=>st.fig===entry.target);st.visible=entry.isIntersecting;});if(canAnimate())start();else stop();},{threshold:.06});
const ro=new ResizeObserver(()=>states.forEach(st=>draw(st,isStill()||printing)));
states.forEach(st=>{draw(st,isStill());io.observe(st.fig);ro.observe(st.canvas);});
new MutationObserver(()=>{labels();states.forEach(st=>draw(st,isStill()||printing));}).observe(root,{attributes:true,attributeFilter:['data-lang','data-theme']});
document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();else{syncMotionPreference();start();}});
window.addEventListener('beforeprint',()=>{printing=true;stop();states.forEach(st=>{draw(st,true);preparePrint(st);});});
window.addEventListener('afterprint',()=>{printing=false;states.forEach(st=>draw(st,isStill()));start();});
// Gather the exact glyphs, in both layouts/languages, before resolving font subsets.
const probe=document.createElement('canvas').getContext('2d');const pen=new Pen(probe,1,palette(),1);pen.texts=[];
for(const scene of Object.values(scenes))for(const language of ['en','ko'])for(const narrow of [true,false])scene.draw(pen,{t:1,narrow,lang:language,L:(en,ko)=>language==='ko'?ko:en});
const glyphs=[...new Set(pen.texts.join(''))].join('');
Promise.all([400,700].map(w=>document.fonts.load(`${w} 24px Gaegu`,glyphs))).then(()=>states.forEach(st=>{draw(st,isStill()||printing);preparePrint(st);})).catch(()=>{});
// Seeded paper tooth, generated locally. No raster assets or external drawing library.
const paper=document.createElement('canvas');paper.width=paper.height=128;const pc=paper.getContext('2d'),grain=pc.createImageData(128,128);let seed=51;
for(let i=0;i<grain.data.length;i+=4){seed=(seed*16807)%2147483647;grain.data[i]=grain.data[i+1]=grain.data[i+2]=80;grain.data[i+3]=seed%12;}
pc.putImageData(grain,0,0);document.body.style.backgroundImage=`url(${paper.toDataURL()})`;
labels();if(isStill())finishAll();
