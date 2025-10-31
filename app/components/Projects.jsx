import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import GitHubIcon from "@mui/icons-material/GitHub";
import StarIcon from "@mui/icons-material/Star";
import ForkRightIcon from "@mui/icons-material/ForkRight";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const resp = await axios.get(
          `https://api.github.com/users/NehaSharma-10/repos`
        );
        const data = resp.data;
        // Filter and sort projects
        const filteredProjects = data
          .filter(repo => !repo.fork && repo.name !== 'NehaSharma-10')
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
          .slice(0, 6);
        setProjects(filteredProjects);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-slate-100 rounded-2xl p-6 animate-pulse">
            <div className="h-6 bg-slate-200 rounded mb-4"></div>
            <div className="h-4 bg-slate-200 rounded mb-2"></div>
            <div className="h-4 bg-slate-200 rounded mb-4 w-3/4"></div>
            <div className="flex gap-2">
              <div className="h-6 bg-slate-200 rounded-full w-16"></div>
              <div className="h-6 bg-slate-200 rounded-full w-20"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-amber-200 hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <GitHubIcon className="text-slate-600 text-xl" />
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                  {project.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </h3>
              </div>
              <Link
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-amber-500 transition-colors"
              >
                <ArrowOutwardIcon className="text-lg" />
              </Link>
            </div>

            <div className="flex-1 space-y-4">
              <p className="text-slate-600 leading-relaxed line-clamp-3">
                {project.description || "A modern web application built with cutting-edge technologies, focusing on performance, user experience, and clean code architecture."}
              </p>

              <div className="flex items-center gap-4 text-sm text-slate-500">
                {project.stargazers_count > 0 && (
                  <div className="flex items-center gap-1">
                    <StarIcon className="text-amber-400 text-sm" />
                    <span>{project.stargazers_count}</span>
                  </div>
                )}
                {project.forks_count > 0 && (
                  <div className="flex items-center gap-1">
                    <ForkRightIcon className="text-slate-400 text-sm" />
                    <span>{project.forks_count}</span>
                  </div>
                )}
                {project.language && (
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span>{project.language}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-slate-100">
              {project.topics?.slice(0, 3).map((topic, topicIndex) => (
                <span
                  key={topicIndex}
                  className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full"
                >
                  {topic}
                </span>
              )) || (
                <>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
                    React
                  </span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
                    CSS
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;