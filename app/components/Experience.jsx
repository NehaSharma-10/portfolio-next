import React from "react";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ExperienceList from "@/public/assets/data";

const Experience = () => {
  return (
    <div className="space-y-8">
      {ExperienceList.map((item, index) => (
        <div
          key={item.id}
          className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-amber-200"
        >
          <Link
            href={item.companyUrl}
            className="block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex-1 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors flex items-center gap-2">
                      {item.companyName}
                      <ArrowOutwardIcon className="text-amber-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </h3>
                    <p className="text-lg font-semibold text-slate-700 mt-1">
                      {item.jobTitle}
                    </p>
                    <p className="text-sm text-slate-500 mt-2 font-medium">
                      {item.startDate} - {item.endDate}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {item.description.map((desc, descIndex) => (
                    <div key={descIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-600 leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {item.skillTags.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full border border-slate-200 hover:bg-amber-50 hover:border-amber-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Experience;