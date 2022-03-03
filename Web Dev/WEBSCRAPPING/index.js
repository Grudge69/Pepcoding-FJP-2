let request = require("request");
// data extract
let jsdom = require("jsdom");
let { JSDOM } = jsdom;

//file system module
let fs = require("fs");

let url =
  "https://www.espncricinfo.com/series/afghanistan-in-bangladesh-2021-22-1299826/bangladesh-vs-afghanistan-1st-t20i-1299832/full-scorecard";
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
  // querySelector -> gives 1st result
  // querySelectorAll -> multiple array
  // textContent, getAttribute

  //PLAYER OF THE MATCH
  // let playerOfTheMatchTag = MyDocument.querySelector(".playerofthematch-name");
  // let playerOfTheMatch = playerOfTheMatchTag.textContent;
  // console.log(playerOfTheMatch);

  // WINNING TEAM
  // get all the teams list
  let teams = MyDocument.querySelectorAll(".teams");
  // last element of the array has current match's teams list
  let currMatchTeam = teams[teams.length - 1];
  // the 1st element with .team class is winner team
  let winningTeamName = currMatchTeam.querySelector(".team .name").textContent;
  // console.log("Winning Team : " + winningTeamName);

  // all collapsibles -> team -> team details
  let bothInningHtml = MyDocument.querySelectorAll(".Collapsible");

  for (let i = 0; i < bothInningHtml.length; i++) {
    let singleInning = bothInningHtml[i];
    // team name get
    let teamNameHtml = singleInning.querySelector("h5");
    // store the collapsible tables html in separate .html files
    // fs.writeFileSync(`inning${i + 1}.html`, singleInning.innerHTML);

    // name correct -> name compare ->
    let teamNameRaw = teamNameHtml.textContent;
    let teamNameArr = teamNameRaw.split("INNINGS");
    let teamName = teamNameArr[0].trim();
    if (winningTeamName == teamName) {
      // singleInnings[i] -> bowlers task complete
      console.log("Winning team is " + teamName);
      // code -> single inning
    }
  }
}
