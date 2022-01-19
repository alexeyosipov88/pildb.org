const fs = require("fs");
let data = fs.readFileSync("./raw-4.txt", {
  encoding: "utf8",
  flag: "r",
});
data = data.split('\n');
data = data.filter(elem => elem !== '');
data = data.map(elem => {
  return elem + ' \n';
})
data = data.join('?');
data = data.replace(/\(\d+\)/g, '');
console.log(data);
fs.writeFileSync("4.txt", data);
