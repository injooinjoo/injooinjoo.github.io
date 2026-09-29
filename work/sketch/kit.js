// Object kit: small hand-drawn things the scenes are built from.
// Every function takes the Pen first and a trailing options object; `o.reveal` (0–1)
// stages the strokes of the object so scenes can animate them in order.
import { clamp, lerp, roundRect, ellipse, arcPts, smooth, hash } from './pencil.js';

// Staged reveal: the i-th of n sub-steps inside one reveal value.
export const S = (r, n, i) => clamp((r ?? 1) * n - i);

// ---------- people ----------
// Bust figure standing on (cx, by); s is the total height.
export function person(p, cx, by, s, o = {}) {
  const r = o.reveal ?? 1;
  const hr = s * 0.2, hy = by - s * 0.74;
  const sw = s * (o.wide ?? 0.4);
  const torso = smooth([[cx - sw, by], [cx - sw * 0.9, by - s * 0.26], [cx - sw * 0.45, by - s * 0.42], [cx, by - s * 0.45], [cx + sw * 0.45, by - s * 0.42], [cx + sw * 0.9, by - s * 0.26], [cx + sw, by]]);
  if (o.col) p.wash([...torso, [cx + sw, by], [cx - sw, by]], { col: o.col, a: o.fa ?? 0.38, reveal: S(r, 3, 1) });
  p.line(torso, { w: o.w ?? 1.5, reveal: S(r, 3, 1), col: o.ink });
  p.circle(cx, hy, hr, { w: o.w ?? 1.5, reveal: S(r, 3, 0), col: o.ink, fill: o.skin, fa: 0.18 });
  const f = S(r, 3, 2);
  if (f <= 0) return;
  if (o.hair) p.line(arcPts(cx, hy, hr * 0.98, Math.PI * 1.08, Math.PI * 1.95, 10).map((q, i) => [q[0], q[1] + (i % 2 ? 1.5 : -0.5)]), { w: 2.6, a: 0.8, reveal: f, col: o.ink });
  if (o.face !== false) {
    const e = hr * 0.36;
    p.dot(cx - e, hy - hr * 0.05, Math.max(1, hr * 0.08), { reveal: f, col: o.ink });
    p.dot(cx + e, hy - hr * 0.05, Math.max(1, hr * 0.08), { reveal: f, col: o.ink });
    const m = o.mood ?? 'neutral';
    if (m === 'happy') p.line(arcPts(cx, hy + hr * 0.12, hr * 0.38, 0.35, Math.PI - 0.35, 8), { w: 1.2, pass: 1, reveal: f, col: o.ink });
    else if (m === 'worried') p.line([[cx - hr * 0.3, hy + hr * 0.45], [cx - hr * 0.1, hy + hr * 0.38], [cx + hr * 0.1, hy + hr * 0.46], [cx + hr * 0.3, hy + hr * 0.38]], { w: 1.1, pass: 1, reveal: f, col: o.ink });
    else p.line([[cx - hr * 0.22, hy + hr * 0.42], [cx + hr * 0.22, hy + hr * 0.4]], { w: 1.1, pass: 1, reveal: f, col: o.ink });
  }
  if (o.headset) {
    p.line(arcPts(cx, hy, hr * 1.18, Math.PI * 1.05, Math.PI * 1.95, 12), { w: 1.8, reveal: f, col: o.ink });
    p.box(cx - hr * 1.32, hy - hr * 0.25, hr * 0.3, hr * 0.62, { r: 2, reveal: f, fill: 'ink', fa: 0.25, col: o.ink });
    p.line([[cx - hr * 1.15, hy + hr * 0.3], [cx - hr * 0.8, hy + hr * 0.75], [cx - hr * 0.35, hy + hr * 0.78]], { w: 1.3, reveal: f, col: o.ink });
  }
  if (o.hand) {
    // Raised hand on one side (o.hand = -1 left, 1 right).
    const d = o.hand;
    p.line([[cx + d * sw * 0.8, by - s * 0.3], [cx + d * sw * 1.15, by - s * 0.62], [cx + d * sw * 1.2, by - s * 0.8]], { w: 1.5, reveal: f, col: o.ink });
    p.circle(cx + d * sw * 1.2, by - s * 0.84, s * 0.05, { w: 1.3, reveal: f, col: o.ink });
  }
}

