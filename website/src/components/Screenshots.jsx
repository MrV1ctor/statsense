import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, Maximize2 } from 'lucide-react'

// Import screenshot images
import Screenshot2 from '../assets/Screenshot2.png'
import Screenshot3 from '../assets/Screenshot3.png'
import Screenshot4 from '../assets/Screenshot4.png'
import Screenshot5 from '../assets/Screenshot5.png'

const Screenshots = ({ onImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const screenshots = [
    {
      title: "Overall Performance Dashboard",
      description: "Track your betting performance with comprehensive statistics including total wagered, net profit, win rate, and interactive performance charts.",
      image: Screenshot2,
      features: ["Total statistics", "Performance charts", "Profit tracking", "Win rate analysis"]
    },
    {
      title: "Individual Streamer Stats",
      description: "Click any streamer to see detailed statistics and previous predictions with profit/loss breakdown and performance history.",
      image: Screenshot3,
      features: ["Streamer-specific data", "Prediction history", "P&L breakdown", "Performance trends"]
    },
    {
      title: "Interactive Performance Charts",
      description: "Hover over charts to see detailed information about your bets and see overall profit/loss trends over time.",
      image: Screenshot4,
      features: ["Interactive tooltips", "Time-based filtering", "Detailed bet info", "Trend analysis"]
    },
    {
      title: "Live Prediction Overlay",
      description: "Non-obtrusive menu showing prediction insights, auto-claiming bonuses, and expected return values for informed betting.",
      image: Screenshot5,
      features: ["Prediction insights", "Auto-claim bonuses", "Live detection", "Expected return values"]
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  return (
    <section id="screenshots" className="relative py-20 px-6 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            See it in <span className="gradient-text">Action</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the power of StatSense with real screenshots from the extension
          </p>
        </motion.div>

        {/* Main Screenshot Carousel */}
        <div className="relative">
          <div className="glass rounded-3xl overflow-hidden">
            <div className="relative min-h-[600px] sm:min-h-[700px] md:min-h-[450px] lg:h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  {/* Screenshot Container - Full width on larger screens */}
                  <div className="grid grid-cols-1 xl:grid-cols-5 min-h-full">
                    {/* Image Side - Takes up more space */}
                    <div className="relative group cursor-pointer xl:col-span-3 h-[300px] sm:h-[350px] md:h-[250px] lg:h-[300px] xl:h-full" onClick={() => onImageClick(screenshots[currentIndex].image, screenshots[currentIndex].title, screenshots, currentIndex)}>
                      <div className="h-full bg-gradient-to-br from-dark-800 to-dark-900 flex items-center justify-center p-4 xl:rounded-l-3xl overflow-hidden">
                        <img 
                          src={screenshots[currentIndex].image} 
                          alt={screenshots[currentIndex].title}
                          className="w-full h-full object-contain shadow-2xl"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center xl:rounded-l-3xl">
                        <Maximize2 className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content Side - Smaller on larger screens */}
                    <div className="p-4 md:p-6 xl:p-12 flex flex-col justify-center xl:col-span-2">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h3 className="text-lg md:text-xl xl:text-3xl font-bold text-white mb-3 md:mb-4">
                          {screenshots[currentIndex].title}
                        </h3>
                        <p className="text-gray-300 text-sm md:text-base xl:text-lg mb-4 md:mb-6 xl:mb-8 leading-relaxed">
                          {screenshots[currentIndex].description}
                        </p>

                        {/* Features List */}
                        <div className="space-y-1 md:space-y-2 xl:space-y-3">
                          {screenshots[currentIndex].features.map((feature, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + index * 0.1 }}
                              className="flex items-center gap-3"
                            >
                              <div className="w-2 h-2 bg-primary-400 rounded-full flex-shrink-0"></div>
                              <span className="text-gray-300 text-xs md:text-sm xl:text-base">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows - Positioned inside the carousel */}
              <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 glass w-16 h-16 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200 z-10 shadow-xl border border-white/10 hover:border-white/20"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 glass w-16 h-16 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200 z-10 shadow-xl border border-white/10 hover:border-white/20"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </button>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary-400 w-8' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Screenshots
