"use client";

import Image from 'next/image';
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import gradpic from 'public/images/me.png';
import ResponsiveNavbar from 'src/app/components/navbar.js';

export default function Home() {


  return (
    <div className="bg-slate-100">

      <ResponsiveNavbar/>
      <main className="bg-slate-100 px-4 sm:px-8 md:px-10 lg:px-16 xl:px-20 mt-14">
        
        <section className="min-h-screen">

          <div className="text-center p-4 sm:p-8 pd:p-10 lg:p-12 xl:p-16 max-w-screen-md mx-auto">
            <h2 className="text-3xl sm:text-3xl pd:text-4xl lg:text-5xl xl:text-5xl py-2 text-blue-900 font-medium">
              Abdul Mahmoud
            </h2>
            <div className="relative mx-auto my-10 bg-gradient-to-b from-blue-600 rounded-full w-40 sm:w-60 md:w-80 lg:w-96 xl:w-80 h-40 sm:h-60 md:h-80 lg:h-96 xl:h-80 overflow-hidden">
            <Image src={gradpic} />
          </div>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl py-2">
              Full Stack Developer
            </h3>
            <p className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl py-5 leading-9 text-gray-800 mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12">
              Hey there, I'm Abdul, a Software Engineer still early in my tech journey. My passion lies
              in web and cloud technologies, and you'll usually find me diving into new things, learning,
              and constantly honing my skills. Outside the tech world, I enjoy lifting weights, playing
              soccer, and winding down with a nice cup of tea.
            </p>
          </div>

          <div className="flex text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl justify-center gap-6 text-gray-800">
            <a href="https://github.com/abdulm7">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/abdulm7/">
              <AiFillLinkedin />
            </a>
            <a href="mailto:abdul.m0701@gmail.com">
              <AiOutlineMail />
            </a>
          </div>

        </section>

        <section>
          <div></div>
        </section>
      </main>

      <footer className="bg-orange-50 h-20">


      </footer>
    </div>
  );
}
