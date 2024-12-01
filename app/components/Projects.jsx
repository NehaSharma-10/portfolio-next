import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Image from "next/image";

const Projects = () => {
  const username = "NehaSharma-10";
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(
    () => async () => {
      const resp = await axios.get(
        `https://api.github.com/users/NehaSharma-10/repos`
      );
      const data = resp.data;
      setProjects(data.slice(1, 9));
    },
    []
  );
  return (
    <div>
      <div className="grid grid-col-1 lg:grid-cols-3 gap-4">
        {projects.map((item, id) => {
          return (
            <Link
              key={id}
              href={item.url}
              className="flex bg-[#fff] text-black exp-box border-1 border-[#ffffff16] "
            >
              <div className="w-full flex flex-col gap-0">
                <div>
                  {/* <Image
                    src="https://avatars.githubusercontent.com/u/69048676?v=4"
                    width={50}
                    height={50}
                  /> */}

                  <p className="text-xl">
                    {item.name}
                    <span>
                      <ArrowOutwardIcon className="text-[#EAB308]" />
                    </span>
                  </p>
                  <p className="text-sm mb-3">2023-present</p>
                  <p className="justify">
                    Build and maintain critical used to construct apex frontend,
                    across the website productBuild and maintain critical used
                    to construct apex frontend, across the website productBuild
                    and maintain critical used to construct apex frontend,
                    across the website product
                  </p>
                </div>
                <div className="mt-10 grid grid-flow-col gap-3 text-[10px] text-center">
                  <p className="bg-blue border-1 border-white text-white py-1 px-4 inline rounded-full">
                    Next Js
                  </p>
                  <p className="bg-blue  border-1 border-white text-white py-1 px-4 inline rounded-full">
                    Javascript
                  </p>
                  <p className="bg-blue  border-1 border-white text-white py-1 px-4 inline rounded-full">
                    Tailwind CSS
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
