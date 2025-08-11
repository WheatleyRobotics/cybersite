'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Trophy, Users, ExternalLink } from 'lucide-react'

interface Event {
  id: string
  name: string
  type: 'competition' | 'outreach' | 'presentation' | 'workshop' | 'meeting'
  date: Date
  endDate?: Date
  location: string
  venue: string
  status: 'upcoming' | 'in-progress' | 'completed'
  result?: string
  description: string
  website?: string
  teamCount?: number
}

const events: Event[] = [
  {
    id: '1',
    name: 'Long Island Maker Faire',
    type: 'outreach',
    date: new Date('2025-09-14'),
    location: 'Stony Brook, NY',
    venue: 'Stony Brook University',
    status: 'upcoming',
    description: 'Join us at the Long Island Maker Faire to see our latest robotics innovations and interact with our team.',
    teamCount: 50
  },
  {
    id: '2',
    name: 'Season Kick Off',
    type: 'meeting',
    date: new Date('2026-01-10'),
    location: 'East Williston, NY',
    venue: 'The Wheatley School',
    status: 'upcoming',
    description: 'Official start of our 2025 robotics season with team preparation and planning.',
    teamCount: 30
  },
  {
    id: '3',
    name: 'Bryant Library Presentation & Demo',
    type: 'outreach',
    date: new Date('2025-08-16'),
    location: 'Roslyn, NY',
    venue: 'Bryant Library',
    status: 'upcoming',
    description: 'Community presentation showcasing our robotics program and live robot demonstrations.',
    teamCount: 15
  }
]

const eventTypeConfig = {
  competition: {
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/30',
    icon: Trophy
  },
  outreach: {
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    icon: Users
  },
  presentation: {
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    icon: ExternalLink
  },
  workshop: {
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    icon: Users
  },
  meeting: {
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/30',
    icon: Calendar
  }
}

export default function TeamCalendar() {
  const [selectedView, setSelectedView] = useState<'upcoming' | 'completed' | 'all'>('upcoming')
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000) // Update every minute
    return () => clearInterval(timer)
  }, [])

  const filteredEvents = events.filter(event => {
    if (selectedView === 'all') return true
    if (selectedView === 'upcoming') return event.status === 'upcoming' || event.status === 'in-progress'
    return event.status === 'completed'
  }).sort((a, b) => {
    if (selectedView === 'completed') {
      return b.date.getTime() - a.date.getTime() // Most recent first for completed
    }
    return a.date.getTime() - b.date.getTime() // Earliest first for upcoming
  })

  const formatDate = (date: Date, endDate?: Date) => {
    const options: Intl.DateTimeFormatOptions = { 
      month: 'short', 
      day: 'numeric',
      year: date.getFullYear() !== currentTime.getFullYear() ? 'numeric' : undefined
    }
    
    if (endDate && endDate.getTime() !== date.getTime()) {
      return `${date.toLocaleDateString('en-US', options)} - ${endDate.toLocaleDateString('en-US', options)}`
    }
    return date.toLocaleDateString('en-US', options)
  }

  const getDaysUntil = (date: Date) => {
    const diff = date.getTime() - currentTime.getTime()
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
    
    if (days < 0) return 'Completed'
    if (days === 0) return 'Today'
    if (days === 1) return 'Tomorrow'
    return `${days} days`
  }

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            TEAM <span className="text-red-500">CALENDAR</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stay up to date with all our team events including competitions, outreach activities, presentations, and team meetings.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="flex justify-center mb-12"
        >
          <div className="flex space-x-1 bg-gray-900/50 border border-red-500/20 rounded-lg p-1">
            {[
              { key: 'upcoming', label: 'Upcoming' },
              { key: 'completed', label: 'Past Events' },
              { key: 'all', label: 'All Events' }
            ].map((tab) => (
              <motion.button
                key={tab.key}
                onClick={() => setSelectedView(tab.key as 'upcoming' | 'completed' | 'all')}
                className={`px-6 py-3 rounded-lg font-mono text-sm ${
                  selectedView === tab.key
                    ? 'bg-red-500 text-black font-bold'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredEvents.map((event, index) => {
            const config = eventTypeConfig[event.type]
            const Icon = config.icon
            
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative bg-gradient-to-b from-gray-900/80 to-black/80 border ${config.borderColor} rounded-lg p-6 hover:${config.bgColor} hover:shadow-2xl`}
              >
                {/* Event Type Badge */}
                <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono mb-4 ${config.bgColor} ${config.color} border ${config.borderColor}`}>
                  <Icon className="w-3 h-3" />
                  <span className="uppercase">{event.type.replace('-', ' ')}</span>
                </div>

                {/* Event Title */}
                <h3 className={`text-xl font-bold font-mono mb-3 group-hover:${config.color}`}>
                  {event.name}
                </h3>

                {/* Date and Countdown */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{formatDate(event.date, event.endDate)}</span>
                  </div>
                  <div className={`text-xs font-mono px-2 py-1 rounded ${
                    event.status === 'completed' 
                      ? 'bg-green-500/20 text-green-500' 
                      : event.status === 'in-progress'
                      ? 'bg-yellow-500/20 text-yellow-500'
                      : 'bg-blue-500/20 text-blue-500'
                  }`}>
                    {event.status === 'completed' ? 'COMPLETE' : getDaysUntil(event.date)}
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-2 text-gray-400 mb-3">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <div>{event.venue}</div>
                    <div className="text-xs opacity-75">{event.location}</div>
                  </div>
                </div>


                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {event.description}
                </p>

                {/* Result */}
                {event.result && (
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-mono mb-4 ${
                    event.result.includes('1st') || event.result.includes('Champion')
                      ? 'bg-yellow-500/20 text-yellow-500 border border-yellow-500/30'
                      : event.result.includes('2nd')
                      ? 'bg-gray-400/20 text-gray-400 border border-gray-400/30'
                      : event.result.includes('3rd')
                      ? 'bg-orange-500/20 text-orange-500 border border-orange-500/30'
                      : 'bg-blue-500/20 text-blue-500 border border-blue-500/30'
                  }`}>
                    {event.result}
                  </div>
                )}

                {/* Website Link */}
                {event.website && (
                  <motion.a
                    href={event.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center space-x-2 text-sm ${config.color} hover:underline`}
                    whileHover={{ x: 5 }}
                  >
                    <span>Event Details</span>
                    <ExternalLink className="w-3 h-3" />
                  </motion.a>
                )}

                {/* Status Indicator */}
                <div className={`absolute top-4 right-4 w-3 h-3 rounded-full ${
                  event.status === 'completed'
                    ? 'bg-green-500'
                    : event.status === 'in-progress'
                    ? 'bg-yellow-500 animate-pulse'
                    : 'bg-blue-500'
                }`} />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Calendar className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-500 font-mono">No events found for the selected filter.</p>
          </motion.div>
        )}

      </div>
    </section>
  )
}