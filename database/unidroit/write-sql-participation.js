const fs = require("fs");
let fileContents = 'INSERT INTO participation (country_id , treaty_id, signed, bound, status)\nVALUES ';
let participation = fs.readFileSync("./unidroit-participation-json.txt", {
  encoding: "utf8",
  flag: "r",
});
participation = JSON.parse(participation);
participation = participation.flat();
console.log(participation);
participation.forEach((elem, index, array) => { 
  let signed = elem.signed ? `'${elem.signed}'` : null;
  let bound = elem.bound ? `'${elem.bound}'` : null;
  let record = `(${elem.country_id}, ${elem.treaty_id}, ${signed}, ${bound}, ${elem.status}),\n`;
  if (index === array.length - 1) {
    record = `(${elem.country_id}, ${elem.treaty_id}, ${signed}, ${bound}, ${elem.status});`;
  }
  fileContents += record;
 });

console.log(fileContents)
fs.writeFile('./seeds/all-participation.sql', fileContents, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('COMPLETED!')
});