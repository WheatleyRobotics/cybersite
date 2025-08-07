'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface TimelineEvent {
  name: string
  startDate: Date
  endDate: Date
  phase: 'off-season' | 'kickoff' | 'build-season'
}

export default function Hero() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [timelineProgress, setTimelineProgress] = useState(0)
  const [currentPhase, setCurrentPhase] = useState('')

  const timelineEvents: TimelineEvent[] = [
    {
      name: 'Off-Season',
      startDate: new Date('2025-04-20'),
      endDate: new Date('2026-01-11'),
      phase: 'off-season'
    },
    {
      name: 'Kickoff Event',
      startDate: new Date('2026-01-11'),
      endDate: new Date('2026-01-12'),
      phase: 'kickoff'
    },
    {
      name: 'Build Season',
      startDate: new Date('2026-01-12'),
      endDate: new Date('2026-02-25'),
      phase: 'build-season'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      setCurrentTime(now)

      // Calculate progress
      const totalStart = timelineEvents[0].startDate
      const totalEnd = timelineEvents[timelineEvents.length - 1].endDate
      const totalDuration = totalEnd.getTime() - totalStart.getTime()
      const elapsed = now.getTime() - totalStart.getTime()
      const progress = Math.max(0, Math.min(100, (elapsed / totalDuration) * 100))
      
      setTimelineProgress(progress)

      // Determine current phase
      const current = timelineEvents.find(event => 
        now >= event.startDate && now <= event.endDate
      )
      setCurrentPhase(current ? current.name : 'Season Complete')
    }, 1000)

    return () => clearInterval(timer)
  }, [timelineEvents])

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    })
  }

  const getDaysUntil = (date: Date) => {
    const diff = date.getTime() - currentTime.getTime()
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
    return days > 0 ? `${days} days` : 'Active'
  }

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-12">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-black text-white leading-none">
                FRC <span className="text-red-500">2872</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-mono text-red-500 uppercase tracking-wider">
                CyberCats
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                We are precision engineers, strategic innovators, and collaborative builders. 
                Our mission transcends traditional robotics—we architect solutions that push 
                the boundaries of what&apos;s possible in competitive engineering.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Every bolt tightened, every line of code written, every strategy deployed 
                represents our commitment to excellence. We don&apos;t just build robots; 
                we engineer the future.
              </p>
            </div>

            <div className="flex space-x-4">
              <motion.a
                href="/robot"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-8 py-3 bg-red-500 text-black font-mono font-bold uppercase tracking-wider hover:bg-red-400 transition-colors"
              >
                View Robot
              </motion.a>
              <motion.a
                href="/about"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-8 py-3 border-2 border-red-500 text-red-500 font-mono font-bold uppercase tracking-wider hover:bg-red-500 hover:text-black transition-colors"
              >
                Our Team
              </motion.a>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Season Timeline</h3>
              <p className="text-red-500 font-mono">Current Phase: {currentPhase}</p>
              <p className="text-gray-400 text-sm font-mono">{currentTime.toLocaleString()}</p>
            </div>

            <div className="relative">
              {/* Progress Bar */}
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-red-500 to-red-400"
                  style={{ width: `${timelineProgress}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              
              {/* Timeline Events */}
              <div className="mt-8 space-y-6">
                {timelineEvents.map((event, index) => {
                  const isActive = currentTime >= event.startDate && currentTime <= event.endDate
                  const isPast = currentTime > event.endDate
                  
                  return (
                    <motion.div
                      key={event.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className={`p-4 rounded-lg border-l-4 ${
                        isActive
                          ? 'bg-red-500/10 border-red-500 text-red-400'
                          : isPast
                          ? 'bg-green-500/10 border-green-500 text-green-400'
                          : 'bg-gray-800/50 border-gray-600 text-gray-400'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-bold font-mono">{event.name}</h4>
                          <p className="text-sm opacity-75">
                            {formatDate(event.startDate)} - {formatDate(event.endDate)}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-mono">
                            {isPast ? '✓ Complete' : getDaysUntil(event.startDate)}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}