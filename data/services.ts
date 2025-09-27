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
  price?: string;
  duration?: string;
  image?: string;
  features?: string[];
  benefits?: string[];
  process?: string[];
  deliverables?: string[];
  industries?: string[];
}

export const services: Service[] = [
  {
    id: 'accounting',
    title: 'Accounting & Compliance',
    description: 'Comprehensive accounting solutions to keep your business finances organized and compliant.',
    icon: Calculator,
    color: '#4DC6D7',
    image: '/services/accounting.jpg',
    overview:
      "Our accounting and compliance services provide the foundation for your business's financial success. We ensure accuracy, compliance, and strategic insights to drive your growth.",
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
        details:
          'Our certified accounting professionals manage your general ledger, ensuring accurate recording of all transactions and comprehensive fixed asset management.',
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
        industries: ['Manufacturing', 'Construction', 'Healthcare', 'Professional Services']
      },
      {
        id: 'bank-inventory',
        name: 'Bank, Inventory & Cost Accounting',
        description: 'End-to-end management of bank accounts, inventory, and cost accounting systems.',
        details:
          'We ensure accurate financial tracking by reconciling bank statements, managing inventory valuations, and implementing cost accounting strategies.',
        price: 'Custom pricing',
        duration: 'Ongoing service',
        image: '/services/accounting.jpg',
        features: ['Bank reconciliation', 'Inventory valuation methods', 'Cost allocation systems'],
        benefits: ['Accurate cost tracking', 'Optimized resource usage', 'Better cash management'],
        process: ['Initial assessment', 'System setup', 'Ongoing reconciliation', 'Periodic reviews'],
        deliverables: ['Bank reconciliations', 'Inventory reports', 'Cost accounting statements'],
        industries: ['Retail', 'Manufacturing', 'Wholesale']
      },
      {
        id: 'financial-statements',
        name: 'Financial Statements Preparation',
        description: 'Accurate preparation of financial statements for compliance and reporting.',
        details: 'We prepare income statements, balance sheets, and cash flow statements with precision.',
        price: 'Starting at $299/report',
        duration: 'Per reporting cycle',
        image: '/services/accounting.jpg',
        features: ['Balance sheet preparation', 'Income statement preparation', 'Cash flow reports'],
        benefits: ['Transparency', 'Compliance assurance', 'Investor-ready reports'],
        process: ['Data gathering', 'Report drafting', 'Review & validation', 'Final delivery'],
        deliverables: ['Audited financial statements', 'Quarterly/annual reports'],
        industries: ['All sectors']
      },
      {
        id: 'policy-advisory',
        name: 'Accounting Policy Advisory',
        description: 'Guidance on accounting policies tailored to your industry and compliance needs.',
        details: 'We create and review accounting policies aligned with IFRS/GAAP standards.',
        price: 'Custom advisory fees',
        duration: 'Consulting engagement',
        image: '/services/accounting.jpg',
        features: ['Policy creation', 'IFRS/GAAP alignment', 'Custom advisory'],
        benefits: ['Strong compliance foundation', 'Reduced risk', 'Industry best practices'],
        process: ['Assessment', 'Policy drafting', 'Review & approval'],
        deliverables: ['Policy documents', 'Advisory reports'],
        industries: ['Financial Services', 'Healthcare', 'Technology']
      },
      {
        id: 'tax-compliance',
        name: 'Tax Compliance & Advisory',
        description: 'Tax planning, filing, and compliance services to optimize liabilities.',
        details: 'We handle your taxation needs including VAT, corporate tax, and advisory.',
        price: 'Starting at $499/year',
        duration: 'Annual/quarterly service',
        image: '/services/accounting.jpg',
        features: ['Corporate tax filing', 'VAT returns', 'Advisory support'],
        benefits: ['Optimized tax strategies', 'Compliance assurance'],
        process: ['Tax assessment', 'Preparation & filing', 'Advisory support'],
        deliverables: ['Tax returns', 'Advisory notes'],
        industries: ['All sectors']
      },
      {
        id: 'ifrs-gaap',
        name: 'IFRS/GAAP Compliance Support',
        description: 'Support for IFRS and GAAP compliance in reporting and accounting.',
        details: 'Ensure smooth compliance with international accounting standards.',
        price: 'Custom pricing',
        duration: 'Consulting/ongoing',
        image: '/services/accounting.jpg',
        features: ['GAAP alignment', 'IFRS conversions'],
        benefits: ['International compliance', 'Risk reduction'],
        process: ['Gap assessment', 'Compliance adjustments'],
        deliverables: ['Compliance reports'],
        industries: ['Multinationals', 'Public Companies']
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
    overview:
      "Our financial services help you make informed decisions about your business's financial future through strategic planning, analysis, and optimization.",
    features: [
      'Financial Analysis & Reporting',
      'Budgeting, Forecasting & Scenario Modeling',
      'Financial Modeling & Sensitivity Analysis',
      'Cash Flow & Working Capital Management',
      'Business Dashboards & Performance Analytics',
      'Corporate Finance Support & KPI Monitoring'
    ],
    benefits: ['Better financial decision making', 'Improved cash flow visibility', 'Risk mitigation strategies', 'Strategic growth planning'],
    process: ['Financial assessment and analysis', 'Strategic planning development', 'Implementation and monitoring', 'Regular reviews and adjustments'],
    subServices: [
      {
        id: 'financial-analysis',
        name: 'Financial Analysis & Reporting',
        description: 'Comprehensive financial analysis and custom reporting solutions.',
        details:
          'We provide detailed financial analysis and create custom reports that give you insights into your business performance and financial health.',
        price: 'Starting at $799/month',
        duration: 'Monthly service',
        image: '/services/financial.jpg',
        features: ['Monthly financial statement analysis', 'Ratio analysis', 'Custom dashboards'],
        benefits: ['Deep insights', 'Benchmarking', 'Trend identification'],
        process: ['Data collection', 'Analysis', 'Report generation'],
        deliverables: ['Monthly reports', 'KPI dashboards'],
        industries: ['Technology', 'Healthcare', 'Manufacturing', 'Professional Services']
      },
      {
        id: 'budgeting',
        name: 'Budgeting, Forecasting & Scenario Modeling',
        description: 'Strategic planning through budgets, forecasts, and what-if models.',
        details: 'We design financial forecasts and scenarios to help you plan effectively.',
        price: 'Custom pricing',
        duration: 'Per engagement',
        image: '/services/financial.jpg',
        features: ['Budget creation', 'Forecasting', 'Scenario analysis'],
        benefits: ['Strategic foresight', 'Better planning'],
        process: ['Initial consultation', 'Model creation', 'Ongoing adjustments'],
        deliverables: ['Forecasting models', 'Budget reports'],
        industries: ['Startups', 'SMEs', 'Corporations']
      },
      {
        id: 'modeling',
        name: 'Financial Modeling & Sensitivity Analysis',
        description: 'Custom-built models with stress testing capabilities.',
        details: 'We develop detailed models to simulate financial outcomes under various conditions.',
        price: 'Custom pricing',
        duration: 'Per model engagement',
        image: '/services/financial.jpg',
        features: ['DCF models', 'Sensitivity testing', 'Valuation models'],
        benefits: ['Risk mitigation', 'Clarity in investment decisions'],
        process: ['Requirement analysis', 'Model creation', 'Testing & validation'],
        deliverables: ['Financial models'],
        industries: ['Investment firms', 'Startups']
      },
      {
        id: 'cashflow',
        name: 'Cash Flow & Working Capital Management',
        description: 'Management of liquidity and working capital optimization.',
        details: 'We monitor cash flows to ensure your business stays liquid.',
        price: 'Custom pricing',
        duration: 'Monthly service',
        image: '/services/financial.jpg',
        features: ['Cash flow forecasting', 'Working capital optimization'],
        benefits: ['Liquidity assurance', 'Operational efficiency'],
        process: ['Cash assessment', 'Strategy design', 'Monitoring'],
        deliverables: ['Cash flow reports'],
        industries: ['All sectors']
      },
      {
        id: 'dashboards',
        name: 'Business Dashboards & Performance Analytics',
        description: 'Interactive dashboards for real-time financial insights.',
        details: 'We create dashboards to track KPIs and performance.',
        price: 'Custom pricing',
        duration: 'Implementation',
        image: '/services/financial.jpg',
        features: ['KPI dashboards', 'Automated updates'],
        benefits: ['Transparency', 'Real-time monitoring'],
        process: ['Dashboard design', 'Implementation'],
        deliverables: ['Dashboards'],
        industries: ['All']
      },
      {
        id: 'corporate-finance',
        name: 'Corporate Finance Support & KPI Monitoring',
        description: 'Support for corporate finance needs and KPI monitoring.',
        details: 'We assist in corporate finance operations and monitoring key metrics.',
        price: 'Custom pricing',
        duration: 'Ongoing',
        image: '/services/financial.jpg',
        features: ['KPI setup', 'Corporate finance advisory'],
        benefits: ['Growth planning', 'Decision support'],
        process: ['Setup', 'Monitoring'],
        deliverables: ['KPI scorecards'],
        industries: ['Corporates']
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
    overview:
      'Our transactional advisory services help companies navigate complex deals, from M&A to restructuring, ensuring optimal outcomes for all stakeholders.',
    features: [
      'Mergers & Acquisitions (M&A)',
      'Commercial Due Diligence',
      'Valuation (Pre-IPO, Business & Startups)',
      'Investor Documentation & Pitch Decks',
      'Restructuring & Turnaround',
      'Deal Execution & Post-Merger Integration'
    ],
    benefits: ['Successful deal execution', 'Risk mitigation', 'Value maximization', 'Strategic transaction support'],
    process: ['Transaction planning and strategy', 'Due diligence and valuation', 'Documentation and negotiation', 'Deal closing and integration'],
    subServices: [
      { id: 'ma', name: 'Mergers & Acquisitions (M&A)', description: 'End-to-end M&A support.', details: 'We handle acquisition deals from start to finish.' },
      { id: 'due-diligence', name: 'Commercial Due Diligence', description: 'Detailed due diligence for transactions.', details: 'We conduct full due diligence.' },
      { id: 'valuation', name: 'Valuation (Pre-IPO, Business & Startups)', description: 'Business valuation services.', details: 'We provide fair valuations.' },
      { id: 'pitch-decks', name: 'Investor Documentation & Pitch Decks', description: 'Professional investor docs.', details: 'We prepare pitch-ready docs.' },
      { id: 'restructuring', name: 'Restructuring & Turnaround', description: 'Support in restructuring.', details: 'We guide restructuring strategies.' },
      { id: 'deal-execution', name: 'Deal Execution & Post-Merger Integration', description: 'Smooth deal execution.', details: 'We ensure integration success.' }
    ]
  },
  {
    id: 'investment',
    title: 'Investment Research & Advisory',
    description: 'Professional investment research and analysis services for informed decision making.',
    icon: TrendingUp,
    color: '#7B68EE',
    image: '/services/investment.jpg',
    overview:
      'Our investment research services provide comprehensive analysis and insights to support your investment decisions and portfolio management strategies.',
    features: [
      'Market & Sector Analysis',
      'Equity & Bond Research',
      'ESG & Sustainability Analysis',
      'Portfolio & Wealth Advisory',
      'Corporate Investment Advisory',
      'Risk & Return Assessment'
    ],
    benefits: ['Data-driven investment decisions', 'Risk-adjusted returns', 'Market insight and timing', 'Diversified portfolio strategies'],
    process: ['Investment objectives assessment', 'Market research and analysis', 'Portfolio construction', 'Ongoing monitoring and rebalancing'],
    subServices: [
      { id: 'market-analysis', name: 'Market & Sector Analysis', description: 'Research on industries and markets.', details: 'In-depth sector analysis.' },
      { id: 'equity-research', name: 'Equity & Bond Research', description: 'Equity and fixed income research.', details: 'Comprehensive reports.' },
      { id: 'esg', name: 'ESG & Sustainability Analysis', description: 'Sustainability-focused research.', details: 'ESG integration strategies.' },
      { id: 'portfolio', name: 'Portfolio & Wealth Advisory', description: 'Advisory on portfolio strategy.', details: 'Wealth management support.' },
      { id: 'corporate-investment', name: 'Corporate Investment Advisory', description: 'Investment advisory for corporates.', details: 'Tailored corporate investment solutions.' },
      { id: 'risk-return', name: 'Risk & Return Assessment', description: 'Assessment of risks vs. returns.', details: 'Risk analysis services.' }
    ]
  },
  {
    id: 'analytics',
    title: 'Data-Driven Insights & Analytics',
    description: 'Advanced analytics and business intelligence solutions for data-driven decision making.',
    icon: BarChart3,
    color: '#20B2AA',
    image: '/services/financial.jpg',
    overview:
      'Our data analytics services transform your business data into actionable insights through advanced analytics, dashboards, and predictive modeling.',
    features: [
      'Financial & Business Dashboards',
      'Market & Industry Benchmarking Dashboards',
      'Predictive Analytics & Future Trend Modeling',
      'Automated Reporting Solutions',
      'Scenario Planning & What-If Analysis',
      'Automated Data Cleaning & Integration'
    ],
    benefits: ['Real-time business insights', 'Predictive capabilities', 'Automated reporting', 'Data-driven decision making'],
    process: ['Data assessment and strategy', 'Dashboard and analytics development', 'Implementation and training', 'Ongoing support and optimization'],
 subServices: [
  {
    id: 'dashboards',
    name: 'Financial & Business Dashboards',
    description: 'Interactive dashboards.',
    details: 'We create BI dashboards.',
    price: 'Custom pricing',
    duration: 'Implementation time varies',
    image: '/services/analytics.jpg',
    features: ['Custom dashboard creation', 'Real-time KPIs', 'Integration with ERP/CRM'],
    benefits: ['Better insights', 'Real-time visibility'],
    process: ['Requirement analysis', 'Dashboard design', 'Implementation', 'Training'],
    deliverables: ['Dashboard UI', 'User training docs'],
    industries: ['All sectors']
  },
  {
    id: 'benchmarking',
    name: 'Market & Industry Benchmarking Dashboards',
    description: 'Benchmarking analytics.',
    details: 'Competitive benchmarks.',
    price: 'Custom pricing',
    duration: 'Varies',
    image: '/services/analytics.jpg',
    features: ['Industry comparisons', 'Benchmark KPIs'],
    benefits: ['Competitive insights', 'Better positioning'],
    process: ['Data gathering', 'Analysis', 'Reporting'],
    deliverables: ['Benchmark reports'],
    industries: ['Manufacturing', 'Retail', 'Technology']
  },
  {
    id: 'predictive',
    name: 'Predictive Analytics & Future Trend Modeling',
    description: 'Predictive modeling.',
    details: 'Trend forecasting.',
    price: 'Custom pricing',
    duration: 'Depends on project scope',
    image: '/services/analytics.jpg',
    features: ['AI-driven models', 'Trend forecasting', 'Scenario planning'],
    benefits: ['Future readiness', 'Data-driven planning'],
    process: ['Model design', 'Training & testing', 'Deployment'],
    deliverables: ['Forecasting reports', 'Model documentation'],
    industries: ['Finance', 'Healthcare', 'Retail']
  },
  {
    id: 'automated-reporting',
    name: 'Automated Reporting Solutions',
    description: 'Automated reporting systems.',
    details: 'Custom reporting.',
    price: 'Custom pricing',
    duration: 'Ongoing service',
    image: '/services/analytics.jpg',
    features: ['Scheduled reports', 'Data automation'],
    benefits: ['Save time', 'Error reduction'],
    process: ['Report design', 'Automation setup', 'Monitoring'],
    deliverables: ['Automated reports'],
    industries: ['All']
  },
  {
    id: 'scenario-planning',
    name: 'Scenario Planning & What-If Analysis',
    description: 'What-if analysis.',
    details: 'Scenario-based planning.',
    price: 'Custom pricing',
    duration: 'Per engagement',
    image: '/services/analytics.jpg',
    features: ['What-if models', 'Risk simulations'],
    benefits: ['Preparedness', 'Strategic flexibility'],
    process: ['Scenario modeling', 'Analysis', 'Review'],
    deliverables: ['Scenario models', 'Analysis reports'],
    industries: ['Startups', 'SMEs', 'Corporates']
  },
  {
    id: 'data-cleaning',
    name: 'Automated Data Cleaning & Integration',
    description: 'Data pipeline automation.',
    details: 'ETL and integration.',
    price: 'Custom pricing',
    duration: 'Implementation phase',
    image: '/services/analytics.jpg',
    features: ['ETL pipelines', 'Data validation', 'Integration with BI tools'],
    benefits: ['Reliable data', 'Cleaner analytics'],
    process: ['Data audit', 'Pipeline creation', 'Testing', 'Deployment'],
    deliverables: ['Clean datasets', 'ETL scripts'],
    industries: ['Finance', 'E-commerce', 'Healthcare']
  }
]

  }
];


export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getSubServiceById = (serviceId: string, subServiceId: string): SubService | undefined => {
  const service = getServiceById(serviceId);
  return service?.subServices.find(subService => subService.id === subServiceId);
};
