let puppeteer = require("puppeteer");

console.log("before");
async function fn() {
  // browser launch
  // return -> browser representative object
  let browser = await puppeteer.launch({
    // to make browser visible or not
    headless: false,
    // fit the page correctly in screen
    defaultViewport: null,
    // maximized mode open
    args: ["--start-maximized"],
  });
  // new tab
  let page = await browser.newPage();
  // goto -> open google.com
  await page.goto("https://google.com");
  // type "pepcoding" in search box(search of google is selected from inspecting the page and getting "input[title="Search"]" identifier)
  await page.type('input[title="Search"]', "pepcoding", { delay: 200 });
  await page.keyboard.press("Enter");
}
fn();
console.log("after");
