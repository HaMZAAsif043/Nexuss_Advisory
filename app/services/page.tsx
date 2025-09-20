"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Clock, Award } from 'lucide-react';
import Link from 'next/link';
import { services } from '@/data/services';

const ServicesPage = () => {

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8fdff] via-[#ffffff] to-[#f0f9fa]"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#4DC6D7] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#0798B1] rounded-full opacity-10 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex items-center justify-center space-x-2 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="px-4 py-2 bg-[#4DC6D7]/10 rounded-full border border-[#4DC6D7]/20">
                <span className="text-[#0798B1] font-semibold text-sm">Professional Services</span>
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#545454] mb-6 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4DC6D7] to-[#0798B1]">Expert</span> Services
            </h1>
            <p className="text-xl md:text-2xl text-[#545454]/80 mb-8 leading-relaxed font-light">
              Comprehensive financial and advisory solutions designed to accelerate your business growth and optimize performance
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link href="/contacts">
                <motion.button 
                  className="bg-gradient-to-r from-[#4DC6D7] to-[#0798B1] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Consultation
                </motion.button>
              </Link>
              {/* <motion.div 
                className="flex items-center space-x-2 text-[#545454]/70"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-[#4DC6D7] rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">A</div>
                  <div className="w-8 h-8 bg-[#0798B1] rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">B</div>
                  <div className="w-8 h-8 bg-[#2D5AA0] rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">C</div>
                </div>
                <span className="font-medium">Trusted by 500+ businesses</span>
              </motion.div> */}
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 opacity-20"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Star className="w-6 h-6 text-[#4DC6D7]" />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/4 opacity-20"
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Award className="w-8 h-8 text-[#0798B1]" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#f8fdff]">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.3 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#545454] mb-6">
              Professional <span className="text-[#4DC6D7]">Advisory</span> Solutions
            </h2>
            <p className="text-xl text-[#545454]/80 max-w-3xl mx-auto leading-relaxed">
              Comprehensive financial and business advisory services tailored to drive your success
            </p>
          </motion.div>

        {/* Simple Services Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 h-full flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ amount: 0.3 }}
              whileHover={{ y: -5 }}
            >
              {/* Icon */}
              <div className="text-center mb-4">
                <div 
                  className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <service.icon className="w-8 h-8" style={{ color: service.color }} />
                </div>
                <h3 className="text-xl font-bold text-[#545454] mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[#545454]/60">
                  {service.subServices.length} specialized services
                </p>
              </div>

              {/* Description */}
              <p className="text-[#545454]/80 text-center mb-6 leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Button */}
              <Link 
                href={`/services/${service.id}`}
                className="w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 border-2"
                style={{ 
                  borderColor: service.color,
                  color: service.color 
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = service.color;
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = service.color;
                }}
              >
                Explore Services
              </Link>
            </motion.div>
          ))}
        </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.3 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#545454] mb-6">
              Why Choose <span className="text-[#4DC6D7]">Nexuss Advisory</span>
            </h2>
            <p className="text-xl text-[#545454]/80 max-w-3xl mx-auto">
              Experience the difference of working with industry-leading professionals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Star,
                title: "Expert Team",
                description: "Certified professionals with decades of combined experience"
              },
              {
                icon: Clock,
                title: "Timely Delivery",
                description: "Committed to meeting deadlines and exceeding expectations"
              },
              {
                icon: Award,
                title: "Proven Results",
                description: "Track record of successful client outcomes and business growth"
              },
              {
                icon: Users,
                title: "Dedicated Support",
                description: "Personal attention and ongoing support for every client"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ amount: 0.3 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#4DC6D7] to-[#0798B1] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#545454] mb-3">{benefit.title}</h3>
                <p className="text-[#545454]/70 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#4DC6D7] to-[#0798B1] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.3 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let our experts help you achieve your financial and business goals
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ amount: 0.3 }}
            >
              <Link href="/contacts">
                <motion.button 
                  className="bg-white text-[#0798B1] px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Free Consultation
                </motion.button>
              </Link>
              <motion.button 
                className="border border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-[#0798B1] transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Call +92 329 6395813
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;