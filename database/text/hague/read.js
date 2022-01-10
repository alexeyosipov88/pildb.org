const fs = require('fs'); 
fs.readFile("1.sql", "utf8", (err, data) => {
  if(err) {
    console.log(err);
    return;
  } 
  console.log(data.split(" "));
})