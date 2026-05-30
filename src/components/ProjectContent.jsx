'use client'

import { useEffect, useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import NavBarContent from './NavBarContent'
import { Link } from 'react-router-dom'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

function ProjectContent() {

    useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    return (

        <>
            <NavBarContent />
            <div className="background_container mt-15 bg-white w-full px-4 sm:px-8 lg:px-8">


                <div className="grid_container grid grid-cols-1 md:grid-cols-1 gap-12 px-6 py-12 items-center max-w-7xl mx-auto">


                    {/* Right Column - Text Content */}
                    <div className="fade_up_anim relative w-full">
                        {/* <div
                            aria-hidden="true"
                            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-130"
                        >
                            <div
                                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
                                style={{
                                    clipPath:
                                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                }}
                            />
                        </div> */}

                        <div className="max-w-4xl mx-auto text-center md:text-left">


                            <div className="mt-0 flex justify-between items-center flex-wrap md:flex-nowrap gap-50">

                                <h5 className="text-5xl font-bold text-gray-900">
                                    Projects
                                </h5>


                            </div>

                            <p className=" mt-10 text-base text-gray-800">These projects include web applications, mobile applications, Arduino projects, graphic designs, and consultation meetings. Feel free to explore!</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className="background_container mt-15 bg-white w-full px-4 sm:px-8 lg:px-8">
                <div className="grid_container grid grid-cols-1 md:grid-cols-1 gap-12 px-6 py-12 items-center max-w-7xl mx-auto">


                    {/* Right Column - Text Content */}
                    <div className="fade_up_anim relative w-full">

                        <div className="max-w-4xl mx-auto text-center md:text-left">
                            <div className="mt-0 flex flex-col md:flex-row justify-between items-start gap-15">

                                {/* Left Column */}
                                <div className="flex-1">
                                    <p className="project_head_text mt-5 text-xl font-bold text-gray-900">Web Application</p>
                                    <p className="text-base text-gray-900">Full-Stack Developer</p>

                                    <p className="mt-5 text-base text-gray-800">
                                        Most of my projects were developed using Node.js, PHP, Python, HTML, and CSS, with databases such as MySQL and Firebase. I have also used the React, Laravel, and Django as framework. Click 'Read More' to view the full documentation of my web projects.
                                    </p>

                                    <div className="mt-8">
                                        <Link
                                            to="/web_dev"
                                            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-10 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                        >
                                            Read More →
                                        </Link>
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div className="flex-1">
                                    <div className="projects_container w-full bg-gray-100 flex flex-col justify-between gap-4 p-4">

                                        {/* Top-left image */}
                                        <div className="self-start">
                                            <a href="/img/rapid_6.png" target="_blank" rel="noopener noreferrer">
                                                <img
                                                    className="w-72 h-40 ml-5 mt-10 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105"
                                                    src="/img/rapid_6.png"
                                                    alt="Marahuyo Top"
                                                />
                                            </a>
                                        </div>

                                        {/* Bottom-right image */}
                                        <div className="self-end">
                                            <a href="/img/marahuyo_pic.png" target="_blank" rel="noopener noreferrer">
                                                <img
                                                    className="w-72 h-40 mr-5 mt-5 mb-10 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105"
                                                    src="/img/marahuyo_pic.png"
                                                    alt="HRMIS Bottom"
                                                />
                                            </a>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div className="background_container mt-15 bg-white w-full px-4 sm:px-8 lg:px-8">
                <div className="grid_container grid grid-cols-1 md:grid-cols-1 gap-12 px-6 py-12 items-center max-w-7xl mx-auto">

                    <div className="fade_up_anim max-w-4xl mx-auto text-center md:text-left">
                        <div className="mt-0 flex flex-col md:flex-row justify-between items-start gap-15">

                            {/* Left Column */}
                            <div className="flex-1">
                                <p className="project_head_text mt-5 text-xl font-bold text-gray-900">Mobile Application</p>
                                <p className="text-base text-gray-900">Full-stack Developer</p>

                                <p className="mt-5 text-base text-gray-800">
                                    My mobile application projects were developed using Android Studio and Unity, with Java and C# as the programming languages. I also used databases like SQLite and Firebase in some of these projects. Click 'Read More' to view the full documentation of my mobile application projects.
                                </p>

                                <div className="mt-8">
                                    <Link
                                        to="/mob_app"
                                        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-10 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                    >
                                        Read More →
                                    </Link>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="flex-1">
                                <div className="projects_container bg-gray-100 flex flex-row justify-center items-center gap-4 p-4 flex-wrap">

                                    <a href="/img/etap8.jpg" target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="mt-10 mb-10 w-23  shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 rounded-lg"
                                            src="/img/etap8.jpg"
                                            alt="Pill 1"
                                        />
                                    </a>

                                    <a href="/img/stitchit_1.png" target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="mt-10 mb-10 w-23  shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 rounded-lg"
                                            src="/img/stitchit_1.png"
                                            alt="Pill 2"
                                        />
                                    </a>

                                    <a href="/img/beemax1.jpg" target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="mt-10 mb-10 w-23  shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 rounded-lg"
                                            src="/img/beemax1.jpg"
                                            alt="Pill 3"
                                        />
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="background_container mt-15 bg-white w-full px-4 sm:px-8 lg:px-8">
                <div className="grid_container grid grid-cols-1 md:grid-cols-1 gap-12 px-6 py-12 items-center max-w-7xl mx-auto">

                    <div className="fade_up_anim max-w-4xl mx-auto text-center md:text-left">
                        <div className="mt-0 flex flex-col md:flex-row justify-between items-start gap-15">

                            {/* Left Column */}
                            <div className="flex-1">
                                <p className="project_head_text mt-5 text-xl font-bold text-gray-900">Arduino and IoT Projects</p>
                                <p className="text-base text-gray-900">Arduino and IoT Developer</p>

                                <p className="mt-5 text-base text-gray-800">
                                    My role in my Arduino projects involves programming the components, configuring wirings, and testing their functionality. I write the code in C++ and use databases like MySQL and Firebase. Most of my projects are also focused on the Internet of Things (IoT), where they are integrated with mobile applications. Click 'Read More' to view the full documentation of my Arduino projects.
                                </p>

                                <div className="mt-8">
                                    <Link
                                        to="/iot"
                                        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-10 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                    >
                                        Read More →
                                    </Link>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="flex-1">
                                <div className="projects_container bg-gray-100 flex flex-row justify-center items-center gap-4 p-4 flex-wrap">

                                    <a href="/img/gloves_1.png" target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="mt-10 mb-10 w-50  shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 rounded-lg"
                                            src="/img/gloves_1.png"
                                            alt="Gloves 1"
                                        />
                                    </a>

                                    <a href="/img/gloves_2.png" target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="mt-10 mb-10 w-40  shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 rounded-lg"
                                            src="/img/gloves_2.png"
                                            alt="Gloves 2"
                                        />
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="background_container mt-15 bg-white w-full px-4 sm:px-8 lg:px-8">
                <div className="grid_container grid grid-cols-1 md:grid-cols-1 gap-12 px-6 py-12 items-center max-w-7xl mx-auto">

                    <div className="fade_up_anim max-w-4xl mx-auto text-center md:text-left">
                        <div className="mt-0 flex flex-col md:flex-row justify-between items-start gap-15">

                            {/* Left Column */}
                            <div className="flex-1">
                                <p className="project_head_text mt-5 text-xl font-bold text-gray-900">Graphic Design</p>
                                <p className="text-base  text-gray-900">2D, 3D and Poster</p>

                                <p className="mt-5 text-base text-gray-800">
                                    I accept commission projects in graphic design, including 2D, 3D, and poster design. I create these using Adobe Photoshop, Illustrator, Blender, and 3ds Max. Click 'Read More' to view the full documentation of my graphic design projects.
                                </p>

                                <div className="mt-8">
                                    <Link
                                        to="/graphic"
                                        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-10 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                    >
                                        Read More →
                                    </Link>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="flex-1">
                                <div className="projects_container bg-gray-100 flex flex-row justify-center items-center gap-4 p-4 flex-wrap">

                                    <a href="/img/house_5.jpg" target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="mt-10 mb-5 w-50  shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 rounded-lg"
                                            src="/img/house_5.jpg"
                                            alt="Gloves 1"
                                        />
                                    </a>

                                    <a href="/img/house_7.jpg" target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="mt-10 mb-5 w-40  shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 rounded-lg"
                                            src="/img/house_7.jpg"
                                            alt="Gloves 2"
                                        />
                                    </a>

                                    <a href="/img/house_2.jpg" target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="mt-0 mb-10 w-60  shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 rounded-lg"
                                            src="/img/house_2.jpg"
                                            alt="Gloves 2"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="background_container mt-10 mb-30 bg-white w-full px-4 sm:px-8 lg:px-8">
                <div className="grid_container grid grid-cols-1 md:grid-cols-1 gap-12 px-6 py-12 items-center max-w-7xl mx-auto">

                    <div className="fade_up_anim max-w-4xl mx-auto text-center md:text-left">
                        <div className="mt-0 flex flex-col md:flex-row justify-between items-start gap-15">

                            {/* Left Column */}
                            <div className="flex-1">
                                <p className="project_head_text mt-5 text-xl font-bold text-gray-900">Consultation Meetings</p>
                                <p className="text-base  text-gray-900">2D, 3D and Poster</p>

                                <p className="mt-5 text-base text-gray-800">
                                    My consultation meetings also cover my skills in web applications, mobile applications, Robotics, Arduino and IoT projects, Graphic Designs, Game Developement, and 3D design. I use these skills to assess project feasibility and provide insights on their projects. This may include research projects, thesis, or subject requirements, business matters, and even industry needs. Click 'Read More' to view the full documentation of my consultation meetings.
                                </p>

                                <div className="mt-8">
                                    <Link
                                        to="/consultation"
                                        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-10 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                    >
                                        Read More →
                                    </Link>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="flex-1">
                                <div className="projects_container w-full bg-gray-100 flex flex-col justify-between gap-4 p-4">

                                    {/* Top-left image */}
                                    <div className="self-start">
                                        <a href="/img/consultation_1.png" target="_blank" rel="noopener noreferrer">
                                            <img
                                                className="w-72 h-40 ml-5 mt-10 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105"
                                                src="/img/consultation_1.png"
                                                alt="Marahuyo Top"
                                            />
                                        </a>
                                    </div>

                                    {/* Bottom-right image */}
                                    <div className="self-end">
                                        <a href="/img/consultation_2.png" target="_blank" rel="noopener noreferrer">
                                            <img
                                                className="w-72 h-40 mr-5 mt-5 mb-10 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105"
                                                src="/img/consultation_2.png"
                                                alt="HRMIS Bottom"
                                            />
                                        </a>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default ProjectContent;