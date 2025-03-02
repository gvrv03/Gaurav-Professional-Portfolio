"use client";

import { useState, useMemo } from "react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import ProjectCard from "@/components/Utility/ProjectCard";
import { projects } from "@/JSONData";

export default function ProjectsPage() {

  const categories = useMemo(() => {
    const cats = [
      "all",
      ...new Set(projects.map((project) => project.category)),
    ];
    return cats.map((cat) => ({
      value: cat,
      label: cat.charAt(0).toUpperCase() + cat.slice(1),
    }));
  }, []);

  const [activeTab, setActiveTab] = useState(categories[0].value);

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white py-20">
      <div className="container mx-auto  flex-col gap-10 px-5 flex">
        <h1 className="text-4xl font-bold  text-center bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          My Projects
        </h1>

        <div className="flex justify-center   rounded-lg ">
          <div className="inline-flex p-1.5 md:w-auto w-full overflow-scroll bg-gray-800/70 backdrop-blur-sm rounded-xl">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveTab(category.value)}
                className={`px-6 py-2.5 rounded-lg text-sm w-fit font-medium transition-all duration-300 ${
                  activeTab === category.value
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/20"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
