// Company and brand information
export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  foundedYear: number;
  location: string;
  employees: string;
  mission: string;
  vision: string;
  values: string[];
  certifications: string[];
  awards: string[];
}

export interface BrandColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  muted: string;
  success: string;
  warning: string;
  error: string;
}

export interface MetaData {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  image: string;
  url: string;
}

export const companyInfo: CompanyInfo = {
  name: 'Nexuss Advisory',
  tagline: 'Your Trusted Financial Partner',
  description: 'Nexuss Advisory is a leading financial services firm specializing in accounting, bookkeeping, financial planning, investment research, and business advisory services. We help businesses of all sizes achieve their financial goals through expert guidance and innovative solutions.',
  foundedYear: 2018,
  location: 'New York, NY',
  employees: '25-50',
  mission: 'To provide exceptional financial services that empower businesses to achieve sustainable growth and financial success.',
  vision: 'To be the most trusted financial advisory firm, known for our expertise, integrity, and commitment to client success.',
  values: [
    'Integrity and Transparency',
    'Client-Centric Approach',
    'Excellence in Service',
    'Innovation and Adaptability',
    'Professional Growth',
    'Community Impact'
  ],
  certifications: [
    'Certified Public Accountant (CPA)',
    'Chartered Financial Analyst (CFA)',
    'QuickBooks ProAdvisor',
    'Xero Certified Advisor',
    'AICPA Member'
  ],
  awards: [
    'Best Financial Advisory Firm 2023 - NY Business Journal',
    'Top 50 Accounting Firms 2022 - Accounting Today',
    'Excellence in Client Service Award 2021'
  ]
};

export const brandColors: BrandColors = {
  primary: '#4DC6D7',      // Main brand color (cyan)
  secondary: '#2D5AA0',    // Secondary blue
  accent: '#FF6B35',       // Orange accent
  background: '#FFFFFF',   // White background
  text: '#1F2937',        // Dark gray text
  muted: '#6B7280',       // Muted gray
  success: '#10B981',     // Green
  warning: '#F59E0B',     // Amber
  error: '#EF4444'        // Red
};

export const defaultMetaData: MetaData = {
  title: 'Nexuss Advisory - Your Trusted Financial Partner',
  description: 'Professional accounting, financial services, investment research, and business advisory solutions. Expert guidance for sustainable business growth.',
  keywords: [
    'accounting services',
    'bookkeeping',
    'financial planning',
    'investment research',
    'business advisory',
    'quickbooks setup',
    'tax preparation',
    'financial consulting',
    'CPA services',
    'small business accounting'
  ],
  author: 'Nexuss Advisory',
  image: '/og-image.jpg',
  url: 'https://www.nexussadvisory.com'
};

export const industryExpertise = [
  {
    id: 'professional-services',
    name: 'Professional Services',
    description: 'Law firms, consulting, architecture, engineering',
    icon: '🏢',
    clientCount: '50+'
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Medical practices, dental offices, healthcare facilities',
    icon: '🏥',
    clientCount: '30+'
  },
  {
    id: 'technology',
    name: 'Technology',
    description: 'SaaS companies, startups, tech consulting',
    icon: '💻',
    clientCount: '40+'
  },
  {
    id: 'retail',
    name: 'Retail & E-commerce',
    description: 'Online stores, retail chains, merchandise',
    icon: '🛍️',
    clientCount: '35+'
  },
  {
    id: 'construction',
    name: 'Construction',
    description: 'Contractors, builders, construction companies',
    icon: '🏗️',
    clientCount: '25+'
  },
  {
    id: 'nonprofit',
    name: 'Non-profit',
    description: 'Charitable organizations, foundations, NGOs',
    icon: '🤝',
    clientCount: '20+'
  }
];

export const companyStats = [
  {
    id: 'clients',
    label: 'Happy Clients',
    value: '200+',
    icon: '👥',
    description: 'Businesses we\'ve helped grow'
  },
  {
    id: 'experience',
    label: 'Years Experience',
    value: '15+',
    icon: '📅',
    description: 'Combined team experience'
  },
  {
    id: 'savings',
    label: 'Client Savings',
    value: '$2M+',
    icon: '💰',
    description: 'Total savings generated for clients'
  },
  {
    id: 'satisfaction',
    label: 'Satisfaction Rate',
    value: '98%',
    icon: '⭐',
    description: 'Client satisfaction score'
  }
];

export const officeHours = {
  monday: '9:00 AM - 6:00 PM',
  tuesday: '9:00 AM - 6:00 PM',
  wednesday: '9:00 AM - 6:00 PM',
  thursday: '9:00 AM - 6:00 PM',
  friday: '9:00 AM - 5:00 PM',
  saturday: 'By Appointment',
  sunday: 'Closed'
};

export const emergencyContact = {
  available: true,
  phone: '+92 329 6395813',
  email: 'emergency@nexussadvisory.com',
  hours: '24/7 for existing clients'
};
