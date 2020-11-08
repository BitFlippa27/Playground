var isEqual = require("lodash.isequal");



const array1 = [{name:"hans"}, {name:"franzi"}];
const array2 = [{name:"hans"}, {name:"franz"}];
console.log(!isEqual(array1, array2));
