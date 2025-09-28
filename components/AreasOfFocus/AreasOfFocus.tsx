"use client"

import { motion } from "framer-motion";
import {
  Calculator,
  ChartNoAxesCombined,
  ChartCandlestick,
  LaptopMinimalCheck,
  Handshake
} from "lucide-react";
 import { useRouter } from "next/navigation"; 
const AreasOfFocus = () => {
  const router =useRouter()
  const focusAreas = [
    {
      icon: Calculator,
      title: "Accounting Compliance",
      description:
        "Reliable financial reporting and compliance solutions that ensure transparency and trust.",
      color: "#0798B1",
      link:"services/accounting"
    },
    {
      icon: ChartNoAxesCombined ,
      title: "Financial Services",
      description:
        "Tailored financial strategies to optimize growth, stability, and efficiency.",
      color: "#4DC6D7",
            link:"services/financial"

    },
    {
      icon: Handshake,
      title: "Transactional Advisory",
      description:
        "Expert guidance to navigate mergers, acquisitions, and complex deals with confidence.",
      color: "#4DC6D7",
            link:"services/transactional"

    },
    {
      icon: ChartCandlestick,
      title: "Investment Research Advisory",
      description:
        "Independent research and strategic advisory to support informed investment decisions.",
      color: "#4DC6D7",
      link:"services/investment"
    },
    {
      icon: LaptopMinimalCheck,
      title: "Data-Driven Insights Analytics",
      description:
        "Transforming raw data into actionable intelligence for business success.",
      color: "#4DC6D7",
      link:"services/analytics"
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
<div className="flex flex-col items-center gap-8 max-w-6xl mx-auto">
  {/* Row 1 (3 items) */}
  <div className="flex flex-wrap justify-center gap-8">
    {focusAreas.slice(0, 3).map((area, index) => (
      <motion.div
        key={index}
        className="text-center group cursor-pointer w-full max-w-xs"
        whileHover={{ y: -10 }}
        onClick={() => router.push(area.link)}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="w-16 h-16 bg-[#4DC6D7]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#4DC6D7]/20 transition-all duration-300"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <area.icon className="w-7 h-7 mb-1" style={{ color: area.color }} />
        </motion.div>

        <h3 className="text-xl font-semibold text-[#545454] mb-2 group-hover:text-[#4DC6D7] transition-colors duration-300">
          {area.title}
        </h3>

        <p className="text-[#545454]/80 group-hover:text-[#545454]/90 transition-colors text-center duration-300 leading-relaxed">
          {area.description}
        </p>
      </motion.div>
    ))}
  </div>

  {/* Row 2 (2 items centered) */}
  <div className="flex justify-center gap-8">
    {focusAreas.slice(3).map((area, index) => (
      <motion.div
        key={index}
        className="text-center group cursor-pointer w-full max-w-xs"
        whileHover={{ y: -10 }}
        onClick={() => router.push(area.link)}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="w-16 h-16 bg-[#4DC6D7]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#4DC6D7]/20 transition-all duration-300"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <area.icon className="w-7 h-7 mb-1" style={{ color: area.color }} />
        </motion.div>

        <h3 className="text-xl font-semibold text-[#545454] mb-2 group-hover:text-[#4DC6D7] transition-colors duration-300">
          {area.title}
        </h3>

        <p className="text-[#545454]/80 group-hover:text-[#545454]/90 text-center transition-colors duration-300 leading-relaxed">
          {area.description}
        </p>
      </motion.div>
    ))}
  </div>
</div>
        </motion.div>
      </div>
    </section>
  );
};

export default AreasOfFocus;