// A row of small viewers, useful for crowds and counts.
export function crowd(p, x, by, n, s, o = {}) {
  const gap = o.gap ?? s * 0.78;
  for (let i = 0; i < n; i++) {
    const cols = o.cols ?? [null];
    person(p, x + i * gap, by + (hash(i + (o.seed ?? 0)) - 0.5) * (o.jitter ?? 4), s, { face: s > 26, col: cols[i % cols.length], fa: 0.3, reveal: S(o.reveal, n, i), mood: o.mood });
  }
}

// ---------- devices ----------
export function monitor(p, x, y, w, h, o = {}) {
  const r = o.reveal ?? 1;
  p.box(x, y, w, h, { r: 8, w: 1.8, reveal: S(r, 2, 0), fill: o.fill, fa: o.fa ?? 0.12 });
  p.box(x + 8, y + 8, w - 16, h - 16, { r: 4, w: 1, a: 0.55, reveal: S(r, 2, 0) });
  if (o.stand !== false) {
    const cx = x + w / 2;
    p.line([[cx - 8, y + h], [cx - 12, y + h + 22]], { reveal: S(r, 2, 1) });
    p.line([[cx + 8, y + h], [cx + 12, y + h + 22]], { reveal: S(r, 2, 1) });
    p.line([[cx - 46, y + h + 24], [cx + 46, y + h + 23]], { w: 2, reveal: S(r, 2, 1) });
  }
  return { x: x + 8, y: y + 8, w: w - 16, h: h - 16 };
}

export function phone(p, x, y, w, h, o = {}) {
  const r = o.reveal ?? 1;
  p.box(x, y, w, h, { r: w * 0.14, w: 1.8, reveal: r, fill: o.fill, fa: o.fa ?? 0.12 });
  p.line([[x + w * 0.4, y + h * 0.035], [x + w * 0.6, y + h * 0.035]], { w: 2.2, reveal: r });
  p.line([[x + w * 0.36, y + h - h * 0.03], [x + w * 0.64, y + h - h * 0.03]], { w: 1.6, a: 0.6, reveal: r });
  return { x: x + w * 0.07, y: y + h * 0.075, w: w * 0.86, h: h * 0.85 };
}

export function mic(p, cx, cy, s, o = {}) {
  const r = o.reveal ?? 1;
  const w = s * 0.34, h = s * 0.62;
  p.box(cx - w / 2, cy - h / 2, w, h, { r: w / 2, w: 1.6, reveal: S(r, 2, 0), fill: o.col ?? 'soft', fa: 0.3, hatch: { gap: 3.4, a: 0.35 } });
  p.line(arcPts(cx, cy + h * 0.05, w * 0.95, 0.1, Math.PI - 0.1, 10), { w: 1.4, reveal: S(r, 2, 1) });
  p.line([[cx, cy + h * 0.05 + w * 0.95], [cx, cy + h * 0.95]], { w: 1.6, reveal: S(r, 2, 1) });
  p.line([[cx - w * 0.8, cy + h * 0.95], [cx + w * 0.8, cy + h * 0.95]], { w: 2, reveal: S(r, 2, 1) });
}

// ---------- gifts & reactions ----------
export function star(p, cx, cy, rad, o = {}) {
  const pts = [];
  for (let i = 0; i < 10; i++) {
    const a = -Math.PI / 2 + (i * Math.PI) / 5;
    const rr = i % 2 ? rad * 0.45 : rad;
    pts.push([cx + Math.cos(a) * rr, cy + Math.sin(a) * rr]);
  }
  p.poly(pts, { w: 1.3, ...o });
}

