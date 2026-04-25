import { Category, Difficulty } from './question';

export type GameCardProps = {
  statement: string;
  index: number;
  selectedIndex: number | null;
  correctIndex: number;
  isAnswered: boolean;
  onSelect: (index: number) => void;
};

export type ScoreBoardProps = {
  score: number;
  streak: number;
  highScore: number;
  timeLeft: number;
  questionNumber: number;
  onAbort: () => void;
};

export type ResultModalProps = {
  resultType: 'correct' | 'wrong' | 'timeout' | null;
  explanation: string;
  falseStatement?: string;
  onNext: () => void;
};

export type CategorySelectProps = {
  selected: Category | null;
  onSelect: (category: Category) => void;
};

export type DifficultySelectProps = {
  selected: Difficulty | null;
  onSelect: (difficulty: Difficulty) => void;
};

export type ProgressBarProps = {
  timeLeft: number;
  maxTime: number;
};

export type GameOverScreenProps = {
  score: number;
  totalQuestions: number;
  accuracy: number;
  highScore: number;
  onReset: () => void;
};
