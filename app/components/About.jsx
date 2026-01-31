"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import VisibilityIcon from "@mui/icons-material/Visibility";
import WorkIcon from "@mui/icons-material/Work";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FavoriteIcon from "@mui/icons-material/Favorite";

const About = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Image Section */}
            <div className='flex justify-center lg:justify-start animate-slide-in-left'>
                <div className='relative group'>
                    <div className="absolute -inset-4 blur-2xl "></div>
                    <div className='relative w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden'>
                        <Image
                            src="/assets/about.png"
                            fill
                            className='object-cover'
                            alt="Neha Sharma - Frontend Developer"
                        />
                    </div>
                    {/* Decorative Badge */}
                    <div className="absolute -bottom-4 -right-4 bg-accent text-white px-6 py-3 rounded-2xl shadow-custom-lg">
                        <span className="font-bold">5+ Years</span>
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
                        I discovered my passion for frontend development. What began as curiosity evolved into a deep
                        commitment to crafting exceptional web experiences.
                    </p>
                    <p>
                        Today, I specialize in building <span className="font-semibold text-primary">intuitive, responsive interfaces</span> that
                        blend creativity with functionality. From dynamic portfolios to complex e-commerce platforms,
                        I focus on creating digital experiences that feel natural to use.
                    </p>
                    <p>
                        When I'm not coding, you'll find me exploring design trends, sketching ideas,
                        or discovering inspiration in everyday moments.
                    </p>
                </div>

                {/* Stats */}
                <div className='grid grid-cols-3 gap-4 pt-4'>
                    {[
                        { number: '50+', label: 'Projects' },
                        { number: '5+', label: 'Years' },
                        { number: '100%', label: 'Passion' }
                    ].map((stat, index) => (
                        <div key={index} className='text-center p-4 bg-secondary rounded-xl border border-custom'>
                            <div className='text-2xl font-bold gradient-text'>{stat.number}</div>
                            <div className='text-sm text-secondary mt-1'>{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                    <Link href='#contact' className='btn-primary'>
                        Let's Work Together
                    </Link>
                    <Link href='#projects' className='btn-secondary'>
                        View My Work
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;
