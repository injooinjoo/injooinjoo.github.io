// Graphite pencil renderer for the case-study sketches.
// Every scene is drawn in a fixed design box (W × H units) and scaled to its canvas.
// Lines are resampled, wobbled with smooth value noise and stroked in 2–3 light passes
// through a grain texture, which is what makes a straight line read as drawn by hand.

const TAU = Math.PI * 2;
export const clamp = (x, a = 0, b = 1) => (x < a ? a : x > b ? b : x);
export const lerp = (a, b, t) => a + (b - a) * t;
export const ease = (t) => { t = clamp(t); return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; };
// Progress of t inside [a, b], eased. Scenes use this to stage their strokes.
export const R = (t, a, b) => ease(clamp((t - a) / (b - a)));

// ---- deterministic noise: the same scene always wobbles the same way ----
export const hash = (n) => { const s = Math.sin(n * 127.1 + 311.7) * 43758.5453123; return s - Math.floor(s); };
const TABLE = new Float32Array(512);
{
  let a = 90210;
  const rnd = () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  for (let i = 0; i < 512; i++) TABLE[i] = rnd() * 2 - 1;
}
export const noise = (x) => { const i = Math.floor(x), f = x - i, u = f * f * (3 - 2 * f); const a = TABLE[i & 511]; return a + (TABLE[(i + 1) & 511] - a) * u; };
export const strSeed = (s) => { let h = 7; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 100003; return h / 97; };

// ---- grain: a small noise tile used as the stroke/fill pattern ----
const grainCache = new WeakMap();
function grain(ctx, rgb, soft) {
  let m = grainCache.get(ctx);
  if (!m) { m = new Map(); grainCache.set(ctx, m); }
  const key = rgb.join(',') + (soft ? 's' : '');
  if (m.has(key)) return m.get(key);
  const S = 96;
  const cv = typeof OffscreenCanvas !== 'undefined' ? new OffscreenCanvas(S, S) : Object.assign(document.createElement('canvas'), { width: S, height: S });
  const g = cv.getContext('2d');
  const img = g.createImageData(S, S);
  let seed = 1234 + rgb[0] * 7 + rgb[1] * 13 + rgb[2] * 17 + (soft ? 99 : 0);
  const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
  for (let i = 0; i < S * S; i++) {
    const x = i % S, y = (i / S) | 0;
    // Paper tooth: fine random speckle plus a faint diagonal fibre.
    const fibre = 0.5 + 0.5 * Math.sin((x * 0.9 + y * 0.35) * 0.7 + Math.sin(y * 0.21) * 2);
    const r = rnd();
    const a = soft ? 0.55 + 0.45 * r * (0.7 + 0.3 * fibre) : (r < 0.1 ? 0.25 : 0.62 + 0.38 * r) * (0.82 + 0.18 * fibre);
    img.data[i * 4] = rgb[0]; img.data[i * 4 + 1] = rgb[1]; img.data[i * 4 + 2] = rgb[2];
    img.data[i * 4 + 3] = Math.round(255 * a);
  }
  g.putImageData(img, 0, 0);
  const pat = ctx.createPattern(cv, 'repeat');
  m.set(key, pat);
  return pat;
}

// ---- pen: owns the context, palette and scale for one draw ----
export class Pen {
  // palette: { ink, soft, paper, blue, red, ochre, green: [r,g,b], font, dark }
  constructor(ctx, scale, palette, seed = 1) {
    this.c = ctx;
    this.k = scale;            // design units → CSS pixels (ctx already carries the DPR transform)
    this.p = palette;
    this.seed = seed * 17.23;
    this.n = 0;
    this.texts = null;         // set to [] to collect label strings (font preloading)
  }

  nextSeed() { this.n += 1; return this.seed + this.n * 7.31; }
  rgb(col) { return Array.isArray(col) ? col : this.p[col ?? 'ink'] ?? this.p.ink; }
  css(col, a = 1) { const [r, g, b] = this.rgb(col); return `rgba(${r},${g},${b},${clamp(a)})`; }

