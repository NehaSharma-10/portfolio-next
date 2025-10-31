"use client";
import React from "react";
import "./globals.css";


import About from "./components/About";
import Projects from "./components/Projects";
import FrontPage from "./components/FrontPage";
import ContactMe from "./components/ContactMe";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-3 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Dynamic Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50"></div>

        {/* Enhanced Creative Elements - Fully Responsive */}
        <div className="absolute top-8 sm:top-16 lg:top-20 right-2 sm:right-8 lg:right-20 w-24 sm:w-40 md:w-56 lg:w-64 h-24 sm:h-40 md:h-56 lg:h-64 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-25 blur-xl sm:blur-2xl lg:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-8 sm:bottom-16 lg:bottom-20 left-2 sm:left-8 lg:left-20 w-20 sm:w-32 md:w-44 lg:w-48 h-20 sm:h-32 md:h-44 lg:h-48 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full opacity-30 blur-lg sm:blur-xl lg:blur-2xl animate-pulse delay-1000"></div>

        {/* Responsive Geometric Accents */}
        <div className="hidden sm:block absolute top-1/4 left-2 sm:left-4 lg:left-10 w-1 sm:w-2 h-12 sm:h-20 lg:h-32 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full opacity-50"></div>
        <div className="hidden sm:block absolute bottom-1/4 right-2 sm:right-4 lg:right-10 w-1 sm:w-2 h-10 sm:h-16 lg:h-24 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full opacity-50"></div>

        <div className="w-full relative z-10">
          <FrontPage />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-24 px-3 sm:px-6 lg:px-8  relative">
        {/* Warm decorative elements - Fully Responsive */}
        <div className="absolute top-6 sm:top-12 lg:top-20 right-2 sm:right-8 lg:right-20 w-28 sm:w-44 lg:w-64 h-28 sm:h-44 lg:h-64 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 blur-xl sm:blur-2xl lg:blur-3xl"></div>
        <div className="absolute bottom-6 sm:bottom-12 lg:bottom-20 left-2 sm:left-8 lg:left-20 w-20 sm:w-36 lg:w-48 h-20 sm:h-36 lg:h-48  rounded-full opacity-15 blur-lg sm:blur-xl lg:blur-2xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12 lg:mb-20">
            <div className="inline-block mb-3 sm:mb-4">
              <span className="px-3 sm:px-6 py-1.5 sm:py-2 bg-white/90 backdrop-blur-sm text-purple-700 text-xs sm:text-sm font-medium rounded-full border border-purple-200 shadow-lg">
                ✨ About Me
              </span>
            </div>
            <h2 className="section-title">
              Crafting Digital <span className="text-gradient">Experiences</span>
            </h2>
            <p className="section-subtitle">
              Passionate frontend developer with a keen eye for design and performance
            </p>
          </div>
          <About />
        </div>
      </section>



      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 lg:py-24 px-3 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-100 via-gray-50 to-blue-50 relative">
        {/* Tech-inspired decorative elements */}
        <div className="absolute top-6 sm:top-12 lg:top-16 left-2 sm:left-8 lg:left-16 w-24 sm:w-40 lg:w-56 h-24 sm:h-40 lg:h-56 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-15 blur-xl sm:blur-2xl"></div>
        <div className="absolute bottom-6 sm:bottom-12 lg:bottom-16 right-2 sm:right-8 lg:right-16 w-20 sm:w-32 lg:w-44 h-20 sm:h-32 lg:h-44 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-20 blur-lg sm:blur-xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12 lg:mb-20 relative">
            <div className="inline-block mb-3 sm:mb-4">
              <span className="px-3 sm:px-6 py-1.5 sm:py-2 bg-white/90 backdrop-blur-sm text-cyan-600 text-xs sm:text-sm font-medium rounded-full border border-cyan-200 shadow-lg">
                🚀 Technical Skills
              </span>
            </div>
            <h2 className="section-title">
              Tools & <span className="text-gradient-cool">Technologies</span>
            </h2>
            <p className="section-subtitle">
              Technologies and tools I use to bring creative ideas to life
            </p>

            {/* Floating Code Snippets at main heading level */}
            <div className="hidden lg:block absolute top-0 right-0 pointer-events-none z-50">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-creative border border-gray-200/50 hover:opacity-70 transition-opacity duration-300">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse delay-200"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-400"></div>
                  <span className="text-gray-400 text-xs font-mono ml-2">magic.js</span>
                </div>
                <div className="text-xs font-mono leading-relaxed">
                  <div className="text-purple-400">function <span className="text-blue-300">createMagic</span>() {`{`}</div>
                  <div className="ml-3 text-gray-600">return <span className="text-emerald-500">"✨ Amazing UX"</span>;</div>
                  <div className="text-purple-400">{`}`}</div>
                </div>
              </div>
            </div>

            {/* Additional Floating Code Snippet - Left Side */}
            <div className="hidden xl:block absolute top-0 left-0 opacity-40 pointer-events-none z-50 transform rotate-6">
              <div className="bg-white/85 backdrop-blur-sm rounded-lg p-3 shadow-creative border border-gray-200/50">
                <div className="text-xs font-mono text-gray-600">
                  <div className="text-blue-400">const <span className="text-purple-400">skills</span> = [</div>
                  <div className="ml-2 text-emerald-500">"React", "Next.js",</div>
                  <div className="ml-2 text-emerald-500">"TypeScript"</div>
                  <div className="text-blue-400">];</div>
                </div>
              </div>
            </div>
          </div>
          <Skills />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 lg:py-24 px-3 sm:px-6 lg:px-8 relative">
        {/* Creative decorative elements */}
        <div className="absolute top-6 sm:top-12 lg:top-20 right-2 sm:right-8 lg:right-20 w-32 sm:w-48 lg:w-60 h-32 sm:h-48 lg:h-60 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-15 blur-xl sm:blur-2xl"></div>
        <div className="absolute bottom-6 sm:bottom-12 lg:bottom-20 left-2 sm:left-8 lg:left-20 w-24 sm:w-36 lg:w-52 h-24 sm:h-36 lg:h-52 bg-gradient-to-br from-green-200 to-lime-200 rounded-full opacity-20 blur-lg sm:blur-xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12 lg:mb-20">
            <div className="inline-block mb-3 sm:mb-4">
              <span className="px-3 sm:px-6 py-1.5 sm:py-2 bg-white/90 backdrop-blur-sm text-emerald-700 text-xs sm:text-sm font-medium rounded-full border border-emerald-200 shadow-lg">
                🎨 Featured Work
              </span>
            </div>
            <h2 className="section-title">
              Creative <span className="text-gradient">Projects</span>
            </h2>
            <p className="section-subtitle">
              A showcase of my recent work and creative solutions
            </p>
          </div>
          <Projects />
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section id="testimonials" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-purple-50 relative">
        <div className="absolute top-10 sm:top-20 right-4 sm:right-20 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-20 blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-4 sm:left-20 w-24 sm:w-32 lg:w-48 h-24 sm:h-32 lg:h-48 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-15 blur-xl sm:blur-2xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-block mb-4">
              <span className="px-4 sm:px-6 py-2 bg-white/90 backdrop-blur-sm text-purple-700 text-xs sm:text-sm font-medium rounded-full border border-purple-200 shadow-creative">
                💬 Client Testimonials
              </span>
            </div>
            <h2 className="section-title">
              What Clients <span className="text-gradient">Say</span>
            </h2>
            <p className="section-subtitle">
              Real feedback from amazing clients I've had the pleasure to work with
            </p>
          </div>
          <Testimonials />
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-24 px-3 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative">
        {/* Communication-themed decorative elements */}
        <div className="absolute top-6 sm:top-12 lg:top-20 right-2 sm:right-8 lg:right-20 w-28 sm:w-44 lg:w-64 h-28 sm:h-44 lg:h-64 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-20 blur-xl sm:blur-2xl lg:blur-3xl"></div>
        <div className="absolute bottom-6 sm:bottom-12 lg:bottom-20 left-2 sm:left-8 lg:left-20 w-22 sm:w-36 lg:w-48 h-22 sm:h-36 lg:h-48 bg-gradient-to-br from-purple-200 to-violet-200 rounded-full opacity-15 blur-lg sm:blur-xl lg:blur-2xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12 lg:mb-20">
            <div className="inline-block mb-3 sm:mb-4">
              <span className="px-3 sm:px-6 py-1.5 sm:py-2 bg-white/90 backdrop-blur-sm text-blue-700 text-xs sm:text-sm font-medium rounded-full border border-blue-200 shadow-lg">
                💬 Let's Connect & Create
              </span>
            </div>
            <h2 className="section-title">
              Ready to Start Your <span className="text-gradient-cool">Next Project</span>?
            </h2>
            <p className="section-subtitle">
              Let's turn your vision into reality. Whether it's a website, web app, or digital experience,
              I'm here to help bring your ideas to life with creativity and precision.
            </p>
          </div>
          <ContactMe />
        </div>
      </section>
    </main>
  );
}