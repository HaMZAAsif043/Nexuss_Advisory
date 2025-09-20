"use client"

import { motion } from "framer-motion";
import {
  Calculator,
  TrendingUp,
  BarChart3,
  BarChart,
  Handshake,
} from "lucide-react";

const AreasOfFocus = () => {
  const focusAreas = [
    {
      icon: Calculator,
      title: "Accounting & Compliance",
      description:
        "Comprehensive financial strategies tailored to your goals",
      color: "#0798B1",
    },
    {
      icon: TrendingUp,
      title: "Financial Services",
      description:
        "Expert guidance on investment opportunities and portfolio management",
      color: "#4DC6D7",
    },
    {
      icon: BarChart3,
      title: "Transactional Advisory",
      description:
        "Strategic tax planning to maximize your financial efficiency",
      color: "#4DC6D7",
    },
    {
      icon: Handshake,
      title: "Investment Research & Advisory",
      description:
        "Objective research and advisory to help optimize your investment strategies",
      color: "#4DC6D7",
    },
    {
      icon: BarChart,
      title: "Data-Driven Insights & Analytics",
      description:
        "Leverage advanced analytics to uncover opportunities, optimize strategies, and guide informed decisions.",
      color: "#4DC6D7",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#545454] mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ amount: 0.3 }}
          >
            What We Offer
          </motion.h2>

          {/* Focus Areas Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                className="text-center group cursor-pointer"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-16 h-16 bg-[#4DC6D7]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#4DC6D7]/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <area.icon
                    className="w-7 h-7 mb-1"
                    style={{ color: area.color }}
                  />
                </motion.div>

                {/* Title with fixed height */}
                <h3 className="text-xl font-semibold text-[#545454] mb-2 group-hover:text-[#4DC6D7] transition-colors duration-300 min-h-[56px] flex items-center justify-center">
                  {area.title}
                </h3>

                {/* Description with fixed height */}
                <p className="text-[#545454]/80 group-hover:text-[#545454]/90 transition-colors duration-300 min-h-[72px] flex items-center justify-center">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AreasOfFocus;
