// Services Data for Nexuss Advisory
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
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
    title: 'Accounting & BookKeeping',
    description: 'Comprehensive accounting solutions to keep your business finances organized and compliant.',
    icon: '📊',
    color: '#4DC6D7',
    image: '/services/accounting.jpg',
    overview: 'Our accounting and bookkeeping services provide the foundation for your business\'s financial success. We ensure accuracy, compliance, and strategic insights to drive your growth.',
    features: [
      'Real-time financial reporting',
      'Tax compliance and preparation',
      'Cash flow management',
      'Monthly financial statements',
      'Payroll processing',
      'Accounts payable/receivable'
    ],
    benefits: [
      'Improved financial accuracy',
      'Time savings for business owners',
      'Better cash flow management',
      'Tax compliance assurance'
    ],
    process: [
      'Initial consultation and assessment',
      'System setup and data migration',
      'Ongoing monthly bookkeeping',
      'Regular financial reporting',
      'Annual tax preparation'
    ],
    subServices: [
      {
        id: 'quickbooks',
        name: 'QuickBooks Setup & Management',
        description: 'Complete QuickBooks implementation and ongoing management for seamless accounting operations.',
        details: 'Our certified QuickBooks professionals will set up your system, migrate historical data, and provide ongoing support to ensure your books are always accurate and up-to-date.',
        price: 'Starting at $299/month',
        duration: 'Ongoing monthly service',
        image: '/services/quickbooks.jpg',
        features: [
          'Complete QuickBooks setup and configuration',
          'Historical data migration and cleanup',
          'Chart of accounts optimization',
          'Monthly bookkeeping and reconciliation',
          'Custom reporting setup',
          'User training and support',
          'Bank and credit card integration',
          'Inventory management setup',
          'Payroll integration',
          'Tax preparation support'
        ],
        benefits: [
          'Automated financial processes',
          'Real-time financial visibility',
          'Reduced manual data entry',
          'Improved accuracy and compliance',
          'Time savings for business owners',
          'Streamlined tax preparation'
        ],
        process: [
          'Initial consultation and needs assessment',
          'QuickBooks setup and configuration',
          'Data migration and historical cleanup',
          'Team training and documentation',
          'Ongoing monthly management',
          'Regular reviews and optimization'
        ],
        deliverables: [
          'Fully configured QuickBooks system',
          'Clean, organized financial data',
          'Custom financial reports',
          'Monthly financial statements',
          'Training materials and documentation',
          'Ongoing support and maintenance'
        ],
        industries: [
          'Professional Services',
          'Retail and E-commerce',
          'Construction and Contractors',
          'Healthcare Practices',
          'Non-profit Organizations',
          'Manufacturing'
        ]
      },
      {
        id: 'payable',
        name: 'Accounts Payable Services',
        description: 'Streamlined vendor payment processing and expense management systems.',
        details: 'We handle all aspects of your accounts payable process, from invoice processing to payment scheduling, ensuring timely payments and maintaining good vendor relationships.',
        price: 'Starting at $199/month',
        duration: 'Monthly service',
        image: '/services/accounts-payable.jpg',
        features: [
          'Invoice processing and approval workflows',
          'Vendor management and onboarding',
          'Payment scheduling and processing',
          'Expense categorization and coding',
          'Three-way matching (PO, receipt, invoice)',
          'Cash flow optimization',
          'Vendor statement reconciliation',
          'Early payment discount management',
          '1099 preparation and filing',
          'Detailed reporting and analytics'
        ],
        benefits: [
          'Improved vendor relationships',
          'Better cash flow management',
          'Reduced processing errors',
          'Time savings for staff',
          'Enhanced financial controls',
          'Cost savings through discounts'
        ],
        process: [
          'Current process assessment',
          'Workflow design and implementation',
          'Vendor data setup and migration',
          'Staff training and transition',
          'Ongoing processing and management',
          'Monthly reporting and review'
        ],
        deliverables: [
          'Streamlined AP workflows',
          'Vendor database management',
          'Monthly AP aging reports',
          'Cash flow forecasts',
          'Payment processing schedules',
          'Annual 1099 preparation'
        ],
        industries: [
          'Professional Services',
          'Retail and Distribution',
          'Construction',
          'Healthcare',
          'Technology Companies',
          'Manufacturing'
        ]
      }
    ]
  },
  {
    id: 'financial',
    title: 'Financial Services',
    description: 'Strategic financial planning and management services to optimize your business performance.',
    icon: '💰',
    color: '#2D5AA0',
    image: '/services/financial.jpg',
    overview: 'Our financial services help you make informed decisions about your business\'s financial future through strategic planning, analysis, and optimization.',
    features: [
      'Financial planning and analysis',
      'Budget development and monitoring',
      'Cash flow forecasting',
      'Investment analysis',
      'Risk management',
      'Performance dashboards'
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
        id: 'budgeting',
        name: 'Budgeting & Planning',
        description: 'Comprehensive budget development and financial planning services.',
        details: 'We work with you to create realistic budgets, forecast future performance, and develop strategic financial plans that align with your business goals.',
        price: 'Starting at $1,500',
        duration: 'Initial setup + monthly reviews',
        image: '/services/budgeting.jpg',
        features: [
          'Annual budget development',
          'Monthly budget vs. actual analysis',
          'Cash flow forecasting',
          'Scenario planning and modeling',
          'KPI identification and tracking',
          'Capital expenditure planning',
          'Revenue forecasting',
          'Expense optimization analysis',
          'Financial dashboard creation',
          'Regular review meetings'
        ],
        benefits: [
          'Improved financial control',
          'Better decision making',
          'Enhanced business planning',
          'Risk mitigation',
          'Performance tracking',
          'Growth planning'
        ],
        process: [
          'Historical analysis and assessment',
          'Goal setting and planning',
          'Budget model development',
          'Review and refinement',
          'Implementation and monitoring',
          'Regular updates and adjustments'
        ],
        deliverables: [
          'Comprehensive annual budget',
          'Monthly variance reports',
          'Cash flow projections',
          'Financial dashboards',
          'KPI tracking reports',
          'Strategic recommendations'
        ],
        industries: [
          'Professional Services',
          'Technology Startups',
          'Healthcare Practices',
          'Retail Businesses',
          'Manufacturing',
          'Non-profit Organizations'
        ]
      }
    ]
  },
  {
    id: 'investment',
    title: 'Investment Research',
    description: 'Professional investment research and analysis services for informed decision making.',
    icon: '📈',
    color: '#7B68EE',
    image: '/services/investment.jpg',
    overview: 'Our investment research services provide comprehensive analysis and insights to support your investment decisions and portfolio management strategies.',
    features: [
      'Equity research and analysis',
      'Market trend analysis',
      'Portfolio optimization',
      'Risk assessment',
      'ESG analysis',
      'Performance reporting'
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
    id: 'business',
    title: 'Business Advisory',
    description: 'Strategic business consulting services to drive growth and operational excellence.',
    icon: '🤝',
    color: '#FF6B35',
    image: '/services/business.jpg',
    overview: 'Our business advisory services help companies navigate complex challenges, identify growth opportunities, and implement strategic solutions for sustainable success.',
    features: [
      'Strategic planning',
      'M&A advisory',
      'Due diligence',
      'Business valuation',
      'Operational improvement',
      'Change management'
    ],
    benefits: [
      'Strategic clarity and direction',
      'Improved operational efficiency',
      'Enhanced market position',
      'Sustainable growth strategies'
    ],
    process: [
      'Business assessment and analysis',
      'Strategy development',
      'Implementation planning',
      'Execution support and monitoring'
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
