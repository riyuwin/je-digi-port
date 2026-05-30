'use client'

import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', to: '/' },
  /* { name: 'Resume', to: '/resume' }, */
  { name: 'Projects', to: '/projects' },
  { name: 'Contacts', to: '/contacts' },
]

export default function NavBarContent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const pathname = location.pathname

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">


        
        <nav aria-label="Global" className="topNav flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            {/* <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                src="./img/je_logo_1.png"
                className="h-12 w-auto"
              />
              <h6 className="text-l font-bold text-gray-800">John Erwin S. Albos</h6>

            </Link> */}

            <Link to="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
              <span className="sr-only">Your Company</span>
              {/* <img
                src="./img/je_logo_2.png"
                alt="JE Logo"
                className="h-12 w-auto"
              /> */}
              {/* <h6 className="nav_postion_title_text text-xl font-bold text-gray-1000">JOHN ERWIN</h6> */}
              {/* <h6 className="logo_text text-l font-bold text-gray-1000">JOHN ERWIN S. ALBOS <span className='nav_postion_title_text'>| SOFTWARE DEVELOPER</span></h6> */}
            </Link>


          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => {
              const isActive = pathname === item.to
              return (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`nav_color text-sm font-semibold transition-colors ${isActive ? 'text-black' : 'nav_color text-gray-700 hover:text-black'
                    }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end" />
        </nav>

        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
              <span className="sr-only">Your Company</span>
              {/* <img
                src="./img/je_logo_2.png"
                alt="JE Logo"
                className="h-12 w-auto"
              /> */}
              {/* <h6 className="nav_postion_title_text text-xl font-bold text-gray-1000">JOHN ERWIN</h6> */}
              {/* <h6 className="logo_text text-l font-bold text-gray-1000">JOHN ERWIN S. ALBOS <span className='nav_postion_title_text'>| SOFTWARE DEVELOPER</span></h6> */}
            </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => {
                    const isActive = pathname === item.to
                    return (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold transition-colors ${isActive
                            ? 'text-black bg-gray-100'
                            : 'text-gray-700 hover:text-black hover:bg-gray-50'
                          }`}
                      >
                        {item.name}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  )
}
