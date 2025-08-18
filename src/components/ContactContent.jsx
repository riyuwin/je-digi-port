'use client'

import NavBarContent from './NavBarContent'

function ContactContent() {
    return (
        <>
            <NavBarContent />

            {/* Contact Details Section */}
            <div className="background_container mt-10 bg-white w-full px-4 sm:px-8 lg:px-20">
                <div className="grid_container grid grid-cols-1 gap-8 px-2 py-12 items-center max-w-3xl mx-auto">
                    <div className="fade_up_anim relative w-full">
                        <div className="flex flex-col items-center text-center space-y-6 text-lg text-gray-800">
                            <h5 className="text-5xl font-bold text-gray-900">Contacts</h5>
                            <p className="mt-2 mb-10 text-base text-gray-600">
                                You can reach me through the contact details below.
                            </p>
                            {/* <div>
                                <span className="font-semibold text-gray-700">Name:</span> John Erwin S. Albos
                            </div> */}
                            <div>
                                <span className="font-semibold text-gray-700">Phone:</span> 0994-344-1429
                            </div>
                            <div>
                                <span className="font-semibold text-gray-700">Email:</span> johnerwinalbos@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactContent;
