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
    <main className="flex flex-row scroll-smooth	">
      {/* left side */}
      <section className="w-1/2 text-[#fff] bg-[#FFAC33] fixed  min-h-screen flex flex-col justify-center px-10 gap-5">
        <div>
          <h1 className="text-4xl font-bold">Neha Sharma</h1>
          <p>Frontend Engineer</p>
          <p>
            Creating smooth, dynamic websites that leave lasting impressions.
          </p>
        </div>
        <div className="flex flex-col">
          <Link href="#about"> - About</Link>
          <Link href="#exp"> - Experience</Link>
          <Link href="#pro"> - Projects</Link>
        </div>

        <div>
          <ul className="flex gap-4">
            <li>
              <Link target="_blank" href="https://github.com/NehaSharma-10/">
                <GitHubIcon className="text-5xl" />
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/nehasharma8529/"
              >
                <LinkedInIcon className="text-5xl" />
              </Link>
            </li>
          </ul>
        </div>
      </section>
      {/* right side */}
      <section className="absolute right-0 w-1/2  text-white bg-auto">
        <div
          id="about"
          className="min-h-screen flex flex-col justify-start gap-2 p-10 bg-[#124559]"
        >
          <About />
        </div>
        <div
          id="exp"
          className="min-h-screen flex flex-col gap-2 p-10 bg-[#598392]"
        >
          <Experience />
        </div>
        <div
          id="pro"
          className="min-h-screen flex flex-col gap-2 p-10 bg-[#aec3b0]"
        >
          <Projects />
        </div>
      </section>
    </main>
  );
}
