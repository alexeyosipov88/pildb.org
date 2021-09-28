const fs = require("fs");
let data = fs.readFileSync("./raw-1.txt", {
  encoding: "utf8",
  flag: "r",
});
data = data.split('?');
data = data.map(elem => {
  elem = elem.replace(/(0)\s*(\d+\/\d+\/\d+)/, '$2 R')
  return elem;
} )
let firstFile = data.join('?');
data = fs.readFileSync("./raw-2.txt", {
  encoding: "utf8",
  flag: "r",
});
data = data.split('?');
data = data.map(elem => {
  elem = elem.replace(/(0)\s*(\d+\/\d+\/\d+)/, '$2 R')
  return elem;
} )
let secondFile = data.join('?');


fs.writeFileSync("1.txt", firstFile);
fs.writeFileSync("2.txt", secondFile);
console.log('REWRITTEN FILE 1 and 2')

