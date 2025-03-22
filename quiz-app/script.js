"use strict";

let currIdx = 0;

const quizContainer = document.querySelector(".quiz-container");
const optionsContainer = document.querySelector(".optionsContainer");
const questionEl = document.getElementById("question");
const optionsEls = document.querySelectorAll(".option");
const optionLabel = document.querySelectorAll("label");
const results = [];

//? Load the questions from the json file
let quizData;
async function loadQuizQuestions() {
  try {
    const res = await fetch("./quizData.json");
    const { questions } = await res.json();
    return questions;
  } catch (error) {
    console.error("Error loading quiz data:", error);
  }
}

(async function () {
  quizData = await loadQuizQuestions();
  initQuiz();
})();

//? Load initial question
function initQuiz() {
  loadQuestion(quizData[currIdx]);

  quizContainer.addEventListener("click", (e) => {
    const option = e.target.closest(".option");
    const submitBtn = e.target.closest("#submit");
    if (!option && !submitBtn) return;

    if (e.target === submitBtn && currIdx < 4) {
      const selectedOption = getSelectedOption();
      if (!selectedOption) return;

      const isCorrect = checkAnswer(selectedOption);
      results.push(isCorrect);

      currIdx++;
      if (currIdx >= 4) {
        displayScore(results);
        const reloadBtn = document.getElementById("reload");
        reloadBtn.addEventListener("click", () => location.reload());
        return;
      }

      loadQuestion(quizData[currIdx]);
      resetRadios();
    }
  });
}

function loadQuestion(currQuestion) {
  const { question } = currQuestion;
  const { a, b, c, d } = currQuestion;
  const options = { a, b, c, d };

  questionEl.textContent = question;

  Object.values(options).forEach((value, i) => {
    optionLabel[i].textContent = value;
  });
}

function getSelectedOption() {
  return Array.from(optionsEls).find((option) => option.checked === true);
}

function resetRadios() {
  optionsEls.forEach((option) => (option.checked = false));
}

function checkAnswer(selectOption) {
  //? Get correct answer from the array of answers
  const correct = quizData[currIdx]["correct"];
  const correctAnswer = quizData[currIdx][correct];

  //? Use nextElementSibling to get the next element (which is the <label> associated with the <input>)
  const chosenAnswer = selectOption.nextElementSibling.textContent;

  if (correctAnswer === chosenAnswer) return true;

  return false;
}

function displayScore(results) {
  const totalScore = results.filter((result) => result === true).length;
  const incorrectAnswers = displayresults();
  console.log(typeof incorrectAnswers);

  const html = `
    <h2>
        You answered ${totalScore}/4 questions correctly
    </h2>

    ${
      incorrectAnswers.length !== 0
        ? `<h4>You got questions ${incorrectAnswers} Incorrect</h4>`
        : ""
    }
    
    <button id="reload">Reload</button>
  `;
  quizContainer.textContent = "";
  quizContainer.insertAdjacentHTML("beforeend", html);
}

function displayresults() {
  return results.reduce((acc, result, i) => {
    if (!result) acc.push(i + 1);
    return acc;
  }, []);
}
