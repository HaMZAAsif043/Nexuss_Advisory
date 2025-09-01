"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Hero Background - Professional Business Meeting"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ amount: 0.3 }}
            >
              Plan for tomorrow,<br />
              live for today!
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-8 text-gray-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ amount: 0.3 }}
            >
              Professional financial advisory services to help you secure your future while enjoying the present.
            </motion.p>
            <motion.button 
              className="bg-[#4DC6D7] hover:bg-[#3bb5c6] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              viewport={{ amount: 0.3 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>

          {/* Right Content - Calendar */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
          >
            <motion.div 
              className="bg-white rounded-lg shadow-xl p-6 max-w-sm w-full"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">September 2025</h3>
              </div>
              
              {/* Calendar Grid */}
              <motion.div 
                className="grid grid-cols-7 gap-1 text-sm"
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.02
                    }
                  }
                }}
              >
                {/* Day Headers */}
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day,) => (
                  <motion.div 
                    key={day} 
                    className="text-center text-gray-500 font-medium py-2"
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 }
                    }}
                  >
                    {day}
                  </motion.div>
                ))}
                
                {/* Calendar Days */}
                {Array.from({ length: 35 }, (_, i) => {
                  const day = i - 6; // Adjust for month start
                  const isCurrentMonth = day > 0 && day <= 30;
                  const isToday = day === 1; // September 1st
                  
                  return (
                    <motion.div
                      key={i}
                      className={`
                        text-center py-2 cursor-pointer rounded
                        ${isCurrentMonth 
                          ? isToday 
                            ? 'bg-[#4DC6D7] text-white font-semibold shadow-md' 
                            : 'text-gray-800 hover:bg-gray-100'
                          : 'text-gray-300'
                        }
                      `}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      whileHover={isCurrentMonth ? { scale: 1.1 } : {}}
                    >
                      {isCurrentMonth ? day : ''}
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
