import { useState, useEffect, useRef } from 'react';
import { Category, Difficulty, Question } from '@brain-impostor/types';
import {
  getFilteredQuestions,
  getRandomQuestion,
  shuffleQuestion,
  isCorrectAnswer,
} from '@brain-impostor/game';
import { HIGH_SCORE_KEY } from '@brain-impostor/data';

type GameState = 'menu' | 'playing' | 'gameOver';
type ResultType = 'correct' | 'wrong' | 'timeout' | null;
type SoundName = 'click' | 'correct' | 'wrong' | 'timeout' | 'gameOver';

let audioContext: AudioContext | null = null;
let activeSound: OscillatorNode | null = null;

const SOUND_CONFIG: Record<SoundName, { frequency: number; duration: number; volume: number; type: OscillatorType }> = {
  click: { frequency: 520, duration: 0.06, volume: 0.3, type: 'triangle' },
  correct: { frequency: 780, duration: 0.16, volume: 0.38, type: 'sine' },
  wrong: { frequency: 170, duration: 0.18, volume: 0.34, type: 'sawtooth' },
  timeout: { frequency: 110, duration: 0.28, volume: 0.36, type: 'square' },
  gameOver: { frequency: 330, duration: 0.34, volume: 0.4, type: 'triangle' },
};

const playGameSound = (name: SoundName): void => {
  if (typeof window === 'undefined') return;

  try {
    audioContext ??= new window.AudioContext();
    try {
      activeSound?.stop();
    } catch {
      // Ignore already-ended sounds before starting the next one.
    }

    const now = audioContext.currentTime;
    const config = SOUND_CONFIG[name];
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.type = config.type;
    oscillator.frequency.setValueAtTime(config.frequency, now);
    gain.gain.setValueAtTime(config.volume, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + config.duration);

    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start(now);
    oscillator.stop(now + config.duration);
    activeSound = oscillator;
    oscillator.onended = () => {
      if (activeSound === oscillator) activeSound = null;
    };
  } catch {
    // Sound is optional feedback; never block gameplay.
  }
};

const readHighScoreSafely = (): number => {
  try {
    const raw = localStorage.getItem(HIGH_SCORE_KEY);
    if (!raw) return 0;

    const parsed = parseInt(raw, 10);
    if (Number.isNaN(parsed) || parsed < 0) return 0;

    return parsed;
  } catch {
    return 0;
  }
};

const writeHighScoreSafely = (value: number): void => {
  try {
    localStorage.setItem(HIGH_SCORE_KEY, String(value));
  } catch {
    // ignore localStorage failures (e.g., private browsing)
  }
};

export function useGameLogic() {
  const [gameState, setGameState] = useState<GameState>('menu');
  const [category, setCategory] = useState<Category | null>(null);
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [sessionHistory, setSessionHistory] = useState<number[]>([]);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [streak, setStreak] = useState(0);
  const [timer, setTimer] = useState(10);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [resultType, setResultType] = useState<ResultType>(null);
  const [highScore, setHighScore] = useState(0);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Load high score on mount
  useEffect(() => {
    setHighScore(readHighScoreSafely());
  }, []);

  const evaluateAnswer = (index: number | null) => {
    if (!currentQuestion || isAnswered) return;
    if (timerRef.current) clearInterval(timerRef.current);
    if (index !== null) playGameSound('click');

    const selected = index ?? -1;
    const isCorrectSelection = isCorrectAnswer(selected, currentQuestion.answerIndex);

    setSelectedAnswerIndex(index);
    setIsAnswered(true);

    if (isCorrectSelection) {
      const nextStreak = streak + 1;
      const newScore = score + 10 + (nextStreak >= 3 ? 5 : 0);
      setScore(newScore);
      setCorrectAnswers((prev) => prev + 1);
      setStreak(nextStreak);
      setResultType('correct');
      window.setTimeout(() => playGameSound('correct'), 80);

      if (newScore > highScore) {
        setHighScore(newScore);
        writeHighScoreSafely(newScore);
      }
    } else {
      setStreak(0);
      setResultType(index === null ? 'timeout' : 'wrong');
      window.setTimeout(
        () => playGameSound(index === null ? 'timeout' : 'wrong'),
        index === null ? 0 : 80
      );
    }

    setShowResult(true);
  };

  const loadNextQuestion = () => {
    if (!category || !difficulty) return;
    if (timerRef.current) clearInterval(timerRef.current);

    const pool = getFilteredQuestions(category, difficulty);

    if (currentQuestion && currentQuestionIndex >= pool.length - 1) {
      setGameState('gameOver');
      playGameSound('gameOver');
      return;
    }

    const nextQuestionIndex = currentQuestion ? currentQuestionIndex + 1 : 0;

    let remaining = pool.filter((question) => !sessionHistory.includes(question.id));
    let nextSessionHistory = sessionHistory;

    if (remaining.length === 0) {
      remaining = pool;
      nextSessionHistory = [];
    }

    const picked = getRandomQuestion(remaining);
    const shuffled = shuffleQuestion(picked);

    setCurrentQuestion(shuffled);
    setSessionHistory([...nextSessionHistory, picked.id]);
    setCurrentQuestionIndex(nextQuestionIndex);
    setSelectedAnswerIndex(null);
    setIsAnswered(false);
    setTimer(10);
    setResultType(null);
    setShowResult(false);
  };

  const startGame = () => {
    if (!category || !difficulty) return;
    if (timerRef.current) clearInterval(timerRef.current);

    setScore(0);
    setCorrectAnswers(0);
    setStreak(0);
    setSessionHistory([]);
    setCurrentQuestionIndex(0);
    setGameState('playing');
  };

  useEffect(() => {
    if (gameState === 'playing' && !currentQuestion && category && difficulty) {
      loadNextQuestion();
    }
  }, [gameState, currentQuestion, category, difficulty]);

  // Timer logic
  useEffect(() => {
    if (gameState !== 'playing' || isAnswered || !currentQuestion) {
      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    }

    timerRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gameState, isAnswered, currentQuestion]);

  useEffect(() => {
    if (timer === 0 && !isAnswered && gameState === 'playing') {
      evaluateAnswer(null);
    }
  }, [timer, isAnswered, gameState]);

  const resetGame = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setGameState('menu');
    setCategory(null);
    setDifficulty(null);
    setCurrentQuestion(null);
    setCurrentQuestionIndex(0);
    setSessionHistory([]);
    setSelectedAnswerIndex(null);
    setIsAnswered(false);
    setTimer(10);
    setShowResult(false);
    setResultType(null);
    setScore(0);
    setCorrectAnswers(0);
    setStreak(0);
  };

  return {
    // State mapped to UI props
    selectedCategory: category,
    selectedDifficulty: difficulty,
    gameStarted: gameState !== 'menu',
    currentQuestion,
    currentQuestionIndex,
    selectedIndex: selectedAnswerIndex,
    isAnswered,
    resultType,
    score,
    streak,
    highScore,
    showModal: showResult,
    timeLeft: timer,
    phase: gameState,
    totalQuestions:
      category && difficulty ? getFilteredQuestions(category, difficulty).length : 0,
    accuracy:
      category && difficulty
        ? Math.round((correctAnswers / getFilteredQuestions(category, difficulty).length) * 100)
        : 0,
    
    // Setters
    setSelectedCategory: setCategory,
    setSelectedDifficulty: setDifficulty,
    
    // Handlers
    startGame,
    loadNextQuestion,
    evaluateAnswer,
    restartGame: resetGame,
    questionCount:
      category && difficulty ? getFilteredQuestions(category, difficulty).length : 0,
  };
}
