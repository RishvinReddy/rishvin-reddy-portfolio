import React from 'react';
import { HandDrawnArrow, type ArrowDirection } from './HandDrawnArrow';

export interface HandwrittenNoteProps {
  children: React.ReactNode;
  className?: string;
  rotation?: number; // e.g. -3, 2, 0
  color?: 'default' | 'blue' | 'accent' | 'amber' | 'emerald' | 'purple';
  arrowDirection?: ArrowDirection;
  arrowPosition?: 'left' | 'right' | 'top' | 'bottom';
  arrowClassName?: string;
  underline?: boolean;
}

const INK_COLORS = {
  default: 'text-slate-600 dark:text-slate-300',
  blue: 'text-[#0A66C2] dark:text-[#38bdf8]',
  accent: 'text-[#f20d46] dark:text-[#fb7185]',
  amber: 'text-amber-700 dark:text-amber-300',
  emerald: 'text-emerald-700 dark:text-emerald-300',
  purple: 'text-violet-700 dark:text-violet-300',
};

/**
 * HandwrittenNote — Renders a small handwritten annotation in Caveat
 * with organic rotation, ink color, and optional companion arrow.
 * Used for 5-10% of visible accents: "Built from scratch", "Security first",
 * "Ideas → Systems", "A work in progress".
 */
export function HandwrittenNote({
  children,
  className = '',
  rotation = -2,
  color = 'blue',
  arrowDirection,
  arrowPosition = 'right',
  arrowClassName = 'w-9 h-9',
  underline = false,
}: HandwrittenNoteProps) {
  const inkClass = INK_COLORS[color] ?? INK_COLORS.blue;

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-handwriting select-none ${inkClass} ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        transformOrigin: 'center',
      }}
    >
      {/* Arrow on left */}
      {arrowDirection && arrowPosition === 'left' && (
        <span className="shrink-0 -mr-0.5">
          <HandDrawnArrow
            direction={arrowDirection}
            className={arrowClassName}
            color="currentColor"
          />
        </span>
      )}

      {/* Note Text */}
      <span className="relative text-lg sm:text-xl lg:text-2xl font-semibold tracking-wide whitespace-nowrap leading-none">
        {children}
        {underline && (
          <span className="absolute left-0 -bottom-1 w-full h-1 bg-current opacity-30 rounded-full" />
        )}
      </span>

      {/* Arrow on right */}
      {arrowDirection && arrowPosition === 'right' && (
        <span className="shrink-0 -ml-0.5">
          <HandDrawnArrow
            direction={arrowDirection}
            className={arrowClassName}
            color="currentColor"
          />
        </span>
      )}
    </span>
  );
}

export default HandwrittenNote;
