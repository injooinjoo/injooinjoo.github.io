import { expect, test } from '@playwright/test';

test.describe('Sidekick explanatory landing page', () => {
  test('serves a dedicated Korean Sidekick page with the core product promise', async ({ page }) => {
    await page.goto('/sidekick/');

    await expect(page).toHaveTitle('사이드킥 — 일을 맡기면 팀이 움직입니다');
    await expect(page.locator('html')).toHaveAttribute('lang', 'ko');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('일을 맡기면');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('팀이 움직입니다');
  });

  test('explains the full request-to-project-to-app flow without video assets', async ({ page }) => {
    await page.goto('/sidekick/');

    await expect(page.locator('[data-sidekick-section]')).toHaveCount(9);
    await expect(page.locator('[data-request-option]')).toHaveCount(4);
    await expect(page.locator('[data-request-option][data-selected="true"]')).toContainText(
      '유튜브 채널을 키우고 다음 영상까지 만들어줘',
    );

    await expect(page.locator('[data-agent-role]')).toHaveCount(5);
    await expect(page.locator('[data-case="youtube"] [data-work-step]')).toHaveCount(6);
    await expect(page.locator('[data-case="sourcing"] [data-work-step]')).toHaveCount(4);
    await expect(page.locator('[data-case="launch"] [data-work-step]')).toHaveCount(4);

    for (const label of ['채널 진단', '검색', '분석', '대본', '스토리보드', '배포']) {
      await expect(page.getByText(label, { exact: true }).first()).toBeVisible();
    }

    await expect(page.locator('[data-user-role]')).toHaveCount(3);
    await expect(page.getByText('지시', { exact: true })).toBeVisible();
    await expect(page.getByText('현황 확인', { exact: true })).toBeVisible();
    await expect(page.getByText('승인', { exact: true })).toBeVisible();

    await expect(page.locator('[data-bridge-state]')).toHaveCount(4);
    await expect(page.locator('video')).toHaveCount(0);
    await expect(page.getByText('다음 신제품 런칭도 준비해줘.', { exact: true })).toBeVisible();
  });

  test('removes pinned scroll behavior when reduced motion is requested', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/sidekick/');

    await expect(page.locator('.workflow-sticky')).toHaveCSS('position', 'relative');
  });

  test('publishes canonical and social metadata without fake store links', async ({ page }) => {
    await page.goto('/sidekick/');

    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      'https://www.injookim.com/sidekick/',
    );
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /사이드킥/);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      'content',
      'https://www.injookim.com/sidekick/media/sidekick-og.jpg',
    );
    await expect(page.locator('a[href*="apps.apple.com"], a[href*="play.google.com"]')).toHaveCount(0);
  });
});
