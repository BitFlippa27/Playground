const categoriesRawObject = {
  hats: {
    title: "Hats",
    items: [{name: "x"}, {name: "y"}]
  },
  sneakers: {
    title: "Sneakers",
    items: [{name: "Nike"}, {name: "47"}]
  }
};

function groupCategoryByName() {
  const categoriesMap = {};

  for ([categoryName, category] of Object.entries(categoriesRawObject)) {
    categoriesMap[categoryName] = category.items;
  }

  return categoriesMap;
}

//React Pattern
function mapThroughObject() {
  const categoriesMap = groupCategoryByName();

  Object.keys(categoriesMap).map(categoryName => {
    console.log(categoryName);
    categoriesMap[categoryName].map(product => {
      console.log(product);
    })
  });
}

groupCategoryByName();
mapThroughObject();