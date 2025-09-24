"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, Sparkles } from 'lucide-react';

interface ChatbotInputProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  sendMessage: () => void;
  isLoading: boolean;
  handleKeyPress: (e: React.KeyboardEvent) => void;
}

const ChatbotInput: React.FC<ChatbotInputProps> = ({
  inputValue,
  setInputValue,
  sendMessage,
  isLoading,
  handleKeyPress
}) => {
  return (
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
  );
};

export default ChatbotInput;