import React from 'react';
import { CategorySelectProps, Category } from '@brain-impostor/types';
import { CATEGORIES } from '@brain-impostor/data';
import { FlaskConical, Calculator, Globe, UtensilsCrossed } from 'lucide-react';

const ICON_MAP: Record<Category, React.FC<{ className?: string }>> = {
  Science: FlaskConical,
  Maths: Calculator,
  GK: Globe,
  Food: UtensilsCrossed,
};

const LABEL_MAP: Record<Category, string> = {
  Science: 'Science',
  Maths: 'Maths',
  GK: 'GK',
  Food: 'Food',
};

export const CategorySelect: React.FC<CategorySelectProps> = ({
  selected,
  onSelect,
}) => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 flex items-center justify-center bg-cyan-400 text-[#07111f] rounded-full text-base font-black shadow-lg shadow-cyan-400/20">
          1
        </div>
        <h2 className="text-xl font-black text-white">Category</h2>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {CATEGORIES.map((cat) => {
          const Icon = ICON_MAP[cat];
          const isSelected = selected === cat;
          return (
            <button
              key={cat}
              onClick={() => onSelect(cat)}
              className={`min-h-[134px] p-5 rounded-2xl bg-[#0d1426] border border-[#182337] flex flex-col items-center justify-center gap-4 cursor-pointer transition-all duration-300 ease-out hover:bg-[#111b30] hover:border-cyan-400/45 hover:-translate-y-0.5 hover:scale-105 active:scale-95 ${
                isSelected
                  ? 'border-cyan-400 text-cyan-400 bg-[#0d3a4b] shadow-[0_0_0_1px_rgba(34,211,238,0.45),0_0_22px_rgba(34,211,238,0.12)]'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className={isSelected ? 'text-cyan-400' : 'text-[#94a3b8]'}>
                <Icon className="w-10 h-10" />
              </div>
              <span className={`text-base font-black ${isSelected ? 'text-cyan-400' : 'text-white'}`}>{LABEL_MAP[cat]}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
