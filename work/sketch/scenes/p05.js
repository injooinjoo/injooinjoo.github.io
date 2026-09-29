// P-05 Creator analytics dashboard.
import { R, hash } from '../pencil.js';
import * as K from '../kit.js';

// A tiny chart inside a cell: line, bars or pie, chosen by index.
function mini(p, x, y, w, h, i, r) {
  if (r <= 0) return;
  const kind = i % 3;
  p.box(x, y, w, h, { r: 3, w: 0.9, a: 0.55, pass: 1, reveal: r });
  if (kind === 0) {
    const pts = Array.from({ length: 5 }, (_, j) => [x + 5 + (j * (w - 10)) / 4, y + h - 6 - hash(i * 7 + j) * (h - 14)]);
    p.line(pts, { w: 1, pass: 1, col: 'blue', reveal: r });
  } else if (kind === 1) {
    for (let j = 0; j < 4; j++) {
      const bh = 4 + hash(i * 3 + j) * (h - 14);
      p.box(x + 6 + j * ((w - 12) / 4), y + h - 5 - bh, (w - 12) / 4 - 3, bh, { stroke: false, fill: 'ochre', fa: 0.55, reveal: r });
    }
  } else {
    p.circle(x + w / 2, y + h / 2, Math.min(w, h) * 0.3, { w: 0.9, pass: 1, fill: 'red', fa: 0.3, reveal: r });
  }
}

// Wireframe of one dashboard view.
function view(p, x, y, w, h, kind, title, L, r) {
  p.box(x, y, w, h, { r: 10, w: 1.6, fill: 'paper', fa: 0.85, reveal: K.S(r, 3, 0) });
  p.text(title, x + 14, y + 30, { size: p.fit(title, w - 24, 19, 13), weight: 700, reveal: K.S(r, 3, 0) });
  const cx = x + 18, cy = y + 50, cw = w - 36, ch = h - 76;
  const rr = K.S(r, 3, 1), r2 = K.S(r, 3, 2);
  if (kind === 'viewers') {
    p.line([[cx, cy + ch], [cx + cw, cy + ch]], { w: 1, reveal: rr });
    const a = [0.5, 0.45, 0.55, 0.5, 0.6, 0.58, 0.7], b = [0.45, 0.5, 0.48, 0.4, 0.42, 0.38, 0.36];
    p.line(b.map((v, j) => [cx + (j * cw) / 6, cy + ch - v * ch]), { w: 1.2, dash: [4, 4], col: 'soft', reveal: rr });
    p.line(a.map((v, j) => [cx + (j * cw) / 6, cy + ch - v * ch]), { w: 1.8, col: 'blue', reveal: r2 });
    p.text(L('this week', '이번 주'), cx + cw, cy + ch * 0.22, { align: 'right', size: 15, col: 'blue', reveal: r2 });
    p.text(L('last week', '지난주'), cx + cw, cy + ch * 0.78, { align: 'right', size: 15, col: 'soft', reveal: r2 });
  } else if (kind === 'subs') {
    const mid = cy + ch * 0.62;
    p.line([[cx, mid], [cx + cw, mid]], { w: 1, reveal: rr });
    for (let j = 0; j < 7; j++) {
      const up = (0.25 + hash(j + 4) * 0.35) * ch * 0.6, dn = (0.1 + hash(j + 9) * 0.2) * ch * 0.4;
      const bx = cx + 4 + j * (cw / 7);
      p.box(bx, mid - up, cw / 7 - 8, up, { fill: 'green', fa: 0.5, over: 1, w: 1, reveal: r2 });
      p.box(bx, mid, cw / 7 - 8, dn, { fill: 'red', fa: 0.45, over: 1, w: 1, reveal: r2 });
    }
    p.text(L('new', '신규'), cx, cy + 8, { size: 15, col: 'green', reveal: r2 });
    p.text(L('left', '해지'), cx, cy + ch + 4, { size: 15, col: 'red', reveal: r2 });
  } else {
    const rows = [[L('home', '홈'), 0.8], [L('search', '검색'), 0.55], [L('tags', '태그'), 0.4], [L('outside', '외부'), 0.2]];
    rows.forEach(([name, v], j) => {
      const yy = cy + 6 + j * (ch / 4);
      p.text(name, cx, yy + 14, { size: 15, reveal: rr });
      p.box(cx + 56, yy + 2, (cw - 60) * v, ch / 4 - 12, { fill: 'ochre', fa: 0.5, over: 1, w: 1, reveal: r2 });
    });
  }
}

const QUESTIONS = (L) => [
  L('Are my viewers changing?', '시청자가 변하고 있나?'),
  L('Are my subscribers staying?', '구독자가 남고 있나?'),
  L('Where do people find me?', '사람들이 나를 어디서 찾나?'),
];

export default {
  'p05-hero': {
    size: [800, 400],
    narrow: [400, 620],
    draw(p, e) {
      const { t, L } = e;
      const N = e.narrow;
      const [wx, wy, ww, wh] = N ? [40, 50, 320, 230] : [30, 60, 330, 290];
      p.text(L('30 charts', '차트 30개'), wx + ww / 2, wy - 16, { align: 'center', size: 22, weight: 700, col: 'soft', reveal: R(t, 0, 0.1) });
      const cw = ww / 6, ch = wh / 5;
      for (let i = 0; i < 30; i++) mini(p, wx + (i % 6) * cw + 3, wy + Math.floor(i / 6) * ch + 3, cw - 6, ch - 6, i, R(t, 0.02 + i * 0.012, 0.1 + i * 0.012));
      if (N) p.arrow([[200, 300], [200, 344]], { w: 2, reveal: R(t, 0.45, 0.55) });
      else p.arrow([[378, 205], [452, 205]], { w: 2, reveal: R(t, 0.45, 0.55) });
      const qs = QUESTIONS(L);
      p.text(L('3 questions', '질문 3개'), N ? 200 : 625, N ? 372 : 44, { align: 'center', size: 22, weight: 700, col: 'red', reveal: R(t, 0.5, 0.6) });
      qs.forEach((q, i) => {
        const [x, y, w, h] = N ? [30, 392 + i * 76, 340, 64] : [470, 70 + i * 96, 310, 78];
        const r = R(t, 0.55 + i * 0.1, 0.72 + i * 0.1);
        p.box(x, y, w, h, { r: 10, fill: ['blue', 'green', 'ochre'][i], fa: 0.3, reveal: r, w: 1.6 });
        K.num(p, x + 26, y + h / 2, i + 1, { r: 13, col: 'paper', reveal: r });
        p.text(q, x + 52, y + h / 2 + 1, { vcenter: true, size: p.fit(q, w - 64, 21, 14), weight: 700, reveal: r });
      });
    },
  },

  'p05-views': {
    size: [800, 340],
    narrow: [400, 740],
    draw(p, e) {
      const { t, L } = e;
      const N = e.narrow;
      const qs = QUESTIONS(L);
      const kinds = ['viewers', 'subs', 'sources'];
      kinds.forEach((k, i) => {
        const [x, y, w, h] = N ? [20, 20 + i * 240, 360, 216] : [20 + i * 260, 30, 240, 290];
        view(p, x, y, w, h, k, qs[i], L, R(t, 0.05 + i * 0.25, 0.4 + i * 0.25));
      });
    },
  },

  'p05-actions': {
    size: [800, 360],
    narrow: [400, 660],
    draw(p, e) {
      const { t, L } = e;
      const N = e.narrow;
      const qs = QUESTIONS(L);
      const acts = [L('move the stream time', '방송 시간 조정'), L('plan the next content', '다음 콘텐츠 기획'), L('fix titles and tags', '제목·태그 다듬기')];
      const icon = [
        (x, y, r) => K.clock(p, x, y, 22, { reveal: r }),
        (x, y, r) => K.doc(p, x - 18, y - 24, 36, 46, { lines: 3, reveal: r }),
        (x, y, r) => K.tag(p, x - 30, y - 16, 60, 32, { text: '#', col: 'green', reveal: r }),
      ];
      qs.forEach((q, i) => {
        const r = R(t, 0.05 + i * 0.25, 0.35 + i * 0.25);
        if (N) {
          const y = 30 + i * 214;
          p.box(20, y, 360, 52, { r: 10, fill: ['blue', 'green', 'ochre'][i], fa: 0.3, reveal: r });
          p.text(q, 200, y + 27, { align: 'center', vcenter: true, size: p.fit(q, 330, 20, 14), weight: 700, reveal: r });
          p.arrow([[200, y + 60], [200, y + 96]], { reveal: r });
          icon[i](200, y + 128, r);
          p.text(acts[i], 200, y + 182, { align: 'center', size: 20, col: 'red', weight: 700, reveal: r });
        } else {
          const y = 60 + i * 110;
          p.box(20, y - 28, 290, 56, { r: 10, fill: ['blue', 'green', 'ochre'][i], fa: 0.3, reveal: r });
          p.text(q, 165, y + 1, { align: 'center', vcenter: true, size: p.fit(q, 270, 20, 14), weight: 700, reveal: r });
          p.arrow([[322, y], [420, y]], { reveal: r });
          icon[i](470, y, r);
          p.text(acts[i], 520, y + 7, { size: 22, col: 'red', weight: 700, reveal: r });
        }
      });
      if (!N) p.text(L('question → view → something to change', '질문 → 화면 → 바꿀 수 있는 것'), 400, 350, { align: 'center', size: 18, col: 'soft', reveal: R(t, 0.85, 0.95) });
    },
  },

  'p05-adoption': {
    size: [800, 300],
    narrow: [400, 480],
    draw(p, e) {
      const { t, L } = e;
      const N = e.narrow;
      const g = N ? 22 : 22;
      const [gx, gy] = N ? [101, 30] : [90, 44];
      K.dotGrid(p, gx, gy, 10, 100, 65, { gap: g, rad: 6, col: 'green', reveal: R(t, 0.05, 0.6) });
      const [tx, ty] = N ? [200, 290] : [470, 100];
      const al = N ? 'center' : 'left';
      p.text('65%+', tx, ty + 10, { align: al, size: 52, weight: 700, col: 'green', reveal: R(t, 0.55, 0.7) });
      p.text(L('adopted it on their own, no mandate', '강제 없이 스스로 도입'), tx, ty + 48, { align: al, size: p.fit(L('adopted it on their own, no mandate', '강제 없이 스스로 도입'), N ? 360 : 320, 22, 14), reveal: R(t, 0.62, 0.75) });
      p.text(L('5,000+ creators served', '이용 크리에이터 5,000명+'), tx, ty + 96, { align: al, size: 20, col: 'soft', reveal: R(t, 0.7, 0.82) });
      p.text(L('+18% channel growth, strategic streamers', '전략 스트리머 채널 성장 +18%'), tx, ty + 128, { align: al, size: p.fit(L('+18% channel growth, strategic streamers', '전략 스트리머 채널 성장 +18%'), N ? 360 : 320, 20, 13), col: 'soft', reveal: R(t, 0.76, 0.88) });
    },
  },
};
