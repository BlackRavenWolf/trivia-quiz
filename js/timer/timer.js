/*
  Trivia Quiz

  Copyright (c) 2026 Dominique Striekwold

  Licensed under the MIT License.
  See the LICENSE file in the repository for details.

  Built as part of a web development learning journey.
*/

import { QUIZ_TIME_PER_QUESTION } from "../config/quiz-config.js";
import { state } from "../quiz/quiz-state.js";
import { resetTimerUI, updateTimerUI } from "../ui/timer-ui.js";

/* =========================
   Timer controls
========================= */

export function stopTimer() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
}

export function startTimer(onTimeUp) {
  stopTimer();

  state.timeLeft = QUIZ_TIME_PER_QUESTION;
  resetTimerUI();

  state.timerInterval = setInterval(function () {
    state.timeLeft--;
    updateTimerUI();

    if (state.timeLeft <= 0) {
      stopTimer();

      if (typeof onTimeUp === "function") {
        onTimeUp();
      }
    }
  }, 1000);
}