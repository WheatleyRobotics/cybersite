'use client'

import { motion } from 'framer-motion'
import { Building2, Award, Handshake } from 'lucide-react'

interface Sponsor {
  name: string
  tier: 'diamond' | 'gold' | 'silver' | 'bronze'
  website: string
  contribution: string
  description: string
  since: number
  sponsorType: 'Corporate Sponsor' | 'Business Sponsor' | 'Family Sponsor' | 'Partner'
}

const sponsors: Sponsor[] = [
  {
    name: 'Boeing',
    tier: 'diamond',
    website: 'https://boeing.com',
    contribution: 'Primary Aerospace Sponsor',
    description: 'Global aerospace leader providing engineering expertise, funding, and mentorship from industry professionals.',
    since: 2018,
    sponsorType: 'Corporate Sponsor'
  },
  {
    name: 'ORICS Industries',
    tier: 'diamond',
    website: 'https://oricsindustries.com',
    contribution: 'Manufacturing & Design',
    description: 'Advanced manufacturing solutions and precision engineering support for competitive robotics.',
    since: 2020,
    sponsorType: 'Corporate Sponsor'
  },
  {
    name: 'Wheatley School',
    tier: 'gold',
    website: 'https://wheatleyschool.org',
    contribution: 'Educational Partner',
    description: 'Our home school providing facilities, resources, and educational support for STEM programs.',
    since: 2009,
    sponsorType: 'Partner'
  },
  {
    name: 'nVent',
    tier: 'gold',
    website: 'https://nvent.com',
    contribution: 'Innovation Sponsor',
    description: 'Electrical solutions company supporting our Innovation in Control Award achievements.',
    since: 2019,
    sponsorType: 'Corporate Sponsor'
  },
  {
    name: 'General Motors',
    tier: 'silver',
    website: 'https://gm.com',
    contribution: 'Industrial Design',
    description: 'Automotive industry leader supporting industrial design and manufacturing excellence.',
    since: 2021,
    sponsorType: 'Corporate Sponsor'
  },
  {
    name: 'Local Community Partners',
    tier: 'bronze',
    website: '#',
    contribution: 'Community Support',
    description: 'Long Island community businesses and families supporting our robotics journey.',
    since: 2009,
    sponsorType: 'Family Sponsor'
  }
]

const tierConfig = {
  diamond: {
    color: 'from-teal-400 to-teal-300',
    textColor: 'text-teal-400',
    borderColor: 'border-teal-400/40',
    bgColor: 'bg-teal-400/10',
    icon: Award,
    title: 'Diamond Partners'
  },
  gold: {
    color: 'from-yellow-400 to-yellow-500',
    textColor: 'text-yellow-400',
    borderColor: 'border-yellow-400/40',
    bgColor: 'bg-yellow-400/10',
    icon: Award,
    title: 'Gold Partners'
  },
  silver: {
    color: 'from-gray-400 to-gray-500',
    textColor: 'text-gray-400',
    borderColor: 'border-gray-400/40',
    bgColor: 'bg-gray-400/10',
    icon: Handshake,
    title: 'Silver Partners'
  },
  bronze: {
    color: 'from-orange-600 to-orange-700',
    textColor: 'text-orange-600',
    borderColor: 'border-orange-600/40',
    bgColor: 'bg-orange-600/10',
    icon: Building2,
    title: 'Bronze Partners'
  }
}

const sponsorsByTier = sponsors.reduce((acc, sponsor) => {
  if (!acc[sponsor.tier]) acc[sponsor.tier] = []
  acc[sponsor.tier].push(sponsor)
  return acc
}, {} as Record<string, Sponsor[]>)

