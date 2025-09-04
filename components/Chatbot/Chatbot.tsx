"use client"
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Minimize2, 
  Calculator,
  TrendingUp,
  BarChart3,
  Handshake,
  Phone,
  Mail,
  Sparkles
} from 'lucide-react';
import axios from 'axios';
import { preprocessBotReply } from '@/utils/textProcessing';

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
      content: `Hello! I'm your **Nexuss Advisory AI assistant**. 

## How can I help you today?

I can provide information about our services:

### Core Services
- **Accounting & BookKeeping** - QuickBooks setup, monthly reconciliation
- **Financial Services** - Budgeting, cash flow analysis  
- **Investment Research** - Portfolio optimization, market analysis
- **Business Advisory** - Strategic planning, M&A support

### Quick Actions
1. Ask about our services
2. Schedule a consultation  
3. Get pricing information

*Feel free to ask me anything about financial advisory services!*`,
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

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: response.data.message,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: 'I apologize, but I\'m having trouble connecting right now. Please try again later or contact us directly.',
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

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <>
      {/* Enhanced Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          >
            {/* Pulse animation ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4DC6D7] to-[#545454] animate-ping opacity-75"></div>
            
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
            className="fixed bottom-6 right-6 z-50 w-96 bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#4DC6D7]/30 backdrop-blur-sm flex flex-col"
          >
            {/* Enhanced Header */}
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
                    <h3 className="font-bold text-lg">Nexuss AI Assistant</h3>
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

            {/* Enhanced Chat Content */}
            {!isMinimized && (
              <>
                {/* Quick Service Cards */}
                <div className="flex-shrink-0 bg-gradient-to-r from-gray-50 to-white p-4 border-b border-gray-100">
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { icon: Calculator, label: 'Accounting', color: '#4DC6D7' },
                      { icon: TrendingUp, label: 'Financial', color: '#545454' },
                      { icon: BarChart3, label: 'Investment', color: '#4DC6D7' },
                      { icon: Handshake, label: 'Advisory', color: '#545454' }
                    ].map((service) => (
                      <motion.button
                        key={service.label}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex flex-col items-center p-2 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100"
                        onClick={() => setInputValue(`Tell me about ${service.label} services`)}
                      >
                        <service.icon 
                          className="w-5 h-5 mb-1" 
                          style={{ color: service.color }} 
                        />
                        <span className="text-xs text-[#545454] font-medium">{service.label}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Enhanced Messages */}
                <div className="flex-1 max-h-80 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50/50 to-white custom-scrollbar">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start space-x-3 max-w-xs ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-md ${
                          message.type === 'user' 
                            ? 'bg-gradient-to-br from-[#545454] to-[#454545] text-white' 
                            : 'bg-gradient-to-br from-[#4DC6D7] to-[#3bb5c6] text-white'
                        }`}>
                          {message.type === 'user' ? (
                            <User className="w-5 h-5" />
                          ) : (
                            <Bot className="w-5 h-5" />
                          )}
                        </div>
                        <div className={`rounded-2xl p-4 relative ${
                          message.type === 'user'
                            ? 'bg-gradient-to-br from-[#545454] to-[#454545] text-white rounded-br-sm shadow-lg'
                            : 'bg-white text-[#545454] rounded-bl-sm shadow-lg border border-gray-100'
                        }`}>
                          {/* Message tail */}
                          <div className={`absolute ${
                            message.type === 'user' 
                              ? 'bottom-0 right-0 transform translate-x-1 translate-y-1 w-0 h-0 border-l-8 border-t-8 border-l-transparent border-t-[#454545]'
                              : 'bottom-0 left-0 transform -translate-x-1 translate-y-1 w-0 h-0 border-r-8 border-t-8 border-r-transparent border-t-white'
                          }`}></div>
                          
                          {/* Enhanced message content with HTML support for bot messages */}
                          {message.type === 'bot' ? (
                            <div 
                              className="text-sm leading-relaxed"
                              dangerouslySetInnerHTML={{ 
                                __html: preprocessBotReply(message.content) 
                              }}
                            />
                          ) : (
                            <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                          )}
                          
                          <p className={`text-xs mt-2 ${
                            message.type === 'user' ? 'text-white/70' : 'text-[#545454]/50'
                          }`}>
                            {formatTime(message.timestamp)}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Enhanced Loading indicator */}
                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="flex items-start space-x-3 max-w-xs">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#4DC6D7] to-[#3bb5c6] rounded-full flex items-center justify-center shadow-md">
                          <Bot className="w-5 h-5 text-white" />
                        </div>
                        <div className="bg-white rounded-2xl rounded-bl-sm p-4 shadow-lg border border-gray-100">
                          <div className="flex space-x-2 items-center">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-[#4DC6D7] rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-[#4DC6D7] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                              <div className="w-2 h-2 bg-[#4DC6D7] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            </div>
                            <span className="text-xs text-[#545454]/60 ml-2">AI is thinking...</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Enhanced Input Section */}
                <div className="flex-shrink-0 p-4 bg-white border-t-2 border-[#4DC6D7]/20 rounded-b-2xl">
                  {/* Quick Contact Info */}
                  <div className="flex items-center justify-center space-x-6 mb-3 pb-3 border-b border-gray-200">
                    <div className="flex items-center space-x-2 text-xs text-[#545454]/70">
                      <Phone className="w-3 h-3 text-[#4DC6D7]" />
                      <span>+92 329 6395813</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-[#545454]/70">
                      <Mail className="w-3 h-3 text-[#4DC6D7]" />
                      <span>info@nexussadvisory.com</span>
                    </div>
                  </div>

                  <div className="flex items-end space-x-3">
                    <div className="flex-1 relative">
                      <textarea
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Ask about our financial services..."
                        className="w-full p-3 pr-4 border-2 border-[#545454]/20 rounded-xl focus:border-[#4DC6D7] focus:outline-none resize-none text-[#545454] text-sm placeholder-[#545454]/50 transition-all duration-200 bg-white"
                        rows={1}
                        disabled={isLoading}
                        style={{ minHeight: '44px', maxHeight: '120px' }}
                      />
                      {/* Character counter for long messages */}
                      {inputValue.length > 100 && (
                        <div className="absolute bottom-1 right-2 text-xs text-[#545454]/40">
                          {inputValue.length}/500
                        </div>
                      )}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={sendMessage}
                      disabled={!inputValue.trim() || isLoading}
                      className={`p-3 rounded-xl transition-all duration-200 flex items-center justify-center ${
                        inputValue.trim() && !isLoading
                          ? 'bg-gradient-to-r from-[#4DC6D7] to-[#545454] text-white shadow-lg hover:shadow-xl'
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {isLoading ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                    </motion.button>
                  </div>
                  
                  <div className="flex items-center justify-center mt-3 text-xs text-[#545454]/50">
                    <Sparkles className="w-3 h-3 mr-1 text-[#4DC6D7]" />
                    <span>Powered by Nexuss Advisory AI • Secure & Confidential</span>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
