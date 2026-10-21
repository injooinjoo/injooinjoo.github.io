import { readFileSync, writeFileSync } from 'node:fs';
import { webProjects } from '../content/web-projects.mjs';
const esc = s => String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
const bi = x => `<span data-en lang="en">${esc(x.en)}</span><span data-ko lang="ko">${esc(x.ko)}</span>`;
const start = '<!-- web-projects:start -->';
const end = '<!-- web-projects:end -->';
const card = (p,i) => `<article class="web-card${i<2?' web-featured':''}" id="web-${p.id}">
  <figure><img src="/projects/${p.image}" width="1440" height="1000" loading="lazy" alt="${esc(p.alt.en)}" data-alt-en="${esc(p.alt.en)}" data-alt-ko="${esc(p.alt.ko)}" /><figcaption>${bi({en:'Captured from the public site · 21 Oct 2026',ko:'공개 사이트 실제 화면 · 2026.10.21'})}</figcaption></figure>
  <div class="web-card-body"><div class="web-card-top"><span class="web-index">${String(i+1).padStart(2,'0')}${i<2?' / FEATURED':''}</span><span class="web-status">${bi(p.status)}</span></div>
  <h3>${bi({en:`${p.name} · ${p.english}`,ko:p.name})}</h3><p class="web-intro">${bi(p.intro)}</p>
  <ul class="web-points">${p.points.map(x=>`<li>${bi(x)}</li>`).join('')}</ul>
  <div class="tags">${p.tech.map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div>
  <div class="web-scope"><h4>${bi({en:'Available now',ko:'현재 제공 범위'})}</h4><p>${bi(p.scope)}</p></div>
  <a class="web-visit" href="${p.url}" target="_blank" rel="noopener noreferrer">${bi({en:`Visit ${p.english} ↗`,ko:`${p.name} 방문 ↗`})}<span class="web-domain">${new URL(p.url).hostname}</span></a></div>
</article>`;
const block = `${start}
<section id="web-projects" class="block" aria-labelledby="web-title"><div class="wrap">
<div class="section-head"><div class="section-label">PERSONAL / WEB</div><div><h2 class="section-title" id="web-title">${bi({en:'From a product idea to a working experience.',ko:'아이디어에서 직접 만져볼 수 있는 제품으로.'})}</h2><p class="section-sub">${bi({en:'Independent web services I designed, built, and deployed. Each connects a user problem to an interaction, a state model, and a clearly defined delivery scope.',ko:'사용자의 문제를 인터랙션과 상태 흐름으로 풀고, 직접 구현해 독립 배포한 웹서비스입니다. 지금 체험할 수 있는 범위와 연동 준비 중인 기능을 함께 표시했습니다.'})}</p></div></div>
<div class="web-grid">${webProjects.map(card).join('\n')}</div>
<p class="web-note">${bi({en:'Scope checked on 21 Oct 2026. These five web services are independent projects, separate from the ONDO app. Existing Sidekick app work is linked separately below.',ko:'제공 범위 확인: 2026.10.21. 위 다섯 웹서비스는 ONDO 앱과 별도로 제작한 독립 프로젝트입니다. 기존 Sidekick 앱 작업은 아래에 구분해 연결했습니다.'})}</p>
<div class="web-app-link"><div><h3>${bi({en:'App project · Sidekick',ko:'앱 프로젝트 · Sidekick'})}</h3><p>${bi({en:'An AI team for content operations. Existing case study, separate from the five web services above.',ko:'AI 직원 팀을 통한 콘텐츠 운영 앱. 위 다섯 웹서비스와 구분한 기존 케이스 스터디입니다.'})}</p></div><a class="btn ghost" href="/work/sidekick/">${bi({en:'Read case study →',ko:'케이스 스터디 →'})}</a></div>
</div></section>
${end}`;
const path = new URL('../index.html', import.meta.url);
const old = readFileSync(path,'utf8');
if (!old.includes(start) || !old.includes(end)) throw Error('Missing web project markers');
const updated = old.slice(0,old.indexOf(start)) + block + old.slice(old.indexOf(end)+end.length);
if(process.argv.includes('--check')){if(old!==updated)throw Error('Web projects are stale');}else writeFileSync(path,updated);
// The downloadable resume uses the same verified content; career/education text is untouched.
const resumePath = new URL('./resume.html', import.meta.url);
const resume = readFileSync(resumePath,'utf8');
const rs = '<!-- web-resume:start -->', re = '<!-- web-resume:end -->';
const appendix = `${rs}<section style="break-before:page"><h2>Independent Web Projects</h2><p style="margin-bottom:12pt">Designed, implemented, and independently deployed. Scope verified 21 Oct 2026. These services are separate from the ONDO app.</p>${webProjects.map(p=>`<div class="role" style="margin-bottom:14pt"><div class="role-head"><div class="left">${esc(p.english)} (${esc(p.name)})</div></div><p class="title">${esc(p.status.en)} · <a href="${p.url}">${new URL(p.url).hostname}</a></p><p>${esc(p.intro.en)}</p><ul>${p.points.slice(0,1).map(x=>`<li>${esc(x.en)}</li>`).join('')}</ul><p style="font-size:8pt;margin-top:4pt"><b>Technology:</b> ${p.tech.join(' · ')}</p><p style="font-size:8pt"><b>Scope:</b> ${esc(p.scope.en)}</p></div>`).join('')}</section>${re}`;
const updatedResume = resume.slice(0,resume.indexOf(rs)) + appendix + resume.slice(resume.indexOf(re)+re.length);
if(process.argv.includes('--check')){if(resume!==updatedResume)throw Error('Resume projects are stale');}else writeFileSync(resumePath,updatedResume);
