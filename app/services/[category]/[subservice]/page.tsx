"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Phone, Mail, Calendar } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services } from '@/data/services';

interface SubServicePageProps {
  params: {
    category: string;
    subservice: string;
  };
}

const SubServicePage = ({ params }: SubServicePageProps) => {
  const { category, subservice } = params;

  const service = services.find(s => s.id === category);
  if (!service) {
    notFound();
  }

  const subService = service.subServices.find(s => s.id === subservice);
  if (!subService) {
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
            <Link href={`/services/${category}`} className="hover:text-[#4DC6D7] capitalize">{service.title}</Link>
            <span>/</span>
            <span className="text-[#545454]">{subService.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <motion.section 
        className="relative py-20"
        style={{ backgroundColor: `${service.color}10` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Link 
                href={`/services/${category}`}
                className="inline-flex items-center space-x-2 text-[#545454]/70 hover:text-[#4DC6D7] mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to {service.title}</span>
              </Link>
{/*               
              <div className="flex items-center justify-center mb-6">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  <service.icon className="w-10 h-10" style={{ color: service.color }} />
                </div>
              </div> */}
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#545454] mb-6 leading-tight">
                {subService.name}
              </h1>
              <p className="text-xl md:text-2xl text-[#545454]/80 mb-8 leading-relaxed">
                {subService.description}
              </p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
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
        </div>
      </motion.section>

      {/* Service Details */}
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
                  {subService.details}
                </p>

                <h3 className="text-2xl font-bold text-[#545454] mb-6">What&apos;s Included</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-12">
                  {subService.features && subService.features.map((feature: string, index: number) => (
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

                {subService.benefits && (
                  <>
                    <h3 className="text-2xl font-bold text-[#545454] mb-6">Key Benefits</h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-12">
                      {subService.benefits.map((benefit: string, index: number) => (
                        <motion.div
                          key={index}
                          className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"
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
                            <span className="text-[#545454] font-medium">{benefit}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </>
                )}

                {subService.deliverables && (
                  <>
                    <h3 className="text-2xl font-bold text-[#545454] mb-6">What You&apos;ll Receive</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {subService.deliverables.map((deliverable: string, index: number) => (
                        <motion.div
                          key={index}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.6 }}
                          viewport={{ amount: 0.3 }}
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-[#545454]/80">{deliverable}</span>
                        </motion.div>
                      ))}
                    </div>
                  </>
                )}
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
                    <span className="text-[#545454]/80">+92 329 6395813</span>
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

      {/* Process */}
      {subService.process && (
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
                How we deliver exceptional results for {subService.name.toLowerCase()}
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {subService.process.map((step: string, index: number) => (
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
      )}

      {/* Industries */}
      {subService.industries && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-[#545454] mb-4">Industries We Serve</h2>
              <p className="text-[#545454]/80 max-w-2xl mx-auto">
                Our {subService.name.toLowerCase()} expertise spans across multiple industries
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {subService.industries.map((industry: string, index: number) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ amount: 0.3 }}
                >
                  <span className="text-[#545454] font-medium">{industry}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

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
            Contact our experts today to learn how {subService.name.toLowerCase()} can drive your business forward.
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
              Call +92 329 6395813
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default SubServicePage;