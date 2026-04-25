import { questions } from './questions.js';
import { CATEGORIES, DIFFICULTIES } from './constants.js';

describe('sprint 2 data bank', () => {
  it('has at least 120 questions', () => {
    expect(questions.length).toBeGreaterThanOrEqual(120);
  });

  it('has at least 10 questions for every category+difficulty pair', () => {
    for (const category of CATEGORIES) {
      for (const difficulty of DIFFICULTIES) {
        const count = questions.filter(
          (question) =>
            question.category === category && question.difficulty === difficulty
        ).length;

        expect(count).toBeGreaterThanOrEqual(10);
      }
    }
  });

  it('enforces question shape constraints', () => {
    for (const question of questions) {
      expect(question.statements).toHaveLength(4);
      expect(question.answerIndex).toBeGreaterThanOrEqual(0);
      expect(question.answerIndex).toBeLessThanOrEqual(3);
      expect(question.explanation.trim().length).toBeGreaterThan(0);
    }
  });

  it('contains unique ids only', () => {
    const ids = questions.map((question) => question.id);
    const uniqueIds = new Set(ids);

    expect(uniqueIds.size).toBe(ids.length);
  });
});
