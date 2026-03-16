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
  clearSavedGame,
  loadAppSettings,
  saveAppSettings,
  applySavedSettingsToState
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
import {
  playSound,
  unlockAudio,
  syncAudioLive
} from "./audio/sound.js";

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

function loadStoredAppSettings() {
  const savedSettings = loadAppSettings();

  if (!savedSettings) {
    return;
  }

  applySavedSettingsToState(savedSettings);
}

function saveGameplaySettings() {
  const selectedCategories = getSelectedCategories();

  if (selectedCategories.length === 0) {
    alert("Please select at least one category.");
    return false;
  }

  state.settings.difficulty = elements.difficultySelect.value;
  state.settings.amount = elements.amountSelect.value;
  state.settings.categories = selectedCategories;

  updateSettingsPreview();
  saveAppSettings();

  return true;
}

function applyLiveAudioSettings() {
  state.settings.soundEffects = elements.soundEffectsToggle.checked;
  state.settings.music = elements.musicToggle.checked;
  state.settings.volume = Number(elements.volumeSlider.value) / 100;

  syncAudioLive();
  saveAppSettings();
}

function unlockAudioIfNeeded() {
  unlockAudio();
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

    unlockAudioIfNeeded();
    playSound("click");

    state.selectedAnswerIndex = Number(event.target.value);
    setFeedback("Answer selected", "neutral");

    setTimeout(function () {
      if (!state.isCheckingAnswer && !state.isPaused) {
        checkAnswer();
      }
    }, AUTO_CHECK_DELAY);
  });
}

function setupAudioSettingsListeners() {
  elements.soundEffectsToggle.addEventListener("change", function () {
    unlockAudioIfNeeded();
    applyLiveAudioSettings();
  });

  elements.musicToggle.addEventListener("change", function () {
    unlockAudioIfNeeded();
    applyLiveAudioSettings();
  });

  elements.volumeSlider.addEventListener("input", function () {
    unlockAudioIfNeeded();
    applyLiveAudioSettings();
  });
}

function setupButtonListeners() {
  elements.startBtn.addEventListener("click", function () {
    unlockAudioIfNeeded();
    playSound("click");
    startQuiz();
  });

  elements.restartBtn.addEventListener("click", function () {
    unlockAudioIfNeeded();
    playSound("click");
    startQuiz();
  });

  if (elements.continueBtn) {
    elements.continueBtn.addEventListener("click", function () {
      unlockAudioIfNeeded();
      playSound("click");
      continueQuiz();
    });
  }

  if (elements.pauseBtn) {
    elements.pauseBtn.addEventListener("click", function () {
      unlockAudioIfNeeded();
      playSound("click");
      pauseQuiz();
      showQuizScreen();
      showQuestion();
    });
  }

  if (elements.resumeBtn) {
    elements.resumeBtn.addEventListener("click", function () {
      unlockAudioIfNeeded();
      playSound("click");
      resumeQuiz();
      showQuizScreen();
      showQuestion();
      resumeTimer(handleTimeUp);
    });
  }

  if (elements.stopBtn) {
    elements.stopBtn.addEventListener("click", function () {
      unlockAudioIfNeeded();
      playSound("click");
      stopQuiz();
      showStartScreen();
    });
  }

  elements.backToMenuBtn.addEventListener("click", function () {
    unlockAudioIfNeeded();
    playSound("click");
    stopTimer();
    showStartScreen();
  });

  elements.openOptionsBtn.addEventListener("click", function () {
    unlockAudioIfNeeded();
    playSound("click");
    showOptionsScreen();
  });

  elements.closeOptionsBtn.addEventListener("click", function () {
    unlockAudioIfNeeded();
    playSound("click");

    const didSaveSettings = saveGameplaySettings();

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
    unlockAudioIfNeeded();
    playSound("click");
    showCreditsScreen();
  });

  elements.closeCreditsBtn.addEventListener("click", function () {
    unlockAudioIfNeeded();
    playSound("click");
    showStartScreen();
  });
}

/* =========================
   App setup
========================= */

function initializeApp() {
  validateRequiredElements();

  loadStoredAppSettings();

  populateAmountOptions();
  syncOptionsUIWithSettings();
  updateSettingsPreview();
  syncSavedGameState();
  syncAudioLive();

  setupQuizFormListener();
  setupAudioSettingsListeners();
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