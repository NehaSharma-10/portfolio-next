import React from 'react'
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const FrontPage = () => {
    return (
        <>
            <main className='flex flex-col'>
                <div>
                    <h1 className="lg:text-8xl md:text-6xl font-bold text-[#fff] mb-3">I'm <span className="text-[#EAB308]"> Neha Sharma</span></h1>
                    <p className="text-2xl text-[#fff] uppercase text-center">Frontend Engineer</p>
                    <p className="mt-4 text-[#F3F4F6] text-center">
                        Creating smooth, dynamic websites that leave lasting impressions.
                    </p>
                </div>

                <div className="mt-8">
                    <ul className="flex gap-4 justify-center">
                        <li>
                            <Link target="_blank" href="https://github.com/NehaSharma-10/">
                                <GitHubIcon className="text-[#EAB308] text-4xl" />
                            </Link>
                        </li>
                        <li>
                            <Link
                                target="_blank"
                                href="https://www.linkedin.com/in/nehasharma8529/"
                            >
                                <LinkedInIcon className="text-[#EAB308] text-4xl" />
                            </Link>
                        </li>
                    </ul>
                </div>

            </main>


        </>
    )
}

export default FrontPage
