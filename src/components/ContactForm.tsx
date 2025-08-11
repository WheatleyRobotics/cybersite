'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, User, MessageSquare, Building } from 'lucide-react'

interface FormData {
  name: string
  email: string
  organization: string
  subject: string
  message: string
  inquiry: 'sponsorship' | 'outreach' | 'technical' | 'general'
}

const inquiryTypes = [
  { value: 'sponsorship', label: 'Sponsorship Opportunities', icon: Building },
  { value: 'outreach', label: 'Community Outreach', icon: User },
  { value: 'technical', label: 'Technical Collaboration', icon: MessageSquare },
  { value: 'general', label: 'General Inquiry', icon: Mail }
]

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
    inquiry: 'general'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        organization: '',
        subject: '',
        message: '',
        inquiry: 'general'
      })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            CONTACT <span className="text-red-500">CYBERCATS</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to connect? Reach out for sponsorship opportunities, technical collaboration, 
            or to learn more about our innovative robotics program.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="space-y-8">
              
              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-gray-900/50 border border-red-500/20 rounded-lg hover:border-red-500/40 transition-all duration-300">
                  <Mail className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-bold font-mono mb-2">EMAIL</h3>
                    <p className="text-gray-400 text-sm">contact@team2872.org</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gray-900/50 border border-red-500/20 rounded-lg hover:border-red-500/40 transition-all duration-300">
                  <Phone className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-bold font-mono mb-2">PHONE</h3>
                    <p className="text-gray-400 text-sm">(516) 904-6879</p>
                    <p className="text-gray-500 text-xs">Business Hours: M-F 3-7 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gray-900/50 border border-red-500/20 rounded-lg hover:border-red-500/40 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-bold font-mono mb-2">LOCATION</h3>
                    <p className="text-gray-400 text-sm">
                      Robotics Lab<br />
                      The Wheatley School<br />
                      Old Westbury, New York 11568
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-black/30 border border-red-500/20 rounded-lg p-6">
                <h3 className="text-white font-bold font-mono mb-4">RESPONSE TIME</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">General Inquiries</span>
                    <span className="text-red-500 font-mono">24 hours</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Sponsorship</span>
                    <span className="text-red-500 font-mono">48 hours</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Technical</span>
                    <span className="text-red-500 font-mono">72 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Inquiry Type */}
              <div>
                <label className="block text-white font-bold font-mono mb-4">INQUIRY TYPE</label>
                <div className="grid grid-cols-2 gap-4">
                  {inquiryTypes.map((type) => (
                    <motion.label
                      key={type.value}
                      whileHover={{ scale: 1.02 }}
                      className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                        formData.inquiry === type.value
                          ? 'border-red-500 bg-red-500/10 text-red-500'
                          : 'border-gray-700 bg-gray-900/50 text-gray-400 hover:border-gray-600'
                      }`}
                    >
                      <input
                        type="radio"
                        name="inquiry"
                        value={type.value}
                        checked={formData.inquiry === type.value}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <type.icon className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm font-mono">{type.label}</span>
                    </motion.label>
                  ))}
                </div>
              </div>

              {/* Name and Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-bold font-mono mb-2">NAME *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-bold font-mono mb-2">EMAIL *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Organization and Subject */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="organization" className="block text-white font-bold font-mono mb-2">ORGANIZATION</label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors duration-300"
                    placeholder="Company or school name"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-white font-bold font-mono mb-2">SUBJECT *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors duration-300"
                    placeholder="Brief subject line"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-white font-bold font-mono mb-2">MESSAGE *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us about your inquiry, project, or how we can help..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-between">
                <div className="text-gray-500 text-sm">
                  * Required fields
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`flex items-center space-x-2 px-8 py-3 font-mono font-bold uppercase tracking-wider rounded-lg transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      : submitStatus === 'success'
                      ? 'bg-green-500 text-black'
                      : submitStatus === 'error'
                      ? 'bg-red-600 text-white'
                      : 'bg-red-500 text-black hover:bg-red-400'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                      <span>SENDING...</span>
                    </>
                  ) : submitStatus === 'success' ? (
                    <span>MESSAGE SENT!</span>
                  ) : submitStatus === 'error' ? (
                    <span>ERROR - TRY AGAIN</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>SEND MESSAGE</span>
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}