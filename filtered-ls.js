const fs = require ('fs');
const path = require ('path')
const file = process.argv[2];
const extname = '.' + process.argv[3];


fs.readdir(file, (err, list) => {
  if(err) return err;
  return list;
const filteredList = list.includes(extname);
console.log(filteredList.join('\r\n'));
})