import {test,expect,type Locator} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
const figures='[data-note-scene]';
async function ink(canvas: Locator){return canvas.evaluate((c:HTMLCanvasElement)=>{const a=c.getContext('2d')!.getImageData(0,0,c.width,c.height).data;let n=0;for(let i=3;i<a.length;i+=16)if(a[i]>30)n++;return n/(a.length/16);});}
for(const slug of ['seoul','sketch','tarot','lotto','some','sidekick'] as const){
const count=slug==='sidekick'?5:3;
const heroId={seoul:'seoul-home',sketch:'yeon-story',tarot:'maju-room',lotto:'lotto-film',some:'some-conversation',sidekick:'sidekick-team'}[slug];
for(const width of [375,768,1440]){
 test(`${slug} pencil illustrations render accessibly at ${width}px`,async({page})=>{
  const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
  await page.setViewportSize({width,height:1000});await page.emulateMedia({reducedMotion:'reduce'});await page.goto(`/notes/${slug}/`);
  await expect(page.locator(`${figures}[data-drawn="complete"]`)).toHaveCount(count);
  for(const figure of await page.locator(figures).all()){const canvas=figure.locator('canvas');await expect(canvas).toHaveAttribute('role','img');expect((await canvas.getAttribute('aria-label'))!.length).toBeGreaterThan(40);expect(await ink(canvas)).toBeGreaterThan(.008);}
  await expect(page.locator('#sketch-replay')).toBeDisabled();await expect(page.locator('#sketch-motion')).toHaveAttribute('aria-pressed','true');
  await page.locator('#lang-btn').click();await expect(page.locator(`${figures} canvas`).first()).toHaveAttribute('aria-label',/연필/);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
  const a=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa']).analyze();expect(a.violations.map(v=>v.id)).toEqual([]);
  await page.locator('.screen-evidence summary').click();await expect(page.locator('.cover img')).toBeVisible();await expect(page.locator('.cover img')).toHaveJSProperty('naturalWidth',1440);
  await page.locator('#theme-btn').click();const dark=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa']).analyze();expect(dark.violations.map(v=>v.id)).toEqual([]);expect(errors).toEqual([]);
 });
}
test(`${slug}: replay, still mode and print preserve all illustrations`,async({page})=>{
 await page.goto(`/notes/${slug}/`);const hero=page.locator(`[data-note-scene="${heroId}"]`);await hero.scrollIntoViewIfNeeded();
 await expect.poll(()=>hero.getAttribute('data-progress')).not.toBe('0.000');
 await page.locator('#sketch-motion').click();await expect(page.locator(`${figures}[data-drawn="complete"]`)).toHaveCount(count);await expect(page.locator('#sketch-motion')).toHaveAttribute('aria-pressed','true');await expect(page.locator('#sketch-replay')).toBeDisabled();
 await page.locator('#sketch-motion').click();await page.locator('#sketch-replay').click();await expect.poll(async()=>Number(await hero.getAttribute('data-progress'))).toBeLessThan(.9);
 await page.locator('#sketch-motion').focus();await expect(page.locator('#sketch-motion')).toBeFocused();await page.keyboard.press('Space');await expect(page.locator('#sketch-motion')).toHaveAttribute('aria-pressed','true');
 await page.evaluate(()=>window.dispatchEvent(new Event('beforeprint')));for(const c of await page.locator(`${figures} canvas`).all())expect(await ink(c)).toBeGreaterThan(.008);
 await page.emulateMedia({media:'print'});await expect(page.locator('.sketch-print:visible')).toHaveCount(count);for(const img of await page.locator('.sketch-print').all())expect(await img.evaluate((i:HTMLImageElement)=>i.naturalWidth)).toBeGreaterThan(1000);await expect(page.locator('.sketch-toolbar')).toBeHidden();await expect(page.locator('.scope')).toBeVisible();
});
test(`${slug}: drawings pause offscreen and follow reduced-motion changes`,async({page})=>{
 await page.goto(`/notes/${slug}/`);const hero=page.locator(`[data-note-scene="${heroId}"]`);await hero.scrollIntoViewIfNeeded();await expect.poll(async()=>Number(await hero.getAttribute('data-progress'))).toBeGreaterThan(.05);
 await page.locator('.scope').scrollIntoViewIfNeeded();await page.waitForTimeout(150);const before=await hero.getAttribute('data-progress');await page.waitForTimeout(400);expect(await hero.getAttribute('data-progress')).toBe(before);
 await page.emulateMedia({reducedMotion:'reduce'});await expect(page.locator(`${figures}[data-drawn="complete"]`)).toHaveCount(count);await expect(page.locator('#sketch-replay')).toBeDisabled();
});

test(`${slug}: dark theme prints complete graphite strokes on white paper`,async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto(`/notes/${slug}/`);await page.locator('#theme-btn').click();await page.emulateMedia({media:'print'});await page.evaluate(()=>window.dispatchEvent(new Event('beforeprint')));
 const print=page.locator('.sketch-print').first();await expect(print).toBeVisible();await expect(print).toHaveJSProperty('naturalWidth',1920);
 const darkest=await print.evaluate(async(img:HTMLImageElement)=>{await img.decode();const c=document.createElement('canvas');c.width=img.naturalWidth;c.height=img.naturalHeight;const ctx=c.getContext('2d')!;ctx.drawImage(img,0,0);const a=ctx.getImageData(0,0,c.width,c.height).data;let min=255;for(let i=0;i<a.length;i+=4)if(a[i+3]>150)min=Math.min(min,a[i]);return min;});expect(darkest).toBeLessThan(80);
});

}

