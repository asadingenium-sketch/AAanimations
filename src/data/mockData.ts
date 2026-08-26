import {
  ServiceDetail,
  PortfolioProject,
  IndustryItem,
  Testimonial,
  AwardItem,
  TeamMember,
  BlogPost,
  JobPosition,
  OfficeLocation,
} from '../types';
import { getAssetUrl } from '../utils/assetHelper';

export const HERO_STATS = [
  { value: 12, suffix: '+', label: 'Years Experience' },
  { value: 850, suffix: '+', label: 'Projects Completed' },
  { value: 320, suffix: '+', label: 'Happy Global Clients' },
  { value: 45, suffix: '+', label: 'Countries Served' },
];

export const STUDIO_HERO_IMAGE = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1920&q=80';
export const HEADER_BACKGROUND_IMAGE = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1920&q=80';
export const SHOWREEL_THUMBNAIL = 'https://img.youtube.com/vi/KoDU0c0dYRo/hqdefault.jpg';
export const VFX_BEFORE_AFTER_IMAGE = getAssetUrl('Images/vfx_before_after_1786006622330.jpg');
export const KARACHI_MAZAR_E_QUAID_IMAGE = 'https://images.pexels.com/photos/14427300/pexels-photo-14427300.jpeg';
export const KARACHI_CITY_IMAGE = 'https://images.pexels.com/photos/14427300/pexels-photo-14427300.jpeg';
export const LAHORE_MINAR_E_PAKISTAN_IMAGE = 'https://pixabay.com/images/download/ismanoor-mosque-4432476_1920.jpg';
export const DUBAI_BURJ_KHALIFA_IMAGE = 'https://pixabay.com/images/download/elenajonesinbox-dubai-256585_1920.jpg';
export const GOOGLE_MAPS_BG_IMAGE = 'https://images.pexels.com/photos/14427300/pexels-photo-14427300.jpeg';

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: '2d-animation',
    title: '2D Animation',
    portfolioLink: 'https://www.youtube.com/playlist?list=PLM0j3Zshp17BUlu_6y7SBZQDyI4_Ro7XQ',
    ctaText: 'View Our Work →',
    shortDesc: 'Frame-by-frame traditional, vector, character animation and explainer videos that captivate audiences.',
    fullDesc: 'Our 2D animation studio brings stories to life with handcrafted fluid motion, expressive characters, and vibrant art direction tailored for broadcast, digital campaigns, and educational media.',
    icon: 'Film',
    bannerImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop',
    subCategories: ['Character Animation', 'Explainer Videos', 'Educational Videos', 'Whiteboard Animation', 'Storyboarding'],
    benefits: [
      { title: 'High Audience Engagement', desc: 'Captivate viewers with relatable, expressive characters and clear storytelling.' },
      { title: 'Brand Alignment', desc: 'Custom color palettes and visual styles strictly tuned to your identity.' },
      { title: 'Multi-platform Optimization', desc: 'Formatted for broadcast TV, web video, social reels, and app onboarding.' }
    ],
    process: [
      { step: 1, title: 'Concept & Scripting', desc: 'Developing the narrative arc and core messaging.' },
      { step: 2, title: 'Storyboarding & Animatic', desc: 'Visualizing camera angles, pacing, and audio timings.' },
      { step: 3, title: 'Character & Asset Design', desc: 'Crafting unique vector or hand-drawn visual assets.' },
      { step: 4, title: 'Keyframe Animation', desc: 'Animating character dynamics, secondary motion, and effects.' },
      { step: 5, title: 'Sound Design & Voiceover', desc: 'Mixing spatial audio, music score, and multi-language voice.' },
      { step: 6, title: 'Final Mastering & Export', desc: 'Delivering uncompressed 4K master files and web formats.' }
    ],
    packages: [
      { id: '2d-basic', name: 'Starter Explainer', price: '$2,499', deliveryTime: '2 Weeks', revisions: '2 Rounds', features: ['60 Seconds Duration', 'Standard Character Design', 'Professional Voiceover', 'Full HD 1080p Export', 'Background Music Track'] },
      { id: '2d-pro', name: 'Pro Broadcast', price: '$4,999', deliveryTime: '3 Weeks', revisions: 'Unlimited', features: ['90 Seconds Duration', 'Custom Character Rigging', '4K Master + Social Cuts', 'Custom Sound FX Design', 'Storyboard & Concept Art', 'Commercial Rights'], popular: true },
      { id: '2d-enterprise', name: 'Series / Enterprise', price: 'Custom Quote', deliveryTime: 'Flexible', revisions: 'Dedicated Lead', features: ['Multi-episode Production', 'Dedicated Animation Squad', 'Custom Original Music Score', 'Multi-Language Voiceovers', 'Source Files Included'] }
    ],
    faqs: [
      { question: 'How long does a 60-second 2D animation take?', answer: 'Typical turnaround for a fully custom 60-second 2D animation is 2 to 3 weeks from script approval.' },
      { question: 'Do you provide voiceovers and scriptwriting?', answer: 'Yes! We have in-house scriptwriters and access to over 200 professional voice actors in 30+ languages.' }
    ]
  },
  {
    id: '3d-animation',
    title: '3D Animation',
    portfolioLink: 'https://www.youtube.com/playlist?list=PLM0j3Zshp17DWQa3nU7G5yhunFxVP2kqq',
    ctaText: 'View Our Work →',
    shortDesc: 'Photorealistic character modeling, architectural walkthroughs, industrial and product visualization.',
    fullDesc: 'State-of-the-art 3D modeling, rigging, texturing, and photorealistic rendering using Unreal Engine 5, Maya, and Cinema 4D for cinematic TVCs, game trailers, and high-tech product launches.',
    icon: 'Box',
    bannerImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    subCategories: ['Product Animation', 'Industrial & Medical Animation', 'Architectural Walkthrough', 'Character Rigging', '3D VFX'],
    benefits: [
      { title: 'Hyper-Realistic Quality', desc: 'PBR materials, volumetric lighting, and ray-traced reflections.' },
      { title: 'Exploded Technical Views', desc: 'Deconstruct complex machinery, medical devices, and architectural designs.' },
      { title: 'Reusable 3D Assets', desc: 'Game-ready and render-ready models provided for interactive web/AR apps.' }
    ],
    process: [
      { step: 1, title: 'CAD / Blueprint Import', desc: 'Ingesting 3D files or creating high-poly mesh models.' },
      { step: 2, title: 'Shading & PBR Texturing', desc: 'Applying realistic surface materials, glass, and metal.' },
      { step: 3, title: 'Rigging & Physics', desc: 'Skeletal setups and cloth/hair fluid dynamics simulations.' },
      { step: 4, title: 'Cinematic Lighting & Cam', desc: 'Setting up filmic lighting rigs and camera choreography.' },
      { step: 5, title: 'GPU Ray-trace Render', desc: 'Rendering in high-speed GPU farms with Octane/Redshift.' },
      { step: 6, title: 'Compositing & Color Grade', desc: 'Finalizing passes in Nuke and DaVinci Resolve.' }
    ],
    packages: [
      { id: '3d-basic', name: 'Product Spotlight', price: '$3,999', deliveryTime: '2-3 Weeks', revisions: '2 Rounds', features: ['30 Seconds 3D Render', 'Photorealistic Texturing', 'Studio Lighting Rig', 'Full HD 1080p Render', 'Turntable & Exploded View'] },
      { id: '3d-pro', name: 'Cinematic Trailer', price: '$7,800', deliveryTime: '4 Weeks', revisions: '3 Rounds', features: ['60 Seconds Cinematic 3D', 'Unreal Engine 5 Realtime Render', 'Character Animation / Physics', '4K Ultra HD Export', 'Spatial Audio & Sound Design'], popular: true },
      { id: '3d-enterprise', name: 'Full Production', price: 'Custom Quote', deliveryTime: 'Project Based', revisions: 'Unlimited', features: ['Broadcasting & Feature Film standard', 'Custom Character Rigs', 'VR / AR / Game Ready Export', 'Dedicated VFX Supervisor'] }
    ],
    faqs: [
      { question: 'Can you work with our existing CAD 3D files?', answer: 'Yes! We import SolidWorks, STEP, OBJ, FBX, Rhino, and CAD files directly.' },
      { question: 'What render engines do you use?', answer: 'We render with Unreal Engine 5, OctaneRender, Redshift, and V-Ray for maximum speed and cinematic quality.' }
    ]
  },
  {
    id: 'motion-graphics',
    title: 'Motion Graphics',
    portfolioLink: 'https://www.youtube.com/playlist?list=PLM0j3Zshp17CjF_KnWO8UyW7_zuBHmBaI',
    ctaText: 'View Our Work →',
    shortDesc: 'Dynamic logo animations, broadcast graphics packages, corporate presentations, and kinetic infographics.',
    fullDesc: 'Modern visual art, kinetic typography, HUD overlays, and sleek broadcast branding that transforms complex data into captivating motion visual experiences.',
    icon: 'Sparkles',
    bannerImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    subCategories: ['Logo Animation', 'Corporate Presentation', 'Infographics & Data Vis', 'Broadcast Design', 'UI/UX Motion'],
    benefits: [
      { title: 'Sleek & Professional', desc: 'Elevate corporate presentations and broadcast commercials instantly.' },
      { title: 'Data Visualization', desc: 'Turn dry metrics and charts into animated storytelling elements.' },
      { title: 'Brand Continuity', desc: 'Create reusable motion templates for internal and external media teams.' }
    ],
    process: [
      { step: 1, title: 'Styleframes & Moodboard', desc: 'Defining typography, color transitions, and visual language.' },
      { step: 2, title: 'Vector Asset Prep', desc: 'Organizing layers in Illustrator/Figma for optimal motion.' },
      { step: 3, title: 'Kinetic Motion Design', desc: 'Easing keyframes and building procedural motion rigs.' },
      { step: 4, title: 'Audio Synchronization', desc: 'Matching animation hit-points to sound effects and beats.' },
      { step: 5, title: 'MOGRT Template Creation', desc: 'Building editable Premiere Pro graphics packages.' },
      { step: 6, title: 'Export & Delivery', desc: 'Providing WebM, MOV with alpha channel, and MP4 formats.' }
    ],
    packages: [
      { id: 'mg-basic', name: 'Brand Intro Pack', price: '$1,299', deliveryTime: '1 Week', revisions: '2 Rounds', features: ['Animated Logo Reveal', '3 Lower Thirds Templates', 'Sound FX Included', 'Alpha Channel Transparent MOV'] },
      { id: 'mg-pro', name: 'Broadcast & Event Package', price: '$3,499', deliveryTime: '2 Weeks', revisions: '3 Rounds', features: ['Full Event / Keynote Motion Pack', 'Kinetic Typography Video', 'Editable Premiere MOGRTs', '4K Resolution Exports', 'Commercial Broadcast License'], popular: true },
      { id: 'mg-enterprise', name: 'Full Network Package', price: 'Custom Quote', deliveryTime: 'Custom', revisions: 'Unlimited', features: ['Complete TV Channel / Stream Overlays', 'Dynamic Data Automation', 'Dedicated Motion Designer On-demand'] }
    ],
    faqs: [
      { question: 'Do you deliver transparent video files for video editing overlay?', answer: 'Yes, we provide Apple ProRes 4444 MOV files with alpha channels for seamless video layering.' }
    ]
  },
  {
    id: 'vfx-cgi',
    title: 'CGI & VFX',
    portfolioLink: 'https://www.youtube.com/playlist?list=PLM0j3Zshp17AYYxxqYCVmHQyH9QPgZAGO',
    ctaText: 'View Our Work →',
    shortDesc: 'Hollywood-grade visual effects, green screen compositing, CGI environments, and creature FX.',
    fullDesc: 'Seamless integration of computer-generated imagery with live-action footage. Our VFX artists deliver wire removal, rotoscoping, particle simulations, explosions, and photorealistic CGI environments.',
    icon: 'Wand2',
    bannerImage: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1200&auto=format&fit=crop',
    subCategories: ['Green Screen Compositing', 'CGI Environments', '3D Creature FX', 'Wire Removal & Cleanup', 'Matte Painting'],
    benefits: [
      { title: 'Invisible Compositing', desc: 'Flawless blend between physical camera footage and digital assets.' },
      { title: 'Budget Optimization', desc: 'Replace expensive physical location shoots with CGI virtual sets.' },
      { title: 'Unrestricted Creativity', desc: 'Bring impossible sci-fi, fantasy, and heroic action shots to life.' }
    ],
    process: [
      { step: 1, title: 'On-set VFX Supervision', desc: 'Capturing camera metadata, HDRIs, and tracking markers.' },
      { step: 2, title: 'Matchmoving & Camera Tracking', desc: 'Solving 3D camera motion in synthetic space.' },
      { step: 3, title: 'Roto & Keying', desc: 'Isolating live actors with sub-pixel matte extractions.' },
      { step: 4, title: 'FX Simulation', desc: 'Simulating fire, smoke, destruction, liquids, and cloth.' },
      { step: 5, title: 'Compositing in Nuke', desc: 'Color matching, grain alignment, lens distortion, and depth pass.' },
      { step: 6, title: 'Color Grading & Finishing', desc: 'Finalizing filmic look in DaVinci Resolve Studio.' }
    ],
    packages: [
      { id: 'vfx-basic', name: 'Commercial VFX Shot', price: '$2,999', deliveryTime: '10 Days', revisions: '2 Rounds', features: ['Up to 3 VFX Shots', 'Green Screen Keying & Cleanup', 'Basic CGI Integration', 'Color Match & Grain Sync'] },
      { id: 'vfx-pro', name: 'Feature / Commercial Sequence', price: '$6,500', deliveryTime: '3 Weeks', revisions: '3 Rounds', features: ['Up to 10 VFX Shots', 'Photorealistic CGI Set Extension', 'Particle & Fluid FX Simulation', '4K Film Master', 'On-Set HDRI Matching'], popular: true },
      { id: 'vfx-enterprise', name: 'Blockbuster VFX', price: 'Custom Quote', deliveryTime: 'Production Schedule', revisions: 'Unlimited', features: ['Full Sequence / Film VFX Pipeline', 'Dedicated VFX Supervisor', 'Deep Compositing & CG Creature FX'] }
    ],
    faqs: [
      { question: 'Do you offer on-set VFX supervision?', answer: 'Yes, our supervisors attend live shoots or provide remote camera tracking guidelines.' }
    ]
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    portfolioLink: 'https://www.youtube.com/playlist?list=PLM0j3Zshp17DHz_WhhTCNbbyqIzR9yNMx',
    ctaText: 'View Our Work →',
    shortDesc: 'Corporate videos, commercial ads, YouTube editing, high-engagement TikTok/Reels, and documentaries.',
    fullDesc: 'Expert video post-production including precision cutting, sound design, color grading, pacing, background score selection, and multi-format social exports.',
    icon: 'Video',
    bannerImage: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop',
    subCategories: ['Corporate Videos', 'Commercial Ads', 'YouTube Video Editing', 'Social Media Reels & Shorts', 'Documentaries'],
    benefits: [
      { title: 'High Retention Pacing', desc: 'Hook-driven editing designed to keep viewer watch times high.' },
      { title: 'Pro Color Grading', desc: 'Cinematic LUTs and DaVinci color correction.' },
      { title: 'Multi-Format Delivery', desc: '16:9 widescreen, 9:16 vertical reels, and 1:1 square video formats.' }
    ],
    process: [
      { step: 1, title: 'Footage Ingestion & Logging', desc: 'Organizing multi-cam takes and transcriptions.' },
      { step: 2, title: 'Assembly & Rough Cut', desc: 'Constructing narrative flow and selecting best takes.' },
      { step: 3, title: 'Fine Cut & Sound Polish', desc: 'Adding sound effects, room tone, and ducking audio.' },
      { step: 4, title: 'Graphics & Lower Thirds', desc: 'Inserting brand overlays, captions, and title cards.' },
      { step: 5, title: 'Cinematic Color Grade', desc: 'Matching shot exposures and applying film aesthetic.' },
      { step: 6, title: 'Render & Multi-Ratio Export', desc: 'Delivering web, TV, and mobile ready MP4/MOV files.' }
    ],
    packages: [
      { id: 've-basic', name: 'Social Pack (5 Reels)', price: '$999', deliveryTime: '5 Days', revisions: '2 Rounds', features: ['5 Vertical Reels/Shorts', 'Dynamic Captions & Transitions', 'Licensed Trending Music', '1080x1920 HD Export'] },
      { id: 've-pro', name: 'Brand Commercial Cut', price: '$2,800', deliveryTime: '2 Weeks', revisions: '3 Rounds', features: ['Up to 3 Minute Brand Video', 'Multi-cam Audio Sync', 'DaVinci Color Grade', 'Sound FX & Audio Restoration', '16:9 + 9:16 Cutdowns'], popular: true },
      { id: 've-enterprise', name: 'Monthly Production Subscription', price: 'Custom Quote', deliveryTime: 'Turnkey', revisions: 'Unlimited', features: ['Dedicated Video Editor', 'Unlimited Video Assets Processing', 'Same-Day Fast Turnarounds'] }
    ],
    faqs: [
      { question: 'Can you work with raw footage in Log format?', answer: 'Yes! We edit Arri RAW, RED R3D, Sony S-Log3, Canon C-Log, and Blackmagic RAW natively.' }
    ]
  },
  {
    id: 'game-art',
    title: 'Game Art & Assets',
    portfolioLink: 'https://www.youtube.com/playlist?list=PLM0j3Zshp17By5SoIYbqbBuq3o6HeTy8C',
    ctaText: 'View Our Work →',
    shortDesc: 'Concept art, 3D character modeling, game environments, weapon assets, and UI design for games.',
    fullDesc: 'High-quality 2D/3D game art pipeline supporting Unreal Engine, Unity, and Godot. From initial character concept art to low-poly optimized game meshes, LODs, and texture maps.',
    icon: 'Gamepad2',
    bannerImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
    subCategories: ['Character Concept Art', 'Environment Design', 'Prop & Weapon Assets', 'Game UI/UX', 'Mobile Game Sprites'],
    benefits: [
      { title: 'Engine Optimized', desc: 'Clean topology, UV maps, PBR materials, and optimized draw calls.' },
      { title: 'Distinctive Art Style', desc: 'Stylized, AAA realistic, pixel art, or dark fantasy aesthetic.' },
      { title: 'Ready to Import', desc: 'FBX/GLTF assets pre-configured for Unreal Engine & Unity.' }
    ],
    process: [
      { step: 1, title: 'Art Direction & Concept', desc: 'Sketches, color keys, and silhouette exploration.' },
      { step: 2, title: 'High-Poly Sculpting', desc: 'Sculpting fine micro-details in ZBrush.' },
      { step: 3, title: 'Retopology & Baking', desc: 'Creating game-ready low-poly mesh and normal maps.' },
      { step: 4, title: 'Substance Painter Texturing', desc: 'PBR hand-painted or procedural smart materials.' },
      { step: 5, title: 'Engine Testing', desc: 'Verifying lighting, collision bounds, and LOD levels.' },
      { step: 6, title: 'Package Delivery', desc: 'Clean FBX/GLTF files with textures in 2K/4K.' }
    ],
    packages: [
      { id: 'ga-basic', name: 'Asset Pack', price: '$1,800', deliveryTime: '10 Days', revisions: '2 Rounds', features: ['5 Environment Props', 'PBR 2K Textures', 'Unity & Unreal Import Ready', 'Low Poly LODs'] },
      { id: 'ga-pro', name: 'Hero Character Pack', price: '$4,500', deliveryTime: '3 Weeks', revisions: '3 Rounds', features: ['Full Character 3D Sculpt', 'Custom Skeletal Rig + 5 Animations', '4K PBR Textures', 'Concept Art Source Files'], popular: true },
      { id: 'ga-enterprise', name: 'Full Game Art Squad', price: 'Custom Quote', deliveryTime: 'Milestone', revisions: 'Unlimited', features: ['Complete Game World Assets', 'Dedicated Lead Artist & Sculptors', 'In-Engine Blueprint Integration'] }
    ],
    faqs: [
      { question: 'Do you provide game animations with skeletal rigs?', answer: 'Yes, we provide Mixamo/Unreal Engine compliant skeletons with custom idle, walk, run, and attack animations.' }
    ]
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design & Branding',
    portfolioLink: 'https://www.facebook.com/100063765502589/posts/1631347562334078/',
    ctaText: 'View Our Work →',
    shortDesc: 'Brand identity, social media kits, packaging design, marketing collateral, and print design.',
    fullDesc: 'Comprehensive visual identity design that establishes instant market authority. From logo design guidelines and color systems to packaging, billboards, and digital ad banners.',
    icon: 'Palette',
    bannerImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop',
    subCategories: ['Brand Identity & Logo', 'Social Media Design', 'Packaging & Label Design', 'Print & Merchandise', 'Marketing Collateral'],
    benefits: [
      { title: 'Unified Brand System', desc: 'Complete brand guidelines covering typography, grid systems, and icon sets.' },
      { title: 'Print-Ready Specs', desc: 'CMYK vectors, bleed lines, and spot UV pantone files.' },
      { title: 'Social Media Templates', desc: 'Figma templates ready for instant team customization.' }
    ],
    process: [
      { step: 1, title: 'Brand Discovery', desc: 'Analyzing competitive landscape and target persona.' },
      { step: 2, title: 'Visual Directions', desc: 'Exploring 3 distinct creative concepts.' },
      { step: 3, title: 'Logo & Typography Refinement', desc: 'Fine-tuning geometry, kerning, and color ratios.' },
      { step: 4, title: 'Brand Guidelines Book', desc: 'Compiling 30+ page usage and design rules.' },
      { step: 5, title: 'Collateral Mockups', desc: 'Designing business cards, packaging, and digital ads.' },
      { step: 6, title: 'Final Asset Suite', desc: 'AI, EPS, SVG, PDF, PNG, and Figma handoff.' }
    ],
    packages: [
      { id: 'gd-basic', name: 'Brand Starter Kit', price: '$1,100', deliveryTime: '1 Week', revisions: '2 Rounds', features: ['Primary Logo + Lockups', 'Color Palette & Typography System', 'Vector File Suite', 'Social Media Avatars'] },
      { id: 'gd-pro', name: 'Complete Brand Identity', price: '$2,900', deliveryTime: '2 Weeks', revisions: '3 Rounds', features: ['3 Logo Concepts', 'Full Brand Guidelines PDF', 'Social Media Post Templates (15)', 'Packaging or Print Design', '3D Product Mockups'], popular: true },
      { id: 'gd-enterprise', name: 'Global Brand Architecture', price: 'Custom Quote', deliveryTime: '4 Weeks', revisions: 'Unlimited', features: ['Complete Multi-brand System', 'Merchandise & Environmental Graphics', 'Dedicated Creative Director'] }
    ],
    faqs: [
      { question: 'Who owns the copyright of the designed logos and brand files?', answer: 'You own 100% full intellectual property and commercial copyright upon project final payment.' }
    ]
  },
  {
    id: 'web-development',
    title: 'Web Development',
    portfolioLink: 'https://api.whatsapp.com/send/?phone=923313169811&text&type=phone_number&app_absent=0',
    ctaText: 'Let’s Build Your Website →',
    shortDesc: 'Corporate websites, high-converting landing pages, interactive portfolios, and e-commerce portals.',
    fullDesc: 'Modern, ultra-fast web development using React, Next.js, and Tailwind CSS. Built with smooth WebGL/Three.js 3D elements, dark/light mode, CMS integration, and seamless responsiveness.',
    icon: 'Code',
    bannerImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    subCategories: ['Corporate Website', 'Portfolio Website', 'High-converting Landing Pages', 'E-commerce Platforms', 'Custom Web Apps'],
    benefits: [
      { title: 'Sub-second Load Times', desc: 'Optimized lighthouse scores (95+), asset compression, and CDN caching.' },
      { title: 'Interactive 3D / Motion', desc: 'Integrate interactive canvas models, micro-animations, and smooth scrolling.' },
      { title: 'Full CMS Control', desc: 'Easy drag-and-drop blog and portfolio updates for non-technical staff.' }
    ],
    process: [
      { step: 1, title: 'Wireframing & UX Flow', desc: 'Mapping user journeys and conversion paths.' },
      { step: 2, title: 'Figma UI Design', desc: 'Designing pixel-perfect responsive layouts.' },
      { step: 3, title: 'Frontend & WebGL Dev', desc: 'Building React/Vite/Next components with smooth animations.' },
      { step: 4, title: 'CMS & API Integration', desc: 'Connecting database, contact forms, and analytics.' },
      { step: 5, title: 'SEO & Performance Audit', desc: 'Optimizing open graph tags, schema markup, and speed.' },
      { step: 6, title: 'Deployment & Launch', desc: 'Configuring domain, SSL security, and server hosting.' }
    ],
    packages: [
      { id: 'wd-basic', name: 'Landing Page', price: '$1,900', deliveryTime: '1 Week', revisions: '2 Rounds', features: ['High Converting Single Page', 'Responsive Mobile Design', 'Contact Form Integration', 'Basic SEO Setup', 'Speed Optimized'] },
      { id: 'wd-pro', name: 'Agency Corporate Site', price: '$4,800', deliveryTime: '2-3 Weeks', revisions: '3 Rounds', features: ['Up to 10 Custom Pages', 'Interactive Portfolio & Filter', 'Blog & CMS Management', 'Dark/Light Theme Toggle', 'Google Analytics & Schema Markup'], popular: true },
      { id: 'wd-enterprise', name: 'Custom E-Commerce / Web App', price: 'Custom Quote', deliveryTime: '4-6 Weeks', revisions: 'Unlimited', features: ['Headless CMS / Database Architecture', 'Custom 3D Product Configurator', 'Payment Gateways & Portal', 'Dedicated Fullstack Developer'] }
    ],
    faqs: [
      { question: 'Will my website be mobile friendly?', answer: 'Absolutely! Every site we build is 100% mobile-responsive and fluidly tested across smartphones, tablets, and 4K displays.' }
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & Growth',
    portfolioLink: 'https://www.youtube.com/playlist?list=PLM0j3Zshp17Cyl9FPJhNzgJeJcmLTL5nm',
    ctaText: 'View Our Work →',
    shortDesc: 'SEO optimization, YouTube channel growth, performance ad campaigns, and video marketing strategy.',
    fullDesc: 'Data-driven marketing campaigns tailored for creative visual media. We scale views, generate B2B project leads, and run targeted ad campaigns across Google, YouTube, Instagram, and LinkedIn.',
    icon: 'TrendingUp',
    bannerImage: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1200&auto=format&fit=crop',
    subCategories: ['SEO Optimization', 'YouTube Marketing', 'Performance Paid Ads', 'Social Media Growth', 'Conversion Rate Optimization'],
    benefits: [
      { title: 'Qualified B2B Lead Gen', desc: 'Reach target decision makers, agency leads, and producers directly.' },
      { title: 'Search Engine Authority', desc: 'Rank #1 for competitive animation and VFX keywords.' },
      { title: 'ROI Reporting', desc: 'Transparent weekly dashboards tracking CTR, CAC, and conversions.' }
    ],
    process: [
      { step: 1, title: 'SEO & Market Audit', desc: 'Identifying high-intent search keywords and audience gaps.' },
      { step: 2, title: 'Campaign Strategy', desc: 'Structuring ad funnels and retargeting audiences.' },
      { step: 3, title: 'Creative Ad Production', desc: 'Producing video ads and high-converting graphics.' },
      { step: 4, title: 'Funnel Optimization', desc: 'Testing landing page headlines, CTAs, and forms.' },
      { step: 5, title: 'Scaling & Budgeting', desc: 'Maximizing return on ad spend (ROAS).' },
      { step: 6, title: 'Monthly Insights', desc: 'Delivering detailed analytics reports.' }
    ],
    packages: [
      { id: 'dm-basic', name: 'SEO & Growth Kickstart', price: '$1,500/mo', deliveryTime: 'Monthly', revisions: 'Ongoing', features: ['On-Page Technical SEO', '5 Keyword Rankings Tracking', 'Monthly Competitor Audit', 'Monthly Performance Report'] },
      { id: 'dm-pro', name: 'Full Paid Ads & Growth', price: '$3,200/mo', deliveryTime: 'Monthly', revisions: 'Ongoing', features: ['Google & YouTube Ad Campaign Management', 'Meta & LinkedIn B2B Ad Funnels', 'Weekly A/B Creative Testing', 'Dedicated Growth Manager'], popular: true },
      { id: 'dm-enterprise', name: 'Global Brand Scale', price: 'Custom Quote', deliveryTime: 'Monthly', revisions: 'Unlimited', features: ['Omnichannel Global Scale', 'Influencer & PR Outreach', 'Guaranteed Lead Volume KPI'] }
    ],
    faqs: [
      { question: 'What budget is recommended for video ad campaigns?', answer: 'We recommend an adequate media spend alongside our management fee for optimal statistical testing.' }
    ]
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: '3d-animation-project',
    title: '3D Animation',
    category: '3D Animation',
    thumbnail: 'https://img.youtube.com/vi/7p32S4gUqWo/hqdefault.jpg',
    videoUrl: 'https://youtu.be/7p32S4gUqWo',
    externalUrl: 'https://youtu.be/7p32S4gUqWo',
    ctaText: 'Discover More',
    shortDescription: 'High-quality 3D animation and CGI production created for engaging visual storytelling.'
  },
  {
    id: 'product-animation-project',
    title: 'Product Animation',
    category: 'Product Animation',
    thumbnail: 'https://img.youtube.com/vi/RkQH5TrAyDs/hqdefault.jpg',
    videoUrl: 'https://youtu.be/RkQH5TrAyDs',
    externalUrl: 'https://youtu.be/RkQH5TrAyDs',
    ctaText: 'Discover More',
    shortDescription: 'Professional product animation designed to showcase products through detailed 3D visuals and cinematic presentation.'
  },
  {
    id: '2d-animation-project',
    title: '2D Animation',
    category: '2D Animation',
    thumbnail: 'https://img.youtube.com/vi/jy43ezUI2h0/hqdefault.jpg',
    videoUrl: 'https://youtu.be/jy43ezUI2h0',
    externalUrl: 'https://youtu.be/jy43ezUI2h0',
    ctaText: 'Discover More',
    shortDescription: 'Creative 2D animation developed for engaging storytelling, educational content, promotional videos, and digital communication.'
  },
  {
    id: 'character-animation-project',
    title: 'Character Animation',
    category: 'Character Animation',
    thumbnail: 'https://img.youtube.com/vi/kCDNEAEPFEc/hqdefault.jpg',
    videoUrl: 'https://youtu.be/kCDNEAEPFEc',
    externalUrl: 'https://youtu.be/kCDNEAEPFEc',
    ctaText: 'Discover More',
    shortDescription: 'Expressive 3D & 2D character animation featuring fluid rigging, emotive facial performance, and cinematic character acting.'
  },
  {
    id: 'vfx-project',
    title: 'VFX',
    category: 'VFX',
    thumbnail: 'https://img.youtube.com/vi/kARrJd0BVyI/hqdefault.jpg',
    videoUrl: 'https://youtu.be/kARrJd0BVyI',
    externalUrl: 'https://youtu.be/kARrJd0BVyI',
    ctaText: 'Discover More',
    shortDescription: 'Visual effects and compositing work combining creative effects, cinematic elements, and professional post-production.'
  },
  {
    id: 'motion-graphics-project',
    title: 'Motion Graphics',
    category: 'Motion Graphics',
    thumbnail: 'https://img.youtube.com/vi/fefWNSK5fCs/hqdefault.jpg',
    videoUrl: 'https://youtu.be/fefWNSK5fCs',
    externalUrl: 'https://youtu.be/fefWNSK5fCs',
    ctaText: 'Discover More',
    shortDescription: 'Dynamic motion graphics combining typography, visual elements, animation, and engaging transitions.'
  },
  {
    id: 'explainer-videos-project',
    title: 'Explainer Videos',
    category: 'Explainer Videos',
    thumbnail: 'https://img.youtube.com/vi/_4NzGUHT6lg/hqdefault.jpg',
    videoUrl: 'https://youtu.be/_4NzGUHT6lg',
    externalUrl: 'https://youtu.be/_4NzGUHT6lg',
    ctaText: 'Discover More',
    shortDescription: 'Clear and engaging animated explainer videos designed to simplify complex ideas and communicate messages effectively.'
  },
  {
    id: 'game-art-project',
    title: 'Game Art',
    category: 'Game Art',
    thumbnail: 'https://img.youtube.com/vi/epdR47Yw10Q/hqdefault.jpg',
    videoUrl: 'https://youtu.be/epdR47Yw10Q',
    externalUrl: 'https://youtu.be/epdR47Yw10Q',
    ctaText: 'Discover More',
    shortDescription: 'Creative game art and digital assets developed for immersive gaming experiences and visual storytelling.'
  },
  {
    id: 'web-development-project',
    title: 'Web Development',
    category: 'Web Development',
    thumbnail: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80',
    externalUrl: 'https://api.whatsapp.com/send/?phone=923313169811&text&type=phone_number&app_absent=0',
    ctaText: 'Discover More',
    shortDescription: 'Professional responsive websites and digital experiences designed for businesses, brands, and creative projects.'
  }
];

