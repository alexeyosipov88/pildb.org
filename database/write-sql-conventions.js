const fs = require("fs");
let fileContents = 'INSERT INTO treaties (id, name, city, concluded, entry_into_force, status)\nVALUES ';
let conventions = fs.readFileSync("./all-conventions-json.txt", {
  encoding: "utf8",
  flag: "r",
});
conventions = JSON.parse(conventions);
console.log(conventions);
conventions.forEach((elem, index, array) => { 
 let concluded = elem.concluded ? `"${elem.concluded}"` : null;
 let entered_into_force = elem.entered_into_force ? `"${elem.entered_into_force}"` : null;
 let record = `(${elem.id}, "${elem.name}", "${elem.city}", ${concluded}, ${entered_into_force}, ${elem.status})\n`;
 fileContents += index !== array.length - 1 ? record : record + ';'
});

fs.writeFile('./seeds/all-treaties.sql', fileContents, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('COMPLETED!')
});


// id SERIAL PRIMARY KEY NOT NULL,
//   name VARCHAR(255) NOT NULL,
//   city VARCHAR(255) NOT NULL,
//   concluded DATE NOT NULL,
//   entry_into_force DATE,
//   status false,
//   full_text TEXT 