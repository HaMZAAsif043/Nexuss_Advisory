"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, Star, Users, Clock, Award } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface SubService {
  name: string;
  description: string;
  href: string;
}

interface Service {
  title: string;
  subServices: SubService[];
  color: string;
  icon: React.ReactNode | string;
  description: string;
  image: string;
  features: string[];
}

const ServicesPage = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services: Service[] = [
    {
      title: "Accounting & BookKeeping",
      color: "#4DC6D7",
      icon: "📊",
      description: "Comprehensive accounting solutions to keep your finances organized and compliant.",
      image: "/services/accounting.jpg",
      features: ["Real-time reporting", "Tax compliance", "Automated processes", "Expert support"],
      subServices: [
        { 
          name: "QuickBooks Setup", 
          description: "Professional QuickBooks implementation and management for seamless accounting.",
          href: "/services/accounting/quickbooks"
        },
        { 
          name: "Accounts Payable", 
          description: "Streamlined vendor payment processing and expense management systems.",
          href: "/services/accounting/payable"
        },
        { 
          name: "Accounts Receivable", 
          description: "Efficient customer billing and payment collection processes.",
          href: "/services/accounting/receivable"
        },
        { 
          name: "Tax Management", 
          description: "Comprehensive tax preparation, planning, and compliance services.",
          href: "/services/accounting/tax"
        },
        { 
          name: "Payroll Management", 
          description: "Complete payroll processing and employee benefit administration.",
          href: "/services/accounting/payroll"
        },
        { 
          name: "Bank Reconciliation", 
          description: "Accurate bank statement reconciliation and cash flow monitoring.",
          href: "/services/accounting/reconciliation"
        }
      ]
    },
    {
      title: "Financial Services",
      color: "#0798B1",
      icon: "💰",
      description: "Strategic financial planning and analysis to drive your business growth.",
      image: "/services/financial-planning.jpg",
      features: ["Strategic planning", "Risk assessment", "Performance optimization", "Data-driven insights"],
      subServices: [
        { 
          name: "Budgeting & Planning", 
          description: "Comprehensive budget development and financial planning services.",
          href: "/services/financial/budgeting"
        },
        { 
          name: "Cash Flow Management", 
          description: "Optimize cash flow with strategic planning and monitoring tools.",
          href: "/services/financial/cashflow"
        },
        { 
          name: "Treasury Management", 
          description: "Professional treasury operations and liquidity management.",
          href: "/services/financial/treasury"
        },
        { 
          name: "Risk Management", 
          description: "Identify, assess, and mitigate financial risks effectively.",
          href: "/services/financial/risk"
        },
        { 
          name: "Financial Analytics", 
          description: "Advanced financial analysis and performance measurement.",
          href: "/services/financial/analytics"
        },
        { 
          name: "Capital Allocation", 
          description: "Strategic capital deployment for maximum ROI optimization.",
          href: "/services/financial/capital"
        }
      ]
    },
    {
      title: "Investment Research",
      color: "#545454",
      icon: "📈",
      description: "In-depth investment analysis and research for informed decision-making.",
      image: "/services/investment-research.jpg",
      features: ["Market analysis", "Portfolio optimization", "ESG integration", "Risk assessment"],
      subServices: [
        { 
          name: "Equity Research", 
          description: "Comprehensive equity analysis and investment recommendations.",
          href: "/services/investment/equity"
        },
        { 
          name: "Portfolio Optimization", 
          description: "Advanced portfolio construction and optimization strategies.",
          href: "/services/investment/portfolio"
        },
        { 
          name: "ESG Analysis", 
          description: "Environmental, Social, and Governance investment evaluation.",
          href: "/services/investment/esg"
        },
        { 
          name: "Risk Analysis", 
          description: "Detailed investment risk assessment and management.",
          href: "/services/investment/risk"
        },
        { 
          name: "Sector Research", 
          description: "Industry-specific research and thematic investment analysis.",
          href: "/services/investment/sector"
        },
        { 
          name: "Performance Analysis", 
          description: "Investment performance measurement and attribution analysis.",
          href: "/services/investment/performance"
        }
      ]
    },
    {
      title: "Business Advisory",
      color: "#2D5AA0",
      icon: "🎯",
      description: "Strategic business consulting to accelerate your company's growth.",
      image: "/services/business-consulting.jpg",
      features: ["Strategic guidance", "M&A expertise", "Valuation services", "Growth planning"],
      subServices: [
        { 
          name: "Strategic Planning", 
          description: "Comprehensive business strategy development and execution.",
          href: "/services/business/strategy"
        },
        { 
          name: "M&A Support", 
          description: "Complete merger and acquisition advisory services.",
          href: "/services/business/ma"
        },
        { 
          name: "Due Diligence", 
          description: "Thorough business and financial due diligence processes.",
          href: "/services/business/diligence"
        },
        { 
          name: "Valuation Services", 
          description: "Professional business valuation and appraisal services.",
          href: "/services/business/valuation"
        },
        { 
          name: "Business Coaching", 
          description: "Executive coaching and leadership development programs.",
          href: "/services/business/coaching"
        },
        { 
          name: "Succession Planning", 
          description: "Strategic succession planning and family business advisory.",
          href: "/services/business/succession"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#545454] mb-6">
            Our Services
          </h1>
          <p className="text-xl text-[#545454]/80 max-w-4xl mx-auto leading-relaxed">
            Comprehensive financial and business solutions designed to drive your success. 
            From accounting to advanced analytics, we provide expert services tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid - Modern Card Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ amount: 0.3 }}
              whileHover={{ scale: 1.02, y: -8 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Header Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 2}
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                />
                <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-lg backdrop-blur-sm border border-white/20"
                    style={{ backgroundColor: `${service.color}20`, color: service.color }}
                  >
                    {service.icon}
                  </div>
                  <div className="text-white">
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-sm opacity-90">{service.subServices.length} Services</p>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <p className="text-[#545454]/80 text-lg mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-3 py-1 bg-gray-100 text-[#545454] text-sm rounded-full"
                      style={{ 
                        backgroundColor: hoveredCard === index ? `${service.color}20` : undefined,
                        color: hoveredCard === index ? service.color : undefined
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* View Services Button */}
                <motion.div
                  className="flex items-center justify-between"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-').replace('&', '')}`}
                    className="group/btn flex items-center space-x-2 font-semibold transition-colors duration-300"
                    style={{ color: service.color }}
                    as={`/services/${service.title.toLowerCase().replace(/\s+/g, '-').replace('&', '')}`}
                  >
                    <span>Explore Services</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                  
                  <div className="flex items-center space-x-1 text-sm text-[#545454]/60">
                    <Users className="w-4 h-4" />
                    <span>Expert Team</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sub-Services Showcase */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#545454] mb-4">
              Specialized Sub-Services
            </h2>
            <p className="text-lg text-[#545454]/80 max-w-3xl mx-auto">
              Dive deeper into our specialized services designed to address your specific business needs.
            </p>
          </div>

          {/* Sub-Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 2).map((service) => 
              service.subServices.slice(0, 3).map((subService, subIndex) => (
                <motion.div
                  key={`${service.title}-${subIndex}`}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: subIndex * 0.1 }}
                  viewport={{ amount: 0.3 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${service.color}20` }}
                    >
                      <ChevronRight 
                        className="w-5 h-5"
                        style={{ color: service.color }}
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-[#545454] mb-2 group-hover:text-[#0798B1] transition-colors duration-300">
                        {subService.name}
                      </h4>
                      <p className="text-[#545454]/70 text-sm leading-relaxed">
                        {subService.description}
                      </p>
                      <Link
                        href={subService.href}
                        className="inline-flex items-center space-x-1 mt-3 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300"
                        style={{ color: service.color }}
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
        >
          {[
            { icon: Users, number: "500+", label: "Happy Clients" },
            { icon: Star, number: "15+", label: "Years Experience" },
            { icon: Award, number: "50+", label: "Expert Advisors" },
            { icon: Clock, number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ amount: 0.3 }}
              whileHover={{ y: -4 }}
            >
              <div className="w-16 h-16 bg-[#4DC6D7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-[#4DC6D7]" />
              </div>
              <h3 className="text-2xl font-bold text-[#545454] mb-2">{stat.number}</h3>
              <p className="text-[#545454]/70">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
        >
          <div className="bg-gradient-to-r from-[#4DC6D7] via-[#0798B1] to-[#545454] rounded-2xl p-8 text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Let&apos;s discuss how our comprehensive services can drive your success forward. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="bg-white text-[#4DC6D7] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.button>
              <motion.button 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#4DC6D7] transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