// Star balloon (별풍선): a balloon with a star on it and a curly string.
export function balloon(p, cx, cy, rad, o = {}) {
  const r = o.reveal ?? 1;
  const col = o.col ?? 'ochre';
  p.ellipse(cx, cy, rad * 0.86, rad, { w: 1.5, fill: col, fa: 0.42, reveal: S(r, 3, 0) });
  p.poly([[cx - 3, cy + rad + 4], [cx, cy + rad - 1], [cx + 3, cy + rad + 4]], { w: 1.2, reveal: S(r, 3, 1) });
  star(p, cx, cy - rad * 0.05, rad * 0.42, { reveal: S(r, 3, 1), a: 0.7, w: 1.1 });
  if (o.string !== false) p.curve([[cx, cy + rad + 4], [cx - 4, cy + rad + 14], [cx + 4, cy + rad + 24], [cx - 2, cy + rad + 34]], { w: 1, a: 0.6, pass: 1, reveal: S(r, 3, 2) });
}

export function heart(p, cx, cy, s, o = {}) {
  const pts = [];
  for (let i = 0; i < 32; i++) {
    const t = (i / 32) * Math.PI * 2;
    pts.push([cx + (s / 32) * 16 * Math.pow(Math.sin(t), 3), cy - (s / 32) * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t))]);
  }
  p.poly(pts, { w: 1.4, fill: o.col ?? 'red', fa: 0.4, ...o });
}

// Speech bubble with centred text. tail: 'bl' | 'br' | 'tl' | 'tr' | 'l' | 'r'.
export function bubble(p, x, y, w, h, o = {}) {
  const r = o.reveal ?? 1;
  const tail = o.tail ?? 'bl';
  const body = roundRect(x, y, w, h, Math.min(14, h / 2));
  if (o.fill) p.wash(body, { col: o.fill, a: o.fa ?? 0.25, reveal: r });
  p.loop(body, { w: 1.4, reveal: r, col: o.ink });
  const t = {
    bl: [[x + w * 0.22, y + h - 1], [x + w * 0.12, y + h + 14], [x + w * 0.34, y + h - 1]],
    br: [[x + w * 0.66, y + h - 1], [x + w * 0.88, y + h + 14], [x + w * 0.78, y + h - 1]],
    tl: [[x + w * 0.22, y + 1], [x + w * 0.12, y - 14], [x + w * 0.34, y + 1]],
    tr: [[x + w * 0.66, y + 1], [x + w * 0.88, y - 14], [x + w * 0.78, y + 1]],
    l: [[x + 1, y + h * 0.35], [x - 14, y + h * 0.6], [x + 1, y + h * 0.62]],
    r: [[x + w - 1, y + h * 0.35], [x + w + 14, y + h * 0.6], [x + w - 1, y + h * 0.62]],
  }[tail];
  if (t) p.line(t, { w: 1.4, reveal: r, col: o.ink });
  if (o.text) p.text(o.text, x + w / 2, y + h / 2 + 1, { align: 'center', vcenter: true, size: o.size ?? 18, max: w - 16, reveal: S(r, 2, 1), col: o.tcol });
}

// ---------- paper & data ----------
export function doc(p, x, y, w, h, o = {}) {
  const r = o.reveal ?? 1;
  const f = Math.min(16, w * 0.22);
  const outline = [[x, y], [x + w - f, y], [x + w, y + f], [x + w, y + h], [x, y + h]];
  if (o.fill) p.wash(outline, { col: o.fill, a: o.fa ?? 0.2, reveal: r });
  p.loop(outline, { w: 1.4, reveal: S(r, 2, 0) });
  p.line([[x + w - f, y], [x + w - f, y + f], [x + w, y + f]], { w: 1.1, reveal: S(r, 2, 0) });
  const n = o.lines ?? 4;
  const top = o.title ? y + 34 : y + 16;
  if (o.title) p.text(o.title, x + 10, y + 24, { size: o.size ?? 16, reveal: S(r, 2, 1), weight: 700 });
  for (let i = 0; i < n; i++) {
    const ly = top + i * 11;
    if (ly > y + h - 8) break;
    const lw = (w - 20) * (i === n - 1 ? 0.55 : 0.8 + 0.2 * hash(i + x));
    p.line([[x + 10, ly], [x + 10 + lw, ly]], { w: 1, a: 0.45, pass: 1, reveal: S(S(r, 2, 1), n, i) });
  }
}

