/*
Trivia Quiz

Copyright (c) 2026 Dominique Striekwold

Licensed under the MIT License.
See the LICENSE file in the repository for details.

Built as part of a web development learning journey.
*/

import {
  AUTO_CHECK_DELAY,
  SETTINGS_APPLIED_DELAY
} from "./config/quiz-config.js";

import {
  elements,
  validateRequiredElements,
  getCategoryInputs
} from "./dom/elements.js";

import { state, resetQuizState } from "./quiz/quiz-state.js";
import { buildQuizFromSettings } from "./quiz/quiz-builder.js";
import { checkAnswer, handleTimeUp } from "./quiz/quiz-flow.js";

import {
  populateAmountOptions,
  syncOptionsUIWithSettings,
  updateSettingsPreview,
  resetApplySettingsButton,
  showSettingsAppliedFeedback,
  showQuestion,
  showQuizErrorScreen
} from "./ui/render.js";

import {
  showStartScreen,
  showOptionsScreen,
  showCreditsScreen,
  showQuizScreen
} from "./ui/screens.js";

import { setFeedback } from "./ui/feedback.js";

import { startTimer, stopTimer } from "./timer/timer.js";

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

function saveSettingsFromOptions() {
  const selectedCategories = readSelectedCategories();

  if (selectedCategories.length === 0) {
    alert("Please select at least one category.");
    return false;
  }

  state.settings.difficulty = elements.difficultySelect.value;
  state.settings.amount = elements.amountSelect.value;
  state.settings.categories = selectedCategories;

  updateSettingsPreview();
  return true;
}

function startQuiz() {
  stopTimer();
  resetQuizState();

  showQuizScreen();

  try {
    state.quizQuestions = buildQuizFromSettings();
  } catch (error) {
    showQuizErrorScreen(error.message);
    return;
  }

  showQuestion();
  startTimer(handleTimeUp);
}

function setupQuizFormListener() {
  elements.quizForm.addEventListener("change", function (event) {
    if (state.isCheckingAnswer) {
      return;
    }

    if (event.target.name === "answer") {
      state.selectedAnswerIndex = Number(event.target.value);
      setFeedback("Answer selected", "neutral");

      setTimeout(function () {
        if (!state.isCheckingAnswer) {
          checkAnswer();
        }
      }, AUTO_CHECK_DELAY);
    }
  });
}

function setupButtonListeners() {
  elements.startBtn.addEventListener("click", function () {
    startQuiz();
  });

  elements.restartBtn.addEventListener("click", function () {
    startQuiz();
  });

  elements.backToMenuBtn.addEventListener("click", function () {
    stopTimer();
    showStartScreen();
  });

  elements.openOptionsBtn.addEventListener("click", function () {
    showOptionsScreen();
  });

  elements.closeOptionsBtn.addEventListener("click", function () {
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

  elements.openCreditsBtn.addEventListener("click", function () {
    showCreditsScreen();
  });

  elements.closeCreditsBtn.addEventListener("click", function () {
    showStartScreen();
  });
}

function initializeApp() {
  validateRequiredElements();
  populateAmountOptions();
  syncOptionsUIWithSettings();
  updateSettingsPreview();

  setupQuizFormListener();
  setupButtonListeners();

  elements.backToMenuBtn.style.display = "none";
  elements.restartBtn.style.display = "none";

  showStartScreen();
}

try {
  initializeApp();
} catch (error) {
  console.error(error);
  document.body.innerHTML = `
    <main style="padding: 2rem; font-family: sans-serif;">
      <h1>Trivia Quiz Error</h1>
      <p>${error.message}</p>
      <p>Please check your HTML structure and imported JavaScript files.</p>
    </main>
  `;
}
