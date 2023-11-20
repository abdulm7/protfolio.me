"use client";

import { useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';

export default function ResponsiveNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="py-4 flex justify-between fixed top-0 w-full bg-white shadow-lg z-10 pr-10">
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12">
        devdul.me
      </h1>
      <div className="hidden sm:flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 ml-4 sm:ml-6 md:ml-8 lg:ml-10">
        <ul className="flex gap-10">
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
          <li>
            <BsFillMoonStarsFill className="cursor-pointer text-xl lg:text-3xl" />
          </li>
          <li>
            <a
              className="bg-gradient-to-r from-red-900 to-red-950 text-white p-2 rounded-lg"
              href="#"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
      <div className="sm:hidden">
        <button
          className="text-xl lg:text-3xl focus:outline-none"
          onClick={toggleMobileMenu}
        >
          ☰
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="sm:hidden absolute top-16 right-0 bg-white shadow-md p-4">
          <ul className="flex flex-col gap-10 items-center">
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-xl lg:text-3xl" />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-red-900 to-red-950 text-white p-2 rounded-lg"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}