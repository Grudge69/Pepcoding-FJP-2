let request = require("request");
let jsdom = require("jsdom");
let { JSDOM } = jsdom;

//file system module
let fs = require("fs");

let url =
  "https://www.espncricinfo.com/series/ipl-2021-1249214/chennai-super-kings-vs-kolkata-knight-riders-final-1254117/full-scorecard";
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

  // 1. GET WINNING & LOSING TEAM NAME

  let teams = MyDocument.querySelectorAll(".teams");
  let currMatchTeam = teams[teams.length - 1];
  let winningTeamName = currMatchTeam.querySelector(".team .name").textContent;
  //   console.log(winningTeamName);
  let losingTeam = currMatchTeam.querySelector(
    ".team.team-gray .name"
  ).textContent;
  //   console.log(losingTeam);

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

    if (winningTeamName == teamName) {
      //SAVE BATSMAN TABLE IN HTML FOR EASY VIEWING
      //   let batsmanTable = singleInning.querySelector(".table.batsman").innerHTML;
      //   fs.writeFileSync("batsman_CSK_KKR.html", batsmanTable);
      fs.writeFileSync(
        winningTeamName + " batsman stats.txt",
        `NAME\t\t\t\tRUNS\t\t\tBALLS\t\tMAIDENS\t\t\t\t4s\t\t\t\t6s\t\t\tSTRIKE RATE\t\t\t\tOPPONENT TEAM\n`
      );
      let rows = singleInning.querySelectorAll(".table.batsman tbody tr");
      for (let i = 0; i < rows.length; i++) {
        let tdlength = rows[i].querySelectorAll("td").length;
        // rmove commentry columns
        if (tdlength > 4) {
          // valid row -> belong kisi player ko
          let batsmanRows = rows[i];
          let tds = batsmanRows.querySelectorAll("td");
          let name = tds[0].textContent.trim();
          let runs = tds[2].textContent.trim();
          let balls = tds[3].textContent.trim();
          let maidens = tds[4].textContent.trim();
          let fours = tds[5].textContent.trim();
          let sixes = tds[6].textContent.trim();
          let strikerate = tds[7].textContent.trim();
          let opponentTeam = losingTeam;
          // console.log(name);
          fs.appendFileSync(
            winningTeamName + " batsman stats.txt",
            `\n${name}\t\t${runs}\t\t\t\t${balls}\t\t\t${maidens}\t\t\t\t\t${fours}\t\t\t\t${sixes}\t\t\t${strikerate}\t\t\t${opponentTeam}\t`
          );
        }
      }

      console.log("````````````````````````````````````````````````````");
    }
  }
}
