//Array iteration
var array1 = [3,6,9];
var array1Copy = [... array1];

for(let element of array1)
{
    console.log( element);
    console.log( `Array element ${element}`);
    console.log("array element is ", element);
}


var greeting = "Hello Universe";
var chars = [... greeting];

console.log(typeof chars);
console.log(typeof greeting);

for(let letter of chars)
{
    console.log(letter);
}


//Map iteration over keys and values
var btn1 = "btn1";
var btn2 = "btn2";
var buttonNames = new Map();
buttonNames.set(btn1, "Button1");
buttonNames.set(btn2, "Button2");

//Array destructing
for(let [btn, btnName] of buttonNames)
{
    console.log(btn + btnName);
}
//iterate over every mapelement
for(let entry of buttonNames)
{
    console.log(entry);
}
//iterate over every mapelement 2
for(let entry of buttonNames.entries())
{
    console.log(entry);
}

 //Map iteration over values in every mapelement
for(let btnName of buttonNames.values())
{
    console.log(btnName);
}
console.log("Values", buttonNames.values());

var array2 = [21,27,34];
for(let [i, val] of array2.entries())
{
    console.log(`${i}: ${val}`);
}

console.log(array2.entries());

for(let i of array2.entries())
{
    console.log(i);
}

var arr = [1,2,3,4,5];
//arr.foo = "hello";

for(let index in arr)
{
    console.log(index);
}

//1. Variant: with indexing
var arrayX = [1, 2, 3];
function  mappingX(x) {
    
    for(let i in x) {
        x[i] =  x[i] * 2;
        
    }
    return x;
}
console.log(mappingX(arrayX));

//2. Variant with iterating over elements
var arrayY = [1, 2, 3];
function  mappingY(x) {
    let newArray = [];
    for(let element of x) {
        let newElement = element * 2;
        newArray.push(newElement);
        
    }
    return newArray;
}
console.log(mappingY(arrayY));


//3. Variant classic
var arrayZ = [1, 2, 3];
function  mappingZ(x) {
    for(let i; i < x;i++) {
        x[i] = x[i] * 2;
    }
    return x;
}
console.log(mappingZ(arrayZ));
//mappingZ(arrayZ);

var yyy = [1, 2, 3];
for(let i; i < yyy.length;i++) {
    
}
console.log(yyy)
