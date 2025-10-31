import React, { useState } from "react";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <EmailIcon className="w-6 h-6" />,
      label: "Email",
      value: "nehasharma8529@gmail.com",
      href: "mailto:nehasharma8529@gmail.com",
      color: "from-amber-400 to-orange-500"
    },
    {
      icon: <LocationOnIcon className="w-6 h-6" />,
      label: "Location",
      value: "Available for Remote Work",
      href: null,
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      label: "Response Time",
      value: "Within 24 hours",
      href: null,
      color: "from-emerald-400 to-teal-500"
    }
  ];

  const socialLinks = [
    {
      icon: <GitHubIcon className="w-6 h-6" />,
      href: "https://github.com/NehaSharma-10/",
      label: "GitHub",
      color: "hover:bg-neutral-700"
    },
    {
      icon: <LinkedInIcon className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/nehasharma8529/",
      label: "LinkedIn",
      color: "hover:bg-blue-600"
    },
    {
      icon: <EmailIcon className="w-6 h-6" />,
      href: "mailto:nehasharma8529@gmail.com",
      label: "Email",
      color: "hover:bg-amber-600"
    }
  ];

  return (
    <div className="grid lg:grid-cols-5 gap-16 lg:gap-20">
      {/* Contact Info */}
      <div className="lg:col-span-2 space-y-10">
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-3xl lg:text-4xl font-black text-white leading-tight">
              Let's Create Something
              <span className="text-gradient"> Amazing</span>
            </h3>
            <p className="text-lg text-neutral-300 leading-relaxed font-light">
              I'm always excited to discuss new opportunities, creative projects,
              or simply chat about the latest in web development and design.
            </p>
          </div>
        </div>

        {/* Contact Details */}
        <div className="space-y-6">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className={`p-3 bg-gradient-to-br ${item.color} rounded-xl shadow-elegant`}>
                <div className="text-white">
                  {item.icon}
                </div>
              </div>
              <div className="flex-1">
                <p className="text-neutral-400 text-sm font-medium mb-1">{item.label}</p>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-white hover:text-amber-400 transition-colors font-semibold text-lg"
                  >
                    {item.value}
                  </Link>
                ) : (
                  <p className="text-white font-semibold text-lg">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="space-y-6">
          <div>
            <p className="text-neutral-300 font-semibold mb-4">Connect with me</p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  target="_blank"
                  href={social.href}
                  className={`group p-4 bg-neutral-800 rounded-xl ${social.color} transition-all duration-300 hover:-translate-y-2 shadow-elegant hover:shadow-elegant-lg border border-neutral-700 hover:border-neutral-600`}
                >
                  <div className="text-white group-hover:scale-110 transition-transform">
                    {social.icon}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Availability Status */}
        <div className="p-6 bg-gradient-to-br from-emerald-900/50 to-teal-900/50 rounded-2xl border border-emerald-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            <div>
              <p className="text-emerald-300 font-semibold">Available for new projects</p>
              <p className="text-emerald-400 text-sm">Let's discuss your next big idea!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="lg:col-span-3">
        <div className="card-dark p-8 lg:p-10">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-black text-white">Send a Message</h3>
              <p className="text-neutral-400 font-light">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-neutral-300 mb-3">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-4 bg-neutral-700 border border-neutral-600 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all font-medium"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-neutral-300 mb-3">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-4 bg-neutral-700 border border-neutral-600 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all font-medium"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-neutral-300 mb-3">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell me about your project, ideas, or just say hello! I'd love to hear from you."
                  className="w-full px-4 py-4 bg-neutral-700 border border-neutral-600 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none font-medium"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-xl shadow-elegant hover:shadow-elegant-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center space-x-3 text-lg"
              >
                <span>Send Message</span>
                <SendIcon className="text-xl" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;