"use client";

import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { IoLocationSharp } from "react-icons/io5";
import gradpic from 'public/images/me.png';
import ResponsiveNavbar from 'src/app/components/navbar.js';
import ContactForm from 'src/app/components/contactForm.js';


export default function Home() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={darkMode ? 'dark' : ""}>
      

      <ResponsiveNavbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <main className="bg-slate-100 px-4 sm:px-8 md:px-10 lg:px-16 xl:px-20 mt-14 dark:bg-slate-900">
      
        <section className="min-h-scree">

          <div className="text-center p-4 sm:p-8 pd:p-10 lg:p-12 xl:p-16 max-w-screen-md mx-auto">
            <h2 className="text-2xl sm:text-3xl pd:text-4xl lg:text-5xl xl:text-5xl py-2 text-blue-900 font-medium dark:text-slate-100">
              Abdul Rahman Mahmoud
            </h2>
            <h3 className="text-lg flex justify-center sm:text-xl md:text-xl lg:text-1xl xl:text-2xl py-2 dark:text-sky-50">
              Guelph, Ontario <div className='w-2'> </div><IoLocationSharp className='text-gray-800 dark:text-white'/>
            </h3>
            <div className="relative mx-auto my-10 bg-gradient-to-b rounded-full w-40 sm:w-60 md:w-80 lg:w-96 xl:w-80 h-40 sm:h-60 md:h-80 lg:h-96 xl:h-80 overflow-hidden dark:bg-gradient-to-b from-slate-500">
              <Image alt="Abdul-Avatar" src={gradpic} />
            </div>
            <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-xl leading-9 text-gray-800 mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 dark:text-white">
              {`Hey there, I'm Abdul, a Software Engineer still early in my tech journey. My passion lies
              in web and cloud technologies, and you'll usually find me diving into new things, learning,
              and constantly honing my skills. Outside the tech world, I enjoy lifting weights, playing
              soccer, and winding down with a nice cup of tea.`}
            </p>
          </div>

          <div className="flex text-3xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl justify-center gap-6 text-gray-800 dark:text-white">
            <a href="https://github.com/abdulm7" target='_blank'>
              <AiFillGithub className='text-gray-800 dark:text-white'/>
            </a>
            <a href="https://www.linkedin.com/in/abdulm7/" target='_blank'>
              <AiFillLinkedin className='text-gray-800 dark:text-white'/>
            </a>
            <a href="mailto:abdul.m0701@gmail.com" target='_blank'>
              <AiOutlineMail className='text-gray-800 dark:text-white'/>
            </a>
          </div>

        </section>

      </main>

      <section className='bg-slate-100 dark:bg-slate-900 pt-10'>
        <h2 className="text-center text-3xl sm:text-3xl pd:text-4xl lg:text-5xl xl:text-5xl py-2 text-blue-900 font-medium dark:text-slate-100">
              Get in Touch!
            </h2>
        <ContactForm darkMode={darkMode} setDarkMode={setDarkMode}/>
      </section>

      {/* <section className='flex justify-center'>
        <div className="sm:flex lg:flex justify-center items-center max-w-screen-2xl">
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 mx-2 max-w-lg items-center transform transition-transform hover:scale-105">
            <div className='flex justify-center'><Image className="" src={gradpic} width={100} height={100} /> </div>
            <h3 className="text-lg font-medium pt-8 pb-2  ">
              Country Reporter
            </h3>
            <p>
              
            </p>
          </div>

          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 mx-2 max-w-lg items-center transform transition-transform hover:scale-105">
            <div className='flex justify-center'><Image className="" src={gradpic} width={100} height={100} /> </div>
            <h3 className="text-lg font-medium pt-8 pb-2  ">
              Country Reporter
            </h3>
            <p>
              
            </p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 mx-2 max-w-lg items-center transform transition-transform hover:scale-105">
            <div className='flex justify-center'><Image className="" src={gradpic} width={100} height={100} /> </div>
            <h3 className="text-lg font-medium pt-8 pb-2  ">
              Country Reporter
            </h3>
            <p>
              
            </p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 mx-2 max-w-lg items-center transform transition-transform hover:scale-105">
            <div className='flex justify-center'><Image className="" src={gradpic} width={100} height={100} /> </div>
            <h3 className="text-lg font-medium pt-8 pb-2  ">
              Country Reporter
            </h3>
            <p>
              
            </p>
          </div>

          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 mx-2 max-w-lg items-center transform transition-transform hover:scale-105">
            <div className='flex justify-center'><Image className="" src={gradpic} width={100} height={100} /> </div>
            <h3 className="text-lg font-medium pt-8 pb-2  ">
              Country Reporter
            </h3>
            <p>
              
            </p>
          </div>
        </div>
      </section> */}

      <footer className="bg-slate-100 h-20 dark:bg-slate-900">


      </footer>
    </div>
  );
}
