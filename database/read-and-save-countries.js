const fs = require('fs')

fs.readFile('./list-of-countries.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  let textFromFile = data;
  let noDigitsText  = textFromFile.replace(/\d/g, '').toString();
  let onlyAlpCharText = noDigitsText.replace(/[\t\n]/g, '');
  let arrayFromonlyAlpCharText = onlyAlpCharText.split(',');
  let arrayOfCountries = arrayFromonlyAlpCharText.filter(elem => elem !== '');
  let arrayOfCountriesJSON = arrayOfCountries.map((elem, index) => {
    return {id: index + 1, name: elem}
  })
  arrayOfCountriesJSON = JSON.stringify(arrayOfCountriesJSON);
  console.log(arrayOfCountriesJSON);
  fs.writeFile('all-countries-json.txt', arrayOfCountriesJSON, function (err) {
    if (err) return console.log(err);
  });

})
