import { GraduationCap, Star } from 'lucide-react'
import React from 'react'

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full filter blur-[150px] opacity-10"></div>
    <div className="container mx-auto px-4 relative z-10">
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="inline-flex items-center justify-center p-2 bg-purple-900/30 rounded-xl mb-4">
          <GraduationCap className="text-purple-400 mr-2" size={20} />
          <span className="text-purple-400 font-medium">Education</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Academic Background
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl hover:shadow-purple-500/5 transition-all duration-300 hover:transform hover:-translate-y-1 group">
          <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl mb-6 group-hover:rotate-6 transition-transform duration-300">
            <GraduationCap className="h-8 w-8 text-white" />
          </div>
          <span className="inline-block px-4 py-2 bg-purple-900/40 text-purple-300 rounded-full text-sm mb-4">
            2023 – 2026 (Pursuing)
          </span>
          <h3 className="text-xl font-bold mb-2">
            BTech in Computer Science & Engineering
          </h3>
          <p className="text-purple-400 mb-4">
            Government College Of Engineering, Nagpur
          </p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl hover:shadow-purple-500/5 transition-all duration-300 hover:transform hover:-translate-y-1 group">
          <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl mb-6 group-hover:rotate-6 transition-transform duration-300">
            <GraduationCap className="h-8 w-8 text-white" />
          </div>
          <span className="inline-block px-4 py-2 bg-purple-900/40 text-purple-300 rounded-full text-sm mb-4">
            2020 – 2023
          </span>
          <h3 className="text-xl font-bold mb-2">
            Diploma in Computer Engineering
          </h3>
          <p className="text-purple-400 mb-4">
            Government Polytechnic, Arvi
          </p>
          <div className="flex items-center">
            <div className="flex items-center mr-2">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            </div>
            <span className="text-white font-medium">85%</span>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl hover:shadow-purple-500/5 transition-all duration-300 hover:transform hover:-translate-y-1 group">
          <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl mb-6 group-hover:rotate-6 transition-transform duration-300">
            <GraduationCap className="h-8 w-8 text-white" />
          </div>
          <span className="inline-block px-4 py-2 bg-purple-900/40 text-purple-300 rounded-full text-sm mb-4">
            2019 – 2020
          </span>
          <h3 className="text-xl font-bold mb-2">SSC</h3>
          <p className="text-purple-400 mb-4">
            Shri Samarth High School, Ghatanji
          </p>
          <div className="flex items-center">
            <div className="flex items-center mr-2">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            </div>
            <span className="text-white font-medium">88%</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Education