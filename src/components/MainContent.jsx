'use client'

import React, { useState, useEffect, useRef } from 'react' 
import { Link } from 'react-router-dom'  
import { motion, AnimatePresence } from 'framer-motion'

import profilePic from '/img/formal_pic.JPG'

import rapidBg from '/img/rapid_bg1.png'
import solviaBg from '/img/solvia_bg1.png'
import hrmisBg from '/img/hrmis_bg2.png'
import marahuyoBg from '/img/marahuyo_bg1.png'
import jeepneyBg from '/img/jeepney_bg1.png'
import etapBg from '/img/etap_bg1.png'

import webAppBg from '/img/web_app_bg.png'
import mobAppBg from '/img/mob_app_bg.png'
import graphicBg from '/img/graphic_design_bg.png'
import iotBg from '/img/iot_bg.png'

import resumePdf from '/file/albos_resume.pdf'

import {
  FaSun,
  FaMoon,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa'

// Animation variants for Framer Motion
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

// TypingText Component
const TypingText = ({ text, speed = 80, delay = 1500 }) => {
  const [displayed, setDisplayed] = useState('')
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(text.substring(0, index + 1))
        setIndex(index + 1)

        if (index === text.length) {
          setTimeout(() => setIsDeleting(true), delay)
        }
      } else {
        setDisplayed(text.substring(0, index - 1))
        setIndex(index - 1)

        if (index === 0) {
          setIsDeleting(false)
        }
      }
    }, isDeleting ? speed / 2 : speed)

    return () => clearTimeout(timeout)
  }, [index, isDeleting, text, speed, delay])

  return <span>{displayed}</span>
}

