const fs = require("fs");
let fileContents =
  "INSERT INTO treaties (id, name, city, concluded, entered_into_force, status)\nVALUES ";
let conventions = fs.readFileSync("./un-treaties-json.txt", {
  encoding: "utf8",
  flag: "r",
});
conventions = JSON.parse(conventions);
console.log(conventions);
conventions.forEach((elem, index, array) => {
  if (elem.name.includes("'")) {
    elem.name = elem.name.replace(/'/g, "''");
  }
  let concluded = elem.concluded ? `'${elem.concluded}'` : null;
  let entered_into_force = elem.entered_into_force
    ? `'${elem.entered_into_force}'`
    : null;
  let record = `(${elem.id}, '${elem.name}', '${elem.city}', ${concluded}, ${entered_into_force}, ${elem.status}),\n`;
  if (index === array.length - 1) {
    record = `(${elem.id}, '${elem.name}', '${elem.city}', ${concluded}, ${entered_into_force}, ${elem.status});`;
  }
  fileContents += record;
});

fs.writeFile("./seeds/un-treaties.sql", fileContents, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(fileContents);
  console.log("COMPLETED!");
});

