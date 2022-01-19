const fs = require("fs");
let countries = fs.readFileSync("./all-countries-json.txt", {
  encoding: "utf8",
  flag: "r",
});
let conventions = fs.readFileSync("./ICAO-treaties-json.txt", {
  encoding: "utf8",
  flag: "r",
});
let participantId = 0;
let resultArray = [];
conventions = JSON.parse(conventions);
countries = JSON.parse(countries);
for (let convention of conventions) {
  let conventionArray = [];
  let numberOfCountries = convention.participants.length;
  let numberOfMatches = 0;
  let conventionParticipants = convention.participants;
  conventionParticipants.forEach((elem) => {
    let participantObject = {};
    let firstLetOfCountry = "";
    countryName = elem.country;
    countryName = countryName.replace(/republic/i, "");
    countryName = countryName.replace(/democratic/i, "");
    countryName = countryName.replace(/\W/ig, "");
    countryName = countryName.replace(/united/i, "");
    countryName = countryName.replace(/of/i, "");
    countryName = countryName.replace(/north/i, "n");
    countryName = countryName.replace(/south/i, "s");
    countryName = countryName.replace(/\s/g, "");
    for (let i = 0; i < 6; i++) {
      if (countryName[i]) {
        firstLetOfCountry += countryName[i];
      }
    }

    countryRegex = new RegExp(`${firstLetOfCountry}`, "i");
    if (/^niger$/i.test(countryName)) {
      countryRegex = /^niger$/i;
    }
    if (/^oman$/i.test(countryName)) {
      countryRegex = /^oman$/i;
    }
    if (/nigeria/i.test(countryName)) {
      countryRegex = /nigeria/i;
    }
    if (/dominican/i.test(countryName)) {
      countryRegex = /dominican/i;
    }
    if (/^dominica$/i.test(countryName)) {
      countryRegex = /^dominica$/i;
    }
     if (/^dominica$/i.test(countryName)) {
      countryRegex = /^dominica$/i;
    }
    if (/^sudan$/i.test(countryName)) {
      countryRegex = /^sudan$/i;
    }
    
    if (/^guinea$/i.test(countryName)) {
      countryRegex = /^guinea$/i;
    }
    if (/bissau/i.test(countryName)) {
      countryRegex = /bissau/i;
    }
    // if (/^congo$/i.test(countryName)) {
    //   countryRegex = /^congo$/i;
    // }
    
    if (/^congo/i.test(countryName)) {
      countryRegex = /brazzaville/i;
    }
    if (/iran/i.test(countryName)) {
      countryRegex = /iran/i;
    }
    if (/mauritius/i.test(countryName)) {
      countryRegex = /mauritius/i;
    }
    if (/mauritania/i.test(countryName)) {
      countryRegex = /mauritania/i;
    }
    if (/ivoire/i.test(countryName)) {
      countryRegex = /ivoire/i;
    }
    if (/china/i.test(countryName)) {
      countryRegex = /china/i;
    }
    if (/mali/i.test(countryName)) {
      countryRegex = /^mali$/i;
    }
    
    if (/vincent/i.test(countryName)) {
      countryRegex = /vincent/i;
    }
    if (/kitts/i.test(countryName)) {
      countryRegex = /kitts/i;
    }
    if (/lucia/i.test(countryName)) {
      countryRegex = /lucia/i;
    }
    if (/palestine/i.test(countryName)) {
      countryRegex = /palestine/i;
    }
    if (/syria/i.test(countryName)) {
      countryRegex = /syria/i;
    }
    if (/lao/i.test(countryName)) {
      countryRegex = /lao/i;
    }
    if (/lao/i.test(countryName)) {
      countryRegex = /lao/i;
    }
    
    if (/sever/i.test(countryName)) {
      countryRegex = /nkorea/i;
    }
    if (/korea/i.test(countryName)) {
      countryRegex = /skorea/i;
    }

    for (let i = 0; i < countries.length; i++) {
      let tmpCountryName = countries[i].name;
      tmpCountryName = tmpCountryName.replace(/republic/i, "");
      tmpCountryName = tmpCountryName.replace(/democratic/i, "");
      tmpCountryName = tmpCountryName.replace(/\W/i, "");
      tmpCountryName = tmpCountryName.replace(/united/i, "");
      tmpCountryName = tmpCountryName.replace(/of/i, "");
      tmpCountryName = tmpCountryName.replace(/north/i, "n");
      tmpCountryName = tmpCountryName.replace(/south/i, "s");
      tmpCountryName = tmpCountryName.replace(/\s/g, "");
      // if (/nkorea/i.test(tmpCountryName)) {
      //   continue;
      // }

      if (/grenadines/i.test(tmpCountryName) && countryName.length < 8) {
        continue;
      }

      if (countryRegex.test(tmpCountryName)) {
        participantId++
        let signed = elem.signed ? elem.signed : null;
        let bound = elem.bound ? elem.bound : null;
        let status = elem.bound ? true : false
        participantObject.id = participantId;
        participantObject.country_id = countries[i].id;
        participantObject.treaty_id = convention.id;
        participantObject.signed = signed;
        participantObject.bound = bound;
        participantObject.status = status;
        numberOfMatches++;
        console.log(numberOfMatches, numberOfCountries);
        console.log(countries[i], "---------", elem);
        console.log(countryRegex)
        conventionArray.push(participantObject);
      }
     
    }
    console.log(elem.country, 'CHECK THIS COUNTRY',resultArray.length)
  });
  resultArray.push(conventionArray);
}


resultArray = JSON.stringify(resultArray);
fs.writeFile('ICAO-participation-json.txt', resultArray, function (err) {
  if (err) return console.log(err);
});