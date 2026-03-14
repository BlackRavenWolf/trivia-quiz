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

function hideAllScreens() {
  elements.startScreen.hidden = true;
  elements.optionsScreen.hidden = true;
  elements.creditsScreen.hidden = true;
  elements.quizScreen.hidden = true;

  elements.startScreen.style.display = "none";
  elements.optionsScreen.style.display = "none";
  elements.creditsScreen.style.display = "none";
  elements.quizScreen.style.display = "none";
}

export function showStartScreen() {
  stopTimer();
  hideAllScreens();

  elements.startScreen.hidden = false;
  elements.startScreen.style.display = "flex";

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

  elements.optionsScreen.hidden = false;
  elements.optionsScreen.style.display = "flex";
}

export function showCreditsScreen() {
  stopTimer();
  hideAllScreens();

  elements.creditsScreen.hidden = false;
  elements.creditsScreen.style.display = "flex";
}

export function showQuizScreen() {
  hideAllScreens();

  elements.quizScreen.hidden = false;
  elements.quizScreen.style.display = "block";
}
