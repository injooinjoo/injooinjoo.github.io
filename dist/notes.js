const root=document.documentElement;
const lang=document.getElementById('lang-btn');
const theme=document.getElementById('theme-btn');
function setLang(value){root.dataset.lang=value;root.lang=value;lang.textContent=value==='ko'?'EN':'KO';lang.setAttribute('aria-label',value==='ko'?'View in English':'한국어로 보기');document.querySelectorAll('[data-alt-en]').forEach(img=>img.alt=img.getAttribute(`data-alt-${value}`));}
function setTheme(value){root.dataset.theme=value;theme.setAttribute('aria-pressed',String(value==='dark'));}
try{setLang(localStorage.getItem('portfolio-lang')==='ko'?'ko':'en');setTheme(localStorage.getItem('portfolio-theme')==='dark'?'dark':'light');}catch{setLang('en');}
lang.addEventListener('click',()=>{setLang(root.dataset.lang==='ko'?'en':'ko');try{localStorage.setItem('portfolio-lang',root.dataset.lang);}catch{}});
theme.addEventListener('click',()=>{setTheme(root.dataset.theme==='dark'?'light':'dark');try{localStorage.setItem('portfolio-theme',root.dataset.theme);}catch{}});
