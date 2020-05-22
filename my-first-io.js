const fs = require ('fs');
const string = fs.readFileSync(process.argv[2]).toString();
const lines = string.split('\n').length -1;
console.log(lines);