var GoogleSpreadsheet = require("google-spreadsheet");
var async = require("async");
var fs = require("fs");



const doc = new GoogleSpreadsheet(
// Using our example spreadsheet: https://docs.google.com/spreadsheets/d/1o_NWrDsVNSVU1jViexKQi08aI6h76fXrMIcvbT9faoM/edit#gid=0
  "1MVLQO341_zALN4gmkMLMwiC5_ZamJ7DhGiHACmzCpJA"
);
let sheet;


async.series([
    // function setAuth(step) {
  // const creds = '';//require("./newproject-20015697d7f6.json");
  // doc.useServiceAccountAuth(creds, step);
// },
function getInfoAndWorksheets(step) {
  doc.getInfo((err, info) => {
    console.log(
      "Loaded spreadsheet: " + info.title + " by " + info.author.email
    )

    // Using the first sheet
    sheet = info.worksheets[0];
    console.log(
      "sheet 1: " + sheet.title + " " + sheet.rowCount + "x" + sheet.colCount
    )
    step()
  })
}, function getStuff(step) {
  sheet.getRows(
    {
      offset: 1,
      limit: 20,
      orderby: "col1"
    }, function(err, rows) {
      console.log("Read " + rows.length + " rows");
      // Clean posts.yml
      fs.truncate("./_data/posts.yml", 0, () => {
      })
      // Save rows as items in the YAML file
      for (let row of rows) {
        fs.appendFile(
          "./_data/posts.yml",
          "- date: " +
          row.date +
          "\n\x20\x20" +
          "author: " +
          row.author +
          "\n\x20\x20" +
            "url: " +
          row.url +
          "\n\x20\x20" +
            "type: " +
          row.type +
          "\n\x20\x20" +
          "title: " +
          row.title +
          "\n\x20\x20" +
          "content: " +
          '"'+row.content +'"'+
            "\n\x20\x20" +
            "tags: " +
            row.tags +
          "\n\x20\x20" +
          "\n\n",
          err => {
          }
        )
      }
    }
  )
}
])