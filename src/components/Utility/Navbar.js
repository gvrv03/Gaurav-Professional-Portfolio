"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Mail, Menu, X, Briefcase, FileCode, Home } from "lucide-react";
import { menuItems } from "@/JSONData";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <header
        className={`fixed  w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gray-900/90 backdrop-blur-md py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 flex py-2 justify-between items-center">
          <nav className="hidden  md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="">
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
            >
              Hire Me
            </a>
          </div>
        </div>
      </header>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <span className="text-xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
            GN
          </span>
          <button onClick={toggleSidebar} className="text-white">
            <X size={24} />
          </button>
        </div>
        <nav className="p-4">
          {menuItems.map(({ name, href, icon }) => (
            <Link
              key={name}
              href={href}
              className="block py-2 text-gray-300 hover:text-white transition-colors flex items-center"
            >
              <span className="mr-2">{icon}</span>
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
