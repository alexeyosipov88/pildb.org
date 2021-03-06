const fs = require("fs");
let fileContents = 'INSERT INTO treaties_by_topics (topic_id, treaty_id)\nVALUES ';
let treaties = fs.readFileSync("./un-treaties-json.txt", {
  encoding: "utf8",
  flag: "r",
});
treaties = JSON.parse(treaties);
console.log(treaties);
treaties.forEach((elem, index, array) => { 
  let record = `(${elem.topic_id}, ${elem.id}),\n`;
  if (index === array.length - 1) {
    record = `(${elem.topic_id}, ${elem.id});`;
  }
  fileContents += record;
 });

console.log(fileContents)
fs.writeFile('./seeds/un-topics-treatiess.sql', fileContents, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('COMPLETED!')
});