export const INDUSTRIES_SERVED: IndustryItem[] = [
  {
    id: 'education',
    name: 'Education & EdTech',
    icon: 'GraduationCap',
    description: 'Transforming dense curricula into engaging 2D/3D animated modules and interactive digital learning tools.',
    caseStudyTitle: 'Interactive Anatomy 3D for Medical Universities',
    caseStudyExcerpt: 'Created 120 interactive 3D anatomical modules, increasing student exam pass rates by 24%.',
    keyBenefit: '85% increase in student content retention',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Pharma',
    icon: 'Activity',
    description: 'Biomedical 3D animations, MOA (Mechanism of Action) videos, and surgical device demonstrations.',
    caseStudyTitle: 'Targeted Oncology Mechanism of Action',
    caseStudyExcerpt: 'Helped biotech startup explain complex antibody-drug conjugates to investors and clinicians.',
    keyBenefit: 'Secured $25M Series B funding round',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'finance',
    name: 'Finance & Banking',
    icon: 'Landmark',
    description: 'High-converting motion graphic explainer videos, security compliance animations, and app onboarding.',
    caseStudyTitle: 'Aura Fintech Motion Rebrand',
    caseStudyExcerpt: 'Designed sleek glassmorphism animations for 4 million mobile app users across Europe.',
    keyBenefit: '38% boost in user account activations',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'construction',
    name: 'Construction & Architecture',
    icon: 'Building2',
    description: 'Photorealistic architectural 3D fly-throughs, BIM visualizations, and real estate pre-sale renders.',
    caseStudyTitle: 'Skyline Towers 3D Walkthrough',
    caseStudyExcerpt: 'Rendered 4K virtual tours of luxury penthouses before physical construction commenced.',
    keyBenefit: '100% pre-sale occupancy before breaking ground',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    icon: 'Home',
    description: 'Virtual property tours, interactive floorplans, drone cinematic video editing, and marketing ads.',
    caseStudyTitle: 'Coastal Villa Immersive Web & Video Tour',
    caseStudyExcerpt: 'Generated high-end video ads that attracted international buyers from 12 countries.',
    keyBenefit: '$45M total real estate volume sold via digital media',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Industrial',
    icon: 'Factory',
    description: 'Exploded technical 3D animations, safety instruction videos, and heavy machinery walkthroughs.',
    caseStudyTitle: 'Turbine Engine Technical Exploded View',
    caseStudyExcerpt: 'Illustrated internal gear systems for global aerospace manufacturing client.',
    keyBenefit: 'Reduced technician training time by 40%',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'gaming',
    name: 'Gaming & Esports',
    icon: 'Gamepad',
    description: 'Cinematic game trailers, 3D character sculpts, game UI/UX, and stream broadcast overlay kits.',
    caseStudyTitle: 'Cyberpunk Zero Hour AAA Game Trailer',
    caseStudyExcerpt: 'Delivered hyper-realistic Unreal Engine cinematic trailer for international launch.',
    keyBenefit: '4.2 Million organic trailer views',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'entertainment',
    name: 'Film & Entertainment',
    icon: 'Clapperboard',
    description: 'CGI VFX compositing, title sequence design, promo teasers, and broadcast commercial edits.',
    caseStudyTitle: 'Aetheria Sci-Fi VFX Sequence',
    caseStudyExcerpt: 'Executed 45 high-end VFX shots including alien environments and wire removals.',
    keyBenefit: 'Nominated for Best Visual Effects award',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'retail',
    name: 'Retail & E-Commerce',
    icon: 'ShoppingBag',
    description: '3D product commercials, social media reels, unboxing animations, and interactive web configurators.',
    caseStudyTitle: 'Velox Luxury Watch 3D Product Ad',
    caseStudyExcerpt: 'Highlighted macro watch gears and sapphire glass reflections for global luxury brand.',
    keyBenefit: '260% increase in social ad CTR',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'government',
    name: 'Government & Public Sector',
    icon: 'ShieldCheck',
    description: 'Public awareness animations, civic infrastructure explainer videos, and emergency response guides.',
    caseStudyTitle: 'National Civic Infrastructure Modernization',
    caseStudyExcerpt: 'Produced multi-lingual awareness animated videos broadcasted nationally.',
    keyBenefit: 'Reached over 15 million citizens',
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=600&auto=format&fit=crop'
  }
];

