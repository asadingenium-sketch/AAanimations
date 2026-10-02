const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 1200 x 630 px Dedicated AA Animations Social Preview Card
// Designed with a centered, prominent official AA Animations emblem
// Safe for both 1.91:1 (Facebook, LinkedIn, Twitter) and 1:1 square crop (WhatsApp, Telegram)
const svgHeroCard = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Dark obsidian gradient background -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b1120" />
      <stop offset="45%" stop-color="#060a14" />
      <stop offset="100%" stop-color="#020409" />
    </linearGradient>

    <!-- Studio Cyan Ambient Lighting -->
    <radialGradient id="cyanAmbient" cx="50%" cy="38%" r="45%">
      <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.32" />
      <stop offset="45%" stop-color="#0891b2" stop-opacity="0.12" />
      <stop offset="100%" stop-color="#06b6d4" stop-opacity="0" />
    </radialGradient>

    <!-- Studio Purple Atmospheric Accent -->
    <radialGradient id="purpleAccent" cx="75%" cy="35%" r="40%">
      <stop offset="0%" stop-color="#a855f7" stop-opacity="0.22" />
      <stop offset="100%" stop-color="#a855f7" stop-opacity="0" />
    </radialGradient>

    <!-- Studio Indigo Atmospheric Accent -->
    <radialGradient id="indigoAccent" cx="25%" cy="40%" r="40%">
      <stop offset="0%" stop-color="#4f46e5" stop-opacity="0.2" />
      <stop offset="100%" stop-color="#4f46e5" stop-opacity="0" />
    </radialGradient>

    <!-- Border Gradient -->
    <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.7" />
      <stop offset="50%" stop-color="#a855f7" stop-opacity="0.5" />
      <stop offset="100%" stop-color="#06b6d4" stop-opacity="0.7" />
    </linearGradient>

    <!-- Official Left 'A' Gradient -->
    <linearGradient id="leftAGradient" x1="120" y1="100" x2="300" y2="310" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#3b2f63" />
      <stop offset="50%" stop-color="#2a2048" />
      <stop offset="100%" stop-color="#19132d" />
    </linearGradient>

    <!-- Official Right 'A' Gradient -->
    <linearGradient id="rightAGradient" x1="220" y1="100" x2="400" y2="310" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#8a7fb8" />
      <stop offset="50%" stop-color="#695d98" />
      <stop offset="100%" stop-color="#4d4474" />
    </linearGradient>

    <!-- Drop Shadow Filter -->
    <filter id="logoShadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="4" dy="10" stdDeviation="10" flood-color="#000000" flood-opacity="0.9" />
    </filter>

    <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Solid Obsidian Background -->
  <rect width="1200" height="630" fill="url(#bgGrad)" />

  <!-- Ambient Light Orbs -->
  <circle cx="600" cy="240" r="480" fill="url(#cyanAmbient)" />
  <circle cx="850" cy="220" r="380" fill="url(#purpleAccent)" />
  <circle cx="350" cy="240" r="380" fill="url(#indigoAccent)" />

  <!-- Elegant Outer Precision Frame -->
  <rect x="24" y="24" width="1152" height="582" rx="28" fill="none" stroke="url(#borderGradient)" stroke-width="2" stroke-opacity="0.4" />

  <!-- Corner Tech Accents -->
  <path d="M 40 60 L 40 40 L 60 40" stroke="#06b6d4" stroke-width="3" fill="none" stroke-linecap="round" />
  <path d="M 1160 60 L 1160 40 L 1140 40" stroke="#a855f7" stroke-width="3" fill="none" stroke-linecap="round" />
  <path d="M 40 570 L 40 590 L 60 590" stroke="#06b6d4" stroke-width="3" fill="none" stroke-linecap="round" />
  <path d="M 1160 570 L 1160 590 L 1140 590" stroke="#a855f7" stroke-width="3" fill="none" stroke-linecap="round" />

  <!-- Top Global Category Pill -->
  <g transform="translate(600, 56)">
    <rect x="-170" y="0" width="340" height="34" rx="17" fill="#0c162d" stroke="#06b6d4" stroke-opacity="0.5" stroke-width="1.5" />
    <text x="0" y="22" fill="#22d3ee" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="12" font-weight="800" letter-spacing="3" text-anchor="middle">CREATIVE ANIMATION &amp; VFX STUDIO</text>
  </g>

  <!-- ========================================================================= -->
  <!-- CENTERED PROMINENT OFFICIAL AA ANIMATIONS EMBLEM                          -->
  <!-- ========================================================================= -->
  <g transform="translate(600, 240)">
    <!-- Ambient Pod Glow -->
    <ellipse cx="0" cy="10" rx="260" ry="120" fill="#06b6d4" fill-opacity="0.16" />

    <!-- Official AA Double-A Mark (Enlarged and perfectly centered) -->
    <g transform="scale(1.42) translate(-235, -205)">
      <!-- Right 'A' (behind) -->
      <g id="RightA">
        <path
          d="M 273 110 L 297 110 L 405 310 L 345 310 L 322 270 L 248 270 L 225 310 L 165 310 Z"
          fill="url(#rightAGradient)"
          stroke="#9b8ecf"
          stroke-width="3.5"
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

      <!-- Left 'A' (overlapping in front with depth drop shadow) -->
      <g id="LeftA" filter="url(#logoShadow)">
        <path
          d="M 183 110 L 207 110 L 305 310 L 245 310 L 222 270 L 148 270 L 125 310 L 65 310 Z"
          fill="url(#leftAGradient)"
          stroke="#5d4c8e"
          stroke-width="3.5"
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
  </g>

  <!-- ========================================================================= -->
  <!-- BRAND TYPOGRAPHY & CREDENTIALS                                            -->
  <!-- ========================================================================= -->
  <g transform="translate(600, 420)">
    <!-- Main Studio Name -->
    <text x="0" y="0" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="52" font-weight="900" letter-spacing="4" text-anchor="middle">AA ANIMATIONS</text>

    <!-- Studio Slogan -->
    <text x="0" y="38" fill="#22d3ee" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="18" font-weight="800" letter-spacing="7" text-anchor="middle">WE ANIMATE YOUR DREAMS</text>

    <!-- Services Line -->
    <text x="0" y="82" fill="#cbd5e1" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="17" font-weight="600" letter-spacing="1" text-anchor="middle">2D &amp; 3D Animation • CGI &amp; VFX • Motion Graphics • Video Production</text>

    <!-- Bottom URL Badge -->
    <g transform="translate(0, 114)">
      <rect x="-115" y="0" width="230" height="38" rx="12" fill="#0b1324" stroke="#06b6d4" stroke-opacity="0.6" stroke-width="1.5" />
      <circle cx="-85" cy="19" r="4.5" fill="#10b981" />
      <text x="12" y="24" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="15" font-weight="700" letter-spacing="1" text-anchor="middle">aaanimations.site</text>
    </g>
  </g>
