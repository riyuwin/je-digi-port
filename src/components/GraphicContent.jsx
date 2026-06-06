'use client'

import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

// ICONS
import { FaMoon, FaSun, FaTimes, FaCube, FaArrowLeft } from 'react-icons/fa'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

// IMAGES - 3D HOUSE RENDERED
import house1 from '/img/house_4.jpg'
import house2 from '/img/house_2.jpg'
import house3 from '/img/house_5.jpg'
import house4 from '/img/house_7.jpg'

// IMAGES - RICE MILLER
import mill1 from '/img/milling_1.png'
import mill2 from '/img/milling_2.png'
import mill3 from '/img/milling_3.png'

// IMAGES - TETRAPODS
import tetrapod1 from '/img/tetrapods1.png'
import tetrapod2 from '/img/tetrapods2.png'
import tetrapod3 from '/img/tetrapods3.png'
import tetrapod4 from '/img/tetrapods4.png'

// IMAGES - PEST REPELLANT
import pest1 from '/img/pest1.png'
import pest2 from '/img/pest2.png'
import pest3 from '/img/pest3.png'
import pest4 from '/img/pest4.png'

// IMAGES - BEEHIVE FLOW FRAMES
import flowFrame1 from '/img/FlowFrames2.png'
import flowFrame2 from '/img/Beehive4.png'
import flowFrame3 from '/img/Beehive2.png'
import flowFrame4 from '/img/Beehive11.png'

// IMAGES - MANGROVES PLANTER
import mangrove1 from '/img/mangroves1.png'
import mangrove2 from '/img/mangroves2.png'
import mangrove3 from '/img/mangroves3.png'
import mangrove4 from '/img/mangroves4.png'

// IMAGES - 3D SHIP
import ship1 from '/img/ship_1.png'
import ship2 from '/img/ship_2.png'
import ship3 from '/img/ship_3.png'

// IMAGES - POSTERS
import poster1 from '/img/tabi_tabi.png'
import poster2 from '/img/ningas.png'
import poster3 from '/img/poster3.jpg'
import poster4 from '/img/poster4.jpg'
import poster5 from '/img/poster6.jpg'

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
        text: isDarkMode ? '#ffffff' : '#000000'
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
                        <p className="text-base sm:text-lg font-semibold" style={{ color: theme.text }}>
                            {images[currentIndex].label}
                        </p>
                        <p className="text-xs sm:text-sm mt-1" style={{ color: isDarkMode ? '#d8d8d8' : '#666666' }}>
                            {currentIndex + 1} / {images.length}
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

// Tech Badge Component
function TechBadge({ name, icon, color }) {
    return (
        <span 
            className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium"
            style={{ 
                backgroundColor: color,
                color: '#ffffff',
            }}
        >
            {icon}
            {name}
        </span>
    )
}

// Image Card Component - Larger images with modal
function ImageCard({ src, label, isDarkMode, onClick }) {
    const theme = {
        bg: isDarkMode ? '#2d2d2d' : '#ffffff',
        border: isDarkMode ? '#4b5563' : '#e2e8f0',
        text: isDarkMode ? '#ffffff' : '#000000'
    }

    return (
        <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="flex flex-col items-center cursor-pointer"
            onClick={onClick}
        >
            <div 
                className="relative overflow-hidden rounded-2xl sm:rounded-3xl border p-2 sm:p-3"
                style={{
                    borderColor: theme.border,
                    backgroundColor: theme.bg
                }}
            >
                <img
                    src={src}
                    alt={label}
                    className="w-full h-auto max-h-[300px] sm:max-h-[400px] object-contain rounded-xl"
                />
            </div>
            {label && (
                <p 
                    className="mt-3 text-sm sm:text-base font-medium"
                    style={{ color: theme.text }}
                >
                    {label}
                </p>
            )}
        </motion.div>
    )
}

