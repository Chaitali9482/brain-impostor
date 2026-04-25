import React from 'react';
import { ArrowRight, Check, Clock, X } from 'lucide-react';
import { ResultModalProps } from '@brain-impostor/types';

export const ResultModal: React.FC<ResultModalProps> = ({
  resultType,
  explanation,
  falseStatement,
  onNext,
}) => {
  if (!resultType) return null;

  type Config = {
    Icon: React.FC<{ className?: string; strokeWidth?: number }>;
    iconRingColor: string;
    iconColor: string;
    title: string;
    titleColor: string;
    message: string;
    headerBg: string;
    dividerColor: string;
  };

  const config: Config =
    resultType === 'correct'
      ? {
          Icon: Check,
          iconRingColor: 'ring-white',
          iconColor: 'text-white',
          title: 'Correct!',
          titleColor: 'text-white',
          message: '',
          headerBg: 'bg-[#0d1426]',
          dividerColor: 'border-white/10',
        }
      : resultType === 'timeout'
      ? {
          Icon: Clock,
          iconRingColor: 'ring-red-500',
          iconColor: 'text-red-400',
          title: "Time's Up!",
          titleColor: 'text-red-400',
          message: 'You chose the real statement.',
          headerBg: 'bg-[#281b2d]',
          dividerColor: 'border-red-500/35',
        }
      : {
          Icon: X,
          iconRingColor: 'ring-red-500',
          iconColor: 'text-red-400',
          title: 'Incorrect!',
          titleColor: 'text-red-400',
          message: 'You chose the real statement.',
          headerBg: 'bg-[#281b2d]',
          dividerColor: 'border-red-500/35',
        };

  const {
    Icon,
    iconRingColor,
    iconColor,
    title,
    titleColor,
    message,
    headerBg,
    dividerColor,
  } = config;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#081120]/75 backdrop-blur-md px-5">
      <div
        className="w-full max-w-[510px] rounded-2xl overflow-hidden shadow-[0_28px_80px_rgba(0,0,0,0.32)] opacity-0 scale-95 animate-modal-in transition-all duration-300 ease-out"
        style={{ background: '#0d1426', border: '1px solid rgba(148,163,184,0.18)' }}
      >
        <div className={`${headerBg} px-8 pt-9 pb-8 flex flex-col items-center gap-4 border-b ${dividerColor}`}>
          <div className={`w-[74px] h-[74px] rounded-full flex items-center justify-center ring-[6px] ${iconRingColor}`}>
            <Icon className={`w-9 h-9 ${iconColor}`} strokeWidth={4} />
          </div>
          <div className="text-center">
            <h2 className={`text-3xl font-black ${titleColor}`}>{title}</h2>
            {message && <p className="mt-2 text-base font-bold text-[#98a6bb]">{message}</p>}
          </div>
        </div>

        <div className="px-8 py-8 space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-black uppercase tracking-wide text-[#97a4b8]">
              The False Statement
            </p>
            <div
              className="w-full px-4 py-4 rounded-xl text-lg text-white font-bold"
              style={{
                background: '#261a2d',
                border: '1px solid rgba(239,68,68,0.45)',
              }}
            >
              {falseStatement ?? 'No statement available.'}
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-black uppercase tracking-wide text-[#97a4b8]">
              Explanation
            </p>
            <p className="text-base text-white leading-relaxed font-medium">{explanation}</p>
          </div>

          <button
            onClick={onNext}
            className="w-full py-4 rounded-lg font-black text-lg text-[#07111f] transition-all duration-300 ease-out hover:brightness-110 hover:scale-105 active:scale-95 flex items-center justify-center gap-4"
            style={{ background: '#22d3ee' }}
          >
            Next Question
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
