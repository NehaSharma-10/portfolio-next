"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ChatIcon from "@mui/icons-material/Chat";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

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
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 px-4">
      {/* Simple Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-secondary opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className="text-center space-y-6 sm:space-y-8">
          {/* Greeting */}
          <div className="inline-flex items-center space-x-2 sm:space-x-3 px-4 sm:px-5 py-2 sm:py-2.5 bg-secondary rounded-full border border-custom">
            <span className="text-xl sm:text-2xl">👋</span>
            <span className="text-secondary font-medium text-sm sm:text-base">Hello, I'm</span>
          </div>

          {/* Name */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
            Neha <span className="gradient-text">Sharma</span>
          </h1>

          {/* Typing Animation */}
          <div className="min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[4rem] flex items-center justify-center">
            <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-secondary font-medium px-2">
              {typedText}
              <span className="animate-pulse-glow">|</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-secondary max-w-2xl mx-auto leading-relaxed px-2">
            Frontend Developer passionate about building elegant, performant web applications
            with modern technologies and best practices.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center pt-2 sm:pt-4 max-w-md sm:max-w-none mx-auto">
            <Link href="#projects" className="btn-primary justify-center">
              View My Projects
              <ArrowForwardIcon />
            </Link>
            <Link href="#contact" className="btn-secondary justify-center">
              Get In Touch
              <ChatIcon />
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 pt-4 sm:pt-6">
            <Link
              href="https://github.com/NehaSharma-10"
              target="_blank"
              className="p-2.5 sm:p-3 bg-secondary hover:bg-accent hover:text-white rounded-xl transition-all duration-300"
              aria-label="GitHub"
            >
              <GitHubIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/nehasharma8529"
              target="_blank"
              className="p-2.5 sm:p-3 bg-secondary hover:bg-accent hover:text-white rounded-xl transition-all duration-300"
              aria-label="LinkedIn"
            >
              <LinkedInIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
            </Link>
            <Link
              href="mailto:shrmatwinkle246@gmail.com"
              className="p-2.5 sm:p-3 bg-secondary hover:bg-accent hover:text-white rounded-xl transition-all duration-300"
              aria-label="Email"
            >
              <EmailIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
