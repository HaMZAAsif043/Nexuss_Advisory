"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { X, Minimize2, Bot } from 'lucide-react';

interface ChatbotHeaderProps {
  isMinimized: boolean;
  setIsMinimized: (minimized: boolean) => void;
  setIsOpen: (open: boolean) => void;
}

const ChatbotHeader: React.FC<ChatbotHeaderProps> = ({
  isMinimized,
  setIsMinimized,
  setIsOpen
}) => {
  return (
    <div className="bg-gradient-to-r from-[#4DC6D7] via-[#3bb5c6] to-[#545454] p-4 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
      </div>
      
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
              <Bot className="w-7 h-7" />
            </div>
            {/* Online indicator */}
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
          </div>
          <div>
            <h3 className="font-bold text-lg">Maddy</h3>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <p className="text-white/90 text-sm">Online • Ready to help</p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-2 rounded-xl transition-all duration-200 hover:bg-white/20"
          >
            <Minimize2 className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-xl transition-all duration-200 hover:bg-white/20"
          >
            <X className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotHeader;