const fs = require('fs');
fs.readFile('1-text.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  let dataArr = data.split('\n');
  dataArr = dataArr.filter(elem => {
    let regex = /(^\s+$)|(^$)/;
    return !regex.test(elem);
  })
  console.log(dataArr);
  // console.log(data.split('\n'))
})
