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

import {
  state,
  resetQuizState,
  pauseState,
  resumeState,
  markSavedGameExists,
  clearSavedGameFlag
} from "./quiz-state.js";

import {
  saveGameState,
  loadGameState,
  applySavedGameToState,
  clearSavedGame,
  hasSavedGame
} from "./quiz-storage.js";

import { getAnswerOptions } from "../dom/elements.js";
import {
  showQuestion,
  showFinalScreen,
  disableAnswers,
  fadeOutAllExcept
} from "../ui/render.js";
import { setFeedback } from "../ui/feedback.js";
import { stopTimer, startTimer } from "../timer/timer.js";

/* =========================
   Helpers
========================= */

function getSelectedAnswerIndex() {
  const selectedInput = document.querySelector('input[name="answer"]:checked');

  if (!selectedInput) {
    return null;
  }

  return Number(selectedInput.value);
}

function getCorrectAnswerIndex(question) {
  return question.answers.indexOf(question.correct);
}

function resetQuestionState() {
  state.selectedAnswerIndex = null;
  state.isCheckingAnswer = false;
}

function saveProgress() {
  saveGameState();
}

/* =========================
   Saved game state
========================= */

export function syncSavedGameState() {
  if (hasSavedGame()) {
    markSavedGameExists();
    return true;
  }

  clearSavedGameFlag();
  return false;
}

/* =========================
   Quiz flow
========================= */

export function handleTimeUp() {
  if (state.isCheckingAnswer || state.isPaused) {
    return;
  }

  setFeedback("Time is up!", "wrong");
  checkAnswer();
}

export function goToNextQuestion() {
  state.currentQuestionIndex++;
  resetQuestionState();

  if (state.currentQuestionIndex < state.quizQuestions.length) {
    showQuestion();
    saveProgress();
    startTimer(handleTimeUp);
    return;
  }

  clearSavedGame();
  showFinalScreen();
}

/* =========================
   Pause / Resume / Stop
========================= */

export function pauseQuiz() {
  if (state.isPaused || state.isCheckingAnswer) {
    return;
  }

  pauseState();
  stopTimer();
  saveProgress();
}

export function resumeQuiz() {
  if (!state.isPaused) {
    return;
  }

  resumeState();
  showQuestion();
  saveProgress();
  startTimer(handleTimeUp);
}

export function stopQuiz() {
  stopTimer();
  clearSavedGame();
  resetQuizState();
  setFeedback("", "");
}

export function continueSavedQuiz() {
  const savedGame = loadGameState();

  if (!savedGame) {
    return false;
  }

  applySavedGameToState(savedGame);

  state.isPaused = false;
  state.isCheckingAnswer = false;

  showQuestion();
  saveProgress();
  startTimer(handleTimeUp);

  return true;
}

/* =========================
   Answer results
========================= */

function handleCorrectAnswer(selectedOption, selectedAnswerIndex) {
  state.score++;

  if (selectedOption) {
    selectedOption.classList.add("correct");
  }

  fadeOutAllExcept(selectedAnswerIndex);
  setFeedback("Get ready...", "neutral");

  setTimeout(function () {
    goToNextQuestion();
  }, RESULT_DELAY);
}

function handleWrongAnswer(selectedOption, correctIndex) {
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

/* =========================
   Check answer
========================= */

export function checkAnswer() {
  if (state.isCheckingAnswer || state.isPaused) {
    return;
  }

  state.isCheckingAnswer = true;

  stopTimer();
  disableAnswers();
  setFeedback("Checking answer...", "neutral");

  const currentQuestion = state.quizQuestions[state.currentQuestionIndex];
  const selectedAnswerIndex = getSelectedAnswerIndex();
  const correctAnswerIndex = getCorrectAnswerIndex(currentQuestion);
  const answerOptions = getAnswerOptions();

  state.selectedAnswerIndex = selectedAnswerIndex;

  const selectedOption =
    selectedAnswerIndex !== null ? answerOptions[selectedAnswerIndex] : null;

  setTimeout(function () {
    if (selectedAnswerIndex === correctAnswerIndex) {
      handleCorrectAnswer(selectedOption, selectedAnswerIndex);
    } else {
      handleWrongAnswer(selectedOption, correctAnswerIndex);
    }
  }, CHECKING_DELAY);
}