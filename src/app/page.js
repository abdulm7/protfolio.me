import Image from 'next/image';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiOutlineMail, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import gradpic from 'public/images/me.png';

export default function Home() {

  return (
    <div> 
      <main className="bg-orange-50 px-10 flex justify-center">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-2xl font-semibold">devdul.me</h1>
            <ul className="flex items-center gap-7">
              <li>About</li>
              <li>Skills</li>
              <li>Projects</li>
              <li>Contact</li>
              <li><BsFillMoonStarsFill className="cursor-pointer text-2xl " /></li>
              <li><a className="bg-gradient-to-r from-red-900 to-red-950 text-white p-2.5 rounded-lg" href='#'>Resume</a></li>
            </ul>
          </nav>

          <div className="text-center p-10 max-w-screen-lg">
            <h2 className="text-5xl py-2 text-red-900 font-medium">Abdul Mahmoud</h2>
            <h3 className="text-2xl pu-2">Full Stack Developer</h3>
            <p className="text-md py-5 leading-9 text-gray-800 mx-10">
            Hey there, I'm Abdul, a Software Engineer still early in my tech journey. My passion lies in web and cloud 
            technologies, and you'll usually find me diving into new things, learning, and constantly honing my skills. Outside the tech world, 
            I enjoy lifting weights, playing soccer, and winding down with a nice cup of tea.
             
            </p>
          </div>

          <div className="flex text-4xl justify-center gap-10 text-gray-800">
            <a href='https://github.com/abdulm7'><AiFillGithub/></a>
            <a href='https://www.linkedin.com/in/abdulm7/'><AiFillLinkedin/></a>
            <a href='mailto:abdul.m0701@gmail.com'><AiOutlineMail/></a>
          </div>

          <div className="relative mx-auto my-10 bg-gradient-to-b from-red-900 rounded-full w-80 h-80 overflow-hidden">
            <Image src={gradpic}/>
          </div>

        </section>
      </main>
    </div>
  )
}
