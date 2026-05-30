'use client'

import React, { useState, useEffect, useRef } from 'react'
import profilePic from '/img/formal_pic.JPG'
import { Link } from 'react-router-dom'  
import { motion, AnimatePresence } from 'framer-motion'


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
  }, [index, isDeleting, text])

  return <span>{displayed}</span>
}

export default function MainContent() {
    const [menuOpen, setMenuOpen] = useState(false)
    const canvasRef = useRef(null)

    const [index, setIndex] = useState(0)
    const categories = [
        {
            title: 'Web Applications',
            image: '/img/web_app_bg.png',
            link: '/web_dev'
        },
        {
            title: 'Mobile Applications',
            image: '/img/mob_app_bg.png',
            link: '/mob_app'
        },
        {
            title: 'Graphic Designs',
            image: '/img/graphic_design_bg.png',
            link: '/graphic'
        },
        {
            title: 'IoT Projects',
            image: '/img/iot_bg.png',
            link: '/iot'
        }
    ]

    const next = () => setIndex((prev) => (prev + 1) % categories.length)
    const prev = () => setIndex((prev) => (prev - 1 + categories.length) % categories.length) 

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        let width = canvas.width = window.innerWidth
        let height = canvas.height = window.innerHeight

        const particles = Array.from({ length: 70 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        }))

        const mouse = { x: null, y: null }

        const handleMouseMove = (e) => {
        mouse.x = e.clientX
        mouse.y = e.clientY
        }

        const handleResize = () => {
        width = canvas.width = window.innerWidth
        height = canvas.height = window.innerHeight
        }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('resize', handleResize)

        const animate = () => {
        ctx.clearRect(0, 0, width, height)

        particles.forEach(p => {
            p.x += p.vx
            p.y += p.vy

            if (p.x < 0 || p.x > width) p.vx *= -1
            if (p.y < 0 || p.y > height) p.vy *= -1

            if (mouse.x && mouse.y) {
            const dx = mouse.x - p.x
            const dy = mouse.y - p.y
            const dist = Math.sqrt(dx * dx + dy * dy)

            if (dist < 120) {
                p.vx -= dx * 0.0004
                p.vy -= dy * 0.0004
            }
            }

            ctx.beginPath()
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
            ctx.fillStyle = 'rgba(59,130,246,0.6)'
            ctx.fill()
        })

        requestAnimationFrame(animate)
        }

        animate()

        return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('resize', handleResize)
        }
    }, [])


    const projects = [
    {
        title: 'RAPID: Real-Time Ambulance Patient Information Dissemination',
        description: 'RAPID is an application for the immediate transmission of ambulance-to-hospital patient data and incident reports. The system allows ambulance responders to register a patient’s status or information even while en route to the hospital.  ',
        image: '/img/rapid_bg1.png',
        link: '/web_dev#rapid'
    },
    {
        title: 'SOLVIA',
        description: 'A web and mobile-based computational system designed to model and calculate crop damage in flood-affected farmland. The platform is built for farmers, Municipal Agriculture Offices (MAO), and Provincial Agriculture Offices (PAO), providing data-driven insights for better decision-making. It was developed using React, JavaScript, Java, and Firebase.',
        image: '/img/solvia_bg1.png',
        link: '/web_dev#solvia'
    },
    {
        title: 'HRAssist: Human Resource Management Information System',
        description: 'The Human Resource Management Information System (HRMIS) is one of my best projects, implemented at the LGU of San Vicente, Camarines Norte. The system focuses on the four pillars of human resources and supports different user levels, including HR personnel, employees, and applicants.  ',
        image: '/img/hrmis_bg2.png', 
        link: '/web_dev#hrmis'
    },
    {
        title: 'Marahuyo: A Booking Web Application for Museum Tour',
        description: 'A commissioned web application offering package tours for museum visits. The platform was published and developed using PHP, HTML, CSS, and JavaScript, with a MySql as a database.',
        image: '/img/marahuyo_bg1.png',
        link: '/web_dev#marahuyo'
    },
    {
        title: 'Jeepney Dash',
        description: 'Jeepney Dash is a commissioned 3D mobile game that showcases traditional jeepneys in an urban city setting. The game features multiple quest levels, an endless driving mode, and dynamic day and night environments. It was developed using C#, Unity, and Blender.',
        image: '/img/jeepney_bg1.png',
        link: '/mob_app#jeepney'
    },
    {
        title: 'E-Tap: CNSC One Tap Emergency App',
        description: 'E-Tap was designed as a one-tap emergency system that instantly alerts authorities in real time. The platform supports cross-user functionality, enabling seamless communication between students and campus personnel. It was developed using Kotlin and Firebase.',
        image: '/img/etap_bg1.png',
        link: '/mob_app#etap'
    }
    ]


    /*  */

    useEffect(() => {
        const canvas = canvasRef.current
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

        const handleMouseMove = (e) => {
            mouse.x = e.clientX
            mouse.y = e.clientY
        }

        const handleResize = () => {
            width = canvas.width = window.innerWidth
            height = canvas.height = window.innerHeight
        }

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
                ctx.strokeStyle = `rgba(59,130,246,${1 - dist / 120})`
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
            // Movement
            p.x += p.vx
            p.y += p.vy

            // Bounce
            if (p.x < 0 || p.x > width) p.vx *= -1
            if (p.y < 0 || p.y > height) p.vy *= -1

            // Smooth attraction to mouse
            if (mouse.x && mouse.y) {
                const dx = mouse.x - p.x
                const dy = mouse.y - p.y
                const dist = Math.sqrt(dx * dx + dy * dy)

                if (dist < 150) {
                p.vx += dx * 0.0002
                p.vy += dy * 0.0002
                }
            }

            // Draw particle (glow effect)
            const gradient = ctx.createRadialGradient(
                p.x, p.y, 0,
                p.x, p.y, p.size * 4
            )
            gradient.addColorStop(0, 'rgba(59,130,246,0.9)')
            gradient.addColorStop(1, 'rgba(59,130,246,0)')

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
        }, [])


    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        let width = canvas.width = window.innerWidth
        let height = canvas.height = window.innerHeight

        const particles = Array.from({ length: 120 }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 2 + 1,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
        }))

        const mouse = { x: null, y: null }

        const handleMouseMove = (e) => {
            mouse.x = e.clientX
            mouse.y = e.clientY
        }

        const handleResize = () => {
            width = canvas.width = window.innerWidth
            height = canvas.height = window.innerHeight
        }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('resize', handleResize)

        const drawLines = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x
                    const dy = particles[i].y - particles[j].y
                    const dist = Math.sqrt(dx * dx + dy * dy)

                    if (dist < 110) {
                        ctx.beginPath()
                        ctx.strokeStyle = `rgba(99,102,241,${1 - dist / 110})`
                        ctx.lineWidth = 0.6
                        ctx.moveTo(particles[i].x, particles[i].y)
                        ctx.lineTo(particles[j].x, particles[j].y)
                        ctx.stroke()
                    }
                }
            }
        }

        const animate = () => {
            // Gradient background (animated feel)
            const gradient = ctx.createLinearGradient(0, 0, width, height)
            gradient.addColorStop(0, '#0f172a') // dark blue
            gradient.addColorStop(1, '#1e293b') // darker

            ctx.fillStyle = gradient
            ctx.fillRect(0, 0, width, height)

            particles.forEach(p => {
                p.x += p.vx
                p.y += p.vy

                if (p.x < 0 || p.x > width) p.vx *= -1
                if (p.y < 0 || p.y > height) p.vy *= -1

                // Mouse interaction (magnetic feel)
                if (mouse.x && mouse.y) {
                    const dx = mouse.x - p.x
                    const dy = mouse.y - p.y
                    const dist = Math.sqrt(dx * dx + dy * dy)

                    if (dist < 150) {
                        p.vx += dx * 0.00015
                        p.vy += dy * 0.00015
                    }
                }

                // Glow effect
                const glow = ctx.createRadialGradient(
                    p.x, p.y, 0,
                    p.x, p.y, p.size * 6
                )
                glow.addColorStop(0, 'rgba(99,102,241,0.9)')
                glow.addColorStop(1, 'rgba(99,102,241,0)')

                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fillStyle = glow
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
    }, [])

    return (
         
        <div className="body_container min-h-screen font-sans relative overflow-hidden bg-[#0f172a]"> 
            {/* Background particles */}
            <canvas ref={canvasRef} className="fixed inset-0 -z-10 pointer-events-none" />

            {/* Navbar */}
            <nav className="topNav sticky top-8 z-50 mx-16 backdrop-blur-xl bg-white/70 border border-gray-200 shadow-md rounded-2xl">

                <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">

                    {/* Logo */}
                    <div className="jan_name_text text-xl font-bold text-blue-600">
                        John Erwin
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-6">
                        {[
                            { name: 'About', id: 'about' },
                            { name: 'Projects', id: 'featured' },   
                            { name: 'Category', id: 'category' },
                            { name: 'Skills', id: 'skills' },
                            { name: 'Contact', id: 'contact' }
                            ].map(item => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className="text-gray-700 font-medium hover:text-blue-600 transition"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Button */}
                    <button
                    className="md:hidden flex flex-col gap-1"
                    onClick={() => setMenuOpen(!menuOpen)}
                    >
                    <span className="w-6 h-0.5 bg-gray-800"></span>
                    <span className="w-6 h-0.5 bg-gray-800"></span>
                    <span className="w-6 h-0.5 bg-gray-800"></span>
                    </button>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden px-6 pb-4 flex flex-col gap-3 animate-fadeIn">
                        {[
                        { name: 'About', id: 'about' }, 
                        { name: 'Projects', id: 'featured' },
                        { name: 'Category', id: 'category' },
                        { name: 'Skills', id: 'skills' },
                        { name: 'Contact', id: 'contact' }
                        ].map(item => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className="text-gray-700 font-medium hover:text-blue-600 transition"
                        >
                            {item.name}
                        </a>
                        ))}
                    </div>
                )}
            </nav>

            {/* Main */}
            <main className="max-w-7xl mx-auto py-12 px-0 space-y-9">

                {/* HERO SECTION */}
                <section id="home" className="main_container about_container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-12">

                    {/* Image */}
                    <div className="main_container flex justify-center md:justify-center">
                        <img
                        src={profilePic}
                        alt="Profile"
                        className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full object-cover shadow-2xl border-4 border-white"
                        />
                    </div>

                    {/* Text */}
                    <div className="main_container space-y-4 md:space-y-6 text-center md:text-left px-4 md:px-0">

                        {/* Heading */}
                        <h1 className="heading1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-gray-800">
                        <TypingText text="Hello there! 👋" />
                        </h1>

                        {/* Intro Text */}
                        <p className="heading2 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                        I’m <span className="font-semibold text-blue-600">John Erwin Albos</span>, <br />
                        <TypingText text="a passionate Software Developer specializing in Web, Mobile, Game Development and IoT Systems." speed={50} />
                        </p>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {['Python', 'Java', 'C#', 'Kotlin', 'React', 'Laravel', 'Django', 'Unity', 'Nodejs', 'MySql', 'Firebase', 'IoT'].map(skill => (
                            <span
                            key={skill}
                            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm md:text-sm font-medium"
                            >
                            {skill}
                            </span>
                        ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start pt-4">
                        {/* <Link
                            to="/resume"
                            className="resume_btn bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition text-sm sm:text-base"
                        >
                            Resume
                        </Link> */}

                        <a
                            href="/file/Albos_John_Erwin_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="resume_btn bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition text-sm sm:text-base"
                            >
                            Resume
                        </a>

                        {/* <Link
                            to="/projects"
                            className="px-6 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition text-sm sm:text-base text-gray-700"
                        >
                            Projects →
                        </Link> */}
                        <a
                        href="#category"
                        className="px-6 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition text-sm sm:text-base text-gray-700"
                        >
                        Projects →
                        </a>

                        </div>

                    </div>
                </section>
 

                {/* ABOUT ME SECTION */}
                <section id="about" className="shaded_container py-35">

                    <div className="max-w-5xl mx-auto px-6 text-center md:text-left space-y-6">

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        About Me
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed">
                        I am a passionate and results-driven Software Developer with experience in building
                        web, mobile, and IoT-based systems. I enjoy turning complex problems into simple,
                        intuitive, and efficient solutions.
                        </p> 

                        <p className="text-lg text-gray-600 leading-relaxed">
                        Throughout my journey, I have developed multiple projects for businesses, offices, and award-winning projects across academic and 
                        organizational platforms, focusing on real-world impact such as
                        automation, smart systems, and user-centered applications.
                        </p>

                        <p className="text-lg text-gray-600 leading-relaxed">
                        I specialize in modern technologies like React, Laravel, Kotlin, Firebase, and IoT integrations.
                        I am constantly exploring new tools and frameworks to improve my craft and deliver
                        high-quality digital experiences.
                        </p>

                    </div>

                </section>
                  

                    {/* AI Tools */}
                    <section id="featured" className=" py-20 ">
                        <div className=" max-w-7xl mx-auto px-20 py-10 ">
                            <h2 className="text-4xl font-extrabold mb-12 text-gray-900 text-center">
                                Featured Projects
                            </h2> 

                            <p className='mb-15'>
                            Below are some of my projects from academic, commissioned, and personal work. 
                            These showcase my skills in developing practical, scalable, and user-centered solutions.
                            </p>
                            
                            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
                            {projects.map((project, idx) => (
                                <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white rounded-1xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1 hover:scale-105 duration-300"
                                >
                                <div className="project_container">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover project_container_img"
                                    /> 
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                                    <p className="text-gray-600 mb-4">{project.description}</p>
                                    <Link
                                    to={project.link}
                                    className="text-blue-600 font-semibold hover:underline"
                                    >
                                    View Project →
                                    </Link>
                                </div>
                                </motion.div>
                            ))}
                            </div>

                            <div className="flex justify-center mt-12">
                            <Link
                                to="/projects"
                                className="resume_btn px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition"
                            >
                                View More Projects
                            </Link>
                            </div>
                        </div>
                    </section>

                    
                    {/* AI Tools */}
                    <section id="category" className="shaded_container py-26  ">
                        <div className=" max-w-7xl mx-auto px-6">
                            <h2 className="text-5xl md:text-6xl font-extrabold mb-12 text-gray-900 text-center">
                            Category
                            </h2>

                            <p className="text-lg md:text-xl mb-16 text-center text-gray-600 max-w-3xl mx-auto">
                            Below are the categories of some of my projects from academic, commissioned, and personal work.
                            </p>

                            <div className="relative w-full max-w-3xl mx-auto">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 40, scale: 0.97 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -40, scale: 0.97 }}
                                        transition={{ duration: 0.5 }}
                                        className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-500 cursor-pointer"
                                        >
                                        <img
                                            src={categories[index].image}
                                            alt={categories[index].title}
                                            className="w-full h-64 md:h-80 object-cover"
                                        />
                                        
                                        <div className="p-6 text-center">
                                            <h3 className="text-xl md:text-2xl font-bold mb-3">{categories[index].title}</h3>
                                            {/* <Link
                                            href={categories[index].link}
                                            className="resume_btn inline-block px-6 py-2 mt-5 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
                                            >
                                            View More →
                                            <Link> */}

                                            <Link
                                                to={categories[index].link}
                                                className="resume_btn inline-block px-6 py-2 mt-5 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
                                                >
                                            View More →
                                            </Link>
                                        </div>
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* Controls */}
                                    <button
                                        onClick={prev}
                                        className="absolute left-[-30px] md:left-[-50px] top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 md:p-4 rounded-full hover:scale-110 transition-transform duration-300"
                                    >
                                        ◀
                                    </button>

                                    <button
                                        onClick={next}
                                        className="absolute right-[-30px] md:right-[-50px] top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 md:p-4 rounded-full hover:scale-110 transition-transform duration-300"
                                    >
                                        ▶
                                    </button>
                                    </div>
                        </div>
                    </section>
 
 
                    {/* SKILLS */}
                    <section id="skills" className="py-25  ">
                        <div className="main_container max-w-7xl mx-auto px-15">
                            <h2 className="text-4xl font-extrabold mb-12 text-gray-900 text-center">
                            Skills
                            </h2>

                            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {/* Frontend */}
                            <div className="skill_container bg-white-900 text-black p-6 rounded-1xl shadow-lg hover:shadow-1xl transition transform hover:-translate-y-1 hover:scale-105 duration-300">
                                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                                <ul className="space-y-2 text-black-900">
                                <li>HTML, CSS, JavaScript</li>
                                <li>React + Vite, Tailwind, Flutter, Bootstrap</li>
                                </ul>
                            </div>

                            {/* Backend */}
                            <div className="skill_container bg-white-900 text-black p-6 rounded-1xl shadow-lg hover:shadow-1xl transition transform hover:-translate-y-1 hover:scale-105 duration-300">
                                <h3 className="text-xl font-bold mb-4">Backend</h3>
                                <ul className="space-y-2 text-black-900">
                                <li>Node.js, Laravel, Django</li>
                                <li>REST APIs, JavaScript, TypeScript</li>
                                </ul>
                            </div>

                            {/* Programming Languages */}
                            <div className="skill_container bg-white-900 text-black p-6 rounded-1xl shadow-lg hover:shadow-1xl transition transform hover:-translate-y-1 hover:scale-105 duration-300">
                                <h3 className="text-xl font-bold mb-4">Programming Languages</h3>
                                <ul className="space-y-2 text-black-900">
                                <li>Python, Java, JavaScript</li>
                                <li>C#, C++, VB.NET, PHP</li>
                                </ul>
                            </div>

                            {/* Databases */}
                            <div className="skill_container bg-white-900 text-black p-6 rounded-1xl shadow-lg hover:shadow-1xl transition transform hover:-translate-y-1 hover:scale-105 duration-300">
                                <h3 className="text-xl font-bold mb-4">Databases</h3>
                                <ul className="space-y-2 text-black-900">
                                <li>MySQL, SQLite, Firebase</li>
                                </ul>
                            </div>

                            {/* Game & 3D */}
                            <div className="skill_container bg-white-900 text-black p-6 rounded-1xl shadow-lg hover:shadow-1xl transition transform hover:-translate-y-1 hover:scale-105 duration-300">
                                <h3 className="text-xl font-bold mb-4">Game & 3D</h3>
                                <ul className="space-y-2 text-black-900">
                                <li>Unity, Autodesk 3ds Max, Blender</li>
                                </ul>
                            </div>

                            {/* Tools */}
                            <div className="skill_container bg-white-900 text-black p-6 rounded-1xl shadow-lg hover:shadow-1xl transition transform hover:-translate-y-1 hover:scale-105 duration-300">
                                <h3 className="text-xl font-bold mb-4">Tools</h3>
                                <ul className="space-y-2 text-black-900">
                                <li>Git, GitHub, VS Code</li>
                                <li>Android Studio, Figma, Adobe Products</li>
                                </ul>
                            </div>

                            {/* AI Tools */}
                            <div className="skill_container bg-white-900 text-black p-6 rounded-1xl shadow-lg hover:shadow-1xl transition transform hover:-translate-y-1 hover:scale-105 duration-300 col-span-full md:col-span-3">
                                <h3 className="text-xl font-bold mb-4">AI Tools</h3>
                                <ul className="space-y-2 text-black-900">
                                <li>OpenAI API (basic integration)</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </section> 
 

                    {/* CONTACT SECTION */} 
                    <section id="contact" className="shaded_container py-20 ">
                        <div className=" max-w-5xl mx-auto px-6 text-center">
                            <h2 className="text-4xl font-extrabold mb-8 text-gray-900">
                            Contact Me
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                            Interested in working together or have a question? Reach out via email or social media.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a
                                href="mailto:johnerwinalbos@gmail.com"
                                className="resume_btn px-6 py-3  text-white rounded-full shadow hover:bg-blue-700 transition"
                            >
                                Email Me
                            </a>
                            <a
                                href="https://github.com/riyuwin"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-100 transition"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://linkedin.com/in/yourlinkedin"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-100 transition"
                            >
                                LinkedIn
                            </a>
                            </div>
                        </div>
                    </section>

                <footer className="text-center text-gray-500 pt-10">
                © 2026 John Erwin Albos
                </footer>

            </main>
        </div>
    )
}