// P-03 Creator subscriptions.
import { R } from '../pencil.js';
import * as K from '../kit.js';
import { wedge } from './util.js';

// Benefit icons, drawn centred on (x, y) at roughly s units wide.
const ICON = {
  badge: (p, x, y, s, r) => K.badge(p, x, y - s * 0.1, s * 0.34, { reveal: r }),
  emote: (p, x, y, s, r) => {
    p.circle(x, y, s * 0.36, { fill: 'ochre', fa: 0.45, reveal: r });
    p.dot(x - s * 0.12, y - s * 0.06, s * 0.04, { reveal: r });
    p.dot(x + s * 0.12, y - s * 0.06, s * 0.04, { reveal: r });
    p.line([[x - s * 0.14, y + s * 0.1], [x, y + s * 0.18], [x + s * 0.14, y + s * 0.1]], { w: 1.3, reveal: r });
  },
  vod: (p, x, y, s, r) => {
    p.box(x - s * 0.44, y - s * 0.3, s * 0.88, s * 0.6, { r: 5, fill: 'blue', fa: 0.3, reveal: r });
    p.poly([[x - s * 0.1, y - s * 0.14], [x + s * 0.16, y], [x - s * 0.1, y + s * 0.14]], { fill: 'ink', fa: 0.3, reveal: r, w: 1.2 });
  },
  chat: (p, x, y, s, r) => {
    K.bubble(p, x - s * 0.46, y - s * 0.34, s * 0.58, s * 0.36, { tail: 'bl', reveal: r, fill: 'green' });
    K.bubble(p, x - s * 0.06, y - s * 0.02, s * 0.52, s * 0.34, { tail: 'br', reveal: r, fill: 'paper', fa: 0.9 });
  },
  gift: (p, x, y, s, r) => {
    p.box(x - s * 0.34, y - s * 0.16, s * 0.68, s * 0.5, { fill: 'red', fa: 0.4, reveal: r });
    p.box(x - s * 0.4, y - s * 0.3, s * 0.8, s * 0.16, { fill: 'red', fa: 0.25, reveal: r });
    p.line([[x, y - s * 0.3], [x, y + s * 0.34]], { reveal: r });
    p.line([[x, y - s * 0.3], [x - s * 0.18, y - s * 0.46], [x - s * 0.06, y - s * 0.3]], { w: 1.2, reveal: r });
    p.line([[x, y - s * 0.3], [x + s * 0.18, y - s * 0.46], [x + s * 0.06, y - s * 0.3]], { w: 1.2, reveal: r });
  },
};

export default {
  'p03-hero': {
    size: [800, 400],
    narrow: [400, 470],
    draw(p, e) {
      const { t, L } = e;
      const N = e.narrow;
      const [x, y, w, h] = N ? [20, 130, 360, 320] : [70, 110, 660, 270];
      const tops = K.stairs(p, x, y, w, h, 4, { cols: ['blue', 'blue', 'ochre', 'red'], reveal: R(t, 0, 0.35) });
      const names = N
        ? [L('basic', '기본'), L('+ emotes', '+ 이모티콘'), L('+ members\nonly', '+ 구독자\n전용'), L('+ the\nstreamer’s\nown', '+ 스트리머\n맞춤')]
        : [L('basic: badge', '기본: 배지'), L('+ emotes', '+ 이모티콘'), L('+ members-only', '+ 구독자 전용'), L('+ the streamer’s own', '+ 스트리머 맞춤')];
      const icons = ['badge', 'emote', 'vod', 'gift'];
      const sw = w / 4;
      tops.forEach(([cx, top], i) => {
        const r = R(t, 0.3 + i * 0.12, 0.5 + i * 0.12);
        K.person(p, cx - (N ? 16 : 26), top, N ? 40 : 58, { col: ['green', 'ochre', 'blue', 'red'][i], mood: 'happy', hair: i % 2 === 1, reveal: r });
        ICON[icons[i]](p, cx + (N ? 22 : 34), top - (N ? 22 : 30), N ? 30 : 44, r);
        p.text(names[i], cx, top + (N ? 26 : 32), { align: 'center', size: p.fit(names[i].split('\n')[0], sw - 12, N ? 16 : 19, 12), weight: 700, lh: N ? 18 : 22, reveal: R(t, 0.36 + i * 0.12, 0.52 + i * 0.12) });
      });
      p.text(L('each step up adds something', '한 칸 오를 때마다 하나씩 더'), N ? 200 : 70, 40, { align: N ? 'center' : 'left', size: N ? 20 : 24, weight: 700, reveal: R(t, 0.8, 0.95) });
      p.arrow(N ? [[40, 70], [340, 70]] : [[70, 64], [420, 60]], { bend: N ? -0.05 : -0.04, col: 'red', reveal: R(t, 0.82, 0.98) });
    },
  },

  'p03-oneprice': {
    size: [800, 360],
    narrow: [400, 500],
    draw(p, e) {
      const { t, L } = e;
      const N = e.narrow;
      const [tx, ty, tw, th] = N ? [100, 24, 200, 52] : [290, 30, 220, 56];
      K.tag(p, tx, ty, tw, th, { text: L('3,300 won / month', '월 3,300원'), col: 'ochre', size: N ? 19 : 22, weight: 700, reveal: R(t, 0, 0.2) });
      const fans = N ? [70, 200, 330] : [170, 400, 630];
      const by = N ? 300 : 300, s = N ? 74 : 92;
      const names = [L('casual', '가끔 보는 팬'), L('regular', '단골'), L('superfan', '열혈 팬')];
      fans.forEach((fx, i) => {
        const r = R(t, 0.15 + i * 0.1, 0.4 + i * 0.1);
        p.arrow([[tx + tw / 2 + (i - 1) * 40, ty + th + 8], [fx, by - s - 14]], { bend: (i - 1) * 0.08, reveal: r });
        K.person(p, fx, by, s, { col: ['green', 'blue', 'red'][i], mood: i === 2 ? 'neutral' : 'happy', hair: i === 1, reveal: r });
        K.badge(p, fx + s * 0.42, by - s * 0.28, N ? 11 : 14, { reveal: R(t, 0.45 + i * 0.05, 0.6 + i * 0.05) });
        p.text(names[i], fx, by + 28, { align: 'center', size: N ? 17 : 20, reveal: r });
      });
      p.text(L('same perks for everyone', '모두 같은 혜택'), N ? 200 : 400, by + (N ? 60 : 56), { align: 'center', size: N ? 18 : 20, col: 'soft', reveal: R(t, 0.6, 0.72) });
      const sx = fans[2];
      [[-50, -s - 10], [48, -s - 22], [60, -s + 18]].forEach(([dx, dy], i) => K.heart(p, sx + dx, by + dy, 14, { reveal: R(t, 0.65 + i * 0.04, 0.75 + i * 0.04) }));
      if (N) K.bubble(p, 176, 404, 214, 48, { text: L('I’d happily give more', '더 하고 싶은데…'), tail: 'tr', size: 17, fill: 'paper', reveal: R(t, 0.75, 0.9) });
      else K.bubble(p, 590, 36, 200, 50, { text: L('I’d happily give more', '더 하고 싶은데…'), tail: 'bl', size: 19, fill: 'paper', reveal: R(t, 0.75, 0.9) });
    },
  },

  'p03-funnel': {
    size: [800, 380],
    narrow: [400, 700],
    draw(p, e) {
      const { t, L } = e;
      const N = e.narrow;
      const stages = [L('plan page', '구독 안내'), L('pick a tier', '티어 선택'), L('payment', '결제'), L('subscribed', '구독 완료')];
      const before = [1, 0.62, 0.38, 0.22], after = [1, 0.72, 0.5, 0.29];
      const sets = N
        ? [[before, 40, 60, 320, 260, L('before', '이전')], [after, 40, 400, 320, 260, L('after', '이후')]]
        : [[before, 40, 70, 280, 260, L('before', '이전')], [after, 480, 70, 280, 260, L('after', '이후')]];
      sets.forEach(([ws, x, y, w, h, title], k) => {
        const r = R(t, 0.05 + k * 0.35, 0.4 + k * 0.35);
        p.text(title, x + w / 2, y - 18, { align: 'center', size: 22, weight: 700, col: k ? 'green' : 'soft', reveal: r });
        K.funnel(p, x, y, w, h, ws, { cols: k ? ['green', 'green', 'green', 'green'] : ['soft', 'soft', 'soft', 'soft'], labels: N ? stages : null, size: 16, reveal: r });
        // Drop-off arrows: thickness follows how many left at each step.
        ws.slice(0, 3).forEach((f, i) => {
          const loss = f - ws[i + 1];
          const sh = h / 4, yy = y + i * sh + sh * 0.75;
          const x0 = x + w / 2 + (w * ws[i + 1]) / 2 + 4;
          p.arrow([[x0, yy], [x0 + 26 + loss * 60, yy + 16]], { bend: -0.3, col: 'red', w: 1 + loss * 5, head: 7, reveal: R(t, 0.2 + k * 0.35 + i * 0.05, 0.3 + k * 0.35 + i * 0.05) });
        });
        const endW = w * ws[3];
        p.text(k ? L('+31% paid conversion', '유료 전환 +31%') : '', x + w / 2, y + h + 34, { align: 'center', size: 21, weight: 700, col: 'green', reveal: R(t, 0.85, 0.98) });
        if (!k) p.text(L('drop-offs', '이탈'), x + w / 2 + endW / 2 + 70, y + h - 6, { size: 18, col: 'red', reveal: R(t, 0.3, 0.4) });
      });
      if (!N) stages.forEach((sname, i) => p.text(sname, 400, 70 + (i + 0.5) * 65 + 6, { align: 'center', size: 18, reveal: R(t, 0.1 + i * 0.05, 0.25 + i * 0.05) }));
    },
  },

  'p03-modules': {
    size: [800, 380],
    narrow: [400, 640],
    draw(p, e) {
      const { t, L } = e;
      const N = e.narrow;
      const mods = [
        ['badge', L('badge', '배지')],
        ['emote', L('emotes', '이모티콘')],
        ['vod', L('members-only VOD', '구독자 전용 VOD')],
        ['chat', L('community', '커뮤니티')],
      ];
      const [sx, sby] = N ? [70, 150] : [80, 250];
      K.person(p, sx, sby, N ? 90 : 120, { col: 'blue', headset: true, hair: true, mood: 'happy', reveal: R(t, 0, 0.2) });
      p.text(L('streamer', '스트리머'), sx, sby + 30, { align: 'center', size: 19, reveal: R(t, 0.1, 0.2) });
      const tw = N ? 150 : 150, th = N ? 100 : 108;
      const tiles = N ? [[40, 220], [210, 220], [40, 340], [210, 340]] : [[210, 50], [380, 50], [210, 190], [380, 190]];
      tiles.forEach(([x, y], i) => {
        const r = R(t, 0.12 + i * 0.08, 0.32 + i * 0.08);
        p.box(x, y, tw, th, { r: 10, fill: 'paper', fa: 0.9, reveal: r, dash: [5, 4] });
        ICON[mods[i][0]](p, x + tw / 2, y + th * 0.4, 50, r);
        p.text(mods[i][1], x + tw / 2, y + th - 14, { align: 'center', size: p.fit(mods[i][1], tw - 10, 17, 13), reveal: r });
      });
      if (!N) p.arrow([[140, 150], [200, 110]], { bend: -0.2, reveal: R(t, 0.2, 0.3) });
      // The subscription card the streamer ends up with.
      const [cx, cy, cw, ch] = N ? [40, 470, 320, 150] : [580, 60, 200, 270];
      p.box(cx, cy, cw, ch, { r: 12, fill: 'ochre', fa: 0.25, w: 2, reveal: R(t, 0.5, 0.65) });
      p.text(L('Our channel’s\nsubscription', '우리 채널\n구독'), cx + cw / 2, cy + 34, { align: 'center', size: 21, weight: 700, lh: 24, reveal: R(t, 0.55, 0.68) });
      const picked = [true, true, true, false];
      mods.forEach(([, name], i) => {
        const [lx, ly] = N ? [cx + 24 + (i % 2) * 150, cy + 96 + Math.floor(i / 2) * 32] : [cx + 22, cy + 110 + i * 38];
        const r = R(t, 0.65 + i * 0.06, 0.78 + i * 0.06);
        K.checkbox(p, lx, ly - 14, 18, picked[i], { reveal: r });
        p.text(name, lx + 28, ly, { size: p.fit(name, N ? 116 : cw - 60, 17, 12), reveal: r, col: picked[i] ? 'ink' : 'soft' });
      });
      if (N) p.arrow([[200, 450], [200, 468]], { reveal: R(t, 0.45, 0.55) });
      else p.arrow([[540, 190], [574, 190]], { reveal: R(t, 0.45, 0.55) });
    },
  },

  'p03-results': {
    size: [800, 330],
    narrow: [400, 600],
    draw(p, e) {
      const { t, L } = e;
      const N = e.narrow;
      const rows = [
        [L('Paid conversion', '유료 전환율'), 1.31, '+31%', 'green'],
        [L('Sub revenue, top-20% streamers', '상위 20% 스트리머 구독 매출'), 1.27, '+27%', 'ochre'],
        [L('Subscriber retention', '구독 유지율'), 1.15, '+15%', 'blue'],
      ];
      const x0 = N ? 20 : 280, unit = N ? 230 : 200;
      rows.forEach(([label, v, txt, col], i) => {
        const y = N ? 40 + i * 104 : 50 + i * 88;
        const r = R(t, 0.05 + i * 0.12, 0.45 + i * 0.12);
        p.text(label, N ? x0 : x0 - 16, N ? y : y + 30, { size: p.fit(label, N ? 360 : 250, 19, 13), align: N ? 'left' : 'right', reveal: r });
        const by = N ? y + 12 : y + 8;
        p.box(x0, by, unit * r, 18, { fill: 'soft', fa: 0.35, over: 1.5 });
        p.box(x0, by + 24, unit * v * r, 20, { fill: col, fa: 0.5, over: 1.5 });
        p.text(txt, x0 + unit * v + 12, by + 41, { size: 22, weight: 700, reveal: r > 0.95 ? 1 : 0 });
      });
      p.text(L('grey = before', '회색 = 이전'), N ? 20 : 280, N ? 352 : 318, { size: 17, col: 'soft', reveal: R(t, 0.5, 0.6) });
      const [cx, cy, rr] = N ? [200, 456, 58] : [712, 140, 64];
      const a0 = -Math.PI / 2, a1 = a0 + Math.PI * 2 * 0.52 * R(t, 0.5, 0.8);
      if (a1 > a0 + 0.05) p.poly(wedge(cx, cy, rr - 2, a0, a1), { fill: 'red', fa: 0.4, hatch: { gap: 5, a: 0.3 }, stroke: false });
      p.circle(cx, cy, rr, { reveal: R(t, 0.45, 0.6) });
      p.text('50%+', cx, cy + 9, { align: 'center', size: 28, weight: 700, reveal: R(t, 0.75, 0.85) });
      p.text(L('of new subscribers chose\na customised product', '신규 구독자가 고른\n맞춤형 상품'), N ? cx + 0 : cx, cy + rr + 30, { align: 'center', size: 17, lh: 20, reveal: R(t, 0.8, 0.9) });
    },
  },
};
