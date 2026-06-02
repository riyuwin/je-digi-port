'use client'

import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

// ICONS
import { FaMoon, FaSun, FaTimes, FaAndroid, FaJava, FaWifi } from 'react-icons/fa'
import { SiFirebase, SiArduino } from 'react-icons/si'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

// IMAGES - Gloves
import gloves1 from '/img/gloves_1.png'
import gloves2 from '/img/gloves_2.png'
import gloves3 from '/img/gloves_3.png'

// IMAGES - SOLQUA / Water Filtration
import ikonek1 from '/img/ikonek_1.jpg'
import ikonek2 from '/img/ikonek_6.jpg'
import ikonek3 from '/img/ikonek_3.jpg'

// IMAGES - Pill Dispenser
import pill1 from '/img/pill_1.png'
import pill2 from '/img/pill_2.png'
import pill3 from '/img/pill_3.png'
import pill4 from '/img/pill_4.png'

// IMAGES - Smart Car
import smartCar1 from '/img/smart_car_1.jpg'
import smartCar2 from '/img/smart_car_2.jpg'
import smartCar3 from '/img/smart_car_3.jpg'

// IMAGES - Trike Fare Tracker
import trike1 from '/img/tike_fare_tracker_1.jpg'
import trike2 from '/img/tike_fare_tracker_2.jpg'
import trike3 from '/img/tike_fare_tracker_3.jpg'

// IMAGES - Smart Irrigation
import irrigation1 from '/img/smart_irrigation_1.jpg'
import irrigation2 from '/img/smart_irrigation_2.jpg'

// Animation Variants
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

// Thumbnail Image Component
function ThumbnailImage({ images, onClick, isDarkMode, showLabel = true, label }) {
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

            {showLabel && (
                <div className="flex items-center justify-center gap-2 mt-3">
                    <span
                        className="text-xs sm:text-sm"
                        style={{ color: theme.textMuted }}
                    >
                        {label || `Click to view all ${images.length} images`}
                    </span>
                </div>
            )}
        </motion.div>
    )
}

// Tech Badge Component
function TechBadge({ name, icon, color }) {
    const [isDarkMode] = useState(true)
    
    return (
        <span 
            className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium"
            style={{ 
                backgroundColor: isDarkMode ? '#2d2d2d' : '#f1f5f9',
            }}
        >
            <span style={{ color: color }}>
                {icon}
            </span>
            <span style={{ color: isDarkMode ? '#ffffff' : '#1e293b' }}>{name}</span>
        </span>
    )
}

// Reusable Project Section Component
function ProjectSection({ 
    title, 
    description, 
    images, 
    onImageClick,
    techStack,
    showLabel = true
}) {
    const [isDarkMode] = useState(true)
    
    const styles = {
        heading: { color: isDarkMode ? '#ffffff' : '#1e293b' },
        textMuted: { color: isDarkMode ? 'rgb(228, 228, 228)' : '#3d3d3d' },
    }

    return (
        <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="py-8 sm:py-10"
        >
            <div className="max-w-4xl mx-auto">
                <h2 className="text-xl sm:text-2xl font-bold" style={styles.heading}>
                    {title}
                </h2>
                <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed" style={styles.textMuted}>
                    {description}
                </p>

                <div className="mt-6 sm:mt-8">
                    <ThumbnailImage 
                        images={images} 
                        onClick={onImageClick}
                        isDarkMode={isDarkMode}
                        showLabel={showLabel}
                    />
                </div>

                {techStack && techStack.length > 0 && (
                    <motion.div 
                        className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8"
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
                )}
            </div>
        </motion.section>
    )
}

