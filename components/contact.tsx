"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Send, MessageSquare } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // In a real implementation, this would send to a backend service
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: personalInfo.github,
      color: "from-gray-600 to-gray-800",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: personalInfo.linkedin,
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "Email",
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
      color: "from-green-600 to-green-800",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Let's build something impactful together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass dark:glass-dark p-8 rounded-xl">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Send me a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-lg">
                  <p className="text-green-800 dark:text-green-200 text-sm">
                    Thank you for your message! I'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg">
                  <p className="text-red-800 dark:text-red-200 text-sm">
                    Something went wrong. Please try again later.
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            <div className="glass dark:glass-dark p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Let's connect
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities, exciting projects, 
                or just having a conversation about technology and innovation. 
                Feel free to reach out through any of the channels below!
              </p>

              <div className="space-y-4">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                    >
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${link.color} group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div className="ml-4">
                        <p className="font-medium text-gray-900 dark:text-white">
                          {link.name}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {link.name === "Email" ? personalInfo.email : `Connect on ${link.name}`}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="glass dark:glass-dark p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <MessageSquare className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Open to collaborations
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Whether you're looking for a collaborator on a project, need help with 
                DevOps infrastructure, or want to discuss the latest in AI and blockchain 
                technology, I'm excited to connect and explore how we can work together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
