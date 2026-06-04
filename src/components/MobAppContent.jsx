'use client'

import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

// ICONS
import { FaUnity, FaReact, FaMoon, FaSun, FaTimes, FaAndroid, FaCode, FaJava } from 'react-icons/fa'
import { SiFirebase } from 'react-icons/si'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

// IMAGES - JEEPNEY DASH
import jeepney1 from '/img/jeepney_dash_1.jpg'
import jeepney2 from '/img/jeepney_dash_2.jpg'
import jeepney3 from '/img/jeepney_dash_3.jpg'
import jeepney4 from '/img/jeepney_dash_4.jpg'

// IMAGES - E-TAP
import etap1 from '/img/etap8.jpg'
import etap2 from '/img/etap5.jpg'
import etap3 from '/img/etap7.jpg'
import etap4 from '/img/etap4.jpg'

// IMAGES - BEEMAX
import beemax1 from '/img/beemax1.jpg'
import beemax2 from '/img/beemax2.jpg'
import beemax3 from '/img/beemax3.jpg'
import beemax4 from '/img/beemax4.jpg'

// IMAGES - SFS
import sfs1 from '/img/sfs1.jpg'
import sfs2 from '/img/sfs2.jpg'
import sfs3 from '/img/sfs3.jpg' 

// IMAGES - SAFEMAP
import safemap1 from '/img/safemap_6.jpg'
import safemap2 from '/img/safemap_5.jpg'
import safemap3 from '/img/safemap_1.jpg'
import safemap4 from '/img/safemap_4.jpg'

// IMAGES - STITCHIT
import stitchit1 from '/img/stitchit_1.png'
import stitchit2 from '/img/stitchit_4.jpg'
import stitchit3 from '/img/stitchit_3.png'
import stitchit4 from '/img/stitchit_5.jpg'

// IMAGES - BUSIGON
import busigon1 from '/img/busigon_1.png'
import busigon2 from '/img/busigon_2.png'
import busigon3 from '/img/busigon_3.png'
import busigon4 from '/img/busigon_4.png'

// IMAGES - E-SALAYMAT
import esalaymat1 from '/img/e_salaymat_1.jpg'
import esalaymat2 from '/img/e_salaymat_2.jpg'
import esalaymat3 from '/img/e_salaymat_10.jpg'
import esalaymat4 from '/img/e_salaymat_11.jpg'

// IMAGES - EVOCAPEDIA
import evoc1 from '/img/evoc_1.png'
import evoc2 from '/img/evoc_2.png'
import evoc3 from '/img/evoc_3.png'
import evoc4 from '/img/evoc_4.png'

// IMAGES - ATHFIT
import athfit1 from '/img/athfit_1.jpg'
import athfit2 from '/img/athfit_6.jpg'
import athfit3 from '/img/athfit_3.jpg'
import athfit4 from '/img/athfit_5.jpg'

// IMAGES - SOLVIA MOBILE
import solviaMobile1 from '/img/solvia1.jpg'
import solviaMobile2 from '/img/solvia2.jpg'
import solviaMobile3 from '/img/solvia3.jpg'
import solviaMobile4 from '/img/solvia4.jpg'

// IMAGES - IOT PROJECTS
import glovesImg from '/img/gloves_3.png'
import pillImg from '/img/pill_2.png'

// Simple Animation Variants
const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
}

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
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
                <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(49, 49, 49, 0.98)' }}
                    onClick={onClose}
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 sm:p-3 rounded-full z-50"
                    aria-label="Close modal"
                >
                    <FaTimes className="text-xl sm:text-2xl text-black" />
                </motion.button>

                <motion.div
                    className="relative max-w-6xl w-full mx-1 sm:mx-4"
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={(e) => e.stopPropagation()}
                >
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

                    <motion.div 
                        className="text-center mt-2 sm:mt-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <p className="text-base sm:text-lg font-semibold text-white">
                            {images[currentIndex].label}
                        </p>
                        <p className="text-xs sm:text-sm mt-1 text-gray-400">
                            {currentIndex + 1} / {images.length}
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

