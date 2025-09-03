"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle, Users, Clock, Award, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ServicePageProps {
  params: {
    category: string;
  };
}

interface SubService {
  name: string;
  description: string;
  details: string;
  price: string;
  duration: string;
}

interface ServiceData {
  title: string;
  description: string;
  image: string;
  color: string;
  icon: string;
  overview: string;
  features: string[];
  subServices: SubService[];
  benefits: string[];
  process: string[];
}

const ServiceCategoryPage = ({ params }: ServicePageProps) => {
  const { category } = params;

  // Service data structure
  const serviceData: Record<string, ServiceData> = {
    accounting: {
      title: "Accounting & BookKeeping",
      description: "Comprehensive accounting solutions to keep your business finances organized and compliant.",
      image: "/services/accounting.jpg",
      color: "#4DC6D7",
      icon: "📊",
      overview: "Our accounting and bookkeeping services provide the foundation for your business's financial success. We ensure accuracy, compliance, and strategic insights to drive your growth.",
      features: [
        "Real-time financial reporting",
        "Tax compliance and preparation",
        "Cash flow management",
        "Monthly financial statements",
        "Payroll processing",
        "Accounts payable/receivable"
      ],
      subServices: [
        {
          name: "QuickBooks Setup & Management",
          description: "Complete QuickBooks implementation and ongoing management for seamless accounting operations.",
          details: "Our certified QuickBooks professionals will set up your system, migrate historical data, and provide ongoing support to ensure your books are always accurate and up-to-date.",
          price: "Starting at $299/month",
          duration: "Ongoing monthly service"
        },
        {
          name: "Accounts Payable Services",
          description: "Streamlined vendor payment processing and expense management systems.",
          details: "We handle all aspects of your accounts payable process, from invoice processing to payment scheduling, ensuring timely payments and maintaining good vendor relationships.",
          price: "Starting at $199/month",
          duration: "Monthly service"
        },
        {
          name: "Accounts Receivable Services",
          description: "Efficient customer invoicing and payment collection management.",
          details: "Our AR services include invoice generation, payment tracking, collection follow-ups, and customer account management to optimize your cash flow.",
          price: "Starting at $249/month",
          duration: "Monthly service"
        },
        {
          name: "Tax Management & Preparation",
          description: "Comprehensive tax planning and preparation services for businesses and individuals.",
          details: "Year-round tax planning and preparation services to minimize your tax liability while ensuring full compliance with all regulations.",
          price: "Starting at $500",
          duration: "Annual service"
        }
      ],
      benefits: [
        "Improved financial accuracy",
        "Time savings for business owners",
        "Better cash flow management",
        "Tax compliance assurance"
      ],
      process: [
        "Initial consultation and assessment",
        "System setup and data migration",
        "Ongoing monthly bookkeeping",
        "Regular financial reporting",
        "Annual tax preparation"
      ]
    },
    financial: {
      title: "Financial Services",
      description: "Strategic financial planning and management services to optimize your business performance.",
      image: "/services/financial.jpg",
      color: "#2D5AA0",
      icon: "💰",
      overview: "Our financial services help you make informed decisions about your business's financial future through strategic planning, analysis, and optimization.",
      features: [
        "Financial planning and analysis",
        "Budget development and monitoring",
        "Cash flow forecasting",
        "Investment analysis",
        "Risk management",
        "Performance dashboards"
      ],
      subServices: [
        {
          name: "Budgeting & Planning",
          description: "Comprehensive budget development and financial planning services.",
          details: "We work with you to create realistic budgets, forecast future performance, and develop strategic financial plans that align with your business goals.",
          price: "Starting at $1,500",
          duration: "Initial setup + monthly reviews"
        },
        {
          name: "Cash Flow Management",
          description: "Optimize your cash flow through strategic planning and monitoring.",
          details: "Our cash flow management services include forecasting, optimization strategies, and regular monitoring to ensure healthy business operations.",
          price: "Starting at $899/month",
          duration: "Monthly service"
        },
        {
          name: "Treasury Management",
          description: "Professional treasury and liquidity management solutions.",
          details: "Comprehensive treasury services including liquidity management, banking relationships, and investment strategies for excess cash.",
          price: "Starting at $2,500/month",
          duration: "Monthly service"
        }
      ],
      benefits: [
        "Better financial decision making",
        "Improved cash flow visibility",
        "Risk mitigation strategies",
        "Strategic growth planning"
      ],
      process: [
        "Financial assessment and analysis",
        "Strategic planning development",
        "Implementation and monitoring",
        "Regular reviews and adjustments"
      ]
    },
    investment: {
      title: "Investment Research",
      description: "Professional investment research and analysis services for informed decision making.",
      image: "/services/investment.jpg",
      color: "#7B68EE",
      icon: "📈",
      overview: "Our investment research services provide comprehensive analysis and insights to support your investment decisions and portfolio management strategies.",
      features: [
        "Equity research and analysis",
        "Market trend analysis",
        "Portfolio optimization",
        "Risk assessment",
        "ESG analysis",
        "Performance reporting"
      ],
      subServices: [
        {
          name: "Equity Research Reports",
          description: "Detailed equity research and investment recommendations.",
          details: "Comprehensive analysis of individual stocks and sectors with detailed reports including financial modeling, valuation, and investment recommendations.",
          price: "Starting at $2,500/report",
          duration: "Per report or monthly subscription"
        },
        {
          name: "Portfolio Optimization",
          description: "Strategic portfolio analysis and optimization services.",
          details: "We analyze your current portfolio and provide recommendations for optimization based on your risk tolerance, investment goals, and market conditions.",
          price: "Starting at $5,000",
          duration: "Quarterly reviews"
        },
        {
          name: "ESG Analysis",
          description: "Environmental, Social, and Governance investment analysis.",
          details: "Comprehensive ESG screening and analysis to align your investments with your values while maintaining strong financial performance.",
          price: "Starting at $1,500/analysis",
          duration: "Per analysis"
        }
      ],
      benefits: [
        "Data-driven investment decisions",
        "Risk-adjusted returns",
        "Market insight and timing",
        "Diversified portfolio strategies"
      ],
      process: [
        "Investment objectives assessment",
        "Market research and analysis",
        "Portfolio construction",
        "Ongoing monitoring and rebalancing"
      ]
    },
    business: {
      title: "Business Advisory",
      description: "Strategic business consulting services to drive growth and operational excellence.",
      image: "/services/business.jpg",
      color: "#FF6B35",
      icon: "🤝",
      overview: "Our business advisory services help companies navigate complex challenges, identify growth opportunities, and implement strategic solutions for sustainable success.",
      features: [
        "Strategic planning",
        "M&A advisory",
        "Due diligence",
        "Business valuation",
        "Operational improvement",
        "Change management"
      ],
      subServices: [
        {
          name: "Strategic Planning",
          description: "Comprehensive strategic planning and execution support.",
          details: "We work with your leadership team to develop strategic plans that align with your vision, assess market opportunities, and create actionable roadmaps for growth.",
          price: "Starting at $10,000",
          duration: "3-6 month engagement"
        },
        {
          name: "M&A Support",
          description: "End-to-end merger and acquisition advisory services.",
          details: "Complete M&A support from initial strategy through closing, including target identification, due diligence, valuation, and integration planning.",
          price: "Contact for pricing",
          duration: "6-18 months"
        },
        {
          name: "Business Valuation",
          description: "Professional business valuation services for various purposes.",
          details: "Accurate business valuations for M&A transactions, financial reporting, tax purposes, or strategic planning using industry-standard methodologies.",
          price: "Starting at $5,000",
          duration: "4-6 weeks"
        }
      ],
      benefits: [
        "Strategic clarity and direction",
        "Improved operational efficiency",
        "Enhanced market position",
        "Sustainable growth strategies"
      ],
      process: [
        "Business assessment and analysis",
        "Strategy development",
        "Implementation planning",
        "Execution support and monitoring"
      ]
    }
  };

  const service = serviceData[category];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-[#545454]/70">
            <Link href="/" className="hover:text-[#4DC6D7]">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#4DC6D7]">Services</Link>
            <span>/</span>
            <span className="text-[#545454]">{service.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <motion.section 
        className="relative py-20"
        style={{ backgroundColor: `${service.color}15` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shadow-lg"
                  style={{ backgroundColor: service.color }}
                >
                  {service.icon}
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-[#545454]">
                    {service.title}
                  </h1>
                </div>
              </div>
              <p className="text-xl text-[#545454]/80 mb-8 leading-relaxed">
                {service.description}
              </p>
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <button 
                  className="text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-lg"
                  style={{ backgroundColor: service.color }}
                >
                  Get Started
                </button>
                <Link 
                  href="/contacts"
                  className="border-2 text-[#545454] px-8 py-4 rounded-lg font-semibold hover:bg-[#545454] hover:text-white transition-all duration-300"
                  style={{ borderColor: service.color }}
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ amount: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-[#545454] mb-6">Overview</h2>
                <p className="text-[#545454]/80 text-lg leading-relaxed mb-8">
                  {service.overview}
                </p>

                <h3 className="text-2xl font-bold text-[#545454] mb-6">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.features.map((feature: string, index: number) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      viewport={{ amount: 0.3 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-[#545454]/80">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div>
              <motion.div
                className="bg-white rounded-2xl shadow-lg p-8 sticky top-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ amount: 0.3 }}
              >
                <h3 className="text-xl font-bold text-[#545454] mb-6">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5" style={{ color: service.color }} />
                    <span className="text-[#545454]/80">Expert Team</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5" style={{ color: service.color }} />
                    <span className="text-[#545454]/80">24/7 Support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5" style={{ color: service.color }} />
                    <span className="text-[#545454]/80">Certified Professionals</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-5 h-5" style={{ color: service.color }} />
                    <span className="text-[#545454]/80">Proven Results</span>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <button 
                    className="w-full text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-all duration-300"
                    style={{ backgroundColor: service.color }}
                  >
                    Request Consultation
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-services */}
      <section className="py-16 bg-[#545454]/5">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-[#545454] mb-4">Our Services</h2>
            <p className="text-[#545454]/80 max-w-2xl mx-auto">
              Choose from our comprehensive range of specialized services designed to meet your specific needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.subServices.map((subService: SubService, index: number) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ amount: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-[#545454] mb-4">{subService.name}</h3>
                <p className="text-[#545454]/80 mb-4 leading-relaxed">{subService.description}</p>
                <p className="text-sm text-[#545454]/70 mb-6">{subService.details}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#545454]/70">Starting Price:</span>
                    <span className="font-semibold" style={{ color: service.color }}>{subService.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#545454]/70">Duration:</span>
                    <span className="text-sm text-[#545454]">{subService.duration}</span>
                  </div>
                </div>

                <button 
                  className="w-full text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-all duration-300"
                  style={{ backgroundColor: service.color }}
                >
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-[#545454] mb-8">Benefits</h2>
              <div className="space-y-4">
                {service.benefits.map((benefit: string, index: number) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ amount: 0.3 }}
                  >
                    <div 
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ backgroundColor: service.color }}
                    ></div>
                    <span className="text-[#545454]/80 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-[#545454] mb-8">Our Process</h2>
              <div className="space-y-6">
                {service.process.map((step: string, index: number) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ amount: 0.3 }}
                  >
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                      style={{ backgroundColor: service.color }}
                    >
                      {index + 1}
                    </div>
                    <span className="text-[#545454]/80 text-lg pt-1">{step}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 text-white"
        style={{ backgroundColor: service.color }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.3 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ amount: 0.3 }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ amount: 0.3 }}
          >
            Contact our team today to discuss how our {service.title.toLowerCase()} services can help your business succeed.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ amount: 0.3 }}
          >
            <Link href="/contacts">
              <motion.button 
                className="bg-white text-[#545454] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
              </motion.button>
            </Link>
            <motion.button 
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#545454] transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Brochure
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ServiceCategoryPage;
