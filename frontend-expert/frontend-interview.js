const QUESTION_API = "http://www.algoexpert.io/questions";

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
  },
  {
    id: "input",
    name: "Input",
    category: "HTML",
  },
];

async function getQuestions() {
  try {
    const res = await fetch(QUESTION_API);
    const questions = await res.json();

    return questions;
  } catch (error) {
    console.log(error);
  }
}


function groupQuestionsByCategory(questions) {
  const questionsByCategory = {};

  for (const question of questions) {
    if (questionsByCategory.hasOwnProperty(question.category)) {
      questionsByCategory[question.category].push(question);
    }
    else {
      questionsByCategory[question.category] = [question];
    }
  }
    
  return questionsByCategory;
}

//const result = groupQuestionsByCategory(questions);
//console.log(result);

function groupQuestionsByCategory(questions) {
  const questionsByCategory = new Map();

  for (const question of questions) {
    if (questionsByCategory.has(question.category)) {
      questionsByCategory.get(question.category).push(question);
    }
    else {
      questionsByCategory.set(question.category, [question]);
    }
  }
  
  return questionsByCategory;
}

const result = groupQuestionsByCategory(questions);
console.log(result);