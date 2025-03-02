import { User } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-[150px] opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center justify-center p-2 bg-purple-900/30 rounded-xl mb-4">
            <User className="text-purple-400 mr-2" size={20} />
            <span className="text-purple-400 font-medium">About Me</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Know Me Better
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl hover:shadow-purple-500/5 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                Full Stack Developer
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Detail-oriented and passionate Full Stack Developer with
                expertise in building dynamic, responsive, and scalable web
                applications. Proficient in modern front-end and back-end
                technologies, with a strong ability to translate business
                requirements into efficient technical solutions.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Experienced in collaborating with cross-functional teams to
                deliver user-centric applications. Skilled in JavaScript (ES6+),
                React.js, Node.js, and MongoDB with a proven track record of
                developing and deploying high-quality web applications.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                  <span className="text-gray-300 font-medium">
                    Web Development
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                  <span className="text-gray-300 font-medium">
                    Mobile App Development
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                  <span className="text-gray-300 font-medium">
                    UI/UX Design
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                  <span className="text-gray-300 font-medium">
                    Database Management
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl hover:shadow-purple-500/5 transition-all duration-300 h-full">
              <h3 className="text-xl font-bold mb-6 text-white">
                Personal Information
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 mb-1">Name</p>
                  <p className="text-white font-medium">Gaurav Narnaware</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Location</p>
                  <p className="text-white font-medium">
                    Yavatmal, Maharashtra
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Email</p>
                  <a
                    href="mailto:gxurav.work@gmail.com"
                    className="text-purple-400 font-medium hover:text-purple-300 transition-colors"
                  >
                    gxurav.work@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Phone</p>
                  <p className="text-white font-medium">+91 7796305801</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Interests</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-3 py-1 bg-purple-900/40 text-purple-300 rounded-full text-sm">
                      Badminton
                    </span>
                    <span className="px-3 py-1 bg-purple-900/40 text-purple-300 rounded-full text-sm">
                      Chess
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
