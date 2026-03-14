/*
Trivia Quiz

Copyright (c) 2026 Dominique Striekwold

Licensed under the MIT License.
See the LICENSE file in the repository for details.

Built as part of a web development learning journey.
*/

import { animalsQuestions } from "./data/questions/animals.js";
import { foodQuestions } from "./data/questions/food.js";
import { generalQuestions } from "./data/questions/general.js";
import { geographyQuestions } from "./data/questions/geography.js";
import { historyQuestions } from "./data/questions/history.js";
import { moviesQuestions } from "./data/questions/movies.js";
import { musicQuestions } from "./data/questions/music.js";
import { scienceQuestions } from "./data/questions/science.js";
import { sportsQuestions } from "./data/questions/sports.js";
import { technologyQuestions } from "./data/questions/technology.js";

const questions = [
  ...animalsQuestions,
  ...foodQuestions,
  ...generalQuestions,
  ...geographyQuestions,
  ...historyQuestions,
  ...moviesQuestions,
  ...musicQuestions,
  ...scienceQuestions,
  ...sportsQuestions,
  ...technologyQuestions
];

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
const SETTINGS_APPLIED_DELAY = 900;
const AUTO_CHECK_DELAY = 180;

const QUESTION_AMOUNT_OPTIONS = [
  { value: "5", label: "Quick — 5 questions" },
  { value: "10", label: "Standard — 10 questions" },
  { value: "15", label: "Challenge — 15 questions" },
  { value: "20", label: "Marathon — 20 questions" },
  { value: "25", label: "Ultimate — 25 questions" }
];

const MIXED_DISTRIBUTIONS = {
  5: { easy: 2, medium: 1, hard: 1, expert: 1 },
  10: { easy: 3, medium: 3, hard: 2, expert: 2 },
  15: { easy: 5, medium: 4, hard: 3, expert: 3 },
  20: { easy: 6, medium: 6, hard: 4, expert: 4 },
  25: { easy: 8, medium: 7, hard: 5, expert: 5 }
};

const CATEGORY_LABELS = {
  general: "General",
  geography: "Geography",
  history: "History",
  science: "Science",
  animals: "Animals",
  food: "Food",
  sports: "Sports",
  movies: "Movies",
  music: "Music",
  technology: "Technology"
};

const DIFFICULTY_LABELS = {
  mixed: "Mixed",
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
  expert: "Expert"
};

const startScreen = document.getElementById("startScreen");
const optionsScreen = document.getElementById("optionsScreen");
const creditsScreen = document.getElementById("creditsScreen");
const quizScreen = document.getElementById("quizScreen");

const startBtn = document.getElementById("startBtn");
const openOptionsBtn = document.getElementById("openOptionsBtn");
const closeOptionsBtn = document.getElementById("closeOptionsBtn");
const openCreditsBtn = document.getElementById("openCreditsBtn");
const closeCreditsBtn = document.getElementById("closeCreditsBtn");
const backToMenuBtn = document.getElementById("backToMenuBtn");

const difficultySelect = document.getElementById("difficultySelect");
const amountSelect = document.getElementById("amountSelect");
const previewDifficulty = document.getElementById("previewDifficulty");
const previewCategories = document.getElementById("previewCategories");
const previewAmount = document.getElementById("previewAmount");

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

const settings = {
  difficulty: "mixed",
  amount: "10",
  categories: [
    "general",
    "geography",
    "history",
    "science",
    "animals",
    "food",
    "sports",
    "movies",
    "music",
    "technology"
  ]
};

function validateRequiredElements() {
  const requiredElements = [
    startScreen,
    optionsScreen,
    creditsScreen,
    quizScreen,
    startBtn,
    openOptionsBtn,
    closeOptionsBtn,
    openCreditsBtn,
    closeCreditsBtn,
    backToMenuBtn,
    difficultySelect,
    amountSelect,
    previewDifficulty,
    previewCategories,
    previewAmount,
    quizForm,
    questionElement,
    answerText0,
    answerText1,
    answerText2,
    answerText3,
    progressElement,
    scoreElement,
    scoreBar,
    feedbackElement,
    restartBtn,
    timerText,
    timerBar
  ];

  for (let i = 0; i < requiredElements.length; i++) {
    if (!requiredElements[i]) {
      throw new Error("A required HTML element is missing. Please check index.html.");
    }
  }
}

function getAnswerInputs() {
  return document.querySelectorAll('input[name="answer"]');
}

function getAnswerOptions() {
  return document.querySelectorAll(".answer-option");
}

function getCategoryInputs() {
  return document.querySelectorAll('.category-grid input[type="checkbox"]');
}

function shuffleArray(array) {
  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    const temporaryValue = shuffledArray[i];
    shuffledArray[i] = shuffledArray[randomIndex];
    shuffledArray[randomIndex] = temporaryValue;
  }

  return shuffledArray;
}

