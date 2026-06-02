'use client'

import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// ICONS
import { FaMoon, FaSun } from 'react-icons/fa'

// IMAGES
import webAppBg from '/img/web_app_bg.png'
import mobAppBg from '/img/mob_app_bg.png'
import iotBg from '/img/iot_bg.png'
import graphicBg from '/img/graphic_design_bg.png'
import consultBg from '/img/consultation_1.png'

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

function ProjectContent() {
    const location = useLocation()
    const [isDarkMode, setIsDarkMode] = useState(true)

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
        cardBg: isDarkMode ? '#2c2c2c' : '#f1f5f9',
        border: isDarkMode ? '#4b5563' : '#e2e8f0',
    }

    const projects = [
        {
            title: "Web Application",
            description: "Most of my projects were developed using Node.js, PHP, Python, HTML, and CSS, with databases such as MySQL and Firebase. I have also used the React, Laravel, and Django as framework.",
            link: "/web_dev",
            image: webAppBg
        },
        {
            title: "Mobile Application",
            description: "My mobile application projects were developed using Android Studio and Unity, with Java and C# as the programming languages. I also used databases like SQLite and Firebase in some of these projects.",
            link: "/mob_app",
            image: mobAppBg
        },
        {
            title: "Arduino and IoT Projects",
            description: "My role in my Arduino projects involves programming the components, configuring wirings, and testing their functionality. I write the code in C++ and use databases like MySQL and Firebase.",
            link: "/iot",
            image: iotBg
        },
        {
            title: "Graphic Design",
            description: "I accept commission projects in graphic design, including 2D, 3D, and poster design. I create these using Adobe Photoshop, Illustrator, Blender, and 3ds Max.",
            link: "/graphic",
            image: graphicBg
        },
        /* {
            title: "Consultation Meetings",
            description: "My consultation meetings also cover my skills in web applications, mobile applications, Robotics, Arduino and IoT projects, Graphic Designs, Game Development, and 3D design.",
            link: "/consultation",
            image: consultBg
        } */
    ]

    return (
        <div className="min-h-screen font-sans" style={styles.body}>
            <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

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
                        Projects
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-4 sm:mt-6 text-sm sm:text-base text-center"
                        style={styles.textMuted}
                    >
                        These projects include web applications, mobile applications, Arduino projects, graphic designs, and consultation meetings. Feel free to explore!
                    </motion.p>
                </div>
            </motion.div>

            <hr className="mx-8" style={styles.hr} />

            {/* Projects */}
            <div className="w-full px-4 sm:px-8 pb-12 sm:pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <div className="space-y-16 sm:space-y-24">
                        
                        {projects.map((project, index) => (
                            <motion.section 
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="py-8 sm:py-10"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                                    {/* Image - Left */}
                                    <div className="order-2 lg:order-1 flex justify-center items-center p-6 rounded-2xl" style={{ backgroundColor: styles.cardBg }}>
                                        <motion.div 
                                            whileHover={{ scale: 1.02 }}
                                            className="w-full"
                                        >
                                            <img 
                                                src={project.image} 
                                                alt={project.title} 
                                                className="w-full h-auto max-h-[400px] object-contain rounded-xl"
                                            />
                                        </motion.div>
                                    </div>

                                    {/* Text - Right */}
                                    <div className="order-1 lg:order-2 text-center lg:text-left">
                                        <h2 className="text-xl sm:text-2xl font-bold" style={styles.heading}>
                                            {project.title}
                                        </h2>
                                        <p className="mt-4 text-sm sm:text-base" style={styles.textMuted}>
                                            {project.description}
                                        </p>
                                        <div className="mt-8">
                                            <Link
                                                to={project.link}
                                                className="inline-block px-8 py-3 rounded-full text-sm font-medium border"
                                                style={{ 
                                                    borderColor: styles.border,
                                                    color: styles.heading.color,
                                                    backgroundColor: 'transparent'
                                                }}
                                            >
                                                Read More →
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.section>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectContent