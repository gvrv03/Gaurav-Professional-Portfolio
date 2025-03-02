import { Github, Linkedin, Mail } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className="py-10 border-t border-gray-800">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
            Gaurav Narnaware
          </h3>
          <p className="text-gray-400">Full Stack Developer</p>
        </div>

        <div className="flex space-x-6">
          <a
            href="https://linkedin.com/in/gaurav-narnaware"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://github.com/gaurav-narnaware"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="mailto:gxurav.work@gmail.com"
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-gray-800 text-center">
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} Gaurav Narnaware. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
  )
}

export default Footer