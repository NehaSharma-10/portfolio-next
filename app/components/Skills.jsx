"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ComputerIcon from "@mui/icons-material/Computer";
import PaletteIcon from "@mui/icons-material/Palette";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import BoltIcon from "@mui/icons-material/Bolt";
import SearchIcon from "@mui/icons-material/Search";
import SyncIcon from "@mui/icons-material/Sync";
import LinkIcon from "@mui/icons-material/Link";

const SkillCard = React.memo(({ skill, index, isVisible }) => (
  <div
    data-index={index}
    className={`skill-card group relative p-8 bg-secondary rounded-2xl border border-custom hover:border-accent transition-all duration-500 hover:shadow-custom-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
  >
    <div className="flex flex-col items-center space-y-4">
      <div className="relative w-20 h-20">
        <Image
          src={skill.image}
          fill
          sizes="80px"
          className="object-contain group-hover:scale-110 transition-transform duration-300"
          alt={`${skill.name} logo`}
          loading="lazy"
          quality={85}
        />
      </div>
      <h3 className="font-semibold text-primary text-lg">{skill.name}</h3>
    </div>
  </div>
));

SkillCard.displayName = 'SkillCard';

const AdditionalSkillCard = React.memo(({ skill, index }) => (
  <div
    key={index}
    className="group p-6 bg-tertiary rounded-xl border border-custom hover-lift text-center space-y-3 relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent-secondary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
    <div className="relative z-10">
      <div className="group-hover:scale-125 transition-transform duration-300 filter group-hover:drop-shadow-lg flex justify-center items-center text-accent">
        {skill.icon}
      </div>
      <h4 className="font-semibold text-primary group-hover:gradient-text transition-all">
        {skill.name}
      </h4>
      <p className="text-sm text-secondary">{skill.description}</p>
    </div>
  </div>
));

AdditionalSkillCard.displayName = 'AdditionalSkillCard';

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState(new Set());

  const skills = useMemo(() => [
    { name: "HTML5", image: "/assets/Html.webp", level: 95 },
    { name: "CSS3", image: "/assets/CSS.webp", level: 90 },
    { name: "JavaScript", image: "/assets/JS.webp", level: 88 },
    { name: "React", image: "/assets/react.webp", level: 92 },
    { name: "Next.js", image: "/assets/next js.webp", level: 85 },
    { name: "Tailwind CSS", image: "/assets/tailwindcss.webp", level: 90 },
    { name: "Bootstrap", image: "/assets/bootstrap.webp", level: 80 },
    { name: "Node.js", image: "/assets/node.webp", level: 75 },
  ], []);

  const additionalSkills = useMemo(() => [
    { name: "UI/UX Design", icon: <PaletteIcon sx={{ fontSize: 40 }} />, description: "Creating intuitive experiences" },
    { name: "Responsive Design", icon: <PhoneAndroidIcon sx={{ fontSize: 40 }} />, description: "Mobile-first approach" },
    { name: "Performance", icon: <BoltIcon sx={{ fontSize: 40 }} />, description: "Lightning-fast websites" },
    { name: "SEO", icon: <SearchIcon sx={{ fontSize: 40 }} />, description: "Search optimization" },
    { name: "Git", icon: <SyncIcon sx={{ fontSize: 40 }} />, description: "Version control" },
    { name: "API Integration", icon: <LinkIcon sx={{ fontSize: 40 }} />, description: "Seamless connectivity" },
  ], []);

  const highlights = useMemo(() => [
    { icon: "⚡", title: "Clean Code", desc: "Maintainable & scalable" },
    { icon: "🎯", title: "Best Practices", desc: "Industry standards" },
    { icon: "🚀", title: "Modern Stack", desc: "Latest technologies" }
  ], []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setTimeout(() => {
              setVisibleSkills(prev => new Set([...prev, index]));
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillElements = document.querySelectorAll('.skill-card');
    skillElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="space-y-20">
      {/* Main Skills - Redesigned */}
      <div>
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-secondary rounded-full border border-custom mb-4">
            <ComputerIcon className="text-accent" />
            <span className="text-secondary font-medium">Technical Skills</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Tools & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Technologies I work with to build modern web applications
          </p>
        </div>

        {/* Larger, cleaner skill cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
              isVisible={visibleSkills.has(index)}
            />
          ))}
        </div>
      </div>

      {/* Additional Skills */}
      <div className="relative  p-8 md:p-12 overflow-hidden">


        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <h3 className="text-3xl font-bold text-primary">
                Beyond <span className="gradient-text">Code</span>
              </h3>
              <RocketLaunchIcon className="text-accent animate-bounce-subtle" style={{ animationDelay: '0.5s' }} />
            </div>
            <p className="text-secondary">Where technical expertise meets creative vision</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalSkills.map((skill, index) => (
              <AdditionalSkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Developer Highlights */}
      <div className="flex flex-wrap justify-center gap-6">
        {highlights.map((item, index) => (
          <div key={item.title} className="card text-center space-y-2 min-w-[200px]">
            <div className="text-3xl">{item.icon}</div>
            <div className="font-bold gradient-text">{item.title}</div>
            <p className="text-sm text-secondary">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Availability */}
      <div className="text-center px-4">
        <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 bg-secondary rounded-full border border-custom max-w-full">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-glow"></div>
            <span className="text-secondary font-medium text-sm sm:text-base whitespace-nowrap">Open to Opportunities</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-tertiary"></div>
          <span className="text-secondary text-sm sm:text-base">Available for collaboration</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;


