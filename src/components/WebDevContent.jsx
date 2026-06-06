'use client'

import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

// RAPID
import rapid1 from '/img/rapid_1.png'
import rapid3 from '/img/rapid_3.png'
import rapid4 from '/img/rapid_4.png'
import rapid6 from '/img/rapid_6.png'

// SOLVIA
import solvia1 from '/img/solvia1.png'
import solvia5 from '/img/solvia5.png'
import solvia6 from '/img/solvia6.png'
import solvia8 from '/img/solvia8.png'

// MARAHUYO
import marahuyo1 from '/img/marahuyo_1.png'
import marahuyo2 from '/img/marahuyo_2.png'
import marahuyo3 from '/img/marahuyo_3.png'
import marahuyo4 from '/img/marahuyo_4.png'

// ASCELIS
import ascelis1 from '/img/ascelis1.png'
import ascelis3 from '/img/ascelis3.png'
import ascelis4 from '/img/ascelis4.png'
import ascelis5 from '/img/ascelis5.png'

// HRMIS
import hrmis1 from '/img/hrmis_1.png'
import hrmis2 from '/img/hrmis_2.png'
import hrmis3 from '/img/hrmis_3.png'
import hrmis4 from '/img/hrmis_4.png'

// DONG TULONG
import dong1 from '/img/dong_tulong1.png'
import dong3 from '/img/dong_tulong3.png'
import dong4 from '/img/dong_tulong4.png'
import dong5 from '/img/dong_tulong5.png'

import ceras1 from '/img/ceras1.png'
import ceras2 from '/img/ceras2.png'
import ceras3 from '/img/ceras3.png'

import bitscon1 from '/img/bitscon_1.png'
import bitscon2 from '/img/bitscon_2.png'

// OTHER PROJECTS
import covtrack from '/img/covtrack.png'
import cnshsAdmission from '/img/cnshs_admission.png'

// ICONS
import { FaLaravel, FaReact, FaMoon, FaSun, FaTimes, FaArrowLeft } from 'react-icons/fa'
import { SiCss, SiFirebase, SiHtml5, SiJavascript, SiMysql, SiTailwindcss, SiDjango, SiPhp, SiNodedotjs } from 'react-icons/si'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

// Simple Animation Variants
const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
}

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const stagger = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
}

// Theme Toggle Component
function ThemeToggle({ isDarkMode, setIsDarkMode }) {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="fixed top-4 right-4 z-50 p-2 sm:p-3 rounded-full"
            style={{ 
                backgroundColor: isDarkMode ? '#2d2d2d' : '#ffffff',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
            }}
            aria-label="Toggle theme"
        >
            {isDarkMode ? (
                <FaSun className="text-lg sm:text-xl text-yellow-400" />
            ) : (
                <FaMoon className="text-lg sm:text-xl text-gray-700" />
            )}
        </motion.button>
    )
}

