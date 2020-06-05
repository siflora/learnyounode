const fs = require ('fs');

fs.readFile(process.argv[2], (err, data) =>{
  if (err) return err;
  const newLine = data.toString().split('\n').length - 1;
  console.log(newLine);
})