export const PROCESS_STEPS = [
  { step: '01', title: 'Discovery & Brief', desc: 'We dissect your brand goals, target audience, technical specs, and story arc.' },
  { step: '02', title: 'Planning & Script', desc: 'Crafting compelling narratives, voiceover scripts, visual styleframes, and animatics.' },
  { step: '03', title: 'Design & Modeling', desc: 'Building custom vector characters, 3D high-poly assets, or UI wireframes.' },
  { step: '04', title: 'Production & Motion', desc: 'Animating, lighting, keying VFX shots, or coding responsive web pages.' },
  { step: '05', title: 'Revision & Polish', desc: 'Collaborative feedback cycles, color grading, sound mixing, and QA testing.' },
  { step: '06', title: 'Delivery & Scale', desc: 'Exporting uncompressed master files, multi-ratio social cuts, and launching.' }
];

export const CLIENT_LOGOS = [
  { id: 1, name: 'Client 1', logo: 'Images/Client Logos/1.jpg' },
  { id: 2, name: 'Client 2', logo: 'Images/Client Logos/2.jpg' },
  { id: 3, name: 'Client 3', logo: 'Images/Client Logos/3.jpg' },
  { id: 4, name: 'Client 4', logo: 'Images/Client Logos/4.jpg' },
  { id: 5, name: 'Client 5', logo: 'Images/Client Logos/5.jpg' },
  { id: 6, name: 'Client 6', logo: 'Images/Client Logos/6.jpg' },
  { id: 7, name: 'Client 7', logo: 'Images/Client Logos/7.jpg' },
  { id: 8, name: 'Client 8', logo: 'Images/Client Logos/8.jpg' },
  { id: 9, name: 'Client 9', logo: 'Images/Client Logos/9.jpg' },
  { id: 10, name: 'Client 10', logo: 'Images/Client Logos/10.jpg' },
  { id: 11, name: 'Client 11', logo: 'Images/Client Logos/11.jpg' },
  { id: 12, name: 'Client 12', logo: 'Images/Client Logos/12.jpg' },
  { id: 13, name: 'Client 13', logo: 'Images/Client Logos/13.jpg' },
  { id: 14, name: 'Client 14', logo: 'Images/Client Logos/14.jpg' },
  { id: 15, name: 'Client 15', logo: 'Images/Client Logos/15.jpg' },
  { id: 16, name: 'Client 16', logo: 'Images/Client Logos/16.jpg' },
  { id: 17, name: 'Client 17', logo: 'Images/Client Logos/17.jpg' },
  { id: 18, name: 'Client 18', logo: 'Images/Client Logos/18.jpg' },
  { id: 19, name: 'Client 19', logo: 'Images/Client Logos/19.jpg' },
  { id: 20, name: 'Client 20', logo: 'Images/Client Logos/20.jpg' },
  { id: 21, name: 'Client 21', logo: 'Images/Client Logos/21.jpg' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-ayesha',
    name: 'Ayesha Khan',
    role: 'Training Coordinator',
    company: 'LearnPro',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    quote: 'Our project was handled with great care. The final animation looked amazing!',
    projectCategory: '2D & 3D Animation'
  },
  {
    id: 't-james',
    name: 'James Anderson',
    role: 'CEO',
    company: 'Visionary Media',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    quote: 'Creative ideas and flawless execution. Definitely recommended for animations!',
    projectCategory: 'Creative Production'
  },
  {
    id: 't-olivia',
    name: 'Olivia Martinez',
    role: 'Brand Manager',
    company: 'CreativeFlow',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    quote: 'They added life to our boring content. Now it looks modern and engaging!',
    projectCategory: 'Brand & Motion Graphics'
  },
  {
    id: 't-hassan',
    name: 'Hassan Malik',
    role: 'Manager',
    company: 'BizCore Solutions',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    quote: 'Reliable team with strong skills. We’ll surely collaborate again!',
    projectCategory: 'Corporate Visuals'
  },
  {
    id: 't1',
    name: 'Elena Rostova',
    role: 'Creative VP',
    company: 'Apex Interactive Studio',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    quote: 'AA Animations delivered our game trailer under an impossible deadline. Their 3D lighting and Unreal Engine wizardry blew our board away!',
    projectCategory: '3D Animation & Unreal Engine'
  },
  {
    id: 't2',
    name: 'Dr. Marcus Vance',
    role: 'Chief Medical Officer',
    company: 'BioHealth Tech',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    quote: 'The biomedical 3D animation AA Animations produced turned our complex cellular therapy into a crystal-clear visual narrative. Investors immediately got the message.',
    projectCategory: '3D Medical Animation'
  }
];

