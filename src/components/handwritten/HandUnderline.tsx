import React from 'react';

export interface HandUnderlineProps {
  className?: string;
  color?: string;
  strokeWidth?: number;
  variant?: 'single' | 'double' | 'scribble';
}

/**
 * HandUnderline — Authentic hand-drawn sketch underline for titles and key terms.
 * Pure SVG with organic pen linework and stroke variation.
 */
export function HandUnderline({
  className = 'w-full h-3',
  color = 'currentColor',
  strokeWidth = 2.5,
  variant = 'double',
}: HandUnderlineProps) {
  return (
    <svg
      viewBox="0 0 320 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      {/* Primary wavy pen stroke */}
      <path
        d="M 4,11 C 55,6 125,14 205,8 C 248,5 292,12 316,9"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.95"
      />

      {/* Secondary natural pen return stroke (sketch effect) */}
      {variant === 'double' && (
        <path
          d="M 18,15 C 80,12 165,18 245,13 C 275,11 298,16 312,14"
          stroke={color}
          strokeWidth={Math.max(1.5, strokeWidth * 0.7)}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.75"
        />
      )}

      {/* Expressive scribble variant */}
      {variant === 'scribble' && (
        <path
          d="M 6,14 C 45,16 95,11 145,16 C 195,11 245,16 314,13"
          stroke={color}
          strokeWidth={Math.max(1.5, strokeWidth * 0.65)}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.6"
        />
      )}
    </svg>
  );
}

export default HandUnderline;
