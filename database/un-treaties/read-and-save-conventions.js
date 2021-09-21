const fs = require("fs");
const { type } = require("os");
let i = 10;

let arrayOfPromises = [];

for (let i = 1; i < 26; i++) {
  let promise = new Promise((resolve, reject) => {
    fs.readFile(`./UN-treaties/${i}.txt`, "utf8", (err, data) => {
      const changeDate = (original) => {
        if (!original) {
          return undefined;
        }
        let strArabicObj = {
          Jan: "01",
          Feb: "02",
          Mar: "03",
          Apr: "04",
          May: "05",
          Jun: "06",
          Jul: "07",
          Aug: "08",
          Sep: "09",
          Oct: "10",
          Nov: "11",
          Dec: "12",
          January: "01",
          February: "02",
          March: "03",
          April: "04",
          May: "05",
          June: "06",
          July: "07",
          August: "08",
          September: "09",
          October: "10",
          November: "11",
          December: "12",
        };
        let regex = /[a-zA-Z]/g;
        let strNum = original.match(regex).join("");
        let arabicNum = strArabicObj[strNum];
        original = original.replace(strNum, arabicNum);
        original = original.split(/\s/);

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
        .replace(/[\n\r\t]/g, "")
        .replace(/\d+\s\w+\s\d\d\d\d/g, (str) => {
          str = changeDate(str);

          return "|" + str + "|";
        });
      let arrayOfBlocks = cleanBlocks.split("?");

      arrayOfBlocks = arrayOfBlocks.filter((element) => /\w/.test(element));
      // console.log(arrayOfBlocks)
      let nameOfConvention = arrayOfBlocks.shift();
      arrayOfBlocks = arrayOfBlocks.map((element) => {
        element = element.trim();
        // for(let i = 0; i < element.length; i++) {
        //   if(/\d/.test(element[i])) {
        //     element[i-1] = `|`;
        //     for(let j = i; j < element.length; j++) {
        //       if(/\s/.test(element[j])) {
        //         element[j] = `|`;
        //       }
        //     }
        //     break;
        //   }
        // }

        element = element.split("|");
        element = element.filter((elem) => elem != "");
        let country = element[0].trim();
        let signedDate;
        let boundDate;
        let type;

        if(element.length > 3) {
          type = element[element.length-1];
          signedDate = element[1];
          boundDate = element[2];
         }  else if (element.length === 3 && /\d/g.test(element[2])) {
          boundDate = element[1];
          type = element[element.length-1];
        } else if (element.length < 3) {
          signedDate = element[1];
        }

        return element;


        let hagueObj = {
          country: country,
          signed: signedDate,
          bound: boundDate,
          type: type
        }
        return hagueObj;
      });
      // const nameOfConventionObject = (convention) => {
      //   let result = {};
      //   convention = convention.split('!');
      //   result.id = Number(convention[0].trim());
      //   result.city = "Hague";
      //   result.name = convention[1].trim();
      //   result.status = false;
      //   if(convention.length > 3) {
      //     result.signed = changeDate(convention[2].trim());
      //     result.entered_into_force = changeDate(convention[3].trim());
      //     result.status = true;
      //     return result;
      //   }
      //   result.id = Number(convention[0].trim());
      //   result.signed = changeDate(convention[2].trim());
      //   result.entered_into_force = undefined;
      //   return result;
      // }

      // nameOfConvention = nameOfConventionObject(nameOfConvention);
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
  console.log(values[4]);
  arrayOfConventionsJSON = JSON.stringify(values);
  // fs.writeFile('all-hague-json.txt', arrayOfConventionsJSON, function (err) {
  //   if (err) return console.log(err);
  // });
});
