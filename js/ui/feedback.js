/*
Trivia Quiz

Copyright (c) 2026 Dominique Striekwold

Licensed under the MIT License.
See the LICENSE file in the repository for details.

Built as part of a web development learning journey.
*/

import { elements } from "../dom/elements.js";
import { state } from "../quiz/quiz-state.js";

export function updateMeta() {
  elements.progressElement.textContent =
    `Question ${state.currentQuestionIndex + 1} / ${state.quizQuestions.length}`;

  elements.scoreElement.textContent = `Score: ${state.score}`;

  const progressPercent =
    (state.currentQuestionIndex / state.quizQuestions.length) * 100;

  elements.scoreBar.style.width = `${progressPercent}%`;
}

export function setFeedback(message, type) {
  elements.feedbackElement.textContent = message;
  elements.feedbackElement.className = "feedback";

  if (type === "correct") {
    elements.feedbackElement.classList.add("feedback-correct");
  } else if (type === "wrong") {
    elements.feedbackElement.classList.add("feedback-wrong");
  } else {
    elements.feedbackElement.classList.add("feedback-neutral");
  }
}
