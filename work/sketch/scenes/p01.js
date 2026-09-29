// P-01 Creator monetization missions.
import { R, bendPath, clamp } from '../pencil.js';
import * as K from '../kit.js';
import { along, upto, tilted, wedge } from './util.js';

// Star balloons flying from viewers toward a target, frozen part-way at the end.
function flights(p, t, starts, target, stops, t0) {
  starts.forEach(([x, y], i) => {
    const path = bendPath([x, y], target, i % 2 ? -0.18 : 0.2);
    const q = R(t, t0 + i * 0.07, t0 + 0.4 + i * 0.07) * stops[i];
    if (q <= 0) return;
    p.line(upto(path, q * 0.92), { dash: [4, 6], w: 1, a: 0.5, pass: 1 });
    const [bx, by] = along(path, q);
    K.balloon(p, bx, by, 15, { col: i % 2 ? 'red' : 'ochre', string: false });
  });
}

export default {
  'p01-hero': {
    size: [800, 420],
    narrow: [400, 580],
    draw(p, e) {
      const { t, L } = e;
      const N = e.narrow;
      const m = N ? [20, 18, 360, 250] : [40, 30, 450, 290];
      K.monitor(p, ...m, { reveal: R(t, 0, 0.22) });
      const [mx, my, mw, mh] = m;
      // Streamer inside the screen.
      const scx = mx + mw * 0.5, sby = my + mh - 10;
      K.person(p, scx, sby, N ? 118 : 150, { col: 'blue', headset: true, hair: true, mood: 'happy', reveal: R(t, 0.12, 0.4) });
      K.mic(p, scx + (N ? 88 : 115), sby - (N ? 36 : 44), N ? 46 : 58, { reveal: R(t, 0.2, 0.4) });
      // Mission card with a progress bar.
      const cx = mx + 22, cy = my + 22, cw = mw - 44, ch = N ? 70 : 76;
      p.box(cx, cy, cw, ch, { r: 8, fill: 'paper', fa: 0.95, reveal: R(t, 0.22, 0.36) });
      p.box(cx, cy, cw, ch, { r: 8, fill: 'ochre', fa: 0.2, stroke: false, reveal: R(t, 0.22, 0.36) });
      const lab = L('MISSION', '미션');
      p.text(lab, cx + 14, cy + 24, { size: 18, weight: 700, col: 'red', reveal: R(t, 0.3, 0.4) });
      const gx = cx + 14 + p.tw(lab, 18, 700) + 12;
      const goal = L('1,000 balloons → hardest level', '별풍선 1,000개 → 최고 난이도 도전');
      p.text(goal, gx, cy + 24, { size: p.fit(goal, cx + cw - 12 - gx, N ? 18 : 20, 13), reveal: R(t, 0.32, 0.46) });
      const frac = 0.82 * R(t, 0.45, 0.95);
      const bw = cw - (N ? 128 : 150);
      K.progress(p, cx + 14, cy + ch - 30, bw, 18, frac, { reveal: R(t, 0.36, 0.46) });
      p.text(`${Math.round(frac * 1000)} / 1,000`, cx + cw - 12, cy + ch - 15, { size: N ? 17 : 19, weight: 700, align: 'right', reveal: R(t, 0.45, 0.5) });
      const target = [cx + 14 + bw * 0.82, cy + ch - 21];
      // Viewers.
      const vs = N ? [[64, 552], [160, 560], [256, 552]] : [[590, 392], [680, 400], [760, 388]];
      const sz = N ? 58 : 66;
      vs.forEach(([x, y], i) => K.person(p, x, y, sz, { col: ['ochre', 'green', 'red'][i], mood: 'happy', reveal: R(t, 0.1 + i * 0.05, 0.3 + i * 0.05) }));
      flights(p, t, vs.map(([x, y]) => [x, y - sz - 14]), target, N ? [0.46, 0.22, 0.3] : [0.62, 0.42, 0.28], 0.4);
      if (N) {
        K.bubble(p, 290, 404, 104, 44, { text: L('One more!', '하나 더!'), tail: 'bl', size: 17, reveal: R(t, 0.62, 0.75) });
      } else {
        K.bubble(p, 560, 44, 132, 44, { text: L('One more!', '하나 더!'), tail: 'bl', size: 19, reveal: R(t, 0.62, 0.75) });
        K.bubble(p, 668, 120, 118, 44, { text: L("Let's go!", '가자!'), tail: 'br', size: 19, reveal: R(t, 0.7, 0.82) });
      }
    },
  },

  'p01-memo': {
    size: [800, 380],
    narrow: [400, 600],
    draw(p, e) {
      const { t, L } = e;
      const N = e.narrow;
      // A sticky memo, slightly tilted, with a messy hand count.
      const [x, y, w, h] = N ? [36, 22, 300, 236] : [40, 34, 290, 290];
      const a = -0.04;
      const note = tilted(x, y, w, h, a);
      p.poly(note, { fill: 'ochre', fa: 0.3, reveal: R(t, 0, 0.18) });
      p.text(L('Mission: 1,000!', '미션: 1,000개!'), x + 18, y + 40, { size: 24, weight: 700, rot: a, reveal: R(t, 0.12, 0.26) });
      p.underline(x + 18, x + 190, y + 50, { reveal: R(t, 0.2, 0.28) });
      p.tally(x + 22, y + 72, 17, { reveal: R(t, 0.22, 0.45), h: 20, gap: 7 });
      const nums = ['412', '437', '45?'];
      nums.forEach((s, i) => {
        const nx = x + 24 + i * (N ? 84 : 82), ny = y + (N ? 146 : 150);
        p.text(s, nx, ny, { size: 26, rot: a, reveal: R(t, 0.3 + i * 0.08, 0.4 + i * 0.08) });
        if (i < 2) p.line([[nx - 4, ny - 8], [nx + 44, ny - 12]], { col: 'red', w: 1.8, reveal: R(t, 0.38 + i * 0.08, 0.44 + i * 0.08) });
      });
      p.scribble(x + 24, y + (N ? 172 : 180), N ? 120 : 110, 18, { reveal: R(t, 0.5, 0.6) });
      p.text('+50? +10?', x + 30, y + (N ? 216 : 250), { size: 22, rot: a, col: 'soft', reveal: R(t, 0.55, 0.65) });
      // The streamer, losing the thread.
      const [sx, sby, ss] = N ? [104, 580, 118] : [440, 360, 150];
      K.person(p, sx, sby, ss, { col: 'blue', headset: true, hair: true, mood: 'worried', reveal: R(t, 0.15, 0.4) });
      [[-40, -ss - 6, -0.2], [34, -ss - 18, 0.15], [58, -ss + 16, 0.3]].forEach(([dx, dy, rot], i) =>
        p.text('?', sx + dx, sby + dy, { size: 34 - i * 5, weight: 700, rot, col: 'red', reveal: R(t, 0.62 + i * 0.05, 0.7 + i * 0.05) }));
      // Viewers asking in chat.
      const qs = [L('Did my gift count?', '제 별풍선 들어갔어요?'), L('I sent 50 earlier!', '아까 50개 쐈는데요'), L("What's the count now?", '지금 몇 개예요?')];
      qs.forEach((q, i) => {
        const [bx, by, bw] = N ? [190, 318 + i * 76, 196] : [560, 52 + i * 92, 220];
        K.bubble(p, bx, by, bw, 52, { text: q, tail: 'l', size: N ? 18 : 19, fill: 'paper', reveal: R(t, 0.4 + i * 0.1, 0.55 + i * 0.1) });
      });
    },
  },

  'p01-loop': {
    size: [800, 330],
    narrow: [400, 520],
    draw(p, e) {
      const { t, L } = e;
      const N = e.narrow;
      const pts = N ? [[124, 96], [300, 96], [300, 336], [124, 336]] : [[100, 110], [300, 110], [500, 110], [700, 110]];
      const labels = [
        [L('Goal posted', '목표 등록'), L('by streamer or viewer', '스트리머·시청자')],
        [L('Gifts pool up', '후원 모으기'), L('toward a visible goal', '목표가 보이게')],
        [L('Attempt on air', '방송 중 도전'), L('live, together', '실시간으로 함께')],
        [L('Result is final', '결과 확정'), L('no take-backs', '번복 없음')],
      ];
      const icon = [
        ([x, y], r) => { K.card(p, x - 42, y - 34, 84, 62, { fill: 'ochre', reveal: r }); p.text('1,000★', x, y + 4, { align: 'center', size: 20, weight: 700, reveal: r }); },
        ([x, y], r) => { p.ellipse(x, y + 14, 44, 16, { fill: 'blue', fa: 0.25, reveal: r }); [-22, 0, 22].forEach((d, j) => K.balloon(p, x + d, y - 16 + (j === 1 ? -8 : 0), 13, { col: j === 1 ? 'red' : 'ochre', string: false, reveal: r })); },
        ([x, y], r) => { K.monitor(p, x - 44, y - 36, 88, 60, { stand: false, reveal: r }); K.person(p, x, y + 18, 46, { col: 'blue', face: false, reveal: r }); },
        ([x, y], r) => { K.lock(p, x - 8, y - 10, 52, { reveal: r }); p.check(x + 36, y + 14, 22, { col: 'green', reveal: r }); },
      ];
      pts.forEach((pt, i) => {
        const r = R(t, 0.05 + i * 0.16, 0.25 + i * 0.16);
        icon[i](pt, r);
        K.num(p, pt[0] - 52, pt[1] - 40, i + 1, { r: 12, size: 16, reveal: r });
        p.text(labels[i][0], pt[0], pt[1] + 66, { align: 'center', size: 21, weight: 700, reveal: r });
        p.text(labels[i][1], pt[0], pt[1] + 90, { align: 'center', size: 17, col: 'soft', reveal: r });
      });
      const ar = (i) => R(t, 0.2 + i * 0.16, 0.3 + i * 0.16);
      if (N) {
        p.arrow([[176, 90], [242, 90]], { reveal: ar(0) });
        p.arrow([[300, 200], [300, 286]], { reveal: ar(1) });
        p.arrow([[244, 330], [180, 330]], { reveal: ar(2) });
        p.arrow([[22, 330], [22, 96]], { bend: -0.08, reveal: ar(3), dash: [7, 6] });
        p.text(L('next mission', '다음 미션'), 44, 250, { size: 18, col: 'red', reveal: ar(3) });
      } else {
        [0, 1, 2].forEach((i) => p.arrow([[pts[i][0] + 56, pts[i][1] - 4], [pts[i + 1][0] - 58, pts[i + 1][1] - 4]], { reveal: ar(i) }));
        p.arrow([[700, 218], [100, 218]], { bend: -0.1, reveal: ar(3), dash: [7, 6] });
        p.text(L('…and the next mission starts', '…그리고 다음 미션으로'), 400, 300, { align: 'center', size: 20, col: 'red', reveal: ar(3) });
      }
    },
  },

  'p01-battle': {
    size: [800, 400],
    narrow: [400, 580],
    draw(p, e) {
      const { t, L } = e;
      const N = e.narrow;
      const teamA = N ? [[64, 150], [136, 150]] : [[110, 150], [200, 150]];
      const teamB = N ? [[264, 150], [336, 150]] : [[600, 150], [690, 150]];
      const s = N ? 70 : 90;
      teamA.forEach(([x, y], i) => K.person(p, x, y, s, { col: 'blue', hair: i === 0, mood: 'happy', reveal: R(t, 0.02 + i * 0.05, 0.2 + i * 0.05) }));
      teamB.forEach(([x, y], i) => K.person(p, x, y, s, { col: 'red', hair: i === 1, reveal: R(t, 0.08 + i * 0.05, 0.26 + i * 0.05) }));
      const ay = N ? 186 : 190;
      p.text(L('Team A', 'A팀'), (teamA[0][0] + teamA[1][0]) / 2, ay, { align: 'center', size: 21, weight: 700, col: 'blue', reveal: R(t, 0.2, 0.3) });
      p.text(L('Team B', 'B팀'), (teamB[0][0] + teamB[1][0]) / 2, ay, { align: 'center', size: 21, weight: 700, col: 'red', reveal: R(t, 0.24, 0.34) });
      p.text('VS', N ? 200 : 400, N ? 118 : 112, { align: 'center', size: N ? 30 : 36, weight: 700, reveal: R(t, 0.2, 0.3) });
      // The pot everyone gives into.
      const [px, py] = N ? [200, 312] : [400, 250];
      const pot = [[px - 56, py - 30], [px + 56, py - 30], [px + 46, py + 38], [px - 46, py + 38]];
      p.poly(pot, { fill: 'ochre', fa: 0.3, reveal: R(t, 0.3, 0.45) });
      p.ellipse(px, py - 30, 56, 9, { reveal: R(t, 0.3, 0.45) });
      [[-22, -40], [4, -48], [26, -38]].forEach(([dx, dy], i) => K.star(p, px + dx, py + dy, 9, { fill: 'ochre', fa: 0.5, reveal: R(t, 0.5 + i * 0.05, 0.6 + i * 0.05) }));
      p.text(L('pooled balloons', '모인 별풍선'), N ? px + 62 : px, N ? py + 14 : py + 66, { align: N ? 'left' : 'center', size: N ? 17 : 19, reveal: R(t, 0.42, 0.52) });
      // Viewers backing each side.
      const crowdY = N ? 548 : 380;
      K.crowd(p, N ? 26 : 70, crowdY, 4, N ? 32 : 36, { cols: ['blue'], seed: 1, reveal: R(t, 0.1, 0.35), gap: N ? 30 : 34 });
      K.crowd(p, N ? 284 : 620, crowdY, 4, N ? 32 : 36, { cols: ['red'], seed: 5, reveal: R(t, 0.14, 0.4), gap: N ? 30 : 34 });
      const fromA = N ? [70, crowdY - 44] : [120, crowdY - 48];
      const fromB = N ? [330, crowdY - 44] : [672, crowdY - 48];
      p.arrow([fromA, [px - 50, py + 20]], { bend: 0.22, reveal: R(t, 0.4, 0.55) });
      p.arrow([fromB, [px + 50, py + 20]], { bend: -0.22, reveal: R(t, 0.44, 0.59) });
      // Winners split the pot.
      const win = [(teamA[0][0] + teamA[1][0]) / 2, ay + 12];
      p.arrow([[px - 40, py - 42], [win[0] + 20, win[1] + 4]], { bend: -0.2, col: 'blue', w: 2, reveal: R(t, 0.66, 0.82) });
      p.text(L('winning side splits it', '이긴 팀이 나눠 가짐'), N ? 150 : 170, N ? 250 : 262, { size: 19, col: 'blue', reveal: R(t, 0.78, 0.9) });
      const cr = [teamA[0][0] - 8, 150 - s - 12];
      p.poly([[cr[0] - 14, cr[1]], [cr[0] - 16, cr[1] - 18], [cr[0] - 6, cr[1] - 8], [cr[0], cr[1] - 22], [cr[0] + 6, cr[1] - 8], [cr[0] + 16, cr[1] - 18], [cr[0] + 14, cr[1]]], { fill: 'ochre', fa: 0.55, reveal: R(t, 0.82, 0.95) });
    },
  },

  'p01-results': {
    size: [800, 360],
    narrow: [400, 560],
    draw(p, e) {
      const { t, L } = e;
      const N = e.narrow;
      // Participation as a pie.
      const [cx, cy, r] = N ? [200, 112, 78] : [140, 160, 96];
      const a0 = -Math.PI / 2, a1 = a0 + Math.PI * 2 * 0.82 * R(t, 0.1, 0.5);
      if (a1 > a0 + 0.05) p.poly(wedge(cx, cy, r - 2, a0, a1), { fill: 'red', fa: 0.42, hatch: { gap: 5, a: 0.3 }, stroke: false });
      p.circle(cx, cy, r, { w: 1.7, reveal: R(t, 0, 0.2) });
      if (R(t, 0.45, 0.5) > 0.5) p.line([[cx, cy], [cx + Math.cos(a1) * r, cy + Math.sin(a1) * r]], { w: 1.3 });
      p.text('82%', cx, cy + 10, { align: 'center', size: 38, weight: 700, reveal: R(t, 0.45, 0.6) });
      p.text(L('of creators took part', '크리에이터 참여'), cx, cy + r + 34, { align: 'center', size: 20, reveal: R(t, 0.5, 0.62) });
      // Before/after bars, indexed to the pre-launch baseline.
      const groups = [
        [L('Monthly revenue', '월 매출'), 1.42, '+42%'],
        [L('New uploads', '신규 업로드'), 3, '3×'],
        [L('Stay time', '체류 시간'), 1.6, '1.6×'],
      ];
      const base = N ? 486 : 280, H = N ? 150 : 190, bw = N ? 30 : 38;
      const gx = N ? [52, 172, 292] : [360, 510, 660];
      p.line([[gx[0] - 30, base], [gx[2] + 2 * bw + 34, base]], { w: 1.6, reveal: R(t, 0.3, 0.45) });
      groups.forEach(([label, v, txt], i) => {
        const rr = R(t, 0.4 + i * 0.1, 0.7 + i * 0.1);
        const h0 = (H / 3) * 1 * rr, h1 = (H / 3) * v * rr;
        if (h0 > 1) p.box(gx[i], base - h0, bw, h0, { fill: 'soft', fa: 0.35, over: 2 });
        if (h1 > 1) p.box(gx[i] + bw + 6, base - h1, bw, h1, { fill: i === 0 ? 'ochre' : i === 1 ? 'blue' : 'green', fa: 0.45, over: 2 });
        p.text(txt, gx[i] + bw + 6 + bw / 2, base - (H / 3) * v - 12, { align: 'center', size: 22, weight: 700, reveal: rr > 0.95 ? 1 : 0 });
        p.text(label, gx[i] + bw + 3, base + 28, { align: 'center', size: N ? 17 : 19, reveal: R(t, 0.45, 0.6) });
      });
      p.text(L('grey = before launch (1.0×)', '회색 = 출시 전 (1.0×)'), N ? 200 : gx[0] - 30, N ? 552 : 344, { align: N ? 'center' : 'left', size: 17, col: 'soft', reveal: R(t, 0.8, 0.95) });
    },
  },
};