export const AWARDS: AwardItem[] = [
  {
    id: 'a1',
    badge: '🏆 POWER OF LORDS',
    title: 'Best Animation Company',
    recognition: 'Excellence in Animation & Creative Production',
    presentedTo: 'AAanimations',
    achievement: 'Recognized for outstanding creativity, animation quality, and innovative visual storytelling.'
  },
  {
    id: 'a2',
    badge: '🏆 NEXUS',
    title: 'Excellence in 3D & CGI Production',
    recognition: 'Outstanding Achievement in 3D Animation & CGI',
    presentedTo: 'AAanimations',
    achievement: 'Recognized for delivering high-quality 3D visuals, CGI environments, and immersive digital experiences.'
  },
  {
    id: 'a3',
    badge: '🦁 LIONIOR',
    title: 'Best Motion Visuals',
    recognition: 'Excellence in Motion Design & Visual Effects',
    presentedTo: 'AAanimations',
    achievement: 'Recognized for exceptional motion graphics, visual effects, animation craft, and cinematic storytelling.'
  },
  {
    id: 'a4',
    badge: '✨ Innovation in Visual Communication',
    title: 'Outstanding Visual Storytelling',
    recognition: 'Engaging Visual Experiences',
    presentedTo: 'AAanimations',
    achievement: 'Recognized for combining animation, CGI, motion graphics, VFX, and creative design to deliver engaging visual experiences for brands, businesses, and organizations worldwide.'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'm1',
    name: 'Asad Ahmed Khan',
    role: 'CEO & Creative Director',
    bio: 'Founder of AA Animations with 08+ years of experience, serving diverse industries and clients globally through creative production, animation, visual management, and digital media.',
    photo: 'Images/team/Asad.jpg',
    specialties: ['Creative Direction', 'Visual Strategy', 'Production Leadership'],
    socials: { linkedin: '#' }
  },
  {
    id: 'm2',
    name: 'Touseef',
    role: 'Managing Director',
    bio: 'Leading business operations, strategic planning, and organizational growth while supporting AA Animations’ creative and production objectives.',
    photo: 'Images/team/Touseef.jpg',
    specialties: ['Business Leadership', 'Operations Management', 'Strategic Planning'],
    socials: { linkedin: '#' }
  },
  {
    id: 'm3',
    name: 'Usman Khan',
    role: 'Director – Marketing & Sales',
    bio: 'Driving business growth through strategic marketing, client relationships, sales development, and global business opportunities for AA Animations.',
    photo: 'Images/team/Usman.jpg',
    specialties: ['Marketing Strategy', 'Sales Leadership', 'Business Development'],
    socials: { linkedin: '#' }
  },
  {
    id: 'm4',
    name: 'Rodaba',
    role: 'Marketing Specialist',
    bio: 'Driving brand visibility, digital marketing initiatives, audience engagement, and promotional strategies to strengthen AA Animations’ global presence.',
    photo: 'Images/team/Rodaba.png',
    specialties: ['Digital Marketing', 'Brand Strategy', 'Audience Engagement'],
    socials: { linkedin: '#' }
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Unreal Engine 5.4 in Animation Studio Workflows: The Realtime Revolution',
    slug: 'unreal-engine-5-animation-workflow',
    category: '3D & Realtime',
    author: {
      name: 'AA Animations Studio',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop',
      role: '3D Animation Dept'
    },
    date: 'August 2, 2026',
    readTime: '6 min read',
    thumbnail: SHOWREEL_THUMBNAIL,
    excerpt: 'How real-time rendering in Unreal Engine 5 is cutting offline render farm costs by 80% while enabling instant director feedback.',
    content: `
      <p>The traditional animation pipeline has always suffered from one massive bottleneck: offline rendering. Spending hours or days waiting for a single 4K frame to render in V-Ray or Arnold created slow feedback loops for directors and animators.</p>
      <h3>Enter Unreal Engine 5.4 & Nanite Metahuman Workflows</h3>
      <p>By bringing realtime GPU rendering, Nanite geometry streaming, and Lumen global illumination into our core pipeline, AA Animations has revolutionized production speed. Animators can now choreograph camera moves, preview volumetric fog, and adjust lighting setup live during virtual production sessions.</p>
      <ul>
        <li><strong>Instant Director Approvals:</strong> Review lighting and camera angles live in 60fps.</li>
        <li><strong>Reduced Overhead:</strong> Elimination of multi-thousand dollar cloud render farm bills.</li>
        <li><strong>Cross-Platform Utility:</strong> Assets rendered for a video trailer can instantly be loaded into interactive web portals or game builds.</li>
      </ul>
    `,
    tags: ['Unreal Engine', '3D Animation', 'Realtime', 'VFX Pipeline'],
    featured: true
  },
  {
    id: 'b2',
    title: '10 Secrets to High-Converting 2D Explainer Videos in 2026',
    slug: 'secrets-to-high-converting-2d-explainer-videos',
    category: '2D Animation',
    author: {
      name: 'AA Animations Studio',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop',
      role: '2D Animation Dept'
    },
    date: 'July 28, 2026',
    readTime: '4 min read',
    thumbnail: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop',
    excerpt: 'From the 5-second hook rule to dynamic kinetic typography, discover how top B2B brands achieve 90%+ video retention.',
    content: `
      <p>In an era of short attention spans, capturing your viewer in the first 5 seconds is crucial. A great 2D explainer video doesn't just look visually pleasing; it follows a psychological conversion blueprint.</p>
      <h3>Key Formula for Explainer Success:</h3>
      <ol>
        <li><strong>The Hook (0-5s):</strong> State the primary pain point directly with relatable character expressions.</li>
        <li><strong>The Agitation (5-15s):</strong> Visually demonstrate why traditional solutions and manual workflows fail.</li>
        <li><strong>The Eureka Moment (15-25s):</strong> Introduce your SaaS platform or product with fluid morphing vector animations.</li>
        <li><strong>The Solution Showcase (25-45s):</strong> Highlight top 3 core features with clean UI callouts and kinetic motion.</li>
        <li><strong>The Call-To-Action (45-60s):</strong> Direct, clear next steps with compelling visual incentives.</li>
      </ol>
      <p>By blending custom character illustration, sound design, and fluid vector easing in After Effects, brands experience up to a 64% uplift in landing page conversion rates.</p>
    `,
    tags: ['2D Animation', 'Explainer Videos', 'Video Marketing', 'Storytelling'],
    featured: false
  },
  {
    id: 'b3',
    title: 'The Future of CGI: Blending Generative AI with Traditional VFX Pipelines',
    slug: 'future-of-cgi-blending-ai-with-vfx',
    category: 'VFX & CGI',
    author: {
      name: 'AA Animations Studio',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop',
      role: 'VFX & Tech'
    },
    date: 'July 15, 2026',
    readTime: '8 min read',
    thumbnail: VFX_BEFORE_AFTER_IMAGE,
    excerpt: 'Why neural rotoscoping and AI-assisted matte painting accelerate creative freedom rather than replacing human artistry.',
    content: `
      <p>Artificial Intelligence in visual production is not about replacing artists—it is about removing monotonous, repetitive grunt work like frame-by-frame manual rotoscoping, clean plating, and wire cleanup, empowering artists to focus on cinematic storytelling and lighting aesthetics.</p>
      <h3>Where AI Excels in Modern VFX:</h3>
      <ul>
        <li><strong>Neural Roto & Segmentation:</strong> Producing clean alpha mattes for complex hair and motion blur 10x faster.</li>
        <li><strong>AI Deep Inpainting:</strong> Removing safety rigs, stunt wires, and tracking markers automatically in high-resolution plates.</li>
        <li><strong>Concept Matte Expansion:</strong> Generating multi-layer background plates for rapid set extension iterations.</li>
      </ul>
      <p>The magic happens when machine speed integrates into Nuke, Houdini, and DaVinci Resolve pipelines managed by senior compositors.</p>
    `,
    tags: ['CGI', 'VFX', 'AI Technology', 'Film Production'],
    featured: false
  },
  {
    id: 'b4',
    title: 'Photorealistic 3D Architectural Walkthroughs: Closing Luxury Real Estate Deals',
    slug: 'photorealistic-3d-architectural-walkthroughs-real-estate',
    category: 'Architectural 3D',
    author: {
      name: 'AA Animations Studio',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
      role: 'ArchViz Dept'
    },
    date: 'July 02, 2026',
    readTime: '5 min read',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    excerpt: 'How cinematic 3D lighting, physically based materials, and immersive drone flythroughs pre-sell premium properties before ground breaks.',
    content: `
      <p>Selling multimillion-dollar residential towers, master-planned communities, and commercial towers requires emotional connection long before construction begins. Traditional 2D blueprints simply cannot communicate scale, morning sunlight reflections, or material luxury.</p>
      <h3>The Pillars of High-Converting ArchViz Animations:</h3>
      <ul>
        <li><strong>Accurate Sun & Daylight Simulation:</strong> Geo-accurate sunlight studies showing exact natural light across seasons.</li>
        <li><strong>PBR Interior Materiality:</strong> True-to-life marble veining, brushed brass fixtures, and woven textile reflections.</li>
        <li><strong>Cinematic Drone Integration:</strong> Seamlessly matching 3D architectural models into real 4K aerial drone footage.</li>
        <li><strong>Atmospheric Life & Landscaping:</strong> Wind-swayed foliage, realistic water bodies, and photoreal 3D human figures.</li>
      </ul>
    `,
    tags: ['ArchViz', 'Architectural Visualization', '3D Walkthrough', 'Real Estate'],
    featured: false
  },
  {
    id: 'b5',
    title: '3D Product Animation & CMF Rendering: The Standard for Modern Tech Launches',
    slug: '3d-product-animation-cmf-rendering-tech-launches',
    category: 'Product 3D',
    author: {
      name: 'AA Animations Studio',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop',
      role: 'Product Rendering'
    },
    date: 'June 21, 2026',
    readTime: '6 min read',
    thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Explore exploded component views, micro-texture lighting, and Color-Material-Finish (CMF) rendering that drive flagship consumer launches.',
    content: `
      <p>When premier hardware and luxury consumer brands launch new hardware, physical studio photography has strict physical limits. 3D product animation unlocks macro internal zooms, dynamic liquid/dust resistance simulations, and exploded engineering breakdowns.</p>
      <h3>Key Techniques in Product Animation:</h3>
      <ul>
        <li><strong>CAD-to-Poly Optimization:</strong> Converting raw engineering STEP/IGES files into ultra-clean subdivision topology.</li>
        <li><strong>Photorealistic CMF Rigs:</strong> Accurate anodized aluminum, sapphire crystal, and matte polymer shader physics.</li>
        <li><strong>Exploded Mechanical Assemblies:</strong> Synchronized component animations revealing microchips, haptic motors, and battery arrays.</li>
      </ul>
      <p>3D assets built for launch videos can also be repurposed for interactive 3D WebGL viewers and AR mobile experiences.</p>
    `,
    tags: ['Product Animation', 'CMF Rendering', 'Industrial Design', '3D Commercial'],
    featured: false
  },
  {
    id: 'b6',
    title: 'Kinetic Typography & Broadcast Motion Design: Capturing Instant Attention',
    slug: 'kinetic-typography-broadcast-motion-design',
    category: 'Motion Graphics',
    author: {
      name: 'AA Animations Studio',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=150&auto=format&fit=crop',
      role: 'Motion Graphics'
    },
    date: 'June 10, 2026',
    readTime: '5 min read',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
    excerpt: 'How variable font interpolation, rhythm-matched easing, and broadcast MOGRT templates empower agile marketing teams.',
    content: `
      <p>Motion graphics bridge the gap between static graphic design and cinematic video. In fast-paced digital feeds and TV broadcasts, kinetic typography delivers complex corporate messages in memorable visual soundbites.</p>
      <h3>Best Practices for Motion Design in 2026:</h3>
      <ul>
        <li><strong>Type Choreography:</strong> Aligning typographic scale shifts with sonic punctuation and bass drops.</li>
        <li><strong>Modular MOGRT Workflows:</strong> Creating reusable Adobe Premiere templates for internal marketing teams to quickly swap text and colors.</li>
        <li><strong>Data Visualization:</strong> Transforming static financial reports and graphs into dynamic 3D charts and HUD graphics.</li>
      </ul>
    `,
    tags: ['Motion Graphics', 'Kinetic Typography', 'Broadcast', 'Branding'],
    featured: false
  },
  {
    id: 'b7',
    title: 'Next-Gen 3D Game Art: High-to-Low Poly Baking in Unreal Engine 5 & Unity',
    slug: 'next-gen-3d-game-art-poly-baking-workflows',
    category: 'Game Art',
    author: {
      name: 'AA Animations Studio',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop',
      role: 'Game Assets Dept'
    },
    date: 'May 28, 2026',
    readTime: '7 min read',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Streamlining ZBrush sculpts, Substance Painter PBR textures, and LOD systems for optimal 60fps real-time game performance.',
    content: `
      <p>Creating AAA game art requires balancing visual fidelity with strict draw-call budgets. While modern engines handle millions of triangles, intelligent topology, UV packing, and PBR texture baking remain essential for high-framerate gameplay.</p>
      <h3>The AAA Asset Pipeline at AA Animations:</h3>
      <ol>
        <li><strong>High-Poly Sculpting:</strong> Crafting organic wrinkles, micro-crevices, and hard-surface bevels in ZBrush.</li>
        <li><strong>Retopology & UV Packing:</strong> Creating clean edge loops optimized for deformation with 85%+ UV island density.</li>
        <li><strong>Baking in Marmoset Toolbag:</strong> Skew-mesh projection for flawless normal, curvature, and ambient occlusion maps.</li>
        <li><strong>PBR Texturing in Substance 3D:</strong> Multi-layered weathering, edge wear, and roughness variation.</li>
      </ol>
    `,
    tags: ['Game Art', '3D Modeling', 'Game Development', 'Substance 3D'],
    featured: false
  },
  {
    id: 'b8',
    title: 'Medical & Biotech 3D Animation: Visualizing Complex Mechanism of Action (MoA)',
    slug: 'medical-biotech-3d-animation-moa-visualization',
    category: 'Medical 3D',
    author: {
      name: 'AA Animations Studio',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=150&auto=format&fit=crop',
      role: 'Scientific Animation'
    },
    date: 'May 14, 2026',
    readTime: '6 min read',
    thumbnail: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop',
    excerpt: 'How pharmaceutical and medtech pioneers use cinematic 3D molecular biology to educate physicians and secure FDA approvals.',
    content: `
      <p>Explaining how a novel drug binds to cellular receptors or how a laparoscopic surgical device functions requires absolute scientific precision paired with cinematic visual clarity. 3D medical animation brings the invisible microscopic world into clear focus.</p>
      <h3>Key Applications:</h3>
      <ul>
        <li><strong>Mechanism of Action (MoA):</strong> Visualizing intracellular signaling cascades, antibody binding, and oncology therapies.</li>
        <li><strong>Medical Device Demonstrations:</strong> Showcasing orthopedic implants, catheters, and robotic surgical systems inside anatomically accurate body tissue.</li>
        <li><strong>Investor & Patient Education:</strong> Simplifying complex bio-technical concepts into compelling visual stories.</li>
      </ul>
    `,
    tags: ['Medical Animation', 'Biotech', 'Scientific Visualization', 'MoA'],
    featured: false
  },
  {
    id: 'b9',
    title: 'High-Impact 3D CGI Commercials: Designing Viral Social Ads & 3D Billboards',
    slug: 'high-impact-3d-cgi-commercials-social-ads-billboards',
    category: 'Commercial Ads',
    author: {
      name: 'AA Animations Studio',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop',
      role: 'Commercial Ads Dept'
    },
    date: 'April 30, 2026',
    readTime: '5 min read',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop',
    excerpt: 'The creative mechanics behind illusionary anamorphic DOOH displays and viral CGI guerrilla marketing campaigns.',
    content: `
      <p>From Times Square curved LED screens to viral hyper-realistic CGI videos taking over Instagram and TikTok, optical illusion advertising creates massive earned media value and social buzz.</p>
      <h3>Anamorphic 3D Billboard Engineering:</h3>
      <p>Creating characters or products that appear to burst out of corner screens requires precise perspective point calculation matching the real-world viewer's line of sight. By rendering with specialized camera matrices and shadow catchers, the 3D illusion feels tangible and astonishing.</p>
    `,
    tags: ['CGI Commercials', 'Anamorphic 3D', 'Digital Advertising', 'Social Video'],
    featured: false
  },
  {
    id: 'b10',
    title: 'Dynamic Brand Identity & Motion Systems: Why Static Logos Are No Longer Enough',
    slug: 'dynamic-brand-identity-motion-systems-kinetic-logos',
    category: 'Brand Identity',
    author: {
      name: 'AA Animations Studio',
      avatar: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=150&auto=format&fit=crop',
      role: 'Brand Design Dept'
    },
    date: 'April 18, 2026',
    readTime: '4 min read',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Transforming brand books from static PDFs into living motion design guidelines tailored for apps, websites, and video screens.',
    content: `
      <p>Every brand today lives primarily on digital screens—from mobile app splash screens and smart watch notifications to billboard animations and YouTube intros. A brand without defined motion behavior lacks personality.</p>
      <h3>What Makes a Modern Motion Brand System:</h3>
      <ul>
        <li><strong>Easing Physics:</strong> Defining whether a brand feels snappy, playful, or slow and luxurious.</li>
        <li><strong>Icon Behavior:</strong> Responsive micro-interactions for UI components.</li>
        <li><strong>Audio Logo (Sonic Branding):</strong> Pairing kinetic logo resolves with unique sound signatures.</li>
      </ul>
    `,
    tags: ['Brand Identity', 'Kinetic Logo', 'Design Systems', 'Motion Design'],
    featured: false
  },
  {
    id: 'b11',
    title: 'Virtual Production with LED Volumes: How Studios Create Hollywood Cinematic Worlds',
    slug: 'virtual-production-led-volumes-hollywood-cinematic-worlds',
    category: 'Virtual Production',
    author: {
      name: 'AA Animations Studio',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop',
      role: 'Virtual Production'
    },
    date: 'April 05, 2026',
    readTime: '7 min read',
    thumbnail: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Combining in-camera VFX (ICVFX) with real-time camera tracking to eliminate green screen spill and post-production delays.',
    content: `
      <p>Virtual Production has fundamentally changed filmmaking. Instead of placing actors in green-screen stages and imagining the final CGI environment, LED volumes project photorealistic real-time Unreal Engine environments behind the camera in real time.</p>
      <h3>Major Advantages:</h3>
      <ul>
        <li><strong>Natural In-Camera Reflections:</strong> Shiny props, costumes, and car surfaces accurately reflect the digital world without green spill.</li>
        <li><strong>Golden Hour Any Time:</strong> Lock the digital sun at sunset for 12 hours of continuous shooting.</li>
        <li><strong>Real Actors, Real Reactions:</strong> Cast members perform authentically inside immersive environments.</li>
      </ul>
    `,
    tags: ['Virtual Production', 'LED Volume', 'ICVFX', 'Unreal Engine'],
    featured: false
  },
  {
    id: 'b12',
    title: 'Advanced Character Rigging & Facial Mocap: Bringing Digital Humans to Life',
    slug: 'advanced-character-rigging-facial-mocap-digital-humans',
    category: 'Character 3D',
    author: {
      name: 'AA Animations Studio',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
      role: 'Character Animation'
    },
    date: 'March 22, 2026',
    readTime: '6 min read',
    thumbnail: 'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop',
    excerpt: 'FACS blendshapes, muscle deformers, and live iPhone ARKit/Metahuman facial tracking for nuanced emotional performances.',
    content: `
      <p>Believable character animation lives in the subtle micro-expressions: the twitch of an eyelid, skin sliding over cartilage, and natural breathing asymmetry. Overcoming the uncanny valley requires advanced rigging and motion capture cleanup.</p>
      <h3>Rigging Highlights:</h3>
      <ul>
        <li><strong>FACS-Based Facial Rigging:</strong> 60+ anatomical action units allowing extreme squash and stretch with natural wrinkles.</li>
        <li><strong>Cloth & Hair Physics Simulation:</strong> Real-time Chaos physics and offline Houdini Vellum solvers.</li>
        <li><strong>Live Motion Capture Retargeting:</strong> Seamless transfer of actor mocap takes onto stylized or photorealistic characters.</li>
      </ul>
    `,
    tags: ['Character Rigging', 'Facial Mocap', 'Digital Humans', '3D Animation'],
    featured: false
  },
  {
    id: 'b13',
    title: 'The Secret Sauce of Award-Winning Animation: Sound Design & Color Grading',
    slug: 'sound-design-color-grading-award-winning-animation',
    category: 'Post-Production',
    author: {
      name: 'AA Animations Studio',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=150&auto=format&fit=crop',
      role: 'Audio & Post'
    },
    date: 'March 10, 2026',
    readTime: '5 min read',
    thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Why 50% of the visual experience is actually audio fidelity, foley craftsmanship, and filmic DaVinci Resolve color timing.',
    content: `
      <p>Even the most breathtaking 3D render will fall flat without layered audio design and meticulous color grading. Sound provides weight, speed, and emotional resonance, while color science guides the audience's eye through the narrative.</p>
      <h3>Our Finishing Pipeline:</h3>
      <ul>
        <li><strong>Custom Foley & Sound FX:</strong> Recording bespoke impacts, swooshes, and mechanical clicks tailored to each visual keyframe.</li>
        <li><strong>ACES Color Management:</strong> Preserving full 32-bit dynamic range from CGI render passes to final Rec.709 and HDR master deliveries.</li>
        <li><strong>Cinematic Lens Emulation:</strong> Subtle anamorphic flare, halation, and organic film grain for warmth and texture.</li>
      </ul>
    `,
    tags: ['Sound Design', 'Color Grading', 'DaVinci Resolve', 'Post-Production'],
    featured: false
  }
];

