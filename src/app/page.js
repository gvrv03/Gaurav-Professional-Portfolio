"use client";

import HeroPage from "@/components/Home/HeroPage";
import About from "@/components/Home/About";
import Skills from "@/components/Home/Skills";
import Education from "@/components/Home/Education";
import Projects from "@/components/Home/Projects";
import Contact from "@/components/Home/Contact";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* Hero Section */}
      <HeroPage />
      {/* About Section */}
      <About />
      {/* Skills Section */}
      <Skills />

      <Education />

      <Projects />
      <Contact />
    </div>
  );
}
