/*
Trivia Quiz

Copyright (c) 2026 Dominique Striekwold

Licensed under the MIT License.
See the LICENSE file in the repository for details.

Built as part of a web development learning journey.
*/

let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

let timeLeft = 15;
let timerInterval = null;
let selectedAnswerIndex = null;
let isCheckingAnswer = false;

const QUIZ_TIME_PER_QUESTION = 15;
const CHECKING_DELAY = 700;
const RESULT_DELAY = 1200;
const WRONG_REVEAL_DELAY = 450;

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const startBtn = document.getElementById("startBtn");

const quizForm = document.getElementById("quizForm");
const questionElement = document.getElementById("question");
const answerText0 = document.getElementById("answerText0");
const answerText1 = document.getElementById("answerText1");
const answerText2 = document.getElementById("answerText2");
const answerText3 = document.getElementById("answerText3");
const progressElement = document.getElementById("progress");
const scoreElement = document.getElementById("score");
const scoreBar = document.getElementById("scoreBar");
const feedbackElement = document.getElementById("feedback");
const restartBtn = document.getElementById("restartBtn");
const timerText = document.getElementById("timerText");
const timerBar = document.getElementById("timerBar");

function getAnswerInputs() {
  return document.querySelectorAll('input[name="answer"]');
}

function getAnswerOptions() {
  return document.querySelectorAll(".answer-option");
}

function shuffleArray(array) {
  const shuffledArray = [...array];

  shuffledArray.sort(function () {
    return Math.random() - 0.5;
  });

  return shuffledArray;
}

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function showStartScreen() {
  stopTimer();
  startScreen.style.display = "flex";
  quizScreen.style.display = "none";
}

function showQuizScreen() {
  startScreen.style.display = "none";
  quizScreen.style.display = "block";
}

function createRandomQuizQuestions() {
  const categories = [...new Set(questions.map(function (question) {
    return question.category;
  }))];

  const difficultyPlan = [
    "easy",
    "easy",
    "easy",
    "medium",
    "medium",
    "medium",
    "hard",
    "hard",
    "expert",
    "expert"
  ];

  const maxQuestions = 10;

  if (categories.length < maxQuestions) {
    throw new Error("Not enough unique categories to build a 10-question quiz.");
  }

  const shuffledCategories = shuffleArray(categories).slice(0, maxQuestions);
  const shuffledDifficultyPlan = shuffleArray(difficultyPlan);

  const selectedQuestions = [];

  for (let i = 0; i < maxQuestions; i++) {
    const selectedCategory = shuffledCategories[i];
    const selectedDifficulty = shuffledDifficultyPlan[i];

    const matchingQuestions = questions.filter(function (question) {
      return (
        question.category === selectedCategory &&
        question.difficulty === selectedDifficulty
      );
    });

    if (matchingQuestions.length === 0) {
      throw new Error(
        `No question found for category "${selectedCategory}" and difficulty "${selectedDifficulty}".`
      );
    }

    const selectedQuestion = getRandomItem(matchingQuestions);
    const shuffledAnswers = shuffleArray(selectedQuestion.answers);

    selectedQuestions.push({
      question: selectedQuestion.question,
      answers: shuffledAnswers,
      correct: selectedQuestion.correct,
      difficulty: selectedQuestion.difficulty,
      category: selectedQuestion.category
    });
  }

  quizQuestions = selectedQuestions;
}

function updateMeta() {
  progressElement.textContent = `Question ${currentQuestionIndex + 1} / ${quizQuestions.length}`;
  scoreElement.textContent = `Score: ${score}`;

  const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
  scoreBar.style.width = `${progressPercent}%`;
}

function setFeedback(message, type) {
  feedbackElement.textContent = message;
  feedbackElement.className = "feedback";

  if (type === "correct") {
    feedbackElement.classList.add("feedback-correct");
  } else if (type === "wrong") {
    feedbackElement.classList.add("feedback-wrong");
  } else {
    feedbackElement.classList.add("feedback-neutral");
  }
}

function clearSelection() {
  const answerInputs = getAnswerInputs();

  for (let i = 0; i < answerInputs.length; i++) {
    answerInputs[i].checked = false;
    answerInputs[i].disabled = false;
  }

  selectedAnswerIndex = null;
}

function disableAnswers() {
  const answerInputs = getAnswerInputs();

  for (let i = 0; i < answerInputs.length; i++) {
    answerInputs[i].disabled = true;
  }
}

function clearAnswerStateClasses() {
  const answerOptions = getAnswerOptions();

  for (let i = 0; i < answerOptions.length; i++) {
    answerOptions[i].classList.remove("correct", "wrong", "fade-out");
    answerOptions[i].style.display = "flex";
  }
}

function resetTimerUI() {
  timeLeft = QUIZ_TIME_PER_QUESTION;
  timerText.textContent = `Time left: ${timeLeft}`;
  timerBar.style.width = "100%";
  timerBar.style.background = "linear-gradient(90deg, #aa86f8 0%, #7f52e5 100%)";
}