export const JOB_POSITIONS: JobPosition[] = [
  {
    id: 'job-1',
    title: 'Senior 3D Animator (Unreal / Maya)',
    department: '3D Production',
    location: 'Remote / On-site',
    type: 'Full-time',
    experience: '5+ Years',
    description: 'We are seeking a master 3D Animator to lead character rigging and cinematic sequence animation for high-profile broadcast and game trailer campaigns.',
    requirements: [
      'Expert proficiency in Maya, Unreal Engine 5, and Blender.',
      'Strong understanding of body mechanics, facial animation, and weight distribution.',
      'Experience with Metahuman control rigs and motion capture cleanup.',
      'A jaw-dropping portfolio reel showing character animation.'
    ],
    responsibilities: [
      'Choreograph cinematic character and camera motion.',
      'Collaborate with the VFX Supervisor on lighting and composition passes.',
      'Mentor junior animators and maintain studio quality benchmarks.'
    ]
  },
  {
    id: 'job-2',
    title: 'VFX Compositor (Nuke)',
    department: 'Post Production',
    location: 'Hybrid',
    type: 'Full-time',
    experience: '3+ Years',
    description: 'Join our VFX team working on film sequences, green screen commercials, and high-end CGI compositing.',
    requirements: [
      'Proficiency in Foundry Nuke Studio, Mocha Pro, and After Effects.',
      'Expertise in deep compositing, multi-pass EXR assembly, and green screen keying.',
      'Strong eye for color matching, camera grain, lens distortion, and atmospheric haze.'
    ],
    responsibilities: [
      'Assemble multi-pass CG renders with live-action plates.',
      'Perform high-precision cleanups, tracking, and rotoscoping.',
      'Deliver final color-graded master shots.'
    ]
  },
  {
    id: 'job-3',
    title: 'Motion Graphics Designer (2D/3D)',
    department: 'Creative Design',
    location: 'Remote',
    type: 'Contract',
    experience: '2+ Years',
    description: 'Design dynamic broadcast graphics, kinetic typography, and social media brand reels for global corporate clients.',
    requirements: [
      'Mastery of After Effects, Cinema 4D (Redshift/Octane), and Illustrator.',
      'Strong typography and layout composition skills.',
      'Experience building editable MOGRT templates for Premiere Pro.'
    ],
    responsibilities: [
      'Develop styleframes and animatics based on client briefs.',
      'Animate 2D/3D brand elements, logos, and HUD interfaces.'
    ]
  },
  {
    id: 'job-4',
    title: '3D / VFX Production Internship',
    department: 'Animation Studio',
    location: 'On-site / Studio',
    type: 'Internship',
    experience: 'Students / Graduates',
    description: 'A paid 6-month hands-on mentorship program working directly alongside senior animators and directors.',
    requirements: [
      'Enrolled or recent graduate in Animation, Fine Arts, or Computer Graphics.',
      'Eagerness to learn Unreal Engine, ZBrush, and Nuke.',
      'Basic portfolio showcasing 3D models or motion design tests.'
    ],
    responsibilities: [
      'Assist with asset organization, texture baking, and lighting setups.',
      'Participate in daily creative reviews and client feedback sessions.'
    ]
  }
];

