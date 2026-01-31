"use client";
import React, { useState } from "react";
import Link from "next/link";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (err) {
      setError('Something went wrong. You can email me directly at shrmatwinkle246@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6 sm:space-y-8 animate-slide-in-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <Link
                href="mailto:shrmatwinkle246@gmail.com"
                className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-secondary rounded-xl border border-custom hover-lift group"
              >
                <div className="p-2 sm:p-3 bg-accent rounded-lg flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs sm:text-sm text-secondary">Email</div>
                  <div className="text-sm sm:text-base text-primary font-medium group-hover:text-accent transition-colors break-all">shrmatwinkle246@gmail.com</div>
                </div>
              </Link>

              <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-secondary rounded-xl border border-custom">
                <div className="p-2 sm:p-3 bg-accent rounded-lg flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-secondary">Location</div>
                  <div className="text-sm sm:text-base text-primary font-medium">Available for remote work</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">Connect</h3>
            <div className="flex gap-3 sm:gap-4">
              <Link
                href="https://github.com/NehaSharma-10/"
                target="_blank"
                className="p-3 sm:p-4 bg-secondary hover:bg-accent rounded-xl transition-all duration-300 hover-lift group border border-custom"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/in/nehasharma8529/"
                target="_blank"
                className="p-3 sm:p-4 bg-secondary hover:bg-accent rounded-xl transition-all duration-300 hover-lift group border border-custom"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card animate-slide-in-right">
          {isSubmitted && (
            <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg">
              <p className="text-green-800 font-medium">✓ Thanks! I'll get back to you soon.</p>
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg">
              <p className="text-red-800 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-primary font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-tertiary border border-custom rounded-lg text-primary focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-primary font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-tertiary border border-custom rounded-lg text-primary focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-primary font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-tertiary border border-custom rounded-lg text-primary focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`w-full py-4 rounded-xl font-bold transition-all ${isSubmitting || isSubmitted
                ? 'bg-tertiary text-secondary cursor-not-allowed'
                : 'bg-accent hover:bg-accent-secondary text-white hover:scale-105'
                }`}
            >
              {isSubmitting ? 'Sending...' : isSubmitted ? 'Sent! ✓' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
