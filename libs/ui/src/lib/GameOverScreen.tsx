import React from 'react';
import { RotateCcw, Star, Target, Trophy } from 'lucide-react';
import { GameOverScreenProps } from '@brain-impostor/types';

export const GameOverScreen: React.FC<GameOverScreenProps> = ({
  score,
  totalQuestions,
  accuracy,
  highScore,
  onReset,
}) => {
  return (
    <div className="min-h-screen bg-app-shell text-white flex flex-col items-center justify-center px-5 py-10 font-sans overflow-x-hidden">
      {accuracy >= 80 && (
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          {Array.from({ length: 28 }).map((_, index) => (
            <span
              key={index}
              className="absolute top-[-12px] h-3 w-2 rounded-sm animate-confetti"
              style={{
                left: `${(index * 37) % 100}%`,
                animationDelay: `${(index % 10) * 0.12}s`,
                background: ['#22d3ee', '#facc15', '#34d399', '#fb7185'][index % 4],
              }}
            />
          ))}
        </div>
      )}
      <div className="w-full max-w-[520px] rounded-2xl border border-white/10 bg-[#0d1426] shadow-[0_28px_80px_rgba(0,0,0,0.28)] overflow-hidden">
        <div className="px-8 pt-10 pb-8 text-center border-b border-white/10">
          <div className="mx-auto mb-5 w-[74px] h-[74px] rounded-full flex items-center justify-center ring-[6px] ring-cyan-400 text-cyan-400">
            <Trophy className="w-9 h-9" strokeWidth={3} />
          </div>
          <h1 className="text-4xl font-black uppercase">
            Game <span className="text-cyan-400">Over</span>
          </h1>
        </div>

        <div className="px-8 py-8 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 bg-[#111b30] p-5">
              <Trophy className="w-5 h-5 text-cyan-400 mb-3" />
              <p className="text-sm font-black uppercase text-[#97a4b8]">Score</p>
              <p className="text-3xl font-black">{score}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#111b30] p-5">
              <Target className="w-5 h-5 text-emerald-400 mb-3" />
              <p className="text-sm font-black uppercase text-[#97a4b8]">Accuracy</p>
              <p className="text-3xl font-black">{accuracy}%</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#111b30] p-5">
              <Target className="w-5 h-5 text-cyan-400 mb-3" />
              <p className="text-sm font-black uppercase text-[#97a4b8]">Questions</p>
              <p className="text-3xl font-black">{totalQuestions}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#111b30] p-5">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 mb-3" />
              <p className="text-sm font-black uppercase text-[#97a4b8]">High Score</p>
              <p className="text-3xl font-black">{highScore}</p>
            </div>
          </div>

          <button
            onClick={onReset}
            className="w-full py-4 rounded-lg font-black text-lg text-[#07111f] transition-all duration-300 ease-out hover:brightness-110 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 bg-cyan-400"
          >
            <RotateCcw className="w-5 h-5" />
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
};