export const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    city: 'Karachi (Office 01)',
    country: 'Pakistan',
    address: '15-A/3, Sector 15-A/3, Buffer Zone, Karachi, Pakistan',
    phone: '+92 331 3169811 / +92 334 1857208',
    email: 'aaanimationsofficial@outlook.com',
    email2: 'aaanimationsofficial@gmail.com',
    coordinates: { lat: 24.9628, lng: 67.0654 },
    timeZone: 'PKT (UTC+5)',
    image: '',
    landmark: 'Mazar-e-Quaid',
    mapUrl: 'https://maps.google.com/?q=15-A/3,+Sector+15-A/3,+Buffer+Zone,+Karachi,+Pakistan'
  },
  {
    city: 'Karachi (Office 02)',
    country: 'Pakistan',
    address: 'FB Area, Block 4, Gulberg Town, Karachi, Pakistan',
    phone: '+92 331 3169811 / +92 334 1857208',
    email: 'aaanimationsofficial@outlook.com',
    email2: 'aaanimationsofficial@gmail.com',
    coordinates: { lat: 24.9287, lng: 67.0660 },
    timeZone: 'PKT (UTC+5)',
    image: '',
    landmark: 'Karachi Skyline',
    mapUrl: 'https://maps.google.com/?q=FB+Area,+Block+4,+Gulberg+Town,+Karachi,+Pakistan'
  },
  {
    city: 'Lahore',
    country: 'Pakistan',
    address: 'Mumtaz Bakhtawar Area, Badami Bagh, Lahore, Pakistan',
    phone: '+92 331 3169811 / +92 334 1857208',
    email: 'aaanimationsofficial@outlook.com',
    email2: 'aaanimationsofficial@gmail.com',
    coordinates: { lat: 31.5826, lng: 74.3283 },
    timeZone: 'PKT (UTC+5)',
    image: '',
    landmark: 'Minar-e-Pakistan',
    mapUrl: 'https://maps.google.com/?q=Mumtaz+Bakhtawar+Area,+Badami+Bagh,+Lahore,+Pakistan'
  },
  {
    city: 'Dubai',
    country: 'United Arab Emirates',
    address: 'BurJuman Business Tower, Khalid Bin Al Waleed Road, Bur Dubai, Dubai, United Arab Emirates',
    phone: '+971 56 620 9384',
    email: 'aaanimationsofficial@outlook.com',
    email2: 'aaanimationsofficial@gmail.com',
    coordinates: { lat: 25.2532, lng: 55.3032 },
    timeZone: 'GST (UTC+4)',
    image: '',
    landmark: 'Burj Khalifa',
    mapUrl: 'https://maps.google.com/?q=BurJuman+Business+Tower,+Bur+Dubai,+Dubai,+United+Arab+Emirates'
  }
];

