const array = process.argv;
const sum = (arrary, i) =>
 { var result = 0;
   for (i=2; i<array.length; i++) {
   result += Number(array[i])
 }
console.log(result)
}

sum()