export default function MainContent() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(true)
    const canvasRef = useRef(null)
    const [index, setIndex] = useState(0)

    const categories = [
        { title: 'Web Applications', image: webAppBg, link: '/web_dev' },
        { title: 'Mobile Applications', image: mobAppBg, link: '/mob_app' },
        { title: 'Graphic Designs', image: graphicBg, link: '/graphic' },
        { title: 'IoT Projects', image: iotBg, link: '/iot' }
    ]

    const next = () => setIndex((prev) => (prev + 1) % categories.length)
    const prev = () => setIndex((prev) => (prev - 1 + categories.length) % categories.length) 
    const toggleTheme = () => setIsDarkMode(!isDarkMode)

    // Canvas Particle Animation
    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        
        let width = canvas.width = window.innerWidth
        let height = canvas.height = window.innerHeight

        const particles = Array.from({ length: 90 }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 2 + 1,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
        }))

        const mouse = { x: null, y: null }

        const handleMouseMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY }
        const handleResize = () => { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('resize', handleResize)

        const drawLines = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x
                    const dy = particles[i].y - particles[j].y
                    const dist = Math.sqrt(dx * dx + dy * dy)

                    if (dist < 120) {
                        ctx.beginPath()
                        const alpha = isDarkMode ? `rgba(96, 165, 250, ${1 - dist / 120})` : `rgba(37, 99, 235, ${1 - dist / 120})`
                        ctx.strokeStyle = alpha
                        ctx.lineWidth = 0.5
                        ctx.moveTo(particles[i].x, particles[i].y)
                        ctx.lineTo(particles[j].x, particles[j].y)
                        ctx.stroke()
                    }
                }
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height)

            particles.forEach(p => {
                p.x += p.vx; p.y += p.vy
                if (p.x < 0 || p.x > width) p.vx *= -1
                if (p.y < 0 || p.y > height) p.vy *= -1

                if (mouse.x && mouse.y) {
                    const dx = mouse.x - p.x
                    const dy = mouse.y - p.y
                    const dist = Math.sqrt(dx * dx + dy * dy)
                    if (dist < 150) { p.vx += dx * 0.0002; p.vy += dy * 0.0002 }
                }

                const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4)
                const color = isDarkMode ? '96, 165, 250' : '37, 99, 235'
                gradient.addColorStop(0, `rgba(${color},0.9)`)
                gradient.addColorStop(1, `rgba(${color},0)`)
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fillStyle = gradient
                ctx.fill()
            })

            drawLines()
            requestAnimationFrame(animate)
        }

        animate()
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('resize', handleResize)
        }
    }, [isDarkMode])

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light')
    }, [isDarkMode])

    /* const projects = [
        { title: 'RAPID: Real-Time Ambulance Patient Information Dissemination', description: 'RAPID is a commission client-based application intended for MDRRMO, PDRMMO, and Emergency Responders for the immediate transmission of ambulance-to-hospital patient data and incident reports.', image: rapidBg, link: '/web_dev#rapid' },
        { title: 'SOLVIA', description: 'SOLVIA is a commission client-based application intended for OPAG, MAO, and Farmers. It is a web and mobile-based computational system designed to model and calculate crop damage in flood-affected farmland.', image: solviaBg, link: '/web_dev#solvia' },
        { title: 'HRAssist: Human Resource Management Information System', description: 'The Human Resource Management Information System (HRMIS) is a client-based project, implemented at the LGU of San Vicente, Camarines Norte. The system focuses on the four pillars of human resources.', image: hrmisBg, link: '/web_dev#hrmis' },
        { title: 'Marahuyo: A Booking Web Application for Museum Tour', description: 'A commissioned web application offering package tours for museum visits. The platform was published and developed using PHP, HTML, CSS, and JavaScript, with a MySql database.', image: marahuyoBg, link: '/web_dev#marahuyo' },
        { title: 'Jeepney Dash', description: 'Jeepney Dash is a commissioned 3D mobile game that showcases traditional jeepneys in an urban city setting. The game features multiple quest levels, an endless driving mode, and dynamic day and night environments.', image: jeepneyBg, link: '/mob_app#jeepney' },
        { title: 'E-Tap: CNSC One Tap Emergency App', description: 'E-Tap was client-based application designed as a one-tap emergency system that instantly alerts authorities from the CNSC campus, and external responders in real time.', image: etapBg, link: '/mob_app#etap' }
    ] */

    const projects = [
        {
            title: 'RAPID: Real-Time Ambulance Patient Information Dissemination',
            description: 'RAPID is an commission client-based application intended for MDRRMO, PDRMMO, and Emergency Responders for the immediate transmission of ambulance-to-hospital patient data and incident reports. The system allows ambulance responders to register a patient’s status or information even while en route to the hospital.  ',
            image: rapidBg,
            link: '/web_dev#rapid'
        },
        {
            title: 'SOLVIA',
            description: 'SOLVIA is an commission client-based application inteded for OPAG, MAO, and Farmers. It is a web and mobile-based computational system designed to model and calculate crop damage in flood-affected farmland. The platform is built for farmers, Municipal Agriculture Offices (MAO), and Provincial Agriculture Offices (PAO), providing data-driven insights for better decision-making. It was developed using React, JavaScript, Java, and Firebase.',
            image: solviaBg,
            link: '/web_dev#solvia'
        },
        {
            title: 'HRAssist: Human Resource Management Information System',
            description: 'The Human Resource Management Information System (HRMIS) is a client-based project, implemented at the LGU of San Vicente, Camarines Norte. The system focuses on the four pillars of human resources and supports different user levels, including HR personnel, employees, and applicants.  ',
            image: hrmisBg,
            link: '/web_dev#hrmis'
        },
        {
            title: 'Marahuyo: A Booking Web Application for Museum Tour',
            description: 'A commissioned web application offering package tours for museum visits. The platform was published and developed using PHP, HTML, CSS, and JavaScript, with a MySql as a database.',
            image: marahuyoBg,
            link: '/web_dev#marahuyo'
        },
        {
            title: 'Jeepney Dash',
            description: 'Jeepney Dash is a commissioned 3D mobile game that showcases traditional jeepneys in an urban city setting. The game features multiple quest levels, an endless driving mode, and dynamic day and night environments. It was developed using C#, Unity, and Blender.',
            image: jeepneyBg,
            link: '/mob_app#jeepney'
        },
        {
            title: 'E-Tap: CNSC One Tap Emergency App',
            description: 'E-Tap was client-based application designed as a one-tap emergency system that instantly alerts authorities from the CNSC campus, and external responders in real time. The platform supports cross-user functionality, enabling seamless communication between students and campus personnel. It was developed using Kotlin and Firebase.',
            image: etapBg,
            link: '/mob_app#etap'
        }
    ]

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    const styles = {
        body: { backgroundColor: isDarkMode ? '#222222' : '#f8fafc', color: isDarkMode ? '#ffffff' : '#1e293b', transition: 'background-color 0.3s ease, color 0.3s ease' },
        nav: { backgroundColor: isDarkMode ? 'rgba(34, 34, 34, 0.9)' : 'rgba(255, 255, 255, 0.9)', border: isDarkMode ? '1px solid #333333' : '1px solid #e2e8f0' },
        card: { backgroundColor: isDarkMode ? '#2d2d2d' : '#ffffff', color: isDarkMode ? '#ffffff' : '#1e293b', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)' },
        shaded: { backgroundColor: isDarkMode ? '#2d2d2d' : '#f1f5f9' },
        heading: { color: isDarkMode ? '#ffffff' : '#1e293b' }
    }

    return (
        <div className="body_container min-h-screen font-sans relative overflow-hidden" style={styles.body}> 
            <canvas ref={canvasRef} className="fixed inset-0 -z-10 pointer-events-none" />

            {/* Navbar */}
            <motion.nav 
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="topNav sticky top-8 z-50 mx-16 backdrop-blur-xl shadow-md rounded-2xl hidden md:block" 
                style={styles.nav}
            >
                <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
                    <div className="jan_name_text text-xl font-bold" style={{ color: isDarkMode ? '#60a5fa' : '#2563eb' }}>
                        John Erwin
                    </div>
                    <div className="hidden md:flex gap-6 items-center">
                        {[
                            { name: 'About', id: 'about' },
                            { name: 'Projects', id: 'featured' },
                            { name: 'Category', id: 'category' },
                            { name: 'Skills', id: 'skills' },
                            { name: 'Contact', id: 'contact' }
                        ].map(item => (
                            <motion.button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="font-medium"
                                style={{ color: isDarkMode ? '#ffffff' : '#1d1d1d', background: 'none' }}
                                whileHover={{ scale: 1.1, color: '#60a5fa' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item.name}
                            </motion.button>
                        ))}
                        <motion.button 
                            onClick={toggleTheme}
                            className="p-2 rounded-full"
                            style={{ color: isDarkMode ? '#fbbf24' : '#4b5563' }}
                            whileHover={{ scale: 1.2, rotate: 180 }}
                            whileTap={{ scale: 0.9 }}
                            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                        >
                            {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Nav */}
            <motion.nav 
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="topNav sticky top-8 z-50 mx-4 backdrop-blur-xl shadow-md rounded-2xl md:hidden" 
                style={styles.nav}
            >
                <div className="flex justify-between items-center px-4 py-2">
                    <div className="jan_name_text text-lg font-bold" style={{ color: isDarkMode ? '#60a5fa' : '#2563eb' }}>
                        John Erwin
                    </div>
                    <div className="flex items-center gap-2">
                         <motion.button 
                            onClick={toggleTheme}
                            className="p-2 rounded-full"
                            whileTap={{ scale: 0.9 }}
                            style={{ color: isDarkMode ? '#fbbf24' : '#4b5563' }}
                        >
                            {isDarkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
                        </motion.button>
                        <button className="flex flex-col gap-1" onClick={() => setMenuOpen(!menuOpen)}>
                            <span className="w-5 h-0.5 bg-white"></span>
                            <span className="w-5 h-0.5 bg-white"></span>
                            <span className="w-5 h-0.5 bg-white"></span>
                        </button>
                    </div>
                </div>
                {menuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-4 pb-3 flex flex-col gap-2 border-t border-gray-700 pt-2"
                    >
                         {[{ name: 'About', id: 'about' }, { name: 'Projects', id: 'featured' }, { name: 'Category', id: 'category' }, { name: 'Skills', id: 'skills' }, { name: 'Contact', id: 'contact' }].map(item => (
                            <button key={item.id} onClick={() => { scrollToSection(item.id); setMenuOpen(false) }} className="font-medium text-left text-sm" style={{ color: isDarkMode ? '#e0e0e0' : '#475569' }}>
                                {item.name}
                            </button>
                        ))}
                    </motion.div>
                )}
            </motion.nav>

            {/* Main */}
            <main className="max-w-7xl mx-auto py-12 px-0 space-y-9">

                {/* HERO SECTION */}
                <section id="home" className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-1 items-center py-12 px-4">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center md:justify-center order-1 md:order-1"
                    >
                        <motion.img
                            src={profilePic}
                            alt="Profile"
                            className="w-58 h-58 sm:w-84 sm:h-84 md:w-82 md:h-82 rounded-full object-cover shadow-2xl border-4"
                            style={{ borderColor: 'rgb(63, 63, 63)', backgroundColor: '#333' }}
                            whileHover={{ scale: 1.05, rotate: 3 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        />
                    </motion.div>

                    <motion.div 
                        i// ... (Previous code ends here)
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-4 md:space-y-6 text-center md:text-left order-2 md:order-2"
                    >
                        <motion.h1 
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold"
                            style={styles.heading}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <TypingText text="Hello there!  " />
                        </motion.h1>

                        <motion.p 
                            className="text-base sm:text-lg md:text-xl leading-relaxed opacity-90"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.9 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            I’m <span className="font-semibold text-blue-500">John Erwin Albos</span>, <br />
                            <TypingText text="a passionate Software Developer specializing in Web, Mobile, Game Development and IoT Systems." speed={50} />
                        </motion.p>

                        <motion.div 
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start pt-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                        >
                            <motion.a
                                href={resumePdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 !text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition text-sm sm:text-base"
                                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Resume
                            </motion.a>
 
                            <motion.button
                                onClick={() => scrollToSection('category')}
                                className="px-6 py-2 rounded-full border border-gray-500 hover:bg-gray-100 transition text-sm sm:text-base text-black"
                                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Projects →
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </section>
 

                {/* ABOUT ME SECTION */}
                <motion.section 
                    id="about" 
                    className="py-20 rounded-2xl mx-4" 
                    style={styles.shaded}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                >
                    <motion.div className="max-w-5xl mx-auto px-6 text-center md:text-left space-y-6">
                        <motion.h2 className="text-3xl md:text-4xl font-bold" style={styles.heading} variants={fadeInUp}>
                            About Me
                        </motion.h2>
                        <motion.p className="text-lg leading-relaxed opacity-80" variants={fadeInUp}>
                            I am a passionate and results-driven Software Developer with experience in building web, mobile, and IoT-based systems. I enjoy turning complex problems into simple, intuitive, and efficient solutions.
                        </motion.p> 
                        <motion.p className="text-lg leading-relaxed opacity-80" variants={fadeInUp}>
                            Throughout my journey, I have developed multiple projects for businesses, offices, and award-winning projects across academic and organizational platforms, focusing on real-world impact such as automation, smart systems, and user-centered applications.
                        </motion.p>
                        <motion.p className="text-lg leading-relaxed opacity-80" variants={fadeInUp}>
                            I specialize in modern technologies like React, Laravel, Kotlin, Firebase, and IoT integrations. I am constantly exploring new tools and frameworks to improve my craft and deliver high-quality digital experiences.
                        </motion.p>
                    </motion.div>
                </motion.section>
                  

                {/* FEATURED PROJECTS */}
                <section id="featured" className="py-20">
                    <motion.div 
                        className="max-w-7xl mx-auto px-6 md:px-20 py-10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer}
                    >
                        <motion.h2 className="text-4xl font-extrabold mb-12 text-center" style={styles.heading} variants={fadeInUp}>
                            Featured Projects
                        </motion.h2> 

                        <motion.p className='mb-15 text-lg opacity-80' variants={fadeInUp}>
                            Below are some of my projects from academic, commissioned, and personal work. These showcase my skills in developing practical, scalable, and user-centered solutions.
                        </motion.p>
                        
                        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
                            {projects.map((project, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={scaleIn}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className="rounded-1xl shadow-lg overflow-hidden"
                                    style={styles.card}
                                >
                                    <div className="project_container overflow-hidden">
                                        <motion.img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-48 object-cover"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.3 }}
                                        /> 
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                                        <p className="opacity-80 mb-4 text-sm">{project.description}</p>
                                        <motion.div whileHover={{ x: 5 }}>
                                            <Link to={project.link} className="text-blue-500 font-semibold hover:underline">
                                                View Project →
                                            </Link>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div 
                            className="flex justify-center mt-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link to="/projects" className="px-8 py-3 bg-blue-600 !text-white font-semibold rounded-full shadow hover:bg-blue-700 transition">
                                    View More Projects
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </section>

                    
                {/* CATEGORY SECTION */}
                <section id="category" className="py-26 rounded-2xl mx-4" style={styles.shaded}>
                    <motion.div 
                        className="max-w-7xl mx-auto px-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.h2 className="text-5xl md:text-6xl font-extrabold mb-12 text-center" style={styles.heading} variants={fadeInUp}>
                            Category
                        </motion.h2>

                        <motion.p className="text-lg md:text-xl mb-16 text-center opacity-80 max-w-3xl mx-auto" variants={fadeInUp}>
                            Below are the categories of some of my projects from academic, commissioned, and personal work.
                        </motion.p>

                        <div className="relative w-full max-w-3xl mx-auto">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40, scale: 0.97 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -40, scale: 0.97 }}
                                    transition={{ duration: 0.5 }}
                                    className="rounded-2xl shadow-xl overflow-hidden cursor-pointer"
                                    style={styles.card}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <motion.img
                                        src={categories[index].image}
                                        alt={categories[index].title}
                                        className="w-full h-64 md:h-80 object-cover"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    
                                    <div className="p-6 text-center">
                                        <h3 className="text-xl md:text-2xl font-bold mb-3">{categories[index].title}</h3>
                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                            <Link to={categories[index].link} className="inline-block px-6 py-2 mt-5 bg-blue-600 !text-white rounded-full font-semibold hover:bg-blue-700 transition">
                                                View More →
                                            </Link>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Controls */}
                            <motion.button
                                onClick={prev}
                                className="absolute left-[-30px] md:left-[-50px] top-1/2 -translate-y-1/2 shadow-lg p-3 md:p-4 rounded-full"
                                style={{ backgroundColor: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#333' }}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label="Previous category"
                            >
                                ◀
                            </motion.button>

                            <motion.button
                                onClick={next}
                                className="absolute right-[-30px] md:right-[-50px] top-1/2 -translate-y-1/2 shadow-lg p-3 md:p-4 rounded-full"
                                style={{ backgroundColor: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#333' }}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label="Next category"
                            >
                                ▶
                            </motion.button>
                        </div>
                    </motion.div>
                </section>
 
 
                {/* SKILLS SECTION */}
                <section id="skills" className="py-25">
                    <motion.div 
                        className="max-w-7xl mx-auto px-6 md:px-15"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.h2 className="text-4xl font-extrabold mb-12 text-center" style={styles.heading} variants={fadeInUp}>
                            Skills
                        </motion.h2>

                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {/* Frontend */}
                            
                            {/* Programming Languages */}
                            <motion.div 
                                className="p-6 rounded-1xl shadow-lg" 
                                style={styles.card}
                                whileHover={{ y: -10, scale: 1.02 }}
                                variants={scaleIn}
                            >
                                <h3 className="text-xl font-bold mb-4">Programming Languages</h3>
                                <ul className="space-y-2 opacity-80">
                                    <li>Python, Java, JavaScript</li>
                                    <li>C#, C++, VB.NET, PHP</li>
                                </ul>
                            </motion.div>
                            
                            <motion.div 
                                className="p-6 rounded-1xl shadow-lg" 
                                style={styles.card}
                                whileHover={{ y: -10, scale: 1.02 }}
                                variants={scaleIn}
                            >
                                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                                <ul className="space-y-2 opacity-80">
                                    <li>HTML, CSS, JavaScript</li>
                                    <li>React + Vite, Tailwind, Bootstrap</li>
                                </ul>
                            </motion.div>

                            {/* Backend */}
                            <motion.div 
                                className="p-6 rounded-1xl shadow-lg" 
                                style={styles.card}
                                whileHover={{ y: -10, scale: 1.02 }}
                                variants={scaleIn}
                            >
                                <h3 className="text-xl font-bold mb-4">Backend</h3>
                                <ul className="space-y-2 opacity-80">
                                    <li>Node.js, Laravel, Django</li>
                                    <li>REST APIs, JavaScript, TypeScript</li>
                                </ul>
                            </motion.div> 

                            {/* Databases */}
                            <motion.div 
                                className="p-6 rounded-1xl shadow-lg" 
                                style={styles.card}
                                whileHover={{ y: -10, scale: 1.02 }}
                                variants={scaleIn}
                            >
                                <h3 className="text-xl font-bold mb-4">Databases</h3>
                                <ul className="space-y-2 opacity-80">
                                    <li>MySQL, SQLite, Firebase</li>
                                </ul>
                            </motion.div>

                            {/* Game & 3D */}
                            <motion.div 
                                className="p-6 rounded-1xl shadow-lg" 
                                style={styles.card}
                                whileHover={{ y: -10, scale: 1.02 }}
                                variants={scaleIn}
                            >
                                <h3 className="text-xl font-bold mb-4">Game & 3D</h3>
                                <ul className="space-y-2 opacity-80">
                                    <li>Unity, Blender</li>
                                </ul>
                            </motion.div>

                            {/* Tools */}
                            <motion.div 
                                className="p-6 rounded-1xl shadow-lg" 
                                style={styles.card}
                                whileHover={{ y: -10, scale: 1.02 }}
                                variants={scaleIn}
                            >
                                <h3 className="text-xl font-bold mb-4">Tools</h3>
                                <ul className="space-y-2 opacity-80">
                                    <li>Git, GitHub, VS Code</li>
                                    <li>Android Studio, Figma</li>
                                </ul>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>
 

                {/* CONTACT SECTION */} 
                <motion.section 
                    id="contact" 
                    className="py-20 rounded-2xl mx-4" 
                    style={styles.shaded}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.div className="max-w-5xl mx-auto px-6 text-center" variants={fadeInUp}>
                        <h2 className="text-4xl font-extrabold mb-8" style={styles.heading}>
                            Contact Me
                        </h2>
                        <p className="text-lg opacity-80 mb-8">
                            Interested in working together or have a question? Reach out via email or social media.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <motion.a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=johnerwinalbos@gmail.com&su=Portfolio%20Inquiry&body=Hello%20John%2C%0A%0AI%20would%20like%20to%20discuss..."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-blue-600 !text-white rounded-full shadow hover:bg-blue-700 transition"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                >
                                <FaEnvelope /> Email Me
                                </motion.a>
                            <motion.a
                                href="https://github.com/riyuwin"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 border border-gray-500 rounded-full hover:bg-gray-800 transition"
                                style={{ color: isDarkMode ? '#e0e0e0' : '#475569' }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaGithub /> GitHub
                            </motion.a>
                            <motion.a
                                href="https://linkedin.com/in/yourlinkedin"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 border border-gray-500 rounded-full hover:bg-gray-800 transition"
                                style={{ color: isDarkMode ? '#e0e0e0' : '#475569' }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaLinkedin /> LinkedIn
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.section>

                <footer className="text-center opacity-60 pt-10 pb-5">
                    © 2026 John Erwin Albos
                </footer>

            </main>
        </div>
    )
}