let request = require("request");
let jsdom = require("jsdom");
let { JSDOM } = jsdom;

//file system module
let fs = require("fs");

let url =
  "https://www.espncricinfo.com/series/afghanistan-in-bangladesh-2021-22-1299826/bangladesh-vs-afghanistan-1st-t20i-1299832/full-scorecard";
request(url, cb);

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

  // 1. GET WINNING TEAM NAME

  let teams = MyDocument.querySelectorAll(".teams");
  let currMatchTeam = teams[teams.length - 1];
  let winningTeamName = currMatchTeam.querySelector(".team .name").textContent;

  // 2. FILTERING FROM SCORECARD OF INDIVIDUAL TEAM

  let bothInningHtml = MyDocument.querySelectorAll(".Collapsible"); // GET BOTH TEAMS COLLAPSIBLE TABLE CONTAINING runs, wicket, etc

  //from that getting the winning team's data
  for (let i = 0; i < bothInningHtml.length; i++) {
    let singleInning = bothInningHtml[i];
    let teamNameHtml = singleInning.querySelector("h5");

    // name correct -> name compare ->
    let teamNameRaw = teamNameHtml.textContent;
    let teamNameArr = teamNameRaw.split("INNINGS");
    let teamName = teamNameArr[0].trim();

    /////////// CODE TO SAVE TABLE OF BOWLERS IN HTML FILE //////////////////
    // singleInnings[i] -> bowlers task complete
    //   console.log("Winning team is " + teamName);
    // code -> single inning
    //   let bowlerScorecard = singleInning.querySelector(".table.bowler");
    //   let bowlersHTML = bowlerScorecard.innerHTML;
    //   fs.writeFileSync("bowlers.html", bowlersHTML);
    if (winningTeamName == teamName) {
      //SAVE BATSMAN TABLE IN HTML FOR EASY VIEWING
      //   let batsmanTable = singleInning.querySelector(".table.batsman").innerHTML;
      //   fs.writeFileSync("batsman.html", batsmanTable);
      let rows = singleInning.querySelectorAll(".table.batsman tbody tr");
      for (let i = 0; i < rows.length; i++) {
        let tdlength = rows[i].querySelectorAll("td").length;
        // rmove commentry columns
        if (tdlength > 4) {
          // valid row -> belong kisi player ko
          let batsmanRows = rows[i];
          let tds = batsmanRows.querySelectorAll("td");
          let name = tds[0].textContent;
          // console.log(name);

          let href = tds[0].querySelector("a").getAttribute("href");
          let fullLink = "https://www.espncricinfo.com/" + href;
          console.log(fullLink);
          printBirthday(fullLink, name);
        }
      }

      console.log("````````````````````````````````````````````````````");
    }
  }
}

function printBirthday(fullLink, name) {
  request(fullLink, function cb(err, httpResponse, html) {
    if (err) {
      console.log(err);
    } else if (httpResponse.statusCode == 404) {
      console.log("Page not found");
    } else {
      // console.log(html);
      // console.log("Html data recieved for " + name);
      parseBirthdayHTML(html, name);
    }
  });
}

function parseBirthdayHTML(html, name) {
  let dom = new JSDOM(html);
  let MyDocument = dom.window.document;
  let allDataMetrics = MyDocument.querySelectorAll(
    ".player-card-description.gray-900"
  );
  let bornOn = allDataMetrics[1].textContent;
  console.log(name + " was born on " + bornOn);
}
