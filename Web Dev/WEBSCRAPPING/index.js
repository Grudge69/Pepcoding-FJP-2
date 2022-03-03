let request = require("request");
// data extract
let jsdom = require("jsdom");
let { JSDOM } = jsdom;
let url =
  "https://www.espncricinfo.com/series/afghanistan-in-bangladesh-2021-22-1299826/bangladesh-vs-afghanistan-1st-t20i-1299832/match-report";
//callback -> request -> data get
request(url, cb);
// ch is called by your request
// html -> data
function cb(err, httpResponse, html) {
  if (err) {
    console.log(err);
  } else if (httpResponse.statusCode == 404) {
    console.log("Page not found");
  } else {
    parseHTML(html);
  }
}

function parseHTML(html) {
  let dom = new JSDOM(html);
  let MyDocument = dom.window.document;
  // querySelector, textContent, getAttribute
  let playerOfTheMatchTag = MyDocument.querySelector(".playerofthematch-name");
  let playerOfTheMatch = playerOfTheMatchTag.textContent;
  console.log(playerOfTheMatch);
}
