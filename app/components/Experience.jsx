import React from "react";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ExperienceList from "@/public/assets/data";

const Experience = () => {
  console.log(ExperienceList);
  return (
    <>
      <main className="mt-10 flex gap-5">
        {ExperienceList.map((item) => {
          return (
            <Link
              key={item.id}
              href={item.companyUrl}
              className="flex bg-[#f4f4f4] text-black exp-box border-1 border-[#ffffff16] "
            >
              <div className="w-full flex flex-col gap-0">
                <p className="text-xl ">
                  {item.companyName}
                  <span>
                    <ArrowOutwardIcon className="text-[#EAB308] hover:translate-x-6" />
                  </span>
                </p>
                <p className="text-sm mb-3">{item.jobTitle}</p>
                <p className="text-sm mb-3">
                  {item.startDate} - {item.endDate}
                </p>

                <ul>
                  {item.description.map((val) => {
                    return <li className="">• {val}</li>;
                  })}
                </ul>

                <div className="mt-10 flex gap-x-3">
                  {item.skillTags.map((val) => {
                    return (
                      <p className="text-[10px] bg-blue border-1 border-white text-white py-1 px-2 inline rounded-full">
                        {val}
                      </p>
                    );
                  })}
                </div>
              </div>
            </Link>
          );
        })}
      </main>
    </>
  );
};

export default Experience;
