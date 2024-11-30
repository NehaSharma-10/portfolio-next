"use client";
import React from "react";
import "./globals.css";
import "../public/assets/custom.css";

import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import FrontPage from "./components/FrontPage";
import ContactMe from "./components/ContactMe";

export default function Home() {
  return (
    <main className="">
      {/* banner section  */}
      <div className="container mx-auto bg-[#fff] text-[#F1F1F1]  w-100 flex justify-center  items-center p-10 min-h-screen">
        <FrontPage />
      </div>
      {/* about section  */}
      <div
        id="about"
        className="min-h-screen container mx-auto flex flex-col justify-center p-10 gap-2  bg-blue text-[#F1F1F1]"
      >
        <h2 className="text-4xl font-semibold text-[#fff]">
          About <span className="text-[#EAB308]"> Me</span>
        </h2>
        <About />
      </div>
      {/* experience section  */}
      <div
        id="exp"
        className="min-h-screen container mx-auto flex flex-col justify-center p-10 gap-2  bg-[#fff]  text-[#F1F1F1]"
      >
        <h2 className="text-4xl font-semibold blueClr">
          My <span className="text-[#EAB308]">Experiences</span>
        </h2>
        <Experience />
      </div>
      {/* projects section  */}
      <div
        id="pro"
        className="min-h-screen flex flex-col gap-2 p-10 bg-blue   text-[#F1F1F1]"
      >
        <h2 className="text-4xl font-semibold text-[#EAB308]">
          My <span className="text-[#fff]">Projects </span>
        </h2>
        <Projects />
      </div>
      {/* contact me section  */}
      <div
        id="contact"
        className="min-h-screen flex flex-col gap-2 p-10 bg-[#020617] text-[#fff] "
      >
        <h2 className="text-4xl font-semibold text-[#EAB308] text-center">
          Contact <span className="text-[#fff]">Me </span>
        </h2>

        <ContactMe />
      </div>
    </main>
  );
}
