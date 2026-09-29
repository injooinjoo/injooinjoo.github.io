// Graphite pencil renderer for the case-study sketches.
// Every scene is drawn in a fixed design box (W × H units) and scaled to its canvas.
// Lines are resampled, wobbled with smooth value noise and stroked in 2–3 light passes,
// which is what makes a straight line read as "drawn by hand" rather than "rendered".

const TAU = Math.PI * 2;
export const clamp = (x, a = 0, b = 1) => (x < a ? a : x > b ? b : x);
export const lerp = (a, b, t) => a + (b - a) * t;
export const ease = (t) => { t = clamp(t); return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; };

// ---- deterministic noise: the same scene always wobbles the same way ----
const hash = (n) => { const s = Math.sin(n * 127.1 + 311.7) * 43758.5453123; return s - Math.floor(s); };
const TABLE = new Float32Array(512);
{
  let a = 90210;
  const rnd = () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  for (let i = 0; i < 512; i++) TABLE[i] = rnd() * 2 - 1;
}
const noise = (x) => { const i = Math.floor(x), f = x - i, u = f * f * (3 - 2 * f); const a = TABLE[i & 511]; return a + (TABLE[(i + 1) & 511] - a) * u; };

// ---- pen: owns the context, palette and scale for one draw ----
export class Pen {
  constructor(ctx, scale, palette, seed = 1) {
    this.c = ctx;
    this.k = scale;            // design units → device pixels
    this.p = palette;          // { ink, soft, accent, accentSoft, paper, faint }
    this.seed = seed * 17.23;
    this.n = 0;
  }

  // Deterministic per-call seed so redraws (resize, theme) keep the same wobble.
  nextSeed() { this.n += 1; return this.seed + this.n * 7.31; }

  rgba(col, a) { return col.replace('ALPHA', String(clamp(a))); }

  // A wobbling multi-pass graphite line through pts. reveal ∈ [0,1] draws it progressively.
  line(pts, o = {}) {
    const reveal = o.reveal ?? 1;
    const seed = o.seed ?? this.nextSeed();
    if (reveal <= 0 || pts.length < 2) return;
    const k = this.k, c = this.c;
    const w = (o.w ?? 1.6) * Math.max(0.8, k * 0.9);
    const wob = (o.wob ?? 1.2) * Math.min(1.6, Math.max(0.7, k));
    const passes = o.pass ?? 2;
    const col = o.col ?? this.p.ink;
    const alpha = o.a ?? 0.85;

    // resample in device space
    const P = [];
    let acc = 0;
    const pts2 = o.closed ? [...pts, pts[0]] : pts;
    for (let i = 0; i < pts2.length; i++) {
      const x = pts2[i][0] * k, y = pts2[i][1] * k;
      if (i === 0) { P.push([x, y, 0]); continue; }
      const [lx, ly] = P[P.length - 1];
      const d = Math.hypot(x - lx, y - ly);
      const steps = Math.max(1, Math.round(d / 7));
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

    c.lineCap = 'round';
    c.lineJoin = 'round';
    for (let pass = 0; pass < passes; pass++) {
      const sd = seed + pass * 3.917;
      const amp = wob * (pass === 0 ? 1 : 1.25);
      const ox = (hash(sd + 9.1) - 0.5) * wob * 1.2, oy = (hash(sd + 4.7) - 0.5) * wob * 1.2;
      const trim0 = pass > 0 && !o.closed ? Math.floor(hash(sd + 1.3) * 3) : 0;
      const trim1 = pass > 0 && !o.closed ? Math.floor(hash(sd + 2.9) * 3) : 0;
      c.beginPath();
      let first = true;
      for (let j = trim0; j < m - trim1; j++) {
        const s = P[j][2] / Math.max(1, k);
        const x = P[j][0] + noise(s * 0.045 + sd) * amp + noise(s * 0.2 + sd * 1.7 + 30) * amp * 0.3 + ox;
        const y = P[j][1] + noise(s * 0.045 + sd + 57.3) * amp + noise(s * 0.2 + sd * 1.3 + 71) * amp * 0.3 + oy;
        if (first) { c.moveTo(x, y); first = false; } else c.lineTo(x, y);
      }
      c.lineWidth = w * (1 - 0.12 * pass) * (0.85 + 0.3 * hash(sd + 2.2));
      c.strokeStyle = this.rgba(col, alpha * (pass === 0 ? 1 : 0.55));
      c.stroke();
    }
  }

  loop(pts, o = {}) { this.line(pts, { ...o, closed: true }); }

  // Soft graphite/wash fill, slightly out of register like a quick watercolour pass.
  wash(pts, o = {}) {
    const reveal = o.reveal ?? 1;
    if (reveal <= 0) return;
    const k = this.k, c = this.c;
    const dx = (o.dx ?? 1.2) * k, dy = (o.dy ?? 1.2) * k;
    c.beginPath();
    pts.forEach((p, i) => (i ? c.lineTo(p[0] * k + dx, p[1] * k + dy) : c.moveTo(p[0] * k + dx, p[1] * k + dy)));
    c.closePath();
    c.fillStyle = this.rgba(o.col ?? this.p.accentSoft, (o.a ?? 0.5) * reveal);
    c.fill();
  }

  // Parallel hatching clipped to a polygon.
  hatch(poly, o = {}) {
    const reveal = o.reveal ?? 1;
    if (reveal <= 0) return;
    const ang = o.ang ?? -0.9, gap = o.gap ?? 6;
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
      for (let q = 0; q + 1 < xs.length; q += 2) rows.push([xs[q] + 1, xs[q + 1] - 1, y]);
    }
    const show = Math.ceil(rows.length * reveal);
    const k = this.k, c = this.c;
    c.beginPath();
    rows.slice(0, show).forEach(([xa, xb, y], i) => {
      const j = (hash(i * 3.3 + this.seed) - 0.5) * gap * 0.5;
      c.moveTo((xa * cs - (y + j) * sn) * k, (xa * sn + (y + j) * cs) * k);
      c.lineTo((xb * cs - y * sn) * k, (xb * sn + y * cs) * k);
    });
    c.lineWidth = (o.w ?? 0.9) * Math.max(0.7, k * 0.8);
    c.strokeStyle = this.rgba(o.col ?? this.p.ink, o.a ?? 0.35);
    c.stroke();
  }

