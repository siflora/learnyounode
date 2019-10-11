const bl= require('bl');
const http = require('http')
http.get(process.argv[2],function callback (response){
  response.pipe(bl(function(err, data){
      if(err){
    return console.log(err);
  }
  console.log(data.length+'\n'+data.toString())
  }))

})