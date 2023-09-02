//similar to asyn await
//Generators are the source of async await
//pauses execution when it sees an action (yield) key word

function* gen() {
  console.log("a");
  console.log("b");
}

const g = gen();