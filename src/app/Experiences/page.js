"use client";

import { experiences } from "@/JSONData";
import { Briefcase } from "lucide-react";

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Work Experience
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl mr-4">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-purple-400">{exp.company}</p>
                </div>
              </div>
              <span className="inline-block px-3 py-1 bg-purple-900/40 text-purple-300 rounded-full text-sm mb-4">
                {exp.period}
              </span>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
