import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import GitHubIcon from "@mui/icons-material/GitHub";
import StarIcon from "@mui/icons-material/Star";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CodeIcon from "@mui/icons-material/Code";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  const featuredProjects = [
    {
      id: 'featured-1',
      name: 'JRFAdda',
      description: 'An online education platform focused on preparing students for competitive exams like UGC NET, CSIR NET, and various state eligibility and teaching exams. Features courses, mock tests, previous-year papers, and mentorship for systematic exam preparation.',
      image: `/images/projects/jrfadda-preview.png`,
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'JavaScript'],
      liveUrl: 'https://beta.jrfadda.com/',
      githubUrl: 'https://github.com/NehaSharma-10/',
      featured: true,
      category: 'frontend'
    },
    {
      id: 'featured-2',
      name: 'UNSAID',
      description: 'A calm, anonymous space where people can share their unspoken thoughts and emotions without judgment. Blends art-inspired minimal design with a soothing interface to help users express what they normally keep inside — raw, real, and beautifully human.',
      image: `images/projects/unsaid-preview.png`,
      technologies: ['React', 'CSS3', 'JavaScript', 'Responsive Design'],
      liveUrl: 'https://unsaid-sage.vercel.app/',
      githubUrl: 'https://github.com/NehaSharma-10/',
      featured: true,
      category: 'frontend'
    },
    {
      id: 'featured-3',
      name: 'Landing Page SP',
      description: 'A high-converting landing page with modern design principles, optimized for performance and user engagement. Features smooth animations and responsive layout.',
      image: `images/projects/landing-sp-preview.png`,
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      liveUrl: 'https://landing-page-sp.vercel.app/',
      githubUrl: 'https://github.com/NehaSharma-10/',
      featured: true,
      category: 'frontend'
    },
    {
      id: 'featured-4',
      name: 'Home EcoEarner',
      description: 'A UK-based renewable energy company website providing home power generation systems including solar panels, battery storage, and green technology. Helps homeowners generate electricity, reduce bills, and earn income from renewable energy.',
      image: `/images/projects/homeecoearner-preview.png`,
      technologies: ['React', 'Node.js', 'CSS3', 'JavaScript'],
      liveUrl: 'https://homeecoearner.com/',
      githubUrl: 'https://github.com/NehaSharma-10/',
      featured: true,
      category: 'fullstack'
    },
    {
      id: 'featured-5',
      name: 'Thrilling Threads',
      description: 'A modern fashion e-commerce platform showcasing trending outfits with a sleek shopping experience. Users can browse by category, manage wishlists, carts, and profiles, and enjoy a smooth, stylish interface powered by Next.js and Node.js.',
      image: `/images/projects/thrilling-thread-preview.png`,
      technologies: ['Next.js', 'Node.js', 'React', 'CSS3'],
      liveUrl: 'https://thrillingthread.vercel.app/',
      githubUrl: 'https://github.com/NehaSharma-10/',
      featured: true,
      category: 'fullstack'
    },
    {
      id: 'featured-6',
      name: 'Quill HASH',
      description: 'A sophisticated assignment platform featuring modern UI/UX design, interactive elements, and responsive layout. Built with attention to detail and user experience optimization.',
      image: `/images/projects/quilhash-preview.png`,
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript'],
      liveUrl: 'https://quill-hash-assignment-ten.vercel.app/',
      githubUrl: 'https://github.com/NehaSharma-10/',
      featured: true,
      category: 'frontend'
    }
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const resp = await axios.get(
          `https://api.github.com/users/NehaSharma-10/repos`
        );
        const data = resp.data;
        const filteredProjects = data
          .filter(repo => !repo.fork && repo.name !== 'NehaSharma-10')
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
          .slice(0, 4)
          .map(repo => ({
            ...repo,
            category: repo.language?.toLowerCase() === 'javascript' ? 'frontend' : 'other'
          }));
        setProjects([...featuredProjects, ...filteredProjects]);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setProjects(featuredProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = projects.filter(project =>
    filter === 'all' || project.category === filter || project.featured
  );

  if (loading) {
    return (
      <div className="space-y-8">
        {/* Filter Skeleton */}
        <div className="flex justify-center">
          <div className="flex space-x-4 bg-gray-100 rounded-full p-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-20 h-8 bg-gray-200 rounded-full animate-pulse"></div>
            ))}
          </div>
        </div>

        {/* Projects Skeleton */}

      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Interactive Filter */}
      <div className="flex justify-center">
        <div className="flex space-x-2 bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-gray-200/50 shadow-lg">
          {[
            { key: 'all', label: 'All Projects', icon: '🚀' },
            { key: 'frontend', label: 'Frontend', icon: '🎨' },
            { key: 'fullstack', label: 'Full Stack', icon: '⚡' }
          ].map(({ key, label, icon }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${filter === key
                ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
            >
              <span className="mr-2">{icon}</span>
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Projects Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
        {filteredProjects.filter(p => p.featured).map((project) => (
          <div
            key={project.id}
            className="group relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200/50 shadow-lg transition-all duration-500"
          >
            {/* Project Image/Preview */}
            <div className="relative h-64 bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-cyan-100/30"></div>


              {/* Project Preview Image */}
              <div className="absolute inset-0 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  className="w-full h-full object-cover object-top blur-sm opacity-80"
                  loading="lazy"
                />
              </div>

              {/* Action Buttons - Higher z-index to appear above image */}
              <div className="absolute bottom-4 right-4 flex space-x-3 z-10">
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/95 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:bg-white transition-all duration-300 group/btn shadow-lg"
                  title="View Live Project"
                >
                  <VisibilityIcon className="text-gray-700 text-xl group-hover/btn:text-blue-600 transition-colors" />
                </Link>
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/95 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:bg-white transition-all duration-300 group/btn shadow-lg"
                  title="View Source Code"
                >
                  <GitHubIcon className="text-gray-700 text-xl group-hover/btn:text-blue-600 transition-colors" />
                </Link>
              </div>

            </div>

            {/* Project Info */}
            <div className="p-8 space-y-5">
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-bold text-gray-900">
                  {project.name}
                </h3>
                <ArrowOutwardIcon className="text-gray-400 transition-all duration-300" />
              </div>

              <p className="text-gray-600 leading-relaxed text-lg">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-xl font-medium border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Regular Projects Grid */}
   

      {/* Call to Action */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl opacity-60"></div>
        <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-12 border border-gray-200/50 shadow-lg text-center">
          <div className="space-y-8">
            <div className="text-5xl">🚀</div>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                Ready to Start Your <span className="text-gradient">Next Project</span>?
              </h3>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                Let's collaborate and bring your vision to life with cutting-edge technology, creative design, and attention to detail that makes a difference.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>Let's Build Something Amazing</span>
                <ArrowOutwardIcon className="ml-2" />
              </Link>
              <Link
                href="#about"
                className="bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg border border-gray-200 hover:bg-gray-50 transition-all duration-300"
              >
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;