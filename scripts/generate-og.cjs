const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgCard = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0c1222" />
      <stop offset="50%" stop-color="#070c18" />
      <stop offset="100%" stop-color="#02040a" />
    </linearGradient>

    <!-- Ambient Cyan Glow -->
    <radialGradient id="cyanGlow" cx="25%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.22" />
      <stop offset="100%" stop-color="#06b6d4" stop-opacity="0" />
    </radialGradient>

    <!-- Ambient Purple Glow -->
    <radialGradient id="purpleGlow" cx="80%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.18" />
      <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0" />
    </radialGradient>

    <!-- Studio Cyan to Purple Border Gradient -->
    <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06b6d4" />
      <stop offset="50%" stop-color="#a855f7" />
      <stop offset="100%" stop-color="#06b6d4" />
    </linearGradient>

    <!-- Logo Gradients -->
    <linearGradient id="rightAGrad" x1="220" y1="100" x2="400" y2="310" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#8377b0" />
      <stop offset="50%" stop-color="#655a92" />
      <stop offset="100%" stop-color="#4a426f" />
    </linearGradient>

    <linearGradient id="leftAGrad" x1="120" y1="100" x2="300" y2="310" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#3d3066" />
      <stop offset="50%" stop-color="#2d2350" />
      <stop offset="100%" stop-color="#1e1736" />
    </linearGradient>

    <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="3" dy="8" stdDeviation="8" flood-color="#000000" flood-opacity="0.8" />
    </filter>
  </defs>

  <!-- Background Base -->
  <rect width="1200" height="630" fill="url(#bg)" />

  <!-- Ambient Light Fields -->
  <circle cx="280" cy="315" r="380" fill="url(#cyanGlow)" />
  <circle cx="950" cy="260" r="420" fill="url(#purpleGlow)" />

  <!-- Outer Framing Ring -->
  <rect x="24" y="24" width="1152" height="582" rx="28" fill="none" stroke="url(#borderGrad)" stroke-width="2" stroke-opacity="0.35" />

  <!-- Left: Official AA Logo Emblem -->
  <g transform="translate(100, 115)">
    <!-- Container Badge -->
    <rect x="0" y="0" width="400" height="400" rx="90" fill="#090e1c" stroke="url(#borderGrad)" stroke-width="8" />

    <!-- Ambient Logo Glow -->
    <circle cx="200" cy="200" r="150" fill="#06b6d4" fill-opacity="0.12" />

    <!-- Official AA Double-A Logo -->
    <g transform="translate(200, 200) scale(1.05) translate(-235, -210)">
      <!-- Right 'A' -->
      <g id="RightA">
        <path
          d="M 273 110 L 297 110 L 405 310 L 345 310 L 322 270 L 248 270 L 225 310 L 165 310 Z"
          fill="url(#rightAGrad)"
          stroke="#9b8ecf"
          stroke-width="3"
          stroke-linejoin="round"
        />
        <polygon points="276,182 276,218 308,200" fill="#ffffff" stroke="#ffffff" stroke-width="2" stroke-linejoin="round" />
      </g>

      <!-- Left 'A' -->
      <g id="LeftA" filter="url(#dropShadow)">
        <path
          d="M 183 110 L 207 110 L 305 310 L 245 310 L 222 270 L 148 270 L 125 310 L 65 310 Z"
          fill="url(#leftAGrad)"
          stroke="#5d4c8e"
          stroke-width="3"
          stroke-linejoin="round"
        />
        <polygon points="176,182 176,218 208,200" fill="#ffffff" stroke="#ffffff" stroke-width="2" stroke-linejoin="round" />
      </g>
    </g>
  </g>

  <!-- Right: Branding & Typography -->
  <g transform="translate(550, 175)">
    <!-- Category Kicker -->
    <rect x="0" y="-35" width="280" height="34" rx="17" fill="#06b6d4" fill-opacity="0.15" stroke="#06b6d4" stroke-opacity="0.4" stroke-width="1" />
    <text x="140" y="-13" fill="#22d3ee" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="800" letter-spacing="2" text-anchor="middle">CREATIVE PRODUCTION STUDIO</text>

    <!-- Main Title -->
    <text x="0" y="60" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="52" font-weight="900" letter-spacing="1">AA ANIMATIONS</text>

    <!-- Subtitle Slogan -->
    <text x="0" y="105" fill="#06b6d4" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="800" letter-spacing="5">WE ANIMATE YOUR DREAMS</text>

    <!-- Hairline Separator -->
    <line x1="0" y1="145" x2="550" y2="145" stroke="#334155" stroke-width="1.5" stroke-opacity="0.6" />

    <!-- Services Description List -->
    <text x="0" y="195" fill="#e2e8f0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="21" font-weight="600" letter-spacing="0.5">2D &amp; 3D Animation • CGI &amp; VFX</text>
    <text x="0" y="235" fill="#94a3b8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="500" letter-spacing="0.5">Motion Graphics • Video Production • Visualization</text>

    <!-- Domain Pill -->
    <g transform="translate(0, 275)">
      <rect x="0" y="0" width="220" height="42" rx="12" fill="#0f172a" stroke="#06b6d4" stroke-opacity="0.5" stroke-width="1.5" />
      <circle cx="22" cy="21" r="5" fill="#10b981" />
      <text x="38" y="27" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="700" letter-spacing="1">aaanimations.site</text>
    </g>
  </g>
</svg>
`;

async function run() {
  const publicDir = path.resolve(__dirname, '../public');

  // Generate 1200x630 OG Image (PNG)
  const pngBuffer = await sharp(Buffer.from(svgCard))
    .png({ quality: 95, compressionLevel: 9 })
    .toBuffer();

  fs.writeFileSync(path.join(publicDir, 'og-image.png'), pngBuffer);
  console.log('Created public/og-image.png (size:', pngBuffer.length, 'bytes)');

  // Also generate JPEG version for maximum compatibility
  const jpgBuffer = await sharp(Buffer.from(svgCard))
    .jpeg({ quality: 90 })
    .toBuffer();

  fs.writeFileSync(path.join(publicDir, 'og-image.jpg'), jpgBuffer);
  console.log('Created public/og-image.jpg (size:', jpgBuffer.length, 'bytes)');

  // Also create a 512x512 square OG logo
  const svgFavicon = fs.readFileSync(path.join(publicDir, 'favicon.svg'));
  const logoSquare = await sharp(svgFavicon)
    .resize(512, 512)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'og-logo.png'), logoSquare);
  console.log('Created public/og-logo.png');
}

run().catch(console.error);
