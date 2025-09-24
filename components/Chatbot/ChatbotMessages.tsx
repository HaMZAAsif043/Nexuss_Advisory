"use client"
import React from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
import { 
  Bot, 
  User, 
  Calculator,
  ChartNoAxesCombined,
  Handshake,
  ExternalLink,
  Copy,
  CheckCircle,
  LaptopMinimalCheck,
  ChartCandlestick
} from 'lucide-react';
import { preprocessBotReply } from '@/utils/textProcessing';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

interface ChatbotMessagesProps {
  messages: Message[];
  isLoading: boolean;
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
  setInputValue: (value: string) => void;
}

const ChatbotMessages: React.FC<ChatbotMessagesProps> = ({
  messages,
  isLoading,
  messagesEndRef,
  setInputValue
}) => {
  const [copiedMessageId, setCopiedMessageId] = React.useState<string | null>(null);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  // Enhanced message preprocessing
  const processMessage = (content: string): string => {
    let processed = content;
    
    // Handle service-specific formatting
    processed = processed.replace(/\b(QuickBooks|Xero|Financial Planning|Investment|Tax|Compliance)\b/gi, 
      '<span class="bg-[#4DC6D7]/10 text-[#0798B1] px-2 py-1 rounded-md font-medium">$1</span>');
    
    // Highlight financial terms
    processed = processed.replace(/\b(\$[\d,]+(?:\.\d{2})?|[0-9]+%|ROI|KPI|P&L|EBITDA|Cash Flow)\b/gi,
      '<span class="bg-green-50 text-green-700 px-1 py-0.5 rounded font-medium">$1</span>');
    
    // Format phone numbers and emails
    processed = processed.replace(/(\+\d{1,3}\s?\d{3}\s?\d{7})/g,
      '<a href="tel:$1" class="text-[#4DC6D7] hover:text-[#0798B1] font-medium">$1</a>');
    
    processed = processed.replace(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g,
      '<a href="mailto:$1" class="text-[#4DC6D7] hover:text-[#0798B1] font-medium">$1</a>');
    
    return preprocessBotReply(processed);
  };

  // Copy message content
  const copyMessage = async (content: string, messageId: string) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedMessageId(messageId);
      setTimeout(() => setCopiedMessageId(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <>
      {/* Quick Service Cards */}
      <div className="flex-shrink-0 bg-gradient-to-r from-gray-50 to-white p-4 border-b border-gray-100">
        <div className="grid grid-cols-5 gap-2">
          {[
            { icon: Calculator, label: 'Accounting', color: '#4DC6D7' },
            { icon: ChartNoAxesCombined, label: 'Financial', color: '#545454' },
            { icon: ChartCandlestick, label: 'Investment', color: '#4DC6D7' },
            { icon: Handshake, label: 'Advisory', color: '#545454' },
            { icon: LaptopMinimalCheck, label: 'Analytics', color: '#545454' }
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
                
                {/* Enhanced message content with improved parsing */}
                <div className="relative group">
                  {message.type === 'bot' ? (
                    <div className="prose prose-sm max-w-none">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm, remarkBreaks]}
                        rehypePlugins={[rehypeRaw]}
                        components={{
                          // Enhanced link rendering
                          a: ({ href, children, ...props }) => (
                            <a
                              {...props}
                              href={href}
                              className="text-[#4DC6D7] hover:text-[#0798B1] underline break-words inline-flex items-center gap-1 transition-colors duration-200"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {children}
                              <ExternalLink className="w-3 h-3 opacity-60" />
                            </a>
                          ),
                          // Enhanced list rendering
                          ul: ({ children, ...props }) => (
                            <ul
                              className="list-none space-y-2 pl-0 my-3"
                              {...props}
                            >
                              {children}
                            </ul>
                          ),
                          ol: ({ children, ...props }) => (
                            <ol
                              className="list-none space-y-2 pl-0 my-3 counter-reset-item"
                              {...props}
                            >
                              {children}
                            </ol>
                          ),
                          li: ({ children, ...props }) => (
                            <li
                              className="flex items-start gap-2 text-gray-800 leading-relaxed"
                              {...props}
                            >
                              <span className="text-[#4DC6D7] font-bold mt-0.5 flex-shrink-0">•</span>
                              <span className="flex-1">{children}</span>
                            </li>
                          ),
                          // Enhanced paragraph rendering
                          p: ({ children, ...props }) => (
                            <p
                              className="mb-3 leading-relaxed text-gray-800 break-words"
                              {...props}
                            >
                              {children}
                            </p>
                          ),
                          // Enhanced heading rendering
                          h1: ({ children, ...props }) => (
                            <h1
                              className="text-lg font-bold text-[#545454] mt-4 mb-2 border-b border-gray-200 pb-1"
                              {...props}
                            >
                              {children}
                            </h1>
                          ),
                          h2: ({ children, ...props }) => (
                            <h2
                              className="text-base font-bold text-[#4DC6D7] mt-3 mb-2"
                              {...props}
                            >
                              {children}
                            </h2>
                          ),
                          h3: ({ children, ...props }) => (
                            <h3
                              className="text-sm font-semibold text-[#545454] mt-2 mb-1"
                              {...props}
                            >
                              {children}
                            </h3>
                          ),
                          // Enhanced emphasis
                          strong: ({ children, ...props }) => (
                            <strong
                              className="font-semibold text-[#545454] bg-[#4DC6D7]/10 px-1 py-0.5 rounded"
                              {...props}
                            >
                              {children}
                            </strong>
                          ),
                          em: ({ children, ...props }) => (
                            <em
                              className="italic text-[#0798B1] font-medium"
                              {...props}
                            >
                              {children}
                            </em>
                          ),
                          // Code rendering
                          code: ({ children, className, ...props }) => {
                            const isInline = !className;
                            return isInline ? (
                              <code
                                className="bg-gray-100 text-[#545454] px-2 py-1 rounded text-xs font-mono border"
                                {...props}
                              >
                                {children}
                              </code>
                            ) : (
                              <code
                                className="block bg-gray-50 text-[#545454] p-3 rounded-lg text-xs font-mono border border-gray-200 overflow-x-auto"
                                {...props}
                              >
                                {children}
                              </code>
                            );
                          },
                          // Block quote
                          blockquote: ({ children, ...props }) => (
                            <blockquote
                              className="border-l-4 border-[#4DC6D7] pl-4 py-2 bg-[#4DC6D7]/5 rounded-r-lg italic text-gray-700 my-3"
                              {...props}
                            >
                              {children}
                            </blockquote>
                          ),
                          // Table rendering
                          table: ({ children, ...props }) => (
                            <div className="overflow-x-auto my-3">
                              <table
                                className="min-w-full border border-gray-200 rounded-lg"
                                {...props}
                              >
                                {children}
                              </table>
                            </div>
                          ),
                          th: ({ children, ...props }) => (
                            <th
                              className="bg-[#4DC6D7]/10 text-[#545454] font-semibold px-3 py-2 text-left border-b border-gray-200"
                              {...props}
                            >
                              {children}
                            </th>
                          ),
                          td: ({ children, ...props }) => (
                            <td
                              className="px-3 py-2 border-b border-gray-100 text-gray-800"
                              {...props}
                            >
                              {children}
                            </td>
                          )
                        }}
                      >
                        {processMessage(message.content)}
                      </ReactMarkdown>
                    </div>
                  ) : (
                    <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
                      {message.content}
                    </p>
                  )}
                  
                  {/* Copy button for bot messages */}
                  {message.type === 'bot' && (
                    <button
                      onClick={() => copyMessage(message.content, message.id)}
                      className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 p-1.5 rounded-md hover:bg-gray-100 transition-all duration-200"
                      title="Copy message"
                    >
                      {copiedMessageId === message.id ? (
                        <CheckCircle className="w-3 h-3 text-green-500" />
                      ) : (
                        <Copy className="w-3 h-3 text-gray-400" />
                      )}
                    </button>
                  )}
                </div>
                
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
    </>
  );
};

export default ChatbotMessages;