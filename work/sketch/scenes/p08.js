// P-08 Sidekick.
import { R, arcPts } from '../pencil.js';
import * as K from '../kit.js';

// An AI employee: a person with a small spark by the head.
function ai(p, cx, by, s, col, r, mood = 'happy') {
  K.person(p, cx, by, s, { col, mood, reveal: r });
  K.star(p, cx + s * 0.3, by - s * 0.98, s * 0.12, { fill: 'ochre', fa: 0.8, w: 1, reveal: r });
}

// Git helpers: a lane, commits on it.
function lane(p, pts, o) { p.line(pts, { w: 2, ...o }); }

export default {
  'p08-hero': {
    size: [800, 440],
    narrow: [400, 640],
    draw(p, e) {
      const { t, L } = e;
      const N = e.narrow;
      const [px, py, pw, ph] = N ? [90, 20, 220, 410] : [290, 20, 220, 410];
      const s = K.phone(p, px, py, pw, ph, { reveal: R(t, 0, 0.15) });
      p.text(L('My team', '나의 팀'), s.x + 12, s.y + 26, { size: 20, weight: 700, reveal: R(t, 0.1, 0.2) });
      const staff = [
        [L('Blog writer', '블로그 담당'), L('working…', '작업 중…'), 'blue', 'soft'],
        [L('Shop helper', '쇼핑몰 담당'), L('done', '완료'), 'green', 'green'],
        [L('Researcher', '리서치 담당'), L('needs your OK', '승인 대기'), 'ochre', 'red'],
      ];
      staff.forEach(([name, status, col, sc], i) => {
        const y = s.y + 50 + i * 106;
        const r = R(t, 0.15 + i * 0.1, 0.35 + i * 0.1);
        p.box(s.x + 6, y, s.w - 12, 94, { r: 10, fill: col, fa: 0.2, reveal: r });
        ai(p, s.x + 42, y + 76, 56, col, r);
        p.text(name, s.x + 80, y + 36, { size: p.fit(name, s.w - 92, 18, 13), weight: 700, reveal: r });
        p.text(status, s.x + 80, y + 64, { size: 16, col: sc, reveal: r });
      });
      // Work coming back out of the phone.
      const out = N ? [[20, 470], [230, 470]] : [[40, 120], [590, 150]];
      K.doc(p, out[0][0], out[0][1], N ? 140 : 180, N ? 130 : 190, { title: L('blog draft', '블로그 초안'), lines: N ? 5 : 9, size: 16, reveal: R(t, 0.5, 0.7) });
      K.card(p, out[1][0], out[1][1], N ? 150 : 180, N ? 130 : 150, { title: L('Result', '결과 카드'), lines: 2, fill: 'paper', fa: 0.9, reveal: R(t, 0.6, 0.8) });
      const bx = out[1][0] + 14, byy = out[1][1] + (N ? 80 : 94);
      p.box(bx, byy, N ? 74 : 86, 32, { r: 7, fill: 'green', fa: 0.5, reveal: R(t, 0.72, 0.85) });
      p.text(L('Approve', '승인'), bx + (N ? 37 : 43), byy + 17, { align: 'center', vcenter: true, size: 16, weight: 700, reveal: R(t, 0.75, 0.88) });
      if (N) {
        p.arrow([[150, 436], [100, 466]], { reveal: R(t, 0.5, 0.6) });
        p.arrow([[250, 436], [290, 466]], { reveal: R(t, 0.6, 0.7) });
      } else {
        p.arrow([[284, 180], [228, 200]], { reveal: R(t, 0.5, 0.6) });
        p.arrow([[516, 220], [582, 214]], { reveal: R(t, 0.6, 0.7) });
      }
    },
  },

  'p08-flow': {
    size: [800, 330],
    narrow: [400, 800],
    draw(p, e) {
      const { t, L } = e;
      const N = e.narrow;
      const heads = [L('1. delegate', '1. 맡기기'), L('2. work', '2. 일하기'), L('3. approve', '3. 승인하기')];
      const C = N ? [[200, 40], [200, 300], [200, 530]] : [[130, 40], [400, 40], [670, 40]];
      heads.forEach((h, i) => p.text(h, C[i][0], C[i][1], { align: 'center', size: 22, weight: 700, col: 'red', reveal: R(t, i * 0.25, 0.12 + i * 0.25) }));
      // 1. A request typed on the phone.
      const r1 = R(t, 0.02, 0.3);
      const ph = K.phone(p, C[0][0] - 70, C[0][1] + 20, 140, 220, { reveal: r1 });
      K.bubble(p, ph.x + 8, ph.y + 30, ph.w - 16, 72, { text: L("Write this week's blog post", '이번 주 블로그 글 써 줘'), tail: 'br', size: 16, fill: 'blue', reveal: r1 });
      // 2. The AI employee working.
      const r2 = R(t, 0.3, 0.6);
      const w0 = C[1][1] + 20;
      ai(p, C[1][0] - 20, w0 + 170, 110, 'blue', r2);
      K.gear(p, C[1][0] + 60, w0 + 60, 24, { col: 'ochre', reveal: r2 });
      K.doc(p, C[1][0] + 44, w0 + 100, 56, 72, { lines: 4, reveal: r2 });
      p.text(L('memory, tools, skills', '메모리·도구·스킬'), C[1][0], w0 + 204, { align: 'center', size: 17, col: 'soft', reveal: r2 });
      // 3. The result card waiting for approval.
      const r3 = R(t, 0.6, 0.9);
      const [cx, cy] = [C[2][0] - 110, C[2][1] + 24];
      p.box(cx, cy, 220, 190, { r: 12, fill: 'paper', fa: 0.92, w: 1.8, reveal: r3 });
      p.text(L('Blog draft ready', '블로그 초안 완료'), cx + 16, cy + 32, { size: 19, weight: 700, reveal: r3 });
      [0, 1, 2].forEach((j) => p.line([[cx + 16, cy + 56 + j * 14], [cx + 190 - j * 40, cy + 56 + j * 14]], { w: 1, a: 0.45, pass: 1, reveal: r3 }));
      p.box(cx + 16, cy + 120, 90, 38, { r: 8, fill: 'green', fa: 0.5, reveal: r3 });
      p.text(L('Approve', '승인'), cx + 61, cy + 140, { align: 'center', vcenter: true, size: 17, weight: 700, reveal: r3 });
      p.box(cx + 116, cy + 120, 88, 38, { r: 8, reveal: r3 });
      p.text(L('Edit', '수정'), cx + 160, cy + 140, { align: 'center', vcenter: true, size: 17, reveal: r3 });
      K.lock(p, cx + 196, cy - 6, 34, { reveal: R(t, 0.8, 0.95) });
      p.text(L('nothing goes out without you', '승인 없이는 아무것도 나가지 않음'), C[2][0], cy + 222, { align: 'center', size: p.fit(L('nothing goes out without you', '승인 없이는 아무것도 나가지 않음'), 260, 18, 13), col: 'red', reveal: R(t, 0.85, 0.98) });
      if (N) {
        p.arrow([[200, 270], [200, 294]], { reveal: R(t, 0.28, 0.35) });
        p.arrow([[200, 500], [200, 524]], { reveal: R(t, 0.58, 0.65) });
      } else {
        p.arrow([[210, 150], [300, 150]], { reveal: R(t, 0.28, 0.35) });
        p.arrow([[480, 150], [548, 150]], { reveal: R(t, 0.58, 0.65) });
      }
    },
  },

  'p08-arch': {
    size: [800, 420],
    narrow: [400, 780],
    draw(p, e) {
      const { t, L } = e;
      const N = e.narrow;
      const phone = N ? [145, 20, 110, 170] : [30, 110, 110, 200];
      const s = K.phone(p, ...phone, { reveal: R(t, 0, 0.15) });
      p.text(L('app', '앱'), phone[0] + phone[2] / 2, phone[1] + phone[3] + 26, { align: 'center', size: 19, weight: 700, reveal: R(t, 0.1, 0.2) });
      p.box(s.x + 6, s.y + 20, s.w - 12, 30, { r: 6, fill: 'green', fa: 0.3, reveal: R(t, 0.1, 0.2) });
      p.box(s.x + 6, s.y + 58, s.w - 12, 30, { r: 6, fill: 'blue', fa: 0.3, reveal: R(t, 0.12, 0.22) });
      const cp = N ? [90, 250, 220, 110] : [200, 140, 170, 140];
      p.box(...cp, { r: 12, fill: 'soft', fa: 0.25, w: 1.8, reveal: R(t, 0.2, 0.35) });
      p.text(L('control plane', '컨트롤 플레인'), cp[0] + cp[2] / 2, cp[1] + 34, { align: 'center', size: 19, weight: 700, reveal: R(t, 0.25, 0.38) });
      p.text(L('sign-in, billing,\nprovisioning', '인증·결제·\n프로비저닝'), cp[0] + cp[2] / 2, cp[1] + 66, { align: 'center', size: 16, lh: 20, col: 'soft', reveal: R(t, 0.3, 0.4) });
      if (N) { p.arrow([[200, 216], [200, 244]], { reveal: R(t, 0.2, 0.3) }); p.arrow([[200, 366], [200, 410]], { reveal: R(t, 0.38, 0.48) }); }
      else { p.arrow([[146, 210], [194, 210]], { reveal: R(t, 0.2, 0.3) }); p.arrow([[376, 210], [430, 210]], { reveal: R(t, 0.38, 0.48) }); }
      // Per-user runtimes, one behind another.
      const rt = N ? [30, 440, 330, 300] : [450, 60, 320, 300];
      [2, 1].forEach((k) => p.box(rt[0] + k * 10, rt[1] - k * 10, rt[2], rt[3], { r: 14, dash: [6, 6], w: 1.2, a: 0.5, reveal: R(t, 0.4, 0.5) }));
      p.box(...rt, { r: 14, dash: [8, 6], w: 2, fill: 'paper', fa: 0.92, reveal: R(t, 0.42, 0.55) });
      K.lock(p, rt[0] + rt[2] - 26, rt[1] + 30, 30, { reveal: R(t, 0.5, 0.6) });
      p.text(L('your own isolated runtime', '나만의 격리된 런타임'), rt[0] + 18, rt[1] + 34, { size: p.fit(L('your own isolated runtime', '나만의 격리된 런타임'), rt[2] - 70, 19, 13), weight: 700, reveal: R(t, 0.48, 0.58) });
      const parts = [L('profile', '프로필'), L('memory', '메모리'), L('tools', '도구')];
      [0, 1].forEach((j) => {
        const y = rt[1] + 70 + j * 112;
        const r = R(t, 0.55 + j * 0.15, 0.75 + j * 0.15);
        ai(p, rt[0] + 50, y + 84, 70, j ? 'green' : 'blue', r);
        const ix = rt[0] + 108;
        K.badge(p, ix + 20, y + 30, 14, { reveal: r });
        K.db(p, ix + 92, y + 30, 32, 30, { col: 'blue', reveal: r });
        K.gear(p, ix + 164, y + 30, 16, { col: 'ochre', reveal: r });
        parts.forEach((pt, q) => p.text(pt, ix + 20 + q * 72, y + 74, { align: 'center', size: 15, reveal: r }));
      });
      p.text(L('one per user', '사용자마다 하나'), rt[0] + rt[2] - 10, rt[1] + rt[3] + 30, { align: 'right', size: 18, col: 'red', reveal: R(t, 0.85, 0.95) });
    },
  },

  'p08-parallel': {
    size: [800, 370],
    narrow: [400, 520],
    draw(p, e) {
      const { t, L } = e;
      const N = e.narrow;
      const X = (f) => (N ? 24 + f * 350 : 40 + f * 720);
      const my = N ? 70 : 70;
      lane(p, [[X(0), my], [X(1), my]], { reveal: R(t, 0, 0.2) });
      p.text('main', X(0), my - 18, { size: 17, col: 'soft', reveal: R(t, 0, 0.1) });
      [0.08, 0.18, 0.3, 0.64, 0.74, 0.84].forEach((f, i) => K.commit(p, X(f), my, { reveal: R(t, 0.05 + i * 0.03, 0.12 + i * 0.03) }));
      // The removal.
      K.commit(p, X(0.3), my, { col: 'red' });
      p.text(L('old button removed', '옛 버튼 삭제'), X(0.3), my - 20, { align: 'center', size: 17, col: 'red', reveal: R(t, 0.15, 0.25) });
      // Agents branch from older commits and merge back.
      const lanes = N ? [150, 210, 270] : [160, 230, 300];
      const from = [0.08, 0.18, 0.08], to = [0.64, 0.74, 0.84];
      lanes.forEach((y, i) => {
        const r = R(t, 0.25 + i * 0.1, 0.55 + i * 0.1);
        lane(p, [[X(from[i]), my], [X(from[i]) + 24, y], [X(to[i]) - 30, y], [X(to[i]), my]], { col: ['blue', 'green', 'ochre'][i], w: 1.6, reveal: r });
        ai(p, X(0.42), y + 16, N ? 34 : 40, ['blue', 'green', 'ochre'][i], r, 'neutral');
      });
      p.text(L('parallel agents, older bases', '병렬 에이전트, 서로 다른 옛 기준'), N ? 200 : X(0.42) + 40, N ? 322 : 250, { align: N ? 'center' : 'left', size: 17, col: 'soft', reveal: R(t, 0.5, 0.6) });
      // The ghost of the removed button, back on main.
      const gx = N ? 280 : X(0.9), gy = N ? 380 : 150;
      p.box(gx - 50, gy - 20, 100, 38, { r: 8, dash: [4, 4], fill: 'red', fa: 0.2, reveal: R(t, 0.78, 0.9) });
      p.text(L('old button', '옛 버튼'), gx, gy, { align: 'center', vcenter: true, size: 16, reveal: R(t, 0.8, 0.9) });
      p.text(L("it's back", '다시 나타남'), gx, gy + 44, { align: 'center', size: 19, weight: 700, col: 'red', reveal: R(t, 0.85, 0.95) });
      p.arrow(N ? [[X(0.84), my + 12], [gx, gy - 24]] : [[X(0.84) + 8, my + 10], [gx - 20, gy - 24]], { bend: -0.2, col: 'red', reveal: R(t, 0.75, 0.85) });
      // Tests still pass.
      const tx = N ? 90 : X(0.9), ty = N ? 400 : 290;
      p.check(tx - 30, ty - 8, 26, { col: 'green', reveal: R(t, 0.88, 0.98) });
      p.text(L('tests pass', '테스트 통과'), tx - 10, ty, { size: 19, col: 'green', weight: 700, reveal: R(t, 0.88, 0.98) });
      if (N) p.text(L('green tests, stale product', '테스트는 통과, 제품은 옛 버전'), 200, 480, { align: 'center', size: 18, col: 'soft', reveal: R(t, 0.9, 1) });
      else p.text(L('green tests, stale product', '테스트는 통과, 제품은 옛 버전'), X(0.9), ty + 30, { align: 'center', size: 16, col: 'soft', reveal: R(t, 0.9, 1) });
    },
  },

  'p08-release': {
    size: [800, 440],
    narrow: [400, 660],
    draw(p, e) {
      const { t, L } = e;
      const N = e.narrow;
      const X = (f) => (N ? 24 + f * 350 : 40 + f * 720);
      const my = 70;
      lane(p, [[X(0), my], [X(0.72), my]], { reveal: R(t, 0, 0.2) });
      p.text('main', X(0), my - 18, { size: 17, col: 'soft', reveal: R(t, 0, 0.1) });
      // 1. Pinned base.
      const pb = X(0.12);
      K.commit(p, pb, my, { col: 'ochre', r: 8 });
      p.line([[pb, my - 10], [pb, my - 30]], { w: 1.6, reveal: R(t, 0.05, 0.15) });
      p.circle(pb, my - 36, 7, { fill: 'red', fa: 0.6, reveal: R(t, 0.05, 0.15) });
      K.num(p, pb + 28, my - 34, 1, { r: 11, size: 15, reveal: R(t, 0.1, 0.2) });
      // Worktrees from the same commit.
      const lanes = N ? [150, 210, 270] : [150, 215, 280];
      const mx = X(0.6);
      lanes.forEach((y, i) => {
        const r = R(t, 0.15 + i * 0.08, 0.45 + i * 0.08);
        lane(p, [[pb, my], [pb + 24, y], [mx - 30, y], [mx, my]], { col: ['blue', 'green', 'ochre'][i], w: 1.6, reveal: r });
        p.box(pb + 40, y - 24, (mx - pb) - 100, 48, { r: 10, dash: [5, 5], w: 1, a: 0.6, reveal: r });
        ai(p, pb + 70, y + 14, N ? 32 : 36, ['blue', 'green', 'ochre'][i], r, 'neutral');
        // 2. A test that the removed thing stays removed.
        const tx = N ? pb + 150 : pb + 250;
        p.box(tx - 14, y - 12, 28, 24, { r: 4, reveal: r });
        p.cross(tx, y, 10, { col: 'red', reveal: r });
        p.check(tx + 30, y, 16, { col: 'green', reveal: r });
      });
      K.num(p, N ? pb + 150 : pb + 250, lanes[2] + 40, 2, { r: 11, size: 15, reveal: R(t, 0.5, 0.6) });
      // 3. An old branch, read but not built on.
      const oy = N ? 330 : 350;
      p.line([[X(0.02), oy], [X(0.3), oy]], { dash: [4, 6], col: 'soft', reveal: R(t, 0.4, 0.5) });
      K.magnifier(p, X(0.34), oy - 4, 12, { reveal: R(t, 0.45, 0.55) });
      K.num(p, X(0.02) + 4, oy - 28, 3, { r: 11, size: 15, reveal: R(t, 0.45, 0.55) });
      // 4. One gate, one release at a time.
      const gx = X(0.74);
      lane(p, [[mx, my], [gx - 20, my]], { reveal: R(t, 0.55, 0.65) });
      p.box(gx - 20, my - 30, 46, 60, { r: 6, fill: 'ochre', fa: 0.3, reveal: R(t, 0.6, 0.7) });
      K.lock(p, gx + 3, my - 6, 30, { reveal: R(t, 0.62, 0.72) });
      p.arrow([[gx + 30, my], [X(0.9) - 4, my]], { reveal: R(t, 0.7, 0.8) });
      p.box(X(0.9), my - 22, N ? 50 : 70, 44, { r: 8, fill: 'green', fa: 0.45, reveal: R(t, 0.75, 0.85) });
      p.text(L('release', '배포'), X(0.9) + (N ? 25 : 35), my + 1, { align: 'center', vcenter: true, size: N ? 14 : 17, weight: 700, reveal: R(t, 0.78, 0.88) });
      K.num(p, gx + 3, my + 50, 4, { r: 11, size: 15, reveal: R(t, 0.7, 0.8) });
      // Legend.
      const legend = [
        L('one pinned base for every agent', '모든 에이전트가 같은 기준 커밋에서'),
        L('what was removed gets a test that it stays removed', '지운 것이 지워진 채로 있는지 테스트'),
        L('old branches are read, not built on', '옛 브랜치는 참고만, 기준으로 쓰지 않음'),
        L('workers never deploy; one release at a time', '작업 에이전트는 배포하지 않음, 배포는 한 번에 하나씩'),
      ];
      legend.forEach((txt, i) => {
        const [lx, ly] = N ? [30, 400 + i * 62] : [0, 180 + i * 62];
        const r = R(t, 0.8 + i * 0.04, 0.92 + i * 0.02);
        if (N) {
          K.num(p, lx + 10, ly, i + 1, { r: 11, size: 15, reveal: r });
          p.text(txt, lx + 32, ly + 6, { size: 17, max: 330, lh: 21, reveal: r });
        } else {
          K.num(p, X(0.64) + 10, ly, i + 1, { r: 11, size: 15, reveal: r });
          p.text(txt, X(0.64) + 32, ly + 6, { size: 17, max: 240, lh: 21, reveal: r });
        }
      });
    },
  },

  'p08-scale': {
    size: [800, 300],
    narrow: [400, 540],
    draw(p, e) {
      const { t, L } = e;
      const N = e.narrow;
      const tiles = [
        ['1,900+', L('commits in three months', '3개월간 커밋'), 'blue'],
        ['1,600+', L('merged pull requests', '머지된 PR'), 'green'],
        ['5,600+', L('backend tests', '백엔드 테스트'), 'ochre'],
        ['~50%', L('commits co-authored with Claude', 'Claude 공동 작성 커밋'), 'red'],
      ];
      tiles.forEach(([v, label, col], i) => {
        const [x, y, w, h] = N ? [20 + (i % 2) * 186, 20 + Math.floor(i / 2) * 256, 174, 236] : [20 + i * 192, 30, 176, 250];
        const r = R(t, 0.05 + i * 0.18, 0.35 + i * 0.18);
        p.box(x, y, w, h, { r: 12, fill: col, fa: 0.16, reveal: r });
        const cx = x + w / 2, iy = y + 70;
        if (i === 0) { p.line([[x + 20, iy], [x + w - 20, iy]], { w: 1.8, reveal: r }); for (let j = 0; j < 6; j++) K.commit(p, x + 28 + j * ((w - 56) / 5), iy, { r: 5, reveal: r }); }
        if (i === 1) { p.line([[cx - 40, iy + 20], [cx - 40, iy - 24]], { w: 1.8, reveal: r }); p.curve([[cx + 30, iy + 20], [cx + 30, iy], [cx - 40, iy - 18]], { w: 1.8, reveal: r }); K.commit(p, cx - 40, iy - 26, { r: 6, reveal: r }); K.commit(p, cx - 40, iy + 22, { r: 6, reveal: r }); K.commit(p, cx + 30, iy + 22, { r: 6, reveal: r }); }
        if (i === 2) for (let j = 0; j < 12; j++) p.check(x + 34 + (j % 6) * 22, iy - 14 + Math.floor(j / 6) * 26, 12, { col: 'green', reveal: K.S(r, 12, j) });
        if (i === 3) { p.circle(cx, iy, 28, { reveal: r }); p.poly([[cx, iy], ...arcPts(cx, iy, 26, -Math.PI / 2, Math.PI / 2, 16)], { fill: 'red', fa: 0.5, stroke: false, reveal: r }); }
        p.text(v, cx, y + 150, { align: 'center', size: 38, weight: 700, reveal: r });
        p.text(label, cx, y + 190, { align: 'center', size: 17, max: w - 20, lh: 21, reveal: r });
      });
    },
  },
};
