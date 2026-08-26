import React from 'react';

interface AALogoProps {
  className?: string;
  showGlobe?: boolean;
}

export const AALogo: React.FC<AALogoProps> = ({ className = 'h-16 w-auto', showGlobe = false }) => {
  return (
    <svg
      viewBox={showGlobe ? "65 80 340 230" : "63 108 344 204"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Left 'A' Gradient */}
        <linearGradient id="leftAGradient" x1="120" y1="100" x2="300" y2="310" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#312852" />
          <stop offset="100%" stopColor="#1E1736" />
        </linearGradient>

        {/* Right 'A' Gradient */}
        <linearGradient id="rightAGradient" x1="220" y1="100" x2="400" y2="310" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#756C9C" />
          <stop offset="100%" stopColor="#4A426F" />
        </linearGradient>

        {/* Globe Gradient */}
        <linearGradient id="globeGrad" x1="220" y1="100" x2="280" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#819ABF" />
          <stop offset="100%" stopColor="#415678" />
        </linearGradient>

        {/* Drop shadow for overlapping layers */}
        <filter id="logoShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Optional Globe behind the 'A' apex */}
      {showGlobe && (
        <g id="GlobeAndPins">
          {/* Globe circle base */}
          <circle cx="250" cy="130" r="32" fill="url(#globeGrad)" />
          {/* Latitude and Longitude lines */}
          <circle cx="250" cy="130" r="32" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.3" fill="none" />
          <ellipse cx="250" cy="130" rx="32" ry="12" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.3" fill="none" />
          <ellipse cx="250" cy="130" rx="16" ry="32" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.3" fill="none" />
          
          {/* Continent shapes on globe */}
          <path
            d="M232 120 C236 115, 245 118, 248 112 C252 108, 260 110, 268 118 C272 122, 265 128, 258 132 C252 135, 240 138, 235 130 Z"
            fill="#FFFFFF"
            fillOpacity="0.45"
          />

          {/* Red Location Pins */}
          {/* Left Pin */}
          <g transform="translate(228, 92) scale(0.65)">
            <path d="M10 0 C4.5 0 0 4.5 0 10 C0 17.5 10 25 10 25 C10 25 20 17.5 20 10 C20 4.5 15.5 0 10 0 Z" fill="#EF4444" />
            <circle cx="10" cy="9" r="3.5" fill="#FFFFFF" />
          </g>
          {/* Center Pin */}
          <g transform="translate(244, 82) scale(0.75)">
            <path d="M10 0 C4.5 0 0 4.5 0 10 C0 17.5 10 25 10 25 C10 25 20 17.5 20 10 C20 4.5 15.5 0 10 0 Z" fill="#EF4444" />
            <circle cx="10" cy="9" r="3.5" fill="#FFFFFF" />
          </g>
          {/* Right Pin */}
          <g transform="translate(262, 94) scale(0.65)">
            <path d="M10 0 C4.5 0 0 4.5 0 10 C0 17.5 10 25 10 25 C10 25 20 17.5 20 10 C20 4.5 15.5 0 10 0 Z" fill="#EF4444" />
            <circle cx="10" cy="9" r="3.5" fill="#FFFFFF" />
          </g>
        </g>
      )}

      {/* Right 'A' (behind left A) */}
      <g id="RightA">
        <path
          d="M 273 110
             L 297 110
             L 405 310
             L 345 310
             L 322 270
             L 248 270
             L 225 310
             L 165 310
             Z"
          fill="url(#rightAGradient)"
        />
        {/* White Play Button inside Right 'A' */}
        <polygon
          points="276,182 276,218 308,200"
          fill="#FFFFFF"
        />
      </g>

      {/* Left 'A' (overlapping in front) */}
      <g id="LeftA" filter="url(#logoShadow)">
        <path
          d="M 183 110
             L 207 110
             L 305 310
             L 245 310
             L 222 270
             L 148 270
             L 125 310
             L 65 310
             Z"
          fill="url(#leftAGradient)"
        />
        {/* White Play Button inside Left 'A' */}
        <polygon
          points="176,182 176,218 208,200"
          fill="#FFFFFF"
        />
      </g>
    </svg>
  );
};

export default AALogo;
