// P-02 Operations automation.
import { R } from '../pencil.js';
import * as K from '../kit.js';

// Horizontal pipe section with gears inside.
function pipe(p, x, y, w, h, r) {
  p.box(x, y, w, h, { stroke: false, fill: 'blue', fa: 0.18, reveal: r });
  p.line([[x, y], [x + w, y]], { w: 1.6, reveal: r });
  p.line([[x, y + h], [x + w, y + h]], { w: 1.6, reveal: r });
  p.ellipse(x, y + h / 2, 10, h / 2, { reveal: r });
  p.ellipse(x + w, y + h / 2, 10, h / 2, { reveal: r });
}

// A small dashboard panel with bars.
function dashboard(p, x, y, w, h, r) {
  p.box(x, y, w, h, { r: 8, w: 1.5, fill: 'paper', fa: 0.9, reveal: K.S(r, 2, 0) });
  const vals = [0.35, 0.55, 0.45, 0.8, 0.65];
  const bw = (w - 40) / vals.length;
  vals.forEach((v, i) => p.box(x + 20 + i * bw + 3, y + h - 16 - v * (h - 40), bw - 8, v * (h - 40), { fill: i === 3 ? 'red' : 'blue', fa: 0.4, over: 1.5, reveal: K.S(K.S(r, 2, 1), vals.length, i) }));
  p.line([[x + 14, y + h - 16], [x + w - 14, y + h - 16]], { w: 1, reveal: K.S(r, 2, 1) });
}

const TEAMS = (L) => [L('Finance', '재무'), L('Creator support', '크리에이터 지원'), L('Content review', '콘텐츠 리뷰')];

