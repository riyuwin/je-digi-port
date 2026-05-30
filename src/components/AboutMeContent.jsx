'use client'

import { Link } from 'react-router-dom'
import { useState } from 'react' 
import NavBarContent from './NavBarContent'
 
export default function AboutMeContent() { 

    return (
        <>

            <div className="background_container mt-15 bg-white w-full px-4 sm:px-8 lg:px-8">

                <NavBarContent />

                <div className="grid_container grid grid-cols-1 md:grid-cols-2 gap-12 px-6 py-12 items-center max-w-7xl mx-auto">

                    <div className="fade_up_anim profile_container shadow-lg object-cover cursor-pointer transition-transform duration-200 hover:scale-105">
                        <div className=" w-full flex flex-col items-center md:items-center text-center md:text-center">
                            <div className="profile_container_padding flex flex-col items-center md:items-center text-center md:text-center">

                                <a href="/img/janjan_pics.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="./img/janjan_pics.png"
                                        alt="Profile"
                                        className="mt-20 mb-6 w-48 h-48 rounded-full shadow-lg object-cover cursor-pointer transition-transform duration-200 hover:scale-105"
                                        onClick={() => setIsOpen(true)}
                                    />
                                </a>

                                <h6 className="mt-5 text-4xl font-bold text-gray-800">John Erwin S. Albos</h6>
                                <div className="mt-6 h-px w-16 bg-gray-300" />
                                <p className="postion_title_text mt-4 text-lg font-medium text-gray-600">SOFTWARE DEVELOPER</p>
                            </div>

                            <div className="mt-15 links_contact_container mt-6 flex gap-4 justify-center md:justify-center">
                                <Link to='https://www.facebook.com/johnerwinsaynoalbos/'>
                                    <img className="w-8 h-8 object-contain shadow-lg object-cover cursor-pointer transition-transform duration-200 hover:scale-105" src="./img/fb_logo.png" alt="Facebook" />
                                </Link>
                                <Link to='https://sketchfab.com/johnerwinalbos'>
                                    <img className="w-8 h-8 object-contain shadow-lg object-cover cursor-pointer transition-transform duration-200 hover:scale-105" src="./img/sketchfab_logo.png" alt="Sketchfab" />
                                </Link>
                                <Link to='https://github.com/riyuwin'>
                                    <img className="w-8 h-8 object-contain shadow-lg object-cover cursor-pointer transition-transform duration-200 hover:scale-105" src="./img/github_logo.png" alt="GitHub" />
                                </Link>
                            </div>
                        </div>
                    </div>


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

                        <div className="max-w-2xl mx-auto text-center md:text-left">
                            <div className="mb-6 hidden sm:flex sm:justify-start">
                                <div className="relative rounded-full px-3 py-1 text-sm text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                    Announcing my digital portfolio.{' '}
                                    <Link to="/projects" className="font-semibold text-indigo-600">
                                        Read more <span aria-hidden="true">→</span>
                                    </Link>
                                </div>
                            </div>

                            <h1 className="hello_text text-5xl font-bold text-gray-900">Hello there!</h1>
                            <p className="caption_text mt-4 text-xl text-gray-800">This is my digital portfolio.</p>
                            <p className="mt-4 text-base text-gray-600">
                                This digital portfolio showcases my past projects, which were developed through commissioned projects 
                                as well as to my subject requirements. These projects include web applications, mobile
                                applications, Arduino and IoT Based projects, 2d and 3D graphic designs, and documentation of consultation
                                meetings.
                            </p>
                            <p className="mt-4 text-base text-gray-600">
                                I have also included my resume and detailed documentation of these projects. Feel free to
                                explore!
                            </p>

                            <div className="mt-8 flex flex-wrap gap-1 justify-center md:justify-start">
                                {/* <a
                                    href="#" 
                                    className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                >
                                    Resume
                                </a> */}

                                <Link
                                    to="/resume"
                                    className="btn_white_text text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Resume
                                </Link>


                                <Link to="/projects" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-10 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                    Projects →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </>
    )
}
