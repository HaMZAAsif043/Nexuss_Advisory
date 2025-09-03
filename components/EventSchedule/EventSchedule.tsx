"use client"
import React from 'react';
import { motion } from 'framer-motion';

interface Event {
  date: string;
  time: string;
  title: string;
  description: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}

const EventSchedule = () => {
  // This would typically come from an API or database
  const events: Event[] = [
    {
      date: "Sept. 15, 2025",
      time: "10:00 AM",
      title: "Tax Advisory Group",
      description: "Quarterly tax planning session",
      status: "upcoming"
    },
    {
      date: "Sept. 18, 2025", 
      time: "2:00 PM",
      title: "Investment Planning Seminar",
      description: "Portfolio diversification strategies",
      status: "upcoming"
    },
    {
      date: "Sept. 22, 2025",
      time: "9:00 AM", 
      title: "Business Advisory Meeting",
      description: "Strategic planning workshop",
      status: "upcoming"
    },
    {
      date: "Sept. 25, 2025",
      time: "11:00 AM",
      title: "Retirement Planning Session",
      description: "401k optimization strategies",
      status: "upcoming"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex justify-between items-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[#545454]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ amount: 0.3 }}
          >
            Event schedule
          </motion.h2>
          <motion.button 
            className="text-[#4DC6D7] hover:text-[#3bb5c6] font-medium transition-all duration-300"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ amount: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            View all →
          </motion.button>
        </motion.div>

        {/* Events Table */}
        <motion.div 
          className="bg-gray-50 rounded-lg overflow-hidden shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ amount: 0.3 }}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#545454]/5">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-[#545454]/90">Date</th>
                  <th className="text-left py-4 px-6 font-semibold text-[#545454]/90">Time</th>
                  <th className="text-left py-4 px-6 font-semibold text-[#545454]/90">Event</th>
                  <th className="text-left py-4 px-6 font-semibold text-[#545454]/90">Description</th>
                  <th className="text-left py-4 px-6 font-semibold text-[#545454]/90">Status</th>
                </tr>
              </thead>
              <motion.tbody
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
                  }
                }}
              >
                {events.map((event, index) => (
                  <motion.tr 
                    key={index} 
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    whileHover={{ x: 5, backgroundColor: "#f8fafc" }}
                  >
                    <td className="py-4 px-6 text-[#545454] font-medium">{event.date}</td>
                    <td className="py-4 px-6 text-[#545454]/80">{event.time}</td>
                    <td className="py-4 px-6 text-[#545454] font-medium">{event.title}</td>
                    <td className="py-4 px-6 text-[#545454]/80">{event.description}</td>
                    <td className="py-4 px-6">
                      <motion.span 
                        className={`
                          px-3 py-1 rounded-full text-xs font-medium
                          ${event.status === 'upcoming' 
                            ? 'bg-[#4DC6D7]/10 text-[#4DC6D7]'
                            : event.status === 'completed'
                            ? 'bg-[#545454]/5 text-[#545454]'  
                            : 'bg-red-100 text-red-800'
                          }
                        `}
                        whileHover={{ scale: 1.05 }}
                      >
                        {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                      </motion.span>
                    </td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </table>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ amount: 0.3 }}
        >
          <p className="text-[#545454]/80 mb-4">Want to schedule a consultation?</p>
          <motion.button 
            className="bg-[#4DC6D7] hover:bg-[#3bb5c6] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Appointment
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default EventSchedule;
