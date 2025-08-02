import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Star, Heart, Coffee } from 'lucide-react'
import logoSvg from '../assets/logo.svg'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showDonateDropdown, setShowDonateDropdown] = useState(false)
  const [isStarHovered, setIsStarHovered] = useState(false)
  const [isHeartHovered, setIsHeartHovered] = useState(false)
  const donateRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (donateRef.current && !donateRef.current.contains(event.target)) {
        setShowDonateDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 100)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Screenshots', href: '#screenshots' },
    { name: 'Install', href: '#install' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const openChromeStore = () => {
    window.open('https://chromewebstore.google.com/search/statsense', '_blank')
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled 
            ? 'glass border-primary-500/20 shadow-xl' 
            : 'bg-dark-950/10 backdrop-blur-sm border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => scrollToSection('#home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                <img src={logoSvg} alt="Statsense Logo" className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold gradient-text">Statsense</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.name}
                </motion.button>
              ))}
              
              <div className="flex items-center gap-3">
                <motion.button
                  onClick={openChromeStore}
                  className="btn-primary text-white font-medium px-6 py-2 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Add to Chrome
                </motion.button>
                
                {/* Star Rating Button */}
                <div className="relative group">
                  <motion.button
                    onClick={openChromeStore}
                    onMouseEnter={() => setIsStarHovered(true)}
                    onMouseLeave={() => setIsStarHovered(false)}
                    className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-yellow-200/10 transition-all duration-300 border border-white/10 hover:border-yellow-300/30"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Star 
                      className={`w-4 h-4 transition-all duration-300 ${
                        isStarHovered 
                          ? 'text-yellow-300 fill-yellow-300' 
                          : 'text-gray-400'
                      }`}
                    />
                  </motion.button>
                  
                  {/* Tooltip */}
                  <div className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50`}>
                    Leave us a rating!
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900"></div>
                  </div>
                </div>

                {/* Donate Button with Dropdown */}
                <div className="relative group" ref={donateRef}>
                  <motion.button 
                    onClick={() => setShowDonateDropdown(!showDonateDropdown)}
                    onMouseEnter={() => setIsHeartHovered(true)}
                    onMouseLeave={() => setIsHeartHovered(false)}
                    className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-red-200/10 transition-all duration-300 border border-white/10 hover:border-red-300/30"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Heart className={`w-4 h-4 transition-all duration-300 ${
                      isHeartHovered 
                        ? 'text-red-400 fill-red-400' 
                        : 'text-gray-400'
                    }`} />
                  </motion.button>
                  
                  {/* Tooltip */}
                  <div className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50`}>
                    Support us!
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900"></div>
                  </div>
                  
                  {/* Dropdown */}
                  <AnimatePresence>
                    {showDonateDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full mt-2 right-0 bg-gray-900/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/10 p-3 min-w-40 z-50"
                      >
                        <a
                          href="https://paypal.me/victorurumov"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors duration-200 text-white text-sm"
                        >
                          <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center">
                            <span className="text-xs font-bold">PP</span>
                          </div>
                          PayPal
                        </a>
                        <a
                          href="https://ko-fi.com/statsense"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors duration-200 text-white text-sm"
                        >
                          <Coffee className="w-4 h-4 text-orange-400" />
                          Ko-fi
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden"
          >
            <div className="glass border-b border-white/10 mx-4 rounded-2xl">
              <div className="p-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={index}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-200 font-medium py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
                <motion.button
                  onClick={openChromeStore}
                  className="w-full btn-primary text-white font-medium py-3 rounded-lg mt-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                >
                  Add to Chrome
                </motion.button>
                
                <div className="flex gap-3 mt-4">
                  <motion.button
                    onClick={openChromeStore}
                    className="flex-1 glass text-white font-medium py-3 rounded-lg border border-white/10 flex items-center justify-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (navItems.length + 1) * 0.1 }}
                  >
                    <Star className="w-4 h-4 text-yellow-300" />
                    Rate
                  </motion.button>
                  
                  <motion.a
                    href="https://paypal.me/victorurumov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 glass text-white font-medium py-3 rounded-lg border border-white/10 flex items-center justify-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (navItems.length + 2) * 0.1 }}
                  >
                    <Heart className="w-4 h-4 text-red-400" />
                    Donate
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
