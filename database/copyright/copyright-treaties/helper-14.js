const fs = require("fs");
let data = fs.readFileSync("./raw-14.txt", {
  encoding: "utf8",
  flag: "r",
});

data = data.replace(/(?<=\t)Paris Convention/ig, '');
data = data.replace(/declaration of continued application/ig, 'Application');
data = data.replace(/declaration\/notification of succession/ig, 'Succession');

data = data.replace(/(\w+): (\w+ \d+, \d+)/ig, '$2\t$1');
data = data.replace(/\t+/g, '\t');
data = data.split('\n');
data = data.filter(elem => elem !== '');
data = data.join('\n?');
console.log(data);
fs.writeFileSync("14.txt", data);
