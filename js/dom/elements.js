/*
Trivia Quiz

DOM Elements & Helpers

*/

export const elements = {
  /* Screens */

  startScreen: document.getElementById("startScreen"),
  optionsScreen: document.getElementById("optionsScreen"),
  creditsScreen: document.getElementById("creditsScreen"),
  quizScreen: document.getElementById("quizScreen"),

  /* Buttons */

  startBtn: document.getElementById("startBtn"),
  openOptionsBtn: document.getElementById("openOptionsBtn"),
  closeOptionsBtn: document.getElementById("closeOptionsBtn"),
  openCreditsBtn: document.getElementById("openCreditsBtn"),
  closeCreditsBtn: document.getElementById("closeCreditsBtn"),
  backToMenuBtn: document.getElementById("backToMenuBtn"),
  restartBtn: document.getElementById("restartBtn"),

  /* Settings */

  difficultySelect: document.getElementById("difficultySelect"),
  amountSelect: document.getElementById("amountSelect"),
  previewDifficulty: document.getElementById("previewDifficulty"),
  previewCategories: document.getElementById("previewCategories"),
  previewAmount: document.getElementById("previewAmount"),

  /* Quiz */

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

  /* Timer */

  timerText: document.getElementById("timerText"),
  timerBar: document.getElementById("timerBar")
};

/* ===============================
   Validation
================================ */

export function validateRequiredElements() {
  const required = Object.values(elements);

  for (let i = 0; i < required.length; i++) {
    if (!required[i]) {
      throw new Error(
        "A required HTML element is missing. Please check index.html."
      );
    }
  }
}

/* ===============================
   Query Helpers
================================ */

export function getAnswerInputs() {
  return document.querySelectorAll('input[name="answer"]');
}

export function getAnswerOptions() {
  return document.querySelectorAll(".answer-option");
}

export function getCategoryInputs() {
  return document.querySelectorAll(
    '.category-grid input[type="checkbox"]'
  );
}
