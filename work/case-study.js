import './case-study.css';

// Language + theme toggles; storage keys are shared with the homepage.
const root = document.documentElement;
const langBtn = document.getElementById('lang-btn');
const themeBtn = document.getElementById('theme-btn');

const store = (key, value) => {
  try { localStorage.setItem(key, value); } catch (e) { /* storage unavailable */ }
};

const setLang = (lang) => {
  root.setAttribute('data-lang', lang);
  root.lang = lang;
  if (langBtn) {
    langBtn.textContent = lang === 'en' ? 'KO' : 'EN';
    langBtn.setAttribute('aria-label', lang === 'en' ? '한국어로 보기' : 'View in English');
  }
};
const setTheme = (theme) => {
  root.setAttribute('data-theme', theme);
  if (themeBtn) themeBtn.textContent = theme === 'dark' ? '☾' : '◐';
};

setLang(root.getAttribute('data-lang') === 'ko' ? 'ko' : 'en');
setTheme(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');

langBtn?.addEventListener('click', () => {
  const next = root.getAttribute('data-lang') === 'ko' ? 'en' : 'ko';
  setLang(next);
  store('portfolio-lang', next);
});
themeBtn?.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  setTheme(next);
  store('portfolio-theme', next);
});
