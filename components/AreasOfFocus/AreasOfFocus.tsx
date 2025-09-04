"use client"
import React from 'react';
import { motion } from 'framer-motion';

const AreasOfFocus = () => {
  const focusAreas = [
    {
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      title: "Accounting & Compliance",
      description: "Comprehensive financial strategies tailored to your goals"
    },
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: " Financial Services", 
      description: "Expert guidance on investment opportunities and portfolio management"
    },
    {
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
      title: "Transactional Advisory",
      description: "Strategic tax planning to maximize your financial efficiency"
    },
    {
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
      title: "Investment research & Advisory",
      description: "Strategic tax planning to maximize your financial efficiency"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[#545454] mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ amount: 0.3 }}
          >
            Areas Of Focus
          </motion.h2>
          
          {/* Focus Areas Grid */}
          <motion.div 
            className="grid md:grid-cols-4 gap-20 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
          >
            {focusAreas.map((area, index) => (
              <motion.div 
                key={index}
                className="text-center group cursor-pointer"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-[#4DC6D7]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#4DC6D7]/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <svg className="w-8 h-8 text-[#4DC6D7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={area.icon} />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-semibold text-[#545454] mb-2 group-hover:text-[#4DC6D7] transition-colors duration-300">
                  {area.title}
                </h3>
                <p className="text-[#545454]/80 group-hover:text-[#545454]/90 transition-colors duration-300">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AreasOfFocus;
