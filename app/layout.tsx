import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Merriweather, Inter } from "next/font/google"; // ✅ Replace with better fonts
import "./globals.css";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/Footer";
import Chatbot from "@/components/Chatbot/Chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const merriw = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"], // ✅ strong headings
  variable: "--font-merriweather",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nexuss Advisory",
  description:
    "Nexuss Advisory provides expert financial advisory services, helping businesses and individuals achieve sustainable growth, smarter investments, and long-term success.",
  icons: [
    { rel: "icon", url: "/logo.png" },
    { rel: "apple-touch-icon", url: "/logo.png" },
  ],
  openGraph: {
    title: "Nexuss Advisory",
    description:
      "Trusted financial advisory services for businesses and individuals.",
    url: "https://nexussadvisory.com", 
    siteName: "Nexuss Advisory",
    images: [
      {
        url: "/logo.png", 
        width: 1200,
        height: 630,
        alt: "Nexuss Advisory Logo",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${merriw.variable} ${inter.variable} antialiased overflow-x-hidden`}
      >
        <header className="relative z-50">
          <Navbar />
        </header>
        <main>{children}</main>
        <Chatbot />
           <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
