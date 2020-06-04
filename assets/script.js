const question = document.getElementById("questions");
const choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices);

//variables//

let thisQuestion = {};

let yourAnswer = true;

let score = 0;

let questionNumber = 0;

let allQuestions = [];

let questions = [
  {
    question:
      "Which of the following tags includes all the content in the web page?",
    answer1: "<body>",
    answer2: "<html>",
    answer3: "<head>",
    answer4: "<h1>",
    correctAnswer: 2,
  },
  {
    question: "What symbol do we use to refer to an Id?",
    answer1: ".",
    answer2: "$",
    answer3: "#",
    answer4: "*",
    correctAnswer: 3,
  },
  {
    question:
      "Which of the following resources gives us predefined css styles to use",
    answer1: "Bootstrap",
    answer2: "W3Schools",
    answer3: "GitHub",
    answer4: "Javascript",
    correctAnswer: 1,
  },
  {
    question:
      "Which of the following create a popup window when run in the browser?",
    answer1: "alert",
    answer2: "prompt",
    answer3: "confirm",
    answer4: "all of the above",
    correctAnswer: 4,
  },
  {
    question: "How do we write comments in Javascript",
    answer1: "//",
    answer2: "*/",
    answer3: "$$",
    answer4: "!!",
    correctAnswer: 1,
  },
  {
    question: "how do you print content into your console",
    answer1: "varName",
    answer2: "console.log",
    answer3: "if/else statement",
    answer4: "return",
    correctAnswer: 2,
  },
  {
    question:
      "What method do you use to get the number of elements in an array?",
    answer1: "console.log",
    answer2: "index.length",
    answer3: "number.length",
    answer4: "array.length",
    correctAnswer: 4,
  },
  {
    question: "Indexes in an array always start at ...",
    answer1: "[0]",
    answer2: "[1]",
    answer3: "[-1]",
    answer4: "[undefined]",
    correctAnswer: 1,
  },
  {
    question: "What is the most common way to name variables",
    answer1: "uppercase",
    answer2: "lowercase",
    answer3: "camelcase",
    answer4: "integers",
    correctAnswer: 3,
  },
  {
    question:
      "Which tag is responsible for given the tab in  our browser its name?",
    answer1: "<h1>",
    answer2: "<html>",
    answer3: "<title>",
    answer4: "<head>",
    correctAnswer: 3,
  },
];

// constant variables

const correctPoints = 1;
const finishQuestions = 10;

startQuiz = () => {
  questionNumber = 0;
  score = 0;
  allQuestions = [...questions];
  console.log(allQuestions);
  nextQuestion();
};

nextQuestion = () => {
  questionNumber++;
  const questionsInIndex = Math.floor(Math.random() * allQuestions.length);
  thisQuestion = allQuestions[questionsInIndex];
  questions.innerText = thisQuestion.question;
};

startQuiz();

// let function startQuiz() {
//   questionNumber = 0;
//   score = 0;
//   allQuestions = [...questions];
//   console.log(allQuestions);
// }
