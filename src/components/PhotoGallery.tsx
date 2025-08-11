'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, Camera, Users, Wrench } from 'lucide-react'
import Image from 'next/image'

interface Photo {
  id: string
  src: string
  alt: string
  category: 'robot' | 'team'
  location: string
  photographer?: string
  year?: string
}

const photos: Photo[] = [
  // Robot Photos (6)
  {
    id: 'robot_001',
    src: '/robot/robot_1.JPG',
    alt: 'CyberCats Robot Photo',
    category: 'robot',
    location: 'LI Regional',
    photographer: 'Ace Shu'
  },
  {
    id: 'robot_002',
    src: '/robot/robot_2.JPG',
    alt: 'CyberCats Robot Photo',
    category: 'robot',
    location: 'LI Regional',
    photographer: 'Ace Shu'
  },
  {
    id: 'robot_003',
    src: '/robot/robot_3.JPG',
    alt: 'CyberCats Robot Photo',
    category: 'robot',
    location: 'SF Regional',
    photographer: 'Tyron Mai'
  },
  {
    id: 'robot_004',
    src: '/robot/robot_4.JPG',
    alt: 'CyberCats Robot Photo',
    category: 'robot',
    location: 'SF Regional',
    photographer: 'Tyron Mai'
  },
  {
    id: 'robot_005',
    src: '/robot/robot_5.jpeg',
    alt: 'CyberCats Robot Photo',
    category: 'robot',
    location: 'Practice Field',
    photographer: 'Brandon Jiang'
  },
  {
    id: 'robot_006',
    src: '/robot/robot_6.PNG',
    alt: 'CyberCats Robot Photo',
    category: 'robot',
    location: 'LI Regional',
    photographer: 'Ace Shu'
  },
  
  // Team Photos (6)
  {
    id: 'team_001',
    src: '/team/team_1.JPG',
    alt: 'CyberCats Team Photo',
    category: 'team',
    location: 'LI Regional',
    year: '2025'
  },
  {
    id: 'team_002',
    src: '/team/team_2.PNG',
    alt: 'CyberCats Team Photo',
    category: 'team',
    location: 'WPI BattleCry',
    year: '2024'
  },
  {
    id: 'team_003',
    src: '/team/team_3.jpeg',
    alt: 'CyberCats Team Photo',
    category: 'team',
    location: 'Jones Beach',
    year: '2024'
  },
  {
    id: 'team_004',
    src: '/team/team_4.png',
    alt: 'CyberCats Team Photo',
    category: 'team',
    location: 'South Florida',
    year: '2025'
  },
  {
    id: 'team_005',
    src: '/team/team_5.png',
    alt: 'CyberCats Team Photo',
    category: 'team',
    location: 'Build Season',
    year: '2025'
  },
  {
    id: 'team_006',
    src: '/team/team_6.PNG',
    alt: 'CyberCats Team Photo',
    category: 'team',
    location: 'LI Regional',
    year: '2025'
  }
]

const categories = [
  { id: 'robot', name: 'Robot', icon: Wrench },
  { id: 'team', name: 'Team', icon: Users }
]

export default function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState('robot')
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const filteredPhotos = photos.filter(photo => photo.category === selectedCategory)

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo)
    setCurrentIndex(filteredPhotos.findIndex(p => p.id === photo.id))
  }

  const closeLightbox = () => {
    setSelectedPhoto(null)
  }

  const navigatePhoto = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredPhotos.length
      : (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length
    
    setCurrentIndex(newIndex)
    setSelectedPhoto(filteredPhotos[newIndex])
  }

  return (
    <>
      <section className="bg-gradient-to-b from-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              PHOTO <span className="text-red-500">GALLERY</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Behind the scenes moments, championship victories, and engineering excellence captured in action.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-mono text-sm transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-red-500 text-black font-bold'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
                whileHover={{ y: -3 }}
                whileTap={{ y: 0 }}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Photo Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="wait">
              {filteredPhotos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 20px 40px rgba(239, 68, 68, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative overflow-hidden rounded-lg bg-gray-800 cursor-pointer transition-all duration-300 hover:ring-2 hover:ring-red-500/50"
                  onClick={() => openLightbox(photo)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>


                  {/* Location and Photographer/Year Info */}
                  <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-2 rounded-lg transition-all duration-300 group-hover:bg-red-500/80 group-hover:scale-105">
                    <div className="text-xs font-mono">
                      <div className="text-red-400 group-hover:text-white transition-colors duration-300">@{photo.location}</div>
                      <div className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                        {photo.category === 'robot' ? photo.photographer : photo.year}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredPhotos.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Camera className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-500 font-mono">No photos found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-60 p-2 bg-gray-800 hover:bg-red-500 text-white rounded-lg"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigatePhoto('prev')
              }}
              className="absolute left-6 z-60 p-3 bg-gray-800 hover:bg-red-500 text-white rounded-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                navigatePhoto('next')
              }}
              className="absolute right-6 z-60 p-3 bg-gray-800 hover:bg-red-500 text-white rounded-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Photo Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-w-[90vw] max-h-[80vh] w-full h-full">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>

              {/* Photo Info */}
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold font-mono mb-2">
                  @{selectedPhoto.location} - {selectedPhoto.category === 'robot' ? selectedPhoto.photographer : selectedPhoto.year}
                </h3>
                
                {/* Photo Counter */}
                <div className="mt-4 text-gray-500 font-mono text-sm">
                  {currentIndex + 1} of {filteredPhotos.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}