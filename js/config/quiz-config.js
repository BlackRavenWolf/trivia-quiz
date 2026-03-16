/*
  Trivia Quiz

  Copyright (c) 2026 Dominique Striekwold

  Licensed under the MIT License.
  See the LICENSE file in the repository for details.

  Built as part of a web development learning journey.
*/

/* =========================
   Quiz timing
========================= */

export const QUIZ_TIME_PER_QUESTION = 15;
export const CHECKING_DELAY = 700;
export const RESULT_DELAY = 1200;
export const WRONG_REVEAL_DELAY = 450;
export const SETTINGS_APPLIED_DELAY = 900;
export const AUTO_CHECK_DELAY = 180;

/* =========================
   Question amount options
========================= */

export const QUESTION_AMOUNT_OPTIONS = [
  { value: "5", label: "Quick - 5 questions" },
  { value: "10", label: "Standard - 10 questions" },
  { value: "15", label: "Challenge - 15 questions" },
  { value: "20", label: "Marathon - 20 questions" },
  { value: "25", label: "Ultimate - 25 questions" }
];

/* =========================
   Mixed difficulty setup
========================= */

export const MIXED_DISTRIBUTIONS = {
  5: {
    easy: 2,
    medium: 1,
    hard: 1,
    expert: 1
  },
  10: {
    easy: 3,
    medium: 3,
    hard: 2,
    expert: 2
  },
  15: {
    easy: 5,
    medium: 4,
    hard: 3,
    expert: 3
  },
  20: {
    easy: 6,
    medium: 6,
    hard: 4,
    expert: 4
  },
  25: {
    easy: 8,
    medium: 7,
    hard: 5,
    expert: 5
  }
};

/* =========================
   Labels
========================= */

export const CATEGORY_LABELS = {
  general: "General",
  geography: "Geography",
  history: "History",
  science: "Science",
  animals: "Animals",
  food: "Food",
  sports: "Sports",
  movies: "Movies",
  music: "Music",
  technology: "Technology"
};

export const DIFFICULTY_LABELS = {
  mixed: "Mixed",
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
  expert: "Expert"
};

/* =========================
   Default settings
========================= */

export const DEFAULT_SETTINGS = {
  difficulty: "mixed",
  amount: "10",
  categories: [
    "general",
    "geography",
    "history",
    "science",
    "animals",
    "food",
    "sports",
    "movies",
    "music",
    "technology"
  ]
};