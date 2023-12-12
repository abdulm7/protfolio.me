"use client";
import { useState } from 'react';

export default function ContactForm({ darkMode, setDarkMode }) {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('pages/api/', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            // if (response.ok) {
            //     console.log('Email sent successfully:');
            //     // Optionally, reset the form after successful submission
            //     // setFormData({ name: '', email: '', message: '' });
            // } else {
            //     console.error('Error sending email:', data.error);
            // }

            console.log(data)
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    return (
        <form className="max-w-3xl w-5/6 mx-auto p-6 bg-slate-100 dark:bg-slate-900 rounded-md" onSubmit={handleSubmit}>
            <div className="mb-6">
                <label htmlFor="name" className="block text-gray-600 text-sm dark:text-slate-100 font-semibold mb-2">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border-b-2 bg-slate-100 dark:bg-slate-900 border-gray-300 dark:text-white focus:outline-none focus:border-slate-500 focus:dark:bg-slate-900 transition duration-300"
                    required
                />
            </div>
            <div className="mb-6">
                <label htmlFor="email" className="block text-gray-600 bg-slate-100 dark:bg-slate-900 text-sm font-semibold mb-2 dark:text-slate-100">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border-b-2 bg-slate-100 dark:bg-slate-900 border-gray-300 dark:text-white focus:outline-none focus:border-slate-500 transition duration-300"
                    required
                />
            </div>
            <div className="mb-6">
                <label htmlFor="message" className="block bg-slate-100 dark:bg-slate-900 dark:text-slate-100 text-gray-600 text-sm font-semibold mb-2">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border-b-2 bg-slate-100 dark:bg-slate-900 border-gray-300 dark:text-white focus:outline-none focus:border-slate-500 transition duration-300"
                    required
                />
            </div>
            <div className='flex justify-center'><button
                type="submit"
                className="w-3/4 bg-blue-900 text-white py-3 px-4 rounded-md hover:bg-blue-950 dark:text-blue-950 font-semibold dark:bg-white dark:hover:bg-slate-300 focus:outline-none transition duration-300"
            >
                Submit
            </button></div>
        </form>
    );
};
