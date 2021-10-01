const fs = require("fs");
let fileContents = "INSERT INTO countries (id, name)\nVALUES ";
let countries = fs.readFileSync("./all-countries-json.txt", {
  encoding: "utf8",
  flag: "r",
});
countries = JSON.parse(countries);
countries.forEach((elem, index, array) => {
  if (elem.name.includes("'")) {
    elem.name = elem.name.replace(/'/g, "''");
  };
  let record = `(${elem.id}, '${elem.name}'),\n`;
  if (index === array.length - 1) {
    record = `(${elem.id}, '${elem.name}');`;
  }
  fileContents += record;
});

fs.writeFile("./seeds/all-countries.sql", fileContents, function (err) {
  if (err) {
    console.log(err);
    return;
  }
});

console.log(fileContents);

// INSERT INTO users ( name, email, password, phone_number, city, province)
// VALUES ( 'Nathaniel Fisher Jr.', 'nate2005@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',  6471111111, 'Toronto', 'Ontatio'),
// ( 'Vincent Vega', 'vincent94@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 2361111111, 'Vancouver', 'British Columbia'),
// ( 'Guy Woodhouse', 'guywood68@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 8251111111, 'Edmonton', 'Albera'),
// ( 'Lester Burnham', 'lester99@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQ VmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 8671111111, 'Yukon', 'Whitehorse');
