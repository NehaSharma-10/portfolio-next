import React from "react";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import EmailIcon from "@mui/icons-material/Email";

const FrontPage = () => {
  return (
    <div className="text-center space-y-12">
      <div className="space-y-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="inline-block">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 text-sm font-medium rounded-full border border-amber-200 mb-6">
                👋 Welcome to my portfolio
              </span>
            </div>
            <h1 className="text-6xl lg:text-8xl xl:text-9xl font-black text-slate-900 leading-none tracking-tight">
              Neha
              <span className="block text-gradient">Sharma</span>
            </h1>
          </div>

          <div className="space-y-4">
            <p className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-slate-700 tracking-tight">
              Frontend Engineer &
              <span className="text-gradient-blue"> UI Designer</span>
            </p>
            <div className="flex justify-center">
              <div className="w-24 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
            </div>
          </div>
        </div>

        <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
          Crafting beautiful, performant web experiences with modern technologies.
          <span className="text-slate-800 font-medium"> Passionate about clean code and pixel-perfect designs.</span>
        </p>
      </div>

      <div className="flex justify-center items-center space-x-4 pt-6">
        <Link
          target="_blank"
          href="https://github.com/NehaSharma-10/"
          className="group relative p-5 bg-white rounded-2xl shadow-elegant hover:shadow-elegant-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 hover:border-slate-300"
        >
          <GitHubIcon className="text-slate-700 text-2xl group-hover:text-slate-900 transition-colors" />
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </Link>

        <Link
          target="_blank"
          href="https://www.linkedin.com/in/nehasharma8529/"
          className="group relative p-5 bg-white rounded-2xl shadow-elegant hover:shadow-elegant-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 hover:border-blue-200"
        >
          <LinkedInIcon className="text-blue-600 text-2xl group-hover:text-blue-700 transition-colors" />
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </Link>

        <Link
          href="mailto:nehasharma8529@gmail.com"
          className="group relative p-5 bg-white rounded-2xl shadow-elegant hover:shadow-elegant-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 hover:border-amber-200"
        >
          <EmailIcon className="text-amber-600 text-2xl group-hover:text-amber-700 transition-colors" />
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </Link>
      </div>

      <div className="pt-12">
        <div className="space-y-4">
          <Link
            href="#about"
            className="btn-primary text-lg px-8 py-4"
          >
            Explore My Work
          </Link>
          <div className="flex justify-center">
            <Link
              href="#about"
              className="inline-flex items-center space-x-2 text-slate-500 hover:text-amber-600 transition-colors group"
            >
              <span className="text-sm font-medium">or scroll to discover more</span>
              <ArrowDownwardIcon className="text-lg group-hover:translate-y-1 transition-transform animate-bounce" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
