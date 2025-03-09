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
  description: "I'm a full stack developer with a passion for building scalable and efficient web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`  ${geistSans.variable} text-sm md:text-lg ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <DynamicCursor/>
        <Footer/>
      </body>
    </html>
  );
}
