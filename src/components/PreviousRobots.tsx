'use client'

import { motion } from 'framer-motion'
import { Wrench, Award, ChevronRight } from 'lucide-react'

interface Robot {
  year: string
  name: string
  game: string
  description: string
  achievements: string[]
  keyFeatures: string[]
}

const previousRobots: Robot[] = [
  {
    year: '2025',
    name: 'Orca',
    game: 'REEFSCAPE',
    description: 'Advanced swerve drive robot designed for consistent coral and algae scoring capabilities.',
    achievements: ['Second Alliance', 'Innovation in Control'],
    keyFeatures: ['Swerve Drive', 'Vision-Guided Line-up', 'Funnel Intake', 'Precision Climbing']
  },
  {
    year: '2024',
    name: 'Staccato',
    game: 'CRESCENDO',
    description: 'Advanced swerve drive robot designed for precision note scoring and climbing capabilities.',
    achievements: ['Regional Qualifier'],
    keyFeatures: ['Swerve Drive', 'Vision-Guided Shooting', 'Automated Intake', 'Precision Climbing']
  },
  {
    year: '2023',
    name: 'Skeeter',
    game: 'CHARGED UP',
    description: 'High-scoring robot with advanced cube and cone manipulation for the CHARGED UP game.',
    achievements: ['Regional Finalists', 'Quality Award'],
    keyFeatures: ['Virtual Four Bar', 'Solenoid End Effector', 'Auto-Balance', '6 Falcon Tank Drive']
  },
  {
    year: '2022',
    name: 'Mantis',
    game: 'RAPID REACT',
    description: 'Championship-winning robot with exceptional ball handling and climbing mechanisms.',
    achievements: ['Regional Champions', 'Innovation in Control Award'],
    keyFeatures: ['Turret Shooter', 'Rapid Intake', 'Traversal Climb', 'Auto Targeting']
  }
]

export default function PreviousRobots() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            PREVIOUS <span className="text-red-500">ROBOTS</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A legacy of innovation spanning over a decade. Each robot represents years of learning, 
            iteration, and engineering excellence from our championship-winning heritage.
          </p>
        </motion.div>

        {/* Timeline Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center p-6 bg-black/50 border border-red-500/20 rounded-lg">
            <div className="text-3xl font-black text-red-500 mb-2 font-mono">{previousRobots.length}</div>
            <div className="text-gray-400 text-sm font-mono uppercase tracking-wider">Robots Built</div>
          </div>
          <div className="text-center p-6 bg-black/50 border border-red-500/20 rounded-lg">
            <div className="text-3xl font-black text-red-500 mb-2 font-mono">16</div>
            <div className="text-gray-400 text-sm font-mono uppercase tracking-wider">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-black/50 border border-red-500/20 rounded-lg">
            <div className="text-3xl font-black text-red-500 mb-2 font-mono">1</div>
            <div className="text-gray-400 text-sm font-mono uppercase tracking-wider">Championship</div>
          </div>
          <div className="text-center p-6 bg-black/50 border border-red-500/20 rounded-lg">
            <div className="text-3xl font-black text-red-500 mb-2 font-mono">10+</div>
            <div className="text-gray-400 text-sm font-mono uppercase tracking-wider">Awards Won</div>
          </div>
        </motion.div>

        {/* Robots Grid */}
        <div className="space-y-8">
          {previousRobots.map((robot, index) => (
            <motion.div
              key={robot.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              {/* Robot Info */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="inline-block bg-red-500/20 border border-red-500/40 rounded-full px-4 py-2 text-red-500 text-sm font-mono font-bold">
                    {robot.year}
                  </div>
                  <div className="text-gray-400 text-sm font-mono uppercase tracking-wider">
                    {robot.game}
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white font-mono mb-4">
                  {robot.name}
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {robot.description}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-white font-bold font-mono mb-3 flex items-center">
                    <Award className="w-5 h-5 text-red-500 mr-2" />
                    ACHIEVEMENTS
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {robot.achievements.map((achievement, i) => (
                      <div key={i} className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/40 rounded-full text-yellow-500 text-xs font-mono">
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-white font-bold font-mono mb-3 flex items-center">
                    <Wrench className="w-5 h-5 text-red-500 mr-2" />
                    KEY FEATURES
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {robot.keyFeatures.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2 text-gray-400 text-sm">
                        <ChevronRight className="w-3 h-3 text-red-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Robot Visual Placeholder */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-red-500/20 flex items-center justify-center hover:border-red-500/40 transition-all duration-300">
                  <div className="text-center text-gray-500">
                    <Wrench className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <div className="text-lg font-mono font-bold text-red-500">{robot.name}</div>
                    <div className="text-sm">{robot.year} Competition Robot</div>
                    <div className="text-xs mt-2 opacity-75">{robot.game}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legacy Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-red-500/10 to-gray-900/50 border border-red-500/20 rounded-lg p-12">
            <h3 className="text-3xl font-bold text-white mb-6 font-mono">ENGINEERING EVOLUTION</h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Every robot represents a milestone in our journey. From our rookie year in 2009 to our 
              championship victory in 2022, each iteration has pushed the boundaries of what&apos;s possible. 
              Our legacy isn&apos;t just in the awards we&apos;ve won, but in the lessons learned and the 
              innovations that continue to shape our approach to competitive robotics.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}