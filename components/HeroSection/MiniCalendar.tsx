"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

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

  return (
    <motion.div
      className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 shadow-xl"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2 }}
    >
      {/* Calendar Header */}
      <div className="mb-3">
        <h3 className="text-white font-semibold text-center text-sm">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>
      </div>

      {/* Days of Week Header */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className="text-white/70 text-xs font-medium text-center py-1"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => (
          <motion.div
            key={index}
            className={`
              h-7 w-7 flex items-center justify-center text-xs rounded-md
              transition-all duration-200
              ${day 
                ? isToday(day)
                  ? "bg-[#4DC6D7] text-white font-bold shadow-lg" 
                  : "text-white/80 hover:bg-white/10 hover:text-white cursor-pointer"
                : ""
              }
            `}
            whileHover={day ? { scale: 1.1 } : {}}
            whileTap={day ? { scale: 0.95 } : {}}
          >
            {day}
          </motion.div>
        ))}
      </div>

      {/* Bottom accent */}
      <motion.div
        className="mt-3 h-1 bg-gradient-to-r from-[#4DC6D7] to-[#0798B1] rounded-full"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.8, delay: 1.5 }}
      />
    </motion.div>
  );
};

export default MiniCalendar;