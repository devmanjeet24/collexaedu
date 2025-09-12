import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/Images/logo.webp'
import React from 'react'

const Header = () => {
  return (
    <>
    
     <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-secondary shadow-sm transition-all opacity-[0.9]">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src={logo} 
            alt="Collexa Edu"
            className=""
            width={140}
            height={140}
          />
        
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-blue-900">
          <Link className="px-3 py-1 rounded-md hover:bg-gray-100 hover:text-[#18bba6] transition-colors duration-300 underline" href="#">Explore Programs</Link>
          <Link className="px-3 py-1 rounded-md hover:bg-gray-100 hover:text-[#18bba6] transition-colors duration-300 underline" href="#">Top Universities</Link>
          <Link className="px-3 py-1 rounded-md hover:bg-gray-100 hover:text-[#18bba6] transition-colors duration-300 underline" href="#">Tools</Link>
          <Link className="px-3 py-1 rounded-md hover:bg-gray-100 hover:text-[#18bba6] transition-colors duration-300 underline" href="#">About</Link>
        </nav>

        {/* suggest Button */}
        <div>
          <button className="px-4 py-2 rounded-full bg-gradient-to-r from-teal-400 to-yellow-300 font-medium text-sm shadow-md hover:opacity-90 transition hover:text-[#18bba6]">
            <span className="hidden sm:inline-block mr-[8px]">✨</span>
            Suggest in 2 mins
          </button>
        </div>
      </div>
    </header>
    
    </>
  )
}

export default Header