  // A wobbling multi-pass graphite line through pts. reveal ∈ [0,1] draws it progressively.
  line(pts, o = {}) {
    const reveal = o.reveal ?? 1;
    const seed = o.seed ?? this.nextSeed();
    if (reveal <= 0 || pts.length < 2 || this.texts) return;
    const k = this.k, c = this.c;
    const w = (o.w ?? 1.5) * Math.max(0.75, Math.min(1.35, k));
    const wob = (o.wob ?? 1.1) * Math.min(1.5, Math.max(0.7, k));
    const passes = o.pass ?? 2;
    const alpha = o.a ?? 0.9;

    // Resample in device space so the wobble frequency is independent of the input.
    const P = [];
    let acc = 0;
    const src = o.closed ? [...pts, pts[0]] : pts;
    for (let i = 0; i < src.length; i++) {
      const x = src[i][0] * k, y = src[i][1] * k;
      if (i === 0) { P.push([x, y, 0]); continue; }
      const [lx, ly] = P[P.length - 1];
      const d = Math.hypot(x - lx, y - ly);
      const steps = Math.max(1, Math.round(d / 6));
      for (let j = 1; j <= steps; j++) { const f = j / steps; P.push([lx + (x - lx) * f, ly + (y - ly) * f, acc + d * f]); }
      acc += d;
    }
    let m = P.length;
    if (reveal < 1) {
      const lim = acc * reveal;
      let j = 1; while (j < m - 1 && P[j][2] < lim) j++;
      m = j + 1;
    }
    if (m < 2) return;

    c.save();
    c.lineCap = 'round';
    c.lineJoin = 'round';
    c.strokeStyle = grain(c, this.rgb(o.col), false);
    if (o.dash) c.setLineDash(o.dash.map((v) => v * k));
    for (let pass = 0; pass < passes; pass++) {
      const sd = seed + pass * 3.917;
      const amp = wob * (pass === 0 ? 1 : 1.3);
      const ox = (hash(sd + 9.1) - 0.5) * wob * 1.3, oy = (hash(sd + 4.7) - 0.5) * wob * 1.3;
      const trim0 = pass > 0 && !o.closed ? Math.floor(hash(sd + 1.3) * 3) : 0;
      const trim1 = pass > 0 && !o.closed ? Math.floor(hash(sd + 2.9) * 3) : 0;
      c.beginPath();
      let first = true;
      for (let j = trim0; j < m - trim1; j++) {
        const s = P[j][2] / Math.max(0.5, k);
        const x = P[j][0] + noise(s * 0.04 + sd) * amp + noise(s * 0.19 + sd * 1.7 + 30) * amp * 0.3 + ox;
        const y = P[j][1] + noise(s * 0.04 + sd + 57.3) * amp + noise(s * 0.19 + sd * 1.3 + 71) * amp * 0.3 + oy;
        if (first) { c.moveTo(x, y); first = false; } else c.lineTo(x, y);
      }
      c.lineWidth = w * (1 - 0.18 * pass) * (0.85 + 0.3 * hash(sd + 2.2));
      c.globalAlpha = alpha * (pass === 0 ? 1 : 0.5);
      c.stroke();
    }
    c.restore();
  }

  loop(pts, o = {}) { this.line(pts, { ...o, closed: true }); }

  // Smooth curve through control points (Catmull-Rom), then drawn as a line.
  curve(pts, o = {}) { this.line(smooth(pts, o.closed), o); }

