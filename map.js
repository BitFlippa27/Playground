const arr = [1,2,3,4];
//1.Variante
const doubled = arr.map(double);

function double(num) {
  return num * 2;
}

//2.Variante
const doubled2 = arr.map(function double(num) {
  return num * 2;
});

//3. Variante  (anonymous function)
const doubled3 = arr.map(function (num) {
  return num * 2;
});

//4.Variante (arrow function)
const doubled4 = arr.map((num) => num * 2 );

//5. Variante 
const doubled5 = arr.map(num => num * 2 );


