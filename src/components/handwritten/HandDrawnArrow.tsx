import React from 'react';

export type ArrowDirection =
  | 'curved-down-right'
  | 'curved-down-left'
  | 'curved-up-right'
  | 'curved-up-left'
  | 'loop'
  | 'straight';

export interface HandDrawnArrowProps {
  className?: string;
  direction?: ArrowDirection;
  color?: string;
  strokeWidth?: number;
}

/**
 * HandDrawnArrow — Authentic engineering sketch arrow with hand-drawn tapering
 * and organic arrowhead.
 */
export function HandDrawnArrow({
  className = 'w-12 h-12',
  direction = 'curved-down-right',
  color = 'currentColor',
  strokeWidth = 2,
}: HandDrawnArrowProps) {
  if (direction === 'curved-down-right') {
    return (
      <svg
        viewBox="0 0 80 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        {/* Arc down-right */}
        <path
          d="M 6,10 C 22,6 52,14 66,42"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Arrowhead top barb */}
        <path
          d="M 50,38 C 58,40 66,43 66,43"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Arrowhead bottom barb */}
        <path
          d="M 65,30 C 66,36 66,43 66,43"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (direction === 'curved-up-right') {
    return (
      <svg
        viewBox="0 0 80 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M 8,48 C 24,52 50,42 66,16"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 52,18 C 60,16 66,16 66,16"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 64,28 C 66,22 66,16 66,16"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (direction === 'curved-down-left') {
    return (
      <svg
        viewBox="0 0 80 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M 74,10 C 58,6 28,14 14,42"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 30,38 C 22,40 14,43 14,43"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 15,30 C 14,36 14,43 14,43"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (direction === 'curved-up-left') {
    return (
      <svg
        viewBox="0 0 80 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M 72,48 C 56,52 30,42 14,16"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 28,18 C 20,16 14,16 14,16"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 16,28 C 14,22 14,16 14,16"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (direction === 'loop') {
    return (
      <svg
        viewBox="0 0 90 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        {/* Loop-the-loop stroke */}
        <path
          d="M 10,50 C 35,55 45,20 30,16 C 18,12 18,36 42,42 C 60,47 70,30 80,18"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 68,17 C 76,17 80,18 80,18"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 78,28 C 80,22 80,18 80,18"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  /* Default straight sketch */
  return (
    <svg
      viewBox="0 0 70 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M 6,15 C 25,13 45,17 62,15"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 50,8 C 58,12 62,15 62,15"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 50,22 C 58,18 62,15 62,15"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default HandDrawnArrow;
