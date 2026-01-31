"use client";
import React, { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ProjectCard = React.memo(({ project, index }) => (
  <div
    className="card hover-lift group animate-fade-in-up"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    {/* Project Image */}
    <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-tertiary">
      <Image
        src={project.image}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
        alt={project.name}
        loading="lazy"
        quality={85}
      />
      {/* Overlay with Links */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
        <Link
          href={project.liveUrl}
          target="_blank"
          className="p-3 bg-white rounded-full hover:scale-110 transition-transform"
          title="View Live"
        >
          <svg className="w-5 h-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </Link>
        <Link
          href={project.githubUrl}
          target="_blank"
          className="p-3 bg-white rounded-full hover:scale-110 transition-transform"
          title="View Code"
        >
          <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </Link>
      </div>
    </div>

    {/* Project Info */}
    <div className="space-y-3">
      <h3 className="text-xl font-bold text-primary">{project.name}</h3>
      <p className="text-secondary text-sm leading-relaxed">{project.description}</p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-tertiary text-secondary text-xs rounded-lg border border-custom"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
));

ProjectCard.displayName = 'ProjectCard';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = useMemo(() => [
    {
      id: 1,
      name: 'JRFAdda',
      description: 'An online education platform for competitive exam preparation with courses, mock tests, and mentorship.',
      image: '/images/projects/jrfadda-preview.png',
      technologies: ['Next.js', 'React', 'Tailwind CSS'],
      liveUrl: 'https://beta.jrfadda.com/',
      githubUrl: 'https://github.com/NehaSharma-10/',
      category: 'fullstack'
    },
    {
      id: 2,
      name: 'UNSAID',
      description: 'A calm, anonymous space for sharing unspoken thoughts with art-inspired minimal design.',
      image: '/images/projects/unsaid-preview.png',
      technologies: ['React', 'CSS3', 'JavaScript'],
      liveUrl: 'https://unsaid-sage.vercel.app/',
      githubUrl: 'https://github.com/NehaSharma-10/',
      category: 'frontend'
    },
    {
      id: 3,
      name: 'Landing Page SP',
      description: 'High-converting landing page with modern design and smooth animations.',
      image: '/images/projects/landing-sp-preview.png',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      liveUrl: 'https://landing-page-sp.vercel.app/',
      githubUrl: 'https://github.com/NehaSharma-10/',
      category: 'frontend'
    },
    {
      id: 4,
      name: 'Home EcoEarner',
      description: 'UK-based renewable energy company website for home power generation systems.',
      image: '/images/projects/homeecoearner-preview.png',
      technologies: ['React', 'Node.js', 'CSS3'],
      liveUrl: 'https://homeecoearner.com/',
      githubUrl: 'https://github.com/NehaSharma-10/',
      category: 'fullstack'
    },
    {
      id: 5,
      name: 'Thrilling Threads',
      description: 'Modern fashion e-commerce platform with sleek shopping experience.',
      image: '/images/projects/thrilling-thread-preview.png',
      technologies: ['Next.js', 'Node.js', 'React'],
      liveUrl: 'https://thrillingthread.vercel.app/',
      githubUrl: 'https://github.com/NehaSharma-10/',
      category: 'fullstack'
    },
    {
      id: 6,
      name: 'Quill HASH',
      description: 'Sophisticated assignment platform with modern UI/UX and interactive elements.',
      image: '/images/projects/quilhash-preview.png',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      liveUrl: 'https://quill-hash-assignment-ten.vercel.app/',
      githubUrl: 'https://github.com/NehaSharma-10/',
      category: 'frontend'
    }
  ], []);

  const filterButtons = useMemo(() => [
    { key: 'all', label: 'All' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'fullstack', label: 'Full Stack' }
  ], []);

  const filteredProjects = useMemo(() =>
    filter === 'all' ? projects : projects.filter(p => p.category === filter),
    [filter, projects]
  );

  const handleFilterChange = useCallback((newFilter) => {
    setFilter(newFilter);
  }, []);

  return (
    <div className="space-y-12">
      {/* Filter Buttons */}
      <div className="overflow-x-auto pb-2 px-4 scrollbar-thin">
        <div className="flex justify-center gap-2 sm:gap-3 min-w-max mx-auto">
          {filterButtons.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => handleFilterChange(key)}
              className={`group flex-shrink-0 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium transition-all duration-300 ${filter === key
                ? 'bg-accent text-white shadow-custom-lg scale-105'
                : 'bg-secondary text-secondary hover:bg-tertiary hover:scale-105'
                }`}
            >
              <span className="whitespace-nowrap">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* CTA Section */}
      <div className="card text-center space-y-6 p-12 md:p-16 bg-secondary border-2 border-accent hover:border-accent transition-all">
        <h3 className="text-3xl md:text-5xl font-bold text-primary mb-4">
          Interested in Collaborating?
        </h3>
        <p className="text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Link href="#contact" className="btn-primary group">
            Get In Touch
            <ArrowForwardIcon className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="#about" className="btn-secondary">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
