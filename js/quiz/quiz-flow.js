/*
Trivia Quiz

Copyright (c) 2026 Dominique Striekwold

Licensed under the MIT License.
See the LICENSE file in the repository for details.

Built as part of a web development learning journey.
*/

import {
  CHECKING_DELAY,
  RESULT_DELAY,
  WRONG_REVEAL_DELAY
} from "../config/quiz-config.js";

import { state } from "./quiz-state.js";
import { getAnswerOptions } from "../dom/elements.js";

import {
  showQuestion,
  showFinalScreen,
  disableAnswers,
  fadeOutAllExcept
} from "../ui/render.js";

import { setFeedback } from "../ui/feedback.js";

import { stopTimer, startTimer } from "../timer/timer.js";

function getSelectedAnswerIndex() {
  const selectedInput = document.querySelector('input[name="answer"]:checked');

  if (!selectedInput) {
    return null;
  }

  return Number(selectedInput.value);
}

export function handleTimeUp() {
  if (state.isCheckingAnswer) {
    return;
  }

  setFeedback("Time is up!", "wrong");
  checkAnswer();
}

export function goToNextQuestion() {
  state.currentQuestionIndex++;

  if (state.currentQuestionIndex < state.quizQuestions.length) {
    showQuestion();
    startTimer(handleTimeUp);
  } else {
    showFinalScreen();
  }
}

export function handleCorrectAnswer(selectedOption) {
  state.score++;

  if (selectedOption) {
    selectedOption.classList.add("correct");
  }

  fadeOutAllExcept(state.selectedAnswerIndex);
  setFeedback("Get ready...", "neutral");

  setTimeout(function () {
    goToNextQuestion();
  }, RESULT_DELAY);
}

export function handleWrongAnswer(selectedOption, correctIndex) {
  const answerOptions = getAnswerOptions();
  const correctOption = answerOptions[correctIndex];

  if (selectedOption) {
    selectedOption.classList.add("wrong");
  }

  if (correctOption) {
    correctOption.classList.add("correct");
  }

  setTimeout(function () {
    fadeOutAllExcept(correctIndex);
    setFeedback("Get ready...", "neutral");

    setTimeout(function () {
      goToNextQuestion();
    }, RESULT_DELAY - 300);
  }, WRONG_REVEAL_DELAY);
}

export function checkAnswer() {
  if (state.isCheckingAnswer) {
    return;
  }

  state.isCheckingAnswer = true;
  stopTimer();
  disableAnswers();
  setFeedback("Checking answer...", "neutral");

  const currentQuestion = state.quizQuestions[state.currentQuestionIndex];
  const currentAnswerIndex = getSelectedAnswerIndex();
  const correctIndex = currentQuestion.answers.indexOf(currentQuestion.correct);
  const answerOptions = getAnswerOptions();
  const selectedOption =
    currentAnswerIndex !== null ? answerOptions[currentAnswerIndex] : null;

  setTimeout(function () {
    if (currentAnswerIndex === correctIndex) {
      handleCorrectAnswer(selectedOption);
    } else {
      handleWrongAnswer(selectedOption, correctIndex);
    }
  }, CHECKING_DELAY);
}