// Paper stack: several docs offset, like a pile on a desk.
export function pile(p, x, y, w, h, n, o = {}) {
  for (let i = n - 1; i >= 0; i--) {
    const dx = (hash(i * 3.1 + x) - 0.5) * 10, dy = -i * 6;
    doc(p, x + dx, y + dy, w, h, { lines: i === 0 ? 4 : 0, reveal: S(o.reveal, n, n - 1 - i), fill: i === 0 ? o.fill : null });
  }
}

export function sheet(p, x, y, w, h, o = {}) {
  const r = o.reveal ?? 1;
  const rows = o.rows ?? 5, cols = o.cols ?? 4;
  p.box(x, y, w, h, { w: 1.4, reveal: S(r, 3, 0), fill: o.fill, fa: o.fa ?? 0.14 });
  p.box(x, y, w, h / rows, { w: 1, stroke: false, fill: 'soft', fa: 0.3, reveal: S(r, 3, 1) });
  for (let i = 1; i < rows; i++) p.line([[x, y + (i * h) / rows], [x + w, y + (i * h) / rows]], { w: 0.9, a: 0.5, pass: 1, reveal: S(r, 3, 1) });
  for (let j = 1; j < cols; j++) p.line([[x + (j * w) / cols, y], [x + (j * w) / cols, y + h]], { w: 0.9, a: 0.5, pass: 1, reveal: S(r, 3, 2) });
  if (o.marks) o.marks.forEach(([ri, ci, kind]) => {
    const cx = x + ((ci + 0.5) * w) / cols, cy = y + ((ri + 0.5) * h) / rows;
    if (kind === 'x') p.cross(cx, cy, Math.min(w / cols, h / rows) * 0.5, { col: 'red', reveal: S(r, 3, 2) });
    else if (kind === '?') p.text('?', cx, cy + 6, { align: 'center', size: 18, col: 'red', reveal: S(r, 3, 2) });
    else p.line([[cx - w / cols / 3, cy], [cx + w / cols / 3, cy]], { w: 1, a: 0.6, pass: 1, reveal: S(r, 3, 2) });
  });
}

export function gear(p, cx, cy, rad, o = {}) {
  const n = o.teeth ?? 8;
  const pts = [];
  const rot = o.rot ?? 0;
  for (let i = 0; i < n; i++) {
    const a = rot + (i / n) * Math.PI * 2, d = (Math.PI * 2) / n;
    [[-0.3, 0.78], [-0.2, 1], [0.2, 1], [0.3, 0.78]].forEach(([f, m]) => pts.push([cx + Math.cos(a + f * d) * rad * m, cy + Math.sin(a + f * d) * rad * m]));
  }
  p.poly(pts, { w: 1.4, fill: o.col, fa: 0.3, reveal: o.reveal });
  p.circle(cx, cy, rad * 0.3, { w: 1.2, reveal: o.reveal });
}

export function db(p, cx, cy, w, h, o = {}) {
  const r = o.reveal ?? 1;
  const ry = w * 0.16;
  const side = [...arcPts(cx, cy - h / 2, w / 2, Math.PI, 0, 16).map((q) => [q[0], cy - h / 2 + (q[1] - (cy - h / 2)) * (ry / (w / 2))]), [cx + w / 2, cy + h / 2], ...arcPts(cx, cy + h / 2, w / 2, 0, Math.PI, 16).map((q) => [q[0], cy + h / 2 + (q[1] - (cy + h / 2)) * (ry / (w / 2))])];
  if (o.col) p.wash(side, { col: o.col, a: 0.3, reveal: r });
  p.ellipse(cx, cy - h / 2, w / 2, ry, { w: 1.4, reveal: S(r, 3, 0) });
  p.line([[cx - w / 2, cy - h / 2], [cx - w / 2, cy + h / 2]], { w: 1.4, reveal: S(r, 3, 1) });
  p.line([[cx + w / 2, cy - h / 2], [cx + w / 2, cy + h / 2]], { w: 1.4, reveal: S(r, 3, 1) });
  p.line(ellipse(cx, cy + h / 2, w / 2, ry, 20, 0, Math.PI), { w: 1.4, reveal: S(r, 3, 2) });
  p.line(ellipse(cx, cy, w / 2, ry, 20, 0, Math.PI), { w: 1, a: 0.5, reveal: S(r, 3, 2) });
}

