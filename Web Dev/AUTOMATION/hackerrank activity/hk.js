const puppeteer = require("puppeteer");

let email = "siyareh586@siberpay.com";
let password = "123456";

const codeFile = require("./code");//import answer for codes

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
    //check warmup box
    let clickWarmupPromise = waitAndClick("input[value='warmup']", page);
    return clickWarmupPromise;
  })
  .then(function () {
    //questions taken except the first one
    let allChallengesPromise = page.$$(
      ".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled",
      { delay: 50 }
    );
    return allChallengesPromise;
  })
  .then(function (questions) {
    // solving first question
    // console.log("No of questions", questions.length)

    let questionWillBeSolvedPromise = questionSolver(page, questions[0], codeFile.answers[0]);
    return questionWillBeSolvedPromise;
  })


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

function questionSolver(page, question, answer) {
  return new Promise(function (resolve, reject) {
    let questionWillbeClicked = question.click();
    questionWillbeClicked
      .then(function () {
        let selectEditorPromsie = waitAndClick(
          ".monaco-editor.no-user-select .vs",
          page
        );
        return selectEditorPromsie;
      })
      .then(function () {
        return waitAndClick(".checkbox-input", page);
      })
      .then(function () {
        return page.type(".text-area.custominput", answer, { delay: 20 });
      })
      .then(function () {
        let ctrlOnHoldPromise = page.keyboard.down("Control", { delay: 20 });
        return ctrlOnHoldPromise;
      })
      .then(function () {
        let AisPressedPromise = page.keyboard.press("A", { delay: 20 });
        return AisPressedPromise;
      })
      .then(function () {
        let XisPressedPromise = page.keyboard.press("X", { delay: 20 });
        return XisPressedPromise;
      })
      .then(function () {
        let ctrlisReleased = page.keyboard.up("Control", { delay: 20 });
        return ctrlisReleased;
      })
      .then(function () {
        let mainEditorOnFocus = waitAndClick(
          ".monaco-editor.no-user-select .vs",
          page
        );
        return mainEditorOnFocus;
      })
      .then(function () {
        let ctrlOnHoldPromise = page.keyboard.down("Control", { delay: 20 });
        return ctrlOnHoldPromise;
      })
      .then(function () {
        let AisPressedPromise = page.keyboard.press("A", { delay: 20 });
        return AisPressedPromise;
      })
      .then(function () {
        let VisPressedPromise = page.keyboard.press("V", { delay: 20 });
        return VisPressedPromise;
      })
      .then(function () {
        let ctrlisReleased = page.keyboard.up("Control", { delay: 20 });
        return ctrlisReleased;
      })
      .then(function () {
        return page.click(".hr-monaco__run-code", { delay: 20 });
      })
      .catch(function (err) {
        console.log(err);
      });
  });
}
