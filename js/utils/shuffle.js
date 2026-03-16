/*
  Trivia Quiz

  Utility functions

  Shuffle helper
*/

export function shuffleArray(array) {
  if (!Array.isArray(array)) {
    throw new Error("shuffleArray expects an array.");
  }

  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    const temp = result[i];
    result[i] = result[randomIndex];
    result[randomIndex] = temp;
  }

  return result;
}