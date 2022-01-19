const fs = require("fs");
let allTreatiesObject = {};
let hagueParticipation = fs.readFileSync("./hague-participation-json.txt", {
  encoding: "utf8",
  flag: "r",
});
hagueParticipation = JSON.parse(hagueParticipation);
let unParticipation = fs.readFileSync("./un-participation-json.txt", {
  encoding: "utf8",
  flag: "r",
});
unParticipation = JSON.parse(unParticipation);
let unidroitParticipation = fs.readFileSync("./unidroit-participation-json.txt", {
  encoding: "utf8",
  flag: "r",
});
unidroitParticipation = JSON.parse(unidroitParticipation);
let icaoParticipation = fs.readFileSync("./ICAO-participation-json.txt", {
  encoding: "utf8",
  flag: "r",
});
icaoParticipation = JSON.parse(icaoParticipation);
let copyrightParticipation = fs.readFileSync("./copyright-participation-json.txt", {
  encoding: "utf8",
  flag: "r",
});
copyrightParticipation = JSON.parse(copyrightParticipation);
let allParticipation = hagueParticipation.concat(unParticipation).concat(unidroitParticipation).concat(icaoParticipation).concat(copyrightParticipation);
let hagueTreaties = fs.readFileSync("./hague-treaties-json.txt", {
  encoding: "utf8",
  flag: "r",
});
hagueTreaties = JSON.parse(hagueTreaties);
let unTreaties = fs.readFileSync("./un-treaties-json.txt", {
  encoding: "utf8",
  flag: "r",
});
unTreaties = JSON.parse(unTreaties);
let unidroitTreaties = fs.readFileSync("./unidroit-treaties-json.txt", {
  encoding: "utf8",
  flag: "r",
});
unidroitTreaties = JSON.parse(unidroitTreaties);
let icaoTreaties = fs.readFileSync("./ICAO-treaties-json.txt", {
  encoding: "utf8",
  flag: "r",
});
icaoTreaties = JSON.parse(icaoTreaties);
let copyrightTreaties = fs.readFileSync("./copyright-treaties-json.txt", {
  encoding: "utf8",
  flag: "r",
});
copyrightTreaties = JSON.parse(copyrightTreaties);
let allTreaties = hagueTreaties.concat(unTreaties).concat(unidroitTreaties).concat(icaoTreaties).concat(copyrightTreaties);
allTreaties.forEach(elem => {
  allTreatiesObject[elem.id] = elem.status;
})
allParticipation = allParticipation.flat();
allParticipation = allParticipation.map(elem => {
  let status = elem.status;
  let statusOfTreaty = allTreatiesObject[elem.treaty_id];
  if(statusOfTreaty === false) {
    status = false;
  }
  return {
    country_id: elem.country_id,
    treaty_id: elem.treaty_id,
    status: status
   }
})

console.log(allParticipation);
allParticipation = JSON.stringify(allParticipation);

fs.writeFile('status-json.txt', allParticipation, function (err) {
  if (err) {
    console.log(err);
    return;
  }
});