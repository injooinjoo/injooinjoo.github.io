// P-07 N-CONNECT.
import { R } from '../pencil.js';
import * as K from '../kit.js';

export default {
  'p07-hero': {
    size: [800, 440],
    narrow: [400, 570],
    draw(p, e) {
      const { t, L } = e;
      const N = e.narrow;
      const P = N ? [96, 150] : [150, 150];
      const C = N ? [304, 150] : [650, 150];
      const G = N ? [200, 470] : [400, 350];
      // Players.
      K.crowd(p, P[0] - (N ? 42 : 52), P[1], 3, N ? 44 : 54, { cols: ['blue', 'ochre', 'green'], gap: N ? 42 : 52, reveal: R(t, 0, 0.25) });
      p.text(L('players', '플레이어'), P[0], P[1] + 30, { align: 'center', size: 22, weight: 700, reveal: R(t, 0.1, 0.25) });
      // Creators.
      K.person(p, C[0] - 10, C[1], N ? 76 : 96, { col: 'red', headset: true, hair: true, mood: 'happy', reveal: R(t, 0.1, 0.35) });
      K.mic(p, C[0] + (N ? 38 : 50), C[1] - 26, N ? 40 : 50, { reveal: R(t, 0.2, 0.35) });
      p.text(L('creators', '크리에이터'), C[0], C[1] + 30, { align: 'center', size: 22, weight: 700, reveal: R(t, 0.2, 0.35) });
      p.text(L('on SOOP and Chzzk', 'SOOP·치지직에서'), C[0], C[1] + 54, { align: 'center', size: 17, col: 'soft', reveal: R(t, 0.25, 0.4) });
      // Games.
      K.gamepad(p, G[0], G[1] - 30, N ? 84 : 100, { col: 'green', reveal: R(t, 0.2, 0.4) });
      p.text(L('NEXON games', '넥슨 게임'), G[0], G[1] + 30, { align: 'center', size: 22, weight: 700, reveal: R(t, 0.3, 0.45) });
      // Program in the middle.
      const M = N ? [200, 300] : [400, 190];
      p.ellipse(M[0], M[1], N ? 70 : 84, 30, { fill: 'ochre', fa: 0.4, w: 1.8, reveal: R(t, 0.4, 0.55) });
      p.text('N-CONNECT', M[0], M[1] + 1, { align: 'center', vcenter: true, size: N ? 19 : 22, weight: 700, reveal: R(t, 0.45, 0.58) });
      // Edges.
      const edges = N
        ? [
            [[150, 110], [250, 110], L('streams', '방송·콘텐츠'), [200, 92], -0.25],
            [[250, 200], [150, 200], L('', ''), null, 0],
            [[120, 196], [160, 432], L('link accounts,\nget rewards', '계정 연동·\n보상'), [66, 330], 0.14],
            [[240, 432], [282, 214], L('activity, growth,\nimpact rewards', '활동·성장·\n임팩트 보상'), [336, 330], 0.14],
          ]
        : [
            [[260, 110], [560, 110], L('streams and content', '방송·콘텐츠'), [410, 84], -0.12],
            [[176, 206], [312, 348], L('link accounts, get rewards', '계정 연동·보상'), [150, 318], 0.12],
            [[490, 348], [620, 216], L('rewards for activity,\ngrowth, impact', '활동·성장·임팩트\n보상'), [680, 310], 0.12],
          ];
      edges.forEach(([a, b, label, lp, bend], i) => {
        if (!lp) return;
        const r = R(t, 0.5 + i * 0.1, 0.68 + i * 0.1);
        p.arrow([a, b], { bend, reveal: r, w: 1.6 });
        p.text(label, lp[0], lp[1], { align: 'center', size: 17, col: 'blue', lh: 20, reveal: r });
      });
    },
  },

  'p07-spike': {
    size: [800, 340],
    narrow: [400, 440],
    draw(p, e) {
      const { t, L } = e;
      const N = e.narrow;
      const [x0, y0, w, h] = N ? [30, 40, 350, 300] : [60, 40, 700, 240];
      p.line([[x0, y0 + h], [x0 + w, y0 + h]], { w: 1.6, reveal: R(t, 0, 0.15) });
      p.line([[x0, y0 + h], [x0, y0 - 10]], { w: 1.6, reveal: R(t, 0, 0.15) });
      p.text(L('time', '시간'), x0 + w, y0 + h + 28, { align: 'right', size: 17, col: 'soft', reveal: R(t, 0.05, 0.15) });
      // One-off campaigns: spikes that fall back.
      const base = y0 + h - 16;
      const spikes = [0.18, 0.47, 0.76];
      const pts = [[x0, base]];
      spikes.forEach((f) => {
        const cx = x0 + w * f;
        pts.push([cx - w * 0.05, base], [cx - w * 0.015, base - h * 0.7], [cx + w * 0.01, base - h * 0.72], [cx + w * 0.05, base - h * 0.08], [cx + w * 0.09, base]);
      });
      pts.push([x0 + w, base]);
      p.line(pts, { w: 1.6, col: 'soft', reveal: R(t, 0.15, 0.55) });
      // An ongoing program: steps that hold.
      const steps = [[0, 0.02], [0.14, 0.12], [0.3, 0.22], [0.46, 0.33], [0.62, 0.43], [0.78, 0.52], [1, 0.6]];
      const sp = [];
      steps.forEach(([f, v], i) => {
        const x = x0 + w * f, y = base - h * v;
        if (i) sp.push([x, sp[sp.length - 1][1]]);
        sp.push([x, y]);
      });
      p.line(sp, { w: 2.4, col: 'green', reveal: R(t, 0.45, 0.9) });
      p.text(L('one-off campaigns', '일회성 캠페인'), x0 + w * 0.47 + 16, base - h * 0.74, { size: 19, col: 'soft', reveal: R(t, 0.4, 0.5) });
      p.text(L('an ongoing program', '지속되는 프로그램'), x0 + w - 4, base - h * 0.6 - 16, { align: 'right', size: 21, weight: 700, col: 'green', reveal: R(t, 0.85, 0.95) });
    },
  },

  'p07-report': {
    size: [800, 420],
    narrow: [400, 780],
    draw(p, e) {
      const { t, L } = e;
      const N = e.narrow;
      const sig = [L('account linking', '계정 연동'), L('referrals', '추천'), L('membership', '멤버십'), L('content support', '콘텐츠 지원'), L('player impact', '플레이어 임팩트')];
      const cols = ['blue', 'green', 'ochre', 'red', 'blue'];
      sig.forEach((s, i) => {
        const [x, y, w, h] = N ? [20 + (i % 2) * 186, 20 + Math.floor(i / 2) * 58, 174, 46] : [24, 30 + i * 74, 190, 54];
        const r = R(t, 0.02 + i * 0.06, 0.2 + i * 0.06);
        p.box(x, y, w, h, { r: 8, fill: cols[i], fa: 0.3, reveal: r });
        p.text(s, x + w / 2, y + h / 2 + 1, { align: 'center', vcenter: true, size: p.fit(s, w - 16, 19, 13), reveal: r });
        if (!N) p.arrow([[x + w + 6, y + h / 2], [300, 210 + (i - 2) * 14]], { bend: (i - 2) * -0.04, head: 7, reveal: R(t, 0.3 + i * 0.03, 0.42 + i * 0.03) });
      });
      // The one report.
      const [dx, dy, dw, dh] = N ? [110, 210, 180, 220] : [310, 90, 180, 240];
      if (N) p.arrow([[200, 186], [200, 206]], { reveal: R(t, 0.3, 0.4) });
      K.doc(p, dx, dy, dw, dh, { lines: 0, fill: 'paper', fa: 0.9, reveal: R(t, 0.35, 0.5) });
      p.text(L('program report', '정기 리포트'), dx + 16, dy + 32, { size: 20, weight: 700, reveal: R(t, 0.42, 0.52) });
      const vals = [0.5, 0.7, 0.45, 0.8, 0.62];
      vals.forEach((v, i) => p.box(dx + 22 + i * 28, dy + dh - 30 - v * 110, 18, v * 110, { fill: cols[i], fa: 0.5, over: 1, w: 1, reveal: R(t, 0.5 + i * 0.03, 0.6 + i * 0.03) }));
      p.line([[dx + 16, dy + dh - 30], [dx + dw - 16, dy + dh - 30]], { w: 1, reveal: R(t, 0.5, 0.6) });
      [0, 1].forEach((j) => p.line([[dx + 18, dy + 52 + j * 12], [dx + dw - 30 - j * 40, dy + 52 + j * 12]], { w: 1, a: 0.45, pass: 1, reveal: R(t, 0.45, 0.55) }));
      // Readers.
      const readers = [L('product', '제품'), L('marketing', '마케팅'), L('operations', '운영'), L('platform partners', '플랫폼 파트너')];
      readers.forEach((rd, i) => {
        const [x, y] = N ? [60 + (i % 2) * 190, 560 + Math.floor(i / 2) * 118] : [600, 60 + i * 92];
        const r = R(t, 0.6 + i * 0.07, 0.78 + i * 0.07);
        K.person(p, x, y + 44, 50, { col: ['green', 'red', 'ochre', 'blue'][i], mood: 'happy', reveal: r });
        p.text(rd, N ? x : x + 40, N ? y + 72 : y + 36, { align: N ? 'center' : 'left', size: 18, reveal: r });
        if (!N) p.arrow([[dx + dw + 8, dy + dh / 2 + (i - 1.5) * 20], [x - 36, y + 24]], { bend: (i - 1.5) * 0.05, head: 7, reveal: r });
      });
      if (N) {
        p.arrow([[200, 440], [200, 492]], { reveal: R(t, 0.58, 0.66) });
        p.text(L('the same numbers for everyone', '모두가 같은 숫자로'), 200, 520, { align: 'center', size: 18, col: 'red', reveal: R(t, 0.7, 0.8) });
      } else {
        p.text(L('the same numbers for everyone', '모두가 같은 숫자로'), dx + dw / 2, dy + dh + 36, { align: 'center', size: 18, col: 'red', reveal: R(t, 0.8, 0.9) });
      }
    },
  },

  'p07-milestones': {
    size: [800, 250],
    narrow: [400, 520],
    draw(p, e) {
      const { t, L } = e;
      const N = e.narrow;
      const items = [
        ['2026.04', L('Preseason opens on SOOP', 'SOOP에서 프리시즌 시작'), 'ochre'],
        ['2026.05', L('80K+ accounts linked in two weeks, per NEXON', '2주 만에 계정 연동 8만 건+ (넥슨 발표)'), 'green'],
        ['2026.05', L('Opens on Chzzk with Naver account linking', '네이버 계정 연동과 함께 치지직으로 확장'), 'blue'],
      ];
      if (N) {
        p.line([[60, 40], [60, 470]], { w: 1.8, reveal: R(t, 0, 0.3) });
        items.forEach(([d, txt, col], i) => {
          const y = 70 + i * 150;
          const r = R(t, 0.2 + i * 0.2, 0.45 + i * 0.2);
          p.circle(60, y, 12, { fill: col, fa: 0.6, reveal: r });
          p.text(d, 90, y + 7, { size: 22, weight: 700, reveal: r });
          p.text(txt, 90, y + 40, { size: 18, max: 290, lh: 23, reveal: r });
        });
      } else {
        p.line([[40, 100], [760, 100]], { w: 1.8, reveal: R(t, 0, 0.3) });
        items.forEach(([d, txt, col], i) => {
          const x = 120 + i * 260;
          const r = R(t, 0.2 + i * 0.2, 0.45 + i * 0.2);
          p.circle(x, 100, 13, { fill: col, fa: 0.6, reveal: r });
          p.text(d, x, 64, { align: 'center', size: 22, weight: 700, reveal: r });
          p.text(txt, x, 150, { align: 'center', size: 18, max: 220, lh: 23, reveal: r });
        });
        p.arrow([[700, 100], [770, 100]], { reveal: R(t, 0.85, 0.95) });
      }
    },
  },
};
