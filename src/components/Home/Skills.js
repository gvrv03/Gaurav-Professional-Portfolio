import { Code } from "lucide-react";
import React from "react";

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        "React.js",
        "Next.js",
        "HTML5",
        "CSS3",
        "TailwindCSS",
        "Material UI",
      ],
      icon: "🎨",
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "MongoDB", "MySQL", "Firebase"],
      icon: "⚙️",
    },
    {
      category: "Languages",
      items: ["JavaScript (ES6+)", "TypeScript", "Python", "Java"],
      icon: "💻",
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Figma", "Canva", "WordPress", "Shopify"],
      icon: "🛠️",
    },
  ];
  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600 rounded-full filter blur-[150px] opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center justify-center p-2 bg-purple-900/30 rounded-xl mb-4">
            <Code className="text-purple-400 mr-2" size={20} />
            <span className="text-purple-400 font-medium">My Skills</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Expertise
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl hover:shadow-purple-500/5 transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl mr-4 text-xl">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {skillGroup.category}
                </h3>
              </div>

              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="relative">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill}</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-hover:animate-pulse"
                        style={{ width: `${Math.random() * 30 + 70}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:-translate-y-1">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-2">
              3+
            </div>
            <p className="text-gray-400">Years Experience</p>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:-translate-y-1">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-2">
              10+
            </div>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:-translate-y-1">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-2">
              5+
            </div>
            <p className="text-gray-400">Happy Clients</p>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:-translate-y-1">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-2">
              3+
            </div>
            <p className="text-gray-400">Technologies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
