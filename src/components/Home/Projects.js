"use client";
import { ExternalLink, FileCode } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import ProjectCard from "../Utility/ProjectCard";
import { projects } from "@/JSONData";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600 rounded-full filter blur-[150px] opacity-10"></div>
      <div className="container mx-auto flex-col flex gap-10 items-center justify-center px-4 relative z-10">
        <div className="flex flex-col gap-5 items-center  text-center">
          <div className="inline-flex items-center justify-center p-2 bg-purple-900/30 rounded-xl ">
            <FileCode className="text-purple-400 mr-2" size={20} />
            <span className="text-purple-400 font-medium">Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold ">
            My Recent Work
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {projects.slice(0, 4).map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>

        <div className="flex justify-end">
          <Link
            href="/Projects"
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white text-sm hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
          >
            View More Projects <ExternalLink size={14} className="ml-1.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
