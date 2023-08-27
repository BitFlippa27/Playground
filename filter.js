const arr1 = [1,2,3,4,5,6,7];
const arr2 = ["alvin", "simon", "theodore"]

const result = arr1.filter((_, i) => i < 4);
const result2 = arr2.filter((word) => word.length > 6);

console.log(result);
console.log(result2);