export default {
  'p02-hero': {
    size: [800, 400],
    narrow: [400, 660],
    draw(p, e) {
      const { t, L } = e;
      const N = e.narrow;
      const teams = TEAMS(L);
      const piles = N ? [[34, 70], [158, 70], [282, 70]] : [[40, 50], [40, 170], [40, 290]];
      piles.forEach(([x, y], i) => {
        const r = R(t, 0.02 + i * 0.07, 0.22 + i * 0.07);
        K.pile(p, x, y, N ? 82 : 76, N ? 92 : 84, 4, { reveal: r, fill: ['ochre', 'green', 'red'][i] });
        p.text(teams[i], N ? x + 41 : x + 96, N ? y + 120 : y + 48, { size: N ? 17 : 20, weight: 700, align: N ? 'center' : 'left', reveal: r });
      });
      // One pipeline.
      const [px, py, pw, ph] = N ? [60, 270, 280, 56] : [330, 180, 220, 60];
      pipe(p, px, py, pw, ph, R(t, 0.3, 0.5));
      K.gear(p, px + pw * 0.33, py + ph / 2, ph * 0.34, { col: 'ochre', reveal: R(t, 0.4, 0.55) });
      K.gear(p, px + pw * 0.62, py + ph / 2, ph * 0.28, { col: 'ochre', rot: 0.3, reveal: R(t, 0.45, 0.6) });
      p.check(px + pw * 0.86, py + ph / 2, 22, { col: 'green', reveal: R(t, 0.5, 0.62) });
      p.text(L('one pipeline', '파이프라인 하나'), px + pw / 2, py + ph + 32, { align: 'center', size: 21, weight: 700, reveal: R(t, 0.45, 0.6) });
      piles.forEach(([x, y], i) => {
        const r = R(t, 0.26 + i * 0.05, 0.42 + i * 0.05);
        if (N) p.arrow([[x + 41, y + 132], [px + 40 + i * 100, py - 6]], { bend: i === 1 ? 0 : (i ? -0.12 : 0.12), reveal: r });
        else p.arrow([[x + 96 + p.tw(teams[i], 20, 700) + 14, y + 42], [px - 16, py + ph / 2 + (i - 1) * 16]], { bend: (i - 1) * -0.1, reveal: r });
      });
      // Where the results land.
      const alertBox = N ? [30, 400, 340, 70] : [600, 60, 190, 72];
      const dash = N ? [90, 510, 220, 120] : [610, 220, 170, 120];
      K.alert(p, ...alertBox, { title: L('Weekly KPIs', '주간 KPI 리포트'), reveal: R(t, 0.6, 0.78) });
      dashboard(p, ...dash, R(t, 0.66, 0.9));
      if (N) {
        p.arrow([[200, py + ph + 44], [200, alertBox[1] - 8]], { reveal: R(t, 0.55, 0.65) });
        p.arrow([[200, alertBox[1] + alertBox[3] + 4], [200, dash[1] - 8]], { reveal: R(t, 0.7, 0.8) });
      } else {
        p.arrow([[px + pw + 14, py + 18], [alertBox[0] - 8, alertBox[1] + 40]], { bend: 0.15, reveal: R(t, 0.55, 0.68) });
        p.arrow([[px + pw + 14, py + ph - 10], [dash[0] - 8, dash[1] + 40]], { bend: -0.15, reveal: R(t, 0.6, 0.72) });
        p.text(L('Slack', 'Slack'), alertBox[0] + alertBox[2] / 2, alertBox[1] + alertBox[3] + 26, { align: 'center', size: 18, col: 'soft', reveal: R(t, 0.75, 0.85) });
        p.text(L('dashboard', '대시보드'), dash[0] + dash[2] / 2, dash[1] + dash[3] + 26, { align: 'center', size: 18, col: 'soft', reveal: R(t, 0.8, 0.9) });
      }
    },
  },

  'p02-map': {
    size: [800, 380],
    narrow: [400, 520],
    draw(p, e) {
      const { t, L } = e;
      const N = e.narrow;
      const S = {
        pull: [L('pull data', '데이터 추출'), 'blue'],
        rec: [L('reconcile', '정산 대조'), 'ochre'],
        chk: [L('check rules', '자격 확인'), 'green'],
        tell: [L('notify', '담당자 공유'), 'red'],
      };
      const cols = [['pull', 'rec', 'chk', 'tell'], ['pull', 'chk', 'rec', 'tell'], ['pull', 'chk', 'tell']];
      const teams = TEAMS(L);
      const cw = N ? 116 : 150, gap = N ? 14 : 30, x0 = N ? 10 : 30, top = N ? 64 : 70, ch = N ? 44 : 48, step = N ? 56 : 62;
      cols.forEach((col, c) => {
        const x = x0 + c * (cw + gap);
        p.text(teams[c], x + cw / 2, top - 22, { align: 'center', size: N ? 16 : 20, weight: 700, reveal: R(t, 0.02 + c * 0.05, 0.15 + c * 0.05) });
        col.forEach((k, i) => {
          const r = R(t, 0.08 + c * 0.1 + i * 0.05, 0.25 + c * 0.1 + i * 0.05);
          const [label, colr] = S[k];
          p.box(x, top + i * step, cw, ch, { r: 6, fill: colr, fa: 0.3, reveal: r });
          p.text(label, x + cw / 2, top + i * step + ch / 2 + 1, { align: 'center', vcenter: true, size: p.fit(label, cw - 12, N ? 16 : 19, 13), reveal: r });
        });
      });
      // The punchline: it's the same four steps.
      const lx = N ? 40 : 626, ly = N ? 330 : 70;
      p.text(L('same steps,\ndifferent data', '데이터만 다른\n같은 단계'), N ? 200 : lx + 80, N ? ly : ly - 22 + 0, { align: 'center', size: 21, weight: 700, col: 'red', reveal: R(t, 0.7, 0.85), lh: 24 });
      const keys = ['pull', 'rec', 'chk', 'tell'];
      keys.forEach((k, i) => {
        const [label, colr] = S[k];
        const [bx, by] = N ? [30 + (i % 2) * 176, ly + 50 + Math.floor(i / 2) * 60] : [lx, ly + 36 + i * 58];
        const r = R(t, 0.75 + i * 0.05, 0.9 + i * 0.03);
        p.box(bx, by, N ? 164 : 160, 44, { r: 6, fill: colr, fa: 0.45, reveal: r, w: 2 });
        p.text(label, bx + (N ? 82 : 80), by + 23, { align: 'center', vcenter: true, size: 19, weight: 700, reveal: r });
      });
      if (!N) p.line([[lx - 18, ly + 36], [lx - 26, ly + 36], [lx - 26, ly + 36 + 3 * 58 + 44], [lx - 18, ly + 36 + 3 * 58 + 44]], { reveal: R(t, 0.72, 0.85) });
    },
  },

  'p02-hours': {
    size: [800, 380],
    narrow: [400, 420],
    draw(p, e) {
      const { t, L } = e;
      const N = e.narrow;
      const base = N ? 340 : 330;
      const bh = N ? 12 : 12.5, bw = N ? 96 : 120;
      const [ax, bx] = N ? [70, 250] : [170, 560];
      p.line([[20, base], [N ? 380 : 780, base]], { w: 1.6, reveal: R(t, 0, 0.15) });
      // Twenty 10-hour bricks.
      for (let i = 0; i < 20; i++) {
        const r = R(t, 0.08 + i * 0.022, 0.14 + i * 0.022);
        if (r <= 0) continue;
        const y = base - (i + 1) * (bh + 1.5);
        p.box(ax + (i % 2 ? 3 : -3), y, bw, bh, { fill: 'red', fa: 0.3 + (i % 3) * 0.05, reveal: r, over: 1.5, w: 1.2 });
      }
      p.text(L('~200 h a month', '월 약 200시간'), ax + bw / 2, base - 20 * (bh + 1.5) - 18, { align: 'center', size: 24, weight: 700, reveal: R(t, 0.55, 0.65) });
      p.text(L('by hand', '손으로'), ax + bw / 2, base + 30, { align: 'center', size: 19, col: 'soft', reveal: R(t, 0.55, 0.65) });
      K.person(p, ax - (N ? 30 : 48), base, N ? 50 : 62, { col: 'blue', mood: 'worried', reveal: R(t, 0.1, 0.3) });
      // After: a sliver.
      p.box(bx, base - 4, bw, 4, { fill: 'green', fa: 0.6, reveal: R(t, 0.66, 0.75), over: 1.5 });
      p.text(L('< 1 h', '1시간 미만'), bx + bw / 2, base - 20, { align: 'center', size: 24, weight: 700, reveal: R(t, 0.7, 0.8) });
      p.text(L('automated', '자동화 후'), bx + bw / 2, base + 30, { align: 'center', size: 19, col: 'soft', reveal: R(t, 0.7, 0.8) });
      K.person(p, bx + bw + (N ? 30 : 60), base, N ? 50 : 62, { col: 'blue', mood: 'happy', hair: true, reveal: R(t, 0.72, 0.9) });
      if (!N) p.arrow([[330, 170], [500, 250]], { bend: -0.2, reveal: R(t, 0.6, 0.72) });
      if (!N) p.text(L('time went to planning\nand analysis', '확보한 시간은\n기획과 분석으로'), 600, 150, { align: 'center', size: 19, col: 'blue', lh: 23, reveal: R(t, 0.82, 0.95) });
      else p.text(L('time went to planning and analysis', '확보한 시간은 기획과 분석으로'), 200, 408, { align: 'center', size: 17, col: 'blue', reveal: R(t, 0.82, 0.95) });
    },
  },

  'p02-pipeline': {
    size: [800, 400],
    narrow: [400, 760],
    draw(p, e) {
      const { t, L } = e;
      const N = e.narrow;
      const st = [L('collect', '수집'), L('validate', '검증'), L('route', '분배')];
      if (!N) {
        // Sources.
        K.db(p, 80, 120, 70, 70, { col: 'ochre', reveal: R(t, 0, 0.15) });
        p.text(L('settlement', '정산 데이터'), 80, 190, { align: 'center', size: 17, reveal: R(t, 0.1, 0.2) });
        p.box(40, 236, 80, 56, { r: 8, fill: 'blue', fa: 0.25, reveal: R(t, 0.05, 0.2) });
        p.text('API', 80, 266, { align: 'center', vcenter: true, size: 22, weight: 700, reveal: R(t, 0.12, 0.22) });
        p.text(L('platform', '플랫폼'), 80, 316, { align: 'center', size: 17, reveal: R(t, 0.12, 0.22) });
        p.arrow([[170, 130], [262, 190]], { bend: -0.1, reveal: R(t, 0.2, 0.3) });
        p.arrow([[132, 264], [262, 214]], { bend: 0.1, reveal: R(t, 0.22, 0.32) });
        p.text(st[0], 210, 120, { size: 19, col: 'red', weight: 700, reveal: R(t, 0.25, 0.35) });
        // Validate.
        p.box(270, 150, 150, 100, { r: 10, fill: 'green', fa: 0.22, reveal: R(t, 0.3, 0.45) });
        K.gear(p, 312, 190, 20, { col: 'ochre', reveal: R(t, 0.38, 0.5) });
        p.check(370, 192, 28, { col: 'green', reveal: R(t, 0.42, 0.52) });
        p.text(st[1], 345, 234, { align: 'center', size: 19, weight: 700, col: 'red', reveal: R(t, 0.4, 0.5) });
        p.text(L('rules run once,\nfor every team', '규칙은 한 번,\n모든 팀에'), 345, 290, { align: 'center', size: 17, col: 'soft', lh: 21, reveal: R(t, 0.45, 0.55) });
        // Route.
        p.text(st[2], 452, 322, { size: 19, weight: 700, col: 'red', reveal: R(t, 0.52, 0.6) });
        [[560, 60], [560, 175], [560, 300]].forEach(([x, y], i) => p.arrow([[426, 200], [x - 10, y + 32]], { bend: (i - 1) * -0.12, reveal: R(t, 0.52 + i * 0.05, 0.64 + i * 0.05) }));
        K.alert(p, 560, 40, 220, 68, { title: L('#creator-ops', '#크리에이터-운영'), reveal: R(t, 0.62, 0.78) });
        dashboard(p, 580, 150, 180, 100, R(t, 0.68, 0.84));
        K.sheet(p, 580, 282, 180, 84, { rows: 4, cols: 4, fill: 'ochre', reveal: R(t, 0.74, 0.92) });
        p.text(L('team sheets', '팀별 시트'), 670, 392, { align: 'center', size: 17, col: 'soft', reveal: R(t, 0.85, 0.95) });
      } else {
        K.db(p, 120, 70, 64, 64, { col: 'ochre', reveal: R(t, 0, 0.15) });
        p.text(L('settlement', '정산 데이터'), 120, 138, { align: 'center', size: 17, reveal: R(t, 0.1, 0.2) });
        p.box(240, 44, 80, 56, { r: 8, fill: 'blue', fa: 0.25, reveal: R(t, 0.05, 0.2) });
        p.text('API', 280, 74, { align: 'center', vcenter: true, size: 22, weight: 700, reveal: R(t, 0.12, 0.22) });
        p.text(L('platform', '플랫폼'), 280, 124, { align: 'center', size: 17, reveal: R(t, 0.12, 0.22) });
        p.arrow([[130, 160], [180, 206]], { reveal: R(t, 0.2, 0.3) });
        p.arrow([[272, 140], [222, 206]], { reveal: R(t, 0.22, 0.32) });
        p.text(st[0], 244, 188, { size: 18, col: 'red', weight: 700, reveal: R(t, 0.25, 0.35) });
        p.box(110, 214, 180, 96, { r: 10, fill: 'green', fa: 0.22, reveal: R(t, 0.3, 0.45) });
        K.gear(p, 160, 252, 20, { col: 'ochre', reveal: R(t, 0.38, 0.5) });
        p.check(236, 254, 28, { col: 'green', reveal: R(t, 0.42, 0.52) });
        p.text(st[1], 200, 298, { align: 'center', size: 19, weight: 700, col: 'red', reveal: R(t, 0.4, 0.5) });
        p.text(L('rules run once, for every team', '규칙은 한 번, 모든 팀에'), 200, 340, { align: 'center', size: 16, col: 'soft', reveal: R(t, 0.45, 0.55) });
        p.arrow([[200, 356], [200, 400]], { reveal: R(t, 0.5, 0.58) });
        p.text(st[2], 214, 386, { size: 18, weight: 700, col: 'red', reveal: R(t, 0.52, 0.6) });
        K.alert(p, 60, 412, 280, 68, { title: L('#creator-ops', '#크리에이터-운영'), reveal: R(t, 0.6, 0.76) });
        dashboard(p, 90, 500, 220, 110, R(t, 0.66, 0.82));
        K.sheet(p, 90, 630, 220, 90, { rows: 4, cols: 4, fill: 'ochre', reveal: R(t, 0.74, 0.92) });
        p.text(L('team sheets', '팀별 시트'), 200, 746, { align: 'center', size: 17, col: 'soft', reveal: R(t, 0.85, 0.95) });
      }
    },
  },

  'p02-errors': {
    size: [800, 320],
    narrow: [400, 600],
    draw(p, e) {
      const { t, L } = e;
      const N = e.narrow;
      const g = N ? 22 : 17, rad = N ? 5.2 : 4.4;
      const [ax, ay] = N ? [101, 50] : [110, 50];
      const [bx, by] = N ? [101, 330] : [500, 50];
      const scat = [7, 23, 48, 66, 91];
      K.dotGrid(p, ax, ay, 10, 100, 5, { gap: g, rad, pick: scat, reveal: R(t, 0.05, 0.45) });
      K.dotGrid(p, bx, by, 10, 100, 0, { gap: g, rad, pick: [], reveal: R(t, 0.35, 0.75) });
      // Under 1%: a faint half-dot.
      if (R(t, 0.75, 0.8) > 0.5) p.circle(bx + 6 * g, by + 3 * g, rad * 0.6, { fill: 'red', fa: 0.6, w: 1 });
      const lw = 9 * g;
      p.text(L('before: 5 in 100 weekly reports wrong', '이전: 주간 리포트 100건 중 5건 오류'), ax + lw / 2, ay + lw + 42, { align: 'center', size: p.fit(L('before: 5 in 100 weekly reports wrong', '이전: 주간 리포트 100건 중 5건 오류'), N ? 360 : 340, 20, 14), reveal: R(t, 0.4, 0.5) });
      p.text(L('after: under 1 in 100', '이후: 100건 중 1건 미만'), bx + lw / 2, by + lw + 42, { align: 'center', size: 20, reveal: R(t, 0.8, 0.9) });
      if (!N) p.arrow([[ax + lw + 40, ay + lw / 2], [bx - 40, by + lw / 2]], { reveal: R(t, 0.45, 0.55) });
    },
  },
};
