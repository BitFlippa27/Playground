const QUESTION_API = "http://www.algoexpert.io/questions";

const questionsRaw = 
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
    category: "JS",
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


//Map Alternative

function groupQuestionsByCategoryMap(questions) {
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
/*
<div class="row">
<div class="category column">
  <h2>HTML</h2>
  <div class="question">
    <h3>Stopwatch</h3>
  </div>
  <div class="question">
    <h3>Tic Tac Toe</h3>
  </div>
</div>
*/

function createCategoryDiv(category, questions) {
  const categoryDiv = document.createElement("div");
  categoryDiv.classList.add("category");
  categoryDiv.classList.add("column");
  const categoryNameH2 = document.createElement("h2");
  categoryNameH2.textContent = category;
  categoryDiv.append(categoryNameH2);

  for (question of questions) {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    const questionDivH3 = document.createElement("h3");
    questionDivH3.textContent = question.name;
    questionDiv.append(questionDivH3);
    categoryDiv.append(questionDiv);
  }

  return categoryDiv;

}


function fetchAndDisplay() {
  //fetch();
  const questionsByCategory = groupQuestionsByCategory(questionsRaw);
  console.log(questionsByCategory);

  for (const [category, questions] of Object.entries(questionsByCategory)) {
    const categoryDiv = createCategoryDiv(category, questions);
    console.log(categoryDiv);

    //const categoryWrapper = document.createElement("div");
    //categoryWrapper.classList.add("row");
    const categoryWrapper = document.getElementById("row");
    document.body.append(categoryWrapper);
    categoryWrapper.append(categoryDiv);
    console.log(categoryWrapper)
  }
}
fetchAndDisplay();

