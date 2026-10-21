import {test,expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
const slugs=['seoul','sketch','tarot','lotto','some','sidekick'];
test('notes are discoverable and link to all six project articles',async({page})=>{
 await page.goto('/');await page.locator('#primary-nav a[href="/notes/"]').click();await expect(page).toHaveURL(/\/notes\/$/);await expect(page.locator('.note-row')).toHaveCount(6);await page.locator('.note-row h2 a').first().click();await expect(page).toHaveURL(/\/notes\/seoul\/$/);await page.locator('#lang-btn').click();await expect(page.locator('html')).toHaveAttribute('lang','ko');await expect(page.getByRole('heading',{name:'중요한 설계 판단'})).toBeVisible();await page.reload();await expect(page.locator('html')).toHaveAttribute('lang','ko');
});
for(const slug of slugs){test(`${slug} article has current scope, image and product/portfolio links`,async({page})=>{
 const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));await page.goto(`/notes/${slug}/`);await expect(page.locator('h1')).toBeVisible();await expect(page.locator('.scope')).toBeVisible();await expect(page.locator('.links a')).toHaveCount(3);await expect(page.locator('.cover img')).toHaveJSProperty('naturalWidth',1440);await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href',`https://www.injookim.com/notes/${slug}/`);expect(errors).toEqual([]);
});}
for(const width of [375,1440]){test(`notes accessibility and layout ${width}`,async({page})=>{
 await page.setViewportSize({width,height:900});await page.emulateMedia({reducedMotion:'reduce'});
 for(const route of ['/notes/','/notes/sidekick/']){await page.goto(route);expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);const a=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa']).analyze();expect(a.violations.map(v=>v.id)).toEqual([]);}
 await page.locator('#lang-btn').click();await page.locator('#theme-btn').click();await expect(page.locator('html')).toHaveAttribute('data-theme','dark');const a=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa']).analyze();expect(a.violations.map(v=>v.id)).toEqual([]);await page.keyboard.press('Tab');expect(await page.evaluate(()=>document.activeElement?.tagName)).not.toBe('BODY');await page.emulateMedia({media:'print'});await expect(page.locator('.scope')).toBeVisible();await expect(page.locator('header')).toBeHidden();
});}
