//copy by value
var name = "Hans";
console.log(name);
var yourname = name;
console.log(yourname);

name = "Franz";
console.log(yourname);





//copy by reference
var myAdress = {
    street: "Zürcherstr. 27",
    city: "Zürich",
    state: "Schweiz"
};

var yourAdress = myAdress;

myAdress.street = "Dietikonstr. 27";
console.log(yourAdress.street);
console.log(myAdress.street);

console.log(typeof yourAdress.street);