import React from 'react'
import Link from 'next/link'
const About = () => {
    return (
        <>

            <main className='w-100 flex flex-col lg:flex-row gap-20'>

                <div className='container mx-auto flex flex-col gap-5 my-auto'>
                    <p className=' tracking-[1px] leading-[22px] text-justify'>
                        In 2019, during my undergraduate studies, I found myself
                        increasingly drawn to the world of frontend development. What
                        started as curiosity quickly turned into a passion, and I immersed
                        myself in learning how to build engaging, user-friendly websites.
                    </p>
                    <p className=' tracking-[1px] leading-[22px] text-justify'>
                        Fast forward to today, and I’ve had the privilege of working on
                        projects ranging from dynamic portfolios to complex e-commerce
                        platforms. My main focus these days is building intuitive and
                        responsive user interfaces that provide a seamless experience for
                        users. I love working at the intersection of design and
                        engineering—where things not only look great but perform efficiently
                        under the hood.
                    </p>
                    <p className=' tracking-[1px] leading-[22px] text-justify'>
                        When I'm not coding, you'll find me exploring new tech trends,
                        catching up on my favorite reads, or simply enjoying time with
                        friends and family.
                    </p>
                    <Link href='#contact' className='bg-[#EAB308] text-black w-fit p-3 '>Contact Me </Link>
                </div>
                <div className='container mx-auto flex flex-col gap-5'>
                    <img src="/assets/about.png" className='w-full' alt="dd" />
                </div>

            </main>

        </>
    )
}

export default About
