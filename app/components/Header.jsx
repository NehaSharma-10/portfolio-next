"use client";

import { useState } from "react";
import Link from "next/link";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-200/50 z-50 shadow-creative">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Enhanced Logo */}
        <Link href="/" className="group flex items-center space-x-3 hover:-translate-y-0.5 transition-all duration-300">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-creative group-hover:shadow-warm transition-all duration-300 group-hover:rotate-3">
              <span className="text-white font-bold text-xl" style={{ fontFamily: 'Playfair Display, serif' }}>N</span>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-60 animate-pulse delay-500"></div>
          </div>
          <div className="hidden sm:block">
            <div className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300" style={{ fontFamily: 'Playfair Display, serif' }}>
              Neha Sharma
            </div>
            <div className="text-xs text-gray-500 group-hover:text-purple-500 transition-colors">
              Frontend Developer
            </div>
          </div>
        </Link>

        {/* Enhanced Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 transition-all duration-300 group rounded-xl hover:bg-purple-50/50"
            >
              <span className="relative z-10">{item.name}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-8 transition-all duration-300 rounded-full"></div>
            </Link>
          ))}

          {/* CTA Button */}
          <Link
            href="#contact"
            className="ml-4 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-creative hover:shadow-warm"
          >
            Let's Talk
          </Link>
        </div>

        {/* Enhanced Mobile menu button */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="p-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-300"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Enhanced Mobile menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="md:hidden">
        <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/95 backdrop-blur-xl px-6 py-6 sm:max-w-sm border-l border-gray-200/50 shadow-glow">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="flex items-center space-x-3" onClick={() => setMobileMenuOpen(false)}>
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-creative">
                <span className="text-white font-bold text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>N</span>
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Neha Sharma
                </div>
                <div className="text-xs text-gray-500">Frontend Developer</div>
              </div>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-300"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium text-gray-700 hover:text-purple-600 py-4 px-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300 border border-transparent hover:border-purple-200/50"
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile CTA */}
            <div className="pt-4 mt-6 border-t border-gray-200">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-creative"
              >
                Let's Talk
              </Link>
            </div>
          </div>

          {/* Mobile Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="text-center">
              <div className="text-sm text-gray-500 mb-2">Available for projects</div>
              <div className="flex justify-center">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}