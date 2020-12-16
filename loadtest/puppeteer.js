const puppeteer = require('puppeteer');

(async() => {

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto('https://matomo-loadtest.netlify.app/');
await page.waitForNavigation({
  waitUntil: 'networkidle0',
});
console.log("success");
browser.close();

})();
