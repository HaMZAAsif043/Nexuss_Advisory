"use client";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";

const MiniCalendar = () => {
  const [currentDate] = useState(new Date());
  
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const getCurrentMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const days = getCurrentMonth();
  const today = new Date();
  const isToday = (day: number | null) => {
    if (!day) return false;
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  // Framer Motion variants
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 12, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { when: 'beforeChildren', staggerChildren: 0.03, delayChildren: 0.15 }
    }
  };

  const dayVariants: Variants = {
    hidden: { opacity: 0, y: 6, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.28, ease: 'easeOut' } },
    hover: { 
      scale: 1.08, 
      y: -6, 
      rotate: 2,
      transition: { duration: 0.18, ease: "easeOut" } 
    },
    tap: { scale: 0.96, rotate: -1, transition: { duration: 0.08 } }
  };

  return (
    <motion.div
      className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6 shadow-xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ 
        scale: 1.02, 
        rotate: 1,
        boxShadow: "0 20px 40px rgba(77, 198, 215, 0.3), 0 8px 16px rgba(0, 0, 0, 0.15)"
      }}
      whileTap={{ scale: 0.98, rotate: -0.5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{
        filter: 'drop-shadow(0 4px 12px rgba(77, 198, 215, 0.2))'
      }}
    >
      {/* Calendar Header */}
      <div className="mb-4">
        <h3 className="text-white font-semibold text-center text-base">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>
      </div>

      {/* Days of Week Header */}
      <div className="grid grid-cols-7 gap-2 mb-3">
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className="text-white/70 text-sm font-medium text-center py-2"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">
        {days.map((day, index) => (
          <motion.div
            key={index}
            variants={dayVariants}
            whileHover={day ? 'hover' : ''}
            whileTap={day ? 'tap' : ''}
            tabIndex={day ? 0 : -1}
            role={day ? 'button' : undefined}
            aria-disabled={!day}
            animate={isToday(day) ? {
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 0 rgba(77, 198, 215, 0)",
                "0 0 20px rgba(77, 198, 215, 0.6)",
                "0 0 0 rgba(77, 198, 215, 0)"
              ]
            } : undefined}
            transition={isToday(day) ? {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            } : undefined}
            className={`
              h-10 w-10 flex items-center justify-center text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4DC6D7]/60
              transition-all duration-200
              ${day 
                ? isToday(day)
                  ? "bg-[#4DC6D7] text-white font-bold shadow-lg" 
                  : "text-white/80 hover:bg-white/10 hover:text-white cursor-pointer hover:shadow-lg hover:shadow-[#4DC6D7]/30"
                : ""
              }
            `}
            style={day && !isToday(day) ? {
              filter: 'drop-shadow(0 2px 4px rgba(77, 198, 215, 0.1))'
            } : undefined}
          >
            {day}
          </motion.div>
        ))}
      </div>

      {/* Bottom accent */}
      <motion.div
        className="mt-4 h-1 bg-gradient-to-r from-[#4DC6D7] to-[#0798B1] rounded-full"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.8, delay: 1.5 }}
      />
    </motion.div>
  );
};

export default MiniCalendar;