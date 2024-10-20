'use client'; // Necessary for client-side interactivity

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname from Next.js

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current route

  const toggleMenu = () => setIsOpen(!isOpen);

  // Helper function to check if the current route is the selected route
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Section - redirecting to #about */}
          <div className="flex-shrink-0">
            <a href="/about">
              <h1 className="text-2xl tracking-widest cursor-pointer">
                <span className="font-bold">SHUBHAM </span>
                <span className="font-normal">SABLE</span>
              </h1>
            </a>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-10">
              {/* Increased spacing */}
              <a
                href="/about"
                className={`relative group text-xl font-medium ${
                  isActive('/about') ? 'text-orange-500' : 'text-[#000000]'
                }`}
              >
                About
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>

              <a
                href="/experience"
                className="relative group text-xl text-gray-800 hover:text-orange-500 font-medium"
              >
                Experience
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>

              <a
                href="/projects"
                className="relative group text-xl text-gray-800 hover:text-orange-500 font-medium"
              >
                Projects
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>

              <a
                href="/skills"
                className="relative group text-xl text-gray-800 hover:text-orange-500 font-medium"
              >
                Technical Skills
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>

              <a
                href="/Shubham_Sable_Resume.pdf"
                className="relative group text-xl text-gray-800 hover:text-orange-500 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>

              <a
                href="/contact"
                className="relative group text-xl text-gray-800 hover:text-orange-500 font-medium"
              >
                Contact
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="/about"
            className={`block text-lg font-bold ${
              isActive('/about') ? 'text-orange-500' : 'text-gray-800'
            }`}
          >
            About
          </a>
          <a
            href="/experience"
            className="block text-lg text-gray-800 hover:text-orange-500 font-bold"
          >
            Experience
          </a>
          <a
            href="/projects"
            className="block text-lg text-gray-800 hover:text-orange-500 font-bold"
          >
            Projects
          </a>
          <a
            href="/skills"
            className="block text-lg text-gray-800 hover:text-orange-500 font-bold"
          >
            Technical Skills
          </a>
          <a
            href="/resume"
            className="block text-lg text-gray-800 hover:text-orange-500 font-bold"
          >
            Resume
          </a>
          <a
            href="/contact"
            className="block text-lg text-gray-800 hover:text-orange-500 font-bold"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
