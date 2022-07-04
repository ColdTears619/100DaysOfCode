const fs = require('fs');
const path = require('path');

console.log(path.basename(__filename))

//make direcotory
// fs.mkdir(`/tmp/test`,{ recursive: true},(err) => {
// if (err) throw err;
// });

fs.touch(`${path.dirname(__filename)}/test`,{ recursive: true})
