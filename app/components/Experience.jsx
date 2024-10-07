import React from "react";
import Link from "next/link";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Experience = () => {
    return (
        <>
            <main className="mt-10 flex gap-10">

                <Link href="#" className="flex bg-[#020617] exp-box py-20 border-1 border-[#ffffff16] ">
                    <div className="w-1/4">
                        <p>2023-present</p>
                    </div>
                    <div className="w-3/4 flex flex-col gap-10">
                        <p>Apex Web Cube Pvt Ltd <span><ArrowOutwardIcon className="text-[#EAB308]" /></span></p>
                        <p className="">
                            Build and maintain critical used to construct apex frontend,
                            across the website productBuild and maintain critical used to
                            construct apex frontend, across the website productBuild and
                            maintain critical used to construct apex frontend, across the
                            website product
                        </p>
                        <div>
                            <p className="bg-[#020617] border-1 border-white text-white py-1 px-4 inline rounded-full">Next Js</p>
                            <p className="bg-[#020617] border-1 border-white text-white py-1 px-4 inline rounded-full mx-2">Javascript</p>
                            <p className="bg-[#020617] border-1 border-white text-white py-1 px-4 inline rounded-full">Tailwind CSS</p>
                        </div>
                    </div>
                </Link>
                <Link href="#" className="flex exp-box py-4 bg-[#020617]  border-1 border-[#ffffff16]">
                    <div className="w-1/4">
                        <p>2023-2023</p>
                    </div>
                    <div className="w-3/4 flex flex-col gap-4">
                        <p>Yuktidea Technologies <span><ArrowOutwardIcon className="text-[#EAB308]" /></span></p>
                        <p className="te">
                            Build and maintain critical used to construct apex frontend,
                            across the website productBuild and maintain critical used to
                            construct apex frontend, across the website productBuild and
                            maintain critical used to construct apex frontend, across the
                            website product
                        </p>
                        <div>
                            <p className="bg-[#020617] border-1 border-white text-white py-1 px-4 inline rounded-full">HTML</p>
                            <p className="bg-[#020617] border-1 border-white text-white py-1 px-4 inline rounded-full mx-2">CSS</p>
                            <p className="bg-[#020617] border-1 border-white text-white py-1 px-4 inline rounded-full">Javascript</p>
                        </div>
                    </div>
                </Link>
            </main>
        </>
    );
};

export default Experience;
