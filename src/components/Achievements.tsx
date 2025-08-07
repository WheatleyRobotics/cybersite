'use client'

import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

const achievements = [
  {
    year: '2025',
    title: 'Innovation in Control',
    event: 'Long Island Regional',
    icon: Award,
    description: 'Advanced autonomous programming and precision control systems sponsored by nVent'
  },
  {
    year: '2023',
    title: 'Regional Finalists',
    event: 'FIRST Long Island Regional',
    icon: Award,
    description: 'Outstanding tournament performance reaching the final match'
  },
  {
    year: '2023',
    title: 'Quality Award',
    event: 'FIRST Long Island Regional',
    icon: Award,
    description: 'Exceptional craftsmanship and attention to detail in robot construction'
  },
  {
    year: '2022',
    title: 'Regional Champions',
    event: 'SBPLI Long Island Regional #1',
    icon: Award,
    description: 'Blue banner victory - our most prestigious achievement as regional winners'
  }
]


export default function Achievements() {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        


        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            COMPETITION <span className="text-red-500">ACHIEVEMENTS</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Proven excellence in competitive robotics with consistent top-tier performance 
            across regional and championship events.
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={`${achievement.year}-${achievement.title}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-gradient-to-b from-gray-900/80 to-black/80 border border-red-500/20 rounded-lg p-6 hover:border-red-500/40 group hover:shadow-2xl hover:shadow-red-500/20"
            >
              {/* Icon */}
              <div className="flex items-center justify-between mb-4">
                <achievement.icon className="w-8 h-8 text-red-500" />
              </div>

              {/* Year Badge */}
              <div className="inline-block bg-red-500/20 border border-red-500/40 rounded-full px-3 py-1 text-red-500 text-xs font-mono mb-4">
                {achievement.year}
              </div>

              {/* Title and Event */}
              <h3 className="text-white font-bold text-lg mb-2 font-mono group-hover:text-red-500">
                {achievement.title}
              </h3>
              <h4 className="text-gray-400 font-mono text-sm mb-3 uppercase tracking-wider">
                {achievement.event}
              </h4>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {achievement.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-lg pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-16 bg-black/50 border border-red-500/20 rounded-lg p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-black text-red-500 mb-2 font-mono">1</div>
              <div className="text-gray-400 text-sm font-mono uppercase tracking-wider">Regional Championship</div>
            </div>
            <div>
              <div className="text-3xl font-black text-red-500 mb-2 font-mono">6+</div>
              <div className="text-gray-400 text-sm font-mono uppercase tracking-wider">Awards Won</div>
            </div>
            <div>
              <div className="text-3xl font-black text-red-500 mb-2 font-mono">16</div>
              <div className="text-gray-400 text-sm font-mono uppercase tracking-wider">Years Active</div>
            </div>
            <div>
              <div className="text-3xl font-black text-red-500 mb-2 font-mono">2009</div>
              <div className="text-gray-400 text-sm font-mono uppercase tracking-wider">Rookie Year</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}