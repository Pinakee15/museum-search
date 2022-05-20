const fs = require("../../db/Museum_Visitors.csv");
const { parse } = require("csv-parse");


fs.createReadStream(".")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (row) {
    console.log(row);
  })