'use client';

import React from 'react';
import { Play, Clock3 } from 'lucide-react';
import { TIMER_SECONDS } from '@brain-impostor/data';
import {
  GameCard,
  ScoreBoard,
  CategorySelect,
  DifficultySelect,
  ResultModal,
  ProgressBar,
  BrainLogo,
  GameOverScreen,
} from '@brain-impostor/ui';
import { useGameLogic } from '../hooks/useGameLogic';

export default function Index() {
  const {
    // State
    selectedCategory,
    selectedDifficulty,
    gameStarted,
    currentQuestion,
    currentQuestionIndex,
    selectedIndex,
    isAnswered,
    score,
    streak,
    highScore,
    resultType,
    timeLeft,
    phase,
    totalQuestions,
    accuracy,
    
    // Setters
    setSelectedCategory,
    setSelectedDifficulty,
    
    // Handlers
    startGame,
    loadNextQuestion,
    evaluateAnswer,
    restartGame,
  } = useGameLogic();

  const [questionVisible, setQuestionVisible] = React.useState(false);
  React.useEffect(() => {
    if (!currentQuestion) return;
    setQuestionVisible(false);
    const timeoutId = setTimeout(() => setQuestionVisible(true), 40);
    return () => clearTimeout(timeoutId);
  }, [currentQuestion?.id]);

  // ... Setup Screen ...
  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-app-shell text-white flex flex-col items-center justify-center px-5 py-10 font-sans overflow-x-hidden">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-14">
          <div className="flex justify-center mb-5">
            <BrainLogo className="w-20 h-20 text-cyan-400 drop-shadow-[0_0_28px_rgba(34,211,238,0.35)]" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-none uppercase">
            BRAIN <span className="text-cyan-400">IMPOSTOR</span>
          </h1>
          <p className="mt-6 text-[#93a9c6] text-lg md:text-xl max-w-xl mx-auto leading-snug font-medium">
            Spot the ONE false statement out of 4. You have 10 seconds.
          </p>
          
          <div className="flex justify-center mt-7">
            <div className="px-5 py-2 bg-[#0d1426] rounded-full border border-white/10 flex items-center gap-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <span className="text-sm font-black uppercase text-[#a9b8cc]">High Score:</span>
              <span className="text-[#fbbf24] font-black text-base">{highScore}</span>
            </div>
          </div>
        </div>
        
        <div className="w-full max-w-[780px] grid grid-cols-1 md:grid-cols-[1fr_1.05fr] gap-8 md:gap-9 mb-12">
          <CategorySelect selected={selectedCategory} onSelect={setSelectedCategory} />
          <DifficultySelect selected={selectedDifficulty} onSelect={setSelectedDifficulty} />
        </div>

        <div className="w-full max-w-[410px]">
          <button
            onClick={startGame}
            disabled={!selectedCategory || !selectedDifficulty}
            className="flex items-center justify-center gap-4 w-full py-5 bg-cyan-400 hover:bg-cyan-300 rounded-full font-black text-[#07111f] text-lg uppercase tracking-[0.16em] transition-all duration-300 ease-out shadow-[0_14px_36px_rgba(34,211,238,0.22)] disabled:opacity-30 disabled:grayscale disabled:cursor-not-allowed hover:scale-105 active:scale-95"
          >
            <Play className="w-4 h-4 fill-current" />
            START INTERROGATION
          </button>
        </div>
      </div>
    );
  }

  if (phase === 'gameOver') {
    return (
      <GameOverScreen
        score={score}
        totalQuestions={totalQuestions}
        accuracy={accuracy}
        highScore={highScore}
        onReset={restartGame}
      />
    );
  }

  const questionNumber = currentQuestionIndex + 1;

  // ... Gameplay Screen ...
  return (
    <div className={`min-h-screen bg-app-shell text-white flex flex-col font-sans overflow-hidden transition-opacity duration-300 ease-out ${resultType === 'timeout' ? 'animate-timeout-fade' : ''}`}>
      {/* Top HUD */}
      <ScoreBoard 
        score={score} 
        highScore={highScore} 
        questionNumber={questionNumber} 
        onAbort={restartGame} 
        streak={streak} 
        timeLeft={timeLeft} 
      />

      <main className="flex-1 flex flex-col items-center justify-center px-5 py-10 md:py-16">
        {currentQuestion && (
          <div
            key={currentQuestion.id}
            className={`w-full max-w-[672px] flex flex-col items-center transition-opacity duration-300 ${
              questionVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            
            {/* Timer Badge */}
            <div className={`mb-4 px-5 py-3 rounded-full bg-[#0d1426] flex items-center justify-center gap-2 border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 ease-out ${timeLeft <= 3 ? 'animate-pulse border-red-500/60' : ''}`}>
              <Clock3 className={`w-5 h-5 ${timeLeft <= 3 ? 'text-red-400' : 'text-cyan-400'}`} />
              <span className={`font-black text-xl leading-none ${timeLeft <= 3 ? 'text-red-400' : 'text-white'}`}>{timeLeft}</span>
            </div>

            {/* Progress Bar Container */}
            <div className="w-full h-2 bg-[#203046] rounded-full mb-9 overflow-hidden">
               <ProgressBar timeLeft={timeLeft} maxTime={TIMER_SECONDS} />
            </div>

            {/* Question Text */}
            <h1 className="text-3xl md:text-[32px] leading-tight font-black text-white text-center mb-10 px-2">
              Which statement is <span className="text-[#ff4d4d] underline decoration-[#ff4d4d] decoration-wavy underline-offset-8">FALSE</span>?
            </h1>

            {/* Answer Container */}
            <div className="w-full grid grid-cols-1 gap-4">
              {currentQuestion.statements.map((statement, idx) => (
                <GameCard
                  key={idx}
                  statement={statement}
                  index={idx}
                  selectedIndex={selectedIndex}
                  correctIndex={currentQuestion.answerIndex}
                  isAnswered={isAnswered}
                  onSelect={evaluateAnswer}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      {resultType && (
        <ResultModal 
          resultType={resultType}
          explanation={currentQuestion?.explanation || ''} 
          falseStatement={currentQuestion ? currentQuestion.statements[currentQuestion.answerIndex] : ''}
          onNext={loadNextQuestion} 
        />
      )}
    </div>
  );
}
