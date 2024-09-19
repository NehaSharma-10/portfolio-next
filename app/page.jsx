"use client";
import React, { useEffect } from "react";
import "./globals.css";
import "../public/assets/custom.css";

import { NextUIProvider } from "@nextui-org/react";
import AOS from "aos";
import "aos/dist/aos.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Home() {
  return (
    <main className="flex  main-bg-color">
      {/* left aide fixed  */}
      <section className="w-1/2  fixed  min-h-screen flex flex-col justify-center px-10 gap-5">
        <div>
          <h1 className="text-4xl font-bold">Neha Sharma</h1>
          <p>Frontend Engineer</p>
          <p>Creating smooth, dynamic websites that leave lasting impressions.</p>

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
            <li><GitHubIcon className="text-5xl" /></li>
            <li><LinkedInIcon className="text-5xl" /></li>
          </ul>
        </div>
      </section>

      <section className="absolute right-0 w-1/2 p-10">
        <div className="  min-h-screen    flex flex-col gap-2">
          <p>
            Back in 2012, I decided to try my hand at creating custom Tumblr
            themes and tumbled head first into the rabbit hole of coding and web
            development. Fast-forward to today, and I’ve had the privilege of
            building software for an advertising agency, a start-up, a huge
            corporation, and a digital product studio.
          </p>
          <p>
            My main focus these days is building accessible user interfaces for
            our customers at Klaviyo. I most enjoy building software in the
            sweet spot where design and engineering meet — things that look good
            but are also built well under the hood. In my free time, I've also
            released an online video course that covers everything you need to
            know to build a web app with the Spotify API.
          </p>
          <p>
            When I’m not at the computer, I’m usually rock climbing, reading,
            hanging out with my wife and two cats, or running around Hyrule
            searching for Korok seeds K o r o k s e e d s .
          </p>
        </div>
        <div className="min-h-screen    flex flex-col gap-2">
          <p>
            Back in 2012, I decided to try my hand at creating custom Tumblr
            themes and tumbled head first into the rabbit hole of coding and web
            development. Fast-forward to today, and I’ve had the privilege of
            building software for an advertising agency, a start-up, a huge
            corporation, and a digital product studio.
          </p>
          <p>
            My main focus these days is building accessible user interfaces for
            our customers at Klaviyo. I most enjoy building software in the
            sweet spot where design and engineering meet — things that look good
            but are also built well under the hood. In my free time, I've also
            released an online video course that covers everything you need to
            know to build a web app with the Spotify API.
          </p>
          <p>
            When I’m not at the computer, I’m usually rock climbing, reading,
            hanging out with my wife and two cats, or running around Hyrule
            searching for Korok seeds K o r o k s e e d s .
          </p>
        </div>
        <div className="min-h-screen    flex flex-col gap-2">
          <p>
            Back in 2012, I decided to try my hand at creating custom Tumblr
            themes and tumbled head first into the rabbit hole of coding and web
            development. Fast-forward to today, and I’ve had the privilege of
            building software for an advertising agency, a start-up, a huge
            corporation, and a digital product studio.
          </p>
          <p>
            My main focus these days is building accessible user interfaces for
            our customers at Klaviyo. I most enjoy building software in the
            sweet spot where design and engineering meet — things that look good
            but are also built well under the hood. In my free time, I've also
            released an online video course that covers everything you need to
            know to build a web app with the Spotify API.
          </p>
          <p>
            When I’m not at the computer, I’m usually rock climbing, reading,
            hanging out with my wife and two cats, or running around Hyrule
            searching for Korok seeds K o r o k s e e d s .
          </p>
        </div>
      </section>
    </main>
  );
}
