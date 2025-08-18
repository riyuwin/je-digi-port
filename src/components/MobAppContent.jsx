'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import NavBarContent from './NavBarContent'
import FooterContent from './FooterContent'

function MobAppContent() {
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
                                    Mobile Applications
                                </h5>

                            </div>

                            <p className="mt-8 text-base text-gray-600">
                                In this section, the documentation of my mobile application development will be showcased.
                            </p>
                        </div>


                    </div>
                </div>  
            </div>

            <div className="background_container mt-15 mb-20 bg-white w-full px-4 sm:px-8 lg:px-8">


                <div className="grid_container grid grid-cols-1 md:grid-cols-1 gap-12 px-6 py-12 items-center max-w-7xl mx-auto">

                    <div className="fade_up_anim relative w-full">

                        <div className="max-w-4xl mx-auto text-center md:text-left">

                            <p className="project_title_text mt-2 text-xl text-gray-800">CNSC 3D Map: A 3D Interactive Campus Map of CNSC with Real-Time Earthquake Evacuation Route Simulation for Safer Navigation and Preparedness</p>

                            <p className="mt-10 text-base text-gray-900">
                                The CNSC 3D Map is a commissioned capstone project that aims to simulate earthquake evacuation routes and to visualize in 3D perspective. This application was developed using Unity and 3ds Max for assets with FIrebase Database. 
                            </p>
                        </div>

                        <div className="mt-10 projects_container bg-gray-100 flex flex-row justify-center items-center gap-20 p-4 flex-wrap">
                            <div>
                                <a href="/img/safemap_6.jpg" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="web_images mt-10 w-110 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                        src="/img/safemap_6.jpg"
                                        alt="Rapid 1"
                                    />
                                </a>

                                <p className="project_title_image_text mt-5 mb-0 text-base text-gray-900">
                                    Landing Page
                                </p>
                            </div>

                             <div>
                                <a href="/img/safemap_5.jpg" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="web_images mt-10   w-110 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                        src="/img/safemap_5.jpg"
                                        alt="Rapid 1"
                                    />
                                </a>

                                <p className="project_title_image_text mt-5 mb-0 text-base text-gray-900">
                                    Manage Building Details
                                </p>
                            </div>

                             <div>
                                <a href="/img/safemap_1.jpg" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="web_images mt-0   w-110 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                        src="/img/safemap_1.jpg"
                                        alt="Rapid 1"
                                    />
                                </a>

                                <p className="project_title_image_text mt-5 mb-10 text-base text-gray-900">
                                    Main Gameplay
                                </p>
                            </div>
                            
                             <div>
                                <a href="/img/safemap_4.jpg" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="web_images mt-0   w-110 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                        src="/img/safemap_4.jpg"
                                        alt="Rapid 1"
                                    />
                                </a>

                                <p className="project_title_image_text mt-5 mb-10 text-base text-gray-900">
                                    Route Simulation
                                </p>
                            </div>
                        </div>

                        <div className="max-w-4xl mt-10  mx-auto text-center md:text-left">

                            <p className="project_title_text mt-2 text-xl text-gray-800">RAPID: Real-Time Ambulance Patient Information Dissemination</p>

                            <p className="mt-10 text-base text-gray-900">
                                RAPID is an application for the immediate transmission of ambulance-to-hospital patient data and incident reports. The system allows ambulance responders to register a patient’s status or information even while en route to the hospital. It also features real-time tracking of the ambulance’s current location. This platform was developed using the React framework, HTML, and CSS, with Firebase as the database.
                            </p>
                        </div>

                        <div className="mt-10 projects_container bg-gray-100 flex flex-row justify-center items-center gap-20 p-4 flex-wrap">
                            <div>
                                <a href="/img/stitchit_1.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="web_images mt-10   w-40 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                        src="/img/stitchit_1.png"
                                        alt="Rapid 1"
                                    />
                                </a>

                                <p className="project_title_image_text mt-5 mb-10 text-base text-gray-900">
                                    Landing Page
                                </p>
                            </div>

                            <div>
                                <a href="/img/stitchit_2.jpg" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="web_images mt-10  w-40 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                        src="/img/stitchit_4.jpg"
                                        alt="Rapid 2"
                                    />
                                </a>

                                <p className="project_title_image_text mt-5 mb-10 text-base text-gray-900">
                                    Roadmap
                                </p>
                            </div>

                            <div>
                                <a href="/img/stitchit_3.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="web_images mt-10 w-40 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                        src="/img/stitchit_3.png"
                                        alt="Rapid 3"
                                    />
                                </a>

                                <p className="project_title_image_text mt-5 mb-10 text-base text-gray-900">
                                    3D Object
                                </p>
                            </div>

                            <div>
                                <a href="/img/stitchit_5.jpg" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="web_images mt-10  w-40 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                        src="/img/stitchit_5.jpg"
                                        alt="Rapid 3"
                                    />
                                </a>

                                <p className="project_title_image_text mt-5 mb-10 text-base text-gray-900">
                                    Stitching Procedure
                                </p>
                            </div>

                        </div>  
                        
                        <div className="mt-20 max-w-4xl mx-auto text-center md:text-left">

                            <p className="project_title_text mt-2 text-xl text-gray-800">A Digitalized Legend Story of Busig-On in Labo, Camarines Norte</p>

                            <p className="mt-10 text-base text-gray-900">
                                The digitalization of the Legend Story of Busig-On in Labo, Camarines Norte was my first commissioned thesis project and won third place at the 2024 Bicol Regional Student Teachers' Congress. This application was developed using Android Studio.
                            </p>
                        </div>

                        <div className="mt-10 projects_container bg-gray-100 flex flex-row justify-center items-center gap-20 p-4 flex-wrap">
                            <div>
                                <a href="/img/busigon_1.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="web_images mt-10   w-40 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                        src="/img/busigon_1.png"
                                        alt="Rapid 1"
                                    />
                                </a>

                                <p className="project_title_image_text mt-5 mb-10 text-base text-gray-900">
                                    Landing Page
                                </p>
                            </div>

                            <div>
                                <a href="/img/busigon_2.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="web_images mt-10  w-40 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                        src="/img/busigon_2.png"
                                        alt="Rapid 2"
                                    />
                                </a>

                                <p className="project_title_image_text mt-5 mb-10 text-base text-gray-900">
                                    Makinig
                                </p>
                            </div>

                            <div>
                                <a href="/img/busigon_3.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="web_images mt-10 w-40 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                        src="/img/busigon_3.png"
                                        alt="Rapid 3"
                                    />
                                </a>

                                <p className="project_title_image_text mt-5 mb-10 text-base text-gray-900">
                                    Magbasa
                                </p>
                            </div>

                            <div>
                                <a href="/img/busigon_4.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="web_images mt-10  w-40 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                        src="/img/busigon_4.png"
                                        alt="Rapid 3"
                                    />
                                </a>

                                <p className="project_title_image_text mt-5 mb-10 text-base text-gray-900">
                                    Manood
                                </p>
                            </div>


                        </div>


                        <div className="mt-20 max-w-4xl mx-auto text-center md:text-left">

                            <p className="project_title_text mt-2 text-xl text-gray-800">Evocapedia: An Electronic Dictionary for TLE Areas</p>

                            <p className="mt-10 text-base text-gray-900">
                                The digitalization of the TLE Areas into an electronic dictionary was a commissioned thesis project. This application was also developed using Android Studio.
                            </p>
                        </div>

                        <div className="mt-10 projects_container bg-gray-100 flex flex-row justify-center items-center gap-20 p-4 flex-wrap">
                            <div>
                                <a href="/img/evoc_1.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="web_images mt-10   w-40 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                        src="/img/evoc_1.png"
                                        alt="Evoc 1"
                                    />
                                </a>

                                <p className="project_title_image_text mt-5 mb-10 text-base text-gray-900">
                                    Landing Page
                                </p>
                            </div>

                            <div>
                                <a href="/img/evoc_2.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="web_images mt-10  w-40 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                        src="/img/evoc_2.png"
                                        alt="Evoc 2"
                                    />
                                </a>

                                <p className="project_title_image_text mt-5 mb-10 text-base text-gray-900">
                                    TLE Areas
                                </p>
                            </div>

                            <div>
                                <a href="/img/evoc_3.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="web_images mt-10 w-40 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                        src="/img/evoc_3.png"
                                        alt="Evoc 3"
                                    />
                                </a>

                                <p className="project_title_image_text mt-5 mb-10 text-base text-gray-900">
                                    Items
                                </p>
                            </div>

                            <div>
                                <a href="/img/evoc_4.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="web_images mt-10  w-40 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                        src="/img/evoc_4.png"
                                        alt="Evoc 3"
                                    />
                                </a>

                                <p className="project_title_image_text mt-5 mb-10 text-base text-gray-900">
                                    Definition
                                </p>
                            </div>


                        </div>


                        <div className="mt-20 max-w-4xl mx-auto text-center md:text-left">

                            <p className="project_title_text mt-2 text-xl text-gray-800">Arduino based IoT Integrated with Mobile Applications</p>

                            <p className="mt-10 text-base text-gray-900">
                                These mobile applications were integrated with Arduino projects and IoT projects and used as a platform to visualize and control the devices.
                            </p>
                        </div>

                        <div className="mt-10  flex flex-row justify-center items-center gap-10 p-4 flex-wrap">
                            <div className="projects_container flex flex-col md:flex-row items-center gap-6 mt-10 mb-10">
                                {/* First Column - Image */}
                                <a href="/img/gloves_3.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="web_images mt-10 mb-10 w-full md:w-50 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105"
                                        src="/img/gloves_3.png"
                                        alt="Gloves"
                                    />
                                </a>

                                {/* Second Column - Text */}
                                <div className="text-left">
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">Sign Language <br/>Translator</h3>
                                    <p className="text-gray-600 w-60">This mobile application translates gestures created using gloves powered by Arduino. It is capable of translating the sign language alphabet as well as words such as 'Mabuhay,' 'Kumusta,' and 'Mahal Kita.' The mobile app was connected via Bluetooth for data transmission between the gloves and the mobile application.</p>
                                </div>
                            </div>


                            <div className="projects_container flex flex-col md:flex-row items-center gap-6 mt-10 mb-10">
                                {/* First Column - Image */}
                                <a href="/img/pill_2.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="web_images mt-10 mb-10 w-full md:w-50 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105"
                                        src="/img/pill_2.png"
                                        alt="Gloves"
                                    />
                                </a>

                                {/* Second Column - Text */}
                                <div className="text-left">
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">Pill Dispenser</h3>
                                    <p className="text-gray-600 w-60">This mobile application is also an IoT project that automates the scheduling of pill dispensing in the pill dispenser. The application is connected to a Firebase database and uses the internet as a tool for data transmission between the pill dispenser and mobile application.</p>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>

            </div>

        </>
    )

}

export default MobAppContent;