</svg>
`;

async function run() {
  const publicDir = path.resolve(__dirname, '../public');
  const imagesDir = path.join(publicDir, 'Images');
  const imagesLowerDir = path.join(publicDir, 'images');

  if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });
  if (!fs.existsSync(imagesLowerDir)) fs.mkdirSync(imagesLowerDir, { recursive: true });

  const svgBuffer = Buffer.from(svgHeroCard);

  // Generate 1200x630 JPEG (Optimal compatibility across WhatsApp, Facebook, LinkedIn, Twitter)
  const jpgBuffer = await sharp(svgBuffer)
    .jpeg({ quality: 92 })
    .toBuffer();

  // Generate 1200x630 PNG
  const pngBuffer = await sharp(svgBuffer)
    .png({ quality: 95, compressionLevel: 9 })
    .toBuffer();

  // Write to all target paths for 100% reliability
  const targets = [
    path.join(imagesDir, 'aa-animations-social-preview.jpg'),
    path.join(imagesDir, 'aa-animations-social-preview.png'),
    path.join(imagesLowerDir, 'aa-animations-social-preview.jpg'),
    path.join(imagesLowerDir, 'aa-animations-social-preview.png'),
    path.join(publicDir, 'aa-animations-social-preview.jpg'),
    path.join(publicDir, 'og-image.jpg'),
    path.join(publicDir, 'og-image.png')
  ];

  for (const t of targets) {
    if (t.endsWith('.jpg')) {
      fs.writeFileSync(t, jpgBuffer);
    } else {
      fs.writeFileSync(t, pngBuffer);
    }
    console.log('Saved:', t);
  }

  // Also verify square logo
  const svgFavicon = fs.readFileSync(path.join(publicDir, 'favicon.svg'));
  const logoSquare = await sharp(svgFavicon)
    .resize(512, 512)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'og-logo.png'), logoSquare);
  fs.writeFileSync(path.join(imagesDir, 'aa-animations-logo.png'), logoSquare);
  fs.writeFileSync(path.join(imagesLowerDir, 'aa-animations-logo.png'), logoSquare);
  console.log('Saved square logos successfully.');
}

run().catch(console.error);
