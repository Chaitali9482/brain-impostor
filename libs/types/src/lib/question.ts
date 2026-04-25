export type Category = 'Science' | 'Maths' | 'GK' | 'Food';

export type Difficulty = 'easy' | 'medium' | 'hard';

export type Question = {
  id: number;
  category: Category;
  difficulty: Difficulty;
  statements: [string, string, string, string];
  answerIndex: number;
  explanation: string;
};
