"use client";

import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const getTechStackColor = (tech: string) => {
    const colors: Record<string, string> = {
      "AWS": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      "React": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      "Python": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      "Docker": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
      "Node.js": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      "TypeScript": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      "MongoDB": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      "PostgreSQL": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      "MySQL": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      "Machine Learning": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      "Blockchain": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      "Solidity": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      "Zero-Knowledge": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      "Cryptography": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      "FastAPI": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      "Express": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      "Tailwind": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
      "React Native": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      "Firebase": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      "Nginx": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      "Jenkins": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
      "Linux": "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
      "Bash": "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
      "Monitoring": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      "APIs": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      "Networking": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      "EC2": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      "C": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      "Java": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
      "JavaScript": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      "HTML": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      "CSS": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    };
    return colors[tech] || "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            A showcase of my technical journey and problem-solving capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass dark:glass-dark rounded-xl overflow-hidden hover-lift group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                    </a>
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        aria-label="View live demo"
                      >
                        <ExternalLink className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getTechStackColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-shadow text-center"
                  >
                    View Code
                  </a>
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 hover:shadow-lg transition-shadow text-center"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Hover effect overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 pointer-events-none transition-opacity duration-300 ${
                  hoveredProject === project.id ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Want to see more projects?
          </p>
          <a
            href="https://github.com/mansijadhav"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-shadow"
          >
            <Github className="w-5 h-5 mr-2" />
            Visit my GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
