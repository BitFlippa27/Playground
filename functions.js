var awesomeFunction = function hans (coolThings)
{
    return amazingStuff;
}

console.log(awesomeFunction.name);

function greeting(msg)
{
    return function who(name){
        console.log(`${msg}, ${name}`);
    };
}

var hello = greeting("Hello");
var salut = greeting("Salut");

hello("Dennis");
hello("Dyonisus");
salut("Denis");

console.log(greeting("Hello"));
console.log(typeof greeting());

//1.Variante
function counter(step = 1) 
{
    //var count = 0;
    return function increaseCount(count)
    {
        count = count + step;
        return count;
    };
    
}

/* 2.Variante
function counter(step = 1) {
    var count = 0;
    return function increaseCount(){
        count = count + step;
        return count;
    };
    
}
*/

counter();
var incBy1 = counter();
var incBy3 = counter();


console.log(incBy1(0));       // 1
console.log(incBy1(0));       // 2

incBy3(0);       // 3
incBy3(1);       // 6
incBy3(2);       // 9

