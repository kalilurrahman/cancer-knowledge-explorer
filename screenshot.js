import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('https://cancer-knowledge-explorer.lovable.app/');

  // Wait for network idle or main content to load
  await page.waitForTimeout(3000);

  await page.screenshot({ path: 'screenshot1.png' });

  // Try to click around or scroll to get more screenshots
  await page.evaluate(() => window.scrollBy(0, window.innerHeight));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'screenshot2.png' });

  await page.evaluate(() => window.scrollBy(0, window.innerHeight));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'screenshot3.png' });

  await browser.close();
})();
