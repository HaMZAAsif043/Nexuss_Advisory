// Services Data for Nexuss Advisory
import { LucideIcon, Calculator, DollarSign, Handshake, TrendingUp, BarChart3 } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  image: string;
  overview: string;
  features: string[];
  benefits: string[];
  process: string[];
  subServices: SubService[];
}

export interface SubService {
  id: string;
  name: string;
  description: string;
  details: string;
  price: string;
  duration: string;
  image: string;
  features: string[];
  benefits: string[];
  process: string[];
  deliverables: string[];
  industries: string[];
}

export const services: Service[] = [
  {
    id: 'accounting',
    title: 'Accounting & Compliance',
    description: 'Comprehensive accounting solutions to keep your business finances organized and compliant.',
    icon: Calculator,
    color: '#4DC6D7',
    image: '/services/accounting.jpg',
    overview: 'Our accounting and compliance services provide the foundation for your business\'s financial success. We ensure accuracy, compliance, and strategic insights to drive your growth.',
    features: [
      'General Ledger & Fixed Asset Management',
      'Bank, Inventory & Cost Accounting',
      'Financial Statements Preparation',
      'Accounting Policy Advisory',
      'Tax Compliance & Advisory',
      'IFRS/GAAP Compliance Support'
    ],
    benefits: [
      'Improved financial accuracy',
      'Regulatory compliance assurance',
      'Better asset management',
      'Tax optimization strategies'
    ],
    process: [
      'Initial compliance assessment',
      'System setup and policy development',
      'Ongoing accounting management',
      'Regular compliance monitoring',
      'Annual audits and reviews'
    ],
    subServices: [
      {
        id: 'general-ledger',
        name: 'General Ledger & Fixed Asset Management',
        description: 'Complete general ledger maintenance and fixed asset tracking systems.',
        details: 'Our certified accounting professionals manage your general ledger, ensuring accurate recording of all transactions and comprehensive fixed asset management.',
        price: 'Starting at $399/month',
        duration: 'Ongoing monthly service',
        image: '/services/accounting.jpg',
        features: [
          'Complete chart of accounts setup',
          'Daily transaction recording',
          'Monthly general ledger reconciliation',
          'Fixed asset register maintenance',
          'Depreciation calculations',
          'Asset disposal tracking'
        ],
        benefits: [
          'Accurate financial records',
          'Proper asset valuation',
          'Tax compliance',
          'Financial reporting accuracy'
        ],
        process: [
          'Initial ledger assessment',
          'Chart of accounts optimization',
          'Fixed asset inventory',
          'System implementation',
          'Ongoing maintenance'
        ],
        deliverables: [
          'Monthly trial balance',
          'Fixed asset schedule',
          'Depreciation reports',
          'Account reconciliations'
        ],
        industries: [
          'Manufacturing',
          'Construction',
          'Healthcare',
          'Professional Services'
        ]
      }
    ]
  },
  {
    id: 'financial',
    title: 'Financial Services',
    description: 'Strategic financial planning and management services to optimize your business performance.',
    icon: DollarSign,
    color: '#2D5AA0',
    image: '/services/financial.jpg',
    overview: 'Our financial services help you make informed decisions about your business\'s financial future through strategic planning, analysis, and optimization.',
    features: [
      'Financial Analysis & Reporting',
      'Budgeting, Forecasting & Scenario Modeling',
      'Financial Modeling & Sensitivity Analysis',
      'Cash Flow & Working Capital Management',
      'Business Dashboards & Performance Analytics',
      'Corporate Finance Support & KPI Monitoring'
    ],
    benefits: [
      'Better financial decision making',
      'Improved cash flow visibility',
      'Risk mitigation strategies',
      'Strategic growth planning'
    ],
    process: [
      'Financial assessment and analysis',
      'Strategic planning development',
      'Implementation and monitoring',
      'Regular reviews and adjustments'
    ],
    subServices: [
      {
        id: 'financial-analysis',
        name: 'Financial Analysis & Reporting',
        description: 'Comprehensive financial analysis and custom reporting solutions.',
        details: 'We provide detailed financial analysis and create custom reports that give you insights into your business performance and financial health.',
        price: 'Starting at $799/month',
        duration: 'Monthly service',
        image: '/services/financial.jpg',
        features: [
          'Monthly financial statement analysis',
          'Ratio analysis and benchmarking',
          'Trend analysis and variance reporting',
          'Custom financial dashboards',
          'Performance metrics tracking',
          'Executive summary reports'
        ],
        benefits: [
          'Deep financial insights',
          'Performance benchmarking',
          'Trend identification',
          'Strategic decision support'
        ],
        process: [
          'Data collection and validation',
          'Analysis and interpretation',
          'Report generation',
          'Presentation and discussion'
        ],
        deliverables: [
          'Monthly analysis reports',
          'Financial dashboards',
          'KPI scorecards',
          'Executive summaries'
        ],
        industries: [
          'Technology',
          'Healthcare',
          'Manufacturing',
          'Professional Services'
        ]
      }
    ]
  },
  {
    id: 'transactional',
    title: 'Transactional Advisory',
    description: 'Expert advisory services for mergers, acquisitions, and complex business transactions.',
    icon: Handshake,
    color: '#FF6B35',
    image: '/services/business.jpg',
    overview: 'Our transactional advisory services help companies navigate complex deals, from M&A to restructuring, ensuring optimal outcomes for all stakeholders.',
    features: [
      'Mergers & Acquisitions (M&A)',
      'Commercial Due Diligence',
      'Valuation (Pre-IPO, Business & Startups)',
      'Investor Documentation & Pitch Decks',
      'Restructuring & Turnaround',
      'Deal Execution & Post-Merger Integration'
    ],
    benefits: [
      'Successful deal execution',
      'Risk mitigation',
      'Value maximization',
      'Strategic transaction support'
    ],
    process: [
      'Transaction planning and strategy',
      'Due diligence and valuation',
      'Documentation and negotiation',
      'Deal closing and integration'
    ],
    subServices: []
  },
  {
    id: 'investment',
    title: 'Investment Research & Advisory',
    description: 'Professional investment research and analysis services for informed decision making.',
    icon: TrendingUp,
    color: '#7B68EE',
    image: '/services/investment.jpg',
    overview: 'Our investment research services provide comprehensive analysis and insights to support your investment decisions and portfolio management strategies.',
    features: [
      'Market & Sector Analysis',
      'Equity & Bond Research',
      'ESG & Sustainability Analysis',
      'Portfolio & Wealth Advisory',
      'Corporate Investment Advisory',
      'Risk & Return Assessment'
    ],
    benefits: [
      'Data-driven investment decisions',
      'Risk-adjusted returns',
      'Market insight and timing',
      'Diversified portfolio strategies'
    ],
    process: [
      'Investment objectives assessment',
      'Market research and analysis',
      'Portfolio construction',
      'Ongoing monitoring and rebalancing'
    ],
    subServices: []
  },
  {
    id: 'analytics',
    title: 'Data-Driven Insights & Analytics',
    description: 'Advanced analytics and business intelligence solutions for data-driven decision making.',
    icon: BarChart3,
    color: '#20B2AA',
    image: '/services/financial.jpg',
    overview: 'Our data analytics services transform your business data into actionable insights through advanced analytics, dashboards, and predictive modeling.',
    features: [
      'Financial & Business Dashboards',
      'Market & Industry Benchmarking Dashboards',
      'Predictive Analytics & Future Trend Modeling',
      'Automated Reporting Solutions',
      'Scenario Planning & What-If Analysis',
      'Automated Data Cleaning & Integration'
    ],
    benefits: [
      'Real-time business insights',
      'Predictive capabilities',
      'Automated reporting',
      'Data-driven decision making'
    ],
    process: [
      'Data assessment and strategy',
      'Dashboard and analytics development',
      'Implementation and training',
      'Ongoing support and optimization'
    ],
    subServices: []
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getSubServiceById = (serviceId: string, subServiceId: string): SubService | undefined => {
  const service = getServiceById(serviceId);
  return service?.subServices.find(subService => subService.id === subServiceId);
};
