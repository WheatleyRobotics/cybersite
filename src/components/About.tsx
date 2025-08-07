'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'


export default function About() {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-black text-white mb-4">
            ABOUT <span className="text-red-500">CYBERCATS</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Elite robotics engineering team specializing in autonomous systems, 
            competitive strategy, and cybersecurity-focused solutions.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24"
        >
          <div className="bg-gradient-to-r from-red-500/10 to-gray-900/50 border border-red-500/20 rounded-lg p-8 text-center">
            <h3 className="text-3xl font-bold text-white mb-6 font-mono">MISSION PROTOCOL</h3>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-4">
              Based in Old Westbury, New York, we engineer precision robotics systems that excel in competitive 
              environments while inspiring the next generation of STEM leaders. Since 2009, we&apos;ve combined 
              innovative design, strategic thinking, and collaborative teamwork to achieve excellence.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
              From our 2022 Blue Banner Regional Championship to our recent Innovation in Control Award, 
              we don&apos;t just build robots—we architect intelligent solutions that adapt, learn, and evolve.
            </p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex justify-center mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
            onClick={() => window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' })}
          >
            <span className="text-sm font-mono mb-2">SCROLL DOWN</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}