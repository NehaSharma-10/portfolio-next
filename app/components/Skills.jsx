import React, { useState, useEffect } from "react";
import Image from "next/image";

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState(new Set());

  const skills = [
    { name: "HTML5", image: "/assets/Html.webp", level: 95, color: "from-orange-400 to-red-500" },
    { name: "CSS3", image: "/assets/CSS.webp", level: 90, color: "from-blue-400 to-blue-600" },
    { name: "JavaScript", image: "/assets/JS.webp", level: 88, color: "from-yellow-400 to-orange-500" },
    { name: "React", image: "/assets/react.webp", level: 92, color: "from-cyan-400 to-blue-500" },
    { name: "Next.js", image: "/assets/next js.webp", level: 85, color: "from-gray-600 to-gray-800" },
    { name: "Tailwind CSS", image: "/assets/tailwindcss.webp", level: 90, color: "from-teal-400 to-cyan-500" },
    { name: "Bootstrap", image: "/assets/bootstrap.webp", level: 80, color: "from-purple-500 to-indigo-600" },
    { name: "Node.js", image: "/assets/node.webp", level: 75, color: "from-green-500 to-emerald-600" },
  ];

  const creativeSkills = [
    { name: "UI/UX Design", icon: "🎨", description: "Creating intuitive user experiences" },
    { name: "Responsive Design", icon: "📱", description: "Mobile-first approach" },
    { name: "Performance Optimization", icon: "⚡", description: "Lightning-fast websites" },
    { name: "SEO Best Practices", icon: "🔍", description: "Search engine optimization" },
    { name: "Version Control", icon: "🔄", description: "Git workflow mastery" },
    { name: "API Integration", icon: "🔗", description: "Seamless data connectivity" },
    { name: "Testing & Debugging", icon: "🐛", description: "Quality assurance" },
    { name: "Agile Development", icon: "🚀", description: "Efficient project delivery" }
  ];

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
      {/* Interactive Skills Showcase */}
      <div className="relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              data-index={index}
              className="skill-card group relative"
            >
              {/* Enhanced Skill Card */}
              <div className={`bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center space-y-3 sm:space-y-4 border border-gray-200/50 shadow-creative transition-all duration-500 ${visibleSkills.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>

                {/* Skill Icon with Enhanced Hover Effect */}
                <div className="relative mx-auto w-12 sm:w-16 h-12 sm:h-16">
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-2xl opacity-20 group-hover:opacity-40 transition-all duration-300 group-hover:scale-110`}></div>
                  <div className="relative w-full h-full p-2 sm:p-3 bg-white rounded-xl shadow-creative group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                    <Image
                      src={skill.image}
                      fill
                      className="object-contain"
                      alt={`${skill.name} logo`}
                    />
                  </div>
                  {/* Glow effect on hover */}
                  {/* <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-md transition-all duration-300`}></div> */}
                </div>

                {/* Skill Name */}
                <h3 className="text-xs sm:text-sm font-semibold text-gray-800">
                  {skill.name}
                </h3>

                {/* Enhanced Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Proficiency</span>
                    <span className={`text-xs font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ease-out ${visibleSkills.has(index) ? 'animate-pulse' : ''}`}
                      style={{
                        width: visibleSkills.has(index) ? `${skill.level}%` : '0%',
                        background: `linear-gradient(90deg, ${skill.color.replace('from-', '').replace('to-', '').split(' ').map(c => `var(--${c})`).join(', ')})`
                      }}
                    ></div>
                  </div>
                </div>


              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Creative Skills Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gray-50 rounded-3xl opacity-60"></div>

        <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-12 border border-gray-200/50 ">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-3 h-3 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full animate-pulse"></div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                Beyond <span className="text-gradient">Code</span>
              </h3>
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse delay-500"></div>
            </div>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">Where technical expertise meets creative vision</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {creativeSkills.map((skill, index) => (
              <div
                key={index}
                className="group relative p-4 sm:p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200 transition-all duration-300"
              >
                <div className="text-center space-y-3 sm:space-y-4 relative z-10">
                  <div className="text-3xl sm:text-4xl group-hover:scale-125 transition-transform duration-300 filter group-hover:drop-shadow-lg">
                    {skill.icon}
                  </div>
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                    {skill.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {skill.description}
                  </p>
                </div>


              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Client Testimonial */}
      {/* <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-blue-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-white/10 rounded-full blur-2xl sm:blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-24 sm:w-32 lg:w-48 h-24 sm:h-32 lg:h-48 bg-white/5 rounded-full blur-xl sm:blur-2xl animate-float-delayed"></div>

        <div className="relative z-10 text-center space-y-4 sm:space-y-6">
          <div className="text-4xl sm:text-6xl opacity-50 animate-pulse">"</div>
          <p className="text-lg sm:text-xl lg:text-2xl font-light italic max-w-4xl mx-auto leading-relaxed">
            Neha's technical expertise combined with her creative vision delivered exactly what we needed.
            Her attention to detail and innovative approach exceeded our expectations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
              <span className="text-lg">👤</span>
            </div>
            <div className="text-center sm:text-left">
              <div className="font-semibold text-lg">Sarah Johnson</div>
              <div className="text-sm opacity-80">CEO, TechStart Inc.</div>
            </div>
          </div>

          Rating Stars
          <div className="flex justify-center space-x-1 pt-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-300 text-xl animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>⭐</span>
            ))}
          </div>
        </div>
      </div> */}

      {/* Enhanced Status Dashboard */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {[
          { icon: "⚡", title: "Fast Delivery", desc: "Average project completion in 2-4 weeks", gradient: "text-gradient" },
          { icon: "🎯", title: "Pixel Perfect", desc: "Attention to every detail matters", gradient: "text-gradient-warm" },
          { icon: "🚀", title: "Future Ready", desc: "Built with latest technologies", gradient: "text-gradient-cool" }
        ].map((item, index) => (
          <div key={index} className="group bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center space-y-3 sm:space-y-4 border border-gray-200/50 shadow-creative transition-all duration-300">
            <div className="text-2xl sm:text-3xl">
              {item.icon}
            </div>
            <div className={`text-xl sm:text-2xl font-bold ${item.gradient}`}>
              {item.title}
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {item.desc}
            </p>

            {/* Hover glow effect */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
          </div>
        ))}
      </div>

      {/* Enhanced Live Status */}
      <div className="text-center">
        <div className="inline-flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6 px-6 sm:px-8 py-4 sm:py-4 bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-full border border-gray-200/50 transition-all duration-300">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-sm"></div>
            <span className="text-gray-700 font-medium text-sm sm:text-base">Currently Available</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300 shadow-sm"></div>
            <span className="text-gray-700 font-medium text-sm sm:text-base">Response within 24hrs</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-500 shadow-sm"></div>
            <span className="text-gray-700 font-medium text-sm sm:text-base">Ready for new projects</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;