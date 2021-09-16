const fs = require("fs");
console.log('starting');
let countries = fs.readFileSync("./all-countries-json.txt", {
  encoding: "utf8",
  flag: "r",
});
let conventions = fs.readFileSync("./all-hague-json.txt", {
  encoding: "utf8",
  flag: "r",
});

countries = JSON.parse(countries);
conventions = JSON.parse(conventions);
let civProCountries = conventions[10].participants;
console.log(civProCountries);
let numberOfCountries = civProCountries.length;
let numberOfMatches = 0;
civProCountries.forEach(elem => {
  let firstLetOfCountry = '';
  countryName = elem.country;
  console.log(countryName);
  countryName = countryName.replace(/republic/i, '');
  countryName = countryName.replace(/united/i, '');
  countryName = countryName.replace(/of/i, '');
  countryName = countryName.replace(/north/i, 'n');
  countryName = countryName.replace(/south/i, 's');
  countryName = countryName.replace(/\s/g, '');
  console.log(countryName);
  for(let i = 0; i < 6; i++) {
    if(countryName[i]) {
      firstLetOfCountry += countryName[i];
    }
  }

  countryRegex = new RegExp(`${firstLetOfCountry}`, 'i');
  if(/niger/i.test(countryName)) {
    countryRegex = /^niger$/i;
  }
  if(/dominican/i.test(countryName)) {
    countryRegex = /dominican/i;
  }
  if(/guinea/i.test(countryName)) {
    countryRegex = /^guinea$/i;
  }
  if(/mauritius/i.test(countryName)) {
    countryRegex = /mauritius/i;
  }
  if(/mauritania/i.test(countryName)) {
    countryRegex = /mauritania/i;
  }
  if(/china/i.test(countryName)) {
    countryRegex = /china/i;
  }
  if(/mali/i.test(countryName)) {
    countryRegex = /^mali$/i;
  }
  if(/congo/i.test(countryName)) {
    countryRegex = /Congo-Brazzaville/i;
  }
  if(/korea/i.test(countryName)) {
    countryRegex = /korea/i;
  }
  console.log(countryRegex);

  for(let i = 0; i < countries.length; i++) {
    let tmpCountryName = countries[i].name;
    tmpCountryName = tmpCountryName.replace(/republic/i, '');
    tmpCountryName = tmpCountryName.replace(/united/i, '');
    tmpCountryName = tmpCountryName.replace(/of/i, '');
    tmpCountryName = tmpCountryName.replace(/north/i, 'n');
    tmpCountryName = tmpCountryName.replace(/south/i, 's');
    tmpCountryName = tmpCountryName.replace(/\s/g, '');
    if(/nkorea/i.test(tmpCountryName)) {
      continue;
    }
   
    if(/grenadines/i.test(tmpCountryName) && countryName.length < 8) {
      continue;
    }
    
    if(countryRegex.test(tmpCountryName)) {
      numberOfMatches++;
      console.log(numberOfMatches, numberOfCountries);
      console.log(tmpCountryName, '---------', elem.country);
    }

  }
})
console.log(numberOfCountries, '===', numberOfMatches)

