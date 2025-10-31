import React, { useState } from "react";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MessageIcon from "@mui/icons-material/Message";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Send email using Nodemailer API
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
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error(data.error || 'Failed to send message');
      }

    } catch (err) {
      console.error('Contact form error:', err);
      setError(err.message || 'Failed to send message. Please try contacting me directly at shrmatwinkle246@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-12">
      {/* Contact Methods Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: EmailIcon,
            title: "Email Me",
            description: "Send me a message anytime",
            value: "shrmatwinkle246@gmail.com",
            href: "mailto:shrmatwinkle246@gmail.com",
            color: "from-blue-500 to-cyan-500"
          },
          {
            icon: LocationOnIcon,
            title: "Location",
            description: "Available for remote work",
            value: "Worldwide Remote",
            href: null,
            color: "from-green-500 to-emerald-500"
          },
          {
            icon: AccessTimeIcon,
            title: "Response Time",
            description: "Quick and reliable communication",
            value: "Within 24 hours",
            href: null,
            color: "from-purple-500 to-pink-500"
          }
        ].map((contact, index) => (
          <div key={index} className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg transition-all duration-300">
            <div className="text-center space-y-4">
              <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${contact.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                <contact.icon className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{contact.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{contact.description}</p>
                {contact.href ? (
                  <Link
                    href={contact.href}
                    className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    {contact.value}
                  </Link>
                ) : (
                  <p className="text-gray-800 font-medium">{contact.value}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Contact Form */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Info Card */}
        <div className="space-y-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-lg">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <MessageIcon className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Let's Work Together</h3>
                  <p className="text-blue-600 font-medium">Ready to bring your ideas to life</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed text-lg">
                I'm passionate about creating amazing digital experiences. Whether you have a project in mind or just want to chat about technology, I'd love to hear from you!
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="text-green-500" />
                  <span className="text-gray-700">Free consultation call</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="text-green-500" />
                  <span className="text-gray-700">Quick response within 24 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="text-green-500" />
                  <span className="text-gray-700">Professional project planning</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Connect With Me</h4>
            <div className="flex space-x-4">
              {[
                {
                  icon: GitHubIcon,
                  href: "https://github.com/NehaSharma-10/",
                  label: "GitHub",
                  color: "bg-gray-700 hover:bg-gray-600"
                },
                {
                  icon: LinkedInIcon,
                  href: "https://www.linkedin.com/in/nehasharma8529/",
                  label: "LinkedIn",
                  color: "bg-blue-600 hover:bg-blue-500"
                },
                {
                  icon: EmailIcon,
                  href: "mailto:shrmatwinkle246@gmail.com",
                  label: "Email",
                  color: "bg-purple-600 hover:bg-purple-500"
                }
              ].map((social, index) => (
                <Link
                  key={index}
                  target="_blank"
                  href={social.href}
                  className={`${social.color} text-white p-3 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl`}
                  title={social.label}
                >
                  <social.icon className="text-xl" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-lg">
          <div className="space-y-8">
            {/* Form Header */}
            <div className="text-center">
              <div className="inline-flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                  <SendIcon className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Send a Message</h3>
              </div>
              <p className="text-gray-600">Tell me about your project and let's create something amazing together!</p>
            </div>

            {/* Success Message */}
            {isSubmitted && (
              <div className="p-6 bg-green-50 border border-green-200 rounded-2xl">
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="text-green-500 text-2xl" />
                  <div>
                    <h4 className="text-green-800 font-semibold">Message Sent Successfully!</h4>
                    <p className="text-green-600 text-sm">Thank you for reaching out. I'll get back to you soon!</p>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="p-6 bg-red-50 border border-red-200 rounded-2xl">
                <p className="text-red-600">{error}</p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 transition-all duration-300 focus:border-blue-400 focus:outline-none"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 transition-all duration-300 focus:border-blue-400 focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 transition-all duration-300 focus:border-blue-400 focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell me about your project, ideas, or just say hello! I'd love to hear from you..."
                  className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 transition-all duration-300 focus:border-blue-400 focus:outline-none resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-4 px-8 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg ${isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : isSubmitted
                    ? 'bg-green-500'
                    : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 hover:shadow-xl'
                  }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircleIcon />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <SendIcon />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            {/* Quick Contact Options */}
            <div className="pt-6 border-t border-gray-200">
              <p className="text-center text-gray-600 mb-4">Or reach out directly:</p>
              <div className="flex justify-center space-x-4">
                <Link
                  href="mailto:shrmatwinkle246@gmail.com"
                  className="px-6 py-3 bg-blue-50 text-blue-700 rounded-xl hover:bg-blue-100 transition-all duration-300 flex items-center space-x-2 border border-blue-200"
                >
                  <EmailIcon />
                  <span>Quick Email</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/nehasharma8529/"
                  target="_blank"
                  className="px-6 py-3 bg-purple-50 text-purple-700 rounded-xl hover:bg-purple-100 transition-all duration-300 flex items-center space-x-2 border border-purple-200"
                >
                  <LinkedInIcon />
                  <span>LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;