export interface PrintCategoryItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  icon: string;
  services: string[];
  gradient: string;
  badge: string;
}

export const PRINTING_CATEGORIES: PrintCategoryItem[] = [
  {
    id: 'digital-printing',
    number: '01',
    title: 'Digital Printing',
    tagline: 'High-Speed Commercial & Publication Printing',
    description: 'Flawless high-speed digital and offset print production engineered for crisp color reproduction, razor-sharp typography, and premium paper tactile finishes for modern businesses worldwide.',
    image: '/Images/Printing Section/Digital Printing.jpg',
    icon: 'Printer',
    services: [
      'Color Printing',
      'B/W Printing',
      'Books',
      'Brochures',
      'Business Cards',
      'Business Documents',
      'Company Profiles',
      'Catalogues'
    ],
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    badge: 'High Precision'
  },
  {
    id: 'corporate-office-branding',
    number: '02',
    title: 'Corporate & Office Branding',
    tagline: 'Executive Identity & Workplace Collaterals',
    description: 'Establish unified, authoritative brand presence across your entire organization with high-security employee ID badges, luxury desk plates, embossed stationery, and executive toolkits.',
    image: '/Images/Printing Section/Corporate & Office Branding.jpg',
    icon: 'Briefcase',
    services: [
      'Employee ID Cards',
      'Badges & Plates',
      'Business Stationery',
      'Business Documents',
      'Company Profiles',
      'Corporate Materials',
      'Toolkits'
    ],
    gradient: 'from-purple-500/20 via-indigo-500/10 to-transparent',
    badge: 'Executive Standard'
  },
  {
    id: 'customized-promotional-products',
    number: '03',
    title: 'Customized Promotional Products',
    tagline: 'High-Retention Branded Swag & Custom Keepsakes',
    description: 'Transform customer touchpoints into enduring brand loyalty with customized thermal magic mugs, personalized keychains, durable fridge magnets, and artisan wood/glass display frames.',
    image: '/Images/Printing Section/Customized Promotional Products.png',
    icon: 'Gift',
    services: [
      'Mugs',
      'Magic Mugs',
      'Keychains',
      'Flexible Magnets',
      'Fridge Magnets',
      'Wood Frames',
      'Glass Frames',
      'MDF Frames',
      'Custom Plates',
      'Custom Tiles'
    ],
    gradient: 'from-teal-500/20 via-emerald-500/10 to-transparent',
    badge: 'Popular Choice'
  },
  {
    id: 'large-format-printing',
    number: '04',
    title: 'Large Format Printing',
    tagline: 'High-Impact Outdoor Graphics & Fleet Signage',
    description: 'Command massive visual attention across outdoor billboards, exhibition venues, retail storefronts, and vehicle fleets with weatherproof UV-cured inks and precision vinyl plotter cutting.',
    image: '/Images/Printing Section/Large Format Printing.jpg',
    icon: 'Maximize2',
    services: [
      'Panaflex Printing',
      'Plotter Printing',
      'Car Stickers',
      'Large Format Graphics'
    ],
    gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
    badge: 'Weatherproof & UV-Safe'
  },
  {
    id: 'education-training-materials',
    number: '05',
    title: 'Education & Training Materials',
    tagline: 'Curriculum Guides, Course Manuals & Workshop Kits',
    description: 'Empower universities, corporate training academies, and workshops with color-indexed spiral workbooks, durable laminated manuals, and comprehensive physical learning resource kits.',
    image: '/Images/Printing Section/Education & Training Materials.jpg',
    icon: 'GraduationCap',
    services: [
      'Educational Materials',
      'Training Materials',
      'Workbooks',
      'Manuals',
      'Learning Resources',
      'Course Materials',
      'Printed Training Toolkits'
    ],
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    badge: 'Academic & Corporate'
  },
  {
    id: '3d-specialty-printing',
    number: '06',
    title: '3D & Specialty Printing',
    tagline: 'Additive Prototyping & Custom Substrate Printing',
    description: 'Bring digital 3D models into physical reality with 25-micron SLA resin and SLS nylon prototyping, retro instant polaroid formats, UV-cured ceramic tiles, and collector-grade custom prints.',
    image: '/Images/Printing Section/3D & Specialty Printing.jpg',
    icon: 'Box',
    services: [
      '3D Printing',
      'Polaroid Printing',
      'Plate Printing',
      'Tile Printing',
      'Custom Products',
      'Prototype Printing',
      'Specialty Printing'
    ],
    gradient: 'from-fuchsia-500/20 via-purple-500/10 to-transparent',
    badge: 'Next-Gen Tech'
  }
];

export const PRINTING_GLOBAL_STATS = [
  { label: 'Global Client Distribution', value: '45+ Countries' },
  { label: 'Print Precision Rating', value: '2400 DPI' },
  { label: 'Standard Turnaround', value: '24 - 48 Hours' },
  { label: 'Color Calibration Standard', value: 'G7 Master / CMYK' }
];
