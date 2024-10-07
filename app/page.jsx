"use client";
import React from "react";
import "./globals.css";
import "../public/assets/custom.css";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="">
      <section className=" text-[#F1F1F1] bg-[#111827]  w-100 flex justify-center items-center p-10 min-h-screen">
        <div className="container mx-auto">
          <div>
            <h1 className="text-7xl font-bold text-[#fff] mb-3">I'm <span className="text-[#EAB308]"> Neha Sharma</span></h1>
            <p className="text-2xl text-[#fff] uppercase">Frontend Engineer</p>
            <p className="mt-4 text-[#F3F4F6]">
              Creating smooth, dynamic websites that leave lasting impressions.
            </p>
          </div>

          <div className="mt-8">
            <ul className="flex gap-4">
              <li>
                <Link target="_blank" href="https://github.com/NehaSharma-10/">
                  <GitHubIcon className="text-[#EAB308] text-4xl" />
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/nehasharma8529/"
                >
                  <LinkedInIcon className="text-[#EAB308] text-4xl" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-auto">
        <div
          id="about"
          className="min-h-screen container mx-auto flex flex-col justify-center p-10 gap-2  bg-[#020617]  text-[#F1F1F1]"
        >
          <h2 className="text-4xl font-semibold text-[#EAB308]">About Me</h2>
          <About />
        </div>
        <div
          id="exp"
          className="min-h-screen flex flex-col gap-2 p-10 bg-[#111827] text-[#F1F1F1]"
        >
          <h2 className="text-4xl font-semibold text-[#EAB308]">Experience</h2>
          <Experience />
        </div>
        <div
          id="pro"
          className="min-h-screen flex flex-col gap-2 p-10 bg-[#020617]  text-[#F1F1F1]"
        >
          <h2 className="text-4xl font-semibold text-[#EAB308]">Projects</h2>
          <Projects />
        </div>
      </section>
    </main>
  );
}
