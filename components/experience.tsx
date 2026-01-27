"use client";

import { experiences } from "@/lib/data";
import { Award, Briefcase, GraduationCap, Trophy } from "lucide-react";

export default function Experience() {
  const getIcon = (type: string) => {
    switch (type) {
      case "achievement":
        return Trophy;
      case "certification":
        return Award;
      case "experience":
        return Briefcase;
      default:
        return GraduationCap;
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case "achievement":
        return "from-yellow-500 to-orange-500";
      case "certification":
        return "from-blue-500 to-cyan-500";
      case "experience":
        return "from-green-500 to-emerald-500";
      default:
        return "from-purple-500 to-pink-500";
    }
  };

  const sortedExperiences = [...experiences].sort((a, b) => {
    const order = { experience: 0, achievement: 1, certification: 2 };
    return (order[a.type as keyof typeof order] || 3) - (order[b.type as keyof typeof order] || 3);
  });

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            My journey through hackathons, certifications, and professional experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedExperiences.map((exp, index) => {
            const IconComponent = getIcon(exp.type);
            const iconColor = getIconColor(exp.type);
            
            return (
              <div
                key={exp.id}
                className="glass dark:glass-dark p-6 rounded-xl hover-lift relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity">
                  <div className={`w-full h-full bg-gradient-to-br ${iconColor}`}></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 bg-gradient-to-br ${iconColor} rounded-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                        {exp.type}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-md font-medium text-gray-800 dark:text-gray-200 mb-1">
                      {exp.organization}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {exp.period}
                    </p>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Always Learning, Always Growing
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-md">
                Continuously expanding my knowledge and skills through hands-on projects, 
                certifications, and real-world challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
