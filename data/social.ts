// Social Media Links and Contact Information
export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  color: string;
  isActive: boolean;
  followers?: string;
  description?: string;
}

export interface ContactInfo {
  type: 'email' | 'phone' | 'address' | 'website';
  label: string;
  value: string;
  icon: string;
  primary: boolean;
  displayValue?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  phone?: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  specialties: string[];
}

export const socialLinks: SocialLink[] = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/nexuss-advisory',
    icon: 'linkedin',
    color: '#0077B5',
    isActive: true,
    followers: '1.2K',
    description: 'Professional network and business updates'
  },
  {
    id: 'twitter',
    name: 'Twitter',
    url: 'https://twitter.com/nexuss_advisory',
    icon: 'twitter',
    color: '#1DA1F2',
    isActive: true,
    followers: '850',
    description: 'Industry insights and company news'
  },
  {
    id: 'facebook',
    name: 'Facebook',
    url: 'https://www.facebook.com/nexussadvisory',
    icon: 'facebook',
    color: '#1877F2',
    isActive: true,
    followers: '600',
    description: 'Community engagement and updates'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/nexuss.advisory',
    icon: 'instagram',
    color: '#E4405F',
    isActive: true,
    followers: '500',
    description: 'Behind the scenes and company culture'
  },
  {
    id: 'youtube',
    name: 'YouTube',
    url: 'https://www.youtube.com/c/nexussadvisory',
    icon: 'youtube',
    color: '#FF0000',
    isActive: false,
    description: 'Educational content and webinars'
  }
];

export const contactInfo: ContactInfo[] = [
  {
    type: 'email',
    label: 'Email',
    value: 'info@nexussadvisory.com',
    icon: 'mail',
    primary: true,
    displayValue: 'info@nexussadvisory.com'
  },
  {
    type: 'phone',
    label: 'Phone',
    value: '+1-555-123-4567',
    icon: 'phone',
    primary: true,
    displayValue: '(555) 123-4567'
  },
  {
    type: 'address',
    label: 'Office',
    value: '123 Business District, Suite 456, New York, NY 10001',
    icon: 'mapPin',
    primary: true,
    displayValue: '123 Business District\nSuite 456\nNew York, NY 10001'
  },
  {
    type: 'website',
    label: 'Website',
    value: 'https://www.nexussadvisory.com',
    icon: 'globe',
    primary: true,
    displayValue: 'www.nexussadvisory.com'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 'john-doe',
    name: 'John Doe',
    role: 'Managing Partner & CEO',
    email: 'john.doe@nexussadvisory.com',
    phone: '+1-555-123-4567',
    bio: 'With over 15 years of experience in financial advisory and business consulting, John leads our strategic initiatives and client relationships.',
    image: '/team/john-doe.jpg',
    linkedin: 'https://www.linkedin.com/in/johndoe',
    twitter: 'https://twitter.com/johndoe',
    specialties: ['Strategic Planning', 'M&A Advisory', 'Financial Analysis', 'Business Development']
  },
  {
    id: 'jane-smith',
    name: 'Jane Smith',
    role: 'Senior Accounting Manager',
    email: 'jane.smith@nexussadvisory.com',
    bio: 'Jane brings 12 years of accounting expertise, specializing in complex financial reporting and tax compliance for growing businesses.',
    image: '/team/jane-smith.jpg',
    linkedin: 'https://www.linkedin.com/in/janesmith',
    specialties: ['Financial Reporting', 'Tax Compliance', 'QuickBooks', 'Payroll Management']
  },
  {
    id: 'mike-johnson',
    name: 'Mike Johnson',
    role: 'Investment Research Analyst',
    email: 'mike.johnson@nexussadvisory.com',
    bio: 'Mike specializes in equity research and portfolio analysis, helping clients make informed investment decisions in volatile markets.',
    image: '/team/mike-johnson.jpg',
    linkedin: 'https://www.linkedin.com/in/mikejohnson',
    specialties: ['Equity Research', 'Portfolio Analysis', 'Risk Management', 'ESG Investing']
  }
];

export const getSocialLinkByName = (name: string): SocialLink | undefined => {
  return socialLinks.find(link => link.name.toLowerCase() === name.toLowerCase());
};

export const getActiveSocialLinks = (): SocialLink[] => {
  return socialLinks.filter(link => link.isActive);
};

export const getPrimaryContactInfo = (): ContactInfo[] => {
  return contactInfo.filter(info => info.primary);
};

export const getTeamMemberById = (id: string): TeamMember | undefined => {
  return teamMembers.find(member => member.id === id);
};
