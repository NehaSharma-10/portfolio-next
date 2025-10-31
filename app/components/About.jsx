import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CodeIcon from '@mui/icons-material/Code'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import SpeedIcon from '@mui/icons-material/Speed'

const About = () => {
    const highlights = [
        {
            icon: <CodeIcon className="w-6 h-6" />,
            title: "Clean Code",
            description: "Writing maintainable, scalable code"
        },
        {
            icon: <DesignServicesIcon className="w-6 h-6" />,
            title: "UI/UX Focus",
            description: "Pixel-perfect, user-centered design"
        },
        {
            icon: <SpeedIcon className="w-6 h-6" />,
            title: "Performance",
            description: "Optimized for speed and efficiency"
        }
    ];

    return (
        <div className='grid lg:grid-cols-2 gap-16 lg:gap-24 items-center'>
            <div className='space-y-8 lg:order-1'>
                <div className='space-y-6'>
                    <div className='space-y-4'>
                        <div className="inline-block">
                            <span className="px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 text-sm font-medium rounded-full border border-amber-200">
                                My Journey
                            </span>
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-neutral-900 leading-tight">
                            Passionate about creating
                            <span className="text-gradient"> digital experiences</span>
                        </h3>
                    </div>

                    <div className='space-y-6 text-neutral-600 leading-relaxed'>
                        <p className='text-lg font-light'>
                            In <span className="font-semibold text-neutral-800">2019</span>, during my undergraduate studies, I discovered my passion for frontend development. What began as curiosity evolved into a deep commitment to crafting exceptional web experiences.
                        </p>
                        <p className='text-lg font-light'>
                            Today, I specialize in building <span className="font-semibold text-neutral-800">intuitive, responsive interfaces</span> that seamlessly blend aesthetics with functionality. From dynamic portfolios to complex e-commerce platforms, I focus on delivering solutions that users love.
                        </p>
                        <p className='text-lg font-light'>
                            I thrive at the intersection of <span className="font-semibold text-neutral-800">design and engineering</span>, ensuring every project not only looks stunning but performs flawlessly. When I'm not coding, you'll find me exploring emerging technologies and design trends.
                        </p>
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                    {highlights.map((item, index) => (
                        <div key={index} className='p-4 bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-xl border border-neutral-200'>
                            <div className='flex items-center space-x-3 mb-2'>
                                <div className='p-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-lg'>
                                    {item.icon}
                                </div>
                            </div>
                            <h4 className='font-semibold text-neutral-900 text-sm'>{item.title}</h4>
                            <p className='text-xs text-neutral-600 mt-1'>{item.description}</p>
                        </div>
                    ))}
                </div>

                <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                    <Link
                        href='#contact'
                        className='btn-primary text-lg'
                    >
                        Let's Work Together
                    </Link>
                    <Link
                        href='#projects'
                        className='btn-secondary text-lg'
                    >
                        View My Projects
                    </Link>
                </div>
            </div>

            <div className='relative lg:order-2'>
                <div className='relative'>
                    {/* Main image container */}
                    <div className='relative bg-gradient-to-br from-amber-50 via-orange-50 to-blue-50 rounded-3xl p-8 shadow-elegant-xl border border-neutral-200'>
                        <Image
                            src="/assets/about.png"
                            width={500}
                            height={500}
                            className='w-full h-auto rounded-2xl shadow-elegant'
                            alt="Neha Sharma - Frontend Developer"
                        />
                    </div>

                    {/* Floating elements */}
                    <div className='absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl opacity-80 blur-sm'></div>
                    <div className='absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl opacity-60 blur-sm'></div>

                    {/* Stats card */}
                    <div className='absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-elegant-lg border border-neutral-200'>
                        <div className='text-center'>
                            <div className='text-2xl font-bold text-gradient'>5+</div>
                            <div className='text-xs text-neutral-600 font-medium'>Years Experience</div>
                        </div>
                    </div>

                    {/* Tech badge */}
                    <div className='absolute -top-4 -left-4 bg-white rounded-xl p-3 shadow-elegant border border-neutral-200'>
                        <div className='flex items-center space-x-2'>
                            <div className='w-3 h-3 bg-green-400 rounded-full animate-pulse'></div>
                            <span className='text-xs font-medium text-neutral-700'>Available for work</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About