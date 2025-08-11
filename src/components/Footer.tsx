'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Github, Twitter, Instagram, Mail, MapPin, Phone, Youtube, Box } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/cybercats_logo.png"
                alt="CyberCats Logo"
                width={60}
                height={60}
                className="object-contain"
                priority
                unoptimized
              />
              <div>
                <div className="text-white font-bold text-xl">FRC 2872</div>
                <div className="text-red-500 text-sm font-mono">CYBERCATS</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
              A FIRST Robotics Competition team dedicated to building competitive robots,
              learning engineering skills, and promoting STEM education in our community.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/cybercats2872"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-red-500 text-white rounded-lg "
                aria-label="Github"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/thecybercats?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-red-500 text-white rounded-lg "
                aria-label="X (Twitter)"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/thewheatleycybercats/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-red-500 text-white rounded-lg "
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@2872CyberCats"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-red-500 text-white rounded-lg "
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://cad.onshape.com/documents/90cc8aa637ad551e8b9d4212/w/98d02ecdaaa5b029e288b6f7/e/53a2cd1cc401759a04a91ae1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-red-500 text-white rounded-lg "
                aria-label="OnShape CAD"
              >
                <Box className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links - Column 1 */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 font-mono">QUICK LINKS</h3>
            <div className="grid grid-cols-2 gap-x-6">
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-red-500  text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <a href="/about" className="text-gray-400 hover:text-red-500  text-sm">
                    About & Team
                  </a>
                </li>
                <li>
                  <a href="/robot" className="text-gray-400 hover:text-red-500  text-sm">
                    Previous Robots
                  </a>
                </li>
                <li>
                  <a href="/calendar" className="text-gray-400 hover:text-red-500  text-sm">
                    Calendar
                  </a>
                </li>
              </ul>
              <ul className="space-y-3">
                <li>
                  <a href="/sponsors" className="text-gray-400 hover:text-red-500  text-sm">
                    Sponsors
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-400 hover:text-red-500  text-sm">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="https://www.thebluealliance.com/team/2872" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500  text-sm">
                    Blue Alliance
                  </a>
                </li>
                <li>
                  <a href="https://www.firstinspires.org/robotics/frc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500  text-sm">
                    FIRST Robotics
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 font-mono">CONTACT INFO</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <p className="text-gray-400 text-sm">
                    Wheatley School<br />
                    Old Westbury, NY<br />
                    Long Island
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <p className="text-gray-400 text-sm">(516) 904-6879</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                <p className="text-gray-400 text-sm">contact@team2872.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} FRC Team 2872 CyberCats. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-red-500 ">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 ">
                Terms of Service
              </a>
              <div className="text-gray-500">
                Built with ❤️ by CyberCats
              </div>
            </div>
          </div>
        </div>

        {/* FIRST Robotics Branding */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-xs font-mono">
            FIRST® Robotics Competition Team • Inspiring Innovation Through Competition
          </p>
        </div>
      </div>
    </footer>
  )
}