import React from 'react';
import { Star, Trophy, XCircle } from 'lucide-react';
import { ScoreBoardProps } from '@brain-impostor/types';

export const ScoreBoard: React.FC<ScoreBoardProps> = ({
  score,
  streak,
  highScore,
  questionNumber,
  onAbort,
}) => {
  const [displayScore, setDisplayScore] = React.useState(score);
  const [scoreGlow, setScoreGlow] = React.useState(false);
  const previousScoreRef = React.useRef(score);

  React.useEffect(() => {
    const start = previousScoreRef.current;
    if (score === start) return;

    setScoreGlow(true);
    const difference = score - start;
    const steps = Math.max(1, Math.min(12, Math.abs(difference)));
    let step = 0;
    previousScoreRef.current = score;
    const intervalId = window.setInterval(() => {
      step += 1;
      setDisplayScore(Math.round(start + (difference * step) / steps));
      if (step >= steps) {
        window.clearInterval(intervalId);
        window.setTimeout(() => setScoreGlow(false), 180);
      }
    }, 24);

    return () => window.clearInterval(intervalId);
  }, [score]);

  return (
    <div className="w-full min-h-[76px] flex justify-between items-center px-6 md:px-8 py-4 gap-3 border-b border-white/5 bg-[#0b1424]/70 backdrop-blur-sm">
      <div className={`flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#0d334a] text-cyan-400 text-sm font-black shadow-md border border-cyan-400/20 transition-all duration-300 ease-out hover:scale-105 ${scoreGlow ? 'scale-105 shadow-cyan-400/40 animate-score-pop' : ''}`}>
        <Trophy className="w-5 h-5 text-cyan-400" />
        <span>{displayScore}</span>
      </div>

      <div className="flex items-center gap-5 md:gap-8 justify-end">
        {streak >= 3 && (
          <div className="hidden sm:flex items-center rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1.5 text-sm font-black text-yellow-300 animate-score-pop">
            🔥 {streak} Streak!
          </div>
        )}

        <div className="flex flex-col text-right gap-1">
          <span className="text-xs text-[#96a4ba] font-black uppercase">High Score</span>
          <span className="text-sm font-black text-white flex items-center justify-end gap-1.5">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            {highScore}
          </span>
        </div>

        <div className="text-sm font-black text-[#aab7c8]">Q{questionNumber}</div>

        <button
          onClick={onAbort}
          aria-label="Exit game"
          className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/5 transition-all duration-300 ease-out hover:scale-105 active:scale-95"
        >
          <XCircle className="w-5 h-5 text-[#9aa8bd]" />
        </button>
      </div>
    </div>
  );
};
