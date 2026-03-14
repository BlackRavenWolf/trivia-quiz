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

function getQuestionAmountNumber() {
  return Number(state.settings.amount);
}

function getQuestionPoolByCategories(selectedCategories) {
  return questions.filter(function (question) {
    return selectedCategories.includes(question.category);
  });
}

function getQuestionPoolByDifficulty(questionPool, difficulty) {
  return questionPool.filter(function (question) {
    return question.difficulty === difficulty;
  });
}

function getMixedDistribution(amount) {
  const distribution = MIXED_DISTRIBUTIONS[amount];

  if (!distribution) {
    throw new Error(`No mixed distribution exists for ${amount} questions.`);
  }

  return distribution;
}

function prepareQuestionForQuiz(question) {
  return {
    question: question.question,
    answers: shuffleArray(question.answers),
    correct: question.correct,
    difficulty: question.difficulty,
    category: question.category
  };
}

function buildFixedDifficultyQuiz(questionPool, difficulty, amount) {
  const difficultyPool = getQuestionPoolByDifficulty(questionPool, difficulty);

  if (difficultyPool.length < amount) {
    throw new Error(
      `Not enough ${difficulty} questions available for the selected categories.`
    );
  }

  const selectedQuestions = shuffleArray(difficultyPool).slice(0, amount);

  return selectedQuestions.map(function (question) {
    return prepareQuestionForQuiz(question);
  });
}

function buildMixedQuiz(questionPool, amount) {
  const distribution = getMixedDistribution(amount);
  const selectedQuestions = [];
  const difficultyLevels = ["easy", "medium", "hard", "expert"];

  for (let i = 0; i < difficultyLevels.length; i++) {
    const difficulty = difficultyLevels[i];
    const requiredAmount = distribution[difficulty];
    const difficultyPool = getQuestionPoolByDifficulty(questionPool, difficulty);

    if (difficultyPool.length < requiredAmount) {
      throw new Error(
        `Not enough ${difficulty} questions available for the selected categories.`
      );
    }

    const chosenQuestions = shuffleArray(difficultyPool).slice(0, requiredAmount);

    for (let j = 0; j < chosenQuestions.length; j++) {
      selectedQuestions.push(prepareQuestionForQuiz(chosenQuestions[j]));
    }
  }

  return shuffleArray(selectedQuestions);
}

export function buildQuizFromSettings() {
  const amount = getQuestionAmountNumber();
  const selectedCategories = state.settings.categories;
  const questionPool = getQuestionPoolByCategories(selectedCategories);

  if (!Array.isArray(questions) || questions.length === 0) {
    throw new Error("No questions were loaded. Please check your question files.");
  }

  if (questionPool.length < amount) {
    throw new Error("Not enough questions available for the selected categories.");
  }

  if (state.settings.difficulty === "mixed") {
    return buildMixedQuiz(questionPool, amount);
  }

  return buildFixedDifficultyQuiz(
    questionPool,
    state.settings.difficulty,
    amount
  );
}
