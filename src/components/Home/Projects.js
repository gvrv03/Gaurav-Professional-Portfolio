"use client";
import { ExternalLink, FileCode } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import ProjectCard from "../Utility/ProjectCard";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600 rounded-full filter blur-[150px] opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center justify-center p-2 bg-purple-900/30 rounded-xl mb-4">
            <FileCode className="text-purple-400 mr-2" size={20} />
            <span className="text-purple-400 font-medium">Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Recent Work
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-gray-800/70 backdrop-blur-sm rounded-xl">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === "all"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/20"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveTab("fullstack")}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === "fullstack"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/20"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Full Stack
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {filteredProjects.slice(0, 4).map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

const projects = [
  {
    title: "GDGC Platform",
    description:
      "A platform for listing GDG events and publishing blogs, featuring a dashboard for website management and bulk emailing functionality with custom templates.",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    category: "fullstack",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "DSY Consultancy",
    description:
      "An application for diploma students to find engineering colleges based on their percentage, category, and other criteria.",
    technologies: ["React.js", "Node.js", "MongoDB"],
    category: "fullstack",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Campus Plant Lens",
    description:
      "An application to manage plants and flowers within an institute, including QR code generation for plant identification.",
    technologies: ["React.js", "Node.js", "MongoDB"],
    category: "fullstack",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Digital Product Selling Application",
    description:
      "An application where admins can create and publish digital products, and users can purchase them using the Razorpay payment gateway.",
    technologies: ["React.js", "Node.js", "MongoDB", "Razorpay API"],
    category: "fullstack",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Blog Application",
    description:
      "A personal blog application where only the admin can create and publish blogs, and users can save and view them.",
    technologies: ["React.js", "Node.js", "MongoDB", "Rich Text Editor"],
    category: "fullstack",
    image: "/placeholder.svg?height=300&width=500",
  },
];
