import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Merriweather, Inter } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/Footer";
import Chatbot from "@/components/Chatbot/Chatbot";
import Script from "next/script";
import Image from "next/image";
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
  metadataBase: new URL("https://nexussadvisory.com"),
  title: "Nexuss Advisory",
  description:
    "Nexuss Advisory provides expert financial advisory services, helping businesses and individuals achieve sustainable growth, smarter investments, and long-term success.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },
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
  verification: {
    google: "vCXnEsE_6moL2jHRPP-JkNhwHHNDfrbgc0K3o1A-knA",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
          <head>
              <link rel="canonical" href="https://www.nexussadvisory.com/" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DML5RGFE70"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DML5RGFE70');
          `}
        </Script>

        {/* Meta Pixel Code */}
        <Script id="meta-pixel">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '778330488455497');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
         <Image
            height={1}
            width={1}
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=778330488455497&ev=PageView&noscript=1"
            alt=""
            unoptimized
            priority={false}
          />
        </noscript>
      </head>
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
