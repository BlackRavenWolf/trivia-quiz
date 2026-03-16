/*
  Trivia Quiz

  Copyright (c) 2026 Dominique Striekwold

  Licensed under the MIT License.
  See the LICENSE file in the repository for details.

  Built as part of a web development learning journey.
*/

import { elements } from "../dom/elements.js";
import { stopTimer } from "../timer/timer.js";
import {
  syncOptionsUIWithSettings,
  resetApplySettingsButton
} from "./render.js";
import { setFeedback } from "./feedback.js";

/* =========================
   Screen helpers
========================= */

function hideScreen(screen) {
  screen.hidden = true;
  screen.style.display = "none";
}

function showScreen(screen, displayType) {
  screen.hidden = false;
  screen.style.display = displayType;
}

function hideAllScreens() {
  hideScreen(elements.startScreen);
  hideScreen(elements.optionsScreen);
  hideScreen(elements.creditsScreen);
  hideScreen(elements.quizScreen);
}

/* =========================
   Screen views
========================= */

export function showStartScreen() {
  stopTimer();
  hideAllScreens();

  showScreen(elements.startScreen, "flex");

  elements.restartBtn.style.display = "none";
  elements.backToMenuBtn.style.display = "none";
  elements.quizForm.style.display = "block";

  setFeedback("Select an answer", "neutral");
}

export function showOptionsScreen() {
  stopTimer();
  syncOptionsUIWithSettings();
  resetApplySettingsButton();
  hideAllScreens();

  showScreen(elements.optionsScreen, "flex");
}

export function showCreditsScreen() {
  stopTimer();
  hideAllScreens();

  showScreen(elements.creditsScreen, "flex");
}

export function showQuizScreen() {
  hideAllScreens();

  showScreen(elements.quizScreen, "block");
}