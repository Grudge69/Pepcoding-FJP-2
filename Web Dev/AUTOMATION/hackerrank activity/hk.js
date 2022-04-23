const puppeteer = require("puppeteer");

let email = "siyareh586@siberpay.com";
let password = "123456";

let page;

const hackerRankLink = "https://www.hackerrank.com/auth/login";
//open browser
let browserWillBeOpenedPromise = puppeteer.launch({
  headless: false,
  defaultViewport: null,
  args: ["--start-maximized"],
});

//after browser is opened
browserWillBeOpenedPromise
  .then(function (browserInstance) {
    //open new tab
    let newTabPromise = browserInstance.newPage();
    return newTabPromise;
  })
  .then(function (newTab) {
    //go to hacker rank login
    page = newTab;
    let websiteOpenPromise = page.goto(hackerRankLink);
    return websiteOpenPromise;
  })
  .then(function () {
    //type email
    let emailWillBeTypedPromise = page.type("input[id='input-1']", email, {
      delay: 100,
    });
    return emailWillBeTypedPromise;
  })
  .then(function () {
    //type password
    let passwordWillBeTypedPromise = page.type(
      "input[id='input-2']",
      password,
      {
        delay: 100,
      }
    );
    return passwordWillBeTypedPromise;
  })
  .then(function () {
    //click login button
    let loginButtonClickPromise = page.click(
      'button[data-analytics="LoginPassword"]',
      { delay: 50 }
    );
    return loginButtonClickPromise;
  })
  .then(function () {
    //click ALGORITHMS section
    //waitAndClick used because the page is changed and we have to wait for the page to be updated as page right now is LOGIN PAGE
    let algoSectionClickedPromise = waitAndClick(
      '.topic-card a[data-attr1="algorithms"]',
      page
    );
    return algoSectionClickedPromise;
  })
  .then(function () {
    console.log("algo section clicked");
  });

//waits for the page to be updated and then click a selector
function waitAndClick(selector, currPage) {
  return new Promise(function (resolve, reject) {
    let waitForModalPromise = currPage.waitForSelector(selector);

    waitForModalPromise
      .then(function () {
        let clickTheModal = currPage.click(selector);
        return clickTheModal;
      })
      //if clicked successfully
      .then(function () {
        resolve();
      })
      //click unsuccessful
      .catch(function () {
        reject();
      });
  });
}
