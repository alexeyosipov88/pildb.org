const fs = require("fs");
let fileContents = "INSERT INTO topics (id, name)\nVALUES ";
let topics = fs.readFileSync("./topics-json.txt", {
  encoding: "utf8",
  flag: "r",
});
topics = JSON.parse(topics);
topics.forEach((elem, index, array) => {
  if (elem.name.includes("'")) {
    elem.name = elem.name.replace(/'/g, "''");
  };
  let record = `(${elem.id}, '${elem.name}'),\n`;
  if (index === array.length - 1) {
    record = `(${elem.id}, '${elem.name}');`;
  }
  fileContents += record;
});

fs.writeFile("./topics.sql", fileContents, function (err) {
  if (err) {
    console.log(err);
    return;
  }
});

console.log(fileContents);
