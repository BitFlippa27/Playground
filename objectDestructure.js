const arr = [1,2,3,4];

const person = {
  name: "Dennis",
  website: "erdelean.me",
  superpower: "dreaming"
};

const { website, ...rest } = person;

console.log(rest);