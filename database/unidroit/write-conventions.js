const fs = require("fs");
let countries = fs.readFileSync("./all-countries-json.txt", {
  encoding: "utf8",
  flag: "r",
});
let conventions = fs.readFileSync("./raw-unidroit-treaties.txt", {
  encoding: "utf8",
  flag: "r",
});

conventions = JSON.parse(conventions);
console.log(conventions)
 conventions  = conventions.map((elem, index) => {
  let objConv = {};
  objConv.id = index + 1;
  objConv.name = elem.name_of_convention.name;
  objConv.city = elem.name_of_convention.city;
  objConv.status = elem.name_of_convention.status;
  objConv.topic = elem.name_of_convention.topic;
  objConv.concluded = elem.name_of_convention.signed;
  objConv.entered_into_force = elem.name_of_convention.entered_into_force;
  objConv.participants = elem.participants;
  return objConv;
})
conventions = JSON.stringify(conventions);
  fs.writeFile('unidroit-treaties-json.txt', conventions, function (err) {
    if (err) {
      console.log(err);
      return;
    }
  });

console.log(conventions);

