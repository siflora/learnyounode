var array=process.argv.slice(2);
var array1=array.map((value)=>{
  return Number(value);
}) 
console.log(array1.reduce((acc, cur)=>{
  return acc+cur;
},0)
)
