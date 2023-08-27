const QUESTION_API = "https://www.algoexpert.io/questions";
const SUBMISSION_API ="https://www.algoexpert.io/api/fe/submissions";

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
  {
    id: "event",
    name: "Event Driven Programming",
    category: "DOM",
  },
];

const submissionsRaw = 
[
  {
    questionId: "sign-up-form",
    status: "CORRECT"
  },
  {
    questionId: "rainbow-circles",
    status: "INCORRECT"
  },
  {
    questionId: "input",
    status: "PARTIALLY_CORRECT"
  },
  {
    questionId: "event",
  },

];


async function getQuestionsAndSubmissions() {
  try {
    //const subRes = await fetch(SUBMISSION_API);
    //const questRes = await fetch(QUESTION_API);
    const questions = await questRes.json();
    const submissions = await subRes.json();

    const [questRes, subRes] = Promise.all([
      fetch(SUBMISSION_API),
      fetch(QUESTION_API)
    ]);

    return Promise.all([
      questRes.json(),
      subRes.json()
    ]);

  } catch (error) {
    console.log(error);
  }
}


function getQuestionsByCategory(questionsRaw) {
  const questionsByCategory = {};

  for (const question of questionsRaw) {
    if (questionsByCategory.hasOwnProperty(question.category)) {
      questionsByCategory[question.category].push(question);
    }
    else {
      questionsByCategory[question.category] = [question];
    }
  }
    
  return questionsByCategory;
}

function getSubmissionsByID(submissionsRaw) {
  const submissionsByID = {};
  const submissionCount = {};

  for (submission of submissionsRaw) {
    submissionsByID[submission.questionId] = submission.status;

  }
  console.log(submissionsByID);
  return submissionsByID;
}


//Map Alternative
/*function groupQuestionsByCategoryMap(questions) {
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
*/
/*
<div class="row">
<div class="category column">
  <h2>HTML</h2>
  <div class="question">
  <div class="status partially-correct"> * </div>
    <h3>Stopwatch</h3>
  </div>
  <div class="question">
  <div class="status correct"> </div>
    <h3>Tic Tac Toe</h3>
  </div>
</div>
*/

function createCategoryDiv(category, questions, submissionsByID) {  
  const categoryDiv = document.createElement("div");
  categoryDiv.classList.add("category");
  categoryDiv.classList.add("column");

  let submissionCount = 0;
  
  //in FetchAndDisplay loop, in each category loop through every question
  for (question of questions) {

    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    const submissionDiv = document.createElement("div");
    submissionDiv.textContent = "*";
    submissionDiv.classList.add("status");
    
    const statusClass = submissionsByID[question.id]?.toLowerCase().replace("_", "-");
    submissionDiv.classList.add(statusClass ?? "unattempted"); //undefinded or null -> if there is no status
   
    if (submissionsByID[question.id] === "CORRECT") {
      submissionCount++;
    }

    questionDiv.append(submissionDiv);
    const questionDivH3 = document.createElement("h3");
    questionDivH3.textContent = question.name;
    questionDiv.append(questionDivH3);
    categoryDiv.append(questionDiv);
  }

  const categoryNameH2 = document.createElement("h2");
  categoryNameH2.textContent = category;
  categoryDiv.prepend(categoryNameH2);
  categoryNameH2.textContent = `${category} - ${submissionCount} / ${questions.length}`
  
  return categoryDiv;

}


function fetchAndDisplay() {
  // const [questions, submissions] = await fetchQuestionsAndSubmissions();
  const questionsByCategory = getQuestionsByCategory(questionsRaw); //getQuestionsByCategory(questions)
  const submissionsByID = getSubmissionsByID(submissionsRaw); // getQuestionByID(submissions)
  //iterate through every category
  for (const [category, questions] of Object.entries(questionsByCategory)) {
    const categoryDiv = createCategoryDiv(category, questions, submissionsByID);
    const categoryWrapper = document.getElementById("row");
    document.body.append(categoryWrapper);
    categoryWrapper.append(categoryDiv);
    console.log(categoryWrapper)
  }
}
fetchAndDisplay();

