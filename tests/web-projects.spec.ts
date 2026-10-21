import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('personal work is prominent, complete, bilingual and separate from company work', async ({page}) => {
  await page.goto('/');
  await page.locator('.hero-cta-row a').first().click();
  await expect(page).toHaveURL(/#web-projects$/);
  await expect(page.locator('#web-projects .web-card')).toHaveCount(5);
  await expect(page.locator('#web-projects .web-featured')).toHaveCount(2);
  await expect(page.locator('#work a.work-card-link')).toHaveCount(8);
  await expect(page.locator('#app-projects #app-sidekick')).toHaveCount(1);
  await expect(page.locator('#app-sidekick .web-visit')).toHaveAttribute('href','https://sidekickagent.app');
  await expect(page.locator('#app-sidekick .web-scope')).toContainText('Store availability');
  await expect(page.locator('#web-sketch .web-scope')).toContainText('no actual charge');
  await page.locator('#lang-btn').click();
  await expect(page.locator('html')).toHaveAttribute('lang','ko');
  await expect(page.locator('#web-some .web-scope p [data-ko]')).toContainText('고정 샘플');
  await expect(page.locator('#web-seoul img')).toHaveAttribute('alt',/실제/);
  await expect(page.locator('#app-sidekick .web-status [data-ko]')).toHaveText('앱 출시 준비 · 공개 예시 데모');
  await expect(page.locator('#app-sidekick figcaption [data-ko]')).toContainText('앱 실행 화면 아님');
  await page.reload();
  await expect(page.locator('#web-title [data-ko]')).toBeVisible();
  const images=page.locator('#web-projects img, #app-projects img');
  for(const img of await images.all()){
    await img.scrollIntoViewIfNeeded();
    await expect.poll(()=>img.evaluate((el: HTMLImageElement)=>el.naturalWidth)).toBeGreaterThan(0);
  }
});

for(const width of [375,768,1440]) {
  test(`readable accessible project section at ${width}px`,async({page})=>{
    await page.setViewportSize({width,height:900});
    await page.emulateMedia({reducedMotion:'reduce'});
    await page.goto('/');
    await page.locator('#web-projects').scrollIntoViewIfNeeded();
    expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
    const result=await new AxeBuilder({page}).include('#web-projects').include('#app-projects').withTags(['wcag2a','wcag2aa']).analyze();
    expect(result.violations.map(v=>v.id)).toEqual([]);
    await page.locator('#web-seoul .web-visit').focus();
    await expect(page.locator('#web-seoul .web-visit')).toBeFocused();
    expect(await page.evaluate(()=>getComputedStyle(document.documentElement).scrollBehavior)).toBe('auto');
    await page.emulateMedia({media:'print'});
    await expect(page.locator('#web-title')).toBeVisible();
    await expect(page.locator('.topbar')).toBeHidden();
    await expect(page.locator('#web-projects figure').first()).toBeHidden();
  });
}
