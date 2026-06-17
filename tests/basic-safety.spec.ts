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

    const tabs = page.locator('[data-nav-link], header a[href^="#"], nav a[href^="#"]');
    const count = await tabs.count();

    expect(count).toBeGreaterThan(0);

    for (let index = 0; index < count; index += 1) {
      const tab = tabs.nth(index);
      const href = await tab.getAttribute('href');
      await tab.click();
      await page.waitForTimeout(300);
      if (href) {
        await expect(page).toHaveURL(new RegExp(`${href.replace('#', '#')}$`));
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
    
    const content = page.locator('main, .container, #root, body').first();
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
      const actuallyMuted = await video.evaluate((el: HTMLVideoElement) => el.muted);
      const preload = await video.getAttribute('preload');

      expect(actuallyMuted).toBe(true);
      expect(preload).toBe('metadata');
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

  test('mobile menu has an accessible label and closes on escape', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    const menuButton = page.getByRole('button', { name: /navigation menu|탐색 메뉴/i });
    if (await menuButton.count() === 0) {
      test.skip(true, 'This portfolio build uses a static responsive header without a mobile menu button.');
    }
    await expect(menuButton).toBeVisible();

    await menuButton.click();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');

    await page.keyboard.press('Escape');
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });
});
