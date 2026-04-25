import { Question, Category, Difficulty } from '@brain-impostor/types';
import { questions } from '@brain-impostor/data';

/**
 * Filter the questions array by category and difficulty
 */
export function getFilteredQuestions(
  category: Category,
  difficulty: Difficulty
): Question[] {
  return questions.filter(
    (q) => q.category === category && q.difficulty === difficulty
  );
}

/**
 * Pick one random question from a filtered pool
 */
export function getRandomQuestion(pool: Question[]): Question {
  if (pool.length === 0) {
    throw new Error('Question pool is empty');
  }
  return pool[Math.floor(Math.random() * pool.length)];
}

/**
 * Shuffle the 4 statements and update answerIndex
 * to match the new position of the false statement.
 */
export function shuffleQuestion(question: Question): Question {
  // Create index-tracking pairs
  const pairs = question.statements.map((text, index) => ({
    text,
    isCorrect: index === question.answerIndex,
  }));

  // Fisher-Yates shuffle
  const shuffledPairs = [...pairs];
  for (let i = shuffledPairs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledPairs[i], shuffledPairs[j]] = [shuffledPairs[j], shuffledPairs[i]];
  }

  // Rebuild question
  return {
    ...question,
    statements: shuffledPairs.map((p) => p.text) as [
      string,
      string,
      string,
      string
    ],
    answerIndex: shuffledPairs.findIndex((p) => p.isCorrect),
  };
}

/**
 * Pure check — did player select the false statement?
 */
export function isCorrectAnswer(selected: number, correct: number): boolean {
  return selected === correct;
}
