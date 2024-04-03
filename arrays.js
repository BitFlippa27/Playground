
const array1 = [1,55,454,90,3];
let newArr = array1.sort((a, b) => a - b);
console.log(newArr);

console.log(array1[array1.length -1]);

for(let i=0;i<array1.length;i++) {
  console.log("i", array1[i])
  console.log("i++", array1[i+1])
  console.log("i--", array1[i-1])

}

console.log("second last item", array1[array1.length -2])
console.log("last index", array1[-1])


