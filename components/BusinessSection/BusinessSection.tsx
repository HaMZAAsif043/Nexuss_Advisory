"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const BusinessSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.3 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ amount: 0.3 }}
            >
              For businesses &<br />
              organizations
            </motion.h2>
            <motion.p 
              className="text-gray-600 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ amount: 0.3 }}
            >
              We provide comprehensive financial advisory services tailored specifically for businesses and organizations. 
              Our expert team helps you navigate complex financial landscapes and make informed decisions that drive growth.
            </motion.p>
            
            <motion.ul 
              className="space-y-3 mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.4 }
                }
              }}
            >
              {[
                "Strategic financial planning and analysis",
                "Risk management and compliance", 
                "Mergers and acquisitions advisory"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center text-gray-700"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </motion.svg>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            
            <motion.button 
              className="bg-[#4DC6D7] hover:bg-[#3bb5c6] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ amount: 0.3 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ amount: 0.3 }}
          >
            <motion.div 
              className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80"
                alt="Business Advisory - Team Meeting"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
            </motion.div>
            
            {/* Floating Stats Card */}
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-6 max-w-xs"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ amount: 0.3 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-center">
                <motion.div 
                  className="text-3xl font-bold text-[#4DC6D7]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  viewport={{}}
                >
                  500+
                </motion.div>
                <div className="text-gray-600 text-sm">Businesses Served</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