  // Watercolour-ish wash: two slightly displaced, out-of-register fills.
  // reveal sweeps the wash in from the left, like a brush pass.
  wash(pts, o = {}) {
    const reveal = o.reveal ?? 1;
    if (reveal <= 0 || this.texts) return;
    const k = this.k, c = this.c;
    const seed = o.seed ?? this.nextSeed();
    const xs = pts.map((p) => p[0]);
    const x0 = Math.min(...xs) - 6, x1 = Math.max(...xs) + 6;
    c.save();
    if (reveal < 1) { c.beginPath(); c.rect(x0 * k, -1e4, (x1 - x0) * reveal * k, 2e4); c.clip(); }
    // Light paper: pigment darkens what is under it. Dark paper: pigment glows a little
    // (screen), except 'paper', which is used to cover things and must stay opaque.
    const cover = o.col === 'paper';
    c.globalCompositeOperation = cover ? 'source-over' : this.p.dark ? 'screen' : 'multiply';
    c.fillStyle = grain(c, this.rgb(o.col ?? 'blue'), true);
    const a = (o.a ?? 0.32) * (this.p.dark && !cover ? 0.95 : 1);
    for (let pass = 0; pass < 2; pass++) {
      const sd = seed + pass * 5.3;
      const dx = (o.dx ?? 1.6) * (pass ? -0.6 : 1), dy = (o.dy ?? 1.4) * (pass ? -0.5 : 1);
      c.beginPath();
      const Q = densify(pts, 10);
      Q.forEach((p, i) => {
        const x = (p[0] + dx + noise(i * 0.35 + sd) * 1.6) * k;
        const y = (p[1] + dy + noise(i * 0.35 + sd + 40) * 1.6) * k;
        if (i) c.lineTo(x, y); else c.moveTo(x, y);
      });
      c.closePath();
      c.globalAlpha = pass ? a * 0.45 : a;
      c.fill();
    }
    c.restore();
  }

