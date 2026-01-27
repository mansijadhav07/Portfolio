"use client";

import { Award, BookOpen, Code, Users } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function About() {
  const highlights = [
    {
      icon: BookOpen,
      title: "Final Year Student",
      description: "Computer Engineering with focus on modern technologies",
    },
    {
      icon: Code,
      title: "Project Builder",
      description: "Passionate about building innovative solutions",
    },
    {
      icon: Users,
      title: "Hackathon Participant",
      description: "Active competitor and collaborator in tech challenges",
    },
    {
      icon: Award,
      title: "Continuous Learner",
      description: "Always exploring new technologies and best practices",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Building the Future, One Line at a Time
            </h3>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {personalInfo.bio}
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {personalInfo.intro}
            </p>

            <div className="pt-6">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                What drives me:
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">▸</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Solving complex problems with elegant, scalable solutions
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">▸</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Automating infrastructure and optimizing workflows
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 dark:text-cyan-400 mr-2">▸</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Exploring the intersection of AI, Cloud, and Blockchain
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="glass dark:glass-dark p-6 rounded-xl hover-lift group"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform">
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
