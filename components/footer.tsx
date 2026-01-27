"use client";

import { useState, useEffect } from "react";
import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: personalInfo.github,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: personalInfo.linkedin,
    },
    {
      name: "Email",
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Mansi Jadhav</h3>
            <p className="text-gray-400 leading-relaxed">
              Computer Engineering student passionate about DevOps, Cloud, AI, and Blockchain technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                    aria-label={link.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "AWS", "Docker", "Python"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} Mansi Jadhav</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>Built with Next.js & Tailwind</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              Designed and developed with passion for modern web technologies
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-50"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </footer>
  );
}
