/*
  Trivia Quiz

  Copyright (c) 2026 Dominique Striekwold

  Licensed under the MIT License.
  See the LICENSE file in the repository for details.

  Built as part of a web development learning journey.
*/

const sounds = {
  click: createSound("../../assets/sounds/click.mp3"),
  correct: createSound("../../assets/sounds/correct.mp3"),
  wrong: createSound("../../assets/sounds/wrong.mp3")
};

function createSound(src) {
  const audio = new Audio(src);
  audio.preload = "auto";
  return audio;
}

export function playSound(name) {
  const sound = sounds[name];

  if (!sound) {
    console.warn(`Sound "${name}" does not exist.`);
    return;
  }

  sound.currentTime = 0;

  sound.play().catch((error) => {
    console.warn(`Could not play sound "${name}".`, error);
  });
}

export function stopSound(name) {
  const sound = sounds[name];

  if (!sound) return;

  sound.pause();
  sound.currentTime = 0;
}

export function setSoundVolume(name, volume) {
  const sound = sounds[name];

  if (!sound) return;

  sound.volume = Math.min(Math.max(volume, 0), 1);
}

export function setAllSoundsVolume(volume) {
  const safeVolume = Math.min(Math.max(volume, 0), 1);

  Object.values(sounds).forEach((sound) => {
    sound.volume = safeVolume;
  });
}