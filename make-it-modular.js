const mymodule = require('./mymodule.js');

const file = process.argv[2];
const ext = process.argv[3];

mymodule (file, ext, function(err, list){
  if (err) {
    console.log('an err occurs');
  }
  list.forEach(item => console.log(item))
}) 

