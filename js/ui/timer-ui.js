/*
Trivia Quiz

Copyright (c) 2026 Dominique Striekwold

Licensed under the MIT License.
See the LICENSE file in the repository for details.

Built as part of a web development learning journey.
*/

import { elements } from "../dom/elements.js";
import { state } from "../quiz/quiz-state.js";
import { QUIZ_TIME_PER_QUESTION } from "../config/quiz-config.js";

export function resetTimerUI() {
  state.timeLeft = QUIZ_TIME_PER_QUESTION;
  elements.timerText.textContent = `Time left: ${state.timeLeft}`;
  elements.timerBar.style.width = "100%";
  elements.timerBar.style.background =
    "linear-gradient(90deg, #aa86f8 0%, #7f52e5 100%)";
}

export function updateTimerUI() {
  elements.timerText.textContent = `Time left: ${state.timeLeft}`;

  const timerPercent = (state.timeLeft / QUIZ_TIME_PER_QUESTION) * 100;
  elements.timerBar.style.width = `${timerPercent}%`;

  if (state.timeLeft <= 5) {
    elements.timerBar.style.background =
      "linear-gradient(90deg, #f08aa8 0%, #d85a74 100%)";
  } else {
    elements.timerBar.style.background =
      "linear-gradient(90deg, #aa86f8 0%, #7f52e5 100%)";
  }
}
