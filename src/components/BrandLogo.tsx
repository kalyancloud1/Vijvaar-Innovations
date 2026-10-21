import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'light' | 'monogram';
  withTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'full',
  withTagline = false
}) => {
  const isLight = variant === 'light';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Precision Emblem / Monogram Insignia */}
      <div className="relative shrink-0 w-10 h-10 md:w-11 md:h-11 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Octagonal Protective Ring with Gold Gradient */}
          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f7e199" />
              <stop offset="35%" stopColor="#d4af37" />
              <stop offset="70%" stopColor="#aa7c11" />
              <stop offset="100%" stopColor="#dfb743" />
            </linearGradient>

            <linearGradient id="maroonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#871b30" />
              <stop offset="50%" stopColor="#631322" />
              <stop offset="100%" stopColor="#3d0713" />
            </linearGradient>

            <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#047857" />
              <stop offset="100%" stopColor="#064e3b" />
            </linearGradient>

            <filter id="subtleGlow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#d4af37" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Deep Shield / Hex Base */}
          <polygon
            points="50,4 92,26 92,74 50,96 8,74 8,26"
            fill="url(#maroonGrad)"
            stroke="url(#goldGrad)"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Inner Emerald Accent Facet */}
          <polygon
            points="50,14 84,32 84,68 50,86 16,68 16,32"
            fill="#091218"
            stroke="url(#emeraldGrad)"
            strokeWidth="1.5"
            strokeDasharray="1 3"
            opacity="0.85"
          />

          {/* The Dynamic Interlocking "V" & "I" Monogram */}
          {/* Stylized Left Wing of V */}
          <path
            d="M26,30 L43,30 L50,68 L43,68 Z"
            fill="url(#goldGrad)"
            filter="url(#subtleGlow)"
          />

          {/* Stylized Right Wing of V with Elevating Arrow Chevron */}
          <path
            d="M74,30 L57,30 L50,68 L57,68 Z"
            fill="url(#goldGrad)"
            filter="url(#subtleGlow)"
          />

          {/* Central Elevated Pillar / 'I' for Innovations with Emerald Node */}
          <path
            d="M47,20 L53,20 L53,52 L47,52 Z"
            fill="#ffffff"
          />
          <polygon
            points="50,12 56,22 44,22"
            fill="url(#goldGrad)"
          />
          
          {/* Subtle Emerald Core Node */}
          <circle cx="50" cy="56" r="3" fill="#10b981" stroke="#ffffff" strokeWidth="1" />
          
          {/* Tech Nodes at Vertices */}
          <circle cx="50" cy="4" r="2.5" fill="#f7e199" />
          <circle cx="92" cy="26" r="2.5" fill="#f7e199" />
          <circle cx="92" cy="74" r="2.5" fill="#f7e199" />
          <circle cx="50" cy="96" r="2.5" fill="#f7e199" />
          <circle cx="8" cy="74" r="2.5" fill="#f7e199" />
          <circle cx="8" cy="26" r="2.5" fill="#f7e199" />
        </svg>
      </div>

      {/* Brand Typography */}
      {variant !== 'monogram' && (
        <div className="flex flex-col leading-none">
          <div className="flex items-baseline gap-1.5">
            <span
              className={`font-display text-xl md:text-2xl font-black tracking-tight ${
                isLight ? 'text-white' : 'text-slate-900'
              }`}
            >
              VijVaar
            </span>
            <span className="font-display text-base md:text-lg font-semibold tracking-wider text-amber-600 dark:text-amber-500">
              INNOVATIONS
            </span>
          </div>
          
          <div className="flex items-center gap-1.5 mt-0.5">
            <span
              className={`text-[9px] md:text-[10px] tracking-widest uppercase font-semibold ${
                isLight ? 'text-amber-300/80' : 'text-amber-800/80'
              }`}
            >
              OPC PVT LTD
            </span>
            {withTagline && (
              <>
                <span className="text-slate-300 dark:text-slate-600 text-[10px]" aria-hidden="true">·</span>
                <span className={`text-[9px] tracking-wider font-medium ${isLight ? 'text-slate-300' : 'text-slate-600'}`}>
                  Innovate · Automate · Elevate
                </span>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
