"use client"
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  texts: string[];
  className?: string;
}

const TypewriterEffect = ({ texts, className = "" }: TypewriterEffectProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    if (isTyping) {
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 30);
        return () => clearTimeout(timeout);
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }
  }, [displayedText, isTyping, currentTextIndex, texts]);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
      <motion.span
        className="inline-block w-0.5 h-8 bg-current ml-1"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default TypewriterEffect;