'use client'

import Link from 'next/link'
import ResponsiveNavbar from 'src/app/components/navbar.js';
import { useState } from 'react'

export default function NotFound() {

    const [darkMode, setDarkMode] = useState(false);

    return (

        <div className={darkMode ? 'dark' : ""}>
            <div className='flex items-center justify-center h-screen bg-slate-300 dark:bg-slate-900'>
                <ResponsiveNavbar darkMode={darkMode} setDarkMode={setDarkMode} />
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4 dark:text-white">404 - Not Found</h1>
                    <p className='text-gray-900 mb-10 dark:text-white'>The page you are looking does not exist.</p>
                    <Link href="/"><button className='bg-gray-600 rounded px-5 py-2 hover:bg-gray-500 text-white '>Return Home</button></Link>
                </div>
            </div>
        </div>
    );
};