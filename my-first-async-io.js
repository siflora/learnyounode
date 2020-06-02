const fs = require ('fs');

fs.readFile(process.argv[2], (err, data) =>{
  if (err) return err;
  return data;
  const newLine = data.toString().split('\n').length - 1;
  console.log(newLine);
})


