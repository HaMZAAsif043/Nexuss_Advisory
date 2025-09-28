"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceItem {
  name: string;
  href: string;
  subServices?: ServiceItem[];
}

const ServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const services: ServiceItem[] = [
    {
      name: "Accounting & Compliance",
      href: "/services/accounting",
      subServices: [
        { name: "General Ledger & Fixed Asset Management", href: "/services/accounting/general-ledger" },
        { name: "Bank, Inventory & Cost Accounting", href: "/services/accounting/bank-inventory" },
        { name: "Financial Statements Preparation", href: "/services/accounting/financial-statements" },
        { name: "Accounting Policy Advisory", href: "/services/accounting/policy-advisory" },
        { name: "Tax Compliance & Advisory", href: "/services/accounting/tax-compliance" },
        { name: "IFRS/GAAP Compliance Support", href: "/services/accounting/ifrs-gaap" }
      ]
    },
    {
      name: "Financial Services",
      href: "/services/financial",
      subServices: [
        { name: "Financial Analysis & Reporting", href: "/services/financial/analysis-reporting" },
        { name: "Budgeting, Forecasting & Scenario Modeling", href: "/services/financial/budgeting-forecasting" },
        { name: "Financial Modeling & Sensitivity Analysis", href: "/services/financial/modeling-analysis" },
        { name: "Cash Flow & Working Capital Management", href: "/services/financial/cash-flow" },
        { name: "Business Dashboards & Performance Analytics", href: "/services/financial/dashboards" },
        { name: "Corporate Finance Support & KPI Monitoring", href: "/services/financial/corporate-finance" }
      ]
    },
    {
      name: "Transactional Advisory",
      href: "/services/transactional",
      subServices: [
        { name: "Mergers & Acquisitions (M&A)", href: "/services/transactional/mergers-acquisitions" },
        { name: "Commercial Due Diligence", href: "/services/transactional/due-diligence" },
        { name: "Valuation (Pre-IPO, Business & Startups)", href: "/services/transactional/valuation" },
        { name: "Investor Documentation & Pitch Decks", href: "/services/transactional/investor-docs" },
        { name: "Restructuring & Turnaround", href: "/services/transactional/restructuring" },
        { name: "Deal Execution & Post-Merger Integration", href: "/services/transactional/deal-execution" }
      ]
    },
    {
      name: "Investment Research & Advisory",
      href: "/services/investment",
      subServices: [
        { name: "Market & Sector Analysis", href: "/services/investment/market-analysis" },
        { name: "Equity & Bond Research", href: "/services/investment/equity-bond" },
        { name: "ESG & Sustainability Analysis", href: "/services/investment/esg-analysis" },
        { name: "Portfolio & Wealth Advisory", href: "/services/investment/portfolio-wealth" },
        { name: "Corporate Investment Advisory", href: "/services/investment/corporate-advisory" },
        { name: "Risk & Return Assessment", href: "/services/investment/risk-assessment" }
      ]
    },
    {
      name: "Data-Driven Insights & Analytics",
      href: "/services/analytics",
      subServices: [
        { name: "Financial & Business Dashboards", href: "/services/analytics/business-dashboards" },
        { name: "Market & Industry Benchmarking Dashboards", href: "/services/analytics/benchmarking" },
        { name: "Predictive Analytics & Future Trend Modeling", href: "/services/analytics/predictive-analytics" },
        { name: "Automated Reporting Solutions", href: "/services/analytics/automated-reporting" },
        { name: "Scenario Planning & What-If Analysis", href: "/services/analytics/scenario-planning" },
        { name: "Automated Data Cleaning & Integration", href: "/services/analytics/data-cleaning" }
      ]
    }
  ];

  return (
    <li 
      className="relative inline-block mx-4 dropdown-container"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => {
        setIsOpen(false);
        setHoveredService(null);
      }}
    >
      <button
        className={`group relative inline-flex items-center space-x-1 text-[#545454] font-medium px-3 py-2 rounded-lg transition-all duration-300
          hover:text-[#0798B1] hover:bg-[#4DC6D7]/10
          after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 
          after:w-0 after:h-[3px] after:bg-gradient-to-r after:from-[#4DC6D7] after:to-[#0798B1] 
          after:transition-all after:duration-300 after:rounded-full
          hover:after:w-full ${isOpen ? "text-[#0798B1] after:w-full bg-[#4DC6D7]/10" : ""}`}
      >
        <span>Solutions</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-[#4DC6D7]/20 services-dropdown overflow-visible"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #f8fcfd 100%)",
              backdropFilter: "blur(10px)",
              zIndex: 99999
            }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#4DC6D7] to-[#0798B1] px-4 py-3">
              <h3 className="text-white font-semibold text-sm">Our Services</h3>
            </div>
            
            <div className="py-2">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  className="relative group"
                  onMouseEnter={() => setHoveredService(service.name)}
                  onMouseLeave={() => setHoveredService(null)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={service.href}
                    className="flex items-center justify-between px-4 py-3 text-[#545454] hover:bg-gradient-to-r hover:from-[#4DC6D7]/10 hover:to-[#0798B1]/5 hover:text-[#0798B1] transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="relative z-10 flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-[#4DC6D7] group-hover:bg-[#0798B1] transition-colors duration-300"></div>
                      <span className="font-medium">{service.name}</span>
                    </div>
                    
                    {service.subServices && (
                      <motion.div
                        animate={{ rotate: hoveredService === service.name ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="relative z-10"
                      >
                        <ChevronDown className="w-4 h-4 text-[#4DC6D7] rotate-[-90deg]" />
                      </motion.div>
                    )}
                  </Link>

                  {/* Sub-services dropdown to the right */}
                  <AnimatePresence>
                    {hoveredService === service.name && service.subServices && (
                      <motion.div
                        initial={{ opacity: 0, x: -20, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -20, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="fixed top-0 left-full w-72 bg-white rounded-xl shadow-2xl border border-[#4DC6D7]/20 overflow-hidden"
                        style={{
                          background: "linear-gradient(135deg, #ffffff 0%, #f0f9fa 100%)",
                          backdropFilter: "blur(10px)",
                          zIndex: 100000,
                          marginLeft: '8px'
                        }}
                        onMouseEnter={() => setHoveredService(service.name)}
                        onMouseLeave={() => setHoveredService(null)}
                      >
                        {/* Sub-header */}
                        <div className="bg-gradient-to-r from-[#0798B1] to-[#4DC6D7] px-4 py-3">
                          <h4 className="text-white font-semibold text-sm">{service.name}</h4>
                          <p className="text-white/80 text-xs mt-1">{service.subServices.length} specialized services</p>
                        </div>
                        
                        <div className="py-3 max-h-80 overflow-y-auto">
                          <div className="space-y-1">
                            {service.subServices.map((subService, subIndex) => (
                              <motion.div
                                key={subService.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: subIndex * 0.03, duration: 0.2 }}
                              >
                                <Link
                                  href={service.href}
                                  className="group flex items-center space-x-3 px-4 py-2 text-[#545454]/80 hover:bg-gradient-to-r hover:from-[#4DC6D7]/10 hover:to-transparent hover:text-[#0798B1] transition-all duration-300 relative overflow-hidden"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#4DC6D7]/50 group-hover:bg-[#4DC6D7] transition-colors duration-300 flex-shrink-0"></div>
                                  <span className="text-sm font-medium">{subService.name}</span>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                          
                          {/* View All Link for this category */}
                          <div className="border-t border-[#4DC6D7]/20 mt-3 pt-3 mx-4">
                            <Link
                              href={service.href}
                              className="group flex items-center justify-between text-[#4DC6D7] font-semibold hover:text-[#0798B1] transition-all duration-300"
                            >
                              <span className="text-sm">View All {service.name.split(' ')[0]} Services</span>
                              <motion.span
                                animate={{ x: [0, 3, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="text-sm"
                              >
                                →
                              </motion.span>
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
              
              <div className="border-t border-[#4DC6D7]/20 mt-2 pt-2 bg-gradient-to-r from-[#4DC6D7]/5 to-transparent">
                <Link
                  href="/services"
                  className="group flex items-center justify-between px-4 py-3 text-[#4DC6D7] font-semibold hover:bg-gradient-to-r hover:from-[#4DC6D7]/10 hover:to-[#0798B1]/5 hover:text-[#0798B1] transition-all duration-300 relative overflow-hidden rounded-lg mx-2"
                >
                  <span>View All Services</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-lg"
                  >
                    →
                  </motion.span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

export default ServicesDropdown;
