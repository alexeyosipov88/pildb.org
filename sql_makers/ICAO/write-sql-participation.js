const fs = require("fs");
let fileContents = 'INSERT INTO participation (country_id , treaty_id, signed, bound)\nVALUES ';
let participation = fs.readFileSync("./ICAO-participation-json.txt", {
  encoding: "utf8",
  flag: "r",
});
participation = JSON.parse(participation);
participation = participation.flat();
console.log(participation);
participation.forEach((elem, index, array) => { 
  let signed = elem.signed ? `'${elem.signed}'` : null;
  let bound = elem.bound ? `'${elem.bound}'` : null;
  let record = `(${elem.country_id}, ${elem.treaty_id}, ${signed}, ${bound}),\n`;
  if (index === array.length - 1) {
    record = `(${elem.country_id}, ${elem.treaty_id}, ${signed}, ${bound});`;
  }
  fileContents += record;
 });

console.log(fileContents)
fs.writeFile('./seeds/icao-participation.sql', fileContents, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('COMPLETED!')
});