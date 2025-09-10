"use client"
import { motion } from 'framer-motion';
import { useState } from 'react';

interface SwipeableTextProps {
  texts: string[];
  className?: string;
}

const SwipeableText = ({ texts, className = "" }: SwipeableTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextText = () => {
    setCurrentIndex((prev) => (prev + 1) % texts.length);
  };

  const prevText = () => {
    setCurrentIndex((prev) => (prev - 1 + texts.length) % texts.length);
  };

  return (
    <div className="relative">
      <div className={`overflow-hidden ${className}`}>
        <motion.div
          key={currentIndex}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {texts[currentIndex]}
        </motion.div>
      </div>
      
      <div className="absolute top-0 right-0 flex gap-2">
        <motion.button
          onClick={prevText}
          className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors text-sm"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ←
        </motion.button>
        <motion.button
          onClick={nextText}
          className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors text-sm"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          →
        </motion.button>
      </div>
    </div>
  );
};

export default SwipeableText;