var object1 = function(){
  return {
    x(){
      console.log("x");
    },
    
    y(){
      console.log("y");
    }
  }
}

console.log(object1);

const array = [
  {
    title: "hats"
  },
  {
    title: "sneakers"
  },
]

const aMap = {
  title: array
}

aMap.title = "Franz";

//console.log(aMap)

const questionsByCategories = {};

questionsByCategories["html"] = [];
questionsByCategories["html"].push({name: "Fruten"});
questionsByCategories.css = "Krkrk"
console.log(questionsByCategories);


