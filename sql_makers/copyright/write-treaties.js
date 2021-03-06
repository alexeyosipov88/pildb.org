const fs = require("fs");
let countries = fs.readFileSync("./all-countries-json.txt", {
  encoding: "utf8",
  flag: "r",
});
let conventions = fs.readFileSync("./raw-copyright-treaties.txt", {
  encoding: "utf8",
  flag: "r",
});

conventions = JSON.parse(conventions);
console.log(conventions)
 conventions  = conventions.map((elem, index) => {
  let objConv = {};
  objConv.id = index + 94;
  objConv.name = elem.name_of_convention.name;
  objConv.city = elem.name_of_convention.city;
  objConv.status = elem.name_of_convention.status;
  objConv.topic = 9;
  objConv.concluded = elem.name_of_convention.signed;
  objConv.entered_into_force = elem.name_of_convention.entered_into_force;
  objConv.participants = elem.participants;
  return objConv;
})
console.log(conventions);
conventions = JSON.stringify(conventions);
  fs.writeFile('copyright-treaties-json.txt', conventions, function (err) {
    if (err) {
      console.log(err);
      return;
    }
  });


