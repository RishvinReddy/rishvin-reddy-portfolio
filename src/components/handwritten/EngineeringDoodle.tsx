import React from 'react';

export type DoodleType =
  /* Cybersecurity */
  | 'shield'
  | 'lock'
  | 'fingerprint'
  /* IoT & Hardware */
  | 'circuit'
  | 'sensor-node'
  | 'wireless'
  /* Blockchain */
  | 'connected-nodes'
  | 'linked-blocks'
  /* Software Engineering */
  | 'code-brackets'
  | 'terminal'
  | 'data-stream';

export interface EngineeringDoodleProps {
  type: DoodleType;
  className?: string;
  color?: string;
  strokeWidth?: number;
}

/**
 * EngineeringDoodle — Authentic technical sketchbook illustrations inspired by
 * cybersecurity, IoT, blockchain, and systems engineering.
 * Lightweight inline SVGs marked aria-hidden="true" for accessible rendering.
 */
export function EngineeringDoodle({
  type,
  className = 'w-10 h-10',
  color = 'currentColor',
  strokeWidth = 1.8,
}: EngineeringDoodleProps) {
  /* ── 1. Cybersecurity: Shield ── */
  if (type === 'shield') {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        {/* Outer shield perimeter */}
        <path
          d="M 32,8 C 42,9 52,14 54,19 C 55,34 46,49 32,58 C 18,49 9,34 10,19 C 12,14 22,9 32,8 Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Inner sketch tick / reinforcement */}
        <path
          d="M 23,31 L 29,38 L 42,24"
          stroke={color}
          strokeWidth={strokeWidth * 1.1}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Subtle sketch hatching */}
        <path
          d="M 32,15 L 32,23 M 32,42 L 32,50"
          stroke={color}
          strokeWidth={strokeWidth * 0.75}
          strokeLinecap="round"
          strokeDasharray="2 3"
          opacity="0.6"
        />
      </svg>
    );
  }

  /* ── 2. Cybersecurity: Padlock ── */
  if (type === 'lock') {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        {/* Shackle */}
        <path
          d="M 22,26 L 22,18 C 22,12 26,8 32,8 C 38,8 42,12 42,18 L 42,26"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Lock body */}
        <rect
          x="14"
          y="26"
          width="36"
          height="30"
          rx="5"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Keyhole */}
        <circle cx="32" cy="38" r="3" stroke={color} strokeWidth={strokeWidth * 0.9} />
        <path
          d="M 32,41 L 32,48"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      </svg>
    );
  }

  /* ── 3. Cybersecurity & Biometrics: Fingerprint ── */
  if (type === 'fingerprint') {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        {/* Outer loop */}
        <path
          d="M 18,34 C 18,22 24,14 32,14 C 40,14 46,22 46,34 C 46,46 42,52 38,56"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        {/* Middle loop */}
        <path
          d="M 23,36 C 23,28 27,21 32,21 C 37,21 41,28 41,36 C 41,44 38,49 33,52"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        {/* Center core whorl */}
        <path
          d="M 28,38 C 28,34 30,29 32,29 C 34,29 36,34 36,38 C 36,44 34,46 32,46"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        {/* Left marginal ridge */}
        <path
          d="M 13,38 C 13,26 17,16 23,10"
          stroke={color}
          strokeWidth={strokeWidth * 0.85}
          strokeLinecap="round"
          opacity="0.7"
        />
        {/* Right marginal ridge */}
        <path
          d="M 51,38 C 51,26 47,16 41,10"
          stroke={color}
          strokeWidth={strokeWidth * 0.85}
          strokeLinecap="round"
          opacity="0.7"
        />
      </svg>
    );
  }

  /* ── 4. IoT & Hardware: Circuit Trace ── */
  if (type === 'circuit') {
    return (
      <svg
        viewBox="0 0 72 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        {/* Main 45-deg bus trace */}
        <path
          d="M 8,48 L 26,48 L 42,32 L 64,32"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Branch trace */}
        <path
          d="M 26,48 L 38,60 L 58,60"
          stroke={color}
          strokeWidth={strokeWidth * 0.85}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 36,38 L 48,16 L 64,16"
          stroke={color}
          strokeWidth={strokeWidth * 0.85}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Solder pads / vias */}
        <circle cx="8" cy="48" r="3" stroke={color} strokeWidth={strokeWidth} fill="none" />
        <circle cx="64" cy="32" r="3" stroke={color} strokeWidth={strokeWidth} fill="none" />
        <circle cx="64" cy="16" r="2.5" stroke={color} strokeWidth={strokeWidth} fill="none" />
        <circle cx="58" cy="60" r="2.5" stroke={color} strokeWidth={strokeWidth} fill="none" />
      </svg>
    );
  }

  /* ── 5. IoT & Hardware: Sensor Node ── */
  if (type === 'sensor-node') {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        {/* Central node chip */}
        <rect
          x="24"
          y="24"
          width="16"
          height="16"
          rx="3"
          stroke={color}
          strokeWidth={strokeWidth}
        />
        <circle cx="32" cy="32" r="2" fill={color} />
        {/* Radiating telemetry wave 1 */}
        <path
          d="M 16,20 C 13,24 13,38 16,42 M 48,20 C 51,24 51,38 48,42"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        {/* Radiating wave 2 */}
        <path
          d="M 10,14 C 5,20 5,44 10,50 M 54,14 C 59,20 59,44 54,50"
          stroke={color}
          strokeWidth={strokeWidth * 0.85}
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    );
  }

  /* ── 6. IoT: Wireless Wave ── */
  if (type === 'wireless') {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <circle cx="32" cy="48" r="3" fill={color} />
        <path
          d="M 23,38 C 28,34 36,34 41,38"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <path
          d="M 15,28 C 24,20 40,20 49,28"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <path
          d="M 8,18 C 21,7 43,7 56,18"
          stroke={color}
          strokeWidth={strokeWidth * 0.9}
          strokeLinecap="round"
          opacity="0.75"
        />
      </svg>
    );
  }

  /* ── 7. Blockchain: Connected Distributed Nodes ── */
  if (type === 'connected-nodes') {
    return (
      <svg
        viewBox="0 0 68 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        {/* Mesh links */}
        <path
          d="M 16,18 L 52,14 M 16,18 L 34,48 M 52,14 L 34,48 M 16,18 L 48,44 M 52,14 L 20,44"
          stroke={color}
          strokeWidth={strokeWidth * 0.8}
          strokeDasharray="3 3"
          opacity="0.65"
        />
        {/* Node 1 */}
        <circle cx="16" cy="18" r="5" stroke={color} strokeWidth={strokeWidth} fill="none" />
        <circle cx="16" cy="18" r="2" fill={color} />
        {/* Node 2 */}
        <circle cx="52" cy="14" r="5" stroke={color} strokeWidth={strokeWidth} fill="none" />
        <circle cx="52" cy="14" r="2" fill={color} />
        {/* Node 3 */}
        <circle cx="34" cy="48" r="5" stroke={color} strokeWidth={strokeWidth} fill="none" />
        <circle cx="34" cy="48" r="2" fill={color} />
      </svg>
    );
  }

  /* ── 8. Blockchain: Linked Blocks ── */
  if (type === 'linked-blocks') {
    return (
      <svg
        viewBox="0 0 76 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        {/* Block A */}
        <rect
          x="6"
          y="16"
          width="24"
          height="24"
          rx="3"
          stroke={color}
          strokeWidth={strokeWidth}
        />
        <path d="M 12,24 L 24,24 M 12,30 L 20,30" stroke={color} strokeWidth={strokeWidth * 0.8} />

        {/* Cryptographic Chain Link */}
        <path
          d="M 30,28 L 46,28"
          stroke={color}
          strokeWidth={strokeWidth * 1.2}
          strokeLinecap="round"
        />
        <circle cx="38" cy="28" r="2" fill={color} />

        {/* Block B */}
        <rect
          x="46"
          y="16"
          width="24"
          height="24"
          rx="3"
          stroke={color}
          strokeWidth={strokeWidth}
        />
        <path d="M 52,24 L 64,24 M 52,30 L 60,30" stroke={color} strokeWidth={strokeWidth * 0.8} />
      </svg>
    );
  }

  /* ── 9. Software Engineering: Code Brackets ── */
  if (type === 'code-brackets') {
    return (
      <svg
        viewBox="0 0 64 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        {/* Opening bracket < */}
        <path
          d="M 22,18 L 10,30 L 22,42"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Closing slash / */}
        <path
          d="M 38,15 L 26,45"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        {/* Closing bracket > */}
        <path
          d="M 42,18 L 54,30 L 42,42"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  /* ── 10. Software Engineering: Terminal Prompt ── */
  if (type === 'terminal') {
    return (
      <svg
        viewBox="0 0 64 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <rect
          x="6"
          y="10"
          width="52"
          height="40"
          rx="4"
          stroke={color}
          strokeWidth={strokeWidth}
        />
        {/* Window controls */}
        <circle cx="14" cy="18" r="1.5" fill={color} />
        <circle cx="20" cy="18" r="1.5" fill={color} />
        <circle cx="26" cy="18" r="1.5" fill={color} />
        {/* Prompt >_ */}
        <path
          d="M 14,32 L 20,36 L 14,40"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 24,40 L 32,40"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      </svg>
    );
  }

  /* ── 11. Data Stream ── */
  return (
    <svg
      viewBox="0 0 64 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M 8,30 Q 20,16 32,30 T 56,30"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <circle cx="14" cy="24" r="2" fill={color} />
      <circle cx="32" cy="30" r="2" fill={color} />
      <circle cx="50" cy="36" r="2" fill={color} />
    </svg>
  );
}

export default EngineeringDoodle;