export default function Sponsors() {
  return (
    <section id="sponsors" className="bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            OUR <span className="text-red-500">SPONSORS</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Empowered by industry leaders who believe in innovation, education, and the future of STEM. 
            Their support makes our championship-level performance possible.
          </p>
        </motion.div>

        {/* Sponsor Tiers */}
        <div className="space-y-16">
          {Object.entries(tierConfig).map(([tierKey, config], tierIndex) => {
            const tierSponsors = sponsorsByTier[tierKey] || []
            
            if (tierSponsors.length === 0) return null

            return (
              <motion.div
                key={tierKey}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: tierIndex * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* Tier Header */}
                <div className="flex items-center justify-center mb-12">
                  <div className={`flex items-center space-x-3 px-6 py-3 rounded-lg border ${config.borderColor} ${config.bgColor}`}>
                    <config.icon className={`w-6 h-6 ${config.textColor}`} />
                    <h3 className={`text-2xl font-bold font-mono ${config.textColor}`}>
                      {config.title}
                    </h3>
                  </div>
                </div>

                {/* Sponsor Grid */}
                <div className={`grid gap-8 max-w-6xl mx-auto ${
                  tierKey === 'diamond' ? 'grid-cols-1 md:grid-cols-2' :
                  tierKey === 'gold' ? 'grid-cols-1 md:grid-cols-2' :
                  tierKey === 'silver' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :
                  'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                }`}>
                  {tierSponsors.map((sponsor, index) => (
                    <motion.div
                      key={sponsor.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className={`group relative bg-gradient-to-b from-gray-900/50 to-black/50 border ${config.borderColor} rounded-lg p-8 hover:${config.bgColor} hover:shadow-2xl min-h-[400px] flex flex-col`}
                      style={{
                        boxShadow: `0 0 0 0 ${config.color}`
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 20px 3px ${tierKey === 'diamond' ? '#14b8a620' : tierKey === 'gold' ? '#fbbf2420' : tierKey === 'silver' ? '#d1d5db20' : '#ea580c20'}`
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 0 0 0 transparent'
                      }}
                    >
                      {/* Sponsor Visual */}
                      <div className={`w-full h-24 mb-6 rounded-lg ${config.bgColor} border ${config.borderColor} flex items-center justify-center`}>
                        <div className={`text-center ${config.textColor}`}>
                          <Building2 className="w-10 h-10 mx-auto mb-1" />
                          <div className="font-mono text-xs font-bold uppercase tracking-wide leading-tight">{sponsor.sponsorType}</div>
                        </div>
                      </div>

                      {/* Sponsor Info */}
                      <div className="text-center mb-6">
                        <h4 className={`text-xl font-bold font-mono mb-2 group-hover:${config.textColor}`}>
                          {sponsor.name}
                        </h4>
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-mono ${config.bgColor} ${config.textColor} border ${config.borderColor}`}>
                          {sponsor.contribution}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed text-center mb-4">
                        {sponsor.description}
                      </p>
                      
                      {/* Since Year */}
                      <div className="text-center mb-6">
                        <span className={`text-xs font-mono ${config.textColor} opacity-75`}>
                          Partner since {sponsor.since}
                        </span>
                      </div>

                      {/* Visit Website Button */}
                      <div className="text-center mt-auto">
                        <motion.a
                          href={sponsor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center space-x-2 px-4 py-2 border ${config.borderColor} rounded-lg ${config.textColor} hover:${config.bgColor} text-sm font-mono`}
                          whileHover={{ y: -2 }}
                          whileTap={{ y: 0 }}
                        >
                          <span>Visit Website</span>
                          <Building2 className="w-4 h-4" />
                        </motion.a>
                      </div>

                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Become a Sponsor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-red-500/10 to-gray-900/50 border border-red-500/20 rounded-lg p-12">
            <h3 className="text-3xl font-bold text-white mb-6 font-mono">BECOME A SPONSOR</h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Partner with CyberCats and support the next generation of STEM leaders. 
              Multiple sponsorship tiers available with various benefits and recognition levels.
            </p>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="px-8 py-4 bg-red-500 text-black font-mono font-bold uppercase tracking-wider hover:bg-red-400 rounded-lg"
            >
              Sponsorship Opportunities
            </motion.button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-black text-red-500 mb-2 font-mono">6</div>
            <div className="text-gray-400 text-sm font-mono uppercase tracking-wider">Active Sponsors</div>
          </div>
          <div>
            <div className="text-3xl font-black text-red-500 mb-2 font-mono">$25K</div>
            <div className="text-gray-400 text-sm font-mono uppercase tracking-wider">Annual Support</div>
          </div>
          <div>
            <div className="text-3xl font-black text-red-500 mb-2 font-mono">100%</div>
            <div className="text-gray-400 text-sm font-mono uppercase tracking-wider">Community Funded</div>
          </div>
          <div>
            <div className="text-3xl font-black text-red-500 mb-2 font-mono">3</div>
            <div className="text-gray-400 text-sm font-mono uppercase tracking-wider">Years Partnership</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}