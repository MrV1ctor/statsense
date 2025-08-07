import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import Screenshots from './components/Screenshots'
import Installation from './components/Installation'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'

function App() {
  const [imageModal, setImageModal] = useState({ 
    isOpen: false, 
    image: null, 
    title: null, 
    images: null, 
    currentIndex: 0 
  })

  // Check for hash on load to auto-open modals
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash === 'privacy' || hash === 'terms') {
      // Scroll to footer and trigger modal
      setTimeout(() => {
        const footer = document.querySelector('footer')
        if (footer) {
          footer.scrollIntoView({ behavior: 'smooth' })
        }
        // Trigger the appropriate modal
        const button = document.querySelector(`[data-modal="${hash}"]`)
        if (button) {
          button.click()
        }
      }, 100)
    }
  }, [])

  const openImageModal = (image, title, images = null, currentIndex = 0) => {
    setImageModal({ isOpen: true, image, title, images, currentIndex })
  }

  const closeImageModal = () => {
    setImageModal({ isOpen: false, image: null, title: null, images: null, currentIndex: 0 })
  }

  const nextImage = () => {
    if (imageModal.images && imageModal.images.length > 1) {
      const nextIndex = (imageModal.currentIndex + 1) % imageModal.images.length
      setImageModal(prev => ({
        ...prev,
        currentIndex: nextIndex,
        image: imageModal.images[nextIndex].image,
        title: imageModal.images[nextIndex].title
      }))
    }
  }

  const prevImage = () => {
    if (imageModal.images && imageModal.images.length > 1) {
      const prevIndex = imageModal.currentIndex === 0 
        ? imageModal.images.length - 1 
        : imageModal.currentIndex - 1
      setImageModal(prev => ({
        ...prev,
        currentIndex: prevIndex,
        image: imageModal.images[prevIndex].image,
        title: imageModal.images[prevIndex].title
      }))
    }
  }

  return (
    <div className="relative bg-dark-950 min-h-screen overflow-hidden">
      <ParticleBackground />
      <Navigation />
      <Hero />
      <Features onImageClick={openImageModal} />
      <Screenshots onImageClick={openImageModal} />
      <Installation />
      <Footer />
      
      {/* Global Image Modal - Rendered at the end to be on top of everything */}
      <AnimatePresence>
        {imageModal.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeImageModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-7xl max-h-[90vh] glass rounded-2xl overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-gray-700 flex justify-between items-center">
                <h3 className="text-white font-bold text-xl">{imageModal.title}</h3>
                <button
                  onClick={closeImageModal}
                  className="text-gray-400 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center justify-center p-6 relative">
                <img 
                  src={imageModal.image} 
                  alt={imageModal.title}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
                />
                
                {/* Navigation arrows - only show if we have multiple images */}
                {imageModal.images && imageModal.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 glass w-14 h-14 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors duration-200 z-10"
                    >
                      <ChevronLeft className="w-7 h-7 text-white" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 glass w-14 h-14 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors duration-200 z-10"
                    >
                      <ChevronRight className="w-7 h-7 text-white" />
                    </button>
                    
                    {/* Image counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-full">
                      <span className="text-white text-sm font-medium">
                        {imageModal.currentIndex + 1} / {imageModal.images.length}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
