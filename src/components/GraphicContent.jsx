'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import NavBarContent from './NavBarContent'
import FooterContent from './FooterContent'

function GraphicContent() {
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
                                    Graphic Designs
                                </h5>

                            </div>

                            <p className="mt-8 text-base text-gray-600">
                                In this section, the documentation of my graphic design will be showcased. I accept commission projects in graphic design, including 2D, 3D, and poster design. I create these using Adobe Photoshop, Illustrator, Blender, and 3ds Max.
                            </p>
                        </div>


                    </div>
                </div>




            </div>

            <div className="background_container mt-15 mb-20 bg-white w-full px-4 sm:px-8 lg:px-8">


                <div className="grid_container grid grid-cols-1 md:grid-cols-1 gap-12 px-6 py-12 items-center max-w-7xl mx-auto">

                    <div className="fade_up_anim relative w-full">

                        <div className="max-w-4xl mx-auto text-center md:text-left">

                            <p className="project_title_text mt-2 text-xl text-gray-800">3D Projects</p>

                            <p className="mt-10 text-base text-gray-900">
                                These are the 3D project that I developed. It was a commissioned 3D design for research project and the 3D designs were developed using blender and 3ds Max.
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto text-center md:text-center">

                            <p className="project_title_text mt-20 text-xl text-gray-800">3D House Rendered</p>
 
                        </div>

                        <div className="mt-10 projects_container bg-gray-100 flex flex-row justify-center items-center gap-20 p-4 flex-wrap">
                            <div>
                                <a href="/img/house_4.jpg" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="web_images mt-10 w-110 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                        src="/img/house_4.jpg"
                                        alt="Rapid 1"
                                    />
                                </a>

                                <p className="project_title_image_text mt-5 mb-0 text-base text-gray-900">
                                    Outside
                                </p>
                            </div>

                             <div>
                                <a href="/img/house_2.jpg" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="web_images mt-10   w-110 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                        src="/img/house_2.jpg"
                                        alt="Rapid 1"
                                    />
                                </a>

                                <p className="project_title_image_text mt-5 mb-0 text-base text-gray-900">
                                    Bedroom
                                </p>
                            </div>

                             <div>
                                <a href="/img/house_5.jpg" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="web_images mt-0   w-110 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                        src="/img/house_5.jpg"
                                        alt="Rapid 1"
                                    />
                                </a>

                                <p className="project_title_image_text mt-5 mb-10 text-base text-gray-900">
                                    Living Room
                                </p>
                            </div>
                            
                             <div>
                                <a href="/img/house_7.jpg" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="web_images mt-0   w-110 shadow-lg object-cover cursor-pointer transform transition-transform duration-200 hover:scale-105 "
                                        src="/img/house_7.jpg"
                                        alt="Rapid 1"
                                    />
                                </a>

                                <p className="project_title_image_text mt-5 mb-10 text-base text-gray-900">
                                    Restroom
                                </p>
                            </div>
                        </div>

                        <div className="max-w-4xl mt-10 mx-auto text-center md:text-center"> 
                            <p className="project_title_text mt-2 text-l text-gray-700">Rice Miller</p> 
                        </div> 

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-5 p-4 justify-items-center">
                            {/* Item 1 */}
                            <div className="projects_container flex flex-col items-center text-center">
                                <a href="/img/milling_1.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="arduino_images mt-4 w-150  mt-10 mb-10 object-cover shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105"
                                        src="/img/milling_1.png"
                                        alt="Gloves 1"
                                    />
                                </a>
                            </div>

                            {/* Item 2 */}
                            <div className="projects_container flex flex-col items-center text-center">
                                <a href="/img/milling_2.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="arduino_images mt-4 w-150  mt-10 mb-10 object-cover shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105"
                                        src="/img/milling_2.png"
                                        alt="Gloves 2"
                                    />
                                </a>
                            </div>

                            {/* Item 3 */}
                            <div className="projects_container flex flex-col items-center text-center">
                                <a href="/img/milling_3.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="arduino_images mt-4 w-150  mt-10 mb-10 object-cover shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105"
                                        src="/img/milling_3.png"
                                        alt="Gloves 3"
                                    />
                                </a>
                            </div>
                        </div>  
                        
                        <div className="max-w-4xl mt-10 mx-auto text-center md:text-center"> 
                            <p className="project_title_text mt-2 text-l text-gray-700">Tetrapods</p> 
                        </div>  

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-5 p-4 justify-items-center">
                            {/* Item 1 */}
                            <div className="projects_container flex flex-col items-center text-center">
                                <a href="/img/tetrapods3.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="arduino_images mt-4 w-150  mt-10 mb-10 object-cover shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105"
                                        src="/img/tetrapods3.png"
                                        alt="Tetrapods 1"
                                    />
                                </a>
                            </div>

                            {/* Item 2 */}
                            <div className="projects_container flex flex-col items-center text-center">
                                <a href="/img/tetrapods2.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="arduino_images mt-4 w-150  mt-10 mb-10 object-cover shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105"
                                        src="/img/tetrapods2.png"
                                        alt="Tetrapods 2"
                                    />
                                </a>
                            </div>

                            {/* Item 3 */}
                            <div className="projects_container flex flex-col items-center text-center">
                                <a href="/img/tetrapods1.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="arduino_images mt-4 w-150  mt-10 mb-10 object-cover shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105"
                                        src="/img/tetrapods1.png"
                                        alt="Tetrapods 3"
                                    />
                                </a>
                            </div> 
                            {/* Item 4 */}
                            <div className="projects_container flex flex-col items-center text-center">
                                <a href="/img/tetrapods4.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="arduino_images mt-4 w-150  mt-10 mb-10 object-cover shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105"
                                        src="/img/tetrapods4.png"
                                        alt="Tetrapods 3"
                                    />
                                </a>
                            </div>
                        </div>

                        
                        <div className="max-w-4xl mt-10 mx-auto text-center md:text-center"> 
                            <p className="project_title_text mt-2 text-l text-gray-700">Pest Repellant</p> 
                        </div>  

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-5 p-4 justify-items-center">
                            {/* Item 1 */}
                            <div className="projects_container flex flex-col items-center text-center">
                                <a href="/img/pest1.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="arduino_images mt-4 w-150  mt-10 mb-10 object-cover shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105"
                                        src="/img/pest1.png"
                                        alt="Tetrapods 1"
                                    />
                                </a>
                            </div>

                            {/* Item 2 */}
                            <div className="projects_container flex flex-col items-center text-center">
                                <a href="/img/pest2.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="arduino_images mt-4 w-150  mt-10 mb-10 object-cover shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105"
                                        src="/img/pest2.png"
                                        alt="Tetrapods 2"
                                    />
                                </a>
                            </div>

                            {/* Item 3 */}
                            <div className="projects_container flex flex-col items-center text-center">
                                <a href="/img/pest3.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="arduino_images mt-4 w-150  mt-10 mb-10 object-cover shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105"
                                        src="/img/pest3.png"
                                        alt="Tetrapods 3"
                                    />
                                </a>
                            </div> 
                            {/* Item 4 */}
                            <div className="projects_container flex flex-col items-center text-center">
                                <a href="/img/pest4.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="arduino_images mt-4 w-150  mt-10 mb-10 object-cover shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105"
                                        src="/img/pest4.png"
                                        alt="Tetrapods 3"
                                    />
                                </a>
                            </div>
                        </div>

                        <div className="max-w-4xl mt-10 mx-auto text-center md:text-center"> 
                            <p className="project_title_text mt-2 text-l text-gray-700">BeeHive Flow Frames</p> 
                        </div>  

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-5 p-4 justify-items-center">
                            {/* Item 1 */}
                            <div className="projects_container flex flex-col items-center text-center">
                                <a href="/img/FlowFrames2.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="arduino_images mt-4 w-150  mt-10 mb-10 object-cover shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105"
                                        src="/img/FlowFrames2.png"
                                        alt="Tetrapods 1"
                                    />
                                </a>
                            </div>

                            {/* Item 2 */}
                            <div className="projects_container flex flex-col items-center text-center">
                                <a href="/img/Beehive4.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="arduino_images mt-4 w-150  mt-10 mb-10 object-cover shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105"
                                        src="/img/Beehive4.png"
                                        alt="Tetrapods 2"
                                    />
                                </a>
                            </div>

                            {/* Item 3 */}
                            <div className="projects_container flex flex-col items-center text-center">
                                <a href="/img/Beehive2.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="arduino_images mt-4 w-150  mt-10 mb-10 object-cover shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105"
                                        src="/img/Beehive2.png"
                                        alt="Tetrapods 3"
                                    />
                                </a>
                            </div> 
                            {/* Item 4 */}
                            <div className="projects_container flex flex-col items-center text-center">
                                <a href="/img/Beehive11.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="arduino_images mt-4 w-150  mt-10 mb-10 object-cover shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105"
                                        src="/img/Beehive11.png"
                                        alt="Tetrapods 3"
                                    />
                                </a>
                            </div>
                        </div>


                        <div className="max-w-4xl mt-10 mx-auto text-center md:text-center"> 
                            <p className="project_title_text mt-2 text-l text-gray-700">Mangroves Planter</p> 
                        </div>  

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-5 p-4 justify-items-center">
                            {/* Item 1 */}
                            <div className="projects_container flex flex-col items-center text-center">
                                <a href="/img/mangroves1.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="arduino_images mt-4 w-150  mt-10 mb-10 object-cover shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105"
                                        src="/img/mangroves1.png"
                                        alt="Tetrapods 1"
                                    />
                                </a>
                            </div>

                            {/* Item 2 */}
                            <div className="projects_container flex flex-col items-center text-center">
                                <a href="/img/mangroves2.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="arduino_images mt-4 w-150  mt-10 mb-10 object-cover shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105"
                                        src="/img/mangroves2.png"
                                        alt="Tetrapods 2"
                                    />
                                </a>
                            </div>

                            {/* Item 3 */}
                            <div className="projects_container flex flex-col items-center text-center">
                                <a href="/img/mangroves3.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="arduino_images mt-4 w-150  mt-10 mb-10 object-cover shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105"
                                        src="/img/mangroves3.png"
                                        alt="Tetrapods 3"
                                    />
                                </a>
                            </div> 
                            {/* Item 4 */}
                            <div className="projects_container flex flex-col items-center text-center">
                                <a href="/img/mangroves4.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="arduino_images mt-4 w-150  mt-10 mb-10 object-cover shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105"
                                        src="/img/mangroves4.png"
                                        alt="Tetrapods 3"
                                    />
                                </a>
                            </div>
                        </div>

                        <div className="max-w-4xl mt-10 mx-auto text-center md:text-center"> 
                            <p className="project_title_text mt-2 text-l text-gray-700">3D Ship</p> 
                        </div>  

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-5 p-4 justify-items-center">
                            {/* Item 1 */}
                            <div className="projects_container flex flex-col items-center text-center">
                                <a href="/img/ship_1.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="arduino_images mt-4 w-150  mt-10 mb-10 object-cover shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105"
                                        src="/img/ship_1.png"
                                        alt="Gloves 1"
                                    />
                                </a>
                            </div>

                            {/* Item 2 */}
                            <div className="projects_container flex flex-col items-center text-center">
                                <a href="/img/ship_2.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="arduino_images mt-4 w-150  mt-10 mb-10 object-cover shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105"
                                        src="/img/ship_2.png"
                                        alt="Gloves 2"
                                    />
                                </a>
                            </div>

                            {/* Item 3 */}
                            <div className="projects_container flex flex-col items-center text-center">
                                <a href="/img/ship_3.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="arduino_images mt-4 w-150  mt-10 mb-10 object-cover shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105"
                                        src="/img/ship_3.png"
                                        alt="Gloves 3"
                                    />
                                </a>
                            </div>
                        </div>

                        <div className="mt-10 max-w-4xl mx-auto text-center md:text-left">

                            <p className="project_title_text mt-2 text-xl text-gray-800">Posters</p>

                            <p className="mt-10 text-base text-gray-900">
                                I also experienced creating a posters for our documentary and film project which was developed using adobe photoshop and illustrator.
                            </p>
                        </div>

                        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 p-4 justify-items-center">
                            {/* Item 1 */}
                            <div className="flex items-center text-center">
                                <a href="/img/tabi_tabi.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="projects_container mt-4 w-150  mt-10 mb-10 object-cover shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105"
                                        src="/img/tabi_tabi.png"
                                        alt="Gloves 1"
                                    />
                                </a>
                            </div>

                            {/* Item 2 */}
                            <div className="flex items-center text-center">
                                <a href="/img/ningas.png" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="projects_container mt-4 w-150 mt-10 mb-10 object-cover shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105"
                                        src="/img/ningas.png"
                                        alt="Gloves 2"
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

export default GraphicContent;