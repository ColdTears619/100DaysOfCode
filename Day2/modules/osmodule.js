const os = require('os');

console.log(os.platform());

console.log(os.arch());

console.log(os.cpus());

const freemem = parseFloat(os.freemem() / (1073741824))
if (freemem < 5)  console.log('Ohhh, its too low becarful')

console.log(parseInt(os.totalmem() / (1073741824)))

console.log(os.homedir())