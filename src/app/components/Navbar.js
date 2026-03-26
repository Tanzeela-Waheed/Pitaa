'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FiMenu, FiX, FiSearch } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-white sticky top-0 z-50 shadow-2xl border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* Left - Logo */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-3 group">
              {/* Logo Container - No color, sirf scale on hover */}
              <div className="relative">
                <Image 
                  src="/images/pitaalogo.png"  
                  alt="Pitaa Company" 
                  width={180} 
                  height={180}
                  className="rounded-xl object-contain relative transform group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-12">
            <Link href="/" className="group flex flex-col items-center">
              <span className={`font-medium text-base tracking-wide transition-colors duration-200 ${
                isActive('/') ? 'text-white' : 'text-gray-200 group-hover:text-white'
              }`}>
                Home
              </span>
              <span className={`h-0.5 bg-blue-500 transition-all duration-300 ${
                isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            
            <Link href="/about-us" className="group flex flex-col items-center">
              <span className={`font-medium text-base tracking-wide transition-colors duration-200 ${
                isActive('/about-us') ? 'text-white' : 'text-gray-200 group-hover:text-white'
              }`}>
                About
              </span>
              <span className={`h-0.5 bg-blue-500 transition-all duration-300 ${
                isActive('/about-us') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            
            <Link href="/association" className="group flex flex-col items-center">
              <span className={`font-medium text-base tracking-wide transition-colors duration-200 ${
                isActive('/association') ? 'text-white' : 'text-gray-200 group-hover:text-white'
              }`}>
                Association
              </span>
              <span className={`h-0.5 bg-blue-500 transition-all duration-300 ${
                isActive('/association') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            
            <Link href="/join-us" className="group flex flex-col items-center">
              <span className={`font-medium text-base tracking-wide transition-colors duration-200 ${
                isActive('/join-us') ? 'text-white' : 'text-gray-200 group-hover:text-white'
              }`}>
                Join Us
              </span>
              <span className={`h-0.5 bg-blue-500 transition-all duration-300 ${
                isActive('/join-us') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            
            <Link href="/contact-us" className="group flex flex-col items-center">
              <span className={`font-medium text-base tracking-wide transition-colors duration-200 ${
                isActive('/contact-us') ? 'text-white' : 'text-gray-200 group-hover:text-white'
              }`}>
                Contact
              </span>
              <span className={`h-0.5 bg-blue-500 transition-all duration-300 ${
                isActive('/contact-us') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          </div>

          {/* Right - Search Icon */}
          <div className="hidden md:block">
            <button className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              <FiSearch size={22} />
            </button>
          </div>

          {/* Mobile Menu Button with Search */}
          <div className="md:hidden flex items-center space-x-3">
            <button className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full transition-all duration-300">
              <FiSearch size={20} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-4 py-4 space-y-3">
            <Link 
              href="/" 
              className={`block px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive('/') ? 'bg-gray-700 text-white' : 'text-gray-200 hover:text-white hover:bg-gray-700'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about-us" 
              className={`block px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive('/about-us') ? 'bg-gray-700 text-white' : 'text-gray-200 hover:text-white hover:bg-gray-700'
              }`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/association" 
              className={`block px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive('/association') ? 'bg-gray-700 text-white' : 'text-gray-200 hover:text-white hover:bg-gray-700'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Association
            </Link>
            <Link 
              href="/join-us" 
              className={`block px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive('/join-us') ? 'bg-gray-700 text-white' : 'text-gray-200 hover:text-white hover:bg-gray-700'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Join Us
            </Link>
            <Link 
              href="/contact-us" 
              className={`block px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive('/contact-us') ? 'bg-gray-700 text-white' : 'text-gray-200 hover:text-white hover:bg-gray-700'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}