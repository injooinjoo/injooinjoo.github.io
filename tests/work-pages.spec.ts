import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { projects } from '../content/work/projects.mjs';

type Kpi = { value: string; card?: boolean };
type Project = { id: string; slug: string; title: { en: string; ko: string }; kpis: Kpi[] };
const all = projects as Project[];

test('homepage work cards link to every case study', async ({ page }) => {
  await page.goto('/');
  const hrefs = await page.locator('#work a.work-card-link').evaluateAll((els) => els.map((e) => e.getAttribute('href')));
  expect(hrefs).toEqual(all.map((p) => `/work/${p.slug}/`));
});

for (const p of all) {
  test.describe(`${p.id} ${p.slug}`, () => {
    test('loads without console errors and shows the title', async ({ page }) => {
      const errors: string[] = [];
      page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
      page.on('pageerror', (e) => errors.push(e.message));
      await page.goto(`/work/${p.slug}/`);
      await expect(page).toHaveTitle(new RegExp(p.title.en.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
      await expect(page.locator('h1 [data-en]')).toHaveText(p.title.en);
      expect(errors).toEqual([]);
    });

    test('headline metrics match the homepage card', async ({ page }) => {
      await page.goto('/');
      const card = page.locator(`#work a[href="/work/${p.slug}/"]`);
      const cardValues = await card.locator('.work-kpi .n').allTextContents();
      await card.click();
      await expect(page).toHaveURL(new RegExp(`/work/${p.slug}/$`));
      await expect(page.locator('.cs-kpi-v').first()).toBeVisible();
      const pageValues = await page.locator('.cs-kpi-v').allTextContents();
      expect(cardValues.length).toBeGreaterThan(0);
      expect(pageValues.slice(0, cardValues.length)).toEqual(cardValues);
    });

    test('language toggle switches to Korean and persists', async ({ page }) => {
      await page.goto(`/work/${p.slug}/`);
      await page.locator('#lang-btn').click();
      await expect(page.locator('h1 [data-ko]')).toBeVisible();
      await expect(page.locator('h1 [data-en]')).toBeHidden();
      await expect(page.locator('html')).toHaveAttribute('lang', 'ko');
      await page.reload();
      await expect(page.locator('h1 [data-ko]')).toBeVisible();
    });

    test('every footnote reference resolves to a source', async ({ page }) => {
      await page.goto(`/work/${p.slug}/`);
      const targets = await page.locator('.fnref a').evaluateAll((els) => els.map((e) => e.getAttribute('href')));
      for (const t of new Set(targets)) {
        await expect(page.locator(t as string)).toHaveCount(1);
      }
    });

    test('sketches draw on their canvas and carry alt text in both languages', async ({ page }) => {
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await page.goto(`/work/${p.slug}/`);
      const figures = page.locator('figure.cs-sketch');
      const count = await figures.count();
      expect(count).toBeGreaterThanOrEqual(4);
      await expect(page.locator('figure.cs-sketch[data-drawn]')).toHaveCount(count, { timeout: 15_000 });
      for (let i = 0; i < count; i++) {
        const fig = figures.nth(i);
        const canvas = fig.locator('canvas');
        await expect(canvas).toHaveAttribute('role', 'img');
        expect((await canvas.getAttribute('aria-label'))?.length ?? 0).toBeGreaterThan(20);
        const inked = await canvas.evaluate((c: HTMLCanvasElement) => {
          const data = c.getContext('2d')!.getImageData(0, 0, c.width, c.height).data;
          let n = 0;
          for (let j = 3; j < data.length; j += 16) if (data[j] > 40) n++;
          return n / (data.length / 16);
        });
        expect(inked).toBeGreaterThan(0.01);
      }
      await page.locator('#lang-btn').click();
      const first = figures.first();
      await expect(first.locator('canvas')).toHaveAttribute('aria-label', (await first.getAttribute('data-alt-ko')) as string);
    });

    for (const viewport of [
      { name: 'desktop', width: 1440, height: 900 },
      { name: 'mobile', width: 375, height: 812 },
    ]) {
      test(`no horizontal overflow or serious a11y violations on ${viewport.name}`, async ({ page }) => {
        await page.setViewportSize(viewport);
        await page.goto(`/work/${p.slug}/`);
        const { content, width } = await page.evaluate(() => ({
          content: document.documentElement.scrollWidth,
          width: window.innerWidth,
        }));
        expect(content).toBeLessThanOrEqual(width);
        const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze();
        expect(results.violations.map((v) => `${v.id}: ${v.nodes.length}`)).toEqual([]);
      });
    }
  });
}

// The Sidekick product site lives at sidekickagent.app; old injookim.com/sidekick URLs only forward there.
for (const route of ['', 'privacy/', 'terms/', 'support/', 'delete-account/']) {
  test(`/sidekick/${route} forwards to sidekickagent.app`, async ({ request }) => {
    const res = await request.get(`/sidekick/${route}`);
    expect(res.status()).toBe(200);
    const html = await res.text();
    expect(html).toContain(`<link rel="canonical" href="https://sidekickagent.app/${route}" />`);
    expect(html).toContain(`url=https://sidekickagent.app/${route}"`);
  });
}
