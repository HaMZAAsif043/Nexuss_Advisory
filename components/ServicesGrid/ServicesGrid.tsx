"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Service {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ServicesGrid = () => {
  // This would typically come from an API or CMS
  const services: Service[] = [
    {
      title: "Career program",
      description: "Professional development and career advancement strategies",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "/services/career-program"
    },
    {
      title: "Business advisory", 
      description: "Strategic business consulting and growth planning",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "/services/business-advisory"
    },
    {
      title: "Financial advisory",
      description: "Comprehensive financial planning and investment guidance", 
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2339&q=80",
      link: "/services/financial-advisory"
    },
    {
      title: "Best guarantees",
      description: "Premium service guarantees and satisfaction assurance",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", 
      link: "/services/guarantees"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
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
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="group cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="relative h-64 rounded-lg overflow-hidden shadow-lg mb-4"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {service.description}
                  </p>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#4DC6D7]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <motion.svg 
                      className="w-12 h-12 mx-auto mb-3" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                    <span className="text-lg font-semibold">Learn More</span>
                  </div>
                </div>
              </motion.div>
              
              {/* Service Info */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-[#545454] mb-2 group-hover:text-[#4DC6D7] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#545454]/80 text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ amount: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-[#545454] mb-4">
            Ready to transform your financial future?
          </h3>
          <p className="text-[#545454]/80 mb-6 max-w-2xl mx-auto">
            Choose from our comprehensive range of services designed to meet your unique needs and goals.
          </p>
          <motion.button 
            className="bg-[#4DC6D7] hover:bg-[#3bb5c6] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
