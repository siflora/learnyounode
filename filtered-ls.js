const fs=require('fs')
const path=require('path')
var dir=process.argv[2];
var extname= '.'+process.argv[3]
fs.readdir(dir,(err,list)=>{
  if(err){
    console.log(err);
  }
  list.filter((element)=>{
    if(path.extname(element)===extname){
      console.log(element)
    }
  })
})