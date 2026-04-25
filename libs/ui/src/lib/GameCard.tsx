import React from 'react';
import { GameCardProps } from '@brain-impostor/types';

export const GameCard: React.FC<GameCardProps> = ({
  statement,
  index,
  selectedIndex,
  correctIndex,
  isAnswered,
  onSelect,
}) => {
  const isSelected = selectedIndex === index;
  const isCorrectAnswer = correctIndex === index;

  let cardClass =
    'bg-[#0d1426] border-[#1f3046] hover:bg-[#111b30] hover:border-cyan-400/45';
  
  if (isAnswered) {
    if (isCorrectAnswer) {
      cardClass =
        'bg-[#10342c] border-emerald-400 text-white shadow-lg shadow-emerald-500/40 z-10 scale-[1.03] animate-correct-glow';
    } else if (isSelected) {
      cardClass =
        'bg-[#3a1721] border-red-500 text-white shadow-lg shadow-red-500/30 animate-shake';
    } else {
      cardClass = 'bg-[#0b1220] border-[#152033] text-slate-500 opacity-50 cursor-default';
    }
  }

  return (
    <button
      disabled={isAnswered}
      onClick={() => onSelect(index)}
      className={`w-full min-h-[80px] px-6 md:px-7 py-5 rounded-2xl text-left cursor-pointer text-white font-black border transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-105 active:scale-95 ${cardClass}`}
    >
      <span className="flex-grow text-xl leading-snug">{statement}</span>
    </button>
  );
};