export function clock(p, cx, cy, rad, o = {}) {
  const r = o.reveal ?? 1;
  p.circle(cx, cy, rad, { w: 1.6, fill: o.col, fa: 0.2, reveal: S(r, 2, 0) });
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2, l = i % 3 ? 0.08 : 0.16;
    p.line([[cx + Math.cos(a) * rad * (0.92 - l), cy + Math.sin(a) * rad * (0.92 - l)], [cx + Math.cos(a) * rad * 0.9, cy + Math.sin(a) * rad * 0.9]], { w: 1, pass: 1, a: 0.6, reveal: S(r, 2, 1) });
  }
  const ha = o.h ?? -Math.PI / 2 + 1.1, ma = o.m ?? -Math.PI / 2 - 0.9;
  p.line([[cx, cy], [cx + Math.cos(ha) * rad * 0.5, cy + Math.sin(ha) * rad * 0.5]], { w: 2, reveal: S(r, 2, 1) });
  p.line([[cx, cy], [cx + Math.cos(ma) * rad * 0.75, cy + Math.sin(ma) * rad * 0.75]], { w: 1.5, reveal: S(r, 2, 1) });
  p.dot(cx, cy, 2.4, { reveal: S(r, 2, 1) });
}

// Month grid. o.span = [from, to] day indexes to shade; o.ring = [i, ...] days to circle.
export function calendar(p, x, y, w, h, o = {}) {
  const r = o.reveal ?? 1;
  const rows = o.rows ?? 5, head = h * 0.2;
  p.box(x, y, w, h, { w: 1.6, reveal: S(r, 3, 0) });
  p.box(x, y, w, head, { stroke: false, fill: o.col ?? 'red', fa: 0.35, reveal: S(r, 3, 0) });
  p.line([[x, y + head], [x + w, y + head]], { w: 1.2, reveal: S(r, 3, 0) });
  [0.28, 0.72].forEach((f) => p.line([[x + w * f, y - 8], [x + w * f, y + 8]], { w: 2.2, reveal: S(r, 3, 0) }));
  if (o.title) p.text(o.title, x + w / 2, y + head / 2 + 1, { align: 'center', vcenter: true, size: o.size ?? 17, weight: 700, reveal: S(r, 3, 1) });
  const cw = w / 7, ch = (h - head) / rows;
  const cells = [];
  for (let i = 0; i < rows * 7; i++) {
    const cx = x + (i % 7) * cw + cw / 2, cy = y + head + Math.floor(i / 7) * ch + ch / 2;
    cells.push([cx, cy]);
    p.dot(cx, cy, 1.3, { a: 0.45, reveal: S(r, 3, 1) });
  }
  if (o.span) {
    const [a, b] = o.span;
    for (let i = a; i <= b; i++) {
      const [cx, cy] = cells[i];
      p.box(cx - cw / 2 + 2, cy - ch / 2 + 2, cw - 4, ch - 4, { stroke: false, hatch: { gap: 4, a: 0.45, col: o.spanCol ?? 'ink' }, reveal: S(S(r, 3, 2), b - a + 1, i - a) });
    }
  }
  (o.ring ?? []).forEach((i) => { const [cx, cy] = cells[i]; p.ring(cx, cy, cw * 0.46, ch * 0.44, { col: 'red', reveal: S(r, 3, 2) }); });
  return cells;
}

export function magnifier(p, cx, cy, rad, o = {}) {
  p.circle(cx, cy, rad, { w: 1.8, fill: 'blue', fa: 0.16, reveal: o.reveal });
  p.line([[cx + rad * 0.7, cy + rad * 0.7], [cx + rad * 1.6, cy + rad * 1.6]], { w: 3.4, reveal: o.reveal });
}

// Luggage-style tag with a hole; text inside.
export function tag(p, x, y, w, h, o = {}) {
  const r = o.reveal ?? 1;
  const n = h * 0.45;
  const pts = [[x + n, y], [x + w, y], [x + w, y + h], [x + n, y + h], [x, y + h / 2]];
  p.poly(pts, { w: 1.4, fill: o.col, fa: o.fa ?? 0.3, reveal: r });
  p.circle(x + n * 0.72, y + h / 2, 3, { w: 1, reveal: r });
  if (o.text) p.text(o.text, x + n + (w - n) / 2, y + h / 2 + 1, { align: 'center', vcenter: true, size: o.size ?? 17, reveal: S(r, 2, 1), weight: o.weight });
}

