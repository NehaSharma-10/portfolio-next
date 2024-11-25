import React from "react";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Experience = () => {
  return (
    <>
      <main className="mt-10 flex gap-10">
        <Link
          href="#"
          className="flex bg-blue exp-box border-1 border-[#ffffff16] "
        >
          <div className="w-full flex flex-col gap-0">
            <p className="text-xl">
              Apex Web Cube Pvt Ltd{" "}
              <span>
                <ArrowOutwardIcon className="text-[#EAB308]" />
              </span>
            </p>
            <p className="text-sm mb-3">2023-present</p>
            <p className="text-justify">
              Build and maintain critical used to construct apex frontend,
              across the website productBuild and maintain critical used to
              construct apex frontend, across the website productBuild and
              maintain critical used to construct apex frontend, across the
              website product
            </p>
            <div className="mt-10 flex gap-x-3">
              <p className="bg-blue border-1 border-white text-white py-1 px-4 inline rounded-full">
                Next Js
              </p>
              <p className="bg-[#020617] border-1 border-white text-white py-1 px-4 inline rounded-full">
                Javascript
              </p>
              <p className="bg-[#020617] border-1 border-white text-white py-1 px-4 inline rounded-full">
                Tailwind CSS
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="#"
          className="flex bg-blue exp-box border-1 border-[#ffffff16] "
        >
          <div className="w-full flex flex-col gap-0">
            <p className="text-xl">
              Yuktidea Technologies{" "}
              <span>
                <ArrowOutwardIcon className="text-[#EAB308]" />
              </span>
            </p>
            <p className="text-[12px] mb-3">Aug 2022 - Dec 2023</p>
            <p className="text-justify">
              Build and maintain critical used to construct apex frontend,
              across the website productBuild and maintain critical used to
              construct apex frontend, across the website productBuild and
              maintain critical used to construct apex frontend, across the
              website product
            </p>
            <div className="mt-10 flex gap-x-3">
              <p className="bg-blue border-1 border-white text-white py-1 px-4 inline rounded-full">
                HTML
              </p>
              <p className="bg-[#020617] border-1 border-white text-white py-1 px-4 inline rounded-full">
                CSS
              </p>
              <p className="bg-[#020617] border-1 border-white text-white py-1 px-4 inline rounded-full">
                Tailwind CSS
              </p>
              <p className="bg-[#020617] border-1 border-white text-white py-1 px-4 inline rounded-full">
                Javascript
              </p>
              <p className="bg-[#020617] border-1 border-white text-white py-1 px-4 inline rounded-full">
                React
              </p>
            </div>
          </div>
        </Link>
      
      </main>
    </>
  );
};

export default Experience;
