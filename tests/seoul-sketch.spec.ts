import {test,expect,type Locator} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
const figures='[data-note-scene]';
async function ink(canvas: Locator){return canvas.evaluate((c:HTMLCanvasElement)=>{const a=c.getContext('2d')!.getImageData(0,0,c.width,c.height).data;let n=0;for(let i=3;i<a.length;i+=16)if(a[i]>30)n++;return n/(a.length/16);});}
for(const width of [375,768,1440]){
 test(`Seoul pencil illustrations render accessibly at ${width}px`,async({page})=>{
  const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
  await page.setViewportSize({width,height:1000});await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/notes/seoul/');
  await expect(page.locator(`${figures}[data-drawn="complete"]`)).toHaveCount(3);
  for(const figure of await page.locator(figures).all()){const canvas=figure.locator('canvas');await expect(canvas).toHaveAttribute('role','img');expect((await canvas.getAttribute('aria-label'))!.length).toBeGreaterThan(40);expect(await ink(canvas)).toBeGreaterThan(.008);}
  await expect(page.locator('#sketch-replay')).toBeDisabled();await expect(page.locator('#sketch-motion')).toHaveAttribute('aria-pressed','true');
  await page.locator('#lang-btn').click();await expect(page.locator(`${figures} canvas`).first()).toHaveAttribute('aria-label',/연필/);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
  const a=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa']).analyze();expect(a.violations.map(v=>v.id)).toEqual([]);
  await page.locator('.screen-evidence summary').click();await expect(page.locator('.cover img')).toBeVisible();await expect(page.locator('.cover img')).toHaveJSProperty('naturalWidth',1440);
  await page.locator('#theme-btn').click();const dark=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa']).analyze();expect(dark.violations.map(v=>v.id)).toEqual([]);expect(errors).toEqual([]);
 });
}
test('drawing replay, still mode and printing preserve all illustrations',async({page})=>{
 await page.goto('/notes/seoul/');const hero=page.locator('[data-note-scene="seoul-home"]');await hero.scrollIntoViewIfNeeded();
 await expect.poll(()=>hero.getAttribute('data-progress')).not.toBe('0.000');
 await page.locator('#sketch-motion').click();await expect(page.locator(`${figures}[data-drawn="complete"]`)).toHaveCount(3);await expect(page.locator('#sketch-motion')).toHaveAttribute('aria-pressed','true');await expect(page.locator('#sketch-replay')).toBeDisabled();
 await page.locator('#sketch-motion').click();await page.locator('#sketch-replay').click();await expect.poll(async()=>Number(await hero.getAttribute('data-progress'))).toBeLessThan(.9);
 await page.locator('#sketch-motion').focus();await expect(page.locator('#sketch-motion')).toBeFocused();await page.keyboard.press('Space');await expect(page.locator('#sketch-motion')).toHaveAttribute('aria-pressed','true');
 await page.evaluate(()=>window.dispatchEvent(new Event('beforeprint')));for(const c of await page.locator(`${figures} canvas`).all())expect(await ink(c)).toBeGreaterThan(.008);
 await page.emulateMedia({media:'print'});await expect(page.locator('.sketch-print:visible')).toHaveCount(3);for(const img of await page.locator('.sketch-print').all())expect(await img.evaluate((i:HTMLImageElement)=>i.naturalWidth)).toBeGreaterThan(1000);await expect(page.locator('.sketch-toolbar')).toBeHidden();await expect(page.locator('.scope')).toBeVisible();
});
test('the pilot does not restyle other notes or change product destinations',async({page})=>{
 await page.goto('/notes/seoul/');await expect(page.locator('.links a[href="https://seoul-home-game.injoo.chatgpt.site"]')).toHaveCount(1);
 await page.goto('/notes/sketch/');await expect(page.locator('body')).not.toHaveClass(/seoul-note/);await expect(page.locator(figures)).toHaveCount(0);await expect(page.locator('.cover img')).toBeVisible();
});

test('drawings pause outside the viewport and respect reduced-motion changes',async({page})=>{
 await page.goto('/notes/seoul/');const hero=page.locator('[data-note-scene="seoul-home"]');await hero.scrollIntoViewIfNeeded();await expect.poll(async()=>Number(await hero.getAttribute('data-progress'))).toBeGreaterThan(.05);
 await page.locator('.scope').scrollIntoViewIfNeeded();await page.waitForTimeout(150);const before=await hero.getAttribute('data-progress');await page.waitForTimeout(400);expect(await hero.getAttribute('data-progress')).toBe(before);
 await page.emulateMedia({reducedMotion:'reduce'});await expect(page.locator(`${figures}[data-drawn="complete"]`)).toHaveCount(3);await expect(page.locator('#sketch-replay')).toBeDisabled();
});

test('dark theme prints complete graphite strokes on white paper',async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/notes/seoul/');await page.locator('#theme-btn').click();await page.emulateMedia({media:'print'});await page.evaluate(()=>window.dispatchEvent(new Event('beforeprint')));
 const print=page.locator('.sketch-print').first();await expect(print).toBeVisible();await expect(print).toHaveJSProperty('naturalWidth',1920);
 const darkest=await print.evaluate(async(img:HTMLImageElement)=>{await img.decode();const c=document.createElement('canvas');c.width=img.naturalWidth;c.height=img.naturalHeight;const ctx=c.getContext('2d')!;ctx.drawImage(img,0,0);const a=ctx.getImageData(0,0,c.width,c.height).data;let min=255;for(let i=0;i<a.length;i+=4)if(a[i+3]>150)min=Math.min(min,a[i]);return min;});expect(darkest).toBeLessThan(80);
});
