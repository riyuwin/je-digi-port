'use client'

import { useEffect, useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import NavBarContent from './NavBarContent'
import FooterContent from './FooterContent'
import { useLocation } from 'react-router-dom'

function WebDevContent() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])
    useEffect(() => {
        // Check if URL has a hash
        if (location.hash) {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
            // Scroll smoothly to the element
            element.scrollIntoView({ behavior: 'smooth' });
        }
        }
    }, [location]); // run whenever location changes

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
                                    Web Applications
                                </h5>

                            </div>

                            <p className="mt-8 text-base text-gray-600">
                                In this section, the documentation of my web application development will be showcased.
                            </p>
                        </div>


                    </div>
                </div> 
            </div>

            <div className="background_container mt-15 mb-20 bg-white w-full px-4 sm:px-8 lg:px-8">


                <div className="grid_container grid grid-cols-1 md:grid-cols-1 gap-12 px-6 py-12 items-center max-w-7xl mx-auto">
 
                    <div className="fade_up_anim relative w-full">

                         

                        <section id="rapid"> 

                            <div className="max-w-4xl mx-auto text-center md:text-left">

                                <p className="project_title_text mt-2 text-xl text-gray-800">RAPID: Real-Time Ambulance Patient Information Dissemination</p>

                                <p className="mt-10 text-base text-gray-900">
                                    RAPID is an application for the immediate transmission of ambulance-to-hospital patient data and incident reports. The system allows ambulance responders to register a patient’s status or information even while en route to the hospital. It also features real-time tracking of the ambulance’s current location. This platform was developed using the React framework, HTML, and CSS, with Firebase as the database.
                                </p>
                            </div>

                            <div className="mt-10 projects_container bg-gray-100 flex flex-row justify-center items-center gap-20 p-4 flex-wrap">
                                <div>
                                    <a href="/img/rapid_6.png" target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="web_images mt-10 mb-0 w-100 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                            src="/img/rapid_6.png"
                                            alt="Rapid 1"
                                        />
                                    </a>

                                    <p className="project_title_image_text mt-5 text-base text-gray-900">
                                        Landing Page
                                    </p>
                                </div>

                                <div>
                                    <a href="/img/rapid_1.png" target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="web_images mt-10 mb-0 w-100 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                            src="/img/rapid_1.png"
                                            alt="Rapid 2"
                                        />
                                    </a>

                                    <p className="project_title_image_text mt-5 text-base text-gray-900">
                                        Admin or Hospital Personnel
                                    </p>
                                </div>

                                <div>
                                    <a href="/img/rapid_3.png" target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="web_images mt-0 mb-0 w-100 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                            src="/img/rapid_3.png"
                                            alt="Rapid 3"
                                        />
                                    </a>

                                    <p className="project_title_image_text mt-5 mb-10  text-base text-gray-900">
                                        Real-time Tracking
                                    </p>
                                </div>

                                <div>
                                    <a href="/img/rapid_4.png" target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="web_images mt-0 mb-0 w-100 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                            src="/img/rapid_4.png"
                                            alt="Pill 1"
                                        />
                                    </a>

                                    <p className="project_title_image_text mt-5 mb-10 text-base text-gray-900">
                                        Emergency Reponder's Dashboard
                                    </p>
                                </div> 
                            </div> 
                        </section> 

                        <section id="solvia"   > 
                            <div className="mt-20 max-w-4xl mx-auto text-center md:text-left">

                                <p className="project_title_text mt-2 text-xl text-gray-800">SOLVIA: A web and mobile-based computational system designed to model and calculate crop damage in flood-affected farmland</p>

                                <p className="mt-10 text-base text-gray-900">
                                    A web and mobile-based computational system designed to model and calculate crop damage in flood-affected farmland. The platform is built for farmers, Municipal Agriculture Offices (MAO), and Provincial Agriculture Offices (PAO), providing data-driven insights for better decision-making. It was developed using React, JavaScript, Java, and Firebase.
                                </p>
                            </div>

                            <div className="mt-10 projects_container bg-gray-100 flex flex-row justify-center items-center gap-20 p-4 flex-wrap">
                                <div>
                                    <a href="/img/solvia1.png" target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="web_images mt-10 mb-0 w-100 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                            src="/img/solvia1.png"
                                            alt="Solvia 1"
                                        />
                                    </a>

                                    <p className="project_title_image_text mt-5 text-base text-gray-900">
                                        Landing Page
                                    </p>
                                </div>

                                <div>
                                    <a href="/img/solvia6.png" target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="web_images mt-10 mb-0 w-100 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                            src="/img/solvia6.png"
                                            alt="Solvia 2"
                                        />
                                    </a>

                                    <p className="project_title_image_text mt-5 text-base text-gray-900">
                                        Admin Dashboard
                                    </p>
                                </div>

                                <div>
                                    <a href="/img/solvia8.png" target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="web_images mt-0 mb-0 w-100 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                            src="/img/solvia8.png"
                                            alt="Solvia 3"
                                        />
                                    </a> 
                                    
                                    <p className="project_title_image_text mt-5 mb-10  text-base text-gray-900">
                                        Farmers Flood Report
                                    </p>
                                </div>

                                <div>
                                    <a href="/img/solvia5.png" target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="web_images mt-0 mb-0 w-100 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                            src="/img/solvia5.png"
                                            alt="Solvia 1"
                                        />
                                    </a>

                                    <p className="project_title_image_text mt-5 mb-10 text-base text-gray-900">
                                        PDF Generations
                                    </p>
                                </div>

                                

                            </div> 
                        </section> 

                        <section id="marahuyo"    > 
                            <div className="mt-20 max-w-4xl mx-auto text-center md:text-left">

                                <p className="project_title_text mt-2 text-xl text-gray-800">Marahuyo: A Booking Web Application for Museum Tour</p>

                                <p className="mt-10 text-base text-gray-900">
                                    A commissioned web application offering package tours for museum visits. The platform was published and developed using PHP, HTML, CSS, and JavaScript, with a MySql as a database.
                                </p>
                            </div>

                            <div className="mt-10 projects_container bg-gray-100 flex flex-row justify-center items-center gap-20 p-4 flex-wrap">
                                <div>
                                    <a href="/img/marahuyo_1.png" target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="web_images mt-10 mb-0 w-100 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                            src="/img/marahuyo_1.png"
                                            alt="Pill 1"
                                        />
                                    </a>

                                    <p className="project_title_image_text mt-5 text-base text-gray-900">
                                        Landing Page
                                    </p>
                                </div>

                                <div>
                                    <a href="/img/marahuyo_2.png" target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="web_images mt-10 mb-0 w-100 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                            src="/img/marahuyo_2.png"
                                            alt="Pill 1"
                                        />
                                    </a>

                                    <p className="project_title_image_text mt-5 text-base text-gray-900">
                                        Contacts
                                    </p>
                                </div>

                                <div>
                                    <a href="/img/marahuyo_3.png" target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="web_images mt-0 mb-0 w-100 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                            src="/img/marahuyo_3.png"
                                            alt="Pill 1"
                                        />
                                    </a>

                                    <p className="project_title_image_text mt-5 text-base text-gray-900">
                                        Trips
                                    </p>
                                </div>

                                <div>
                                    <a href="/img/marahuyo_4.png" target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="web_images mt-0 mb-0 w-100 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                            src="/img/marahuyo_4.png"
                                            alt="Pill 1"
                                        />
                                    </a>

                                    <p className="project_title_image_text mt-5 text-base text-gray-900">
                                        Login
                                    </p>
                                </div>

                                

                            </div>
                        </section>
                        

                        <section id="ascelis"   > 
                            <div className="mt-20 max-w-4xl mx-auto text-center md:text-left">
                                <p className="project_title_text mt-4 text-lg md:text-xl font-semibold text-gray-800 leading-snug">
                                    ASCELIS: A web and IoT hard hat realtime monitoring system
                                </p>

                                <p className="mt-6 text-base md:text-lg text-gray-900 leading-relaxed">
                                    ASCELIS is an IoT project with physical hardware of hard hat that fetches GPS Location, Heart Pulse, Body Temperature, and Movements. It is powered by a microcontroller ESP8266 with a Firebase database. The web app includes an admin platform where the admin can track the device in real-time. Developed using React, JavaScript, OpenStreetMap, and Firebase.
                                </p>
                            </div>

                            <div className="mt-10 projects_container bg-gray-100 flex flex-row justify-center items-center gap-20 p-4 flex-wrap">
                                <div>
                                    <a href="/img/ascelis3.png" target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="web_images mt-10 mb-0 w-100 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                            src="/img/ascelis3.png"
                                            alt="Solvia 1"
                                        />
                                    </a>

                                    <p className="project_title_image_text mt-5 text-base text-gray-900">
                                        Landing Page
                                    </p>
                                </div>

                                <div>
                                    <a href="/img/ascelis4.png" target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="web_images mt-10 mb-0 w-100 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                            src="/img/ascelis4.png"
                                            alt="Solvia 2"
                                        />
                                    </a>

                                    <p className="project_title_image_text mt-5 text-base text-gray-900">
                                        Manage Users
                                    </p>
                                </div>

                                <div>
                                    <a href="/img/ascelis5.png" target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="web_images mt-0 mb-0 w-100 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                            src="/img/ascelis5.png"
                                            alt="Solvia 1"
                                        />
                                    </a>

                                    <p className="project_title_image_text mt-5 mb-10 text-base text-gray-900">
                                        Admin Menu
                                    </p>
                                </div>

                                <div>
                                    <a href="/img/ascelis1.png" target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="web_images mt-0 mb-0 w-100 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                            src="/img/ascelis1.png"
                                            alt="Solvia 3"
                                        />
                                    </a> 
                                    
                                    <p className="project_title_image_text mt-5 mb-10  text-base text-gray-900">
                                        Admin Map Realtime Monitoring
                                    </p>
                                </div> 

                                

                            </div> 
                        </section> 

                        <section id="ceras "> 

                            <div className="max-w-4xl mx-auto text-center md:text-left mt-20">

                                <p className="project_title_text mt-2 text-xl text-gray-800">Clearance Information System</p>
                                <p className="mt-10 text-base text-gray-900">
                                The system is a clearance information system that automates the traditional clearance process within school premises. This web application streamlines the submission, tracking, and approval of student clearances, improving efficiency and reducing manual workload. The platform was developed using the Laravel framework, HTML, and CSS, with MySQL as the database.
                                </p>
                            </div>

                            <div className="mt-10 projects_container bg-gray-100 flex flex-row justify-center items-center gap-20 p-4 flex-wrap">
                                <div>
                                    <a href="/img/ceras1.png" target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="web_images mt-10 mb-0 w-100 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                            src="/img/ceras1.png"
                                            alt="Rapid 1"
                                        />
                                    </a>

                                    <p className="project_title_image_text mt-5 text-base text-gray-900">
                                        Landing Page
                                    </p>
                                </div>

                                <div>
                                    <a href="/img/ceras2.png" target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="web_images mt-10 mb-0 w-100 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                            src="/img/ceras2.png"
                                            alt="Rapid 2"
                                        />
                                    </a>

                                    <p className="project_title_image_text mt-5 text-base text-gray-900">
                                        Admin or Hospital Personnel
                                    </p>
                                </div>

                                <div>
                                    <a href="/img/ceras3.png" target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="web_images mt-0 mb-0 w-100 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                            src="/img/ceras3.png"
                                            alt="Rapid 3"
                                        />
                                    </a>

                                    <p className="project_title_image_text mt-5 mb-10  text-base text-gray-900">
                                        Real-time Tracking
                                    </p>
                                </div>
 
                            </div> 
                        </section> 
                        

                        <section id="hrmis"   >
                            <div className="mt-20 max-w-4xl mx-auto text-center md:text-left">

                                <p className="project_title_text mt-2 text-xl text-gray-800">HRAssist: Human Resource Management Information System</p>

                                <p className="mt-10 text-base text-gray-900">
                                    The Human Resource Management Information System (HRMIS) is one of my best projects, implemented at the LGU of San Vicente, Camarines Norte. The system focuses on the four pillars of human resources and supports different user levels, including HR personnel, employees, and applicants. This platform was developed using Node.js, HTML, and CSS, with Firebase as the database.
                                </p>
                            </div>

                            <div className="mt-10 projects_container bg-gray-100 flex flex-row justify-center items-center gap-20 p-4 flex-wrap">
                                <div>
                                    <a href="/img/hrmis_1.png" target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="web_images mt-10 mb-0 w-100 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                            src="/img/hrmis_1.png"
                                            alt="Pill 1"
                                        />
                                    </a>

                                    <p className="project_title_image_text mt-5 text-base text-gray-900">
                                        HR's Interface
                                    </p>
                                </div>

                                <div>
                                    <a href="/img/hrmis_2.png" target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="web_images mt-10 mb-0 w-100 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                            src="/img/hrmis_2.png"
                                            alt="Pill 1"
                                        />
                                    </a>

                                    <p className="project_title_image_text mt-5 text-base text-gray-900">
                                        Employee's Dashboard
                                    </p>
                                </div>

                                <div>
                                    <a href="/img/hrmis_3.png" target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="web_images mt-0 mb-0 w-100 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                            src="/img/hrmis_3.png"
                                            alt="Pill 1"
                                        />
                                    </a>

                                    <p className="project_title_image_text mt-5 text-base text-gray-900">
                                        HR's Interface
                                    </p>
                                </div>

                                <div>
                                    <a href="/img/hrmis_4.png" target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="web_images mt-0 mb-0 w-100 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                            src="/img/hrmis_4.png"
                                            alt="Pill 1"
                                        />
                                    </a>

                                    <p className="project_title_image_text mt-5 text-base text-gray-900">
                                        Employee's Dashboard
                                    </p>
                                </div>

                                

                            </div> 
                        </section>

                        
                        <section id="dong_tulong"   > 
                            <div className="mt-20 max-w-4xl mx-auto text-center md:text-left">

                                <p className="project_title_text mt-2 text-xl text-gray-800">Dong Tulong: Document Management System</p>

                                <p className="mt-10 text-base text-gray-900">
                                    The Dong Tulong is a Document Management System that digitizes office transactions, particularly in areas such as registration, report generation, status tracking and updates, among others. It features automated report generation capabilities, allowing users to produce Excel reports, PDFs, and charts that are ready for printing and submission as official office reports. The platform was developed using the React framework, along with HTML and CSS, and uses MySQL as its database.
                                </p>
                            </div>

                            <div className="mt-10 projects_container bg-gray-100 flex flex-row justify-center items-center gap-20 p-4 flex-wrap">
                                <div>
                                    <a href="/img/dong_tulong1.png" target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="web_images mt-10 mb-0 w-100 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                            src="/img/dong_tulong1.png"
                                            alt="Rapid 1"
                                        />
                                    </a>

                                    <p className="project_title_image_text mt-5 text-base text-gray-900">
                                        Landing Page
                                    </p>
                                </div>

                                <div>
                                    <a href="/img/dong_tulong3.png" target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="web_images mt-10 mb-0 w-100 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                            src="/img/dong_tulong3.png"
                                            alt="Rapid 2"
                                        />
                                    </a>

                                    <p className="project_title_image_text mt-5 text-base text-gray-900">
                                        Admin Dashboard
                                    </p>
                                </div>

                                <div>
                                    <a href="/img/dong_tulong4.png" target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="web_images mt-0 mb-0 w-100 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                            src="/img/dong_tulong4.png"
                                            alt="Rapid 3"
                                        />
                                    </a>

                                    <p className="project_title_image_text mt-5 mb-10  text-base text-gray-900">
                                        Transactions
                                    </p>
                                </div>

                                <div>
                                    <a href="/img/dong_tulong5.png" target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="web_images mt-0 mb-0 w-100 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                            src="/img/dong_tulong5.png"
                                            alt="Pill 1"
                                        />
                                    </a>

                                    <p className="project_title_image_text mt-5 mb-10 text-base text-gray-900">
                                        PDF Generations
                                    </p>
                                </div>

                                

                            </div> 
                        </section>   
                        
                        <div className="mt-20 max-w-4xl mx-auto text-center md:text-left">

                            <p className="project_title_text mt-2 text-xl text-gray-800">Bitscon Attendance Monitoring System</p>

                            <p className="mt-10 text-base text-gray-900">
                                The Bitscon Attendance Monitoring System was utilized during the regional IT event held at our school, serving as the primary platform to track attendance for all participants. My role in this web application was as a contributor to the creation and management of the database. The website was developed using PHP, CSS, and HTML, with MySQL as the database.
                            </p>
                        </div>

                        <div className="mt-10  flex flex-row justify-center items-center gap-20 p-4 flex-wrap">
                            <div className='projects_container'>
                                <a href="/img/bitscon_1.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="web_images mt-10 mb-0 w-110 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                        src="/img/bitscon_1.png"
                                        alt="Pill 1"
                                    />
                                </a>

                                <p className="project_title_image_text mt-5 text-base text-gray-900">
                                    Landing Page
                                </p>
                            </div>

                            <div className='projects_container'>
                                <a href="/img/bitscon_2.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="web_images mt-10 mb-0 w-110 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                        src="/img/bitscon_2.png"
                                        alt="Pill 1"
                                    />
                                </a>

                                <p className="project_title_image_text mt-5 text-base text-gray-900">
                                    Contacts
                                </p>
                            </div> 
 
                        </div>

                        <div className="mt-20 max-w-4xl mx-auto text-center md:text-left">

                            <p className="project_title_text mt-2 text-xl text-gray-800">Other Projects</p>

                            <p className="mt-10 text-base text-gray-900">
                                These are my other web application projects also that was developed using Django Framework.
                            </p>
                        </div>

                        <div className="mt-10  flex flex-row justify-center items-center gap-20 p-4 flex-wrap">
                            <div className='projects_container'>
                                <a href="/img/covtrack.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="web_images mt-10 mb-0 w-110 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                        src="/img/covtrack.png"
                                        alt="Pill 1"
                                    />
                                </a>

                                <p className="project_title_image_text mt-5 text-base text-gray-900">
                                    COVID-19 Tracer
                                </p>
                            </div>

                            <div className='projects_container'>
                                <a href="/img/cnshs_admission.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="web_images mt-10 mb-0 w-110 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                        src="/img/cnshs_admission.png"
                                        alt="Pill 1"
                                    />
                                </a>

                                <p className="project_title_image_text mt-5 text-base text-gray-900">
                                    CNSHS Admission System
                                </p>
                            </div> 
 
                        </div>

                    </div>
                </div> 
 
            </div>
 
        </>
    )

}

export default WebDevContent;