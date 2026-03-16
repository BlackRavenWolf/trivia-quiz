/*
  Trivia Quiz

  Copyright (c) 2026 Dominique Striekwold

  Licensed under the MIT License.
  See the LICENSE file in the repository for details.

  Built as part of a web development learning journey.
*/

import { state } from "../quiz/quiz-state.js";

/* =========================
   Base path
========================= */

const BASE_PATH = window.location.hostname === "blackravenwolf.github.io"
  ? "/trivia-quiz/"
  : "/";

/* =========================
   Helpers
========================= */

function createSound(fileName) {
  const audio = new Audio(`${BASE_PATH}assets/sounds/${fileName}`);
  audio.preload = "auto";
  return audio;
}

function safePlay(audio) {
  return audio.play().catch(() => {});
}

/* =========================
   Sound effects
========================= */

const sounds = {
  click: createSound("click.mp3"),
  correct: createSound("correct.mp3"),
  wrong: createSound("wrong.mp3")
};

/* =========================
   Background music
========================= */

const backgroundMusic = createSound("music.mp3");
backgroundMusic.loop = true;

let hasUnlockedAudio = false;

/* =========================
   Sound effects control
========================= */

export function playSound(name) {
  if (!state.settings.soundEffects) {
    return;
  }

  const sound = sounds[name];

  if (!sound) {
    console.warn(`Sound "${name}" does not exist.`);
    return;
  }

  sound.volume = state.settings.volume;
  sound.currentTime = 0;

  safePlay(sound);
}

export function stopSound(name) {
  const sound = sounds[name];

  if (!sound) {
    return;
  }

  sound.pause();
  sound.currentTime = 0;
}

export function stopAllSounds() {
  Object.values(sounds).forEach((sound) => {
    sound.pause();
    sound.currentTime = 0;
  });
}

/* =========================
   Music control
========================= */

export function startMusic() {
  if (!hasUnlockedAudio || !state.settings.music) {
    return;
  }

  backgroundMusic.volume = state.settings.volume;

  if (!backgroundMusic.paused) {
    return;
  }

  safePlay(backgroundMusic);
}

export function stopMusic() {
  backgroundMusic.pause();
  backgroundMusic.currentTime = 0;
}

export function pauseMusic() {
  backgroundMusic.pause();
}

export function syncMusicState() {
  if (state.settings.music) {
    startMusic();
  } else {
    stopMusic();
  }
}

/* =========================
   Global audio control
========================= */

export function applyGlobalVolume() {
  const volume = state.settings.volume;

  Object.values(sounds).forEach((sound) => {
    sound.volume = volume;
  });

  backgroundMusic.volume = volume;
}

export function syncAudioLive() {
  if (!state.settings.soundEffects) {
    stopAllSounds();
  }

  applyGlobalVolume();
  syncMusicState();
}

/* =========================
   Audio unlock
========================= */

export function unlockAudio() {
  if (hasUnlockedAudio) {
    syncAudioLive();
    return;
  }

  hasUnlockedAudio = true;
  syncAudioLive();
}

export function isAudioUnlocked() {
  return hasUnlockedAudio;
}