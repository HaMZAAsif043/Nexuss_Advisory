"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Grid3x3, Menu, X } from "lucide-react";
import SocialLinksModels from "./SocialLinksModels";
import { motion, AnimatePresence } from "framer-motion";
import SearchBar from "./SearchBar";
import ServicesDropdown from "./ServicesDropdown";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [ShowSocialLinks, setShowSocialLinks] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Pages", href: "/pages" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contacts", href: "/contacts" },
  ];
  return (
    <nav className="relative p-3 bg-white/95 backdrop-blur-lg border-b border-[#4DC6D7]/20 shadow-lg flex items-center justify-between overflow-visible z-50" onClick={()=>ShowSocialLinks && setShowSocialLinks(false)}>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-[#4DC6D7]/5 to-white opacity-50"></div>
      
      <div className="relative z-10 container mx-auto flex items-center justify-between overflow-visible">
        {/* Logo */}
        <Link href={"/"} className="group flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Image 
              src="/logo.jpg" 
              alt="Nexuss Advisory Logo" 
              width={120} 
              height={120} 
              className="rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300"
            />
          </motion.div>
        </Link>
        
        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center overflow-visible">
          {navLinks.slice(0, 2).map((link) => (
            <li key={link.name} className="inline-block mx-4">
              <Link
                href={link.href}
                className={`group relative inline-block text-[#545454] font-medium px-3 py-2 rounded-lg transition-all duration-300
                   hover:text-[#0798B1] hover:bg-[#4DC6D7]/10
                   after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 
                   after:w-0 after:h-[3px] after:bg-gradient-to-r after:from-[#4DC6D7] after:to-[#0798B1] 
                   after:transition-all after:duration-300 after:rounded-full
                   hover:after:w-full ${
                     pathname === link.href ? "text-[#0798B1] after:w-full bg-[#4DC6D7]/10" : ""
                   }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <ServicesDropdown />
          {navLinks.slice(2).map((link) => (
            <li key={link.name} className="inline-block mx-4">
              <Link
                href={link.href}
                className={`group relative inline-block text-[#545454] font-medium px-3 py-2 rounded-lg transition-all duration-300
                   hover:text-[#0798B1] hover:bg-[#4DC6D7]/10
                   after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 
                   after:w-0 after:h-[3px] after:bg-gradient-to-r after:from-[#4DC6D7] after:to-[#0798B1] 
                   after:transition-all after:duration-300 after:rounded-full
                   hover:after:w-full ${
                     pathname === link.href ? "text-[#0798B1] after:w-full bg-[#4DC6D7]/10" : ""
                   }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <motion.button 
            onClick={() => setShowSearchBar(!showSearchBar)}
            className="group relative p-2 rounded-lg hover:bg-[#4DC6D7]/10 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Search className="w-6 h-6 text-[#545454] group-hover:text-[#4DC6D7] transition-colors duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#4DC6D7]/20 to-[#0798B1]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>

          <motion.button 
            onClick={() => (setShowSocialLinks(!ShowSocialLinks))}
            className="group relative p-2 rounded-lg hover:bg-[#4DC6D7]/10 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Grid3x3 className="w-6 h-6 text-[#545454] group-hover:text-[#4DC6D7] transition-colors duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#4DC6D7]/20 to-[#0798B1]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <motion.button 
            onClick={() => setShowSearchBar(!showSearchBar)}
            className="group relative p-2 rounded-lg hover:bg-[#4DC6D7]/10 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Search className="w-6 h-6 text-[#545454] group-hover:text-[#4DC6D7] transition-colors duration-300" />
          </motion.button>

          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="group relative p-2 rounded-lg hover:bg-[#4DC6D7]/10 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                  exit={{ rotate: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-[#545454] group-hover:text-[#4DC6D7] transition-colors duration-300" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 180 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 180 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-[#545454] group-hover:text-[#4DC6D7] transition-colors duration-300" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-[#4DC6D7]/20 shadow-xl lg:hidden z-40"
          >
            <div className="container mx-auto px-4 py-6">
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                {/* Mobile Navigation Links */}
                {navLinks.slice(0, 2).map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-3 px-4 rounded-lg text-[#545454] font-medium transition-all duration-300 hover:bg-[#4DC6D7]/10 hover:text-[#0798B1] ${
                        pathname === link.href ? "bg-[#4DC6D7]/10 text-[#0798B1]" : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Services Section */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="border border-[#4DC6D7]/20 rounded-lg overflow-hidden"
                >
                  <Link
                    href="/services"
                    className="block py-3 px-4 bg-gradient-to-r from-[#4DC6D7]/10 to-[#0798B1]/5 text-[#545454] font-semibold hover:from-[#4DC6D7]/20 hover:to-[#0798B1]/10 transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Our Services
                  </Link>
                  <div className="bg-white/50 p-2 space-y-1">
                    {[
                      { name: "Accounting & BookKeeping", href: "/services/accounting" },
                      { name: "Financial Services", href: "/services/financial" },
                      { name: "Investment Research", href: "/services/investment" },
                      { name: "Business Advisory", href: "/services/business" },
                      { name: "Data & Analytics", href: "/services/analytics" }
                    ].map((service, serviceIndex) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 px-3 text-sm text-[#545454]/80 rounded hover:bg-[#4DC6D7]/10 hover:text-[#0798B1] transition-all duration-200"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>

                {/* Remaining Navigation Links */}
                {navLinks.slice(2).map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-3 px-4 rounded-lg text-[#545454] font-medium transition-all duration-300 hover:bg-[#4DC6D7]/10 hover:text-[#0798B1] ${
                        pathname === link.href ? "bg-[#4DC6D7]/10 text-[#0798B1]" : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Social Links Button */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="pt-4 border-t border-[#4DC6D7]/20"
                >
                  <button
                    onClick={() => {
                      setShowSocialLinks(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full py-3 px-4 bg-gradient-to-r from-[#4DC6D7] to-[#0798B1] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Connect With Us
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

<AnimatePresence>
  {showSearchBar && (
    <motion.div
      initial={{ y: "-100%", opacity: 0, scale: 0.95 }}
      animate={{ y: "0%", opacity: 1, scale: 1 }}
      exit={{ y: "-100%", opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-br from-white via-[#4DC6D7]/5 to-white backdrop-blur-xl p-5 rounded-b-2xl shadow-2xl z-50 border-b border-[#4DC6D7]/20"
      onClick={(e) => e.stopPropagation()}
    >
        <SearchBar setShowSearchBar={setShowSearchBar}/>
    </motion.div>
  )}

  {/* Enhanced Sidebar from Right */}
  {ShowSocialLinks && (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed top-0 right-0 h-full w-1/3 bg-gradient-to-br from-[#4DC6D7]/10 via-white to-[#0798B1]/5 backdrop-blur-xl p-5 shadow-2xl z-50 border-l border-[#4DC6D7]/20"
      onClick={(e) => e.stopPropagation()}
    >
      <SocialLinksModels setShowSocialLinks={setShowSocialLinks} />
    </motion.div>
  )}
</AnimatePresence>

    </nav>
  );
};

export default Navbar;
