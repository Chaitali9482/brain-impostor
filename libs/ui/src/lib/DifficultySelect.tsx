import React from 'react';
import { DifficultySelectProps, Difficulty } from '@brain-impostor/types';
import { DIFFICULTIES } from '@brain-impostor/data';

const DIFFICULTY_CONFIG: Record<
  Difficulty,
  { selectedBg: string; selectedBorder: string; selectedText: string; selectedShadow: string }
> = {
  easy: {
    selectedBg: 'bg-[#0d3431]',
    selectedBorder: 'border-emerald-400',
    selectedText: 'text-emerald-400',
    selectedShadow: 'shadow-[0_0_22px_rgba(16,185,129,0.16)]',
  },
  medium: {
    selectedBg: 'bg-[#302915]',
    selectedBorder: 'border-yellow-500',
    selectedText: 'text-yellow-400',
    selectedShadow: 'shadow-[0_0_12px_rgba(234,179,8,0.2)]',
  },
  hard: {
    selectedBg: 'bg-[#2a0a0a]',
    selectedBorder: 'border-red-500',
    selectedText: 'text-red-400',
    selectedShadow: 'shadow-[0_0_12px_rgba(239,68,68,0.2)]',
  },
};

export const DifficultySelect: React.FC<DifficultySelectProps> = ({
  selected,
  onSelect,
}) => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 flex items-center justify-center bg-cyan-400 text-[#07111f] rounded-full text-base font-black shadow-lg shadow-cyan-400/20">
          2
        </div>
        <h2 className="text-xl font-black text-white">Difficulty</h2>
      </div>
      
      <div className="flex flex-col gap-3">
        {DIFFICULTIES.map((diff) => {
          const isSelected = selected === diff;
          const cfg = DIFFICULTY_CONFIG[diff];
          return (
            <button
              key={diff}
              onClick={() => onSelect(diff)}
              className={`w-full min-h-[72px] px-6 text-left font-black uppercase text-lg rounded-2xl bg-[#0d1426] border border-[#182337] transition-all duration-300 ease-out hover:bg-[#111b30] hover:border-white/15 hover:-translate-y-0.5 hover:scale-105 active:scale-95 ${
                isSelected
                  ? `${cfg.selectedBg} ${cfg.selectedBorder} ${cfg.selectedText} ${cfg.selectedShadow}`
                  : 'text-white hover:text-white'
              }`}
            >
              {diff}
            </button>
          );
        })}
      </div>
    </div>
  );
};