// Project Section Component
function ProjectSection({ 
    title, 
    description, 
    images, 
    onImageClick,
    techStack,
    gridCols = "grid-cols-2 sm:grid-cols-3"
}) {
    const [isDarkMode] = useState(true)
    
    const styles = {
        heading: { color: isDarkMode ? '#ffffff' : '#000000' },
        textMuted: { color: isDarkMode ? 'rgb(228, 228, 228)' : '#000000' },
    }

    return (
        <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="py-8 sm:py-10"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <h2 className="text-xl sm:text-2xl font-bold text-center" style={styles.heading}>
                    {title}
                </h2>
                
                {description && (
                    <p className="mt-4 text-sm sm:text-base text-center max-w-3xl mx-auto" style={styles.textMuted}>
                        {description}
                    </p>
                )}

                <div className={`mt-6 sm:mt-8 grid ${gridCols} gap-5 justify-items-center`}>
                    {images.map((img, idx) => (
                        <ImageCard 
                            key={idx}
                            src={img.src}
                            label={img.label}
                            isDarkMode={isDarkMode}
                            onClick={() => onImageClick(images)}
                        />
                    ))}
                </div>

                {techStack && techStack.length > 0 && (
                    <motion.div 
                        className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8 justify-center"
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

function GraphicContent() {
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
            color: isDarkMode ? '#ffffff' : '#000000',
            transition: 'background-color 0.3s ease, color 0.3s ease'
        },
        heading: { color: isDarkMode ? '#ffffff' : '#000000' },
        textMuted: { color: isDarkMode ? 'rgb(228, 228, 228)' : '#000000' },
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
    const houseImages = [
        { src: house1, label: 'Outside' },
        { src: house2, label: 'Bedroom' },
        { src: house3, label: 'Living Room' },
        { src: house4, label: 'Restroom' }
    ]

    const millerImages = [
        { src: mill1, label: '' },
        { src: mill2, label: '' },
        { src: mill3, label: '' }
    ]

    const tetrapodsImages = [
        { src: tetrapod1, label: '' },
        { src: tetrapod2, label: '' },
        { src: tetrapod3, label: '' },
        { src: tetrapod4, label: '' }
    ]

    const pestImages = [
        { src: pest1, label: '' },
        { src: pest2, label: '' },
        { src: pest3, label: '' },
        { src: pest4, label: '' }
    ]

    const beehiveImages = [
        { src: flowFrame1, label: '' },
        { src: flowFrame2, label: '' },
        { src: flowFrame3, label: '' },
        { src: flowFrame4, label: '' }
    ]

    const mangrovesImages = [
        { src: mangrove1, label: '' },
        { src: mangrove2, label: '' },
        { src: mangrove3, label: '' },
        { src: mangrove4, label: '' }
    ]

    const shipImages = [
        { src: ship1, label: '' },
        { src: ship2, label: '' },
        { src: ship3, label: '' }
    ]

    const posterImages = [
        { src: poster3, label: '' },
        { src: poster4, label: '' },
        { src: poster5, label: '' },
        { src: poster2, label: '' },
        { src: poster1, label: '' },
    ]

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
                className="w-full px-4 sm:px-8 py-10 sm:py-14"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-3xl sm:text-5xl font-bold text-center"
                        style={styles.heading}
                                        >
                        Graphic Designs
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-4 sm:mt-6 text-sm sm:text-base text-center opacity-80"
                        style={styles.textMuted}
                    >
                        In this section, the documentation of my graphic design will be showcased. I accept commission projects in graphic design, including 2D, 3D, and poster design. I create these using Adobe Photoshop, Illustrator, Blender, and 3ds Max.
                    </motion.p>
                </div>
            </motion.div>

            <hr className="mx-8" style={styles.hr} />

            {/* Projects */}
            <div className="w-full px-4 sm:px-8 pb-12 sm:pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <div className="space-y-8 sm:space-y-16">
                         

                        {/* 3D House Rendered */}
                        <ProjectSection
                            title="3D House Rendered"
                            images={houseImages}
                            onImageClick={(images) => openModal(images)}
                            gridCols="grid-cols-2 sm:grid-cols-4"
                        />

                        {/* Rice Miller */}
                        <ProjectSection
                            title="Rice Miller"
                            images={millerImages}
                            onImageClick={(images) => openModal(images)}
                            gridCols="grid-cols-1 sm:grid-cols-3"
                        />

                        {/* Tetrapods */}
                        <ProjectSection
                            title="Tetrapods"
                            images={tetrapodsImages}
                            onImageClick={(images) => openModal(images)}
                            gridCols="grid-cols-2 sm:grid-cols-4"
                        />

                        {/* Pest Repellant */}
                        <ProjectSection
                            title="Pest Repellant"
                            images={pestImages}
                            onImageClick={(images) => openModal(images)}
                            gridCols="grid-cols-2 sm:grid-cols-4"
                        />

                        {/* BeeHive Flow Frames */}
                        <ProjectSection
                            title="BeeHive Flow Frames"
                            images={beehiveImages}
                            onImageClick={(images) => openModal(images)}
                            gridCols="grid-cols-2 sm:grid-cols-4"
                        />

                        {/* Mangroves Planter */}
                        <ProjectSection
                            title="Mangroves Planter"
                            images={mangrovesImages}
                            onImageClick={(images) => openModal(images)}
                            gridCols="grid-cols-2 sm:grid-cols-4"
                        />

                        {/* 3D Ship */}
                        <ProjectSection
                            title="3D Ship"
                            images={shipImages}
                            onImageClick={(images) => openModal(images)}
                            gridCols="grid-cols-1 sm:grid-cols-3"
                        />

                        {/* Posters */}
                        <ProjectSection
                            title="Posters"
                            description="I also experienced creating posters for our documentary and film project which was developed using Adobe Photoshop and Illustrator."
                            images={posterImages}
                            onImageClick={(images) => openModal(images)}
                            gridCols="grid-cols-5 sm:grid-cols-5"
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default GraphicContent