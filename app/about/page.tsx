"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Users, Target, Award, TrendingUp, Briefcase, Heart, Shield, Globe } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { number: "500+", label: "Happy Clients", icon: Users },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "$2B+", label: "Assets Managed", icon: TrendingUp },
    { number: "50+", label: "Expert Advisors", icon: Briefcase }
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "We build lasting relationships through transparent, honest communication and ethical business practices."
    },
    {
      icon: Target,
      title: "Client-Focused",
      description: "Your financial success is our primary goal. We tailor our services to meet your unique needs and objectives."
    },
    {
      icon: Heart,
      title: "Passion for Excellence",
      description: "We're passionate about delivering exceptional results and exceeding client expectations in everything we do."
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "We leverage cutting-edge technology and innovative strategies to provide you with the best financial solutions."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      position: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b977?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      description: "15+ years of experience in financial planning and investment management."
    },
    {
      name: "Michael Chen",
      position: "Chief Financial Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description: "Expert in corporate finance with a track record of successful business transformations."
    },
    {
      name: "Emily Rodriguez",
      position: "Senior Investment Advisor",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description: "Specialized in portfolio management and wealth preservation strategies."
    },
    {
      name: "David Park",
      position: "Head of Business Advisory",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      description: "Leading strategic consulting initiatives for small and medium enterprises."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <motion.section 
        className="relative bg-gradient-to-r from-[#545454] to-[#4DC6D7] text-white py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About Nexuss Advisory
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Creating long-term value with entrepreneurial intelligence. 
                Our main goal is sustainable growth for your financial future.
              </p>
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <button className="bg-white text-[#545454] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Our Services
                </button>
                <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#545454] transition-all duration-300">
                  Contact Us
                </button>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Nexuss Advisory Team"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.3 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ amount: 0.3 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-[#4DC6D7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-[#4DC6D7]" />
                </div>
                <h3 className="text-3xl font-bold text-[#545454] mb-2">{stat.number}</h3>
                <p className="text-[#545454]/80 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-[#4DC6D7]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ amount: 0.3 }}
            >
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Our Story"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ amount: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-white/80 leading-relaxed">
                <p>
                  Founded in 2010, Nexuss Advisory began with a simple mission: to provide exceptional 
                  financial guidance that empowers individuals and businesses to achieve their dreams. 
                  What started as a small consulting firm has grown into a comprehensive financial 
                  services company trusted by hundreds of clients.
                </p>
                <p>
                  Our journey has been marked by continuous innovation, unwavering commitment to our 
                  clients, and a deep understanding that every financial situation is unique. We&apos;ve 
                  weathered market storms, celebrated client successes, and constantly evolved our 
                  services to meet the changing needs of the financial landscape.
                </p>
                <p>
                  Today, we&apos;re proud to be a leading voice in financial advisory services, combining 
                  traditional wisdom with cutting-edge technology to deliver results that matter.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#545454] mb-6">
              Our Core Values
            </h2>
            <p className="text-[#545454]/80 max-w-3xl mx-auto text-lg">
              These fundamental principles guide every decision we make and every relationship we build.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-gradient-to-r from-[#545454] to-[#4DC6D7] text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ amount: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-[#4DC6D7]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-white/80 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-[#545454]/5">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#545454] mb-6">
              Meet Our Leadership Team
            </h2>
            <p className="text-[#545454]/80 max-w-3xl mx-auto text-lg">
              Our experienced team of financial experts is dedicated to helping you achieve your goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ amount: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#545454] mb-2">{member.name}</h3>
                  <p className="text-[#4DC6D7] font-medium mb-3">{member.position}</p>
                  <p className="text-[#545454]/80 text-sm leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section 
        className="py-16 bg-gradient-to-r from-[#4DC6D7] to-[#545454] text-white"
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
            Ready to Start Your Financial Journey?
          </motion.h2>
          <motion.p 
            className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ amount: 0.3 }}
          >
            Let&apos;s work together to create a financial strategy that aligns with your goals and secures your future.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ amount: 0.3 }}
          >
            <motion.button 
              className="bg-white text-[#545454] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Consultation
            </motion.button>
            <motion.button 
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#545454] transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
