import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

const pages = [
  { url: 'http://localhost:3000/', name: 'landing.png' },
  { url: 'http://localhost:3000/about', name: 'about.png' },
  { url: 'http://localhost:3000/contact', name: 'contact.png' },
  { url: 'http://localhost:3000/privacy', name: 'privacy.png' },
  { url: 'http://localhost:3000/terms', name: 'terms.png' },
  { url: 'http://localhost:3000/404', name: '404.png' },
  { url: 'http://localhost:3000/maintenance', name: 'maintenance.png' }
];

const outputDir = path.resolve('project-docs/qa/screenshots');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

(async () => {
  console.log('Launching Google Chrome for visual QA review...');
  const browser = await chromium.launch({
    headless: true,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    colorScheme: 'dark'
  });

  const page = await context.newPage();

  for (const item of pages) {
    console.log(`Navigating to ${item.url}...`);
    try {
      await page.goto(item.url, { waitUntil: 'load', timeout: 30000 });
      await page.waitForTimeout(2500); // Allow animations & layout hydration to complete
      const outputPath = path.join(outputDir, item.name);
      await page.screenshot({ path: outputPath, fullPage: true });
      console.log(`✔ Captured: ${item.name}`);
    } catch (err) {
      console.error(`❌ Failed to capture ${item.name}:`, err.message);
    }
  }

  await browser.close();
  console.log('All QA screenshots captured successfully.');
})();
