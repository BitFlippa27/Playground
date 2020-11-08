const allData = [{_id:1,name:"hans", age:27}, {_id:2, name:"franz", age:23}];

var map = new Map();
    allData.forEach(item => {
      let mapValue = {
        name: item.name,
        age: item.age

      };
      map.set(item._id, mapValue);
    });



const result = map.values();
console.log(result["1"]);
console.log(result);

for(let i=0;i<10;i++) {
  console.log()
}




for(let [key, value] of map) {
  console.log(key)
}
