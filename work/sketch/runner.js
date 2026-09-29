// Scene runner: finds <figure class="cs-sketch" data-scene="p01-hero"> elements, sizes their
// canvas to the container (HiDPI), and draws the scene with a pencil stroke-in the first time
// it scrolls into view. Language, theme and size changes redraw the finished drawing.
import { Pen, strSeed } from './pencil.js';

const loaders = import.meta.glob('./scenes/p0*.js');
const NARROW = 520;       // container width (CSS px) below which scenes use their narrow layout
const DURATION = 2200;    // ms for a full stroke-in
const root = document.documentElement;
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

const hex = (v) => {
  v = v.trim();
  if (v.startsWith('#')) {
    const h = v.length === 4 ? v.slice(1).split('').map((c) => c + c).join('') : v.slice(1, 7);
    return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
  }
  const m = v.match(/\d+(\.\d+)?/g);
  return m ? m.slice(0, 3).map(Number) : [40, 38, 34];
};

function palette(el) {
  const cs = getComputedStyle(el);
  const pick = (n) => hex(cs.getPropertyValue(`--sk-${n}`) || '#2b2824');
  return {
    ink: pick('ink'), soft: pick('soft'), paper: pick('paper'),
    blue: pick('blue'), red: pick('red'), ochre: pick('ochre'), green: pick('green'),
    font: cs.getPropertyValue('--sk-font').trim() || '"Gaegu", sans-serif',
    dark: root.getAttribute('data-theme') === 'dark',
  };
}

const lang = () => (root.getAttribute('data-lang') === 'ko' ? 'ko' : 'en');
const env = (t, narrow) => {
  const l = lang();
  return { t, narrow, lang: l, L: (en, ko) => (l === 'ko' ? ko : en) };
};

// Load the Gaegu glyphs a scene actually uses before drawing it (Korean is split into subsets).
const fontCache = new Map();
function loadFonts(state) {
  const probe = document.createElement('canvas').getContext('2d');
  const pen = new Pen(probe, 1, { ...state.pal, font: state.pal.font }, 1);
  pen.texts = [];
  for (const narrow of [false, true]) state.scene.draw(pen, env(1, narrow));
  const text = [...new Set(pen.texts.join('').replace(/\s/g, ''))].join('') || 'a';
  const key = lang() + text;
  if (!fontCache.has(key)) {
    const fam = state.pal.font;
    const load = Promise.all([400, 700].map((w) => document.fonts.load(`${w} 20px ${fam}`, text))).catch(() => {});
    fontCache.set(key, Promise.race([load, new Promise((r) => setTimeout(r, 2500))]));
  }
  return fontCache.get(key);
}

function draw(state, t) {
  const { fig, canvas, scene } = state;
  const cw = canvas.clientWidth || fig.clientWidth;
  if (!cw) return;
  const narrow = cw < NARROW;
  const [W, H] = narrow ? scene.narrow : scene.size;
  const k = cw / W;
  const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
  const pw = Math.round(cw * dpr), ph = Math.round(H * k * dpr);
  if (canvas.width !== pw || canvas.height !== ph) { canvas.width = pw; canvas.height = ph; }
  const ctx = canvas.getContext('2d');
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, pw, ph);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const pen = new Pen(ctx, k, state.pal, state.seed);
  scene.draw(pen, env(t, narrow));
  state.t = t;
  if (t >= 1) fig.setAttribute('data-drawn', '');
}

function animate(state) {
  if (state.raf) cancelAnimationFrame(state.raf);
  const t0 = performance.now();
  const dur = state.scene.duration ?? DURATION;
  const step = (now) => {
    const t = Math.min(1, (now - t0) / dur);
    draw(state, t);
    state.raf = t < 1 ? requestAnimationFrame(step) : 0;
  };
  state.raf = requestAnimationFrame(step);
}

async function start(state, instant) {
  if (state.started) return;
  state.started = true;
  await loadFonts(state);
  if (instant || reduced.matches) draw(state, 1);
  else animate(state);
}

// Redraw finished (or in-progress) drawings at t = 1 with fresh colours, text and size.
async function refresh(state, { recolor = false } = {}) {
  if (recolor) state.pal = palette(state.fig);
  syncLabel(state);
  if (!state.started) return;
  if (state.raf) { cancelAnimationFrame(state.raf); state.raf = 0; }
  await loadFonts(state);
  draw(state, 1);
}

function syncLabel(state) {
  const alt = state.fig.getAttribute(`data-alt-${lang()}`);
  if (alt) state.canvas.setAttribute('aria-label', alt);
}

export async function initSketches() {
  const figs = [...document.querySelectorAll('figure.cs-sketch[data-scene]')];
  if (!figs.length) return;
  const files = [...new Set(figs.map((f) => f.dataset.scene.split('-')[0]))];
  const mods = {};
  await Promise.all(files.map(async (f) => {
    const load = loaders[`./scenes/${f}.js`];
    if (load) mods[f] = (await load()).default;
  }));

  const states = figs.map((fig) => {
    const id = fig.dataset.scene;
    const scene = mods[id.split('-')[0]]?.[id];
    const canvas = fig.querySelector('canvas');
    if (!scene || !canvas) return null;
    return { fig, canvas, scene, id, seed: strSeed(id), pal: palette(fig), started: false, raf: 0, t: 0, w: 0 };
  }).filter(Boolean);

  states.forEach(syncLabel);

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const st = states.find((s) => s.fig === e.target);
      io.unobserve(e.target);
      if (st) start(st);
    });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.15 });

  const ro = new ResizeObserver((entries) => {
    entries.forEach((e) => {
      const st = states.find((s) => s.fig === e.target);
      const w = Math.round(e.contentRect.width);
      if (!st || w === st.w) return;
      st.w = w;
      if (st.started && !st.raf) draw(st, 1);
    });
  });

  states.forEach((st) => {
    ro.observe(st.fig);
    if (reduced.matches) start(st, true);
    else io.observe(st.fig);
  });

  new MutationObserver((muts) => {
    const recolor = muts.some((m) => m.attributeName === 'data-theme');
    states.forEach((st) => refresh(st, { recolor }));
  }).observe(root, { attributes: true, attributeFilter: ['data-lang', 'data-theme'] });

  reduced.addEventListener?.('change', () => states.forEach((st) => (st.started ? refresh(st) : start(st, true))));
  // Printing or saving the page should show every drawing complete.
  window.addEventListener('beforeprint', () => states.forEach((st) => { st.started = true; if (st.raf) cancelAnimationFrame(st.raf); st.raf = 0; draw(st, 1); }));
  // Late-arriving glyphs (slow network) would otherwise leave fallback lettering on screen.
  document.fonts?.addEventListener?.('loadingdone', () => states.forEach((st) => { if (st.started && !st.raf) draw(st, 1); }));
}