// Rosette badge with two ribbons.
export function badge(p, cx, cy, rad, o = {}) {
  const r = o.reveal ?? 1;
  p.poly([[cx - rad * 0.5, cy + rad * 0.6], [cx - rad * 0.75, cy + rad * 1.6], [cx - rad * 0.4, cy + rad * 1.35], [cx - rad * 0.2, cy + rad * 1.7], [cx - rad * 0.05, cy + rad * 0.8]], { w: 1.2, fill: o.col2 ?? 'red', fa: 0.3, reveal: S(r, 2, 1) });
  p.poly([[cx + rad * 0.5, cy + rad * 0.6], [cx + rad * 0.75, cy + rad * 1.6], [cx + rad * 0.4, cy + rad * 1.35], [cx + rad * 0.2, cy + rad * 1.7], [cx + rad * 0.05, cy + rad * 0.8]], { w: 1.2, fill: o.col2 ?? 'red', fa: 0.3, reveal: S(r, 2, 1) });
  const pts = [];
  for (let i = 0; i < 24; i++) { const a = (i / 24) * Math.PI * 2, rr = i % 2 ? rad : rad * 0.9; pts.push([cx + Math.cos(a) * rr, cy + Math.sin(a) * rr]); }
  p.poly(pts, { w: 1.3, fill: o.col ?? 'ochre', fa: 0.4, reveal: S(r, 2, 0) });
  p.circle(cx, cy, rad * 0.68, { w: 1, a: 0.6, reveal: S(r, 2, 0) });
  if (o.text) p.text(o.text, cx, cy + 1, { align: 'center', vcenter: true, size: o.size ?? rad * 0.8, weight: 700, reveal: S(r, 2, 1) });
}

export function lock(p, cx, cy, s, o = {}) {
  p.line(arcPts(cx, cy - s * 0.15, s * 0.3, Math.PI, Math.PI * 2, 10).concat([[cx + s * 0.3, cy + s * 0.05]]), { w: 1.8, reveal: o.reveal });
  p.line([[cx - s * 0.3, cy + s * 0.05], [cx - s * 0.3, cy - s * 0.15]], { w: 1.8, reveal: o.reveal });
  p.box(cx - s * 0.45, cy, s * 0.9, s * 0.7, { r: 4, w: 1.6, fill: o.col ?? 'ochre', fa: 0.4, reveal: o.reveal });
  p.dot(cx, cy + s * 0.3, s * 0.07, { reveal: o.reveal });
}

// Bars growing up from a baseline. list: [{ v (0–1 of h), col, label, value }]
export function bars(p, x, base, h, list, o = {}) {
  const r = o.reveal ?? 1;
  const bw = o.bw ?? 44, gap = o.gap ?? 28;
  const n = list.length;
  const width = n * bw + (n - 1) * gap;
  if (o.axis !== false) p.line([[x - 12, base], [x + width + 12, base]], { w: 1.6, reveal: S(r, 2, 0) });
  list.forEach((b, i) => {
    const rr = S(S(r, 2, 1), n, i);
    const bx = x + i * (bw + gap), bh = h * b.v * rr;
    if (bh > 0.5) p.box(bx, base - bh, bw, bh, { w: 1.4, fill: b.col ?? 'blue', fa: b.fa ?? 0.4, hatch: b.hatch ? { gap: 5, a: 0.35 } : null, over: 2 });
    if (b.value) p.text(b.value, bx + bw / 2, base - h * b.v - 10, { align: 'center', size: o.vsize ?? 22, weight: 700, reveal: S(rr, 1, 0) > 0.95 ? 1 : 0, col: b.vcol });
    if (b.label) p.text(b.label, bx + bw / 2, base + (o.lgap ?? 26), { align: 'center', size: o.lsize ?? 17, max: bw + gap - 6, reveal: S(r, 2, 1) });
  });
  return width;
}

