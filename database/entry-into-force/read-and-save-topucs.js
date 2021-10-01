const fs = require("fs");

let topics = fs.readFileSync("./topics.md", {
  encoding: "utf8",
  flag: "r",
});
topics = topics.split('#').filter(elem => elem != '');
topics = topics.map((elem, index) => {
let result = {};
elem = elem.trim().replace(/\n/);
result.id = index + 1;
result.name = elem;
return result;
})

console.log(topics);
topics = JSON.stringify(topics);
fs.writeFile('topics-json.txt', topics, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(topics, 'COMPLETED!')
});