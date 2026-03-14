/*
Trivia Quiz

Copyright (c) 2026 Dominique Striekwold

Licensed under the MIT License.
See the LICENSE file in the repository for details.

Built as part of a web development learning journey.
*/

import { elements, getAnswerInputs, getAnswerOptions, getCategoryInputs } from "../dom/elements.js";
import { state } from "../quiz/quiz-state.js";
import {
  QUESTION_AMOUNT_OPTIONS,
  CATEGORY_LABELS,
  DIFFICULTY_LABELS
} from "../config/quiz-config.js";
import { updateMeta, setFeedback } from "./feedback.js";

export function populateAmountOptions() {
  elements.amountSelect.innerHTML = "";

  for (let i = 0; i < QUESTION_AMOUNT_OPTIONS.length; i++) {
    const optionConfig = QUESTION_AMOUNT_OPTIONS[i];
    const optionElement = document.createElement("option");

    optionElement.value = optionConfig.value;
    optionElement.textContent = optionConfig.label;

    elements.amountSelect.appendChild(optionElement);
  }
}

export function syncOptionsUIWithSettings() {
  elements.difficultySelect.value = state.settings.difficulty;
  elements.amountSelect.value = state.settings.amount;

  const categoryInputs = getCategoryInputs();

  for (let i = 0; i < categoryInputs.length; i++) {
    const input = categoryInputs[i];
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

export function clearSelection() {
  const answerInputs = getAnswerInputs();

  for (let i = 0; i < answerInputs.length; i++) {
    answerInputs[i].checked = false;
    answerInputs[i].disabled = false;
  }

  state.selectedAnswerIndex = null;
}

export function disableAnswers() {
  const answerInputs = getAnswerInputs();

  for (let i = 0; i < answerInputs.length; i++) {
    answerInputs[i].disabled = true;
  }
}

export function clearAnswerStateClasses() {
  const answerOptions = getAnswerOptions();

  for (let i = 0; i < answerOptions.length; i++) {
    answerOptions[i].classList.remove("correct", "wrong", "fade-out");
    answerOptions[i].style.display = "flex";
  }
}

export function fadeOutAllExcept(keepIndex) {
  const answerOptions = getAnswerOptions();

  for (let i = 0; i < answerOptions.length; i++) {
    if (i !== keepIndex) {
      answerOptions[i].classList.add("fade-out");
    }
  }
}

export function showQuestion() {
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

  elements.quizForm.style.display = "block";
  elements.restartBtn.style.display = "none";
  elements.backToMenuBtn.style.display = "none";

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

  elements.quizForm.style.display = "none";
  setFeedback("Well done!", "correct");

  elements.restartBtn.style.display = "block";
  elements.backToMenuBtn.style.display = "block";
}

export function showQuizErrorScreen(message) {
  elements.questionElement.textContent = "Could not start quiz.";
  elements.progressElement.textContent = "Error";
  elements.scoreElement.textContent = "Score: 0";
  elements.scoreBar.style.width = "0%";
  elements.timerText.textContent = "Time left: 0";
  elements.timerBar.style.width = "0%";
  elements.quizForm.style.display = "none";
  elements.restartBtn.style.display = "block";
  elements.backToMenuBtn.style.display = "block";

  setFeedback(message, "wrong");
}
