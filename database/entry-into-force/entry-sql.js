const fs = require("fs");
let fileContents = 'INSERT INTO status (country_id, treaty_id, status)\nVALUES ';
let status = fs.readFileSync("./status-json.txt", {
  encoding: "utf8",
  flag: "r",
});
status = JSON.parse(status);
console.log(status.length);
status.forEach((elem, index, array) => { 
  let record = `(${elem.country_id}, ${elem.treaty_id}, ${elem.status}),\n`;
  if (index === array.length - 1) {
    record = `(${elem.country_id}, ${elem.treaty_id}, ${elem.status});`;
  }
  fileContents += record;
 });

console.log(fileContents);
fs.writeFile('./seeds/status.sql', fileContents, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('COMPLETED!')
});