function hideAllScreens() {
  startScreen.hidden = true;
  optionsScreen.hidden = true;
  creditsScreen.hidden = true;
  quizScreen.hidden = true;

  startScreen.style.display = "none";
  optionsScreen.style.display = "none";
  creditsScreen.style.display = "none";
  quizScreen.style.display = "none";
}

function showStartScreen() {
  stopTimer();
  hideAllScreens();

  startScreen.hidden = false;
  startScreen.style.display = "flex";

  restartBtn.style.display = "none";
  backToMenuBtn.style.display = "none";
  quizForm.style.display = "block";

  setFeedback("Select an answer", "neutral");
}

function showOptionsScreen() {
  stopTimer();
  syncOptionsUIWithSettings();
  resetApplySettingsButton();
  hideAllScreens();

  optionsScreen.hidden = false;
  optionsScreen.style.display = "flex";
}

function showCreditsScreen() {
  stopTimer();
  hideAllScreens();

  creditsScreen.hidden = false;
  creditsScreen.style.display = "flex";
}

function showQuizScreen() {
  hideAllScreens();

  quizScreen.hidden = false;
  quizScreen.style.display = "block";
}

function populateAmountOptions() {
  amountSelect.innerHTML = "";

  for (let i = 0; i < QUESTION_AMOUNT_OPTIONS.length; i++) {
    const optionConfig = QUESTION_AMOUNT_OPTIONS[i];
    const optionElement = document.createElement("option");

    optionElement.value = optionConfig.value;
    optionElement.textContent = optionConfig.label;

    amountSelect.appendChild(optionElement);
  }
}

function syncOptionsUIWithSettings() {
  difficultySelect.value = settings.difficulty;
  amountSelect.value = settings.amount;

  const categoryInputs = getCategoryInputs();

  for (let i = 0; i < categoryInputs.length; i++) {
    const input = categoryInputs[i];
    input.checked = settings.categories.includes(input.value);
  }
}

function readSelectedCategories() {
  const categoryInputs = getCategoryInputs();
  const selectedCategories = [];

  for (let i = 0; i < categoryInputs.length; i++) {
    if (categoryInputs[i].checked) {
      selectedCategories.push(categoryInputs[i].value);
    }
  }

  return selectedCategories;
}

function formatCategoriesPreview(categories) {
  const allCategories = Object.keys(CATEGORY_LABELS);

  if (categories.length === allCategories.length) {
    return "All";
  }

  if (categories.length === 0) {
    return "None";
  }

  if (categories.length <= 3) {
    return categories.map(function (category) {
      return CATEGORY_LABELS[category];
    }).join(", ");
  }

  const firstThree = categories.slice(0, 3).map(function (category) {
    return CATEGORY_LABELS[category];
  });

  const remainingCount = categories.length - 3;
  return `${firstThree.join(", ")} +${remainingCount} more`;
}

function updateSettingsPreview() {
  previewDifficulty.textContent = DIFFICULTY_LABELS[settings.difficulty];
  previewCategories.textContent = formatCategoriesPreview(settings.categories);
  previewAmount.textContent = settings.amount;
}

function saveSettingsFromOptions() {
  const selectedCategories = readSelectedCategories();

  if (selectedCategories.length === 0) {
    alert("Please select at least one category.");
    return false;
  }

  settings.difficulty = difficultySelect.value;
  settings.amount = amountSelect.value;
  settings.categories = selectedCategories;

  updateSettingsPreview();
  return true;
}

function resetApplySettingsButton() {
  closeOptionsBtn.classList.remove("settings-applied");
  closeOptionsBtn.textContent = "Apply Settings";
  closeOptionsBtn.disabled = false;
}

function showSettingsAppliedFeedback() {
  closeOptionsBtn.classList.add("settings-applied");
  closeOptionsBtn.textContent = "Settings Applied";
  closeOptionsBtn.disabled = true;
}

function getQuestionAmountNumber() {
  return Number(settings.amount);
}

function getQuestionPoolByCategories(selectedCategories) {
  return questions.filter(function (question) {
    return selectedCategories.includes(question.category);
  });
}

function getQuestionPoolByDifficulty(questionPool, difficulty) {
  return questionPool.filter(function (question) {
    return question.difficulty === difficulty;
  });
}

function getMixedDistribution(amount) {
  const distribution = MIXED_DISTRIBUTIONS[amount];

  if (!distribution) {
    throw new Error(`No mixed distribution exists for ${amount} questions.`);
  }

  return distribution;
}

function prepareQuestionForQuiz(question) {
  return {
    question: question.question,
    answers: shuffleArray(question.answers),
    correct: question.correct,
    difficulty: question.difficulty,
    category: question.category
  };
}

function buildFixedDifficultyQuiz(questionPool, difficulty, amount) {
  const difficultyPool = getQuestionPoolByDifficulty(questionPool, difficulty);

  if (difficultyPool.length < amount) {
    throw new Error(
      `Not enough ${difficulty} questions available for the selected categories.`
    );
  }

  const selectedQuestions = shuffleArray(difficultyPool).slice(0, amount);

  return selectedQuestions.map(function (question) {
    return prepareQuestionForQuiz(question);
  });
}

