name = {
    first: "Dennis",
    last: "Erdelean",
    age: 28,
    specialties: ["JS", "Icehockey"]
};

console.log(name.specialties[0]);
console.log(`My specialties are ${name.specialties[0]} and ${name.specialties[1]}`);
console.log(typeof 369);
console.log(typeof "369");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof {"": 1 });
console.log(typeof [1,2,3]);
console.log(null);
console.log(typeof function Hello(){});

function hello(testo)
{
    console.log(testo);
}


let worksOutput = function test(param)
{
    return console.log(param);
}
worksOutput("Works");

var multipleFunctions = {
    func1(){
        console.log("func1");
    },
    func2(){
        console.log("func2");
    },
    func3(){
        console.log("func3");
    }
};
multipleFunctions.func1();
console.log(multipleFunctions);
console.log(multipleFunctions.func1);

let array1 = [1,2,3];
let array2 = [2,3,5];

let array3 = {
    franz: [1,2,3],
    hans : [1,2,3]
};

if (array3.franz === array3.hans)
    console.log("true");
else
    console.log("false");


var arr = ["1", "10", "100", "1000"];
for(let i = 0; i < arr.length && arr[i] < 500; i++)  // coercion of string values at arr[i]
{
    console.log(arr[i]);
}


function test()
{
    var publicAPI = {
        print(){
            console.log("Interessant");
        }
    };
    return publicAPI;
}

var test = test();
test.print();



function test1(){
    console.log("test");
    
}

test1();


function test2()
{
    var details = {
        name :  "Hans",
        Vorname : "Franz"
    };
    return details;
}


var test2 = test2();
console.log(test2.name);

function ausgabe()
{
    console.log("Ausgabe");
}

ausgabe();

