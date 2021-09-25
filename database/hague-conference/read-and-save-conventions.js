const fs = require('fs');
const { type } = require('os');
let i = 10;

let arrayOfPromises = [];

for (let i = 2; i < 41; i++) {
  let promise = new Promise((resolve, reject) => {
    fs.readFile(`./hague/${i}.txt`, 'utf8' , (err, data) => {
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
        console.log(err, 'this is error');
        return
      }
      let cleanBlocks = data.replace(/[\r\n]/g, '').replace(/\t/g, ' ');
      let arrayOfBlocks = cleanBlocks.split('?');
      arrayOfBlocks = arrayOfBlocks.filter(element => /\w/.test(element));
      let nameOfConvention = arrayOfBlocks.shift();
      let topicOfConvention = Number(arrayOfBlocks.pop());
      console.log(topicOfConvention, nameOfConvention);
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
          element = element.filter(elem => elem != '');
          let country = element[0].trim();
          let topic = topicOfConvention;
          let signedDate;
          let boundDate;
          let type;

          if(element.length > 3) {
            type = element[element.length-1];
            signedDate = element[1];
            boundDate = element[2];
           }  else if (element.length === 3) {
            boundDate = element[1];
            type = element[element.length-1];
          } else if (element.length < 3) {
            signedDate = element[1];
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
          convention = convention.split('!');
          result.id = Number(convention[0].trim());
          result.city = "Hague";
          result.name = convention[1].trim();
          result.topic  = topicOfConvention;
          result.status = false;
          if(convention.length > 3) {
            result.signed = changeDate(convention[2].trim());
            result.entered_into_force = changeDate(convention[3].trim());
            result.status = true;
            return result;  
          }
          result.id = Number(convention[0].trim());
          result.signed = changeDate(convention[2].trim());
          result.entered_into_force = undefined;
          return result;
        } 
        
        nameOfConvention = nameOfConventionObject(nameOfConvention);
         result = {
          'name_of_convention' : nameOfConvention,
          participants: arrayOfBlocks
        }
        resolve(result);
      });
  })
  arrayOfPromises.push(promise);
}

Promise.all(arrayOfPromises).then(values => {
  console.log(values[values.length-2], 'completed')
  arrayOfConventionsJSON = JSON.stringify(values);
  fs.writeFile('raw-hague-treaties.txt', arrayOfConventionsJSON, function (err) {
    if (err) return console.log(err);
  });
})


