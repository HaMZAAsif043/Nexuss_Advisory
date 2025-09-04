"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AuditSection = () => {
  const services = [
  {
    title: "Personal financial planning & wealth management",
    description: "Helping you create and manage a sustainable financial future",
  },
  {
    title: "Tax planning & compliance support",
    description: "Optimizing tax strategies while ensuring compliance",
  },
  {
    title: "Investment research & portfolio optimisation",
    description: "Maximizing returns with data-driven investment strategies",
  },
  {
    title: "Coaching for ACCA, CA, CFA & business/finance students",
    description: "Guidance and mentorship for professional growth",
  },
  {
    title: "Business advisory & financial consultancy",
    description: "Expert advice for businesses and entrepreneurs",
  },
];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Audit Analysis - Financial Documents"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
            </div>
            
            {/* Floating Info Card */}
            <motion.div 
              className="absolute -top-6 -right-6 bg-white rounded-lg shadow-xl p-6 max-w-xs"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ amount: 0.3 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#4DC6D7]/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#4DC6D7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#545454]">Audit Success</div>
                  <div className="text-xs text-[#545454]/80">98% Resolution Rate</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#545454] mb-6">
             For Individuals 
            </h2>
            <p className="text-[#545454]/80 mb-6 leading-relaxed">
              We empower individuals to take control of their financial future and career growth. From wealth management to professional coaching, our services help you plan smarter, invest better, and succeed in business and finance.
            Personal financial planning & wealth management
            </p>
            
               <div className="space-y-4 mb-8">
       {services.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center text-[#545454]/90"
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                      <motion.svg
                        className="w-5 h-5 text-[#4DC6D7] mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </motion.svg>
                      {item?.title}
                    </motion.li>
                  ))}
    </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                className="border border-[#4DC6D7] text-[#4DC6D7] hover:bg-[#4DC6D7] hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ amount: 0.3 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Free Consultation
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditSection;
