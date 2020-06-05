

const fs = require ('fs');
const path = require ('path')
const file = process.argv[2];
const ext = '.' + process.argv[3];


fs.readdir(file, (err, list) => {
  if(err) return err;
  list.forEach(item => {
  if (path.extname(item) === ext) 
  console.log(item);
  })
})