test('illustrated notes preserve service boundaries and real captures',async({page})=>{
 await page.goto('/notes/sketch/');await expect(page.locator('.links a[href="https://sketch.zpzg.co.kr"]')).toHaveCount(1);
 await page.locator('#lang-btn').click();await expect(page.locator('.scope')).toContainText('결제 테스트');await expect(page.locator('.scope')).toContainText('이메일 발송은 미제공');await expect(page.locator('.sketch-hero figcaption')).toContainText('실제 서비스 화면이나 생성 결과가 아니며');
 await page.goto('/notes/lotto/');await expect(page.locator('.links a[href="https://lotto.zpzg.co.kr"]')).toHaveCount(1);await expect(page.locator('.cover img')).toHaveJSProperty('naturalWidth',1440);
});


test('Maju diagrams retain disabled integration scope and the original service destination',async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/notes/tarot/');
 await expect(page.locator('.links a[href="https://tarot.zpzg.co.kr"]')).toHaveCount(1);
 await expect(page.locator('.scope')).toContainText('Purchase and AI readings are disabled');
 await page.locator('#lang-btn').click();await expect(page.locator('.scope')).toContainText('구매·AI 해석은 비활성');await expect(page.locator('.sketch-hero figcaption')).toContainText('실시간 사람 상담이 아니며');
 await expect(page.locator('[data-note-scene="maju-states"] figcaption')).toContainText('실결제 성공 사례가 아닙니다');
});


test('Sidekick has detailed chapters, accessible in-page navigation and evidence boundaries',async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/notes/sidekick/');await expect(page.locator('.note-toc a')).toHaveCount(5);await expect(page.locator('h2')).toHaveCount(9);await expect(page.locator('.verification-table tbody tr')).toHaveCount(4);
 await page.locator('.note-toc a[href="#routines"]').focus();await page.keyboard.press('Enter');await expect(page).toHaveURL(/#routines$/);await expect(page.locator('#routines h2')).toBeInViewport();
 await page.locator('#lang-btn').click();await expect(page.locator('#scope')).toContainText('스토어 공개 출시');await expect(page.locator('#scope')).toContainText('진행 중인 전환');await expect(page.locator('#architecture')).toContainText('Hermes');await expect(page.locator('#routines')).toContainText('실행 회차');
 await expect(page.locator('.links a[href="https://sidekickagent.app"]')).toHaveCount(1);await expect(page.locator('.screen-evidence figcaption')).toContainText('앱 실행 화면 아님');
});
test('Remaining web notes keep random entertainment and sample coaching limitations',async({page})=>{
 await page.goto('/notes/some/');await page.locator('#lang-btn').click();await expect(page.locator('.scope')).toContainText('고정 샘플');await expect(page.locator('.scope')).toContainText('브라우저 메모리');await expect(page.locator('.scope')).toContainText('실결제는 미연결');
 await page.goto('/notes/lotto/');await expect(page.locator('.scope')).toContainText('당첨을 예측하지 않습니다');await expect(page.locator('[data-note-scene="lotto-numberbox"] figcaption')).toContainText('설명용 기호');
});