function ArduinoContent() {
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
    }

    const openModal = (images) => {
        setModalImages(images)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    // Image Arrays
    const glovesImages = [
        { src: gloves1, label: 'Output Platform' },
        { src: gloves2, label: 'Gloves Powered by Arduino' },
        { src: gloves3, label: 'Mobile Application' }
    ]

    const solquaImages = [
        { src: ikonek1, label: 'System Overview' },
        { src: ikonek2, label: 'Mobile App Integration' },
        { src: ikonek3, label: 'Water Filtration Hardware' }
    ]

    const pillImages = [
        { src: pill3, label: 'Pill Dispenser Overview' },
        { src: pill4, label: 'Hardware Design' },
        { src: pill1, label: 'Mobile Application' }
    ]

    const smartCarImages = [
        { src: smartCar1, label: 'Smart Car Front View' },
        { src: smartCar2, label: 'Smart Car Side View' },
        { src: smartCar3, label: 'Smart Car Circuit' }
    ]

    const trikeImages = [
        { src: trike1, label: 'Display Unit' },
        { src: trike2, label: 'Fare Calculation' },
        { src: trike3, label: 'System Components' }
    ]

    const irrigationImages = [
        { src: irrigation1, label: 'System Setup' },
        { src: irrigation2, label: 'Sensor Connection' }
    ]

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
                            Arduino & IoT Projects
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mt-4 sm:mt-8 text-sm sm:text-base opacity-80"
                            style={styles.textMuted}
                        >
                                                        In this section, the documentation of my Arduino based IoT projects development will be showcased.
                        </motion.p>
                    </div>
                </div> 
            </motion.div>

            <hr className="mx-3 sm:mx-8" style={styles.hr} />

            {/* Projects */}
            <div className="w-full px-3 sm:px-8 pb-12 sm:pb-20">
                <div className="max-w-7xl mx-auto px-3 sm:px-6 py-8 sm:py-12">
                    <div className="space-y-12 sm:space-y-24">
                        
                        {/* Sign Language Translator */}
                        <ProjectSection
                            title="Arduino-based Sign Language Translator using gloves and mobile application"
                            description="This mobile application translates gestures created using gloves powered by Arduino. It is capable of translating the sign language alphabet as well as words such as 'Mabuhay,' 'Kumusta,' and 'Mahal Kita.' The mobile app was connected via Bluetooth for data transmission between the gloves and the mobile application."
                            images={glovesImages}
                            onImageClick={() => openModal(glovesImages)}
                            techStack={[
                                { icon: <SiArduino />, name: "Arduino", color: "#00979D" },
                                { icon: <FaAndroid />, name: "Android", color: "#3DDC84" },
                                { icon: <FaJava />, name: "Java", color: "#007396" }
                            ]}
                        />

                        {/* SOLQUA Water Filtration */}
                        <ProjectSection
                            title="SOLQUA: Smart Water Filtration System"
                            description="The SOLQUA: Smart Water Filtration System is a commissioned IoT project. The device is powered by ESP8266 and it has mobile application that are connected to the internet and a Firebase database, which serves as the platform for data transmission. The application was developed using Android Studio, while the device was programmed in the Arduino IDE."
                            images={solquaImages}
                            onImageClick={() => openModal(solquaImages)}
                            techStack={[
                                { icon: <FaWifi />, name: "ESP8266", color: "#E5352C" },
                                { icon: <FaAndroid />, name: "Android", color: "#3DDC84" },
                                { icon: <FaJava />, name: "Java", color: "#007396" },
                                { icon: <SiFirebase />, name: "Firebase", color: "#FFCA28" }
                            ]}
                        />

                        {/* Pill Dispenser */}
                        <ProjectSection
                            title="Arduino-based Automatic Pill Dispenser using mobile application"
                            description="The Arduino-based Pill Dispenser is one of our robotics and IoT projects designed to schedule and automatically dispense pills based on a set schedule. The device and mobile application were used in this project, and they are connected to the internet and a Firebase database, which serves as the platform for data transmission. The application was developed using Android Studio, while the device was programmed in the Arduino IDE."
                            images={pillImages}
                            onImageClick={() => openModal(pillImages)}
                            techStack={[
                                { icon: <SiArduino />, name: "Arduino", color: "#00979D" },
                                { icon: <FaAndroid />, name: "Android", color: "#3DDC84" },
                                { icon: <FaJava />, name: "Java", color: "#007396" },
                                { icon: <SiFirebase />, name: "Firebase", color: "#FFCA28" }
                            ]}
                        />

                        {/* Smart Car */}
                        <ProjectSection
                            title="Smart Car"
                            description="The Smart Car is an Arduino-powered automated vehicle. It uses sensors and programmed controls to move, detect obstacles, and perform basic navigation tasks, showcasing the potential of automation through simple electronics and coding."
                            images={smartCarImages}
                            onImageClick={() => openModal(smartCarImages)}
                            techStack={[
                                { icon: <SiArduino />, name: "Arduino", color: "#00979D" }
                            ]}
                        />

                        {/* Trike Fare Tracker */}
                        <ProjectSection
                            title="Trike Fare Tracker"
                            description="The Trike Fare Tracker is a system designed to calculate and monitor tricycle fares accurately. It is integrated with a mobile application where passengers and drivers can view the fare calculation in real time, ensuring transparency and convenience."
                            images={trikeImages}
                            onImageClick={() => openModal(trikeImages)}
                            techStack={[
                                { icon: <SiArduino />, name: "Arduino", color: "#00979D" },
                                { icon: <FaAndroid />, name: "Android", color: "#3DDC84" },
                                { icon: <FaJava />, name: "Java", color: "#007396" }
                            ]}
                        />

                        {/* Smart Irrigation */}
                        <ProjectSection
                            title="Smart Irrigation"
                            description="The Smart Irrigation system is an automated watering solution powered by Arduino. It uses soil moisture sensors and programmed controls to monitor soil conditions and regulate water supply efficiently. This project aims to conserve water, reduce manual labor, and promote sustainable farming practices."
                            images={irrigationImages}
                            onImageClick={() => openModal(irrigationImages)}
                            showLabel={false}
                            techStack={[
                                { icon: <SiArduino />, name: "Arduino", color: "#00979D" }
                            ]}
                        />

                    </div>
                </div> 
            </div>
        </div>
    )
}

export default ArduinoContent