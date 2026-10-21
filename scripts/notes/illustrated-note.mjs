export const noteOptions=(slug,bodyClass)=>({bodyClass:`${bodyClass} pencil-note`,head:`<link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/><link href="https://fonts.googleapis.com/css2?family=Gaegu:wght@400;700&family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&display=swap" rel="stylesheet"/>`,script:`<script type="module" src="/notes/${slug}/note.js"></script>`});
export function noteParts(n,{bi,label,image}){
 const p=n.project;
 return {
  head:`<div class="note-head"><a href="/notes/">${label('← All notes','← 전체 기록')}</a><h1>${bi(n.title)}</h1><p class="meta">${p.name} · ${label('Project note','프로젝트 노트')} · <time datetime="${n.published}">${n.published}</time></p><p class="lede">${bi(p.intro)}</p></div>`,
  toolbar:`<div class="sketch-toolbar" role="group" aria-label="Drawing controls / 그림 움직임 설정"><button id="sketch-motion" type="button" aria-pressed="false">${label('Reduce motion','움직임 줄이기')}</button><button id="sketch-replay" type="button">${label('Replay drawings','다시 그리기')}</button><p id="sketch-status">${label('Drawings unfold slowly, one scene at a time.','한 장면씩 천천히 그려집니다.')}</p></div>`,
  figure:(f,hero=false)=>`<figure class="sketch-figure${hero?' sketch-hero':''}" data-note-scene="${f.id}" data-alt-en="${f.alt.en}" data-alt-ko="${f.alt.ko}" style="--ratio:${f.size};--ratio-n:${f.narrow}"><canvas role="img" aria-label="${f.alt.en}">${bi(f.alt)}</canvas><figcaption>${bi(f.caption)}</figcaption></figure>`,
  heading:(num,en,ko)=>`<h2><span class="chapter-number" aria-hidden="true">${num}</span>${label(en,ko)}</h2>`,
  evidence:`<details class="screen-evidence"><summary>${label('View the actual public-site capture','실제 공개 화면 보기')}</summary><figure class="cover">${image(p)}<figcaption>${bi(p.caption||{en:'Actual public-site capture · 21 Oct 2026',ko:'공개 사이트 실제 캡처 · 2026.10.21'})}</figcaption></figure></details>`,
  links:`<div class="links"><a href="${p.url}" target="_blank" rel="noopener noreferrer">${label('Visit the product ↗','서비스 방문 ↗')}</a><a href="/#${n.kind==='app'?'app':'web'}-${p.id}">${label('Portfolio overview →','포트폴리오 소개 →')}</a><a href="/notes/">${label('All notes →','전체 기록 →')}</a></div>`,
  verification:`<p class="meta">${label('Source documents, implementation, and the public website checked on 21 Oct 2026. These questions are verification tasks, not a committed release schedule.','프로젝트 문서·소스·공개 웹을 2026.10.21 기준으로 대조했습니다. 다음 질문은 확인 과제이며 확정된 출시 일정이 아닙니다.')}</p>`
 };
}
export function standardNote(n,helpers,figures){
 const {bi}=helpers,p=n.project,a=noteParts(n,helpers),h=a.heading;
 return `<article class="wrap reading">${a.head}${a.toolbar}${a.figure(figures[0],true)}<div class="prose">${h('01','The starting problem','출발한 문제')}<p>${bi(n.problem)}</p>${h('02','Design choices','중요한 설계 판단')}<p>${bi(n.decision)}</p></div>${a.figure(figures[1])}<div class="prose">${h('03','What is implemented','구현한 경험')}<ul>${p.points.map(x=>`<li>${bi(x)}</li>`).join('')}</ul><p class="tags">${p.tech.join(' · ')}</p></div>${a.figure(figures[2])}<div class="prose">${a.evidence}<section class="scope">${h('04','Current scope','현재 제공 범위')}<p><strong>${bi(p.status)}</strong></p><p>${bi(p.scope)}</p></section>${h('05','Questions to verify next','다음으로 확인할 질문')}<p>${bi(n.next)}</p>${a.verification}${a.links}</div></article>`;
}
