import React, { useState, useEffect } from "react";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CodeIcon from "@mui/icons-material/Code";

const FrontPage = () => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = ["Frontend Engineer", "Creative Developer", "UI/UX Enthusiast", "Problem Solver"];

  useEffect(() => {
    const interval = setInterval(() => {
      const currentRole = roles[currentIndex];
      if (typedText.length < currentRole.length) {
        setTypedText(currentRole.slice(0, typedText.length + 1));
      } else {
        setTimeout(() => {
          setTypedText("");
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [typedText, currentIndex]);

  // Particle effect
  const particles = Array.from({ length: 15 }, (_, i) => (
    <div
      key={i}
      className="particle"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 8}s`,
        animationDuration: `${8 + Math.random() * 4}s`
      }}
    />
  ));

  return (
    <div className="space-y-16 relative py-16">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles}
      </div>

      {/* Main Hero Content */}
      <div className="text-center relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Name & Role */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
            Neha <span className="text-gradient">Sharma</span>
          </h1>

          <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent to-purple-400"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light text-center px-2">
              <span className="text-gradient-warm font-medium">{typedText}</span>
              <span className="animate-pulse text-purple-500 ml-1">|</span>
            </p>
            <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-l from-transparent to-pink-400"></div>
          </div>

          <p className="text-base sm:text-lg text-gray-500 max-w-4xl mx-auto leading-relaxed text-center px-4">
            Transforming ideas into <span className="text-gradient font-medium">pixel-perfect reality</span> with
            <span className="text-gradient-cool font-medium"> cutting-edge technology</span> and
            <span className="text-gradient-warm font-medium"> creative innovation</span>.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-10">
          <Link
            target="_blank"
            href="https://github.com/NehaSharma-10/"
            className="group relative p-4 sm:p-5 bg-white rounded-xl sm:rounded-2xl shadow-creative hover:shadow-warm transition-all duration-300 hover:-translate-y-2 border border-gray-100"
          >
            <GitHubIcon className="text-gray-700 text-xl sm:text-2xl group-hover:text-purple-600 transition-colors" />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-3 sm:w-4 h-3 sm:h-4 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
          </Link>

          <Link
            target="_blank"
            href="https://www.linkedin.com/in/nehasharma8529/"
            className="group relative p-4 sm:p-5 bg-white rounded-xl sm:rounded-2xl shadow-creative hover:shadow-cool transition-all duration-300 hover:-translate-y-2 border border-gray-100"
          >
            <LinkedInIcon className="text-blue-600 text-xl sm:text-2xl group-hover:text-cyan-500 transition-colors" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-3 sm:w-4 h-3 sm:h-4 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
          </Link>

          <Link
            href="mailto:shrmatwinkle246@gmail.com"
            className="group relative p-4 sm:p-5 bg-white rounded-xl sm:rounded-2xl shadow-creative hover:shadow-warm transition-all duration-300 hover:-translate-y-2 border border-gray-100"
          >
            <EmailIcon className="text-gray-700 text-xl sm:text-2xl group-hover:text-orange-500 transition-colors" />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-pink-400/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-3 sm:w-4 h-3 sm:h-4 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
          </Link>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center">
          <Link
            href="#about"
            className="btn-primary text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 group shadow-creative hover:shadow-glow w-full sm:w-auto"
          >
            <CodeIcon className="mr-2 sm:mr-3 group-hover:rotate-12 transition-transform" />
            <span>Explore My Universe</span>
          </Link>

          <Link
            href="#contact"
            className="btn-secondary text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 shadow-creative hover:shadow-warm w-full sm:w-auto"
          >
            Let's Build Something Amazing
          </Link>
        </div>
      </div>

      {/* Code Block Section */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-block mb-4">
            <span className="px-4 sm:px-6 py-2 bg-white/90 backdrop-blur-sm text-purple-700 text-xs sm:text-sm font-medium rounded-full border border-purple-200 shadow-creative">
              💻 Developer Profile
            </span>
          </div>
        </div>

        <div className="code-block rounded-xl sm:rounded-2xl p-4 sm:p-6 max-w-3xl mx-auto shadow-creative border border-gray-200 bg-white/95 backdrop-blur-sm hover:shadow-warm transition-all duration-300 overflow-x-auto">
          <div className="flex items-center space-x-2 mb-3 sm:mb-4">
            <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-yellow-500 rounded-full animate-pulse delay-200"></div>
            <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-green-500 rounded-full animate-pulse delay-400"></div>
            <span className="text-gray-400 text-xs sm:text-sm ml-2 sm:ml-4 font-mono">portfolio.js</span>
          </div>
          <div className="text-left text-xs sm:text-sm font-mono leading-relaxed min-w-0">
            <div className="text-purple-400">const <span className="text-blue-300 font-semibold">developer</span> = {`{`}</div>
            <div className="ml-2 sm:ml-4 text-gray-600 break-words">name: <span className="text-emerald-500">"Neha Sharma"</span>,</div>
            <div className="ml-2 sm:ml-4 text-gray-600 break-words">role: <span className="text-emerald-500">"{typedText}"</span><span className="animate-pulse text-purple-500">|</span>,</div>
            <div className="ml-2 sm:ml-4 text-gray-600 break-words">passion: <span className="text-emerald-500">"Pixel Perfect UI"</span>,</div>
            <div className="ml-2 sm:ml-4 text-gray-600">experience: <span className="text-blue-300">5</span> + <span className="text-gray-500">years</span>,</div>
            <div className="ml-2 sm:ml-4 text-gray-600 break-words">skills: [<span className="text-orange-500">"React"</span>, <span className="text-orange-500">"Next.js"</span>, <span className="text-orange-500">"TypeScript"</span>],</div>
            <div className="ml-2 sm:ml-4 text-gray-600">status: <span className="text-yellow-500 font-semibold">available</span></div>
            <div className="text-purple-400">{`}`}</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center relative z-10 px-4">
        <Link
          href="#about"
          className="group inline-flex items-center space-x-2 sm:space-x-4 px-4 sm:px-8 py-3 sm:py-4 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 hover:border-purple-300 shadow-creative hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
        >
          <span className="text-sm sm:text-base font-medium text-gray-600 group-hover:text-purple-600 transition-colors">
            Scroll to see the magic
          </span>
          <div className="relative flex items-center justify-center w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-300">
            <ArrowDownwardIcon className="text-purple-600 text-base sm:text-lg group-hover:translate-y-1 transition-transform animate-bounce" />
            <div className="absolute inset-0 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300"></div>
          </div>
        </Link>
      </div>

      {/* Availability Badge */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-creative hover:shadow-warm border border-gray-200 flex items-center space-x-2 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-xs font-semibold text-gray-700">Available</span>
        </div>
      </div>
    </div>
  );
};


export default FrontPage;