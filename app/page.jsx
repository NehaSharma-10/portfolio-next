"use client";
import React from "react";
import "./globals.css";
import "../public/assets/custom.css";

import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import FrontPage from "./components/FrontPage";
import ContactMe from "./components/ContactMe";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-amber-50"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, #f59e0b 1px, transparent 0)`,
              backgroundSize: '60px 60px'
            }}
          ></div>
        </div>

        {/* Floating shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full opacity-20 blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-200 to-purple-300 rounded-full opacity-20 blur-xl animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <FrontPage />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 text-sm font-medium rounded-full border border-amber-200">
                Get to know me
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              Passionate frontend developer with a keen eye for design and performance
            </p>
            <div className="flex justify-center mt-6">
              <div className="w-32 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
            </div>
          </div>
          <About />
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="exp"
        className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium rounded-full border border-blue-200">
                Professional Journey
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
              My <span className="text-gradient-blue">Experience</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              Building impactful solutions across diverse industries and technologies
            </p>
            <div className="flex justify-center mt-6">
              <div className="w-32 h-1.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
            </div>
          </div>
          <Experience />
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(45deg, #f59e0b 1px, transparent 1px), linear-gradient(-45deg, #f59e0b 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-amber-900 to-orange-900 text-amber-200 text-sm font-medium rounded-full border border-amber-700">
                Technical Expertise
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light">
              Technologies and tools I use to bring ideas to life
            </p>
            <div className="flex justify-center mt-6">
              <div className="w-32 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
            </div>
          </div>
          <Skills />
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 text-sm font-medium rounded-full border border-emerald-200">
                Featured Work
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
              My <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              A showcase of my recent work and creative solutions
            </p>
            <div className="flex justify-center mt-6">
              <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"></div>
            </div>
          </div>
          <Projects />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-10 blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-amber-900 to-orange-900 text-amber-200 text-sm font-medium rounded-full border border-amber-700">
                Let's Connect
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Contact <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light">
              Ready to bring your ideas to life? Let's start a conversation
            </p>
            <div className="flex justify-center mt-6">
              <div className="w-32 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
            </div>
          </div>
          <ContactMe />
        </div>
      </section>
    </main>
  );
}