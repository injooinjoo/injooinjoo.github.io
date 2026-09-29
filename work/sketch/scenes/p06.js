// P-06 Streamer support funds.
import { R } from '../pencil.js';
import * as K from '../kit.js';

export default {
  'p06-hero': {
    size: [800, 380],
    narrow: [400, 660],
    draw(p, e) {
      const { t, L } = e;
      const N = e.narrow;
      const A = N ? [50, 50, 300, 220] : [50, 50, 300, 240];
      const B = N ? [50, 380, 300, 220] : [450, 50, 300, 240];
      const month = L('Support request', '지원 신청');
      K.calendar(p, ...A, { title: month, span: [2, 23], spanCol: 'red', ring: [2], reveal: R(t, 0, 0.55) });
      K.calendar(p, ...B, { title: month, span: [2, 4], spanCol: 'green', col: 'green', ring: [2], reveal: R(t, 0.4, 0.8) });
      const lab = (c, txt, sub, col, r) => {
        p.text(txt, c[0] + c[2] / 2, c[1] + c[3] + 36, { align: 'center', size: 26, weight: 700, col, reveal: r });
        p.text(sub, c[0] + c[2] / 2, c[1] + c[3] + 62, { align: 'center', size: 17, col: 'soft', reveal: r });
      };
      lab(A, L('weeks', '수 주'), L('from request to approval', '신청부터 승인까지'), 'red', R(t, 0.5, 0.6));
      lab(B, L('days', '수 일'), L('after the new flow', '새 플로우 이후'), 'green', R(t, 0.8, 0.9));
      if (!N) p.arrow([[370, 170], [430, 170]], { w: 2, reveal: R(t, 0.45, 0.55) });
    },
  },

  'p06-split': {
    size: [800, 400],
    narrow: [400, 640],
    draw(p, e) {
      const { t, L } = e;
      const N = e.narrow;
      const [dx, dy, dw, dh] = N ? [70, 20, 260, 300] : [290, 30, 220, 330];
      K.doc(p, dx, dy, dw, dh, { lines: 0, fill: 'paper', fa: 0.9, reveal: R(t, 0, 0.2) });
      p.text(L('Application', '지원 신청서'), dx + 16, dy + 32, { size: 21, weight: 700, reveal: R(t, 0.1, 0.2) });
      const fields = [
        [L('broadcast history', '방송 이력'), 'auto'],
        [L('partner status', '파트너 여부'), 'auto'],
        [L('past support', '이전 지원 내역'), 'auto'],
        [L('the plan itself', '기획 내용'), 'human'],
      ];
      const fy = (i) => dy + 70 + i * ((dh - 90) / 4);
      fields.forEach(([name, kind], i) => {
        const r = R(t, 0.15 + i * 0.06, 0.3 + i * 0.06);
        p.box(dx + 14, fy(i), dw - 28, 44, { r: 6, fill: kind === 'auto' ? 'blue' : 'ochre', fa: 0.25, reveal: r });
        p.text(name, dx + 26, fy(i) + 28, { size: p.fit(name, dw - 52, 18, 13), reveal: r });
      });
      // Where each field goes.
      const auto = N ? [20, 420, 170, 190] : [24, 110, 210, 180];
      const human = N ? [210, 420, 170, 190] : [566, 110, 210, 180];
      p.box(...auto, { r: 12, fill: 'blue', fa: 0.2, w: 1.8, reveal: R(t, 0.4, 0.55) });
      K.db(p, auto[0] + (N ? 40 : 50), auto[1] + 64, 48, 50, { col: 'blue', reveal: R(t, 0.45, 0.6) });
      K.gear(p, auto[0] + (N ? 100 : 118), auto[1] + 60, 22, { col: 'ochre', reveal: R(t, 0.5, 0.62) });
      p.check(auto[0] + (N ? 146 : auto[2] - 36), auto[1] + 60, 24, { col: 'green', reveal: R(t, 0.6, 0.7) });
      p.text(L('checked from\nplatform data', '플랫폼 데이터로\n자동 확인'), auto[0] + auto[2] / 2, auto[1] + 130, { align: 'center', size: 18, weight: 700, lh: 22, reveal: R(t, 0.55, 0.68) });
      p.box(...human, { r: 12, fill: 'ochre', fa: 0.2, w: 1.8, reveal: R(t, 0.5, 0.65) });
      K.person(p, human[0] + human[2] / 2, human[1] + 100, 76, { col: 'green', hair: true, mood: 'neutral', reveal: R(t, 0.55, 0.7) });
      p.text(L('a person decides', '사람이 판단'), human[0] + human[2] / 2, human[1] + 138, { align: 'center', size: 18, weight: 700, reveal: R(t, 0.62, 0.74) });
      if (N) {
        p.arrow([[150, 326], [105, 412]], { reveal: R(t, 0.4, 0.5) });
        p.arrow([[260, 326], [295, 412]], { reveal: R(t, 0.5, 0.6) });
      } else {
        [0, 1, 2].forEach((i) => p.arrow([[dx - 6, fy(i) + 22], [auto[0] + auto[2] + 8, auto[1] + 40 + i * 44]], { bend: 0.05 * (i - 1), reveal: R(t, 0.42 + i * 0.04, 0.54 + i * 0.04) }));
        p.arrow([[dx + dw + 6, fy(3) + 22], [human[0] - 8, human[1] + 110]], { bend: 0.1, reveal: R(t, 0.55, 0.66) });
      }
    },
  },

  'p06-steps': {
    size: [800, 330],
    narrow: [400, 510],
    draw(p, e) {
      const { t, L } = e;
      const N = e.narrow;
      const before = [L('apply', '신청'), L('send documents', '서류 제출'), L('manual check', '수동 검토'), L('ask for more', '보완 요청'), L('approve', '승인')];
      const after = [L('apply', '신청'), L('automatic check', '자동 자격 확인'), L('approve', '승인')];
      const row = (items, x0, y0, bw, bh, gap, col, rStart, vertical) => {
        items.forEach((s, i) => {
          const [x, y] = vertical ? [x0, y0 + i * (bh + gap)] : [x0 + i * (bw + gap), y0];
          const r = R(t, rStart + i * 0.06, rStart + 0.15 + i * 0.06);
          p.box(x, y, bw, bh, { r: 8, fill: col, fa: 0.3, reveal: r });
          p.text(s, x + bw / 2, y + bh / 2 + 1, { align: 'center', vcenter: true, size: p.fit(s, bw - 12, 18, 12), reveal: r });
          if (i < items.length - 1) {
            const a = vertical ? [[x + bw / 2, y + bh + 3], [x + bw / 2, y + bh + gap - 4]] : [[x + bw + 3, y + bh / 2], [x + bw + gap - 4, y + bh / 2]];
            p.arrow(a, { head: 7, reveal: R(t, rStart + 0.1 + i * 0.06, rStart + 0.16 + i * 0.06) });
          }
        });
      };
      if (N) {
        p.text(L('before: 5 steps', '이전: 5단계'), 105, 30, { align: 'center', size: 20, weight: 700, col: 'soft', reveal: R(t, 0, 0.1) });
        row(before, 20, 50, 170, 58, 36, 'soft', 0.05, true);
        p.text(L('after: 3 steps', '이후: 3단계'), 295, 30, { align: 'center', size: 20, weight: 700, col: 'green', reveal: R(t, 0.5, 0.6) });
        row(after, 210, 50, 170, 58, 36, 'green', 0.55, true);
        p.arrow([[14, 362], [14, 176]], { bend: -0.06, col: 'red', dash: [5, 5], reveal: R(t, 0.4, 0.5) });
      } else {
        p.text(L('before: 5 steps', '이전: 5단계'), 24, 36, { size: 21, weight: 700, col: 'soft', reveal: R(t, 0, 0.1) });
        row(before, 24, 56, 128, 64, 28, 'soft', 0.05, false);
        p.arrow([[562, 128], [240, 128]], { bend: -0.18, col: 'red', dash: [5, 5], reveal: R(t, 0.4, 0.5) });
        p.text(L('back and forth', '보완 요청이 오가며 지연'), 400, 188, { align: 'center', size: 17, col: 'red', reveal: R(t, 0.45, 0.55) });
        p.text(L('after: 3 steps', '이후: 3단계'), 24, 236, { size: 21, weight: 700, col: 'green', reveal: R(t, 0.5, 0.6) });
        row(after, 24, 252, 200, 64, 40, 'green', 0.55, false);
      }
    },
  },

  'p06-tool': {
    size: [800, 420],
    narrow: [400, 700],
    draw(p, e) {
      const { t, L } = e;
      const N = e.narrow;
      const [x, y, w, h] = N ? [20, 20, 360, 470] : [30, 24, 490, 370];
      p.box(x, y, w, h, { r: 10, fill: 'paper', fa: 0.92, w: 1.8, reveal: R(t, 0, 0.15) });
      p.box(x, y, w, 36, { r: 10, stroke: false, fill: 'soft', fa: 0.3, reveal: R(t, 0, 0.15) });
      [0, 1, 2].forEach((i) => p.circle(x + 18 + i * 16, y + 18, 5, { w: 1, fill: ['red', 'ochre', 'green'][i], fa: 0.6, reveal: R(t, 0.05, 0.15) }));
      p.text(L('Settlement workbook maker', '정산 엑셀 생성기'), x + w / 2 + 20, y + 24, { align: 'center', size: 17, weight: 700, reveal: R(t, 0.08, 0.18) });
      let cy = y + 70;
      // Manager picker (no names).
      p.text(L('Manager', '담당자'), x + 20, cy, { size: 18, weight: 700, reveal: R(t, 0.12, 0.22) });
      p.box(x + 110, cy - 22, N ? 200 : 220, 32, { r: 5, reveal: R(t, 0.12, 0.22) });
      p.scribble(x + 122, cy - 12, 80, 10, { reveal: R(t, 0.15, 0.25) });
      p.line([[x + (N ? 290 : 310), cy - 10], [x + (N ? 297 : 317), cy - 2], [x + (N ? 304 : 324), cy - 10]], { w: 1.4, reveal: R(t, 0.15, 0.25) });
      cy += 40;
      p.text(L('Unpaid items', '미지급 건'), x + 20, cy, { size: 18, weight: 700, reveal: R(t, 0.2, 0.3) });
      for (let i = 0; i < 3; i++) {
        const ry = cy + 16 + i * 30, r = R(t, 0.22 + i * 0.05, 0.34 + i * 0.05);
        K.checkbox(p, x + 22, ry, 16, true, { reveal: r });
        p.line([[x + 50, ry + 9], [x + 50 + (w - 180) * (0.8 - i * 0.12), ry + 9]], { w: 1, a: 0.5, pass: 1, reveal: r });
        p.text(L('÷ recipients', '÷ 수령인 수'), x + w - 20, ry + 14, { align: 'right', size: 15, col: 'soft', reveal: r });
      }
      cy += 126;
      p.text(L('Income type', '소득 구분'), x + 20, cy, { size: 18, weight: 700, reveal: R(t, 0.38, 0.48) });
      const types = [L('business income', '사업소득'), L('other income', '기타소득'), L('other income, with expenses', '필요경비 인정 기타소득')];
      types.forEach((ty, i) => {
        const [tx, tyy] = N ? [x + 22, cy + 26 + i * 28] : [x + 130 + (i ? 0 : 0), cy + (i * 28) - 0];
        const r = R(t, 0.42 + i * 0.05, 0.54 + i * 0.05);
        p.circle(tx + 8, tyy - 6, 7, { w: 1.2, reveal: r });
        if (i === 1) p.dot(tx + 8, tyy - 6, 3.6, { reveal: r });
        p.text(ty, tx + 24, tyy, { size: 16, reveal: r });
      });
      cy += N ? 118 : 96;
      p.text(L('Payment date: next cycle', '지급일: 다음 지급 회차'), x + 20, cy, { size: 17, reveal: R(t, 0.55, 0.65) });
      const [bx, by] = [x + w - (N ? 180 : 200), y + h - 56];
      p.box(bx, by, N ? 160 : 180, 38, { r: 8, fill: 'green', fa: 0.45, w: 1.6, reveal: R(t, 0.62, 0.72) });
      p.text(L('Make workbook', '엑셀 만들기'), bx + (N ? 80 : 90), by + 20, { align: 'center', vcenter: true, size: 18, weight: 700, reveal: R(t, 0.65, 0.75) });
      // Output: the filled settlement template.
      const [sx, sy, sw, sh] = N ? [100, 560, 200, 100] : [600, 150, 170, 130];
      if (N) p.arrow([[200, 500], [200, 550]], { w: 2, reveal: R(t, 0.72, 0.8) });
      else p.arrow([[x + w + 10, by + 10], [sx - 10, sy + sh / 2]], { bend: 0.15, w: 2, reveal: R(t, 0.72, 0.8) });
      K.sheet(p, sx, sy, sw, sh, { rows: 5, cols: 4, fill: 'green', reveal: R(t, 0.78, 0.95) });
      p.text(L('settlement template, filled', '채워진 정산 양식'), sx + sw / 2, sy + sh + 28, { align: 'center', size: 17, col: 'soft', reveal: R(t, 0.88, 0.98) });
    },
  },

  'p06-coverage': {
    size: [800, 330],
    narrow: [400, 560],
    draw(p, e) {
      const { t, L } = e;
      const N = e.narrow;
      const s = 44;
      const shirts = ['blue', 'ochre', 'green', 'red'];
      const who = (cx, by, inFlow, i, rr) => {
        K.person(p, cx, by, s, { col: inFlow ? shirts[i % 4] : null, face: false, reveal: rr, ink: inFlow ? undefined : 'soft' });
        if (inFlow) p.check(cx + 16, by - s + 4, 14, { col: 'green', reveal: rr });
        else p.text('?', cx + 14, by - s + 10, { size: 20, weight: 700, col: 'red', reveal: rr });
      };
      // Before: six partners inside the flow, four outside it.
      const r0 = R(t, 0.05, 0.45);
      const bIn = N ? { x: 20, y: 50, w: 214, h: 196, cols: 3, gap: 66, row: 88, top: 90 } : { x: 150, y: 40, w: 380, h: 100, cols: 6, gap: 58, row: 0, top: 84 };
      p.text(L('before', '이전'), N ? 20 : 130, N ? 34 : 100, { align: N ? 'left' : 'right', size: 22, weight: 700, col: 'soft', reveal: r0 });
      p.box(bIn.x, bIn.y, bIn.w, bIn.h, { r: 14, dash: [7, 6], fill: 'soft', fa: 0.12, reveal: r0 });
      for (let i = 0; i < 6; i++) who(bIn.x + 40 + (i % bIn.cols) * bIn.gap, bIn.y + bIn.top + Math.floor(i / bIn.cols) * bIn.row, true, i, K.S(r0, 10, i));
      const out = N ? { x: 270, y: 50 + 90, cols: 2, gap: 66, row: 88 } : { x: 572, y: 40 + 84, cols: 4, gap: 58, row: 0 };
      for (let i = 0; i < 4; i++) who(out.x + (i % out.cols) * out.gap, out.y + Math.floor(i / out.cols) * out.row, false, i, K.S(r0, 10, 6 + i));
      p.text(L('didn’t know how to apply', '신청 방법을 몰랐던 파트너'), N ? 303 : 659, N ? 274 : 164, { align: 'center', size: p.fit(L('didn’t know how to apply', '신청 방법을 몰랐던 파트너'), N ? 180 : 240, 17, 13), col: 'red', reveal: R(t, 0.4, 0.5) });
      // After: all ten inside.
      const r1 = R(t, 0.5, 0.9);
      const aIn = N ? { x: 20, y: 320, w: 360, h: 190, cols: 5, gap: 70, row: 88, top: 90 } : { x: 150, y: 196, w: 620, h: 100, cols: 10, gap: 58, row: 0, top: 84 };
      p.text(L('after', '이후'), N ? 20 : 130, N ? 304 : 256, { align: N ? 'left' : 'right', size: 22, weight: 700, col: 'green', reveal: r1 });
      p.box(aIn.x, aIn.y, aIn.w, aIn.h, { r: 14, dash: [7, 6], fill: 'green', fa: 0.12, reveal: r1 });
      for (let i = 0; i < 10; i++) who(aIn.x + 40 + (i % aIn.cols) * aIn.gap, aIn.y + aIn.top + Math.floor(i / aIn.cols) * aIn.row, true, i, K.S(r1, 10, i));
      p.text(L('every partner in the flow', '모든 파트너가 플로우 안에'), N ? 200 : 460, N ? 540 : 322, { align: 'center', size: 18, col: 'green', weight: 700, reveal: R(t, 0.9, 1) });
    },
  },
};
