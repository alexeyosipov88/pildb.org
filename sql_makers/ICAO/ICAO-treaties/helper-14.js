const fs = require("fs");
let data = fs.readFileSync("./raw-14.txt", {
  encoding: "utf8",
  flag: "r",
});
data = data.replace(/\(\d+\)/g, '');
data = data.replace(/\([a-zA-Z][a-zA-Z]?\)/g, '');
data = data.replace(/-/g, '');
data = data.split('\n');
data = data.filter(elem => elem !== '');
data = data.map(elem => {
  return elem + ' \n';
})
data = data.join('?');
console.log(data);
fs.writeFileSync("14.txt", data);
