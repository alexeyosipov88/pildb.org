const fs = require("fs");
let data = fs.readFileSync("./warsaw.txt", {
  encoding: "utf8",
  flag: "r",
});
data = data.replace(/\n/g, '');
  data = data.split('?');
  let warsawArray = [];
  let protocolArray = [];
  data.forEach(elem => {
    elem = elem.replace(/\d+\/\d+\/\d+|\d/g, str => '|' + str + '|');
    elem = elem.split('|');
    elem = elem.filter(elem => !/^\s+$/.test(elem));
    elem = elem.filter(elem => elem !== '');
    let firstArr = [];
    let secondArr = [];
    elem.forEach((el, index) => {
      if(index === 0) {
        firstArr.push(el);
        secondArr.push(el);
      }
      if(index > 0 && index < 3) {
        firstArr.push(el);
      }
      if(index > 3 && index < 6) {
        secondArr.push(el);
      }
    })
    warsawArray.push(firstArr);
    protocolArray.push(secondArr);    
  
    warsawArray = warsawArray.filter(elem => {
      if(elem[1] !== '0' || elem[2] !== '0') {
        return elem;
      }
    })
    protocolArray = protocolArray.filter(elem => {
      if(elem[1] !== '0' || elem[2] !== '0') {
        return elem;
      }

    })
  })
  warsawArray = warsawArray.map(elem => {
    elem = elem.join(' ');
    elem += '\n';
    return elem;  
  })
  protocolArray = protocolArray.map(elem => {
    elem = elem.join(' ');
    elem += '\n';
    return elem;
  })
  warsawArray.unshift('Convention for the Unification of Certain Rules Relating to International Carriage by Air ! Warsaw ! 12/10/29 ! 13/02/33\n');
  protocolArray.unshift('Protocol to Amend the Convention for the Unification of Certain Rules Relating to International Carriage by Air ! Hague ! 28/09/55 ! 01/08/63\n');
  let warsawConvention = warsawArray.join('?');
  let protocolOfWarsawConvention = protocolArray.join('?');
  console.log(warsawArray);
  console.log(protocolArray);

  fs.writeFileSync("1.txt", warsawConvention);
  fs.writeFileSync("2.txt", protocolOfWarsawConvention);