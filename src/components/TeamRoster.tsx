'use client'

import { motion } from 'framer-motion'
import { Users, Code, Wrench, Brain, Camera, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

interface TeamMember {
  name: string
  role: string
  subteam: 'mechanical' | 'programming' | 'business' | 'outreach' | 'media' | 'software'
  experience: string
  type: 'student' | 'mentor' | 'member'
  grade?: number
}

const teamMembers: TeamMember[] = [
  // Student Leaders
  {
    name: 'Brandon Jiang',
    role: 'CAD & Electrical',
    subteam: 'mechanical',
    experience: '3 years',
    type: 'student'
  },
  {
    name: 'Liam Connell',
    role: 'Mechanical',
    subteam: 'mechanical',
    experience: '3 years',
    type: 'student'
  },
  {
    name: 'Kaicheng Ouyang',
    role: 'Programming',
    subteam: 'programming',
    experience: '3 years',
    type: 'student'
  },
  {
    name: 'Ricky Deng',
    role: 'Business',
    subteam: 'business',
    experience: '3 years',
    type: 'student'
  },
  {
    name: 'Joanna Cheng',
    role: 'Outreach Captain',
    subteam: 'outreach',
    experience: '2 years',
    type: 'student'
  },
  
  // Regular Team Members
  {
    name: 'Ronald Kohut',
    role: 'Member',
    subteam: 'mechanical',
    experience: '3 years',
    type: 'member'
  },
  {
    name: 'Neil Singh',
    role: 'Member',
    subteam: 'programming',
    experience: '3 year',
    type: 'member'
  },
  {
    name: 'Tyron Mai',
    role: 'Member',
    subteam: 'media',
    experience: '3 year',
    type: 'member'
  },
  {
    name: 'Enzo Panetta',
    role: 'Member',
    subteam: 'business',
    experience: '2 years',
    type: 'member'
  },
  {
    name: 'Mathew Gbenebitse',
    role: 'Member',
    subteam: 'mechanical',
    experience: '2 years',
    type: 'member'
  },
  {
    name: 'Julian Buonaiuto',
    role: 'Member',
    subteam: 'mechanical',
    experience: '2 years',
    type: 'member'
  },
  {
    name: 'Matthew Caputo',
    role: 'Member',
    subteam: 'mechanical',
    experience: '2 year',
    type: 'member'
  },
  
  // Additional Members (Less Active)
  {
    name: 'Ryan Jiang',
    role: 'Member',
    subteam: 'mechanical',
    experience: '1 year',
    type: 'member',
    grade: 9
  },
  {
    name: 'Chloe Yeung',
    role: 'Member', 
    subteam: 'software',
    experience: '1 year',
    type: 'member',
    grade: 9
  },
  {
    name: 'Selena Chirls',
    role: 'Member',
    subteam: 'mechanical', 
    experience: '1 year',
    type: 'member',
    grade: 9
  },
  {
    name: 'Heli Shah',
    role: 'Member',
    subteam: 'mechanical',
    experience: '1 year', 
    type: 'member',
    grade: 10
  },
  {
    name: 'Christiano Tortorello',
    role: 'Member',
    subteam: 'mechanical',
    experience: '2 years',
    type: 'member',
    grade: 11
  },
  {
    name: 'Lorenzo Verderame',
    role: 'Member',
    subteam: 'mechanical', 
    experience: '2 years',
    type: 'member',
    grade: 11
  },
  
  // Mentors

  {
    name: 'Patrick Hurley',
    role: 'Head Mentor',
    subteam: 'mechanical',
    experience: '12 years mentoring',
    type: 'mentor'
  },

  {
    name: 'Brian Reynolds',
    role: 'Mentor',
    subteam: 'mechanical',
    experience: '6 years mentoring',
    type: 'mentor'
  },
  {
    name: 'Shawn Khillian',
    role: 'Programming Mentor',
    subteam: 'programming',
    experience: '3 years mentoring',
    type: 'mentor'
  }
]

const subteamConfig = {
  mechanical: {
    icon: Wrench,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30'
  },
  programming: {
    icon: Code,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30'
  },
  software: {
    icon: Code,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30'
  },
  business: {
    icon: Brain,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30'
  },
  outreach: {
    icon: Users,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-[#F79AC0]/30'
  },
  media: {
    icon: Camera,
    color: 'text-gray-400',
    bgColor: 'bg-gray-500/10',
    borderColor: 'border-gray-500/70'
  }
}

const getPhotoPath = (name: string) => {
  const lastName = name.split(' ').pop()?.toLowerCase()
  
  if (lastName) {
    if (lastName === 'hurley') return '/roster/hurley.jpg'
    if (lastName === 'ouyang') return '/roster/ouyang.jpeg'
    if (lastName === 'reynolds') return '/roster/reynolds.jpg'
    if (lastName === 'jiang') return '/roster/jiang.png'
    if (lastName === 'connell') return '/roster/connell.png'
    if (lastName === 'cheng') return '/roster/cheng.png'
    if (lastName === 'deng') return '/roster/deng.png'
    if (lastName === 'khillian') return '/roster/khillian.png'
  }
  
  return null
}


const getOptimalGridClasses = (count: number) => {
  // Calculate optimal columns based on count to minimize empty spaces
  if (count <= 3) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
  if (count <= 4) return 'grid-cols-2 md:grid-cols-2 lg:grid-cols-4'
  if (count <= 6) return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-3'
  if (count <= 8) return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
  if (count <= 9) return 'grid-cols-3 md:grid-cols-3 lg:grid-cols-3'
  if (count <= 12) return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
  return 'grid-cols-2 md:grid-cols-4 lg:grid-cols-6'
}

export default function TeamRoster() {
  const [showMoreMembers, setShowMoreMembers] = useState(false)

  // Separate regular members from additional members
  const regularMembers = teamMembers.filter(member => member.type === 'member' && !member.grade)
  const additionalMembers = teamMembers.filter(member => member.type === 'member' && member.grade)
    .sort((a, b) => (b.grade || 0) - (a.grade || 0)) // Sort by grade descending

  return (
    <section id="team" className="bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            MEET THE <span className="text-red-500">TEAM</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Our team consists of students and mentors working together on mechanical design, programming, 
            business development, and community outreach for our FIRST Robotics Competition team.
          </p>
        </motion.div>


        {/* Mentors */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12 font-mono">MENTORS</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.filter(member => member.type === 'mentor').map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 1
                }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.05,
                  ease: "easeOut"
                }}
                className="group relative bg-gradient-to-b from-gray-900/80 to-black/80 border border-yellow-500/30 rounded-lg p-6 hover:bg-gradient-to-b hover:from-yellow-500/15 hover:to-yellow-500/5 hover:border-yellow-400/70 transform-gpu"
              >
                {/* Mentor Picture */}
                <motion.div 
                  className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-700 border-2 border-yellow-500/30 overflow-hidden"
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: 3
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {getPhotoPath(member.name) ? (
                    <img 
                      src={getPhotoPath(member.name)!} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                      <div className="text-gray-500 text-xs font-mono text-center">
                        PHOTO
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Mentor Info */}
                <div className="text-center">
                  <h4 className="text-white font-bold text-lg mb-1 font-mono group-hover:text-yellow-500">
                    {member.name}
                  </h4>
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-mono mb-2 bg-yellow-500/20 text-yellow-500 border border-yellow-500/40">
                    {member.role}
                  </div>
                  
                  <div className="text-gray-400 text-sm mb-4">
                    <div className="font-mono uppercase tracking-wider mb-1">{member.subteam} MENTOR</div>
                    <div className="text-xs">{member.experience}</div>
                  </div>

                </div>

              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Student Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12 font-mono">STUDENT LEADERSHIP</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {teamMembers.filter(member => member.type === 'student').map((member, index) => {
              const config = subteamConfig[member.subteam]
              
              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -2
                  }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.05,
                    ease: "easeOut"
                  }}
                  className={`group relative bg-gradient-to-b from-gray-900/80 to-black/80 border ${config.borderColor} rounded-lg p-6 hover:border-opacity-90 transform-gpu`}
                >
                  {/* Profile Picture */}
                  <motion.div 
                    className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-700 border-2 border-gray-600 overflow-hidden"
                    whileHover={{ 
                      scale: 1.05,
                      borderColor: "rgb(239, 68, 68)"
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {getPhotoPath(member.name) ? (
                      <img 
                        src={getPhotoPath(member.name)!} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                        <div className="text-gray-500 text-xs font-mono text-center">
                          PHOTO
                        </div>
                      </div>
                    )}
                  </motion.div>

                  {/* Member Info */}
                  <div className="text-center">
                    <h4 className="text-white font-bold text-lg mb-1 font-mono h-12 flex items-center justify-center group-hover:text-red-500 break-words overflow-hidden">
                      <span className="truncate px-2">{member.name}</span>
                    </h4>
                    
                    <div className="text-gray-400 text-sm mb-4">
                      <div className="font-mono uppercase tracking-wider mb-1 truncate">{member.subteam}</div>
                      <div className="text-xs truncate">{member.experience} experience</div>
                    </div>

                  </div>

                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Regular Team Members */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12 font-mono">SENIOR MEMBERS</h3>
          <div className={`grid ${getOptimalGridClasses(regularMembers.length)} gap-6 max-w-6xl mx-auto justify-center`}>
            {regularMembers.map((member, index) => {
              const config = subteamConfig[member.subteam]
              
              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  whileHover={{ 
                    scale: 1.03,
                    y: -2
                  }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.05,
                    ease: "easeOut"
                  }}
                  className={`group relative bg-gradient-to-b from-gray-900/80 to-black/80 border ${config.borderColor} rounded-lg p-3 hover:border-opacity-90 transform-gpu`}
                >
                  {/* Subteam Icon */}
                  <motion.div 
                    className={`w-12 h-12 mx-auto mb-2 rounded-full ${config.bgColor} border-2 ${config.borderColor} flex items-center justify-center`}
                    whileHover={{ 
                      scale: 1.05, 
                      rotate: 15
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <motion.div
                      whileHover={{ rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <config.icon className={`w-4 h-4 ${config.color}`} />
                    </motion.div>
                  </motion.div>

                  {/* Member Info */}
                  <div className="text-center min-w-0">
                    <h4 className="text-white font-bold text-xs mb-1 font-mono group-hover:text-gray-300 truncate px-1">
                      {member.name}
                    </h4>
                    
                    <div className="text-gray-400 text-xs mb-1">
                      <div className="font-mono uppercase tracking-wider mb-1 text-xs truncate">{member.subteam}</div>
                      <div className="text-xs truncate">{member.experience}</div>
                    </div>
                  </div>

                </motion.div>
              )
            })}
          </div>

          {/* View More Members Button */}
          <div className="text-center mt-12">
            <motion.button
              onClick={() => setShowMoreMembers(!showMoreMembers)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-mono font-bold uppercase tracking-wider hover:from-gray-600 hover:to-gray-700 rounded-lg border border-gray-600 transition-all"
            >
              Complete Directory
              {showMoreMembers ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </motion.button>
          </div>

          {/* Additional Members (Expandable) */}
          {showMoreMembers && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-12"
            >
              <div className={`grid ${getOptimalGridClasses(additionalMembers.length)} gap-6 max-w-5xl mx-auto justify-center`}>
                {additionalMembers.map((member, index) => {
                  const config = subteamConfig[member.subteam]
                  
                  return (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ 
                        scale: 1.01,
                        x: 3,
                        borderColor: "rgba(156, 163, 175, 0.6)"
                      }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.05
                      }}
                      className={`flex items-center gap-3 bg-gradient-to-r from-gray-900/80 to-black/80 border ${config.borderColor} rounded-lg p-4 cursor-pointer transform-gpu`}
                    >
                      {/* Subteam Icon */}
                      <motion.div 
                        className={`w-10 h-10 rounded-full ${config.bgColor} border-2 ${config.borderColor} flex items-center justify-center flex-shrink-0`}
                        whileHover={{ 
                          scale: 1.05,
                          rotate: 90
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          whileHover={{ rotate: 3 }}
                          transition={{ duration: 0.3 }}
                        >
                          <config.icon className={`w-4 h-4 ${config.color}`} />
                        </motion.div>
                      </motion.div>

                      {/* Member Info */}
                      <div className="flex-1 min-w-0">
                        <h5 className="text-white font-bold font-mono text-sm truncate">
                          {member.name}
                        </h5>
                        <div className="text-gray-400 text-xs truncate">
                          <span className="font-mono uppercase tracking-wider">{member.subteam}</span>
                          <span className="text-gray-500 mx-1">•</span>
                          <span className="text-gray-400">Grade {member.grade}</span>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          )}
        </motion.div>


        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-red-500/10 to-gray-900/50 border border-red-500/20 rounded-lg p-12">
            <h3 className="text-3xl font-bold text-white mb-6 font-mono">QUESTIONS ABOUT THE TEAM?</h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Have questions about our team, programs, or want to learn more about FRC robotics? 
              Reach out and we&apos;ll get back to you!
            </p>
            
            <form className="max-w-lg mx-auto space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors font-mono"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors font-mono"
                />
              </div>
              <select
                className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors font-mono"
                defaultValue=""
              >
                <option value="" disabled className="text-gray-400">Select inquiry type</option>
                <option value="general" className="bg-black text-white">General Information</option>
                <option value="join" className="bg-black text-white">Joining the Team</option>
                <option value="mentorship" className="bg-black text-white">Mentorship Opportunities</option>
                <option value="sponsorship" className="bg-black text-white">Sponsorship</option>
                <option value="media" className="bg-black text-white">Media & Press</option>
                <option value="technical" className="bg-black text-white">Technical Questions</option>
                <option value="other" className="bg-black text-white">Other</option>
              </select>
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors font-mono"
              />
              <textarea
                placeholder="Your message..."
                rows={4}
                className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors font-mono resize-none"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-red-500 text-black font-mono font-bold uppercase tracking-wider hover:bg-red-400 rounded-lg"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}