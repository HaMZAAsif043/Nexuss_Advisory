import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  X,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export const socialLinks = [
  { name: "Facebook", href: "https://facebook.com", icon: Facebook, color: "#1877F2" },
  { name: "Twitter", href: "https://twitter.com", icon: Twitter, color: "#1DA1F2" },
  { name: "Instagram", href: "https://instagram.com", icon: Instagram, color: "#E4405F" },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin, color: "#0A66C2" },
  { name: "GitHub", href: "https://github.com", icon: Github, color: "#333333" },
];

interface SocialLinksModelsProps {
  setShowSocialLinks: (value: boolean) => void;
}

const SocialLinksModels: React.FC<SocialLinksModelsProps> = ({ setShowSocialLinks }) => {
  return (
<div className="bg-white/80 backdrop-blur-2xl rounded-2xl shadow-lg p-6 border border-white/20">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-[#4DC6D7]/20 to-[#0798B1]/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 left-10 w-24 h-24 bg-gradient-to-br from-[#0798B1]/20 to-[#4DC6D7]/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [360, 180, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Header */}
      <motion.div 
        className="flex items-center justify-between w-full max-w-md mb-8"
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
          onClick={()=>setShowSocialLinks(false)}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <X className="h-6 w-6 text-[#545454] group-hover:text-[#4DC6D7] transition-colors duration-300"/>
        </motion.div>
      </motion.div>

      {/* Social Links */}
      <motion.div 
        className="flex flex-col mt-10 items-start gap-4 w-full max-w-md"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.h2 
          className="text-lg font-semibold text-[#545454] mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Connect With Us
        </motion.h2>
        
        {socialLinks.map((link, index) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
          >
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 text-[#545454] hover:text-[#3DB1C5] text-lg w-full p-3 rounded-xl transition-all duration-300 hover:shadow-lg relative overflow-hidden"
            >
              {/* Hover Background */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                style={{ background: `linear-gradient(135deg, ${link.color}15, ${link.color}25)` }}
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Icon Container */}
              <motion.div 
                className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ 
                  background: `linear-gradient(135deg, ${link.color}20, ${link.color}40)`,
                  border: `1px solid ${link.color}30`
                }}
                whileHover={{ rotate: 15 }}
              >
                <link.icon 
                  className="w-5 h-5 transition-colors duration-300" 
                  style={{ color: link.color }}
                />
              </motion.div>
              
              {/* Text */}
              <span className="relative z-10 font-medium">{link.name}</span>
              
              {/* Arrow */}
              <motion.span 
                className="relative z-10 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Contact Information */}
      <motion.div 
        className="mt-12 w-full max-w-md border-t border-[#4DC6D7]/20 pt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <h3 className="text-lg font-semibold text-[#545454] mb-4">Get In Touch</h3>
        
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div 
            className="flex items-center gap-3 p-3 rounded-xl bg-white/50 backdrop-blur-sm border border-[#4DC6D7]/20 hover:bg-[#4DC6D7]/10 transition-all duration-300 group cursor-pointer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-[#4DC6D7] to-[#0798B1] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-[#545454] font-semibold text-lg">+92 321 9519624</p>
              <p className="text-[#545454]/70 text-sm">Call us anytime</p>
            </div>
          </motion.div>

          <motion.div 
            className="flex items-center gap-3 p-3 rounded-xl bg-white/50 backdrop-blur-sm border border-[#4DC6D7]/20 hover:bg-[#4DC6D7]/10 transition-all duration-300 group cursor-pointer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-[#0798B1] to-[#4DC6D7] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-[#545454] font-semibold text-lg">info@nexussadvisory.com</p>
              <p className="text-[#545454]/70 text-sm">Send us an email</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );  
};

export default SocialLinksModels;
