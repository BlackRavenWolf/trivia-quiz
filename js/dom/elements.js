/*
  Trivia Quiz

  DOM elements and helper functions
*/

export const elements = {
  startScreen: document.getElementById("startScreen"),
  optionsScreen: document.getElementById("optionsScreen"),
  creditsScreen: document.getElementById("creditsScreen"),
  quizScreen: document.getElementById("quizScreen"),

  startBtn: document.getElementById("startBtn"),
  continueBtn: document.getElementById("continueBtn"),
  pauseBtn: document.getElementById("pauseBtn"),
  resumeBtn: document.getElementById("resumeBtn"),
  stopBtn: document.getElementById("stopBtn"),

  openOptionsBtn: document.getElementById("openOptionsBtn"),
  closeOptionsBtn: document.getElementById("closeOptionsBtn"),
  openCreditsBtn: document.getElementById("openCreditsBtn"),
  closeCreditsBtn: document.getElementById("closeCreditsBtn"),
  backToMenuBtn: document.getElementById("backToMenuBtn"),
  restartBtn: document.getElementById("restartBtn"),

  difficultySelect: document.getElementById("difficultySelect"),
  amountSelect: document.getElementById("amountSelect"),
  previewDifficulty: document.getElementById("previewDifficulty"),
  previewCategories: document.getElementById("previewCategories"),
  previewAmount: document.getElementById("previewAmount"),

  quizForm: document.getElementById("quizForm"),
  questionElement: document.getElementById("question"),
  answerText0: document.getElementById("answerText0"),
  answerText1: document.getElementById("answerText1"),
  answerText2: document.getElementById("answerText2"),
  answerText3: document.getElementById("answerText3"),
  progressElement: document.getElementById("progress"),
  scoreElement: document.getElementById("score"),
  scoreBar: document.getElementById("scoreBar"),
  feedbackElement: document.getElementById("feedback"),

  timerText: document.getElementById("timerText"),
  timerBar: document.getElementById("timerBar")
};

export function validateRequiredElements() {
  const requiredElements = [
    elements.startScreen,
    elements.optionsScreen,
    elements.creditsScreen,
    elements.quizScreen,

    elements.startBtn,
    elements.openOptionsBtn,
    elements.closeOptionsBtn,
    elements.openCreditsBtn,
    elements.closeCreditsBtn,
    elements.backToMenuBtn,
    elements.restartBtn,

    elements.difficultySelect,
    elements.amountSelect,
    elements.previewDifficulty,
    elements.previewCategories,
    elements.previewAmount,

    elements.quizForm,
    elements.questionElement,
    elements.answerText0,
    elements.answerText1,
    elements.answerText2,
    elements.answerText3,
    elements.progressElement,
    elements.scoreElement,
    elements.scoreBar,
    elements.feedbackElement,

    elements.timerText,
    elements.timerBar
  ];

  for (const element of requiredElements) {
    if (!element) {
      throw new Error("A required HTML element is missing. Check index.html.");
    }
  }
}

export function getAnswerInputs() {
  return document.querySelectorAll('input[name="answer"]');
}

export function getAnswerOptions() {
  return document.querySelectorAll(".answer-option");
}

export function getCategoryInputs() {
  return document.querySelectorAll('.category-grid input[type="checkbox"]');
}