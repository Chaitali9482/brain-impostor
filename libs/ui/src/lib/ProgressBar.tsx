import React from 'react';
import { ProgressBarProps } from '@brain-impostor/types';

export const ProgressBar: React.FC<ProgressBarProps> = ({
  timeLeft,
  maxTime,
}) => {
  const progress = (timeLeft / maxTime) * 100;

  let color = "bg-red-500 animate-pulse";
  if (timeLeft > 6) {
    color = "bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.35)]";
  } else if (timeLeft > 3) {
    color = "bg-yellow-400 shadow-[0_0_18px_rgba(250,204,21,0.3)]";
  }

  return (
    <div
      className={`h-full transition-all duration-500 ease-linear ${color}`}
      style={{ width: `${progress}%` }}
    />
  );
};