export const FAQS = [
  {
    question: 'What is the typical production timeline for a project?',
    answer: 'Timelines vary based on complexity. Simple motion logos take 3-5 days; 60-second 2D explainers take 2-3 weeks; while 3D photorealistic trailers or complex VFX sequences take 4-6 weeks. We also offer expedited rush delivery options.'
  },
  {
    question: 'How do you handle project revisions and client feedback?',
    answer: 'We provide an interactive Frame.io video feedback link where you can leave timecoded comments directly on video frames. Most packages include 2 to 3 comprehensive revision rounds.'
  },
  {
    question: 'Who owns the intellectual property and master assets upon project completion?',
    answer: 'You own 100% full commercial copyright and IP rights upon final payment clearance. We can also provide project source files (Maya, After Effects, C4D, Blender) as an optional handoff package.'
  },
  {
    question: 'Can you work within strict NDA privacy agreements?',
    answer: 'Yes! Over 60% of our enterprise game and medical projects operate under strict Non-Disclosure Agreements (NDAs). We respect confidentiality completely.'
  },
  {
    question: 'What payment methods and milestones do you accept?',
    answer: 'We accept wire transfer, credit card, ACH, and crypto payments. Production typically operates on a 50% deposit upon kickoff and 50% upon final master approval.'
  }
];
