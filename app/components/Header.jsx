"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#exp' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-slate-200/50'
          : 'bg-transparent'
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="group flex items-center space-x-2"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-white font-bold text-lg">N</span>
              </div>
            </div>
            <span className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
              Neha Sharma
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Social Links & CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Link
              target="_blank"
              href="https://github.com/NehaSharma-10/"
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all duration-200"
            >
              <GitHubIcon className="w-5 h-5" />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/nehasharma8529/"
              className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
            >
              <LinkedInIcon className="w-5 h-5" />
            </Link>
          </div>
          <div className="w-px h-6 bg-slate-300"></div>
          <Link
            href="#contact"
            className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all duration-200"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm shadow-2xl">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center space-x-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-lg font-bold text-slate-900">Neha</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all duration-200"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          <div className="mt-8 flow-root">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-slate-900 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200">
              <div className="space-y-4">
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full px-4 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium text-center rounded-lg shadow-md transition-all duration-200"
                >
                  Let's Talk
                </Link>

                <div className="flex justify-center space-x-4">
                  <Link
                    target="_blank"
                    href="https://github.com/NehaSharma-10/"
                    className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 rounded-full transition-all duration-200"
                  >
                    <GitHubIcon className="w-6 h-6" />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/nehasharma8529/"
                    className="p-3 bg-slate-100 hover:bg-blue-100 text-slate-600 hover:text-blue-600 rounded-full transition-all duration-200"
                  >
                    <LinkedInIcon className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}