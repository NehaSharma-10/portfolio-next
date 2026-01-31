"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Image Section */}
            <div className='flex justify-center lg:justify-start animate-slide-in-left'>
                <div className='relative group'>
                    <div className="absolute -inset-4 blur-2xl "></div>
                    <div className='relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden'>
                        <Image
                            src="/assets/about.png"
                            fill
                            sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                            className='object-cover'
                            alt="Neha Sharma - Frontend Developer"
                            priority
                            quality={90}
                        />
                    </div>
                    {/* Decorative Badge */}
                    <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-accent text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl shadow-custom-lg">
                        <span className="font-bold text-sm sm:text-base">5+ Years</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className='space-y-6 animate-slide-in-right'>
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary rounded-full border border-custom">
                    <span className="text-xl">✨</span>
                    <span className="text-secondary font-medium">About Me</span>
                </div>

                <h2 className='text-4xl md:text-5xl font-bold text-primary leading-tight'>
                    Crafting Digital <span className='gradient-text'>Experiences</span>
                </h2>

                <div className='space-y-4 text-secondary text-lg leading-relaxed'>
                    <p>
                        In <span className="font-semibold text-accent">2019</span>, during my undergraduate studies,
                        I discovered my passion for frontend development. Since then, I've been dedicated to
                        mastering modern web technologies and building exceptional user experiences.
                    </p>
                    <p>
                        I specialize in <span className="font-semibold text-primary">React, Next.js, and modern JavaScript</span>,
                        creating responsive, accessible, and performant web applications. My focus is on writing clean,
                        maintainable code while staying current with industry best practices and emerging technologies.
                    </p>
                </div>

                {/* Stats */}
                <div className='grid grid-cols-3 gap-2 sm:gap-4 pt-4'>
                    {[
                        { number: '50+', label: 'Projects' },
                        { number: '5+', label: 'Years' },
                        { number: '100%', label: 'Passion' }
                    ].map((stat, index) => (
                        <div key={index} className='text-center p-2 sm:p-4 bg-secondary rounded-lg sm:rounded-xl border border-custom'>
                            <div className='text-lg sm:text-2xl font-bold gradient-text'>{stat.number}</div>
                            <div className='text-xs sm:text-sm text-secondary mt-1'>{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4'>
                    <Link href='#contact' className='btn-primary justify-center'>
                        Let's Work Together
                    </Link>
                    <Link href='#projects' className='btn-secondary justify-center'>
                        View My Work
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;
