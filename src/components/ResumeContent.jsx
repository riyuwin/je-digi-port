'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import NavBarContent from './NavBarContent'

function ResumeContent() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <NavBarContent />
            <div className="background_container mt-15 bg-white w-full px-4 sm:px-8 lg:px-8">


                <div className="grid_container grid grid-cols-1 md:grid-cols-1 gap-12 px-6 py-12 items-center max-w-7xl mx-auto">


                    {/* Right Column - Text Content */}
                    <div className="fade_up_anim relative w-full">
                        
                        <div className="max-w-4xl mx-auto text-center md:text-left">
                            <div className="mt-0 flex justify-between items-center flex-wrap md:flex-nowrap gap-12">

                                <h5 className="text-5xl font-bold text-gray-900">
                                    Resume
                                </h5>

                                <a
                                    href="/file/Resume_Albos_John_Erwin.pdf" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-10 py-2.5 transition-colors duration-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                >
                                    Download Resume →
                                </a>

                            </div>

                            <p className="mt-8 text-base text-gray-600">Feel free to browse my resume!</p>
                        </div>


                    </div>
                </div>




            </div>

            <div className="background_container mt-15 bg-white w-full px-4 sm:px-8 lg:px-8">


                <div className="grid_container grid grid-cols-1 md:grid-cols-1 gap-12 px-6 py-12 items-center max-w-7xl mx-auto">
 
                    {/* Right Column - Text Content */}
                    <div className="fade_up_anim relative w-full"> 

                        <div className="max-w-4xl mx-auto text-center md:text-left"> 

                            <p className="caption_text mt-2 text-xl text-gray-800">Experiences</p>

                            <div className="mt-8 flex justify-between items-center flex-wrap md:flex-nowrap gap-50">
                                <p className="  text-base text-xl font-regular text-gray-900">
                                    Full-Stack Software Developer<br /> Freelance
                                </p>
                                <p className=" text-base text-gray-900">
                                    August 2023 - Present
                                </p>
                            </div>

                            <li className="mt-4 text-base text-gray-600">
                                Successfully developed and deployed multiple commissioned projects for mobile
                                applications, Arduino-based IoT systems, web applications, 3D designs, graphics
                                designs, and consultation services.
                            </li>

                            <li className="mt-0 text-base text-gray-600">
                                Led the development of “Busig-On: A Digitalized Legend Story of Busig-On in Labo,
                                Camarines Norte” to won a third place at the 2024 Bicol Regional Student Teachers'
                                Congress
                            </li>

                            <li className="mt-0 text-base text-gray-600">
                                Communicated and negotiate directly with multiple clients to propose tailored
                                solutions, provide project updates, and deliver system presentations.
                            </li>

                            <li className="mt-0 text-base text-gray-600">
                                Lead, manage, collaborate and act as team leader overseeing and supervising the
                                team projects.
                            </li>

                            <li className="mt-0 text-base text-gray-600">
                                Implemented efficient project management workflows using Git and
                                GitHub, improving team coordination and code quality
                            </li>

                            <div className="mt-8 flex justify-between items-center flex-wrap md:flex-nowrap gap-50">
                                <p className="  text-base text-xl font-regular text-gray-900">
                                    Full-Stack Web Developer Intern<br />
                                    Provincial Government of Camarines Norte - Governor’s Office
                                </p>
                                <p className=" text-base text-gray-900">
                                    February 2025 - May 2025
                                </p>
                            </div>

                            <li className="mt-4 text-base text-gray-600">
                                Implemented efficient project management workflows using Git and
                                GitHub, improving team coordination and code quality
                            </li>
                            <li className="mt-0 text-base text-gray-600">
                                Successfully led the development and deployment of “Dong Tulong
                                Document Management System” from scratch.
                            </li>
                            <li className="mt-0 text-base text-gray-600">
                                Responsible for database management, as well as the backend and
                                frontend development of the system.
                            </li>
                            <li className="mt-0 text-base text-gray-600">
                                Successfully developed automated report generation in PDF, Excel, and
                                chart formats.
                            </li>
                            <li className="mt-0 text-base text-gray-600">
                                Responsible for overseeing the team’s frontend and backend system
                                development tasks.
                            </li>


                            <div className="mt-8 flex justify-between items-center flex-wrap md:flex-nowrap gap-50">
                                <p className="  text-base text-xl font-regular text-gray-900">
                                    Part-time Encoder<br />
                                    Philippine Coconut Association (PCA)
                                </p>
                                <p className=" text-base text-gray-900">
                                    June 2021 - February 2022
                                </p>
                            </div>

                            <li className="mt-4 text-base text-gray-600">
                                Responsible for registering more than 5,000 profiles of coconut farmers
                                in Camarines Norte to the PCA portal
                            </li>


                        </div>
                    </div>
                </div>




            </div>
        </>
    )

}

export default ResumeContent;