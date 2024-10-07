"use client";
import React from "react";
import "./globals.css";
import "../public/assets/custom.css";

import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import FrontPage from "./components/FrontPage";

export default function Home() {
  return (
    <main className="">
      <div className="container mx-auto bg-[#111827] text-[#F1F1F1]  w-100 flex justify-center  items-center p-10 min-h-screen">
        <FrontPage />
      </div>

      <div
        id="about"
        className="min-h-screen container mx-auto flex flex-col justify-center p-10 gap-2  bg-[#020617]  text-[#F1F1F1]"
      >
        <h2 className="text-4xl font-semibold text-[#fff]">
          About <span className="text-[#EAB308]"> Me</span>
        </h2>
        <About />
      </div>
      <div
        id="exp"
        className="min-h-screen container mx-auto flex flex-col justify-center p-10 gap-2  bg-[#020617]  text-[#F1F1F1]"
      >
        <h2 className="text-4xl font-semibold text-[#fff]">
          My <span className="text-[#EAB308]">Experiences</span>
        </h2>
        <Experience />
      </div>
      <div
        id="pro"
        className="min-h-screen flex flex-col gap-2 p-10 bg-[#020617]  text-[#F1F1F1]"
      >
        <h2 className="text-4xl font-semibold text-[#EAB308]">
          My <span className="text-[#fff]">Projects </span>
        </h2>
        <Projects />
      </div>
      <div
        id="pro"
        className="min-h-screen flex flex-col gap-2 p-10 bg-[#020617] text-[#fff] "
      >
        <h2 className="text-4xl font-semibold text-[#EAB308]">
          Contact <span className="text-[#fff]">Me </span>
        </h2>

        <Projects />
      </div>
    </main>
  );
}