// Stacked trapezoids, widest on top. widths: fraction of w per stage.
export function funnel(p, x, y, w, h, widths, o = {}) {
  const r = o.reveal ?? 1;
  const n = widths.length, sh = h / n;
  const cx = x + w / 2;
  widths.forEach((f, i) => {
    const f2 = widths[i + 1] ?? f * 0.8;
    const y0 = y + i * sh, y1 = y0 + sh - 4;
    const pts = [[cx - (w * f) / 2, y0], [cx + (w * f) / 2, y0], [cx + (w * f2) / 2, y1], [cx - (w * f2) / 2, y1]];
    p.poly(pts, { w: 1.4, fill: o.cols?.[i] ?? o.col ?? 'blue', fa: 0.22 + 0.08 * i, reveal: S(r, n, i) });
    if (o.labels?.[i]) p.text(o.labels[i], cx, y0 + sh / 2, { align: 'center', vcenter: true, size: o.size ?? 17, reveal: S(r, n, i) });
  });
}

// Chat-app notification card (Slack-like): square avatar with '#', a bold title and two lines.
export function alert(p, x, y, w, h, o = {}) {
  const r = o.reveal ?? 1;
  p.box(x, y, w, h, { r: 8, w: 1.4, fill: o.fill ?? 'paper', fa: 0.9, reveal: S(r, 2, 0) });
  p.box(x + 10, y + 10, 26, 26, { r: 6, w: 1.2, fill: o.col ?? 'green', fa: 0.45, reveal: S(r, 2, 0) });
  p.text('#', x + 23, y + 24, { align: 'center', vcenter: true, size: 18, weight: 700, reveal: S(r, 2, 1) });
  if (o.title) p.text(o.title, x + 46, y + 25, { size: o.size ?? 16, weight: 700, reveal: S(r, 2, 1) });
  const n = o.lines ?? 2;
  for (let i = 0; i < n; i++) p.line([[x + 46, y + 40 + i * 10], [x + 46 + (w - 60) * (i ? 0.55 : 0.85), y + 40 + i * 10]], { w: 1, a: 0.45, pass: 1, reveal: S(r, 2, 1) });
}

// Generic card with an optional title and placeholder lines.
export function card(p, x, y, w, h, o = {}) {
  const r = o.reveal ?? 1;
  p.box(x, y, w, h, { r: o.r ?? 8, w: o.w ?? 1.5, fill: o.fill, fa: o.fa ?? 0.2, reveal: S(r, 2, 0), dash: o.dash });
  let ly = y + 22;
  if (o.title) { p.text(o.title, x + (o.center ? w / 2 : 14), y + (o.ty ?? 28), { size: o.size ?? 18, weight: 700, align: o.center ? 'center' : 'left', max: w - 20, reveal: S(r, 2, 1) }); ly = y + (o.ty ?? 28) + 18; }
  const n = o.lines ?? 0;
  for (let i = 0; i < n; i++) p.line([[x + 14, ly + i * 11], [x + 14 + (w - 28) * (i === n - 1 ? 0.5 : 0.85), ly + i * 11]], { w: 1, a: 0.42, pass: 1, reveal: S(S(r, 2, 1), n, i) });
}

// Staircase rising left to right. Returns the top-centre of each step.
export function stairs(p, x, y, w, h, n, o = {}) {
  const r = o.reveal ?? 1;
  const sw = w / n, sh = h / n;
  const tops = [];
  for (let i = 0; i < n; i++) {
    const bx = x + i * sw, top = y + h - (i + 1) * sh;
    p.box(bx, top, sw, (i + 1) * sh, { w: 1.5, fill: o.cols?.[i] ?? 'blue', fa: 0.12 + i * 0.07, reveal: S(r, n, i), hatch: i === n - 1 && o.hatchTop ? { gap: 6, a: 0.25 } : null });
    tops.push([bx + sw / 2, top]);
  }
  return tops;
}

