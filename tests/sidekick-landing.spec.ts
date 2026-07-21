import { expect, test } from '@playwright/test';

const sceneOrder = [
  'hero',
  'input',
  'portal',
  'team',
  'progress',
  'results',
  'youtube',
  'sourcing',
  'launch',
  'agents',
  'approvals',
  'features',
  'final',
];

test.describe('Sidekick Extra-layout landing page', () => {
  test('serves the Korean product promise in a 13-scene narrative', async ({ page }) => {
    await page.goto('/sidekick/');

    await expect(page).toHaveTitle('사이드킥 — 일을 맡기면 팀이 움직입니다');
    await expect(page.locator('html')).toHaveAttribute('lang', 'ko');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('일을 맡기면');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('팀이 움직입니다');
    await expect(page.locator('[data-extra-scene]')).toHaveCount(13);

    const actualOrder = await page.locator('[data-extra-scene]').evaluateAll((nodes) =>
      nodes.map((node) => node.getAttribute('data-extra-scene')),
    );
    expect(actualOrder).toEqual(sceneOrder);
  });

  test('changes only the opening input model from email to in-app voice or chat', async ({ page }) => {
    await page.goto('/sidekick/');

    const input = page.locator('[data-extra-scene="input"]');
    await expect(input.getByText('앱 안에서 말하거나 입력하세요', { exact: true })).toBeVisible();
    await expect(input.locator('[data-input-mode]')).toHaveCount(2);
    await expect(input.getByText('음성', { exact: true })).toBeVisible();
    await expect(input.getByText('채팅', { exact: true })).toBeVisible();
    await expect(input.getByText('유튜브 채널을 키우고 다음 영상까지 만들어줘', { exact: true })).toBeVisible();
    await expect(input.getByText(/받는 사람|보낸 사람|이메일 작성|메일 보내기/)).toHaveCount(0);
  });

  test('preserves Extra-like sticky, horizontal, orbit, stack, feature, and final-device compositions', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/sidekick/');

    await expect(page.locator('[data-sticky-sequence="workflow"]')).toHaveCount(1);
    await expect(page.locator('[data-sticky-sequence="workflow"] [data-workflow-panel]')).toHaveCount(3);
    await expect(page.locator('[data-workflow-nav]')).toHaveCount(3);

    await expect(page.locator('[data-horizontal-sequence="projects"] [data-project-case]')).toHaveCount(3);
    for (const project of ['유튜브', '상품 소싱', '신제품 출시']) {
      await expect(page.getByText(project, { exact: true }).first()).toBeVisible();
    }

    await expect(page.locator('[data-agent-orbit] [data-agent-role]')).toHaveCount(8);
    await expect(page.locator('[data-approval-stack] [data-approval-card]')).toHaveCount(5);
    await expect(page.locator('[data-feature-card]')).toHaveCount(3);
    await expect(page.locator('[data-final-device]')).toHaveCount(2);

    const heroHeight = await page.locator('[data-extra-scene="hero"]').evaluate((node) => node.getBoundingClientRect().height);
    expect(heroHeight).toBeGreaterThanOrEqual(850);
    await expect(page.locator('[data-sticky-sequence="workflow"] > .sequence-sticky')).toHaveCSS('position', 'sticky');
    await expect(page.locator('[data-horizontal-sequence="projects"] > .horizontal-sticky')).toHaveCSS('position', 'sticky');
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(1440);
  });

  test('uses local decorative media without making product truth depend on video', async ({ page }) => {
    await page.goto('/sidekick/');

    const videos = page.locator('video[data-decorative-media]');
    await expect(videos).toHaveCount(2);
    for (let index = 0; index < 2; index += 1) {
      const video = videos.nth(index);
      expect(await video.evaluate((element) => (element as HTMLVideoElement).muted)).toBe(true);
      await expect(video).toHaveAttribute('playsinline', '');
      await expect(video).toHaveAttribute('loop', '');
      await expect(video).toHaveAttribute('poster', /\/sidekick\/media\//);
      await expect(video).toHaveAttribute('src', /\/sidekick\/media\//);
    }
    const productProofs = page.locator('[data-product-ui]');
    await expect(productProofs).toHaveCount(11);
    for (let index = 0; index < 11; index += 1) {
      const screenshot = productProofs.nth(index).locator('img[data-product-screenshot]');
      await expect(screenshot).toHaveCount(1);
      await expect(screenshot).toHaveAttribute('src', /^\/sidekick\/media\/app\/\d{2}\.webp$/);
    }
    await expect(page.locator('.app-composer, .agent-table, .progress-board, .case-backdrop, .ask-demo, .mini-projects, .final-board .board-row')).toHaveCount(0);
  });

  test('keeps controls honest and disables pinned choreography for reduced motion', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/sidekick/');

    await expect(page.getByRole('button')).toHaveCount(0);
    await expect(page.locator('a[href*="apps.apple.com"], a[href*="play.google.com"]')).toHaveCount(0);
    await expect(page.locator('[data-sticky-sequence="workflow"] > .sequence-sticky')).toHaveCSS('position', 'relative');
    await expect(page.locator('[data-horizontal-sequence="projects"] > .horizontal-sticky')).toHaveCSS('position', 'relative');
    expect(await page.locator('video[data-decorative-media]').evaluateAll((videos) => videos.every((video) => (video as HTMLVideoElement).paused))).toBe(true);

    const workflowPanels = page.locator('[data-workflow-panel]');
    await expect(workflowPanels).toHaveCount(3);
    for (let index = 0; index < 3; index += 1) await expect(workflowPanels.nth(index)).toBeVisible();

    const projectCases = page.locator('[data-project-case]');
    await expect(projectCases).toHaveCount(3);
    const projectTops = await projectCases.evaluateAll((nodes) => nodes.map((node) => node.getBoundingClientRect().top + scrollY));
    expect(projectTops[1]).toBeGreaterThan(projectTops[0]);
    expect(projectTops[2]).toBeGreaterThan(projectTops[1]);
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(1440);
  });

  test('reconfigures choreography when reduced-motion changes at runtime', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/sidekick/');

    await page.emulateMedia({ reducedMotion: 'no-preference' });
    await expect(page.locator('[data-sticky-sequence="workflow"] > .sequence-sticky')).toHaveCSS('position', 'sticky');
    await page.locator('[data-extra-scene="progress"]').scrollIntoViewIfNeeded();
    await expect(page.locator('[data-workflow-nav]').nth(1)).toHaveClass(/is-active/);

    const horizontal = page.locator('[data-horizontal-sequence="projects"]');
    await horizontal.evaluate((node) => scrollTo(0, node.getBoundingClientRect().top + scrollY + node.getBoundingClientRect().height / 2));
    await expect.poll(() => page.locator('.horizontal-track').evaluate((node) => getComputedStyle(node).transform)).not.toBe('none');

    await page.emulateMedia({ reducedMotion: 'reduce' });
    await expect(page.locator('.horizontal-track')).toHaveCSS('transform', 'none');
    for (let index = 0; index < 3; index += 1) await expect(page.locator('[data-workflow-panel]').nth(index)).toBeVisible();
  });

  test('publishes canonical and social metadata', async ({ page }) => {
    await page.goto('/sidekick/');

    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://www.injookim.com/sidekick/');
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /사이드킥/);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', 'https://www.injookim.com/sidekick/media/sidekick-og.jpg');
  });
});
