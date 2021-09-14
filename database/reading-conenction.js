const fs = require('fs')

fs.readFile('./hague/2 civil procedure.txt', 'utf8' , (err, data) => {
  const changeDate = (original) => {
    if(!original) {
      return undefined;
    }
    let romanArabicObj = {
      'I': '01',
      'II': '02',
      'III': '03',
      'IV': '04',
      'V': '05',
      'VI': '06',
      'VII': '07',
      'VIII': '08',
      'IX': '09',
      'X': '10',
      'XI': '11',
      'XII': '12'
    }
    let regex = /[IVX]/g;
    let romanNum = original.match(regex).join('');
    let arabicNum = romanArabicObj[romanNum];
    original = original.replace(romanNum, arabicNum);
    original = original.split('-');
    if (original[0].length < 2) {
      original[0] = '0' + original[0];
    }
    let first = original[0];
    let last = original[2];
    original[2] = first;
    original[0] = last;
    return original.join('-');
  }
  if (err) {
    console.error(err);
    return;
  }
  let cleanBlocks = data.replace(/[\r\n]/g, '').replace(/\t/g, ' ');
  let arrayOfBlocks = cleanBlocks.split('?');
  arrayOfBlocks = arrayOfBlocks.filter(element => /\w/.test(element));
  let nameOfConvention = arrayOfBlocks.shift();
  arrayOfBlocks = arrayOfBlocks.map(element => 
    {
      element = element.trim().split('');
      for(let i = 0; i < element.length; i++) {
        if(/\d/.test(element[i])) {
          element[i-1] = `|`;
          for(let j = i; j < element.length; j++) {
            if(/\s/.test(element[j])) {
              element[j] = `|`;
            }
          }
          break;
        }
      }
      element = element.join('').split('|');
      let country = element[0].trim();
      let type = element[element.length-1];
      let signedDate;
      let boundDate;

      if(element.length > 3) {
        signedDate = element[1];
        boundDate = element[2];
      } else {
        boundDate = element[1];
      }
      let hagueObj = {
        country: country,
        signed: changeDate(signedDate),
        bound: changeDate(boundDate),
        type: type
      }
      return hagueObj;
    }
    );
    const nameOfConventionObject = (convention) => {
      let result = {};
      convention = convention.split(',');
      result.id = Number(convention[0].trim());
      result.name = convention[1].trim();
      result.signed = changeDate(convention[2].trim());
      return result
    } 
    
    nameOfConvention = nameOfConventionObject(nameOfConvention);
    let result = {
      'name_of_convention' : nameOfConvention,
      participants: arrayOfBlocks
    }
    console.log(result);

})
