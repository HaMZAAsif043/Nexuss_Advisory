import React from "react";
import { Search } from "lucide-react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

interface SearchBarProps {
  setShowSearchBar: (value: boolean) => void;
}

const SearchBar : React.FC<SearchBarProps> =({setShowSearchBar}) => {
  return (
    <div className="h-full flex flex-col items-center w-full justify-between relative overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-[#4DC6D7]/10 via-transparent to-[#0798B1]/10"
        animate={{
          background: [
            "linear-gradient(135deg, rgba(77, 198, 215, 0.1) 0%, transparent 50%, rgba(7, 152, 177, 0.1) 100%)",
            "linear-gradient(225deg, rgba(7, 152, 177, 0.1) 0%, transparent 50%, rgba(77, 198, 215, 0.1) 100%)",
            "linear-gradient(135deg, rgba(77, 198, 215, 0.1) 0%, transparent 50%, rgba(7, 152, 177, 0.1) 100%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="relative z-10 h-full flex flex-col items-center w-full justify-between p-10">
        {/* Header */}
        <motion.div 
          className="flex items-center justify-between w-full mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-3xl font-bold bg-gradient-to-r from-[#545454] via-[#4DC6D7] to-[#0798B1] bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Nexuss.
          </motion.h1>
          
          <motion.div 
            className="group bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-[#4DC6D7]/10 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl border border-[#4DC6D7]/20" 
            onClick={()=>setShowSearchBar(false)}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <X className="h-8 w-8 text-[#545454] group-hover:text-[#4DC6D7] transition-colors duration-300" />
          </motion.div>
        </motion.div>

        {/* Search Input */}
        <motion.div 
          className="w-full max-w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="relative group">
            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#4DC6D7] via-[#0798B1] to-[#4DC6D7] p-[2px]"
              animate={{
                background: [
                  "linear-gradient(45deg, #4DC6D7 0%, #0798B1 50%, #4DC6D7 100%)",
                  "linear-gradient(135deg, #0798B1 0%, #4DC6D7 50%, #0798B1 100%)",
                  "linear-gradient(45deg, #4DC6D7 0%, #0798B1 50%, #4DC6D7 100%)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="bg-white rounded-2xl p-6">
                <div className="relative">
                  <motion.input
                    type="text"
                    placeholder="Type words and hit enter..."
                    className="w-full px-4 py-4 text-2xl md:text-3xl text-[#545454] bg-transparent border-none focus:outline-none placeholder-[#545454]/50"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                  
                  <motion.div
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#4DC6D7] to-[#0798B1] p-3 rounded-full cursor-pointer shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{ 
                      boxShadow: [
                        "0 4px 15px rgba(77, 198, 215, 0.3)",
                        "0 8px 25px rgba(7, 152, 177, 0.4)",
                        "0 4px 15px rgba(77, 198, 215, 0.3)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Search className="text-white h-6 w-6 md:h-8 md:w-8" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Search Suggestions or Recent Searches */}
          <motion.div
            className="mt-6 space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-[#545454]/70 text-sm mb-4">Popular searches:</p>
            <div className="flex flex-wrap gap-2">
              {["Financial Planning", "Investment", "Tax Services", "Business Advisory"].map((tag, index) => (
                <motion.span
                  key={tag}
                  className="px-4 py-2 bg-white/80 backdrop-blur-sm text-[#545454] rounded-full text-sm cursor-pointer hover:bg-[#4DC6D7] hover:text-white transition-all duration-300 border border-[#4DC6D7]/20 shadow-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SearchBar;
