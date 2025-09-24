"use client"
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Sparkles } from 'lucide-react';
import axios from 'axios';
import ChatbotHeader from './ChatbotHeader';
import ChatbotMessages from './ChatbotMessages';
import ChatbotInput from './ChatbotInput';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: `Hello! I'm Maddy, Nexuss Advisory's AI assistant 

How I can help:

Accounting & Bookkeeping – QuickBooks, reconciliations

Financial Services – Budgeting, cash flow

Investment Research – Portfolio & market insights

Business Advisory – Strategy, M&A

Quick Actions:

Learn about services

Book a consultation

Request pricing

Ask me anything about financial advisory services!`,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await axios.post('/api/chat', {
        message: inputValue,
        context: 'Nexuss Advisory - Financial Advisory Services'
      });

      // Process and clean the bot response
      let botResponseContent = response.data.message || 'I received your message but couldn\'t generate a proper response.';
      
      // Clean up common AI response artifacts
      botResponseContent = botResponseContent
        .replace(/^(Assistant:|AI:|Bot:)\s*/i, '') // Remove AI prefixes
        .replace(/\n{3,}/g, '\n\n') // Limit consecutive line breaks
        .replace(/^\s+|\s+$/g, '') // Trim whitespace
        .replace(/\*{3,}/g, '**') // Fix excessive asterisks
        .replace(/_{3,}/g, '__'); // Fix excessive underscores

      // Add helpful context for financial queries
      if (inputValue.toLowerCase().includes('service') || inputValue.toLowerCase().includes('help')) {
        botResponseContent += '\n\n💡 **Need more specific help?**\n- Click on service buttons above\n- Ask about pricing or consultation\n- Request our contact information';
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: botResponseContent,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Enhanced error message with helpful suggestions
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: `🔄 **Connection Issue**

I apologize, but I'm having trouble connecting right now. Here's what you can do:

**Immediate Help:**
• Call us: **+92 329 6395813**
• Email: **info@nexussadvisory.com**

**Or try asking about:**
• Our accounting services
• Financial planning options  
• Investment research
• Business advisory

Please try your question again in a moment.`,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          >
            {/* Pulse animation ring */}
            <div className="absolute cursor-pointer inset-0 rounded-full bg-gradient-to-r from-[#4DC6D7] to-[#545454] animate-ping opacity-75"></div>
            
            {/* Main button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(true)}
              className="relative w-16 h-16 bg-gradient-to-br from-[#4DC6D7] via-[#3bb5c6] to-[#545454] rounded-full shadow-2xl flex items-center justify-center text-white group overflow-hidden"
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
              
              {/* Icon with sparkle effect */}
              <div className="relative z-10 flex items-center justify-center">
                <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-yellow-300 animate-pulse" />
              </div>
              
              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[#545454] text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Ask me anything!
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#545454]"></div>
              </div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? '70px' : '650px'
            }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed h-screen bottom-6 right-6 z-50 w-96 bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#4DC6D7]/30 backdrop-blur-sm flex flex-col"
          >
            {/* Header Component */}
            <ChatbotHeader
              isMinimized={isMinimized}
              setIsMinimized={setIsMinimized}
              setIsOpen={setIsOpen}
            />

            {/* Chat Content */}
            {!isMinimized && (
              <>
                {/* Messages Component */}
                <ChatbotMessages
                  messages={messages}
                  isLoading={isLoading}
                  messagesEndRef={messagesEndRef}
                  setInputValue={setInputValue}
                />

                {/* Input Component */}
                <ChatbotInput
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  sendMessage={sendMessage}
                  isLoading={isLoading}
                  handleKeyPress={handleKeyPress}
                />
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;