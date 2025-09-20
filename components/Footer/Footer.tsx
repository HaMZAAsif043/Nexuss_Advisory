import React from 'react';
import Link from 'next/link';
import { Twitter, Linkedin, Instagram } from "lucide-react";
const socialLinks = [
  { href: "https://twitter.com/", icon: Twitter },
  { href: "https://linkedin.com/", icon: Linkedin },
  { href: "https://instagram.com/", icon: Instagram },
];
const services = [
  { name: "Accounting & Compliance", slug: "accounting" },
  { name: "Financial Services", slug: "financial" },
  { name: "Transactional Advisory", slug: "transactional" },
  { name: "Investment Research & Advisory", slug: "investment" },
  { name: "Data-Driven Insights & Analytics", slug: "analytics" },
];
const companyLinks = [
  { name: "About Us", slug: "about" },
  { name: "Our Team", slug: "team" },
  { name: "Careers", slug: "careers" },
  { name: "News & Insights", slug: "news" },
  { name: "Contact", slug: "contact" },
  { name: "Privacy Policy", slug: "privacy" },
];
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#545454] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Nexuss Advisory</h3>
            <p className="text-white/80 mb-6 max-w-md">
              Your trusted partner for comprehensive financial advisory services. 
              We help individuals and businesses achieve their financial goals through 
              expert guidance and personalized strategies.
            </p>
            
            {/* Social Links */}
               <div className="flex space-x-4">
      {socialLinks.map(({ href, icon: Icon }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-[#545454]/80 rounded-full flex items-center justify-center hover:bg-[#4DC6D7] transition-colors"
        >
          <Icon className="w-5 h-5 text-white" />
        </a>
      ))}
    </div>
          </div>

          {/* Services */}
         <div>
      <h4 className="text-lg font-semibold mb-4">Services</h4>
      <ul className="space-y-2">
        {services.map((service, index) => (
          <li key={index}>
            <Link
              href={`/services/${service.slug}`}
              className="text-white/80 hover:text-white transition-colors"
            >
              {service.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>

          {/* Company */}
         <div>
      <h4 className="text-lg font-semibold mb-4">Company</h4>
      <ul className="space-y-2">
        {companyLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={`/${link.slug}`}
              className="text-white/80 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/80 text-sm mb-4 md:mb-0">
              © {currentYear} Nexuss Advisory. All rights reserved.
            </div>
            
            {/* Quick Links */}
            <div className="flex space-x-6 text-sm">
              <Link href="/terms" className="text-white/80 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-white/80 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-white/80 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
