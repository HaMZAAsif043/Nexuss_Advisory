import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  X,
} from "lucide-react";
import Link from "next/link";

export const socialLinks = [
  { name: "Facebook", href: "https://facebook.com", icon: Facebook },
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  { name: "Instagram", href: "https://instagram.com", icon: Instagram },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "GitHub", href: "https://github.com", icon: Github },
];
interface SocialLinksModelsProps {
  setShowSocialLinks: (value: boolean) => void;
}
const SocialLinksModels: React.FC<SocialLinksModelsProps> = ({ setShowSocialLinks }) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center p-6">
      <div className="flex items-center justify-between w-full max-w-md mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">Nexuss.</h1>
        <div className="bg-white rounded-full p-1 hover:bg-gray-200 transition cursor-pointer" onClick={()=>setShowSocialLinks(false)}>
          <X className="h-7 w-7 hover:rotate-270 transform transition-all hover:scale-105"/>
        </div>
      </div>
      <div className="flex flex-col mt-10 items-start gap-4 w-full max-w-md">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-900 hover:text-gray-700 text-lg"
          >
            <link.icon className="w-5 h-5" />
            {link.name}
          </Link>
        ))}
      </div>
      <div className="mt-8 w-full max-w-md border-t flex flex-col justify-center  border-gray-300 pt-4 relative -bottom-20">
        <p className="text-gray-900 text-2xl">+92 321 9519624</p>
        <p className="text-gray-700 text-lg">info@email.com</p>
      </div>
    </div>
  );
};

export default SocialLinksModels;