function updateTimerUI() {
  timerText.textContent = `Time left: ${timeLeft}`;

  const timerPercent = (timeLeft / QUIZ_TIME_PER_QUESTION) * 100;
  timerBar.style.width = `${timerPercent}%`;

  if (timeLeft <= 5) {
    timerBar.style.background = "linear-gradient(90deg, #f08aa8 0%, #d85a74 100%)";
  } else {
    timerBar.style.background = "linear-gradient(90deg, #aa86f8 0%, #7f52e5 100%)";
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function startTimer() {
  stopTimer();
  resetTimerUI();

  timerInterval = setInterval(function () {
    timeLeft--;
    updateTimerUI();

    if (timeLeft <= 0) {
      stopTimer();
      handleTimeUp();
    }
  }, 1000);
}

function showQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];

  questionElement.textContent = currentQuestion.question;
  answerText0.textContent = currentQuestion.answers[0];
  answerText1.textContent = currentQuestion.answers[1];
  answerText2.textContent = currentQuestion.answers[2];
  answerText3.textContent = currentQuestion.answers[3];

  quizForm.style.display = "block";
  clearSelection();
  clearAnswerStateClasses();

  isCheckingAnswer = false;

  setFeedback("Select an answer", "neutral");
  updateMeta();
  startTimer();
}

function getSelectedAnswerIndex() {
  const selectedInput = document.querySelector('input[name="answer"]:checked');

  if (!selectedInput) {
    return null;
  }

  return Number(selectedInput.value);
}

function showFinalScreen() {
  stopTimer();

  questionElement.textContent = `Quiz finished! Your score is ${score} out of ${quizQuestions.length}.`;
  progressElement.textContent = "Completed";
  scoreElement.textContent = `Final Score: ${score}`;
  scoreBar.style.width = "100%";

  timerText.textContent = "Time left: 0";
  timerBar.style.width = "0%";

  quizForm.style.display = "none";
  setFeedback("Well done!", "correct");
  restartBtn.style.display = "block";
}

function goToNextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    showQuestion();
  } else {
    showFinalScreen();
  }
}

function fadeOutAllExcept(keepIndex) {
  const answerOptions = getAnswerOptions();

  for (let i = 0; i < answerOptions.length; i++) {
    if (i !== keepIndex) {
      answerOptions[i].classList.add("fade-out");
    }
  }
}

function handleCorrectAnswer(selectedOption) {
  score++;
  scoreElement.textContent = `Score: ${score}`;

  if (selectedOption) {
    selectedOption.classList.add("correct");
  }

  fadeOutAllExcept(selectedAnswerIndex);
  setFeedback("Get ready...", "neutral");

  setTimeout(function () {
    goToNextQuestion();
  }, RESULT_DELAY);
}

function handleWrongAnswer(selectedOption, correctIndex) {
  const answerOptions = getAnswerOptions();
  const correctOption = answerOptions[correctIndex];

  if (selectedOption) {
    selectedOption.classList.add("wrong");
  }

  correctOption.classList.add("correct");

  setTimeout(function () {
    fadeOutAllExcept(correctIndex);
    setFeedback("Get ready...", "neutral");

    setTimeout(function () {
      goToNextQuestion();
    }, RESULT_DELAY - 300);
  }, WRONG_REVEAL_DELAY);
}

function checkAnswer() {
  if (isCheckingAnswer) {
    return;
  }

  isCheckingAnswer = true;
  disableAnswers();
  setFeedback("Checking answer...", "neutral");

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const currentAnswerIndex = getSelectedAnswerIndex();
  const correctIndex = currentQuestion.answers.indexOf(currentQuestion.correct);
  const answerOptions = getAnswerOptions();
  const selectedOption = currentAnswerIndex !== null ? answerOptions[currentAnswerIndex] : null;

  setTimeout(function () {
    if (currentAnswerIndex === correctIndex) {
      handleCorrectAnswer(selectedOption);
    } else {
      handleWrongAnswer(selectedOption, correctIndex);
    }
  }, CHECKING_DELAY);
}

function handleTimeUp() {
  setFeedback("Checking answer...", "neutral");
  checkAnswer();
}

function startQuiz() {
  stopTimer();

  currentQuestionIndex = 0;
  score = 0;
  selectedAnswerIndex = null;
  isCheckingAnswer = false;

  showQuizScreen();

  try {
    createRandomQuizQuestions();
  } catch (error) {
    questionElement.textContent = "Could not start quiz.";
    progressElement.textContent = "Error";
    scoreElement.textContent = "Score: 0";
    scoreBar.style.width = "0%";
    timerText.textContent = "Time left: 0";
    timerBar.style.width = "0%";
    quizForm.style.display = "none";
    restartBtn.style.display = "block";
    setFeedback(error.message, "wrong");
    return;
  }

  restartBtn.style.display = "none";
  showQuestion();
}

quizForm.addEventListener("change", function (event) {
  if (isCheckingAnswer) {
    return;
  }

  if (event.target.name === "answer") {
    selectedAnswerIndex = Number(event.target.value);
    setFeedback("Answer selected", "neutral");
  }
});

startBtn.addEventListener("click", function () {
  startQuiz();
});

restartBtn.addEventListener("click", function () {
  startQuiz();
});

showStartScreen();