const fs = require ('fs');
var buffer= fs.readFileSync(process.argv[2])
var string=buffer.toString();
var lines=string.split('\n');
console.log(lines.length-1);