// Image Modal/Carousel Component
function ImageModal({ images, isOpen, onClose, isDarkMode }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [touchStart, setTouchStart] = useState(null)

    const goToPrevious = () => {
        setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1)
    }

    const goToNext = () => {
        setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1)
    }

    const goToSlide = (index) => {
        setCurrentIndex(index)
    }

    const handleTouchStart = (e) => {
        setTouchStart(e.touches[0].clientX)
    }

    const handleTouchEnd = (e) => {
        if (!touchStart) return
        const touchEnd = e.changedTouches[0].clientX
        const diff = touchStart - touchEnd
        
        if (Math.abs(diff) > 50) {
            if (diff > 0) goToNext()
            else goToPrevious()
        }
        setTouchStart(null)
    }

    useEffect(() => {
        if (isOpen) setCurrentIndex(0)
    }, [isOpen])

    useEffect(() => {
        if (!isOpen) return
        
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') goToPrevious()
            if (e.key === 'ArrowRight') goToNext()
            if (e.key === 'Escape') onClose()
        }
        
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isOpen, onClose])

    const theme = {
        bg: isDarkMode ? '#2d2d2d' : '#ffffff',
        text: isDarkMode ? '#ffffff' : '#1e293b',
        border: isDarkMode ? '#4b5563' : '#94a3b8',
        textMuted: isDarkMode ? 'rgb(228, 228, 228)' : '#3d3d3d'
    }

    if (!isOpen) return null

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={onClose}
                style={{ 
                    backgroundColor: 'rgba(5, 5, 5, 0.93)',
                }}
            >
                {/* Close Button */}
                <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(49, 49, 49, 0.98)' }}
                    onClick={onClose}
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 sm:p-3 rounded-full z-50"
                    aria-label="Close modal"
                >
                    <FaTimes className="text-xl sm:text-2xl text-black" />
                </motion.button>

                {/* Modal Content */}
                <motion.div
                    className="relative max-w-6xl w-full mx-1 sm:mx-4"
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Main Image */}
                    <div 
                        className="relative rounded-2xl sm:rounded-3xl overflow-hidden"
                        style={{ 
                            backgroundColor: theme.bg
                        }}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentIndex}
                                src={images[currentIndex].src}
                                alt={images[currentIndex].label}
                                className="w-full h-auto max-h-[50vh] sm:max-h-[70vh] object-contain"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </AnimatePresence>

                        {/* Previous Button */}
                        {images.length > 1 && (
                            <motion.button
                                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.3)' }}
                                onClick={goToPrevious}
                                className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full hidden sm:block"
                                style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                                aria-label="Previous image"
                            >
                                <IoIosArrowBack className="text-2xl sm:text-3xl text-white" />
                            </motion.button>
                        )}

                        {/* Next Button */}
                        {images.length > 1 && (
                            <motion.button
                                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.3)' }}
                                onClick={goToNext}
                                className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full hidden sm:block"
                                style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                                aria-label="Next image"
                            >
                                <IoIosArrowForward className="text-2xl sm:text-3xl text-white" />
                            </motion.button>
                        )}
                    </div> 
 

                    {/* Image Label & Counter */}
                    <motion.div 
                        className="text-center mt-2 sm:mt-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <p className="text-base sm:text-lg font-semibold" style={{ color: "#d8d8d8" }}>
                            {images[currentIndex].label}
                        </p>
                        <p className="text-xs sm:text-sm mt-1" style={{ color: "#d8d8d8" }}>
                            {currentIndex + 1} / {images.length}
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

// Thumbnail Image Component
function ThumbnailImage({ images, onClick, isDarkMode }) {
    const theme = {
        bg: isDarkMode ? '#2d2d2d' : '#ffffff',
        border: isDarkMode ? '#4b5563' : '#e2e8f0',
        textMuted: isDarkMode ? 'rgb(228, 228, 228)' : '#3d3d3d'
    }

    return (
        <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="overflow-hidden rounded-2xl sm:rounded-3xl border p-2 sm:p-3 cursor-pointer"
            style={{ 
                borderColor: theme.border,
                backgroundColor: theme.bg
            }}
            onClick={onClick}
        >
            <img
                src={images[0].src}
                alt={images[0].label}
                className="w-full rounded-xl sm:rounded-2xl object-cover h-40 sm:h-48 md:h-56"
            />
            <div className="flex items-center justify-center gap-2 mt-2 sm:mt-3">
                <span 
                    className="text-xs sm:text-sm"
                    style={{ color: theme.textMuted }}
                >
                    Click to view all {images.length} images
                </span>
            </div>
        </motion.div>
    )
}

