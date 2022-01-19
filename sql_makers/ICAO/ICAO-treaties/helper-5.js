const fs = require("fs");
let data = fs.readFileSync("./raw-5.txt", {
  encoding: "utf8",
  flag: "r",
});
data = data.replace(/\([a-zA-Z]\)/g, '');
data = data.split('\n');
data = data.filter(elem => elem !== '');
data = data.map(elem => {
  return elem + ' \n';
})
data = data.join('?');
data = data.replace(/\(\d+\)/g, '');
console.log(data);
fs.writeFileSync("5.txt", data);
