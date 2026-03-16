/*
  Trivia Quiz

  Copyright (c) 2026 Dominique Striekwold

  Licensed under the MIT License.
  See the LICENSE file in the repository for details.

  Built as part of a web development learning journey.
*/

import { MIXED_DISTRIBUTIONS } from "../config/quiz-config.js";
import { questions } from "../data/all-questions.js";
import { state } from "./quiz-state.js";
import { shuffleArray } from "../utils/shuffle.js";

/* =========================
   Basic helpers
========================= */

function getQuestionAmount() {
  return Number(state.settings.amount);
}

function getQuestionsByCategory(selectedCategories) {
  return questions.filter(function (question) {
    return selectedCategories.includes(question.category);
  });
}

function getQuestionsByDifficulty(questionList, difficulty) {
  return questionList.filter(function (question) {
    return question.difficulty === difficulty;
  });
}

function formatQuestion(question) {
  return {
    question: question.question,
    answers: shuffleArray(question.answers),
    correct: question.correct,
    difficulty: question.difficulty,
    category: question.category
  };
}

/* =========================
   Quiz builders
========================= */

function buildSingleDifficultyQuiz(questionList, difficulty, amount) {
  const difficultyQuestions = getQuestionsByDifficulty(questionList, difficulty);

  if (difficultyQuestions.length < amount) {
    throw new Error(
      `Not enough ${difficulty} questions available for the selected categories.`
    );
  }

  const selectedQuestions = shuffleArray(difficultyQuestions).slice(0, amount);

  return selectedQuestions.map(function (question) {
    return formatQuestion(question);
  });
}

function buildMixedQuiz(questionList, amount) {
  const distribution = MIXED_DISTRIBUTIONS[amount];

  if (!distribution) {
    throw new Error(`No mixed distribution exists for ${amount} questions.`);
  }

  const selectedQuestions = [];
  const difficultyLevels = ["easy", "medium", "hard", "expert"];

  for (const difficulty of difficultyLevels) {
    const needed = distribution[difficulty];
    const difficultyQuestions = getQuestionsByDifficulty(questionList, difficulty);

    if (difficultyQuestions.length < needed) {
      throw new Error(
        `Not enough ${difficulty} questions available for the selected categories.`
      );
    }

    const chosenQuestions = shuffleArray(difficultyQuestions).slice(0, needed);

    for (const question of chosenQuestions) {
      selectedQuestions.push(formatQuestion(question));
    }
  }

  return shuffleArray(selectedQuestions);
}

/* =========================
   Main quiz builder
========================= */

export function buildQuizFromSettings() {
  const amount = getQuestionAmount();
  const selectedCategories = state.settings.categories;

  if (!Array.isArray(questions) || questions.length === 0) {
    throw new Error("No questions were loaded. Please check your question files.");
  }

  const questionList = getQuestionsByCategory(selectedCategories);

  if (questionList.length < amount) {
    throw new Error("Not enough questions available for the selected categories.");
  }

  if (state.settings.difficulty === "mixed") {
    return buildMixedQuiz(questionList, amount);
  }

  return buildSingleDifficultyQuiz(
    questionList,
    state.settings.difficulty,
    amount
  );
}