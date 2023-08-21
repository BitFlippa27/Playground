
const questions = 
[
  {
    id: "sign-up-form",
    name: "Sign-Up Form",
    category: "HTML",
  },
  {
    id: "rainbow-circles",
    name: "Rainbow Circles",
    category: "CSS",
  }
];



const questionsByCategory = {};

questions.forEach(question => {
  if (questionsByCategory.hasOwnProperty(question.category)) {
    questionsByCategory[question.category].push(question);
  }
  else {
    questionsByCategory[question.category] = [question];
  }
});



const quest  = {
  id: "sign-up-form",
  name: "Sign-Up Form",
  category: "HTML",
};

questionsByCategory[question.category] = [question];

