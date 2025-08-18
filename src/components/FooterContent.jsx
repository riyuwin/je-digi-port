export default function FooterContent() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20 w-full">
      <div className="w-full px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              alt="Logo"
              className="h-6 w-auto mr-2"
            />
            <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} John Erwin S. Albos</p>
          </div>

          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-black transition">
              GitHub
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-black transition">
              LinkedIn
            </a>
            <a href="mailto:youremail@example.com" className="text-sm text-gray-600 hover:text-black transition">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
