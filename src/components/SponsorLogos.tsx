'use client'

import { motion } from 'framer-motion'
import { Building2 } from 'lucide-react'

const sponsors = [
  { name: 'Boeing', tier: 'platinum' },
  { name: 'ORICS Industries', tier: 'platinum' },
  { name: 'Wheatley School', tier: 'gold' },
  { name: 'nVent', tier: 'gold' },
  { name: 'General Motors', tier: 'silver' },
  { name: 'Local Partners', tier: 'bronze' }
]

const tierColors = {
  platinum: 'text-gray-300 border-gray-300/20 bg-gray-300/5',
  gold: 'text-yellow-400 border-yellow-400/20 bg-yellow-400/5',
  silver: 'text-gray-400 border-gray-400/20 bg-gray-400/5',
  bronze: 'text-orange-500 border-orange-500/20 bg-orange-500/5'
}

export default function SponsorLogos() {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            OUR <span className="text-red-500">SPONSORS</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Proudly supported by industry leaders who believe in the future of STEM education.
          </p>
          
          {/* View All Sponsors Link */}
          <motion.a
            href="/sponsors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-6 py-2 border border-red-500 text-red-500 font-mono text-sm uppercase tracking-wider hover:bg-red-500 hover:text-black transition-colors rounded-lg"
          >
            View All Sponsors
          </motion.a>
        </motion.div>

        {/* Sponsor Logos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`group relative aspect-square rounded-lg border ${tierColors[sponsor.tier as keyof typeof tierColors]} p-4 hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center text-center`}
            >
              {/* Logo placeholder */}
              <Building2 className="w-8 h-8 mb-2 opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="text-xs font-mono font-bold opacity-80 group-hover:opacity-100 transition-opacity">
                {sponsor.name}
              </div>
              
              {/* Tier indicator */}
              <div className={`absolute top-2 right-2 w-2 h-2 rounded-full ${sponsor.tier === 'platinum' ? 'bg-gray-300' : sponsor.tier === 'gold' ? 'bg-yellow-400' : sponsor.tier === 'silver' ? 'bg-gray-400' : 'bg-orange-500'}`} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}