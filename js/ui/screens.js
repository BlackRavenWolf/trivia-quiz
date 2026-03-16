/*
  Trivia Quiz

  Copyright (c) 2026 Dominique Striekwold

  Licensed under the MIT License.
  See the LICENSE file in the repository for details.

  Built as part of a web development learning journey.
*/

import { elements } from "../dom/elements.js";
import { stopTimer } from "../timer/timer.js";
import { state } from "../quiz/quiz-state.js";
import { hasSavedGame } from "../quiz/quiz-storage.js";
import {
  syncOptionsUIWithSettings,
  resetApplySettingsButton
} from "./render.js";
import { setFeedback } from "./feedback.js";

/* =========================
   Screen helpers
========================= */

function hideScreen(screen) {
  if (!screen) {
    return;
  }

  screen.hidden = true;
  screen.style.display = "none";
}

function showScreen(screen, displayType) {
  if (!screen) {
    return;
  }

  screen.hidden = false;
  screen.style.display = displayType;
}

function hideAllScreens() {
  hideScreen(elements.startScreen);
  hideScreen(elements.optionsScreen);
  hideScreen(elements.creditsScreen);
  hideScreen(elements.quizScreen);
}

function setElementDisplay(element, displayValue) {
  if (element) {
    element.style.display = displayValue;
  }
}

function resetScreenScroll(screen) {
  if (!screen) {
    return;
  }

  screen.scrollTop = 0;
}

/* =========================
   Button visibility helpers
========================= */

function hideQuizActionButtons() {
  setElementDisplay(elements.pauseBtn, "none");
  setElementDisplay(elements.resumeBtn, "none");
  setElementDisplay(elements.stopBtn, "none");
  setElementDisplay(elements.restartBtn, "none");
  setElementDisplay(elements.backToMenuBtn, "none");
}

function updateContinueButtonVisibility() {
  if (!elements.continueBtn || !elements.startBtn) {
    return;
  }

  const savedGameExists = hasSavedGame();

  elements.continueBtn.style.display = savedGameExists ? "block" : "none";
  elements.continueBtn.disabled = !savedGameExists;

  elements.startBtn.textContent = savedGameExists
    ? "Start New Game"
    : "Start Quiz";
}

function showPauseControls() {
  setElementDisplay(elements.pauseBtn, "none");
  setElementDisplay(elements.resumeBtn, "block");
  setElementDisplay(elements.stopBtn, "block");
}

function showQuizControls() {
  setElementDisplay(elements.pauseBtn, "block");
  setElementDisplay(elements.resumeBtn, "none");
  setElementDisplay(elements.stopBtn, "none");
}

/* =========================
   Screen views
========================= */

export function showStartScreen() {
  stopTimer();
  hideAllScreens();

  showScreen(elements.startScreen, "flex");

  hideQuizActionButtons();
  setElementDisplay(elements.quizForm, "block");

  updateContinueButtonVisibility();

  setFeedback("Ready to start?", "neutral");
}

export function showOptionsScreen() {
  stopTimer();
  syncOptionsUIWithSettings();
  resetApplySettingsButton();
  hideAllScreens();

  showScreen(elements.optionsScreen, "flex");
  resetScreenScroll(elements.optionsScreen);
}

export function showCreditsScreen() {
  stopTimer();
  hideAllScreens();

  showScreen(elements.creditsScreen, "flex");
  resetScreenScroll(elements.creditsScreen);
}

export function showQuizScreen() {
  hideAllScreens();
  showScreen(elements.quizScreen, "block");

  setElementDisplay(elements.restartBtn, "none");
  setElementDisplay(elements.backToMenuBtn, "none");

  if (state.isPaused) {
    setElementDisplay(elements.quizForm, "none");
    showPauseControls();
    return;
  }

  setElementDisplay(elements.quizForm, "block");
  showQuizControls();
}