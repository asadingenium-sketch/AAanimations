const { Resvg } = require('@resvg/resvg-js');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const publicDir = path.join(__dirname, '..', 'public');

// Master high-definition SVG matching the exact official AA Animations logo
const masterSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <!-- Background Gradient (AA Animations obsidian slate) -->
    <linearGradient id="tileBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0d1527" />
      <stop offset="50%" stop-color="#080d19" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>

    <!-- Studio Cyan to Purple Border Gradient -->
    <linearGradient id="tileBorder" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06b6d4" />
      <stop offset="50%" stop-color="#a855f7" />
      <stop offset="100%" stop-color="#06b6d4" />
    </linearGradient>

    <!-- Right 'A' Gradient (exact AA Animations palette) -->
    <linearGradient id="rightAGradient" x1="220" y1="100" x2="400" y2="310" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#8377b0" />
      <stop offset="50%" stop-color="#655a92" />
      <stop offset="100%" stop-color="#4a426f" />
    </linearGradient>

    <!-- Left 'A' Gradient (exact AA Animations palette) -->
    <linearGradient id="leftAGradient" x1="120" y1="100" x2="300" y2="310" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#3d3066" />
      <stop offset="50%" stop-color="#2d2350" />
      <stop offset="100%" stop-color="#1e1736" />
    </linearGradient>

    <!-- Ambient Cyan Glow behind Logo -->
    <radialGradient id="ambientGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.18" />
      <stop offset="100%" stop-color="#06b6d4" stop-opacity="0" />
    </radialGradient>

    <!-- Depth Shadow between Left A and Right A -->
    <filter id="logoShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="3" dy="6" stdDeviation="6" flood-color="#000000" flood-opacity="0.8" />
    </filter>
  </defs>

  <!-- Rounded Studio Tile Container (High contrast on dark & light browser tabs) -->
  <rect x="20" y="20" width="472" height="472" rx="112" fill="url(#tileBg)" stroke="url(#tileBorder)" stroke-width="16" />

  <!-- Ambient Glow -->
  <circle cx="256" cy="256" r="180" fill="url(#ambientGlow)" />

  <!-- Official AA Animations Double 'A' Mark -->
  <g transform="translate(256, 256) scale(1.24) translate(-235, -210)">
    <!-- Right 'A' (behind left A) -->
    <g id="RightA">
      <path
        d="M 273 110 L 297 110 L 405 310 L 345 310 L 322 270 L 248 270 L 225 310 L 165 310 Z"
        fill="url(#rightAGradient)"
        stroke="#9b8ecf"
        stroke-width="3"
        stroke-linejoin="round"
      />
      <!-- White Play Button inside Right 'A' -->
      <polygon
        points="276,182 276,218 308,200"
        fill="#ffffff"
        stroke="#ffffff"
        stroke-width="2"
        stroke-linejoin="round"
      />
    </g>

    <!-- Left 'A' (overlapping in front with drop shadow) -->
    <g id="LeftA" filter="url(#logoShadow)">
      <path
        d="M 183 110 L 207 110 L 305 310 L 245 310 L 222 270 L 148 270 L 125 310 L 65 310 Z"
        fill="url(#leftAGradient)"
        stroke="#5d4c8e"
        stroke-width="3"
        stroke-linejoin="round"
      />
      <!-- White Play Button inside Left 'A' -->
      <polygon
        points="176,182 176,218 208,200"
        fill="#ffffff"
        stroke="#ffffff"
        stroke-width="2"
        stroke-linejoin="round"
      />
    </g>
  </g>
</svg>
`;

// Save master SVG to public/favicon.svg
fs.writeFileSync(path.join(publicDir, 'favicon.svg'), masterSvg);
console.log('Saved public/favicon.svg');

// Generate specific sizes for PNG favicons
const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-48x48.png', size: 48 },
  { name: 'favicon-64x64.png', size: 64 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 }
];

for (const { name, size } of sizes) {
  const resvg = new Resvg(masterSvg, {
    fitTo: { mode: 'width', value: size }
  });
  const pngData = resvg.render().asPng();
  fs.writeFileSync(path.join(publicDir, name), pngData);
  console.log(`Saved public/${name} (${size}x${size})`);
}

// Generate multi-resolution public/favicon.ico
try {
  const ico16 = path.join(publicDir, 'favicon-16x16.png');
  const ico32 = path.join(publicDir, 'favicon-32x32.png');
  const ico48 = path.join(publicDir, 'favicon-48x48.png');
  const ico64 = path.join(publicDir, 'favicon-64x64.png');
  const targetIco = path.join(publicDir, 'favicon.ico');

  execSync(`convert "${ico16}" "${ico32}" "${ico48}" "${ico64}" "${targetIco}"`);
  console.log('Generated multi-resolution public/favicon.ico (16, 32, 48, 64)');
} catch (err) {
  console.error('Failed to generate ICO with ImageMagick, falling back to 32x32 copy:', err.message);
  fs.copyFileSync(path.join(publicDir, 'favicon-32x32.png'), path.join(publicDir, 'favicon.ico'));
}

// Write web app manifest
const manifest = {
  name: "AA Animations",
  short_name: "AAanimations",
  description: "High-end 2D & 3D Animation, CGI, VFX, Motion Graphics, and Custom Printing Studio",
  icons: [
    {
      src: "./favicon-32x32.png",
      sizes: "32x32",
      type: "image/png"
    },
    {
      src: "./android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png"
    },
    {
      src: "./android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png"
    }
  ],
  theme_color: "#020617",
  background_color: "#020617",
  display: "standalone"
};

fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), JSON.stringify(manifest, null, 2));
console.log('Saved public/site.webmanifest');
