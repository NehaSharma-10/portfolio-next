"use client";
import React from "react";
import "./globals.css";

import About from "./components/About";
import Projects from "./components/Projects";
import FrontPage from "./components/FrontPage";
import ContactMe from "./components/ContactMe";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section id="home" className="h-screen">
        <FrontPage />
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-secondary">
        <div className="container-custom">
          <About />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-primary">
        <div className="container-custom">
          <Skills />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary rounded-full border border-custom mb-4">
              <span className="text-xl">🎨</span>
              <span className="text-secondary font-medium">My Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              A showcase of my recent work and creative solutions
            </p>
          </div>
          <Projects />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-primary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary rounded-full border border-custom mb-4">
              <span className="text-xl">💬</span>
              <span className="text-secondary font-medium">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Let's Work <span className="gradient-text">Together</span>
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it and help bring your ideas to life.
            </p>
          </div>
          <ContactMe />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary border-t border-custom py-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary text-sm">
              © 2026 Neha Sharma. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="https://github.com/NehaSharma-10" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-colors">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/nehasharma8529" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-colors">
                LinkedIn
              </a>
              <a href="mailto:shrmatwinkle246@gmail.com" className="text-secondary hover:text-accent transition-colors">
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
