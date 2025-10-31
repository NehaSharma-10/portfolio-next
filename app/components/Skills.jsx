import React from "react";
import Image from "next/image";

const Skills = () => {
  const skills = [
    { name: "HTML5", image: "/assets/Html.webp", category: "Frontend", color: "from-orange-400 to-red-500" },
    { name: "CSS3", image: "/assets/CSS.webp", category: "Frontend", color: "from-blue-400 to-blue-600" },
    { name: "Bootstrap", image: "/assets/bootstrap.webp", category: "Framework", color: "from-purple-400 to-purple-600" },
    { name: "Tailwind CSS", image: "/assets/tailwindcss.webp", category: "Framework", color: "from-cyan-400 to-teal-500" },
    { name: "JavaScript", image: "/assets/JS.webp", category: "Language", color: "from-yellow-400 to-amber-500" },
    { name: "React", image: "/assets/react.webp", category: "Library", color: "from-blue-400 to-cyan-500" },
    { name: "Next.js", image: "/assets/next js.webp", category: "Framework", color: "from-gray-700 to-gray-900" },
    { name: "Node.js", image: "/assets/node.webp", category: "Backend", color: "from-green-400 to-emerald-500" },
  ];

  return (
    <div className="space-y-16">
      <div className="text-center">
        <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
          A curated collection of technologies I've mastered to create exceptional digital experiences
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 lg:gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group relative"
          >
            {/* Skill Card */}
            <div className="card-dark p-6 lg:p-8 text-center space-y-4 group-hover:-translate-y-3 group-hover:scale-105">
              {/* Icon Container */}
              <div className="relative mx-auto w-16 h-16 lg:w-20 lg:h-20">
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                <div className="relative w-full h-full p-3">
                  <Image
                    src={skill.image}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-500"
                    alt={`${skill.name} logo`}
                  />
                </div>
              </div>

              {/* Skill Info */}
              <div className="space-y-2">
                <h3 className="text-sm lg:text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs text-slate-400 font-medium">
                  {skill.category}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity -z-10`}></div>
            </div>

            {/* Floating Indicator */}
            <div className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br ${skill.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse`}></div>
          </div>
        ))}
      </div>

      <div className="text-center pt-12">
        <div className="inline-flex items-center space-x-3 px-6 py-3 bg-neutral-800 rounded-full border border-neutral-700">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <p className="text-neutral-300 font-medium">
            Always learning and exploring new technologies
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;