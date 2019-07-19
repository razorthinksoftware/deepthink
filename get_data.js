const GoogleSpreadsheet = require("google-spreadsheet");
const  async = require("async");
const  fs = require("fs");


const doc = new GoogleSpreadsheet("1MVLQO341_zALN4gmkMLMwiC5_ZamJ7DhGiHACmzCpJA");
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
            );

            // Using the first sheet
            sheet = info.worksheets[0];
            console.log(
                "sheet 1: " + sheet.title + " " + sheet.rowCount + "x" + sheet.colCount
            );
            step()
        })
    }, function getStuff(step) {
        sheet.getRows(
            {
                offset: 1,
                limit: 1000,
                orderby: "col1"
            }, function (err, rows) {
                console.log("Read " + rows.length + " rows");
                // Clean posts.yml
                fs.truncate("./_data/posts.yml", 0, () => {
                });
                // Save rows as items in the YAML file
                for (let row of rows) {
                    fs.appendFile(
                        "./_posts/" + row.date + '-' + row.title.replace(/[^a-zA-Z ]/g, "").replace(/ {1,}/g,"-").toLowerCase() + '.md',
                        "---\nlayout: post\ndate: " +
                        '"' + row.date + '"' +
                        "\n" +
                        "author: " +
                        '"' + row.author + '"' +
                        "\n" +
                        "link: " +
                        '"' + row.url + '"' +
                        "\n" +
                        "category: " +
                        '"' + row.type + '"' +
                        "\n" +
                        "title: " +
                        '"' + row.title.replace(/"/g,"'") + '"' +
                        "\n" +
                        "tags: " +
                        '"' + row.tags + '"' +
                        "\n" +
                        "comments: true"+
                        "\n---\n" + row.content,
                        err => {
                        }
                    )
                }
            }
        )
    }
]);