/*
  Trivia Quiz

  Copyright (c) 2026 Dominique Striekwold

  Licensed under the MIT License.
  See the LICENSE file in the repository for details.

  Built as part of a web development learning journey.
*/

import {
  state,
  markSavedGameExists,
  clearSavedGameFlag
} from "./quiz-state.js";

/* =========================
   Storage key
========================= */

const SAVED_GAME_KEY = "triviaQuizSavedGame";

/* =========================
   Save current game state
========================= */

export function saveGameState() {
  const gameStateToSave = {
    quizQuestions: state.quizQuestions,
    currentQuestionIndex: state.currentQuestionIndex,
    score: state.score,
    timeLeft: state.timeLeft,
    selectedAnswerIndex: state.selectedAnswerIndex,
    isCheckingAnswer: state.isCheckingAnswer,
    isPaused: state.isPaused,
    settings: state.settings
  };

  localStorage.setItem(SAVED_GAME_KEY, JSON.stringify(gameStateToSave));
  markSavedGameExists();
}

/* =========================
   Load saved game state
========================= */

export function loadGameState() {
  const savedGame = localStorage.getItem(SAVED_GAME_KEY);

  if (!savedGame) {
    clearSavedGameFlag();
    return null;
  }

  try {
    const parsedGameState = JSON.parse(savedGame);
    markSavedGameExists();
    return parsedGameState;
  } catch (error) {
    console.error("Failed to load saved game state:", error);
    clearSavedGame();
    return null;
  }
}

/* =========================
   Apply saved game to state
========================= */

export function applySavedGameToState(savedGame) {
  if (!savedGame) {
    return;
  }

  state.quizQuestions = savedGame.quizQuestions ?? [];
  state.currentQuestionIndex = savedGame.currentQuestionIndex ?? 0;
  state.score = savedGame.score ?? 0;
  state.timeLeft = savedGame.timeLeft ?? 15;
  state.selectedAnswerIndex = savedGame.selectedAnswerIndex ?? null;
  state.isCheckingAnswer = savedGame.isCheckingAnswer ?? false;
  state.isPaused = savedGame.isPaused ?? false;

  state.settings = savedGame.settings
    ? {
        difficulty: savedGame.settings.difficulty,
        amount: savedGame.settings.amount,
        categories: [...savedGame.settings.categories]
      }
    : state.settings;

  markSavedGameExists();
}

/* =========================
   Check if saved game exists
========================= */

export function hasSavedGame() {
  const savedGame = localStorage.getItem(SAVED_GAME_KEY);
  const exists = savedGame !== null;

  if (exists) {
    markSavedGameExists();
  } else {
    clearSavedGameFlag();
  }

  return exists;
}

/* =========================
   Clear saved game
========================= */

export function clearSavedGame() {
  localStorage.removeItem(SAVED_GAME_KEY);
  clearSavedGameFlag();
}