function WebDevContent() {
    const location = useLocation()
    const [isDarkMode, setIsDarkMode] = useState(true)
    const [modalImages, setModalImages] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])
    
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '')
            const element = document.getElementById(id)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }, [location])

    const styles = {
        body: {
            backgroundColor: isDarkMode ? '#222222' : '#f8fafc',
            color: isDarkMode ? '#ffffff' : '#1e293b',
            transition: 'background-color 0.3s ease, color 0.3s ease'
        },
        heading: { color: isDarkMode ? '#ffffff' : '#1e293b' },
        textMuted: { color: isDarkMode ? 'rgb(228, 228, 228)' : '#3d3d3d' },
        hr: { borderColor: isDarkMode ? '#4b5563' : '#e2e8f0' },
        techBadge: {
            backgroundColor: isDarkMode ? '#2d2d2d' : '#f1f5f9',
            color: isDarkMode ? '#ffffff' : '#1e293b'
        }
    }

    const openModal = (images) => {
        setModalImages(images)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }
    
    const rapidImages = [
        { src: rapid6, alt: 'Rapid 1', label: 'Landing Page' },
        { src: rapid1, alt: 'Rapid 2', label: 'Admin/Hospital' },
        { src: rapid3, alt: 'Rapid 3', label: 'Real-time Tracking' },
        { src: rapid4, alt: 'Rapid 4', label: 'Responder Dashboard' }
    ]

    const solviaImages = [
        { src: solvia1, label: 'Landing Page' },
        { src: solvia6, label: 'Admin Dashboard' },
        { src: solvia8, label: 'Flood Report' },
        { src: solvia5, label: 'PDF Generation' }
    ]

    const marahuyoImages = [
        { src: marahuyo1, label: 'Landing Page' },
        { src: marahuyo2, label: 'Contacts' },
        { src: marahuyo3, label: 'Trips' },
        { src: marahuyo4, label: 'Login' }
    ]

    const ascelisImages = [
        { src: ascelis3, label: 'Landing Page' },
        { src: ascelis4, label: 'Manage Users' },
        { src: ascelis5, label: 'Admin Menu' },
        { src: ascelis1, label: 'Map Monitoring' }
    ]

    const hrmisImages = [
        { src: hrmis1, label: "HR's Interface" },
        { src: hrmis2, label: "Employee's Dashboard" },
        { src: hrmis3, label: "HR's Interface" },
        { src: hrmis4, label: "Employee's Dashboard" }
    ]

    const dongTulongImages = [
        { src: dong1, label: 'Landing Page' },
        { src: dong3, label: 'Admin Dashboard' },
        { src: dong4, label: 'Transactions' },
        { src: dong5, label: 'PDF Generation' }
    ]

    const cerasImages = [
        { src: ceras1, label: 'Landing Page' },
        { src: ceras2, label: 'Admin Dashboard' },
        { src: ceras3, label: 'Real-time Tracking' }
    ]

        const otherProjects = [
        { src: covtrack, label: 'COVID-19 Tracer' },
        { src: cnshsAdmission, label: 'CNSHS Admission System' }
    ]

    const bitsconImages = [
        { src: bitscon1, label: 'Landing Page' },
        { src: bitscon2, label: 'Attendance Monitoring' }
    ]

    function BackButton() {
        const navigate = useNavigate()
        
        return (
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(-1)}
                className="fixed top-4 left-4 z-50 p-2 sm:p-3 rounded-full"
                style={{ 
                    backgroundColor: '#2d2d2d',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                }}
                aria-label="Go back"
            >
                <FaArrowLeft className="text-lg sm:text-xl text-white" />
            </motion.button>
        )
    }

    // Reusable Project Section Component
    const ProjectSection = ({ 
        id, 
        title, 
        description, 
        features, 
        images, 
        demoLink, 
        techStack 
    }) => (
        <motion.section 
            id={id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="py-8 sm:py-10"
        >
            <div className="max-w-4xl mx-auto text-center md:text-left px-3 sm:px-0">
                <h2 className="project_title_text text-lg sm:text-xl font-bold mt-2" style={styles.heading}>
                    {title}
                </h2>
                <p className="mt-4 sm:mt-6 text-sm sm:text-base opacity-90 leading-relaxed" style={styles.textMuted}>
                    {description}
                </p>

                <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 mt-6 sm:mt-10 items-center">
                    <ThumbnailImage 
                        images={images} 
                        onClick={() => openModal(images)}
                        isDarkMode={isDarkMode}
                    />

                    <div className="order-first lg:order-none">
                        <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-start">
                            {features.map((feature, idx) => (
                                <motion.li 
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="text-sm sm:text-base"
                                    style={styles.textMuted}
                                >
                                    ✦ {feature}
                                </motion.li>
                            ))}
                        </ul>

                        {demoLink && (
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href={demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl border text-xs sm:text-sm font-semibold"
                                style={{ 
                                    borderColor: isDarkMode ? '#4b5563' : '#94a3b8',
                                    color: isDarkMode ? '#ffffff' : '#1e293b'
                                }}
                            >
                                Check Out ↗
                            </motion.a>
                        )}
                    </div>
                </div>

                <motion.div 
                    className="flex flex-wrap gap-2 sm:gap-3 mt-8 sm:mt-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    {techStack.map((tech, idx) => (
                        <span 
                            key={idx} 
                            className="tech-badge"
                            style={styles.techBadge}
                        >
                            {tech.icon}
                            {tech.name}
                        </span>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    )

    return (
        <div className="min-h-screen font-sans" style={styles.body}>
            <BackButton />
            <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

            <ImageModal 
                images={modalImages} 
                isOpen={isModalOpen} 
                onClose={closeModal}
                isDarkMode={isDarkMode}
            />

            {/* Header */}
            <motion.div 
                className="w-full px-3 sm:px-8 py-8 sm:py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="max-w-7xl mx-auto px-3 sm:px-6 py-8 sm:py-12">
                    <div className="max-w-4xl mx-auto">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-3xl sm:text-5xl font-bold"
                            style={styles.heading}
                        >
                            Web Applications
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mt-4 sm:mt-8 text-sm sm:text-base opacity-80"
                            style={styles.textMuted}
                        >
                            In this section, the documentation of my web application development will be showcased.
                        </motion.p>
                    </div>
                </div> 
            </motion.div>

            <hr className="mx-3 sm:mx-8" style={styles.hr} />

            {/* Projects */}
            <div className="w-full px-3 sm:px-8 pb-12 sm:pb-20">
                <div className="max-w-7xl mx-auto px-3 sm:px-6 py-8 sm:py-12">
                    <div className="space-y-12 sm:space-y-24">
                        
                        <ProjectSection
                            id="rapid"
                            title="RAPID: Real-Time Ambulance Patient Information Dissemination"
                            description="RAPID is an application for the immediate transmission of ambulance-to-hospital patient data and incident reports. The system allows ambulance responders to register a patient's status or information even while en route to the hospital. It also features real-time tracking of the ambulance's current location."
                            features={[
                                "Real-time ambulance tracking",
                                "GPS and GIS Integration (Leaflet)",
                                "Live patient information transmission",
                                "Firebase cloud database integration",
                                "Report Generation (PDF, Excel, Charts)",
                                "Responsive web application interface"
                            ]}
                            images={rapidImages}
                            demoLink="https://cnshs-rapid-app.netlify.app/"
                            techStack={[
                                { icon: <FaReact className="text-cyan-400" />, name: "React" },
                                { icon: <SiFirebase className="text-yellow-400" />, name: "Firebase" },
                                { icon: <SiJavascript className="text-yellow-300" />, name: "JS" },
                                { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind" }
                            ]}
                        />

                        <ProjectSection
                            id="solvia"
                            title="SOLVIA: Crop Damage Assessment System"
                            description="A web and mobile-based computational system designed to model and calculate crop damage in flood-affected farmland. The platform is built for farmers, Municipal Agriculture Offices (MAO), and Provincial Agriculture Offices (PAO), providing data-driven insights for better decision-making."
                            features={[
                                "Flood modeling calculation",
                                "Crop damage assessment algorithms",
                                "Interactive Dashboard for PAO/MAO",
                                "Mobile-responsive design",
                                "Data export capabilities",
                                "User role management"
                            ]}
                            images={solviaImages}
                            demoLink="https://riyuwin.github.io/Solvia/"
                            techStack={[
                                { icon: <FaReact className="text-cyan-400" />, name: "React" },
                                { icon: <SiFirebase className="text-yellow-400" />, name: "Firebase" },
                                { icon: <SiJavascript className="text-yellow-300" />, name: "JS" }
                            ]}
                        />

                        <ProjectSection
                            id="marahuyo"
                            title="Marahuyo: A Booking Web Application for Museum Tour"
                            description="A commissioned web application offering package tours for museum visits. The platform allows users to browse tour packages, book slots, and manage their reservations efficiently."
                            features={[
                                "Online Booking System",
                                "Tour Package Management",
                                "Reservation Tracking",
                                "Admin Dashboard",
                                "Responsive Design",
                                "Contact Form Integration"
                            ]}
                            images={marahuyoImages}
                            demoLink="https://github.com/riyuwin/Marahuyo-Website.git"
                            techStack={[
                                { icon: <SiPhp className="text-indigo-400" />, name: "PHP" },
                                { icon: <SiHtml5 className="text-orange-500" />, name: "HTML" },
                                { icon: <SiCss className="text-blue-500" />, name: "CSS" },
                                { icon: <SiMysql className="text-cyan-500" />, name: "MySQL" }
                            ]}
                        />

                        <ProjectSection
                            id="ascelis"
                            title="ASCELIS: IoT Hard Hat Realtime Monitoring System"
                            description="ASCELIS is an IoT project with physical hardware of hard hat that fetches GPS Location, Heart Pulse, Body Temperature, and Movements. It is powered by a microcontroller ESP8266 with a Firebase database."
                            features={[
                                "Real-time GPS tracking via IoT device",
                                "Health metrics monitoring (Heart rate, Temp)",
                                "Geo-fencing alerts",
                                "Admin web dashboard",
                                "Historical data logs",
                                "Leaflet/OpenStreetMap integration"
                            ]}
                            images={ascelisImages}
                            demoLink="https://github.com/riyuwin/ASCELIS_APP.git"
                            techStack={[
                                { icon: <FaReact className="text-cyan-400" />, name: "React" },
                                { icon: <SiFirebase className="text-yellow-400" />, name: "Firebase" },
                                { icon: <SiJavascript className="text-yellow-300" />, name: "JS" }
                            ]}
                        />

                        <ProjectSection
                            id="hrmis"
                            title="HRAssist: Human Resource Management Information System"
                            description="The Human Resource Management Information System (HRMIS) is implemented at the LGU of San Vicente, Camarines Norte. The system focuses on the four pillars of human resources and supports different user levels."
                            features={[
                                "Employee Management",
                                "Leave Application & Approval",
                                "Payroll Computation",
                                "Performance Evaluation",
                                "Applicant Tracking System",
                                "Role-based Access Control"
                            ]}
                            images={hrmisImages}
                            demoLink="https://github.com/camicamiwave/HrAssist.git"
                            techStack={[
                                { icon: <SiNodedotjs className="text-green-500" />, name: "Node.js" },
                                { icon: <SiFirebase className="text-yellow-400" />, name: "Firebase" },
                                { icon: <SiJavascript className="text-yellow-300" />, name: "JS" }
                            ]}
                        />

                        <ProjectSection
                            id="dong_tulong"
                            title="Governor's Office: Document Management System"
                            description="The Dong Tulong is a Document Management System that digitizes office transactions. It features automated report generation capabilities, allowing users to produce Excel reports, PDFs, and charts."
                            features={[
                                "Digitized Document Routing",
                                "Animated PDF Generation",
                                "Excel & Chart Reporting",
                                "User Access Levels",
                                "Transaction History Logging",
                                "Search & Filter Capabilities"
                            ]}
                            images={dongTulongImages}
                            demoLink="https://github.com/riyuwin/PGCN.git"
                            techStack={[
                                { icon: <FaReact className="text-cyan-400" />, name: "React" },
                                { icon: <SiJavascript className="text-yellow-300" />, name: "JS" },
                                { icon: <SiMysql className="text-cyan-500" />, name: "MySQL" }
                            ]}
                        />

                        <ProjectSection
                            id="bitscon"
                            title="Bitscon Attendance Monitoring System"
                            description="The Bitscon Attendance Monitoring System was utilized during the regional IT event held at our school, serving as the primary platform to track attendance for all participants."
                            features={[
                                "QR Code Scanning",
                                "Real-time Attendance Tracking",
                                "Participant Management",
                                "Event Session Logging",
                                "Animated List Generation",
                                "Export to Excel/CSV"
                            ]}
                            images={bitsconImages}
                            demoLink="https://github.com/riyuwin/BitsconAttendance.git"
                            techStack={[
                                { icon: <FaReact className="text-cyan-400" />, name: "React" },
                                { icon: <SiFirebase className="text-yellow-400" />, name: "Firebase" },
                                { icon: <SiJavascript className="text-yellow-300" />, name: "JS" }
                            ]}
                        />

                        <ProjectSection
                            id="ceras"
                            title="Clearance Information System (CLEAR)"
                            description="The system is a clearance information system that automates the traditional clearance process within school premises. This web application streamlines the submission, tracking, and approval of student clearances."
                            features={[
                                "Animated Clearance Workflow",
                                "Student Portal",
                                "Department Signing/Approval",
                                "Document Verification",
                                "Notification System",
                                "Clearance History"
                            ]}
                            images={cerasImages}
                            demoLink="https://github.com/riyuwin/Clearance-Management-System.git"
                            techStack={[
                                { icon: <FaLaravel className="text-red-500" />, name: "Laravel" },
                                { icon: <SiPhp className="text-indigo-400" />, name: "PHP" },
                                { icon: <SiHtml5 className="text-orange-500" />, name: "HTML" },
                                { icon: <SiCss className="text-blue-500" />, name: "CSS" },
                                { icon: <SiJavascript className="text-yellow-300" />, name: "JS" },
                                { icon: <SiMysql className="text-cyan-500" />, name: "MySQL" }
                            ]}
                        />

                        {/* Other Projects */}
                        <motion.section 
                            id="other_projects"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="py-8 sm:py-10"
                        >
                            <div className="max-w-4xl mx-auto text-center md:text-left px-3 sm:px-0">
                                <h2 className="project_title_text text-lg sm:text-xl font-bold mt-2" style={styles.heading}>
                                    Other Projects
                                </h2>
                                <p className="mt-4 sm:mt-6 text-sm sm:text-base opacity-90" style={styles.textMuted}>
                                    These are my other web application projects that were developed using Django Framework.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-6 sm:gap-10 mt-6 sm:mt-10">
                                    {otherProjects.map((project, idx) => (
                                        <motion.div
                                            key={idx}
                                            whileHover={{ scale: 1.02, y: -5 }}
                                            className="overflow-hidden rounded-2xl sm:rounded-3xl border p-2 sm:p-3"
                                            style={{ 
                                                borderColor: isDarkMode ? '#4b5563' : '#e2e8f0',
                                                backgroundColor: isDarkMode ? '#2d2d2d' : '#ffffff'
                                            }}
                                        >
                                            <img
                                                src={project.src}
                                                alt={project.label}
                                                className="w-full rounded-xl sm:rounded-2xl object-cover h-40 sm:h-48"
                                            />
                                            <div className="mt-3 sm:mt-4">
                                                <h3 className="text-base sm:text-lg font-semibold" style={styles.heading}>
                                                    {project.label}
                                                </h3>
                                                <div className="flex flex-wrap gap-2 mt-2 sm:mt-3">
                                                    <span className="tech-badge" style={styles.techBadge}>
                                                        <SiDjango className="text-green-500" />
                                                        Django
                                                    </span>
                                                    <span className="tech-badge" style={styles.techBadge}>
                                                        <SiHtml5 className="text-orange-500" />
                                                        HTML
                                                    </span>
                                                    <span className="tech-badge" style={styles.techBadge}>
                                                        <SiCss className="text-blue-500" />
                                                        CSS
                                                    </span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.section>

                    </div>
                </div> 
            </div>
        </div>
    )
}

export default WebDevContent