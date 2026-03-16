/*
  Trivia Quiz

  Copyright (c) 2026 Dominique Striekwold

  Licensed under the MIT License.
  See the LICENSE file in the repository for details.

  Built as part of a web development learning journey.
*/

import { elements } from "../dom/elements.js";
import { state } from "../quiz/quiz-state.js";

/* =========================
   Meta info (progress + score)
========================= */

export function updateMeta() {
  const currentNumber = state.currentQuestionIndex + 1;
  const total = state.quizQuestions.length;

  elements.progressElement.textContent =
    `Question ${currentNumber} / ${total}`;

  elements.scoreElement.textContent =
    `Score: ${state.score}`;

  const progressPercent =
    ((currentNumber - 1) / total) * 100;

  elements.scoreBar.style.width = `${progressPercent}%`;
}

/* =========================
   Feedback message
========================= */

export function setFeedback(message, type) {
  const feedback = elements.feedbackElement;

  feedback.textContent = message;
  feedback.className = "feedback";

  if (type === "correct") {
    feedback.classList.add("feedback-correct");
  } else if (type === "wrong") {
    feedback.classList.add("feedback-wrong");
  } else {
    feedback.classList.add("feedback-neutral");
  }
}