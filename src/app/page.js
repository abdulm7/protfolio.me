import Image from 'next/image';
import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs';

export default function Home() {

  return (
    <div> 
      <Head>
        <title>Abdul Mahmoud Portfolio</title>
        <meta name="description" content="Abdul's Personal Portfolio"/>
        <link ref="icon" href='/favicon.ico'/>
      </Head>
      <main className="bg-orange-50 px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-2xl font-semibold">devdul.me</h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill className="cursor-pointer text-2xl mx-10" /></li>
              <li><a className="bg-gradient-to-r from-red-900 to-red-950 text-white p-2.5 rounded-lg" href='#'>Resume</a></li>
            </ul>
          </nav>

        </section>
      </main>
    </div>
  )
}
