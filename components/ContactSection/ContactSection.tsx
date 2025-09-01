"use client"
import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Get in touch!
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Ready to take control of your financial future? Our expert advisors are here to help you 
              navigate your financial journey with personalized strategies and professional guidance.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#4DC6D7]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#4DC6D7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#4DC6D7]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#4DC6D7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600">info@nexussadvisory.com</p>
                  <p className="text-gray-600">support@nexussadvisory.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#4DC6D7]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#4DC6D7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Office</h4>
                  <p className="text-gray-600">123 Financial District</p>
                  <p className="text-gray-600">New York, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#4DC6D7]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#4DC6D7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Business Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <motion.div 
            className="bg-gray-50 rounded-lg p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Send us a message
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="relative group contact-input"
                >
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-[#4DC6D7] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="Name"
                      className="w-full pl-10 pr-4 py-4 bg-transparent border-0 border-b-2 border-gray-300 border-dashed focus:border-solid focus:border-[#4DC6D7] focus:outline-none transition-all duration-300 text-gray-800 placeholder-gray-500"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4DC6D7] border-animation transition-all duration-500 ease-out"></div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="relative group contact-input"
                >
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-[#4DC6D7] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      className="w-full pl-10 pr-4 py-4 bg-transparent border-0 border-b-2 border-gray-300 border-dashed focus:border-solid focus:border-[#4DC6D7] focus:outline-none transition-all duration-300 text-gray-800 placeholder-gray-500"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4DC6D7] border-animation transition-all duration-500 ease-out"></div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="relative group contact-input"
              >
                <div className="relative">
                  <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-[#4DC6D7] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    className="w-full pl-10 pr-4 py-4 bg-transparent border-0 border-b-2 border-gray-300 border-dashed focus:border-solid focus:border-[#4DC6D7] focus:outline-none transition-all duration-300 text-gray-800 placeholder-gray-500"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4DC6D7] border-animation transition-all duration-500 ease-out"></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="relative group contact-input"
              >
                <div className="relative">
                  <svg className="absolute left-3 top-4 w-5 h-5 text-gray-400 group-hover:text-[#4DC6D7] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    className="w-full pl-10 pr-4 py-4 bg-transparent border-0 border-b-2 border-gray-300 border-dashed focus:border-solid focus:border-[#4DC6D7] focus:outline-none transition-all duration-300 text-gray-800 placeholder-gray-500"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4DC6D7] border-animation transition-all duration-500 ease-out"></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="relative group contact-input"
              >
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="How can we help you? Feel free to get in touch!"
                    className="w-full pl-4 pr-4 py-4 bg-transparent border-0 border-b-2 border-gray-300 border-dashed focus:border-solid focus:border-[#4DC6D7] focus:outline-none transition-all duration-300 text-gray-800 placeholder-gray-500 resize-none"
                  ></textarea>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4DC6D7] border-animation transition-all duration-500 ease-out"></div>
                </div>
              </motion.div>

              {/* Privacy Policy Checkbox */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  className="w-4 h-4 text-[#4DC6D7] border-2 border-gray-300 rounded focus:ring-[#4DC6D7] focus:ring-2"
                />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  I agree that my data is{" "}
                  <a href="#" className="text-[#4DC6D7] hover:text-[#3bb5c6] underline">
                    collected and stored
                  </a>
                  .
                </label>
              </motion.div>

              {/* Sticky Submit Button */}
              <motion.div
                className="sticky bottom-4 z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <motion.button
                  type="submit"
                  className="relative w-full bg-[#4DC6D7] hover:bg-[#3bb5c6] text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden group button-ripple"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>Get In Touch</span>
                    <motion.svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </motion.svg>
                  </span>
                  {/* Animated background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3bb5c6] to-[#4DC6D7] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