  // Parallel hatching clipped to a polygon. Rows appear one by one with reveal.
  hatch(poly, o = {}) {
    const reveal = o.reveal ?? 1;
    if (reveal <= 0 || this.texts) return;
    const ang = o.ang ?? -0.85, gap = o.gap ?? 5.5;
    const cs = Math.cos(ang), sn = Math.sin(ang);
    const rx = poly.map((p) => p[0] * cs + p[1] * sn);
    const ry = poly.map((p) => -p[0] * sn + p[1] * cs);
    const y0 = Math.min(...ry), y1 = Math.max(...ry);
    const rows = [];
    for (let y = y0 + gap * 0.5; y < y1; y += gap) {
      const xs = [];
      for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
        if ((ry[i] <= y) !== (ry[j] <= y)) xs.push(rx[i] + ((y - ry[i]) / (ry[j] - ry[i])) * (rx[j] - rx[i]));
      }
      xs.sort((a, b) => a - b);
      for (let q = 0; q + 1 < xs.length; q += 2) rows.push([xs[q] + 1.2, xs[q + 1] - 1.2, y]);
    }
    const show = Math.ceil(rows.length * reveal);
    const k = this.k, c = this.c;
    const sd = o.seed ?? this.nextSeed();
    c.save();
    c.beginPath();
    rows.slice(0, show).forEach(([xa, xb, y], i) => {
      if (xb - xa < 1) return;
      const j0 = (hash(i * 3.3 + sd) - 0.5) * gap * 0.45, j1 = (hash(i * 5.1 + sd) - 0.5) * gap * 0.45;
      const e0 = hash(i * 1.7 + sd) * 2, e1 = hash(i * 2.3 + sd) * 2;
      c.moveTo(((xa + e0) * cs - (y + j0) * sn) * k, ((xa + e0) * sn + (y + j0) * cs) * k);
      c.lineTo(((xb - e1) * cs - (y + j1) * sn) * k, ((xb - e1) * sn + (y + j1) * cs) * k);
    });
    c.lineCap = 'round';
    c.lineWidth = (o.w ?? 0.85) * Math.max(0.7, Math.min(1.3, k));
    c.strokeStyle = grain(c, this.rgb(o.col), false);
    c.globalAlpha = o.a ?? 0.4;
    c.stroke();
    c.restore();
  }

  // ---- shapes ----
  // Sketchy box: four strokes that overshoot at the corners. r > 0 draws a rounded loop instead.
  box(x, y, w, h, o = {}) {
    const rev = o.reveal ?? 1;
    const r = o.r ?? 0;
    const pts = r ? roundRect(x, y, w, h, r) : [[x, y], [x + w, y], [x + w, y + h], [x, y + h]];
    if (o.fill) this.wash(pts, { col: o.fill, a: o.fa, reveal: rev });
    if (o.hatch) this.hatch(pts, { ...o.hatch, reveal: rev });
    if (o.stroke === false) return;
    if (r) { this.loop(pts, { ...o, reveal: rev }); return; }
    const ov = o.over ?? 3;
    const sides = [
      [[x - ov * 0.6, y], [x + w + ov, y]],
      [[x + w, y - ov * 0.6], [x + w, y + h + ov]],
      [[x + w + ov * 0.6, y + h], [x - ov, y + h]],
      [[x, y + h + ov * 0.6], [x, y - ov]],
    ];
    sides.forEach((s, i) => this.line(s, { ...o, pass: o.pass ?? 2, reveal: clamp(rev * 4 - i) }));
  }
  circle(cx, cy, r, o = {}) { this.ellipse(cx, cy, r, r, o); }
  // Hand-drawn ellipse: a little more than one turn, so the ends overlap.
  ellipse(cx, cy, rx, ry, o = {}) {
    const rev = o.reveal ?? 1;
    const poly = ellipse(cx, cy, rx, ry, 36);
    if (o.fill) this.wash(poly, { col: o.fill, a: o.fa, reveal: rev });
    if (o.hatch) this.hatch(poly, { ...o.hatch, reveal: rev });
    if (o.stroke === false) return;
    const sd = o.seed ?? this.nextSeed();
    const a0 = hash(sd) * TAU;
    const turn = o.turn ?? 1.08;
    const n = Math.max(18, Math.round(Math.max(rx, ry) * 1.2));
    const pts = [];
    for (let i = 0; i <= n; i++) {
      const a = a0 + (i / n) * TAU * turn;
      const q = 1 + (i / n) * 0.04 * (hash(sd + 3) - 0.5);
      pts.push([cx + Math.cos(a) * rx * q, cy + Math.sin(a) * ry * q]);
    }
    this.line(pts, { ...o, seed: sd, reveal: rev });
  }
  poly(pts, o = {}) {
    const rev = o.reveal ?? 1;
    if (o.fill) this.wash(pts, { col: o.fill, a: o.fa, reveal: rev });
    if (o.hatch) this.hatch(pts, { ...o.hatch, reveal: rev });
    if (o.stroke === false) return;
    this.loop(pts, { ...o, reveal: rev });
  }
  dot(x, y, r, o = {}) {
    const rev = o.reveal ?? 1;
    if (rev <= 0 || this.texts) return;
    const c = this.c, k = this.k;
    c.save();
    c.beginPath(); c.arc(x * k, y * k, r * k * (0.4 + 0.6 * rev), 0, TAU);
    c.fillStyle = grain(c, this.rgb(o.col), false);
    c.globalAlpha = o.a ?? 0.85;
    c.fill();
    c.restore();
  }

  // Arrow along a straight or bent path; the head is drawn once the shaft is complete.
  arrow(pts, o = {}) {
    const reveal = o.reveal ?? 1;
    const path = pts.length === 2 && o.bend ? bendPath(pts[0], pts[1], o.bend) : pts;
    this.line(path, { w: 1.4, ...o, reveal });
    if (reveal < 0.97) return;
    const a = path[path.length - 2], b = path[path.length - 1];
    const ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
    const s = o.head ?? 10;
    this.line([[b[0] - Math.cos(ang - 0.42) * s, b[1] - Math.sin(ang - 0.42) * s], b, [b[0] - Math.cos(ang + 0.42) * s, b[1] - Math.sin(ang + 0.42) * s]], { w: 1.4, ...o, dash: null, reveal: 1 });
  }

  // ---- lettering ----
  font(size, weight = 400) { return `${weight} ${size * this.k}px ${this.p.font}`; }
  tw(str, size = 20, weight = 400) { this.c.font = this.font(size, weight); return this.c.measureText(String(str)).width / this.k; }
  // Break a string into lines no wider than max (design units). Korean breaks between words first.
  wrap(str, max, size = 20, weight = 400) {
    const out = [];
    for (const para of String(str).split('\n')) {
      const words = para.split(' ');
      let line = '';
      for (const wd of words) {
        const t = line ? `${line} ${wd}` : wd;
        if (!line || this.tw(t, size, weight) <= max) { line = t; continue; }
        out.push(line); line = wd;
      }
      out.push(line);
    }
    return out;
  }
  // Largest size ≤ size (down to min) at which str fits in max design units.
  fit(str, max, size = 20, min = 13, weight = 400) {
    let s = size;
    while (s > min && this.tw(str, s, weight) > max) s -= 0.5;
    return s;
  }
  // Hand lettering. reveal sweeps the text in left to right, as if being written.
  text(str, x, y, o = {}) {
    if (str == null || str === '') return;
    // Gaegu's curly apostrophe sits apart from the letters; the straight one reads better.
    str = String(str).replace(/[’‘]/g, "'");
    if (this.texts) { this.texts.push(str); return; }
    const reveal = o.reveal ?? 1;
    if (reveal <= 0) return;
    const c = this.c, k = this.k;
    const size = o.size ?? 20, weight = o.weight ?? 400;
    const lh = o.lh ?? size * 1.2;
    const lines = o.max ? this.wrap(str, o.max, size, weight) : str.split('\n');
    const align = o.align ?? 'left';
    const base = o.base ?? 'alphabetic';
    let y0 = y;
    if (o.vcenter) y0 = y - ((lines.length - 1) * lh) / 2;
    c.save();
    c.font = this.font(size, weight);
    c.textAlign = align;
    c.textBaseline = o.vcenter ? 'middle' : base;
    c.fillStyle = this.css(o.col, 1);
    c.globalAlpha = (o.a ?? 0.92) * clamp(reveal * 3);
    if (reveal < 1) {
      const wmax = Math.max(...lines.map((l) => this.tw(l, size, weight)));
      const left = align === 'center' ? x - wmax / 2 : align === 'right' ? x - wmax : x;
      c.beginPath();
      c.rect((left - 4) * k, (y0 - size * 1.4) * k, (wmax + 8) * reveal * k, (lines.length * lh + size * 1.6) * k);
      c.clip();
    }
    if (o.rot) { c.translate(x * k, y0 * k); c.rotate(o.rot); c.translate(-x * k, -y0 * k); }
    lines.forEach((ln, i) => c.fillText(ln, x * k, (y0 + i * lh) * k));
    c.restore();
    return lines.length;
  }

  // ---- marks ----
  underline(x0, x1, y, o = {}) { this.line([[x0, y], [lerp(x0, x1, 0.5), y + 1.5], [x1, y - 0.8]], { w: 1.3, wob: 1.4, ...o }); }
  check(x, y, s = 14, o = {}) { this.line([[x - s * 0.5, y], [x - s * 0.12, y + s * 0.4], [x + s * 0.55, y - s * 0.5]], { w: 2, ...o }); }
  cross(x, y, s = 12, o = {}) {
    const r = o.reveal ?? 1;
    this.line([[x - s / 2, y - s / 2], [x + s / 2, y + s / 2]], { w: 1.8, ...o, reveal: clamp(r * 2) });
    this.line([[x + s / 2, y - s / 2], [x - s / 2, y + s / 2]], { w: 1.8, ...o, reveal: clamp(r * 2 - 1) });
  }
  // Loose loop around something, as when a note-taker circles a word.
  ring(cx, cy, rx, ry, o = {}) { this.ellipse(cx, cy, rx, ry, { turn: 1.18, w: 1.4, wob: 1.8, ...o }); }
  // Zigzag scribble filling a box, for shading or crossing something out.
  scribble(x, y, w, h, o = {}) {
    const n = Math.max(3, Math.round(w / (o.gap ?? 6)));
    const pts = [];
    for (let i = 0; i <= n; i++) pts.push([x + (i / n) * w, i % 2 ? y + h : y]);
    this.line(pts, { w: 1, wob: 1.2, a: 0.6, pass: 1, ...o });
  }
  tally(x, y, count, o = {}) {
    const h = o.h ?? 18, gap = o.gap ?? 6;
    for (let i = 0; i < count; i++) {
      const g = Math.floor(i / 5), j = i % 5;
      const gx = x + g * gap * 5.8;
      const rev = clamp((o.reveal ?? 1) * count - i);
      if (j === 4) this.line([[gx - gap * 0.7, y + h * 0.8], [gx + gap * 3.7, y + h * 0.15]], { w: 1.3, ...o, reveal: rev });
      else this.line([[gx + j * gap, y], [gx + j * gap + 0.8, y + h]], { w: 1.3, ...o, reveal: rev });
    }
  }
}

