import React, { useState, useEffect } from "react";
import StarIcon from "@mui/icons-material/Star";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Product Manager",
        company: "TechCorp Inc.",
        image: "/api/placeholder/80/80",
        rating: 5,
        text: "Working with this developer was an absolute pleasure. They delivered a stunning website that exceeded our expectations. The attention to detail and creative problem-solving skills are outstanding.",
        project: "E-commerce Platform"
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Startup Founder",
        company: "InnovateLab",
        image: "/api/placeholder/80/80",
        rating: 5,
        text: "The level of professionalism and technical expertise is remarkable. Our web application was delivered on time and the user experience is fantastic. Highly recommended!",
        project: "SaaS Dashboard"
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "Marketing Director",
        company: "Creative Agency",
        image: "/api/placeholder/80/80",
        rating: 5,
        text: "Incredible work on our portfolio website! The design is modern, responsive, and perfectly captures our brand identity. The collaboration process was smooth and efficient.",
        project: "Portfolio Website"
    },
    {
        id: 4,
        name: "David Thompson",
        role: "CTO",
        company: "StartupXYZ",
        image: "/api/placeholder/80/80",
        rating: 5,
        text: "Outstanding frontend development skills! The performance optimizations and clean code structure made our application lightning fast. A true professional.",
        project: "Mobile App Landing"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsAutoPlaying(false);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setIsAutoPlaying(false);
    };

    const goToTestimonial = (index) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };

    return (
        <div className="relative">
            {/* Main Testimonial Display */}
            <div className="relative bg-white rounded-3xl shadow-creative p-8 md:p-12 border border-purple-100 overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-30 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-20 blur-xl"></div>

                {/* Quote Icon */}
                <div className="absolute top-6 left-6 text-purple-200">
                    <FormatQuoteIcon style={{ fontSize: '4rem' }} />
                </div>

                <div className="relative z-10">
                    {/* Testimonial Content */}
                    <div className="text-center mb-8">
                        <div className="flex justify-center mb-4">
                            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                <StarIcon key={i} className="text-yellow-400 text-2xl" />
                            ))}
                        </div>

                        <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-medium italic">
                            "{testimonials[currentIndex].text}"
                        </blockquote>

                        {/* Client Info */}
                        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                            <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-creative">
                                <span className="text-white text-2xl font-bold">
                                    {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                                </span>
                            </div>

                            <div className="text-center md:text-left">
                                <h4 className="text-xl font-bold text-gray-900 mb-1">
                                    {testimonials[currentIndex].name}
                                </h4>
                                <p className="text-purple-600 font-medium mb-1">
                                    {testimonials[currentIndex].role}
                                </p>
                                <p className="text-gray-500 text-sm">
                                    {testimonials[currentIndex].company}
                                </p>
                                <div className="mt-2 px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs rounded-full inline-block">
                                    {testimonials[currentIndex].project}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevTestimonial}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-creative flex items-center justify-center text-purple-600 hover:text-pink-600 hover:shadow-warm transition-all duration-300 group"
                >
                    <ArrowBackIosIcon className="group-hover:scale-110 transition-transform" />
                </button>

                <button
                    onClick={nextTestimonial}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-creative flex items-center justify-center text-purple-600 hover:text-pink-600 hover:shadow-warm transition-all duration-300 group"
                >
                    <ArrowForwardIosIcon className="group-hover:scale-110 transition-transform" />
                </button>
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-8 space-x-3">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125'
                                : 'bg-gray-300 hover:bg-purple-300'
                            }`}
                    />
                ))}
            </div>

            {/* All Testimonials Grid (Hidden on mobile, shown on larger screens) */}
            <div className="hidden lg:grid grid-cols-2 gap-6 mt-16">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={testimonial.id}
                        className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${index === currentIndex
                                ? 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 shadow-creative'
                                : 'bg-white border-gray-200 hover:border-purple-200 hover:shadow-creative'
                            }`}
                        onClick={() => goToTestimonial(index)}
                    >
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-white text-sm font-bold">
                                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                                </span>
                            </div>

                            <div className="flex-1">
                                <div className="flex mb-2">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <StarIcon key={i} className="text-yellow-400 text-sm" />
                                    ))}
                                </div>

                                <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-3">
                                    "{testimonial.text}"
                                </p>

                                <div>
                                    <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                                    <p className="text-purple-600 text-xs">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Stats Section */}
            <div className="mt-16 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                    <div className="space-y-2">
                        <div className="text-3xl font-bold text-gradient">50+</div>
                        <div className="text-sm text-gray-600">Happy Clients</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-3xl font-bold text-gradient-warm">98%</div>
                        <div className="text-sm text-gray-600">Satisfaction Rate</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-3xl font-bold text-gradient-cool">100+</div>
                        <div className="text-sm text-gray-600">Projects Completed</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-3xl font-bold text-gradient-gold">5★</div>
                        <div className="text-sm text-gray-600">Average Rating</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;