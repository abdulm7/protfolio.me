import Image from 'next/image';
import {BsFillMoonStarsFill} from 'react-icons/bs';

export default function Home() {

  return (
    <div> 
      <main className="bg-orange-50 px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-2xl font-semibold">devdul.me</h1>
            <ul className="flex items-center">
              <li>About Me</li>
              <li>Skills</li>
              <li>Projects</li>
              <li>Contact</li>
              <li><BsFillMoonStarsFill className="cursor-pointer text-2xl " /></li>
              <li><a className="bg-gradient-to-r from-red-900 to-red-950 text-white p-2.5 rounded-lg" href='#'>Resume</a></li>
            </ul>
          </nav>

        </section>
      </main>
    </div>
  )
}
