import React from "react";
import Link from "next/link";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Experience = () => {
    return (
        <>
            <main className="mt-10 flex flex-col gap-10">
                <div>
                    <h2 className='text-sm mb-10 tracking-[1px] underline'>EXPERIENCE</h2>
                </div>
                <Link href="#" className="flex bg-slate-900 exp-box p-5 border-1 border-[#ffffff16] ">
                    <div className="w-1/4">
                        <p>2023-present</p>
                    </div>
                    <div className="w-3/4 flex flex-col gap-4">
                        <p>Apex Web Cube Pvt Ltd <span><ArrowOutwardIcon /></span></p>
                        <p className="">
                            Build and maintain critical used to construct apex frontend,
                            across the website productBuild and maintain critical used to
                            construct apex frontend, across the website productBuild and
                            maintain critical used to construct apex frontend, across the
                            website product
                        </p>
                        <div>
                            <p className="bg-black border-1 border-white text-white py-1 px-4 inline rounded-full">Next Js</p>
                            <p className="bg-black border-1 border-white text-white py-1 px-4 inline rounded-full mx-2">Javascript</p>
                            <p className="bg-black border-1 border-white text-white py-1 px-4 inline rounded-full">Tailwind CSS</p>
                        </div>
                    </div>
                </Link>
                <Link href="#" className="flex exp-box py-4  border-1 border-[#ffffff16]">
                    <div className="w-1/4">
                        <p>2023-2023</p>
                    </div>
                    <div className="w-3/4 flex flex-col gap-4">
                        <p>Yuktidea Technologies <span><ArrowOutwardIcon /></span></p>
                        <p className="te">
                            Build and maintain critical used to construct apex frontend,
                            across the website productBuild and maintain critical used to
                            construct apex frontend, across the website productBuild and
                            maintain critical used to construct apex frontend, across the
                            website product
                        </p>
                        <div>
                            <p className="bg-black border-1 border-white text-white py-1 px-4 inline rounded-full">HTML</p>
                            <p className="bg-black border-1 border-white text-white py-1 px-4 inline rounded-full mx-2">CSS</p>
                            <p className="bg-black border-1 border-white text-white py-1 px-4 inline rounded-full">Javascript</p>
                        </div>
                    </div>
                </Link>
            </main>
        </>
    );
};

export default Experience;
