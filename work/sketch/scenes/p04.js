// P-04 Discovery and hashtags.
import { R } from '../pencil.js';
import * as K from '../kit.js';

// One broadcast tile in a home feed: thumbnail with a streamer and a viewer count.
function tile(p, x, y, w, h, o) {
  p.box(x, y, w, h, { r: 4, fill: o.col, fa: 0.35, reveal: o.reveal, w: 1.2 });
  K.person(p, x + w * 0.3, y + h - 3, h * 0.66, { col: o.shirt ?? 'paper', face: false, reveal: o.reveal, w: 1.1 });
  if (o.crown) p.poly([[x + w * 0.35 - 7, y + 10], [x + w * 0.35 - 8, y + 2], [x + w * 0.35 - 3, y + 6], [x + w * 0.35, y], [x + w * 0.35 + 3, y + 6], [x + w * 0.35 + 8, y + 2], [x + w * 0.35 + 7, y + 10]], { fill: 'ochre', fa: 0.7, w: 1, reveal: o.reveal });
  if (o.n) p.text(o.n, x + w - 5, y + h - 6, { align: 'right', size: o.size ?? 13, weight: 700, reveal: o.reveal });
}

function feed(p, ph, tiles, r, big) {
  const cols = 2, gap = 6;
  const tw = (ph.w - gap * 3) / cols, th = tw * 0.62;
  let y = ph.y + 30;
  let i = 0;
  if (big) {
    tile(p, ph.x + gap, y, ph.w - gap * 2, th * 1.5, { ...tiles[0], reveal: K.S(r, 7, 0), size: 15 });
    y += th * 1.5 + gap; i = 1;
  }
  for (; i < tiles.length; i++) {
    const j = big ? i - 1 : i;
    const x = ph.x + gap + (j % cols) * (tw + gap);
    const yy = y + Math.floor(j / cols) * (th + gap);
    if (yy + th > ph.y + ph.h - 4) break;
    tile(p, x, yy, tw, th, { ...tiles[i], reveal: K.S(r, tiles.length, i) });
  }
}

