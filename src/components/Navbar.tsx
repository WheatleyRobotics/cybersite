'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="/cybercats_logo.png"
              alt="CyberCats Logo"
              width={50}
              height={50}
              className="object-contain"
              priority
              unoptimized
            />
            <div>
              <div className="text-white font-bold text-lg">FRC 2872</div>
              <div className="text-red-500 text-xs font-mono">CYBERCATS</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-white hover:text-red-500 transition-colors font-mono text-sm">
              HOME
            </Link>
            <a href="/about" className="text-white hover:text-red-500 transition-colors font-mono text-sm">
              ABOUT
            </a>
            <a href="/robot" className="text-white hover:text-red-500 transition-colors font-mono text-sm">
              ROBOTS
            </a>
            <a href="/calendar" className="text-white hover:text-red-500 transition-colors font-mono text-sm">
              CALENDAR
            </a>
            <a href="/sponsors" className="text-white hover:text-red-500 transition-colors font-mono text-sm">
              SPONSORS
            </a>
            <a href="/contact" className="text-white hover:text-red-500 transition-colors font-mono text-sm">
              CONTACT
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-red-500 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 border-t border-red-500/20">
              <Link href="/" className="block px-3 py-2 text-white hover:text-red-500 transition-colors font-mono text-sm">
                HOME
              </Link>
              <a href="/about" className="block px-3 py-2 text-white hover:text-red-500 transition-colors font-mono text-sm">
                ABOUT
              </a>
              <a href="/robot" className="block px-3 py-2 text-white hover:text-red-500 transition-colors font-mono text-sm">
                ROBOTS
              </a>
              <a href="/team" className="block px-3 py-2 text-white hover:text-red-500 transition-colors font-mono text-sm">
                TEAM
              </a>
              <a href="/calendar" className="block px-3 py-2 text-white hover:text-red-500 transition-colors font-mono text-sm">
                CALENDAR
              </a>
              <a href="/sponsors" className="block px-3 py-2 text-white hover:text-red-500 transition-colors font-mono text-sm">
                SPONSORS
              </a>
              <a href="/contact" className="block px-3 py-2 text-white hover:text-red-500 transition-colors font-mono text-sm">
                CONTACT
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}