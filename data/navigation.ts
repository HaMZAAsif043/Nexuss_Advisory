// Navigation and URL configurations
export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
  description?: string;
  isExternal: boolean;
  children?: NavigationItem[];
}

export interface ExternalLink {
  id: string;
  name: string;
  url: string;
  category: 'partner' | 'tool' | 'resource' | 'media';
  description: string;
  isActive: boolean;
}

export const mainNavigation: NavigationItem[] = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
    icon: 'home',
    description: 'Return to homepage',
    isExternal: false
  },
  {
    id: 'services',
    label: 'Services',
    href: '/services',
    icon: 'briefcase',
    description: 'Our professional services',
    isExternal: false,
    children: [
      {
        id: 'accounting',
        label: 'Accounting & BookKeeping',
        href: '/services/accounting',
        description: 'Complete accounting solutions',
        isExternal: false
      },
      {
        id: 'financial',
        label: 'Financial Services',
        href: '/services/financial',
        description: 'Strategic financial planning',
        isExternal: false
      },
      {
        id: 'investment',
        label: 'Investment Research',
        href: '/services/investment',
        description: 'Professional investment analysis',
        isExternal: false
      },
      {
        id: 'business',
        label: 'Business Advisory',
        href: '/services/business',
        description: 'Strategic business consulting',
        isExternal: false
      }
    ]
  },
  {
    id: 'about',
    label: 'About',
    href: '/about',
    icon: 'users',
    description: 'Learn about our company',
    isExternal: false
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '/contact',
    icon: 'phone',
    description: 'Get in touch with us',
    isExternal: false
  },
  {
    id: 'blog',
    label: 'Blog',
    href: '/blog',
    icon: 'bookOpen',
    description: 'Industry insights and news',
    isExternal: false
  }
];

export const footerNavigation: NavigationItem[] = [
  {
    id: 'services-footer',
    label: 'Services',
    href: '/services',
    isExternal: false,
    children: [
      {
        id: 'quickbooks-setup',
        label: 'QuickBooks Setup',
        href: '/services/accounting/quickbooks',
        isExternal: false
      },
      {
        id: 'accounts-payable',
        label: 'Accounts Payable',
        href: '/services/accounting/payable',
        isExternal: false
      },
      {
        id: 'budgeting',
        label: 'Budgeting & Planning',
        href: '/services/financial/budgeting',
        isExternal: false
      },
      {
        id: 'investment-analysis',
        label: 'Investment Analysis',
        href: '/services/investment',
        isExternal: false
      }
    ]
  },
  {
    id: 'company-footer',
    label: 'Company',
    href: '#',
    isExternal: false,
    children: [
      {
        id: 'about-us',
        label: 'About Us',
        href: '/about',
        isExternal: false
      },
      {
        id: 'our-team',
        label: 'Our Team',
        href: '/about/team',
        isExternal: false
      },
      {
        id: 'careers',
        label: 'Careers',
        href: '/careers',
        isExternal: false
      },
      {
        id: 'news',
        label: 'News & Press',
        href: '/news',
        isExternal: false
      }
    ]
  },
  {
    id: 'resources-footer',
    label: 'Resources',
    href: '#',
    isExternal: false,
    children: [
      {
        id: 'blog-footer',
        label: 'Blog',
        href: '/blog',
        isExternal: false
      },
      {
        id: 'case-studies',
        label: 'Case Studies',
        href: '/case-studies',
        isExternal: false
      },
      {
        id: 'whitepapers',
        label: 'Whitepapers',
        href: '/resources/whitepapers',
        isExternal: false
      },
      {
        id: 'webinars',
        label: 'Webinars',
        href: '/resources/webinars',
        isExternal: false
      }
    ]
  },
  {
    id: 'legal-footer',
    label: 'Legal',
    href: '#',
    isExternal: false,
    children: [
      {
        id: 'privacy-policy',
        label: 'Privacy Policy',
        href: '/privacy',
        isExternal: false
      },
      {
        id: 'terms-of-service',
        label: 'Terms of Service',
        href: '/terms',
        isExternal: false
      },
      {
        id: 'cookie-policy',
        label: 'Cookie Policy',
        href: '/cookies',
        isExternal: false
      }
    ]
  }
];

export const externalLinks: ExternalLink[] = [
  {
    id: 'quickbooks',
    name: 'QuickBooks',
    url: 'https://quickbooks.intuit.com',
    category: 'tool',
    description: 'Leading accounting software platform',
    isActive: true
  },
  {
    id: 'xero',
    name: 'Xero',
    url: 'https://www.xero.com',
    category: 'tool',
    description: 'Cloud-based accounting software',
    isActive: true
  },
  {
    id: 'aicpa',
    name: 'AICPA',
    url: 'https://www.aicpa.org',
    category: 'partner',
    description: 'American Institute of CPAs',
    isActive: true
  },
  {
    id: 'sec',
    name: 'SEC',
    url: 'https://www.sec.gov',
    category: 'resource',
    description: 'Securities and Exchange Commission',
    isActive: true
  },
  {
    id: 'irs',
    name: 'IRS',
    url: 'https://www.irs.gov',
    category: 'resource',
    description: 'Internal Revenue Service',
    isActive: true
  },
  {
    id: 'forbes',
    name: 'Forbes Finance',
    url: 'https://www.forbes.com/finance',
    category: 'media',
    description: 'Financial news and insights',
    isActive: true
  },
  {
    id: 'bloomberg',
    name: 'Bloomberg',
    url: 'https://www.bloomberg.com',
    category: 'media',
    description: 'Business and financial news',
    isActive: true
  }
];

export const quickActions = [
  {
    id: 'schedule-consultation',
    label: 'Schedule Consultation',
    href: '/contact?action=schedule',
    icon: 'calendar',
    description: 'Book a free consultation',
    primary: true
  },
  {
    id: 'get-quote',
    label: 'Get Quote',
    href: '/contact?action=quote',
    icon: 'calculator',
    description: 'Request a service quote',
    primary: false
  },
  {
    id: 'download-brochure',
    label: 'Download Brochure',
    href: '/resources/brochure.pdf',
    icon: 'download',
    description: 'Company overview PDF',
    primary: false
  }
];

export const getNavigationItemById = (id: string, navigation: NavigationItem[] = mainNavigation): NavigationItem | undefined => {
  for (const item of navigation) {
    if (item.id === id) return item;
    if (item.children) {
      const found = getNavigationItemById(id, item.children);
      if (found) return found;
    }
  }
  return undefined;
};

export const getExternalLinksByCategory = (category: ExternalLink['category']): ExternalLink[] => {
  return externalLinks.filter(link => link.category === category && link.isActive);
};
