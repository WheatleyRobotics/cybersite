'use client'

import { motion } from 'framer-motion'
import { MapPin, Users, Zap, Code2, Wrench, Brain } from 'lucide-react'


export default function About() {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            WHO ARE THE <span className="text-red-500">CYBERCATS</span>
          </h2>
        </motion.div>

        {/* Story Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          
          {/* Left: Our Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <MapPin className="w-6 h-6 text-red-500" />
              <span className="text-gray-300 font-mono">Old Westbury, New York</span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">Our Story</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Since 2009, we&apos;ve been more than just a robotics team. We&apos;re a group of students, 
              mentors, and families who believe engineering can change the world.
            </p>
            <p className="text-gray-400 leading-relaxed">
              From our first wobbly robot to our 2022 Regional Championship, every challenge 
              has taught us something new about teamwork, innovation, and never giving up.
            </p>
            
            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">16</div>
                <div className="text-sm text-gray-400">Years Strong</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">15+</div>
                <div className="text-sm text-gray-400">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">6+</div>
                <div className="text-sm text-gray-400">Awards Won</div>
              </div>
            </div>
          </motion.div>

          {/* Right: What Makes Us Different */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Zap className="w-6 h-6 text-red-500" />
              <span className="text-gray-300 font-mono">What Makes Us Different</span>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Student-Led</h4>
                <p className="text-gray-400 text-sm">
                  From CAD design to business strategy, our students lead every aspect 
                  with mentor guidance.
                </p>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Innovation</h4>
                <p className="text-gray-400 text-sm">
                  Our 2025 Innovation in Control Award shows we&apos;re always pushing 
                  the boundaries of what&apos;s possible.
                </p>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Strong District Impact</h4>
                <p className="text-gray-400 text-sm">
                  We host many events, workshops, and programs that strengthen our 
                  local STEM community.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Team Structure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">How We Work</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/20 border border-orange-500/30 rounded-full mb-4">
                <Wrench className="w-8 h-8 text-orange-500" />
              </div>
              <h4 className="text-white font-semibold mb-2">Mechanical</h4>
              <p className="text-gray-400 text-sm">CAD design, fabrication, and assembly</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 border border-blue-500/30 rounded-full mb-4">
                <Code2 className="w-8 h-8 text-blue-500" />
              </div>
              <h4 className="text-white font-semibold mb-2">Programming</h4>
              <p className="text-gray-400 text-sm">Autonomous systems and control algorithms</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 border border-purple-500/30 rounded-full mb-4">
                <Brain className="w-8 h-8 text-purple-500" />
              </div>
              <h4 className="text-white font-semibold mb-2">Business</h4>
              <p className="text-gray-400 text-sm">Strategy, fundraising, and team management</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-500/20 border border-pink-500/30 rounded-full mb-4">
                <Users className="w-8 h-8 text-pink-500" />
              </div>
              <h4 className="text-white font-semibold mb-2">Outreach</h4>
              <p className="text-gray-400 text-sm">Community engagement and STEM promotion</p>
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  )
}