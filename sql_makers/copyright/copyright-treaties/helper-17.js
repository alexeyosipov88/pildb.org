const fs = require("fs");
let data = fs.readFileSync("./raw-17.txt", {
  encoding: "utf8",
  flag: "r",
});

data = data.replace(/(?<=\t)Patent Law Treaty/ig, '');
data = data.replace(/declaration of continued application/ig, 'Application');
data = data.replace(/declaration\/notification of succession/ig, 'Succession');

data = data.replace(/(\w+): (\w+ \d+, \d+)/ig, '$2\t$1');
data = data.replace(/\t+/g, '\t');
data = data.split('\n');
data = data.filter(elem => elem !== '');
data = data.join('\n?');
console.log(data);
fs.writeFileSync("17.txt", data);
