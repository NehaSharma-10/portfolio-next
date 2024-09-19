"use client";
import React, { useEffect } from "react";
import "./globals.css";
import "../public/assets/custom.css";
import Link from "next/link";

import { NextUIProvider } from "@nextui-org/react";
import AOS from "aos";
import "aos/dist/aos.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Home() {
  return (
    <main className="flex  main-bg-color">
      {/* left aide fixed  */}
      <section className="w-1/2  fixed  min-h-screen flex flex-col justify-center px-10 gap-5">
        <div>
          <h1 className="text-4xl font-bold">Neha Sharma</h1>
          <p>Frontend Engineer</p>
          <p>
            Creating smooth, dynamic websites that leave lasting impressions.
          </p>
        </div>
        <div>
          <ul>
            <li> - About</li>
            <li> - Experience</li>
            <li> - Projects</li>
          </ul>
        </div>

        <div>
          <ul className="flex gap-4">
            <li>
              <Link target="_blank" href="https://github.com/NehaSharma-10/">
                <GitHubIcon className="text-5xl" />

              </Link>
            </li>
            <li>
              <Link target="_blank" href="https://www.linkedin.com/in/nehasharma8529/">
                <LinkedInIcon className="text-5xl" />

              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="absolute right-0 w-1/2 p-10">
        <div className="  min-h-screen    flex flex-col justify-start gap-2 pt-10">
          <p>
            In 2019, during my undergraduate studies, I found myself
            increasingly drawn to the world of frontend development. What
            started as curiosity quickly turned into a passion, and I immersed
            myself in learning how to build engaging, user-friendly websites.
          </p>
          <p>
            Fast forward to today, and I’ve had the privilege of working on
            projects ranging from dynamic portfolios to complex e-commerce
            platforms. My main focus these days is building intuitive and
            responsive user interfaces that provide a seamless experience for
            users. I love working at the intersection of design and
            engineering—where things not only look great but perform efficiently
            under the hood.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new tech trends,
            catching up on my favorite reads, or simply enjoying time with
            friends and family.
          </p>
        </div>
        <div className="min-h-screen    flex flex-col gap-2">
          Experience
        </div>
        <div className="min-h-screen    flex flex-col gap-2">
          projects
        </div>
      </section>
    </main>
  );
}
