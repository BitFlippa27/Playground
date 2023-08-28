const arr = [1,2,10,16];

//acc remembers previous result
const reduceArray = arr.reduce((acc, num) => {
  return acc + num
}, 0);

console.log(reduceArray);

const querySnapshot = [
  {
    hats: {
      title: "Hats",
      items: [{name: "Beanie"}]
    },
    sneakers: {
      title: "Sneakers",
      items: [{name: "Air Jordan"}]
    },
  }
];

const categoryMap = querySnapshot.reduce((acc, docSnapshot) => {
  for (let [categoryName, category] of Object.entries(docSnapshot)) {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
  }  

  return acc;
}, {})

console.log(categoryMap);