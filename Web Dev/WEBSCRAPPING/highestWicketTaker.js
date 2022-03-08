let request = require("request");
// data extract
let jsdom = require("jsdom"); //jsdom is used to read HTML
let { JSDOM } = jsdom;

//file system module
let fs = require("fs");

let url =
  "https://www.espncricinfo.com/series/afghanistan-in-bangladesh-2021-22-1299826/bangladesh-vs-afghanistan-1st-t20i-1299832/full-scorecard";
//callback -> request -> data get
request(url, cb); //get HTML from url
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

  // 1. GET WINNING TEAM
  // get all the teams list
  let teams = MyDocument.querySelectorAll(".teams");
  // last element of the array has current match's teams list
  let currMatchTeam = teams[teams.length - 1];
  // the 1st element with .team class is winner team
  let winningTeamName = currMatchTeam.querySelector(".team .name").textContent;
  // console.log("Winning Team : " + winningTeamName);

  // 2. FILTERING FROM SCORECARD OF INDIVIDUAL TEAM

  // all collapsibles -> team -> team details
  let bothInningHtml = MyDocument.querySelectorAll(".Collapsible"); // GET BOTH TEAMS COLLAPSIBLE TABLE CONTAINING runs, wicket, etc

  //from that getting the winning team's data
  for (let i = 0; i < bothInningHtml.length; i++) {
    let singleInning = bothInningHtml[i]; // 1 inning ke andar ka HTML
    // team name get
    let teamNameHtml = singleInning.querySelector("h5");
    // store the collapsible tables html in separate .html files
    // fs.writeFileSync(`inning${i + 1}.html`, singleInning.innerHTML);

    // name correct -> name compare ->
    let teamNameRaw = teamNameHtml.textContent;
    let teamNameArr = teamNameRaw.split("INNINGS");
    let teamName = teamNameArr[0].trim();
    if (winningTeamName != teamName) {
      // at the time BAN is batting AFG's bowler scorecard is shown and vice-versa

      // singleInnings[i] -> bowlers task complete
      // console.log("Winnning team is " + finalTeamName);
      // code -> single inning
      let rows = singleInning.querySelectorAll(".table.bowler tbody tr");
      // -> jo rows belong karti kisko -> bowler
      // loop -> tr bolwers -> use
      let maxWickets = 0;
      let maxWicketTaker;
      for (let i = 0; i < rows.length; i++) {
        let tdlength = rows[i].querySelectorAll("td").length;
        // rmove commentry columns
        if (tdlength > 1) {
          // valid row -> belong kisi player ko
          let bowlerRows = rows[i];
          let tds = bowlerRows.querySelectorAll("td");
          let name = tds[0].textContent;
          let wickets = tds[4].textContent;
          console.log(name + " " + wickets);
          // compare(get highest wicket taker and name)
          if (maxWickets < parseInt(wickets)) {
            maxWickets = parseInt(wickets);
            maxWicketTaker = name;
          }
        }
      }

      console.log(
        "Highest wicket taker: " +
          maxWicketTaker +
          " with " +
          maxWickets +
          " wickets"
      );
    }
  }
}
