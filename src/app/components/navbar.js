"use client";

import { useState } from 'react';
import { BsFillMoonStarsFill, BsSun} from 'react-icons/bs';

export default function ResponsiveNavbar({darkMode, setDarkMode}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDarkMode = () =>{
    setDarkMode(!darkMode);
  }

  return (
    <nav className="py-4 flex justify-between fixed top-0 w-full bg-white shadow-lg z-10 pr-10 dark:bg-slate-800">
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 dark:text-white">
        abdulm.me
      </h1>
      <div className="hidden sm:flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 ml-4 sm:ml-6 md:ml-8 lg:ml-10 dark:text-white">
        <ul className="flex gap-10">
          {/* <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li> */}
          <li>
            {darkMode ? <BsSun onClick={toggleDarkMode} className="cursor-pointer text-xl lg:text-3xl text-white" /> : 
              <BsFillMoonStarsFill onClick={toggleDarkMode} className="text-gray-800 cursor-pointer text-xl lg:text-3xl" /> }
            
          </li>
          <li>
            <a
              className="bg-gradient-to-r from-slate-500 to-slate-900 text-white p-2 rounded-lg dark:from-slate-400 dark:to-white dark:text-black"
              href="Abdul_Resume.pdf" target='_blank'
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
      <div className="sm:hidden">
        <button
          className="text-xl lg:text-3xl focus:outline-none dark:text-white"
          onClick={toggleMobileMenu}
        >
          ☰
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="sm:hidden absolute top-16 right-0 bg-white shadow-md p-4 dark:bg-slate-800" >
          <ul className="flex flex-col gap-10 items-center">
            {/* <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li> */}
          <li>
            {!darkMode ?  <BsFillMoonStarsFill onClick={toggleDarkMode} className="text-gray-800 cursor-pointer text-xl lg:text-3xl" />  : <BsSun onClick={toggleDarkMode} className="cursor-pointer text-xl lg:text-3xl text-white" />  
              }
            
          </li>
          <li>
            <a
              className="bg-gradient-to-r from-slate-500 to-slate-900 text-white p-2 rounded-lg dark:from-slate-400 dark:to-white dark:text-black"
              href="Abdul_Resume.pdf" target='_blank'
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