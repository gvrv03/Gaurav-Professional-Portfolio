import { ExternalLink } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-800/50 p-3 flex-col flex  gap-5  backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:transform hover:-translate-y-2 group">
      <div className="relative rounded-md overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={500}
          height={300}
          className="w-full  object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
      </div>
      <h3 className="text-xl font-bold  group-hover:text-purple-400 transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-gray-400 texjus  ">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 ">
        {project.technologies.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-3 py-1 bg-purple-900/40 text-purple-300 rounded-full text-xs"
          >
            {tech}
          </span>
        ))}
      </div>
      {/* <div className="flex justify-end">
        <a
          href="#"
          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white text-sm hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
        >
          View Project <ExternalLink size={14} className="ml-1.5" />
        </a>
      </div> */}
    </div>
  );
};

export default ProjectCard;
