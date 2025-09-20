"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface SwipeableTextProps {
  texts: string[];
  className?: string;
}

const SwipeableText = ({ texts, className = "" }: SwipeableTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextText = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % texts.length);
  };

  const prevText = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + texts.length) % texts.length);
  };

  return (
    <div className="relative">
      <div className={`relative overflow-hidden ${className}`} style={{ height: "100px" }}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={{
              enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {texts[currentIndex]}
          </motion.div>
        </AnimatePresence>
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