export default {
  'p04-hero': {
    size: [800, 440],
    narrow: [400, 400],
    draw(p, e) {
      const { t, L } = e;
      const N = e.narrow;
      const A = N ? [24, 30, 160, 300] : [120, 26, 190, 350];
      const B = N ? [216, 30, 160, 300] : [490, 26, 190, 350];
      const pa = K.phone(p, ...A, { reveal: R(t, 0, 0.15) });
      const pb = K.phone(p, ...B, { reveal: R(t, 0.05, 0.2) });
      p.text(L('Home', '홈'), pa.x + 10, pa.y + 20, { size: 16, weight: 700, reveal: R(t, 0.1, 0.2) });
      p.text(L('Home', '홈'), pb.x + 10, pb.y + 20, { size: 16, weight: 700, reveal: R(t, 0.15, 0.25) });
      const top = [
        { col: 'red', shirt: 'red', crown: true, n: '12,480' },
        { col: 'red', shirt: 'red', n: '9,730' }, { col: 'red', shirt: 'red', n: '8,105' },
        { col: 'red', shirt: 'red', n: '7,920' }, { col: 'red', shirt: 'red', n: '6,440' },
        { col: 'red', shirt: 'red', n: '5,870' }, { col: 'red', shirt: 'red', n: '5,210' },
      ];
      const mix = [
        { col: 'blue', shirt: 'blue', n: '42' }, { col: 'green', shirt: 'green', n: '1,250' },
        { col: 'ochre', shirt: 'ochre', n: '38' }, { col: 'red', shirt: 'red', n: '2,900' },
        { col: 'green', shirt: 'blue', n: '57' }, { col: 'blue', shirt: 'ochre', n: '16' },
        { col: 'ochre', shirt: 'green', n: '310' }, { col: 'red', shirt: 'blue', n: '24' },
      ];
      feed(p, pa, top, R(t, 0.15, 0.55), true);
      feed(p, pb, mix, R(t, 0.45, 0.85), false);
      const ly = N ? 370 : 412;
      p.text(L('before: the already-popular', '이전: 이미 인기 있는 방송'), A[0] + A[2] / 2, ly, { align: 'center', size: p.fit(L('before: the already-popular', '이전: 이미 인기 있는 방송'), N ? 176 : 280, 20, 13), reveal: R(t, 0.4, 0.5) });
      p.text(L('after: matched to each viewer', '이후: 시청자마다 맞춘 방송'), B[0] + B[2] / 2, ly, { align: 'center', size: p.fit(L('after: matched to each viewer', '이후: 시청자마다 맞춘 방송'), N ? 176 : 280, 20, 13), col: 'green', weight: 700, reveal: R(t, 0.8, 0.9) });
      if (!N) p.arrow([[340, 200], [470, 200]], { bend: -0.12, reveal: R(t, 0.4, 0.5) });
    },
  },

  'p04-loop': {
    size: [800, 400],
    narrow: [400, 600],
    draw(p, e) {
      const { t, L } = e;
      const N = e.narrow;
      const [cx, cy, rr] = N ? [200, 200, 118] : [290, 200, 140];
      const nodes = [
        [-Math.PI / 2, L('exposure', '노출')],
        [Math.PI / 6, L('viewers', '시청자')],
        [(5 * Math.PI) / 6, L('ranking', '순위')],
      ];
      nodes.forEach(([a], i) => {
        const a0 = a + 0.36, a1 = nodes[(i + 1) % 3][0] - 0.36 + (i === 2 ? Math.PI * 2 : 0);
        const pts = [];
        for (let k = 0; k <= 20; k++) { const q = a0 + ((a1 - a0) * k) / 20; pts.push([cx + Math.cos(q) * rr, cy + Math.sin(q) * rr]); }
        p.arrow(pts, { w: 1.8, reveal: R(t, 0.2 + i * 0.12, 0.35 + i * 0.12) });
      });
      nodes.forEach(([a, label], i) => {
        const x = cx + Math.cos(a) * rr, y = cy + Math.sin(a) * rr;
        const r = R(t, 0.05 + i * 0.1, 0.25 + i * 0.1);
        p.circle(x, y, 34, { fill: ['ochre', 'blue', 'red'][i], fa: 0.35, reveal: r });
        p.text(label, x, y + 1, { align: 'center', vcenter: true, size: p.fit(label, 62, 18, 13), weight: 700, reveal: r });
      });
      // The top channel in the middle of the loop.
      K.person(p, cx, cy + 40, 70, { col: 'red', hair: true, mood: 'happy', reveal: R(t, 0.1, 0.3) });
      p.poly([[cx - 12, cy - 40], [cx - 14, cy - 54], [cx - 5, cy - 46], [cx, cy - 58], [cx + 5, cy - 46], [cx + 14, cy - 54], [cx + 12, cy - 40]], { fill: 'ochre', fa: 0.6, reveal: R(t, 0.3, 0.4) });
      // Mid-tier streamers, outside the loop.
      const [gx, gy] = N ? [60, 520] : [560, 250];
      p.line(N ? [[20, 400], [380, 400]] : [[500, 60], [500, 360]], { dash: [8, 7], w: 1.3, col: 'soft', reveal: R(t, 0.55, 0.65) });
      K.crowd(p, gx, gy, 5, N ? 46 : 50, { cols: ['blue', 'green', 'ochre'], gap: N ? 70 : 48, seed: 3, reveal: R(t, 0.6, 0.85) });
      p.text(L('mid-tier: most streamers', '미드티어: 대부분의 스트리머'), N ? 200 : 656, N ? 440 : 170, { align: 'center', size: N ? 19 : 20, weight: 700, reveal: R(t, 0.7, 0.8) });
      p.text(L('rarely shown', '거의 노출되지 않음'), N ? 200 : 656, N ? 466 : 196, { align: 'center', size: 18, col: 'red', reveal: R(t, 0.78, 0.9) });
    },
  },

  'p04-pipeline': {
    size: [800, 400],
    narrow: [400, 760],
    draw(p, e) {
      const { t, L } = e;
      const N = e.narrow;
      const sig = [L('watch history', '시청 이력'), L('search & intent', '검색·의도'), L('tags', '태그')];
      const pools = [L('similar viewers', '비슷한 시청자'), L('same tags', '같은 태그'), L('rising', '성장 중')];
      const sp = N ? [[70, 60], [200, 60], [330, 60]] : [[90, 90], [90, 200], [90, 310]];
      sp.forEach(([x, y], i) => {
        const r = R(t, 0.02 + i * 0.06, 0.2 + i * 0.06);
        if (i === 0) K.clock(p, x, y, 24, { reveal: r });
        if (i === 1) K.magnifier(p, x - 6, y - 6, 18, { reveal: r });
        if (i === 2) K.tag(p, x - 30, y - 16, 60, 32, { text: '#', col: 'green', reveal: r });
        p.text(sig[i], x, y + (N ? 50 : 48), { align: 'center', size: N ? 16 : 18, reveal: r });
      });
      p.text(L('signals', '시그널'), N ? 200 : 90, N ? 18 : 40, { align: 'center', size: 20, weight: 700, col: 'red', reveal: R(t, 0.1, 0.2) });
      // Candidate pools.
      const pp = N ? [[70, 290], [200, 290], [330, 290]] : [[380, 90], [380, 200], [380, 310]];
      p.text(L('candidate pools', '후보 풀'), N ? 200 : 380, N ? 222 : 40, { align: 'center', size: 20, weight: 700, col: 'red', reveal: R(t, 0.3, 0.4) });
      pp.forEach(([x, y], i) => {
        const r = R(t, 0.3 + i * 0.06, 0.48 + i * 0.06);
        const w = N ? 100 : 130, h = N ? 56 : 60;
        p.poly([[x - w / 2, y - h / 2], [x + w / 2, y - h / 2], [x + w / 2 - 10, y + h / 2], [x - w / 2 + 10, y + h / 2]], { fill: 'paper', fa: 0.8, reveal: r });
        const cols = ['blue', 'green', 'ochre', 'red', 'blue', 'green'];
        for (let d = 0; d < 6; d++) p.dot(x - w / 2 + 18 + (d % 3) * ((w - 36) / 2), y - 8 + Math.floor(d / 3) * 16, 5, { col: cols[(d + i) % 6], a: 0.8, reveal: K.S(r, 6, d) });
        p.text(pools[i], x, y + h / 2 + 22, { align: 'center', size: N ? 15 : 17, reveal: r });
      });
      if (!N) {
        sp.forEach(([x, y], i) => p.arrow([[x + 70, y], [300, pp[i][1]]], { reveal: R(t, 0.22 + i * 0.05, 0.34 + i * 0.05) }));
        pp.forEach(([x, y], i) => p.arrow([[x + 76, y], [560, 200 + (i - 1) * 30]], { bend: (i - 1) * 0.1, reveal: R(t, 0.5 + i * 0.05, 0.62 + i * 0.05) }));
      } else {
        p.arrow([[200, 140], [200, 196]], { reveal: R(t, 0.22, 0.32) });
        p.arrow([[200, 360], [200, 412]], { reveal: R(t, 0.5, 0.6) });
      }
      // Ranked list.
      const [rx, ry, rw, rh] = N ? [60, 450, 280, 290] : [580, 50, 200, 320];
      p.text(L('ranking', '랭킹'), rx + rw / 2, ry - 12, { align: 'center', size: 20, weight: 700, col: 'red', reveal: R(t, 0.6, 0.7) });
      p.box(rx, ry, rw, rh, { r: 10, fill: 'paper', fa: 0.9, reveal: R(t, 0.6, 0.72) });
      const shirts = ['blue', 'green', 'ochre', 'red', 'blue'];
      for (let i = 0; i < 5; i++) {
        const y = ry + 20 + i * ((rh - 30) / 5);
        const r = R(t, 0.66 + i * 0.05, 0.78 + i * 0.05);
        p.text(String(i + 1), rx + 20, y + 26, { size: 20, weight: 700, reveal: r });
        K.person(p, rx + 60, y + 44, 40, { col: shirts[i], face: false, reveal: r });
        p.line([[rx + 90, y + 18], [rx + rw - 20, y + 18]], { w: 1, a: 0.5, pass: 1, reveal: r });
        p.line([[rx + 90, y + 32], [rx + rw - 50, y + 32]], { w: 1, a: 0.4, pass: 1, reveal: r });
        if (i === 1) p.ring(rx + rw / 2 + 10, y + 24, rw / 2 - 2, 26, { col: 'red', reveal: R(t, 0.9, 1) });
      }
      p.text(L('a mid-tier match', '미드티어 추천'), N ? rx + rw - 10 : rx + rw - 6, N ? ry + rh + 30 : ry + rh + 26, { align: 'right', size: 18, col: 'red', reveal: R(t, 0.9, 1) });
    },
  },

  'p04-tags': {
    size: [800, 360],
    narrow: [400, 600],
    draw(p, e) {
      const { t, L } = e;
      const N = e.narrow;
      const vars = ['#롤', '#LoL', '#리그오브레전드', '#lol', '#리그 오브 레전드', '#League'];
      const pos = N
        ? [[30, 40], [220, 30], [60, 100], [250, 96], [40, 160], [220, 160]]
        : [[40, 50], [230, 40], [70, 130], [260, 128], [40, 214], [220, 220]];
      vars.forEach((v, i) => {
        const w = Math.max(76, p.tw(v, 18) + 40);
        K.tag(p, pos[i][0], pos[i][1], w, 36, { text: v, col: ['blue', 'green', 'ochre', 'red', 'soft', 'blue'][i], fa: 0.25, size: 18, reveal: R(t, 0.03 + i * 0.05, 0.2 + i * 0.05) });
      });
      p.text(L('the same topic, six spellings', '같은 주제, 여섯 가지 표기'), N ? 200 : 200, N ? 234 : 300, { align: 'center', size: 19, col: 'soft', reveal: R(t, 0.3, 0.4) });
      // Everything funnels into one tag with an ID.
      const [tx, ty] = N ? [70, 330] : [500, 110];
      if (N) p.arrow([[200, 250], [200, 318]], { w: 2, reveal: R(t, 0.4, 0.5) });
      else p.arrow([[390, 150], [490, 140]], { w: 2, reveal: R(t, 0.4, 0.5) });
      K.tag(p, tx, ty, 260, 54, { text: '#리그오브레전드', col: 'green', fa: 0.45, size: 22, weight: 700, reveal: R(t, 0.5, 0.65) });
      p.box(tx + 190, ty - 22, 76, 30, { r: 6, fill: 'ochre', fa: 0.5, reveal: R(t, 0.6, 0.7) });
      p.text(L('tag ID', '태그 ID'), tx + 228, ty - 7, { align: 'center', vcenter: true, size: 16, weight: 700, reveal: R(t, 0.62, 0.72) });
      // Auto-suggest while typing.
      const [ix, iy] = N ? [70, 430] : [500, 210];
      p.box(ix, iy, 260, 38, { r: 6, fill: 'paper', fa: 0.9, reveal: R(t, 0.7, 0.8) });
      p.text('리그|', ix + 12, iy + 26, { size: 19, reveal: R(t, 0.72, 0.82) });
      p.box(ix, iy + 42, 260, 40, { r: 6, fill: 'blue', fa: 0.2, reveal: R(t, 0.78, 0.9) });
      p.text('#리그오브레전드', ix + 12, iy + 69, { size: 18, reveal: R(t, 0.8, 0.9) });
      p.text(L('suggested', '추천'), ix + 248, iy + 69, { align: 'right', size: 15, col: 'soft', reveal: R(t, 0.8, 0.9) });
      p.text(L('auto-suggest steers to the existing tag', '입력하면 기존 태그를 추천'), ix + 130, iy + 116, { align: 'center', size: p.fit(L('auto-suggest steers to the existing tag', '입력하면 기존 태그를 추천'), 290, 18, 13), col: 'soft', reveal: R(t, 0.85, 0.95) });
    },
  },

  'p04-viewers': {
    size: [800, 400],
    narrow: [400, 640],
    draw(p, e) {
      const { t, L } = e;
      const N = e.narrow;
      const groups = N ? [[20, 20, 10], [20, 290, 40]] : [[40, 30, 10], [420, 30, 40]];
      groups.forEach(([x, y, n], g) => {
        const r = R(t, 0.05 + g * 0.35, 0.4 + g * 0.35);
        const scr = K.monitor(p, x + (N ? 110 : 90), y, 140, 84, { reveal: r, stand: false });
        K.person(p, scr.x + scr.w / 2, scr.y + scr.h, 50, { col: 'green', face: false, reveal: r });
        p.box(scr.x + 4, scr.y + 4, 36, 16, { r: 3, fill: 'red', fa: 0.6, stroke: false, reveal: r });
        p.text('LIVE', scr.x + 22, scr.y + 12, { align: 'center', vcenter: true, size: 11, weight: 700, reveal: r });
        const per = 10, gap = N ? 34 : 33;
        for (let i = 0; i < n; i++) {
          const cx = x + 16 + (i % per) * gap, by = y + 136 + Math.floor(i / per) * 36;
          K.person(p, cx, by, 28, { col: ['blue', 'ochre', 'green', 'red'][i % 4], face: false, fa: 0.3, reveal: K.S(r, n, i) });
        }
        const label = g ? L('after: 40', '이후: 40명') : L('before: 10', '이전: 10명');
        p.text(label, x + 16 + 4.5 * gap, y + 136 + Math.ceil(n / per) * 36 + 22, { align: 'center', size: 22, weight: 700, col: g ? 'green' : 'ink', reveal: R(t, 0.3 + g * 0.35, 0.4 + g * 0.35) });
      });
      p.text(L('average concurrent viewers, 1,000+ mid-tier streamers', '미드티어 스트리머 1,000명 이상의 평균 동시 시청자'), N ? 200 : 400, N ? 616 : 386, { align: 'center', size: p.fit(L('average concurrent viewers, 1,000+ mid-tier streamers', '미드티어 스트리머 1,000명 이상의 평균 동시 시청자'), N ? 380 : 700, 19, 13), col: 'soft', reveal: R(t, 0.85, 0.95) });
    },
  },
};
