'use client'

import { motion } from 'framer-motion'
import { Users, Code, Wrench, Brain, Camera } from 'lucide-react'

interface TeamMember {
  name: string
  role: string
  subteam: 'mechanical' | 'programming' | 'business' | 'outreach' | 'media'
  experience: string
  type: 'student' | 'mentor' | 'member'
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
    name: 'Ronald Kahut',
    role: 'Member',
    subteam: 'mechanical',
    experience: '2 years',
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
    name: 'Ryan Jiang',
    role: 'Member',
    subteam: 'mechanical',
    experience: '1 year',
    type: 'member'
  },
  {
    name: 'Matthew Caputo',
    role: 'Member',
    subteam: 'mechanical',
    experience: '3 year',
    type: 'member'
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
    name: 'Shawn Khillian',
    role: 'Programming Mentor',
    subteam: 'programming',
    experience: '3 years mentoring',
    type: 'mentor'
  },
  {
    name: 'Brian Reynolds',
    role: 'Mentor',
    subteam: 'mechanical',
    experience: '6 years mentoring',
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
    borderColor: 'border-green-500/30'
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
  const availablePhotos = ['hurley', 'ouyang', 'reynolds']
  
  if (lastName && availablePhotos.includes(lastName)) {
    const extensions = ['jpg', 'jpeg', 'png']
    // Try different extensions - we'll use the one that exists
    if (lastName === 'hurley') return '/roster/hurley.jpg'
    if (lastName === 'ouyang') return '/roster/ouyang.jpeg'
    if (lastName === 'reynolds') return '/roster/reynolds.jpg'
  }
  
  return null
}


export default function TeamRoster() {
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
            Elite engineering minds united by a shared passion for innovation, precision, and competitive excellence. 
            Each member brings specialized expertise to our championship-level operations.
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
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative bg-gradient-to-b from-gray-900/80 to-black/80 border border-yellow-500/30 rounded-lg p-6 hover:bg-yellow-500/10 hover:shadow-2xl"
              >
                {/* Mentor Picture */}
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-700 border-2 border-yellow-500/30 overflow-hidden">
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
                </div>

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
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`group relative bg-gradient-to-b from-gray-900/80 to-black/80 border ${config.borderColor} rounded-lg p-6 hover:${config.bgColor} hover:shadow-2xl`}
                >
                  {/* Profile Picture */}
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-700 border-2 border-gray-600 overflow-hidden">
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
                  </div>

                  {/* Member Info */}
                  <div className="text-center">
                    <h4 className="text-white font-bold text-lg mb-1 font-mono group-hover:text-red-500 h-12 flex items-center justify-center">
                      {member.name}
                    </h4>
                    
                    <div className="text-gray-400 text-sm mb-4">
                      <div className="font-mono uppercase tracking-wider mb-1">{member.subteam}</div>
                      <div className="text-xs">{member.experience} experience</div>
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
          <h3 className="text-3xl font-bold text-white text-center mb-12 font-mono">TEAM MEMBERS</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {teamMembers.filter(member => member.type === 'member').map((member, index) => {
              const config = subteamConfig[member.subteam]
              
              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`group relative bg-gradient-to-b from-gray-900/80 to-black/80 border ${config.borderColor} rounded-lg p-4 hover:${config.bgColor} hover:shadow-lg`}
                >
                  {/* Subteam Icon */}
                  <div className={`w-16 h-16 mx-auto mb-3 rounded-full ${config.bgColor} border-2 ${config.borderColor} flex items-center justify-center`}>
                    <config.icon className={`w-6 h-6 ${config.color}`} />
                  </div>

                  {/* Member Info */}
                  <div className="text-center">
                    <h4 className="text-white font-bold text-sm mb-1 font-mono group-hover:text-gray-300">
                      {member.name}
                    </h4>
                    
                    <div className="text-gray-400 text-xs mb-2">
                      <div className="font-mono uppercase tracking-wider mb-1">{member.subteam}</div>
                      <div className="text-xs">{member.experience}</div>
                    </div>
                  </div>

                </motion.div>
              )
            })}
          </div>
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