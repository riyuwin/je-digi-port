'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import NavBarContent from './NavBarContent'
import FooterContent from './FooterContent'

function ConsultationContent() {
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
                                    Consultation Services
                                </h5>

                            </div>

                            <p className="mt-8 text-base text-gray-600">
                                These meetings focus on the skills I have gained, particularly in web applications, mobile applications, Arduino projects, and 3D design. I use these skills to assess project feasibility and provide insights into various projects, including research projects, theses, and subject-related requirements.
                            </p>
                        </div>


                    </div>
                </div>




            </div>

            <div className="background_container mt-15 mb-20 bg-white w-full px-4 sm:px-8 lg:px-8">


                <div className="grid_container grid grid-cols-1 md:grid-cols-1 gap-12 px-6 py-12 items-center max-w-7xl mx-auto">

                    <div className="fade_up_anim relative w-full">

                        <div className="max-w-4xl mx-auto text-center md:text-left">

                            <p className="project_title_text mt-2 text-xl text-gray-800">Face-to-Face Meetings</p>
 
                        </div>

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 p-4 justify-items-center">
                            {/* Item 1 */}
                            <div className="projects_container flex flex-col items-center text-center">
                                <a href="/img/consultation_1.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="arduino_images mt-4 w-150  mt-10 mb-10 object-cover shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105"
                                        src="/img/consulation_e_salaymat.jpg"
                                        alt="Consultation 1"
                                    />
                                </a>
                            </div>

                            {/* Item 2 */}
                            <div className="projects_container flex flex-col items-center text-center">
                                <a href="/img/consulation_e_salaymat1.jpg" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="arduino_images mt-4 w-150  mt-10 mb-10 object-cover shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105"
                                        src="/img/consultation_stenomate.jpg"
                                        alt="Consultation 2"
                                    />
                                </a>
                            </div> 
                        </div>
 
                    </div>

                    <div className="fade_up_anim relative w-full">

                        <div className="max-w-4xl mx-auto text-center md:text-left">

                            <p className="project_title_text mt-2 text-xl text-gray-800">Online Meetings</p>
 
                        </div>

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 p-4 justify-items-center">
                            {/* Item 1 */}
                            <div className="projects_container flex flex-col items-center text-center">
                                <a href="/img/consultation_1.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="arduino_images mt-4 w-150  mt-10 mb-10 object-cover shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105"
                                        src="/img/consultation_1.png"
                                        alt="Consultation 1"
                                    />
                                </a>
                            </div>

                            {/* Item 2 */}
                            <div className="projects_container flex flex-col items-center text-center">
                                <a href="/img/consultation_2.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="arduino_images mt-4 w-150  mt-10 mb-10 object-cover shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105"
                                        src="/img/consultation_2.png"
                                        alt="Consultation 2"
                                    />
                                </a>
                            </div>

                             
                        </div>

                         


                    </div>
                </div>

            </div>

        </>
    )

}

export default ConsultationContent;