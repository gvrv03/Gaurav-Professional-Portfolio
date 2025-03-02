import { Code } from "lucide-react";
import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava, FaGitAlt, FaFigma, FaShopify, FaWordpress } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiMysql, SiFirebase, SiTypescript, SiExpress, SiAppwrite } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        { icon: <FaReact />, name: "React.js" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3Alt />, name: "CSS3" },
        { icon: <SiTailwindcss />, name: "TailwindCSS" },
      ],
    },
    {
      category: "Backend",
      items: [
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiExpress />, name: "Express.js" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiAppwrite />, name: "AppWrite" },
        { icon: <SiFirebase />, name: "Firebase" },
      ],
    },
    {
      category: "Languages",
      items: [
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <FaPython />, name: "Python" },
        { icon: <FaJava />, name: "Java" },
      ],
    },
    {
      category: "Tools",
      items: [
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <FaFigma />, name: "Figma" },
        { icon: <FaWordpress />, name: "WordPress" },
        { icon: <FaShopify />, name: "Shopify" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center justify-center p-2 bg-purple-900/30 rounded-xl mb-4">
            <Code className="text-purple-400 mr-2" size={20} />
            <span className="text-purple-400 font-medium">My Skills</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl hover:shadow-purple-500/5 transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
              </div>

              <div className="grid  grid-cols-4 gap-6">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex flex-col items-center">
                    <div className="text-5xl text-purple-400">{skill.icon}</div>
                    <span className="text-gray-300 mt-2 text-xs md:text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
