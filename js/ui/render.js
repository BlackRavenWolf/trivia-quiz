/*
  Trivia Quiz

  Copyright (c) 2026 Dominique Striekwold

  Licensed under the MIT License.
  See the LICENSE file in the repository for details.

  Built as part of a web development learning journey.
*/

import {
  elements,
  getAnswerInputs,
  getAnswerOptions,
  getCategoryInputs
} from "../dom/elements.js";

import { state } from "../quiz/quiz-state.js";
import {
  QUESTION_AMOUNT_OPTIONS,
  CATEGORY_LABELS,
  DIFFICULTY_LABELS
} from "../config/quiz-config.js";
import { updateMeta, setFeedback } from "./feedback.js";

/* =========================
   Helpers
========================= */

function setElementDisplay(element, displayValue) {
  if (element) {
    element.style.display = displayValue;
  }
}

function hideQuizActionButtons() {
  setElementDisplay(elements.restartBtn, "none");
  setElementDisplay(elements.backToMenuBtn, "none");
  setElementDisplay(elements.resumeBtn, "none");
  setElementDisplay(elements.stopBtn, "none");
}

function showPauseActionButtons() {
  setElementDisplay(elements.restartBtn, "none");
  setElementDisplay(elements.backToMenuBtn, "none");
  setElementDisplay(elements.resumeBtn, "block");
  setElementDisplay(elements.stopBtn, "block");
}

function showFinalActionButtons() {
  setElementDisplay(elements.resumeBtn, "none");
  setElementDisplay(elements.stopBtn, "none");
  setElementDisplay(elements.restartBtn, "block");
  setElementDisplay(elements.backToMenuBtn, "block");
}

function showQuizForm() {
  setElementDisplay(elements.quizForm, "block");
}

function hideQuizForm() {
  setElementDisplay(elements.quizForm, "none");
}

/* =========================
   Options screen
========================= */

export function populateAmountOptions() {
  elements.amountSelect.innerHTML = "";

  for (const option of QUESTION_AMOUNT_OPTIONS) {
    const optionElement = document.createElement("option");
    optionElement.value = option.value;
    optionElement.textContent = option.label;
    elements.amountSelect.appendChild(optionElement);
  }
}

export function syncOptionsUIWithSettings() {
  elements.difficultySelect.value = state.settings.difficulty;
  elements.amountSelect.value = state.settings.amount;

  const categoryInputs = getCategoryInputs();

  for (const input of categoryInputs) {
    input.checked = state.settings.categories.includes(input.value);
  }
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
    return categories
      .map(function (category) {
        return CATEGORY_LABELS[category];
      })
      .join(", ");
  }

  const firstThree = categories.slice(0, 3).map(function (category) {
    return CATEGORY_LABELS[category];
  });

  const remainingCount = categories.length - 3;

  return `${firstThree.join(", ")} +${remainingCount} more`;
}

export function updateSettingsPreview() {
  elements.previewDifficulty.textContent =
    DIFFICULTY_LABELS[state.settings.difficulty];

  elements.previewCategories.textContent =
    formatCategoriesPreview(state.settings.categories);

  elements.previewAmount.textContent = state.settings.amount;
}

export function resetApplySettingsButton() {
  elements.closeOptionsBtn.classList.remove("settings-applied");
  elements.closeOptionsBtn.textContent = "Apply Settings";
  elements.closeOptionsBtn.disabled = false;
}

export function showSettingsAppliedFeedback() {
  elements.closeOptionsBtn.classList.add("settings-applied");
  elements.closeOptionsBtn.textContent = "Settings Applied";
  elements.closeOptionsBtn.disabled = true;
}

/* =========================
   Answer state
========================= */

export function clearSelection() {
  const answerInputs = getAnswerInputs();

  for (const input of answerInputs) {
    input.checked = false;
    input.disabled = false;
  }

  state.selectedAnswerIndex = null;
}

export function disableAnswers() {
  const answerInputs = getAnswerInputs();

  for (const input of answerInputs) {
    input.disabled = true;
  }
}

export function clearAnswerStateClasses() {
  const answerOptions = getAnswerOptions();

  for (const option of answerOptions) {
    option.classList.remove("correct", "wrong", "fade-out");
    option.style.display = "flex";
  }
}

export function fadeOutAllExcept(keepIndex) {
  const answerOptions = getAnswerOptions();

  for (const [index, option] of answerOptions.entries()) {
    if (index !== keepIndex) {
      option.classList.add("fade-out");
    }
  }
}

/* =========================
   Quiz screens
========================= */

export function showPauseScreen() {
  elements.questionElement.textContent = "Game paused";

  hideQuizForm();
  showPauseActionButtons();

  setFeedback("Your progress has been saved.", "neutral");
  updateMeta();
}

export function showQuestion() {
  if (state.isPaused) {
    showPauseScreen();
    return;
  }

  const currentQuestion = state.quizQuestions[state.currentQuestionIndex];

  if (!currentQuestion) {
    showFinalScreen();
    return;
  }

  elements.questionElement.textContent = currentQuestion.question;
  elements.answerText0.textContent = currentQuestion.answers[0];
  elements.answerText1.textContent = currentQuestion.answers[1];
  elements.answerText2.textContent = currentQuestion.answers[2];
  elements.answerText3.textContent = currentQuestion.answers[3];

  showQuizForm();
  hideQuizActionButtons();

  clearSelection();
  clearAnswerStateClasses();

  state.isCheckingAnswer = false;

  setFeedback("Select an answer", "neutral");
  updateMeta();
}

export function showFinalScreen() {
  elements.questionElement.textContent =
    `Quiz finished! Your score is ${state.score} out of ${state.quizQuestions.length}.`;

  elements.progressElement.textContent = "Completed";
  elements.scoreElement.textContent = `Final Score: ${state.score}`;
  elements.scoreBar.style.width = "100%";

  elements.timerText.textContent = "Time left: 0";
  elements.timerBar.style.width = "0%";

  hideQuizForm();
  showFinalActionButtons();

  setFeedback("Well done!", "correct");
}

export function showQuizErrorScreen(message) {
  elements.questionElement.textContent = "Could not start quiz.";
  elements.progressElement.textContent = "Error";
  elements.scoreElement.textContent = "Score: 0";
  elements.scoreBar.style.width = "0%";
  elements.timerText.textContent = "Time left: 0";
  elements.timerBar.style.width = "0%";

  hideQuizForm();
  showFinalActionButtons();

  setFeedback(message, "wrong");
}