// ---- geometry helpers ----
export function roundRect(x, y, w, h, r = 6) {
  r = Math.min(r, w / 2, h / 2);
  const pts = [];
  const arc = (cx, cy, a0) => { for (let i = 0; i <= 4; i++) { const a = a0 + (i / 4) * (Math.PI / 2); pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]); } };
  arc(x + w - r, y + r, -Math.PI / 2);
  arc(x + w - r, y + h - r, 0);
  arc(x + r, y + h - r, Math.PI / 2);
  arc(x + r, y + r, Math.PI);
  return pts;
}
export function ellipse(cx, cy, rx, ry, n = 36, a0 = 0, a1 = TAU) {
  const pts = [];
  for (let i = 0; i < n; i++) { const a = a0 + ((a1 - a0) * i) / n; pts.push([cx + Math.cos(a) * rx, cy + Math.sin(a) * ry]); }
  return pts;
}
export function arcPts(cx, cy, r, a0, a1, n = 24) {
  const pts = [];
  for (let i = 0; i <= n; i++) { const a = a0 + ((a1 - a0) * i) / n; pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]); }
  return pts;
}
export function bendPath(a, b, bend = 0.25, n = 18) {
  const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2;
  const dx = b[0] - a[0], dy = b[1] - a[1];
  const cx = mx - dy * bend, cy = my + dx * bend;
  const pts = [];
  for (let i = 0; i <= n; i++) { const t = i / n; pts.push([(1 - t) * (1 - t) * a[0] + 2 * (1 - t) * t * cx + t * t * b[0], (1 - t) * (1 - t) * a[1] + 2 * (1 - t) * t * cy + t * t * b[1]]); }
  return pts;
}
export function smooth(pts, closed = false, seg = 8) {
  const n = pts.length;
  if (n < 3) return pts;
  const P = (i) => (closed ? pts[(i + n) % n] : pts[Math.max(0, Math.min(n - 1, i))]);
  const out = [];
  const last = closed ? n : n - 1;
  for (let i = 0; i < last; i++) {
    const p0 = P(i - 1), p1 = P(i), p2 = P(i + 1), p3 = P(i + 2);
    for (let j = 0; j < seg; j++) {
      const t = j / seg, t2 = t * t, t3 = t2 * t;
      out.push([0, 1].map((d) => 0.5 * (2 * p1[d] + (-p0[d] + p2[d]) * t + (2 * p0[d] - 5 * p1[d] + 4 * p2[d] - p3[d]) * t2 + (-p0[d] + 3 * p1[d] - 3 * p2[d] + p3[d]) * t3)));
    }
  }
  out.push(closed ? pts[0] : pts[n - 1]);
  return out;
}
function densify(pts, step) {
  const out = [];
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i], b = pts[(i + 1) % pts.length];
    const n = Math.max(1, Math.round(Math.hypot(b[0] - a[0], b[1] - a[1]) / step));
    for (let j = 0; j < n; j++) out.push([lerp(a[0], b[0], j / n), lerp(a[1], b[1], j / n)]);
  }
  return out;
}
// Lay out n panels side by side (wide) or stacked (narrow). Returns top-left offsets.
export function panels(narrow, n, { w, h, gapX = 40, gapY = 36, x0 = 0, y0 = 0, W = 800 } = {}) {
  if (narrow) return Array.from({ length: n }, (_, i) => [x0, y0 + i * (h + gapY)]);
  const total = n * w + (n - 1) * gapX;
  const left = x0 + (W - total) / 2;
  return Array.from({ length: n }, (_, i) => [left + i * (w + gapX), y0]);
}
