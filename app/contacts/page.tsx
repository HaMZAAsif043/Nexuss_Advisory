"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, User, MessageSquare, Twitter, Linkedin, Facebook, Instagram, Share2 } from 'lucide-react';

// Import custom WhatsApp icon
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.2.301-.767.966-.94 1.164-.173.199-.347.223-.647.075-.3-.15-1.269-.467-2.416-1.483-.893-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.462.13-.61.136-.137.301-.354.451-.53.151-.174.2-.3.3-.498.099-.2.05-.374-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.007-.371-.01-.571-.01-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.18 2.095 3.195 5.076 4.483.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M13.789 18.108h-.79a8.23 8.23 0 01-4.177-1.137l-.298-.176-3.084.807.822-3.003-.196-.314a8.222 8.222 0 01-1.24-4.352C5.021 5.032 8.964 1.1 13.789 1.1s8.767 3.933 8.767 8.768-3.932 8.768-8.767 8.768v-.008z"/>
  </svg>
);

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <motion.section 
        className="relative bg-[#545454] text-white py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#545454] to-[#4DC6D7] opacity-90"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Ready to transform your financial future? Let&apos;s start the conversation today.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-[#545454] mb-8">
                Let&apos;s Talk Business
              </h2>
              <p className="text-[#545454]/80 mb-12 text-lg leading-relaxed">
                We&apos;re here to help you achieve your financial goals. Whether you need investment advice, 
                business consulting, or comprehensive financial planning, our team of experts is ready to assist you.
              </p>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Traditional Contact Cards */}
                {[
                  {
                    icon: <Phone className="w-7 h-7 text-[#4DC6D7]" />,
                    title: "Phone Number",
                    content: "+92 329 6395813",
                    note: "24/7 Available"
                  },
                  {
                    icon: <Mail className="w-7 h-7 text-[#4DC6D7]" />,
                    title: "Email Address",
                    content: "info@nexussadvisory.com",
                    note: "Quick Response Guaranteed"
                  }
                ].map((contact, index) => (
                  <motion.div 
                    key={`contact-${index}`}
                    className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ amount: 0.3 }}
                  >
                    <div className="w-14 h-14 bg-[#4DC6D7]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      {contact.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#545454] mb-2">{contact.title}</h4>
                      <p className="text-[#545454]/80">{contact.content}</p>
                      <p className="text-[#4DC6D7] text-sm mt-1">{contact.note}</p>
                    </div>
                  </motion.div>
                ))}

                {/* Social Media Cards Section */}
                <div className="mt-10">
                  <h3 className="text-xl font-bold text-[#545454] mb-6">We’re Just a Click Away</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {[
                      {
                        name: "WhatsApp",
                        icon: <WhatsAppIcon />,
                        username: "+92 329 6395813",
                        url: "https://wa.me/923296395813",
                        color: "#25D366",
                        bgColor: "#25D366/10"
                      },
                      {
                        name: "Facebook",
                        icon: <Facebook className="w-5 h-5" />,
                        username: "NexussAdvisory",
                        url: "https://facebook.com/NexussAdvisory",
                        color: "#1877F2",
                        bgColor: "#1877F2/10"
                      },
                      {
                        name: "Instagram",
                        icon: <Instagram className="w-5 h-5" />,
                        username: "@nexuss_advisory",
                        url: "https://instagram.com/nexuss_advisory",
                        color: "#E4405F",
                        bgColor: "#E4405F/10"
                      },
                      {
                        name: "Threads",
                        icon: <Share2 className="w-5 h-5" />,
                        username: "@nexuss_advisory",
                        url: "https://threads.net/@nexuss_advisory",
                        color: "#000000",
                        bgColor: "#000000/10"
                      },
                       {
                        name: "Twitter",
                        icon: <Twitter className="w-5 h-5" />,
                        username: "@NexussAdvisory",
                        url: "https://twitter.com/NexussAdvisory",
                        color: "#1DA1F2",
                        bgColor: "#1DA1F2/10"
                      },
                      {
                        name: "LinkedIn",
                        icon: <Linkedin className="w-5 h-5" />,
                        username: "Nexuss Advisory",
                        url: "https://linkedin.com/company/nexuss-advisory",
                        color: "#0A66C2",
                        bgColor: "#0A66C2/10"
                      },
                    ].map((social, index) => (
                      <motion.a
                        key={`social-${index}`}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
                        whileHover={{ y: -5, scale: 1.05 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + (index * 0.1), duration: 0.4 }}
                        viewport={{ amount: 0.3 }}
                        style={{ 
                          borderTop: `3px solid ${social.color}`,
                        }}
                      >
                        <div 
                          className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                          style={{ backgroundColor: `${social.bgColor}`, color: social.color }}
                        >
                          {social.icon}
                        </div>
                        <h5 className="font-semibold text-[#545454]">{social.name}</h5>
                        <p className="text-sm text-[#545454]/70 mt-1">{social.username}</p>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ amount: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-[#545454] mb-8">
                Send us a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ amount: 0.3 }}
                  >
                    <label className="block text-sm font-medium text-[#545454] mb-2">
                      First Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#545454]/50" />
                      <input
                        type="text"
                        className="w-full pl-12 pr-4 py-4 border-2 border-[#545454]/20 rounded-xl focus:border-[#4DC6D7] focus:outline-none transition-all duration-300 text-[#545454]"
                        placeholder="Enter your first name"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ amount: 0.3 }}
                  >
                    <label className="block text-sm font-medium text-[#545454] mb-2">
                      Last Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#545454]/50" />
                      <input
                        type="text"
                        className="w-full pl-12 pr-4 py-4 border-2 border-[#545454]/20 rounded-xl focus:border-[#4DC6D7] focus:outline-none transition-all duration-300 text-[#545454]"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ amount: 0.3 }}
                >
                  <label className="block text-sm font-medium text-[#545454] mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#545454]/50" />
                    <input
                      type="email"
                      className="w-full pl-12 pr-4 py-4 border-2 border-[#545454]/20 rounded-xl focus:border-[#4DC6D7] focus:outline-none transition-all duration-300 text-[#545454]"
                      placeholder="Enter your email address"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ amount: 0.3 }}
                >
                  <label className="block text-sm font-medium text-[#545454] mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#545454]/50" />
                    <input
                      type="tel"
                      className="w-full pl-12 pr-4 py-4 border-2 border-[#545454]/20 rounded-xl focus:border-[#4DC6D7] focus:outline-none transition-all duration-300 text-[#545454]"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ amount: 0.3 }}
                >
                  <label className="block text-sm font-medium text-[#545454] mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-4 border-2 border-[#545454]/20 rounded-xl focus:border-[#4DC6D7] focus:outline-none transition-all duration-300 text-[#545454]">
                    <option>Select a service...</option>
                    <option>Financial Planning</option>
                    <option>Investment Advisory</option>
                    <option>Business Consulting</option>
                    <option>Tax Planning</option>
                    <option>Other</option>
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ amount: 0.3 }}
                >
                  <label className="block text-sm font-medium text-[#545454] mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-[#545454]/50" />
                    <textarea
                      rows={6}
                      className="w-full pl-12 pr-4 py-4 border-2 border-[#545454]/20 rounded-xl focus:border-[#4DC6D7] focus:outline-none transition-all duration-300 text-[#545454] resize-none"
                      placeholder="Tell us about your financial goals and how we can help..."
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  viewport={{ amount: 0.3 }}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <input type="checkbox" id="privacy" className="w-5 h-5 text-[#4DC6D7] border-2 border-[#545454]/20 rounded focus:ring-[#4DC6D7]" />
                    <label htmlFor="privacy" className="text-sm text-[#545454]/80">
                      I agree to the <a href="#" className="text-[#4DC6D7] hover:underline">Privacy Policy</a> and 
                      <a href="#" className="text-[#4DC6D7] hover:underline ml-1">Terms of Service</a>
                    </label>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#4DC6D7] to-[#545454] hover:from-[#3bb5c6] hover:to-[#454545] text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <motion.section 
        className="py-16 bg-[#545454]/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#545454] mb-4">
              Visit Our Office
            </h2>
            <p className="text-[#545454]/80 max-w-2xl mx-auto">
              We&apos;re located in the heart of the financial district, easily accessible by public transport.
            </p>
          </div>
          
          <motion.div 
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-96 bg-gradient-to-br from-[#4DC6D7]/20 to-[#545454]/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#4DC6D7] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#545454] mb-2">Interactive Map</h3>
                <p className="text-[#545454]/80">Map integration would be added here</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactPage;
