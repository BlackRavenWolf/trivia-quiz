/*
  Trivia Quiz

  Copyright (c) 2026 Dominique Striekwold

  Licensed under the MIT License.
  See the LICENSE file in the repository for details.

  Built as part of a web development learning journey.
*/

import {
  DEFAULT_SETTINGS,
  QUIZ_TIME_PER_QUESTION
} from "../config/quiz-config.js";

/* =========================
   Default settings
========================= */

function getDefaultSettings() {
  return {
    difficulty: DEFAULT_SETTINGS.difficulty,
    amount: DEFAULT_SETTINGS.amount,
    categories: [...DEFAULT_SETTINGS.categories],

    /* === AUDIO DEFAULTS === */
    soundEffects: true,   // sound effects ON by default
    music: true,          // background music ON by default
    volume: 0.5           // background music + sounds start at 50%
  };
}

/* =========================
   Quiz state
========================= */

export const state = {
  quizQuestions: [],
  currentQuestionIndex: 0,
  score: 0,

  timeLeft: QUIZ_TIME_PER_QUESTION,
  timerInterval: null,

  selectedAnswerIndex: null,
  isCheckingAnswer: false,

  isPaused: false,
  hasSavedGame: false,

  settings: getDefaultSettings()
};

/* =========================
   Reset state
========================= */

export function resetQuizState() {
  state.quizQuestions = [];
  state.currentQuestionIndex = 0;
  state.score = 0;

  state.timeLeft = QUIZ_TIME_PER_QUESTION;
  state.timerInterval = null;

  state.selectedAnswerIndex = null;
  state.isCheckingAnswer = false;

  state.isPaused = false;
}

/* =========================
   Pause / Resume state
========================= */

export function pauseState() {
  state.isPaused = true;
}

export function resumeState() {
  state.isPaused = false;
}

/* =========================
   Save game state helpers
========================= */

export function markSavedGameExists() {
  state.hasSavedGame = true;
}

export function clearSavedGameFlag() {
  state.hasSavedGame = false;
}