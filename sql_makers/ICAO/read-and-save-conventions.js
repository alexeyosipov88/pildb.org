const fs = require("fs");
const { type } = require("os");
let i = 10;

let arrayOfPromises = [];

for (let i = 1; i < 15; i++) {
  let promise = new Promise((resolve, reject) => {
    fs.readFile(`./ICAO-treaties/${i}.txt`, "utf8", (err, data) => {
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
        if(/[a-zA-Z]/g.test(original)) {
          let strNum = original.match(regex).join("");
          let arabicNum = strArabicObj[strNum];
          original = original.replace(strNum, arabicNum);
        }
        if (/\s/.test(original)) {
          original = original.split(/\s/);

        }
        if (/\//.test(original)) {
          original = original.split("/");
        
        }

        if (original[0].length < 2) {
          original[0] = "0" + original[0];
        }
        if (original[1].length < 2) {
          original[1] = "0" + original[1];
        }
        if (original[2].length < 4) {
          let numberFromYear = Number(original[2]);
          original[2] = numberFromYear < 22 ? "20" + original[2] : "19" + original[2]; 
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
        .replace(/\d+\/\d+\/\d+/g, (str) => {
          str = changeDate(str);
          return "|" + str + "|";
        })
        .replace(/\d+\s\w+\s\d\d\d\d/g, (str) => {
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
        element[0] = element[0].replace(/\W/g, "");
        element[0] = element[0].replace(/\d/g, "");
        let country = element[0].trim();
        let signedDate;
        let boundDate;
        let type;

        if (element.length > 3) {
          type = 'R';
          signedDate = element[1];
          boundDate = element[2];
        } else if (element.length === 3 && !/\d/g.test(element[2])) {
          boundDate = element[1];
          type = element[element.length - 1].trim();
        } else if (element.length === 3) {
          signedDate = element[1];
          boundDate = element[2];
          type = "R";
        } else if (element.length < 3) {
          signedDate = element[1];
        }

        let hagueObj = {
          country: country,
          signed: signedDate,
          bound: boundDate,
          type: type,
        };
        return hagueObj;
      });

      const nameOfConventionObject = (convention) => {
        let result = {};
        convention = convention.replace(/\|/g, "");
        convention = convention.split("!");
        result.city = convention[1].trim();
        result.name = convention[0].trim();
        result.status = false;
        result.topic_id = topicOfConvention;
        if (convention.length > 3) {
          result.signed = convention[2].trim();
          result.entered_into_force = convention[3].trim();
          result.status = true;
          return result;
        }
        result.signed = convention[2].trim();
        result.entered_into_force = undefined;
        return result;
      };

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
  fs.writeFile("raw-ICAO-treaties.txt", arrayOfConventionsJSON, function (err) {
    if (err) return console.log(err);
    console.log("COMPLETED!");
  });
});