export function server(p, x, y, w, h, o = {}) {
  const r = o.reveal ?? 1;
  const n = o.slots ?? 3;
  p.box(x, y, w, h, { r: 6, w: 1.5, fill: o.col, fa: 0.2, reveal: S(r, 2, 0) });
  for (let i = 1; i < n; i++) p.line([[x + 4, y + (i * h) / n], [x + w - 4, y + (i * h) / n]], { w: 1, a: 0.6, reveal: S(r, 2, 1) });
  for (let i = 0; i < n; i++) {
    const cy = y + ((i + 0.5) * h) / n;
    p.dot(x + 12, cy, 2.4, { col: i === 0 ? 'green' : 'ink', reveal: S(r, 2, 1) });
    p.line([[x + 24, cy], [x + w - 12, cy]], { w: 1, a: 0.4, pass: 1, reveal: S(r, 2, 1) });
  }
}

// Capsule progress bar; frac ∈ [0,1] is filled with wash + hatching.
export function progress(p, x, y, w, h, frac, o = {}) {
  const r = o.reveal ?? 1;
  p.box(x, y, w, h, { r: h / 2, w: 1.5, reveal: S(r, 2, 0) });
  const fw = Math.max(0, (w - 6) * frac);
  if (fw > 2) p.box(x + 3, y + 3, fw, h - 6, { r: (h - 6) / 2, stroke: false, fill: o.col ?? 'red', fa: 0.5, hatch: { gap: 4.5, a: 0.3 }, reveal: S(r, 2, 1) });
}

// Dot grid of `total` with `on` highlighted (e.g. 5 of 100).
export function dotGrid(p, x, y, cols, total, on, o = {}) {
  const gap = o.gap ?? 16, rad = o.rad ?? 4.2;
  const r = o.reveal ?? 1;
  for (let i = 0; i < total; i++) {
    const cx = x + (i % cols) * gap, cy = y + Math.floor(i / cols) * gap;
    const hit = o.pick ? o.pick.includes(i) : i < on;
    const rr = S(r, total, i);
    if (hit) p.circle(cx, cy, rad * 1.05, { w: 1.2, fill: o.col ?? 'red', fa: 0.7, reveal: rr, wob: 0.6 });
    else p.circle(cx, cy, rad, { w: 0.9, a: 0.45, reveal: rr, wob: 0.5, pass: 1 });
  }
}

export function checkbox(p, x, y, s, checked, o = {}) {
  p.box(x, y, s, s, { r: 3, w: 1.3, reveal: o.reveal });
  if (checked) p.check(x + s / 2, y + s / 2, s * 0.9, { col: o.col ?? 'green', reveal: o.reveal });
}

export function gamepad(p, cx, cy, s, o = {}) {
  const w = s, h = s * 0.55;
  const pts = smooth([[cx - w * 0.3, cy - h / 2], [cx + w * 0.3, cy - h / 2], [cx + w / 2, cy + h * 0.1], [cx + w * 0.42, cy + h / 2], [cx + w * 0.2, cy + h * 0.3], [cx - w * 0.2, cy + h * 0.3], [cx - w * 0.42, cy + h / 2], [cx - w / 2, cy + h * 0.1]], true);
  p.poly(pts, { w: 1.5, fill: o.col ?? 'green', fa: 0.3, reveal: o.reveal });
  p.line([[cx - w * 0.3, cy - h * 0.05], [cx - w * 0.14, cy - h * 0.05]], { w: 1.6, reveal: o.reveal });
  p.line([[cx - w * 0.22, cy - h * 0.2], [cx - w * 0.22, cy + h * 0.1]], { w: 1.6, reveal: o.reveal });
  p.circle(cx + w * 0.2, cy - h * 0.12, s * 0.045, { w: 1.2, reveal: o.reveal });
  p.circle(cx + w * 0.3, cy + h * 0.04, s * 0.045, { w: 1.2, reveal: o.reveal });
}

// Git history helpers: a lane is a horizontal line with commit dots.
export function commit(p, x, y, o = {}) { p.circle(x, y, o.r ?? 6, { w: 1.4, fill: o.col ?? 'paper', fa: o.col ? 0.55 : 1, reveal: o.reveal }); }

// Small numbered label, used for step markers.
export function num(p, cx, cy, n, o = {}) {
  p.circle(cx, cy, o.r ?? 13, { w: 1.3, fill: o.col ?? 'ochre', fa: 0.35, reveal: o.reveal });
  p.text(String(n), cx, cy + 1, { align: 'center', vcenter: true, size: o.size ?? 18, weight: 700, reveal: o.reveal });
}

export { lerp };
