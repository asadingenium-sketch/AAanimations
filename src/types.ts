export type LanguageCode = 'EN' | 'ES' | 'FR' | 'DE' | 'AR' | 'JP';

export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'service-detail'
  | 'portfolio'
  | 'printing'
  | 'printing-services'
  | 'project-detail'
  | 'industries'
  | 'clients'
  | 'awards'
  | 'blog'
  | 'blog-detail'
  | 'careers'
  | 'contact'
  | 'privacy'
  | 'terms'
  | '404';

export type ServiceCategory =
  | '2d-animation'
  | '3d-animation'
  | 'motion-graphics'
  | 'vfx-cgi'
  | 'video-editing'
  | 'game-art'
  | 'graphic-design'
  | 'web-development'
  | 'digital-marketing';

export interface ServicePackage {
  id: string;
  name: string;
  price: string;
  deliveryTime: string;
  revisions: string;
  features: string[];
  popular?: boolean;
}

export interface ServiceDetail {
  id: ServiceCategory;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  bannerImage: string;
  subCategories: string[];
  benefits: { title: string; desc: string }[];
  process: { step: number; title: string; desc: string }[];
  packages: ServicePackage[];
  faqs: { question: string; answer: string }[];
  portfolioLink?: string;
  ctaText?: string;
}

export type PortfolioCategory =
  | 'All'
  | '3D Animation'
  | 'Product Animation'
  | '2D Animation'
  | 'Character Animation'
  | 'VFX'
  | 'Motion Graphics'
  | 'Explainer Videos'
  | 'Game Art'
  | 'Web Development';

export interface PortfolioProject {
  id: string;
  title: string;
  category: PortfolioCategory;
  thumbnail: string;
  shortDescription: string;
  videoUrl?: string;
  externalUrl?: string;
  ctaText?: string;
  client?: string;
  duration?: string;
  year?: string;
  galleryImages?: string[];
  challenge?: string;
  solution?: string;
  results?: string;
  softwareUsed?: string[];
  featured?: boolean;
  beforeImage?: string;
  afterImage?: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  icon: string;
  description: string;
  caseStudyTitle: string;
  caseStudyExcerpt: string;
  keyBenefit: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
  projectCategory: string;
  videoThumbnail?: string;
}

export interface AwardItem {
  id: string;
  badge: string;
  title: string;
  recognition: string;
  presentedTo: string;
  achievement: string;
  year?: string;
  organization?: string;
  category?: string;
  projectTitle?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  specialties: string[];
  socials: { linkedin?: string; twitter?: string; artstation?: string };
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  author: { name: string; avatar: string; role: string };
  date: string;
  readTime: string;
  thumbnail: string;
  excerpt: string;
  content: string;
  tags: string[];
  featured?: boolean;
}

export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote' | 'Internship';
  experience: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

export interface CareerApplication {
  id: string;
  applicantName: string;
  email: string;
  phone: string;
  positionId: string;
  positionTitle: string;
  portfolioUrl?: string;
  coverLetter: string;
  resumeFileName: string;
  submittedAt: string;
  status: 'New' | 'Reviewing' | 'Shortlisted' | 'Rejected';
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
  submittedAt: string;
  status: 'New' | 'In Progress' | 'Replied' | 'Archived';
}

export interface QuoteEstimate {
  service: ServiceCategory;
  animationStyle: string;
  durationSeconds: number;
  resolution: string;
  turnaroundDays: number;
  voiceoverAndSound: boolean;
  estimatedCostMin: number;
  estimatedCostMax: number;
}

export interface OfficeLocation {
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  email2?: string;
  coordinates: { lat: number; lng: number };
  timeZone: string;
  image: string;
  landmark?: string;
  mapUrl?: string;
}
