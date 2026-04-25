import React from 'react';

export const BrainLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    viewBox="0 0 120 100" 
    className={className}
    width="80"
    height="80"
    fill="none" 
    stroke="currentColor" 
    strokeWidth="7" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    {/* Left Side: Solid Brain Lobes */}
    <path 
      d="M50 15C30 15 15 30 15 50C15 70 30 85 50 85" 
      strokeWidth="9"
    />
    <path 
      d="M35 35C30 35 25 40 25 45" 
      strokeWidth="5"
      opacity="0.5"
    />
    
    {/* Right Side: Circuitry */}
    <path d="M50 15V85" strokeWidth="9" />
    
    {/* Top Circuit */}
    <path d="M50 30H70V15H85" />
    <circle cx="95" cy="15" r="6" fill="currentColor" stroke="none" />
    
    {/* Middle Circuit */}
    <path d="M50 50H85" />
    <circle cx="95" cy="50" r="6" fill="currentColor" stroke="none" />
    
    {/* Bottom Circuit */}
    <path d="M50 70H70V85H85" />
    <circle cx="95" cy="85" r="6" fill="currentColor" stroke="none" />
  </svg>
);
