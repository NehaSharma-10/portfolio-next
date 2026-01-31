"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ChatIcon from "@mui/icons-material/Chat";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const FrontPage = () => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = ["Frontend Developer", "UI/UX Enthusiast", "Creative Coder", "Problem Solver"];

  useEffect(() => {
    let timeout;
    const currentRole = roles[currentIndex];

    if (typedText.length < currentRole.length) {
      timeout = setTimeout(() => {
        setTypedText(currentRole.slice(0, typedText.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setTypedText("");
        setCurrentIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [typedText, currentIndex]);

  return (
    <div className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Playful Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-secondary opacity-10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-accent opacity-5 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>

        {/* Decorative shapes */}
        <div className="absolute top-32 right-20 w-20 h-20 border-2 border-accent opacity-20 rounded-lg" style={{ transform: 'rotate(45deg)' }}></div>
        <div className="absolute bottom-32 left-32 w-16 h-16 border-2 border-accent-secondary opacity-20 rounded-full"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center space-y-8 animate-fade-in-up">
          {/* Greeting */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary rounded-full border border-custom">
            <span className="text-2xl animate-bounce-subtle">👋</span>
            <span className="text-secondary font-medium">Hello, I'm</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary">
            Neha <span className="gradient-text">Sharma</span>
          </h1>

          {/* Typing Animation */}
          <div className="h-12 flex items-center justify-center">
            <p className="text-2xl md:text-3xl text-secondary font-medium">
              {typedText}
              <span className="animate-pulse-glow">|</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
            I craft beautiful, functional, and user-friendly web experiences
            that bring ideas to life with clean code and creative design.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="#projects" className="btn-primary">
              View My Work
              <ArrowForwardIcon className="w-5 h-5" />
            </Link>
            <Link href="#contact" className="btn-secondary">
              Let's Talk
              <ChatIcon className="w-5 h-5" />
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center items-center space-x-6 pt-4">
            <Link
              href="https://github.com/NehaSharma-10"
              target="_blank"
              className="p-3 bg-secondary hover:bg-tertiary rounded-xl transition-all duration-300 hover-lift"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/nehasharma8529"
              target="_blank"
              className="p-3 bg-secondary hover:bg-tertiary rounded-xl transition-all duration-300 hover-lift"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-6 h-6" />
            </Link>
            <Link
              href="mailto:shrmatwinkle246@gmail.com"
              className="p-3 bg-secondary hover:bg-tertiary rounded-xl transition-all duration-300 hover-lift"
              aria-label="Email"
            >
              <EmailIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
