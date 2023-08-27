const nombre = "Dennis";

//const defaultName = nombre != null ? name : "Default Name";
const betterDefaultName = nombre ?? "Default name";

console.log(betterDefaultName);