const fs = require("fs");
const { type } = require("os");
let i = 10;

let arrayOfPromises = [];

for (let i = 1; i < 15; i++) {
  let promise = new Promise((resolve, reject) => {
    fs.readFile(`./unidroit treaties/${i}.txt`, "utf8", (err, data) => {
      const changeDate = (original) => {
        if (!original) {
          return undefined;
        }
        
          original = original.split('.');

        if (original[0].length < 2) {
          original[0] = "0" + original[0];
        }
        let first = original[0];
        let last = original[2];
        original[2] = first;
        original[0] = last;
        return original.join("-");
      };

      if (err) {
        console.log(err, "this is error");
        return;
      }
      let cleanBlocks = data
      .replace(/\d+.\d\d.\d\d\d\d/g, (str) => {
        str = changeDate(str);
        
        return "|" + str + "|";
      })
      .replace(/[\n\r\t]/g, "");
      
      let arrayOfBlocks = cleanBlocks.split("?");
      arrayOfBlocks = arrayOfBlocks.filter((element) => /\w/.test(element));
      let nameOfConvention = arrayOfBlocks.shift();
      let topicOfConvention = Number(arrayOfBlocks.pop());
      arrayOfBlocks = arrayOfBlocks.map((element) => {
        element = element.trim();
        element = element.split("|");
        element = element.filter((elem) => elem !== "");
        element = element.filter((elem) => /[^\s+]/.test(elem));
        element[0] = element[0].replace(/\W/g, '');
        element[0] = element[0].replace(/\d/g, '');
        let country = element[0].trim();
        let signedDate;
        let boundDate;
        let type;

        if(element.length > 3) {
          type = element[element.length-1];
          signedDate = element[1];
          boundDate = element[2];
         }  else if (element.length === 3 && !/\d/g.test(element[2])) {
          boundDate = element[1];
          type = element[element.length-1].trim();
        }   else if (element.length === 3) {
          signedDate = element[1];
          boundDate = element[2];
          type = 'R'
        } else if (element.length < 3) {
          signedDate = element[1];
        }



        let hagueObj = {
          country: country,
          signed: signedDate,
          bound: boundDate,
          type: type
        }
        return hagueObj;
      });
      const nameOfConventionObject = (convention) => {
        let result = {};
        convention = convention.replace(/\|/g, '');
        convention = convention.split('!');
        result.city = convention[1].trim();
        result.name = convention[0].trim();
        result.status = false;
        result.topic = topicOfConvention;
        if(convention.length > 3) {
          result.signed = convention[2].trim();
          result.entered_into_force = convention[3].trim();
          result.status = true;
          return result;
        }
        result.signed = convention[2].trim();
        result.entered_into_force = undefined;
        return result;
      }

      nameOfConvention = nameOfConventionObject(nameOfConvention);
      result = {
        name_of_convention: nameOfConvention,
        participants: arrayOfBlocks,
      };
      resolve(result);
    });
  });
  arrayOfPromises.push(promise);
}

Promise.all(arrayOfPromises).then((values) => {
  arrayOfConventionsJSON = JSON.stringify(values);
  console.log(values);
  fs.writeFile('raw-unidroit-treaties.txt', arrayOfConventionsJSON, function (err) {
    if (err) return console.log(err);
    console.log('COMPLETED!')
  });
});
