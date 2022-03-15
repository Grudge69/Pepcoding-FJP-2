//siyareh586@siberpay.com
//123456
//name surname

let puppeteer = require("puppeteer");
console.log("Before");
async function fn() {
  // browser launch -> browser launch
  // return -> browser representative object
  let browser = await puppeteer.launch({
    // to make browser visible or not
    headless: false,
    defaultViewport: null,
    // maximized mode open
    args: ["--start-maximized"],
  });
  // new Tab
  let page = await browser.newPage();
  // goto-> open hackerrank login
  await page.goto("https://www.hackerrank.com/auth/login");
  //wait for username selector to appear
  await page.waitForSelector("input[name='username']");
  //enter username
  await page.type('input[name="username"]', "siyareh586@siberpay.com", {
    delay: 200,
  });
  //wait for password selector to appear
  await page.waitForSelector("input[name='password']");
  //enter password
  await page.type('input[name="password"]', "123456", {
    delay: 200,
  });
  //click login
  await page.click('button[type="submit"]');
}
fn();
console.log("After");
// https://www.hackerrank.com/auth/login
//  2. https://flaviocopes.com/puppeteer/
