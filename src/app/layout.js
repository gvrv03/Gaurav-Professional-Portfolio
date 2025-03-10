import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Utility/Navbar";
import Footer from "@/components/Utility/Footer";
import DynamicCursor from "@/components/Utility/DynamicCrsor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gaurav Narnaware | Full Stack Developer",
  description:
    "I'm a full stack developer with a passion for building scalable and efficient web applications.",
  openGraph: {
    title: "Gaurav Narnaware | Full Stack Developer",
    description:
      "I'm a full stack developer with a passion for building scalable and efficient web applications.",
    images: "/Profile.png",
  },
  icons: {
    icon: "/Profile.png",
  },
  twitter: {
    card: "Gaurav Narnaware",
    title: "Gaurav Narnaware | Full Stack Developer",
    description:
      "I'm a full stack developer with a passion for building scalable and efficient web applications.",
    images: "/Profile.png",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gaurav Narnaware",
    alternateName: "Gaurav",
    url: "https://gvrv.in/",
    logo: "https://gvrv.in/logo.svg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "7796305801",
      contactType: "customer service",
      contactOption: "HearingImpairedSupported",
      areaServed: "IN",
      availableLanguage: "Hindi",
    },
    sameAs: "https://gvrv.in/",
    potentialAction: [
      {
        "@type": "SearchAction",
        target: "https://gvrv.in/AboutUs{search_term_string}",
        "query-input": "required name=search_term_string",
      },
      {
        "@type": "SearchAction",
        target: "https://gvrv.in/ContactUs{search_term_string}",
        "query-input": "required name=search_term_string",
      },
    ],
  };
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="google-site-verification" content="9eMIWhLUhXFxU0JUtOkLcYspo3B7TVjUwaLUAA5M7lg" />
      </head>
      <body
        className={`  ${geistSans.variable} text-sm md:text-lg ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <DynamicCursor />
        <Footer />
      </body>
    </html>
  );
}