function buildMixedQuiz(questionPool, amount) {
  const distribution = getMixedDistribution(amount);
  const selectedQuestions = [];
  const difficultyLevels = ["easy", "medium", "hard", "expert"];

  for (let i = 0; i < difficultyLevels.length; i++) {
    const difficulty = difficultyLevels[i];
    const requiredAmount = distribution[difficulty];
    const difficultyPool = getQuestionPoolByDifficulty(questionPool, difficulty);

    if (difficultyPool.length < requiredAmount) {
      throw new Error(
        `Not enough ${difficulty} questions available for the selected categories.`
      );
    }

    const chosenQuestions = shuffleArray(difficultyPool).slice(0, requiredAmount);

    for (let j = 0; j < chosenQuestions.length; j++) {
      selectedQuestions.push(prepareQuestionForQuiz(chosenQuestions[j]));
    }
  }

  return shuffleArray(selectedQuestions);
}

function buildQuizFromSettings() {
  const amount = getQuestionAmountNumber();
  const selectedCategories = settings.categories;
  const questionPool = getQuestionPoolByCategories(selectedCategories);

  if (!Array.isArray(questions) || questions.length === 0) {
    throw new Error("No questions were loaded. Please check your question files.");
  }

  if (questionPool.length < amount) {
    throw new Error("Not enough questions available for the selected categories.");
  }

  if (settings.difficulty === "mixed") {
    return buildMixedQuiz(questionPool, amount);
  }

  return buildFixedDifficultyQuiz(questionPool, settings.difficulty, amount);
}

function createQuizQuestionsFromSettings() {
  quizQuestions = buildQuizFromSettings();
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

  if (!currentQuestion) {
    showFinalScreen();
    return;
  }

  questionElement.textContent = currentQuestion.question;
  answerText0.textContent = currentQuestion.answers[0];
  answerText1.textContent = currentQuestion.answers[1];
  answerText2.textContent = currentQuestion.answers[2];
  answerText3.textContent = currentQuestion.answers[3];

  quizForm.style.display = "block";
  restartBtn.style.display = "none";
  backToMenuBtn.style.display = "none";

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
  backToMenuBtn.style.display = "block";
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

  if (correctOption) {
    correctOption.classList.add("correct");
  }

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
  stopTimer();
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
  if (isCheckingAnswer) {
    return;
  }

  setFeedback("Time is up!", "wrong");
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
    createQuizQuestionsFromSettings();
  } catch (error) {
    questionElement.textContent = "Could not start quiz.";
    progressElement.textContent = "Error";
    scoreElement.textContent = "Score: 0";
    scoreBar.style.width = "0%";
    timerText.textContent = "Time left: 0";
    timerBar.style.width = "0%";
    quizForm.style.display = "none";
    restartBtn.style.display = "block";
    backToMenuBtn.style.display = "block";
    setFeedback(error.message, "wrong");
    return;
  }

  restartBtn.style.display = "none";
  backToMenuBtn.style.display = "none";
  quizForm.style.display = "block";

  showQuestion();
}

quizForm.addEventListener("change", function (event) {
  if (isCheckingAnswer) {
    return;
  }

  if (event.target.name === "answer") {
    selectedAnswerIndex = Number(event.target.value);
    setFeedback("Answer selected", "neutral");

    setTimeout(function () {
      if (!isCheckingAnswer) {
        checkAnswer();
      }
    }, AUTO_CHECK_DELAY);
  }
});

startBtn.addEventListener("click", function () {
  startQuiz();
});

restartBtn.addEventListener("click", function () {
  startQuiz();
});

backToMenuBtn.addEventListener("click", function () {
  stopTimer();
  showStartScreen();
});

openOptionsBtn.addEventListener("click", function () {
  showOptionsScreen();
});

closeOptionsBtn.addEventListener("click", function () {
  const didSaveSettings = saveSettingsFromOptions();

  if (!didSaveSettings) {
    return;
  }

  showSettingsAppliedFeedback();

  setTimeout(function () {
    resetApplySettingsButton();
    showStartScreen();
  }, SETTINGS_APPLIED_DELAY);
});

openCreditsBtn.addEventListener("click", function () {
  showCreditsScreen();
});

closeCreditsBtn.addEventListener("click", function () {
  showStartScreen();
});

try {
  validateRequiredElements();
  populateAmountOptions();
  syncOptionsUIWithSettings();
  updateSettingsPreview();

  backToMenuBtn.style.display = "none";
  restartBtn.style.display = "none";

  showStartScreen();
} catch (error) {
  console.error(error);
  document.body.innerHTML = `
    <main style="padding: 2rem; font-family: sans-serif;">
      <h1>Trivia Quiz Error</h1>
      <p>${error.message}</p>
      <p>Please check your HTML structure and imported question files.</p>
    </main>
  `;
}
