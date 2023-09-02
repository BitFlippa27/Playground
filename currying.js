//is a function generator, allows us to create reusable functions

const curryFunc = (a) => (b, c) => {
  a + b - c
}

const with3 = curryFunc(3);
withA(2,4);

