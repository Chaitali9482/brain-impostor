import { getFilteredQuestions, getRandomQuestion, shuffleQuestion, isCorrectAnswer } from './game';
import { Question } from '@brain-impostor/types';

describe('Game Engine', () => {
  const mockQuestion: Question = {
    id: 999,
    category: 'Science',
    difficulty: 'easy',
    statements: ['A', 'B', 'C', 'False Statement'],
    answerIndex: 3,
    explanation: 'D is false'
  };

  describe('getFilteredQuestions', () => {
    it('should return only questions matching category and difficulty', () => {
      const filtered = getFilteredQuestions('Science', 'easy');
      expect(filtered.every(q => q.category === 'Science' && q.difficulty === 'easy')).toBe(true);
      expect(filtered.length).toBeGreaterThan(0);
    });
  });

  describe('getRandomQuestion', () => {
    it('should pick a question from the pool', () => {
      const pool = [mockQuestion];
      const picked = getRandomQuestion(pool);
      expect(picked).toEqual(mockQuestion);
    });

    it('should throw error on empty pool', () => {
      expect(() => getRandomQuestion([])).toThrow('Question pool is empty');
    });
  });

  describe('shuffleQuestion', () => {
    it('should not mutate the original question', () => {
      const original = JSON.parse(JSON.stringify(mockQuestion));
      shuffleQuestion(mockQuestion);
      expect(mockQuestion).toEqual(original);
    });

    it('should maintain the correct answer text at the new answerIndex', () => {
      const correctText = mockQuestion.statements[mockQuestion.answerIndex];
      const shuffled = shuffleQuestion(mockQuestion);
      expect(shuffled.statements[shuffled.answerIndex]).toBe(correctText);
    });

    it('should contain all original statements', () => {
      const shuffled = shuffleQuestion(mockQuestion);
      expect(shuffled.statements.sort()).toEqual([...mockQuestion.statements].sort());
    });
  });

  describe('isCorrectAnswer', () => {
    it('should return true when indices match', () => {
      expect(isCorrectAnswer(3, 3)).toBe(true);
    });

    it('should return false when indices differ', () => {
      expect(isCorrectAnswer(1, 3)).toBe(false);
    });
  });
});