  // ---- shapes ----
  rect(x, y, w, h, o = {}) {
    const r = o.r ?? 6;
    const pts = roundRect(x, y, w, h, r);
    if (o.fill) this.wash(pts, { col: o.fill, a: o.fa ?? 0.55, reveal: o.reveal });
    if (o.hatch) this.hatch(pts, { ...o.hatch, reveal: o.reveal });
    this.loop(pts, o);
  }
  circle(cx, cy, r, o = {}) {
    const pts = ellipse(cx, cy, r, r);
    if (o.fill) this.wash(pts, { col: o.fill, a: o.fa ?? 0.55, reveal: o.reveal });
    if (o.hatch) this.hatch(pts, { ...o.hatch, reveal: o.reveal });
    this.loop(pts, o);
  }
  ellipse(cx, cy, rx, ry, o = {}) {
    const pts = ellipse(cx, cy, rx, ry);
    if (o.fill) this.wash(pts, { col: o.fill, a: o.fa ?? 0.55, reveal: o.reveal });
    this.loop(pts, o);
  }
  dot(x, y, r, o = {}) {
    if ((o.reveal ?? 1) <= 0) return;
    const c = this.c, k = this.k;
    c.beginPath(); c.arc(x * k, y * k, r * k, 0, TAU);
    c.fillStyle = this.rgba(o.col ?? this.p.ink, (o.a ?? 0.85) * (o.reveal ?? 1));
    c.fill();
  }

  // Arrow along a straight or bent path; head drawn once the shaft is complete.
  arrow(pts, o = {}) {
    const reveal = o.reveal ?? 1;
    const path = pts.length === 2 && o.bend ? bendPath(pts[0], pts[1], o.bend) : pts;
    this.line(path, { w: 1.4, ...o, reveal });
    if (reveal < 0.98) return;
    const a = path[path.length - 2], b = path[path.length - 1];
    const ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
    const s = o.head ?? 9;
    this.line([[b[0] - Math.cos(ang - 0.45) * s, b[1] - Math.sin(ang - 0.45) * s], b, [b[0] - Math.cos(ang + 0.45) * s, b[1] - Math.sin(ang + 0.45) * s]], { w: 1.4, ...o, reveal: 1 });
  }

  // Hand-lettered label. Fades in with reveal; font is the page's sketch face.
  text(str, x, y, o = {}) {
    const reveal = o.reveal ?? 1;
    if (reveal <= 0 || !str) return;
    const c = this.c, k = this.k;
    const size = (o.size ?? 18) * k;
    c.font = `${o.weight ?? 400} ${size}px ${o.font ?? 'var(--sketch-font)'}`.replace('var(--sketch-font)', this.p.font);
    c.textAlign = o.align ?? 'left';
    c.textBaseline = o.base ?? 'alphabetic';
    c.fillStyle = this.rgba(o.col ?? this.p.ink, (o.a ?? 0.92) * clamp(reveal * 1.4));
    const lines = String(str).split('\n');
    lines.forEach((ln, i) => c.fillText(ln, x * k, (y + i * (o.lh ?? (o.size ?? 18) * 1.25)) * k));
  }

  // Short scribble underline / emphasis.
  underline(x0, x1, y, o = {}) {
    this.line([[x0, y], [lerp(x0, x1, 0.5), y + 1.5], [x1, y - 0.5]], { w: 1.2, wob: 1.4, ...o });
  }
}

// ---- geometry helpers ----
export function roundRect(x, y, w, h, r = 6) {
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
export function bendPath(a, b, bend = 0.25, n = 16) {
  const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2;
  const dx = b[0] - a[0], dy = b[1] - a[1];
  const cx = mx - dy * bend, cy = my + dx * bend;
  const pts = [];
  for (let i = 0; i <= n; i++) { const t = i / n; pts.push([(1 - t) * (1 - t) * a[0] + 2 * (1 - t) * t * cx + t * t * b[0], (1 - t) * (1 - t) * a[1] + 2 * (1 - t) * t * cy + t * t * b[1]]); }
  return pts;
}
// Progress of t inside [a, b], eased — scenes use this to stage their strokes.
export const R = (t, a, b) => ease(clamp((t - a) / (b - a)));
