import React from 'react';

export interface HandCircleProps {
  children?: React.ReactNode;
  className?: string;
  color?: string;
  strokeWidth?: number;
}

/**
 * HandCircle — Wraps a word or short phrase with an authentic hand-drawn
 * looping ellipse, simulating a pen circle on graph paper.
 */
export function HandCircle({
  children,
  className = '',
  color = 'currentColor',
  strokeWidth = 2,
}: HandCircleProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <svg
        viewBox="0 0 160 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute -inset-x-2.5 -inset-y-2 w-[calc(100%+1.25rem)] h-[calc(100%+1rem)] pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        {/* Organic imperfect ellipse with natural start/end stroke overlap */}
        <path
          d="M 22,28 C 16,15 45,6 85,6 C 132,6 154,18 152,34 C 150,48 118,55 78,54 C 36,53 10,44 14,26 C 16,18 30,12 50,10"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.88"
        />
      </svg>
    </span>
  );
}

export default HandCircle;
