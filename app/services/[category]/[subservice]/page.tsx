"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowLeft, CheckCircle, Phone, Mail, Calendar } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface SubServicePageProps {
  params: {
    category: string;
    subservice: string;
  };
}

const SubServicePage = ({ params }: SubServicePageProps) => {
  const { category, subservice } = params;

  // Define interfaces for our data structure
  interface ServiceFeature {
    title: string;
    description: string;
    image: string;
    color: string;
    price: string;
    duration: string;
    overview: string;
    features: string[];
    benefits: string[];
    process: string[];
    deliverables: string[];
    industries: string[];
  }

  // Sub-service detailed data
  const subServiceData: Record<string, Record<string, ServiceFeature>> = {
    accounting: {
      quickbooks: {
        title: "QuickBooks Setup & Management",
        description: "Complete QuickBooks implementation and ongoing management for seamless accounting operations.",
        image: "/services/quickbooks.jpg",
        color: "#4DC6D7",
        price: "Starting at $299/month",
        duration: "Ongoing monthly service",
        overview: "Our certified QuickBooks professionals provide comprehensive setup, data migration, and ongoing management to ensure your accounting system operates flawlessly. We handle everything from initial configuration to advanced reporting, allowing you to focus on your business while we manage your books.",
        features: [
          "Complete QuickBooks setup and configuration",
          "Historical data migration and cleanup",
          "Chart of accounts optimization",
          "Monthly bookkeeping and reconciliation",
          "Custom reporting setup",
          "User training and support",
          "Bank and credit card integration",
          "Inventory management setup",
          "Payroll integration",
          "Tax preparation support"
        ],
        benefits: [
          "Automated financial processes",
          "Real-time financial visibility",
          "Reduced manual data entry",
          "Improved accuracy and compliance",
          "Time savings for business owners",
          "Streamlined tax preparation"
        ],
        process: [
          "Initial consultation and needs assessment",
          "QuickBooks setup and configuration",
          "Data migration and historical cleanup",
          "Team training and documentation",
          "Ongoing monthly management",
          "Regular reviews and optimization"
        ],
        deliverables: [
          "Fully configured QuickBooks system",
          "Clean, organized financial data",
          "Custom financial reports",
          "Monthly financial statements",
          "Training materials and documentation",
          "Ongoing support and maintenance"
        ],
        industries: [
          "Professional Services",
          "Retail and E-commerce",
          "Construction and Contractors",
          "Healthcare Practices",
          "Non-profit Organizations",
          "Manufacturing"
        ]
      },
      payable: {
        title: "Accounts Payable Services",
        description: "Streamlined vendor payment processing and expense management systems.",
        image: "/services/accounts-payable.jpg",
        color: "#4DC6D7",
        price: "Starting at $199/month",
        duration: "Monthly service",
        overview: "Our accounts payable services streamline your vendor payment process, ensuring timely payments while maintaining positive vendor relationships and optimizing cash flow management.",
        features: [
          "Invoice processing and approval workflows",
          "Vendor management and onboarding",
          "Payment scheduling and processing",
          "Expense categorization and coding",
          "Three-way matching (PO, receipt, invoice)",
          "Cash flow optimization",
          "Vendor statement reconciliation",
          "Early payment discount management",
          "1099 preparation and filing",
          "Detailed reporting and analytics"
        ],
        benefits: [
          "Improved vendor relationships",
          "Better cash flow management",
          "Reduced processing errors",
          "Time savings for staff",
          "Enhanced financial controls",
          "Cost savings through discounts"
        ],
        process: [
          "Current process assessment",
          "Workflow design and implementation",
          "Vendor data setup and migration",
          "Staff training and transition",
          "Ongoing processing and management",
          "Monthly reporting and review"
        ],
        deliverables: [
          "Streamlined AP workflows",
          "Vendor database management",
          "Monthly AP aging reports",
          "Cash flow forecasts",
          "Payment processing schedules",
          "Annual 1099 preparation"
        ],
        industries: [
          "Professional Services",
          "Retail and Distribution",
          "Construction",
          "Healthcare",
          "Technology Companies",
          "Manufacturing"
        ]
      }
    },
    financial: {
      budgeting: {
        title: "Budgeting & Planning",
        description: "Comprehensive budget development and financial planning services.",
        image: "/services/budgeting.jpg",
        color: "#2D5AA0",
        price: "Starting at $1,500",
        duration: "Initial setup + monthly reviews",
        overview: "Our budgeting and planning services help you create realistic, actionable financial plans that drive business growth and ensure financial stability.",
        features: [
          "Annual budget development",
          "Monthly budget vs. actual analysis",
          "Cash flow forecasting",
          "Scenario planning and modeling",
          "KPI identification and tracking",
          "Capital expenditure planning",
          "Revenue forecasting",
          "Expense optimization analysis",
          "Financial dashboard creation",
          "Regular review meetings"
        ],
        benefits: [
          "Improved financial control",
          "Better decision making",
          "Enhanced business planning",
          "Risk mitigation",
          "Performance tracking",
          "Growth planning"
        ],
        process: [
          "Historical analysis and assessment",
          "Goal setting and planning",
          "Budget model development",
          "Review and refinement",
          "Implementation and monitoring",
          "Regular updates and adjustments"
        ],
        deliverables: [
          "Comprehensive annual budget",
          "Monthly variance reports",
          "Cash flow projections",
          "Financial dashboards",
          "KPI tracking reports",
          "Strategic recommendations"
        ],
        industries: [
          "Professional Services",
          "Technology Startups",
          "Healthcare Practices",
          "Retail Businesses",
          "Manufacturing",
          "Non-profit Organizations"
        ]
      }
    }
  };

  const categoryData = subServiceData[category];
  if (!categoryData) {
    notFound();
  }

  const service = categoryData[subservice];
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
            <Link href={`/services/${category}`} className="hover:text-[#4DC6D7] capitalize">{category}</Link>
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
              <Link 
                href={`/services/${category}`}
                className="inline-flex items-center space-x-2 text-[#545454]/70 hover:text-[#4DC6D7] mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to {category} services</span>
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold text-[#545454] mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-[#545454]/80 mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-sm text-[#545454]/70 mb-1">Starting Price</div>
                  <div className="text-lg font-semibold" style={{ color: service.color }}>
                    {service.price}
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-sm text-[#545454]/70 mb-1">Duration</div>
                  <div className="text-lg font-semibold text-[#545454]">
                    {service.duration}
                  </div>
                </div>
              </div>

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
                  Get Started Today
                </button>
                <Link 
                  href="/contacts"
                  className="border-2 text-[#545454] px-8 py-4 rounded-lg font-semibold hover:bg-[#545454] hover:text-white transition-all duration-300"
                  style={{ borderColor: service.color }}
                >
                  Schedule Consultation
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
                <h2 className="text-3xl font-bold text-[#545454] mb-6">Service Overview</h2>
                <p className="text-[#545454]/80 text-lg leading-relaxed mb-8">
                  {service.overview}
                </p>

                <h3 className="text-2xl font-bold text-[#545454] mb-6">What&apos;s Included</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-12">
                  {service.features.map((feature: string, index: number) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      viewport={{ amount: 0.3 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-[#545454]/80">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-[#545454] mb-6">Industries We Serve</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {service.industries.map((industry: string, index: number) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      viewport={{ amount: 0.3 }}
                    >
                      <span className="text-[#545454] font-medium">{industry}</span>
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
                <h3 className="text-xl font-bold text-[#545454] mb-6">Get Started</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5" style={{ color: service.color }} />
                    <span className="text-[#545454]/80">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5" style={{ color: service.color }} />
                    <span className="text-[#545454]/80">info@nexussadvisory.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5" style={{ color: service.color }} />
                    <span className="text-[#545454]/80">Free Consultation</span>
                  </div>
                </div>

                <button 
                  className="w-full text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 mb-4"
                  style={{ backgroundColor: service.color }}
                >
                  Schedule Consultation
                </button>
                
                <button className="w-full border-2 text-[#545454] py-3 px-6 rounded-lg font-semibold hover:bg-[#545454] hover:text-white transition-all duration-300"
                  style={{ borderColor: service.color }}
                >
                  Download Brochure
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Process */}
      <section className="py-16 bg-[#545454]/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-[#545454] mb-8">Key Benefits</h2>
              <div className="space-y-6">
                {service.benefits.map((benefit: string, index: number) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ amount: 0.3 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{ backgroundColor: service.color }}
                      ></div>
                      <span className="text-[#545454] text-lg font-medium">{benefit}</span>
                    </div>
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
                    <div className="bg-white rounded-lg p-4 shadow-sm flex-1">
                      <span className="text-[#545454] text-lg">{step}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-[#545454] mb-4">What You&apos;ll Receive</h2>
            <p className="text-[#545454]/80 max-w-2xl mx-auto">
              Our comprehensive service includes all the deliverables you need for success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.deliverables.map((deliverable: string, index: number) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ amount: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-[#545454] font-medium">{deliverable}</span>
                </div>
              </motion.div>
            ))}
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
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ amount: 0.3 }}
          >
            Contact our experts today to learn how {service.title} can drive your business forward.
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
                Schedule Free Consultation
              </motion.button>
            </Link>
            <motion.button 
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#545454] transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Call (555) 123-4567
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default SubServicePage;
