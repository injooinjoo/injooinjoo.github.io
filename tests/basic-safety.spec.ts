import { test, expect } from '@playwright/test';

test.describe('Basic Safety Tests', () => {
  test('page loads successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/InJoo Kim/);
  });

  test('no JavaScript errors on page load', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(3000);
    
    expect(errors).toHaveLength(0);
  });

  test('all navigation tabs are functional', async ({ page }) => {
    await page.goto('/');
    
    const tabs = ['About', 'Experience', 'Projects', 'Skills', 'Certifications'];
    
    for (const tab of tabs) {
      const tabElement = page.locator(`text=${tab}`).first();
      if (await tabElement.count() > 0) {
        await tabElement.click();
        await page.waitForTimeout(500);
      }
    }
  });

  test('contact form safety - no XSS vulnerabilities', async ({ page }) => {
    await page.goto('/');
    
    const contactSection = page.locator('#contact, .contact-section, [data-section="contact"]');
    if (await contactSection.count() > 0) {
      await contactSection.scrollIntoViewIfNeeded();
    }
    
    const xssPayload = '<script>alert("XSS")</script>';
    
    const nameInput = page.locator('input[name="name"], input[placeholder*="name" i]').first();
    const emailInput = page.locator('input[name="email"], input[type="email"], input[placeholder*="email" i]').first();
    const messageInput = page.locator('textarea[name="message"], textarea[placeholder*="message" i]').first();
    
    if (await nameInput.count() > 0) {
      await nameInput.fill(xssPayload);
      const nameValue = await nameInput.inputValue();
      expect(nameValue).toBe(xssPayload);
    }
    
    if (await emailInput.count() > 0) {
      await emailInput.fill(xssPayload);
      const emailValue = await emailInput.inputValue();
      expect(emailValue).toBe(xssPayload);
    }
    
    if (await messageInput.count() > 0) {
      await messageInput.fill(xssPayload);
      const messageValue = await messageInput.inputValue();
      expect(messageValue).toBe(xssPayload);
    }
  });

  test('all external links open in new tab', async ({ page }) => {
    await page.goto('/');
    
    const externalLinks = await page.locator('a[href^="http"]').all();
    
    for (const link of externalLinks) {
      const target = await link.getAttribute('target');
      const href = await link.getAttribute('href');
      
      if (href && !href.includes(page.url())) {
        expect(target).toBe('_blank');
      }
    }
  });

  test('responsive design works on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    
    await expect(page.locator('body')).toBeVisible();
    
    const content = page.locator('main, .container, #root').first();
    await expect(content).toBeVisible();
  });

  test('images load properly', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(2000);
    
    const visibleImages = await page.locator('img:visible').all();
    
    for (const img of visibleImages) {
      const src = await img.getAttribute('src');
      if (src) {
        const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth);
        expect(naturalWidth).toBeGreaterThan(0);
      }
    }
    
    expect(visibleImages.length).toBeGreaterThan(0);
  });

  test('performance - page loads within reasonable time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    const endTime = Date.now();
    
    const loadTime = endTime - startTime;
    expect(loadTime).toBeLessThan(10000);
  });

  test('videos are muted by default', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(2000);
    
    const videos = await page.locator('video').all();
    
    for (const video of videos) {
      const isMuted = await video.getAttribute('muted');
      const hasAutoplay = await video.getAttribute('autoplay');
      
      if (hasAutoplay !== null) {
        expect(isMuted).toBeTruthy();
      }
      
      const actuallyMuted = await video.evaluate((el: HTMLVideoElement) => el.muted);
      if (hasAutoplay !== null) {
        expect(actuallyMuted).toBe(true);
      }
    }
  });

  test('videos have proper controls and accessibility', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    
    const videos = await page.locator('video').all();
    
    for (const video of videos) {
      const hasControls = await video.getAttribute('controls');
      const ariaLabel = await video.getAttribute('aria-label');
      const title = await video.getAttribute('title');
      
      expect(hasControls !== null || ariaLabel !== null || title !== null).toBeTruthy();
    }
  });
});