import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const About = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center'>
            <div className='space-y-6 sm:space-y-8 lg:order-1'>
                {/* Creative Quote */}
                <div className="relative p-4 sm:p-6 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-purple-200 shadow-lg">
                    <div className="absolute -top-1 sm:-top-2 -left-1 sm:-left-2 w-3 sm:w-4 h-3 sm:h-4 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
                    <p className="text-base sm:text-lg italic text-gray-700 font-light leading-relaxed">
                        "Design is not just what it looks like and feels like. Design is how it works."
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-2">— Steve Jobs</p>
                </div>

                <div className='space-y-4 sm:space-y-6 text-gray-600 leading-relaxed'>
                    <p className='text-base sm:text-lg'>
                        In <span className="font-semibold text-purple-600">2019</span>, during my undergraduate studies, I discovered my passion for frontend development.
                        What began as curiosity evolved into a deep commitment to crafting exceptional web experiences that blend
                        <span className="text-gradient font-medium"> creativity with functionality</span>.
                    </p>
                    <p className='text-base sm:text-lg'>
                        Today, I specialize in building <span className="font-semibold text-purple-600">intuitive, responsive interfaces</span>
                        that tell stories through code. From dynamic portfolios to complex e-commerce platforms,
                        I focus on creating digital experiences that not only look beautiful but feel natural to use.
                    </p>
                    <p className='text-base sm:text-lg'>
                        I thrive at the intersection of <span className="text-gradient font-medium">art and engineering</span>,
                        where pixels meet purpose and every interaction is thoughtfully crafted. When I'm not coding,
                        you'll find me exploring design trends, sketching ideas, or discovering inspiration in everyday moments.
                    </p>
                </div>

                <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6'>
                    <Link
                        href='#contact'
                        className='btn-primary group relative overflow-hidden text-center sm:text-left'
                    >
                        <span className="relative z-10">Let's Create Together</span>
                    </Link>
                    <Link
                        href='#projects'
                        className='btn-secondary group text-center sm:text-left'
                    >
                        <span>View My Work</span>
                    </Link>
                </div>
            </div>

            <div className='flex justify-center lg:justify-end lg:order-2'>
                <div className='relative'>
                    {/* Creative Frame */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-purple-200 via-pink-200 to-orange-200 rounded-3xl opacity-30 blur-xl"></div>
                    <div className="relative bg-white p-4 rounded-2xl shadow-creative">
                        <div className='w-80 h-80 lg:w-96 lg:h-96 relative overflow-hidden rounded-xl'>
                            <Image
                                src="/assets/about.png"
                                fill
                                className='object-cover'
                                alt="Neha Sharma - Frontend Developer"
                            />
                        </div>
                    </div>

                    {/* Floating Creative Elements */}
                    <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-60 animate-pulse"></div>
                    <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-70 animate-pulse delay-500"></div>

                    {/* Creative Badge */}
                    <div className="absolute top-4 -left-6 bg-white rounded-full px-4 py-2 shadow-creative border border-gray-100">
                        <span className="text-sm font-medium text-gradient">✨ Creative Developer</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About