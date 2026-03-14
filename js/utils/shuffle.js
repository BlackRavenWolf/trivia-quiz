/*
Trivia Quiz

Utility Functions

Shuffle Helper
*/

export function shuffleArray(array) {
  if (!Array.isArray(array)) {
    throw new Error("shuffleArray expects an array.");
  }

  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    const temp = shuffled[i];
    shuffled[i] = shuffled[randomIndex];
    shuffled[randomIndex] = temp;
  }

  return shuffled;
}
