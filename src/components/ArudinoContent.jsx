'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import NavBarContent from './NavBarContent'
import FooterContent from './FooterContent'

function ArduinoContent() {
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
                                    Arduino Projects
                                </h5>

                            </div>

                            <p className="mt-8 text-base text-gray-600">
                                In this section, the documentation of my arduino based IoT projects development will be showcased.
                            </p>
                        </div>


                    </div>
                </div>




            </div>

            <div className="background_container mt-15 mb-20 bg-white w-full px-4 sm:px-8 lg:px-8">


                <div className="grid_container grid grid-cols-1 md:grid-cols-1 gap-12 px-6 py-12 items-center max-w-7xl mx-auto">

                    <div className="fade_up_anim relative w-full">

                        <div className="max-w-4xl mx-auto text-center md:text-left">

                            <p className="project_title_text mt-2 text-xl text-gray-800">Arduino-based Sign Language Translator using gloves and mobile application</p>

                            <p className="mt-10 text-base text-gray-900">
                                RAPID is an application for the immediate transmission of ambulance-to-hospital patient data and incident reports. The system allows ambulance responders to register a patient’s status or information even while en route to the hospital. It also features real-time tracking of the ambulance’s current location. This platform was developed using the React framework, HTML, and CSS, with Firebase as the database.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-4 justify-items-center">
                            {/* Item 1 */}
                            <div className="projects_container flex flex-col items-center text-center">
                                <a href="/img/gloves_1.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="arduino_images mt-4 w-70 h-120 mt-10 object-cover shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105"
                                        src="/img/gloves_1.png"
                                        alt="Gloves 1"
                                    />
                                </a>
                                <p className="project_title_image_text mt-4 mb-10 text-base text-gray-900">
                                    Output Platform
                                </p>
                            </div>

                            {/* Item 2 */}
                            <div className="projects_container flex flex-col items-center text-center">
                                <a href="/img/gloves_2.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="arduino_images mt-4 w-70 h-120 mt-10 object-cover shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105"
                                        src="/img/gloves_2.png"
                                        alt="Gloves 2"
                                    />
                                </a>
                                <p className="project_title_image_text mt-4 mb-10 text-base text-gray-900">
                                    Gloves powered by Arduino
                                </p>
                            </div>

                            {/* Item 3 */}
                            <div className="projects_container flex flex-col items-center text-center">
                                <a href="/img/gloves_3.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="arduino_images mt-4 w-70 h-120 mt-10 object-cover shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105"
                                        src="/img/gloves_3.png"
                                        alt="Gloves 3"
                                    />
                                </a>
                                <p className="project_title_image_text mt-4 mb-10 text-base text-gray-900">
                                    Mobile Application
                                </p>
                            </div>
                        </div>


                        <div className="mt-20 max-w-4xl mx-auto text-center md:text-left">

                            <p className="project_title_text mt-2 text-xl text-gray-800">Arduino-based Automatic Pill Dispenser using mobile application</p>

                            <p className="mt-10 text-base text-gray-900">
                                The Arduino-based Pill Dispenser is one of our robotics and IoT projects designed to schedule and automatically dispense pills based on a set schedule. The device and mobile application were used in this project, and they are connected to the internet and a Firebase database, which serves as the platform for data transmission. The application was developed using Android Studio, while the device was programmed in the Arduino IDE.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-5 p-4 justify-items-center">

                            <div className="projects_container w-185 flex flex-col items-center text-center">
                                <a href="/img/pill_3.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="arduino_images mt-10 w-160 h-80 object-cover shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105"
                                        src="/img/pill_3.png"
                                        alt="Gloves 1"
                                    />
                                </a>
                                <p className="project_title_image_text mt-4 mb-10 text-base text-gray-900">
                                    Output Platform
                                </p>
                            </div>

                            <div className="mt-0 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-5 p-4 justify-items-center"> 
                                {/* Item 2 */}
                                <div className="projects_container flex flex-col items-center text-center">
                                    <a href="/img/pill_4.png" target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="arduino_images mt-4 w-80 h-130 mt-10 object-cover shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105"
                                            src="/img/pill_4.png"
                                            alt="Gloves 2"
                                        />
                                    </a>
                                    <p className="project_title_image_text mt-4 mb-10 text-base text-gray-900">
                                        Gloves powered by Arduino
                                    </p>
                                </div>

                                {/* Item 3 */}
                                <div className="projects_container flex flex-col items-center text-center">
                                    <a href="/img/pill_1.png" target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="arduino_images mt-4 w-80 h-130 mt-10 object-cover shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105"
                                            src="/img/pill_1.png"
                                            alt="Gloves 3"
                                        />
                                    </a>
                                    <p className="project_title_image_text mt-4 mb-10 text-base text-gray-900">
                                        Mobile Application
                                    </p>
                                </div>
                            </div>

                        </div>  


                    </div>
                </div>

            </div>

        </>
    )

}

export default ArduinoContent;