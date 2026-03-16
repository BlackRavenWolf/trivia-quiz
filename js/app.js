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
import {
  clearSavedGame
} from "./quiz/quiz-storage.js";
import {
  checkAnswer,
  handleTimeUp,
  pauseQuiz,
  resumeQuiz,
  stopQuiz,
  continueSavedQuiz,
  syncSavedGameState
} from "./quiz/quiz-flow.js";

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
import { startTimer, stopTimer, resumeTimer } from "./timer/timer.js";

/* =========================
   Settings
========================= */

function getSelectedCategories() {
  const categoryInputs = getCategoryInputs();
  const selectedCategories = [];

  for (const input of categoryInputs) {
    if (input.checked) {
      selectedCategories.push(input.value);
    }
  }

  return selectedCategories;
}

function saveSettings() {
  const selectedCategories = getSelectedCategories();

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

/* =========================
   Quiz start
========================= */

function startQuiz() {
  stopTimer();
  clearSavedGame();
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

function continueQuiz() {
  const didContinue = continueSavedQuiz();

  if (!didContinue) {
    showStartScreen();
    setFeedback("No saved game found.", "wrong");
    return;
  }

  showQuizScreen();
  showQuestion();
  resumeTimer(handleTimeUp);
}

/* =========================
   Event listeners
========================= */

function setupQuizFormListener() {
  elements.quizForm.addEventListener("change", function (event) {
    if (state.isCheckingAnswer || state.isPaused) {
      return;
    }

    if (event.target.name !== "answer") {
      return;
    }

    state.selectedAnswerIndex = Number(event.target.value);
    setFeedback("Answer selected", "neutral");

    setTimeout(function () {
      if (!state.isCheckingAnswer && !state.isPaused) {
        checkAnswer();
      }
    }, AUTO_CHECK_DELAY);
  });
}

function setupButtonListeners() {
  elements.startBtn.addEventListener("click", startQuiz);
  elements.restartBtn.addEventListener("click", startQuiz);

  if (elements.continueBtn) {
    elements.continueBtn.addEventListener("click", continueQuiz);
  }

  if (elements.pauseBtn) {
    elements.pauseBtn.addEventListener("click", function () {
      pauseQuiz();
      showQuizScreen();
      showQuestion();
    });
  }

  if (elements.resumeBtn) {
    elements.resumeBtn.addEventListener("click", function () {
      resumeQuiz();
      showQuizScreen();
      showQuestion();
      resumeTimer(handleTimeUp);
    });
  }

  if (elements.stopBtn) {
    elements.stopBtn.addEventListener("click", function () {
      stopQuiz();
      showStartScreen();
    });
  }

  elements.backToMenuBtn.addEventListener("click", function () {
    stopTimer();
    showStartScreen();
  });

  elements.openOptionsBtn.addEventListener("click", function () {
    showOptionsScreen();
  });

  elements.closeOptionsBtn.addEventListener("click", function () {
    const didSaveSettings = saveSettings();

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

/* =========================
   App setup
========================= */

function initializeApp() {
  validateRequiredElements();

  populateAmountOptions();
  syncOptionsUIWithSettings();
  updateSettingsPreview();
  syncSavedGameState();

  setupQuizFormListener();
  setupButtonListeners();

  if (elements.continueBtn) {
    elements.continueBtn.style.display = "none";
  }

  if (elements.pauseBtn) {
    elements.pauseBtn.style.display = "none";
  }

  if (elements.resumeBtn) {
    elements.resumeBtn.style.display = "none";
  }

  if (elements.stopBtn) {
    elements.stopBtn.style.display = "none";
  }

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