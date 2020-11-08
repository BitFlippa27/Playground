var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };


var clonedObj = { ...obj1, x: 27 };  // Wert x: wird gleich im kopierten Array geändert
// Object { foo: "bar", x: 42 }


var mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }

console.log(Object.is(obj1, clonedObj));
console.log(clonedObj);