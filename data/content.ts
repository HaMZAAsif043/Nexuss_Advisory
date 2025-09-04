// Blog posts, case studies, and content data
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  lastModified: string;
  category: string;
  tags: string[];
  image: string;
  readTime: number;
  featured: boolean;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial: {
    quote: string;
    author: string;
    position: string;
    company: string;
  };
  image: string;
  tags: string[];
  publishDate: string;
  featured: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
  helpful: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'quickbooks-setup-guide-2024',
    title: 'Complete QuickBooks Setup Guide for Small Businesses in 2024',
    slug: 'quickbooks-setup-guide-2024',
    excerpt: 'Learn how to properly set up QuickBooks for your small business with our comprehensive step-by-step guide.',
    content: `Setting up QuickBooks correctly from the start is crucial for maintaining accurate financial records...`,
    author: 'Jane Smith',
    publishDate: '2024-01-15',
    lastModified: '2024-01-15',
    category: 'Accounting',
    tags: ['QuickBooks', 'Small Business', 'Accounting Software', 'Setup Guide'],
    image: '/blog/quickbooks-setup-2024.jpg',
    readTime: 8,
    featured: true,
    seo: {
      title: 'QuickBooks Setup Guide 2024 - Complete Tutorial for Small Business',
      description: 'Step-by-step QuickBooks setup guide for small businesses. Learn chart of accounts, bank connections, and best practices.',
      keywords: ['quickbooks setup', 'small business accounting', 'accounting software', 'quickbooks tutorial']
    }
  },
  {
    id: 'tax-planning-strategies-2024',
    title: 'Tax Planning Strategies Every Business Should Know in 2024',
    slug: 'tax-planning-strategies-2024',
    excerpt: 'Discover effective tax planning strategies to minimize your business tax liability and maximize savings.',
    content: `Tax planning is an essential part of running a successful business...`,
    author: 'John Doe',
    publishDate: '2024-01-10',
    lastModified: '2024-01-10',
    category: 'Tax Planning',
    tags: ['Tax Planning', 'Business Tax', 'Tax Strategies', 'Small Business'],
    image: '/blog/tax-planning-2024.jpg',
    readTime: 12,
    featured: true,
    seo: {
      title: 'Business Tax Planning Strategies 2024 - Minimize Tax Liability',
      description: 'Essential tax planning strategies for businesses. Learn how to reduce tax liability and maximize deductions in 2024.',
      keywords: ['tax planning', 'business tax strategies', 'tax deductions', 'tax savings']
    }
  },
  {
    id: 'cash-flow-management-tips',
    title: 'Cash Flow Management: 10 Tips for Better Financial Health',
    slug: 'cash-flow-management-tips',
    excerpt: 'Master cash flow management with these proven strategies to improve your business financial stability.',
    content: `Cash flow is the lifeblood of any business...`,
    author: 'Mike Johnson',
    publishDate: '2024-01-05',
    lastModified: '2024-01-05',
    category: 'Financial Management',
    tags: ['Cash Flow', 'Financial Management', 'Business Finance', 'Working Capital'],
    image: '/blog/cash-flow-management.jpg',
    readTime: 10,
    featured: false,
    seo: {
      title: 'Cash Flow Management Tips - Improve Business Financial Health',
      description: '10 proven cash flow management strategies to improve your business financial stability and growth.',
      keywords: ['cash flow management', 'business finance', 'financial planning', 'working capital']
    }
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'tech-startup-accounting',
    title: 'Streamlining Accounting for Fast-Growing Tech Startup',
    client: 'TechFlow Solutions',
    industry: 'Technology',
    challenge: 'A rapidly growing SaaS startup needed to implement proper accounting systems and processes to support their scaling operations and prepare for Series A funding.',
    solution: 'We implemented QuickBooks Enterprise, established proper chart of accounts, set up automated workflows for accounts payable/receivable, and created comprehensive financial reporting systems.',
    results: [
      'Reduced monthly close time from 15 days to 3 days',
      'Improved financial accuracy by 95%',
      'Successfully completed Series A due diligence',
      'Saved 20 hours per week on manual bookkeeping'
    ],
    testimonial: {
      quote: "Nexuss Advisory transformed our financial operations. Their expertise was crucial in our successful Series A funding round.",
      author: 'Sarah Chen',
      position: 'CEO',
      company: 'TechFlow Solutions'
    },
    image: '/case-studies/tech-startup.jpg',
    tags: ['QuickBooks', 'Startup', 'Technology', 'Financial Systems'],
    publishDate: '2023-12-15',
    featured: true
  },
  {
    id: 'healthcare-practice-optimization',
    title: 'Financial Optimization for Multi-Location Healthcare Practice',
    client: 'Premier Health Group',
    industry: 'Healthcare',
    challenge: 'A growing healthcare practice with 5 locations needed to consolidate their financial operations and improve cash flow management.',
    solution: 'Implemented centralized accounting system, automated insurance billing processes, and established KPI dashboards for each location.',
    results: [
      'Improved cash flow by 30%',
      'Reduced billing errors by 85%',
      'Increased collection rates by 25%',
      'Streamlined operations across all locations'
    ],
    testimonial: {
      quote: "The financial insights and systems Nexuss implemented have been game-changing for our practice growth.",
      author: 'Dr. Michael Rodriguez',
      position: 'Managing Partner',
      company: 'Premier Health Group'
    },
    image: '/case-studies/healthcare-practice.jpg',
    tags: ['Healthcare', 'Multi-location', 'Cash Flow', 'Operations'],
    publishDate: '2023-11-20',
    featured: true
  }
];

export const faqs: FAQ[] = [
  {
    id: 'quickbooks-setup-time',
    question: 'How long does it take to set up QuickBooks for my business?',
    answer: 'The setup time depends on your business complexity, but typically ranges from 2-5 business days. This includes data migration, chart of accounts setup, and initial training.',
    category: 'QuickBooks',
    order: 1,
    helpful: 45
  },
  {
    id: 'monthly-bookkeeping-cost',
    question: 'What does monthly bookkeeping service cost?',
    answer: 'Our monthly bookkeeping services start at $299/month, depending on transaction volume and complexity. We provide custom quotes based on your specific needs.',
    category: 'Pricing',
    order: 2,
    helpful: 52
  },
  {
    id: 'tax-preparation-deadline',
    question: 'When should I start preparing for tax season?',
    answer: 'We recommend starting tax preparation by January to ensure all documents are organized and filed on time. Early preparation also allows for better tax planning opportunities.',
    category: 'Tax Services',
    order: 3,
    helpful: 38
  },
  {
    id: 'financial-reports-frequency',
    question: 'How often will I receive financial reports?',
    answer: 'Standard monthly packages include monthly financial statements. We also provide quarterly reports and can customize reporting frequency based on your business needs.',
    category: 'Reporting',
    order: 4,
    helpful: 29
  },
  {
    id: 'small-business-services',
    question: 'Do you work with very small businesses or startups?',
    answer: 'Yes! We work with businesses of all sizes, from solo entrepreneurs to growing companies. Our services are scalable and can grow with your business.',
    category: 'Services',
    order: 5,
    helpful: 41
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getFeaturedBlogPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const getFeaturedCaseStudies = (): CaseStudy[] => {
  return caseStudies.filter(study => study.featured);
};

export const getFAQsByCategory = (category: string): FAQ[] => {
  return faqs.filter(faq => faq.category === category).sort((a, b) => a.order - b.order);
};

export const getAllFAQCategories = (): string[] => {
  return [...new Set(faqs.map(faq => faq.category))];
};
