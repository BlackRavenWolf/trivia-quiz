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
   Storage keys
========================= */

const SAVED_GAME_KEY = "triviaQuizSavedGame";
const APP_SETTINGS_KEY = "triviaQuizSettings";

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

  if (savedGame.settings) {
    state.settings = {
      ...state.settings,
      difficulty: savedGame.settings.difficulty ?? state.settings.difficulty,
      amount: savedGame.settings.amount ?? state.settings.amount,
      categories: Array.isArray(savedGame.settings.categories)
        ? [...savedGame.settings.categories]
        : [...state.settings.categories],
      soundEffects:
        savedGame.settings.soundEffects ?? state.settings.soundEffects,
      music: savedGame.settings.music ?? state.settings.music,
      volume: savedGame.settings.volume ?? state.settings.volume
    };
  }

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

/* =========================
   Save app settings
========================= */

export function saveAppSettings() {
  const settingsToSave = {
    difficulty: state.settings.difficulty,
    amount: state.settings.amount,
    categories: [...state.settings.categories],
    soundEffects: state.settings.soundEffects,
    music: state.settings.music,
    volume: state.settings.volume
  };

  localStorage.setItem(APP_SETTINGS_KEY, JSON.stringify(settingsToSave));
}

/* =========================
   Load app settings
========================= */

export function loadAppSettings() {
  const savedSettings = localStorage.getItem(APP_SETTINGS_KEY);

  if (!savedSettings) {
    return null;
  }

  try {
    return JSON.parse(savedSettings);
  } catch (error) {
    console.error("Failed to load app settings:", error);
    localStorage.removeItem(APP_SETTINGS_KEY);
    return null;
  }
}

/* =========================
   Apply saved settings to state
========================= */

export function applySavedSettingsToState(savedSettings) {
  if (!savedSettings) {
    return;
  }

  state.settings = {
    ...state.settings,
    difficulty: savedSettings.difficulty ?? state.settings.difficulty,
    amount: savedSettings.amount ?? state.settings.amount,
    categories: Array.isArray(savedSettings.categories)
      ? [...savedSettings.categories]
      : [...state.settings.categories],
    soundEffects: savedSettings.soundEffects ?? state.settings.soundEffects,
    music: savedSettings.music ?? state.settings.music,
    volume: savedSettings.volume ?? state.settings.volume
  };
}