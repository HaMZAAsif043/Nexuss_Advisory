"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SwipeableText from './SwipeableText';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0798B1] via-[#4DC6D7] to-[#545454] overflow-hidden hero-section">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/image copy.png"
          alt="Hero Background - Professional Business Meeting"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0798B1]/80 via-[#4DC6D7]/60 to-[#545454]/80"></div>
        {/* Animated Gradient Overlays */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-[#4DC6D7]/20 to-transparent"
          animate={{
            opacity: [0.3, 0.7, 0.3],
            background: [
              "linear-gradient(45deg, rgba(77, 198, 215, 0.2) 0%, transparent 100%)",
              "linear-gradient(135deg, rgba(7, 152, 177, 0.3) 0%, transparent 100%)",
              "linear-gradient(45deg, rgba(77, 198, 215, 0.2) 0%, transparent 100%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
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
            {/* <motion.div
              className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white font-semibold mb-6 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ amount: 0.3 }}
            >
              Financial Excellence Redefined
            </motion.div> */}
            
            <div className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-6">
              <SwipeableText 
                texts={[
                  "Where Financial Expertise Meets Strategic Innovation",
                  "Navigate the complexities of modern business with confidence."
                ]}
                className="bg-gradient-to-r from-white to-white bg-clip-text text-transparent min-h-[120px]"
              />
            </div>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ amount: 0.3 }}
            >
Nexuss Advisory provides a full suite of tailored financial services designed to meet the evolving needs of Individuals and businesses globally. At Nexuss Advisory, we believe finance is more than numbers — it’s about empowering people and businesses to make confident decisions and achieve lasting growth.            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              viewport={{ amount: 0.3 }}
            >
              <motion.button 
                className="group relative overflow-hidden bg-white text-[#545454] px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-[#4DC6D7]/25 border border-white/20"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get Started Today</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#4DC6D7] to-[#0798B1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              
              <motion.button 
                className="group border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#545454] transition-all duration-300 backdrop-blur-sm bg-white/10"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="group-hover:text-[#545454]">Explore Our Services</span>
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            {/* <motion.div
              className="flex items-center space-x-6 text-white/80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              viewport={{ amount: 0.3 }}
            > */}
              {/* <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#4DC6D7] rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">500+ Happy Clients</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#4DC6D7] rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                <span className="text-sm font-medium">15+ Years Experience</span>
              </div> */}
            {/* </motion.div> */}
          </motion.div>

          {/* Right Content - Enhanced Visual Element */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
          >
            <motion.div 
              className="relative"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 1, 0, -1, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              {/* Floating Cards */}
              <div className="relative w-80 h-96">
                {/* Main Card */}
                <motion.div 
                  className="absolute inset-0 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/20"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-[#545454]">Portfolio Growth</h3>
                        <div className="w-12 h-12 bg-gradient-to-r from-[#4DC6D7] to-[#0798B1] rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">📈</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-[#545454]/70">YTD Return</span>
                          <span className="text-[#4DC6D7] font-bold">+24.5%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div 
                            className="bg-gradient-to-r from-[#4DC6D7] to-[#0798B1] h-2 rounded-full"
                            initial={{ width: "0%" }}
                            whileInView={{ width: "75%" }}
                            transition={{ duration: 2, delay: 1 }}
                            viewport={{ amount: 0.3 }}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-[#545454]">$2.4M</div>
                      <div className="text-[#545454]/70">Total Assets</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-[#4DC6D7] to-[#0798B1] rounded-full flex items-center justify-center shadow-xl"
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                >
                  <span className="text-white font-bold text-xl">$</span>
                </motion.div>

                <motion.div 
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-[#4DC6D7]/20"
                  animate={{ 
                    y: [0, -8, 0],
                    rotate: [0, -5, 0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <span className="text-[#4DC6D7] font-bold">⭐</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;