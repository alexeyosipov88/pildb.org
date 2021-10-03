const fs = require("fs");
let fileContents = 'INSERT INTO treaties_by_topics (topic_id, treaty_id)\nVALUES ';
let treaties = fs.readFileSync("./ICAO-treaties-json.txt", {
  encoding: "utf8",
  flag: "r",
});
treaties = JSON.parse(treaties);
console.log(treaties);
treaties.forEach((elem, index, array) => { 
  let record = `(${elem.topic}, ${elem.id}),\n`;
  if (index === array.length - 1) {
    record = `(${elem.topic}, ${elem.id});`;
  }
  fileContents += record;
 });

console.log(fileContents)
fs.writeFile('./seeds/icao-topics.sql', fileContents, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('COMPLETED!')
});