// Small helpers shared by the scene files.
import { lerp, clamp } from '../pencil.js';

// Point at fraction f of a polyline's length.
export function along(path, f) {
  const seg = [];
  let total = 0;
  for (let i = 1; i < path.length; i++) { const d = Math.hypot(path[i][0] - path[i - 1][0], path[i][1] - path[i - 1][1]); seg.push(d); total += d; }
  let target = clamp(f) * total;
  for (let i = 1; i < path.length; i++) {
    if (target <= seg[i - 1] || i === path.length - 1) {
      const u = seg[i - 1] ? clamp(target / seg[i - 1]) : 0;
      return [lerp(path[i - 1][0], path[i][0], u), lerp(path[i - 1][1], path[i][1], u)];
    }
    target -= seg[i - 1];
  }
  return path[path.length - 1];
}

// The polyline cut at fraction f of its length.
export function upto(path, f) {
  if (f >= 1) return path;
  const end = along(path, f);
  const out = [path[0]];
  let total = 0;
  const lens = [];
  for (let i = 1; i < path.length; i++) { const d = Math.hypot(path[i][0] - path[i - 1][0], path[i][1] - path[i - 1][1]); lens.push(d); total += d; }
  let acc = 0;
  for (let i = 1; i < path.length; i++) {
    acc += lens[i - 1];
    if (acc >= f * total) break;
    out.push(path[i]);
  }
  out.push(end);
  return out;
}

// Quadrilateral rotated by `a` radians around its centre (for slightly tilted notes and cards).
export function tilted(x, y, w, h, a) {
  const cx = x + w / 2, cy = y + h / 2, c = Math.cos(a), s = Math.sin(a);
  return [[-w / 2, -h / 2], [w / 2, -h / 2], [w / 2, h / 2], [-w / 2, h / 2]].map(([u, v]) => [cx + u * c - v * s, cy + u * s + v * c]);
}

// Pie wedge polygon from angle a0 to a1.
export function wedge(cx, cy, r, a0, a1, n = 40) {
  const pts = [[cx, cy]];
  for (let i = 0; i <= n; i++) { const a = a0 + ((a1 - a0) * i) / n; pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]); }
  return pts;
}