// Thumbnail Image Component - FIXED: Wrapped height instead of fixed height
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
            className="overflow-hidden rounded-2xl sm:rounded-3xl border p-3 cursor-pointer"
            style={{
                borderColor: theme.border,
                backgroundColor: theme.bg
            }}
            onClick={onClick}
        >
            <div className="flex justify-center">
                <img
                    src={images[0].src}
                    alt={images[0].label}
                    className="w-auto max-h-[350px] sm:max-h-[500px] object-contain rounded-xl sm:rounded-2xl"
                />
            </div>

            <div className="flex items-center justify-center gap-2 mt-3">
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

// Tech Badge Component - FIXED: Original icon colors
function TechBadge({ name, icon, color }) {
    const [isDarkMode, setIsDarkMode] = useState(true)
    
    return (
        <span 
            className="tech-badge inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium"
            style={{ 
                backgroundColor: isDarkMode ? '#2d2d2d' : '#f1f5f9',
                color: isDarkMode ? '#ffffff' : '#1e293b'
            }}
        >
            <span style={{ color: color }}>
                {icon}
            </span>
            <span>{name}</span>
        </span>
    )
}

function MobAppContent() {
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

    // Image Arrays - Using Imported Images
    const jeepneyImages = [
        { src: jeepney1, label: 'Landing Page' },
        { src: jeepney2, label: 'Select Mode' },
        { src: jeepney3, label: 'Endless Driving Daylight' },
        { src: jeepney4, label: 'Endless Driving Nighttime' }
    ]

    const etapImages = [
        { src: etap1, label: 'Landing Page' },
        { src: etap2, label: 'One Tap Hotlines' },
        { src: etap3, label: 'Realtime Map Tracking' },
        { src: etap4, label: 'Realtime Message' }
    ]

    const beemaxImages = [
        { src: beemax1, label: 'Landing Page' },
        { src: beemax2, label: 'Sensor Monitoring' },
        { src: beemax3, label: 'Realtime Data' },
        { src: beemax4, label: 'Notifications' }
    ]

    const sfsImages = [
        { src: sfs1, label: 'Landing Page' },
        { src: sfs2, label: 'Sensor Monitoring' },
        { src: sfs3, label: 'Image Processing' }, 
    ]

    const safemapImages = [
        { src: safemap1, label: 'Landing Page' },
        { src: safemap2, label: 'Manage Building Details' },
        { src: safemap3, label: 'Main Gameplay' },
        { src: safemap4, label: 'Route Simulation' }
    ]

    const stitchitImages = [
        { src: stitchit1, label: 'Landing Page' },
        { src: stitchit2, label: 'Roadmap' },
        { src: stitchit3, label: '3D Object' },
        { src: stitchit4, label: 'Stitching Procedure' }
    ]

    const busigonImages = [
        { src: busigon1, label: 'Landing Page' },
        { src: busigon2, label: 'Makinig' },
        { src: busigon3, label: 'Magbasa' },
        { src: busigon4, label: 'Manood' }
    ]

    const eSalaymatImages = [
        { src: esalaymat1, label: 'Landing Page' },
        { src: esalaymat2, label: 'Select Legend Story' },
        { src: esalaymat3, label: 'Magbasa / Reading Story' },
        { src: esalaymat4, label: 'Manood / Watch Story' }
    ] 

    const evocImages = [
        { src: evoc1, label: 'Landing Page' },
        { src: evoc2, label: 'TLE Areas' },
        { src: evoc3, label: 'Items' },
        { src: evoc4, label: 'Definition' }
    ]

    const athfitImages = [
        { src: athfit1, label: 'Landing Page' },
        { src: athfit2, label: 'Dashboard' },
        { src: athfit3, label: 'Food Choice' },
        { src: athfit4, label: 'Customize Calory Deficit' }
    ]

    const solviaMobileImages = [
        { src: solviaMobile1, label: 'Landing Page' },
        { src: solviaMobile2, label: 'Sensor Monitoring' },
        { src: solviaMobile3, label: 'Destruction Calculation' },
        { src: solviaMobile4, label: 'Rehabilitation Calculation' }
    ]

    const iotProjects = [
        {
            title: 'Sign Language Translator',
            description: "This mobile application translates gestures created using gloves powered by Arduino. It is capable of translating the sign language alphabet as well as words such as 'Mabuhay,' 'Kumusta,' and 'Mahal Kita.' The mobile app was connected via Bluetooth for data transmission between the gloves and the mobile application.",
            image: glovesImg
        },
        {
            title: 'Pill Dispenser',
            description: "This mobile application is also an IoT project that automates the scheduling of pill dispensing in the pill dispenser. The application is connected to a Firebase database and uses the internet as a tool for data transmission between the pill dispenser and mobile application.",
            image: pillImg
        }
    ]

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
                        <TechBadge 
                            key={idx} 
                            name={tech.name} 
                            icon={tech.icon} 
                            color={tech.color} 
                        />
                    ))}
                </motion.div>
            </div>
        </motion.section>
    )

    return (
        <div className="min-h-screen font-sans" style={styles.body}>
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
                            Mobile Applications
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mt-4 sm:mt-8 text-sm sm:text-base opacity-80"
                            style={styles.textMuted}
                        >
                            In this section, the documentation of my mobile application development will be showcased.
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
                            id="jeepney"
                            title="Jeepney Dash"
                            description="The Jeepney Dash is a commissioned project that aims to showcase the jeepney culture in game application. The game has two modes: endless driving and mission mode."
                            features={["Endless driving mode", "Mission mode", "Day/Night cycle", "3D game assets", "Touch controls", "Game scoring system"]}
                            images={jeepneyImages}
                            demoLink="https://github.com/riyuwin/JeepneyDash.git"
                            techStack={[
                                { icon: <FaUnity />, name: "Unity", color: "#000000" }, 
                                { icon: <FaCode />, name: "C#", color: "#68217A" }
                            ]}
                        />

                        <ProjectSection
                            id="etap"
                            title="E-Tap: CNSC One Tap Emergency App"
                            description="E-Tap was designed as a one-tap emergency system that instantly alerts authorities in real time."
                            features={["One-tap emergency alert", "Real-time location tracking", "Cross-user functionality", "Hotline directory", "Real-time messaging", "OpenStreetMap integration"]}
                            images={etapImages}
                            demoLink="https://github.com/riyuwin/E-TAP.git"
                            techStack={[
                                { icon: <FaAndroid />, name: "Android", color: "#3DDC84" }, 
                                { icon: <FaJava />, name: "Java", color: "#007396" }, 
                                { icon: <SiFirebase />, name: "Firebase", color: "#FFCA28" }
                            ]}
                        />

                        <ProjectSection
                            id="beemax"
                            title="Beemax"
                            description="Beemax is an IoT System that displays realtime data coming from the sensors of Beehives."
                            features={["Temperature monitoring", "Humidity monitoring", "Weight monitoring", "Real-time alerts", "Historical data logs", "Firebase integration"]}
                            images={beemaxImages}
                            demoLink="https://github.com/riyuwin/Beemax.git"
                            techStack={[
                                { icon: <FaAndroid />, name: "Android", color: "#3DDC84" }, 
                                { icon: <FaJava />, name: "Java", color: "#007396" }, 
                                { icon: <SiFirebase />, name: "Firebase", color: "#FFCA28" }
                            ]}
                        />

                        <ProjectSection
                            id="sfs"
                            title="SFS: Solqua Smart Filtration"
                            description="Solqua Smart Filtration app is an IoT System that displays realtime data coming from the sensors of Water Filtration System."
                            features={["pH level monitoring", "Temperature monitoring", "Humidity monitoring", "Image processing", "Real-time notifications", "Water quality analysis"]}
                            images={sfsImages}
                            demoLink="https://github.com/riyuwin/Solqua-Smart-Filtration-System.git"
                            techStack={[
                                { icon: <FaAndroid />, name: "Android", color: "#3DDC84" }, 
                                { icon: <FaJava />, name: "Java", color: "#007396" }, 
                                { icon: <SiFirebase />, name: "Firebase", color: "#FFCA28" }
                            ]}
                        />

                        <ProjectSection
                            id="solvia"
                            title="SOLVIA: Crop Damage Assessment System"
                            description="A web and mobile-based computational system designed to model and calculate crop damage in flood-affected farmland."
                            features={["Flood modeling calculation", "Crop damage assessment", "Mobile-responsive design", "Data export capabilities", "Real-time updates", "Role-based access"]}
                            images={solviaMobileImages}
                            demoLink="https://github.com/riyuwin/Solvia.git"
                            techStack={[
                                { icon: <FaReact />, name: "React", color: "#61DAFB" }, 
                                { icon: <FaAndroid />, name: "Android", color: "#3DDC84" }, 
                                { icon: <SiFirebase />, name: "Firebase", color: "#FFCA28" }
                            ]}
                        />

                        <ProjectSection
                            id="safemap"
                            title="CNSC 3D Map: Earthquake Evacuation Route Simulation"
                            description="The CNSC 3D Map is a commissioned capstone project that aims to simulate earthquake evacuation routes and to visualize in 3D perspective."
                            features={["3D campus visualization", "Evacuation route simulation", "Interactive navigation", "Building details management", "Earthquake simulation", "Real-time pathfinding"]}
                            images={safemapImages}
                            demoLink="https://github.com/riyuwin/CNSC-3D-SAFEMAP.git"
                            techStack={[
                                { icon: <FaUnity />, name: "Unity", color: "#000000" }, 
                                { icon: <FaCode />, name: "C#", color: "#68217A" }
                            ]}
                        />

                        <ProjectSection
                            id="stitchit"
                            title="StitchIt: An Educational Mobile Application for Tailoring Student"
                            description="The StitchIt app is an educational mobile application for tailoring students, and it was my capstone project."
                            features={["3D object visualization", "Step-by-step simulation", "Drafting tutorials", "Stitching procedures", "Learning materials", "Curriculum coverage"]}
                            images={stitchitImages}
                            demoLink="#"
                            techStack={[
                                { icon: <FaUnity />, name: "Unity", color: "#000000" }, 
                                { icon: <FaCode />, name: "C#", color: "#68217A" }
                            ]}
                        />

                        <ProjectSection
                            id="busigon"
                            title="A Digitalized Legend Story of Busig-On in Labo, Camarines Norte"
                            description="The digitalization of the Legend Story of Busig-On in Labo, Camarines Norte was my first commissioned thesis project."
                            features={["Legend story narration", "Interactive reading", "Audio playback", "Video visualization", "Multi-language support", "Offline access"]}
                            images={busigonImages}
                            demoLink="https://github.com/riyuwin/Busig-On.git"
                            techStack={[
                                { icon: <FaAndroid />, name: "Android", color: "#3DDC84" }, 
                                { icon: <FaJava />, name: "Java", color: "#007396" }
                            ]}
                        />

                        <ProjectSection
                            id="esalaymat"
                            title="E-Salaymat"
                            description="The E-Salaymat is a commissioned thesis project that was awarded Best Thesis."
                            features={["Legend story selection", "Reading mode", "Watch mode", "Interactive elements", "2D gameplay", "Story progression"]}
                            images={eSalaymatImages}
                            demoLink="#"
                            techStack={[
                                { icon: <FaUnity />, name: "Unity", color: "#000000" }, 
                                { icon: <FaCode />, name: "C#", color: "#68217A" }
                            ]}
                        />

                        <ProjectSection
                            id="evocapedia"
                            title="Evocapedia: An Electronic Dictionary for TLE Areas"
                            description="The digitalization of the TLE Areas into an electronic dictionary was a commissioned thesis project."
                            features={["TLE areas catalog", "Item definitions", "Search functionality", "Offline access", "Category filtering", "Bookmarks"]}
                            images={evocImages}
                            demoLink="#"
                            techStack={[
                                { icon: <FaAndroid />, name: "Android", color: "#3DDC84" }, 
                                { icon: <FaJava />, name: "Java", color: "#007396" }
                            ]}
                        />

                        <ProjectSection
                            id="athfit"
                            title="AthFit"
                            description="The AthFit was a commissioned thesis project aims to track the calories deficit of the users."
                            features={["Calorie tracking", "Food database", "Dashboard analytics", "Customizable goals", "Progress monitoring", "Diet planning"]}
                            images={athfitImages}
                            demoLink="#"
                            techStack={[
                                { icon: <FaAndroid />, name: "Android", color: "#3DDC84" }, 
                                { icon: <FaJava />, name: "Java", color: "#007396" }
                            ]}
                        />

                        {/* IoT Projects Section */}
                        <motion.section 
                            id="iot_projects"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="py-8 sm:py-10"
                        >
                            <div className="max-w-4xl mx-auto text-center md:text-left px-3 sm:px-0">
                                <h2 className="project_title_text text-lg sm:text-xl font-bold mt-2" style={styles.heading}>
                                    Arduino based IoT Integrated with Mobile Applications
                                </h2>
                                <p className="mt-4 sm:mt-6 text-sm sm:text-base opacity-90 leading-relaxed" style={styles.textMuted}>
                                    These mobile applications were integrated with Arduino projects and IoT projects and used as a platform to visualize and control the devices.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-6 sm:gap-10 mt-8 sm:mt-12">
                                    {iotProjects.map((project, idx) => (
                                        <motion.div
                                            key={idx}
                                            whileHover={{ scale: 1.02, y: -5 }}
                                            className="overflow-hidden rounded-2xl sm:rounded-3xl border p-4 sm:p-6"
                                            style={{ 
                                                borderColor: isDarkMode ? '#4b5563' : '#e2e8f0',
                                                backgroundColor: isDarkMode ? '#2d2d2d' : '#ffffff'
                                            }}
                                        > 
                                            <div className="w-full flex justify-center">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-auto max-h-[350px] sm:max-h-[500px] object-contain rounded-xl sm:rounded-2xl"
                                                />
                                            </div>
                                            <div className="mt-4 sm:mt-6">
                                                <h3 className="text-lg sm:text-xl font-semibold" style={styles.heading}>
                                                    {project.title}
                                                </h3>
                                                <p className="mt-2 text-sm sm:text-base" style={styles.textMuted}>
                                                    {project.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.div 
                                    className="flex flex-wrap gap-2 sm:gap-3 mt-8 sm:mt-10"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <span 
                                        className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium"
                                        style={{ 
                                            backgroundColor: isDarkMode ? '#2d2d2d' : '#f1f5f9',
                                            color: '#3DDC84'
                                        }}
                                    >
                                        <FaAndroid />
                                        Android
                                    </span>
                                    <span 
                                        className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium"
                                        style={{ 
                                            backgroundColor: isDarkMode ? '#2d2d2d' : '#f1f5f9',
                                            color: '#007396'
                                        }}
                                    >
                                        <FaJava />
                                        Java
                                    </span>
                                    <span 
                                        className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium"
                                        style={{ 
                                            backgroundColor: isDarkMode ? '#2d2d2d' : '#f1f5f9',
                                            color: '#FFCA28'
                                        }}
                                    >
                                        <SiFirebase />
                                        Firebase
                                    </span>
                                </motion.div>
                            </div>
                        </motion.section>

                    </div>
                </div> 
            </div>
        </div>
    )
}

export default MobAppContent