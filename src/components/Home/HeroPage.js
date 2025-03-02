import { ArrowRight, ChevronRight, Code, Download, FileCode, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import React from "react";

const HeroPage = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-600 rounded-full filter blur-[120px] opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-600 rounded-full filter blur-[120px] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 z-10 md:py-20">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 mb-10  ">
            <p className="text-purple-400 font-medium mb-4">👋 Hello, I am</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
                Gaurav Narnaware
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-300">
              Full Stack Developer
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-lg">
              Detail-oriented and passionate Full Stack Developer with expertise
              in building dynamic, responsive, and scalable web applications.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 flex items-center"
              >
                Hire Me <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="GauravResume.pdf"
                download={true}
                className="px-8 py-3 rounded-full border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 flex items-center"
              >
                Download CV <Download className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="flex space-x-5 mt-8">
              <a
                href="https://linkedin.com/in/gaurav-narnaware"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors duration-300 group"
              >
                <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://github.com/gaurav-narnaware"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors duration-300 group"
              >
                <Github className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="mailto:gxurav.work@gmail.com"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors duration-300 group"
              >
                <Mail className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex pb-10 items-center justify-center ">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl relative z-10">
                <Image
                  src="/Profile.png"
                  alt="Gaurav Narnaware"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-purple-500 to-pink-600 p-2 md:p-4 rounded-2xl shadow-lg rotate-6 animate-float">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-blue-500 to-purple-600 p-2 md:p-4 rounded-2xl shadow-lg -rotate-6 animate-float-delay">
                <FileCode className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="flex flex-col items-center text-gray-400 hover:text-white transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronRight className="h-5 w-5 rotate-90" />
        </a>
      </div>
    </section>
  );
};

export default HeroPage;
