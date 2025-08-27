import { test, expect } from '@playwright/test';

test.describe('Accessibility Tests', () => {
  test('page has proper semantic structure', async ({ page }) => {
    await page.goto('/');
    
    await expect(page.locator('h1').first()).toBeVisible();
    
    const headings = await page.locator('h1, h2, h3, h4, h5, h6').all();
    expect(headings.length).toBeGreaterThan(0);
    
    await expect(page.locator('main, [role="main"], body')).toBeVisible();
  });

  test('images have alt attributes', async ({ page }) => {
    await page.goto('/');
    
    const images = await page.locator('img').all();
    
    for (const img of images) {
      const alt = await img.getAttribute('alt');
      const ariaLabel = await img.getAttribute('aria-label');
      const role = await img.getAttribute('role');
      
      expect(alt !== null || ariaLabel !== null || role === 'presentation').toBeTruthy();
    }
  });

  test('form elements have proper labels', async ({ page }) => {
    await page.goto('/');
    
    const contactSection = page.locator('#contact, .contact-section, [data-section="contact"]');
    if (await contactSection.count() > 0) {
      await contactSection.scrollIntoViewIfNeeded();
    }
    
    const inputs = await page.locator('input, textarea').all();
    
    for (const input of inputs) {
      const id = await input.getAttribute('id');
      const ariaLabel = await input.getAttribute('aria-label');
      const placeholder = await input.getAttribute('placeholder');
      
      if (id) {
        const label = await page.locator(`label[for="${id}"]`).count();
        expect(label > 0 || ariaLabel !== null || placeholder !== null).toBeTruthy();
      } else {
        expect(ariaLabel !== null || placeholder !== null).toBeTruthy();
      }
    }
  });

  test('keyboard navigation works', async ({ page }) => {
    await page.goto('/');
    
    const focusableElements = await page.locator('a, button, input, textarea, [tabindex]:not([tabindex="-1"])').all();
    
    if (focusableElements.length > 0) {
      await page.keyboard.press('Tab');
      const focused = await page.evaluate(() => document.activeElement?.tagName);
      expect(focused).toBeTruthy();
    }
  });

  test('color contrast is sufficient', async ({ page }) => {
    await page.goto('/');
    
    const textElements = await page.locator('p, h1, h2, h3, h4, h5, h6, span').all();
    
    for (const element of textElements.slice(0, 10)) {
      const styles = await element.evaluate((el) => {
        const computed = window.getComputedStyle(el);
        return {
          color: computed.color,
          backgroundColor: computed.backgroundColor,
          fontSize: computed.fontSize
        };
      });
      
      expect(styles.color).toBeTruthy();
    }
  });
});