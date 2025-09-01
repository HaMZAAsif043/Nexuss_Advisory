"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Grid3x3 } from "lucide-react";
import SocialLinksModels from "./SocialLinksModels";
import { motion, AnimatePresence } from "framer-motion";
import SearchBar from "./SearchBar";
// import { signal } from "@preact/signals-react";
import { useState } from "react";
const Navbar = () => {
  const pathname = usePathname();
  const [ShowSocialLinks,setShowSocialLinks] = useState(false);
  const [showSearchBar,setShowSearchBar] = useState(false);
//   const ShowSocialLinks = signal(true);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Services", href: "/services" },
    { name: "Pages", href: "/pages" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Shop", href: "/shop" },
    { name: "Contacts", href: "/contacts" },
  ];
  return (
    <nav className="p-10 border-b border-white shadow-md flex items-center justify-between" onClick={()=>ShowSocialLinks && setShowSocialLinks(false)}>
      <div className="container mx-auto flex items-center gap-10">
        <Link href={"/"} className="text-gray-800 font-bold text-2xl">
          Nexuss Adv
        </Link>
        <ul>
          {navLinks.map((link) => (
            <li key={link.name} className="inline-block mx-4">
              <Link
                href={link.href}
                className={`relative inline-block text-[#2E333A] 
                   after:content-[''] after:absolute after:left-0 after:-bottom-1 
                   after:w-0 after:h-[2px] after:bg-slate-600 
                   after:transition-all after:duration-300 
                   hover:after:w-full ${
                     pathname === link.href ? "after:w-full" : ""
                   }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    <div className="flex items-center gap-6">
    <button onClick={() => setShowSearchBar(!showSearchBar)}>
  <Search className="w-7 h-7 text-gray-800 cursor-pointer hover:scale-110" />
  </button>

  <button onClick={() => (setShowSocialLinks(!ShowSocialLinks))}>
    <Grid3x3 className="w-8 h-8 text-gray-800 cursor-pointer hover:scale-110" />
  </button>
</div>

<AnimatePresence>
  {showSearchBar && (
    <motion.div
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-white p-5 rounded-lg shadow-lg z-50"
      onClick={(e) => e.stopPropagation()}
    >
        <SearchBar setShowSearchBar={setShowSearchBar}/>
    </motion.div>
  )}

  {/* Sidebar from Right */}
  {ShowSocialLinks && (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed top-0 right-0 h-full w-1/3 bg-[#F2F7FC] p-5 shadow-lg z-50"
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
