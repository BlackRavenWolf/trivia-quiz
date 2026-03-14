/*
Trivia Quiz

Copyright (c) 2026 Dominique Striekwold

Licensed under the MIT License.
See the LICENSE file in the repository for details.

Built as part of a web development learning journey.
*/

import { animalsQuestions } from "./questions/animals.js";
import { foodQuestions } from "./questions/food.js";
import { generalQuestions } from "./questions/general.js";
import { geographyQuestions } from "./questions/geography.js";
import { historyQuestions } from "./questions/history.js";
import { moviesQuestions } from "./questions/movies.js";
import { musicQuestions } from "./questions/music.js";
import { scienceQuestions } from "./questions/science.js";
import { sportsQuestions } from "./questions/sports.js";
import { technologyQuestions } from "./questions/technology.js";

export const questions = [
  ...animalsQuestions,
  ...foodQuestions,
  ...generalQuestions,
  ...geographyQuestions,
  ...historyQuestions,
  ...moviesQuestions,
  ...musicQuestions,
  ...scienceQuestions,
  ...sportsQuestions,
  ...technologyQuestions
];