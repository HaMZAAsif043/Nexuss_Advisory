import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";  // ✅ Import Poppins
import "./globals.css";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // ✅ choose weights you need
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Nexuss Advisory",
  description: "Financial Advisory Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
<Footer/>
        </footer>
      </body>
    </html>
  );
}
