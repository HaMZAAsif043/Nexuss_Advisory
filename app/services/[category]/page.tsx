"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Phone, Mail, Calendar } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services } from '@/data/services';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

const CategoryPage = ({ params }: CategoryPageProps) => {
  const { category } = params;

  const service = services.find(s => s.id === category);
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
            <span className="text-[#545454]">{service.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <motion.section 
        className="relative py-20 bg-gradient-to-br from-gray-50 to-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-5"
            style={{ backgroundColor: service.color }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Link 
              href="/services"
              className="inline-flex items-center space-x-2 text-[#545454]/70 hover:text-[#4DC6D7] mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all services</span>
            </Link>
            
            <div className="flex items-center justify-center mb-6">
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${service.color}20` }}
              >
                <service.icon className="w-10 h-10" style={{ color: service.color }} />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#545454] mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-[#545454]/80 mb-8 leading-relaxed">
              {service.description}
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link href="/contacts">
                <motion.button 
                  className="text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-lg"
                  style={{ backgroundColor: service.color }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Today
                </motion.button>
              </Link>
              <Link href="/contacts">
                <motion.button 
                  className="border-2 text-[#545454] px-8 py-4 rounded-lg font-semibold hover:bg-[#545454] hover:text-white transition-all duration-300"
                  style={{ borderColor: service.color }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Consultation
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Service Overview */}
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

                <h3 className="text-2xl font-bold text-[#545454] mb-6">Key Features</h3>
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

                <Link href="/contacts">
                  <button 
                    className="w-full text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 mb-4"
                    style={{ backgroundColor: service.color }}
                  >
                    Schedule Consultation
                  </button>
                </Link>
                
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

      {/* Sub-Services */}
      <section className="py-16 bg-[#545454]/5">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-[#545454] mb-4">Specialized Services</h2>
            <p className="text-[#545454]/80 max-w-2xl mx-auto">
              Explore our comprehensive range of {service.title.toLowerCase()} solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.subServices.map((subService, index) => (
              <motion.div
                key={subService.id}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ amount: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-lg font-bold text-[#545454] mb-3">{subService.name}</h3>
                <p className="text-[#545454]/70 mb-4 leading-relaxed">{subService.description}</p>
                
                <Link 
                  href={`/services/${service.id}/${subService.id}`}
                  className="inline-flex items-center space-x-2 font-semibold transition-colors duration-300"
                  style={{ color: service.color }}
                >
                  <span>Learn More</span>
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-[#545454] mb-4">Why Choose Our Services</h2>
            <p className="text-[#545454]/80 max-w-2xl mx-auto">
              The benefits you can expect from our {service.title.toLowerCase()} solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ amount: 0.3 }}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: service.color }}
                  />
                </div>
                <h3 className="text-lg font-bold text-[#545454] mb-2">{benefit}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-[#545454]/5">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-[#545454] mb-4">Our Process</h2>
            <p className="text-[#545454]/80 max-w-2xl mx-auto">
              How we deliver exceptional {service.title.toLowerCase()} results
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 mb-8 last:mb-0"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ amount: 0.3 }}
              >
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                  style={{ backgroundColor: service.color }}
                >
                  {index + 1}
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm flex-1">
                  <p className="text-[#545454] text-lg">{step}</p>
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
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ amount: 0.3 }}
          >
            Contact our experts today to learn how our {service.title.toLowerCase()} services can benefit your business.
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

export default CategoryPage;